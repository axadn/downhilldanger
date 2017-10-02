import * as MathUtils from "./utils/math_utils";
import * as WebGLUtils from "./utils/webgl_utils";
import monkeyData from "./untitled.js";
import boxManMesh from "./boxMan.js";
import GameObject from "./game_object/game_object";
document.addEventListener("DOMContentLoaded", main);
function main(){
  const rasterizer = new WebGLUtils.ObjectsRasterizer();
  boxManMesh.skinned = true;
  boxManMesh.textured = true;
  boxManMesh.buffers = rasterizer.sendMeshToGPU(boxManMesh);
  const boxMan = new GameObject(boxManMesh);
  boxMan.playAnimation("rest");
  rasterizer.objects.boxMan = boxMan;
  window.MathUtils = MathUtils;
  window.requestAnimationFrame(rasterizer.drawObjects.bind(rasterizer));
//  window.requestAnimationFrame(
//    () => rasterizer.draw(boxMan));
  window.addEventListener('keydown', handleKeyDown(rasterizer));
//  rasterizer.position = [0,-6,0];
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
