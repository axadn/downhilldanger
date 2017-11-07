import GameObject from "../game_object/game_object";
const SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE = 35;
const EDGE_COLLISION_DAMP_FACTOR = 0.2;
const MAX_SPEED = 4;
const EDGE_COLLISION_PADDING_ROTATION = 0.5;
const ACCELERATION = 0.02;
const STEER_SPEED = 0.09;
const ANGULAR_DRAG = 0.3;
const DRAG = 0.1;
const SNOWBOARD_RESTITUTION = 0.8;
const SNOWBOARD_FRICTION = [0.187,0,0.187,1];
import * as MathUtils from "../utils/math_utils";
import {UPDATE_INTERVAL} from "../game_object/game_object";
export default class Character extends GameObject{
  constructor(mesh, boundingBox, slope, transformationMatrix = MathUtils.identityMatrix4){
    super(mesh, transformationMatrix);
    this.mesh = mesh;
    this.boundingBox = boundingBox;
    this.speed = 0.2;
    this.fallSpeed = 0;
    this.slope = slope;
    this.currentSegmentNumber = 0;
    this.input = {left: false, right: false, back: false}
    this.velocity = [0,0,0,0];
    this.angularVelocityAxis = [0,0,1,0];
    this.angularVelocityAngle = 0;
    this.friction = SNOWBOARD_FRICTION;
    this.restitution = SNOWBOARD_RESTITUTION;
    this.boxDimensions = [0.5,5,0.5];
    this.setPosition([0,0,16]);
    this.angularVelocity = MathUtils.IdentityQuaternion;
  }
  update(){
    this._handleControls();
    this._getSurfaceData();
    const surfaceOffset = MathUtils.subtractVectors
      (this.getPosition(),this.surfacePoint);
    const distanceFromSurface = MathUtils.vectorSquareMag(surfaceOffset);
    if(isNaN(distanceFromSurface)){
    }
    let localVelocity = this.inverseTransformDirection(this.velocity);
    if(distanceFromSurface > SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE){
      this._fall();
    }
    else{
      this.fallSpeed = 0;
      this._accelerate(localVelocity);
      this._applyFriction(localVelocity);
     }
    this._applyDrag(localVelocity);
    this._applyAngularDrag();
    this.velocity = this.transformDirection(localVelocity);
    this._applyAngularVelocity();
    this._moveForward();
  }
  addAngularVelocity(quat){
    this.angularVelocity =  MathUtils.multiplyQuaternions(this.angularVelocity, quat);
    this.angularVelocity = MathUtils.vectorNormalize(this.angularVelocity);
  }
  _applyDrag(localVelocity){
    for(let i = 0; i < localVelocity.length; ++i){
      this.velocity[i] -= this.velocity[i] * DRAG;
    }
  }
  _applyAngularVelocity(){
    debugger;
     this.setRotation(MathUtils.multiplyQuaternions(this.getRotation(),
     this.angularVelocity));
  }
  _applyAngularDrag(){
    this.angularVelocity = MathUtils.scaleQuaternion(this.angularVelocity, 1 - ANGULAR_DRAG);
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
  _accelerate(localVelocity){
    localVelocity[1] += ACCELERATION;
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
    this.setPosition(this.transformPoint(pushBackVector));
    const collisionOffsetVector = MathUtils.subtractVectors(
      collisionData.colliderPoint.slice(0,3),
      this.getPosition()
    );
    let addAngularVelocAngle = MathUtils.angleBetweenVectors(
      MathUtils.scaleVector(collisionData.normal, -1),
      collisionOffsetVector
    );
    addAngularVelocAngle /= 200;
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
    const edgeCollisionData = this.slope.boxIsBeyondEdge(this.getTransformationMatrix(), this.boxDimensions, this.currentSegmentNumber);
    const obstacleCollisionData = this.slope.positionCollidesWithObstacle(this.getPosition(), this.currentSegmentNumber);

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

      //  if(!MathUtils.pointIsAbovePlane(nextWorldPos, triangleAfterMove[0],
      //    triangleAfterMove[1], triangleAfterMove[2])){
      //    nextWorldPos = MathUtils.vectorTriangleIntersection(nextWorldPos, [0,0,-1],
      //        triangleAfterMove[0], triangleAfterMove[1], triangleAfterMove[2]);
      //  }
    }

    this.setPosition(nextWorldPos);
    this._getSurfaceData();
    const localUp = this.transformDirection([0,0,1]);
    const planeAlignAxis = MathUtils.vectorCross(
      this.surfacePlaneNormal, localUp);
    const planeAlignAngle = MathUtils.angleBetweenVectors(localUp,
      this.surfacePlaneNormal);
        this.addAngularVelocity(MathUtils.axisAngleToQuaternion(
          planeAlignAxis, planeAlignAngle/50));
  }

  _getSurfaceData(){

    let localDownVector = this.transformDirection([0,0,-1]);
    let newFloorTriangle = this.slope.getSurroundingTriangle(this.getPosition(),this.currentSegmentNumber);
    // if(!newFloorTriangle){
    //   let lastValidSurfaceXY = this.surfacePoint.slice();
    //   lastValidSurfaceXY[2] = 0;
    //   let currentPosXY = MathUtils.mat4TranslationComponent(this.transformationMatrix);
    //   currentPosXY[2] = 0;
    //   const posOffset = MathUtils.subtractVectors(currentPosXY, lastValidSurfaceXY);
    //   this.transformationMatrix = MathUtils.mat_4_multiply(this.transformationMatrix,
    //     MathUtils.translationMatrix(posOffset[0], posOffset[1], posOffset[2])
    //   );
    //   newFloorTriangle = this.slope.getSurroundingTriangle(worldPos,this.currentSegmentNumber);
    // }
    this.floorTriangle = newFloorTriangle || this.floorTriangle;
    this.surfacePlaneNormal = MathUtils.planeNormal(this.floorTriangle[0], this.floorTriangle[1],
      this.floorTriangle[2]);
    this.surfacePoint = MathUtils.vectorTriangleIntersection(this.transformPoint([0,0,1]),
     this.transformDirection([0,0,-1]),
     this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]);
  }
  _fall(){
    this.setPosition(MathUtils.addVectors(this.getPosition(), [0,0,-1* this.fallSpeed]));
    this.fallSpeed = this.fallSpeed + 0.02;
  }
}
