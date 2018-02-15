const tempVector3 = [0,0,0];
const tempVector3_1 = [0,0,0];
const tempVector3_2 = [0,0,0];
const tempVector3_3 = [0,0,0];
export const mat_4_multiply = (matrix0, matrix1)=>{
  const result = [];
  let sum = 0;
  for(let i = 0; i < 4; ++i){
    for(let j= 0; j < 4; ++j){
      sum = 0;
      for(let k=0; k < 4; ++k){
        sum += matrix0[i*4 + k] * matrix1[k*4 + j];
      }
      result.push(sum);
    }
  }
  return result;
};

export function mat4MultipyInPlace(matrix0, matrix1, result){
  const result = [];
  let sum = 0;
  for(let i = 0; i < 4; ++i){
    for(let j= 0; j < 4; ++j){
      sum = 0;
      for(let k=0; k < 4; ++k){
        sum += matrix0[i*4 + k] * matrix1[k*4 + j];
      }
      result[i*4 + j] = sum;
    }
  }
  return result;
}

export const identityMatrix4 = [
  1,0,0,0,
  0,1,0,0,
  0,0,1,0,
  0,0,0,1
];
export const translationMatrix = (x,y,z) =>([
  1,0,0,0,
  0,1,0,0,
  0,0,1,0,
  x,y,z,1
]);
export const scaleMatrix =(x,y,z) => ([
  x,0,0,0,
  0,y,0,0,
  0,0,z,0,
  0,0,0,1
]);

export const xRotationMatrix = radians =>{
  const s = Math.sin(radians);
  const c = Math.cos(radians);
  return[
    1, 0, 0, 0,
    0, c, s, 0,
    0, -s, c, 0,
    0, 0, 0, 1
  ]
};

export const yRotationMatrix = radians => {
  const s = Math.sin(radians);
  const c = Math.cos(radians);
  return[
    c, 0, -s, 0,
    0, 1, 0, 0,
    s, 0, c, 0,
    0, 0, 0, 1
  ];
};

export const zRotationMatrix = radians => {
  const s = Math.sin(radians);
  const c = Math.cos(radians);
  return [
    c, s, 0, 0,
   -s, c, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ];
};
export const mat_4_transpose = mat =>{
  const new_mat = [];
  for(let i = 0; i < 4; ++i){
    for(let j = 0; j < 4; ++j){
      new_mat.push(mat[i + j * 4]);
    }
  }
  return new_mat;
}
export const inverse_mat4_rot_pos = mat=>{
  /*invert a matrix that contains only rot and pos :
  * break down the matrix into a rotation and position component
  * transpose the rotation component
  * recombine them in reverse order (translation then rotation)
*/
  return mat_4_multiply(
    [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      -1*mat[12], -1*mat[13], -1*mat[14], 1
    ],
    [
      mat[0], mat[4], mat[8], 0,
      mat[1], mat[5], mat[9], 0,
      mat[2], mat[6], mat[10],0,
      0,      0,     0,       1
    ],
  );
}
const inverseRotComponentMap = [
  0, 4, 8, 0,
  1, 5, 9, 0,
  2, 6, 10, 0
];
const inverseTranslationComponent = Array(16);
export function inverseMat4InPlace(mat, result){
  for(let i = 0; i < 3; ++i){
    for(let j = 0; j< 3; ++j){
      result[i*4 + j] = mat[inverseRotComponentMap[i*4 + j]];
    }
  }
  for(let i = 0; i < 4; ++i){
     result[12 + i] = mat[i]* -1 * mat[12] -  
                      mat[4 + i] * mat[13] - 
                      mat[8 + i] * mat[14];
  }
}

export const swapYZMatrix =[
//x,y,z,w
  1,0,0,0,//x
  0,0,1,0,//y
  0,1,0,0,//z
  0,0,0,1,//w
];
export const simple_perspective_matrix = [
  1,0,0,0,
  0,1,0,0,
  0,0,1,1,
  0,0,0,1
];

export const translate_mat4 = (mat, x =0, y=0, z=0)=>{
    return mat_4_multiply(
      mat, translationMatrix(x,y,z)
    );
}

export const pointIsAbovePlane = (pos, vertex0, vertex1, vertex2)=>{
   // the normal to the plane

  const offsetVector = subtractVectors(pos, vertex1);
  // a vector from a point on the plane to the point we are checking

  return vectorDot(offsetVector, planeNormal(vertex0,
  vertex1, vertex2)) > 0;
}

