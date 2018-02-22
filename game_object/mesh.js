const mat4ToDualQuat = require('mat4-to-dual-quat');

import * as MathUtils from "../utils/math_utils";
function isZeroQuat(quat){
  return quat[0]=== 0 && quat[1] === 0 && quat[2] === 0 && quat[3] === 1;
}
export default function createMesh(options={}){
  const mesh = new Mesh(options);
  return new Promise(
    (resolve, reject)=>{
      if(options.textureBuffer){
        mesh.texture = textureBuffer;
        mesh.textured = true;
        resolve(mesh);
      }
      else if (options.textured && options.img_src){
        rasterizer.bufferTexture(img_src).then(
          texture=>{
            mesh.bufferTexture = texture;
            resolve(mesh);
          } 
        );
      }
    }
  );
}

export class Mesh {
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
      this.numBones = Object.keys(data.jointNamePositionIndex).length;
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
      if(colored){
        this.colors = Array(this.vertices.length);
        data.vertexColorIndices.forEach((colorIdx, positionInArray)=>{
          const outputPosition = this.faces[positionInArray] * 3;
          for(let i = 0; i < 3; ++i){
            this.colors[outputPosition + i] = data.vertexColors[colorIdx*3 + i];
          }
        });
      }

      const nameToAnimPosition = {};
      Object.keys(action_file.jointNameIndices).forEach(jointName=>{
        nameToAnimPosition[jointName.replace(".", "_")] = action_file.jointNameIndices[jointName];
      });

      const boneOrder = Object.entries(data.jointNamePositionIndex).sort(
        (nameIndex0, nameIndex1) => nameIndex0[1] < nameIndex1[1] ? -1 : 1
      ).map(entry=>
        nameToAnimPosition[entry[0]]
      );

      let frame, newAction, matrix;
      Object.keys(action_file.actions).forEach(actionName=>{
        newAction = [];
        Object.keys(action_file.actions[actionName]).forEach(keyFrame=>{
          frame = [];
          boneOrder.forEach(animBoneIdx =>{
            if(animBoneIdx === undefined){
              matrix = MathUtils.identityMatrix4;
            }
            else{
              matrix = action_file.actions[actionName][keyFrame][animBoneIdx];
            }
            matrix = MathUtils.mat_4_transpose(
              MathUtils.mat_4_multiply(
                matrix,
                action_file.inverseBindPoses[animBoneIdx]
              )
            );
            mat4ToDualQuat(matrix).forEach(el=>frame.push(el));
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
