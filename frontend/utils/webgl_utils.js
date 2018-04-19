
const BONE_INFLUENCES = 2;
const CAMERA_ROT_SPEED = 0.1;

import * as MathUtils from "./math_utils";
import GameObject from "../game_object/game_object";
import { vectorMag } from "./math_utils";

export class ObjectsRasterizer{
  constructor(options = {}){
    this.swapYZ = options.hasOwnProperty("swapYZ")? options.swapYZ : true;
    window.rasterizer = this;
    const canvas = document.querySelector("#glCanvas");
    const canvas2 = document.querySelector("#flat-canvas");
    this.gl = canvas.getContext("webgl") || canvas.getContext('experimental-webgl');
    this.ctx = canvas2.getContext('2d');
    if(!this.gl){
      alert("Unable to initialize WebGL. Your browser or machine may not support it");
      return;
    }
    this.viewMatrix = MathUtils.identityMatrix4;
    this.perspectiveMatrix = 
      MathUtils.simple_perspective_matrix;
    this.compileDefaultShaders();
    //this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.rotation = [0,0,0];
    this.position = [0,0,0];

    this.objects = {};
    this.camera = options.camera;
  }
  compileDefaultShaders(){
    this.defaultProgram = this.compileByID("default-vertex-shader", "default-fragment-shader");
    this.coloredProgram = this.compileByID("colored-vertex-shader", "colored-fragment-shader");
    this.skinnedColoredProgram = this.compileByID("skinned-colored-vertex-shader", "colored-fragment-shader");
    this.skinnedTexturedProgram = this.compileByID("skinned-textured-vertex-shader",
     "textured-fragment-shader");
     this.texturedProgram = this.compileByID("textured-vertex-shader",
      "textured-fragment-shader");
  }
  compileByID(vertexId, fragmentId){
    const vertexShaderSource = document.getElementById(vertexId).text;
    const fragmentShaderSource = document.getElementById(fragmentId).text;
    const vertexShader = compileShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderSource);
    return createProgram(this.gl, vertexShader, fragmentShader);
  }
  calculateStrideLength(skinned, textured, colored){
    let strideLength = skinned ?  12 + BONE_INFLUENCES * 2 : 12;
    if(textured) strideLength += 8;
    else if (colored) strideLength += 4;
    return strideLength;
  }

  /*
   create gpu buffer layout:
    pos                   bone weights      bone indexes
    float*3 = 12 bytes + unsigned byte *2 + unsigned byte *2
    = 16 bytes per vertex if skinned or 12 if unskinned

  add this if textured:
    uvs
    unsigned_short * 2 = 4 bytes

  or add this if using vertex colors instead of textures:
    colors
    byte * 4 = 4 bytes

  */
  meshToArrayBuffer(mesh){
    let vertexIdx = 0;
    let weightIdx = 0;
    let boneIdx = 0;
    let uvIdx = 0;
    let colorIdx = 0;
    let offset = 0;
    const vertexDataLength = this.calculateStrideLength(mesh.skinned,
      mesh.textured, mesh.colored)* mesh.vertices.length/3;
    const vertexData = new ArrayBuffer(vertexDataLength);
    const dataView = new DataView(vertexData);
    const littleEndian = true;
    while(offset < vertexDataLength){
      for(let i = 0; i < 3; ++i){
          dataView.setFloat32(offset, mesh.vertices[vertexIdx++],littleEndian);
        offset += 4;
      }
      if(mesh.skinned){
        for(let i= 0; i< BONE_INFLUENCES; ++i){
          dataView.setUint8(offset++, mesh.boneWeights[weightIdx++]*255, littleEndian);
        }
        for(let i = 0; i <BONE_INFLUENCES; ++i){
          dataView.setUint8(offset++, mesh.boneIndices[boneIdx++], littleEndian);
        }
      }
      if(mesh.textured){
          dataView.setFloat32(offset,  mesh.uvs[uvIdx++], littleEndian);
            offset += 4;
          dataView.setFloat32(offset, -1*mesh.uvs[uvIdx++], littleEndian);
            offset += 4;
      }
      else if(mesh.colored){
        for(let i = 0; i < 3; ++i){
          dataView.setUint8(offset++, mesh.colors[colorIdx++]*255, littleEndian);
        }
        dataView.setUint8(offset++, 255, littleEndian);
      }
    }
  return vertexData;
  }

  determineProgram(skinned, textured, colored){
    if(skinned){
      if(textured){
        return this.skinnedTexturedProgram;
      }else if(colored){
        return this.skinnedColoredProgram;
      }
      else{
        return this.defaultProgram;
      }
    }
    else{
      if(textured){
        return this.texturedProgram;
      }else if(colored){
        return this.coloredProgram;
      }
      else{
        return this.defaultProgram;
      }
    }
  }

  sendMeshToGPU(mesh){
    const verticesBuffer = this.gl.createBuffer();
    const verticesData = this.meshToArrayBuffer(mesh);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, verticesBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, verticesData, this.gl.STATIC_DRAW);
    const facesBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, facesBuffer);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(mesh.faces), this.gl.STATIC_DRAW);
    mesh.setClean();
    return {verticesBuffer, facesBuffer};
  }

  removeMeshFromGPU({verticesBuffer, facesBuffer}){
    this.gl.deleteBuffer(verticesBuffer);
    this.gl.deleteBuffer(facesBuffer);
  }
  removeBufferFromGPU(buffer){
    this.gl.deleteBuffer(buffer);
  };
  bufferTexture(img_src){
    const texture = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D,texture);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE,
              new Uint8Array([0, 0, 255, 255]));
    const img = new Image();
    img.src = img_src;
    img.crossOrigin = "";
    return new Promise((resolve, reject)=>{
      img.addEventListener("load", ()=>{
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, img);
        this.gl.generateMipmap(this.gl.TEXTURE_2D);
        resolve(texture);
      });
      img.addEventListener("error", error=>{
        reject(error);
      });
    });
  }
  adjustToCanvas(){
    this.gl.canvas.width = this.gl.canvas.clientWidth;
    this.gl.canvas.height = this.gl.canvas.clientHeight;
    this.gl.viewport(0,0, this.gl.canvas.clientWidth, this.gl.canvas.clientHeight);
  }

  drawSkyBox(){
    this.skyBox.setPosition(this.camera.getPosition());
    this.draw(this.skyBox);
  }
  clipSpaceToFlatCanvasCoords(x,y){
    const canvas = document.querySelector("#flat-canvas");
    x*= canvas.width/2; 
    x+= canvas.width/2;
    y*= -canvas.height/2;
    y+= canvas.height/2;
    return [x,y];
  }

  debugLine(start, end, style = "black"){
    start = MathUtils.multiplyVec4ByMatrix4(this.viewMatrix, start.concat(1));
    start = MathUtils.scaleVector(start, 1/start[3]);
    start = this.clipSpaceToFlatCanvasCoords(start[0],start[1]);
    end = MathUtils.multiplyVec4ByMatrix4(this.viewMatrix, end.concat(1));
    end = MathUtils.scaleVector(end, 1/end[3]);
    end = this.clipSpaceToFlatCanvasCoords(end[0], end[1]);
    this.ctx.beginPath();
    this.ctx.moveTo(start[0],start[1]);
    this.ctx.lineTo(end[0],end[1]);
    this.ctx.strokeStyle = style;
    this.ctx.stroke();
  }



  debugCircle(pos, radius){
    pos = MathUtils.multiplyVec4ByMatrix4(this.viewMatrix, pos.concat(0));
    this.ctx.arc(pos[0], pos[1], radius, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  draw(obj){
    const program = this.determineProgram(obj.mesh.skinned,
        obj.mesh.textured, obj.mesh.colored);
    this.gl.useProgram(program);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, obj.mesh.buffers.verticesBuffer);
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, obj.mesh.buffers.facesBuffer);

    const posAttrIndex = this.gl.getAttribLocation(program, "a_pos");
    const strideLength = this.calculateStrideLength(obj.mesh.skinned, obj.mesh.textured, obj.mesh.colored);
    //attribute index, size, data type, normalized?, stride length, offset
    let offset = 0;
    this.gl.vertexAttribPointer(posAttrIndex, 3, this.gl.FLOAT, false, strideLength, offset);
    this.gl.enableVertexAttribArray(posAttrIndex);
    offset += 12;
    if(obj.mesh.skinned){
      const weightsAttrIndex = this.gl.getAttribLocation(program, "a_weights");
      const boneIndicesIndex = this.gl.getAttribLocation(program, "a_bone_indices");
      this.gl.vertexAttribPointer(weightsAttrIndex, BONE_INFLUENCES, this.gl.UNSIGNED_BYTE, true, strideLength, offset);
      this.gl.enableVertexAttribArray(weightsAttrIndex);
      offset += BONE_INFLUENCES;
      this.gl.vertexAttribPointer(boneIndicesIndex, BONE_INFLUENCES, this.gl.UNSIGNED_BYTE, false, strideLength, offset);
      this.gl.enableVertexAttribArray(boneIndicesIndex);
      offset += BONE_INFLUENCES;
      const boneTransforms = obj.mixedAnimations;
        
      const boneTransformsLocation = this.gl.getUniformLocation(program, "boneTransforms");
      this.gl.uniform4fv(boneTransformsLocation, boneTransforms);
    }

    if(obj.mesh.textured){
      const uvsAttrIndex = this.gl.getAttribLocation(program, "a_uvs");
      this.gl.vertexAttribPointer(uvsAttrIndex, 2, this.gl.FLOAT, false, strideLength, offset);
      this.gl.enableVertexAttribArray(uvsAttrIndex);
      offset += 8;
      this.gl.bindTexture(this.gl.TEXTURE_2D, obj.mesh.texture);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
    }
    else if(obj.mesh.colored){
      const colorsAttrIndex = this.gl.getAttribLocation(program, "vColor");
      this.gl.vertexAttribPointer(colorsAttrIndex, 4, this.gl.UNSIGNED_BYTE, true, strideLength, offset);
      this.gl.enableVertexAttribArray(colorsAttrIndex);
      offset += 4;
    }
    let viewMatrix = MathUtils.mat_4_multiply(obj.getTransformationMatrix(), this.viewMatrix);
    const viewMatrixUniformLocation = this.gl.getUniformLocation(program, "view_matrix");
    this.gl.uniformMatrix4fv(viewMatrixUniformLocation,false, viewMatrix);

    this.gl.drawElements(this.gl.TRIANGLES, obj.mesh.faces.length, this.gl.UNSIGNED_SHORT,0);
  }
  test(){
    const vertexBuffer = this.gl.createBuffer();
    const vertices = [
      -1,1,0.0,
      -1,-1,0.0,
      1,-1,0.0, 
   ];

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);


    const indicesBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,1,2]),this.gl.STATIC_DRAW);
    this.gl.useProgram(this.defaultProgram);


    const viewMatrixUniformLocation = this.gl.getUniformLocation(this.defaultProgram, "view_matrix");
    const viewMatrix = MathUtils.identityMatrix4;
    this.gl.uniformMatrix4fv(viewMatrixUniformLocation,false, viewMatrix);

    const posAttrIndex = this.gl.getAttribLocation(this.defaultProgram, "a_pos");
    this.gl.vertexAttribPointer(posAttrIndex, 3, this.gl.FLOAT, false, 0, 0);
    this.gl.clearColor(0.5, 0.5, 0.5, 0.9);
    this.gl.drawElements(this.gl.TRIANGLES, 3, this.gl.UNSIGNED_SHORT,0);
  }
  
  calculateViewMatrix(){
    //let cameraMatrix =  MathUtils.swapYZMatrix;
    let cameraMatrix = this.camera.getTransformationMatrix();
    let viewMatrix = MathUtils.inverse_mat4_rot_pos(cameraMatrix);
    if(this.swapYZ){
      viewMatrix = MathUtils.mat_4_multiply(viewMatrix, MathUtils.swapYZMatrix);
    }
    viewMatrix = MathUtils.mat_4_multiply(viewMatrix, this.perspectiveMatrix);
    return viewMatrix;
  }

  drawObjects(timestamp){
    this.adjustToCanvas();
    this.gl.clearColor(0.8, 0.8, 0.81, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.viewMatrix = this.calculateViewMatrix();
    if(this.skyBox){
      this.drawSkyBox();
    }
    const objKeys = Object.keys(this.objects);
    let obj;
    for(let i = 0; i < objKeys.length; ++i){
      obj = this.objects[objKeys[i]];
      if(obj.mesh.dirty || !obj.mesh.buffers){
        obj.mesh.buffers = this.sendMeshToGPU(obj.mesh);
      }
      if(obj.mesh.skinned && obj.shouldUpdate(timestamp)){
          obj.updateFrame();
      }
      obj.lastTimeStamp = timestamp;
      this.draw(obj);
    }
  }
}
// create a rasterization program from a vertex and fragment shader
export function createProgram(gl, vertexShader, fragmentShader){
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
    alert("shader program intialization failed");
  }
  return program;
}

//compile a shader
export function compileShader(gl, type, source){
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
    alert("Could not compile shader" + gl.getShaderInfoLog(shader));
  }
  return shader;
}
