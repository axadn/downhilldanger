import GameObject from "../game_object/game_object";
const SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE = 4;
const EDGE_COLLISION_DAMP_FACTOR = 0.2;
const EDGE_COLLISION_PADDING_ROTATION = 0.5;
const STEER_SPEED = 0.015;
const STEER_ANIMATION_LERP_SPEED = 0.09;

const SNOWBOARD_RESTITUTION = 0.48;
const SNOWBOARD_FRICTION = [0.187,0.01,0.187,1];
const BREAK_FRICTION = [0.04,0.16,0.04];
const COLLISION_INTENSITY_MIN_VELOCITY = 2;
const COLLISION_INTENSITY_MAX_VELOCITY = 10;
const SPEED_VOLUME_INTENSITY_MIN_VELOCITY = 0.2;
const SPEED_VOLUME_INTENSITY_MAX_VELOCITY = 20;
const HUD_DISPLAY_SPEED_MULTIPLIER = 8;
import * as MathUtils from "../utils/math_utils";
import * as HUD from "../hud/hud";
window.MathUtils = MathUtils;
import * as CollisionUtils from "../utils/collision_utils";
import {UPDATE_INTERVAL} from "../game_object/game_object";
import * as AssetUtils from "../utils/asset_utils";

import snowboarder_data from "../snowboarder";
import snowboardActions from "../actions";
import createMesh from "../game_object/mesh";
import AudioMixer from "../audio/mixer";

const effectBuffers= {};
export default function createCharacter(slope){
  return new Promise((resolve, reject)=>{
    const runningJobs = {};
    let processedCharMesh = undefined;

    const soundEffects = ["hit", "collect", "sliding"];

    const finishJob = name =>{
      delete runningJobs[name];
      if(Object.keys(runningJobs).length === 0){
        resolve(new Character({mesh: processedCharMesh, slope}));
      }
    };
    const context = new (window.AudioContext || window.webkitAudioContext)();
    soundEffects.forEach(name=>{
      if(effectBuffers.hasOwnProperty(name)) return;
      runningJobs[`load_audio_${name}`] = true;
      AssetUtils.loadAsset(`${name}.mp3`, "arraybuffer")
      .then(result=> context.decodeAudioData(result.target.response))
      .then(buffer=>{effectBuffers[name] = buffer})
      .then(()=>finishJob(`load_audio_${name}`))
      .catch(reject);
    });

    runningJobs[`process_mesh`] = true;
    createMesh({data:snowboarder_data,
      action_file: snowboardActions, mode2: true,colored: true, skinned: true})
    .then(
      mesh=>{ 
        processedCharMesh = mesh;
        finishJob('process_mesh');
      }
    )
    .catch(reject);
  });
}

