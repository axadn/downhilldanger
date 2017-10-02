import * as MathUtils from "../utils/math_utils";
class Mesh {
  constructor({vertices, faces, bones, colors, uvs, boneWeights, boneIndices, animations, bindPose}){
    this.vertices = vertices;
    this.faces = faces;
    this.bones = bones;
    this.colors = colors;
    this.uvs = uvs;
    this.boneWeights = boneWeights;
    this.boneIndices = boneIndices;
    this.animations = animations;
  }
  inverseBindVertices(){
  }
}
