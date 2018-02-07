import * as MathUtils from "../utils/math_utils";
function isZeroQuat(quat){
  return quat[0]=== 0 && quat[1] === 0 && quat[2] === 0 && quat[3] === 1;
}
export default class Mesh {
  constructor({vertices, faces, bones, colors, uvs, skinWeights, skinIndices, animations, bindPose,
    colored, skinned, textured, rasterizer, textureBuffer, img_src, mode2, data, action_file}){
    this.vertices = vertices;
    this.colored = colored;
    this.textured = textured;
    this.skinned = skinned;
    this.faces = faces;
    this.bones = bones;
    this.colors = colors;
    this.uvs = uvs;
    this.boneWeights = skinWeights;
    this.boneIndices = skinIndices;
    this.animations ={};
    if(mode2){
      this.boneWeights = [];
      this.boneIndices = [];
      let boneIndices;
      data.vertexJointWeights.forEach((weights, vertexIdx)=>{
        boneIndices = Object.keys(weights);
        this.boneWeights.push(weights[boneIndices[0]]);
        this.boneIndices.push(parseInt(boneIndices[0]));
        if(boneIndices[1]){
          this.boneWeights.push(weights[boneIndices[1]]);
          this.boneIndices.push(parseInt(boneIndices[1]));
        }
        else{
          this.boneWeights.push(0);
          this.boneIndices.push(0);
        }
      });
      this.vertices = data.vertexPositions;
      this.faces = data.vertexPositionIndices;
      let frame, newAction, matrix;
      Object.keys(action_file.actions).forEach(actionName=>{
        debugger;
        newAction = [];
        Object.keys(action_file.actions[actionName]).forEach(keyFrame=>{
          frame = [];
          action_file.actions[actionName][keyFrame].forEach((boneMat,boneIdx)=>{
            matrix = 
            MathUtils.mat_4_transpose(
              MathUtils.mat_4_multiply(
                boneMat,
                action_file.inverseBindPoses[boneIdx]
              )
            );
            matrix.forEach(el=>frame.push(el));
          });
          newAction.push(frame);
        });
        this.animations[actionName] = newAction;
      });
     }
  //   if(animations && animations.length) {
  //     this.boneWeights = skinWeights;
  //     this.boneIndices = skinIndices;
  //     let frame, frameMultiplied;
  //     let matrix;
  //     let bindMats = [];
  //     bones.forEach(bone=>{
  //       let rot; 
  //       if(isZeroQuat(bone.rotq)){
  //         rot = MathUtils.identityMatrix4;
  //       }
  //       rot = MathUtils.quaternionToMatrix(bone.rotq);
  //       let matrix;
  //       matrix = MathUtils.mat_4_multiply(
  //         rot,
  //         MathUtils.translationMatrix(...bone.pos)
  //       );
  //       if(bone.parent !== -1){
  //         matrix = MathUtils.mat_4_multiply(
  //           matrix,
  //           bindMats[bone.parent],
  //         );
  //      }
  //      bindMats.push(
  //        matrix
  //      );
  //    });
  //    bindMats = bindMats.map(mat=> MathUtils.inverse_mat4_rot_pos(mat));
  //     animations.forEach(anim=>{
  //       const frames = [];
  //       const numFrames = anim.hierarchy[0].keys.length;
  //       for(let i = 0; i < numFrames ; ++i){
  //         frame = [];
  //         anim.hierarchy.forEach((bone, boneIdx)=> {
  //           let rot;
  //           if(isZeroQuat(bone.keys[i].rot)){
  //             rot = MathUtils.identityMatrix4;
  //           }
  //           rot = MathUtils.quaternionToMatrix(bone.keys[i].rot);

  //           matrix =
  //               MathUtils.mat_4_multiply(
  //                rot,
  //                MathUtils.translationMatrix(...bone.keys[i].pos)
  //              );
  //           if(bones[boneIdx].parent != -1){
  //              matrix = MathUtils.mat_4_multiply(matrix, frame[bones[boneIdx].parent]);
  //           }
  //           frame.push(matrix);
  //         });
  //         frameMultiplied = [];
  //         frame.forEach((mat,matIdx)=> MathUtils.mat_4_transpose(
  //           MathUtils.mat_4_multiply(bindMats[matIdx], mat)).forEach(el=>frameMultiplied.push(el)));
  //         frames.push(frameMultiplied);
  //       }

  //       this.animations[anim.name] = frames;
  //     });
  //  } 
    this.img_src = img_src;
    if(textureBuffer){
        this.texture = textureBuffer;
      this.textured = true;

    }
    else if (textured && img_src){
      this.texture = rasterizer.bufferTexture(img_src);
    }

  }
  inverseBindVertices(){
  }
  setDirty(){ //call this after modifying mesh data on-the-fly
    //to let the rasterizer know to update its buffers
    this.dirty = true;
  }
  setClean(){
    this.dirty = false;
  }
  packedVertex(idx){ //x,y,z coords for a vertex by element idx
    const posIdx = 3*idx;
    const result = [];
    for(let i = posIdx; i < posIdx + 3; ++i){
      result.push(this.vertices[i]);
    }
    return result;
  }
}
