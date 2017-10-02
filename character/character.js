

class Character{
  constructor(mesh, boundingBox){
    this.mesh = mesh;
    this.boundingBox = boundingBox;
  }

  playAnimation(name, rasterizer, loop, callback){
  }

  _drawAnimationFrame(rasterizer){
    rasterizer.drawAnimatedMesh(this.mesh, frame)
  }
}
