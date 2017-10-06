const SEGMENT_WIDTH = 70;
const SEGMENT_LENGTH = 40;
const EDGE_LOOP_RESOLUTION = 5;
const SLOPE_BUFFER_AMOUNT = 10;
const BACK_BUFFER_ANOUNT = 10;
const TURN_TYPE_SWITCH_FREQUENCY = 3;
const SHARP_TURN = 0.35;
const GRADUAL_TURN = 0.14;
const TILES_PER_SEGMENT = 1;
const TREES_PER_SEGMENT = 3;
const TREE_SEGMENT = "TREE_SEGMENT";
const SNOW_SEGMENT = "SNOW_SEGMENT";

import treeMesh from "../tree.js";
import {UPDATE_INTERVAL} from "../game_object/game_object";
import * as MathUtils from "../utils/math_utils";
import Mesh from "../game_object/mesh";
import GameObject from "../game_object/game_object";
export default class Slope extends GameObject{

  constructor(transformationMatrix = MathUtils.identityMatrix4, rasterizer, img_src = "snow.jpg"){
    super(undefined);
    this.transformationMatrix = transformationMatrix;
    this.mesh = new Mesh({
      faces: [],
      vertices: [],
      textured: true,
      img_src,
      uvs: [], rasterizer
    });

    this.rasterizer = rasterizer;
    this.currentTurn = "none";
    this.bufferedSegments = 0;
    this.uvH = 0;
    this.segmentMatrices = [transformationMatrix];
    this.segmentRotation = [-0.2,0,0];
    this.segmentPosition = MathUtils.multiplyVec4ByMatrix4(transformationMatrix,
      [0,SEGMENT_LENGTH,0,1]).slice(0,3);

    //this.segmentRotation[0] = 0;
    this._setupTreeMesh();
    const firstLoop = this.createEdgeLoop();
    let unpackedVertices;

    for(let i = 0; i< firstLoop.length; i+=3){
      unpackedVertices = MathUtils.multiplyVec4ByMatrix4(
        transformationMatrix,
      firstLoop.slice(i,i+3).concat(1)).slice(0,3);
      for(let j = 0; j< unpackedVertices.length; ++j){
        this.mesh.vertices.push(unpackedVertices[j]);
      }
    }
    for(let i = 0; i < SLOPE_BUFFER_AMOUNT + BACK_BUFFER_ANOUNT ; ++i ){
      this.generateSegment();
    }
    this._addUvsSegment();
    this.obstacles = [];
  }
  _setupTreeMesh(){
    this.sideGeometry = [];
    this.currentSideGeometryType = TREE_SEGMENT;
    this.treesCreatedSinceStart = 0;
    treeMesh.textureBuffer = this.rasterizer.bufferTexture("assets/tree.png");
    treeMesh.textured = true;
    this.treeMesh= new Mesh(treeMesh);
    this.treeMesh.buffers = this.rasterizer.sendMeshToGPU(this.treeMesh);
  }
  _addUvsSegment(){
    for(let i = 0; i <= EDGE_LOOP_RESOLUTION; ++i){
      this.mesh.uvs.push(this.uvH, i/EDGE_LOOP_RESOLUTION * TILES_PER_SEGMENT);
    }
  }

