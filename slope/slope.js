const SEGMENT_WIDTH = 50;
const SEGMENT_LENGTH = 30;
const EDGE_LOOP_RESOLUTION = 5;
const SLOPE_BUFFER_AMOUNT = 50;
const BACK_BUFFER_ANOUNT = 10;
import * as MathUtils from "../utils/math_utils";
import Mesh from "../game_object/mesh";
import GameObject from "../game_object/game_object";
export default class Slope extends GameObject{

  constructor(transformationMatrix = MathUtils.identityMatrix4){
    super(undefined);
    this.mesh = new Mesh({
      faces: [],
      vertices: []
    });
    this.bufferedSegments = 0;
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
    this.segmentMatrices = [transformationMatrix];
    this.segmentRotation = [0,0,0];
    this.segmentPosition = MathUtils.multiplyVec4ByMatrix4(transformationMatrix,
      [0,SEGMENT_LENGTH,0,1]).slice(0,3);
    for(let i = 0; i < SLOPE_BUFFER_AMOUNT + BACK_BUFFER_ANOUNT ; ++i ){
      this.generateSegment();
    }
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
    //this.segmentRotation[0] -= 0.01;
    this.segmentRotation[2] += 0.1;
    //this.segmentRotation[2] += 0.3;
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
    for(let i = startIdx; i < startIdx + 6 * EDGE_LOOP_RESOLUTION - 1; i+=3){
      if(MathUtils.triangleContainsPoint(pos, vertex(this.mesh.faces[i]),
        vertex(this.mesh.faces[i + 1]), vertex(this.mesh.faces[i + 2]))){
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
    )
  }
  generateSegment(){
    const pos = this.segmentPosition;
    this.generateNewSegmentRotation();
    let transformationMatrix = MathUtils.mat_4_multiply(
      MathUtils.yRotationMatrix(this.segmentRotation[1]),
      MathUtils.translationMatrix(pos[0], pos[1], pos[2]));
    transformationMatrix = MathUtils.mat_4_multiply(
        MathUtils.zRotationMatrix(this.segmentRotation[2]),
      transformationMatrix);
    transformationMatrix = MathUtils.mat_4_multiply(
      MathUtils.xRotationMatrix(this.segmentRotation[0]),
      transformationMatrix);
    this.segmentPosition = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, [0, SEGMENT_LENGTH,
    0,1]);

    //let segmentMatrix = MathUtils.translationMatrix(
      //this.segmentPosition[0], this.segmentPosition[1], this.segmentPosition[2]);
    // segmentMatrix = MathUtils.mat_4_multiply( segmentMatrix,
    //   MathUtils.translationMatrix(0, SEGMENT_LENGTH, 0));
    // segmentMatrix = MathUtils.mat_4_multiply(
    //   MathUtils.zRotationMatrix(this.segmentRotation[2]), MathUtils.identityMatrix4);
    // segmentMatrix = MathUtils.mat_4_multiply(segmentMatrix,
    //   MathUtils.yRotationMatrix(this.segmentRotation[1]));
    // segmentMatrix = MathUtils.mat_4_multiply(segmentMatrix,
    //   MathUtils.xRotationMatrix(this.segmentRotation[0]));


     let newSegment = this.createEdgeLoop();
    // let transformedSegment = MathUtils.addVectors(newSegment, this.segmentPosition);
    // debugger;
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
    //this.segmentPosition =
    //  MathUtils.mat4TranslationComponent(segmentMatrix);
    this.segmentMatrices.push(transformationMatrix);
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
    this.mesh.setDirty();
  }
}
