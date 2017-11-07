export const DEFAULT_ANIMATION_FRAMERATE = 60;
export const UPDATE_INTERVAL = 33;
import * as MathUtils from "../utils/math_utils";
export default class GameObject {
  constructor(mesh, transformationMatrix = MathUtils.identityMatrix4){
    this.mesh = mesh;
    this._transformationMatrix = transformationMatrix;
    this._position = [0,0,0];
    this._rotation = MathUtils.IdentityQuaternion;
    setInterval(this.update.bind(this), UPDATE_INTERVAL);
  }
  update(timestamp){

  }
  transformPoint(point){
    return MathUtils.multiplyVec4ByMatrix4(
      this._transformationMatrix, point.concat([1])).slice(0,3);

  }
  transformDirection(direction){
    return MathUtils.multiplyVec4ByMatrix4(
      MathUtils.mat4RotationComponent(this._transformationMatrix),
       direction.concat([1])).slice(0,3);
  }
  inverseTransformPoint(point){
    return MathUtils.multiplyVec4ByMatrix4(
      MathUtils.inverse_mat4_rot_pos(this._transformationMatrix),
      point.concat([1])
    ).slice(0,3);
  }
  inverseTransformDirection(direction){
    return MathUtils.multiplyVec4ByMatrix4(
      MathUtils.inverse_mat4_rot_pos(
        MathUtils.mat4RotationComponent(this._transformationMatrix)
      ),
      direction.concat([1])
    ).slice(0,3);
  }
  /*
   0  1   2  3
   4  5   6  7
   8  9  10 11
  12 13  14 15
  */
  setPosition(position){
    this._position = position;
    this._transformationMatrix[12] = position[0];
    this._transformationMatrix[13] = position[1];
    this._transformationMatrix[14] = position[2];
  }
  getRotation(){
    return this._rotation;
  }
  getPosition(){
    return this._position;
  }
  setRotation(rotQuat){
    this._rotation = MathUtils.vectorNormalize(rotQuat);
    MathUtils.setMatrixRotInPlace(this._transformationMatrix,this._rotation);
  }
  getTransformationMatrix(){
    return this._transformationMatrix;
  }
  playAnimation(name, loop = true){
    this.isPlayingAnimation = true;
    this.currentAnimation = name;
    this.currentAnimationFrame = 0;
    this.animationWillLoop = loop;
    this.currentAnimationFramerate = DEFAULT_ANIMATION_FRAMERATE;
  }
  updateFrame(){
    ++this.currentAnimationFrame;
    if(this.currentAnimationFrame = this.mesh.animations[this.currentAnimation].length){
      if(this.animationWillLoop){
        this.currentAnimationFrame = 0;
      }
      else{
        --this.currentAnimationFrame;
        this.isPlayingAnimation = false;
      }
    }
  }
  shouldUpdate(timestamp){
    return (this.lastTimeStamp &&
      timestamp - this.lastTimeStamp > 1000 / this.currentAnimationFramerate);
  }
}
