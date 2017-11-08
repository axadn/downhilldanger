import GameObject from "../game_object/game_object";
const SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE = 4;
const EDGE_COLLISION_DAMP_FACTOR = 0.2;
const MAX_SPEED = 4;
const EDGE_COLLISION_PADDING_ROTATION = 0.5;
const ACCELERATION = 0.02;
const STEER_SPEED = 0.02;

const SNOWBOARD_RESTITUTION = 0.3;
const SNOWBOARD_FRICTION = [0.187,0.01,0.187,1];
import * as MathUtils from "../utils/math_utils";
import {UPDATE_INTERVAL} from "../game_object/game_object";
export default class Character extends GameObject{
  constructor(mesh, boundingBox, slope, transformationMatrix = MathUtils.identityMatrix4){
    super(mesh, transformationMatrix);
    this.mesh = mesh;
    this.boundingBox = boundingBox;
    this.speed = 0.2;
    this.fallSpeed = 0.2;
    this.slope = slope;
    this.currentSegmentNumber = 0;
    this.input = {left: false, right: false, back: false}
    this.velocity = [0,1,0];
    this.angularVelocityAxis = [0,0,1,0];
    this.angularVelocityAngle = 0;
    this.friction = SNOWBOARD_FRICTION;
    this.restitution = SNOWBOARD_RESTITUTION;
    this.boxDimensions = [0.5,5,0.5];
    this.setPosition([0,0,16]);

  }
  update(){
    this._ensureAboveSurface();
    this._handleControls();
    this._getSurfaceData();
    this._moveForward();
    const surfaceOffset = MathUtils.subtractVectors
      (this.getPosition(),this.surfacePoint);
    const distanceFromSurface = MathUtils.vectorSquareMag(surfaceOffset);

    this.velocity[2] -= this.fallSpeed;
    if(distanceFromSurface < SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE){
      this._planeAlign();
      this.velocity = MathUtils.projectVectorOntoPlane(this.velocity, this.transformDirection([0,0,1]));
      let localVelocity = this.inverseTransformDirection(this.velocity);
      this._applyFriction(localVelocity);
      this.velocity = this.transformDirection(localVelocity);
    }
    super.update();
  }
  _getSurfaceData(){
    let localDownVector = MathUtils.multiplyVec4ByMatrix4(
      this.slope.segmentMatrices[this.currentSegmentNumber],
      [0,0,-1,0]
    );
    let newFloorTriangle = this.slope.getSurroundingTriangle(this.getPosition(),this.currentSegmentNumber);
    this.floorTriangle = newFloorTriangle || this.floorTriangle;
    this.surfacePlaneNormal = MathUtils.planeNormal(this.floorTriangle[0], this.floorTriangle[1],
      this.floorTriangle[2]);
    this.surfacePoint = MathUtils.vectorTriangleIntersection(this.getPosition(),
     MathUtils.multiplyVec4ByMatrix4(this.slope.segmentMatrices[this.currentSegmentNumber],[0,0,-1,0]),
     this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]);
  }
  _ensureAboveSurface(){
    if(!this.floorTriangle) return;
    if(!MathUtils.pointIsAbovePlane(this.getPosition(), this.floorTriangle[0],
        this.floorTriangle[1], this.floorTriangle[2])){
        const upVector = MathUtils.multiplyVec4ByMatrix4(
          this.slope.segmentMatrices[this.currentSegmentNumber],
          [0,0,1,0]);
        this.setPosition(MathUtils.vectorTriangleIntersection(this.getPosition(),upVector,
            this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]));
    }
  }
  _planeAlign(){
    const surfaceNormalLocal = MathUtils.multiplyVec4ByMatrix4(
        MathUtils.inverse_mat4_rot_pos(MathUtils.mat4RotationComponent(
          this.getTransformationMatrix()
        )),
        this.surfacePlaneNormal.concat(1)
    );
    const planeAlignAxis = MathUtils.vectorCross(
      surfaceNormalLocal.slice(0,3), [0,0,1]);
    const planeAlignAngle = MathUtils.angleBetweenVectors([0,0,1],
      surfaceNormalLocal.slice(0,3));
      this.addAngularVelocity(MathUtils.axisAngleToQuaternion(
        planeAlignAxis, planeAlignAngle/5));
  }
  _applyFriction(localVelocity){
    let signFlip;
    for(let i = 0; i < localVelocity.length; ++i){
      if (Math.abs(localVelocity[i]) < Math.abs(this.friction[i])){
        localVelocity[i] = 0;
      }
      else{
        signFlip = localVelocity[i] < 0 ? -1 : 1;
        localVelocity[i] -= this.friction[i] * signFlip;
      }
    }
  }
  _steer(direction){
    this.addAngularVelocity(
      MathUtils.axisAngleToQuaternion(
        this.transformDirection([0,0,1]),
      -1 * direction * STEER_SPEED)
    );
  }

  _handleControls(){
    if(this.input.left ? !this.input.right : this.input.right){
      if(this.input.right){
        this._steer(-1);
      }
      else{
        this._steer(1);
      }
    }
  }
  _handleEdgeCollision(collisionData){
    this.velocity = MathUtils.scaleVector(
        MathUtils.bounceVectorOffPlane(this.velocity,
          collisionData.normal),
        this.restitution
    ).concat([0]);
    let pushBackVector = MathUtils.vectorNormalize(collisionData.normal);
    pushBackVector = MathUtils.scaleVector(pushBackVector, 2);
    this.setPosition(MathUtils.addVectors(this.getPosition(),
      pushBackVector));
    const collisionOffsetVector = MathUtils.subtractVectors(
      collisionData.colliderPoint.slice(0,3),
      this.getPosition()
    );
    let addAngularVelocAngle = MathUtils.angleBetweenVectors(
      MathUtils.scaleVector(collisionData.normal, -1),
      collisionOffsetVector
    );
    addAngularVelocAngle /= 2;
    addAngularVelocAngle *= MathUtils.vectorMag(this.velocity);
    const addAngularVelocAxis = MathUtils.vectorCross(
      collisionData.normal,
      collisionOffsetVector
    );
     this.addAngularVelocity(MathUtils.axisAngleToQuaternion(
       addAngularVelocAxis, addAngularVelocAngle)
     );
  };
  _handleTreeCollision(collisionData){
    this.velocity = MathUtils.scaleVector(
      this.velocity,
      -1 * this.restitution
    );
    this.setPosition(this.transformPoint([0,-2,0]));
  }
  _moveForward(){
    const edgeCollisionData = this.slope.boxIsBeyondEdge(
      this.getTransformationMatrix(), this.boxDimensions, this.currentSegmentNumber);
    const obstacleCollisionData = this.slope.positionCollidesWithObstacle(
      this.getPosition(), this.currentSegmentNumber);

    if(edgeCollisionData){
      this._handleEdgeCollision(edgeCollisionData);
      return;
    }
    else if(obstacleCollisionData){
      this._handleTreeCollision(obstacleCollisionData);
    }
    let nextWorldPos = MathUtils.addVectors(MathUtils.projectVectorOntoPlane(
      this.velocity, this.surfacePlaneNormal), this.getPosition());
    if(this.currentSegmentNumber < this.slope.segmentMatrices.length -1 &&
      slope.positionIsPastSegmentStart(nextWorldPos,
      this.currentSegmentNumber + 1)){
      ++this.currentSegmentNumber;
      if(this.slope.notifyOfCharacterSegmentNumber(this.currentSegmentNumber)){
        --this.currentSegmentNumber;
      }
      let triangleAfterMove = this.slope.getSurroundingTriangle(nextWorldPos,
         this.currentSegmentNumber) || this.floorTriangle;
    }
    else if (this.currentSegmentNumber > 0 && !slope.positionIsPastSegmentStart(nextWorldPos,this.currentSegmentNumber)) {
      --this.currentSegmentNumber;
      let triangleAfterMove = this.slope.getSurroundingTriangle(nextWorldPos,
         this.currentSegmentNumber) || this.floorTriangle;
    }
  }
}
