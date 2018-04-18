const mat4ToDualQuat = require('mat4-to-dual-quat');

import * as MathUtils from "../utils/math_utils";
function isZeroQuat(quat){
  return quat[0]=== 0 && quat[1] === 0 && quat[2] === 0 && quat[3] === 1;
}
export default function createMesh(options={}){
  const mesh = new Mesh(options);
  return new Promise(
    (resolve, reject)=>{
      if (options.textured && options.img_src){
        rasterizer.bufferTexture(options.img_src)
        .then(
          texture=>{
            mesh.texture = texture;
            resolve(mesh);
          } 
        )
        .catch(
          error=> reject(error)
        );
      }
      else{
        if(options.textureBuffer){
          mesh.texture = options.textureBuffer;
          mesh.textured = true;
        }
        resolve(mesh);
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
      this.vertices = data.vertexPositions;
      this.faces = data.vertexPositionIndices;
      if(textured){
        this.uvs = [];
        for(let i = 0;i < data.vertexPositions.length / 3 * 2; ++i){
          this.uvs.push(0);
        }
        let outputIdx;
        for(let i = 0; i < data.vertexUVIndices.length; ++i){
          outputIdx = data.vertexPositionIndices[i] * 2;
          this.uvs[outputIdx] = data.vertexUVs[i * 2];
          this.uvs[outputIdx + 1] = data.vertexUVs[i * 2 + 1];
        }
      }
      if(colored){
        this.colors = Array(this.vertices.length);
        data.vertexColorIndices.forEach((colorIdx, positionInArray)=>{
          const outputPosition = this.faces[positionInArray] * 3;
          for(let i = 0; i < 3; ++i){
            this.colors[outputPosition + i] = data.vertexColors[colorIdx*3 + i];
          }
        });
      }
      if(action_file){
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