export const addVectors = (vector1, vector2)=>{
  const newVector = [];
  for(let i = 0; i< vector1.length; ++i){
    newVector.push(vector1[i] + vector2[i]);
  };
  return newVector;
}

export function addVectorsInPlace(vector1, vector2, result, length = 3, resultStartIdx = 0){
  for(let i = 0; i < length; ++i){
    result[resultStartIdx + i] = vector1[i] + vector2[i];
  }
  return result;
}

export function subtractVectorsInPlace(vector1, vector2, result, length = 3, resultStartIdx = 0){
  for(let i = 0; i < length; ++i){
    result[resultStartIdx + i] = vector1[i] - vector2[i];
  }
  return result;
}

export const vectorCross = (vector1, vector2)=>([
  vector1[1] * vector2[2] - vector1[2] * vector2[1],
  vector1[2] * vector2[0] - vector1[0] * vector2[2],
  vector1[0] * vector2[1] - vector1[1] * vector2[0]
]);

export function vectorCrossInPlace(vector1, vector2, result, resultStart = 0){
  result[resultStart] = vector1[1] * vector2[2] - vector1[2] * vector2[1];
  result[resultStart + 1] = vector1[2] * vector2[0] - vector1[0] * vector2[2];
  result[resultStart + 2] = vector1[0] * vector2[1] - vector1[1] * vector2[0];
}

export const subtractVectors = (vector1, vector2)=>{
  const newVector = [];
  for(let i = 0; i < vector1.length; ++i){
    newVector.push(vector1[i] - vector2[i]);
  }
  return newVector;
}

export const vectorDot = (vector1, vector2) =>{
  return vector1[0] * vector2[0] + vector1[1] * vector2[1] +
  vector1[2] * vector2[2];
}

/* indices
0  1  2  3
4  5  6  7
8  9  10 11
12 13 14 15

*/
export const mat4TranslationComponent = (mat) =>{
  return[
    mat[12],
    mat[13],
    mat[14]
  ];
};
export const mat4RotationComponent = (mat) =>(
    [
      mat[0], mat[1], mat[2], 0,
      mat[4], mat[5], mat[6], 0,
      mat[8], mat[9], mat[10],0,
      0,      0,     0,       1
    ]
);

const rotationComponentMask = [
  true, true, true, false,
  true, true, true, false,
  true, true, true, false,
  false, false, false, false
];
export function mat4RotationComponentInPlace(mat, result){
  for(let i = 0; i < 16; ++i){
    if(rotationComponentMask[i]){
      result[i] = mat[i];
    }
    else{
      result[i] = 0;
    }
  }
  result[15] = 1;
  return result;
}

export const vectorSquareMag = vector => {
  let sum = 0;
  for(let i = 0; i < vector.length; ++i){
    sum += vector[i] * vector[i];
  }
  return sum;
};

export const projectVector = (vector, onto)=>{
  const dotProduct = vectorDot(vector, onto);
  return scaleVector(onto, dotProduct/ vectorSquareMag(onto));
};

export function projectVectorInPlace(vector, onto, result){
  const scaleAmount =  vectorDot(vector, onto) / vectorSquareMag(onto);
  for(let i = 0; i < 3; ++i){
    result[i] = onto[i] * scaleAmount;
  }
  return result;
}

//----------------------------
const projectedAlongNormal = [0,0,0];
export function projectVectorOntoPlane(vector, planeNormal){
  return subtractVectors(
    vector,
    projectVectorInPlace(vector, planeNormal, projectedAlongNormal)
  );
}
export function projectVectorOntoPlaneInPlace(vector, planeNormal, result){
  return subtractVectorsInPlace(
    vector,
    projectVectorInPlace(vector, planeNormal, projectedAlongNormal),
    result
  );
}
//---------------------------------
export const planeNormal = (t0, t1, t2) =>{
  let vectorA = subtractVectors(t1, t2);
  let vectorB = subtractVectors(t1, t0);
  return vectorCross(vectorA, vectorB);
};


const planeNormalVectorA = [0,0,0];
const planeNormalVectorB = [0,0,0];
export function planeNormalInPlace(triangle, result, resultStart = 0){
  subtractVectorsInPlace(triangle[1], triangle[2], planeNormalVectorA);
  subtractVectorsInPlace(triangle[1], triangle[0], planeNormalVectorB);
  return vectorCrossInPlace(planeNormalVectorA, planeNormalVectorB, result, resultStart)
}

