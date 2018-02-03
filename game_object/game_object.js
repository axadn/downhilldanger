export const DEFAULT_ANIMATION_FRAMERATE = 60;
export const UPDATE_INTERVAL = 33;
const ANGULAR_DRAG = 0.3;
const DRAG = 0.4;
import * as MathUtils from "../utils/math_utils";
export default class GameObject {
  constructor(mesh, transformationMatrix = MathUtils.identityMatrix4){
    this.mesh = mesh;
    this._transformationMatrix = transformationMatrix.slice(0,16);
    this._position = MathUtils.mat4TranslationComponent(transformationMatrix);
    this._rotation = MathUtils.IdentityQuaternion;
    this.velocity = [0,0,0];
    setInterval(this.update.bind(this), UPDATE_INTERVAL);
    this.angularVelocity = MathUtils.IdentityQuaternion;
  }

  update(timestamp){
    this._applyVelocityStep();
    this._applyAngularVelocityStep();
    let localVelocity = this.inverseTransformDirection(this.velocity);
    this._applyDragStep();
    this._applyAngularDragStep();
    this.velocity = this.transformDirection(localVelocity);
  }

  _applyVelocityStep(){
    this.setPosition(MathUtils.addVectors(this._position, this.velocity));
  }
  _applyAngularVelocityStep(){
    this.setRotation(MathUtils.multiplyQuaternions(this.angularVelocity,this.getRotation()));
  }
  addAngularVelocity(quat){
    quat = MathUtils.vectorNormalize(quat);
    this.angularVelocity =  MathUtils.multiplyQuaternions(this.angularVelocity, quat);
    this.angularVelocity = MathUtils.vectorNormalize(this.angularVelocity);
  }
  _applyDragStep(){
    for(let i = 0; i < this.velocity.length; ++i){
      this.velocity[i] -= this.velocity[i] * DRAG;
    }
  }
  _applyAngularDragStep(){
    this.angularVelocity = MathUtils.scaleQuaternion(this.angularVelocity, 1 - ANGULAR_DRAG);
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