  _deleteUvsSegment(){
    for(let i = 0; i <= EDGE_LOOP_RESOLUTION; ++i){
      this.mesh.uvs.shift();
      this.mesh.uvs.shift();
    }
  }
  _addSideGeometrySegment(){

    if(this.currentSideGeometryType === TREE_SEGMENT){
      const trees = [];

      let leftRightToggle = -1;
      for(let i = 0; i < 2; ++i){
        let transformationMatrix = this.segmentMatrices[this.segmentMatrices.length -1];
        transformationMatrix = MathUtils.mat_4_multiply(
          MathUtils.translationMatrix(leftRightToggle * SEGMENT_WIDTH/2, 0, 0),
          transformationMatrix
        );
        let treeObject;
        for(let i = 0; i < TREES_PER_SEGMENT; ++i){
          transformationMatrix =
          MathUtils.mat_4_multiply(
            MathUtils.translationMatrix(0, SEGMENT_LENGTH/TREES_PER_SEGMENT, 0,1),
            transformationMatrix );
          treeObject = new GameObject(this.treeMesh,transformationMatrix);
          treeObject.id = `tree${this.treesCreatedSinceStart}`;
          this.rasterizer.objects[treeObject.id] = treeObject;
          ++this.treesCreatedSinceStart;
          trees.push(treeObject);
        }
        leftRightToggle *= -1;
      }
      this.sideGeometry.push({trees, type: TREE_SEGMENT});
    }
  }
  _deleteSideGeometrySegment(){
    if(this.sideGeometry[0].type === TREE_SEGMENT){
      const treesSeg = this.sideGeometry.shift();
      for(let i = 0; i < treesSeg.trees.length; ++i){
        delete this.rasterizer.objects[treesSeg.trees[i].id];
      }
    }
  }
  _addObstaclesSegment(){
    if(Math.random() < TREE_DENSITY_LENGTHWISE){
        const segment = 0;
        const widthWiseCount = Math.floor(Math.random()*3);
        for(let i = 0; i < widthWiseCount; ++i){
          
        }
    }
  }
  _deleteObstaclesSegment(){

  }
  createEdgeLoop(){
    const vertices = [];
    for(let i = 0; i <= EDGE_LOOP_RESOLUTION; ++i){
      vertices.push(SEGMENT_WIDTH/ EDGE_LOOP_RESOLUTION * i - SEGMENT_WIDTH/2, 0, 0);
    }
    return vertices;
  }
  notifyOfCharacterSegmentNumber(idx){
    if(this.bufferedSegments < BACK_BUFFER_ANOUNT){
      ++this.bufferedSegments;
      return false;
    }
    this.generateSegment();
    this.deleteSegment();
    return true;
  }
  generateNewSegmentRotation(){

    let randomTurn = Math.random();
    if (randomTurn < 0.05 * TURN_TYPE_SWITCH_FREQUENCY ){
      randomTurn = Math.random();
      if(randomTurn <0.66){
        this.currentTurn = "none";
      }
      else if(randomTurn < 0.75){
        this.currentTurn = "gradual";
      }
      else{
        this.currentTurn = "sharp";
      }
      if(Math.random() < 0.5){
        this.turnDirection = "left";
      }
      else{
        this.turnDirection = "right";
      }
    }

    const multiplier = this.turnDirection === "left" ? -1 : 1;
    switch(this.currentTurn){
      case "sharp":
        this.segmentRotation[2] += multiplier * SHARP_TURN;
        this.segmentRotation[1] = -1* multiplier* 0.25;
        break;
      case "gradual":
        this.segmentRotation[2] += multiplier * GRADUAL_TURN;
        this.segmentRotation[1] = -1* multiplier* 0.10;
        break;
      default:
        this.segmentRotation[1] = Math.random() *0.03;
        break;
    }
    //this.segmentRotation[2] += -0.2;
    //this.segmentRotation[0] -= 0.05;
  }

  positionIsPastSegmentStart(pos, segmentNumber){
    const segmentStartLine = MathUtils.multiplyVec4ByMatrix4(
      MathUtils.mat4RotationComponent(this.segmentMatrices[segmentNumber]),
        [-1,0,0,1]);
    const segmentStartNormal = MathUtils.vectorCross([0,0,1],
       segmentStartLine);
    const offsetVector = MathUtils.subtractVectors(
         pos, MathUtils.mat4TranslationComponent(this.segmentMatrices[segmentNumber]));
    const result = MathUtils.vectorDot(offsetVector, segmentStartNormal);
    return result < 0;
  }

  segmentLocalCoords(segment_number, pos){
    return
          MathUtils.multiplyVec4ByMatrix4(object.position.concat(1),
            MathUtils.inverse_mat4_rot_pos(
              this.matrices[nextSegmentNumber]));
  }

