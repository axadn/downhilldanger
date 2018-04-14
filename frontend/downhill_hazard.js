import * as MathUtils from "./utils/math_utils";
import * as WebGLUtils from "./utils/webgl_utils";
import * as AssetUtils from "./utils/asset_utils";
import * as Input from "./input.js";
import GameObject from "./game_object/game_object";
import createSkybox from "./skybox/skybox";
import createCharacter from "./character/character";
import createSlope from "./slope/slope";
import Mesh from "./game_object/mesh";
import * as HUD from "./hud/hud";
document.addEventListener("DOMContentLoaded", main);
function gameLoop(timestamp){
  HUD.updateTime(timestamp);
  rasterizer.drawObjects.bind(rasterizer)(timestamp);
  window.requestAnimationFrame(gameLoop);
}
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
    HUD.setStartTime(Date.now());
    window.requestAnimationFrame(gameLoop);
    window.rasterizer = rasterizer;
    rasterizer.cameraTarget = character;
    
    rasterizer.position[1] -= 2;
    rasterizer.position[0] += 0.3;
    rasterizer.rotation[0] -= 0.4;
    rasterizer.position[2] += 0.7;
    rasterizer.objects.slope = slope;
    rasterizer.position = [0,-6,0];

    window.addEventListener("keydown", Input.keyDown(character));
    window.addEventListener("keyup", Input.keyUp(character));
    window.addEventListener("blur", Input.releaseKeys(character));
};

