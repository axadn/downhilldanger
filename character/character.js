import GameObject from "../game_object/game_object";
const SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE = 16;
import * as MathUtils from "../utils/math_utils";

export default class Character extends GameObject{
  constructor(mesh, boundingBox, slope, transformationMatrix = MathUtils.identityMatrix4){
    super(mesh, transformationMatrix);
    this.mesh = mesh;
    this.boundingBox = boundingBox;
    this.speed = 2;
    this.fallSpeed = 0;
    this.slope = slope;
    this.currentSegmentNumber = 0;
  }
  update(){
    this._getSurfaceData();
    const distanceFromSurface = MathUtils.vectorSquareMag(MathUtils.subtractVectors
        (MathUtils.mat4TranslationComponent(
          this.transformationMatrix),this.surfacePoint));
    if(distanceFromSurface > SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE){
      this._fall();
    }
    else{
      this.fallSpeed = 0;
    }
    this._moveForward();
  }

  _moveForward(){
    let worldPos = MathUtils.mat4TranslationComponent(
      this.transformationMatrix
    );
    let nextWorldPos = worldPos;
    let worldMoveVector = MathUtils.projectVectorOntoPlane(
      this._calculateWorldMoveVector(), this.surfacePlaneNormal);
    let transformationMatrixAfterMove = this._transformationMatrixAfterMove(worldMoveVector);
    nextWorldPos = MathUtils.mat4TranslationComponent(
      transformationMatrixAfterMove);

    if(this.currentSegmentNumber < slope.segmentMatrices.length -1 &&
      slope.positionIsPastSegmentStart(nextWorldPos,
      this.currentSegmentNumber + 1)){
      ++this.currentSegmentNumber;
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
  }

  _getSurfaceData(){
    let worldPos = MathUtils.mat4TranslationComponent(
      this.transformationMatrix
    );
    this.floorTriangle = this.slope.getSurroundingTriangle(worldPos, this.currentSegmentNumber)||
      this.floorTriangle;
    this.surfacePlaneNormal = MathUtils.planeNormal(this.floorTriangle[0], this.floorTriangle[1],
      this.floorTriangle[2]);
    this.surfacePoint = MathUtils.vectorTriangleIntersection(worldPos, [0,0,-1],
    this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]);
  }
  _fall(){
    this.transformationMatrix = MathUtils.mat_4_multiply(this.transformationMatrix,
      MathUtils.translationMatrix(0,0, -1 * this.fallSpeed));
      this.fallSpeed = this.fallSpeed + 0.02;
  }
  _calculateWorldMoveVector(){
    return MathUtils.multiplyVec4ByMatrix4(
      MathUtils.inverse_mat4_rot_pos(MathUtils.mat4RotationComponent(
        this.transformationMatrix)),
       [0,this.speed,0,1]).slice(0,3);
  }
  _transformationMatrixAfterMove(worldMoveVector){
    return MathUtils.mat_4_multiply(this.transformationMatrix,
      MathUtils.translationMatrix(worldMoveVector[0], worldMoveVector[1], worldMoveVector[2]));
  }
}
