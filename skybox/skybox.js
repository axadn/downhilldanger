import createMesh from "../game_object/mesh";
import skybox from "../skybox";
import GameObject from "../game_object/game_object";
export default function createSkyBox(){
   skybox.img_src = "skybox.jpg";
   skybox.textured = true;
    return createMesh(
        skybox
    )
    .then(mesh=>{
        return new GameObject(mesh);
    });
}