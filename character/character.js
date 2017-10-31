import GameObject from "../game_object/game_object";
const SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE = 0.4;
const EDGE_COLLISION_DAMP_FACTOR = 0.2;
const MAX_SPEED = 4;
const EDGE_COLLISION_PADDING_ROTATION = 0.5;
const ACCELERATION = 0.02;
const STEER_SPEED = 0.07;
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
    this.friction = SNOWBOARD_FRICTION;
    this.restitution = SNOWBOARD_RESTITUTION;
  }
  update(){
    this._handleConrols();
    this._getSurfaceData();
    const distanceFromSurface = MathUtils.vectorSquareMag(MathUtils.subtractVectors
        (MathUtils.mat4TranslationComponent(
          this.transformationMatrix),this.surfacePoint));
    if(isNaN(distanceFromSurface)){
    }
    let localVelocity = MathUtils.multiplyVec4ByMatrix4(
      MathUtils.inverse_mat4_rot_pos(
        MathUtils.mat4RotationComponent(this.transformationMatrix)),
      this.velocity
    );
    if(distanceFromSurface > SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE){
      this._fall();
    }
    else{
      this.fallSpeed = 0;
      this._accelerate(localVelocity);
      this._applyFriction(localVelocity);
    }
    this._applyDrag(localVelocity);
    this.velocity = MathUtils.multiplyVec4ByMatrix4(
      MathUtils.mat4RotationComponent(this.transformationMatrix),
      localVelocity
    )
    this._moveForward();
  }
  _applyDrag(localVelocity){
    for(let i = 0; i < localVelocity.length; ++i){
      this.velocity[i] -= this.velocity[i] * DRAG;
    }
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
    const zRot = MathUtils.zRotationMatrix(direction * STEER_SPEED);
    this.transformationMatrix = MathUtils.mat_4_multiply(
      zRot,
      this.transformationMatrix,

    );
  }
  _convertLocalRotMatToWorldTransform(localRot){
    return MathUtils.mat_4_multiply(
      localRot,
      MathUtils.mat4RotationComponent(this.transformationMatrix)
    );
  }
  _handleConrols(){
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
    pushBackVector = MathUtils.scaleVector(pushBackVector, this.speed*10);
    this.transformationMatrix = MathUtils.mat_4_multiply(this.transformationMatrix,
      MathUtils.translationMatrix(pushBackVector[0], pushBackVector[1],
      pushBackVector[2])
    );

  };
  _handleTreeCollision(collisionData){
    this.speed *= -0.4;
    this.transformationMatrix = MathUtils.mat_4_multiply(
      this.transformationMatrix,
      MathUtils.translationMatrix(0, -2, 0)
    );

  }
  _moveForward(){
    let worldPos = MathUtils.mat4TranslationComponent(
      this.transformationMatrix
    );
    let nextWorldPos = worldPos;
    const edgeCollisionData = this.slope.positionIsBeyondEdge(nextWorldPos, this.currentSegmentNumber);
    const obstacleCollisionData = this.slope.positionCollidesWithObstacle(nextWorldPos, this.currentSegmentNumber);

    if(edgeCollisionData){
      this._handleEdgeCollision(edgeCollisionData);
    }
    else if(obstacleCollisionData){
      this._handleTreeCollision(obstacleCollisionData);
    }
    let worldMoveVector = MathUtils.projectVectorOntoPlane(
      this.velocity, this.surfacePlaneNormal);
    let transformationMatrixAfterMove = this._transformationMatrixAfterMove(worldMoveVector);
    nextWorldPos = MathUtils.mat4TranslationComponent(
      transformationMatrixAfterMove);
    if(this.currentSegmentNumber < this.slope.segmentMatrices.length -1 &&
      slope.positionIsPastSegmentStart(nextWorldPos,
      this.currentSegmentNumber + 1)){
      ++this.currentSegmentNumber;
      if(this.slope.notifyOfCharacterSegmentNumber(this.currentSegmentNumber)){
        --this.currentSegmentNumber;
      }
      let triangleAfterMove = this.slope.getSurroundingTriangle(nextWorldPos,
         this.currentSegmentNumber) || this.floorTriangle;

      if(!MathUtils.pointIsAbovePlane(nextWorldPos, triangleAfterMove[0],
        triangleAfterMove[1], triangleAfterMove[2])){

        nextWorldPos = MathUtils.vectorTriangleIntersection(worldPos, worldMoveVector,
            triangleAfterMove[0], triangleAfterMove[1], triangleAfterMove[2]);

        worldMoveVector = MathUtils.subtractVectors(nextWorldPos, worldPos);
        transformationMatrixAfterMove = MathUtils.mat_4_multiply(this.transformationMatrix,
          MathUtils.translationMatrix(worldMoveVector[0], worldMoveVector[1], worldMoveVector[2])
        );
      }

    }
      this.transformationMatrix = transformationMatrixAfterMove;

    this._getSurfaceData();

     const planeAlign = MathUtils.axisToVec(
         [0,0,1,1],
      MathUtils.multiplyVec4ByMatrix4(
        MathUtils.inverse_mat4_rot_pos(MathUtils.mat4RotationComponent(
          this.transformationMatrix
        )),
        this.surfacePlaneNormal.concat(1)
      )
     );

      this.transformationMatrix = MathUtils.mat_4_multiply(
        planeAlign,
        this.transformationMatrix
      );

    const posAfterSurfaceAlign = MathUtils.mat4TranslationComponent(
        this.transformationMatrix
    )
    const surfaceOffset = MathUtils.subtractVectors(
      this.surfacePoint,
      posAfterSurfaceAlign
    );

    this.transformationMatrix = MathUtils.mat_4_multiply(
      this.transformationMatrix,
      MathUtils.translationMatrix(surfaceOffset[0],
        surfaceOffset[1], surfaceOffset[2])
    );
    console.log(this.transformationMatrix);
  }

  _getSurfaceData(){
    let worldPos = MathUtils.mat4TranslationComponent(
      this.transformationMatrix
    );
    let localDownVector = MathUtils.multiplyVec4ByMatrix4(
      MathUtils.mat4RotationComponent(this.transformationMatrix),
      [0,0,-1,1]
    );
    let newFloorTriangle = this.slope.getSurroundingTriangle(worldPos,this.currentSegmentNumber);
    if(!newFloorTriangle){
      let lastValidSurfaceXY = this.surfacePoint.slice();
      lastValidSurfaceXY[2] = 0;
      let currentPosXY = MathUtils.mat4TranslationComponent(this.transformationMatrix);
      currentPosXY[2] = 0;
      const posOffset = MathUtils.subtractVectors(currentPosXY, lastValidSurfaceXY);
      this.transformationMatrix = MathUtils.mat_4_multiply(this.transformationMatrix,
        MathUtils.translationMatrix(posOffset[0], posOffset[1], posOffset[2])
      );
      newFloorTriangle = this.slope.getSurroundingTriangle(worldPos,this.currentSegmentNumber);
    }
    this.floorTriangle = newFloorTriangle || this.floorTriangle;
    this.surfacePlaneNormal = MathUtils.planeNormal(this.floorTriangle[0], this.floorTriangle[1],
      this.floorTriangle[2]);
    this.surfacePoint = MathUtils.vectorTriangleIntersection(worldPos, localDownVector,
    this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]);
  }
  _fall(){
    this.transformationMatrix = MathUtils.mat_4_multiply(this.transformationMatrix,
      MathUtils.translationMatrix(0,0, -1 * this.fallSpeed));
      this.fallSpeed = this.fallSpeed + 0.02;
  }
  _transformationMatrixAfterMove(worldMoveVector){
    return MathUtils.mat_4_multiply(this.transformationMatrix,
      MathUtils.translationMatrix(worldMoveVector[0], worldMoveVector[1], worldMoveVector[2]));
  }
}