const planeNormalTemp = [0,0,0];
const pointOffsetTemp = [0,0,0];
const triangleSideTemp = [0,0,0];
const sideOffsetCrossTemp = [0,0,0];
/**
triangle configuration :
t2

          t1


t0
*/
export const triangleContainsPoint =  (p, triangle) =>{
  planeNormalInPlace(triangle, planeNormalTemp);

  //this checks if the first side is ahead of the point clockwise
  subtractVectorsInPlace(triangle[1], triangle[0], triangleSideTemp);
  subtractVectorsInPlace(p, triangle[0], pointOffsetTemp);
  vectorCrossInPlace(triangleSideTemp,pointOffsetTemp, sideOffsetCrossTemp);
  if(vectorDot(sideOffsetCrossTemp, planeNormalTemp) < 0) return false;

  //same thing for 2nd side
  subtractVectorsInPlace(triangle[2], triangle[1], triangleSideTemp);
  subtractVectorsInPlace(p, triangle[1], pointOffsetTemp);
  vectorCrossInPlace(triangleSideTemp,pointOffsetTemp, sideOffsetCrossTemp);
  if(vectorDot(sideOffsetCrossTemp, planeNormalTemp) < 0) return false;

  //3rd side
  subtractVectorsInPlace(triangle[0], triangle[2], triangleSideTemp);
  subtractVectorsInPlace(p, triangle[2], pointOffsetTemp);
  vectorCrossInPlace(triangleSideTemp,pointOffsetTemp, sideOffsetCrossTemp);
  if(vectorDot(sideOffsetCrossTemp, planeNormalTemp) < 0) return false;

  return true;
};

export const scaleVector = (vec, scale)=>{
  const newVec = [];
  for(let i = 0; i < vec.length; ++i){
    newVec.push(vec[i] *scale);
  }
  return newVec;
};

export function scaleVectorInPlace(vector, scale){
  for(let i = 0; i < vec.length; ++i){
    vector[i] *= scale;
  }
  return vector;
}


//----------------------------------------------------------//
export const multiplyVec4ByMatrix4 = (matrix, vec) =>{
  if(vec.length < 4){
    vec = vec.concat(0);
  }
  const result = [0,0,0,0];
  for(let i = 0; i < 4; ++i){
    for(let j = 0; j < 4; ++j){
      result[j] += matrix[i * 4 + j] * vec[i];
    }
  }
  return result;
};

const vectorTransformTemp = [0,0,0];
export function multiplyVec3ByMatrix4InPlace(matrix, vec, result){
  for(let i = 0; i <3; ++i){
    vectorTransformTemp[i] = 0;
  }
  for(let i = 0; i < 3; ++i){
    for(let j=0; j<3; ++j){
      vectorTransformTemp[j] += matrix[i * 4 + j] * vec[i];
    }
    for(let j =0; j<3; ++j){
      vectorTransformTemp[j] +=matrix[12 + j];
    }
  }
  for(let i = 0; i <3; ++i){
    result[i] = vectorTransformTemp[i];
  }
  return result;
}

export function rotateVec3byMatrix4InPlace(matrix, vec, result){
  for(let i = 0; i <3; ++i){
    vectorTransformTemp[i] = 0;
  }
  for(let i = 0; i < 3; ++i){
    for(let j=0; j<3; ++j){
      vectorTransformTemp[j] += matrix[i * 4 + j] * vec[i];
    }
  }
  for(let i = 0; i <3; ++i){
    result[i] = vectorTransformTemp[i];
  }
  return result;
};

//------------------------------------------------------------------------//
export const vectorMag = (vector)=>{
  return Math.sqrt(vectorSquareMag(vector));
};

export const vectorNormalize = (vector)=>{
  const mag = vectorMag(vector);
  if(mag === 0) return vector;
  return scaleVector(vector, 1/mag);
};
export const vectorTriangleIntersection = (origin, direction, t0, t1, t2)=>{
  const normal = vectorCross(subtractVectors(t1, t2),
  subtractVectors(t1, t0));
  const diffVector = subtractVectors(origin, t0);
  const magnitude = -1 * vectorDot(diffVector, normal) / vectorDot(direction, normal);
  return addVectors(origin, scaleVector(direction, magnitude));
};

export const axisToVec = (axis,vec)=>{
  const angle = angleBetweenVectors(axis.slice(0,3), vec.slice(0,3));
  if(Math.abs(angle) < 0.005){
    return identityMatrix4;
  }
  const rotAxis = vectorCross(vec, axis);
  return axisAngleToMatrix(rotAxis, angle);
};

