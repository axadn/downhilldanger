import treeMesh from "../../tree";
import Mesh from "../../game_object/mesh";
import * as MathUtils from "../../utils/math_utils";
import GameObject from "../../game_object/game_object";
export default class TreePool{
    constructor(rasterizer){
        treeMesh.textureBuffer = rasterizer.bufferTexture("tree.png");
        treeMesh.textured = true;
        this.treeMesh = new Mesh(treeMesh);
        this.treeMesh.buffers = rasterizer.sendMeshToGPU(this.treeMesh);
        this.pool = [];
    }
    pullTree(id, transformation = MathUtils.identityMatrix4){
        let tree;
        if(this.pool.length == 0){
            tree = new GameObject(this.treeMesh, transformation, true);
        }else{
            tree = this.pool[this.pool.length - 1];
            tree.setTransformationMatrix(transformation);
            this.pool.pop();
        }
        tree.id = `treeObstacle${id}`;
        return tree;
    }
    releaseTree(tree){
        this.pool.push(tree);
    }
}