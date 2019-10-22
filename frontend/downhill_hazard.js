import * as MathUtils from "./utils/math_utils";
import * as WebGLUtils from "./utils/webgl_utils";
import * as AssetUtils from "./utils/asset_utils";
import * as Input from "./input.js";
import GameObject from "./game_object/game_object";
import createSkybox from "./skybox/skybox";
import createCharacter from "./character/character";
import {createSlope, COURSE_LENGTH} from "./slope/slope";
const GAMEPLAY_CAMERA_POS_OFFSET = [-0.5,-14, 10];
const GAMEPLAY_CAMERA_ROT_OFFSET = [];
export const UPDATE_INTERVAL = 30;

import Mesh from "./game_object/mesh";
import * as HUD from "./hud/hud";
const HUD_DISPLAY_SPEED_MULTIPLIER = 8;
document.addEventListener("DOMContentLoaded", main);
function main(){
  const rasterizer = new WebGLUtils.ObjectsRasterizer();
  createSlope(MathUtils.translationMatrix(0,-3,-4), rasterizer)
  .then(slope=>
    createCharacter(slope).then(character=> ({character, slope}))
  )
  .then(({character, slope})=>
    createSkybox().then(skybox=>({character, slope, skybox}))
  )
  .then(assetsLoaded)
  .catch(error=>{
    debugger;
  alert("error loading assets, please try reloading the page")});
}
function assetsLoaded({character, slope, skybox}){
  skybox.mesh.buffers = rasterizer.sendMeshToGPU(skybox.mesh);
  rasterizer.skyBox = skybox;
  rasterizer.objects.character = character;
  window.rasterizer = rasterizer;
  rasterizer.cameraTarget = character;
  rasterizer.position[1] -= 2;
  rasterizer.position[0] += 0.3;
  rasterizer.rotation[0] -= 0.4;
  rasterizer.position[2] += 0.7;
  rasterizer.objects.slope = slope;
  rasterizer.position = [0,-6,0];
  const game = new Game(slope, character);
  game.startMenu();
};
function positionCamera(camera){
  return ()=>{
    // const newPos = this.camera.getPosition();
    //newPos[2] = this.cameraTarget.getPosition()[2] + 10;
    // this.camera.setPosition(newPos);
    //this.camera.setRotation(this.cameraTarget.getRotation());
   
  };
 }
class Game{
  constructor(slope, character){
    this.slope = slope;
    this.character = character;
    this.keyDown = Input.keyDown(character);
    this.keyUp = Input.keyUp(character);
    this.blur = Input.releaseKeys(character);  
    this.run = this.run.bind(this);
    this.start = this.start.bind(this);
    this.restart = this.restart.bind(this);
    rasterizer.camera = new GameObject();
    rasterizer.camera.target = this.character;
    //rasterizer.drawObjects.bind(rasterizer)();
    this.camera = rasterizer.camera;
    this.fixedUpdate = this.fixedUpdate.bind(this);
    this.camera.setPosition([0,0,5]);
    rasterizer.drawObjects(0);
  }
  fixedUpdate(){
    this.character.update();
    this.positionCamera();
  }
  startMenu(){
    HUD.doStartMenuHUD(this.start);
  }
  positionCamera(){
    let rotation = this.camera.target.getRotation();
    const upLocal = this.camera.target.inverseTransformDirection([0,0,1]);
    const angleToUp = MathUtils.angleBetweenVectors([0,0,1], upLocal);
    const upAlignAxis = MathUtils.vectorCross(upLocal, [0,0,1]);
    const targetRotation = MathUtils.multiplyQuaternions(
        MathUtils.axisAngleToQuaternion(upAlignAxis, angleToUp),
        rotation
    );
    const finalRotation = MathUtils.lerpQuaternions(this.camera.getRotation(), targetRotation, 0.9);
    const currentPosition = this.camera.getPosition();
    const currentRotation = this.camera.getRotation();
    this.camera.setRotation(finalRotation);
    this.camera.setPosition(this.camera.target.getPosition());
    if(this.slope.positionIsBeyondEdge(this.camera.transformPoint(GAMEPLAY_CAMERA_POS_OFFSET),
     this.character.currentSegmentNumber)){
      this.camera.setRotation(currentRotation);
    }
    this.camera.setPosition(this.camera.transformPoint(GAMEPLAY_CAMERA_POS_OFFSET));
  }
  start(){
    HUD.startGameplayHUD();
    HUD.setStartTime(Date.now());

    window.addEventListener("keydown", this.keyDown );
    window.addEventListener("keyup", this.keyUp );
    window.addEventListener("blur", this.blur );

    this.animationHandle = window.requestAnimationFrame(this.run);
    this.fixedUpdateHandle = setInterval(this.fixedUpdate, UPDATE_INTERVAL);
  }
  run(timestamp){
    HUD.updateTime(Date.now());
    HUD.updateSpeed(MathUtils.vectorMag(this.character.velocity)*HUD_DISPLAY_SPEED_MULTIPLIER);
    rasterizer.drawObjects.bind(rasterizer)(timestamp);
    if(this.character.segmentsSinceStart > COURSE_LENGTH){
      this.displayScores();
    }
    else{
      window.requestAnimationFrame(this.run);
    }
  }
  displayScores(){
    HUD.displayScoresStructure();
    window.clearInterval(this.fixedUpdateHandle);
    window.removeEventListener("keydown", this.keyDown);
    window.removeEventListener("keyup", this.keyUp);
    window.removeEventListener("blur", this.blur);
    setTimeout(this.restart, 1000);
  }
  restart(){
    this.character.reset();
    this.slope.reset();
    this.start();
  }
}