export const axisAngleToMatrix = (axis, angle) =>{
  axis = vectorNormalize(axis);
  const x = axis[0];
  const y = axis[1];
  const z = axis[2];
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const t = 1 - c;
  return(
  [
    t*x*x+c, t*x*y-z*s, t*x*z+y*s,0,
    t*x*y+z*s, t*y*y+c, t*y*z-x*s, 0,
    t*x*z-y*s, t*y*z+x*s, t*z*z+c, 0,
    0,         0,         0,       1
  ]);
};

export const bounceVectorOffPlane = (vector, planeNormal) =>{
  planeNormal = vectorNormalize(planeNormal);
  return addVectors(
    scaleVector(
      planeNormal,
      -2 * vectorDot(vector, planeNormal)
    ),
    vector
  );
};

export function distance(vector0, vector1){
  return vectorMag(subtractVectors(vector0, vector1));
}

export const twoVectorsToQuaternion = (vec1, vec2) => {
  const axis = vectorNormalize(vectorCross(vec1, vec2));
  const angle = angleBetweenVectors(vec1, vec2);
  return axisAngleToQuaternion(axis, angle);
};

export const axisAngleToQuaternion = (axis, angle) => {
  axis = vectorNormalize(axis);
  const sinOverTwo = Math.sin(angle/2);
  return [
    Math.cos(angle/2),
    axis[0] * sinOverTwo,
    axis[1] * sinOverTwo,
    axis[2] * sinOverTwo
  ];
};

export const angleBetweenVectors = (to, from)=>{
  to = vectorNormalize(to);
  from = vectorNormalize(from);
  const dot =vectorDot(to,from)
  if( Math.abs(dot) > 1){
    return 0;
  }
  return Math.acos(dot);
}
export const multiplyQuaternions = (q1, q2) => [
  q1[0] * q2[0] - q1[1] * q2[1] - q1[2] * q2[2] - q1[3] * q2[3],
  q1[0] * q2[1] + q1[1] * q2[0] + q1[2] * q2[3] - q1[3] * q2[2],
  q1[0] * q2[2] - q1[1] * q1[3] + q1[2] * q2[0] + q1[3] * q2[1],
  q1[0] * q2[3] + q1[1] * q2[2] - q1[2] * q2[1] + q1[3] * q2[0]
];

export const quaternionToMatrix = (q) =>{
  q = vectorNormalize(q);
  return [
  1 - q[2]*q[2]*2 - q[3]*q[3]*2, q[1]*q[2]*2 - q[3]*q[0]*2, q[1]*q[3]*2 + q[2]*q[0]*2, 0,
  q[1]*q[2]*2 + q[3]*q[0]*2, 1 - q[1]*q[1]*2 - q[3]*q[3]*2, q[2]*q[3]*2 - q[1]*q[0]*2, 0,
  q[1]*q[3]*2 - q[2]*q[0]*2, q[2]*q[3]*2 + q[1]*q[0]*2, 1 - q[1]*q[1]*2 - q[2]*q[2]*2, 0,
  0,                         0,                      0,                                1
  ];
}
/*
0  1   2  3
4  5   6  7
8  9  10 11
12 13  14 15
*/
export const setMatrixRotInPlace = (mat, q) =>{
  q = vectorNormalize(q);
  mat[0] = 1 - q[2]*q[2]*2 - q[3]*q[3]*2;
  mat[1] = q[1]*q[2]*2 - q[3]*q[0]*2;
  mat[2] = q[1]*q[3]*2 + q[2]*q[0]*2;
  mat[4] = q[1]*q[2]*2 + q[3]*q[0]*2;
  mat[5] = 1 - q[1]*q[1]*2 - q[3]*q[3]*2;
  mat[6] = q[2]*q[3]*2 - q[1]*q[0]*2;
  mat[8] = q[1]*q[3]*2 - q[2]*q[0]*2;
  mat[9] = q[2]*q[3]*2 + q[1]*q[0]*2;
  mat[10] = 1 - q[1]*q[1]*2 - q[2]*q[2]*2;
};
export const setMatrixLocInPlace = (mat, vec) =>{
  mat[3] = vec[0];
  mat[7] = vec[1];
  mat[11] = vec[2];
};
export const IdentityQuaternion = [1,0,0,0];

export const lerpQuaternions = (quat1, quat2, lerpAmount) =>{
  let result = [];
  for(let i = 0; i < 4; ++i){
    result.push(quat1[i] * lerpAmount + quat2[i] * (1 - lerpAmount));
  }
  return result;
}

export const scaleQuaternion = (quat1, scale) => lerpQuaternions(quat1, IdentityQuaternion,  scale);
