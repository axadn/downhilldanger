import * as MathUtils from "./utils/math_utils";
import * as WebGLUtils from "./utils/webgl_utils";
import * as Input from "./input.js";
import monkeyData from "./untitled.js";
import boxManMesh from "./boxMan.js";
import GameObject from "./game_object/game_object";
import SkyBox from "./skybox.json";
import Character from "./character/character";
import Slope from "./slope/slope";
import Mesh from "./game_object/mesh";
import * as HUD from "./hud/hud";
document.addEventListener("DOMContentLoaded", main);
function main(){
  const rasterizer = new WebGLUtils.ObjectsRasterizer();
  const slope = new Slope(MathUtils.translationMatrix(0,-3,-4), rasterizer, "snow.jpg");
  window.slope = slope;

  //boxManMesh.skinned = true;
  boxManMesh.colored = true;
  //boxManMesh.textured = true;
  const boxMan = new Character(new Mesh(boxManMesh), undefined, slope);
  //boxMan.playAnimation("rest");
  rasterizer.objects.boxMan = boxMan;
  SkyBox.img_src = "skybox.jpg";
  SkyBox.textured = true;
  SkyBox.rasterizer = rasterizer;
  let skyMesh = new Mesh(SkyBox);
  skyMesh.buffers = rasterizer.sendMeshToGPU(skyMesh);
  rasterizer.skyBox = new GameObject(skyMesh);
  HUD.setStartTime(Date.now());
  window.requestAnimationFrame(()=>{
    debugger;
    HUD.updateTime(Date.now());
    rasterizer.drawObjects.bind(rasterizer)();
  });
//  window.requestAnimationFrame(
//    () => rasterizer.draw(boxMan));

  window.rasterizer = rasterizer;
  rasterizer.cameraTarget = boxMan;
  slope.generateSegment();

  //slope.mesh.buffers = rasterizer.sendMeshToGPU(slope.mesh);
  window.addEventListener('keydown', handleKeyDown(rasterizer));
  rasterizer.position[1] -= 2;
  rasterizer.position[0] += 0.3;
  rasterizer.rotation[0] -= 0.4;
  rasterizer.position[2] += 0.7;
  rasterizer.objects.slope = slope;
  rasterizer.position = [0,-6,0];

  window.addEventListener("keydown", Input.keyDown(boxMan));
  window.addEventListener("keyup", Input.keyUp(boxMan));

}
const handleKeyDown = rasterizer => e => {
  switch(e.key){
    case "ArrowUp":
      rasterizer.rotation[0] += 0.1;
      break;
    case "ArrowDown":
      rasterizer.rotation[0] -= 0.1;
      break;
    case "ArrowLeft":
      rasterizer.rotation[2] += 0.1;
      break;
    case "ArrowRight":
    rasterizer.rotation[0] -= 0.1;
      break;
    case "a":
      rasterizer.position[1] += 0.1;
      break;
    case "w":
      rasterizer.position[1] -=0.1;
      break;
    case "s":
    rasterizer.position[2] += 0.1;
      break;
    case "d":
    rasterizer.position[2] -= 0.1;
      break;
  }

}