  getSurroundingTriangle(pos, segmentNumber){
    const startIdx = 6 * EDGE_LOOP_RESOLUTION * segmentNumber;
    const vertex = this.mesh.packedVertex.bind(this.mesh);
    const inverseSegmentTransform = MathUtils.inverse_mat4_rot_pos(
      this.segmentMatrices[segmentNumber]
    );
    const transformedPosition = MathUtils.multiplyVec4ByMatrix4(
      inverseSegmentTransform,
      pos.concat(1)
    );
    let transformedTriangle;
    for(let i = startIdx; i < startIdx + 6 * EDGE_LOOP_RESOLUTION - 1; i+=3){
      transformedTriangle = []
      for(let j = 0; j < 3; ++j){
        transformedTriangle.push(
          MathUtils.multiplyVec4ByMatrix4(
            inverseSegmentTransform,
          vertex(this.mesh.faces[i+j]).concat(1))
        );
      }
      if(MathUtils.triangleContainsPoint(transformedPosition, transformedTriangle[0],
        transformedTriangle[1],transformedTriangle[2])){
          return [vertex(this.mesh.faces[i]),
            vertex(this.mesh.faces[i + 1]), vertex(this.mesh.faces[i + 2])];
      }
    }
  }
  _positionIsBeyondEdge(pos, segmentNumber, toggleLeft){
    const xOffset = toggleLeft? -SEGMENT_WIDTH/2 : SEGMENT_WIDTH/2;
    const currentSegPoint = MathUtils.multiplyVec4ByMatrix4(
      this.segmentMatrices[segmentNumber],
      [xOffset, 0, 0, 1]

    );
    const nextSegPoint = MathUtils.multiplyVec4ByMatrix4(
      this.segmentMatrices[segmentNumber + 1],
      [xOffset, 0, 0, 1]
    );
    let vec0, vec1;
    if(toggleLeft){
      vec0 = MathUtils.subtractVectors(nextSegPoint, currentSegPoint);
      vec1 = [0,0,1];
    }
    else{
      vec1 = MathUtils.subtractVectors(nextSegPoint, currentSegPoint);
      vec0 = [0,0,1];
    }
    const edgeNormal = MathUtils.vectorCross(vec0, vec1);
    const posOffset = MathUtils.subtractVectors(pos, currentSegPoint);
    if(MathUtils.vectorDot(posOffset, edgeNormal) < 0){
      let edgeVector =  toggleLeft? vec0: vec1;
      return{normal: edgeNormal, vector: edgeVector, pos0: currentSegPoint,
        pos1: nextSegPoint, toggleLeft};
    }
    return false;
  }
  positionIsBeyondEdge(pos, segmentNumber){
    return (
      this._positionIsBeyondEdge(pos, segmentNumber, true) ||
      this._positionIsBeyondEdge(pos, segmentNumber, false)
    );
  }
  generateSegment(){
    const pos = this.segmentPosition;
    this.generateNewSegmentRotation();

    let transformationMatrix = MathUtils.translationMatrix(
      pos[0], pos[1], pos[2]
    );
    let xRot = MathUtils.xRotationMatrix(this.segmentRotation[0]);
    let yRot = MathUtils.yRotationMatrix(this.segmentRotation[1]);
    let zRot = MathUtils.zRotationMatrix(this.segmentRotation[2]);
    transformationMatrix = MathUtils.mat_4_multiply(
      yRot,
      MathUtils.mat_4_multiply(
        xRot,
        MathUtils.mat_4_multiply(
          zRot,
          transformationMatrix
        )
      )
    );
    this.segmentPosition = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, [0, SEGMENT_LENGTH,
    0,1]);

     let newSegment = this.createEdgeLoop();
    // let transformedSegment = MathUtils.addVectors(newSegment, this.segmentPosition);
     let transformedSegment = [];
     let transformedPos;
     for(let i = 0; i < newSegment.length; i +=3){
       transformedPos = newSegment.slice(i, i+3);
       transformedPos.push(1);
       transformedPos =  MathUtils.multiplyVec4ByMatrix4(transformationMatrix,transformedPos);
       for(let i = 0; i < 3; ++i){
         transformedSegment.push(transformedPos[i]);
       }
     }
    this._addSegment(transformedSegment);
    this._addSideGeometrySegment();
    //this.segmentPosition =
    //  MathUtils.mat4TranslationComponent(segmentMatrix);
    this.segmentMatrices.push(transformationMatrix);
    this.uvH += SEGMENT_LENGTH/SEGMENT_WIDTH * TILES_PER_SEGMENT;
    this._addUvsSegment();
  }

  _addSegment(vertices){
    const startIdx = this.mesh.vertices.length/3 - 1 - EDGE_LOOP_RESOLUTION;
    for(let i =0; i< vertices.length; ++i){
      this.mesh.vertices.push(vertices[i]);
    }
    for(let i = startIdx; i < startIdx + EDGE_LOOP_RESOLUTION; ++i){
      //first triangle
      this.mesh.faces.push(i);
      this.mesh.faces.push(i+1);
      this.mesh.faces.push(i + EDGE_LOOP_RESOLUTION + 1 );

      //second triangle
      this.mesh.faces.push(i+1);
      this.mesh.faces.push( i + EDGE_LOOP_RESOLUTION + 2);
      this.mesh.faces.push( i + EDGE_LOOP_RESOLUTION + 1);

      /*triangle configuration

          t2 , t2      t1


         t0      t1 ,t0
      */
    }
    this.mesh.setDirty();
  }
  deleteSegment(){
    //values per vertex is 3
    for(let i = 0 ; i < (EDGE_LOOP_RESOLUTION + 1) *3; ++i ){
      this.mesh.vertices.shift();
    }
    //values per face is 3, there are two faces per segment
    for(let i = 0; i < EDGE_LOOP_RESOLUTION * 6; ++i ){
      this.mesh.faces.pop();
    }
    this.segmentMatrices.shift();
    this._deleteUvsSegment();
    this._deleteSideGeometrySegment();
    this.mesh.setDirty();
  }
}
