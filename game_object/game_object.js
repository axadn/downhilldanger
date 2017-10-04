const DEFAULT_ANIMATION_FRAMERATE = 60;
const UPDATE_INTERVAL = 33;
import * as MathUtils from "../utils/math_utils";
export default class GameObject {
  constructor(mesh, transformationMatrix = MathUtils.identityMatrix4){
    this.mesh = mesh;
    this.transformationMatrix = transformationMatrix;
    setInterval(this.update.bind(this), UPDATE_INTERVAL);
  }
  update(){

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