class Character extends GameObject{
  constructor({mesh, boundingBox, slope, transformationMatrix}){
    super(mesh, transformationMatrix || MathUtils.identityMatrix4);
    this.mesh = mesh;
    this.boundingBox = boundingBox;
    this.speed = 0.2;
    this.fallSpeed = 0.15;
    this.slope = slope;
    this.currentSegmentNumber = 0;
    this.input = {left: false, right: false, back: false}
    this.velocity = [0,1,0];
    this.localVelocity = [0,0,0];
    this.localUp = [0,0,1];
    this.friction = SNOWBOARD_FRICTION;
    this.restitution = SNOWBOARD_RESTITUTION;
    this.boxDimensions = [0.5,5,0.5];
    this.capsuleRadius = 2;
    this.setPosition([0,0,16]);
    this.name = "snowboarder";
    this.currentAnimations = {
      "neutral":{influence: 1},
      "left":{influence: 0},
      "right":{influence: 0}
    };
    this.currentAnimationFrame = 0;
    window.character = this;
    this.mixedAnimations = Array(this.mesh.numBones * 8);
    this.snowSound = AudioMixer.play({buffer: effectBuffers.sliding,
      priority: 10, volume: 0, loop: true});
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
    this.transformDirectionInPlace([0,0,1], this.localUp);
    if(distanceFromSurface < this.capsuleRadius){
      let snowVolume = MathUtils.vectorMag(this.velocity);
      snowVolume -= SPEED_VOLUME_INTENSITY_MIN_VELOCITY;
      if (snowVolume < 0) snowVolume = 0;
      snowVolume /= SPEED_VOLUME_INTENSITY_MAX_VELOCITY;
      this.snowSound.setVolume(snowVolume);
      this._planeAlign();
      MathUtils.projectVectorOntoPlaneInPlace(this.velocity, this.localUp, this.velocity);
      this.inverseTransformDirectionInPlace(this.velocity, this.localVelocity);
      this._applyFriction(this.localVelocity);
      this.transformDirectionInPlace(this.localVelocity, this.velocity);
    }
    else{
      this.snowSound.setVolume(0);
    }
    this.normalizeAnimationInfluence();
    this._mixAnimations();
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
    const surfaceNormalLocal = this.inverseTransformDirection(this.surfacePlaneNormal);
    const planeAlignAxis = MathUtils.vectorCross(
      surfaceNormalLocal, [0,0,1]);
    const planeAlignAngle = MathUtils.angleBetweenVectors([0,0,1],
      surfaceNormalLocal);
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
        this.localUp,
      -1 * direction * STEER_SPEED)
    );
  }
  _mixAnimations(){
    const currentKeys = Object.keys(this.currentAnimations);
    //first fill the lerped transform with the first animation we find,
    // which does not have influence 0, * its influence
    let firstAnimIndex;
    for(let i = 0; i < currentKeys.length; ++i){
      if(this.currentAnimations[currentKeys[i]].influence !== 0){
        firstAnimIndex = i;
        break;
      }
    }
    let anim = this.mesh.animations[currentKeys[firstAnimIndex]][0];
    let influence = this.currentAnimations[currentKeys[firstAnimIndex]].influence;
    for(let i = 0; i < anim.length; ++i){
      this.mixedAnimations[i] = anim[i] * influence;
    }
    // now add all the other anims * their influence
    for(let i = firstAnimIndex + 1; i < currentKeys.length; ++i){
      if(this.currentAnimations[currentKeys[i]].influence === 0) continue;
      anim = this.mesh.animations[currentKeys[i]][0];
      influence = this.currentAnimations[currentKeys[i]].influence;
      for(let transformIdx = 0; transformIdx < anim.length; ++transformIdx){
        this.mixedAnimations[transformIdx] += 
          anim[transformIdx] * influence;
      }
    }
  }
  normalizeAnimationInfluence(){
    const magnitude = Object.values(this.currentAnimations).reduce(
      (accum,anim)=>accum + anim.influence, 0);
    Object.values(this.currentAnimations).forEach(
      animation=>animation.influence /= magnitude);
  }
  steerAnimationLeft(){
    this.fadeOutSteeringInfluence("right");
    this.fadeOutSteeringInfluence("neutral");
    this.fadeInSteeringInfluence("left");
  }
  steerAnimationRight(){
    this.fadeOutSteeringInfluence("left");
    this.fadeOutSteeringInfluence("neutral");
    this.fadeInSteeringInfluence("right");
  }
  steerAnimationNeutral(){
    this.fadeOutSteeringInfluence("right");
    this.fadeOutSteeringInfluence("left");
    this.fadeInSteeringInfluence("neutral");
  }
  fadeOutSteeringInfluence(key){
    this.currentAnimations[key].influence -= STEER_ANIMATION_LERP_SPEED;
    this.currentAnimations[key].influence = Math.max(
      this.currentAnimations[key].influence, 0
    );
  }
  fadeInSteeringInfluence(key){
    this.currentAnimations[key].influence += STEER_ANIMATION_LERP_SPEED;
    this.currentAnimations[key].influence = Math.min(
      this.currentAnimations[key].influence, 1
    )
  }
  _handleControls(){
    if(this.input.left ? !this.input.right : this.input.right){
      if(this.input.right){
        this._steer(-1);
        this.steerAnimationRight();
      }
      else{
        this.steerAnimationLeft();
        this._steer(1);
      }
    }
    else{
      this.steerAnimationNeutral();
    }
    if(this.input.back){
      this.friction = BREAK_FRICTION
    }
    else{
      this.friction = SNOWBOARD_FRICTION;
    }
  }
  _handleCollision(collisionData){
    let volume = MathUtils.vectorMag(this.velocity);
    volume -= COLLISION_INTENSITY_MIN_VELOCITY;
    volume /= COLLISION_INTENSITY_MAX_VELOCITY;
    if(volume > 0){
      AudioMixer.play({buffer: effectBuffers.hit, volume});
    }
    this.velocity = MathUtils.scaleVector(
      MathUtils.bounceVectorOffPlane(this.velocity,
        collisionData.normal),
      this.restitution
    );
    this.setPosition ( 
      MathUtils.addVectors(
        this.getPosition(),
      MathUtils.scaleVector(
        MathUtils.vectorNormalize(collisionData.normal),
        collisionData.penetration
      )
    ));
    this.friction = [0,0,0];
    setTimeout(()=>this.friction = SNOWBOARD_FRICTION,500);
    // this.velocity = MathUtils.scaleVector(MathUtils.vectorNormalize(collisionData.normal),
    // MathUtils.vectorMag(this.velocity)); 
    
    // let pushBackVector = MathUtils.vectorNormalize(collisionData.normal);
    // pushBackVector = MathUtils.scaleVector(pushBackVector, 2);
    // this.setPosition(MathUtils.addVectors(this.getPosition(),
    //   pushBackVector));
    // const collisionOffsetVector = MathUtils.subtractVectors(
    //   collisionData.colliderPoint.slice(0,3),
    //   this.getPosition()
    // );
    //  let addAngularVelocAngle = MathUtils.angleBetweenVectors(
    //   this.velocity,
    //    MathUtils.scaleVector(collisionData.normal, -1)
    // );

    //  addAngularVelocAngle /= 15;
    //  addAngularVelocAngle *= MathUtils.vectorMag(this.velocity);
    //  const addAngularVelocAxis = MathUtils.vectorCross(
    //   this.velocity,
    //   MathUtils.scaleVector(collisionData.normal, -1)
    //  );
    //  this.addAngularVelocity(MathUtils.axisAngleToQuaternion(
    //    addAngularVelocAxis, addAngularVelocAngle)
    //  );
  }
  _handleEdgeCollision(collisionData){
   this._handleCollision(collisionData);
  };
  _handleTreeCollision(collisionData){
    collisionData.normal = collisionData.sphereNormal;
    this._handleCollision(collisionData);
  }
  _moveForward(){
    const edgeCollisionData = this.slope.boxIsBeyondEdge(
      this.getTransformationMatrix(), this.boxDimensions, this.currentSegmentNumber);
    const capsulePoint0 = this.getPosition();
    const capsulePoint1 = MathUtils.addVectors(this.getPosition(), this.velocity);
    const obstacleCollisionData = this.slope.capsuleCollidesWithObstacle(capsulePoint0,
    capsulePoint1,this.capsuleRadius,this.currentSegmentNumber);
    const balloonCount = this.slope.capsuleCollidesWithBalloons(capsulePoint0, capsulePoint1,
      this.capsuleRadius,this.currentSegmentNumber);
    if(balloonCount > 0){
      AudioMixer.play({buffer: effectBuffers.collect});
      HUD.addPoints(balloonCount);
    }
    HUD.updateSpeed(MathUtils.vectorMag(this.velocity)*HUD_DISPLAY_SPEED_MULTIPLIER);
    // this.slope.boxCollidesWithObstacle(
    //   this.getTransformationMatrix(), this.boxDimensions,
    //   this.velocity, this.currentSegmentNumber);

    if(edgeCollisionData){
      this._handleEdgeCollision(edgeCollisionData);
      return;
    }
    else if(obstacleCollisionData){
      this._handleTreeCollision(obstacleCollisionData);
    }
    let nextWorldPos = MathUtils.projectVectorOntoPlane(this.velocity, this.surfacePlaneNormal);
    MathUtils.addVectorsInPlace(this.getPosition(),nextWorldPos,nextWorldPos);
    if(this.currentSegmentNumber < this.slope.segmentMatrices.length -1 &&
      this.slope.positionIsPastSegmentStart(nextWorldPos,
      this.currentSegmentNumber + 1)){
      ++this.currentSegmentNumber;
      if(this.slope.notifyOfCharacterSegmentNumber(this.currentSegmentNumber)){
        --this.currentSegmentNumber;
      }
      let triangleAfterMove = this.slope.getSurroundingTriangle(nextWorldPos,
         this.currentSegmentNumber) || this.floorTriangle;
    }
    else if (this.currentSegmentNumber > 0 && !this.slope.positionIsPastSegmentStart(nextWorldPos,this.currentSegmentNumber)) {
      --this.currentSegmentNumber;
      let triangleAfterMove = this.slope.getSurroundingTriangle(nextWorldPos,
         this.currentSegmentNumber) || this.floorTriangle;
    }
  }
}
Character.transformedDirectionTemp = [0,0,0];
