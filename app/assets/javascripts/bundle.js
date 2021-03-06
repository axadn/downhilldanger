/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
const mat_4_multiply = (matrix0, matrix1)=>{
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
/* harmony export (immutable) */ __webpack_exports__["mat_4_multiply"] = mat_4_multiply;


const identityMatrix4 = [
  1,0,0,0,
  0,1,0,0,
  0,0,1,0,
  0,0,0,1
];
/* harmony export (immutable) */ __webpack_exports__["identityMatrix4"] = identityMatrix4;

const translationMatrix = (x,y,z) =>([
  1,0,0,0,
  0,1,0,0,
  0,0,1,0,
  x,y,z,1
]);
/* harmony export (immutable) */ __webpack_exports__["translationMatrix"] = translationMatrix;

const scaleMatrix =(x,y,z) => ([
  x,0,0,0,
  0,y,0,0,
  0,0,z,0,
  0,0,0,1
]);
/* harmony export (immutable) */ __webpack_exports__["scaleMatrix"] = scaleMatrix;


const xRotationMatrix = radians =>{
  const s = Math.sin(radians);
  const c = Math.cos(radians);
  return[
    1, 0, 0, 0,
    0, c, s, 0,
    0, -s, c, 0,
    0, 0, 0, 1
  ]
};
/* harmony export (immutable) */ __webpack_exports__["xRotationMatrix"] = xRotationMatrix;


const yRotationMatrix = radians => {
  const s = Math.sin(radians);
  const c = Math.cos(radians);
  return[
    c, 0, -s, 0,
    0, 1, 0, 0,
    s, 0, c, 0,
    0, 0, 0, 1
  ];
};
/* harmony export (immutable) */ __webpack_exports__["yRotationMatrix"] = yRotationMatrix;


const zRotationMatrix = radians => {
  const s = Math.sin(radians);
  const c = Math.cos(radians);
  return [
    c, s, 0, 0,
   -s, c, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ];
};
/* harmony export (immutable) */ __webpack_exports__["zRotationMatrix"] = zRotationMatrix;


const inverse_mat4_rot_pos = mat=>{
  /*invert a matrix that contains only rot and pos :
  * break down the matrix into a rotation and position component
  * transpose the rotation component
  * recombine them in reverse order (translation then rotation)
  *

  mat (indices) =
  0  1  2  3
  4  5  6  7
  8  9  10 11
  12 13 14 15

  inverse translation =
  1 0 0 -tx
  0 1 0 -ty
  0 0 1 -tz
  0 0 0  1

  rotation =
  ux vx wx 0
  uy vy vy 0
  uz vz wz 0
  0  0  0  1

  therefore, inverse rotation indexes =
  0  4  8
  1  5  9
  2  6  10

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
/* harmony export (immutable) */ __webpack_exports__["inverse_mat4_rot_pos"] = inverse_mat4_rot_pos;


const swapYZMatrix =[
//x,y,z,w
  1,0,0,0,//x
  0,0,1,0,//y
  0,1,0,0,//z
  0,0,0,1,//w
];
/* harmony export (immutable) */ __webpack_exports__["swapYZMatrix"] = swapYZMatrix;

const simple_perspective_matrix = [
  1,0,0,0,
  0,1,0,0,
  0,0,1,1,
  0,0,0,1
];
/* harmony export (immutable) */ __webpack_exports__["simple_perspective_matrix"] = simple_perspective_matrix;


const translate_mat4 = (mat, x =0, y=0, z=0)=>{
    return mat_4_multiply(
      mat, translationMatrix(x,y,z)
    );
}
/* harmony export (immutable) */ __webpack_exports__["translate_mat4"] = translate_mat4;


const pointIsAbovePlane = (pos, vertex0, vertex1, vertex2)=>{
   // the normal to the plane

  const offsetVector = subtractVectors(pos, vertex1);
  // a vector from a point on the plane to the point we are checking

  return vectorDot(offsetVector, planeNormal(vertex0,
  vertex1, vertex2)) > 0;
}
/* harmony export (immutable) */ __webpack_exports__["pointIsAbovePlane"] = pointIsAbovePlane;


const addVectors = (vector1, vector2)=>{
  const newVector = [];
  for(let i = 0; i< vector1.length; ++i){
    newVector.push(vector1[i] + vector2[i]);
  };
  return newVector;
}
/* harmony export (immutable) */ __webpack_exports__["addVectors"] = addVectors;


const vectorCross = (vector1, vector2)=>([
  vector1[1] * vector2[2] - vector1[2] * vector2[1],
  vector1[2] * vector2[0] - vector1[0] * vector2[2],
  vector1[0] * vector2[1] - vector1[1] * vector2[0]
]);
/* harmony export (immutable) */ __webpack_exports__["vectorCross"] = vectorCross;


const subtractVectors = (vector1, vector2)=>{
  const newVector = [];
  for(let i = 0; i < vector1.length; ++i){
    newVector.push(vector1[i] - vector2[i]);
  }
  return newVector;
}
/* harmony export (immutable) */ __webpack_exports__["subtractVectors"] = subtractVectors;


const vectorDot = (vector1, vector2) =>{
  return vector1[0] * vector2[0] + vector1[1] * vector2[1] +
  vector1[2] * vector2[2];
}
/* harmony export (immutable) */ __webpack_exports__["vectorDot"] = vectorDot;


/* indices
0  1  2  3
4  5  6  7
8  9  10 11
12 13 14 15

*/
const mat4TranslationComponent = (mat) =>{
  return[
    mat[12],
    mat[13],
    mat[14]
  ];
};
/* harmony export (immutable) */ __webpack_exports__["mat4TranslationComponent"] = mat4TranslationComponent;

const mat4RotationComponent = (mat) =>(
    [
      mat[0], mat[1], mat[2], 0,
      mat[4], mat[5], mat[6], 0,
      mat[8], mat[9], mat[10],0,
      0,      0,     0,       1
    ]
);
/* harmony export (immutable) */ __webpack_exports__["mat4RotationComponent"] = mat4RotationComponent;


const vectorSquareMag = vector => {
  let sum = 0;
  for(let i = 0; i < vector.length; ++i){
    sum += vector[i] * vector[i];
  }
  return sum;
};
/* harmony export (immutable) */ __webpack_exports__["vectorSquareMag"] = vectorSquareMag;


const projectVector = (vector, onto)=>{
  const dotProduct = vectorDot(vector, onto);
  return scaleVector(onto, dotProduct/ vectorSquareMag(onto));
};
/* harmony export (immutable) */ __webpack_exports__["projectVector"] = projectVector;


const projectVectorOntoPlane = (vector, planeNormal)=>{
  return subtractVectors(vector.slice(0,3), projectVector(vector, planeNormal));
};
/* harmony export (immutable) */ __webpack_exports__["projectVectorOntoPlane"] = projectVectorOntoPlane;


const planeNormal = (t0, t1, t2) =>{
  let vectorA = subtractVectors(t1, t2);
  let vectorB = subtractVectors(t1, t0);
  return vectorCross(vectorA, vectorB);
};
/* harmony export (immutable) */ __webpack_exports__["planeNormal"] = planeNormal;


const triangleContainsPoint =  (p, p0, p1, p2) =>{
  const n = planeNormal(p0,p1,p2);
  return(
  vectorDot(
    vectorCross(subtractVectors(p1, p0), subtractVectors(p, p0)),
    n) >= 0 &&
    vectorDot(
      vectorCross(subtractVectors(p2, p1), subtractVectors(p, p1)),
      n) >= 0 &&
      vectorDot(
        vectorCross(subtractVectors(p0, p2), subtractVectors(p, p2)),
        n) >= 0);

};
/* harmony export (immutable) */ __webpack_exports__["triangleContainsPoint"] = triangleContainsPoint;


const scaleVector = (vec, scale)=>{
  const newVec = [];
  for(let i = 0; i < vec.length; ++i){
    newVec.push(vec[i] *scale);
  }
  return newVec;
};
/* harmony export (immutable) */ __webpack_exports__["scaleVector"] = scaleVector;


const multiplyVec4ByMatrix4 = (matrix, vec) =>{
  if(vec.length < 4){
    debugger;
    vec = vec.concat(0);
  }
  const result = [];
  for(let i = 0; i < 4; ++i){
    let colResult = 0;
    for(let j = 0; j < 4; ++j){
      colResult += matrix[j * 4 + i] * vec[j];
    }
    result.push(colResult);
  }
  return result;
};
/* harmony export (immutable) */ __webpack_exports__["multiplyVec4ByMatrix4"] = multiplyVec4ByMatrix4;


/**
triangle configuration :
t2

          t1


t0
*/
const vectorMag = (vector)=>{
  return Math.sqrt(vectorSquareMag(vector));
};
/* harmony export (immutable) */ __webpack_exports__["vectorMag"] = vectorMag;


const vectorNormalize = (vector)=>{
  const mag = vectorMag(vector);
  if(mag === 0) return vector;
  return scaleVector(vector, 1/mag);
};
/* harmony export (immutable) */ __webpack_exports__["vectorNormalize"] = vectorNormalize;

const vectorTriangleIntersection = (origin, direction, t0, t1, t2)=>{
  const normal = vectorCross(subtractVectors(t1, t2),
  subtractVectors(t1, t0));
  const diffVector = subtractVectors(origin, t0);
  const magnitude = -1 * vectorDot(diffVector, normal) / vectorDot(direction, normal);
  return addVectors(origin, scaleVector(direction, magnitude));
};
/* harmony export (immutable) */ __webpack_exports__["vectorTriangleIntersection"] = vectorTriangleIntersection;


const axisToVec = (axis,vec)=>{
  const angle = angleBetweenVectors(axis.slice(0,3), vec.slice(0,3));
  if(Math.abs(angle) < 0.005){
    return identityMatrix4;
  }
  const rotAxis = vectorCross(vec, axis);
  return axisAngleToMatrix(rotAxis, angle);
};
/* harmony export (immutable) */ __webpack_exports__["axisToVec"] = axisToVec;


const axisAngleToMatrix = (axis, angle) =>{
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
/* harmony export (immutable) */ __webpack_exports__["axisAngleToMatrix"] = axisAngleToMatrix;


const bounceVectorOffPlane = (vector, planeNormal) =>{
  planeNormal = vectorNormalize(planeNormal);
  return addVectors(
    scaleVector(
      planeNormal,
      -2 * vectorDot(vector, planeNormal)
    ),
    vector
  );
};
/* harmony export (immutable) */ __webpack_exports__["bounceVectorOffPlane"] = bounceVectorOffPlane;


function distance(vector0, vector1){
  return vectorMag(subtractVectors(vector0, vector1));
}

const twoVectorsToQuaternion = (vec1, vec2) => {
  const axis = vectorNormalize(vectorCross(vec1, vec2));
  const angle = angleBetweenVectors(vec1, vec2);
  return axisAngleToQuaternion(axis, angle);
};
/* harmony export (immutable) */ __webpack_exports__["twoVectorsToQuaternion"] = twoVectorsToQuaternion;


const axisAngleToQuaternion = (axis, angle) => {
  axis = vectorNormalize(axis);
  const sinOverTwo = Math.sin(angle/2);
  return [
    Math.cos(angle/2),
    axis[0] * sinOverTwo,
    axis[1] * sinOverTwo,
    axis[2] * sinOverTwo
  ];
};
/* harmony export (immutable) */ __webpack_exports__["axisAngleToQuaternion"] = axisAngleToQuaternion;


const angleBetweenVectors = (to, from)=>{
  to = vectorNormalize(to);
  from = vectorNormalize(from);
  const dot =vectorDot(to,from)
  if(Math.abs(dot) <0.005 || Math.abs(dot) > 1){
    return 0;
  }
  if(isNaN(Math.acos(dot))) debugger;
  return Math.acos(dot);
}
/* harmony export (immutable) */ __webpack_exports__["angleBetweenVectors"] = angleBetweenVectors;

const multiplyQuaternions = (q1, q2) => [
  q1[0] * q2[0] - q1[1] * q2[1] - q1[2] * q2[2] - q1[3] * q2[3],
  q1[0] * q2[1] + q1[1] * q2[0] + q1[2] * q2[3] - q1[3] * q2[2],
  q1[0] * q2[2] - q1[1] * q1[3] + q1[2] * q2[0] + q1[3] * q2[1],
  q1[0] * q2[3] + q1[1] * q2[2] - q1[2] * q2[1] + q1[3] * q2[0]
];
/* harmony export (immutable) */ __webpack_exports__["multiplyQuaternions"] = multiplyQuaternions;


const quaternionToMatrix = (q) =>{
  q = vectorNormalize(q);
  return [
  1 - q[2]*q[2]*2 - q[3]*q[3]*2, q[1]*q[2]*2 - q[3]*q[0]*2, q[1]*q[3]*2 + q[2]*q[0]*2, 0,
  q[1]*q[2]*2 + q[3]*q[0]*2, 1 - q[1]*q[1]*2 - q[3]*q[3]*2, q[2]*q[3]*2 - q[1]*q[0]*2, 0,
  q[1]*q[3]*2 - q[2]*q[0]*2, q[2]*q[3]*2 + q[1]*q[0]*2, 1 - q[1]*q[1]*2 - q[2]*q[2]*2, 0,
  0,                         0,                      0,                                1
  ];
}
/* harmony export (immutable) */ __webpack_exports__["quaternionToMatrix"] = quaternionToMatrix;

/*
0  1   2  3
4  5   6  7
8  9  10 11
12 13  14 15
*/
const setMatrixRotInPlace = (mat, q) =>{
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
/* harmony export (immutable) */ __webpack_exports__["setMatrixRotInPlace"] = setMatrixRotInPlace;

const setMatrixLocInPlace = (mat, vec) =>{
  mat[3] = vec[0];
  mat[7] = vec[1];
  mat[11] = vec[2];
};
/* harmony export (immutable) */ __webpack_exports__["setMatrixLocInPlace"] = setMatrixLocInPlace;

const IdentityQuaternion = [1,0,0,0];
/* harmony export (immutable) */ __webpack_exports__["IdentityQuaternion"] = IdentityQuaternion;


const lerpQuaternions = (quat1, quat2, lerpAmount) =>{
  let result = [];
  for(let i = 0; i < 4; ++i){
    result.push(quat1[i] * lerpAmount + quat2[i] * (1 - lerpAmount));
  }
  return result;
}
/* harmony export (immutable) */ __webpack_exports__["lerpQuaternions"] = lerpQuaternions;


const scaleQuaternion = (quat1, scale) => lerpQuaternions(quat1, IdentityQuaternion,  scale);
/* harmony export (immutable) */ __webpack_exports__["scaleQuaternion"] = scaleQuaternion;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__ = __webpack_require__(0);
const DEFAULT_ANIMATION_FRAMERATE = 60;
/* unused harmony export DEFAULT_ANIMATION_FRAMERATE */

const UPDATE_INTERVAL = 33;
/* unused harmony export UPDATE_INTERVAL */

const ANGULAR_DRAG = 0.3;
const DRAG = 0.4;

class GameObject {
  constructor(mesh, transformationMatrix = __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["identityMatrix4"]){
    this.mesh = mesh;
    this._transformationMatrix = transformationMatrix.slice(0,16);
    this._position = __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["mat4TranslationComponent"](transformationMatrix);
    this._rotation = __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["IdentityQuaternion"];
    this.velocity = [0,0,0];
    setInterval(this.update.bind(this), UPDATE_INTERVAL);
    this.angularVelocity = __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["IdentityQuaternion"];
  }

  update(timestamp){
    if(this.name == "snowboarder" && isNaN(this.velocity[0])){
      debugger;
    }
    this._applyVelocityStep();
    if(this.name == "snowboarder" && isNaN(this.velocity[0])){
      debugger;
    }
    this._applyAngularVelocityStep();
    if(this.name == "snowboarder" && isNaN(this.velocity[0])){
      debugger;
    }
    let localVelocity = this.inverseTransformDirection(this.velocity);
    if(this.name == "snowboarder" && isNaN(localVelocity[0])){
      debugger;
    }
    if(this.name == "snowboarder" && isNaN(this.velocity[0])){
      debugger;
    }
    this._applyDragStep();
    if(this.name == "snowboarder" && isNaN(this.velocity[0])){
      debugger;
    }
    this._applyAngularDragStep();
    if(this.name == "snowboarder" && isNaN(this.velocity[0])){
      debugger;
    }
    this.velocity = this.transformDirection(localVelocity);
    if(this.name == "snowboarder" && isNaN(this.velocity[0])){
      debugger;
    } 
  }

  _applyVelocityStep(){
    this.setPosition(__WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["addVectors"](this._position, this.velocity));
    if(this.name == "snowboarder" &&isNaN(this.getPosition()[0])){
      debugger;
    }
  }
  _applyAngularVelocityStep(){
    if(this.name == "snowboarder" && isNaN(this.angularVelocity[0])|| isNaN(this.getRotation()[0])){
      debugger;
    }
    this.setRotation(__WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["multiplyQuaternions"](this.angularVelocity,this.getRotation()));
    if(this.name == "snowboarder" && isNaN(this.angularVelocity[0])|| isNaN(this.getRotation()[0])){
      debugger;
    }
  }
  addAngularVelocity(quat){
    if(this.name == "snowboarder" && isNaN(this.angularVelocity[0])|| isNaN(this.getRotation()[0])){
      debugger;
    }
    quat = __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["vectorNormalize"](quat);
    if(this.name == "snowboarder" && isNaN(this.angularVelocity[0])|| isNaN(this.getRotation()[0])){
      debugger;
    }
    this.angularVelocity =  __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["multiplyQuaternions"](this.angularVelocity, quat);
    if(this.name == "snowboarder" && isNaN(this.angularVelocity[0])|| isNaN(this.getRotation()[0])){
      debugger;
    }
    this.angularVelocity = __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["vectorNormalize"](this.angularVelocity);
    if(this.name == "snowboarder" && isNaN(this.angularVelocity[0])|| isNaN(this.getRotation()[0])){
      debugger;
    }
  }
  _applyDragStep(){
    for(let i = 0; i < this.velocity.length; ++i){
      this.velocity[i] -= this.velocity[i] * DRAG;
    }
  }
  _applyAngularDragStep(){
    if(this.name == "snowboarder" && isNaN(this.angularVelocity[0])|| isNaN(this.getRotation()[0])){
      debugger;
    }
    this.angularVelocity = __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["scaleQuaternion"](this.angularVelocity, 1 - ANGULAR_DRAG);
    if(this.name == "snowboarder" && isNaN(this.angularVelocity[0])|| isNaN(this.getRotation()[0])){
      debugger;
    }
  }

  transformPoint(point){
    return __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["multiplyVec4ByMatrix4"](
      this._transformationMatrix, point.concat([1])).slice(0,3);

  }
  transformDirection(direction){
    return __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["multiplyVec4ByMatrix4"](
      __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["mat4RotationComponent"](this._transformationMatrix),
       direction.concat([1])).slice(0,3);
  }
  inverseTransformPoint(point){
    return __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["multiplyVec4ByMatrix4"](
      __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["inverse_mat4_rot_pos"](this._transformationMatrix),
      point.concat([1])
    ).slice(0,3);
  }
  inverseTransformDirection(direction){
    return __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["multiplyVec4ByMatrix4"](
      __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["inverse_mat4_rot_pos"](
        __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["mat4RotationComponent"](this._transformationMatrix)
      ),
      direction.concat([1])
    ).slice(0,3);
  }
  /*
   0  1   2  3
   4  5   6  7
   8  9  10 11
  12 13  14 15
  */
  setPosition(position){
    this._position = position;
    this._transformationMatrix[12] = position[0];
    this._transformationMatrix[13] = position[1];
    this._transformationMatrix[14] = position[2];
  }
  getRotation(){
    return this._rotation;
  }
  getPosition(){
    return this._position;
  }
  setRotation(rotQuat){
    this._rotation = __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["vectorNormalize"](rotQuat);
    __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["setMatrixRotInPlace"](this._transformationMatrix,this._rotation);
  }
  getTransformationMatrix(){
    return this._transformationMatrix;
  }
  playAnimation(name, loop = true){
    this.isPlayingAnimation = true;
    this.currentAnimation = name;
    this.currentAnimationFrame = 0;
    this.animationWillLoop = loop;
    this.currentAnimationFramerate = DEFAULT_ANIMATION_FRAMERATE;
  }
  updateFrame(){
    ++this.currentAnimationFrame;
    if(this.currentAnimationFrame = this.mesh.animations[this.currentAnimation].length){
      if(this.animationWillLoop){
        this.currentAnimationFrame = 0;
      }
      else{
        --this.currentAnimationFrame;
        this.isPlayingAnimation = false;
      }
    }
  }
  shouldUpdate(timestamp){
    return (this.lastTimeStamp &&
      timestamp - this.lastTimeStamp > 1000 / this.currentAnimationFramerate);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameObject;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__ = __webpack_require__(0);

class Mesh {
  constructor({vertices, faces, bones, colors, uvs, boneWeights, boneIndices, animations, bindPose,
    colored, skinned, textured, rasterizer, textureBuffer, img_src}){
    this.vertices = vertices;
    this.colored = colored;
    this.textured = textured;
    this.skinned = skinned;
    this.faces = faces;
    this.bones = bones;
    this.colors = colors;
    this.uvs = uvs;
    this.boneWeights = boneWeights;
    this.boneIndices = boneIndices;
    this.animations = animations;
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Mesh;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_math_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_webgl_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__untitled_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boxMan_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_object_game_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skybox_json__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skybox_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__skybox_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__character_character__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slope_slope__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_object_mesh__ = __webpack_require__(2);










document.addEventListener("DOMContentLoaded", main);
function main(){
  const rasterizer = new __WEBPACK_IMPORTED_MODULE_1__utils_webgl_utils__["a" /* ObjectsRasterizer */]();
  const slope = new __WEBPACK_IMPORTED_MODULE_8__slope_slope__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__utils_math_utils__["translationMatrix"](0,-3,-4), rasterizer, "assets/snow.jpg");
  window.slope = slope;

  //boxManMesh.skinned = true;
  __WEBPACK_IMPORTED_MODULE_4__boxMan_js__["a" /* default */].colored = true;
  //boxManMesh.textured = true;
  const boxMan = new __WEBPACK_IMPORTED_MODULE_7__character_character__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_9__game_object_mesh__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4__boxMan_js__["a" /* default */]), undefined, slope);
  //boxMan.playAnimation("rest");
  rasterizer.objects.boxMan = boxMan;
  __WEBPACK_IMPORTED_MODULE_6__skybox_json___default.a.img_src = "assets/skybox.jpg";
  __WEBPACK_IMPORTED_MODULE_6__skybox_json___default.a.textured = true;
  __WEBPACK_IMPORTED_MODULE_6__skybox_json___default.a.rasterizer = rasterizer;
  let skyMesh = new __WEBPACK_IMPORTED_MODULE_9__game_object_mesh__["a" /* default */](__WEBPACK_IMPORTED_MODULE_6__skybox_json___default.a);
  skyMesh.buffers = rasterizer.sendMeshToGPU(skyMesh);
  rasterizer.skyBox = new __WEBPACK_IMPORTED_MODULE_5__game_object_game_object__["a" /* default */](skyMesh);
  window.requestAnimationFrame(rasterizer.drawObjects.bind(rasterizer));
//  window.requestAnimationFrame(
//    () => rasterizer.draw(boxMan));

  window.rasterizer = rasterizer;
  rasterizer.cameraTarget = boxMan;
  slope.generateSegment();

  //slope.mesh.buffers = rasterizer.sendMeshToGPU(slope.mesh);
  window.addEventListener('keydown', handleKeyDown(rasterizer));
  rasterizer.position[1] -= 2;
  rasterizer.position[0] += 0.3;
  rasterizer.rotation[0] -= 0.4;
  rasterizer.position[2] += 0.7;
  rasterizer.objects.slope = slope;
  rasterizer.position = [0,-6,0];

  window.addEventListener("keydown", __WEBPACK_IMPORTED_MODULE_2__input_js__["a" /* keyDown */](boxMan));
  window.addEventListener("keyup", __WEBPACK_IMPORTED_MODULE_2__input_js__["b" /* keyUp */](boxMan));

}
const handleKeyDown = rasterizer => e => {
  switch(e.key){
    case "ArrowUp":
      rasterizer.rotation[0] += 0.1;
      break;
    case "ArrowDown":
      rasterizer.rotation[0] -= 0.1;
      break;
    case "ArrowLeft":
      rasterizer.rotation[2] += 0.1;
      break;
    case "ArrowRight":
    rasterizer.rotation[0] -= 0.1;
      break;
    case "a":
      rasterizer.position[1] += 0.1;
      break;
    case "w":
      rasterizer.position[1] -=0.1;
      break;
    case "s":
    rasterizer.position[2] += 0.1;
      break;
    case "d":
    rasterizer.position[2] -= 0.1;
      break;
  }

}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createProgram */
/* unused harmony export compileShader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_object_game_object__ = __webpack_require__(1);
const DEFAULT_CAMERA_DIST = 1;



class ObjectsRasterizer{
  constructor(scale= 0.5, swapYZ = true){
    const canvas = document.querySelector("#glCanvas");
    this.gl = canvas.getContext("webgl");
    if(!this.gl){
      alert("Unable to initialize WebGL. Your browser or machine may not support it");
      return;
    }

    this.cameraDist = DEFAULT_CAMERA_DIST;
    this.viewMatrix = __WEBPACK_IMPORTED_MODULE_0__math_utils__["identityMatrix4"];
    this.perspectiveMatrix = __WEBPACK_IMPORTED_MODULE_0__math_utils__["mat_4_multiply"](__WEBPACK_IMPORTED_MODULE_0__math_utils__["simple_perspective_matrix"],
      __WEBPACK_IMPORTED_MODULE_0__math_utils__["scaleMatrix"](scale, scale, scale));
    if(swapYZ){
      this.perspectiveMatrix = __WEBPACK_IMPORTED_MODULE_0__math_utils__["mat_4_multiply"](__WEBPACK_IMPORTED_MODULE_0__math_utils__["swapYZMatrix"], this.perspectiveMatrix)
    }
    this.compileDefaultShaders();
    //this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.rotation = [0,0,0];
    this.position = [0,0,0];

    this.objects = {};
    this.camera = new __WEBPACK_IMPORTED_MODULE_1__game_object_game_object__["a" /* default */]();
  }
  compileDefaultShaders(){
    this.defaultProgram = this.compileByID("default-vertex-shader", "default-fragment-shader");
    this.coloredProgram = this.compileByID("colored-vertex-shader", "colored-fragment-shader");
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
    let strideLength = skinned ?  20: 12;
    if(textured) strideLength += 8;
    else if (colored) strideLength += 4;
    return strideLength;
  }

  /*
   create gpu buffer layout:
    pos                   bone weights      bone indexes
    float*3 = 12 bytes + unsigned byte *4 + unsigned byte *4
    = 20 bytes per vertex if skinned or 12 if unskinned

  add this if textured:
    uvs
    unsigned_short * 2 = 4 bytes

  or add this if using vertex colors instead of textures:
    colors
    unsigned_short * 4 = 8 bytes

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
        for(let i= 0; i< 4; ++i){
          dataView.setUint8(offset++, mesh.boneWeights[weightIdx++], littleEndian);
        }
        for(let i = 0; i <4; ++i){
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
      }Obj
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
    img.addEventListener("load", ()=>{
      this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
      this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, img);
      this.gl.generateMipmap(this.gl.TEXTURE_2D);
    });
    return texture;
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
      this.gl.vertexAttribPointer(weightsAttrIndex, 4, this.gl.UNSIGNED_BYTE, true, strideLength, offset);
      this.gl.enableVertexAttribArray(weightsAttrIndex);
      offset += 4;
      this.gl.vertexAttribPointer(boneIndicesIndex, 4, this.gl.UNSIGNED_BYTE, false, strideLength, offset);
      this.gl.enableVertexAttribArray(boneIndicesIndex);
      offset += 4;

      //fill the bones with identity matrix
    //  let identities = [];
    //  for(let i = 0; i < 20; ++i){
      //  identities = identities.concat(MathUtils.identityMatrix4);
    //  }
  //  debugger;
        // let composed = [];
         const boneTransforms = obj.mesh.animations[obj.currentAnimation][obj.currentAnimationFrame];
        // for(let i = 0; i < boneTransforms.length; ++i){
        //   if(obj.mesh.bones[i].parent !== -1){
        //     composed.push(MathUtils.mat_4_multiply(
        //       composed[obj.mesh.bones[i].parent], boneTransforms[i]));
        //   }
        //   else{
        //     composed.push(boneTransforms[i]);
        //   }
        // }
        let unBound = [];
        for(let i = 0; i < boneTransforms.length; ++i){
          unBound = unBound.concat(__WEBPACK_IMPORTED_MODULE_0__math_utils__["mat_4_multiply"](
            boneTransforms[i],
            __WEBPACK_IMPORTED_MODULE_0__math_utils__["inverse_mat4_rot_pos"](obj.mesh.bones[i].bindPose)
            ));
        }
        //for(let i = 0; i < boneTransforms.length; ++i){
        //  inverselyBound = inverselyBound.concat(
        //    MathUtils.mat_4_multiply(
        //      MathUtils.inverse_mat4_rot_pos(obj.mesh.bones[i].bindPose),
        //        boneTransforms[i],
        //    ));
        //}
        const boneTransformsLocation = this.gl.getUniformLocation(program, "boneTransforms");
        this.gl.uniformMatrix4fv(boneTransformsLocation, false, unBound);
    }

    if(obj.mesh.textured){
      const uvsAttrIndex = this.gl.getAttribLocation(program, "a_uvs");
      this.gl.vertexAttribPointer(uvsAttrIndex, 2, this.gl.FLOAT, false, strideLength, offset);
      this.gl.enableVertexAttribArray(uvsAttrIndex);
      offset += 8;
      this.gl.bindTexture(this.gl.TEXTURE_2D, obj.mesh.texture);

      // Fill the texture with a 1x1 blue pixel. TODO: Use actual image textures
    }
    else if(obj.mesh.colored){
      const colorsAttrIndex = this.gl.getAttribLocation(program, "vColor");
      this.gl.vertexAttribPointer(colorsAttrIndex, 4, this.gl.UNSIGNED_BYTE, true, strideLength, offset);
      this.gl.enableVertexAttribArray(colorsAttrIndex);
      offset += 4;
    }
    let viewMatrix = __WEBPACK_IMPORTED_MODULE_0__math_utils__["mat_4_multiply"](obj.getTransformationMatrix(), this.viewMatrix);
    const viewMatrixUniformLocation = this.gl.getUniformLocation(program, "view_matrix");
    this.gl.uniformMatrix4fv(viewMatrixUniformLocation,false, viewMatrix);

    this.gl.drawElements(this.gl.TRIANGLES, obj.mesh.faces.length, this.gl.UNSIGNED_SHORT,0);
  }
  positionCamera(){
    this.camera.setPosition(this.cameraTarget.transformPoint([0, -18, 6]));
    const newPos = this.camera.getPosition();
    newPos[2] = this.cameraTarget.getPosition()[2] + 10;
    this.camera.setPosition(newPos);
    let rotation = this.cameraTarget.getRotation();
    const upLocal = this.cameraTarget.inverseTransformDirection([0,0,1]);
    const angleToUp = __WEBPACK_IMPORTED_MODULE_0__math_utils__["angleBetweenVectors"]([0,0,1], upLocal);
    const upAlignAxis = __WEBPACK_IMPORTED_MODULE_0__math_utils__["vectorCross"](upLocal, [0,0,1]);
    this.camera.setRotation(
      __WEBPACK_IMPORTED_MODULE_0__math_utils__["multiplyQuaternions"](
        __WEBPACK_IMPORTED_MODULE_0__math_utils__["axisAngleToQuaternion"](upAlignAxis, angleToUp),
        rotation
      )
    );
  }
  calculateViewMatrix(){
    //let cameraMatrix =  MathUtils.swapYZMatrix;
    let cameraMatrix = this.camera.getTransformationMatrix();
    let viewMatrix = __WEBPACK_IMPORTED_MODULE_0__math_utils__["inverse_mat4_rot_pos"](cameraMatrix);
    viewMatrix = __WEBPACK_IMPORTED_MODULE_0__math_utils__["mat_4_multiply"](viewMatrix, __WEBPACK_IMPORTED_MODULE_0__math_utils__["swapYZMatrix"])
    viewMatrix = __WEBPACK_IMPORTED_MODULE_0__math_utils__["mat_4_multiply"](viewMatrix, __WEBPACK_IMPORTED_MODULE_0__math_utils__["simple_perspective_matrix"]);
    return viewMatrix;
  }

  drawObjects(timestamp){
    this.adjustToCanvas();
    this.gl.clearColor(0.8, 0.8, 0.81, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.positionCamera();
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
    window.requestAnimationFrame(this.drawObjects.bind(this));
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ObjectsRasterizer;

// create a rasterization program from a vertex and fragment shader
function createProgram(gl, vertexShader, fragmentShader){
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
function compileShader(gl, type, source){
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
    alert("Could not compile shader" + gl.getShaderInfoLog(shader));
  }
  return shader;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const keyDown = character => e=>{
  switch(e.key){
    case "ArrowLeft":
    case "a":
      character.input.left = true;
      break;
    case "ArrowRight":
    case "d":
      character.input.right = true;
      break;
    case "ArrowDown":
    case "s":
      character.input.back = true;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = keyDown;


const keyUp = character => e => {
  switch(e.key){
    case "ArrowLeft":
    case "a":
      character.input.left = false;
      break;
    case "ArrowRight":
    case "d":
      character.input.right = false;
      break;
    case "ArrowDown":
    case "s":
      character.input.back = false;
      break;
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = keyUp;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const monkeyData ={
    "vertices": [0.46875, -0.757812, 0.242188, 0.4375, -0.765625, 0.164062, 0.5, -0.6875, 0.09375, -0.5, -0.6875, 0.09375, -0.4375, -0.765625, 0.164062, -0.46875, -0.757812, 0.242188, 0.5625, -0.671875, 0.242188, 0.5, -0.6875, 0.09375, 0.546875, -0.578125, 0.054688, -0.546875, -0.578125, 0.054688, -0.5, -0.6875, 0.09375, -0.5625, -0.671875, 0.242188, 0.5, -0.6875, 0.09375, 0.351562, -0.71875, 0.03125, 0.351562, -0.617188, -0.023438, -0.351562, -0.617188, -0.023438, -0.351562, -0.71875, 0.03125, -0.5, -0.6875, 0.09375, 0.4375, -0.765625, 0.164062, 0.351562, -0.78125, 0.132812, 0.351562, -0.71875, 0.03125, -0.351562, -0.71875, 0.03125, -0.351562, -0.78125, 0.132812, -0.4375, -0.765625, 0.164062, 0.351562, -0.78125, 0.132812, 0.273438, -0.796875, 0.164062, 0.203125, -0.742188, 0.09375, -0.203125, -0.742188, 0.09375, -0.273438, -0.796875, 0.164062, -0.351562, -0.78125, 0.132812, 0.351562, -0.71875, 0.03125, 0.203125, -0.742188, 0.09375, 0.15625, -0.648438, 0.054688, -0.15625, -0.648438, 0.054688, -0.203125, -0.742188, 0.09375, -0.351562, -0.71875, 0.03125, 0.140625, -0.742188, 0.242188, 0.078125, -0.65625, 0.242188, 0.15625, -0.648438, 0.054688, -0.140625, -0.742188, 0.242188, -0.203125, -0.742188, 0.09375, -0.15625, -0.648438, 0.054688, 0.242188, -0.796875, 0.242188, 0.140625, -0.742188, 0.242188, 0.203125, -0.742188, 0.09375, -0.242188, -0.796875, 0.242188, -0.273438, -0.796875, 0.164062, -0.203125, -0.742188, 0.09375, 0.242188, -0.796875, 0.242188, 0.273438, -0.796875, 0.328125, 0.203125, -0.742188, 0.390625, -0.203125, -0.742188, 0.390625, -0.273438, -0.796875, 0.328125, -0.242188, -0.796875, 0.242188, 0.203125, -0.742188, 0.390625, 0.15625, -0.648438, 0.4375, 0.078125, -0.65625, 0.242188, -0.203125, -0.742188, 0.390625, -0.140625, -0.742188, 0.242188, -0.078125, -0.65625, 0.242188, 0.351562, -0.71875, 0.453125, 0.351562, -0.617188, 0.515625, 0.15625, -0.648438, 0.4375, -0.351562, -0.71875, 0.453125, -0.203125, -0.742188, 0.390625, -0.15625, -0.648438, 0.4375, 0.351562, -0.78125, 0.359375, 0.351562, -0.71875, 0.453125, 0.203125, -0.742188, 0.390625, -0.351562, -0.78125, 0.359375, -0.273438, -0.796875, 0.328125, -0.203125, -0.742188, 0.390625, 0.4375, -0.765625, 0.328125, 0.5, -0.6875, 0.390625, 0.351562, -0.71875, 0.453125, -0.4375, -0.765625, 0.328125, -0.351562, -0.78125, 0.359375, -0.351562, -0.71875, 0.453125, 0.5, -0.6875, 0.390625, 0.546875, -0.578125, 0.4375, 0.351562, -0.617188, 0.515625, -0.5, -0.6875, 0.390625, -0.351562, -0.71875, 0.453125, -0.351562, -0.617188, 0.515625, 0.5625, -0.671875, 0.242188, 0.625, -0.5625, 0.242188, 0.546875, -0.578125, 0.4375, -0.5625, -0.671875, 0.242188, -0.5, -0.6875, 0.390625, -0.546875, -0.578125, 0.4375, 0.46875, -0.757812, 0.242188, 0.5625, -0.671875, 0.242188, 0.5, -0.6875, 0.390625, -0.46875, -0.757812, 0.242188, -0.4375, -0.765625, 0.328125, -0.5, -0.6875, 0.390625, 0.4375, -0.765625, 0.328125, 0.445312, -0.78125, 0.335938, 0.476562, -0.773438, 0.242188, -0.4375, -0.765625, 0.328125, -0.46875, -0.757812, 0.242188, -0.476562, -0.773438, 0.242188, 0.351562, -0.78125, 0.359375, 0.351562, -0.804688, 0.375, 0.445312, -0.78125, 0.335938, -0.351562, -0.78125, 0.359375, -0.4375, -0.765625, 0.328125, -0.445312, -0.78125, 0.335938, 0.273438, -0.796875, 0.328125, 0.265625, -0.820312, 0.335938, 0.351562, -0.804688, 0.375, -0.273438, -0.796875, 0.328125, -0.351562, -0.78125, 0.359375, -0.351562, -0.804688, 0.375, 0.242188, -0.796875, 0.242188, 0.226562, -0.820312, 0.242188, 0.265625, -0.820312, 0.335938, -0.242188, -0.796875, 0.242188, -0.273438, -0.796875, 0.328125, -0.265625, -0.820312, 0.335938, 0.242188, -0.796875, 0.242188, 0.273438, -0.796875, 0.164062, 0.265625, -0.820312, 0.15625, -0.265625, -0.820312, 0.15625, -0.273438, -0.796875, 0.164062, -0.242188, -0.796875, 0.242188, 0.273438, -0.796875, 0.164062, 0.351562, -0.78125, 0.132812, 0.351562, -0.804688, 0.117188, -0.351562, -0.804688, 0.117188, -0.351562, -0.78125, 0.132812, -0.273438, -0.796875, 0.164062, 0.351562, -0.78125, 0.132812, 0.4375, -0.765625, 0.164062, 0.445312, -0.78125, 0.15625, -0.445312, -0.78125, 0.15625, -0.4375, -0.765625, 0.164062, -0.351562, -0.78125, 0.132812, 0.4375, -0.765625, 0.164062, 0.46875, -0.757812, 0.242188, 0.476562, -0.773438, 0.242188, -0.476562, -0.773438, 0.242188, -0.46875, -0.757812, 0.242188, -0.4375, -0.765625, 0.164062, 0.351562, -0.828125, 0.242188, 0.445312, -0.78125, 0.15625, 0.476562, -0.773438, 0.242188, -0.476562, -0.773438, 0.242188, -0.445312, -0.78125, 0.15625, -0.351562, -0.828125, 0.242188, 0.351562, -0.804688, 0.117188, 0.445312, -0.78125, 0.15625, 0.351562, -0.828125, 0.242188, -0.351562, -0.828125, 0.242188, -0.445312, -0.78125, 0.15625, -0.351562, -0.804688, 0.117188, 0.351562, -0.828125, 0.242188, 0.265625, -0.820312, 0.15625, 0.351562, -0.804688, 0.117188, -0.351562, -0.804688, 0.117188, -0.265625, -0.820312, 0.15625, -0.351562, -0.828125, 0.242188, 0.351562, -0.828125, 0.242188, 0.226562, -0.820312, 0.242188, 0.265625, -0.820312, 0.15625, -0.265625, -0.820312, 0.15625, -0.226562, -0.820312, 0.242188, -0.351562, -0.828125, 0.242188, 0.351562, -0.828125, 0.242188, 0.265625, -0.820312, 0.335938, 0.226562, -0.820312, 0.242188, -0.226562, -0.820312, 0.242188, -0.265625, -0.820312, 0.335938, -0.351562, -0.828125, 0.242188, 0.351562, -0.828125, 0.242188, 0.351562, -0.804688, 0.375, 0.265625, -0.820312, 0.335938, -0.265625, -0.820312, 0.335938, -0.351562, -0.804688, 0.375, -0.351562, -0.828125, 0.242188, 0.351562, -0.828125, 0.242188, 0.445312, -0.78125, 0.335938, 0.351562, -0.804688, 0.375, -0.351562, -0.804688, 0.375, -0.445312, -0.78125, 0.335938, -0.351562, -0.828125, 0.242188, 0.351562, -0.828125, 0.242188, 0.476562, -0.773438, 0.242188, 0.445312, -0.78125, 0.335938, -0.445312, -0.78125, 0.335938, -0.476562, -0.773438, 0.242188, -0.351562, -0.828125, 0.242188, 0.164062, -0.632812, -0.929688, 0.0, -0.640625, -0.945312, 0.0, -0.578125, -0.984375, -0.164062, -0.632812, -0.929688, -0.179688, -0.554688, -0.96875, 0.0, -0.578125, -0.984375, 0.234375, -0.632812, -0.914062, 0.164062, -0.632812, -0.929688, 0.179688, -0.554688, -0.96875, -0.234375, -0.632812, -0.914062, -0.328125, -0.523438, -0.945312, -0.179688, -0.554688, -0.96875, 0.367188, -0.53125, -0.890625, 0.265625, -0.664062, -0.820312, 0.234375, -0.632812, -0.914062, -0.234375, -0.632812, -0.914062, -0.265625, -0.664062, -0.820312, -0.367188, -0.53125, -0.890625, 0.351562, -0.570312, -0.695312, 0.25, -0.6875, -0.703125, 0.265625, -0.664062, -0.820312, -0.265625, -0.664062, -0.820312, -0.25, -0.6875, -0.703125, -0.351562, -0.570312, -0.695312, 0.3125, -0.570312, -0.4375, 0.210938, -0.710938, -0.445312, 0.25, -0.6875, -0.703125, -0.25, -0.6875, -0.703125, -0.210938, -0.710938, -0.445312, -0.3125, -0.570312, -0.4375, 0.203125, -0.5625, -0.1875, 0.4375, -0.53125, -0.140625, 0.398438, -0.671875, -0.046875, -0.398438, -0.671875, -0.046875, -0.4375, -0.53125, -0.140625, -0.203125, -0.5625, -0.1875, 0.632812, -0.539062, -0.039062, 0.617188, -0.625, 0.054688, 0.398438, -0.671875, -0.046875, -0.632812, -0.539062, -0.039062, -0.4375, -0.53125, -0.140625, -0.398438, -0.671875, -0.046875, 0.632812, -0.539062, -0.039062, 0.828125, -0.445312, 0.148438, 0.726562, -0.601562, 0.203125, -0.726562, -0.601562, 0.203125, -0.828125, -0.445312, 0.148438, -0.632812, -0.539062, -0.039062, 0.859375, -0.59375, 0.429688, 0.742188, -0.65625, 0.375, 0.726562, -0.601562, 0.203125, -0.859375, -0.59375, 0.429688, -0.828125, -0.445312, 0.148438, -0.726562, -0.601562, 0.203125, 0.710938, -0.625, 0.484375, 0.6875, -0.726562, 0.414062, 0.742188, -0.65625, 0.375, -0.710938, -0.625, 0.484375, -0.859375, -0.59375, 0.429688, -0.742188, -0.65625, 0.375, 0.492188, -0.6875, 0.601562, 0.4375, -0.796875, 0.546875, 0.6875, -0.726562, 0.414062, -0.492188, -0.6875, 0.601562, -0.710938, -0.625, 0.484375, -0.6875, -0.726562, 0.414062, 0.492188, -0.6875, 0.601562, 0.320312, -0.734375, 0.757812, 0.3125, -0.835938, 0.640625, -0.3125, -0.835938, 0.640625, -0.320312, -0.734375, 0.757812, -0.492188, -0.6875, 0.601562, 0.15625, -0.757812, 0.71875, 0.203125, -0.851562, 0.617188, 0.3125, -0.835938, 0.640625, -0.15625, -0.757812, 0.71875, -0.320312, -0.734375, 0.757812, -0.3125, -0.835938, 0.640625, 0.0625, -0.75, 0.492188, 0.101562, -0.84375, 0.429688, 0.203125, -0.851562, 0.617188, -0.0625, -0.75, 0.492188, -0.15625, -0.757812, 0.71875, -0.203125, -0.851562, 0.617188, 0.0, -0.742188, 0.429688, 0.0, -0.820312, 0.351562, 0.101562, -0.84375, 0.429688, 0.0, -0.742188, 0.429688, -0.0625, -0.75, 0.492188, -0.101562, -0.84375, 0.429688, 0.25, -0.757812, 0.46875, 0.203125, -0.851562, 0.617188, 0.101562, -0.84375, 0.429688, -0.25, -0.757812, 0.46875, -0.164062, -0.773438, 0.414062, -0.101562, -0.84375, 0.429688, 0.25, -0.757812, 0.46875, 0.328125, -0.742188, 0.476562, 0.3125, -0.835938, 0.640625, -0.3125, -0.835938, 0.640625, -0.328125, -0.742188, 0.476562, -0.25, -0.757812, 0.46875, 0.4375, -0.796875, 0.546875, 0.3125, -0.835938, 0.640625, 0.328125, -0.742188, 0.476562, -0.4375, -0.796875, 0.546875, -0.429688, -0.71875, 0.4375, -0.328125, -0.742188, 0.476562, 0.6875, -0.726562, 0.414062, 0.4375, -0.796875, 0.546875, 0.429688, -0.71875, 0.4375, -0.6875, -0.726562, 0.414062, -0.601562, -0.664062, 0.375, -0.429688, -0.71875, 0.4375, 0.742188, -0.65625, 0.375, 0.6875, -0.726562, 0.414062, 0.601562, -0.664062, 0.375, -0.742188, -0.65625, 0.375, -0.640625, -0.648438, 0.296875, -0.601562, -0.664062, 0.375, 0.726562, -0.601562, 0.203125, 0.742188, -0.65625, 0.375, 0.640625, -0.648438, 0.296875, -0.726562, -0.601562, 0.203125, -0.625, -0.648438, 0.1875, -0.640625, -0.648438, 0.296875, 0.617188, -0.625, 0.054688, 0.726562, -0.601562, 0.203125, 0.625, -0.648438, 0.1875, -0.617188, -0.625, 0.054688, -0.492188, -0.671875, 0.0625, -0.625, -0.648438, 0.1875, 0.398438, -0.671875, -0.046875, 0.617188, -0.625, 0.054688, 0.492188, -0.671875, 0.0625, -0.398438, -0.671875, -0.046875, -0.375, -0.703125, 0.015625, -0.492188, -0.671875, 0.0625, 0.203125, -0.742188, 0.09375, 0.125, -0.8125, -0.101562, 0.398438, -0.671875, -0.046875, -0.398438, -0.671875, -0.046875, -0.125, -0.8125, -0.101562, -0.203125, -0.742188, 0.09375, 0.203125, -0.742188, 0.09375, 0.164062, -0.75, 0.140625, 0.0, -0.726562, 0.046875, 0.0, -0.726562, 0.046875, -0.164062, -0.75, 0.140625, -0.203125, -0.742188, 0.09375, 0.101562, -0.84375, 0.429688, 0.0, -0.820312, 0.351562, 0.125, -0.765625, 0.304688, -0.101562, -0.84375, 0.429688, -0.164062, -0.773438, 0.414062, -0.125, -0.765625, 0.304688, 0.125, -0.765625, 0.304688, 0.0, -0.820312, 0.351562, 0.0, -0.765625, 0.210938, 0.0, -0.765625, 0.210938, 0.0, -0.820312, 0.351562, -0.125, -0.765625, 0.304688, 0.164062, -0.75, 0.140625, 0.132812, -0.757812, 0.210938, 0.0, -0.765625, 0.210938, -0.164062, -0.75, 0.140625, 0.0, -0.726562, 0.046875, 0.0, -0.765625, 0.210938, 0.0625, -0.695312, -0.882812, 0.0, -0.6875, -0.890625, 0.0, -0.640625, -0.945312, 0.0, -0.640625, -0.945312, 0.0, -0.6875, -0.890625, -0.0625, -0.695312, -0.882812, 0.117188, -0.710938, -0.835938, 0.0625, -0.695312, -0.882812, 0.164062, -0.632812, -0.929688, -0.164062, -0.632812, -0.929688, -0.0625, -0.695312, -0.882812, -0.117188, -0.710938, -0.835938, 0.117188, -0.710938, -0.835938, 0.234375, -0.632812, -0.914062, 0.265625, -0.664062, -0.820312, -0.117188, -0.710938, -0.835938, -0.109375, -0.734375, -0.71875, -0.265625, -0.664062, -0.820312, 0.210938, -0.710938, -0.445312, 0.078125, -0.75, -0.445312, 0.117188, -0.734375, -0.6875, -0.117188, -0.734375, -0.6875, -0.078125, -0.75, -0.445312, -0.210938, -0.710938, -0.445312, 0.109375, -0.734375, -0.71875, 0.265625, -0.664062, -0.820312, 0.25, -0.6875, -0.703125, -0.25, -0.6875, -0.703125, -0.265625, -0.664062, -0.820312, -0.109375, -0.734375, -0.71875, 0.0, -0.742188, -0.328125, 0.0, -0.75, -0.445312, 0.078125, -0.75, -0.445312, 0.0, -0.742188, -0.328125, -0.085938, -0.742188, -0.289062, -0.078125, -0.75, -0.445312, 0.078125, -0.75, -0.445312, 0.0, -0.75, -0.445312, 0.0, -0.734375, -0.679688, -0.078125, -0.75, -0.445312, -0.117188, -0.734375, -0.6875, 0.0, -0.734375, -0.679688, 0.109375, -0.734375, -0.71875, 0.117188, -0.734375, -0.6875, 0.0, -0.734375, -0.679688, -0.109375, -0.734375, -0.71875, 0.0, -0.734375, -0.765625, 0.0, -0.734375, -0.679688, 0.125, -0.75, -0.226562, 0.132812, -0.796875, -0.226562, 0.09375, -0.78125, -0.273438, -0.09375, -0.78125, -0.273438, -0.132812, -0.796875, -0.226562, -0.125, -0.75, -0.226562, 0.109375, -0.78125, -0.132812, 0.132812, -0.796875, -0.226562, 0.125, -0.75, -0.226562, -0.109375, -0.78125, -0.132812, -0.101562, -0.742188, -0.148438, -0.125, -0.75, -0.226562, 0.039062, -0.78125, -0.125, 0.109375, -0.78125, -0.132812, 0.101562, -0.742188, -0.148438, -0.039062, -0.78125, -0.125, 0.0, -0.742188, -0.140625, -0.101562, -0.742188, -0.148438, 0.0, -0.796875, -0.1875, 0.039062, -0.78125, -0.125, 0.0, -0.742188, -0.140625, 0.0, -0.796875, -0.1875, 0.0, -0.75, -0.195312, 0.0, -0.742188, -0.140625, 0.085938, -0.742188, -0.289062, 0.09375, -0.78125, -0.273438, 0.0, -0.78125, -0.320312, -0.085938, -0.742188, -0.289062, 0.0, -0.742188, -0.328125, 0.0, -0.78125, -0.320312, 0.09375, -0.78125, -0.273438, 0.078125, -0.804688, -0.25, 0.0, -0.804688, -0.289062, -0.09375, -0.78125, -0.273438, 0.0, -0.78125, -0.320312, 0.0, -0.804688, -0.289062, 0.0, -0.796875, -0.1875, 0.0, -0.828125, -0.203125, 0.046875, -0.8125, -0.148438, -0.046875, -0.8125, -0.148438, 0.0, -0.828125, -0.203125, 0.0, -0.796875, -0.1875, 0.039062, -0.78125, -0.125, 0.046875, -0.8125, -0.148438, 0.09375, -0.8125, -0.15625, -0.09375, -0.8125, -0.15625, -0.046875, -0.8125, -0.148438, -0.039062, -0.78125, -0.125, 0.09375, -0.8125, -0.15625, 0.109375, -0.828125, -0.226562, 0.132812, -0.796875, -0.226562, -0.09375, -0.8125, -0.15625, -0.109375, -0.78125, -0.132812, -0.132812, -0.796875, -0.226562, 0.132812, -0.796875, -0.226562, 0.109375, -0.828125, -0.226562, 0.078125, -0.804688, -0.25, -0.078125, -0.804688, -0.25, -0.109375, -0.828125, -0.226562, -0.132812, -0.796875, -0.226562, 0.109375, -0.828125, -0.226562, 0.09375, -0.8125, -0.15625, 0.046875, -0.8125, -0.148438, -0.109375, -0.828125, -0.226562, 0.0, -0.828125, -0.203125, -0.046875, -0.8125, -0.148438, 0.0, -0.828125, -0.203125, 0.0, -0.804688, -0.289062, 0.078125, -0.804688, -0.25, -0.078125, -0.804688, -0.25, 0.0, -0.804688, -0.289062, 0.0, -0.828125, -0.203125, 0.0, -0.742188, -0.140625, 0.101562, -0.742188, -0.148438, 0.125, -0.8125, -0.101562, -0.125, -0.8125, -0.101562, -0.101562, -0.742188, -0.148438, 0.0, -0.742188, -0.140625, 0.101562, -0.742188, -0.148438, 0.125, -0.75, -0.226562, 0.164062, -0.710938, -0.242188, -0.164062, -0.710938, -0.242188, -0.125, -0.75, -0.226562, -0.101562, -0.742188, -0.148438, 0.085938, -0.742188, -0.289062, 0.179688, -0.710938, -0.3125, 0.164062, -0.710938, -0.242188, -0.085938, -0.742188, -0.289062, -0.125, -0.75, -0.226562, -0.164062, -0.710938, -0.242188, 0.078125, -0.75, -0.445312, 0.210938, -0.710938, -0.445312, 0.179688, -0.710938, -0.3125, -0.078125, -0.75, -0.445312, -0.085938, -0.742188, -0.289062, -0.179688, -0.710938, -0.3125, 0.257812, -0.554688, -0.3125, 0.179688, -0.710938, -0.3125, 0.210938, -0.710938, -0.445312, -0.257812, -0.554688, -0.3125, -0.3125, -0.570312, -0.4375, -0.210938, -0.710938, -0.445312, 0.234375, -0.554688, -0.25, 0.164062, -0.710938, -0.242188, 0.179688, -0.710938, -0.3125, -0.234375, -0.554688, -0.25, -0.257812, -0.554688, -0.3125, -0.179688, -0.710938, -0.3125, 0.203125, -0.5625, -0.1875, 0.125, -0.8125, -0.101562, 0.164062, -0.710938, -0.242188, -0.164062, -0.710938, -0.242188, -0.125, -0.8125, -0.101562, -0.203125, -0.5625, -0.1875, 0.0, -0.734375, -0.765625, 0.0, -0.71875, -0.773438, 0.09375, -0.726562, -0.742188, 0.0, -0.734375, -0.765625, -0.109375, -0.734375, -0.71875, -0.09375, -0.726562, -0.742188, 0.117188, -0.710938, -0.835938, 0.109375, -0.734375, -0.71875, 0.09375, -0.726562, -0.742188, -0.09375, -0.726562, -0.742188, -0.109375, -0.734375, -0.71875, -0.117188, -0.710938, -0.835938, 0.0625, -0.695312, -0.882812, 0.117188, -0.710938, -0.835938, 0.09375, -0.710938, -0.820312, -0.09375, -0.710938, -0.820312, -0.117188, -0.710938, -0.835938, -0.0625, -0.695312, -0.882812, 0.0, -0.6875, -0.890625, 0.0625, -0.695312, -0.882812, 0.046875, -0.6875, -0.867188, -0.046875, -0.6875, -0.867188, -0.0625, -0.695312, -0.882812, 0.0, -0.6875, -0.890625, 0.046875, -0.6875, -0.867188, 0.046875, -0.632812, -0.851562, 0.0, -0.632812, -0.859375, -0.046875, -0.6875, -0.867188, 0.0, -0.6875, -0.875, 0.0, -0.632812, -0.859375, 0.046875, -0.6875, -0.867188, 0.09375, -0.710938, -0.820312, 0.09375, -0.640625, -0.8125, -0.09375, -0.640625, -0.8125, -0.09375, -0.710938, -0.820312, -0.046875, -0.6875, -0.867188, 0.09375, -0.710938, -0.820312, 0.09375, -0.726562, -0.742188, 0.09375, -0.664062, -0.75, -0.09375, -0.664062, -0.75, -0.09375, -0.726562, -0.742188, -0.09375, -0.710938, -0.820312, 0.0, -0.71875, -0.773438, 0.0, -0.65625, -0.78125, 0.09375, -0.664062, -0.75, 0.0, -0.71875, -0.773438, -0.09375, -0.726562, -0.742188, -0.09375, -0.664062, -0.75, 0.0, -0.65625, -0.78125, 0.0, -0.632812, -0.859375, 0.046875, -0.632812, -0.851562, -0.046875, -0.632812, -0.851562, 0.0, -0.632812, -0.859375, 0.0, -0.65625, -0.78125, 0.09375, -0.664062, -0.75, 0.046875, -0.632812, -0.851562, 0.09375, -0.640625, -0.8125, -0.09375, -0.640625, -0.8125, -0.046875, -0.632812, -0.851562, -0.09375, -0.664062, -0.75, 0.132812, -0.757812, 0.210938, 0.164062, -0.75, 0.140625, 0.1875, -0.773438, 0.15625, -0.1875, -0.773438, 0.15625, -0.164062, -0.75, 0.140625, -0.132812, -0.757812, 0.210938, 0.125, -0.765625, 0.304688, 0.132812, -0.757812, 0.210938, 0.171875, -0.78125, 0.21875, -0.171875, -0.78125, 0.21875, -0.132812, -0.757812, 0.210938, -0.125, -0.765625, 0.304688, 0.125, -0.765625, 0.304688, 0.179688, -0.78125, 0.296875, 0.210938, -0.78125, 0.375, -0.125, -0.765625, 0.304688, -0.164062, -0.773438, 0.414062, -0.210938, -0.78125, 0.375, 0.203125, -0.742188, 0.09375, 0.226562, -0.78125, 0.109375, 0.1875, -0.773438, 0.15625, -0.203125, -0.742188, 0.09375, -0.164062, -0.75, 0.140625, -0.1875, -0.773438, 0.15625, 0.203125, -0.742188, 0.09375, 0.375, -0.703125, 0.015625, 0.375, -0.742188, 0.0625, -0.375, -0.742188, 0.0625, -0.375, -0.703125, 0.015625, -0.203125, -0.742188, 0.09375, 0.375, -0.703125, 0.015625, 0.492188, -0.671875, 0.0625, 0.476562, -0.71875, 0.101562, -0.476562, -0.71875, 0.101562, -0.492188, -0.671875, 0.0625, -0.375, -0.703125, 0.015625, 0.492188, -0.671875, 0.0625, 0.625, -0.648438, 0.1875, 0.578125, -0.679688, 0.195312, -0.578125, -0.679688, 0.195312, -0.625, -0.648438, 0.1875, -0.492188, -0.671875, 0.0625, 0.625, -0.648438, 0.1875, 0.640625, -0.648438, 0.296875, 0.585938, -0.6875, 0.289062, -0.585938, -0.6875, 0.289062, -0.640625, -0.648438, 0.296875, -0.625, -0.648438, 0.1875, 0.601562, -0.664062, 0.375, 0.5625, -0.695312, 0.351562, 0.585938, -0.6875, 0.289062, -0.601562, -0.664062, 0.375, -0.640625, -0.648438, 0.296875, -0.585938, -0.6875, 0.289062, 0.429688, -0.71875, 0.4375, 0.421875, -0.773438, 0.398438, 0.5625, -0.695312, 0.351562, -0.429688, -0.71875, 0.4375, -0.601562, -0.664062, 0.375, -0.5625, -0.695312, 0.351562, 0.429688, -0.71875, 0.4375, 0.328125, -0.742188, 0.476562, 0.335938, -0.757812, 0.429688, -0.335938, -0.757812, 0.429688, -0.328125, -0.742188, 0.476562, -0.429688, -0.71875, 0.4375, 0.328125, -0.742188, 0.476562, 0.25, -0.757812, 0.46875, 0.273438, -0.773438, 0.421875, -0.273438, -0.773438, 0.421875, -0.25, -0.757812, 0.46875, -0.328125, -0.742188, 0.476562, 0.25, -0.757812, 0.46875, 0.164062, -0.773438, 0.414062, 0.210938, -0.78125, 0.375, -0.210938, -0.78125, 0.375, -0.164062, -0.773438, 0.414062, -0.25, -0.757812, 0.46875, 0.273438, -0.773438, 0.421875, 0.210938, -0.78125, 0.375, 0.234375, -0.757812, 0.359375, -0.234375, -0.757812, 0.359375, -0.210938, -0.78125, 0.375, -0.273438, -0.773438, 0.421875, 0.335938, -0.757812, 0.429688, 0.273438, -0.773438, 0.421875, 0.28125, -0.765625, 0.398438, -0.28125, -0.765625, 0.398438, -0.273438, -0.773438, 0.421875, -0.335938, -0.757812, 0.429688, 0.335938, -0.757812, 0.429688, 0.335938, -0.75, 0.40625, 0.414062, -0.75, 0.390625, -0.335938, -0.757812, 0.429688, -0.421875, -0.773438, 0.398438, -0.414062, -0.75, 0.390625, 0.421875, -0.773438, 0.398438, 0.414062, -0.75, 0.390625, 0.53125, -0.679688, 0.335938, -0.421875, -0.773438, 0.398438, -0.5625, -0.695312, 0.351562, -0.53125, -0.679688, 0.335938, 0.585938, -0.6875, 0.289062, 0.5625, -0.695312, 0.351562, 0.53125, -0.679688, 0.335938, -0.53125, -0.679688, 0.335938, -0.5625, -0.695312, 0.351562, -0.585938, -0.6875, 0.289062, 0.585938, -0.6875, 0.289062, 0.554688, -0.671875, 0.28125, 0.546875, -0.671875, 0.210938, -0.585938, -0.6875, 0.289062, -0.578125, -0.679688, 0.195312, -0.546875, -0.671875, 0.210938, 0.476562, -0.71875, 0.101562, 0.578125, -0.679688, 0.195312, 0.546875, -0.671875, 0.210938, -0.546875, -0.671875, 0.210938, -0.578125, -0.679688, 0.195312, -0.476562, -0.71875, 0.101562, 0.476562, -0.71875, 0.101562, 0.460938, -0.703125, 0.117188, 0.375, -0.726562, 0.085938, -0.476562, -0.71875, 0.101562, -0.375, -0.742188, 0.0625, -0.375, -0.726562, 0.085938, 0.375, -0.742188, 0.0625, 0.375, -0.726562, 0.085938, 0.242188, -0.757812, 0.125, -0.375, -0.742188, 0.0625, -0.226562, -0.78125, 0.109375, -0.242188, -0.757812, 0.125, 0.1875, -0.773438, 0.15625, 0.226562, -0.78125, 0.109375, 0.242188, -0.757812, 0.125, -0.242188, -0.757812, 0.125, -0.226562, -0.78125, 0.109375, -0.1875, -0.773438, 0.15625, 0.210938, -0.78125, 0.375, 0.179688, -0.78125, 0.296875, 0.195312, -0.757812, 0.296875, -0.195312, -0.757812, 0.296875, -0.179688, -0.78125, 0.296875, -0.210938, -0.78125, 0.375, 0.179688, -0.78125, 0.296875, 0.171875, -0.78125, 0.21875, 0.195312, -0.75, 0.226562, -0.195312, -0.75, 0.226562, -0.171875, -0.78125, 0.21875, -0.179688, -0.78125, 0.296875, 0.171875, -0.78125, 0.21875, 0.1875, -0.773438, 0.15625, 0.203125, -0.75, 0.171875, -0.203125, -0.75, 0.171875, -0.1875, -0.773438, 0.15625, -0.171875, -0.78125, 0.21875, 0.0, -0.742188, 0.429688, 0.0625, -0.75, 0.492188, 0.109375, -0.609375, 0.460938, -0.109375, -0.609375, 0.460938, -0.0625, -0.75, 0.492188, 0.0, -0.742188, 0.429688, 0.0625, -0.75, 0.492188, 0.15625, -0.757812, 0.71875, 0.195312, -0.617188, 0.664062, -0.195312, -0.617188, 0.664062, -0.15625, -0.757812, 0.71875, -0.0625, -0.75, 0.492188, 0.320312, -0.734375, 0.757812, 0.335938, -0.59375, 0.6875, 0.195312, -0.617188, 0.664062, -0.320312, -0.734375, 0.757812, -0.15625, -0.757812, 0.71875, -0.195312, -0.617188, 0.664062, 0.492188, -0.6875, 0.601562, 0.484375, -0.554688, 0.554688, 0.335938, -0.59375, 0.6875, -0.492188, -0.6875, 0.601562, -0.320312, -0.734375, 0.757812, -0.335938, -0.59375, 0.6875, 0.710938, -0.625, 0.484375, 0.679688, -0.492188, 0.453125, 0.484375, -0.554688, 0.554688, -0.710938, -0.625, 0.484375, -0.492188, -0.6875, 0.601562, -0.484375, -0.554688, 0.554688, 0.710938, -0.625, 0.484375, 0.859375, -0.59375, 0.429688, 0.796875, -0.460938, 0.40625, -0.796875, -0.460938, 0.40625, -0.859375, -0.59375, 0.429688, -0.710938, -0.625, 0.484375, 0.828125, -0.445312, 0.148438, 0.773438, -0.375, 0.164062, 0.796875, -0.460938, 0.40625, -0.828125, -0.445312, 0.148438, -0.859375, -0.59375, 0.429688, -0.796875, -0.460938, 0.40625, 0.828125, -0.445312, 0.148438, 0.632812, -0.539062, -0.039062, 0.601562, -0.414062, 0.0, -0.601562, -0.414062, 0.0, -0.632812, -0.539062, -0.039062, -0.828125, -0.445312, 0.148438, 0.632812, -0.539062, -0.039062, 0.4375, -0.53125, -0.140625, 0.4375, -0.46875, -0.09375, -0.4375, -0.46875, -0.09375, -0.4375, -0.53125, -0.140625, -0.632812, -0.539062, -0.039062, 0.0, -0.28125, -0.484375, 0.179688, -0.257812, -0.414062, 0.125, -0.359375, -0.539062, 0.0, -0.28125, -0.484375, 0.0, -0.320312, -0.570312, -0.125, -0.359375, -0.539062, 0.0, -0.320312, -0.570312, 0.125, -0.359375, -0.539062, 0.140625, -0.367188, -0.757812, 0.0, -0.320312, -0.570312, 0.0, -0.34375, -0.804688, -0.140625, -0.367188, -0.757812, 0.0, -0.34375, -0.804688, 0.140625, -0.367188, -0.757812, 0.164062, -0.4375, -0.945312, 0.0, -0.34375, -0.804688, 0.0, -0.460938, -0.976562, -0.164062, -0.4375, -0.945312, 0.179688, -0.554688, -0.96875, 0.0, -0.578125, -0.984375, 0.0, -0.460938, -0.976562, 0.0, -0.460938, -0.976562, 0.0, -0.578125, -0.984375, -0.179688, -0.554688, -0.96875, 0.328125, -0.523438, -0.945312, 0.179688, -0.554688, -0.96875, 0.164062, -0.4375, -0.945312, -0.164062, -0.4375, -0.945312, -0.179688, -0.554688, -0.96875, -0.328125, -0.523438, -0.945312, 0.367188, -0.53125, -0.890625, 0.328125, -0.523438, -0.945312, 0.328125, -0.398438, -0.914062, -0.328125, -0.398438, -0.914062, -0.328125, -0.523438, -0.945312, -0.367188, -0.53125, -0.890625, 0.351562, -0.570312, -0.695312, 0.367188, -0.53125, -0.890625, 0.289062, -0.382812, -0.710938, -0.289062, -0.382812, -0.710938, -0.367188, -0.53125, -0.890625, -0.351562, -0.570312, -0.695312, 0.289062, -0.382812, -0.710938, 0.140625, -0.367188, -0.757812, 0.125, -0.359375, -0.539062, -0.125, -0.359375, -0.539062, -0.140625, -0.367188, -0.757812, -0.289062, -0.382812, -0.710938, 0.328125, -0.398438, -0.914062, 0.164062, -0.4375, -0.945312, 0.140625, -0.367188, -0.757812, -0.328125, -0.398438, -0.914062, -0.289062, -0.382812, -0.710938, -0.140625, -0.367188, -0.757812, 0.25, -0.390625, -0.5, 0.125, -0.359375, -0.539062, 0.179688, -0.257812, -0.414062, -0.25, -0.390625, -0.5, -0.234375, -0.40625, -0.351562, -0.179688, -0.257812, -0.414062, 0.3125, -0.570312, -0.4375, 0.351562, -0.570312, -0.695312, 0.25, -0.390625, -0.5, -0.25, -0.390625, -0.5, -0.351562, -0.570312, -0.695312, -0.3125, -0.570312, -0.4375, 0.21875, -0.429688, -0.28125, 0.210938, -0.46875, -0.226562, 0.234375, -0.554688, -0.25, -0.21875, -0.429688, -0.28125, -0.257812, -0.554688, -0.3125, -0.234375, -0.554688, -0.25, 0.234375, -0.40625, -0.351562, 0.21875, -0.429688, -0.28125, 0.257812, -0.554688, -0.3125, -0.234375, -0.40625, -0.351562, -0.3125, -0.570312, -0.4375, -0.257812, -0.554688, -0.3125, 0.234375, -0.554688, -0.25, 0.210938, -0.46875, -0.226562, 0.203125, -0.5, -0.171875, -0.234375, -0.554688, -0.25, -0.203125, -0.5625, -0.1875, -0.203125, -0.5, -0.171875, 0.203125, -0.5, -0.171875, 0.4375, -0.46875, -0.09375, 0.4375, -0.53125, -0.140625, -0.203125, -0.5, -0.171875, -0.203125, -0.5625, -0.1875, -0.4375, -0.53125, -0.140625, 0.335938, 0.664062, 0.054688, 0.34375, 0.539062, -0.148438, 0.0, 0.671875, -0.195312, -0.335938, 0.664062, 0.054688, 0.0, 0.828125, 0.070312, 0.0, 0.671875, -0.195312, 0.34375, 0.539062, -0.148438, 0.296875, 0.265625, -0.3125, 0.0, 0.351562, -0.382812, -0.34375, 0.539062, -0.148438, 0.0, 0.671875, -0.195312, 0.0, 0.351562, -0.382812, 0.0, 0.351562, -0.382812, 0.296875, 0.265625, -0.3125, 0.210938, -0.164062, -0.390625, -0.210938, -0.164062, -0.390625, -0.296875, 0.265625, -0.3125, 0.0, 0.351562, -0.382812, 0.0, -0.1875, -0.460938, 0.210938, -0.164062, -0.390625, 0.179688, -0.257812, -0.414062, -0.179688, -0.257812, -0.414062, -0.210938, -0.164062, -0.390625, 0.0, -0.1875, -0.460938, 0.179688, -0.257812, -0.414062, 0.210938, -0.164062, -0.390625, 0.21875, -0.429688, -0.28125, -0.179688, -0.257812, -0.414062, -0.234375, -0.40625, -0.351562, -0.21875, -0.429688, -0.28125, 0.773438, -0.375, 0.164062, 0.601562, -0.414062, 0.0, 0.734375, -0.070312, -0.046875, -0.734375, -0.070312, -0.046875, -0.601562, -0.414062, 0.0, -0.773438, -0.375, 0.164062, 0.460938, 0.703125, 0.4375, 0.335938, 0.664062, 0.054688, 0.0, 0.828125, 0.070312, -0.460938, 0.703125, 0.4375, 0.0, 0.851562, 0.5625, 0.0, 0.828125, 0.070312, 0.453125, -0.234375, 0.851562, 0.453125, 0.070312, 0.929688, 0.0, 0.078125, 0.984375, -0.453125, -0.234375, 0.851562, 0.0, -0.289062, 0.898438, 0.0, 0.078125, 0.984375, 0.0, 0.078125, 0.984375, 0.453125, 0.070312, 0.929688, 0.453125, 0.382812, 0.867188, -0.453125, 0.382812, 0.867188, -0.453125, 0.070312, 0.929688, 0.0, 0.078125, 0.984375, 0.0, 0.546875, 0.898438, 0.453125, 0.382812, 0.867188, 0.460938, 0.703125, 0.4375, -0.460938, 0.703125, 0.4375, -0.453125, 0.382812, 0.867188, 0.0, 0.546875, 0.898438, 0.679688, -0.492188, 0.453125, 0.796875, -0.460938, 0.40625, 0.726562, -0.335938, 0.40625, -0.726562, -0.335938, 0.40625, -0.796875, -0.460938, 0.40625, -0.679688, -0.492188, 0.453125, 0.632812, -0.28125, 0.453125, 0.726562, -0.335938, 0.40625, 0.796875, -0.125, 0.5625, -0.796875, -0.125, 0.5625, -0.726562, -0.335938, 0.40625, -0.632812, -0.28125, 0.453125, 0.640625, -0.054688, 0.703125, 0.796875, -0.125, 0.5625, 0.796875, 0.117188, 0.617188, -0.796875, 0.117188, 0.617188, -0.796875, -0.125, 0.5625, -0.640625, -0.054688, 0.703125, 0.640625, 0.195312, 0.75, 0.796875, 0.117188, 0.617188, 0.796875, 0.359375, 0.539062, -0.796875, 0.359375, 0.539062, -0.796875, 0.117188, 0.617188, -0.640625, 0.195312, 0.75, 0.617188, 0.585938, 0.328125, 0.640625, 0.445312, 0.679688, 0.796875, 0.359375, 0.539062, -0.617188, 0.585938, 0.328125, -0.773438, 0.4375, 0.265625, -0.796875, 0.359375, 0.539062, 0.460938, 0.703125, 0.4375, 0.453125, 0.382812, 0.867188, 0.640625, 0.445312, 0.679688, -0.640625, 0.445312, 0.679688, -0.453125, 0.382812, 0.867188, -0.460938, 0.703125, 0.4375, 0.453125, 0.382812, 0.867188, 0.453125, 0.070312, 0.929688, 0.640625, 0.195312, 0.75, -0.640625, 0.195312, 0.75, -0.453125, 0.070312, 0.929688, -0.453125, 0.382812, 0.867188, 0.453125, 0.070312, 0.929688, 0.453125, -0.234375, 0.851562, 0.640625, -0.054688, 0.703125, -0.640625, -0.054688, 0.703125, -0.453125, -0.234375, 0.851562, -0.453125, 0.070312, 0.929688, 0.453125, -0.234375, 0.851562, 0.460938, -0.429688, 0.523438, 0.632812, -0.28125, 0.453125, -0.632812, -0.28125, 0.453125, -0.460938, -0.429688, 0.523438, -0.453125, -0.234375, 0.851562, 0.679688, -0.492188, 0.453125, 0.632812, -0.28125, 0.453125, 0.460938, -0.429688, 0.523438, -0.679688, -0.492188, 0.453125, -0.484375, -0.554688, 0.554688, -0.460938, -0.429688, 0.523438, 0.460938, -0.429688, 0.523438, 0.453125, -0.234375, 0.851562, 0.0, -0.289062, 0.898438, -0.460938, -0.429688, 0.523438, 0.0, -0.570312, 0.570312, 0.0, -0.289062, 0.898438, 0.195312, -0.617188, 0.664062, 0.335938, -0.59375, 0.6875, 0.484375, -0.554688, 0.554688, -0.195312, -0.617188, 0.664062, -0.109375, -0.609375, 0.460938, -0.484375, -0.554688, 0.554688, 0.109375, -0.609375, 0.460938, 0.484375, -0.554688, 0.554688, 0.460938, -0.429688, 0.523438, -0.460938, -0.429688, 0.523438, -0.484375, -0.554688, 0.554688, -0.109375, -0.609375, 0.460938, 0.0, -0.601562, 0.40625, 0.109375, -0.609375, 0.460938, 0.0, -0.570312, 0.570312, 0.0, -0.570312, 0.570312, -0.109375, -0.609375, 0.460938, 0.0, -0.601562, 0.40625, 0.773438, -0.375, 0.164062, 0.851562, -0.054688, 0.234375, 0.726562, -0.335938, 0.40625, -0.773438, -0.375, 0.164062, -0.796875, -0.460938, 0.40625, -0.726562, -0.335938, 0.40625, 0.851562, -0.054688, 0.234375, 0.859375, 0.046875, 0.320312, 0.796875, -0.125, 0.5625, -0.796875, -0.125, 0.5625, -0.859375, 0.046875, 0.320312, -0.851562, -0.054688, 0.234375, 0.859375, 0.046875, 0.320312, 0.820312, 0.203125, 0.328125, 0.796875, 0.117188, 0.617188, -0.796875, 0.117188, 0.617188, -0.820312, 0.203125, 0.328125, -0.859375, 0.046875, 0.320312, 0.796875, 0.359375, 0.539062, 0.796875, 0.117188, 0.617188, 0.820312, 0.203125, 0.328125, -0.796875, 0.359375, 0.539062, -0.773438, 0.4375, 0.265625, -0.820312, 0.203125, 0.328125, 0.296875, 0.265625, -0.3125, 0.429688, 0.210938, -0.195312, 0.40625, -0.148438, -0.171875, -0.296875, 0.265625, -0.3125, -0.210938, -0.164062, -0.390625, -0.40625, -0.148438, -0.171875, 0.40625, -0.148438, -0.171875, 0.429688, 0.210938, -0.195312, 0.59375, 0.164062, -0.125, -0.40625, -0.148438, -0.171875, -0.734375, -0.070312, -0.046875, -0.59375, 0.164062, -0.125, 0.601562, -0.414062, 0.0, 0.4375, -0.46875, -0.09375, 0.40625, -0.148438, -0.171875, -0.40625, -0.148438, -0.171875, -0.4375, -0.46875, -0.09375, -0.601562, -0.414062, 0.0, 0.4375, -0.46875, -0.09375, 0.210938, -0.46875, -0.226562, 0.21875, -0.429688, -0.28125, -0.21875, -0.429688, -0.28125, -0.210938, -0.46875, -0.226562, -0.4375, -0.46875, -0.09375, 0.21875, -0.429688, -0.28125, 0.210938, -0.164062, -0.390625, 0.40625, -0.148438, -0.171875, -0.40625, -0.148438, -0.171875, -0.210938, -0.164062, -0.390625, -0.21875, -0.429688, -0.28125, 0.4375, -0.46875, -0.09375, 0.203125, -0.5, -0.171875, 0.210938, -0.46875, -0.226562, -0.210938, -0.46875, -0.226562, -0.203125, -0.5, -0.171875, -0.4375, -0.46875, -0.09375, 0.640625, 0.429688, -0.007812, 0.484375, 0.546875, 0.023438, 0.617188, 0.585938, 0.328125, -0.640625, 0.429688, -0.007812, -0.773438, 0.4375, 0.265625, -0.617188, 0.585938, 0.328125, 0.617188, 0.585938, 0.328125, 0.484375, 0.546875, 0.023438, 0.335938, 0.664062, 0.054688, -0.617188, 0.585938, 0.328125, -0.460938, 0.703125, 0.4375, -0.335938, 0.664062, 0.054688, 0.429688, 0.210938, -0.195312, 0.484375, 0.546875, 0.023438, 0.640625, 0.429688, -0.007812, -0.429688, 0.210938, -0.195312, -0.59375, 0.164062, -0.125, -0.640625, 0.429688, -0.007812, 0.34375, 0.539062, -0.148438, 0.484375, 0.546875, 0.023438, 0.429688, 0.210938, -0.195312, -0.34375, 0.539062, -0.148438, -0.296875, 0.265625, -0.3125, -0.429688, 0.210938, -0.195312, 0.335938, 0.664062, 0.054688, 0.484375, 0.546875, 0.023438, 0.34375, 0.539062, -0.148438, -0.34375, 0.539062, -0.148438, -0.484375, 0.546875, 0.023438, -0.335938, 0.664062, 0.054688, 0.890625, 0.234375, 0.40625, 0.921875, 0.21875, 0.359375, 1.015625, 0.289062, 0.414062, -0.890625, 0.234375, 0.40625, -1.023438, 0.3125, 0.476562, -1.015625, 0.289062, 0.414062, 1.023438, 0.3125, 0.476562, 1.015625, 0.289062, 0.414062, 1.1875, 0.390625, 0.4375, -1.1875, 0.390625, 0.4375, -1.015625, 0.289062, 0.414062, -1.023438, 0.3125, 0.476562, 1.1875, 0.390625, 0.4375, 1.265625, 0.40625, 0.289062, 1.351562, 0.421875, 0.320312, -1.1875, 0.390625, 0.4375, -1.234375, 0.421875, 0.507812, -1.351562, 0.421875, 0.320312, 1.265625, 0.40625, 0.289062, 1.210938, 0.40625, 0.078125, 1.28125, 0.429688, 0.054688, -1.265625, 0.40625, 0.289062, -1.351562, 0.421875, 0.320312, -1.28125, 0.429688, 0.054688, 1.210938, 0.40625, 0.078125, 1.03125, 0.304688, -0.039062, 1.039062, 0.328125, -0.101562, -1.210938, 0.40625, 0.078125, -1.28125, 0.429688, 0.054688, -1.039062, 0.328125, -0.101562, 1.039062, 0.328125, -0.101562, 1.03125, 0.304688, -0.039062, 0.828125, 0.132812, -0.070312, -0.828125, 0.132812, -0.070312, -1.03125, 0.304688, -0.039062, -1.039062, 0.328125, -0.101562, 1.03125, 0.304688, -0.039062, 1.039062, 0.367188, 0.0, 0.882812, 0.210938, -0.023438, -0.882812, 0.210938, -0.023438, -1.039062, 0.367188, 0.0, -1.03125, 0.304688, -0.039062, 1.210938, 0.40625, 0.078125, 1.1875, 0.445312, 0.09375, 1.039062, 0.367188, 0.0, -1.039062, 0.367188, 0.0, -1.1875, 0.445312, 0.09375, -1.210938, 0.40625, 0.078125, 1.234375, 0.445312, 0.25, 1.1875, 0.445312, 0.09375, 1.210938, 0.40625, 0.078125, -1.234375, 0.445312, 0.25, -1.265625, 0.40625, 0.289062, -1.210938, 0.40625, 0.078125, 1.171875, 0.4375, 0.359375, 1.234375, 0.445312, 0.25, 1.265625, 0.40625, 0.289062, -1.171875, 0.4375, 0.359375, -1.1875, 0.390625, 0.4375, -1.265625, 0.40625, 0.289062, 1.023438, 0.359375, 0.34375, 1.171875, 0.4375, 0.359375, 1.1875, 0.390625, 0.4375, -1.023438, 0.359375, 0.34375, -1.015625, 0.289062, 0.414062, -1.1875, 0.390625, 0.4375, 1.015625, 0.289062, 0.414062, 0.921875, 0.21875, 0.359375, 0.945312, 0.289062, 0.304688, -0.945312, 0.289062, 0.304688, -0.921875, 0.21875, 0.359375, -1.015625, 0.289062, 0.414062, 0.59375, 0.164062, -0.125, 0.71875, 0.171875, -0.023438, 0.726562, 0.070312, 0.0, -0.59375, 0.164062, -0.125, -0.734375, -0.070312, -0.046875, -0.726562, 0.070312, 0.0, 0.773438, 0.125, -0.140625, 0.828125, 0.132812, -0.070312, 0.71875, 0.171875, -0.023438, -0.773438, 0.125, -0.140625, -0.59375, 0.164062, -0.125, -0.71875, 0.171875, -0.023438, 0.851562, -0.054688, 0.234375, 0.734375, -0.070312, -0.046875, 0.726562, 0.070312, 0.0, -0.726562, 0.070312, 0.0, -0.734375, -0.070312, -0.046875, -0.851562, -0.054688, 0.234375, 0.820312, 0.203125, 0.328125, 0.84375, 0.210938, 0.289062, 0.921875, 0.21875, 0.359375, -0.921875, 0.21875, 0.359375, -0.84375, 0.210938, 0.289062, -0.820312, 0.203125, 0.328125, 0.828125, 0.132812, -0.070312, 0.882812, 0.210938, -0.023438, 0.8125, 0.273438, -0.015625, -0.8125, 0.273438, -0.015625, -0.882812, 0.210938, -0.023438, -0.828125, 0.132812, -0.070312, 0.71875, 0.1875, 0.039062, 0.71875, 0.171875, -0.023438, 0.8125, 0.273438, -0.015625, -0.71875, 0.1875, 0.039062, -0.84375, 0.273438, 0.015625, -0.8125, 0.273438, -0.015625, 0.757812, 0.273438, 0.09375, 0.71875, 0.1875, 0.039062, 0.84375, 0.273438, 0.015625, -0.84375, 0.273438, 0.015625, -0.71875, 0.1875, 0.039062, -0.757812, 0.273438, 0.09375, 0.796875, 0.210938, 0.203125, 0.71875, 0.1875, 0.039062, 0.757812, 0.273438, 0.09375, -0.796875, 0.210938, 0.203125, -0.835938, 0.273438, 0.171875, -0.757812, 0.273438, 0.09375, 0.796875, 0.210938, 0.203125, 0.835938, 0.273438, 0.171875, 0.890625, 0.265625, 0.242188, -0.796875, 0.210938, 0.203125, -0.84375, 0.210938, 0.289062, -0.890625, 0.265625, 0.242188, 0.84375, 0.210938, 0.289062, 0.890625, 0.265625, 0.242188, 0.945312, 0.289062, 0.304688, -0.84375, 0.210938, 0.289062, -0.921875, 0.21875, 0.359375, -0.945312, 0.289062, 0.304688, 0.796875, 0.210938, 0.203125, 0.84375, 0.210938, 0.289062, 0.820312, 0.203125, 0.328125, -0.796875, 0.210938, 0.203125, -0.859375, 0.046875, 0.320312, -0.820312, 0.203125, 0.328125, 0.726562, 0.070312, 0.0, 0.71875, 0.1875, 0.039062, 0.796875, 0.210938, 0.203125, -0.726562, 0.070312, 0.0, -0.859375, 0.046875, 0.320312, -0.796875, 0.210938, 0.203125, 0.726562, 0.070312, 0.0, 0.71875, 0.171875, -0.023438, 0.71875, 0.1875, 0.039062, -0.71875, 0.1875, 0.039062, -0.71875, 0.171875, -0.023438, -0.726562, 0.070312, 0.0, 0.945312, 0.289062, 0.304688, 0.890625, 0.265625, 0.242188, 0.890625, 0.320312, 0.234375, -0.890625, 0.320312, 0.234375, -0.890625, 0.265625, 0.242188, -0.945312, 0.289062, 0.304688, 0.835938, 0.273438, 0.171875, 0.84375, 0.320312, 0.171875, 0.890625, 0.320312, 0.234375, -0.835938, 0.273438, 0.171875, -0.890625, 0.265625, 0.242188, -0.890625, 0.320312, 0.234375, 0.835938, 0.273438, 0.171875, 0.757812, 0.273438, 0.09375, 0.765625, 0.320312, 0.09375, -0.765625, 0.320312, 0.09375, -0.757812, 0.273438, 0.09375, -0.835938, 0.273438, 0.171875, 0.820312, 0.273438, 0.085938, 0.828125, 0.320312, 0.078125, 0.765625, 0.320312, 0.09375, -0.820312, 0.273438, 0.085938, -0.757812, 0.273438, 0.09375, -0.765625, 0.320312, 0.09375, 0.84375, 0.273438, 0.015625, 0.851562, 0.320312, 0.015625, 0.828125, 0.320312, 0.078125, -0.84375, 0.273438, 0.015625, -0.820312, 0.273438, 0.085938, -0.828125, 0.320312, 0.078125, 0.84375, 0.273438, 0.015625, 0.8125, 0.273438, -0.015625, 0.8125, 0.320312, -0.015625, -0.8125, 0.320312, -0.015625, -0.8125, 0.273438, -0.015625, -0.84375, 0.273438, 0.015625, 0.8125, 0.273438, -0.015625, 0.882812, 0.210938, -0.023438, 0.882812, 0.265625, -0.015625, -0.882812, 0.265625, -0.015625, -0.882812, 0.210938, -0.023438, -0.8125, 0.273438, -0.015625, 1.023438, 0.359375, 0.34375, 0.945312, 0.289062, 0.304688, 0.953125, 0.34375, 0.289062, -0.953125, 0.34375, 0.289062, -0.945312, 0.289062, 0.304688, -1.023438, 0.359375, 0.34375, 1.171875, 0.4375, 0.359375, 1.023438, 0.359375, 0.34375, 1.039062, 0.414062, 0.328125, -1.039062, 0.414062, 0.328125, -1.023438, 0.359375, 0.34375, -1.171875, 0.4375, 0.359375, 1.234375, 0.445312, 0.25, 1.171875, 0.4375, 0.359375, 1.1875, 0.484375, 0.34375, -1.1875, 0.484375, 0.34375, -1.171875, 0.4375, 0.359375, -1.234375, 0.445312, 0.25, 1.234375, 0.445312, 0.25, 1.257812, 0.492188, 0.242188, 1.210938, 0.484375, 0.085938, -1.234375, 0.445312, 0.25, -1.1875, 0.445312, 0.09375, -1.210938, 0.484375, 0.085938, 1.1875, 0.445312, 0.09375, 1.210938, 0.484375, 0.085938, 1.046875, 0.421875, 0.0, -1.1875, 0.445312, 0.09375, -1.039062, 0.367188, 0.0, -1.046875, 0.421875, 0.0, 1.039062, 0.367188, 0.0, 1.046875, 0.421875, 0.0, 0.882812, 0.265625, -0.015625, -1.039062, 0.367188, 0.0, -0.882812, 0.210938, -0.023438, -0.882812, 0.265625, -0.015625, 0.851562, 0.320312, 0.015625, 0.9375, 0.335938, 0.0625, 0.890625, 0.328125, 0.109375, -0.851562, 0.320312, 0.015625, -0.828125, 0.320312, 0.078125, -0.890625, 0.328125, 0.109375, 0.9375, 0.335938, 0.0625, 1.0, 0.367188, 0.125, 0.960938, 0.351562, 0.171875, -0.9375, 0.335938, 0.0625, -0.890625, 0.328125, 0.109375, -0.960938, 0.351562, 0.171875, 0.960938, 0.351562, 0.171875, 1.0, 0.367188, 0.125, 1.054688, 0.382812, 0.1875, -1.054688, 0.382812, 0.1875, -1.0, 0.367188, 0.125, -0.960938, 0.351562, 0.171875, 1.054688, 0.382812, 0.1875, 1.109375, 0.390625, 0.210938, 1.085938, 0.390625, 0.273438, -1.054688, 0.382812, 0.1875, -1.015625, 0.375, 0.234375, -1.085938, 0.390625, 0.273438, 1.039062, 0.414062, 0.328125, 0.953125, 0.34375, 0.289062, 1.015625, 0.375, 0.234375, -1.015625, 0.375, 0.234375, -0.953125, 0.34375, 0.289062, -1.039062, 0.414062, 0.328125, 0.960938, 0.351562, 0.171875, 1.015625, 0.375, 0.234375, 0.953125, 0.34375, 0.289062, -0.960938, 0.351562, 0.171875, -0.890625, 0.320312, 0.234375, -0.953125, 0.34375, 0.289062, 0.84375, 0.320312, 0.171875, 0.890625, 0.328125, 0.109375, 0.960938, 0.351562, 0.171875, -0.84375, 0.320312, 0.171875, -0.890625, 0.320312, 0.234375, -0.960938, 0.351562, 0.171875, 0.828125, 0.320312, 0.078125, 0.890625, 0.328125, 0.109375, 0.84375, 0.320312, 0.171875, -0.84375, 0.320312, 0.171875, -0.890625, 0.328125, 0.109375, -0.828125, 0.320312, 0.078125, 0.882812, 0.265625, -0.015625, 0.9375, 0.335938, 0.0625, 0.851562, 0.320312, 0.015625, -0.882812, 0.265625, -0.015625, -0.8125, 0.320312, -0.015625, -0.851562, 0.320312, 0.015625, 1.046875, 0.421875, 0.0, 1.0, 0.367188, 0.125, 0.9375, 0.335938, 0.0625, -0.9375, 0.335938, 0.0625, -1.0, 0.367188, 0.125, -1.046875, 0.421875, 0.0, 1.054688, 0.382812, 0.1875, 1.0, 0.367188, 0.125, 1.046875, 0.421875, 0.0, -1.054688, 0.382812, 0.1875, -1.210938, 0.484375, 0.085938, -1.046875, 0.421875, 0.0, 1.109375, 0.390625, 0.210938, 1.054688, 0.382812, 0.1875, 1.210938, 0.484375, 0.085938, -1.109375, 0.390625, 0.210938, -1.257812, 0.492188, 0.242188, -1.210938, 0.484375, 0.085938, 1.1875, 0.484375, 0.34375, 1.085938, 0.390625, 0.273438, 1.109375, 0.390625, 0.210938, -1.109375, 0.390625, 0.210938, -1.085938, 0.390625, 0.273438, -1.1875, 0.484375, 0.34375, 1.039062, 0.414062, 0.328125, 1.085938, 0.390625, 0.273438, 1.1875, 0.484375, 0.34375, -1.1875, 0.484375, 0.34375, -1.085938, 0.390625, 0.273438, -1.039062, 0.414062, 0.328125, 1.039062, 0.328125, -0.101562, 0.773438, 0.125, -0.140625, 0.789062, 0.328125, -0.125, -0.789062, 0.328125, -0.125, -0.773438, 0.125, -0.140625, -1.039062, 0.328125, -0.101562, 1.28125, 0.429688, 0.054688, 1.039062, 0.328125, -0.101562, 1.039062, 0.492188, -0.085938, -1.039062, 0.492188, -0.085938, -1.039062, 0.328125, -0.101562, -1.28125, 0.429688, 0.054688, 1.28125, 0.429688, 0.054688, 1.3125, 0.53125, 0.054688, 1.367188, 0.5, 0.296875, -1.28125, 0.429688, 0.054688, -1.351562, 0.421875, 0.320312, -1.367188, 0.5, 0.296875, 1.351562, 0.421875, 0.320312, 1.367188, 0.5, 0.296875, 1.25, 0.546875, 0.46875, -1.351562, 0.421875, 0.320312, -1.234375, 0.421875, 0.507812, -1.25, 0.546875, 0.46875, 1.234375, 0.421875, 0.507812, 1.25, 0.546875, 0.46875, 1.023438, 0.484375, 0.4375, -1.234375, 0.421875, 0.507812, -1.023438, 0.3125, 0.476562, -1.023438, 0.484375, 0.4375, 1.023438, 0.3125, 0.476562, 1.023438, 0.484375, 0.4375, 0.859375, 0.382812, 0.382812, -1.023438, 0.3125, 0.476562, -0.890625, 0.234375, 0.40625, -0.859375, 0.382812, 0.382812, 1.039062, 0.492188, -0.085938, 0.789062, 0.328125, -0.125, 0.859375, 0.382812, 0.382812, -1.039062, 0.492188, -0.085938, -1.023438, 0.484375, 0.4375, -0.859375, 0.382812, 0.382812, 1.023438, 0.484375, 0.4375, 1.25, 0.546875, 0.46875, 1.3125, 0.53125, 0.054688, -1.3125, 0.53125, 0.054688, -1.25, 0.546875, 0.46875, -1.023438, 0.484375, 0.4375, 1.25, 0.546875, 0.46875, 1.367188, 0.5, 0.296875, 1.3125, 0.53125, 0.054688, -1.3125, 0.53125, 0.054688, -1.367188, 0.5, 0.296875, -1.25, 0.546875, 0.46875, 0.820312, 0.203125, 0.328125, 0.890625, 0.234375, 0.40625, 0.859375, 0.382812, 0.382812, -0.820312, 0.203125, 0.328125, -0.773438, 0.4375, 0.265625, -0.859375, 0.382812, 0.382812, 0.773438, 0.4375, 0.265625, 0.859375, 0.382812, 0.382812, 0.789062, 0.328125, -0.125, -0.789062, 0.328125, -0.125, -0.859375, 0.382812, 0.382812, -0.773438, 0.4375, 0.265625, 0.59375, 0.164062, -0.125, 0.640625, 0.429688, -0.007812, 0.789062, 0.328125, -0.125, -0.789062, 0.328125, -0.125, -0.640625, 0.429688, -0.007812, -0.59375, 0.164062, -0.125, 0.5625, -0.671875, 0.242188, 0.46875, -0.757812, 0.242188, 0.5, -0.6875, 0.09375, -0.5625, -0.671875, 0.242188, -0.5, -0.6875, 0.09375, -0.46875, -0.757812, 0.242188, 0.625, -0.5625, 0.242188, 0.5625, -0.671875, 0.242188, 0.546875, -0.578125, 0.054688, -0.625, -0.5625, 0.242188, -0.546875, -0.578125, 0.054688, -0.5625, -0.671875, 0.242188, 0.546875, -0.578125, 0.054688, 0.5, -0.6875, 0.09375, 0.351562, -0.617188, -0.023438, -0.546875, -0.578125, 0.054688, -0.351562, -0.617188, -0.023438, -0.5, -0.6875, 0.09375, 0.5, -0.6875, 0.09375, 0.4375, -0.765625, 0.164062, 0.351562, -0.71875, 0.03125, -0.5, -0.6875, 0.09375, -0.351562, -0.71875, 0.03125, -0.4375, -0.765625, 0.164062, 0.351562, -0.71875, 0.03125, 0.351562, -0.78125, 0.132812, 0.203125, -0.742188, 0.09375, -0.351562, -0.71875, 0.03125, -0.203125, -0.742188, 0.09375, -0.351562, -0.78125, 0.132812, 0.351562, -0.617188, -0.023438, 0.351562, -0.71875, 0.03125, 0.15625, -0.648438, 0.054688, -0.351562, -0.617188, -0.023438, -0.15625, -0.648438, 0.054688, -0.351562, -0.71875, 0.03125, 0.203125, -0.742188, 0.09375, 0.140625, -0.742188, 0.242188, 0.15625, -0.648438, 0.054688, -0.078125, -0.65625, 0.242188, -0.140625, -0.742188, 0.242188, -0.15625, -0.648438, 0.054688, 0.273438, -0.796875, 0.164062, 0.242188, -0.796875, 0.242188, 0.203125, -0.742188, 0.09375, -0.140625, -0.742188, 0.242188, -0.242188, -0.796875, 0.242188, -0.203125, -0.742188, 0.09375, 0.140625, -0.742188, 0.242188, 0.242188, -0.796875, 0.242188, 0.203125, -0.742188, 0.390625, -0.140625, -0.742188, 0.242188, -0.203125, -0.742188, 0.390625, -0.242188, -0.796875, 0.242188, 0.140625, -0.742188, 0.242188, 0.203125, -0.742188, 0.390625, 0.078125, -0.65625, 0.242188, -0.15625, -0.648438, 0.4375, -0.203125, -0.742188, 0.390625, -0.078125, -0.65625, 0.242188, 0.203125, -0.742188, 0.390625, 0.351562, -0.71875, 0.453125, 0.15625, -0.648438, 0.4375, -0.351562, -0.617188, 0.515625, -0.351562, -0.71875, 0.453125, -0.15625, -0.648438, 0.4375, 0.273438, -0.796875, 0.328125, 0.351562, -0.78125, 0.359375, 0.203125, -0.742188, 0.390625, -0.351562, -0.71875, 0.453125, -0.351562, -0.78125, 0.359375, -0.203125, -0.742188, 0.390625, 0.351562, -0.78125, 0.359375, 0.4375, -0.765625, 0.328125, 0.351562, -0.71875, 0.453125, -0.5, -0.6875, 0.390625, -0.4375, -0.765625, 0.328125, -0.351562, -0.71875, 0.453125, 0.351562, -0.71875, 0.453125, 0.5, -0.6875, 0.390625, 0.351562, -0.617188, 0.515625, -0.546875, -0.578125, 0.4375, -0.5, -0.6875, 0.390625, -0.351562, -0.617188, 0.515625, 0.5, -0.6875, 0.390625, 0.5625, -0.671875, 0.242188, 0.546875, -0.578125, 0.4375, -0.625, -0.5625, 0.242188, -0.5625, -0.671875, 0.242188, -0.546875, -0.578125, 0.4375, 0.4375, -0.765625, 0.328125, 0.46875, -0.757812, 0.242188, 0.5, -0.6875, 0.390625, -0.5625, -0.671875, 0.242188, -0.46875, -0.757812, 0.242188, -0.5, -0.6875, 0.390625, 0.46875, -0.757812, 0.242188, 0.4375, -0.765625, 0.328125, 0.476562, -0.773438, 0.242188, -0.445312, -0.78125, 0.335938, -0.4375, -0.765625, 0.328125, -0.476562, -0.773438, 0.242188, 0.4375, -0.765625, 0.328125, 0.351562, -0.78125, 0.359375, 0.445312, -0.78125, 0.335938, -0.351562, -0.804688, 0.375, -0.351562, -0.78125, 0.359375, -0.445312, -0.78125, 0.335938, 0.351562, -0.78125, 0.359375, 0.273438, -0.796875, 0.328125, 0.351562, -0.804688, 0.375, -0.265625, -0.820312, 0.335938, -0.273438, -0.796875, 0.328125, -0.351562, -0.804688, 0.375, 0.273438, -0.796875, 0.328125, 0.242188, -0.796875, 0.242188, 0.265625, -0.820312, 0.335938, -0.226562, -0.820312, 0.242188, -0.242188, -0.796875, 0.242188, -0.265625, -0.820312, 0.335938, 0.226562, -0.820312, 0.242188, 0.242188, -0.796875, 0.242188, 0.265625, -0.820312, 0.15625, -0.226562, -0.820312, 0.242188, -0.265625, -0.820312, 0.15625, -0.242188, -0.796875, 0.242188, 0.265625, -0.820312, 0.15625, 0.273438, -0.796875, 0.164062, 0.351562, -0.804688, 0.117188, -0.265625, -0.820312, 0.15625, -0.351562, -0.804688, 0.117188, -0.273438, -0.796875, 0.164062, 0.351562, -0.804688, 0.117188, 0.351562, -0.78125, 0.132812, 0.445312, -0.78125, 0.15625, -0.351562, -0.804688, 0.117188, -0.445312, -0.78125, 0.15625, -0.351562, -0.78125, 0.132812, 0.445312, -0.78125, 0.15625, 0.4375, -0.765625, 0.164062, 0.476562, -0.773438, 0.242188, -0.445312, -0.78125, 0.15625, -0.476562, -0.773438, 0.242188, -0.4375, -0.765625, 0.164062, 0.179688, -0.554688, -0.96875, 0.164062, -0.632812, -0.929688, 0.0, -0.578125, -0.984375, 0.0, -0.640625, -0.945312, -0.164062, -0.632812, -0.929688, 0.0, -0.578125, -0.984375, 0.328125, -0.523438, -0.945312, 0.234375, -0.632812, -0.914062, 0.179688, -0.554688, -0.96875, -0.164062, -0.632812, -0.929688, -0.234375, -0.632812, -0.914062, -0.179688, -0.554688, -0.96875, 0.328125, -0.523438, -0.945312, 0.367188, -0.53125, -0.890625, 0.234375, -0.632812, -0.914062, -0.328125, -0.523438, -0.945312, -0.234375, -0.632812, -0.914062, -0.367188, -0.53125, -0.890625, 0.367188, -0.53125, -0.890625, 0.351562, -0.570312, -0.695312, 0.265625, -0.664062, -0.820312, -0.367188, -0.53125, -0.890625, -0.265625, -0.664062, -0.820312, -0.351562, -0.570312, -0.695312, 0.351562, -0.570312, -0.695312, 0.3125, -0.570312, -0.4375, 0.25, -0.6875, -0.703125, -0.351562, -0.570312, -0.695312, -0.25, -0.6875, -0.703125, -0.3125, -0.570312, -0.4375, 0.125, -0.8125, -0.101562, 0.203125, -0.5625, -0.1875, 0.398438, -0.671875, -0.046875, -0.125, -0.8125, -0.101562, -0.398438, -0.671875, -0.046875, -0.203125, -0.5625, -0.1875, 0.4375, -0.53125, -0.140625, 0.632812, -0.539062, -0.039062, 0.398438, -0.671875, -0.046875, -0.617188, -0.625, 0.054688, -0.632812, -0.539062, -0.039062, -0.398438, -0.671875, -0.046875, 0.617188, -0.625, 0.054688, 0.632812, -0.539062, -0.039062, 0.726562, -0.601562, 0.203125, -0.617188, -0.625, 0.054688, -0.726562, -0.601562, 0.203125, -0.632812, -0.539062, -0.039062, 0.828125, -0.445312, 0.148438, 0.859375, -0.59375, 0.429688, 0.726562, -0.601562, 0.203125, -0.742188, -0.65625, 0.375, -0.859375, -0.59375, 0.429688, -0.726562, -0.601562, 0.203125, 0.859375, -0.59375, 0.429688, 0.710938, -0.625, 0.484375, 0.742188, -0.65625, 0.375, -0.6875, -0.726562, 0.414062, -0.710938, -0.625, 0.484375, -0.742188, -0.65625, 0.375, 0.710938, -0.625, 0.484375, 0.492188, -0.6875, 0.601562, 0.6875, -0.726562, 0.414062, -0.4375, -0.796875, 0.546875, -0.492188, -0.6875, 0.601562, -0.6875, -0.726562, 0.414062, 0.4375, -0.796875, 0.546875, 0.492188, -0.6875, 0.601562, 0.3125, -0.835938, 0.640625, -0.4375, -0.796875, 0.546875, -0.3125, -0.835938, 0.640625, -0.492188, -0.6875, 0.601562, 0.320312, -0.734375, 0.757812, 0.15625, -0.757812, 0.71875, 0.3125, -0.835938, 0.640625, -0.203125, -0.851562, 0.617188, -0.15625, -0.757812, 0.71875, -0.3125, -0.835938, 0.640625, 0.15625, -0.757812, 0.71875, 0.0625, -0.75, 0.492188, 0.203125, -0.851562, 0.617188, -0.101562, -0.84375, 0.429688, -0.0625, -0.75, 0.492188, -0.203125, -0.851562, 0.617188, 0.0625, -0.75, 0.492188, 0.0, -0.742188, 0.429688, 0.101562, -0.84375, 0.429688, 0.0, -0.820312, 0.351562, 0.0, -0.742188, 0.429688, -0.101562, -0.84375, 0.429688, 0.164062, -0.773438, 0.414062, 0.25, -0.757812, 0.46875, 0.101562, -0.84375, 0.429688, -0.203125, -0.851562, 0.617188, -0.25, -0.757812, 0.46875, -0.101562, -0.84375, 0.429688, 0.203125, -0.851562, 0.617188, 0.25, -0.757812, 0.46875, 0.3125, -0.835938, 0.640625, -0.203125, -0.851562, 0.617188, -0.3125, -0.835938, 0.640625, -0.25, -0.757812, 0.46875, 0.429688, -0.71875, 0.4375, 0.4375, -0.796875, 0.546875, 0.328125, -0.742188, 0.476562, -0.3125, -0.835938, 0.640625, -0.4375, -0.796875, 0.546875, -0.328125, -0.742188, 0.476562, 0.601562, -0.664062, 0.375, 0.6875, -0.726562, 0.414062, 0.429688, -0.71875, 0.4375, -0.4375, -0.796875, 0.546875, -0.6875, -0.726562, 0.414062, -0.429688, -0.71875, 0.4375, 0.640625, -0.648438, 0.296875, 0.742188, -0.65625, 0.375, 0.601562, -0.664062, 0.375, -0.6875, -0.726562, 0.414062, -0.742188, -0.65625, 0.375, -0.601562, -0.664062, 0.375, 0.625, -0.648438, 0.1875, 0.726562, -0.601562, 0.203125, 0.640625, -0.648438, 0.296875, -0.742188, -0.65625, 0.375, -0.726562, -0.601562, 0.203125, -0.640625, -0.648438, 0.296875, 0.492188, -0.671875, 0.0625, 0.617188, -0.625, 0.054688, 0.625, -0.648438, 0.1875, -0.726562, -0.601562, 0.203125, -0.617188, -0.625, 0.054688, -0.625, -0.648438, 0.1875, 0.375, -0.703125, 0.015625, 0.398438, -0.671875, -0.046875, 0.492188, -0.671875, 0.0625, -0.617188, -0.625, 0.054688, -0.398438, -0.671875, -0.046875, -0.492188, -0.671875, 0.0625, 0.375, -0.703125, 0.015625, 0.203125, -0.742188, 0.09375, 0.398438, -0.671875, -0.046875, -0.375, -0.703125, 0.015625, -0.398438, -0.671875, -0.046875, -0.203125, -0.742188, 0.09375, 0.125, -0.8125, -0.101562, 0.203125, -0.742188, 0.09375, 0.0, -0.726562, 0.046875, -0.125, -0.8125, -0.101562, 0.0, -0.726562, 0.046875, -0.203125, -0.742188, 0.09375, 0.164062, -0.773438, 0.414062, 0.101562, -0.84375, 0.429688, 0.125, -0.765625, 0.304688, 0.0, -0.820312, 0.351562, -0.101562, -0.84375, 0.429688, -0.125, -0.765625, 0.304688, 0.132812, -0.757812, 0.210938, 0.125, -0.765625, 0.304688, 0.0, -0.765625, 0.210938, -0.132812, -0.757812, 0.210938, 0.0, -0.765625, 0.210938, -0.125, -0.765625, 0.304688, 0.0, -0.726562, 0.046875, 0.164062, -0.75, 0.140625, 0.0, -0.765625, 0.210938, -0.132812, -0.757812, 0.210938, -0.164062, -0.75, 0.140625, 0.0, -0.765625, 0.210938, 0.164062, -0.632812, -0.929688, 0.0625, -0.695312, -0.882812, 0.0, -0.640625, -0.945312, -0.164062, -0.632812, -0.929688, 0.0, -0.640625, -0.945312, -0.0625, -0.695312, -0.882812, 0.234375, -0.632812, -0.914062, 0.117188, -0.710938, -0.835938, 0.164062, -0.632812, -0.929688, -0.234375, -0.632812, -0.914062, -0.164062, -0.632812, -0.929688, -0.117188, -0.710938, -0.835938, 0.109375, -0.734375, -0.71875, 0.117188, -0.710938, -0.835938, 0.265625, -0.664062, -0.820312, -0.234375, -0.632812, -0.914062, -0.117188, -0.710938, -0.835938, -0.265625, -0.664062, -0.820312, 0.25, -0.6875, -0.703125, 0.210938, -0.710938, -0.445312, 0.117188, -0.734375, -0.6875, -0.25, -0.6875, -0.703125, -0.117188, -0.734375, -0.6875, -0.210938, -0.710938, -0.445312, 0.117188, -0.734375, -0.6875, 0.109375, -0.734375, -0.71875, 0.25, -0.6875, -0.703125, -0.117188, -0.734375, -0.6875, -0.25, -0.6875, -0.703125, -0.109375, -0.734375, -0.71875, 0.085938, -0.742188, -0.289062, 0.0, -0.742188, -0.328125, 0.078125, -0.75, -0.445312, 0.0, -0.75, -0.445312, 0.0, -0.742188, -0.328125, -0.078125, -0.75, -0.445312, 0.117188, -0.734375, -0.6875, 0.078125, -0.75, -0.445312, 0.0, -0.734375, -0.679688, 0.0, -0.75, -0.445312, -0.078125, -0.75, -0.445312, 0.0, -0.734375, -0.679688, 0.0, -0.734375, -0.765625, 0.109375, -0.734375, -0.71875, 0.0, -0.734375, -0.679688, -0.117188, -0.734375, -0.6875, -0.109375, -0.734375, -0.71875, 0.0, -0.734375, -0.679688, 0.085938, -0.742188, -0.289062, 0.125, -0.75, -0.226562, 0.09375, -0.78125, -0.273438, -0.085938, -0.742188, -0.289062, -0.09375, -0.78125, -0.273438, -0.125, -0.75, -0.226562, 0.101562, -0.742188, -0.148438, 0.109375, -0.78125, -0.132812, 0.125, -0.75, -0.226562, -0.132812, -0.796875, -0.226562, -0.109375, -0.78125, -0.132812, -0.125, -0.75, -0.226562, 0.0, -0.742188, -0.140625, 0.039062, -0.78125, -0.125, 0.101562, -0.742188, -0.148438, -0.109375, -0.78125, -0.132812, -0.039062, -0.78125, -0.125, -0.101562, -0.742188, -0.148438, 0.0, -0.75, -0.195312, 0.0, -0.796875, -0.1875, 0.0, -0.742188, -0.140625, -0.039062, -0.78125, -0.125, 0.0, -0.796875, -0.1875, 0.0, -0.742188, -0.140625, 0.0, -0.742188, -0.328125, 0.085938, -0.742188, -0.289062, 0.0, -0.78125, -0.320312, -0.09375, -0.78125, -0.273438, -0.085938, -0.742188, -0.289062, 0.0, -0.78125, -0.320312, 0.0, -0.78125, -0.320312, 0.09375, -0.78125, -0.273438, 0.0, -0.804688, -0.289062, -0.078125, -0.804688, -0.25, -0.09375, -0.78125, -0.273438, 0.0, -0.804688, -0.289062, 0.039062, -0.78125, -0.125, 0.0, -0.796875, -0.1875, 0.046875, -0.8125, -0.148438, -0.039062, -0.78125, -0.125, -0.046875, -0.8125, -0.148438, 0.0, -0.796875, -0.1875, 0.109375, -0.78125, -0.132812, 0.039062, -0.78125, -0.125, 0.09375, -0.8125, -0.15625, -0.109375, -0.78125, -0.132812, -0.09375, -0.8125, -0.15625, -0.039062, -0.78125, -0.125, 0.109375, -0.78125, -0.132812, 0.09375, -0.8125, -0.15625, 0.132812, -0.796875, -0.226562, -0.109375, -0.828125, -0.226562, -0.09375, -0.8125, -0.15625, -0.132812, -0.796875, -0.226562, 0.09375, -0.78125, -0.273438, 0.132812, -0.796875, -0.226562, 0.078125, -0.804688, -0.25, -0.09375, -0.78125, -0.273438, -0.078125, -0.804688, -0.25, -0.132812, -0.796875, -0.226562, 0.0, -0.828125, -0.203125, 0.109375, -0.828125, -0.226562, 0.046875, -0.8125, -0.148438, -0.09375, -0.8125, -0.15625, -0.109375, -0.828125, -0.226562, -0.046875, -0.8125, -0.148438, 0.109375, -0.828125, -0.226562, 0.0, -0.828125, -0.203125, 0.078125, -0.804688, -0.25, -0.109375, -0.828125, -0.226562, -0.078125, -0.804688, -0.25, 0.0, -0.828125, -0.203125, 0.0, -0.726562, 0.046875, 0.0, -0.742188, -0.140625, 0.125, -0.8125, -0.101562, 0.0, -0.726562, 0.046875, -0.125, -0.8125, -0.101562, 0.0, -0.742188, -0.140625, 0.125, -0.8125, -0.101562, 0.101562, -0.742188, -0.148438, 0.164062, -0.710938, -0.242188, -0.125, -0.8125, -0.101562, -0.164062, -0.710938, -0.242188, -0.101562, -0.742188, -0.148438, 0.125, -0.75, -0.226562, 0.085938, -0.742188, -0.289062, 0.164062, -0.710938, -0.242188, -0.179688, -0.710938, -0.3125, -0.085938, -0.742188, -0.289062, -0.164062, -0.710938, -0.242188, 0.085938, -0.742188, -0.289062, 0.078125, -0.75, -0.445312, 0.179688, -0.710938, -0.3125, -0.210938, -0.710938, -0.445312, -0.078125, -0.75, -0.445312, -0.179688, -0.710938, -0.3125, 0.3125, -0.570312, -0.4375, 0.257812, -0.554688, -0.3125, 0.210938, -0.710938, -0.445312, -0.179688, -0.710938, -0.3125, -0.257812, -0.554688, -0.3125, -0.210938, -0.710938, -0.445312, 0.257812, -0.554688, -0.3125, 0.234375, -0.554688, -0.25, 0.179688, -0.710938, -0.3125, -0.164062, -0.710938, -0.242188, -0.234375, -0.554688, -0.25, -0.179688, -0.710938, -0.3125, 0.234375, -0.554688, -0.25, 0.203125, -0.5625, -0.1875, 0.164062, -0.710938, -0.242188, -0.234375, -0.554688, -0.25, -0.164062, -0.710938, -0.242188, -0.203125, -0.5625, -0.1875, 0.109375, -0.734375, -0.71875, 0.0, -0.734375, -0.765625, 0.09375, -0.726562, -0.742188, 0.0, -0.71875, -0.773438, 0.0, -0.734375, -0.765625, -0.09375, -0.726562, -0.742188, 0.09375, -0.710938, -0.820312, 0.117188, -0.710938, -0.835938, 0.09375, -0.726562, -0.742188, -0.09375, -0.710938, -0.820312, -0.09375, -0.726562, -0.742188, -0.117188, -0.710938, -0.835938, 0.046875, -0.6875, -0.867188, 0.0625, -0.695312, -0.882812, 0.09375, -0.710938, -0.820312, -0.046875, -0.6875, -0.867188, -0.09375, -0.710938, -0.820312, -0.0625, -0.695312, -0.882812, 0.0, -0.6875, -0.875, 0.0, -0.6875, -0.890625, 0.046875, -0.6875, -0.867188, 0.0, -0.6875, -0.875, -0.046875, -0.6875, -0.867188, 0.0, -0.6875, -0.890625, 0.0, -0.6875, -0.875, 0.046875, -0.6875, -0.867188, 0.0, -0.632812, -0.859375, -0.046875, -0.632812, -0.851562, -0.046875, -0.6875, -0.867188, 0.0, -0.632812, -0.859375, 0.046875, -0.632812, -0.851562, 0.046875, -0.6875, -0.867188, 0.09375, -0.640625, -0.8125, -0.046875, -0.632812, -0.851562, -0.09375, -0.640625, -0.8125, -0.046875, -0.6875, -0.867188, 0.09375, -0.640625, -0.8125, 0.09375, -0.710938, -0.820312, 0.09375, -0.664062, -0.75, -0.09375, -0.640625, -0.8125, -0.09375, -0.664062, -0.75, -0.09375, -0.710938, -0.820312, 0.09375, -0.726562, -0.742188, 0.0, -0.71875, -0.773438, 0.09375, -0.664062, -0.75, 0.0, -0.65625, -0.78125, 0.0, -0.71875, -0.773438, -0.09375, -0.664062, -0.75, 0.09375, -0.664062, -0.75, 0.0, -0.65625, -0.78125, 0.046875, -0.632812, -0.851562, -0.09375, -0.664062, -0.75, -0.046875, -0.632812, -0.851562, 0.0, -0.65625, -0.78125, 0.171875, -0.78125, 0.21875, 0.132812, -0.757812, 0.210938, 0.1875, -0.773438, 0.15625, -0.171875, -0.78125, 0.21875, -0.1875, -0.773438, 0.15625, -0.132812, -0.757812, 0.210938, 0.179688, -0.78125, 0.296875, 0.125, -0.765625, 0.304688, 0.171875, -0.78125, 0.21875, -0.179688, -0.78125, 0.296875, -0.171875, -0.78125, 0.21875, -0.125, -0.765625, 0.304688, 0.164062, -0.773438, 0.414062, 0.125, -0.765625, 0.304688, 0.210938, -0.78125, 0.375, -0.179688, -0.78125, 0.296875, -0.125, -0.765625, 0.304688, -0.210938, -0.78125, 0.375, 0.164062, -0.75, 0.140625, 0.203125, -0.742188, 0.09375, 0.1875, -0.773438, 0.15625, -0.226562, -0.78125, 0.109375, -0.203125, -0.742188, 0.09375, -0.1875, -0.773438, 0.15625, 0.226562, -0.78125, 0.109375, 0.203125, -0.742188, 0.09375, 0.375, -0.742188, 0.0625, -0.226562, -0.78125, 0.109375, -0.375, -0.742188, 0.0625, -0.203125, -0.742188, 0.09375, 0.375, -0.742188, 0.0625, 0.375, -0.703125, 0.015625, 0.476562, -0.71875, 0.101562, -0.375, -0.742188, 0.0625, -0.476562, -0.71875, 0.101562, -0.375, -0.703125, 0.015625, 0.476562, -0.71875, 0.101562, 0.492188, -0.671875, 0.0625, 0.578125, -0.679688, 0.195312, -0.476562, -0.71875, 0.101562, -0.578125, -0.679688, 0.195312, -0.492188, -0.671875, 0.0625, 0.578125, -0.679688, 0.195312, 0.625, -0.648438, 0.1875, 0.585938, -0.6875, 0.289062, -0.578125, -0.679688, 0.195312, -0.585938, -0.6875, 0.289062, -0.625, -0.648438, 0.1875, 0.640625, -0.648438, 0.296875, 0.601562, -0.664062, 0.375, 0.585938, -0.6875, 0.289062, -0.5625, -0.695312, 0.351562, -0.601562, -0.664062, 0.375, -0.585938, -0.6875, 0.289062, 0.601562, -0.664062, 0.375, 0.429688, -0.71875, 0.4375, 0.5625, -0.695312, 0.351562, -0.421875, -0.773438, 0.398438, -0.429688, -0.71875, 0.4375, -0.5625, -0.695312, 0.351562, 0.421875, -0.773438, 0.398438, 0.429688, -0.71875, 0.4375, 0.335938, -0.757812, 0.429688, -0.421875, -0.773438, 0.398438, -0.335938, -0.757812, 0.429688, -0.429688, -0.71875, 0.4375, 0.335938, -0.757812, 0.429688, 0.328125, -0.742188, 0.476562, 0.273438, -0.773438, 0.421875, -0.335938, -0.757812, 0.429688, -0.273438, -0.773438, 0.421875, -0.328125, -0.742188, 0.476562, 0.273438, -0.773438, 0.421875, 0.25, -0.757812, 0.46875, 0.210938, -0.78125, 0.375, -0.273438, -0.773438, 0.421875, -0.210938, -0.78125, 0.375, -0.25, -0.757812, 0.46875, 0.28125, -0.765625, 0.398438, 0.273438, -0.773438, 0.421875, 0.234375, -0.757812, 0.359375, -0.28125, -0.765625, 0.398438, -0.234375, -0.757812, 0.359375, -0.273438, -0.773438, 0.421875, 0.335938, -0.75, 0.40625, 0.335938, -0.757812, 0.429688, 0.28125, -0.765625, 0.398438, -0.335938, -0.75, 0.40625, -0.28125, -0.765625, 0.398438, -0.335938, -0.757812, 0.429688, 0.421875, -0.773438, 0.398438, 0.335938, -0.757812, 0.429688, 0.414062, -0.75, 0.390625, -0.335938, -0.75, 0.40625, -0.335938, -0.757812, 0.429688, -0.414062, -0.75, 0.390625, 0.5625, -0.695312, 0.351562, 0.421875, -0.773438, 0.398438, 0.53125, -0.679688, 0.335938, -0.414062, -0.75, 0.390625, -0.421875, -0.773438, 0.398438, -0.53125, -0.679688, 0.335938, 0.554688, -0.671875, 0.28125, 0.585938, -0.6875, 0.289062, 0.53125, -0.679688, 0.335938, -0.554688, -0.671875, 0.28125, -0.53125, -0.679688, 0.335938, -0.585938, -0.6875, 0.289062, 0.578125, -0.679688, 0.195312, 0.585938, -0.6875, 0.289062, 0.546875, -0.671875, 0.210938, -0.554688, -0.671875, 0.28125, -0.585938, -0.6875, 0.289062, -0.546875, -0.671875, 0.210938, 0.460938, -0.703125, 0.117188, 0.476562, -0.71875, 0.101562, 0.546875, -0.671875, 0.210938, -0.460938, -0.703125, 0.117188, -0.546875, -0.671875, 0.210938, -0.476562, -0.71875, 0.101562, 0.375, -0.742188, 0.0625, 0.476562, -0.71875, 0.101562, 0.375, -0.726562, 0.085938, -0.460938, -0.703125, 0.117188, -0.476562, -0.71875, 0.101562, -0.375, -0.726562, 0.085938, 0.226562, -0.78125, 0.109375, 0.375, -0.742188, 0.0625, 0.242188, -0.757812, 0.125, -0.375, -0.726562, 0.085938, -0.375, -0.742188, 0.0625, -0.242188, -0.757812, 0.125, 0.203125, -0.75, 0.171875, 0.1875, -0.773438, 0.15625, 0.242188, -0.757812, 0.125, -0.203125, -0.75, 0.171875, -0.242188, -0.757812, 0.125, -0.1875, -0.773438, 0.15625, 0.234375, -0.757812, 0.359375, 0.210938, -0.78125, 0.375, 0.195312, -0.757812, 0.296875, -0.234375, -0.757812, 0.359375, -0.195312, -0.757812, 0.296875, -0.210938, -0.78125, 0.375, 0.195312, -0.757812, 0.296875, 0.179688, -0.78125, 0.296875, 0.195312, -0.75, 0.226562, -0.195312, -0.757812, 0.296875, -0.195312, -0.75, 0.226562, -0.179688, -0.78125, 0.296875, 0.195312, -0.75, 0.226562, 0.171875, -0.78125, 0.21875, 0.203125, -0.75, 0.171875, -0.195312, -0.75, 0.226562, -0.203125, -0.75, 0.171875, -0.171875, -0.78125, 0.21875, 0.0, -0.601562, 0.40625, 0.0, -0.742188, 0.429688, 0.109375, -0.609375, 0.460938, 0.0, -0.601562, 0.40625, -0.109375, -0.609375, 0.460938, 0.0, -0.742188, 0.429688, 0.109375, -0.609375, 0.460938, 0.0625, -0.75, 0.492188, 0.195312, -0.617188, 0.664062, -0.109375, -0.609375, 0.460938, -0.195312, -0.617188, 0.664062, -0.0625, -0.75, 0.492188, 0.15625, -0.757812, 0.71875, 0.320312, -0.734375, 0.757812, 0.195312, -0.617188, 0.664062, -0.335938, -0.59375, 0.6875, -0.320312, -0.734375, 0.757812, -0.195312, -0.617188, 0.664062, 0.320312, -0.734375, 0.757812, 0.492188, -0.6875, 0.601562, 0.335938, -0.59375, 0.6875, -0.484375, -0.554688, 0.554688, -0.492188, -0.6875, 0.601562, -0.335938, -0.59375, 0.6875, 0.492188, -0.6875, 0.601562, 0.710938, -0.625, 0.484375, 0.484375, -0.554688, 0.554688, -0.679688, -0.492188, 0.453125, -0.710938, -0.625, 0.484375, -0.484375, -0.554688, 0.554688, 0.679688, -0.492188, 0.453125, 0.710938, -0.625, 0.484375, 0.796875, -0.460938, 0.40625, -0.679688, -0.492188, 0.453125, -0.796875, -0.460938, 0.40625, -0.710938, -0.625, 0.484375, 0.859375, -0.59375, 0.429688, 0.828125, -0.445312, 0.148438, 0.796875, -0.460938, 0.40625, -0.773438, -0.375, 0.164062, -0.828125, -0.445312, 0.148438, -0.796875, -0.460938, 0.40625, 0.773438, -0.375, 0.164062, 0.828125, -0.445312, 0.148438, 0.601562, -0.414062, 0.0, -0.773438, -0.375, 0.164062, -0.601562, -0.414062, 0.0, -0.828125, -0.445312, 0.148438, 0.601562, -0.414062, 0.0, 0.632812, -0.539062, -0.039062, 0.4375, -0.46875, -0.09375, -0.601562, -0.414062, 0.0, -0.4375, -0.46875, -0.09375, -0.632812, -0.539062, -0.039062, 0.0, -0.320312, -0.570312, 0.0, -0.28125, -0.484375, 0.125, -0.359375, -0.539062, -0.179688, -0.257812, -0.414062, 0.0, -0.28125, -0.484375, -0.125, -0.359375, -0.539062, 0.0, -0.34375, -0.804688, 0.0, -0.320312, -0.570312, 0.140625, -0.367188, -0.757812, -0.125, -0.359375, -0.539062, 0.0, -0.320312, -0.570312, -0.140625, -0.367188, -0.757812, 0.0, -0.460938, -0.976562, 0.0, -0.34375, -0.804688, 0.164062, -0.4375, -0.945312, -0.140625, -0.367188, -0.757812, 0.0, -0.34375, -0.804688, -0.164062, -0.4375, -0.945312, 0.164062, -0.4375, -0.945312, 0.179688, -0.554688, -0.96875, 0.0, -0.460938, -0.976562, -0.164062, -0.4375, -0.945312, 0.0, -0.460938, -0.976562, -0.179688, -0.554688, -0.96875, 0.328125, -0.398438, -0.914062, 0.328125, -0.523438, -0.945312, 0.164062, -0.4375, -0.945312, -0.328125, -0.398438, -0.914062, -0.164062, -0.4375, -0.945312, -0.328125, -0.523438, -0.945312, 0.289062, -0.382812, -0.710938, 0.367188, -0.53125, -0.890625, 0.328125, -0.398438, -0.914062, -0.289062, -0.382812, -0.710938, -0.328125, -0.398438, -0.914062, -0.367188, -0.53125, -0.890625, 0.25, -0.390625, -0.5, 0.351562, -0.570312, -0.695312, 0.289062, -0.382812, -0.710938, -0.25, -0.390625, -0.5, -0.289062, -0.382812, -0.710938, -0.351562, -0.570312, -0.695312, 0.25, -0.390625, -0.5, 0.289062, -0.382812, -0.710938, 0.125, -0.359375, -0.539062, -0.25, -0.390625, -0.5, -0.125, -0.359375, -0.539062, -0.289062, -0.382812, -0.710938, 0.289062, -0.382812, -0.710938, 0.328125, -0.398438, -0.914062, 0.140625, -0.367188, -0.757812, -0.164062, -0.4375, -0.945312, -0.328125, -0.398438, -0.914062, -0.140625, -0.367188, -0.757812, 0.234375, -0.40625, -0.351562, 0.25, -0.390625, -0.5, 0.179688, -0.257812, -0.414062, -0.125, -0.359375, -0.539062, -0.25, -0.390625, -0.5, -0.179688, -0.257812, -0.414062, 0.234375, -0.40625, -0.351562, 0.3125, -0.570312, -0.4375, 0.25, -0.390625, -0.5, -0.234375, -0.40625, -0.351562, -0.25, -0.390625, -0.5, -0.3125, -0.570312, -0.4375, 0.257812, -0.554688, -0.3125, 0.21875, -0.429688, -0.28125, 0.234375, -0.554688, -0.25, -0.210938, -0.46875, -0.226562, -0.21875, -0.429688, -0.28125, -0.234375, -0.554688, -0.25, 0.3125, -0.570312, -0.4375, 0.234375, -0.40625, -0.351562, 0.257812, -0.554688, -0.3125, -0.21875, -0.429688, -0.28125, -0.234375, -0.40625, -0.351562, -0.257812, -0.554688, -0.3125, 0.203125, -0.5625, -0.1875, 0.234375, -0.554688, -0.25, 0.203125, -0.5, -0.171875, -0.210938, -0.46875, -0.226562, -0.234375, -0.554688, -0.25, -0.203125, -0.5, -0.171875, 0.203125, -0.5625, -0.1875, 0.203125, -0.5, -0.171875, 0.4375, -0.53125, -0.140625, -0.4375, -0.46875, -0.09375, -0.203125, -0.5, -0.171875, -0.4375, -0.53125, -0.140625, 0.0, 0.828125, 0.070312, 0.335938, 0.664062, 0.054688, 0.0, 0.671875, -0.195312, -0.34375, 0.539062, -0.148438, -0.335938, 0.664062, 0.054688, 0.0, 0.671875, -0.195312, 0.0, 0.671875, -0.195312, 0.34375, 0.539062, -0.148438, 0.0, 0.351562, -0.382812, -0.296875, 0.265625, -0.3125, -0.34375, 0.539062, -0.148438, 0.0, 0.351562, -0.382812, 0.0, -0.1875, -0.460938, 0.0, 0.351562, -0.382812, 0.210938, -0.164062, -0.390625, 0.0, -0.1875, -0.460938, -0.210938, -0.164062, -0.390625, 0.0, 0.351562, -0.382812, 0.0, -0.28125, -0.484375, 0.0, -0.1875, -0.460938, 0.179688, -0.257812, -0.414062, 0.0, -0.28125, -0.484375, -0.179688, -0.257812, -0.414062, 0.0, -0.1875, -0.460938, 0.234375, -0.40625, -0.351562, 0.179688, -0.257812, -0.414062, 0.21875, -0.429688, -0.28125, -0.210938, -0.164062, -0.390625, -0.179688, -0.257812, -0.414062, -0.21875, -0.429688, -0.28125, 0.851562, -0.054688, 0.234375, 0.773438, -0.375, 0.164062, 0.734375, -0.070312, -0.046875, -0.851562, -0.054688, 0.234375, -0.734375, -0.070312, -0.046875, -0.773438, -0.375, 0.164062, 0.0, 0.851562, 0.5625, 0.460938, 0.703125, 0.4375, 0.0, 0.828125, 0.070312, -0.335938, 0.664062, 0.054688, -0.460938, 0.703125, 0.4375, 0.0, 0.828125, 0.070312, 0.0, -0.289062, 0.898438, 0.453125, -0.234375, 0.851562, 0.0, 0.078125, 0.984375, -0.453125, 0.070312, 0.929688, -0.453125, -0.234375, 0.851562, 0.0, 0.078125, 0.984375, 0.0, 0.546875, 0.898438, 0.0, 0.078125, 0.984375, 0.453125, 0.382812, 0.867188, 0.0, 0.546875, 0.898438, -0.453125, 0.382812, 0.867188, 0.0, 0.078125, 0.984375, 0.0, 0.851562, 0.5625, 0.0, 0.546875, 0.898438, 0.460938, 0.703125, 0.4375, 0.0, 0.851562, 0.5625, -0.460938, 0.703125, 0.4375, 0.0, 0.546875, 0.898438, 0.632812, -0.28125, 0.453125, 0.679688, -0.492188, 0.453125, 0.726562, -0.335938, 0.40625, -0.632812, -0.28125, 0.453125, -0.726562, -0.335938, 0.40625, -0.679688, -0.492188, 0.453125, 0.640625, -0.054688, 0.703125, 0.632812, -0.28125, 0.453125, 0.796875, -0.125, 0.5625, -0.640625, -0.054688, 0.703125, -0.796875, -0.125, 0.5625, -0.632812, -0.28125, 0.453125, 0.640625, 0.195312, 0.75, 0.640625, -0.054688, 0.703125, 0.796875, 0.117188, 0.617188, -0.640625, 0.195312, 0.75, -0.796875, 0.117188, 0.617188, -0.640625, -0.054688, 0.703125, 0.640625, 0.445312, 0.679688, 0.640625, 0.195312, 0.75, 0.796875, 0.359375, 0.539062, -0.640625, 0.445312, 0.679688, -0.796875, 0.359375, 0.539062, -0.640625, 0.195312, 0.75, 0.773438, 0.4375, 0.265625, 0.617188, 0.585938, 0.328125, 0.796875, 0.359375, 0.539062, -0.640625, 0.445312, 0.679688, -0.617188, 0.585938, 0.328125, -0.796875, 0.359375, 0.539062, 0.617188, 0.585938, 0.328125, 0.460938, 0.703125, 0.4375, 0.640625, 0.445312, 0.679688, -0.617188, 0.585938, 0.328125, -0.640625, 0.445312, 0.679688, -0.460938, 0.703125, 0.4375, 0.640625, 0.445312, 0.679688, 0.453125, 0.382812, 0.867188, 0.640625, 0.195312, 0.75, -0.640625, 0.445312, 0.679688, -0.640625, 0.195312, 0.75, -0.453125, 0.382812, 0.867188, 0.640625, 0.195312, 0.75, 0.453125, 0.070312, 0.929688, 0.640625, -0.054688, 0.703125, -0.640625, 0.195312, 0.75, -0.640625, -0.054688, 0.703125, -0.453125, 0.070312, 0.929688, 0.640625, -0.054688, 0.703125, 0.453125, -0.234375, 0.851562, 0.632812, -0.28125, 0.453125, -0.640625, -0.054688, 0.703125, -0.632812, -0.28125, 0.453125, -0.453125, -0.234375, 0.851562, 0.484375, -0.554688, 0.554688, 0.679688, -0.492188, 0.453125, 0.460938, -0.429688, 0.523438, -0.632812, -0.28125, 0.453125, -0.679688, -0.492188, 0.453125, -0.460938, -0.429688, 0.523438, 0.0, -0.570312, 0.570312, 0.460938, -0.429688, 0.523438, 0.0, -0.289062, 0.898438, -0.453125, -0.234375, 0.851562, -0.460938, -0.429688, 0.523438, 0.0, -0.289062, 0.898438, 0.109375, -0.609375, 0.460938, 0.195312, -0.617188, 0.664062, 0.484375, -0.554688, 0.554688, -0.335938, -0.59375, 0.6875, -0.195312, -0.617188, 0.664062, -0.484375, -0.554688, 0.554688, 0.0, -0.570312, 0.570312, 0.109375, -0.609375, 0.460938, 0.460938, -0.429688, 0.523438, 0.0, -0.570312, 0.570312, -0.460938, -0.429688, 0.523438, -0.109375, -0.609375, 0.460938, 0.796875, -0.460938, 0.40625, 0.773438, -0.375, 0.164062, 0.726562, -0.335938, 0.40625, -0.851562, -0.054688, 0.234375, -0.773438, -0.375, 0.164062, -0.726562, -0.335938, 0.40625, 0.726562, -0.335938, 0.40625, 0.851562, -0.054688, 0.234375, 0.796875, -0.125, 0.5625, -0.726562, -0.335938, 0.40625, -0.796875, -0.125, 0.5625, -0.851562, -0.054688, 0.234375, 0.796875, -0.125, 0.5625, 0.859375, 0.046875, 0.320312, 0.796875, 0.117188, 0.617188, -0.796875, -0.125, 0.5625, -0.796875, 0.117188, 0.617188, -0.859375, 0.046875, 0.320312, 0.773438, 0.4375, 0.265625, 0.796875, 0.359375, 0.539062, 0.820312, 0.203125, 0.328125, -0.796875, 0.117188, 0.617188, -0.796875, 0.359375, 0.539062, -0.820312, 0.203125, 0.328125, 0.210938, -0.164062, -0.390625, 0.296875, 0.265625, -0.3125, 0.40625, -0.148438, -0.171875, -0.429688, 0.210938, -0.195312, -0.296875, 0.265625, -0.3125, -0.40625, -0.148438, -0.171875, 0.734375, -0.070312, -0.046875, 0.40625, -0.148438, -0.171875, 0.59375, 0.164062, -0.125, -0.429688, 0.210938, -0.195312, -0.40625, -0.148438, -0.171875, -0.59375, 0.164062, -0.125, 0.734375, -0.070312, -0.046875, 0.601562, -0.414062, 0.0, 0.40625, -0.148438, -0.171875, -0.734375, -0.070312, -0.046875, -0.40625, -0.148438, -0.171875, -0.601562, -0.414062, 0.0, 0.40625, -0.148438, -0.171875, 0.4375, -0.46875, -0.09375, 0.21875, -0.429688, -0.28125, -0.40625, -0.148438, -0.171875, -0.21875, -0.429688, -0.28125, -0.4375, -0.46875, -0.09375, 0.773438, 0.4375, 0.265625, 0.640625, 0.429688, -0.007812, 0.617188, 0.585938, 0.328125, -0.484375, 0.546875, 0.023438, -0.640625, 0.429688, -0.007812, -0.617188, 0.585938, 0.328125, 0.460938, 0.703125, 0.4375, 0.617188, 0.585938, 0.328125, 0.335938, 0.664062, 0.054688, -0.484375, 0.546875, 0.023438, -0.617188, 0.585938, 0.328125, -0.335938, 0.664062, 0.054688, 0.59375, 0.164062, -0.125, 0.429688, 0.210938, -0.195312, 0.640625, 0.429688, -0.007812, -0.484375, 0.546875, 0.023438, -0.429688, 0.210938, -0.195312, -0.640625, 0.429688, -0.007812, 0.296875, 0.265625, -0.3125, 0.34375, 0.539062, -0.148438, 0.429688, 0.210938, -0.195312, -0.484375, 0.546875, 0.023438, -0.34375, 0.539062, -0.148438, -0.429688, 0.210938, -0.195312, 1.023438, 0.3125, 0.476562, 0.890625, 0.234375, 0.40625, 1.015625, 0.289062, 0.414062, -0.921875, 0.21875, 0.359375, -0.890625, 0.234375, 0.40625, -1.015625, 0.289062, 0.414062, 1.234375, 0.421875, 0.507812, 1.023438, 0.3125, 0.476562, 1.1875, 0.390625, 0.4375, -1.234375, 0.421875, 0.507812, -1.1875, 0.390625, 0.4375, -1.023438, 0.3125, 0.476562, 1.234375, 0.421875, 0.507812, 1.1875, 0.390625, 0.4375, 1.351562, 0.421875, 0.320312, -1.265625, 0.40625, 0.289062, -1.1875, 0.390625, 0.4375, -1.351562, 0.421875, 0.320312, 1.351562, 0.421875, 0.320312, 1.265625, 0.40625, 0.289062, 1.28125, 0.429688, 0.054688, -1.210938, 0.40625, 0.078125, -1.265625, 0.40625, 0.289062, -1.28125, 0.429688, 0.054688, 1.28125, 0.429688, 0.054688, 1.210938, 0.40625, 0.078125, 1.039062, 0.328125, -0.101562, -1.03125, 0.304688, -0.039062, -1.210938, 0.40625, 0.078125, -1.039062, 0.328125, -0.101562, 0.773438, 0.125, -0.140625, 1.039062, 0.328125, -0.101562, 0.828125, 0.132812, -0.070312, -0.773438, 0.125, -0.140625, -0.828125, 0.132812, -0.070312, -1.039062, 0.328125, -0.101562, 0.828125, 0.132812, -0.070312, 1.03125, 0.304688, -0.039062, 0.882812, 0.210938, -0.023438, -0.828125, 0.132812, -0.070312, -0.882812, 0.210938, -0.023438, -1.03125, 0.304688, -0.039062, 1.03125, 0.304688, -0.039062, 1.210938, 0.40625, 0.078125, 1.039062, 0.367188, 0.0, -1.03125, 0.304688, -0.039062, -1.039062, 0.367188, 0.0, -1.210938, 0.40625, 0.078125, 1.265625, 0.40625, 0.289062, 1.234375, 0.445312, 0.25, 1.210938, 0.40625, 0.078125, -1.1875, 0.445312, 0.09375, -1.234375, 0.445312, 0.25, -1.210938, 0.40625, 0.078125, 1.1875, 0.390625, 0.4375, 1.171875, 0.4375, 0.359375, 1.265625, 0.40625, 0.289062, -1.234375, 0.445312, 0.25, -1.171875, 0.4375, 0.359375, -1.265625, 0.40625, 0.289062, 1.015625, 0.289062, 0.414062, 1.023438, 0.359375, 0.34375, 1.1875, 0.390625, 0.4375, -1.171875, 0.4375, 0.359375, -1.023438, 0.359375, 0.34375, -1.1875, 0.390625, 0.4375, 1.023438, 0.359375, 0.34375, 1.015625, 0.289062, 0.414062, 0.945312, 0.289062, 0.304688, -1.023438, 0.359375, 0.34375, -0.945312, 0.289062, 0.304688, -1.015625, 0.289062, 0.414062, 0.734375, -0.070312, -0.046875, 0.59375, 0.164062, -0.125, 0.726562, 0.070312, 0.0, -0.71875, 0.171875, -0.023438, -0.59375, 0.164062, -0.125, -0.726562, 0.070312, 0.0, 0.59375, 0.164062, -0.125, 0.773438, 0.125, -0.140625, 0.71875, 0.171875, -0.023438, -0.828125, 0.132812, -0.070312, -0.773438, 0.125, -0.140625, -0.71875, 0.171875, -0.023438, 0.859375, 0.046875, 0.320312, 0.851562, -0.054688, 0.234375, 0.726562, 0.070312, 0.0, -0.859375, 0.046875, 0.320312, -0.726562, 0.070312, 0.0, -0.851562, -0.054688, 0.234375, 0.890625, 0.234375, 0.40625, 0.820312, 0.203125, 0.328125, 0.921875, 0.21875, 0.359375, -0.890625, 0.234375, 0.40625, -0.921875, 0.21875, 0.359375, -0.820312, 0.203125, 0.328125, 0.71875, 0.171875, -0.023438, 0.828125, 0.132812, -0.070312, 0.8125, 0.273438, -0.015625, -0.71875, 0.171875, -0.023438, -0.8125, 0.273438, -0.015625, -0.828125, 0.132812, -0.070312, 0.84375, 0.273438, 0.015625, 0.71875, 0.1875, 0.039062, 0.8125, 0.273438, -0.015625, -0.71875, 0.171875, -0.023438, -0.71875, 0.1875, 0.039062, -0.8125, 0.273438, -0.015625, 0.820312, 0.273438, 0.085938, 0.757812, 0.273438, 0.09375, 0.84375, 0.273438, 0.015625, -0.820312, 0.273438, 0.085938, -0.84375, 0.273438, 0.015625, -0.757812, 0.273438, 0.09375, 0.835938, 0.273438, 0.171875, 0.796875, 0.210938, 0.203125, 0.757812, 0.273438, 0.09375, -0.71875, 0.1875, 0.039062, -0.796875, 0.210938, 0.203125, -0.757812, 0.273438, 0.09375, 0.84375, 0.210938, 0.289062, 0.796875, 0.210938, 0.203125, 0.890625, 0.265625, 0.242188, -0.835938, 0.273438, 0.171875, -0.796875, 0.210938, 0.203125, -0.890625, 0.265625, 0.242188, 0.921875, 0.21875, 0.359375, 0.84375, 0.210938, 0.289062, 0.945312, 0.289062, 0.304688, -0.890625, 0.265625, 0.242188, -0.84375, 0.210938, 0.289062, -0.945312, 0.289062, 0.304688, 0.859375, 0.046875, 0.320312, 0.796875, 0.210938, 0.203125, 0.820312, 0.203125, 0.328125, -0.84375, 0.210938, 0.289062, -0.796875, 0.210938, 0.203125, -0.820312, 0.203125, 0.328125, 0.859375, 0.046875, 0.320312, 0.726562, 0.070312, 0.0, 0.796875, 0.210938, 0.203125, -0.71875, 0.1875, 0.039062, -0.726562, 0.070312, 0.0, -0.796875, 0.210938, 0.203125, 0.953125, 0.34375, 0.289062, 0.945312, 0.289062, 0.304688, 0.890625, 0.320312, 0.234375, -0.953125, 0.34375, 0.289062, -0.890625, 0.320312, 0.234375, -0.945312, 0.289062, 0.304688, 0.890625, 0.265625, 0.242188, 0.835938, 0.273438, 0.171875, 0.890625, 0.320312, 0.234375, -0.84375, 0.320312, 0.171875, -0.835938, 0.273438, 0.171875, -0.890625, 0.320312, 0.234375, 0.84375, 0.320312, 0.171875, 0.835938, 0.273438, 0.171875, 0.765625, 0.320312, 0.09375, -0.84375, 0.320312, 0.171875, -0.765625, 0.320312, 0.09375, -0.835938, 0.273438, 0.171875, 0.757812, 0.273438, 0.09375, 0.820312, 0.273438, 0.085938, 0.765625, 0.320312, 0.09375, -0.828125, 0.320312, 0.078125, -0.820312, 0.273438, 0.085938, -0.765625, 0.320312, 0.09375, 0.820312, 0.273438, 0.085938, 0.84375, 0.273438, 0.015625, 0.828125, 0.320312, 0.078125, -0.851562, 0.320312, 0.015625, -0.84375, 0.273438, 0.015625, -0.828125, 0.320312, 0.078125, 0.851562, 0.320312, 0.015625, 0.84375, 0.273438, 0.015625, 0.8125, 0.320312, -0.015625, -0.851562, 0.320312, 0.015625, -0.8125, 0.320312, -0.015625, -0.84375, 0.273438, 0.015625, 0.8125, 0.320312, -0.015625, 0.8125, 0.273438, -0.015625, 0.882812, 0.265625, -0.015625, -0.8125, 0.320312, -0.015625, -0.882812, 0.265625, -0.015625, -0.8125, 0.273438, -0.015625, 1.039062, 0.414062, 0.328125, 1.023438, 0.359375, 0.34375, 0.953125, 0.34375, 0.289062, -1.039062, 0.414062, 0.328125, -0.953125, 0.34375, 0.289062, -1.023438, 0.359375, 0.34375, 1.1875, 0.484375, 0.34375, 1.171875, 0.4375, 0.359375, 1.039062, 0.414062, 0.328125, -1.1875, 0.484375, 0.34375, -1.039062, 0.414062, 0.328125, -1.171875, 0.4375, 0.359375, 1.257812, 0.492188, 0.242188, 1.234375, 0.445312, 0.25, 1.1875, 0.484375, 0.34375, -1.257812, 0.492188, 0.242188, -1.1875, 0.484375, 0.34375, -1.234375, 0.445312, 0.25, 1.1875, 0.445312, 0.09375, 1.234375, 0.445312, 0.25, 1.210938, 0.484375, 0.085938, -1.257812, 0.492188, 0.242188, -1.234375, 0.445312, 0.25, -1.210938, 0.484375, 0.085938, 1.039062, 0.367188, 0.0, 1.1875, 0.445312, 0.09375, 1.046875, 0.421875, 0.0, -1.210938, 0.484375, 0.085938, -1.1875, 0.445312, 0.09375, -1.046875, 0.421875, 0.0, 0.882812, 0.210938, -0.023438, 1.039062, 0.367188, 0.0, 0.882812, 0.265625, -0.015625, -1.046875, 0.421875, 0.0, -1.039062, 0.367188, 0.0, -0.882812, 0.265625, -0.015625, 0.828125, 0.320312, 0.078125, 0.851562, 0.320312, 0.015625, 0.890625, 0.328125, 0.109375, -0.9375, 0.335938, 0.0625, -0.851562, 0.320312, 0.015625, -0.890625, 0.328125, 0.109375, 0.890625, 0.328125, 0.109375, 0.9375, 0.335938, 0.0625, 0.960938, 0.351562, 0.171875, -1.0, 0.367188, 0.125, -0.9375, 0.335938, 0.0625, -0.960938, 0.351562, 0.171875, 1.015625, 0.375, 0.234375, 0.960938, 0.351562, 0.171875, 1.054688, 0.382812, 0.1875, -1.015625, 0.375, 0.234375, -1.054688, 0.382812, 0.1875, -0.960938, 0.351562, 0.171875, 1.015625, 0.375, 0.234375, 1.054688, 0.382812, 0.1875, 1.085938, 0.390625, 0.273438, -1.109375, 0.390625, 0.210938, -1.054688, 0.382812, 0.1875, -1.085938, 0.390625, 0.273438, 1.085938, 0.390625, 0.273438, 1.039062, 0.414062, 0.328125, 1.015625, 0.375, 0.234375, -1.085938, 0.390625, 0.273438, -1.015625, 0.375, 0.234375, -1.039062, 0.414062, 0.328125, 0.890625, 0.320312, 0.234375, 0.960938, 0.351562, 0.171875, 0.953125, 0.34375, 0.289062, -1.015625, 0.375, 0.234375, -0.960938, 0.351562, 0.171875, -0.953125, 0.34375, 0.289062, 0.890625, 0.320312, 0.234375, 0.84375, 0.320312, 0.171875, 0.960938, 0.351562, 0.171875, -0.890625, 0.328125, 0.109375, -0.84375, 0.320312, 0.171875, -0.960938, 0.351562, 0.171875, 0.765625, 0.320312, 0.09375, 0.828125, 0.320312, 0.078125, 0.84375, 0.320312, 0.171875, -0.765625, 0.320312, 0.09375, -0.84375, 0.320312, 0.171875, -0.828125, 0.320312, 0.078125, 0.8125, 0.320312, -0.015625, 0.882812, 0.265625, -0.015625, 0.851562, 0.320312, 0.015625, -0.9375, 0.335938, 0.0625, -0.882812, 0.265625, -0.015625, -0.851562, 0.320312, 0.015625, 0.882812, 0.265625, -0.015625, 1.046875, 0.421875, 0.0, 0.9375, 0.335938, 0.0625, -0.882812, 0.265625, -0.015625, -0.9375, 0.335938, 0.0625, -1.046875, 0.421875, 0.0, 1.210938, 0.484375, 0.085938, 1.054688, 0.382812, 0.1875, 1.046875, 0.421875, 0.0, -1.0, 0.367188, 0.125, -1.054688, 0.382812, 0.1875, -1.046875, 0.421875, 0.0, 1.257812, 0.492188, 0.242188, 1.109375, 0.390625, 0.210938, 1.210938, 0.484375, 0.085938, -1.054688, 0.382812, 0.1875, -1.109375, 0.390625, 0.210938, -1.210938, 0.484375, 0.085938, 1.257812, 0.492188, 0.242188, 1.1875, 0.484375, 0.34375, 1.109375, 0.390625, 0.210938, -1.257812, 0.492188, 0.242188, -1.109375, 0.390625, 0.210938, -1.1875, 0.484375, 0.34375, 1.039062, 0.492188, -0.085938, 1.039062, 0.328125, -0.101562, 0.789062, 0.328125, -0.125, -1.039062, 0.492188, -0.085938, -0.789062, 0.328125, -0.125, -1.039062, 0.328125, -0.101562, 1.3125, 0.53125, 0.054688, 1.28125, 0.429688, 0.054688, 1.039062, 0.492188, -0.085938, -1.3125, 0.53125, 0.054688, -1.039062, 0.492188, -0.085938, -1.28125, 0.429688, 0.054688, 1.351562, 0.421875, 0.320312, 1.28125, 0.429688, 0.054688, 1.367188, 0.5, 0.296875, -1.3125, 0.53125, 0.054688, -1.28125, 0.429688, 0.054688, -1.367188, 0.5, 0.296875, 1.234375, 0.421875, 0.507812, 1.351562, 0.421875, 0.320312, 1.25, 0.546875, 0.46875, -1.367188, 0.5, 0.296875, -1.351562, 0.421875, 0.320312, -1.25, 0.546875, 0.46875, 1.023438, 0.3125, 0.476562, 1.234375, 0.421875, 0.507812, 1.023438, 0.484375, 0.4375, -1.25, 0.546875, 0.46875, -1.234375, 0.421875, 0.507812, -1.023438, 0.484375, 0.4375, 0.890625, 0.234375, 0.40625, 1.023438, 0.3125, 0.476562, 0.859375, 0.382812, 0.382812, -1.023438, 0.484375, 0.4375, -1.023438, 0.3125, 0.476562, -0.859375, 0.382812, 0.382812, 1.023438, 0.484375, 0.4375, 1.039062, 0.492188, -0.085938, 0.859375, 0.382812, 0.382812, -0.789062, 0.328125, -0.125, -1.039062, 0.492188, -0.085938, -0.859375, 0.382812, 0.382812, 1.039062, 0.492188, -0.085938, 1.023438, 0.484375, 0.4375, 1.3125, 0.53125, 0.054688, -1.039062, 0.492188, -0.085938, -1.3125, 0.53125, 0.054688, -1.023438, 0.484375, 0.4375, 0.773438, 0.4375, 0.265625, 0.820312, 0.203125, 0.328125, 0.859375, 0.382812, 0.382812, -0.890625, 0.234375, 0.40625, -0.820312, 0.203125, 0.328125, -0.859375, 0.382812, 0.382812, 0.640625, 0.429688, -0.007812, 0.773438, 0.4375, 0.265625, 0.789062, 0.328125, -0.125, -0.640625, 0.429688, -0.007812, -0.789062, 0.328125, -0.125, -0.773438, 0.4375, 0.265625, 0.773438, 0.125, -0.140625, 0.59375, 0.164062, -0.125, 0.789062, 0.328125, -0.125, -0.773438, 0.125, -0.140625, -0.789062, 0.328125, -0.125, -0.59375, 0.164062, -0.125],

    "normals": [0.969298, -0.245552, -0.011811, 0.728996, -0.193426, -0.656575, 0.607624, -0.608478, -0.510392, -0.607624, -0.608478, -0.510392, -0.728996, -0.193426, -0.656575, -0.969298, -0.245552, -0.011811, 0.800104, -0.599841, -0.002838, 0.607624, -0.608478, -0.510392, 0.680166, -0.488815, -0.546251, -0.680166, -0.488815, -0.546251, -0.607624, -0.608478, -0.510392, -0.800104, -0.599841, -0.002838, 0.607624, -0.608478, -0.510392, 0.09949, -0.652211, -0.751457, 0.119327, -0.476272, -0.871151, -0.119327, -0.476272, -0.871151, -0.09949, -0.652211, -0.751457, -0.607624, -0.608478, -0.510392, 0.728996, -0.193426, -0.656575, 0.031404, -0.252907, -0.966948, 0.09949, -0.652211, -0.751457, -0.09949, -0.652211, -0.751457, -0.031404, -0.252907, -0.966948, -0.728996, -0.193426, -0.656575, 0.031404, -0.252907, -0.966948, -0.653066, -0.319315, -0.686636, -0.456282, -0.710746, -0.535356, 0.456282, -0.710746, -0.535356, 0.653066, -0.319315, -0.686636, -0.031404, -0.252907, -0.966948, 0.09949, -0.652211, -0.751457, -0.456282, -0.710746, -0.535356, -0.55385, -0.540635, -0.633198, 0.55385, -0.540635, -0.633198, 0.456282, -0.710746, -0.535356, -0.09949, -0.652211, -0.751457, -0.689291, -0.724418, -0.004578, -0.809717, -0.586749, -0.006989, -0.55385, -0.540635, -0.633198, 0.689291, -0.724418, -0.004578, 0.456282, -0.710746, -0.535356, 0.55385, -0.540635, -0.633198, -0.952574, -0.303995, -0.013123, -0.689291, -0.724418, -0.004578, -0.456282, -0.710746, -0.535356, 0.952574, -0.303995, -0.013123, 0.653066, -0.319315, -0.686636, 0.456282, -0.710746, -0.535356, -0.952574, -0.303995, -0.013123, -0.664357, -0.305582, 0.682058, -0.455947, -0.720664, 0.522202, 0.455947, -0.720664, 0.522202, 0.664357, -0.305582, 0.682058, 0.952574, -0.303995, -0.013123, -0.455947, -0.720664, 0.522202, -0.530595, -0.571703, 0.625751, -0.809717, -0.586749, -0.006989, 0.455947, -0.720664, 0.522202, 0.689291, -0.724418, -0.004578, 0.809717, -0.586749, -0.006989, 0.103061, -0.664388, 0.740196, 0.125736, -0.525254, 0.841578, -0.530595, -0.571703, 0.625751, -0.103061, -0.664388, 0.740196, 0.455947, -0.720664, 0.522202, 0.530595, -0.571703, 0.625751, 0.025727, -0.231147, 0.972564, 0.103061, -0.664388, 0.740196, -0.455947, -0.720664, 0.522202, -0.025727, -0.231147, 0.972564, 0.664357, -0.305582, 0.682058, 0.455947, -0.720664, 0.522202, 0.736381, -0.180273, 0.652089, 0.610218, -0.618061, 0.49559, 0.103061, -0.664388, 0.740196, -0.736381, -0.180273, 0.652089, -0.025727, -0.231147, 0.972564, -0.103061, -0.664388, 0.740196, 0.610218, -0.618061, 0.49559, 0.668203, -0.514786, 0.537095, 0.125736, -0.525254, 0.841578, -0.610218, -0.618061, 0.49559, -0.103061, -0.664388, 0.740196, -0.125736, -0.525254, 0.841578, 0.800104, -0.599841, -0.002838, 0.868221, -0.496109, -0.00473, 0.668203, -0.514786, 0.537095, -0.800104, -0.599841, -0.002838, -0.610218, -0.618061, 0.49559, -0.668203, -0.514786, 0.537095, 0.969298, -0.245552, -0.011811, 0.800104, -0.599841, -0.002838, 0.610218, -0.618061, 0.49559, -0.969298, -0.245552, -0.011811, -0.736381, -0.180273, 0.652089, -0.610218, -0.618061, 0.49559, 0.736381, -0.180273, 0.652089, 0.72161, -0.222388, 0.655568, 0.964446, -0.263863, -0.012665, -0.736381, -0.180273, 0.652089, -0.969298, -0.245552, -0.011811, -0.964446, -0.263863, -0.012665, 0.025727, -0.231147, 0.972564, 0.043153, -0.341441, 0.938902, 0.72161, -0.222388, 0.655568, -0.025727, -0.231147, 0.972564, -0.736381, -0.180273, 0.652089, -0.72161, -0.222388, 0.655568, -0.664357, -0.305582, 0.682058, -0.623676, -0.464675, 0.628529, 0.043153, -0.341441, 0.938902, 0.664357, -0.305582, 0.682058, -0.025727, -0.231147, 0.972564, -0.043153, -0.341441, 0.938902, -0.952574, -0.303995, -0.013123, -0.926969, -0.374859, -0.01294, -0.623676, -0.464675, 0.628529, 0.952574, -0.303995, -0.013123, 0.664357, -0.305582, 0.682058, 0.623676, -0.464675, 0.628529, -0.952574, -0.303995, -0.013123, -0.653066, -0.319315, -0.686636, -0.615864, -0.464095, -0.636616, 0.615864, -0.464095, -0.636616, 0.653066, -0.319315, -0.686636, 0.952574, -0.303995, -0.013123, -0.653066, -0.319315, -0.686636, 0.031404, -0.252907, -0.966948, 0.042543, -0.337474, -0.940336, -0.042543, -0.337474, -0.940336, -0.031404, -0.252907, -0.966948, 0.653066, -0.319315, -0.686636, 0.031404, -0.252907, -0.966948, 0.728996, -0.193426, -0.656575, 0.715171, -0.222724, -0.662465, -0.715171, -0.222724, -0.662465, -0.728996, -0.193426, -0.656575, -0.031404, -0.252907, -0.966948, 0.728996, -0.193426, -0.656575, 0.969298, -0.245552, -0.011811, 0.964446, -0.263863, -0.012665, -0.964446, -0.263863, -0.012665, -0.969298, -0.245552, -0.011811, -0.728996, -0.193426, -0.656575, 0.183599, -0.982971, -0.00531, 0.715171, -0.222724, -0.662465, 0.964446, -0.263863, -0.012665, -0.964446, -0.263863, -0.012665, -0.715171, -0.222724, -0.662465, -0.183599, -0.982971, -0.00531, 0.042543, -0.337474, -0.940336, 0.715171, -0.222724, -0.662465, 0.183599, -0.982971, -0.00531, -0.183599, -0.982971, -0.00531, -0.715171, -0.222724, -0.662465, -0.042543, -0.337474, -0.940336, 0.183599, -0.982971, -0.00531, -0.615864, -0.464095, -0.636616, 0.042543, -0.337474, -0.940336, -0.042543, -0.337474, -0.940336, 0.615864, -0.464095, -0.636616, -0.183599, -0.982971, -0.00531, 0.183599, -0.982971, -0.00531, -0.926969, -0.374859, -0.01294, -0.615864, -0.464095, -0.636616, 0.615864, -0.464095, -0.636616, 0.926969, -0.374859, -0.01294, -0.183599, -0.982971, -0.00531, 0.183599, -0.982971, -0.00531, -0.623676, -0.464675, 0.628529, -0.926969, -0.374859, -0.01294, 0.926969, -0.374859, -0.01294, 0.623676, -0.464675, 0.628529, -0.183599, -0.982971, -0.00531, 0.183599, -0.982971, -0.00531, 0.043153, -0.341441, 0.938902, -0.623676, -0.464675, 0.628529, 0.623676, -0.464675, 0.628529, -0.043153, -0.341441, 0.938902, -0.183599, -0.982971, -0.00531, 0.183599, -0.982971, -0.00531, 0.72161, -0.222388, 0.655568, 0.043153, -0.341441, 0.938902, -0.043153, -0.341441, 0.938902, -0.72161, -0.222388, 0.655568, -0.183599, -0.982971, -0.00531, 0.183599, -0.982971, -0.00531, 0.964446, -0.263863, -0.012665, 0.72161, -0.222388, 0.655568, -0.72161, -0.222388, 0.655568, -0.964446, -0.263863, -0.012665, -0.183599, -0.982971, -0.00531, 0.15537, -0.632282, -0.758965, 0.0, -0.63155, -0.775323, 0.0, -0.252266, -0.96765, -0.15537, -0.632282, -0.758965, -0.159551, -0.152898, -0.975249, 0.0, -0.252266, -0.96765, 0.35023, -0.684683, -0.639149, 0.15537, -0.632282, -0.758965, 0.159551, -0.152898, -0.975249, -0.35023, -0.684683, -0.639149, -0.526658, -0.161107, -0.834651, -0.159551, -0.152898, -0.975249, 0.945708, -0.197699, -0.257851, 0.55565, -0.799982, -0.226356, 0.35023, -0.684683, -0.639149, -0.35023, -0.684683, -0.639149, -0.55565, -0.799982, -0.226356, -0.945708, -0.197699, -0.257851, 0.972808, -0.208716, 0.100314, 0.565172, -0.824396, -0.029725, 0.55565, -0.799982, -0.226356, -0.55565, -0.799982, -0.226356, -0.565172, -0.824396, -0.029725, -0.972808, -0.208716, 0.100314, 0.955718, -0.156468, 0.249184, 0.593677, -0.797388, 0.108158, 0.565172, -0.824396, -0.029725, -0.565172, -0.824396, -0.029725, -0.593677, -0.797388, 0.108158, -0.955718, -0.156468, 0.249184, 0.891537, -0.309458, -0.330668, 0.348827, 0.008148, -0.937132, 0.344279, -0.763298, -0.546617, -0.344279, -0.763298, -0.546617, -0.348827, 0.008148, -0.937132, -0.891537, -0.309458, -0.330668, 0.587481, -0.196966, -0.784875, 0.49913, -0.780663, -0.376049, 0.344279, -0.763298, -0.546617, -0.587481, -0.196966, -0.784875, -0.348827, 0.008148, -0.937132, -0.344279, -0.763298, -0.546617, 0.587481, -0.196966, -0.784875, 0.90698, 0.128941, -0.400922, 0.566546, -0.759819, -0.318796, -0.566546, -0.759819, -0.318796, -0.90698, 0.128941, -0.400922, -0.587481, -0.196966, -0.784875, 0.845119, -0.298502, 0.443403, 0.460707, -0.875637, -0.14481, 0.566546, -0.759819, -0.318796, -0.845119, -0.298502, 0.443403, -0.90698, 0.128941, -0.400922, -0.566546, -0.759819, -0.318796, 0.517045, -0.212531, 0.829127, 0.480117, -0.857814, -0.183264, 0.460707, -0.875637, -0.14481, -0.517045, -0.212531, 0.829127, -0.845119, -0.298502, 0.443403, -0.460707, -0.875637, -0.14481, 0.597552, -0.164586, 0.784722, 0.308451, -0.951201, 0.003845, 0.480117, -0.857814, -0.183264, -0.597552, -0.164586, 0.784722, -0.517045, -0.212531, 0.829127, -0.480117, -0.857814, -0.183264, 0.597552, -0.164586, 0.784722, 0.231269, -0.175054, 0.956999, 0.266579, -0.939146, 0.21659, -0.266579, -0.939146, 0.21659, -0.231269, -0.175054, 0.956999, -0.597552, -0.164586, 0.784722, -0.60506, -0.209754, 0.768029, -0.157384, -0.973449, 0.166021, 0.266579, -0.939146, 0.21659, 0.60506, -0.209754, 0.768029, -0.231269, -0.175054, 0.956999, -0.266579, -0.939146, 0.21659, -0.824183, -0.147313, 0.54677, -0.061098, -0.997803, -0.025239, -0.157384, -0.973449, 0.166021, 0.824183, -0.147313, 0.54677, 0.60506, -0.209754, 0.768029, 0.157384, -0.973449, 0.166021, 0.0, -0.267281, 0.963591, 0.0, -0.996551, -0.082736, -0.061098, -0.997803, -0.025239, 0.0, -0.267281, 0.963591, 0.824183, -0.147313, 0.54677, 0.061098, -0.997803, -0.025239, 0.258156, -0.957762, -0.126499, -0.157384, -0.973449, 0.166021, -0.061098, -0.997803, -0.025239, -0.258156, -0.957762, -0.126499, -0.36784, -0.885556, -0.283608, 0.061098, -0.997803, -0.025239, 0.258156, -0.957762, -0.126499, 0.149022, -0.976714, -0.154149, 0.266579, -0.939146, 0.21659, -0.266579, -0.939146, 0.21659, -0.149022, -0.976714, -0.154149, -0.258156, -0.957762, -0.126499, 0.308451, -0.951201, 0.003845, 0.266579, -0.939146, 0.21659, 0.149022, -0.976714, -0.154149, -0.308451, -0.951201, 0.003845, -0.219001, -0.975005, 0.037141, -0.149022, -0.976714, -0.154149, 0.480117, -0.857814, -0.183264, 0.308451, -0.951201, 0.003845, 0.219001, -0.975005, 0.037141, -0.480117, -0.857814, -0.183264, -0.22541, -0.904996, -0.360759, -0.219001, -0.975005, 0.037141, 0.460707, -0.875637, -0.14481, 0.480117, -0.857814, -0.183264, 0.22541, -0.904996, -0.360759, -0.460707, -0.875637, -0.14481, -0.358806, -0.925748, -0.119175, -0.22541, -0.904996, -0.360759, 0.566546, -0.759819, -0.318796, 0.460707, -0.875637, -0.14481, 0.358806, -0.925748, -0.119175, -0.566546, -0.759819, -0.318796, -0.460219, -0.87228, -0.165105, -0.358806, -0.925748, -0.119175, 0.49913, -0.780663, -0.376049, 0.566546, -0.759819, -0.318796, 0.460219, -0.87228, -0.165105, -0.49913, -0.780663, -0.376049, -0.4279, -0.815577, -0.389508, -0.460219, -0.87228, -0.165105, 0.344279, -0.763298, -0.546617, 0.49913, -0.780663, -0.376049, 0.4279, -0.815577, -0.389508, -0.344279, -0.763298, -0.546617, -0.15894, -0.851924, -0.498917, -0.4279, -0.815577, -0.389508, -0.128178, -0.947752, -0.292001, 0.056093, -0.96292, -0.263863, 0.344279, -0.763298, -0.546617, -0.344279, -0.763298, -0.546617, -0.056093, -0.96292, -0.263863, 0.128178, -0.947752, -0.292001, -0.128178, -0.947752, -0.292001, -0.239296, -0.923032, -0.301187, 0.0, -0.997925, 0.064272, 0.0, -0.997925, 0.064272, 0.239296, -0.923032, -0.301187, 0.128178, -0.947752, -0.292001, -0.061098, -0.997803, -0.025239, 0.0, -0.996551, -0.082736, 0.031587, -0.983459, -0.178167, 0.061098, -0.997803, -0.025239, -0.36784, -0.885556, -0.283608, -0.031587, -0.983459, -0.178167, 0.031587, -0.983459, -0.178167, 0.0, -0.996551, -0.082736, 0.0, -0.975036, -0.221992, 0.0, -0.975036, -0.221992, 0.0, -0.996551, -0.082736, -0.031587, -0.983459, -0.178167, -0.239296, -0.923032, -0.301187, -0.200568, -0.970306, -0.134953, 0.0, -0.975036, -0.221992, 0.239296, -0.923032, -0.301187, 0.0, -0.997925, 0.064272, 0.0, -0.975036, -0.221992, -0.05887, -0.923734, -0.37843, 0.0, -0.938017, -0.346507, 0.0, -0.63155, -0.775323, 0.0, -0.63155, -0.775323, 0.0, -0.938017, -0.346507, 0.05887, -0.923734, -0.37843, 0.130711, -0.93881, -0.318644, -0.05887, -0.923734, -0.37843, 0.15537, -0.632282, -0.758965, -0.15537, -0.632282, -0.758965, 0.05887, -0.923734, -0.37843, -0.130711, -0.93881, -0.318644, 0.130711, -0.93881, -0.318644, 0.35023, -0.684683, -0.639149, 0.55565, -0.799982, -0.226356, -0.130711, -0.93881, -0.318644, -0.14594, -0.981933, -0.120182, -0.55565, -0.799982, -0.226356, 0.593677, -0.797388, 0.108158, 0.134098, -0.990936, 0.006256, 0.181524, -0.98233, -0.045198, -0.181524, -0.98233, -0.045198, -0.134098, -0.990936, 0.006256, -0.593677, -0.797388, 0.108158, 0.14594, -0.981933, -0.120182, 0.55565, -0.799982, -0.226356, 0.565172, -0.824396, -0.029725, -0.565172, -0.824396, -0.029725, -0.55565, -0.799982, -0.226356, -0.14594, -0.981933, -0.120182, 0.0, -0.879452, -0.475936, 0.0, -1.0, 0.0, 0.134098, -0.990936, 0.006256, 0.0, -0.879452, -0.475936, -0.500259, -0.751946, -0.429243, -0.134098, -0.990936, 0.006256, 0.134098, -0.990936, 0.006256, 0.0, -1.0, 0.0, 0.0, -0.99939, -0.034059, -0.134098, -0.990936, 0.006256, -0.181524, -0.98233, -0.045198, 0.0, -0.99939, -0.034059, 0.14594, -0.981933, -0.120182, 0.181524, -0.98233, -0.045198, 0.0, -0.99939, -0.034059, -0.14594, -0.981933, -0.120182, 0.0, -0.809595, -0.586963, 0.0, -0.99939, -0.034059, 0.932157, -0.334758, -0.137761, 0.926237, -0.288003, -0.243049, 0.583575, -0.423475, -0.692862, -0.583575, -0.423475, -0.692862, -0.926237, -0.288003, -0.243049, -0.932157, -0.334758, -0.137761, 0.618641, -0.12479, 0.775658, 0.926237, -0.288003, -0.243049, 0.932157, -0.334758, -0.137761, -0.618641, -0.12479, 0.775658, -0.501389, -0.801691, -0.325327, -0.932157, -0.334758, -0.137761, -0.240516, -0.203558, 0.949034, 0.618641, -0.12479, 0.775658, 0.501389, -0.801691, -0.325327, 0.240516, -0.203558, 0.949034, 0.0, -0.856227, 0.516556, -0.501389, -0.801691, -0.325327, 0.0, -0.559648, 0.8287, -0.240516, -0.203558, 0.949034, 0.0, -0.856227, 0.516556, 0.0, -0.559648, 0.8287, 0.0, -0.967711, -0.251991, 0.0, -0.856227, 0.516556, 0.500259, -0.751946, -0.429243, 0.583575, -0.423475, -0.692862, 0.0, -0.501053, -0.865383, -0.500259, -0.751946, -0.429243, 0.0, -0.879452, -0.475936, 0.0, -0.501053, -0.865383, 0.583575, -0.423475, -0.692862, 0.183294, -0.789026, -0.586352, 0.0, -0.876431, -0.481521, -0.583575, -0.423475, -0.692862, 0.0, -0.501053, -0.865383, 0.0, -0.876431, -0.481521, 0.0, -0.559648, 0.8287, 0.0, -0.987457, 0.157842, -0.185736, -0.781487, 0.595599, 0.185736, -0.781487, 0.595599, 0.0, -0.987457, 0.157842, 0.0, -0.559648, 0.8287, -0.240516, -0.203558, 0.949034, -0.185736, -0.781487, 0.595599, 0.361095, -0.804651, 0.471267, -0.361095, -0.804651, 0.471267, 0.185736, -0.781487, 0.595599, 0.240516, -0.203558, 0.949034, 0.361095, -0.804651, 0.471267, 0.448805, -0.83636, -0.314707, 0.926237, -0.288003, -0.243049, -0.361095, -0.804651, 0.471267, -0.618641, -0.12479, 0.775658, -0.926237, -0.288003, -0.243049, 0.926237, -0.288003, -0.243049, 0.448805, -0.83636, -0.314707, 0.183294, -0.789026, -0.586352, -0.183294, -0.789026, -0.586352, -0.448805, -0.83636, -0.314707, -0.926237, -0.288003, -0.243049, 0.448805, -0.83636, -0.314707, 0.361095, -0.804651, 0.471267, -0.185736, -0.781487, 0.595599, -0.448805, -0.83636, -0.314707, 0.0, -0.987457, 0.157842, 0.185736, -0.781487, 0.595599, 0.0, -0.987457, 0.157842, 0.0, -0.876431, -0.481521, 0.183294, -0.789026, -0.586352, -0.183294, -0.789026, -0.586352, 0.0, -0.876431, -0.481521, 0.0, -0.987457, 0.157842, 0.0, -0.856227, 0.516556, 0.501389, -0.801691, -0.325327, 0.056093, -0.96292, -0.263863, -0.056093, -0.96292, -0.263863, -0.501389, -0.801691, -0.325327, 0.0, -0.856227, 0.516556, 0.501389, -0.801691, -0.325327, 0.932157, -0.334758, -0.137761, 0.77514, -0.630573, 0.038667, -0.77514, -0.630573, 0.038667, -0.932157, -0.334758, -0.137761, -0.501389, -0.801691, -0.325327, 0.500259, -0.751946, -0.429243, 0.650655, -0.744652, 0.148747, 0.77514, -0.630573, 0.038667, -0.500259, -0.751946, -0.429243, -0.932157, -0.334758, -0.137761, -0.77514, -0.630573, 0.038667, 0.134098, -0.990936, 0.006256, 0.593677, -0.797388, 0.108158, 0.650655, -0.744652, 0.148747, -0.134098, -0.990936, 0.006256, -0.500259, -0.751946, -0.429243, -0.650655, -0.744652, 0.148747, 0.927763, -0.120884, 0.353008, 0.650655, -0.744652, 0.148747, 0.593677, -0.797388, 0.108158, -0.927763, -0.120884, 0.353008, -0.955718, -0.156468, 0.249184, -0.593677, -0.797388, 0.108158, 0.930601, -0.126347, 0.343516, 0.77514, -0.630573, 0.038667, 0.650655, -0.744652, 0.148747, -0.930601, -0.126347, 0.343516, -0.927763, -0.120884, 0.353008, -0.650655, -0.744652, 0.148747, 0.891537, -0.309458, -0.330668, 0.056093, -0.96292, -0.263863, 0.77514, -0.630573, 0.038667, -0.77514, -0.630573, 0.038667, -0.056093, -0.96292, -0.263863, -0.891537, -0.309458, -0.330668, 0.0, -0.809595, -0.586963, 0.0, -0.273232, -0.961943, -0.136845, -0.838588, -0.527268, 0.0, -0.809595, -0.586963, -0.14594, -0.981933, -0.120182, 0.136845, -0.838588, -0.527268, 0.130711, -0.93881, -0.318644, 0.14594, -0.981933, -0.120182, -0.136845, -0.838588, -0.527268, 0.136845, -0.838588, -0.527268, -0.14594, -0.981933, -0.120182, -0.130711, -0.93881, -0.318644, -0.05887, -0.923734, -0.37843, 0.130711, -0.93881, -0.318644, -0.635121, -0.771203, 0.042756, 0.635121, -0.771203, 0.042756, -0.130711, -0.93881, -0.318644, 0.05887, -0.923734, -0.37843, 0.0, -0.938017, -0.346507, -0.05887, -0.923734, -0.37843, -0.414106, -0.701621, 0.579821, 0.414106, -0.701621, 0.579821, 0.05887, -0.923734, -0.37843, 0.0, -0.938017, -0.346507, -0.414106, -0.701621, 0.579821, -0.295846, -0.828761, 0.47496, 0.0, -0.845851, 0.533403, 0.414106, -0.701621, 0.579821, 0.0, -0.82931, 0.558763, 0.0, -0.845851, 0.533403, -0.414106, -0.701621, 0.579821, -0.635121, -0.771203, 0.042756, -0.673757, -0.72985, 0.115452, 0.673757, -0.72985, 0.115452, 0.635121, -0.771203, 0.042756, 0.414106, -0.701621, 0.579821, -0.635121, -0.771203, 0.042756, -0.136845, -0.838588, -0.527268, -0.517655, -0.486007, -0.704123, 0.517655, -0.486007, -0.704123, 0.136845, -0.838588, -0.527268, 0.635121, -0.771203, 0.042756, 0.0, -0.273232, -0.961943, 0.0, -0.715171, -0.698935, -0.517655, -0.486007, -0.704123, 0.0, -0.273232, -0.961943, 0.136845, -0.838588, -0.527268, 0.517655, -0.486007, -0.704123, 0.0, -0.715171, -0.698935, 0.0, -0.845851, 0.533403, -0.295846, -0.828761, 0.47496, 0.295846, -0.828761, 0.47496, 0.0, -0.845851, 0.533403, 0.0, -0.715171, -0.698935, -0.517655, -0.486007, -0.704123, -0.295846, -0.828761, 0.47496, -0.673757, -0.72985, 0.115452, 0.673757, -0.72985, 0.115452, 0.295846, -0.828761, 0.47496, 0.517655, -0.486007, -0.704123, -0.200568, -0.970306, -0.134953, -0.239296, -0.923032, -0.301187, -0.010102, -0.997467, -0.069979, 0.010102, -0.997467, -0.069979, 0.239296, -0.923032, -0.301187, 0.200568, -0.970306, -0.134953, 0.031587, -0.983459, -0.178167, -0.200568, -0.970306, -0.134953, 0.158055, -0.983825, -0.084231, -0.158055, -0.983825, -0.084231, 0.200568, -0.970306, -0.134953, -0.031587, -0.983459, -0.178167, 0.031587, -0.983459, -0.178167, 0.293405, -0.95407, -0.060152, 0.182958, -0.977691, -0.102878, -0.031587, -0.983459, -0.178167, -0.36784, -0.885556, -0.283608, -0.182958, -0.977691, -0.102878, -0.128178, -0.947752, -0.292001, -0.031709, -0.975005, -0.219794, -0.010102, -0.997467, -0.069979, 0.128178, -0.947752, -0.292001, 0.239296, -0.923032, -0.301187, 0.010102, -0.997467, -0.069979, -0.128178, -0.947752, -0.292001, 0.15894, -0.851924, -0.498917, 0.184454, -0.964995, -0.186316, -0.184454, -0.964995, -0.186316, -0.15894, -0.851924, -0.498917, 0.128178, -0.947752, -0.292001, 0.15894, -0.851924, -0.498917, 0.4279, -0.815577, -0.389508, 0.29899, -0.953581, -0.035615, -0.29899, -0.953581, -0.035615, -0.4279, -0.815577, -0.389508, -0.15894, -0.851924, -0.498917, 0.4279, -0.815577, -0.389508, 0.460219, -0.87228, -0.165105, 0.29429, -0.950224, -0.102023, -0.29429, -0.950224, -0.102023, -0.460219, -0.87228, -0.165105, -0.4279, -0.815577, -0.389508, 0.460219, -0.87228, -0.165105, 0.358806, -0.925748, -0.119175, 0.177587, -0.982208, -0.060762, -0.177587, -0.982208, -0.060762, -0.358806, -0.925748, -0.119175, -0.460219, -0.87228, -0.165105, 0.22541, -0.904996, -0.360759, 0.294351, -0.955657, 0.004639, 0.177587, -0.982208, -0.060762, -0.22541, -0.904996, -0.360759, -0.358806, -0.925748, -0.119175, -0.177587, -0.982208, -0.060762, 0.219001, -0.975005, 0.037141, 0.088687, -0.987884, -0.127171, 0.294351, -0.955657, 0.004639, -0.219001, -0.975005, 0.037141, -0.22541, -0.904996, -0.360759, -0.294351, -0.955657, 0.004639, 0.219001, -0.975005, 0.037141, 0.149022, -0.976714, -0.154149, 0.203619, -0.973571, 0.103183, -0.203619, -0.973571, 0.103183, -0.149022, -0.976714, -0.154149, -0.219001, -0.975005, 0.037141, 0.149022, -0.976714, -0.154149, 0.258156, -0.957762, -0.126499, 0.131504, -0.989166, 0.064974, -0.131504, -0.989166, 0.064974, -0.258156, -0.957762, -0.126499, -0.149022, -0.976714, -0.154149, 0.258156, -0.957762, -0.126499, 0.36784, -0.885556, -0.283608, 0.182958, -0.977691, -0.102878, -0.182958, -0.977691, -0.102878, -0.36784, -0.885556, -0.283608, -0.258156, -0.957762, -0.126499, 0.131504, -0.989166, 0.064974, 0.182958, -0.977691, -0.102878, 0.463424, -0.793237, -0.39491, -0.463424, -0.793237, -0.39491, -0.182958, -0.977691, -0.102878, -0.131504, -0.989166, 0.064974, 0.203619, -0.973571, 0.103183, 0.131504, -0.989166, 0.064974, 0.174383, -0.947386, -0.268319, -0.174383, -0.947386, -0.268319, -0.131504, -0.989166, 0.064974, -0.203619, -0.973571, 0.103183, 0.203619, -0.973571, 0.103183, 0.113315, -0.942564, -0.314188, -0.274056, -0.4391, -0.855617, -0.203619, -0.973571, 0.103183, -0.088687, -0.987884, -0.127171, 0.274056, -0.4391, -0.855617, 0.088687, -0.987884, -0.127171, -0.274056, -0.4391, -0.855617, -0.142308, -0.800165, -0.582629, -0.088687, -0.987884, -0.127171, -0.294351, -0.955657, 0.004639, 0.142308, -0.800165, -0.582629, 0.177587, -0.982208, -0.060762, 0.294351, -0.955657, 0.004639, -0.142308, -0.800165, -0.582629, 0.142308, -0.800165, -0.582629, -0.294351, -0.955657, 0.004639, -0.177587, -0.982208, -0.060762, 0.177587, -0.982208, -0.060762, -0.422926, -0.899716, -0.107761, -0.192145, -0.962523, 0.191351, -0.177587, -0.982208, -0.060762, -0.29429, -0.950224, -0.102023, 0.192145, -0.962523, 0.191351, 0.29899, -0.953581, -0.035615, 0.29429, -0.950224, -0.102023, -0.192145, -0.962523, 0.191351, 0.192145, -0.962523, 0.191351, -0.29429, -0.950224, -0.102023, -0.29899, -0.953581, -0.035615, 0.29899, -0.953581, -0.035615, -0.165288, -0.775109, 0.60979, 0.143071, -0.816919, 0.558672, -0.29899, -0.953581, -0.035615, -0.184454, -0.964995, -0.186316, -0.143071, -0.816919, 0.558672, 0.184454, -0.964995, -0.186316, 0.143071, -0.816919, 0.558672, 0.432264, -0.687643, 0.5833, -0.184454, -0.964995, -0.186316, 0.031709, -0.975005, -0.219794, -0.432264, -0.687643, 0.5833, -0.010102, -0.997467, -0.069979, -0.031709, -0.975005, -0.219794, 0.432264, -0.687643, 0.5833, -0.432264, -0.687643, 0.5833, 0.031709, -0.975005, -0.219794, 0.010102, -0.997467, -0.069979, 0.182958, -0.977691, -0.102878, 0.293405, -0.95407, -0.060152, 0.789361, -0.579302, -0.203192, -0.789361, -0.579302, -0.203192, -0.293405, -0.95407, -0.060152, -0.182958, -0.977691, -0.102878, 0.293405, -0.95407, -0.060152, 0.158055, -0.983825, -0.084231, 0.80163, -0.597674, 0.010987, -0.80163, -0.597674, 0.010987, -0.158055, -0.983825, -0.084231, -0.293405, -0.95407, -0.060152, 0.158055, -0.983825, -0.084231, -0.010102, -0.997467, -0.069979, 0.68804, -0.661397, 0.298471, -0.68804, -0.661397, 0.298471, 0.010102, -0.997467, -0.069979, -0.158055, -0.983825, -0.084231, 0.0, -0.267281, 0.963591, -0.824183, -0.147313, 0.54677, -0.459304, -0.212592, 0.862453, 0.459304, -0.212592, 0.862453, 0.824183, -0.147313, 0.54677, 0.0, -0.267281, 0.963591, -0.824183, -0.147313, 0.54677, -0.60506, -0.209754, 0.768029, -0.476638, 0.716392, 0.509445, 0.476638, 0.716392, 0.509445, 0.60506, -0.209754, 0.768029, 0.824183, -0.147313, 0.54677, 0.231269, -0.175054, 0.956999, 0.119297, 0.753807, 0.646138, -0.476638, 0.716392, 0.509445, -0.231269, -0.175054, 0.956999, 0.60506, -0.209754, 0.768029, 0.476638, 0.716392, 0.509445, 0.597552, -0.164586, 0.784722, 0.226691, 0.428114, 0.874813, 0.119297, 0.753807, 0.646138, -0.597552, -0.164586, 0.784722, -0.231269, -0.175054, 0.956999, -0.119297, 0.753807, 0.646138, 0.517045, -0.212531, 0.829127, 0.345531, 0.219123, 0.912442, 0.226691, 0.428114, 0.874813, -0.517045, -0.212531, 0.829127, -0.597552, -0.164586, 0.784722, -0.226691, 0.428114, 0.874813, 0.517045, -0.212531, 0.829127, 0.845119, -0.298502, 0.443403, 0.6957, 0.421827, 0.581378, -0.6957, 0.421827, 0.581378, -0.845119, -0.298502, 0.443403, -0.517045, -0.212531, 0.829127, 0.90698, 0.128941, -0.400922, 0.930204, 0.202338, -0.306192, 0.6957, 0.421827, 0.581378, -0.90698, 0.128941, -0.400922, -0.845119, -0.298502, 0.443403, -0.6957, 0.421827, 0.581378, 0.90698, 0.128941, -0.400922, 0.587481, -0.196966, -0.784875, 0.544328, 0.053316, -0.837153, -0.544328, 0.053316, -0.837153, -0.587481, -0.196966, -0.784875, -0.90698, 0.128941, -0.400922, 0.587481, -0.196966, -0.784875, 0.348827, 0.008148, -0.937132, 0.471969, 0.176794, -0.863674, -0.471969, 0.176794, -0.863674, -0.348827, 0.008148, -0.937132, -0.587481, -0.196966, -0.784875, 0.0, 0.636708, -0.771081, 0.689322, 0.278603, -0.668691, 0.277078, 0.907804, -0.314737, 0.0, 0.636708, -0.771081, 0.0, 0.976959, -0.213294, -0.277078, 0.907804, -0.314737, 0.0, 0.976959, -0.213294, 0.277078, 0.907804, -0.314737, 0.151372, 0.976867, -0.150975, 0.0, 0.976959, -0.213294, 0.0, 0.954741, -0.297342, -0.151372, 0.976867, -0.150975, 0.0, 0.954741, -0.297342, 0.151372, 0.976867, -0.150975, 0.067476, 0.618122, -0.783166, 0.0, 0.954741, -0.297342, 0.0, 0.471603, -0.881802, -0.067476, 0.618122, -0.783166, 0.159551, -0.152898, -0.975249, 0.0, -0.252266, -0.96765, 0.0, 0.471603, -0.881802, 0.0, 0.471603, -0.881802, 0.0, -0.252266, -0.96765, -0.159551, -0.152898, -0.975249, 0.526658, -0.161107, -0.834651, 0.159551, -0.152898, -0.975249, 0.067476, 0.618122, -0.783166, -0.067476, 0.618122, -0.783166, -0.159551, -0.152898, -0.975249, -0.526658, -0.161107, -0.834651, 0.945708, -0.197699, -0.257851, 0.526658, -0.161107, -0.834651, 0.555071, 0.681967, -0.476211, -0.555071, 0.681967, -0.476211, -0.526658, -0.161107, -0.834651, -0.945708, -0.197699, -0.257851, 0.972808, -0.208716, 0.100314, 0.945708, -0.197699, -0.257851, 0.62038, 0.779809, 0.083468, -0.62038, 0.779809, 0.083468, -0.945708, -0.197699, -0.257851, -0.972808, -0.208716, 0.100314, 0.62038, 0.779809, 0.083468, 0.151372, 0.976867, -0.150975, 0.277078, 0.907804, -0.314737, -0.277078, 0.907804, -0.314737, -0.151372, 0.976867, -0.150975, -0.62038, 0.779809, 0.083468, 0.555071, 0.681967, -0.476211, 0.067476, 0.618122, -0.783166, 0.151372, 0.976867, -0.150975, -0.555071, 0.681967, -0.476211, -0.62038, 0.779809, 0.083468, -0.151372, 0.976867, -0.150975, 0.779839, 0.625843, -0.010498, 0.277078, 0.907804, -0.314737, 0.689322, 0.278603, -0.668691, -0.779839, 0.625843, -0.010498, -0.895657, 0.362407, 0.257729, -0.689322, 0.278603, -0.668691, 0.955718, -0.156468, 0.249184, 0.972808, -0.208716, 0.100314, 0.779839, 0.625843, -0.010498, -0.779839, 0.625843, -0.010498, -0.972808, -0.208716, 0.100314, -0.955718, -0.156468, 0.249184, 0.978698, -0.061495, -0.195837, 0.887173, -0.433607, -0.15772, 0.930601, -0.126347, 0.343516, -0.978698, -0.061495, -0.195837, -0.927763, -0.120884, 0.353008, -0.930601, -0.126347, 0.343516, 0.895657, 0.362407, 0.257729, 0.978698, -0.061495, -0.195837, 0.927763, -0.120884, 0.353008, -0.895657, 0.362407, 0.257729, -0.955718, -0.156468, 0.249184, -0.927763, -0.120884, 0.353008, 0.930601, -0.126347, 0.343516, 0.887173, -0.433607, -0.15772, 0.785699, -0.236732, -0.571459, -0.930601, -0.126347, 0.343516, -0.891537, -0.309458, -0.330668, -0.785699, -0.236732, -0.571459, 0.785699, -0.236732, -0.571459, 0.471969, 0.176794, -0.863674, 0.348827, 0.008148, -0.937132, -0.785699, -0.236732, -0.571459, -0.891537, -0.309458, -0.330668, -0.348827, 0.008148, -0.937132, 0.445479, 0.820399, -0.358348, 0.522263, 0.547685, -0.653615, 0.0, 0.722587, -0.691275, -0.445479, 0.820399, -0.358348, 0.0, 0.952361, -0.304941, 0.0, 0.722587, -0.691275, 0.522263, 0.547685, -0.653615, 0.507065, 0.203314, -0.837581, 0.0, 0.336528, -0.941649, -0.522263, 0.547685, -0.653615, 0.0, 0.722587, -0.691275, 0.0, 0.336528, -0.941649, 0.0, 0.336528, -0.941649, 0.507065, 0.203314, -0.837581, 0.57268, -0.011994, -0.819666, -0.57268, -0.011994, -0.819666, -0.507065, 0.203314, -0.837581, 0.0, 0.336528, -0.941649, 0.0, 0.183294, -0.983032, 0.57268, -0.011994, -0.819666, 0.689322, 0.278603, -0.668691, -0.689322, 0.278603, -0.668691, -0.57268, -0.011994, -0.819666, 0.0, 0.183294, -0.983032, 0.689322, 0.278603, -0.668691, 0.57268, -0.011994, -0.819666, 0.978698, -0.061495, -0.195837, -0.689322, 0.278603, -0.668691, -0.895657, 0.362407, 0.257729, -0.978698, -0.061495, -0.195837, 0.930204, 0.202338, -0.306192, 0.544328, 0.053316, -0.837153, 0.72103, -0.065065, -0.68981, -0.72103, -0.065065, -0.68981, -0.544328, 0.053316, -0.837153, -0.930204, 0.202338, -0.306192, 0.473006, 0.863216, 0.176305, 0.445479, 0.820399, -0.358348, 0.0, 0.952361, -0.304941, -0.473006, 0.863216, 0.176305, 0.0, 0.930967, 0.365032, 0.0, 0.952361, -0.304941, 0.444227, -0.527085, 0.724418, 0.413495, -0.03946, 0.909635, 0.0, -0.022584, 0.999725, -0.444227, -0.527085, 0.724418, 0.0, -0.55681, 0.830622, 0.0, -0.022584, 0.999725, 0.0, -0.022584, 0.999725, 0.413495, -0.03946, 0.909635, 0.391247, 0.426832, 0.815271, -0.391247, 0.426832, 0.815271, -0.413495, -0.03946, 0.909635, 0.0, -0.022584, 0.999725, 0.0, 0.551378, 0.834223, 0.391247, 0.426832, 0.815271, 0.473006, 0.863216, 0.176305, -0.473006, 0.863216, 0.176305, -0.391247, 0.426832, 0.815271, 0.0, 0.551378, 0.834223, 0.345531, 0.219123, 0.912442, 0.6957, 0.421827, 0.581378, 0.771722, -0.078494, 0.631062, -0.771722, -0.078494, 0.631062, -0.6957, 0.421827, 0.581378, -0.345531, 0.219123, 0.912442, 0.444411, -0.425031, 0.788537, 0.771722, -0.078494, 0.631062, 0.741752, -0.427839, 0.516434, -0.741752, -0.427839, 0.516434, -0.771722, -0.078494, 0.631062, -0.444411, -0.425031, 0.788537, 0.668172, -0.319498, 0.671865, 0.741752, -0.427839, 0.516434, 0.848628, 0.014008, 0.528764, -0.848628, 0.014008, 0.528764, -0.741752, -0.427839, 0.516434, -0.668172, -0.319498, 0.671865, 0.678396, 0.069521, 0.731376, 0.848628, 0.014008, 0.528764, 0.872158, 0.374645, 0.314554, -0.872158, 0.374645, 0.314554, -0.848628, 0.014008, 0.528764, -0.678396, 0.069521, 0.731376, 0.619648, 0.782525, -0.060457, 0.607532, 0.553575, 0.569567, 0.872158, 0.374645, 0.314554, -0.619648, 0.782525, -0.060457, -0.670766, 0.740257, -0.045289, -0.872158, 0.374645, 0.314554, 0.473006, 0.863216, 0.176305, 0.391247, 0.426832, 0.815271, 0.607532, 0.553575, 0.569567, -0.607532, 0.553575, 0.569567, -0.391247, 0.426832, 0.815271, -0.473006, 0.863216, 0.176305, 0.391247, 0.426832, 0.815271, 0.413495, -0.03946, 0.909635, 0.678396, 0.069521, 0.731376, -0.678396, 0.069521, 0.731376, -0.413495, -0.03946, 0.909635, -0.391247, 0.426832, 0.815271, 0.413495, -0.03946, 0.909635, 0.444227, -0.527085, 0.724418, 0.668172, -0.319498, 0.671865, -0.668172, -0.319498, 0.671865, -0.444227, -0.527085, 0.724418, -0.413495, -0.03946, 0.909635, 0.444227, -0.527085, 0.724418, 0.340648, -0.322306, 0.883206, 0.444411, -0.425031, 0.788537, -0.444411, -0.425031, 0.788537, -0.340648, -0.322306, 0.883206, -0.444227, -0.527085, 0.724418, 0.345531, 0.219123, 0.912442, 0.444411, -0.425031, 0.788537, 0.340648, -0.322306, 0.883206, -0.345531, 0.219123, 0.912442, -0.226691, 0.428114, 0.874813, -0.340648, -0.322306, 0.883206, 0.340648, -0.322306, 0.883206, 0.444227, -0.527085, 0.724418, 0.0, -0.55681, 0.830622, -0.340648, -0.322306, 0.883206, 0.0, -0.848445, 0.529252, 0.0, -0.55681, 0.830622, -0.476638, 0.716392, 0.509445, 0.119297, 0.753807, 0.646138, 0.226691, 0.428114, 0.874813, 0.476638, 0.716392, 0.509445, 0.459304, -0.212592, 0.862453, -0.226691, 0.428114, 0.874813, -0.459304, -0.212592, 0.862453, 0.226691, 0.428114, 0.874813, 0.340648, -0.322306, 0.883206, -0.340648, -0.322306, 0.883206, -0.226691, 0.428114, 0.874813, 0.459304, -0.212592, 0.862453, 0.0, -0.511612, 0.859188, -0.459304, -0.212592, 0.862453, 0.0, -0.848445, 0.529252, 0.0, -0.848445, 0.529252, 0.459304, -0.212592, 0.862453, 0.0, -0.511612, 0.859188, 0.930204, 0.202338, -0.306192, 0.985015, -0.063051, -0.160466, 0.771722, -0.078494, 0.631062, -0.930204, 0.202338, -0.306192, -0.6957, 0.421827, 0.581378, -0.771722, -0.078494, 0.631062, 0.985015, -0.063051, -0.160466, 0.997009, 0.069521, -0.033296, 0.741752, -0.427839, 0.516434, -0.741752, -0.427839, 0.516434, -0.997009, 0.069521, -0.033296, -0.985015, -0.063051, -0.160466, 0.997009, 0.069521, -0.033296, 0.908536, -0.352489, 0.224219, 0.848628, 0.014008, 0.528764, -0.848628, 0.014008, 0.528764, -0.908536, -0.352489, 0.224219, -0.997009, 0.069521, -0.033296, 0.872158, 0.374645, 0.314554, 0.848628, 0.014008, 0.528764, 0.908536, -0.352489, 0.224219, -0.872158, 0.374645, 0.314554, -0.670766, 0.740257, -0.045289, -0.908536, -0.352489, 0.224219, 0.507065, 0.203314, -0.837581, 0.56328, 0.121311, -0.817286, 0.579028, -0.142705, -0.802698, -0.507065, 0.203314, -0.837581, -0.57268, -0.011994, -0.819666, -0.579028, -0.142705, -0.802698, 0.579028, -0.142705, -0.802698, 0.56328, 0.121311, -0.817286, 0.312296, -0.00116, -0.94995, -0.579028, -0.142705, -0.802698, -0.72103, -0.065065, -0.68981, -0.312296, -0.00116, -0.94995, 0.544328, 0.053316, -0.837153, 0.471969, 0.176794, -0.863674, 0.579028, -0.142705, -0.802698, -0.579028, -0.142705, -0.802698, -0.471969, 0.176794, -0.863674, -0.544328, 0.053316, -0.837153, 0.471969, 0.176794, -0.863674, 0.887173, -0.433607, -0.15772, 0.978698, -0.061495, -0.195837, -0.978698, -0.061495, -0.195837, -0.887173, -0.433607, -0.15772, -0.471969, 0.176794, -0.863674, 0.978698, -0.061495, -0.195837, 0.57268, -0.011994, -0.819666, 0.579028, -0.142705, -0.802698, -0.579028, -0.142705, -0.802698, -0.57268, -0.011994, -0.819666, -0.978698, -0.061495, -0.195837, 0.471969, 0.176794, -0.863674, 0.785699, -0.236732, -0.571459, 0.887173, -0.433607, -0.15772, -0.887173, -0.433607, -0.15772, -0.785699, -0.236732, -0.571459, -0.471969, 0.176794, -0.863674, 0.32551, 0.728355, -0.602924, 0.529221, 0.681722, -0.505112, 0.619648, 0.782525, -0.060457, -0.32551, 0.728355, -0.602924, -0.670766, 0.740257, -0.045289, -0.619648, 0.782525, -0.060457, 0.619648, 0.782525, -0.060457, 0.529221, 0.681722, -0.505112, 0.445479, 0.820399, -0.358348, -0.619648, 0.782525, -0.060457, -0.473006, 0.863216, 0.176305, -0.445479, 0.820399, -0.358348, 0.56328, 0.121311, -0.817286, 0.529221, 0.681722, -0.505112, 0.32551, 0.728355, -0.602924, -0.56328, 0.121311, -0.817286, -0.312296, -0.00116, -0.94995, -0.32551, 0.728355, -0.602924, 0.522263, 0.547685, -0.653615, 0.529221, 0.681722, -0.505112, 0.56328, 0.121311, -0.817286, -0.522263, 0.547685, -0.653615, -0.507065, 0.203314, -0.837581, -0.56328, 0.121311, -0.817286, 0.445479, 0.820399, -0.358348, 0.529221, 0.681722, -0.505112, 0.522263, 0.547685, -0.653615, -0.522263, 0.547685, -0.653615, -0.529221, 0.681722, -0.505112, -0.445479, 0.820399, -0.358348, -0.279244, -0.575884, 0.768303, 0.449232, -0.892575, -0.038331, 0.551164, -0.830622, -0.078768, 0.279244, -0.575884, 0.768303, -0.018799, -0.488632, 0.87225, -0.551164, -0.830622, -0.078768, 0.018799, -0.488632, 0.87225, 0.551164, -0.830622, -0.078768, 0.321451, -0.942381, -0.092318, -0.321451, -0.942381, -0.092318, -0.551164, -0.830622, -0.078768, -0.018799, -0.488632, 0.87225, 0.321451, -0.942381, -0.092318, -0.154454, -0.980193, -0.123875, 0.778802, -0.604389, 0.167791, -0.321451, -0.942381, -0.092318, -0.383557, -0.328776, 0.862972, -0.778802, -0.604389, 0.167791, -0.154454, -0.980193, -0.123875, -0.041108, -0.949553, 0.310831, 0.652608, -0.588794, -0.476821, 0.154454, -0.980193, -0.123875, -0.778802, -0.604389, 0.167791, -0.652608, -0.588794, -0.476821, -0.041108, -0.949553, 0.310831, 0.538377, -0.789239, 0.295267, 0.502884, -0.370312, -0.780999, 0.041108, -0.949553, 0.310831, -0.652608, -0.588794, -0.476821, -0.502884, -0.370312, -0.780999, 0.502884, -0.370312, -0.780999, 0.538377, -0.789239, 0.295267, 0.329936, -0.889645, 0.315653, -0.329936, -0.889645, 0.315653, -0.538377, -0.789239, 0.295267, -0.502884, -0.370312, -0.780999, 0.538377, -0.789239, 0.295267, -0.186804, -0.235084, 0.953825, 0.162877, -0.487014, 0.858028, -0.162877, -0.487014, 0.858028, 0.186804, -0.235084, 0.953825, -0.538377, -0.789239, 0.295267, -0.041108, -0.949553, 0.310831, -0.762139, 0.019318, 0.647084, -0.186804, -0.235084, 0.953825, 0.186804, -0.235084, 0.953825, 0.762139, 0.019318, 0.647084, 0.041108, -0.949553, 0.310831, -0.984741, -0.142613, -0.099582, -0.762139, 0.019318, 0.647084, -0.041108, -0.949553, 0.310831, 0.984741, -0.142613, -0.099582, 0.154454, -0.980193, -0.123875, 0.041108, -0.949553, 0.310831, -0.149571, -0.649464, -0.745506, -0.984741, -0.142613, -0.099582, -0.154454, -0.980193, -0.123875, 0.149571, -0.649464, -0.745506, -0.321451, -0.942381, -0.092318, 0.154454, -0.980193, -0.123875, 0.560442, -0.4991, -0.660878, -0.149571, -0.649464, -0.745506, 0.321451, -0.942381, -0.092318, -0.560442, -0.4991, -0.660878, -0.551164, -0.830622, -0.078768, -0.321451, -0.942381, -0.092318, 0.551164, -0.830622, -0.078768, 0.449232, -0.892575, -0.038331, 0.684194, -0.472182, -0.555773, -0.684194, -0.472182, -0.555773, -0.449232, -0.892575, -0.038331, -0.551164, -0.830622, -0.078768, 0.312296, -0.00116, -0.94995, 0.731193, -0.672475, 0.114414, 0.857204, 0.148289, -0.493118, -0.312296, -0.00116, -0.94995, -0.72103, -0.065065, -0.68981, -0.857204, 0.148289, -0.493118, 0.029542, -0.771905, -0.634999, 0.329936, -0.889645, 0.315653, 0.731193, -0.672475, 0.114414, -0.029542, -0.771905, -0.634999, -0.312296, -0.00116, -0.94995, -0.731193, -0.672475, 0.114414, 0.985015, -0.063051, -0.160466, 0.72103, -0.065065, -0.68981, 0.857204, 0.148289, -0.493118, -0.857204, 0.148289, -0.493118, -0.72103, -0.065065, -0.68981, -0.985015, -0.063051, -0.160466, 0.908536, -0.352489, 0.224219, 0.372723, -0.900449, -0.224158, 0.449232, -0.892575, -0.038331, -0.449232, -0.892575, -0.038331, -0.372723, -0.900449, -0.224158, -0.908536, -0.352489, 0.224219, 0.329936, -0.889645, 0.315653, 0.162877, -0.487014, 0.858028, 0.599841, -0.61388, 0.513138, -0.599841, -0.61388, 0.513138, -0.162877, -0.487014, 0.858028, -0.329936, -0.889645, 0.315653, 0.960936, -0.249855, -0.118839, 0.731193, -0.672475, 0.114414, 0.599841, -0.61388, 0.513138, -0.960936, -0.249855, -0.118839, -0.842036, -0.509781, -0.176244, -0.599841, -0.61388, 0.513138, 0.851466, -0.522752, 0.041353, 0.960936, -0.249855, -0.118839, 0.842036, -0.509781, -0.176244, -0.842036, -0.509781, -0.176244, -0.960936, -0.249855, -0.118839, -0.851466, -0.522752, 0.041353, 0.848354, -0.301157, -0.435377, 0.960936, -0.249855, -0.118839, 0.851466, -0.522752, 0.041353, -0.848354, -0.301157, -0.435377, -0.686361, -0.374554, -0.623371, -0.851466, -0.522752, 0.041353, 0.848354, -0.301157, -0.435377, 0.686361, -0.374554, -0.623371, 0.726066, -0.473128, -0.498917, -0.848354, -0.301157, -0.435377, -0.372723, -0.900449, -0.224158, -0.726066, -0.473128, -0.498917, 0.372723, -0.900449, -0.224158, 0.726066, -0.473128, -0.498917, 0.684194, -0.472182, -0.555773, -0.372723, -0.900449, -0.224158, -0.449232, -0.892575, -0.038331, -0.684194, -0.472182, -0.555773, 0.848354, -0.301157, -0.435377, 0.372723, -0.900449, -0.224158, 0.908536, -0.352489, 0.224219, -0.848354, -0.301157, -0.435377, -0.997009, 0.069521, -0.033296, -0.908536, -0.352489, 0.224219, 0.857204, 0.148289, -0.493118, 0.960936, -0.249855, -0.118839, 0.848354, -0.301157, -0.435377, -0.857204, 0.148289, -0.493118, -0.997009, 0.069521, -0.033296, -0.848354, -0.301157, -0.435377, 0.857204, 0.148289, -0.493118, 0.731193, -0.672475, 0.114414, 0.960936, -0.249855, -0.118839, -0.960936, -0.249855, -0.118839, -0.731193, -0.672475, 0.114414, -0.857204, 0.148289, -0.493118, 0.684194, -0.472182, -0.555773, 0.726066, -0.473128, -0.498917, 0.659291, -0.588061, -0.46849, -0.659291, -0.588061, -0.46849, -0.726066, -0.473128, -0.498917, -0.684194, -0.472182, -0.555773, 0.686361, -0.374554, -0.623371, 0.572527, -0.704733, -0.418928, 0.659291, -0.588061, -0.46849, -0.686361, -0.374554, -0.623371, -0.726066, -0.473128, -0.498917, -0.659291, -0.588061, -0.46849, 0.686361, -0.374554, -0.623371, 0.851466, -0.522752, 0.041353, 0.758354, -0.594806, 0.266518, -0.758354, -0.594806, 0.266518, -0.851466, -0.522752, 0.041353, -0.686361, -0.374554, -0.623371, 0.481368, -0.604816, 0.634388, 0.449232, -0.808618, 0.379864, 0.758354, -0.594806, 0.266518, -0.481368, -0.604816, 0.634388, -0.851466, -0.522752, 0.041353, -0.758354, -0.594806, 0.266518, 0.842036, -0.509781, -0.176244, 0.292917, -0.881222, 0.370922, 0.449232, -0.808618, 0.379864, -0.842036, -0.509781, -0.176244, -0.481368, -0.604816, 0.634388, -0.449232, -0.808618, 0.379864, 0.842036, -0.509781, -0.176244, 0.599841, -0.61388, 0.513138, 0.644978, -0.698386, 0.310129, -0.644978, -0.698386, 0.310129, -0.599841, -0.61388, 0.513138, -0.842036, -0.509781, -0.176244, 0.599841, -0.61388, 0.513138, 0.162877, -0.487014, 0.858028, -0.033113, -0.325602, 0.944914, 0.033113, -0.325602, 0.944914, -0.162877, -0.487014, 0.858028, -0.599841, -0.61388, 0.513138, 0.560442, -0.4991, -0.660878, 0.684194, -0.472182, -0.555773, 0.648213, -0.634724, -0.420576, -0.648213, -0.634724, -0.420576, -0.684194, -0.472182, -0.555773, -0.560442, -0.4991, -0.660878, -0.149571, -0.649464, -0.745506, 0.560442, -0.4991, -0.660878, 0.461776, -0.823664, -0.329142, -0.461776, -0.823664, -0.329142, -0.560442, -0.4991, -0.660878, 0.149571, -0.649464, -0.745506, -0.984741, -0.142613, -0.099582, -0.149571, -0.649464, -0.745506, -0.262398, -0.804346, -0.533067, 0.262398, -0.804346, -0.533067, 0.149571, -0.649464, -0.745506, 0.984741, -0.142613, -0.099582, -0.984741, -0.142613, -0.099582, -0.752861, -0.657277, -0.033784, -0.583117, -0.640339, 0.499893, 0.984741, -0.142613, -0.099582, 0.762139, 0.019318, 0.647084, 0.583117, -0.640339, 0.499893, -0.762139, 0.019318, 0.647084, -0.583117, -0.640339, 0.499893, 0.065004, -0.707358, 0.703848, 0.762139, 0.019318, 0.647084, 0.186804, -0.235084, 0.953825, -0.065004, -0.707358, 0.703848, -0.186804, -0.235084, 0.953825, 0.065004, -0.707358, 0.703848, -0.033113, -0.325602, 0.944914, 0.186804, -0.235084, 0.953825, -0.162877, -0.487014, 0.858028, 0.033113, -0.325602, 0.944914, 0.292917, -0.881222, 0.370922, 0.408429, -0.903836, 0.127262, 0.195105, -0.97998, 0.038942, -0.292917, -0.881222, 0.370922, -0.449232, -0.808618, 0.379864, -0.195105, -0.97998, 0.038942, 0.408429, -0.903836, 0.127262, 0.444807, -0.890683, -0.093692, 0.334666, -0.942289, -0.004578, -0.408429, -0.903836, 0.127262, -0.195105, -0.97998, 0.038942, -0.334666, -0.942289, -0.004578, 0.334666, -0.942289, -0.004578, 0.444807, -0.890683, -0.093692, 0.314371, -0.943602, -0.103732, -0.314371, -0.943602, -0.103732, -0.444807, -0.890683, -0.093692, -0.334666, -0.942289, -0.004578, 0.314371, -0.943602, -0.103732, 0.383129, -0.92114, -0.068514, 0.289651, -0.9035, 0.315806, -0.314371, -0.943602, -0.103732, -0.3343, -0.936369, 0.106784, -0.289651, -0.9035, 0.315806, 0.461776, -0.823664, -0.329142, 0.648213, -0.634724, -0.420576, 0.3343, -0.936369, 0.106784, -0.3343, -0.936369, 0.106784, -0.648213, -0.634724, -0.420576, -0.461776, -0.823664, -0.329142, 0.334666, -0.942289, -0.004578, 0.3343, -0.936369, 0.106784, 0.648213, -0.634724, -0.420576, -0.334666, -0.942289, -0.004578, -0.659291, -0.588061, -0.46849, -0.648213, -0.634724, -0.420576, 0.572527, -0.704733, -0.418928, 0.195105, -0.97998, 0.038942, 0.334666, -0.942289, -0.004578, -0.572527, -0.704733, -0.418928, -0.659291, -0.588061, -0.46849, -0.334666, -0.942289, -0.004578, 0.449232, -0.808618, 0.379864, 0.195105, -0.97998, 0.038942, 0.572527, -0.704733, -0.418928, -0.572527, -0.704733, -0.418928, -0.195105, -0.97998, 0.038942, -0.449232, -0.808618, 0.379864, -0.033113, -0.325602, 0.944914, 0.408429, -0.903836, 0.127262, 0.292917, -0.881222, 0.370922, 0.033113, -0.325602, 0.944914, -0.644978, -0.698386, 0.310129, -0.292917, -0.881222, 0.370922, 0.065004, -0.707358, 0.703848, 0.444807, -0.890683, -0.093692, 0.408429, -0.903836, 0.127262, -0.408429, -0.903836, 0.127262, -0.444807, -0.890683, -0.093692, -0.065004, -0.707358, 0.703848, 0.314371, -0.943602, -0.103732, 0.444807, -0.890683, -0.093692, 0.065004, -0.707358, 0.703848, -0.314371, -0.943602, -0.103732, 0.583117, -0.640339, 0.499893, -0.065004, -0.707358, 0.703848, 0.383129, -0.92114, -0.068514, 0.314371, -0.943602, -0.103732, -0.583117, -0.640339, 0.499893, -0.383129, -0.92114, -0.068514, 0.752861, -0.657277, -0.033784, 0.583117, -0.640339, 0.499893, -0.262398, -0.804346, -0.533067, 0.289651, -0.9035, 0.315806, 0.383129, -0.92114, -0.068514, -0.383129, -0.92114, -0.068514, -0.289651, -0.9035, 0.315806, 0.262398, -0.804346, -0.533067, 0.461776, -0.823664, -0.329142, 0.289651, -0.9035, 0.315806, -0.262398, -0.804346, -0.533067, 0.262398, -0.804346, -0.533067, -0.289651, -0.9035, 0.315806, -0.461776, -0.823664, -0.329142, 0.502884, -0.370312, -0.780999, 0.029542, -0.771905, -0.634999, -0.098849, 0.532151, -0.840846, 0.098849, 0.532151, -0.840846, -0.029542, -0.771905, -0.634999, -0.502884, -0.370312, -0.780999, 0.652608, -0.588794, -0.476821, 0.502884, -0.370312, -0.780999, -0.025269, 0.733116, -0.679586, 0.025269, 0.733116, -0.679586, -0.502884, -0.370312, -0.780999, -0.652608, -0.588794, -0.476821, 0.652608, -0.588794, -0.476821, 0.636586, 0.583392, -0.504318, 0.92526, 0.367992, 0.09183, -0.652608, -0.588794, -0.476821, -0.778802, -0.604389, 0.167791, -0.92526, 0.367992, 0.09183, 0.778802, -0.604389, 0.167791, 0.92526, 0.367992, 0.09183, 0.286996, 0.748497, 0.597766, -0.778802, -0.604389, 0.167791, -0.383557, -0.328776, 0.862972, -0.286996, 0.748497, 0.597766, 0.383557, -0.328776, 0.862972, 0.286996, 0.748497, 0.597766, -0.414228, 0.724479, 0.55089, -0.383557, -0.328776, 0.862972, -0.018799, -0.488632, 0.87225, 0.414228, 0.724479, 0.55089, 0.018799, -0.488632, 0.87225, -0.414228, 0.724479, 0.55089, -0.650044, 0.485336, 0.584643, -0.018799, -0.488632, 0.87225, 0.279244, -0.575884, 0.768303, 0.650044, 0.485336, 0.584643, -0.025269, 0.733116, -0.679586, -0.098849, 0.532151, -0.840846, -0.650044, 0.485336, 0.584643, 0.025269, 0.733116, -0.679586, 0.414228, 0.724479, 0.55089, 0.650044, 0.485336, 0.584643, -0.414228, 0.724479, 0.55089, 0.286996, 0.748497, 0.597766, 0.636586, 0.583392, -0.504318, -0.636586, 0.583392, -0.504318, -0.286996, 0.748497, 0.597766, 0.414228, 0.724479, 0.55089, 0.286996, 0.748497, 0.597766, 0.92526, 0.367992, 0.09183, 0.636586, 0.583392, -0.504318, -0.636586, 0.583392, -0.504318, -0.92526, 0.367992, 0.09183, -0.286996, 0.748497, 0.597766, 0.908536, -0.352489, 0.224219, -0.279244, -0.575884, 0.768303, -0.650044, 0.485336, 0.584643, -0.908536, -0.352489, 0.224219, -0.670766, 0.740257, -0.045289, 0.650044, 0.485336, 0.584643, 0.670766, 0.740257, -0.045289, -0.650044, 0.485336, 0.584643, -0.098849, 0.532151, -0.840846, 0.098849, 0.532151, -0.840846, 0.650044, 0.485336, 0.584643, -0.670766, 0.740257, -0.045289, 0.312296, -0.00116, -0.94995, 0.32551, 0.728355, -0.602924, -0.098849, 0.532151, -0.840846, 0.098849, 0.532151, -0.840846, -0.32551, 0.728355, -0.602924, -0.312296, -0.00116, -0.94995, 0.800104, -0.599841, -0.002838, 0.969298, -0.245552, -0.011811, 0.607624, -0.608478, -0.510392, -0.800104, -0.599841, -0.002838, -0.607624, -0.608478, -0.510392, -0.969298, -0.245552, -0.011811, 0.868221, -0.496109, -0.00473, 0.800104, -0.599841, -0.002838, 0.680166, -0.488815, -0.546251, -0.868221, -0.496109, -0.00473, -0.680166, -0.488815, -0.546251, -0.800104, -0.599841, -0.002838, 0.680166, -0.488815, -0.546251, 0.607624, -0.608478, -0.510392, 0.119327, -0.476272, -0.871151, -0.680166, -0.488815, -0.546251, -0.119327, -0.476272, -0.871151, -0.607624, -0.608478, -0.510392, 0.607624, -0.608478, -0.510392, 0.728996, -0.193426, -0.656575, 0.09949, -0.652211, -0.751457, -0.607624, -0.608478, -0.510392, -0.09949, -0.652211, -0.751457, -0.728996, -0.193426, -0.656575, 0.09949, -0.652211, -0.751457, 0.031404, -0.252907, -0.966948, -0.456282, -0.710746, -0.535356, -0.09949, -0.652211, -0.751457, 0.456282, -0.710746, -0.535356, -0.031404, -0.252907, -0.966948, 0.119327, -0.476272, -0.871151, 0.09949, -0.652211, -0.751457, -0.55385, -0.540635, -0.633198, -0.119327, -0.476272, -0.871151, 0.55385, -0.540635, -0.633198, -0.09949, -0.652211, -0.751457, -0.456282, -0.710746, -0.535356, -0.689291, -0.724418, -0.004578, -0.55385, -0.540635, -0.633198, 0.809717, -0.586749, -0.006989, 0.689291, -0.724418, -0.004578, 0.55385, -0.540635, -0.633198, -0.653066, -0.319315, -0.686636, -0.952574, -0.303995, -0.013123, -0.456282, -0.710746, -0.535356, 0.689291, -0.724418, -0.004578, 0.952574, -0.303995, -0.013123, 0.456282, -0.710746, -0.535356, -0.689291, -0.724418, -0.004578, -0.952574, -0.303995, -0.013123, -0.455947, -0.720664, 0.522202, 0.689291, -0.724418, -0.004578, 0.455947, -0.720664, 0.522202, 0.952574, -0.303995, -0.013123, -0.689291, -0.724418, -0.004578, -0.455947, -0.720664, 0.522202, -0.809717, -0.586749, -0.006989, 0.530595, -0.571703, 0.625751, 0.455947, -0.720664, 0.522202, 0.809717, -0.586749, -0.006989, -0.455947, -0.720664, 0.522202, 0.103061, -0.664388, 0.740196, -0.530595, -0.571703, 0.625751, -0.125736, -0.525254, 0.841578, -0.103061, -0.664388, 0.740196, 0.530595, -0.571703, 0.625751, -0.664357, -0.305582, 0.682058, 0.025727, -0.231147, 0.972564, -0.455947, -0.720664, 0.522202, -0.103061, -0.664388, 0.740196, -0.025727, -0.231147, 0.972564, 0.455947, -0.720664, 0.522202, 0.025727, -0.231147, 0.972564, 0.736381, -0.180273, 0.652089, 0.103061, -0.664388, 0.740196, -0.610218, -0.618061, 0.49559, -0.736381, -0.180273, 0.652089, -0.103061, -0.664388, 0.740196, 0.103061, -0.664388, 0.740196, 0.610218, -0.618061, 0.49559, 0.125736, -0.525254, 0.841578, -0.668203, -0.514786, 0.537095, -0.610218, -0.618061, 0.49559, -0.125736, -0.525254, 0.841578, 0.610218, -0.618061, 0.49559, 0.800104, -0.599841, -0.002838, 0.668203, -0.514786, 0.537095, -0.868221, -0.496109, -0.00473, -0.800104, -0.599841, -0.002838, -0.668203, -0.514786, 0.537095, 0.736381, -0.180273, 0.652089, 0.969298, -0.245552, -0.011811, 0.610218, -0.618061, 0.49559, -0.800104, -0.599841, -0.002838, -0.969298, -0.245552, -0.011811, -0.610218, -0.618061, 0.49559, 0.969298, -0.245552, -0.011811, 0.736381, -0.180273, 0.652089, 0.964446, -0.263863, -0.012665, -0.72161, -0.222388, 0.655568, -0.736381, -0.180273, 0.652089, -0.964446, -0.263863, -0.012665, 0.736381, -0.180273, 0.652089, 0.025727, -0.231147, 0.972564, 0.72161, -0.222388, 0.655568, -0.043153, -0.341441, 0.938902, -0.025727, -0.231147, 0.972564, -0.72161, -0.222388, 0.655568, 0.025727, -0.231147, 0.972564, -0.664357, -0.305582, 0.682058, 0.043153, -0.341441, 0.938902, 0.623676, -0.464675, 0.628529, 0.664357, -0.305582, 0.682058, -0.043153, -0.341441, 0.938902, -0.664357, -0.305582, 0.682058, -0.952574, -0.303995, -0.013123, -0.623676, -0.464675, 0.628529, 0.926969, -0.374859, -0.01294, 0.952574, -0.303995, -0.013123, 0.623676, -0.464675, 0.628529, -0.926969, -0.374859, -0.01294, -0.952574, -0.303995, -0.013123, -0.615864, -0.464095, -0.636616, 0.926969, -0.374859, -0.01294, 0.615864, -0.464095, -0.636616, 0.952574, -0.303995, -0.013123, -0.615864, -0.464095, -0.636616, -0.653066, -0.319315, -0.686636, 0.042543, -0.337474, -0.940336, 0.615864, -0.464095, -0.636616, -0.042543, -0.337474, -0.940336, 0.653066, -0.319315, -0.686636, 0.042543, -0.337474, -0.940336, 0.031404, -0.252907, -0.966948, 0.715171, -0.222724, -0.662465, -0.042543, -0.337474, -0.940336, -0.715171, -0.222724, -0.662465, -0.031404, -0.252907, -0.966948, 0.715171, -0.222724, -0.662465, 0.728996, -0.193426, -0.656575, 0.964446, -0.263863, -0.012665, -0.715171, -0.222724, -0.662465, -0.964446, -0.263863, -0.012665, -0.728996, -0.193426, -0.656575, 0.159551, -0.152898, -0.975249, 0.15537, -0.632282, -0.758965, 0.0, -0.252266, -0.96765, 0.0, -0.63155, -0.775323, -0.15537, -0.632282, -0.758965, 0.0, -0.252266, -0.96765, 0.526658, -0.161107, -0.834651, 0.35023, -0.684683, -0.639149, 0.159551, -0.152898, -0.975249, -0.15537, -0.632282, -0.758965, -0.35023, -0.684683, -0.639149, -0.159551, -0.152898, -0.975249, 0.526658, -0.161107, -0.834651, 0.945708, -0.197699, -0.257851, 0.35023, -0.684683, -0.639149, -0.526658, -0.161107, -0.834651, -0.35023, -0.684683, -0.639149, -0.945708, -0.197699, -0.257851, 0.945708, -0.197699, -0.257851, 0.972808, -0.208716, 0.100314, 0.55565, -0.799982, -0.226356, -0.945708, -0.197699, -0.257851, -0.55565, -0.799982, -0.226356, -0.972808, -0.208716, 0.100314, 0.972808, -0.208716, 0.100314, 0.955718, -0.156468, 0.249184, 0.565172, -0.824396, -0.029725, -0.972808, -0.208716, 0.100314, -0.565172, -0.824396, -0.029725, -0.955718, -0.156468, 0.249184, 0.056093, -0.96292, -0.263863, 0.891537, -0.309458, -0.330668, 0.344279, -0.763298, -0.546617, -0.056093, -0.96292, -0.263863, -0.344279, -0.763298, -0.546617, -0.891537, -0.309458, -0.330668, 0.348827, 0.008148, -0.937132, 0.587481, -0.196966, -0.784875, 0.344279, -0.763298, -0.546617, -0.49913, -0.780663, -0.376049, -0.587481, -0.196966, -0.784875, -0.344279, -0.763298, -0.546617, 0.49913, -0.780663, -0.376049, 0.587481, -0.196966, -0.784875, 0.566546, -0.759819, -0.318796, -0.49913, -0.780663, -0.376049, -0.566546, -0.759819, -0.318796, -0.587481, -0.196966, -0.784875, 0.90698, 0.128941, -0.400922, 0.845119, -0.298502, 0.443403, 0.566546, -0.759819, -0.318796, -0.460707, -0.875637, -0.14481, -0.845119, -0.298502, 0.443403, -0.566546, -0.759819, -0.318796, 0.845119, -0.298502, 0.443403, 0.517045, -0.212531, 0.829127, 0.460707, -0.875637, -0.14481, -0.480117, -0.857814, -0.183264, -0.517045, -0.212531, 0.829127, -0.460707, -0.875637, -0.14481, 0.517045, -0.212531, 0.829127, 0.597552, -0.164586, 0.784722, 0.480117, -0.857814, -0.183264, -0.308451, -0.951201, 0.003845, -0.597552, -0.164586, 0.784722, -0.480117, -0.857814, -0.183264, 0.308451, -0.951201, 0.003845, 0.597552, -0.164586, 0.784722, 0.266579, -0.939146, 0.21659, -0.308451, -0.951201, 0.003845, -0.266579, -0.939146, 0.21659, -0.597552, -0.164586, 0.784722, 0.231269, -0.175054, 0.956999, -0.60506, -0.209754, 0.768029, 0.266579, -0.939146, 0.21659, 0.157384, -0.973449, 0.166021, 0.60506, -0.209754, 0.768029, -0.266579, -0.939146, 0.21659, -0.60506, -0.209754, 0.768029, -0.824183, -0.147313, 0.54677, -0.157384, -0.973449, 0.166021, 0.061098, -0.997803, -0.025239, 0.824183, -0.147313, 0.54677, 0.157384, -0.973449, 0.166021, -0.824183, -0.147313, 0.54677, 0.0, -0.267281, 0.963591, -0.061098, -0.997803, -0.025239, 0.0, -0.996551, -0.082736, 0.0, -0.267281, 0.963591, 0.061098, -0.997803, -0.025239, 0.36784, -0.885556, -0.283608, 0.258156, -0.957762, -0.126499, -0.061098, -0.997803, -0.025239, 0.157384, -0.973449, 0.166021, -0.258156, -0.957762, -0.126499, 0.061098, -0.997803, -0.025239, -0.157384, -0.973449, 0.166021, 0.258156, -0.957762, -0.126499, 0.266579, -0.939146, 0.21659, 0.157384, -0.973449, 0.166021, -0.266579, -0.939146, 0.21659, -0.258156, -0.957762, -0.126499, 0.219001, -0.975005, 0.037141, 0.308451, -0.951201, 0.003845, 0.149022, -0.976714, -0.154149, -0.266579, -0.939146, 0.21659, -0.308451, -0.951201, 0.003845, -0.149022, -0.976714, -0.154149, 0.22541, -0.904996, -0.360759, 0.480117, -0.857814, -0.183264, 0.219001, -0.975005, 0.037141, -0.308451, -0.951201, 0.003845, -0.480117, -0.857814, -0.183264, -0.219001, -0.975005, 0.037141, 0.358806, -0.925748, -0.119175, 0.460707, -0.875637, -0.14481, 0.22541, -0.904996, -0.360759, -0.480117, -0.857814, -0.183264, -0.460707, -0.875637, -0.14481, -0.22541, -0.904996, -0.360759, 0.460219, -0.87228, -0.165105, 0.566546, -0.759819, -0.318796, 0.358806, -0.925748, -0.119175, -0.460707, -0.875637, -0.14481, -0.566546, -0.759819, -0.318796, -0.358806, -0.925748, -0.119175, 0.4279, -0.815577, -0.389508, 0.49913, -0.780663, -0.376049, 0.460219, -0.87228, -0.165105, -0.566546, -0.759819, -0.318796, -0.49913, -0.780663, -0.376049, -0.460219, -0.87228, -0.165105, 0.15894, -0.851924, -0.498917, 0.344279, -0.763298, -0.546617, 0.4279, -0.815577, -0.389508, -0.49913, -0.780663, -0.376049, -0.344279, -0.763298, -0.546617, -0.4279, -0.815577, -0.389508, 0.15894, -0.851924, -0.498917, -0.128178, -0.947752, -0.292001, 0.344279, -0.763298, -0.546617, -0.15894, -0.851924, -0.498917, -0.344279, -0.763298, -0.546617, 0.128178, -0.947752, -0.292001, 0.056093, -0.96292, -0.263863, -0.128178, -0.947752, -0.292001, 0.0, -0.997925, 0.064272, -0.056093, -0.96292, -0.263863, 0.0, -0.997925, 0.064272, 0.128178, -0.947752, -0.292001, 0.36784, -0.885556, -0.283608, -0.061098, -0.997803, -0.025239, 0.031587, -0.983459, -0.178167, 0.0, -0.996551, -0.082736, 0.061098, -0.997803, -0.025239, -0.031587, -0.983459, -0.178167, -0.200568, -0.970306, -0.134953, 0.031587, -0.983459, -0.178167, 0.0, -0.975036, -0.221992, 0.200568, -0.970306, -0.134953, 0.0, -0.975036, -0.221992, -0.031587, -0.983459, -0.178167, 0.0, -0.997925, 0.064272, -0.239296, -0.923032, -0.301187, 0.0, -0.975036, -0.221992, 0.200568, -0.970306, -0.134953, 0.239296, -0.923032, -0.301187, 0.0, -0.975036, -0.221992, 0.15537, -0.632282, -0.758965, -0.05887, -0.923734, -0.37843, 0.0, -0.63155, -0.775323, -0.15537, -0.632282, -0.758965, 0.0, -0.63155, -0.775323, 0.05887, -0.923734, -0.37843, 0.35023, -0.684683, -0.639149, 0.130711, -0.93881, -0.318644, 0.15537, -0.632282, -0.758965, -0.35023, -0.684683, -0.639149, -0.15537, -0.632282, -0.758965, -0.130711, -0.93881, -0.318644, 0.14594, -0.981933, -0.120182, 0.130711, -0.93881, -0.318644, 0.55565, -0.799982, -0.226356, -0.35023, -0.684683, -0.639149, -0.130711, -0.93881, -0.318644, -0.55565, -0.799982, -0.226356, 0.565172, -0.824396, -0.029725, 0.593677, -0.797388, 0.108158, 0.181524, -0.98233, -0.045198, -0.565172, -0.824396, -0.029725, -0.181524, -0.98233, -0.045198, -0.593677, -0.797388, 0.108158, 0.181524, -0.98233, -0.045198, 0.14594, -0.981933, -0.120182, 0.565172, -0.824396, -0.029725, -0.181524, -0.98233, -0.045198, -0.565172, -0.824396, -0.029725, -0.14594, -0.981933, -0.120182, 0.500259, -0.751946, -0.429243, 0.0, -0.879452, -0.475936, 0.134098, -0.990936, 0.006256, 0.0, -1.0, 0.0, 0.0, -0.879452, -0.475936, -0.134098, -0.990936, 0.006256, 0.181524, -0.98233, -0.045198, 0.134098, -0.990936, 0.006256, 0.0, -0.99939, -0.034059, 0.0, -1.0, 0.0, -0.134098, -0.990936, 0.006256, 0.0, -0.99939, -0.034059, 0.0, -0.809595, -0.586963, 0.14594, -0.981933, -0.120182, 0.0, -0.99939, -0.034059, -0.181524, -0.98233, -0.045198, -0.14594, -0.981933, -0.120182, 0.0, -0.99939, -0.034059, 0.500259, -0.751946, -0.429243, 0.932157, -0.334758, -0.137761, 0.583575, -0.423475, -0.692862, -0.500259, -0.751946, -0.429243, -0.583575, -0.423475, -0.692862, -0.932157, -0.334758, -0.137761, 0.501389, -0.801691, -0.325327, 0.618641, -0.12479, 0.775658, 0.932157, -0.334758, -0.137761, -0.926237, -0.288003, -0.243049, -0.618641, -0.12479, 0.775658, -0.932157, -0.334758, -0.137761, 0.0, -0.856227, 0.516556, -0.240516, -0.203558, 0.949034, 0.501389, -0.801691, -0.325327, -0.618641, -0.12479, 0.775658, 0.240516, -0.203558, 0.949034, -0.501389, -0.801691, -0.325327, 0.0, -0.967711, -0.251991, 0.0, -0.559648, 0.8287, 0.0, -0.856227, 0.516556, 0.240516, -0.203558, 0.949034, 0.0, -0.559648, 0.8287, 0.0, -0.856227, 0.516556, 0.0, -0.879452, -0.475936, 0.500259, -0.751946, -0.429243, 0.0, -0.501053, -0.865383, -0.583575, -0.423475, -0.692862, -0.500259, -0.751946, -0.429243, 0.0, -0.501053, -0.865383, 0.0, -0.501053, -0.865383, 0.583575, -0.423475, -0.692862, 0.0, -0.876431, -0.481521, -0.183294, -0.789026, -0.586352, -0.583575, -0.423475, -0.692862, 0.0, -0.876431, -0.481521, -0.240516, -0.203558, 0.949034, 0.0, -0.559648, 0.8287, -0.185736, -0.781487, 0.595599, 0.240516, -0.203558, 0.949034, 0.185736, -0.781487, 0.595599, 0.0, -0.559648, 0.8287, 0.618641, -0.12479, 0.775658, -0.240516, -0.203558, 0.949034, 0.361095, -0.804651, 0.471267, -0.618641, -0.12479, 0.775658, -0.361095, -0.804651, 0.471267, 0.240516, -0.203558, 0.949034, 0.618641, -0.12479, 0.775658, 0.361095, -0.804651, 0.471267, 0.926237, -0.288003, -0.243049, -0.448805, -0.83636, -0.314707, -0.361095, -0.804651, 0.471267, -0.926237, -0.288003, -0.243049, 0.583575, -0.423475, -0.692862, 0.926237, -0.288003, -0.243049, 0.183294, -0.789026, -0.586352, -0.583575, -0.423475, -0.692862, -0.183294, -0.789026, -0.586352, -0.926237, -0.288003, -0.243049, 0.0, -0.987457, 0.157842, 0.448805, -0.83636, -0.314707, -0.185736, -0.781487, 0.595599, -0.361095, -0.804651, 0.471267, -0.448805, -0.83636, -0.314707, 0.185736, -0.781487, 0.595599, 0.448805, -0.83636, -0.314707, 0.0, -0.987457, 0.157842, 0.183294, -0.789026, -0.586352, -0.448805, -0.83636, -0.314707, -0.183294, -0.789026, -0.586352, 0.0, -0.987457, 0.157842, 0.0, -0.997925, 0.064272, 0.0, -0.856227, 0.516556, 0.056093, -0.96292, -0.263863, 0.0, -0.997925, 0.064272, -0.056093, -0.96292, -0.263863, 0.0, -0.856227, 0.516556, 0.056093, -0.96292, -0.263863, 0.501389, -0.801691, -0.325327, 0.77514, -0.630573, 0.038667, -0.056093, -0.96292, -0.263863, -0.77514, -0.630573, 0.038667, -0.501389, -0.801691, -0.325327, 0.932157, -0.334758, -0.137761, 0.500259, -0.751946, -0.429243, 0.77514, -0.630573, 0.038667, -0.650655, -0.744652, 0.148747, -0.500259, -0.751946, -0.429243, -0.77514, -0.630573, 0.038667, 0.500259, -0.751946, -0.429243, 0.134098, -0.990936, 0.006256, 0.650655, -0.744652, 0.148747, -0.593677, -0.797388, 0.108158, -0.134098, -0.990936, 0.006256, -0.650655, -0.744652, 0.148747, 0.955718, -0.156468, 0.249184, 0.927763, -0.120884, 0.353008, 0.593677, -0.797388, 0.108158, -0.650655, -0.744652, 0.148747, -0.927763, -0.120884, 0.353008, -0.593677, -0.797388, 0.108158, 0.927763, -0.120884, 0.353008, 0.930601, -0.126347, 0.343516, 0.650655, -0.744652, 0.148747, -0.77514, -0.630573, 0.038667, -0.930601, -0.126347, 0.343516, -0.650655, -0.744652, 0.148747, 0.930601, -0.126347, 0.343516, 0.891537, -0.309458, -0.330668, 0.77514, -0.630573, 0.038667, -0.930601, -0.126347, 0.343516, -0.77514, -0.630573, 0.038667, -0.891537, -0.309458, -0.330668, 0.14594, -0.981933, -0.120182, 0.0, -0.809595, -0.586963, -0.136845, -0.838588, -0.527268, 0.0, -0.273232, -0.961943, 0.0, -0.809595, -0.586963, 0.136845, -0.838588, -0.527268, -0.635121, -0.771203, 0.042756, 0.130711, -0.93881, -0.318644, -0.136845, -0.838588, -0.527268, 0.635121, -0.771203, 0.042756, 0.136845, -0.838588, -0.527268, -0.130711, -0.93881, -0.318644, -0.414106, -0.701621, 0.579821, -0.05887, -0.923734, -0.37843, -0.635121, -0.771203, 0.042756, 0.414106, -0.701621, 0.579821, 0.635121, -0.771203, 0.042756, 0.05887, -0.923734, -0.37843, 0.0, -0.82931, 0.558763, 0.0, -0.938017, -0.346507, -0.414106, -0.701621, 0.579821, 0.0, -0.82931, 0.558763, 0.414106, -0.701621, 0.579821, 0.0, -0.938017, -0.346507, 0.0, -0.82931, 0.558763, -0.414106, -0.701621, 0.579821, 0.0, -0.845851, 0.533403, 0.295846, -0.828761, 0.47496, 0.414106, -0.701621, 0.579821, 0.0, -0.845851, 0.533403, -0.295846, -0.828761, 0.47496, -0.414106, -0.701621, 0.579821, -0.673757, -0.72985, 0.115452, 0.295846, -0.828761, 0.47496, 0.673757, -0.72985, 0.115452, 0.414106, -0.701621, 0.579821, -0.673757, -0.72985, 0.115452, -0.635121, -0.771203, 0.042756, -0.517655, -0.486007, -0.704123, 0.673757, -0.72985, 0.115452, 0.517655, -0.486007, -0.704123, 0.635121, -0.771203, 0.042756, -0.136845, -0.838588, -0.527268, 0.0, -0.273232, -0.961943, -0.517655, -0.486007, -0.704123, 0.0, -0.715171, -0.698935, 0.0, -0.273232, -0.961943, 0.517655, -0.486007, -0.704123, -0.517655, -0.486007, -0.704123, 0.0, -0.715171, -0.698935, -0.295846, -0.828761, 0.47496, 0.517655, -0.486007, -0.704123, 0.295846, -0.828761, 0.47496, 0.0, -0.715171, -0.698935, 0.158055, -0.983825, -0.084231, -0.200568, -0.970306, -0.134953, -0.010102, -0.997467, -0.069979, -0.158055, -0.983825, -0.084231, 0.010102, -0.997467, -0.069979, 0.200568, -0.970306, -0.134953, 0.293405, -0.95407, -0.060152, 0.031587, -0.983459, -0.178167, 0.158055, -0.983825, -0.084231, -0.293405, -0.95407, -0.060152, -0.158055, -0.983825, -0.084231, -0.031587, -0.983459, -0.178167, 0.36784, -0.885556, -0.283608, 0.031587, -0.983459, -0.178167, 0.182958, -0.977691, -0.102878, -0.293405, -0.95407, -0.060152, -0.031587, -0.983459, -0.178167, -0.182958, -0.977691, -0.102878, -0.239296, -0.923032, -0.301187, -0.128178, -0.947752, -0.292001, -0.010102, -0.997467, -0.069979, 0.031709, -0.975005, -0.219794, 0.128178, -0.947752, -0.292001, 0.010102, -0.997467, -0.069979, -0.031709, -0.975005, -0.219794, -0.128178, -0.947752, -0.292001, 0.184454, -0.964995, -0.186316, 0.031709, -0.975005, -0.219794, -0.184454, -0.964995, -0.186316, 0.128178, -0.947752, -0.292001, 0.184454, -0.964995, -0.186316, 0.15894, -0.851924, -0.498917, 0.29899, -0.953581, -0.035615, -0.184454, -0.964995, -0.186316, -0.29899, -0.953581, -0.035615, -0.15894, -0.851924, -0.498917, 0.29899, -0.953581, -0.035615, 0.4279, -0.815577, -0.389508, 0.29429, -0.950224, -0.102023, -0.29899, -0.953581, -0.035615, -0.29429, -0.950224, -0.102023, -0.4279, -0.815577, -0.389508, 0.29429, -0.950224, -0.102023, 0.460219, -0.87228, -0.165105, 0.177587, -0.982208, -0.060762, -0.29429, -0.950224, -0.102023, -0.177587, -0.982208, -0.060762, -0.460219, -0.87228, -0.165105, 0.358806, -0.925748, -0.119175, 0.22541, -0.904996, -0.360759, 0.177587, -0.982208, -0.060762, -0.294351, -0.955657, 0.004639, -0.22541, -0.904996, -0.360759, -0.177587, -0.982208, -0.060762, 0.22541, -0.904996, -0.360759, 0.219001, -0.975005, 0.037141, 0.294351, -0.955657, 0.004639, -0.088687, -0.987884, -0.127171, -0.219001, -0.975005, 0.037141, -0.294351, -0.955657, 0.004639, 0.088687, -0.987884, -0.127171, 0.219001, -0.975005, 0.037141, 0.203619, -0.973571, 0.103183, -0.088687, -0.987884, -0.127171, -0.203619, -0.973571, 0.103183, -0.219001, -0.975005, 0.037141, 0.203619, -0.973571, 0.103183, 0.149022, -0.976714, -0.154149, 0.131504, -0.989166, 0.064974, -0.203619, -0.973571, 0.103183, -0.131504, -0.989166, 0.064974, -0.149022, -0.976714, -0.154149, 0.131504, -0.989166, 0.064974, 0.258156, -0.957762, -0.126499, 0.182958, -0.977691, -0.102878, -0.131504, -0.989166, 0.064974, -0.182958, -0.977691, -0.102878, -0.258156, -0.957762, -0.126499, 0.174383, -0.947386, -0.268319, 0.131504, -0.989166, 0.064974, 0.463424, -0.793237, -0.39491, -0.174383, -0.947386, -0.268319, -0.463424, -0.793237, -0.39491, -0.131504, -0.989166, 0.064974, 0.113315, -0.942564, -0.314188, 0.203619, -0.973571, 0.103183, 0.174383, -0.947386, -0.268319, -0.113315, -0.942564, -0.314188, -0.174383, -0.947386, -0.268319, -0.203619, -0.973571, 0.103183, 0.088687, -0.987884, -0.127171, 0.203619, -0.973571, 0.103183, -0.274056, -0.4391, -0.855617, -0.113315, -0.942564, -0.314188, -0.203619, -0.973571, 0.103183, 0.274056, -0.4391, -0.855617, 0.294351, -0.955657, 0.004639, 0.088687, -0.987884, -0.127171, -0.142308, -0.800165, -0.582629, 0.274056, -0.4391, -0.855617, -0.088687, -0.987884, -0.127171, 0.142308, -0.800165, -0.582629, -0.422926, -0.899716, -0.107761, 0.177587, -0.982208, -0.060762, -0.142308, -0.800165, -0.582629, 0.422926, -0.899716, -0.107761, 0.142308, -0.800165, -0.582629, -0.177587, -0.982208, -0.060762, 0.29429, -0.950224, -0.102023, 0.177587, -0.982208, -0.060762, -0.192145, -0.962523, 0.191351, 0.422926, -0.899716, -0.107761, -0.177587, -0.982208, -0.060762, 0.192145, -0.962523, 0.191351, -0.165288, -0.775109, 0.60979, 0.29899, -0.953581, -0.035615, -0.192145, -0.962523, 0.191351, 0.165288, -0.775109, 0.60979, 0.192145, -0.962523, 0.191351, -0.29899, -0.953581, -0.035615, 0.184454, -0.964995, -0.186316, 0.29899, -0.953581, -0.035615, 0.143071, -0.816919, 0.558672, 0.165288, -0.775109, 0.60979, -0.29899, -0.953581, -0.035615, -0.143071, -0.816919, 0.558672, -0.031709, -0.975005, -0.219794, 0.184454, -0.964995, -0.186316, 0.432264, -0.687643, 0.5833, -0.143071, -0.816919, 0.558672, -0.184454, -0.964995, -0.186316, -0.432264, -0.687643, 0.5833, 0.68804, -0.661397, 0.298471, -0.010102, -0.997467, -0.069979, 0.432264, -0.687643, 0.5833, -0.68804, -0.661397, 0.298471, -0.432264, -0.687643, 0.5833, 0.010102, -0.997467, -0.069979, 0.463424, -0.793237, -0.39491, 0.182958, -0.977691, -0.102878, 0.789361, -0.579302, -0.203192, -0.463424, -0.793237, -0.39491, -0.789361, -0.579302, -0.203192, -0.182958, -0.977691, -0.102878, 0.789361, -0.579302, -0.203192, 0.293405, -0.95407, -0.060152, 0.80163, -0.597674, 0.010987, -0.789361, -0.579302, -0.203192, -0.80163, -0.597674, 0.010987, -0.293405, -0.95407, -0.060152, 0.80163, -0.597674, 0.010987, 0.158055, -0.983825, -0.084231, 0.68804, -0.661397, 0.298471, -0.80163, -0.597674, 0.010987, -0.68804, -0.661397, 0.298471, -0.158055, -0.983825, -0.084231, 0.0, -0.511612, 0.859188, 0.0, -0.267281, 0.963591, -0.459304, -0.212592, 0.862453, 0.0, -0.511612, 0.859188, 0.459304, -0.212592, 0.862453, 0.0, -0.267281, 0.963591, -0.459304, -0.212592, 0.862453, -0.824183, -0.147313, 0.54677, -0.476638, 0.716392, 0.509445, 0.459304, -0.212592, 0.862453, 0.476638, 0.716392, 0.509445, 0.824183, -0.147313, 0.54677, -0.60506, -0.209754, 0.768029, 0.231269, -0.175054, 0.956999, -0.476638, 0.716392, 0.509445, -0.119297, 0.753807, 0.646138, -0.231269, -0.175054, 0.956999, 0.476638, 0.716392, 0.509445, 0.231269, -0.175054, 0.956999, 0.597552, -0.164586, 0.784722, 0.119297, 0.753807, 0.646138, -0.226691, 0.428114, 0.874813, -0.597552, -0.164586, 0.784722, -0.119297, 0.753807, 0.646138, 0.597552, -0.164586, 0.784722, 0.517045, -0.212531, 0.829127, 0.226691, 0.428114, 0.874813, -0.345531, 0.219123, 0.912442, -0.517045, -0.212531, 0.829127, -0.226691, 0.428114, 0.874813, 0.345531, 0.219123, 0.912442, 0.517045, -0.212531, 0.829127, 0.6957, 0.421827, 0.581378, -0.345531, 0.219123, 0.912442, -0.6957, 0.421827, 0.581378, -0.517045, -0.212531, 0.829127, 0.845119, -0.298502, 0.443403, 0.90698, 0.128941, -0.400922, 0.6957, 0.421827, 0.581378, -0.930204, 0.202338, -0.306192, -0.90698, 0.128941, -0.400922, -0.6957, 0.421827, 0.581378, 0.930204, 0.202338, -0.306192, 0.90698, 0.128941, -0.400922, 0.544328, 0.053316, -0.837153, -0.930204, 0.202338, -0.306192, -0.544328, 0.053316, -0.837153, -0.90698, 0.128941, -0.400922, 0.544328, 0.053316, -0.837153, 0.587481, -0.196966, -0.784875, 0.471969, 0.176794, -0.863674, -0.544328, 0.053316, -0.837153, -0.471969, 0.176794, -0.863674, -0.587481, -0.196966, -0.784875, 0.0, 0.976959, -0.213294, 0.0, 0.636708, -0.771081, 0.277078, 0.907804, -0.314737, -0.689322, 0.278603, -0.668691, 0.0, 0.636708, -0.771081, -0.277078, 0.907804, -0.314737, 0.0, 0.954741, -0.297342, 0.0, 0.976959, -0.213294, 0.151372, 0.976867, -0.150975, -0.277078, 0.907804, -0.314737, 0.0, 0.976959, -0.213294, -0.151372, 0.976867, -0.150975, 0.0, 0.471603, -0.881802, 0.0, 0.954741, -0.297342, 0.067476, 0.618122, -0.783166, -0.151372, 0.976867, -0.150975, 0.0, 0.954741, -0.297342, -0.067476, 0.618122, -0.783166, 0.067476, 0.618122, -0.783166, 0.159551, -0.152898, -0.975249, 0.0, 0.471603, -0.881802, -0.067476, 0.618122, -0.783166, 0.0, 0.471603, -0.881802, -0.159551, -0.152898, -0.975249, 0.555071, 0.681967, -0.476211, 0.526658, -0.161107, -0.834651, 0.067476, 0.618122, -0.783166, -0.555071, 0.681967, -0.476211, -0.067476, 0.618122, -0.783166, -0.526658, -0.161107, -0.834651, 0.62038, 0.779809, 0.083468, 0.945708, -0.197699, -0.257851, 0.555071, 0.681967, -0.476211, -0.62038, 0.779809, 0.083468, -0.555071, 0.681967, -0.476211, -0.945708, -0.197699, -0.257851, 0.779839, 0.625843, -0.010498, 0.972808, -0.208716, 0.100314, 0.62038, 0.779809, 0.083468, -0.779839, 0.625843, -0.010498, -0.62038, 0.779809, 0.083468, -0.972808, -0.208716, 0.100314, 0.779839, 0.625843, -0.010498, 0.62038, 0.779809, 0.083468, 0.277078, 0.907804, -0.314737, -0.779839, 0.625843, -0.010498, -0.277078, 0.907804, -0.314737, -0.62038, 0.779809, 0.083468, 0.62038, 0.779809, 0.083468, 0.555071, 0.681967, -0.476211, 0.151372, 0.976867, -0.150975, -0.067476, 0.618122, -0.783166, -0.555071, 0.681967, -0.476211, -0.151372, 0.976867, -0.150975, 0.895657, 0.362407, 0.257729, 0.779839, 0.625843, -0.010498, 0.689322, 0.278603, -0.668691, -0.277078, 0.907804, -0.314737, -0.779839, 0.625843, -0.010498, -0.689322, 0.278603, -0.668691, 0.895657, 0.362407, 0.257729, 0.955718, -0.156468, 0.249184, 0.779839, 0.625843, -0.010498, -0.895657, 0.362407, 0.257729, -0.779839, 0.625843, -0.010498, -0.955718, -0.156468, 0.249184, 0.927763, -0.120884, 0.353008, 0.978698, -0.061495, -0.195837, 0.930601, -0.126347, 0.343516, -0.887173, -0.433607, -0.15772, -0.978698, -0.061495, -0.195837, -0.930601, -0.126347, 0.343516, 0.955718, -0.156468, 0.249184, 0.895657, 0.362407, 0.257729, 0.927763, -0.120884, 0.353008, -0.978698, -0.061495, -0.195837, -0.895657, 0.362407, 0.257729, -0.927763, -0.120884, 0.353008, 0.891537, -0.309458, -0.330668, 0.930601, -0.126347, 0.343516, 0.785699, -0.236732, -0.571459, -0.887173, -0.433607, -0.15772, -0.930601, -0.126347, 0.343516, -0.785699, -0.236732, -0.571459, 0.891537, -0.309458, -0.330668, 0.785699, -0.236732, -0.571459, 0.348827, 0.008148, -0.937132, -0.471969, 0.176794, -0.863674, -0.785699, -0.236732, -0.571459, -0.348827, 0.008148, -0.937132, 0.0, 0.952361, -0.304941, 0.445479, 0.820399, -0.358348, 0.0, 0.722587, -0.691275, -0.522263, 0.547685, -0.653615, -0.445479, 0.820399, -0.358348, 0.0, 0.722587, -0.691275, 0.0, 0.722587, -0.691275, 0.522263, 0.547685, -0.653615, 0.0, 0.336528, -0.941649, -0.507065, 0.203314, -0.837581, -0.522263, 0.547685, -0.653615, 0.0, 0.336528, -0.941649, 0.0, 0.183294, -0.983032, 0.0, 0.336528, -0.941649, 0.57268, -0.011994, -0.819666, 0.0, 0.183294, -0.983032, -0.57268, -0.011994, -0.819666, 0.0, 0.336528, -0.941649, 0.0, 0.636708, -0.771081, 0.0, 0.183294, -0.983032, 0.689322, 0.278603, -0.668691, 0.0, 0.636708, -0.771081, -0.689322, 0.278603, -0.668691, 0.0, 0.183294, -0.983032, 0.895657, 0.362407, 0.257729, 0.689322, 0.278603, -0.668691, 0.978698, -0.061495, -0.195837, -0.57268, -0.011994, -0.819666, -0.689322, 0.278603, -0.668691, -0.978698, -0.061495, -0.195837, 0.985015, -0.063051, -0.160466, 0.930204, 0.202338, -0.306192, 0.72103, -0.065065, -0.68981, -0.985015, -0.063051, -0.160466, -0.72103, -0.065065, -0.68981, -0.930204, 0.202338, -0.306192, 0.0, 0.930967, 0.365032, 0.473006, 0.863216, 0.176305, 0.0, 0.952361, -0.304941, -0.445479, 0.820399, -0.358348, -0.473006, 0.863216, 0.176305, 0.0, 0.952361, -0.304941, 0.0, -0.55681, 0.830622, 0.444227, -0.527085, 0.724418, 0.0, -0.022584, 0.999725, -0.413495, -0.03946, 0.909635, -0.444227, -0.527085, 0.724418, 0.0, -0.022584, 0.999725, 0.0, 0.551378, 0.834223, 0.0, -0.022584, 0.999725, 0.391247, 0.426832, 0.815271, 0.0, 0.551378, 0.834223, -0.391247, 0.426832, 0.815271, 0.0, -0.022584, 0.999725, 0.0, 0.930967, 0.365032, 0.0, 0.551378, 0.834223, 0.473006, 0.863216, 0.176305, 0.0, 0.930967, 0.365032, -0.473006, 0.863216, 0.176305, 0.0, 0.551378, 0.834223, 0.444411, -0.425031, 0.788537, 0.345531, 0.219123, 0.912442, 0.771722, -0.078494, 0.631062, -0.444411, -0.425031, 0.788537, -0.771722, -0.078494, 0.631062, -0.345531, 0.219123, 0.912442, 0.668172, -0.319498, 0.671865, 0.444411, -0.425031, 0.788537, 0.741752, -0.427839, 0.516434, -0.668172, -0.319498, 0.671865, -0.741752, -0.427839, 0.516434, -0.444411, -0.425031, 0.788537, 0.678396, 0.069521, 0.731376, 0.668172, -0.319498, 0.671865, 0.848628, 0.014008, 0.528764, -0.678396, 0.069521, 0.731376, -0.848628, 0.014008, 0.528764, -0.668172, -0.319498, 0.671865, 0.607532, 0.553575, 0.569567, 0.678396, 0.069521, 0.731376, 0.872158, 0.374645, 0.314554, -0.607532, 0.553575, 0.569567, -0.872158, 0.374645, 0.314554, -0.678396, 0.069521, 0.731376, 0.670766, 0.740257, -0.045289, 0.619648, 0.782525, -0.060457, 0.872158, 0.374645, 0.314554, -0.607532, 0.553575, 0.569567, -0.619648, 0.782525, -0.060457, -0.872158, 0.374645, 0.314554, 0.619648, 0.782525, -0.060457, 0.473006, 0.863216, 0.176305, 0.607532, 0.553575, 0.569567, -0.619648, 0.782525, -0.060457, -0.607532, 0.553575, 0.569567, -0.473006, 0.863216, 0.176305, 0.607532, 0.553575, 0.569567, 0.391247, 0.426832, 0.815271, 0.678396, 0.069521, 0.731376, -0.607532, 0.553575, 0.569567, -0.678396, 0.069521, 0.731376, -0.391247, 0.426832, 0.815271, 0.678396, 0.069521, 0.731376, 0.413495, -0.03946, 0.909635, 0.668172, -0.319498, 0.671865, -0.678396, 0.069521, 0.731376, -0.668172, -0.319498, 0.671865, -0.413495, -0.03946, 0.909635, 0.668172, -0.319498, 0.671865, 0.444227, -0.527085, 0.724418, 0.444411, -0.425031, 0.788537, -0.668172, -0.319498, 0.671865, -0.444411, -0.425031, 0.788537, -0.444227, -0.527085, 0.724418, 0.226691, 0.428114, 0.874813, 0.345531, 0.219123, 0.912442, 0.340648, -0.322306, 0.883206, -0.444411, -0.425031, 0.788537, -0.345531, 0.219123, 0.912442, -0.340648, -0.322306, 0.883206, 0.0, -0.848445, 0.529252, 0.340648, -0.322306, 0.883206, 0.0, -0.55681, 0.830622, -0.444227, -0.527085, 0.724418, -0.340648, -0.322306, 0.883206, 0.0, -0.55681, 0.830622, -0.459304, -0.212592, 0.862453, -0.476638, 0.716392, 0.509445, 0.226691, 0.428114, 0.874813, -0.119297, 0.753807, 0.646138, 0.476638, 0.716392, 0.509445, -0.226691, 0.428114, 0.874813, 0.0, -0.848445, 0.529252, -0.459304, -0.212592, 0.862453, 0.340648, -0.322306, 0.883206, 0.0, -0.848445, 0.529252, -0.340648, -0.322306, 0.883206, 0.459304, -0.212592, 0.862453, 0.6957, 0.421827, 0.581378, 0.930204, 0.202338, -0.306192, 0.771722, -0.078494, 0.631062, -0.985015, -0.063051, -0.160466, -0.930204, 0.202338, -0.306192, -0.771722, -0.078494, 0.631062, 0.771722, -0.078494, 0.631062, 0.985015, -0.063051, -0.160466, 0.741752, -0.427839, 0.516434, -0.771722, -0.078494, 0.631062, -0.741752, -0.427839, 0.516434, -0.985015, -0.063051, -0.160466, 0.741752, -0.427839, 0.516434, 0.997009, 0.069521, -0.033296, 0.848628, 0.014008, 0.528764, -0.741752, -0.427839, 0.516434, -0.848628, 0.014008, 0.528764, -0.997009, 0.069521, -0.033296, 0.670766, 0.740257, -0.045289, 0.872158, 0.374645, 0.314554, 0.908536, -0.352489, 0.224219, -0.848628, 0.014008, 0.528764, -0.872158, 0.374645, 0.314554, -0.908536, -0.352489, 0.224219, 0.57268, -0.011994, -0.819666, 0.507065, 0.203314, -0.837581, 0.579028, -0.142705, -0.802698, -0.56328, 0.121311, -0.817286, -0.507065, 0.203314, -0.837581, -0.579028, -0.142705, -0.802698, 0.72103, -0.065065, -0.68981, 0.579028, -0.142705, -0.802698, 0.312296, -0.00116, -0.94995, -0.56328, 0.121311, -0.817286, -0.579028, -0.142705, -0.802698, -0.312296, -0.00116, -0.94995, 0.72103, -0.065065, -0.68981, 0.544328, 0.053316, -0.837153, 0.579028, -0.142705, -0.802698, -0.72103, -0.065065, -0.68981, -0.579028, -0.142705, -0.802698, -0.544328, 0.053316, -0.837153, 0.579028, -0.142705, -0.802698, 0.471969, 0.176794, -0.863674, 0.978698, -0.061495, -0.195837, -0.579028, -0.142705, -0.802698, -0.978698, -0.061495, -0.195837, -0.471969, 0.176794, -0.863674, 0.670766, 0.740257, -0.045289, 0.32551, 0.728355, -0.602924, 0.619648, 0.782525, -0.060457, -0.529221, 0.681722, -0.505112, -0.32551, 0.728355, -0.602924, -0.619648, 0.782525, -0.060457, 0.473006, 0.863216, 0.176305, 0.619648, 0.782525, -0.060457, 0.445479, 0.820399, -0.358348, -0.529221, 0.681722, -0.505112, -0.619648, 0.782525, -0.060457, -0.445479, 0.820399, -0.358348, 0.312296, -0.00116, -0.94995, 0.56328, 0.121311, -0.817286, 0.32551, 0.728355, -0.602924, -0.529221, 0.681722, -0.505112, -0.56328, 0.121311, -0.817286, -0.32551, 0.728355, -0.602924, 0.507065, 0.203314, -0.837581, 0.522263, 0.547685, -0.653615, 0.56328, 0.121311, -0.817286, -0.529221, 0.681722, -0.505112, -0.522263, 0.547685, -0.653615, -0.56328, 0.121311, -0.817286, 0.018799, -0.488632, 0.87225, -0.279244, -0.575884, 0.768303, 0.551164, -0.830622, -0.078768, -0.449232, -0.892575, -0.038331, 0.279244, -0.575884, 0.768303, -0.551164, -0.830622, -0.078768, 0.383557, -0.328776, 0.862972, 0.018799, -0.488632, 0.87225, 0.321451, -0.942381, -0.092318, -0.383557, -0.328776, 0.862972, -0.321451, -0.942381, -0.092318, -0.018799, -0.488632, 0.87225, 0.383557, -0.328776, 0.862972, 0.321451, -0.942381, -0.092318, 0.778802, -0.604389, 0.167791, 0.154454, -0.980193, -0.123875, -0.321451, -0.942381, -0.092318, -0.778802, -0.604389, 0.167791, 0.778802, -0.604389, 0.167791, -0.154454, -0.980193, -0.123875, 0.652608, -0.588794, -0.476821, 0.041108, -0.949553, 0.310831, 0.154454, -0.980193, -0.123875, -0.652608, -0.588794, -0.476821, 0.652608, -0.588794, -0.476821, -0.041108, -0.949553, 0.310831, 0.502884, -0.370312, -0.780999, -0.538377, -0.789239, 0.295267, 0.041108, -0.949553, 0.310831, -0.502884, -0.370312, -0.780999, 0.029542, -0.771905, -0.634999, 0.502884, -0.370312, -0.780999, 0.329936, -0.889645, 0.315653, -0.029542, -0.771905, -0.634999, -0.329936, -0.889645, 0.315653, -0.502884, -0.370312, -0.780999, 0.329936, -0.889645, 0.315653, 0.538377, -0.789239, 0.295267, 0.162877, -0.487014, 0.858028, -0.329936, -0.889645, 0.315653, -0.162877, -0.487014, 0.858028, -0.538377, -0.789239, 0.295267, 0.538377, -0.789239, 0.295267, -0.041108, -0.949553, 0.310831, -0.186804, -0.235084, 0.953825, -0.538377, -0.789239, 0.295267, 0.186804, -0.235084, 0.953825, 0.041108, -0.949553, 0.310831, -0.154454, -0.980193, -0.123875, -0.984741, -0.142613, -0.099582, -0.041108, -0.949553, 0.310831, 0.762139, 0.019318, 0.647084, 0.984741, -0.142613, -0.099582, 0.041108, -0.949553, 0.310831, 0.321451, -0.942381, -0.092318, -0.149571, -0.649464, -0.745506, -0.154454, -0.980193, -0.123875, 0.984741, -0.142613, -0.099582, 0.149571, -0.649464, -0.745506, 0.154454, -0.980193, -0.123875, 0.551164, -0.830622, -0.078768, 0.560442, -0.4991, -0.660878, 0.321451, -0.942381, -0.092318, 0.149571, -0.649464, -0.745506, -0.560442, -0.4991, -0.660878, -0.321451, -0.942381, -0.092318, 0.560442, -0.4991, -0.660878, 0.551164, -0.830622, -0.078768, 0.684194, -0.472182, -0.555773, -0.560442, -0.4991, -0.660878, -0.684194, -0.472182, -0.555773, -0.551164, -0.830622, -0.078768, 0.72103, -0.065065, -0.68981, 0.312296, -0.00116, -0.94995, 0.857204, 0.148289, -0.493118, -0.731193, -0.672475, 0.114414, -0.312296, -0.00116, -0.94995, -0.857204, 0.148289, -0.493118, 0.312296, -0.00116, -0.94995, 0.029542, -0.771905, -0.634999, 0.731193, -0.672475, 0.114414, -0.329936, -0.889645, 0.315653, -0.029542, -0.771905, -0.634999, -0.731193, -0.672475, 0.114414, 0.997009, 0.069521, -0.033296, 0.985015, -0.063051, -0.160466, 0.857204, 0.148289, -0.493118, -0.997009, 0.069521, -0.033296, -0.857204, 0.148289, -0.493118, -0.985015, -0.063051, -0.160466, -0.279244, -0.575884, 0.768303, 0.908536, -0.352489, 0.224219, 0.449232, -0.892575, -0.038331, 0.279244, -0.575884, 0.768303, -0.449232, -0.892575, -0.038331, -0.908536, -0.352489, 0.224219, 0.731193, -0.672475, 0.114414, 0.329936, -0.889645, 0.315653, 0.599841, -0.61388, 0.513138, -0.731193, -0.672475, 0.114414, -0.599841, -0.61388, 0.513138, -0.329936, -0.889645, 0.315653, 0.842036, -0.509781, -0.176244, 0.960936, -0.249855, -0.118839, 0.599841, -0.61388, 0.513138, -0.731193, -0.672475, 0.114414, -0.960936, -0.249855, -0.118839, -0.599841, -0.61388, 0.513138, 0.481368, -0.604816, 0.634388, 0.851466, -0.522752, 0.041353, 0.842036, -0.509781, -0.176244, -0.481368, -0.604816, 0.634388, -0.842036, -0.509781, -0.176244, -0.851466, -0.522752, 0.041353, 0.686361, -0.374554, -0.623371, 0.848354, -0.301157, -0.435377, 0.851466, -0.522752, 0.041353, -0.960936, -0.249855, -0.118839, -0.848354, -0.301157, -0.435377, -0.851466, -0.522752, 0.041353, 0.372723, -0.900449, -0.224158, 0.848354, -0.301157, -0.435377, 0.726066, -0.473128, -0.498917, -0.686361, -0.374554, -0.623371, -0.848354, -0.301157, -0.435377, -0.726066, -0.473128, -0.498917, 0.449232, -0.892575, -0.038331, 0.372723, -0.900449, -0.224158, 0.684194, -0.472182, -0.555773, -0.726066, -0.473128, -0.498917, -0.372723, -0.900449, -0.224158, -0.684194, -0.472182, -0.555773, 0.997009, 0.069521, -0.033296, 0.848354, -0.301157, -0.435377, 0.908536, -0.352489, 0.224219, -0.372723, -0.900449, -0.224158, -0.848354, -0.301157, -0.435377, -0.908536, -0.352489, 0.224219, 0.997009, 0.069521, -0.033296, 0.857204, 0.148289, -0.493118, 0.848354, -0.301157, -0.435377, -0.960936, -0.249855, -0.118839, -0.857204, 0.148289, -0.493118, -0.848354, -0.301157, -0.435377, 0.648213, -0.634724, -0.420576, 0.684194, -0.472182, -0.555773, 0.659291, -0.588061, -0.46849, -0.648213, -0.634724, -0.420576, -0.659291, -0.588061, -0.46849, -0.684194, -0.472182, -0.555773, 0.726066, -0.473128, -0.498917, 0.686361, -0.374554, -0.623371, 0.659291, -0.588061, -0.46849, -0.572527, -0.704733, -0.418928, -0.686361, -0.374554, -0.623371, -0.659291, -0.588061, -0.46849, 0.572527, -0.704733, -0.418928, 0.686361, -0.374554, -0.623371, 0.758354, -0.594806, 0.266518, -0.572527, -0.704733, -0.418928, -0.758354, -0.594806, 0.266518, -0.686361, -0.374554, -0.623371, 0.851466, -0.522752, 0.041353, 0.481368, -0.604816, 0.634388, 0.758354, -0.594806, 0.266518, -0.449232, -0.808618, 0.379864, -0.481368, -0.604816, 0.634388, -0.758354, -0.594806, 0.266518, 0.481368, -0.604816, 0.634388, 0.842036, -0.509781, -0.176244, 0.449232, -0.808618, 0.379864, -0.292917, -0.881222, 0.370922, -0.842036, -0.509781, -0.176244, -0.449232, -0.808618, 0.379864, 0.292917, -0.881222, 0.370922, 0.842036, -0.509781, -0.176244, 0.644978, -0.698386, 0.310129, -0.292917, -0.881222, 0.370922, -0.644978, -0.698386, 0.310129, -0.842036, -0.509781, -0.176244, 0.644978, -0.698386, 0.310129, 0.599841, -0.61388, 0.513138, -0.033113, -0.325602, 0.944914, -0.644978, -0.698386, 0.310129, 0.033113, -0.325602, 0.944914, -0.599841, -0.61388, 0.513138, 0.461776, -0.823664, -0.329142, 0.560442, -0.4991, -0.660878, 0.648213, -0.634724, -0.420576, -0.461776, -0.823664, -0.329142, -0.648213, -0.634724, -0.420576, -0.560442, -0.4991, -0.660878, -0.262398, -0.804346, -0.533067, -0.149571, -0.649464, -0.745506, 0.461776, -0.823664, -0.329142, 0.262398, -0.804346, -0.533067, -0.461776, -0.823664, -0.329142, 0.149571, -0.649464, -0.745506, -0.752861, -0.657277, -0.033784, -0.984741, -0.142613, -0.099582, -0.262398, -0.804346, -0.533067, 0.752861, -0.657277, -0.033784, 0.262398, -0.804346, -0.533067, 0.984741, -0.142613, -0.099582, -0.762139, 0.019318, 0.647084, -0.984741, -0.142613, -0.099582, -0.583117, -0.640339, 0.499893, 0.752861, -0.657277, -0.033784, 0.984741, -0.142613, -0.099582, 0.583117, -0.640339, 0.499893, -0.186804, -0.235084, 0.953825, -0.762139, 0.019318, 0.647084, 0.065004, -0.707358, 0.703848, 0.583117, -0.640339, 0.499893, 0.762139, 0.019318, 0.647084, -0.065004, -0.707358, 0.703848, 0.162877, -0.487014, 0.858028, -0.186804, -0.235084, 0.953825, -0.033113, -0.325602, 0.944914, -0.065004, -0.707358, 0.703848, 0.186804, -0.235084, 0.953825, 0.033113, -0.325602, 0.944914, 0.449232, -0.808618, 0.379864, 0.292917, -0.881222, 0.370922, 0.195105, -0.97998, 0.038942, -0.408429, -0.903836, 0.127262, -0.292917, -0.881222, 0.370922, -0.195105, -0.97998, 0.038942, 0.195105, -0.97998, 0.038942, 0.408429, -0.903836, 0.127262, 0.334666, -0.942289, -0.004578, -0.444807, -0.890683, -0.093692, -0.408429, -0.903836, 0.127262, -0.334666, -0.942289, -0.004578, 0.3343, -0.936369, 0.106784, 0.334666, -0.942289, -0.004578, 0.314371, -0.943602, -0.103732, -0.3343, -0.936369, 0.106784, -0.314371, -0.943602, -0.103732, -0.334666, -0.942289, -0.004578, 0.3343, -0.936369, 0.106784, 0.314371, -0.943602, -0.103732, 0.289651, -0.9035, 0.315806, -0.383129, -0.92114, -0.068514, -0.314371, -0.943602, -0.103732, -0.289651, -0.9035, 0.315806, 0.289651, -0.9035, 0.315806, 0.461776, -0.823664, -0.329142, 0.3343, -0.936369, 0.106784, -0.289651, -0.9035, 0.315806, -0.3343, -0.936369, 0.106784, -0.461776, -0.823664, -0.329142, 0.659291, -0.588061, -0.46849, 0.334666, -0.942289, -0.004578, 0.648213, -0.634724, -0.420576, -0.3343, -0.936369, 0.106784, -0.334666, -0.942289, -0.004578, -0.648213, -0.634724, -0.420576, 0.659291, -0.588061, -0.46849, 0.572527, -0.704733, -0.418928, 0.334666, -0.942289, -0.004578, -0.195105, -0.97998, 0.038942, -0.572527, -0.704733, -0.418928, -0.334666, -0.942289, -0.004578, 0.758354, -0.594806, 0.266518, 0.449232, -0.808618, 0.379864, 0.572527, -0.704733, -0.418928, -0.758354, -0.594806, 0.266518, -0.572527, -0.704733, -0.418928, -0.449232, -0.808618, 0.379864, 0.644978, -0.698386, 0.310129, -0.033113, -0.325602, 0.944914, 0.292917, -0.881222, 0.370922, -0.408429, -0.903836, 0.127262, 0.033113, -0.325602, 0.944914, -0.292917, -0.881222, 0.370922, -0.033113, -0.325602, 0.944914, 0.065004, -0.707358, 0.703848, 0.408429, -0.903836, 0.127262, 0.033113, -0.325602, 0.944914, -0.408429, -0.903836, 0.127262, -0.065004, -0.707358, 0.703848, -0.583117, -0.640339, 0.499893, 0.314371, -0.943602, -0.103732, 0.065004, -0.707358, 0.703848, -0.444807, -0.890683, -0.093692, -0.314371, -0.943602, -0.103732, -0.065004, -0.707358, 0.703848, -0.752861, -0.657277, -0.033784, 0.383129, -0.92114, -0.068514, -0.583117, -0.640339, 0.499893, -0.314371, -0.943602, -0.103732, -0.383129, -0.92114, -0.068514, 0.583117, -0.640339, 0.499893, -0.752861, -0.657277, -0.033784, -0.262398, -0.804346, -0.533067, 0.383129, -0.92114, -0.068514, 0.752861, -0.657277, -0.033784, -0.383129, -0.92114, -0.068514, 0.262398, -0.804346, -0.533067, -0.025269, 0.733116, -0.679586, 0.502884, -0.370312, -0.780999, -0.098849, 0.532151, -0.840846, 0.025269, 0.733116, -0.679586, 0.098849, 0.532151, -0.840846, -0.502884, -0.370312, -0.780999, 0.636586, 0.583392, -0.504318, 0.652608, -0.588794, -0.476821, -0.025269, 0.733116, -0.679586, -0.636586, 0.583392, -0.504318, 0.025269, 0.733116, -0.679586, -0.652608, -0.588794, -0.476821, 0.778802, -0.604389, 0.167791, 0.652608, -0.588794, -0.476821, 0.92526, 0.367992, 0.09183, -0.636586, 0.583392, -0.504318, -0.652608, -0.588794, -0.476821, -0.92526, 0.367992, 0.09183, 0.383557, -0.328776, 0.862972, 0.778802, -0.604389, 0.167791, 0.286996, 0.748497, 0.597766, -0.92526, 0.367992, 0.09183, -0.778802, -0.604389, 0.167791, -0.286996, 0.748497, 0.597766, 0.018799, -0.488632, 0.87225, 0.383557, -0.328776, 0.862972, -0.414228, 0.724479, 0.55089, -0.286996, 0.748497, 0.597766, -0.383557, -0.328776, 0.862972, 0.414228, 0.724479, 0.55089, -0.279244, -0.575884, 0.768303, 0.018799, -0.488632, 0.87225, -0.650044, 0.485336, 0.584643, 0.414228, 0.724479, 0.55089, -0.018799, -0.488632, 0.87225, 0.650044, 0.485336, 0.584643, -0.414228, 0.724479, 0.55089, -0.025269, 0.733116, -0.679586, -0.650044, 0.485336, 0.584643, 0.098849, 0.532151, -0.840846, 0.025269, 0.733116, -0.679586, 0.650044, 0.485336, 0.584643, -0.025269, 0.733116, -0.679586, -0.414228, 0.724479, 0.55089, 0.636586, 0.583392, -0.504318, 0.025269, 0.733116, -0.679586, -0.636586, 0.583392, -0.504318, 0.414228, 0.724479, 0.55089, 0.670766, 0.740257, -0.045289, 0.908536, -0.352489, 0.224219, -0.650044, 0.485336, 0.584643, 0.279244, -0.575884, 0.768303, -0.908536, -0.352489, 0.224219, 0.650044, 0.485336, 0.584643, 0.32551, 0.728355, -0.602924, 0.670766, 0.740257, -0.045289, -0.098849, 0.532151, -0.840846, -0.32551, 0.728355, -0.602924, 0.098849, 0.532151, -0.840846, -0.670766, 0.740257, -0.045289, 0.029542, -0.771905, -0.634999, 0.312296, -0.00116, -0.94995, -0.098849, 0.532151, -0.840846, -0.029542, -0.771905, -0.634999, 0.098849, 0.532151, -0.840846, -0.312296, -0.00116, -0.94995],

    "colors": [0.184314, 0.235294, 0.662745, 0.082353, 0.121569, 0.407843, 0.380392, 0.392157, 0.478431, 0.109804, 0.14902, 0.478431, 0.082353, 0.121569, 0.407843, 0.160784, 0.215686, 0.662745, 0.662745, 0.662745, 0.662745, 0.384314, 0.396078, 0.478431, 0.462745, 0.462745, 0.462745, 0.462745, 0.462745, 0.462745, 0.478431, 0.478431, 0.478431, 0.662745, 0.662745, 0.662745, 0.478431, 0.478431, 0.478431, 0.34902, 0.34902, 0.34902, 0.254902, 0.254902, 0.254902, 0.254902, 0.254902, 0.254902, 0.34902, 0.34902, 0.34902, 0.478431, 0.478431, 0.478431, 0.082353, 0.121569, 0.407843, 0.011765, 0.015686, 0.121569, 0.066667, 0.098039, 0.34902, 0.121569, 0.14902, 0.34902, 0.011765, 0.015686, 0.121569, 0.082353, 0.121569, 0.407843, 0.011765, 0.015686, 0.121569, 0.078431, 0.113725, 0.384314, 0.101961, 0.141176, 0.466667, 0.4, 0.407843, 0.466667, 0.078431, 0.113725, 0.384314, 0.011765, 0.015686, 0.121569, 0.066667, 0.098039, 0.34902, 0.101961, 0.141176, 0.466667, 0.090196, 0.129412, 0.419608, 0.419608, 0.419608, 0.419608, 0.4, 0.407843, 0.466667, 0.121569, 0.14902, 0.34902, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.419608, 0.419608, 0.419608, 0.662745, 0.662745, 0.662745, 0.466667, 0.466667, 0.466667, 0.419608, 0.419608, 0.419608, 0.160784, 0.215686, 0.662745, 0.188235, 0.243137, 0.662745, 0.101961, 0.141176, 0.466667, 0.160784, 0.215686, 0.662745, 0.078431, 0.113725, 0.384314, 0.4, 0.407843, 0.466667, 0.160784, 0.215686, 0.662745, 0.215686, 0.286275, 0.843137, 0.262745, 0.321569, 0.815686, 0.639216, 0.658824, 0.815686, 0.215686, 0.286275, 0.843137, 0.160784, 0.215686, 0.662745, 0.815686, 0.815686, 0.815686, 0.882353, 0.882353, 0.882353, 0.662745, 0.662745, 0.662745, 0.815686, 0.815686, 0.815686, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.854902, 0.854902, 0.854902, 0.929412, 0.929412, 0.929412, 0.882353, 0.882353, 0.882353, 0.854902, 0.854902, 0.854902, 0.815686, 0.815686, 0.815686, 0.882353, 0.882353, 0.882353, 0.231373, 0.305882, 0.901961, 0.356863, 0.415686, 0.854902, 0.262745, 0.321569, 0.815686, 0.231373, 0.305882, 0.901961, 0.215686, 0.286275, 0.843137, 0.639216, 0.658824, 0.815686, 0.219608, 0.290196, 0.831373, 0.827451, 0.827451, 0.831373, 0.356863, 0.415686, 0.854902, 0.211765, 0.282353, 0.831373, 0.231373, 0.305882, 0.901961, 0.521569, 0.564706, 0.854902, 0.831373, 0.831373, 0.831373, 0.858824, 0.858824, 0.858824, 0.929412, 0.929412, 0.929412, 0.831373, 0.831373, 0.831373, 0.854902, 0.854902, 0.854902, 0.929412, 0.929412, 0.929412, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.858824, 0.858824, 0.858824, 0.317647, 0.356863, 0.662745, 0.607843, 0.635294, 0.831373, 0.854902, 0.854902, 0.858824, 0.184314, 0.235294, 0.662745, 0.662745, 0.662745, 0.662745, 0.827451, 0.827451, 0.831373, 0.160784, 0.215686, 0.662745, 0.211765, 0.282353, 0.831373, 0.607843, 0.635294, 0.831373, 0.831373, 0.831373, 0.831373, 0.831373, 0.831373, 0.831373, 0.662745, 0.662745, 0.662745, 0.831373, 0.831373, 0.831373, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.901961, 0.901961, 0.901961, 0.894118, 0.894118, 0.894118, 0.831373, 0.831373, 0.831373, 0.901961, 0.901961, 0.901961, 0.831373, 0.831373, 0.831373, 0.831373, 0.831373, 0.831373, 0.843137, 0.843137, 0.843137, 0.831373, 0.831373, 0.831373, 0.894118, 0.894118, 0.894118, 0.843137, 0.843137, 0.843137, 0.901961, 0.901961, 0.901961, 0.894118, 0.894118, 0.894118, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.831373, 0.831373, 0.831373, 0.662745, 0.662745, 0.662745, 0.843137, 0.843137, 0.843137, 0.831373, 0.831373, 0.831373, 0.662745, 0.662745, 0.662745, 0.384314, 0.384314, 0.384314, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.384314, 0.384314, 0.384314, 0.662745, 0.662745, 0.662745, 0.384314, 0.384314, 0.384314, 0.121569, 0.121569, 0.121569, 0.176471, 0.176471, 0.176471, 0.176471, 0.176471, 0.176471, 0.121569, 0.121569, 0.121569, 0.384314, 0.384314, 0.384314, 0.121569, 0.121569, 0.121569, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.121569, 0.121569, 0.121569, 0.407843, 0.407843, 0.407843, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.407843, 0.407843, 0.407843, 0.160784, 0.215686, 0.662745, 0.086275, 0.121569, 0.407843, 0.215686, 0.262745, 0.662745, 0.160784, 0.215686, 0.662745, 0.082353, 0.121569, 0.407843, 0.160784, 0.215686, 0.662745, 0.019608, 0.031373, 0.176471, 0.086275, 0.121569, 0.407843, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.082353, 0.121569, 0.407843, 0.019608, 0.031373, 0.176471, 0.160784, 0.215686, 0.662745, 0.086275, 0.121569, 0.407843, 0.019608, 0.031373, 0.176471, 0.019608, 0.031373, 0.176471, 0.086275, 0.121569, 0.407843, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.086275, 0.121569, 0.407843, 0.086275, 0.121569, 0.407843, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.211765, 0.282353, 0.831373, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.211765, 0.282353, 0.831373, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.231373, 0.305882, 0.894118, 0.211765, 0.282353, 0.831373, 0.211765, 0.282353, 0.831373, 0.231373, 0.305882, 0.894118, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.231373, 0.298039, 0.831373, 0.231373, 0.305882, 0.894118, 0.231373, 0.305882, 0.894118, 0.215686, 0.286275, 0.831373, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.215686, 0.262745, 0.662745, 0.231373, 0.298039, 0.831373, 0.215686, 0.286275, 0.831373, 0.160784, 0.215686, 0.662745, 0.160784, 0.215686, 0.662745, 0.345098, 0.345098, 0.345098, 0.317647, 0.317647, 0.317647, 0.094118, 0.094118, 0.094118, 0.345098, 0.345098, 0.345098, 0.101961, 0.101961, 0.101961, 0.094118, 0.094118, 0.094118, 0.427451, 0.427451, 0.427451, 0.345098, 0.345098, 0.345098, 0.101961, 0.101961, 0.101961, 0.427451, 0.427451, 0.427451, 0.352941, 0.352941, 0.352941, 0.101961, 0.101961, 0.101961, 0.619608, 0.619608, 0.619608, 0.596078, 0.596078, 0.596078, 0.427451, 0.427451, 0.427451, 0.427451, 0.427451, 0.427451, 0.596078, 0.596078, 0.596078, 0.619608, 0.619608, 0.619608, 0.694118, 0.694118, 0.694118, 0.654902, 0.65098, 0.607843, 0.596078, 0.596078, 0.596078, 0.596078, 0.596078, 0.596078, 0.654902, 0.647059, 0.564706, 0.694118, 0.694118, 0.694118, 0.72549, 0.72549, 0.72549, 0.698039, 0.698039, 0.698039, 0.654902, 0.65098, 0.607843, 0.654902, 0.647059, 0.564706, 0.698039, 0.694118, 0.627451, 0.72549, 0.72549, 0.72549, 0.533333, 0.533333, 0.533333, 0.180392, 0.180392, 0.180392, 0.423529, 0.427451, 0.47451, 0.458824, 0.458824, 0.47451, 0.180392, 0.180392, 0.180392, 0.533333, 0.533333, 0.52549, 0.321569, 0.321569, 0.321569, 0.52549, 0.52549, 0.52549, 0.423529, 0.427451, 0.47451, 0.321569, 0.321569, 0.321569, 0.180392, 0.180392, 0.180392, 0.458824, 0.458824, 0.47451, 0.321569, 0.321569, 0.321569, 0.52549, 0.52549, 0.52549, 0.556863, 0.556863, 0.556863, 0.556863, 0.556863, 0.556863, 0.52549, 0.52549, 0.52549, 0.321569, 0.321569, 0.321569, 0.819608, 0.819608, 0.819608, 0.619608, 0.619608, 0.619608, 0.556863, 0.556863, 0.556863, 0.819608, 0.819608, 0.819608, 0.52549, 0.52549, 0.52549, 0.556863, 0.556863, 0.556863, 0.94902, 0.94902, 0.94902, 0.654902, 0.654902, 0.654902, 0.619608, 0.619608, 0.619608, 0.94902, 0.94902, 0.94902, 0.819608, 0.819608, 0.819608, 0.619608, 0.619608, 0.619608, 0.937255, 0.937255, 0.937255, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.937255, 0.937255, 0.937255, 0.94902, 0.94902, 0.94902, 0.654902, 0.654902, 0.654902, 0.937255, 0.937255, 0.937255, 0.992157, 0.992157, 0.992157, 0.745098, 0.745098, 0.745098, 0.745098, 0.745098, 0.745098, 0.992157, 0.992157, 0.992157, 0.937255, 0.937255, 0.937255, 0.945098, 0.945098, 0.945098, 0.72549, 0.72549, 0.72549, 0.745098, 0.745098, 0.745098, 0.945098, 0.945098, 0.945098, 0.992157, 0.992157, 0.992157, 0.745098, 0.745098, 0.745098, 0.882353, 0.882353, 0.882353, 0.654902, 0.654902, 0.654902, 0.72549, 0.72549, 0.72549, 0.882353, 0.882353, 0.882353, 0.945098, 0.945098, 0.945098, 0.72549, 0.72549, 0.72549, 0.988235, 0.988235, 0.988235, 0.658824, 0.658824, 0.658824, 0.654902, 0.654902, 0.654902, 0.988235, 0.988235, 0.988235, 0.882353, 0.882353, 0.882353, 0.654902, 0.654902, 0.654902, 0.458824, 0.478431, 0.627451, 0.72549, 0.72549, 0.72549, 0.654902, 0.654902, 0.654902, 0.572549, 0.580392, 0.627451, 0.592157, 0.592157, 0.6, 0.654902, 0.654902, 0.654902, 0.458824, 0.478431, 0.627451, 0.388235, 0.415686, 0.635294, 0.745098, 0.745098, 0.745098, 0.745098, 0.745098, 0.745098, 0.529412, 0.541176, 0.635294, 0.572549, 0.580392, 0.627451, 0.654902, 0.654902, 0.654902, 0.745098, 0.745098, 0.745098, 0.388235, 0.415686, 0.635294, 0.654902, 0.654902, 0.654902, 0.458824, 0.482353, 0.662745, 0.529412, 0.541176, 0.635294, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.541176, 0.552941, 0.662745, 0.654902, 0.654902, 0.654902, 0.564706, 0.564706, 0.564706, 0.458824, 0.482353, 0.662745, 0.619608, 0.619608, 0.619608, 0.654902, 0.654902, 0.654902, 0.564706, 0.564706, 0.564706, 0.619608, 0.619608, 0.619608, 0.596078, 0.596078, 0.596078, 0.564706, 0.564706, 0.564706, 0.556863, 0.556863, 0.556863, 0.619608, 0.619608, 0.619608, 0.596078, 0.596078, 0.596078, 0.556863, 0.556863, 0.556863, 0.572549, 0.576471, 0.6, 0.596078, 0.596078, 0.596078, 0.52549, 0.52549, 0.52549, 0.556863, 0.556863, 0.556863, 0.6, 0.6, 0.6, 0.505882, 0.505882, 0.52549, 0.137255, 0.180392, 0.533333, 0.572549, 0.576471, 0.6, 0.423529, 0.427451, 0.478431, 0.52549, 0.52549, 0.52549, 0.443137, 0.45098, 0.533333, 0.458824, 0.458824, 0.478431, 0.262745, 0.294118, 0.54902, 0.137255, 0.180392, 0.533333, 0.141176, 0.192157, 0.596078, 0.603922, 0.603922, 0.6, 0.423529, 0.427451, 0.478431, 0.458824, 0.458824, 0.478431, 0.603922, 0.6, 0.556863, 0.513726, 0.521569, 0.596078, 0.141176, 0.192157, 0.596078, 0.14902, 0.2, 0.611765, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.588235, 0.588235, 0.611765, 0.513726, 0.521569, 0.596078, 0.654902, 0.654902, 0.654902, 0.658824, 0.658824, 0.658824, 0.388235, 0.411765, 0.6, 0.654902, 0.654902, 0.654902, 0.592157, 0.592157, 0.6, 0.6, 0.6, 0.6, 0.388235, 0.411765, 0.6, 0.658824, 0.658824, 0.658824, 0.592157, 0.592157, 0.592157, 0.592157, 0.592157, 0.592157, 0.658824, 0.658824, 0.658824, 0.6, 0.6, 0.6, 0.14902, 0.2, 0.611765, 0.207843, 0.254902, 0.6, 0.592157, 0.592157, 0.592157, 0.588235, 0.588235, 0.611765, 0.670588, 0.670588, 0.670588, 0.592157, 0.592157, 0.592157, 0.521569, 0.505882, 0.337255, 0.552941, 0.533333, 0.321569, 0.317647, 0.313726, 0.270588, 0.317647, 0.313726, 0.270588, 0.552941, 0.533333, 0.321569, 0.521569, 0.509804, 0.384314, 0.556863, 0.533333, 0.282353, 0.521569, 0.505882, 0.337255, 0.345098, 0.345098, 0.345098, 0.34902, 0.34902, 0.345098, 0.521569, 0.509804, 0.384314, 0.556863, 0.545098, 0.403922, 0.556863, 0.533333, 0.282353, 0.427451, 0.427451, 0.427451, 0.596078, 0.596078, 0.596078, 0.556863, 0.545098, 0.403922, 0.611765, 0.572549, 0.211765, 0.596078, 0.596078, 0.596078, 0.698039, 0.698039, 0.698039, 0.666667, 0.627451, 0.27451, 0.647059, 0.607843, 0.223529, 0.647059, 0.607843, 0.223529, 0.666667, 0.627451, 0.231373, 0.698039, 0.690196, 0.627451, 0.611765, 0.572549, 0.211765, 0.596078, 0.596078, 0.596078, 0.654902, 0.65098, 0.607843, 0.654902, 0.647059, 0.560784, 0.596078, 0.596078, 0.596078, 0.611765, 0.572549, 0.211765, 0.501961, 0.470588, 0.168627, 0.662745, 0.623529, 0.231373, 0.666667, 0.627451, 0.27451, 0.501961, 0.470588, 0.168627, 0.513726, 0.482353, 0.172549, 0.666667, 0.627451, 0.231373, 0.666667, 0.627451, 0.27451, 0.662745, 0.623529, 0.231373, 0.654902, 0.615686, 0.227451, 0.666667, 0.627451, 0.231373, 0.647059, 0.607843, 0.223529, 0.654902, 0.615686, 0.227451, 0.611765, 0.572549, 0.211765, 0.647059, 0.607843, 0.223529, 0.654902, 0.615686, 0.227451, 0.611765, 0.572549, 0.211765, 0.517647, 0.486275, 0.172549, 0.654902, 0.615686, 0.227451, 0.541176, 0.541176, 0.541176, 0.596078, 0.596078, 0.596078, 0.360784, 0.360784, 0.360784, 0.360784, 0.360784, 0.360784, 0.596078, 0.596078, 0.596078, 0.541176, 0.541176, 0.541176, 0.858824, 0.858824, 0.858824, 0.596078, 0.596078, 0.596078, 0.541176, 0.541176, 0.541176, 0.858824, 0.858824, 0.858824, 0.760784, 0.760784, 0.760784, 0.541176, 0.541176, 0.541176, 0.894118, 0.894118, 0.894118, 0.858824, 0.858824, 0.858824, 0.760784, 0.760784, 0.760784, 0.894118, 0.894118, 0.894118, 0.823529, 0.823529, 0.823529, 0.760784, 0.760784, 0.760784, 0.862745, 0.811765, 0.309804, 0.894118, 0.85098, 0.419608, 0.823529, 0.772549, 0.305882, 0.862745, 0.811765, 0.309804, 0.854902, 0.803922, 0.305882, 0.819608, 0.772549, 0.305882, 0.513726, 0.513726, 0.513726, 0.360784, 0.360784, 0.360784, 0.266667, 0.266667, 0.266667, 0.513726, 0.513726, 0.513726, 0.501961, 0.501961, 0.501961, 0.266667, 0.266667, 0.266667, 0.360784, 0.337255, 0.117647, 0.454902, 0.427451, 0.14902, 0.470588, 0.443137, 0.152941, 0.360784, 0.337255, 0.113725, 0.266667, 0.247059, 0.070588, 0.470588, 0.443137, 0.152941, 0.862745, 0.811765, 0.309804, 0.698039, 0.654902, 0.243137, 0.819608, 0.772549, 0.298039, 0.819608, 0.772549, 0.294118, 0.698039, 0.654902, 0.243137, 0.862745, 0.811765, 0.309804, 0.894118, 0.85098, 0.419608, 0.823529, 0.772549, 0.298039, 0.792157, 0.756863, 0.415686, 0.792157, 0.74902, 0.305882, 0.823529, 0.772549, 0.294118, 0.894118, 0.847059, 0.352941, 0.792157, 0.756863, 0.415686, 0.607843, 0.572549, 0.25098, 0.596078, 0.580392, 0.411765, 0.792157, 0.74902, 0.305882, 0.858824, 0.831373, 0.556863, 0.596078, 0.572549, 0.313726, 0.596078, 0.580392, 0.407843, 0.607843, 0.572549, 0.25098, 0.454902, 0.427451, 0.14902, 0.454902, 0.427451, 0.14902, 0.607843, 0.572549, 0.227451, 0.596078, 0.572549, 0.313726, 0.607843, 0.572549, 0.25098, 0.792157, 0.756863, 0.415686, 0.819608, 0.772549, 0.298039, 0.607843, 0.572549, 0.227451, 0.698039, 0.654902, 0.243137, 0.819608, 0.772549, 0.294118, 0.698039, 0.654902, 0.243137, 0.470588, 0.443137, 0.152941, 0.454902, 0.427451, 0.14902, 0.454902, 0.427451, 0.14902, 0.470588, 0.443137, 0.152941, 0.698039, 0.654902, 0.243137, 0.823529, 0.772549, 0.305882, 0.760784, 0.74902, 0.623529, 0.603922, 0.603922, 0.6, 0.603922, 0.6, 0.556863, 0.760784, 0.729412, 0.392157, 0.823529, 0.772549, 0.305882, 0.760784, 0.74902, 0.623529, 0.541176, 0.521569, 0.337255, 0.67451, 0.670588, 0.639216, 0.67451, 0.658824, 0.509804, 0.541176, 0.509804, 0.211765, 0.760784, 0.729412, 0.392157, 0.513726, 0.482353, 0.176471, 0.705882, 0.705882, 0.698039, 0.67451, 0.670588, 0.639216, 0.513726, 0.482353, 0.172549, 0.541176, 0.509804, 0.211765, 0.67451, 0.658824, 0.509804, 0.666667, 0.627451, 0.27451, 0.698039, 0.698039, 0.698039, 0.705882, 0.705882, 0.698039, 0.666667, 0.627451, 0.231373, 0.513726, 0.482353, 0.172549, 0.705882, 0.705882, 0.682353, 0.752941, 0.752941, 0.752941, 0.705882, 0.705882, 0.698039, 0.698039, 0.698039, 0.698039, 0.752941, 0.752941, 0.752941, 0.72549, 0.72549, 0.72549, 0.698039, 0.694118, 0.627451, 0.745098, 0.745098, 0.745098, 0.67451, 0.670588, 0.643137, 0.705882, 0.705882, 0.698039, 0.745098, 0.745098, 0.745098, 0.752941, 0.752941, 0.752941, 0.705882, 0.705882, 0.682353, 0.533333, 0.533333, 0.533333, 0.603922, 0.603922, 0.6, 0.67451, 0.670588, 0.643137, 0.67451, 0.658824, 0.509804, 0.603922, 0.6, 0.556863, 0.533333, 0.533333, 0.52549, 0.517647, 0.486275, 0.172549, 0.215686, 0.2, 0.054902, 0.427451, 0.403922, 0.137255, 0.517647, 0.482353, 0.172549, 0.611765, 0.572549, 0.211765, 0.427451, 0.4, 0.137255, 0.556863, 0.533333, 0.282353, 0.611765, 0.572549, 0.211765, 0.427451, 0.403922, 0.137255, 0.427451, 0.403922, 0.137255, 0.611765, 0.572549, 0.211765, 0.556863, 0.545098, 0.403922, 0.521569, 0.505882, 0.337255, 0.556863, 0.533333, 0.282353, 0.682353, 0.643137, 0.243137, 0.682353, 0.647059, 0.298039, 0.556863, 0.545098, 0.403922, 0.521569, 0.509804, 0.384314, 0.552941, 0.529412, 0.321569, 0.521569, 0.505882, 0.337255, 0.807843, 0.764706, 0.333333, 0.807843, 0.768627, 0.368627, 0.521569, 0.509804, 0.384314, 0.552941, 0.529412, 0.321569, 0.807843, 0.764706, 0.333333, 0.792157, 0.745098, 0.282353, 0.803922, 0.756863, 0.286275, 0.807843, 0.768627, 0.368627, 0.831373, 0.788235, 0.364706, 0.803922, 0.756863, 0.286275, 0.807843, 0.768627, 0.333333, 0.682353, 0.643137, 0.243137, 0.698039, 0.654902, 0.243137, 0.698039, 0.654902, 0.243137, 0.682353, 0.647059, 0.298039, 0.807843, 0.768627, 0.368627, 0.682353, 0.682353, 0.682353, 0.427451, 0.427451, 0.427451, 0.380392, 0.380392, 0.380392, 0.380392, 0.352941, 0.117647, 0.427451, 0.4, 0.137255, 0.682353, 0.647059, 0.298039, 0.215686, 0.215686, 0.215686, 0.380392, 0.380392, 0.380392, 0.380392, 0.380392, 0.380392, 0.215686, 0.215686, 0.215686, 0.427451, 0.427451, 0.427451, 0.380392, 0.380392, 0.380392, 0.380392, 0.356863, 0.117647, 0.803922, 0.756863, 0.286275, 0.792157, 0.745098, 0.282353, 0.792157, 0.745098, 0.282353, 0.803922, 0.756863, 0.286275, 0.380392, 0.356863, 0.117647, 0.376471, 0.352941, 0.117647, 0.792157, 0.745098, 0.282353, 0.698039, 0.654902, 0.243137, 0.698039, 0.654902, 0.243137, 0.792157, 0.745098, 0.282353, 0.376471, 0.352941, 0.117647, 0.207843, 0.254902, 0.6, 0.14902, 0.2, 0.611765, 0.156863, 0.211765, 0.647059, 0.431373, 0.454902, 0.647059, 0.588235, 0.588235, 0.611765, 0.6, 0.6, 0.6, 0.388235, 0.411765, 0.6, 0.207843, 0.254902, 0.6, 0.152941, 0.207843, 0.639216, 0.396078, 0.427451, 0.639216, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.388235, 0.411765, 0.6, 0.152941, 0.207843, 0.631373, 0.156863, 0.211765, 0.639216, 0.6, 0.6, 0.6, 0.592157, 0.592157, 0.6, 0.25098, 0.294118, 0.639216, 0.141176, 0.192157, 0.596078, 0.14902, 0.2, 0.615686, 0.156863, 0.211765, 0.647059, 0.513726, 0.521569, 0.596078, 0.588235, 0.588235, 0.611765, 0.431373, 0.454902, 0.647059, 0.141176, 0.192157, 0.596078, 0.141176, 0.188235, 0.54902, 0.141176, 0.192157, 0.6, 0.145098, 0.196078, 0.6, 0.262745, 0.294118, 0.54902, 0.513726, 0.521569, 0.596078, 0.141176, 0.188235, 0.54902, 0.443137, 0.45098, 0.537255, 0.329412, 0.364706, 0.65098, 0.160784, 0.215686, 0.65098, 0.137255, 0.180392, 0.537255, 0.262745, 0.298039, 0.54902, 0.443137, 0.45098, 0.533333, 0.6, 0.6, 0.6, 0.635294, 0.635294, 0.635294, 0.403922, 0.431373, 0.635294, 0.572549, 0.576471, 0.6, 0.137255, 0.180392, 0.533333, 0.6, 0.6, 0.6, 0.596078, 0.596078, 0.596078, 0.647059, 0.647059, 0.647059, 0.623529, 0.623529, 0.647059, 0.596078, 0.596078, 0.596078, 0.572549, 0.576471, 0.6, 0.564706, 0.564706, 0.564706, 0.67451, 0.67451, 0.67451, 0.647059, 0.647059, 0.647059, 0.564706, 0.564706, 0.564706, 0.596078, 0.596078, 0.596078, 0.623529, 0.623529, 0.647059, 0.541176, 0.552941, 0.662745, 0.203922, 0.247059, 0.631373, 0.67451, 0.67451, 0.67451, 0.458824, 0.482353, 0.662745, 0.564706, 0.564706, 0.564706, 0.666667, 0.666667, 0.67451, 0.537255, 0.552941, 0.662745, 0.384314, 0.415686, 0.635294, 0.176471, 0.235294, 0.698039, 0.203922, 0.258824, 0.698039, 0.529412, 0.541176, 0.635294, 0.458824, 0.482353, 0.662745, 0.384314, 0.415686, 0.635294, 0.458824, 0.478431, 0.627451, 0.168627, 0.223529, 0.67451, 0.215686, 0.262745, 0.67451, 0.572549, 0.580392, 0.627451, 0.529412, 0.541176, 0.635294, 0.458824, 0.478431, 0.627451, 0.545098, 0.54902, 0.6, 0.156863, 0.211765, 0.639216, 0.25098, 0.294118, 0.639216, 0.592157, 0.592157, 0.6, 0.572549, 0.580392, 0.627451, 0.168627, 0.223529, 0.67451, 0.156863, 0.211765, 0.639216, 0.121569, 0.168627, 0.533333, 0.129412, 0.176471, 0.533333, 0.25098, 0.294118, 0.639216, 0.215686, 0.262745, 0.67451, 0.176471, 0.235294, 0.698039, 0.168627, 0.223529, 0.67451, 0.12549, 0.172549, 0.54902, 0.129412, 0.176471, 0.54902, 0.215686, 0.262745, 0.67451, 0.203922, 0.258824, 0.698039, 0.176471, 0.235294, 0.698039, 0.109804, 0.14902, 0.486275, 0.07451, 0.105882, 0.341176, 0.203922, 0.258824, 0.701961, 0.180392, 0.231373, 0.631373, 0.066667, 0.098039, 0.341176, 0.203922, 0.247059, 0.631373, 0.07451, 0.105882, 0.341176, 0.427451, 0.427451, 0.427451, 0.180392, 0.231373, 0.631373, 0.662745, 0.662745, 0.67451, 0.25098, 0.266667, 0.427451, 0.647059, 0.647059, 0.647059, 0.67451, 0.67451, 0.67451, 0.427451, 0.427451, 0.427451, 0.25098, 0.266667, 0.427451, 0.666667, 0.666667, 0.67451, 0.623529, 0.623529, 0.647059, 0.643137, 0.643137, 0.643137, 0.623529, 0.623529, 0.623529, 0.721569, 0.721569, 0.729412, 0.623529, 0.623529, 0.647059, 0.403922, 0.435294, 0.635294, 0.207843, 0.266667, 0.729412, 0.333333, 0.364706, 0.65098, 0.635294, 0.635294, 0.635294, 0.721569, 0.721569, 0.729412, 0.207843, 0.266667, 0.729412, 0.403922, 0.435294, 0.635294, 0.160784, 0.215686, 0.65098, 0.329412, 0.364706, 0.65098, 0.243137, 0.305882, 0.807843, 0.207843, 0.278431, 0.823529, 0.160784, 0.215686, 0.65098, 0.145098, 0.196078, 0.6, 0.207843, 0.278431, 0.823529, 0.141176, 0.192157, 0.596078, 0.207843, 0.278431, 0.823529, 0.207843, 0.27451, 0.811765, 0.145098, 0.196078, 0.6, 0.286275, 0.321569, 0.615686, 0.235294, 0.301961, 0.811765, 0.156863, 0.211765, 0.647059, 0.145098, 0.2, 0.615686, 0.207843, 0.27451, 0.811765, 0.235294, 0.301961, 0.811765, 0.286275, 0.321569, 0.615686, 0.431373, 0.454902, 0.647059, 0.156863, 0.211765, 0.639216, 0.152941, 0.207843, 0.631373, 0.141176, 0.192157, 0.596078, 0.219608, 0.262745, 0.596078, 0.301961, 0.337255, 0.631373, 0.25098, 0.294118, 0.639216, 0.152941, 0.207843, 0.631373, 0.152941, 0.207843, 0.639216, 0.164706, 0.219608, 0.670588, 0.262745, 0.305882, 0.670588, 0.396078, 0.427451, 0.639216, 0.301961, 0.337255, 0.631373, 0.152941, 0.207843, 0.639216, 0.156863, 0.211765, 0.647059, 0.188235, 0.25098, 0.74902, 0.32549, 0.372549, 0.74902, 0.431373, 0.454902, 0.647059, 0.396078, 0.427451, 0.639216, 0.988235, 0.988235, 0.988235, 0.882353, 0.882353, 0.882353, 0.964706, 0.964706, 0.964706, 0.964706, 0.964706, 0.964706, 0.882353, 0.882353, 0.882353, 0.988235, 0.988235, 0.988235, 0.882353, 0.882353, 0.882353, 0.945098, 0.945098, 0.945098, 0.862745, 0.862745, 0.862745, 0.862745, 0.862745, 0.862745, 0.945098, 0.945098, 0.945098, 0.882353, 0.882353, 0.882353, 0.992157, 0.992157, 0.992157, 0.909804, 0.909804, 0.909804, 0.862745, 0.862745, 0.862745, 0.992157, 0.992157, 0.992157, 0.945098, 0.945098, 0.945098, 0.862745, 0.862745, 0.862745, 0.937255, 0.937255, 0.937255, 0.976471, 0.976471, 0.976471, 0.909804, 0.909804, 0.909804, 0.937255, 0.937255, 0.937255, 0.992157, 0.992157, 0.992157, 0.909804, 0.909804, 0.909804, 0.94902, 0.94902, 0.94902, 0.972549, 0.972549, 0.972549, 0.976471, 0.976471, 0.976471, 0.94902, 0.94902, 0.94902, 0.937255, 0.937255, 0.937255, 0.976471, 0.976471, 0.976471, 0.94902, 0.94902, 0.94902, 0.819608, 0.819608, 0.819608, 0.878431, 0.878431, 0.878431, 0.878431, 0.878431, 0.878431, 0.819608, 0.819608, 0.819608, 0.94902, 0.94902, 0.94902, 0.52549, 0.52549, 0.52549, 0.564706, 0.564706, 0.564706, 0.878431, 0.878431, 0.878431, 0.52549, 0.52549, 0.52549, 0.819608, 0.819608, 0.819608, 0.878431, 0.878431, 0.878431, 0.52549, 0.52549, 0.52549, 0.321569, 0.321569, 0.321569, 0.305882, 0.305882, 0.305882, 0.305882, 0.305882, 0.305882, 0.321569, 0.321569, 0.321569, 0.52549, 0.52549, 0.52549, 0.321569, 0.321569, 0.321569, 0.180392, 0.180392, 0.180392, 0.227451, 0.227451, 0.227451, 0.227451, 0.227451, 0.227451, 0.180392, 0.180392, 0.180392, 0.321569, 0.321569, 0.321569, 0.309804, 0.309804, 0.309804, 0.443137, 0.443137, 0.443137, 0.584314, 0.584314, 0.584314, 0.309804, 0.309804, 0.309804, 0.560784, 0.560784, 0.560784, 0.584314, 0.584314, 0.584314, 0.560784, 0.560784, 0.560784, 0.584314, 0.584314, 0.584314, 0.607843, 0.607843, 0.607843, 0.560784, 0.560784, 0.560784, 0.564706, 0.564706, 0.564706, 0.607843, 0.607843, 0.607843, 0.564706, 0.564706, 0.564706, 0.607843, 0.607843, 0.607843, 0.337255, 0.337255, 0.337255, 0.564706, 0.564706, 0.564706, 0.270588, 0.270588, 0.270588, 0.337255, 0.337255, 0.337255, 0.101961, 0.101961, 0.101961, 0.094118, 0.094118, 0.094118, 0.270588, 0.270588, 0.270588, 0.270588, 0.270588, 0.270588, 0.094118, 0.094118, 0.094118, 0.101961, 0.101961, 0.101961, 0.352941, 0.352941, 0.352941, 0.101961, 0.101961, 0.101961, 0.337255, 0.337255, 0.337255, 0.337255, 0.337255, 0.337255, 0.101961, 0.101961, 0.101961, 0.352941, 0.352941, 0.352941, 0.619608, 0.619608, 0.619608, 0.356863, 0.356863, 0.356863, 0.498039, 0.498039, 0.498039, 0.498039, 0.498039, 0.498039, 0.356863, 0.356863, 0.356863, 0.619608, 0.619608, 0.619608, 0.694118, 0.694118, 0.694118, 0.619608, 0.619608, 0.619608, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.619608, 0.619608, 0.619608, 0.694118, 0.694118, 0.694118, 0.670588, 0.670588, 0.670588, 0.607843, 0.607843, 0.607843, 0.584314, 0.584314, 0.584314, 0.584314, 0.584314, 0.584314, 0.607843, 0.607843, 0.607843, 0.670588, 0.670588, 0.670588, 0.498039, 0.498039, 0.498039, 0.337255, 0.337255, 0.337255, 0.607843, 0.607843, 0.607843, 0.498039, 0.498039, 0.498039, 0.670588, 0.670588, 0.670588, 0.607843, 0.607843, 0.607843, 0.662745, 0.662745, 0.662745, 0.584314, 0.584314, 0.584314, 0.443137, 0.443137, 0.443137, 0.662745, 0.662745, 0.662745, 0.666667, 0.666667, 0.666667, 0.443137, 0.443137, 0.443137, 0.72549, 0.72549, 0.72549, 0.694118, 0.694118, 0.694118, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.694118, 0.694118, 0.694118, 0.72549, 0.694118, 0.701961, 0.592157, 0.592157, 0.592157, 0.6, 0.6, 0.6, 0.745098, 0.745098, 0.745098, 0.592157, 0.592157, 0.592157, 0.752941, 0.752941, 0.752941, 0.745098, 0.745098, 0.745098, 0.662745, 0.662745, 0.662745, 0.592157, 0.592157, 0.592157, 0.752941, 0.752941, 0.752941, 0.666667, 0.666667, 0.666667, 0.72549, 0.72549, 0.72549, 0.752941, 0.752941, 0.752941, 0.745098, 0.745098, 0.745098, 0.6, 0.6, 0.6, 0.458824, 0.458824, 0.458824, 0.745098, 0.745098, 0.745098, 0.533333, 0.533333, 0.533333, 0.458824, 0.458824, 0.458824, 0.458824, 0.458824, 0.458824, 0.227451, 0.227451, 0.227451, 0.180392, 0.180392, 0.180392, 0.458824, 0.458824, 0.458824, 0.533333, 0.533333, 0.533333, 0.180392, 0.180392, 0.180392, 0.556863, 0.521569, 0.533333, 0.407843, 0.407843, 0.407843, 0.384314, 0.384314, 0.384314, 0.556863, 0.537255, 0.541176, 0.564706, 0.243137, 0.329412, 0.384314, 0.384314, 0.384314, 0.407843, 0.407843, 0.407843, 0.294118, 0.294118, 0.294118, 0.164706, 0.164706, 0.164706, 0.407843, 0.407843, 0.407843, 0.384314, 0.384314, 0.384314, 0.164706, 0.164706, 0.164706, 0.164706, 0.164706, 0.164706, 0.294118, 0.294118, 0.294118, 0.305882, 0.305882, 0.305882, 0.305882, 0.305882, 0.305882, 0.294118, 0.294118, 0.294118, 0.164706, 0.164706, 0.164706, 0.066667, 0.066667, 0.066667, 0.305882, 0.305882, 0.305882, 0.443137, 0.443137, 0.443137, 0.443137, 0.443137, 0.443137, 0.305882, 0.305882, 0.305882, 0.066667, 0.066667, 0.066667, 0.443137, 0.443137, 0.443137, 0.305882, 0.305882, 0.305882, 0.592157, 0.592157, 0.592157, 0.443137, 0.443137, 0.443137, 0.662745, 0.662745, 0.662745, 0.592157, 0.592157, 0.592157, 0.564706, 0.564706, 0.564706, 0.305882, 0.305882, 0.305882, 0.384314, 0.384314, 0.384314, 0.384314, 0.384314, 0.384314, 0.305882, 0.305882, 0.305882, 0.564706, 0.564706, 0.564706, 0.729412, 0.321569, 0.427451, 0.556863, 0.521569, 0.533333, 0.564706, 0.243137, 0.329412, 0.729412, 0.321569, 0.427451, 0.772549, 0.341176, 0.458824, 0.564706, 0.243137, 0.329412, 0.929412, 0.929412, 0.929412, 0.980392, 0.980392, 0.980392, 1.0, 1.0, 1.0, 0.929412, 0.929412, 0.929412, 0.960784, 0.960784, 0.960784, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.980392, 0.980392, 0.980392, 0.945098, 0.945098, 0.945098, 0.945098, 0.945098, 0.945098, 0.980392, 0.980392, 0.980392, 1.0, 1.0, 1.0, 0.952941, 0.952941, 0.952941, 0.945098, 0.945098, 0.945098, 0.729412, 0.321569, 0.427451, 0.729412, 0.321569, 0.427451, 0.945098, 0.945098, 0.945098, 0.952941, 0.952941, 0.952941, 0.972549, 0.972549, 0.972549, 0.878431, 0.878431, 0.878431, 0.886275, 0.886275, 0.886275, 0.886275, 0.886275, 0.886275, 0.878431, 0.878431, 0.878431, 0.972549, 0.972549, 0.972549, 0.937255, 0.937255, 0.937255, 0.886275, 0.886275, 0.886275, 0.858824, 0.858824, 0.858824, 0.858824, 0.858824, 0.858824, 0.886275, 0.886275, 0.886275, 0.937255, 0.937255, 0.937255, 0.909804, 0.909804, 0.909804, 0.858824, 0.858824, 0.858824, 0.85098, 0.85098, 0.85098, 0.85098, 0.85098, 0.85098, 0.858824, 0.858824, 0.858824, 0.909804, 0.909804, 0.909804, 0.921569, 0.921569, 0.921569, 0.85098, 0.85098, 0.85098, 0.776471, 0.776471, 0.776471, 0.776471, 0.776471, 0.776471, 0.85098, 0.85098, 0.85098, 0.92549, 0.92549, 0.92549, 0.658824, 0.580392, 0.603922, 0.858824, 0.858824, 0.858824, 0.776471, 0.776471, 0.776471, 0.658824, 0.294118, 0.392157, 0.658824, 0.65098, 0.65098, 0.776471, 0.772549, 0.772549, 0.729412, 0.321569, 0.427451, 0.945098, 0.945098, 0.945098, 0.858824, 0.858824, 0.858824, 0.858824, 0.858824, 0.858824, 0.945098, 0.945098, 0.945098, 0.729412, 0.321569, 0.427451, 0.945098, 0.945098, 0.945098, 0.980392, 0.980392, 0.980392, 0.92549, 0.92549, 0.92549, 0.92549, 0.92549, 0.92549, 0.980392, 0.980392, 0.980392, 0.945098, 0.945098, 0.945098, 0.980392, 0.980392, 0.980392, 0.929412, 0.929412, 0.929412, 0.909804, 0.909804, 0.909804, 0.909804, 0.909804, 0.909804, 0.929412, 0.929412, 0.929412, 0.980392, 0.980392, 0.980392, 0.929412, 0.929412, 0.929412, 0.952941, 0.952941, 0.952941, 0.937255, 0.937255, 0.937255, 0.937255, 0.937255, 0.937255, 0.952941, 0.952941, 0.952941, 0.929412, 0.929412, 0.929412, 0.972549, 0.972549, 0.972549, 0.937255, 0.937255, 0.937255, 0.952941, 0.952941, 0.952941, 0.972549, 0.972549, 0.972549, 0.976471, 0.976471, 0.976471, 0.952941, 0.952941, 0.952941, 0.952941, 0.952941, 0.952941, 0.929412, 0.929412, 0.929412, 0.960784, 0.960784, 0.960784, 0.952941, 0.952941, 0.952941, 0.894118, 0.894118, 0.894118, 0.960784, 0.960784, 0.960784, 0.862745, 0.862745, 0.862745, 0.909804, 0.909804, 0.909804, 0.976471, 0.976471, 0.976471, 0.862745, 0.862745, 0.862745, 0.964706, 0.964706, 0.964706, 0.976471, 0.976471, 0.976471, 0.964706, 0.964706, 0.964706, 0.976471, 0.976471, 0.976471, 0.952941, 0.952941, 0.952941, 0.952941, 0.952941, 0.952941, 0.976471, 0.976471, 0.976471, 0.964706, 0.964706, 0.964706, 0.968627, 0.968627, 0.968627, 0.964706, 0.964706, 0.964706, 0.894118, 0.894118, 0.894118, 0.894118, 0.894118, 0.894118, 0.964706, 0.964706, 0.964706, 0.968627, 0.968627, 0.968627, 0.564706, 0.564706, 0.564706, 0.6, 0.6, 0.6, 0.886275, 0.886275, 0.886275, 0.564706, 0.564706, 0.564706, 0.878431, 0.878431, 0.878431, 0.886275, 0.886275, 0.886275, 0.6, 0.6, 0.6, 0.65098, 0.65098, 0.65098, 0.858824, 0.858824, 0.858824, 0.858824, 0.858824, 0.858824, 0.65098, 0.65098, 0.65098, 0.6, 0.6, 0.6, 0.65098, 0.65098, 0.65098, 0.776471, 0.776471, 0.776471, 0.85098, 0.85098, 0.85098, 0.85098, 0.85098, 0.85098, 0.776471, 0.776471, 0.776471, 0.65098, 0.65098, 0.65098, 0.776471, 0.776471, 0.776471, 0.85098, 0.85098, 0.85098, 0.776471, 0.776471, 0.776471, 0.776471, 0.776471, 0.776471, 0.658824, 0.658824, 0.658824, 0.776471, 0.776471, 0.776471, 0.294118, 0.294118, 0.294118, 0.313726, 0.313726, 0.313726, 0.309804, 0.309804, 0.309804, 0.294118, 0.294118, 0.294118, 0.305882, 0.305882, 0.305882, 0.309804, 0.309804, 0.309804, 0.309804, 0.309804, 0.309804, 0.313726, 0.313726, 0.313726, 0.133333, 0.133333, 0.133333, 0.309804, 0.309804, 0.309804, 0.384314, 0.384314, 0.384314, 0.133333, 0.133333, 0.133333, 0.305882, 0.305882, 0.305882, 0.227451, 0.227451, 0.227451, 0.309804, 0.309804, 0.309804, 0.309804, 0.309804, 0.309804, 0.227451, 0.227451, 0.227451, 0.305882, 0.305882, 0.305882, 0.227451, 0.227451, 0.227451, 0.6, 0.6, 0.6, 0.592157, 0.592157, 0.592157, 0.592157, 0.584314, 0.541176, 0.6, 0.6, 0.588235, 0.227451, 0.227451, 0.227451, 0.592157, 0.592157, 0.592157, 0.305882, 0.305882, 0.305882, 0.309804, 0.309804, 0.309804, 0.309804, 0.309804, 0.309804, 0.305882, 0.305882, 0.305882, 0.592157, 0.592157, 0.592157, 0.227451, 0.227451, 0.227451, 0.458824, 0.458824, 0.458824, 0.6, 0.6, 0.6, 0.6, 0.6, 0.588235, 0.458824, 0.458824, 0.458824, 0.227451, 0.227451, 0.227451, 0.427451, 0.427451, 0.427451, 0.486275, 0.486275, 0.486275, 0.658824, 0.580392, 0.603922, 0.427451, 0.427451, 0.427451, 0.658824, 0.65098, 0.65098, 0.658824, 0.294118, 0.392157, 0.658824, 0.580392, 0.603922, 0.486275, 0.486275, 0.486275, 0.556863, 0.521569, 0.533333, 0.658824, 0.294118, 0.392157, 0.729412, 0.321569, 0.427451, 0.556863, 0.537255, 0.541176, 0.313726, 0.313726, 0.313726, 0.486275, 0.486275, 0.486275, 0.427451, 0.427451, 0.427451, 0.313726, 0.313726, 0.313726, 0.133333, 0.133333, 0.133333, 0.427451, 0.427451, 0.427451, 0.407843, 0.407843, 0.407843, 0.486275, 0.486275, 0.486275, 0.313726, 0.313726, 0.313726, 0.407843, 0.407843, 0.407843, 0.294118, 0.294118, 0.294118, 0.313726, 0.313726, 0.313726, 0.556863, 0.521569, 0.533333, 0.486275, 0.486275, 0.486275, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.486275, 0.478431, 0.486275, 0.556863, 0.537255, 0.541176, 0.933333, 0.933333, 0.933333, 0.647059, 0.647059, 0.647059, 0.643137, 0.643137, 0.643137, 0.933333, 0.933333, 0.933333, 0.968627, 0.968627, 0.968627, 0.643137, 0.643137, 0.643137, 0.968627, 0.968627, 0.968627, 0.643137, 0.643137, 0.643137, 0.635294, 0.635294, 0.635294, 0.635294, 0.635294, 0.635294, 0.643137, 0.643137, 0.643137, 0.968627, 0.968627, 0.968627, 0.635294, 0.635294, 0.635294, 0.639216, 0.639216, 0.639216, 0.729412, 0.729412, 0.729412, 0.635294, 0.635294, 0.635294, 0.956863, 0.956863, 0.956863, 0.729412, 0.729412, 0.729412, 0.639216, 0.639216, 0.639216, 0.752941, 0.752941, 0.752941, 0.486275, 0.486275, 0.486275, 0.639216, 0.639216, 0.639216, 0.729412, 0.729412, 0.729412, 0.486275, 0.486275, 0.486275, 0.752941, 0.752941, 0.752941, 0.741176, 0.741176, 0.741176, 0.329412, 0.329412, 0.329412, 0.745098, 0.745098, 0.745098, 0.486275, 0.486275, 0.486275, 0.329412, 0.329412, 0.329412, 0.329412, 0.329412, 0.329412, 0.741176, 0.741176, 0.741176, 0.760784, 0.760784, 0.760784, 0.760784, 0.760784, 0.760784, 0.741176, 0.741176, 0.741176, 0.329412, 0.329412, 0.329412, 0.741176, 0.741176, 0.741176, 0.898039, 0.898039, 0.898039, 0.952941, 0.952941, 0.952941, 0.960784, 0.960784, 0.960784, 0.898039, 0.898039, 0.898039, 0.741176, 0.741176, 0.741176, 0.752941, 0.752941, 0.752941, 0.831373, 0.831373, 0.831373, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.831373, 0.831373, 0.831373, 0.745098, 0.745098, 0.745098, 0.643137, 0.643137, 0.643137, 0.831373, 0.831373, 0.831373, 0.752941, 0.752941, 0.752941, 0.643137, 0.643137, 0.643137, 0.639216, 0.639216, 0.639216, 0.745098, 0.745098, 0.745098, 0.333333, 0.333333, 0.333333, 0.643137, 0.643137, 0.643137, 0.639216, 0.639216, 0.639216, 0.333333, 0.333333, 0.333333, 0.635294, 0.635294, 0.635294, 0.639216, 0.639216, 0.639216, 0.403922, 0.403922, 0.403922, 0.333333, 0.333333, 0.333333, 0.635294, 0.635294, 0.635294, 0.403922, 0.403922, 0.403922, 0.643137, 0.643137, 0.643137, 0.635294, 0.635294, 0.635294, 0.643137, 0.643137, 0.643137, 0.647059, 0.647059, 0.647059, 0.458824, 0.458824, 0.458824, 0.458824, 0.458824, 0.458824, 0.647059, 0.647059, 0.647059, 0.643137, 0.643137, 0.643137, 0.133333, 0.133333, 0.133333, 0.690196, 0.690196, 0.690196, 0.490196, 0.490196, 0.490196, 0.133333, 0.133333, 0.133333, 0.384314, 0.384314, 0.384314, 0.490196, 0.490196, 0.490196, 0.411765, 0.411765, 0.411765, 0.760784, 0.760784, 0.760784, 0.690196, 0.690196, 0.690196, 0.411765, 0.411765, 0.411765, 0.133333, 0.133333, 0.133333, 0.690196, 0.690196, 0.690196, 0.6, 0.6, 0.6, 0.384314, 0.384314, 0.384314, 0.490196, 0.490196, 0.490196, 0.490196, 0.490196, 0.490196, 0.384314, 0.384314, 0.384314, 0.6, 0.6, 0.6, 0.776471, 0.776471, 0.776471, 0.580392, 0.580392, 0.580392, 0.647059, 0.647059, 0.647059, 0.647059, 0.647059, 0.647059, 0.580392, 0.580392, 0.580392, 0.776471, 0.776471, 0.776471, 0.760784, 0.760784, 0.760784, 0.952941, 0.952941, 0.952941, 0.811765, 0.811765, 0.811765, 0.811765, 0.811765, 0.811765, 0.960784, 0.960784, 0.960784, 0.760784, 0.760784, 0.760784, 0.607843, 0.607843, 0.607843, 0.690196, 0.690196, 0.690196, 0.811765, 0.811765, 0.811765, 0.607843, 0.607843, 0.607843, 0.647059, 0.647059, 0.647059, 0.811765, 0.811765, 0.811765, 0.67451, 0.67451, 0.67451, 0.607843, 0.607843, 0.607843, 0.647059, 0.647059, 0.647059, 0.647059, 0.647059, 0.647059, 0.607843, 0.607843, 0.607843, 0.67451, 0.67451, 0.67451, 0.517647, 0.517647, 0.517647, 0.607843, 0.607843, 0.607843, 0.67451, 0.67451, 0.67451, 0.517647, 0.517647, 0.517647, 0.447059, 0.447059, 0.447059, 0.67451, 0.67451, 0.67451, 0.517647, 0.517647, 0.517647, 0.447059, 0.447059, 0.447059, 0.466667, 0.466667, 0.466667, 0.517647, 0.517647, 0.517647, 0.580392, 0.580392, 0.580392, 0.466667, 0.466667, 0.466667, 0.580392, 0.580392, 0.580392, 0.466667, 0.466667, 0.466667, 0.458824, 0.458824, 0.458824, 0.580392, 0.580392, 0.580392, 0.647059, 0.647059, 0.647059, 0.458824, 0.458824, 0.458824, 0.517647, 0.517647, 0.517647, 0.580392, 0.580392, 0.580392, 0.776471, 0.776471, 0.776471, 0.517647, 0.517647, 0.517647, 0.65098, 0.65098, 0.65098, 0.776471, 0.776471, 0.776471, 0.490196, 0.490196, 0.490196, 0.607843, 0.607843, 0.607843, 0.517647, 0.517647, 0.517647, 0.490196, 0.490196, 0.490196, 0.65098, 0.65098, 0.65098, 0.517647, 0.517647, 0.517647, 0.490196, 0.490196, 0.490196, 0.690196, 0.690196, 0.690196, 0.607843, 0.607843, 0.607843, 0.607843, 0.607843, 0.607843, 0.690196, 0.690196, 0.690196, 0.490196, 0.490196, 0.490196, 0.458824, 0.458824, 0.458824, 0.466667, 0.466667, 0.466667, 0.513726, 0.513726, 0.513726, 0.513726, 0.513726, 0.513726, 0.466667, 0.466667, 0.466667, 0.458824, 0.458824, 0.458824, 0.447059, 0.447059, 0.447059, 0.517647, 0.517647, 0.517647, 0.513726, 0.513726, 0.513726, 0.447059, 0.447059, 0.447059, 0.466667, 0.466667, 0.466667, 0.513726, 0.513726, 0.513726, 0.447059, 0.447059, 0.447059, 0.67451, 0.67451, 0.67451, 0.741176, 0.741176, 0.741176, 0.737255, 0.737255, 0.737255, 0.67451, 0.67451, 0.67451, 0.447059, 0.447059, 0.447059, 0.85098, 0.85098, 0.85098, 0.768627, 0.768627, 0.768627, 0.741176, 0.741176, 0.741176, 0.85098, 0.85098, 0.85098, 0.67451, 0.67451, 0.67451, 0.737255, 0.737255, 0.737255, 0.647059, 0.647059, 0.647059, 0.764706, 0.764706, 0.764706, 0.768627, 0.768627, 0.768627, 0.647059, 0.647059, 0.647059, 0.85098, 0.85098, 0.85098, 0.768627, 0.768627, 0.768627, 0.647059, 0.647059, 0.647059, 0.811765, 0.811765, 0.811765, 0.760784, 0.760784, 0.760784, 0.760784, 0.760784, 0.760784, 0.811765, 0.811765, 0.811765, 0.647059, 0.647059, 0.647059, 0.811765, 0.811765, 0.811765, 0.952941, 0.952941, 0.952941, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.960784, 0.960784, 0.960784, 0.811765, 0.811765, 0.811765, 0.403922, 0.403922, 0.403922, 0.458824, 0.458824, 0.458824, 0.52549, 0.52549, 0.52549, 0.521569, 0.521569, 0.521569, 0.458824, 0.458824, 0.458824, 0.403922, 0.403922, 0.403922, 0.333333, 0.333333, 0.333333, 0.403922, 0.403922, 0.403922, 0.552941, 0.552941, 0.552941, 0.552941, 0.552941, 0.552941, 0.403922, 0.403922, 0.403922, 0.333333, 0.333333, 0.333333, 0.643137, 0.643137, 0.643137, 0.333333, 0.333333, 0.333333, 0.447059, 0.447059, 0.447059, 0.447059, 0.447059, 0.447059, 0.333333, 0.333333, 0.333333, 0.643137, 0.643137, 0.643137, 0.643137, 0.643137, 0.643137, 0.647059, 0.647059, 0.647059, 0.784314, 0.784314, 0.784314, 0.643137, 0.643137, 0.643137, 0.831373, 0.831373, 0.831373, 0.784314, 0.784314, 0.784314, 0.831373, 0.831373, 0.831373, 0.784314, 0.784314, 0.784314, 0.85098, 0.85098, 0.85098, 0.831373, 0.831373, 0.831373, 0.898039, 0.898039, 0.898039, 0.85098, 0.85098, 0.85098, 0.898039, 0.898039, 0.898039, 0.85098, 0.85098, 0.85098, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.960784, 0.960784, 0.960784, 0.898039, 0.898039, 0.898039, 0.764706, 0.764706, 0.764706, 0.698039, 0.698039, 0.698039, 0.670588, 0.670588, 0.670588, 0.764706, 0.764706, 0.764706, 0.768627, 0.768627, 0.768627, 0.67451, 0.67451, 0.67451, 0.698039, 0.698039, 0.698039, 0.654902, 0.654902, 0.654902, 0.670588, 0.670588, 0.670588, 0.698039, 0.698039, 0.698039, 0.67451, 0.67451, 0.67451, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.654902, 0.654902, 0.654902, 0.643137, 0.643137, 0.643137, 0.643137, 0.643137, 0.643137, 0.654902, 0.654902, 0.654902, 0.670588, 0.670588, 0.670588, 0.643137, 0.643137, 0.643137, 0.662745, 0.662745, 0.662745, 0.768627, 0.768627, 0.768627, 0.643137, 0.643137, 0.643137, 0.701961, 0.701961, 0.701961, 0.768627, 0.768627, 0.768627, 0.552941, 0.552941, 0.552941, 0.521569, 0.521569, 0.521569, 0.701961, 0.701961, 0.701961, 0.701961, 0.701961, 0.701961, 0.521569, 0.521569, 0.521569, 0.552941, 0.552941, 0.552941, 0.670588, 0.670588, 0.670588, 0.701961, 0.701961, 0.701961, 0.521569, 0.521569, 0.521569, 0.670588, 0.670588, 0.670588, 0.513726, 0.513726, 0.513726, 0.521569, 0.521569, 0.521569, 0.517647, 0.517647, 0.517647, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.517647, 0.517647, 0.517647, 0.513726, 0.513726, 0.513726, 0.670588, 0.670588, 0.670588, 0.768627, 0.768627, 0.768627, 0.670588, 0.670588, 0.670588, 0.517647, 0.517647, 0.517647, 0.517647, 0.517647, 0.517647, 0.67451, 0.67451, 0.67451, 0.768627, 0.768627, 0.768627, 0.898039, 0.898039, 0.898039, 0.698039, 0.698039, 0.698039, 0.764706, 0.764706, 0.764706, 0.898039, 0.898039, 0.898039, 0.760784, 0.760784, 0.760784, 0.764706, 0.764706, 0.764706, 0.85098, 0.85098, 0.85098, 0.654902, 0.654902, 0.654902, 0.698039, 0.698039, 0.698039, 0.698039, 0.698039, 0.698039, 0.654902, 0.654902, 0.654902, 0.85098, 0.85098, 0.85098, 0.643137, 0.643137, 0.643137, 0.654902, 0.654902, 0.654902, 0.85098, 0.85098, 0.85098, 0.643137, 0.643137, 0.643137, 0.784314, 0.784314, 0.784314, 0.85098, 0.85098, 0.85098, 0.662745, 0.662745, 0.662745, 0.643137, 0.643137, 0.643137, 0.784314, 0.784314, 0.784314, 0.662745, 0.662745, 0.662745, 0.647059, 0.647059, 0.647059, 0.784314, 0.784314, 0.784314, 0.447059, 0.447059, 0.447059, 0.768627, 0.768627, 0.768627, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.768627, 0.768627, 0.768627, 0.447059, 0.447059, 0.447059, 0.552941, 0.552941, 0.552941, 0.768627, 0.768627, 0.768627, 0.447059, 0.447059, 0.447059, 0.447059, 0.447059, 0.447059, 0.768627, 0.768627, 0.768627, 0.552941, 0.552941, 0.552941, 0.329412, 0.329412, 0.329412, 0.411765, 0.411765, 0.411765, 0.27451, 0.27451, 0.27451, 0.27451, 0.27451, 0.27451, 0.411765, 0.411765, 0.411765, 0.329412, 0.329412, 0.329412, 0.486275, 0.486275, 0.486275, 0.329412, 0.329412, 0.329412, 0.380392, 0.380392, 0.380392, 0.380392, 0.380392, 0.380392, 0.329412, 0.329412, 0.329412, 0.486275, 0.486275, 0.486275, 0.486275, 0.486275, 0.486275, 0.490196, 0.490196, 0.490196, 0.690196, 0.690196, 0.690196, 0.486275, 0.486275, 0.486275, 0.729412, 0.729412, 0.729412, 0.690196, 0.690196, 0.690196, 0.729412, 0.729412, 0.729412, 0.690196, 0.690196, 0.690196, 0.878431, 0.878431, 0.878431, 0.729412, 0.729412, 0.729412, 0.956863, 0.956863, 0.956863, 0.878431, 0.878431, 0.878431, 0.956863, 0.956863, 0.956863, 0.878431, 0.878431, 0.878431, 0.870588, 0.870588, 0.870588, 0.956863, 0.956863, 0.956863, 0.968627, 0.968627, 0.968627, 0.870588, 0.870588, 0.870588, 0.968627, 0.968627, 0.968627, 0.870588, 0.870588, 0.870588, 0.878431, 0.878431, 0.878431, 0.968627, 0.968627, 0.968627, 0.933333, 0.933333, 0.933333, 0.878431, 0.878431, 0.878431, 0.380392, 0.380392, 0.380392, 0.27451, 0.27451, 0.27451, 0.878431, 0.878431, 0.878431, 0.380392, 0.380392, 0.380392, 0.870588, 0.870588, 0.870588, 0.878431, 0.878431, 0.878431, 0.870588, 0.870588, 0.870588, 0.878431, 0.878431, 0.878431, 0.490196, 0.490196, 0.490196, 0.490196, 0.490196, 0.490196, 0.878431, 0.878431, 0.878431, 0.870588, 0.870588, 0.870588, 0.878431, 0.878431, 0.878431, 0.690196, 0.690196, 0.690196, 0.490196, 0.490196, 0.490196, 0.490196, 0.490196, 0.490196, 0.690196, 0.690196, 0.690196, 0.878431, 0.878431, 0.878431, 0.776471, 0.776471, 0.776471, 0.933333, 0.933333, 0.933333, 0.878431, 0.878431, 0.878431, 0.776471, 0.721569, 0.737255, 0.658824, 0.65098, 0.65098, 0.878431, 0.878431, 0.878431, 0.658824, 0.658824, 0.658824, 0.878431, 0.878431, 0.878431, 0.27451, 0.27451, 0.27451, 0.27451, 0.27451, 0.27451, 0.878431, 0.878431, 0.878431, 0.658824, 0.65098, 0.65098, 0.133333, 0.133333, 0.133333, 0.427451, 0.427451, 0.427451, 0.27451, 0.27451, 0.27451, 0.27451, 0.27451, 0.27451, 0.427451, 0.427451, 0.427451, 0.133333, 0.133333, 0.133333, 0.662745, 0.662745, 0.662745, 0.184314, 0.235294, 0.662745, 0.380392, 0.392157, 0.478431, 0.317647, 0.356863, 0.662745, 0.109804, 0.14902, 0.478431, 0.160784, 0.215686, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.462745, 0.462745, 0.462745, 0.662745, 0.662745, 0.662745, 0.462745, 0.462745, 0.462745, 0.662745, 0.662745, 0.662745, 0.462745, 0.462745, 0.462745, 0.478431, 0.478431, 0.478431, 0.254902, 0.254902, 0.254902, 0.462745, 0.462745, 0.462745, 0.254902, 0.254902, 0.254902, 0.478431, 0.478431, 0.478431, 0.380392, 0.396078, 0.478431, 0.082353, 0.121569, 0.407843, 0.066667, 0.098039, 0.34902, 0.109804, 0.14902, 0.478431, 0.121569, 0.14902, 0.34902, 0.082353, 0.121569, 0.407843, 0.066667, 0.098039, 0.34902, 0.011765, 0.015686, 0.121569, 0.101961, 0.141176, 0.466667, 0.121569, 0.14902, 0.34902, 0.4, 0.407843, 0.466667, 0.011765, 0.015686, 0.121569, 0.047059, 0.070588, 0.254902, 0.066667, 0.098039, 0.34902, 0.090196, 0.129412, 0.419608, 0.188235, 0.196078, 0.254902, 0.419608, 0.419608, 0.419608, 0.121569, 0.14902, 0.34902, 0.466667, 0.466667, 0.466667, 0.662745, 0.662745, 0.662745, 0.419608, 0.419608, 0.419608, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.419608, 0.419608, 0.419608, 0.078431, 0.113725, 0.384314, 0.160784, 0.215686, 0.662745, 0.101961, 0.141176, 0.466667, 0.662745, 0.662745, 0.662745, 0.160784, 0.215686, 0.662745, 0.4, 0.407843, 0.466667, 0.188235, 0.243137, 0.662745, 0.160784, 0.215686, 0.662745, 0.262745, 0.321569, 0.815686, 0.662745, 0.662745, 0.662745, 0.639216, 0.658824, 0.815686, 0.160784, 0.215686, 0.662745, 0.662745, 0.662745, 0.662745, 0.815686, 0.815686, 0.815686, 0.662745, 0.662745, 0.662745, 0.882353, 0.882353, 0.882353, 0.815686, 0.815686, 0.815686, 0.662745, 0.662745, 0.662745, 0.815686, 0.815686, 0.815686, 0.854902, 0.854902, 0.854902, 0.882353, 0.882353, 0.882353, 0.929412, 0.929412, 0.929412, 0.854902, 0.854902, 0.854902, 0.882353, 0.882353, 0.882353, 0.215686, 0.286275, 0.843137, 0.231373, 0.305882, 0.901961, 0.262745, 0.321569, 0.815686, 0.521569, 0.564706, 0.854902, 0.231373, 0.305882, 0.901961, 0.639216, 0.658824, 0.815686, 0.231373, 0.305882, 0.901961, 0.219608, 0.290196, 0.831373, 0.356863, 0.415686, 0.854902, 0.607843, 0.635294, 0.831373, 0.211765, 0.282353, 0.831373, 0.521569, 0.564706, 0.854902, 0.854902, 0.854902, 0.854902, 0.831373, 0.831373, 0.831373, 0.929412, 0.929412, 0.929412, 0.858824, 0.858824, 0.858824, 0.831373, 0.831373, 0.831373, 0.929412, 0.929412, 0.929412, 0.827451, 0.827451, 0.831373, 0.662745, 0.662745, 0.662745, 0.858824, 0.858824, 0.858824, 0.501961, 0.521569, 0.662745, 0.317647, 0.356863, 0.662745, 0.854902, 0.854902, 0.858824, 0.219608, 0.286275, 0.831373, 0.184314, 0.235294, 0.662745, 0.827451, 0.827451, 0.831373, 0.317647, 0.356863, 0.662745, 0.160784, 0.215686, 0.662745, 0.607843, 0.635294, 0.831373, 0.662745, 0.662745, 0.662745, 0.831373, 0.831373, 0.831373, 0.662745, 0.662745, 0.662745, 0.831373, 0.831373, 0.831373, 0.831373, 0.831373, 0.831373, 0.662745, 0.662745, 0.662745, 0.831373, 0.831373, 0.831373, 0.901961, 0.901961, 0.901961, 0.831373, 0.831373, 0.831373, 0.894118, 0.894118, 0.894118, 0.901961, 0.901961, 0.901961, 0.831373, 0.831373, 0.831373, 0.901961, 0.901961, 0.901961, 0.843137, 0.843137, 0.843137, 0.894118, 0.894118, 0.894118, 0.831373, 0.831373, 0.831373, 0.843137, 0.843137, 0.843137, 0.894118, 0.894118, 0.894118, 0.843137, 0.843137, 0.843137, 0.662745, 0.662745, 0.662745, 0.831373, 0.831373, 0.831373, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.831373, 0.831373, 0.831373, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.662745, 0.407843, 0.407843, 0.407843, 0.662745, 0.662745, 0.662745, 0.407843, 0.407843, 0.407843, 0.662745, 0.662745, 0.662745, 0.407843, 0.407843, 0.407843, 0.384314, 0.384314, 0.384314, 0.176471, 0.176471, 0.176471, 0.407843, 0.407843, 0.407843, 0.176471, 0.176471, 0.176471, 0.384314, 0.384314, 0.384314, 0.176471, 0.176471, 0.176471, 0.121569, 0.121569, 0.121569, 0.407843, 0.407843, 0.407843, 0.176471, 0.176471, 0.176471, 0.407843, 0.407843, 0.407843, 0.121569, 0.121569, 0.121569, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.407843, 0.662745, 0.662745, 0.662745, 0.407843, 0.407843, 0.407843, 0.662745, 0.662745, 0.662745, 0.407843, 0.407843, 0.407843, 0.101961, 0.101961, 0.101961, 0.345098, 0.345098, 0.345098, 0.094118, 0.094118, 0.094118, 0.317647, 0.317647, 0.317647, 0.345098, 0.345098, 0.345098, 0.094118, 0.094118, 0.094118, 0.352941, 0.352941, 0.352941, 0.427451, 0.427451, 0.427451, 0.101961, 0.101961, 0.101961, 0.345098, 0.345098, 0.345098, 0.427451, 0.427451, 0.427451, 0.101961, 0.101961, 0.101961, 0.352941, 0.352941, 0.352941, 0.619608, 0.619608, 0.619608, 0.427451, 0.427451, 0.427451, 0.352941, 0.352941, 0.352941, 0.427451, 0.427451, 0.427451, 0.619608, 0.619608, 0.619608, 0.619608, 0.619608, 0.619608, 0.694118, 0.694118, 0.694118, 0.596078, 0.596078, 0.596078, 0.619608, 0.619608, 0.619608, 0.596078, 0.596078, 0.596078, 0.694118, 0.694118, 0.694118, 0.694118, 0.694118, 0.694118, 0.72549, 0.72549, 0.72549, 0.654902, 0.65098, 0.607843, 0.694118, 0.694118, 0.694118, 0.654902, 0.647059, 0.564706, 0.72549, 0.72549, 0.72549, 0.603922, 0.603922, 0.6, 0.533333, 0.533333, 0.533333, 0.423529, 0.427451, 0.47451, 0.603922, 0.6, 0.556863, 0.458824, 0.458824, 0.47451, 0.533333, 0.533333, 0.52549, 0.180392, 0.180392, 0.180392, 0.321569, 0.321569, 0.321569, 0.423529, 0.427451, 0.47451, 0.505882, 0.505882, 0.52549, 0.321569, 0.321569, 0.321569, 0.458824, 0.458824, 0.47451, 0.52549, 0.52549, 0.52549, 0.321569, 0.321569, 0.321569, 0.556863, 0.556863, 0.556863, 0.505882, 0.505882, 0.52549, 0.556863, 0.556863, 0.556863, 0.321569, 0.321569, 0.321569, 0.52549, 0.52549, 0.52549, 0.819608, 0.819608, 0.819608, 0.556863, 0.556863, 0.556863, 0.619608, 0.619608, 0.619608, 0.819608, 0.819608, 0.819608, 0.556863, 0.556863, 0.556863, 0.819608, 0.819608, 0.819608, 0.94902, 0.94902, 0.94902, 0.619608, 0.619608, 0.619608, 0.654902, 0.654902, 0.654902, 0.94902, 0.94902, 0.94902, 0.619608, 0.619608, 0.619608, 0.94902, 0.94902, 0.94902, 0.937255, 0.937255, 0.937255, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.937255, 0.937255, 0.937255, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.937255, 0.937255, 0.937255, 0.745098, 0.745098, 0.745098, 0.654902, 0.654902, 0.654902, 0.745098, 0.745098, 0.745098, 0.937255, 0.937255, 0.937255, 0.992157, 0.992157, 0.992157, 0.945098, 0.945098, 0.945098, 0.745098, 0.745098, 0.745098, 0.72549, 0.72549, 0.72549, 0.945098, 0.945098, 0.945098, 0.745098, 0.745098, 0.745098, 0.945098, 0.945098, 0.945098, 0.882353, 0.882353, 0.882353, 0.72549, 0.72549, 0.72549, 0.654902, 0.654902, 0.654902, 0.882353, 0.882353, 0.882353, 0.72549, 0.72549, 0.72549, 0.882353, 0.882353, 0.882353, 0.988235, 0.988235, 0.988235, 0.654902, 0.654902, 0.654902, 0.658824, 0.658824, 0.658824, 0.988235, 0.988235, 0.988235, 0.654902, 0.654902, 0.654902, 0.545098, 0.54902, 0.6, 0.458824, 0.478431, 0.627451, 0.654902, 0.654902, 0.654902, 0.72549, 0.72549, 0.72549, 0.572549, 0.580392, 0.627451, 0.654902, 0.654902, 0.654902, 0.72549, 0.72549, 0.72549, 0.458824, 0.478431, 0.627451, 0.745098, 0.745098, 0.745098, 0.72549, 0.72549, 0.72549, 0.745098, 0.745098, 0.745098, 0.572549, 0.580392, 0.627451, 0.541176, 0.552941, 0.662745, 0.654902, 0.654902, 0.654902, 0.388235, 0.415686, 0.635294, 0.745098, 0.745098, 0.745098, 0.654902, 0.654902, 0.654902, 0.529412, 0.541176, 0.635294, 0.564706, 0.564706, 0.564706, 0.654902, 0.654902, 0.654902, 0.541176, 0.552941, 0.662745, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.654902, 0.458824, 0.482353, 0.662745, 0.596078, 0.596078, 0.596078, 0.619608, 0.619608, 0.619608, 0.564706, 0.564706, 0.564706, 0.654902, 0.654902, 0.654902, 0.619608, 0.619608, 0.619608, 0.564706, 0.564706, 0.564706, 0.6, 0.6, 0.6, 0.556863, 0.556863, 0.556863, 0.596078, 0.596078, 0.596078, 0.619608, 0.619608, 0.619608, 0.556863, 0.556863, 0.556863, 0.596078, 0.596078, 0.596078, 0.443137, 0.45098, 0.533333, 0.52549, 0.52549, 0.52549, 0.6, 0.6, 0.6, 0.556863, 0.556863, 0.556863, 0.505882, 0.505882, 0.52549, 0.572549, 0.576471, 0.6, 0.141176, 0.188235, 0.54902, 0.423529, 0.427451, 0.478431, 0.443137, 0.45098, 0.533333, 0.505882, 0.505882, 0.52549, 0.458824, 0.458824, 0.478431, 0.137255, 0.180392, 0.533333, 0.141176, 0.188235, 0.54902, 0.141176, 0.192157, 0.596078, 0.423529, 0.427451, 0.478431, 0.262745, 0.298039, 0.54902, 0.458824, 0.458824, 0.478431, 0.513726, 0.521569, 0.596078, 0.603922, 0.603922, 0.6, 0.141176, 0.192157, 0.596078, 0.670588, 0.670588, 0.670588, 0.603922, 0.6, 0.556863, 0.670588, 0.670588, 0.670588, 0.513726, 0.521569, 0.596078, 0.545098, 0.54902, 0.6, 0.654902, 0.654902, 0.654902, 0.388235, 0.411765, 0.6, 0.658824, 0.658824, 0.658824, 0.654902, 0.654902, 0.654902, 0.6, 0.6, 0.6, 0.207843, 0.254902, 0.6, 0.388235, 0.411765, 0.6, 0.592157, 0.592157, 0.592157, 0.6, 0.6, 0.6, 0.592157, 0.592157, 0.592157, 0.6, 0.6, 0.6, 0.670588, 0.670588, 0.670588, 0.14902, 0.2, 0.611765, 0.592157, 0.592157, 0.592157, 0.6, 0.6, 0.6, 0.588235, 0.588235, 0.611765, 0.592157, 0.592157, 0.592157, 0.345098, 0.345098, 0.345098, 0.521569, 0.505882, 0.337255, 0.317647, 0.313726, 0.270588, 0.345098, 0.345098, 0.345098, 0.317647, 0.313726, 0.270588, 0.521569, 0.509804, 0.384314, 0.427451, 0.427451, 0.427451, 0.556863, 0.533333, 0.282353, 0.345098, 0.345098, 0.345098, 0.427451, 0.427451, 0.427451, 0.34902, 0.34902, 0.345098, 0.556863, 0.545098, 0.403922, 0.611765, 0.572549, 0.211765, 0.556863, 0.533333, 0.282353, 0.596078, 0.596078, 0.596078, 0.427451, 0.427451, 0.427451, 0.556863, 0.545098, 0.403922, 0.596078, 0.596078, 0.596078, 0.654902, 0.65098, 0.607843, 0.698039, 0.698039, 0.698039, 0.647059, 0.607843, 0.223529, 0.654902, 0.647059, 0.560784, 0.647059, 0.607843, 0.223529, 0.698039, 0.690196, 0.627451, 0.647059, 0.607843, 0.223529, 0.611765, 0.572549, 0.211765, 0.654902, 0.65098, 0.607843, 0.647059, 0.607843, 0.223529, 0.654902, 0.647059, 0.560784, 0.611765, 0.572549, 0.211765, 0.513726, 0.482353, 0.176471, 0.501961, 0.470588, 0.168627, 0.666667, 0.627451, 0.27451, 0.662745, 0.623529, 0.231373, 0.501961, 0.470588, 0.168627, 0.666667, 0.627451, 0.231373, 0.647059, 0.607843, 0.223529, 0.666667, 0.627451, 0.27451, 0.654902, 0.615686, 0.227451, 0.662745, 0.623529, 0.231373, 0.666667, 0.627451, 0.231373, 0.654902, 0.615686, 0.227451, 0.517647, 0.486275, 0.172549, 0.611765, 0.572549, 0.211765, 0.654902, 0.615686, 0.227451, 0.647059, 0.607843, 0.223529, 0.611765, 0.572549, 0.211765, 0.654902, 0.615686, 0.227451, 0.513726, 0.513726, 0.513726, 0.541176, 0.541176, 0.541176, 0.360784, 0.360784, 0.360784, 0.513726, 0.513726, 0.513726, 0.360784, 0.360784, 0.360784, 0.541176, 0.541176, 0.541176, 0.760784, 0.760784, 0.760784, 0.858824, 0.858824, 0.858824, 0.541176, 0.541176, 0.541176, 0.596078, 0.596078, 0.596078, 0.858824, 0.858824, 0.858824, 0.541176, 0.541176, 0.541176, 0.823529, 0.823529, 0.823529, 0.894118, 0.894118, 0.894118, 0.760784, 0.760784, 0.760784, 0.858824, 0.858824, 0.858824, 0.894118, 0.894118, 0.894118, 0.760784, 0.760784, 0.760784, 0.854902, 0.803922, 0.305882, 0.862745, 0.811765, 0.309804, 0.823529, 0.772549, 0.305882, 0.894118, 0.847059, 0.352941, 0.862745, 0.811765, 0.309804, 0.819608, 0.772549, 0.305882, 0.501961, 0.501961, 0.501961, 0.513726, 0.513726, 0.513726, 0.266667, 0.266667, 0.266667, 0.360784, 0.360784, 0.360784, 0.513726, 0.513726, 0.513726, 0.266667, 0.266667, 0.266667, 0.266667, 0.247059, 0.070588, 0.360784, 0.337255, 0.117647, 0.470588, 0.443137, 0.152941, 0.454902, 0.427451, 0.14902, 0.360784, 0.337255, 0.113725, 0.470588, 0.443137, 0.152941, 0.894118, 0.85098, 0.419608, 0.862745, 0.811765, 0.309804, 0.819608, 0.772549, 0.298039, 0.894118, 0.847059, 0.352941, 0.819608, 0.772549, 0.294118, 0.862745, 0.811765, 0.309804, 0.858824, 0.85098, 0.768627, 0.894118, 0.85098, 0.419608, 0.792157, 0.756863, 0.415686, 0.858824, 0.831373, 0.556863, 0.792157, 0.74902, 0.305882, 0.894118, 0.847059, 0.352941, 0.858824, 0.85098, 0.768627, 0.792157, 0.756863, 0.415686, 0.596078, 0.580392, 0.411765, 0.607843, 0.572549, 0.227451, 0.792157, 0.74902, 0.305882, 0.596078, 0.572549, 0.313726, 0.360784, 0.337255, 0.117647, 0.596078, 0.580392, 0.407843, 0.454902, 0.427451, 0.14902, 0.360784, 0.337255, 0.113725, 0.454902, 0.427451, 0.14902, 0.596078, 0.572549, 0.313726, 0.698039, 0.654902, 0.243137, 0.607843, 0.572549, 0.25098, 0.819608, 0.772549, 0.298039, 0.792157, 0.74902, 0.301961, 0.607843, 0.572549, 0.227451, 0.819608, 0.772549, 0.294118, 0.607843, 0.576471, 0.25098, 0.698039, 0.654902, 0.243137, 0.454902, 0.427451, 0.14902, 0.607843, 0.572549, 0.227451, 0.454902, 0.427451, 0.14902, 0.698039, 0.654902, 0.243137, 0.670588, 0.670588, 0.670588, 0.823529, 0.772549, 0.305882, 0.603922, 0.603922, 0.6, 0.670588, 0.670588, 0.670588, 0.603922, 0.6, 0.556863, 0.823529, 0.772549, 0.305882, 0.603922, 0.603922, 0.6, 0.760784, 0.74902, 0.623529, 0.67451, 0.670588, 0.639216, 0.603922, 0.6, 0.556863, 0.67451, 0.658824, 0.509804, 0.760784, 0.729412, 0.392157, 0.541176, 0.521569, 0.337255, 0.513726, 0.482353, 0.176471, 0.67451, 0.670588, 0.639216, 0.705882, 0.705882, 0.682353, 0.513726, 0.482353, 0.172549, 0.67451, 0.658824, 0.509804, 0.513726, 0.482353, 0.176471, 0.666667, 0.627451, 0.27451, 0.705882, 0.705882, 0.698039, 0.698039, 0.690196, 0.627451, 0.666667, 0.627451, 0.231373, 0.705882, 0.705882, 0.682353, 0.72549, 0.72549, 0.72549, 0.752941, 0.752941, 0.752941, 0.698039, 0.698039, 0.698039, 0.705882, 0.705882, 0.682353, 0.752941, 0.752941, 0.752941, 0.698039, 0.694118, 0.627451, 0.752941, 0.752941, 0.752941, 0.745098, 0.745098, 0.745098, 0.705882, 0.705882, 0.698039, 0.67451, 0.658824, 0.509804, 0.745098, 0.745098, 0.745098, 0.705882, 0.705882, 0.682353, 0.745098, 0.745098, 0.745098, 0.533333, 0.533333, 0.533333, 0.67451, 0.670588, 0.643137, 0.745098, 0.745098, 0.745098, 0.67451, 0.658824, 0.509804, 0.533333, 0.533333, 0.52549, 0.611765, 0.572549, 0.211765, 0.517647, 0.486275, 0.172549, 0.427451, 0.403922, 0.137255, 0.215686, 0.2, 0.054902, 0.517647, 0.482353, 0.172549, 0.427451, 0.4, 0.137255, 0.682353, 0.643137, 0.243137, 0.556863, 0.533333, 0.282353, 0.427451, 0.403922, 0.137255, 0.682353, 0.647059, 0.298039, 0.427451, 0.403922, 0.137255, 0.556863, 0.545098, 0.403922, 0.807843, 0.764706, 0.333333, 0.521569, 0.505882, 0.337255, 0.682353, 0.643137, 0.243137, 0.807843, 0.768627, 0.368627, 0.682353, 0.647059, 0.298039, 0.521569, 0.509804, 0.384314, 0.831373, 0.788235, 0.364706, 0.552941, 0.529412, 0.321569, 0.807843, 0.764706, 0.333333, 0.831373, 0.788235, 0.364706, 0.807843, 0.768627, 0.368627, 0.552941, 0.529412, 0.321569, 0.831373, 0.788235, 0.364706, 0.807843, 0.764706, 0.333333, 0.803922, 0.756863, 0.286275, 0.792157, 0.745098, 0.282353, 0.807843, 0.768627, 0.368627, 0.803922, 0.756863, 0.286275, 0.792157, 0.745098, 0.282353, 0.807843, 0.768627, 0.333333, 0.698039, 0.654902, 0.243137, 0.792157, 0.745098, 0.282353, 0.698039, 0.654902, 0.243137, 0.807843, 0.768627, 0.368627, 0.698039, 0.698039, 0.698039, 0.682353, 0.682353, 0.682353, 0.380392, 0.380392, 0.380392, 0.698039, 0.654902, 0.243137, 0.380392, 0.352941, 0.117647, 0.682353, 0.647059, 0.298039, 0.427451, 0.427451, 0.427451, 0.215686, 0.215686, 0.215686, 0.380392, 0.380392, 0.380392, 0.380392, 0.380392, 0.380392, 0.215686, 0.215686, 0.215686, 0.380392, 0.380392, 0.380392, 0.376471, 0.352941, 0.117647, 0.380392, 0.356863, 0.117647, 0.792157, 0.745098, 0.282353, 0.376471, 0.352941, 0.117647, 0.792157, 0.745098, 0.282353, 0.380392, 0.356863, 0.117647, 0.152941, 0.207843, 0.639216, 0.207843, 0.254902, 0.6, 0.156863, 0.211765, 0.647059, 0.396078, 0.427451, 0.639216, 0.431373, 0.454902, 0.647059, 0.6, 0.6, 0.6, 0.152941, 0.207843, 0.631373, 0.388235, 0.411765, 0.6, 0.152941, 0.207843, 0.639216, 0.301961, 0.337255, 0.631373, 0.396078, 0.427451, 0.639216, 0.6, 0.6, 0.6, 0.545098, 0.54902, 0.6, 0.388235, 0.411765, 0.6, 0.156863, 0.211765, 0.639216, 0.301961, 0.337255, 0.631373, 0.6, 0.6, 0.6, 0.25098, 0.294118, 0.639216, 0.14902, 0.2, 0.611765, 0.141176, 0.192157, 0.596078, 0.156863, 0.211765, 0.647059, 0.286275, 0.321569, 0.615686, 0.513726, 0.521569, 0.596078, 0.431373, 0.454902, 0.647059, 0.14902, 0.2, 0.615686, 0.141176, 0.192157, 0.596078, 0.141176, 0.192157, 0.6, 0.286275, 0.321569, 0.615686, 0.145098, 0.196078, 0.6, 0.513726, 0.521569, 0.596078, 0.141176, 0.192157, 0.6, 0.141176, 0.188235, 0.54902, 0.329412, 0.364706, 0.65098, 0.145098, 0.196078, 0.6, 0.160784, 0.215686, 0.65098, 0.262745, 0.298039, 0.54902, 0.333333, 0.364706, 0.65098, 0.443137, 0.45098, 0.533333, 0.635294, 0.635294, 0.635294, 0.160784, 0.215686, 0.65098, 0.403922, 0.431373, 0.635294, 0.137255, 0.180392, 0.533333, 0.635294, 0.635294, 0.635294, 0.6, 0.6, 0.6, 0.647059, 0.647059, 0.647059, 0.403922, 0.435294, 0.635294, 0.623529, 0.623529, 0.647059, 0.572549, 0.576471, 0.6, 0.596078, 0.596078, 0.596078, 0.564706, 0.564706, 0.564706, 0.647059, 0.647059, 0.647059, 0.662745, 0.662745, 0.67451, 0.564706, 0.564706, 0.564706, 0.623529, 0.623529, 0.647059, 0.564706, 0.564706, 0.564706, 0.541176, 0.552941, 0.662745, 0.67451, 0.67451, 0.67451, 0.180392, 0.231373, 0.631373, 0.458824, 0.482353, 0.662745, 0.666667, 0.666667, 0.67451, 0.203922, 0.247059, 0.631373, 0.537255, 0.552941, 0.662745, 0.176471, 0.235294, 0.698039, 0.184314, 0.235294, 0.631373, 0.203922, 0.258824, 0.698039, 0.458824, 0.482353, 0.662745, 0.176471, 0.235294, 0.698039, 0.384314, 0.415686, 0.635294, 0.168627, 0.223529, 0.67451, 0.203922, 0.258824, 0.698039, 0.215686, 0.262745, 0.67451, 0.529412, 0.541176, 0.635294, 0.168627, 0.223529, 0.67451, 0.458824, 0.478431, 0.627451, 0.156863, 0.211765, 0.639216, 0.215686, 0.262745, 0.67451, 0.25098, 0.294118, 0.639216, 0.572549, 0.580392, 0.627451, 0.12549, 0.172549, 0.54902, 0.168627, 0.223529, 0.67451, 0.121569, 0.168627, 0.533333, 0.129412, 0.176471, 0.54902, 0.129412, 0.176471, 0.533333, 0.215686, 0.262745, 0.67451, 0.109804, 0.14902, 0.486275, 0.176471, 0.235294, 0.698039, 0.12549, 0.172549, 0.54902, 0.109804, 0.14902, 0.486275, 0.129412, 0.176471, 0.54902, 0.203922, 0.258824, 0.698039, 0.203922, 0.247059, 0.631373, 0.176471, 0.235294, 0.698039, 0.07451, 0.105882, 0.341176, 0.109804, 0.14902, 0.486275, 0.203922, 0.258824, 0.701961, 0.066667, 0.098039, 0.341176, 0.67451, 0.67451, 0.67451, 0.203922, 0.247059, 0.631373, 0.427451, 0.427451, 0.427451, 0.066667, 0.098039, 0.341176, 0.180392, 0.231373, 0.631373, 0.25098, 0.266667, 0.427451, 0.623529, 0.623529, 0.623529, 0.647059, 0.647059, 0.647059, 0.427451, 0.427451, 0.427451, 0.329412, 0.360784, 0.623529, 0.25098, 0.266667, 0.427451, 0.623529, 0.623529, 0.647059, 0.635294, 0.635294, 0.635294, 0.643137, 0.643137, 0.643137, 0.721569, 0.721569, 0.729412, 0.329412, 0.360784, 0.623529, 0.623529, 0.623529, 0.647059, 0.207843, 0.266667, 0.729412, 0.243137, 0.305882, 0.807843, 0.333333, 0.364706, 0.65098, 0.721569, 0.721569, 0.729412, 0.203922, 0.270588, 0.807843, 0.207843, 0.266667, 0.729412, 0.160784, 0.215686, 0.65098, 0.141176, 0.192157, 0.6, 0.329412, 0.364706, 0.65098, 0.207843, 0.278431, 0.823529, 0.203922, 0.270588, 0.807843, 0.160784, 0.215686, 0.65098, 0.207843, 0.278431, 0.823529, 0.145098, 0.2, 0.615686, 0.141176, 0.192157, 0.596078, 0.207843, 0.27451, 0.811765, 0.207843, 0.278431, 0.823529, 0.145098, 0.196078, 0.6, 0.235294, 0.301961, 0.811765, 0.188235, 0.25098, 0.74902, 0.156863, 0.211765, 0.647059, 0.207843, 0.27451, 0.811765, 0.32549, 0.376471, 0.74902, 0.235294, 0.301961, 0.811765, 0.431373, 0.454902, 0.647059, 0.121569, 0.168627, 0.533333, 0.156863, 0.211765, 0.639216, 0.141176, 0.192157, 0.596078, 0.129412, 0.176471, 0.533333, 0.219608, 0.262745, 0.596078, 0.25098, 0.294118, 0.639216, 0.141176, 0.192157, 0.596078, 0.152941, 0.207843, 0.631373, 0.164706, 0.219608, 0.670588, 0.219608, 0.262745, 0.596078, 0.262745, 0.305882, 0.670588, 0.301961, 0.337255, 0.631373, 0.164706, 0.219608, 0.670588, 0.152941, 0.207843, 0.639216, 0.188235, 0.25098, 0.74902, 0.262745, 0.305882, 0.670588, 0.32549, 0.372549, 0.74902, 0.396078, 0.427451, 0.639216, 0.968627, 0.968627, 0.968627, 0.988235, 0.988235, 0.988235, 0.964706, 0.964706, 0.964706, 0.968627, 0.968627, 0.968627, 0.964706, 0.964706, 0.964706, 0.988235, 0.988235, 0.988235, 0.964706, 0.964706, 0.964706, 0.882353, 0.882353, 0.882353, 0.862745, 0.862745, 0.862745, 0.964706, 0.964706, 0.964706, 0.862745, 0.862745, 0.862745, 0.882353, 0.882353, 0.882353, 0.945098, 0.945098, 0.945098, 0.992157, 0.992157, 0.992157, 0.862745, 0.862745, 0.862745, 0.909804, 0.909804, 0.909804, 0.992157, 0.992157, 0.992157, 0.862745, 0.862745, 0.862745, 0.992157, 0.992157, 0.992157, 0.937255, 0.937255, 0.937255, 0.909804, 0.909804, 0.909804, 0.976471, 0.976471, 0.976471, 0.937255, 0.937255, 0.937255, 0.909804, 0.909804, 0.909804, 0.937255, 0.937255, 0.937255, 0.94902, 0.94902, 0.94902, 0.976471, 0.976471, 0.976471, 0.972549, 0.972549, 0.972549, 0.94902, 0.94902, 0.94902, 0.976471, 0.976471, 0.976471, 0.972549, 0.972549, 0.972549, 0.94902, 0.94902, 0.94902, 0.878431, 0.878431, 0.878431, 0.972549, 0.972549, 0.972549, 0.878431, 0.878431, 0.878431, 0.94902, 0.94902, 0.94902, 0.819608, 0.819608, 0.819608, 0.52549, 0.52549, 0.52549, 0.878431, 0.878431, 0.878431, 0.564706, 0.564706, 0.564706, 0.52549, 0.52549, 0.52549, 0.878431, 0.878431, 0.878431, 0.564706, 0.564706, 0.564706, 0.52549, 0.52549, 0.52549, 0.305882, 0.305882, 0.305882, 0.564706, 0.564706, 0.564706, 0.305882, 0.305882, 0.305882, 0.52549, 0.52549, 0.52549, 0.305882, 0.305882, 0.305882, 0.321569, 0.321569, 0.321569, 0.227451, 0.227451, 0.227451, 0.305882, 0.305882, 0.305882, 0.227451, 0.227451, 0.227451, 0.321569, 0.321569, 0.321569, 0.560784, 0.560784, 0.560784, 0.309804, 0.309804, 0.309804, 0.584314, 0.584314, 0.584314, 0.443137, 0.443137, 0.443137, 0.309804, 0.309804, 0.309804, 0.584314, 0.584314, 0.584314, 0.564706, 0.564706, 0.564706, 0.560784, 0.560784, 0.560784, 0.607843, 0.607843, 0.607843, 0.584314, 0.584314, 0.584314, 0.560784, 0.560784, 0.560784, 0.607843, 0.607843, 0.607843, 0.270588, 0.270588, 0.270588, 0.564706, 0.564706, 0.564706, 0.337255, 0.337255, 0.337255, 0.607843, 0.607843, 0.607843, 0.564706, 0.564706, 0.564706, 0.337255, 0.337255, 0.337255, 0.337255, 0.337255, 0.337255, 0.101961, 0.101961, 0.101961, 0.270588, 0.270588, 0.270588, 0.337255, 0.337255, 0.337255, 0.270588, 0.270588, 0.270588, 0.101961, 0.101961, 0.101961, 0.498039, 0.498039, 0.498039, 0.352941, 0.352941, 0.352941, 0.337255, 0.337255, 0.337255, 0.498039, 0.498039, 0.498039, 0.337255, 0.337255, 0.337255, 0.352941, 0.352941, 0.352941, 0.670588, 0.670588, 0.670588, 0.619608, 0.619608, 0.619608, 0.498039, 0.498039, 0.498039, 0.670588, 0.670588, 0.670588, 0.498039, 0.498039, 0.498039, 0.619608, 0.619608, 0.619608, 0.662745, 0.662745, 0.662745, 0.694118, 0.694118, 0.694118, 0.670588, 0.670588, 0.670588, 0.662745, 0.662745, 0.662745, 0.670588, 0.670588, 0.670588, 0.694118, 0.694118, 0.694118, 0.662745, 0.662745, 0.662745, 0.670588, 0.670588, 0.670588, 0.584314, 0.584314, 0.584314, 0.662745, 0.662745, 0.662745, 0.584314, 0.584314, 0.584314, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.670588, 0.498039, 0.498039, 0.498039, 0.607843, 0.607843, 0.607843, 0.337255, 0.337255, 0.337255, 0.498039, 0.498039, 0.498039, 0.607843, 0.607843, 0.607843, 0.666667, 0.666667, 0.666667, 0.662745, 0.662745, 0.662745, 0.443137, 0.443137, 0.443137, 0.584314, 0.584314, 0.584314, 0.662745, 0.662745, 0.662745, 0.443137, 0.443137, 0.443137, 0.662745, 0.662745, 0.662745, 0.72549, 0.72549, 0.72549, 0.662745, 0.662745, 0.662745, 0.662745, 0.466667, 0.521569, 0.662745, 0.662745, 0.662745, 0.72549, 0.694118, 0.701961, 0.752941, 0.752941, 0.752941, 0.592157, 0.592157, 0.592157, 0.745098, 0.745098, 0.745098, 0.6, 0.6, 0.6, 0.592157, 0.592157, 0.592157, 0.745098, 0.745098, 0.745098, 0.72549, 0.72549, 0.72549, 0.662745, 0.662745, 0.662745, 0.752941, 0.752941, 0.752941, 0.592157, 0.592157, 0.592157, 0.666667, 0.666667, 0.666667, 0.752941, 0.752941, 0.752941, 0.533333, 0.533333, 0.533333, 0.745098, 0.745098, 0.745098, 0.458824, 0.458824, 0.458824, 0.6, 0.6, 0.6, 0.745098, 0.745098, 0.745098, 0.458824, 0.458824, 0.458824, 0.533333, 0.533333, 0.533333, 0.458824, 0.458824, 0.458824, 0.180392, 0.180392, 0.180392, 0.227451, 0.227451, 0.227451, 0.458824, 0.458824, 0.458824, 0.180392, 0.180392, 0.180392, 0.564706, 0.243137, 0.329412, 0.556863, 0.521569, 0.533333, 0.384314, 0.384314, 0.384314, 0.407843, 0.407843, 0.407843, 0.556863, 0.537255, 0.541176, 0.384314, 0.384314, 0.384314, 0.384314, 0.384314, 0.384314, 0.407843, 0.407843, 0.407843, 0.164706, 0.164706, 0.164706, 0.294118, 0.294118, 0.294118, 0.407843, 0.407843, 0.407843, 0.164706, 0.164706, 0.164706, 0.066667, 0.066667, 0.066667, 0.164706, 0.164706, 0.164706, 0.305882, 0.305882, 0.305882, 0.066667, 0.066667, 0.066667, 0.305882, 0.305882, 0.305882, 0.164706, 0.164706, 0.164706, 0.309804, 0.309804, 0.309804, 0.066667, 0.066667, 0.066667, 0.443137, 0.443137, 0.443137, 0.309804, 0.309804, 0.309804, 0.443137, 0.443137, 0.443137, 0.066667, 0.066667, 0.066667, 0.666667, 0.666667, 0.666667, 0.443137, 0.443137, 0.443137, 0.592157, 0.592157, 0.592157, 0.305882, 0.305882, 0.305882, 0.443137, 0.443137, 0.443137, 0.592157, 0.592157, 0.592157, 0.6, 0.6, 0.6, 0.564706, 0.564706, 0.564706, 0.384314, 0.384314, 0.384314, 0.6, 0.6, 0.6, 0.384314, 0.384314, 0.384314, 0.564706, 0.564706, 0.564706, 0.772549, 0.341176, 0.458824, 0.729412, 0.321569, 0.427451, 0.564706, 0.243137, 0.329412, 0.556863, 0.537255, 0.541176, 0.729412, 0.321569, 0.427451, 0.564706, 0.243137, 0.329412, 0.960784, 0.960784, 0.960784, 0.929412, 0.929412, 0.929412, 1.0, 1.0, 1.0, 0.980392, 0.980392, 0.980392, 0.929412, 0.929412, 0.929412, 1.0, 1.0, 1.0, 0.952941, 0.952941, 0.952941, 1.0, 1.0, 1.0, 0.945098, 0.945098, 0.945098, 0.952941, 0.952941, 0.952941, 0.945098, 0.945098, 0.945098, 1.0, 1.0, 1.0, 0.772549, 0.341176, 0.454902, 0.952941, 0.952941, 0.952941, 0.729412, 0.321569, 0.427451, 0.772549, 0.341176, 0.454902, 0.729412, 0.321569, 0.427451, 0.952941, 0.952941, 0.952941, 0.937255, 0.937255, 0.937255, 0.972549, 0.972549, 0.972549, 0.886275, 0.886275, 0.886275, 0.937255, 0.937255, 0.937255, 0.886275, 0.886275, 0.886275, 0.972549, 0.972549, 0.972549, 0.909804, 0.909804, 0.909804, 0.937255, 0.937255, 0.937255, 0.858824, 0.858824, 0.858824, 0.909804, 0.909804, 0.909804, 0.858824, 0.858824, 0.858824, 0.937255, 0.937255, 0.937255, 0.92549, 0.92549, 0.92549, 0.909804, 0.909804, 0.909804, 0.85098, 0.85098, 0.85098, 0.92549, 0.92549, 0.92549, 0.85098, 0.85098, 0.85098, 0.909804, 0.909804, 0.909804, 0.858824, 0.858824, 0.858824, 0.921569, 0.921569, 0.921569, 0.776471, 0.776471, 0.776471, 0.858824, 0.858824, 0.858824, 0.776471, 0.776471, 0.776471, 0.92549, 0.92549, 0.92549, 0.658824, 0.658824, 0.658824, 0.658824, 0.580392, 0.603922, 0.776471, 0.776471, 0.776471, 0.858824, 0.858824, 0.858824, 0.658824, 0.294118, 0.392157, 0.776471, 0.772549, 0.772549, 0.658824, 0.580392, 0.6, 0.729412, 0.321569, 0.427451, 0.858824, 0.858824, 0.858824, 0.658824, 0.294118, 0.392157, 0.858824, 0.858824, 0.858824, 0.729412, 0.321569, 0.427451, 0.858824, 0.858824, 0.858824, 0.945098, 0.945098, 0.945098, 0.92549, 0.92549, 0.92549, 0.858824, 0.858824, 0.858824, 0.92549, 0.92549, 0.92549, 0.945098, 0.945098, 0.945098, 0.921569, 0.921569, 0.921569, 0.980392, 0.980392, 0.980392, 0.909804, 0.909804, 0.909804, 0.921569, 0.921569, 0.921569, 0.909804, 0.909804, 0.909804, 0.980392, 0.980392, 0.980392, 0.909804, 0.909804, 0.909804, 0.929412, 0.929412, 0.929412, 0.937255, 0.937255, 0.937255, 0.909804, 0.909804, 0.909804, 0.937255, 0.937255, 0.937255, 0.929412, 0.929412, 0.929412, 0.976471, 0.976471, 0.976471, 0.972549, 0.972549, 0.972549, 0.952941, 0.952941, 0.952941, 0.937255, 0.937255, 0.937255, 0.972549, 0.972549, 0.972549, 0.952941, 0.952941, 0.952941, 0.894118, 0.894118, 0.894118, 0.952941, 0.952941, 0.952941, 0.960784, 0.960784, 0.960784, 0.929412, 0.929412, 0.929412, 0.952941, 0.952941, 0.952941, 0.960784, 0.960784, 0.960784, 0.964706, 0.964706, 0.964706, 0.862745, 0.862745, 0.862745, 0.976471, 0.976471, 0.976471, 0.909804, 0.909804, 0.909804, 0.862745, 0.862745, 0.862745, 0.976471, 0.976471, 0.976471, 0.894118, 0.894118, 0.894118, 0.964706, 0.964706, 0.964706, 0.952941, 0.952941, 0.952941, 0.894118, 0.894118, 0.894118, 0.952941, 0.952941, 0.952941, 0.964706, 0.964706, 0.964706, 0.878431, 0.878431, 0.878431, 0.564706, 0.564706, 0.564706, 0.886275, 0.886275, 0.886275, 0.6, 0.6, 0.6, 0.564706, 0.564706, 0.564706, 0.886275, 0.886275, 0.886275, 0.886275, 0.886275, 0.886275, 0.6, 0.6, 0.6, 0.858824, 0.858824, 0.858824, 0.886275, 0.886275, 0.886275, 0.858824, 0.858824, 0.858824, 0.6, 0.6, 0.6, 0.858824, 0.858824, 0.858824, 0.65098, 0.65098, 0.65098, 0.85098, 0.85098, 0.85098, 0.858824, 0.858824, 0.858824, 0.85098, 0.85098, 0.85098, 0.65098, 0.65098, 0.65098, 0.658824, 0.658824, 0.658824, 0.776471, 0.776471, 0.776471, 0.776471, 0.776471, 0.776471, 0.85098, 0.85098, 0.85098, 0.776471, 0.776471, 0.776471, 0.776471, 0.776471, 0.776471, 0.305882, 0.305882, 0.305882, 0.294118, 0.294118, 0.294118, 0.309804, 0.309804, 0.309804, 0.313726, 0.313726, 0.313726, 0.294118, 0.294118, 0.294118, 0.309804, 0.309804, 0.309804, 0.384314, 0.384314, 0.384314, 0.309804, 0.309804, 0.309804, 0.133333, 0.133333, 0.133333, 0.313726, 0.313726, 0.313726, 0.309804, 0.309804, 0.309804, 0.133333, 0.133333, 0.133333, 0.384314, 0.384314, 0.384314, 0.305882, 0.305882, 0.305882, 0.309804, 0.309804, 0.309804, 0.384314, 0.384314, 0.384314, 0.309804, 0.309804, 0.309804, 0.305882, 0.305882, 0.305882, 0.294118, 0.294118, 0.309804, 0.227451, 0.227451, 0.227451, 0.592157, 0.592157, 0.592157, 0.309804, 0.309804, 0.309804, 0.592157, 0.584314, 0.541176, 0.227451, 0.227451, 0.227451, 0.658824, 0.658824, 0.658824, 0.427451, 0.427451, 0.427451, 0.658824, 0.580392, 0.603922, 0.486275, 0.478431, 0.486275, 0.427451, 0.427451, 0.427451, 0.658824, 0.294118, 0.392157, 0.729412, 0.321569, 0.427451, 0.658824, 0.580392, 0.603922, 0.556863, 0.521569, 0.533333, 0.486275, 0.478431, 0.486275, 0.658824, 0.294118, 0.392157, 0.556863, 0.537255, 0.541176, 0.133333, 0.133333, 0.133333, 0.313726, 0.313726, 0.313726, 0.427451, 0.427451, 0.427451, 0.486275, 0.478431, 0.486275, 0.313726, 0.313726, 0.313726, 0.427451, 0.427451, 0.427451, 0.294118, 0.294118, 0.294118, 0.407843, 0.407843, 0.407843, 0.313726, 0.313726, 0.313726, 0.486275, 0.486275, 0.486275, 0.407843, 0.407843, 0.407843, 0.313726, 0.313726, 0.313726, 0.968627, 0.968627, 0.968627, 0.933333, 0.933333, 0.933333, 0.643137, 0.643137, 0.643137, 0.647059, 0.647059, 0.647059, 0.933333, 0.933333, 0.933333, 0.643137, 0.643137, 0.643137, 0.956863, 0.956863, 0.956863, 0.968627, 0.968627, 0.968627, 0.635294, 0.635294, 0.635294, 0.956863, 0.956863, 0.956863, 0.635294, 0.635294, 0.635294, 0.968627, 0.968627, 0.968627, 0.956863, 0.956863, 0.956863, 0.635294, 0.635294, 0.635294, 0.729412, 0.729412, 0.729412, 0.639216, 0.639216, 0.639216, 0.635294, 0.635294, 0.635294, 0.729412, 0.729412, 0.729412, 0.729412, 0.729412, 0.729412, 0.639216, 0.639216, 0.639216, 0.486275, 0.486275, 0.486275, 0.745098, 0.745098, 0.745098, 0.639216, 0.639216, 0.639216, 0.486275, 0.486275, 0.486275, 0.486275, 0.486275, 0.486275, 0.752941, 0.752941, 0.752941, 0.329412, 0.329412, 0.329412, 0.741176, 0.741176, 0.741176, 0.745098, 0.745098, 0.745098, 0.329412, 0.329412, 0.329412, 0.411765, 0.411765, 0.411765, 0.329412, 0.329412, 0.329412, 0.760784, 0.760784, 0.760784, 0.411765, 0.411765, 0.411765, 0.760784, 0.760784, 0.760784, 0.329412, 0.329412, 0.329412, 0.760784, 0.760784, 0.760784, 0.741176, 0.741176, 0.741176, 0.952941, 0.952941, 0.952941, 0.760784, 0.760784, 0.760784, 0.960784, 0.960784, 0.960784, 0.741176, 0.741176, 0.741176, 0.741176, 0.741176, 0.741176, 0.752941, 0.752941, 0.752941, 0.898039, 0.898039, 0.898039, 0.741176, 0.741176, 0.741176, 0.898039, 0.898039, 0.898039, 0.745098, 0.745098, 0.745098, 0.639216, 0.639216, 0.639216, 0.643137, 0.643137, 0.643137, 0.752941, 0.752941, 0.752941, 0.831373, 0.831373, 0.831373, 0.643137, 0.643137, 0.643137, 0.745098, 0.745098, 0.745098, 0.635294, 0.635294, 0.635294, 0.333333, 0.333333, 0.333333, 0.639216, 0.639216, 0.639216, 0.643137, 0.643137, 0.643137, 0.333333, 0.333333, 0.333333, 0.639216, 0.639216, 0.639216, 0.643137, 0.643137, 0.643137, 0.403922, 0.403922, 0.403922, 0.635294, 0.635294, 0.635294, 0.333333, 0.333333, 0.333333, 0.403922, 0.403922, 0.403922, 0.635294, 0.635294, 0.635294, 0.403922, 0.403922, 0.403922, 0.643137, 0.643137, 0.643137, 0.458824, 0.458824, 0.458824, 0.403922, 0.403922, 0.403922, 0.458824, 0.458824, 0.458824, 0.643137, 0.643137, 0.643137, 0.384314, 0.384314, 0.384314, 0.133333, 0.133333, 0.133333, 0.490196, 0.490196, 0.490196, 0.690196, 0.690196, 0.690196, 0.133333, 0.133333, 0.133333, 0.490196, 0.490196, 0.490196, 0.133333, 0.133333, 0.133333, 0.411765, 0.411765, 0.411765, 0.690196, 0.690196, 0.690196, 0.760784, 0.760784, 0.760784, 0.411765, 0.411765, 0.411765, 0.690196, 0.690196, 0.690196, 0.65098, 0.65098, 0.65098, 0.6, 0.6, 0.6, 0.490196, 0.490196, 0.490196, 0.65098, 0.65098, 0.65098, 0.490196, 0.490196, 0.490196, 0.6, 0.6, 0.6, 0.933333, 0.933333, 0.933333, 0.776471, 0.776471, 0.776471, 0.647059, 0.647059, 0.647059, 0.933333, 0.933333, 0.933333, 0.647059, 0.647059, 0.647059, 0.776471, 0.776471, 0.776471, 0.690196, 0.690196, 0.690196, 0.760784, 0.760784, 0.760784, 0.811765, 0.811765, 0.811765, 0.690196, 0.690196, 0.690196, 0.811765, 0.811765, 0.811765, 0.760784, 0.760784, 0.760784, 0.647059, 0.647059, 0.647059, 0.607843, 0.607843, 0.607843, 0.811765, 0.811765, 0.811765, 0.690196, 0.690196, 0.690196, 0.607843, 0.607843, 0.607843, 0.811765, 0.811765, 0.811765, 0.85098, 0.85098, 0.85098, 0.67451, 0.67451, 0.67451, 0.647059, 0.647059, 0.647059, 0.85098, 0.85098, 0.85098, 0.647059, 0.647059, 0.647059, 0.67451, 0.67451, 0.67451, 0.447059, 0.447059, 0.447059, 0.517647, 0.517647, 0.517647, 0.67451, 0.67451, 0.67451, 0.607843, 0.607843, 0.607843, 0.517647, 0.517647, 0.517647, 0.67451, 0.67451, 0.67451, 0.580392, 0.580392, 0.580392, 0.517647, 0.517647, 0.517647, 0.466667, 0.466667, 0.466667, 0.447059, 0.447059, 0.447059, 0.517647, 0.517647, 0.517647, 0.466667, 0.466667, 0.466667, 0.647059, 0.647059, 0.647059, 0.580392, 0.580392, 0.580392, 0.458824, 0.458824, 0.458824, 0.466667, 0.466667, 0.466667, 0.580392, 0.580392, 0.580392, 0.458824, 0.458824, 0.458824, 0.65098, 0.65098, 0.65098, 0.517647, 0.517647, 0.517647, 0.776471, 0.776471, 0.776471, 0.580392, 0.580392, 0.580392, 0.517647, 0.517647, 0.517647, 0.776471, 0.776471, 0.776471, 0.65098, 0.65098, 0.65098, 0.490196, 0.490196, 0.490196, 0.517647, 0.517647, 0.517647, 0.607843, 0.607843, 0.607843, 0.490196, 0.490196, 0.490196, 0.517647, 0.517647, 0.517647, 0.521569, 0.521569, 0.521569, 0.458824, 0.458824, 0.458824, 0.513726, 0.513726, 0.513726, 0.521569, 0.521569, 0.521569, 0.513726, 0.513726, 0.513726, 0.458824, 0.458824, 0.458824, 0.466667, 0.466667, 0.466667, 0.447059, 0.447059, 0.447059, 0.513726, 0.513726, 0.513726, 0.517647, 0.517647, 0.517647, 0.447059, 0.447059, 0.447059, 0.513726, 0.513726, 0.513726, 0.517647, 0.517647, 0.517647, 0.447059, 0.447059, 0.447059, 0.741176, 0.741176, 0.741176, 0.517647, 0.517647, 0.517647, 0.737255, 0.737255, 0.737255, 0.447059, 0.447059, 0.447059, 0.67451, 0.67451, 0.67451, 0.85098, 0.85098, 0.85098, 0.741176, 0.741176, 0.741176, 0.768627, 0.768627, 0.768627, 0.85098, 0.85098, 0.85098, 0.737255, 0.737255, 0.737255, 0.85098, 0.85098, 0.85098, 0.647059, 0.647059, 0.647059, 0.768627, 0.768627, 0.768627, 0.764706, 0.764706, 0.764706, 0.647059, 0.647059, 0.647059, 0.768627, 0.768627, 0.768627, 0.764706, 0.764706, 0.764706, 0.647059, 0.647059, 0.647059, 0.760784, 0.760784, 0.760784, 0.764706, 0.764706, 0.764706, 0.760784, 0.760784, 0.760784, 0.647059, 0.647059, 0.647059, 0.760784, 0.760784, 0.760784, 0.811765, 0.811765, 0.811765, 0.898039, 0.898039, 0.898039, 0.760784, 0.760784, 0.760784, 0.898039, 0.898039, 0.898039, 0.811765, 0.811765, 0.811765, 0.552941, 0.552941, 0.552941, 0.403922, 0.403922, 0.403922, 0.52549, 0.52549, 0.52549, 0.552941, 0.552941, 0.552941, 0.521569, 0.521569, 0.521569, 0.403922, 0.403922, 0.403922, 0.447059, 0.447059, 0.447059, 0.333333, 0.333333, 0.333333, 0.552941, 0.552941, 0.552941, 0.447059, 0.447059, 0.447059, 0.552941, 0.552941, 0.552941, 0.333333, 0.333333, 0.333333, 0.647059, 0.647059, 0.647059, 0.643137, 0.643137, 0.643137, 0.447059, 0.447059, 0.447059, 0.647059, 0.647059, 0.647059, 0.447059, 0.447059, 0.447059, 0.643137, 0.643137, 0.643137, 0.831373, 0.831373, 0.831373, 0.643137, 0.643137, 0.643137, 0.784314, 0.784314, 0.784314, 0.647059, 0.647059, 0.647059, 0.643137, 0.643137, 0.643137, 0.784314, 0.784314, 0.784314, 0.898039, 0.898039, 0.898039, 0.831373, 0.831373, 0.831373, 0.85098, 0.85098, 0.85098, 0.784314, 0.784314, 0.784314, 0.831373, 0.831373, 0.831373, 0.85098, 0.85098, 0.85098, 0.952941, 0.952941, 0.952941, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.85098, 0.85098, 0.85098, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.898039, 0.768627, 0.768627, 0.768627, 0.764706, 0.764706, 0.764706, 0.670588, 0.670588, 0.670588, 0.698039, 0.698039, 0.698039, 0.764706, 0.764706, 0.764706, 0.67451, 0.67451, 0.67451, 0.670588, 0.670588, 0.670588, 0.698039, 0.698039, 0.698039, 0.670588, 0.670588, 0.670588, 0.654902, 0.654902, 0.654902, 0.698039, 0.698039, 0.698039, 0.670588, 0.670588, 0.670588, 0.701961, 0.701961, 0.701961, 0.670588, 0.670588, 0.670588, 0.643137, 0.643137, 0.643137, 0.701961, 0.701961, 0.701961, 0.643137, 0.643137, 0.643137, 0.670588, 0.670588, 0.670588, 0.701961, 0.701961, 0.701961, 0.643137, 0.643137, 0.643137, 0.768627, 0.768627, 0.768627, 0.662745, 0.662745, 0.662745, 0.643137, 0.643137, 0.643137, 0.768627, 0.768627, 0.768627, 0.768627, 0.768627, 0.768627, 0.552941, 0.552941, 0.552941, 0.701961, 0.701961, 0.701961, 0.768627, 0.768627, 0.768627, 0.701961, 0.701961, 0.701961, 0.552941, 0.552941, 0.552941, 0.513726, 0.513726, 0.513726, 0.670588, 0.670588, 0.670588, 0.521569, 0.521569, 0.521569, 0.701961, 0.701961, 0.701961, 0.670588, 0.670588, 0.670588, 0.521569, 0.521569, 0.521569, 0.513726, 0.513726, 0.513726, 0.517647, 0.517647, 0.517647, 0.670588, 0.670588, 0.670588, 0.67451, 0.67451, 0.67451, 0.517647, 0.517647, 0.517647, 0.670588, 0.670588, 0.670588, 0.741176, 0.741176, 0.741176, 0.768627, 0.768627, 0.768627, 0.517647, 0.517647, 0.517647, 0.737255, 0.737255, 0.737255, 0.517647, 0.517647, 0.517647, 0.768627, 0.768627, 0.768627, 0.760784, 0.760784, 0.760784, 0.898039, 0.898039, 0.898039, 0.764706, 0.764706, 0.764706, 0.698039, 0.698039, 0.698039, 0.898039, 0.898039, 0.898039, 0.764706, 0.764706, 0.764706, 0.898039, 0.898039, 0.898039, 0.85098, 0.85098, 0.85098, 0.698039, 0.698039, 0.698039, 0.898039, 0.898039, 0.898039, 0.698039, 0.698039, 0.698039, 0.85098, 0.85098, 0.85098, 0.784314, 0.784314, 0.784314, 0.643137, 0.643137, 0.643137, 0.85098, 0.85098, 0.85098, 0.654902, 0.654902, 0.654902, 0.643137, 0.643137, 0.643137, 0.85098, 0.85098, 0.85098, 0.647059, 0.647059, 0.647059, 0.662745, 0.662745, 0.662745, 0.784314, 0.784314, 0.784314, 0.643137, 0.643137, 0.643137, 0.662745, 0.662745, 0.662745, 0.784314, 0.784314, 0.784314, 0.647059, 0.647059, 0.647059, 0.447059, 0.447059, 0.447059, 0.662745, 0.662745, 0.662745, 0.647059, 0.647059, 0.647059, 0.662745, 0.662745, 0.662745, 0.447059, 0.447059, 0.447059, 0.380392, 0.380392, 0.380392, 0.329412, 0.329412, 0.329412, 0.27451, 0.27451, 0.27451, 0.380392, 0.380392, 0.380392, 0.27451, 0.27451, 0.27451, 0.329412, 0.329412, 0.329412, 0.490196, 0.490196, 0.490196, 0.486275, 0.486275, 0.486275, 0.380392, 0.380392, 0.380392, 0.490196, 0.490196, 0.490196, 0.380392, 0.380392, 0.380392, 0.486275, 0.486275, 0.486275, 0.729412, 0.729412, 0.729412, 0.486275, 0.486275, 0.486275, 0.690196, 0.690196, 0.690196, 0.490196, 0.490196, 0.490196, 0.486275, 0.486275, 0.486275, 0.690196, 0.690196, 0.690196, 0.956863, 0.956863, 0.956863, 0.729412, 0.729412, 0.729412, 0.878431, 0.878431, 0.878431, 0.690196, 0.690196, 0.690196, 0.729412, 0.729412, 0.729412, 0.878431, 0.878431, 0.878431, 0.968627, 0.968627, 0.968627, 0.956863, 0.956863, 0.956863, 0.870588, 0.870588, 0.870588, 0.878431, 0.878431, 0.878431, 0.956863, 0.956863, 0.956863, 0.870588, 0.870588, 0.870588, 0.933333, 0.933333, 0.933333, 0.968627, 0.968627, 0.968627, 0.878431, 0.878431, 0.878431, 0.870588, 0.870588, 0.870588, 0.968627, 0.968627, 0.968627, 0.878431, 0.878431, 0.878431, 0.870588, 0.870588, 0.870588, 0.380392, 0.380392, 0.380392, 0.878431, 0.878431, 0.878431, 0.27451, 0.27451, 0.27451, 0.380392, 0.380392, 0.380392, 0.878431, 0.878431, 0.878431, 0.380392, 0.380392, 0.380392, 0.870588, 0.870588, 0.870588, 0.490196, 0.490196, 0.490196, 0.380392, 0.380392, 0.380392, 0.490196, 0.490196, 0.490196, 0.870588, 0.870588, 0.870588, 0.658824, 0.658824, 0.658824, 0.776471, 0.776471, 0.776471, 0.878431, 0.878431, 0.878431, 0.933333, 0.933333, 0.933333, 0.776471, 0.721569, 0.737255, 0.878431, 0.878431, 0.878431, 0.427451, 0.427451, 0.427451, 0.658824, 0.658824, 0.658824, 0.27451, 0.27451, 0.27451, 0.427451, 0.427451, 0.427451, 0.27451, 0.27451, 0.27451, 0.658824, 0.65098, 0.65098, 0.411765, 0.411765, 0.411765, 0.133333, 0.133333, 0.133333, 0.27451, 0.27451, 0.27451, 0.411765, 0.411765, 0.411765, 0.27451, 0.27451, 0.27451, 0.133333, 0.133333, 0.133333],

    "uvs": [],

    "faces": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2450, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548, 2549, 2550, 2551, 2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559, 2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573, 2574, 2575, 2576, 2577, 2578, 2579, 2580, 2581, 2582, 2583, 2584, 2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600, 2601, 2602, 2603, 2604, 2605, 2606, 2607, 2608, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628, 2629, 2630, 2631, 2632, 2633, 2634, 2635, 2636, 2637, 2638, 2639, 2640, 2641, 2642, 2643, 2644, 2645, 2646, 2647, 2648, 2649, 2650, 2651, 2652, 2653, 2654, 2655, 2656, 2657, 2658, 2659, 2660, 2661, 2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670, 2671, 2672, 2673, 2674, 2675, 2676, 2677, 2678, 2679, 2680, 2681, 2682, 2683, 2684, 2685, 2686, 2687, 2688, 2689, 2690, 2691, 2692, 2693, 2694, 2695, 2696, 2697, 2698, 2699, 2700, 2701, 2702, 2703, 2704, 2705, 2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716, 2717, 2718, 2719, 2720, 2721, 2722, 2723, 2724, 2725, 2726, 2727, 2728, 2729, 2730, 2731, 2732, 2733, 2734, 2735, 2736, 2737, 2738, 2739, 2740, 2741, 2742, 2743, 2744, 2745, 2746, 2747, 2748, 2749, 2750, 2751, 2752, 2753, 2754, 2755, 2756, 2757, 2758, 2759, 2760, 2761, 2762, 2763, 2764, 2765, 2766, 2767, 2768, 2769, 2770, 2771, 2772, 2773, 2774, 2775, 2776, 2777, 2778, 2779, 2780, 2781, 2782, 2783, 2784, 2785, 2786, 2787, 2788, 2789, 2790, 2791, 2792, 2793, 2794, 2795, 2796, 2797, 2798, 2799, 2800, 2801, 2802, 2803, 2804, 2805, 2806, 2807, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832, 2833, 2834, 2835, 2836, 2837, 2838, 2839, 2840, 2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859, 2860, 2861, 2862, 2863, 2864, 2865, 2866, 2867, 2868, 2869, 2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877, 2878, 2879, 2880, 2881, 2882, 2883, 2884, 2885, 2886, 2887, 2888, 2889, 2890, 2891, 2892, 2893, 2894, 2895, 2896, 2897, 2898, 2899, 2900, 2901, 2902, 2903],

    "bones": [],

    "boneWeights": [],

    "boneIndices": [],

    "animations": {}
};
/* unused harmony default export */ var _unused_webpack_default_export = (monkeyData);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "vertices": [0.915432, 5.795969, 0.881451, 0.915432, 5.795969, 0.608237, -0.846246, 5.795969, 0.608237, 1.373881, -6.117446, 0.707912, 0.915432, -6.70834, 0.881451, 0.915432, -6.70834, 0.608237, -0.846246, -6.70834, 0.881451, -0.846246, -6.70834, 0.608237, 0.915432, -6.70834, 0.608237, 0.915432, 5.795969, 0.881451, -0.846246, 5.795969, 0.881451, -1.304695, 5.064151, 0.707912, -1.304695, -6.117446, 0.707912, -1.304695, -6.117446, 0.434696, -0.846246, -6.70834, 0.608237, 0.273359, -1.118169, 3.291075, 0.378219, 0.836548, 3.22412, 1.34592, 0.782814, 3.466496, 0.766379, 0.925638, 5.392701, -0.201321, 0.979373, 5.150325, -0.306182, -0.975344, 5.21728, 0.661519, -1.029079, 5.459657, -0.306182, -0.975344, 5.21728, 0.273359, -1.118169, 3.291075, -0.306182, -0.975344, 5.21728, -0.201321, 0.979373, 5.150325, 0.378219, 0.836548, 3.22412, 0.378219, 0.836548, 3.22412, -0.201321, 0.979373, 5.150325, 0.766379, 0.925638, 5.392701, 1.241059, -1.171903, 3.533451, 1.34592, 0.782814, 3.466496, 0.766379, 0.925638, 5.392701, 1.216003, 2.550149, 4.111414, 1.257893, 3.010428, 4.477963, 1.890832, 2.690615, 4.675904, 1.212997, 1.047398, 5.179704, 1.270945, 1.684118, 5.686764, 0.39538, 2.126525, 5.412946, 1.212997, 1.047398, 5.179704, 0.337432, 1.489806, 4.905886, 1.216003, 2.550149, 4.111414, 0.337432, 1.489806, 4.905886, 0.39538, 2.126525, 5.412946, 1.257893, 3.010428, 4.477963, 0.39538, 2.126525, 5.412946, 1.270945, 1.684118, 5.686764, 1.890832, 2.690615, 4.675904, 1.212997, 1.047398, 5.179704, 1.848942, 2.230336, 4.309355, 1.890832, 2.690615, 4.675904, -0.339434, -2.731112, 4.228433, -0.935627, -2.387277, 4.48565, -0.837469, -1.846554, 4.209549, 0.597607, -2.256881, 5.286973, 0.733392, -1.508882, 4.905033, -0.091341, -1.033244, 5.26085, 0.597607, -2.256881, 5.286973, -0.227126, -1.781243, 5.64279, -0.935627, -2.387277, 4.48565, -0.227126, -1.781243, 5.64279, -0.091341, -1.033244, 5.26085, -0.837469, -1.846554, 4.209549, -0.091341, -1.033244, 5.26085, 0.733392, -1.508882, 4.905033, -0.241276, -2.190389, 3.952332, -0.339434, -2.731112, 4.228433, -0.241276, -2.190389, 3.952332, 0.733392, -1.508882, 4.905033, 1.957057, 3.572295, 3.218596, 1.998948, 4.032575, 3.585145, 2.631887, 3.712762, 3.783086, 1.995413, 2.126594, 4.237054, 2.053362, 2.763314, 4.744114, 1.177796, 3.205721, 4.470296, 1.995413, 2.126594, 4.237054, 1.119848, 2.569002, 3.963236, 1.957057, 3.572295, 3.218596, 1.119848, 2.569002, 3.963236, 1.177796, 3.205721, 4.470296, 1.998948, 4.032575, 3.585145, 1.177796, 3.205721, 4.470296, 2.053362, 2.763314, 4.744114, 2.631887, 3.712762, 3.783086, 1.995413, 2.126594, 4.237054, 2.589997, 3.252482, 3.416537, 2.631887, 3.712762, 3.783086, -1.273591, -2.872927, 2.994739, -1.79915, -2.419674, 3.269506, -1.549238, -1.878061, 3.090327, -0.439175, -2.952308, 4.090083, -0.093463, -2.203078, 3.842218, -0.820486, -1.576079, 4.222312, -0.439175, -2.952308, 4.090083, -1.166198, -2.325309, 4.470177, -1.79915, -2.419674, 3.269506, -1.166198, -2.325309, 4.470177, -0.820486, -1.576079, 4.222312, -1.549238, -1.878061, 3.090327, -0.820486, -1.576079, 4.222312, -0.093463, -2.203078, 3.842218, -1.023678, -2.331314, 2.81556, -1.273591, -2.872927, 2.994739, -1.023678, -2.331314, 2.81556, -0.093463, -2.203078, 3.842218, -0.437969, 1.074508, 2.25767, -0.791921, 0.995225, 2.829967, -0.594317, 1.576022, 2.98223, 1.067662, 0.059518, 2.788923, 1.341014, 0.862954, 2.999551, 0.85138, 0.75328, 3.791229, 1.067662, 0.059518, 2.788923, 0.578028, -0.050157, 3.580601, -0.791921, 0.995225, 2.829967, 0.578028, -0.050157, 3.580601, 0.85138, 0.75328, 3.791229, -0.594317, 1.576022, 2.98223, 0.85138, 0.75328, 3.791229, 1.341014, 0.862954, 2.999551, -0.240365, 1.655306, 2.409932, -0.437969, 1.074508, 2.25767, -0.240365, 1.655306, 2.409932, 1.341014, 0.862954, 2.999551, -0.218727, -1.641346, 1.938488, -0.771039, -1.412685, 2.325727, -0.7359, -0.80697, 2.137654, 1.069467, -1.304541, 3.109166, 1.118076, -0.466637, 2.848998, 0.354045, -0.150323, 3.38468, 1.069467, -1.304541, 3.109166, 0.305435, -0.988227, 3.644848, -0.771039, -1.412685, 2.325727, 0.305435, -0.988227, 3.644848, 0.354045, -0.150323, 3.38468, -0.7359, -0.80697, 2.137654, 0.354045, -0.150323, 3.38468, 1.118076, -0.466637, 2.848998, -0.183588, -1.035631, 1.750414, -0.218727, -1.641346, 1.938488, -0.183588, -1.035631, 1.750414, 1.118076, -0.466637, 2.848998, 0.020467, 1.333338, 0.845288, -0.699936, 1.319906, 0.760712, -0.718466, 1.965472, 0.824974, -0.06811, 0.94881, 2.491139, -0.093742, 1.841842, 2.580033, -1.090298, 1.823262, 2.463037, -0.06811, 0.94881, 2.491139, -1.064667, 0.93023, 2.374142, -0.699936, 1.319906, 0.760712, -1.064667, 0.93023, 2.374142, -1.090298, 1.823262, 2.463037, -0.718466, 1.965472, 0.824974, -1.090298, 1.823262, 2.463037, -0.093742, 1.841842, 2.580033, 0.001938, 1.978904, 0.909549, -0.06811, 0.94881, 2.491139, 0.020467, 1.333338, 0.845288, 0.001938, 1.978904, 0.909549, 0.38364, -2.812012, 0.886159, -0.212076, -2.635732, 0.53614, 0.046143, -2.105385, 0.345424, -0.20289, -1.824912, 2.26526, 0.154313, -1.091265, 2.001437, -0.66976, -0.847411, 1.517245, -0.20289, -1.824912, 2.26526, -1.026963, -1.581058, 1.781068, -0.212076, -2.635732, 0.53614, -1.026963, -1.581058, 1.781068, -0.66976, -0.847411, 1.517245, 0.046143, -2.105385, 0.345424, -0.66976, -0.847411, 1.517245, 0.154313, -1.091265, 2.001437, 0.641859, -2.281665, 0.695443, -0.20289, -1.824912, 2.26526, 0.38364, -2.812012, 0.886159, 0.641859, -2.281665, 0.695443, 0.767397, -0.784525, 5.646865, -0.48259, -0.715115, 5.333786, -0.403881, 0.75212, 5.283528, 0.425996, -0.700389, 6.781572, 0.504706, 0.766847, 6.731315, -0.745282, 0.836256, 6.418235, 0.425996, -0.700389, 6.781572, -0.823991, -0.630978, 6.468493, -0.48259, -0.715115, 5.333786, -0.823991, -0.630978, 6.468493, -0.745282, 0.836256, 6.418235, -0.403881, 0.75212, 5.283528, -0.403881, 0.75212, 5.283528, -0.745282, 0.836256, 6.418235, 0.504706, 0.766847, 6.731315, 0.767397, -0.784525, 5.646865, 0.846107, 0.68271, 5.596608, 0.504706, 0.766847, 6.731315, 1.373881, -6.117446, 0.434696, 0.915432, -6.70834, 0.608237, -0.846246, -6.70834, 0.608237, 1.241059, -1.171903, 3.533451, 0.273359, -1.118169, 3.291075, 1.34592, 0.782814, 3.466496, 0.661519, -1.029079, 5.459657, 0.766379, 0.925638, 5.392701, -0.306182, -0.975344, 5.21728, 1.241059, -1.171903, 3.533451, 0.661519, -1.029079, 5.459657, 0.273359, -1.118169, 3.291075, 0.273359, -1.118169, 3.291075, -0.306182, -0.975344, 5.21728, 0.378219, 0.836548, 3.22412, 1.34592, 0.782814, 3.466496, 0.378219, 0.836548, 3.22412, 0.766379, 0.925638, 5.392701, 0.661519, -1.029079, 5.459657, 1.241059, -1.171903, 3.533451, 0.766379, 0.925638, 5.392701, 1.848942, 2.230336, 4.309355, 1.216003, 2.550149, 4.111414, 1.890832, 2.690615, 4.675904, 0.337432, 1.489806, 4.905886, 1.212997, 1.047398, 5.179704, 0.39538, 2.126525, 5.412946, 1.848942, 2.230336, 4.309355, 1.212997, 1.047398, 5.179704, 1.216003, 2.550149, 4.111414, 1.216003, 2.550149, 4.111414, 0.337432, 1.489806, 4.905886, 1.257893, 3.010428, 4.477963, 1.257893, 3.010428, 4.477963, 0.39538, 2.126525, 5.412946, 1.890832, 2.690615, 4.675904, 1.270945, 1.684118, 5.686764, 1.212997, 1.047398, 5.179704, 1.890832, 2.690615, 4.675904, -0.241276, -2.190389, 3.952332, -0.339434, -2.731112, 4.228433, -0.837469, -1.846554, 4.209549, -0.227126, -1.781243, 5.64279, 0.597607, -2.256881, 5.286973, -0.091341, -1.033244, 5.26085, -0.339434, -2.731112, 4.228433, 0.597607, -2.256881, 5.286973, -0.935627, -2.387277, 4.48565, -0.935627, -2.387277, 4.48565, -0.227126, -1.781243, 5.64279, -0.837469, -1.846554, 4.209549, -0.837469, -1.846554, 4.209549, -0.091341, -1.033244, 5.26085, -0.241276, -2.190389, 3.952332, 0.597607, -2.256881, 5.286973, -0.339434, -2.731112, 4.228433, 0.733392, -1.508882, 4.905033, 2.589997, 3.252482, 3.416537, 1.957057, 3.572295, 3.218596, 2.631887, 3.712762, 3.783086, 1.119848, 2.569002, 3.963236, 1.995413, 2.126594, 4.237054, 1.177796, 3.205721, 4.470296, 2.589997, 3.252482, 3.416537, 1.995413, 2.126594, 4.237054, 1.957057, 3.572295, 3.218596, 1.957057, 3.572295, 3.218596, 1.119848, 2.569002, 3.963236, 1.998948, 4.032575, 3.585145, 1.998948, 4.032575, 3.585145, 1.177796, 3.205721, 4.470296, 2.631887, 3.712762, 3.783086, 2.053362, 2.763314, 4.744114, 1.995413, 2.126594, 4.237054, 2.631887, 3.712762, 3.783086, -1.023678, -2.331314, 2.81556, -1.273591, -2.872927, 2.994739, -1.549238, -1.878061, 3.090327, -1.166198, -2.325309, 4.470177, -0.439175, -2.952308, 4.090083, -0.820486, -1.576079, 4.222312, -1.273591, -2.872927, 2.994739, -0.439175, -2.952308, 4.090083, -1.79915, -2.419674, 3.269506, -1.79915, -2.419674, 3.269506, -1.166198, -2.325309, 4.470177, -1.549238, -1.878061, 3.090327, -1.549238, -1.878061, 3.090327, -0.820486, -1.576079, 4.222312, -1.023678, -2.331314, 2.81556, -0.439175, -2.952308, 4.090083, -1.273591, -2.872927, 2.994739, -0.093463, -2.203078, 3.842218, -0.240365, 1.655306, 2.409932, -0.437969, 1.074508, 2.25767, -0.594317, 1.576022, 2.98223, 0.578028, -0.050157, 3.580601, 1.067662, 0.059518, 2.788923, 0.85138, 0.75328, 3.791229, -0.437969, 1.074508, 2.25767, 1.067662, 0.059518, 2.788923, -0.791921, 0.995225, 2.829967, -0.791921, 0.995225, 2.829967, 0.578028, -0.050157, 3.580601, -0.594317, 1.576022, 2.98223, -0.594317, 1.576022, 2.98223, 0.85138, 0.75328, 3.791229, -0.240365, 1.655306, 2.409932, 1.067662, 0.059518, 2.788923, -0.437969, 1.074508, 2.25767, 1.341014, 0.862954, 2.999551, -0.183588, -1.035631, 1.750414, -0.218727, -1.641346, 1.938488, -0.7359, -0.80697, 2.137654, 0.305435, -0.988227, 3.644848, 1.069467, -1.304541, 3.109166, 0.354045, -0.150323, 3.38468, -0.218727, -1.641346, 1.938488, 1.069467, -1.304541, 3.109166, -0.771039, -1.412685, 2.325727, -0.771039, -1.412685, 2.325727, 0.305435, -0.988227, 3.644848, -0.7359, -0.80697, 2.137654, -0.7359, -0.80697, 2.137654, 0.354045, -0.150323, 3.38468, -0.183588, -1.035631, 1.750414, 1.069467, -1.304541, 3.109166, -0.218727, -1.641346, 1.938488, 1.118076, -0.466637, 2.848998, 0.001938, 1.978904, 0.909549, 0.020467, 1.333338, 0.845288, -0.718466, 1.965472, 0.824974, -1.064667, 0.93023, 2.374142, -0.06811, 0.94881, 2.491139, -1.090298, 1.823262, 2.463037, 0.020467, 1.333338, 0.845288, -0.06811, 0.94881, 2.491139, -0.699936, 1.319906, 0.760712, -0.699936, 1.319906, 0.760712, -1.064667, 0.93023, 2.374142, -0.718466, 1.965472, 0.824974, -0.718466, 1.965472, 0.824974, -1.090298, 1.823262, 2.463037, 0.001938, 1.978904, 0.909549, -0.093742, 1.841842, 2.580033, -0.06811, 0.94881, 2.491139, 0.001938, 1.978904, 0.909549, 0.641859, -2.281665, 0.695443, 0.38364, -2.812012, 0.886159, 0.046143, -2.105385, 0.345424, -1.026963, -1.581058, 1.781068, -0.20289, -1.824912, 2.26526, -0.66976, -0.847411, 1.517245, 0.38364, -2.812012, 0.886159, -0.20289, -1.824912, 2.26526, -0.212076, -2.635732, 0.53614, -0.212076, -2.635732, 0.53614, -1.026963, -1.581058, 1.781068, 0.046143, -2.105385, 0.345424, 0.046143, -2.105385, 0.345424, -0.66976, -0.847411, 1.517245, 0.641859, -2.281665, 0.695443, 0.154313, -1.091265, 2.001437, -0.20289, -1.824912, 2.26526, 0.641859, -2.281665, 0.695443, 0.846107, 0.68271, 5.596608, 0.767397, -0.784525, 5.646865, -0.403881, 0.75212, 5.283528, -0.823991, -0.630978, 6.468493, 0.425996, -0.700389, 6.781572, -0.745282, 0.836256, 6.418235, 0.767397, -0.784525, 5.646865, 0.425996, -0.700389, 6.781572, -0.48259, -0.715115, 5.333786, -0.48259, -0.715115, 5.333786, -0.823991, -0.630978, 6.468493, -0.403881, 0.75212, 5.283528, 0.846107, 0.68271, 5.596608, -0.403881, 0.75212, 5.283528, 0.504706, 0.766847, 6.731315, 0.425996, -0.700389, 6.781572, 0.767397, -0.784525, 5.646865, 0.504706, 0.766847, 6.731315, -1.304695, 5.064151, 0.707912, -0.846246, 5.795969, 0.881451, -0.846246, 5.795969, 0.608237, 1.373881, 5.064151, 0.434696, 1.373881, -6.117446, 0.434696, -1.304695, -6.117446, 0.434696, 1.373881, -6.117446, 0.707912, -1.304695, -6.117446, 0.707912, -0.846246, -6.70834, 0.881451, 1.373881, -6.117446, 0.707912, 1.373881, -6.117446, 0.434696, 1.373881, 5.064151, 0.434696, 1.373881, 5.064151, 0.707912, 1.373881, 5.064151, 0.434696, 0.915432, 5.795969, 0.608237, 0.915432, 5.795969, 0.608237, 1.373881, 5.064151, 0.434696, -1.304695, 5.064151, 0.434696, -1.304695, 5.064151, 0.707912, -1.304695, 5.064151, 0.434696, -1.304695, -6.117446, 0.434696, 1.373881, 5.064151, 0.707912, -1.304695, 5.064151, 0.707912, -1.304695, -6.117446, 0.707912, -0.846246, 5.795969, 0.881451, 0.915432, 5.795969, 0.881451, -0.846246, 5.795969, 0.608237, 1.373881, -6.117446, 0.434696, 1.373881, -6.117446, 0.707912, 0.915432, -6.70834, 0.608237, 0.915432, -6.70834, 0.881451, -0.846246, -6.70834, 0.881451, 0.915432, -6.70834, 0.608237, 1.373881, 5.064151, 0.707912, 0.915432, 5.795969, 0.881451, -1.304695, 5.064151, 0.707912, -0.846246, -6.70834, 0.881451, -1.304695, -6.117446, 0.707912, -0.846246, -6.70834, 0.608237, -1.304695, -6.117446, 0.434696, 1.373881, -6.117446, 0.434696, -0.846246, -6.70834, 0.608237, -1.304695, 5.064151, 0.434696, -1.304695, 5.064151, 0.707912, -0.846246, 5.795969, 0.608237, -1.304695, 5.064151, 0.434696, 1.373881, 5.064151, 0.434696, -1.304695, -6.117446, 0.434696, 0.915432, -6.70834, 0.881451, 1.373881, -6.117446, 0.707912, -0.846246, -6.70834, 0.881451, 1.373881, 5.064151, 0.707912, 1.373881, -6.117446, 0.707912, 1.373881, 5.064151, 0.434696, 0.915432, 5.795969, 0.881451, 1.373881, 5.064151, 0.707912, 0.915432, 5.795969, 0.608237, -0.846246, 5.795969, 0.608237, 0.915432, 5.795969, 0.608237, -1.304695, 5.064151, 0.434696, -1.304695, -6.117446, 0.707912, -1.304695, 5.064151, 0.707912, -1.304695, -6.117446, 0.434696, 1.373881, -6.117446, 0.707912, 1.373881, 5.064151, 0.707912, -1.304695, -6.117446, 0.707912],

    "normals": [0.390301, 0.607624, 0.691641, 0.380932, 0.761956, -0.523698, -0.380932, 0.761956, -0.523698, 0.754387, -0.211859, 0.621235, 0.358409, -0.598315, 0.716605, 0.340831, -0.790582, -0.508713, -0.358409, -0.598315, 0.716605, -0.340831, -0.790582, -0.508713, 0.340831, -0.790582, -0.508713, 0.390301, 0.607624, 0.691641, -0.390301, 0.607624, 0.691641, -0.755608, 0.17304, 0.631703, -0.754387, -0.211859, 0.621235, -0.698996, -0.288278, -0.654408, -0.340831, -0.790582, -0.508713, -0.436476, -0.585162, -0.68337, -0.36845, 0.571764, -0.732994, 0.74572, 0.511093, -0.427412, 0.436476, 0.585162, 0.68337, -0.673605, 0.63509, 0.377972, -0.74572, -0.511063, 0.427412, 0.36845, -0.571764, 0.732994, -0.74572, -0.511063, 0.427412, -0.436476, -0.585162, -0.68337, -0.74572, -0.511063, 0.427412, -0.673605, 0.63509, 0.377972, -0.36845, 0.571764, -0.732994, -0.36845, 0.571764, -0.732994, -0.673605, 0.63509, 0.377972, 0.436476, 0.585162, 0.68337, 0.673605, -0.63509, -0.377972, 0.74572, 0.511093, -0.427412, 0.436476, 0.585162, 0.68337, -0.225684, 0.190954, -0.95529, -0.132939, 0.977508, -0.163518, 0.817469, 0.555193, 0.153233, 0.212867, -0.972045, 0.09891, 0.313944, -0.138157, 0.939299, -0.746666, 0.349956, 0.565661, 0.212867, -0.972045, 0.09891, -0.821833, -0.51677, -0.239784, -0.225684, 0.190954, -0.95529, -0.821833, -0.51677, -0.239784, -0.746666, 0.349956, 0.565661, -0.132939, 0.977508, -0.163518, -0.746666, 0.349956, 0.565661, 0.313944, -0.138157, 0.939299, 0.817469, 0.555193, 0.153233, 0.212867, -0.972045, 0.09891, 0.747429, -0.247566, -0.616443, 0.817469, 0.555193, 0.153233, 0.011994, -0.926633, -0.375713, -0.883969, -0.466262, 0.033448, -0.703238, 0.463881, -0.538743, 0.687887, -0.557482, 0.464736, 0.884365, 0.447645, -0.132084, -0.096713, 0.947386, 0.305032, 0.687887, -0.557482, 0.464736, -0.305795, -0.036988, 0.951353, -0.883969, -0.466262, 0.033448, -0.305795, -0.036988, 0.951353, -0.096713, 0.947386, 0.305032, -0.703238, 0.463881, -0.538743, -0.096713, 0.947386, 0.305032, 0.884365, 0.447645, -0.132084, 0.208655, -0.004334, -0.977966, 0.011994, -0.926633, -0.375713, 0.208655, -0.004334, -0.977966, 0.884365, 0.447645, -0.132084, -0.22306, 0.192419, -0.955596, -0.130436, 0.977538, -0.165502, 0.817225, 0.556261, 0.150548, 0.215003, -0.97174, 0.097171, 0.316416, -0.13657, 0.938719, -0.746483, 0.352824, 0.564135, 0.215003, -0.97174, 0.097171, -0.821833, -0.515641, -0.242134, -0.22306, 0.192419, -0.955596, -0.821833, -0.515641, -0.242134, -0.746483, 0.352824, 0.564135, -0.130436, 0.977538, -0.165502, -0.746483, 0.352824, 0.564135, 0.316416, -0.13657, 0.938719, 0.817225, 0.556261, 0.150548, 0.215003, -0.97174, 0.097171, 0.747276, -0.244545, -0.617847, 0.817225, 0.556261, 0.150548, -0.18717, -0.810389, -0.555162, -0.972655, -0.200598, -0.116794, -0.496719, 0.721427, -0.482467, 0.462294, -0.799554, 0.383343, 0.979949, 0.199164, 0.00473, 0.108829, 0.873592, 0.474288, 0.462294, -0.799554, 0.383343, -0.406964, -0.12534, 0.904782, -0.972655, -0.200598, -0.116794, -0.406964, -0.12534, 0.904782, 0.108829, 0.873592, 0.474288, -0.496719, 0.721427, -0.482467, 0.108829, 0.873592, 0.474288, 0.979949, 0.199164, 0.00473, 0.297311, 0.114292, -0.947905, -0.18717, -0.810389, -0.555162, 0.297311, 0.114292, -0.947905, 0.979949, 0.199164, 0.00473, -0.408063, -0.171484, -0.896664, -0.956175, -0.280465, 0.083682, -0.574389, 0.717307, 0.39436, 0.528336, -0.713523, -0.460097, 0.927702, 0.346995, -0.137516, 0.344279, 0.228339, 0.910672, 0.528336, -0.713523, -0.460097, -0.063997, -0.833796, 0.548296, -0.956175, -0.280465, 0.083682, -0.063997, -0.833796, 0.548296, 0.344279, 0.228339, 0.910672, -0.574389, 0.717307, 0.39436, 0.344279, 0.228339, 0.910672, 0.927702, 0.346995, -0.137516, -0.02295, 0.831172, -0.555498, -0.408063, -0.171484, -0.896664, -0.02295, 0.831172, -0.555498, 0.927702, 0.346995, -0.137516, -0.012482, -0.830348, -0.557054, -0.855708, -0.512101, 0.07416, -0.791345, 0.525742, -0.31196, 0.770012, -0.590838, 0.24073, 0.842158, 0.515213, -0.158971, -0.067843, 0.85696, 0.510849, 0.770012, -0.590838, 0.24073, -0.141148, -0.25132, 0.957549, -0.855708, -0.512101, 0.07416, -0.141148, -0.25132, 0.957549, -0.067843, 0.85696, 0.510849, -0.791345, 0.525742, -0.31196, -0.067843, 0.85696, 0.510849, 0.842158, 0.515213, -0.158971, 0.058992, 0.213111, -0.975219, -0.012482, -0.830348, -0.557054, 0.058992, 0.213111, -0.975219, 0.842158, 0.515213, -0.158971, 0.648305, -0.461287, -0.605701, -0.45555, -0.481735, -0.748558, -0.486953, 0.62624, -0.608814, 0.54149, -0.652791, 0.52971, 0.509537, 0.530992, 0.677023, -0.683859, 0.508377, 0.523301, 0.54149, -0.652791, 0.52971, -0.638966, -0.669454, 0.378796, -0.45555, -0.481735, -0.748558, -0.638966, -0.669454, 0.378796, -0.683859, 0.508377, 0.523301, -0.486953, 0.62624, -0.608814, -0.683859, 0.508377, 0.523301, 0.509537, 0.530992, 0.677023, 0.607166, 0.641926, -0.468184, 0.54149, -0.652791, 0.52971, 0.648305, -0.461287, -0.605701, 0.607166, 0.641926, -0.468184, 0.418409, -0.907895, 0.025208, -0.489792, -0.677938, -0.548143, 0.007935, 0.245399, -0.969359, 0.039277, -0.323923, 0.94525, 0.561571, 0.658345, 0.501175, -0.411512, 0.904813, -0.109256, 0.039277, -0.323923, 0.94525, -0.952269, -0.052889, 0.300516, -0.489792, -0.677938, -0.548143, -0.952269, -0.052889, 0.300516, -0.411512, 0.904813, -0.109256, 0.007935, 0.245399, -0.969359, -0.411512, 0.904813, -0.109256, 0.561571, 0.658345, 0.501175, 0.929533, -0.003876, -0.368633, 0.039277, -0.323923, 0.94525, 0.418409, -0.907895, 0.025208, 0.929533, -0.003876, -0.368633, 0.673605, -0.63509, -0.377972, -0.436476, -0.585162, -0.68337, -0.36845, 0.571764, -0.732994, 0.36845, -0.571764, 0.732994, 0.436476, 0.585162, 0.68337, -0.673605, 0.63509, 0.377972, 0.36845, -0.571764, 0.732994, -0.74572, -0.511063, 0.427412, -0.436476, -0.585162, -0.68337, -0.74572, -0.511063, 0.427412, -0.673605, 0.63509, 0.377972, -0.36845, 0.571764, -0.732994, -0.36845, 0.571764, -0.732994, -0.673605, 0.63509, 0.377972, 0.436476, 0.585162, 0.68337, 0.673605, -0.63509, -0.377972, 0.74572, 0.511063, -0.427412, 0.436476, 0.585162, 0.68337, 0.698996, -0.288278, -0.654408, 0.340831, -0.790582, -0.508713, -0.340831, -0.790582, -0.508713, 0.673605, -0.63509, -0.377972, -0.436476, -0.585162, -0.68337, 0.74572, 0.511093, -0.427412, 0.36845, -0.571764, 0.732994, 0.436476, 0.585162, 0.68337, -0.74572, -0.511063, 0.427412, 0.673605, -0.63509, -0.377972, 0.36845, -0.571764, 0.732994, -0.436476, -0.585162, -0.68337, -0.436476, -0.585162, -0.68337, -0.74572, -0.511063, 0.427412, -0.36845, 0.571764, -0.732994, 0.74572, 0.511093, -0.427412, -0.36845, 0.571764, -0.732994, 0.436476, 0.585162, 0.68337, 0.36845, -0.571764, 0.732994, 0.673605, -0.63509, -0.377972, 0.436476, 0.585162, 0.68337, 0.747429, -0.247566, -0.616443, -0.225684, 0.190954, -0.95529, 0.817469, 0.555193, 0.153233, -0.821833, -0.51677, -0.239784, 0.212867, -0.972045, 0.09891, -0.746666, 0.349956, 0.565661, 0.747429, -0.247566, -0.616443, 0.212867, -0.972045, 0.09891, -0.225684, 0.190954, -0.95529, -0.225684, 0.190954, -0.95529, -0.821833, -0.51677, -0.239784, -0.132939, 0.977508, -0.163518, -0.132939, 0.977508, -0.163518, -0.746666, 0.349956, 0.565661, 0.817469, 0.555193, 0.153233, 0.313944, -0.138157, 0.939299, 0.212867, -0.972045, 0.09891, 0.817469, 0.555193, 0.153233, 0.208655, -0.004334, -0.977966, 0.011994, -0.926633, -0.375713, -0.703238, 0.463881, -0.538743, -0.305795, -0.036988, 0.951353, 0.687887, -0.557482, 0.464736, -0.096713, 0.947386, 0.305032, 0.011994, -0.926633, -0.375713, 0.687887, -0.557482, 0.464736, -0.883969, -0.466262, 0.033448, -0.883969, -0.466262, 0.033448, -0.305795, -0.036988, 0.951353, -0.703238, 0.463881, -0.538743, -0.703238, 0.463881, -0.538743, -0.096713, 0.947386, 0.305032, 0.208655, -0.004334, -0.977966, 0.687887, -0.557482, 0.464736, 0.011994, -0.926633, -0.375713, 0.884365, 0.447645, -0.132084, 0.747276, -0.244545, -0.617847, -0.22306, 0.192419, -0.955596, 0.817225, 0.556261, 0.150548, -0.821833, -0.515641, -0.242134, 0.215003, -0.97174, 0.097171, -0.746483, 0.352824, 0.564135, 0.747276, -0.244545, -0.617847, 0.215003, -0.97174, 0.097171, -0.22306, 0.192419, -0.955596, -0.22306, 0.192419, -0.955596, -0.821833, -0.515641, -0.242134, -0.130436, 0.977538, -0.165502, -0.130436, 0.977538, -0.165502, -0.746483, 0.352824, 0.564135, 0.817225, 0.556261, 0.150548, 0.316416, -0.13657, 0.938719, 0.215003, -0.97174, 0.097171, 0.817225, 0.556261, 0.150548, 0.297311, 0.114292, -0.947905, -0.18717, -0.810389, -0.555162, -0.496719, 0.721427, -0.482467, -0.406964, -0.12534, 0.904782, 0.462294, -0.799554, 0.383343, 0.108829, 0.873592, 0.474288, -0.18717, -0.810389, -0.555162, 0.462294, -0.799554, 0.383343, -0.972655, -0.200598, -0.116794, -0.972655, -0.200598, -0.116794, -0.406964, -0.12534, 0.904782, -0.496719, 0.721427, -0.482467, -0.496719, 0.721427, -0.482467, 0.108829, 0.873592, 0.474288, 0.297311, 0.114292, -0.947905, 0.462294, -0.799554, 0.383343, -0.18717, -0.810389, -0.555162, 0.979949, 0.199164, 0.00473, -0.02295, 0.831172, -0.555498, -0.408063, -0.171484, -0.896664, -0.574389, 0.717307, 0.39436, -0.063997, -0.833796, 0.548296, 0.528336, -0.713523, -0.460097, 0.344279, 0.228339, 0.910672, -0.408063, -0.171484, -0.896664, 0.528336, -0.713523, -0.460097, -0.956175, -0.280465, 0.083682, -0.956175, -0.280465, 0.083682, -0.063997, -0.833796, 0.548296, -0.574389, 0.717307, 0.39436, -0.574389, 0.717307, 0.39436, 0.344279, 0.228339, 0.910672, -0.02295, 0.831172, -0.555498, 0.528336, -0.713523, -0.460097, -0.408063, -0.171484, -0.896664, 0.927702, 0.346995, -0.137516, 0.058992, 0.213111, -0.975219, -0.012482, -0.830348, -0.557054, -0.791345, 0.525742, -0.31196, -0.141148, -0.25132, 0.957549, 0.770012, -0.590838, 0.24073, -0.067843, 0.85696, 0.510849, -0.012482, -0.830348, -0.557054, 0.770012, -0.590838, 0.24073, -0.855708, -0.512101, 0.07416, -0.855708, -0.512101, 0.07416, -0.141148, -0.25132, 0.957549, -0.791345, 0.525742, -0.31196, -0.791345, 0.525742, -0.31196, -0.067843, 0.85696, 0.510849, 0.058992, 0.213111, -0.975219, 0.770012, -0.590838, 0.24073, -0.012482, -0.830348, -0.557054, 0.842158, 0.515213, -0.158971, 0.607166, 0.641926, -0.468184, 0.648305, -0.461287, -0.605701, -0.486953, 0.62624, -0.608814, -0.638966, -0.669454, 0.378796, 0.54149, -0.652791, 0.52971, -0.683859, 0.508377, 0.523301, 0.648305, -0.461287, -0.605701, 0.54149, -0.652791, 0.52971, -0.45555, -0.481735, -0.748558, -0.45555, -0.481735, -0.748558, -0.638966, -0.669454, 0.378796, -0.486953, 0.62624, -0.608814, -0.486953, 0.62624, -0.608814, -0.683859, 0.508377, 0.523301, 0.607166, 0.641926, -0.468184, 0.509537, 0.530992, 0.677023, 0.54149, -0.652791, 0.52971, 0.607166, 0.641926, -0.468184, 0.929533, -0.003876, -0.368633, 0.418409, -0.907895, 0.025208, 0.007935, 0.245399, -0.969359, -0.952269, -0.052889, 0.300516, 0.039277, -0.323923, 0.94525, -0.411512, 0.904813, -0.109256, 0.418409, -0.907895, 0.025208, 0.039277, -0.323923, 0.94525, -0.489792, -0.677938, -0.548143, -0.489792, -0.677938, -0.548143, -0.952269, -0.052889, 0.300516, 0.007935, 0.245399, -0.969359, 0.007935, 0.245399, -0.969359, -0.411512, 0.904813, -0.109256, 0.929533, -0.003876, -0.368633, 0.561571, 0.658345, 0.501175, 0.039277, -0.323923, 0.94525, 0.929533, -0.003876, -0.368633, 0.74572, 0.511063, -0.427412, 0.673605, -0.63509, -0.377972, -0.36845, 0.571764, -0.732994, -0.74572, -0.511063, 0.427412, 0.36845, -0.571764, 0.732994, -0.673605, 0.63509, 0.377972, 0.673605, -0.63509, -0.377972, 0.36845, -0.571764, 0.732994, -0.436476, -0.585162, -0.68337, -0.436476, -0.585162, -0.68337, -0.74572, -0.511063, 0.427412, -0.36845, 0.571764, -0.732994, 0.74572, 0.511063, -0.427412, -0.36845, 0.571764, -0.732994, 0.436476, 0.585162, 0.68337, 0.36845, -0.571764, 0.732994, 0.673605, -0.63509, -0.377972, 0.436476, 0.585162, 0.68337, -0.755608, 0.17304, 0.631703, -0.390301, 0.607624, 0.691641, -0.380932, 0.761956, -0.523698, 0.706046, 0.249153, -0.662831, 0.698996, -0.288278, -0.654408, -0.698996, -0.288278, -0.654408, 0.754387, -0.211859, 0.621235, -0.754387, -0.211859, 0.621235, -0.358409, -0.598315, 0.716605, 0.754387, -0.211859, 0.621235, 0.698996, -0.288278, -0.654408, 0.706046, 0.249153, -0.662831, 0.755608, 0.17304, 0.631703, 0.706046, 0.249153, -0.662831, 0.380932, 0.761956, -0.523698, 0.380932, 0.761956, -0.523698, 0.706046, 0.249153, -0.662831, -0.706046, 0.249153, -0.662831, -0.755608, 0.17304, 0.631703, -0.706046, 0.249153, -0.662831, -0.698996, -0.288278, -0.654408, 0.755608, 0.17304, 0.631703, -0.755608, 0.17304, 0.631703, -0.754387, -0.211859, 0.621235, -0.390301, 0.607624, 0.691641, 0.390301, 0.607624, 0.691641, -0.380932, 0.761956, -0.523698, 0.698996, -0.288278, -0.654408, 0.754387, -0.211859, 0.621235, 0.340831, -0.790582, -0.508713, 0.358409, -0.598315, 0.716605, -0.358409, -0.598315, 0.716605, 0.340831, -0.790582, -0.508713, 0.755608, 0.17304, 0.631703, 0.390301, 0.607624, 0.691641, -0.755608, 0.17304, 0.631703, -0.358409, -0.598315, 0.716605, -0.754387, -0.211859, 0.621235, -0.340831, -0.790582, -0.508713, -0.698996, -0.288278, -0.654408, 0.698996, -0.288278, -0.654408, -0.340831, -0.790582, -0.508713, -0.706046, 0.249153, -0.662831, -0.755608, 0.17304, 0.631703, -0.380932, 0.761956, -0.523698, -0.706046, 0.249153, -0.662831, 0.706046, 0.249153, -0.662831, -0.698996, -0.288278, -0.654408, 0.358409, -0.598315, 0.716605, 0.754387, -0.211859, 0.621235, -0.358409, -0.598315, 0.716605, 0.755608, 0.17304, 0.631703, 0.754387, -0.211859, 0.621235, 0.706046, 0.249153, -0.662831, 0.390301, 0.607624, 0.691641, 0.755608, 0.17304, 0.631703, 0.380932, 0.761956, -0.523698, -0.380932, 0.761956, -0.523698, 0.380932, 0.761956, -0.523698, -0.706046, 0.249153, -0.662831, -0.754387, -0.211859, 0.621235, -0.755608, 0.17304, 0.631703, -0.698996, -0.288278, -0.654408, 0.754387, -0.211859, 0.621235, 0.755608, 0.17304, 0.631703, -0.754387, -0.211859, 0.621235],

    "colors": [0.635294, 0.082353, 0.223529, 0.384314, 0.031373, 0.121569, 0.427451, 0.066667, 0.133333, 0.72549, 0.117647, 0.25098, 0.6, 0.090196, 0.203922, 0.396078, 0.039216, 0.105882, 0.584314, 0.07451, 0.196078, 0.388235, 0.035294, 0.113725, 0.411765, 0.05098, 0.117647, 0.635294, 0.082353, 0.223529, 0.607843, 0.094118, 0.211765, 0.615686, 0.090196, 0.215686, 0.603922, 0.086275, 0.207843, 0.309804, 0.019608, 0.086275, 0.388235, 0.035294, 0.113725, 0.058824, 0.105882, 0.180392, 0.054902, 0.098039, 0.168627, 0.090196, 0.145098, 0.239216, 0.180392, 0.27451, 0.427451, 0.117647, 0.184314, 0.298039, 0.121569, 0.188235, 0.305882, 0.156863, 0.239216, 0.376471, 0.121569, 0.188235, 0.305882, 0.058824, 0.105882, 0.180392, 0.121569, 0.188235, 0.305882, 0.117647, 0.184314, 0.298039, 0.054902, 0.098039, 0.168627, 0.054902, 0.098039, 0.168627, 0.117647, 0.184314, 0.298039, 0.180392, 0.27451, 0.427451, 0.082353, 0.133333, 0.223529, 0.090196, 0.145098, 0.239216, 0.180392, 0.27451, 0.427451, 0.011765, 0.023529, 0.058824, 0.094118, 0.152941, 0.25098, 0.141176, 0.215686, 0.341176, 0.113725, 0.180392, 0.290196, 0.207843, 0.309804, 0.482353, 0.129412, 0.2, 0.321569, 0.113725, 0.180392, 0.290196, 0.086275, 0.145098, 0.239216, 0.011765, 0.023529, 0.058824, 0.086275, 0.145098, 0.239216, 0.129412, 0.2, 0.321569, 0.094118, 0.152941, 0.25098, 0.129412, 0.2, 0.321569, 0.207843, 0.309804, 0.482353, 0.137255, 0.211765, 0.337255, 0.113725, 0.180392, 0.290196, 0.054902, 0.101961, 0.172549, 0.137255, 0.211765, 0.337255, 0.086275, 0.141176, 0.231373, 0.101961, 0.164706, 0.266667, 0.066667, 0.113725, 0.196078, 0.137255, 0.215686, 0.341176, 0.156863, 0.239216, 0.380392, 0.141176, 0.219608, 0.352941, 0.137255, 0.215686, 0.341176, 0.164706, 0.25098, 0.392157, 0.101961, 0.164706, 0.266667, 0.164706, 0.25098, 0.392157, 0.141176, 0.219608, 0.352941, 0.066667, 0.113725, 0.196078, 0.141176, 0.219608, 0.352941, 0.156863, 0.239216, 0.380392, 0.003922, 0.007843, 0.019608, 0.086275, 0.141176, 0.231373, 0.003922, 0.007843, 0.019608, 0.156863, 0.239216, 0.380392, 0.011765, 0.023529, 0.058824, 0.094118, 0.152941, 0.25098, 0.117647, 0.184314, 0.298039, 0.129412, 0.2, 0.321569, 0.211765, 0.317647, 0.494118, 0.129412, 0.2, 0.317647, 0.129412, 0.2, 0.321569, 0.086275, 0.145098, 0.239216, 0.011765, 0.023529, 0.058824, 0.086275, 0.145098, 0.239216, 0.129412, 0.2, 0.317647, 0.094118, 0.152941, 0.25098, 0.129412, 0.2, 0.317647, 0.211765, 0.317647, 0.494118, 0.117647, 0.184314, 0.298039, 0.129412, 0.2, 0.321569, 0.054902, 0.101961, 0.172549, 0.117647, 0.184314, 0.298039, 0.07451, 0.12549, 0.207843, 0.094118, 0.14902, 0.247059, 0.07451, 0.12549, 0.211765, 0.113725, 0.180392, 0.294118, 0.160784, 0.243137, 0.384314, 0.156863, 0.243137, 0.380392, 0.113725, 0.184314, 0.294118, 0.152941, 0.239216, 0.376471, 0.094118, 0.14902, 0.247059, 0.152941, 0.239216, 0.376471, 0.156863, 0.243137, 0.380392, 0.07451, 0.12549, 0.211765, 0.156863, 0.243137, 0.380392, 0.160784, 0.243137, 0.384314, 0.007843, 0.015686, 0.043137, 0.07451, 0.12549, 0.207843, 0.007843, 0.015686, 0.043137, 0.160784, 0.243137, 0.384314, 0.015686, 0.035294, 0.078431, 0.105882, 0.168627, 0.27451, 0.117647, 0.184314, 0.298039, 0.078431, 0.129412, 0.215686, 0.12549, 0.196078, 0.313726, 0.203922, 0.309804, 0.478431, 0.078431, 0.129412, 0.215686, 0.12549, 0.2, 0.317647, 0.105882, 0.168627, 0.27451, 0.12549, 0.2, 0.317647, 0.203922, 0.309804, 0.478431, 0.117647, 0.184314, 0.298039, 0.203922, 0.309804, 0.478431, 0.12549, 0.196078, 0.313726, 0.07451, 0.12549, 0.211765, 0.015686, 0.035294, 0.078431, 0.07451, 0.12549, 0.211765, 0.12549, 0.196078, 0.313726, 0.07451, 0.12549, 0.211765, 0.101961, 0.168627, 0.270588, 0.082353, 0.137255, 0.227451, 0.129412, 0.203922, 0.32549, 0.129412, 0.203922, 0.32549, 0.14902, 0.227451, 0.360784, 0.129412, 0.203922, 0.32549, 0.180392, 0.27451, 0.427451, 0.101961, 0.168627, 0.270588, 0.180392, 0.27451, 0.427451, 0.14902, 0.227451, 0.360784, 0.082353, 0.137255, 0.227451, 0.14902, 0.227451, 0.360784, 0.129412, 0.203922, 0.32549, 0.007843, 0.011765, 0.031373, 0.07451, 0.12549, 0.211765, 0.007843, 0.011765, 0.031373, 0.129412, 0.203922, 0.32549, 0.058824, 0.105882, 0.180392, 0.047059, 0.090196, 0.156863, 0.066667, 0.113725, 0.192157, 0.160784, 0.243137, 0.384314, 0.172549, 0.266667, 0.415686, 0.12549, 0.196078, 0.313726, 0.160784, 0.243137, 0.384314, 0.117647, 0.184314, 0.294118, 0.047059, 0.090196, 0.156863, 0.117647, 0.184314, 0.294118, 0.12549, 0.196078, 0.313726, 0.066667, 0.113725, 0.192157, 0.12549, 0.196078, 0.313726, 0.172549, 0.266667, 0.415686, 0.07451, 0.12549, 0.211765, 0.160784, 0.247059, 0.384314, 0.058824, 0.105882, 0.180392, 0.07451, 0.12549, 0.211765, 0.101961, 0.164706, 0.266667, 0.070588, 0.121569, 0.203922, 0.007843, 0.019608, 0.05098, 0.180392, 0.270588, 0.423529, 0.168627, 0.258824, 0.407843, 0.094118, 0.156863, 0.254902, 0.180392, 0.270588, 0.423529, 0.117647, 0.184314, 0.298039, 0.070588, 0.121569, 0.203922, 0.117647, 0.184314, 0.298039, 0.094118, 0.156863, 0.254902, 0.007843, 0.019608, 0.05098, 0.094118, 0.156863, 0.254902, 0.168627, 0.258824, 0.407843, 0.086275, 0.145098, 0.235294, 0.180392, 0.270588, 0.423529, 0.101961, 0.164706, 0.266667, 0.086275, 0.145098, 0.235294, 0.082353, 0.133333, 0.223529, 0.058824, 0.105882, 0.180392, 0.054902, 0.098039, 0.168627, 0.14902, 0.231373, 0.364706, 0.180392, 0.270588, 0.423529, 0.117647, 0.184314, 0.298039, 0.14902, 0.231373, 0.364706, 0.121569, 0.188235, 0.305882, 0.058824, 0.105882, 0.180392, 0.121569, 0.188235, 0.305882, 0.117647, 0.184314, 0.298039, 0.054902, 0.098039, 0.168627, 0.054902, 0.098039, 0.168627, 0.117647, 0.184314, 0.298039, 0.180392, 0.270588, 0.423529, 0.082353, 0.133333, 0.223529, 0.121569, 0.188235, 0.301961, 0.180392, 0.270588, 0.423529, 0.278431, 0.007843, 0.035294, 0.32549, 0.0, 0.011765, 0.364706, 0.019608, 0.078431, 0.082353, 0.133333, 0.223529, 0.058824, 0.105882, 0.180392, 0.090196, 0.145098, 0.239216, 0.156863, 0.239216, 0.376471, 0.180392, 0.27451, 0.427451, 0.121569, 0.188235, 0.305882, 0.082353, 0.133333, 0.223529, 0.156863, 0.239216, 0.376471, 0.058824, 0.105882, 0.180392, 0.058824, 0.105882, 0.180392, 0.121569, 0.188235, 0.305882, 0.054902, 0.098039, 0.168627, 0.090196, 0.145098, 0.239216, 0.054902, 0.098039, 0.168627, 0.180392, 0.27451, 0.427451, 0.156863, 0.239216, 0.376471, 0.082353, 0.133333, 0.223529, 0.180392, 0.27451, 0.427451, 0.054902, 0.101961, 0.172549, 0.011765, 0.023529, 0.058824, 0.141176, 0.215686, 0.341176, 0.086275, 0.145098, 0.239216, 0.113725, 0.180392, 0.290196, 0.129412, 0.2, 0.321569, 0.054902, 0.101961, 0.172549, 0.113725, 0.180392, 0.290196, 0.011765, 0.023529, 0.058824, 0.011765, 0.023529, 0.058824, 0.086275, 0.145098, 0.239216, 0.094118, 0.152941, 0.25098, 0.094118, 0.152941, 0.25098, 0.129412, 0.2, 0.321569, 0.137255, 0.211765, 0.337255, 0.207843, 0.309804, 0.482353, 0.113725, 0.180392, 0.290196, 0.137255, 0.211765, 0.337255, 0.003922, 0.007843, 0.019608, 0.086275, 0.141176, 0.231373, 0.066667, 0.113725, 0.196078, 0.164706, 0.25098, 0.392157, 0.137255, 0.215686, 0.341176, 0.141176, 0.219608, 0.352941, 0.086275, 0.141176, 0.231373, 0.137255, 0.215686, 0.341176, 0.101961, 0.164706, 0.266667, 0.101961, 0.164706, 0.266667, 0.164706, 0.25098, 0.392157, 0.066667, 0.113725, 0.196078, 0.066667, 0.113725, 0.196078, 0.141176, 0.219608, 0.352941, 0.003922, 0.007843, 0.019608, 0.137255, 0.215686, 0.341176, 0.086275, 0.141176, 0.231373, 0.156863, 0.239216, 0.380392, 0.054902, 0.101961, 0.172549, 0.011765, 0.023529, 0.058824, 0.117647, 0.184314, 0.298039, 0.086275, 0.145098, 0.239216, 0.129412, 0.2, 0.321569, 0.129412, 0.2, 0.317647, 0.054902, 0.101961, 0.172549, 0.129412, 0.2, 0.321569, 0.011765, 0.023529, 0.058824, 0.011765, 0.023529, 0.058824, 0.086275, 0.145098, 0.239216, 0.094118, 0.152941, 0.25098, 0.094118, 0.152941, 0.25098, 0.129412, 0.2, 0.317647, 0.117647, 0.184314, 0.298039, 0.211765, 0.317647, 0.494118, 0.129412, 0.2, 0.321569, 0.117647, 0.184314, 0.298039, 0.007843, 0.015686, 0.043137, 0.07451, 0.12549, 0.207843, 0.07451, 0.12549, 0.211765, 0.152941, 0.239216, 0.376471, 0.113725, 0.180392, 0.294118, 0.156863, 0.243137, 0.380392, 0.07451, 0.12549, 0.207843, 0.113725, 0.184314, 0.294118, 0.094118, 0.14902, 0.247059, 0.094118, 0.14902, 0.247059, 0.152941, 0.239216, 0.376471, 0.07451, 0.12549, 0.211765, 0.07451, 0.12549, 0.211765, 0.156863, 0.243137, 0.380392, 0.007843, 0.015686, 0.043137, 0.113725, 0.180392, 0.294118, 0.07451, 0.12549, 0.207843, 0.160784, 0.243137, 0.384314, 0.07451, 0.12549, 0.211765, 0.015686, 0.035294, 0.078431, 0.117647, 0.184314, 0.298039, 0.12549, 0.2, 0.317647, 0.078431, 0.129412, 0.215686, 0.203922, 0.309804, 0.478431, 0.015686, 0.035294, 0.078431, 0.078431, 0.129412, 0.215686, 0.105882, 0.168627, 0.27451, 0.105882, 0.168627, 0.27451, 0.12549, 0.2, 0.317647, 0.117647, 0.184314, 0.298039, 0.117647, 0.184314, 0.298039, 0.203922, 0.309804, 0.478431, 0.07451, 0.12549, 0.211765, 0.078431, 0.129412, 0.215686, 0.015686, 0.035294, 0.078431, 0.12549, 0.196078, 0.313726, 0.007843, 0.011765, 0.031373, 0.07451, 0.12549, 0.211765, 0.082353, 0.137255, 0.227451, 0.180392, 0.27451, 0.427451, 0.129412, 0.203922, 0.32549, 0.14902, 0.227451, 0.360784, 0.07451, 0.12549, 0.211765, 0.129412, 0.203922, 0.32549, 0.101961, 0.168627, 0.270588, 0.101961, 0.168627, 0.270588, 0.180392, 0.27451, 0.427451, 0.082353, 0.137255, 0.227451, 0.082353, 0.137255, 0.227451, 0.14902, 0.227451, 0.360784, 0.007843, 0.011765, 0.031373, 0.129412, 0.203922, 0.32549, 0.07451, 0.12549, 0.211765, 0.129412, 0.203922, 0.32549, 0.07451, 0.12549, 0.211765, 0.058824, 0.105882, 0.180392, 0.066667, 0.113725, 0.192157, 0.117647, 0.184314, 0.294118, 0.160784, 0.243137, 0.384314, 0.12549, 0.196078, 0.313726, 0.058824, 0.105882, 0.180392, 0.160784, 0.243137, 0.384314, 0.047059, 0.090196, 0.156863, 0.047059, 0.086275, 0.156863, 0.117647, 0.184314, 0.294118, 0.066667, 0.113725, 0.192157, 0.066667, 0.113725, 0.192157, 0.12549, 0.196078, 0.313726, 0.07451, 0.12549, 0.211765, 0.172549, 0.266667, 0.415686, 0.160784, 0.247059, 0.384314, 0.07451, 0.12549, 0.211765, 0.086275, 0.145098, 0.235294, 0.101961, 0.164706, 0.266667, 0.007843, 0.019608, 0.05098, 0.117647, 0.184314, 0.298039, 0.180392, 0.270588, 0.423529, 0.094118, 0.156863, 0.254902, 0.101961, 0.164706, 0.266667, 0.180392, 0.270588, 0.423529, 0.070588, 0.121569, 0.203922, 0.070588, 0.121569, 0.203922, 0.117647, 0.184314, 0.298039, 0.007843, 0.019608, 0.05098, 0.007843, 0.019608, 0.05098, 0.094118, 0.156863, 0.254902, 0.086275, 0.145098, 0.235294, 0.168627, 0.258824, 0.407843, 0.180392, 0.270588, 0.423529, 0.086275, 0.145098, 0.235294, 0.121569, 0.188235, 0.301961, 0.082353, 0.133333, 0.223529, 0.054902, 0.098039, 0.168627, 0.121569, 0.188235, 0.305882, 0.14902, 0.231373, 0.364706, 0.117647, 0.184314, 0.298039, 0.082353, 0.133333, 0.223529, 0.14902, 0.231373, 0.364706, 0.058824, 0.105882, 0.180392, 0.058824, 0.105882, 0.180392, 0.121569, 0.188235, 0.305882, 0.054902, 0.098039, 0.168627, 0.121569, 0.188235, 0.301961, 0.054902, 0.098039, 0.168627, 0.180392, 0.270588, 0.423529, 0.14902, 0.231373, 0.364706, 0.082353, 0.133333, 0.223529, 0.180392, 0.270588, 0.423529, 0.596078, 0.07451, 0.207843, 0.588235, 0.078431, 0.203922, 0.403922, 0.05098, 0.12549, 0.305882, 0.031373, 0.105882, 0.278431, 0.007843, 0.035294, 0.266667, 0.003922, 0.015686, 0.729412, 0.12549, 0.258824, 0.615686, 0.094118, 0.211765, 0.592157, 0.078431, 0.196078, 0.592157, 0.0, 0.043137, 0.258824, 0.0, 0.007843, 0.301961, 0.019608, 0.090196, 0.74902, 0.109804, 0.270588, 0.301961, 0.019608, 0.090196, 0.384314, 0.031373, 0.121569, 0.454902, 0.27451, 0.321569, 0.305882, 0.031373, 0.105882, 0.301961, 0.019608, 0.090196, 0.596078, 0.090196, 0.219608, 0.301961, 0.019608, 0.090196, 0.309804, 0.019608, 0.086275, 0.74902, 0.109804, 0.270588, 0.615686, 0.090196, 0.215686, 0.615686, 0.094118, 0.211765, 0.607843, 0.094118, 0.211765, 0.635294, 0.082353, 0.223529, 0.427451, 0.066667, 0.133333, 0.32549, 0.031373, 0.094118, 0.72549, 0.117647, 0.25098, 0.396078, 0.039216, 0.105882, 0.603922, 0.090196, 0.207843, 0.584314, 0.07451, 0.196078, 0.411765, 0.05098, 0.117647, 0.74902, 0.109804, 0.270588, 0.635294, 0.082353, 0.223529, 0.615686, 0.090196, 0.215686, 0.584314, 0.07451, 0.196078, 0.603922, 0.086275, 0.207843, 0.388235, 0.035294, 0.113725, 0.266667, 0.003922, 0.015686, 0.278431, 0.007843, 0.035294, 0.364706, 0.019608, 0.078431, 0.301961, 0.019608, 0.090196, 0.596078, 0.07451, 0.207843, 0.403922, 0.05098, 0.12549, 0.301961, 0.019608, 0.090196, 0.305882, 0.031373, 0.105882, 0.266667, 0.003922, 0.015686, 0.603922, 0.090196, 0.207843, 0.729412, 0.12549, 0.258824, 0.592157, 0.078431, 0.196078, 0.74902, 0.109804, 0.270588, 0.592157, 0.0, 0.043137, 0.301961, 0.019608, 0.090196, 0.635294, 0.082353, 0.223529, 0.74902, 0.109804, 0.270588, 0.384314, 0.031373, 0.121569, 0.454902, 0.270588, 0.321569, 0.454902, 0.27451, 0.321569, 0.301961, 0.019608, 0.090196, 0.603922, 0.086275, 0.207843, 0.596078, 0.090196, 0.219608, 0.309804, 0.019608, 0.086275, 0.729412, 0.12549, 0.258824, 0.74902, 0.109804, 0.270588, 0.615686, 0.094118, 0.211765],

    "uvs": [],

    "faces": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443],

    "bones": [{
    "parent": -1,
    "name": "Bone",
    "bindPose": [1.0,-0.0,0.0,-0.0, -0.0,0.0,-1.0,0.0, 0.0,1.0,0.0,-0.0, -0.0,0.0,-0.0,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": 0,
    "name": "Bone.009",
    "bindPose": [1.0,-2.157412559711247e-08,2.157412559711247e-08,-0.0, 2.157412204439879e-08,-1.343588280633412e-07,-1.0,0.0, 2.157412914982615e-08,1.0000001192092896,-1.343588280633412e-07,-0.0, -2.157412914982615e-08,-1.0000001192092896,1.343588280633412e-07,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": -1,
    "name": "Bone.001",
    "bindPose": [-0.999739944934845,-0.022804925218224525,-2.326397407159675e-05,0.0, 2.3264135961653665e-05,1.9321545607908774e-07,-1.0,0.0, 0.02280491404235363,-0.9997401833534241,2.619143515403266e-07,-0.0, 0.7205262184143066,1.1377918720245361,1.6933381630224176e-05,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": 2,
    "name": "Bone.002",
    "bindPose": [0.9999998807907104,-1.677166316937928e-08,-9.104038412033333e-09,-0.0, 1.05846975628765e-08,5.8901861166305025e-08,1.0,0.0, -1.8534260792790747e-09,-1.0000004768371582,1.3435902701530722e-07,-0.0, -0.7289302349090576,0.3602124750614166,-1.1167315250304455e-07,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": -1,
    "name": "Bone.003",
    "bindPose": [-0.999739944934845,-0.022804925218224525,-2.326397407159675e-05,0.0, 2.3264135961653665e-05,1.9321545607908774e-07,-1.0,0.0, 0.02280491404235363,-0.9997401833534241,2.619143515403266e-07,-0.0, -0.8014950752258301,1.1083059310913086,-1.848338797572069e-05,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": 4,
    "name": "Bone.004",
    "bindPose": [0.9999998807907104,-7.637633103740882e-08,-9.104030418427556e-09,-0.0, 1.0584701115590178e-08,5.8903282251776545e-08,1.0,0.0, -6.145809550162085e-08,-1.0000004768371582,1.3436027757052216e-07,-0.0, 0.7933674454689026,0.3654436767101288,-1.2553265094084054e-07,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": -1,
    "name": "Bone.005",
    "bindPose": [-0.9999675750732422,-0.008057629689574242,-2.3158800104283728e-05,0.0, 2.3156348106567748e-05,1.8473591012480028e-07,-1.0000001192092896,0.0, 0.008057628758251667,-0.9999676942825317,-4.6831100775079904e-08,-0.0, -0.26917195320129395,-0.07814602553844452,-6.225377092050621e-06,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": 6,
    "name": "Bone.006",
    "bindPose": [1.0000001192092896,-9.313556592616123e-10,1.199714745325764e-07,-0.0, -1.1825797940900884e-07,8.567239007106764e-08,1.0000001192092896,0.0, 2.0109977051652184e-12,-1.0000005960464478,1.343588280633412e-07,-0.0, 0.27810895442962646,-1.108015775680542,-8.494539116554733e-08,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": -1,
    "name": "Bone.007",
    "bindPose": [-0.9999594688415527,-0.009003950282931328,-2.308736657141708e-05,0.0, 2.308508010173682e-05,1.4124395875114715e-07,-1.0000001192092896,0.0, 0.009003948420286179,-0.9999597668647766,-3.7192947388575703e-08,-0.0, 0.28294798731803894,-0.14574988186359406,6.532422958116513e-06,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": 8,
    "name": "Bone.008",
    "bindPose": [0.9993484020233154,0.036093831062316895,5.058939933633155e-08,-0.0, -4.977114897997126e-08,3.059787445636175e-08,1.0000001192092896,0.0, 0.03609384968876839,-0.9993484616279602,1.36185803967237e-07,-0.0, -0.23444263637065887,-1.0810227394104004,-1.3017788091929106e-07,1.0],
    "skinned": true,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
,{
    "parent": -1,
    "name": "Bone.010",
    "bindPose": [1.0,-0.0,0.0,-0.0, -0.0,0.0,-1.0,0.0, 0.0,1.0,0.0,-0.0, -0.0,1.7732634544372559,-0.0,1.0],
    "skinned": false,

    "position": [0,0,0],
    "rotation": [0,0,0,1],
    "scale": [1,1,1],

    "inheritRotation": true,
    "inheritScale": true
}
],

    "boneWeights": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    "boneIndices": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,5,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,3,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,8,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,9,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    "animations": {"ArmatureAction": [[[ 0,0,0, 0.700878,-0.0936461,-0.0936461,0.700878, 1,1,1 ],[ 0,0,1, 0.707107,-6.28037e-16,1.52552e-08,0.707107, 1,1,1 ],[ 0.746286,-1.34572e-07,1.12106, -0.0171338,-0.257289,0.955233,-0.145045, 1,1,1 ],[ 0.72893,6.99086e-08,0.360212, -0.707107,2.18742e-09,3.87405e-09,0.707107, 1,1,1 ],[ -0.776012,-1.35275e-07,1.1263, 0.0228762,-0.969041,0.245836,0.00125063, 1,1,1 ],[ -0.793368,6.92058e-08,0.365443, -0.707107,2.32608e-08,2.49475e-08,0.707107, 1,1,1 ],[ -0.269793,2.62604e-08,-0.0759746, -0.0760999,0.974358,-0.196647,-0.0785235, 1,1,1 ],[ -0.278109,2.67178e-07,-1.10802, -0.953023,-0.066355,-0.0616223,0.289044, 1,1,1 ],[ 0.281624,3.59768e-08,-0.148292, 0.0376801,0.519271,-0.852154,0.0526443, 1,1,1 ],[ 0.273308,2.6232e-07,-1.07186, -0.919934,-0.00681553,-0.000726311,0.392013, 1,1,1 ],[ 0,0,-1.77326, 0.700878,-0.0936461,-0.0936461,0.700878, 1,1,1 ]]],"rest": [[[ 0,0,0, 0.707107,0,0,0.707107, 1,1,1 ],[ 0,0,1, 0.707107,-6.28037e-16,1.52552e-08,0.707107, 1,1,1 ],[ 0.746286,-1.34572e-07,1.12106, 0.00805506,-0.707061,0.707061,0.0080715, 1,1,1 ],[ 0.72893,6.99086e-08,0.360212, -0.707107,2.18742e-09,3.87405e-09,0.707107, 1,1,1 ],[ -0.776012,-1.35275e-07,1.1263, 0.00805506,-0.707061,0.707061,0.0080715, 1,1,1 ],[ -0.793368,6.92058e-08,0.365443, -0.707107,2.32608e-08,2.49475e-08,0.707107, 1,1,1 ],[ -0.269793,2.62604e-08,-0.0759746, -0.00284064,0.707101,-0.707101,-0.00285701, 1,1,1 ],[ -0.278109,2.67178e-07,-1.10802, -0.707107,4.21398e-08,-4.2417e-08,0.707107, 1,1,1 ],[ 0.281624,3.59768e-08,-0.148292, -0.00317525,0.7071,-0.7071,-0.00319157, 1,1,1 ],[ 0.273308,2.6232e-07,-1.07186, -0.706992,-0.0127632,-0.0127632,0.706992, 1,1,1 ],[ 0,0,-1.77326, 0.707107,0,0,0.707107, 1,1,1 ]]]}
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"vertices":[-1000,999.999939,-1000.000122,-1000,1000.000122,999.999939,-1000,-999.999939,1000.000122,-1000,1000.000122,999.999939,1000,1000.000122,999.999939,1000,-999.999939,1000.000122,1000,1000.000122,999.999939,1000,999.999939,-1000.000122,1000,-1000.000122,-999.999939,1000,999.999939,-1000.000122,-1000,999.999939,-1000.000122,-1000,-1000.000122,-999.999939,1000,999.999939,-1000.000122,1000,1000.000122,999.999939,-1000,1000.000122,999.999939,-1000,-1000.000122,-999.999939,-1000,-999.999939,1000.000122,1000,-999.999939,1000.000122,-1000,-1000.000122,-999.999939,-1000,999.999939,-1000.000122,-1000,-999.999939,1000.000122,-1000,-999.999939,1000.000122,-1000,1000.000122,999.999939,1000,-999.999939,1000.000122,1000,-999.999939,1000.000122,1000,1000.000122,999.999939,1000,-1000.000122,-999.999939,1000,-1000.000122,-999.999939,1000,999.999939,-1000.000122,-1000,-1000.000122,-999.999939,-1000,999.999939,-1000.000122,1000,999.999939,-1000.000122,-1000,1000.000122,999.999939,1000,-1000.000122,-999.999939,-1000,-1000.000122,-999.999939,1000,-999.999939,1000.000122],"normals":[0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349],"colors":[],"uvs":[0.333578,0.499511,0.666422,0.499511,0.666422,0.000245,0.666422,0.999266,0.666422,0.5,0.333578,0.5,0.333089,0.5,0.000245,0.5,0.000245,0.999266,0.333089,0.000245,0.000245,0.000245,0.000245,0.499511,0.999755,0.499511,0.999755,0.000245,0.666911,0.000245,0.666911,0.5,0.666911,0.999266,0.999755,0.999266,0.333578,0.000245,0.333578,0.499511,0.666422,0.000245,0.333578,0.999266,0.666422,0.999266,0.333578,0.5,0.333089,0.999266,0.333089,0.5,0.000245,0.999266,0.333089,0.499511,0.333089,0.000245,0.000245,0.499511,0.666911,0.499511,0.999755,0.499511,0.666911,0.000245,0.999755,0.5,0.666911,0.5,0.999755,0.999266],"faces":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"bones":[],"boneWeights":[],"boneIndices":[],"animations":{}}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object_game_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_collision_utils__ = __webpack_require__(13);

const SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE = 4;
const EDGE_COLLISION_DAMP_FACTOR = 0.2;
const EDGE_COLLISION_PADDING_ROTATION = 0.5;
const STEER_SPEED = 0.02;

const SNOWBOARD_RESTITUTION = 0.48;
const SNOWBOARD_FRICTION = [0.187,0.01,0.187,1];
const BREAK_FRICTION = [0.187,0.12,0.187];

window.MathUtils = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__;


class Character extends __WEBPACK_IMPORTED_MODULE_0__game_object_game_object__["a" /* default */]{
  constructor(mesh, boundingBox, slope, transformationMatrix = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["identityMatrix4"]){
    super(mesh, transformationMatrix);
    this.mesh = mesh;
    this.boundingBox = boundingBox;
    this.speed = 0.2;
    this.fallSpeed = 0.15;
    this.slope = slope;
    this.currentSegmentNumber = 0;
    this.input = {left: false, right: false, back: false}
    this.velocity = [0,1,0];
    this.angularVelocityAxis = [0,0,1,0];
    this.angularVelocityAngle = 0;
    this.friction = SNOWBOARD_FRICTION;
    this.restitution = SNOWBOARD_RESTITUTION;
    this.boxDimensions = [0.5,5,0.5];
    this.setPosition([0,0,16]);
    this.name = "snowboarder";

    window.character = this;

  }

  update(){
    if(isNaN(this.velocity[0])){
      debugger;
    }
    this._ensureAboveSurface();
    if(isNaN(this.velocity[0])){
      debugger;
    }
    this._handleControls();
    if(isNaN(this.velocity[0])){
      debugger;
    }
    this._getSurfaceData();
    if(isNaN(this.velocity[0])){
      debugger;
    }
    this._moveForward();
    if(isNaN(this.velocity[0])){
      debugger;
    }
    const surfaceOffset = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["subtractVectors"]
      (this.getPosition(),this.surfacePoint);
    const distanceFromSurface = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["vectorSquareMag"](surfaceOffset);

    this.velocity[2] -= this.fallSpeed;
    if(distanceFromSurface < SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE){
      if(isNaN(this.velocity[0])){
        debugger;
      }
      this._planeAlign();
      if(isNaN(this.velocity[0])){
        debugger;
      }
      this.velocity = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["projectVectorOntoPlane"](this.velocity, this.transformDirection([0,0,1]));
      if(isNaN(this.velocity[0])){
        debugger;
      }
      let localVelocity = this.inverseTransformDirection(this.velocity);
      this._applyFriction(localVelocity);
      this.velocity = this.transformDirection(localVelocity);
      if(isNaN(this.velocity[0])){
        debugger;
      }
    }
    if(isNaN(this.velocity[0])){
      debugger;
    }
    super.update();
    if(isNaN(this.velocity[0])){
      debugger;
    }
  }
  
  _getSurfaceData(){
    let localDownVector = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["multiplyVec4ByMatrix4"](
      this.slope.segmentMatrices[this.currentSegmentNumber],
      [0,0,-1,0]
    );
    let newFloorTriangle = this.slope.getSurroundingTriangle(this.getPosition(),this.currentSegmentNumber);
    this.floorTriangle = newFloorTriangle || this.floorTriangle;
    this.surfacePlaneNormal = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["planeNormal"](this.floorTriangle[0], this.floorTriangle[1],
      this.floorTriangle[2]);
    this.surfacePoint = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["vectorTriangleIntersection"](this.getPosition(),
     __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["multiplyVec4ByMatrix4"](this.slope.segmentMatrices[this.currentSegmentNumber],[0,0,-1,0]),
     this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]);
  }
  _ensureAboveSurface(){
    if(!this.floorTriangle) return;
    if(!__WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["pointIsAbovePlane"](this.getPosition(), this.floorTriangle[0],
        this.floorTriangle[1], this.floorTriangle[2])){
        const upVector = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["multiplyVec4ByMatrix4"](
          this.slope.segmentMatrices[this.currentSegmentNumber],
          [0,0,1,0]);
        this.setPosition(__WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["vectorTriangleIntersection"](this.getPosition(),upVector,
            this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]));
    }
  }
  _planeAlign(){
    const surfaceNormalLocal = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["multiplyVec4ByMatrix4"](
        __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["inverse_mat4_rot_pos"](__WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["mat4RotationComponent"](
          this.getTransformationMatrix()
        )),
        this.surfacePlaneNormal.concat(1)
    );
    const planeAlignAxis = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["vectorCross"](
      surfaceNormalLocal.slice(0,3), [0,0,1]);
    const planeAlignAngle = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["angleBetweenVectors"]([0,0,1],
      surfaceNormalLocal.slice(0,3));
      this.addAngularVelocity(__WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["axisAngleToQuaternion"](
        planeAlignAxis, planeAlignAngle/5));
  }
  _applyFriction(localVelocity){
    let signFlip;
    for(let i = 0; i < localVelocity.length; ++i){
      if (Math.abs(localVelocity[i]) < Math.abs(this.friction[i])){
        localVelocity[i] = 0;
      }
      else{
        signFlip = localVelocity[i] < 0 ? -1 : 1;
        localVelocity[i] -= this.friction[i] * signFlip;
      }
    }
  }
  _steer(direction){
    this.addAngularVelocity(
      __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["axisAngleToQuaternion"](
        this.transformDirection([0,0,1]),
      -1 * direction * STEER_SPEED)
    );
  }

  _handleControls(){
    if(this.input.left ? !this.input.right : this.input.right){
      if(this.input.right){
        this._steer(-1);
      }
      else{
        this._steer(1);
      }
    }
    if(this.input.back){
      this.friction = BREAK_FRICTION
    }
    else{
      this.friction = SNOWBOARD_FRICTION;
    }
  }
  _handleCollision(collisionData){
  
    this.velocity = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["scaleVector"](
      __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["bounceVectorOffPlane"](this.velocity,
        collisionData.normal),
      this.restitution
    );
    
    // let pushBackVector = MathUtils.vectorNormalize(collisionData.normal);
    // pushBackVector = MathUtils.scaleVector(pushBackVector, 2);
    // this.setPosition(MathUtils.addVectors(this.getPosition(),
    //   pushBackVector));
    // const collisionOffsetVector = MathUtils.subtractVectors(
    //   collisionData.colliderPoint.slice(0,3),
    //   this.getPosition()
    // );
     let addAngularVelocAngle = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["angleBetweenVectors"](
      this.velocity,
       __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["scaleVector"](collisionData.normal, -1)
    );
    if(isNaN(addAngularVelocAngle)) debugger;
     addAngularVelocAngle /= 15;
     if(isNaN(addAngularVelocAngle)) debugger;
     addAngularVelocAngle *= __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["vectorMag"](this.velocity);
     if(isNaN(addAngularVelocAngle)) debugger;
     const addAngularVelocAxis = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["vectorCross"](
      this.velocity,
      __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["scaleVector"](collisionData.normal, -1)
     );
     this.addAngularVelocity(__WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["axisAngleToQuaternion"](
       addAngularVelocAxis, addAngularVelocAngle)
     );
  }
  _handleEdgeCollision(collisionData){
   this._handleCollision(collisionData);
  };
  _handleTreeCollision(collisionData){
    collisionData.normal = collisionData.sphereNormal;
    this._handleCollision(collisionData);
  }
  _moveForward(){
    const edgeCollisionData = this.slope.boxIsBeyondEdge(
      this.getTransformationMatrix(), this.boxDimensions, this.currentSegmentNumber);
    const obstacleCollisionData = this.slope.capsuleCollidesWithObstacle(this.getPosition(),
    __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["addVectors"](this.getPosition(), this.velocity),this.boxDimensions[1],this.currentSegmentNumber);
    
    // this.slope.boxCollidesWithObstacle(
    //   this.getTransformationMatrix(), this.boxDimensions,
    //   this.velocity, this.currentSegmentNumber);

    if(edgeCollisionData){
      this._handleEdgeCollision(edgeCollisionData);
      return;
    }
    else if(obstacleCollisionData){
      this._handleTreeCollision(obstacleCollisionData);
    }
    let nextWorldPos = __WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["addVectors"](__WEBPACK_IMPORTED_MODULE_1__utils_math_utils__["projectVectorOntoPlane"](
      this.velocity, this.surfacePlaneNormal), this.getPosition());
    if(this.currentSegmentNumber < this.slope.segmentMatrices.length -1 &&
      slope.positionIsPastSegmentStart(nextWorldPos,
      this.currentSegmentNumber + 1)){
      ++this.currentSegmentNumber;
      if(this.slope.notifyOfCharacterSegmentNumber(this.currentSegmentNumber)){
        --this.currentSegmentNumber;
      }
      let triangleAfterMove = this.slope.getSurroundingTriangle(nextWorldPos,
         this.currentSegmentNumber) || this.floorTriangle;
    }
    else if (this.currentSegmentNumber > 0 && !slope.positionIsPastSegmentStart(nextWorldPos,this.currentSegmentNumber)) {
      --this.currentSegmentNumber;
      let triangleAfterMove = this.slope.getSurroundingTriangle(nextWorldPos,
         this.currentSegmentNumber) || this.floorTriangle;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Character;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__balloon__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_object_game_object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_collision_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_object_mesh__ = __webpack_require__(2);
const SEGMENT_WIDTH = 70;
const SEGMENT_LENGTH = 40;
const EDGE_LOOP_RESOLUTION = 5;
const SLOPE_BUFFER_AMOUNT = 30;
const BACK_BUFFER_ANOUNT = 10;
const TURN_TYPE_SWITCH_FREQUENCY = 3;
const SHARP_TURN = 0.35;
const GRADUAL_TURN = 0.14;
const TILES_PER_SEGMENT = 1;
const TREES_PER_SEGMENT = 2;
const TREE_COLLIDER = "TREE_COLLIDER";
const TREE_COLLIDER_HEIGHT = 30;
const TREE_COLLIDER_WIDTH = 0.7;
const TREE_COLLIDER_DEPTH = 0.7;
const TREE_RADIUS = 1.5;
const TREE_SEGMENT = "TREE_SEGMENT";
const SNOW_SEGMENT = "SNOW_SEGMENT";
const TREE_PROBABILITY_LENGTHWISE = 0.58
const TREE_MAX_DENSITY_WIDTHWISE = 4;
const BALLOON_PROBABILITY_LENGTHWISE = 0.22;
const BALLOON_DENSITY_WIDTHWISE = 2;
const BALLOON_FLOAT_HEIGHT = 6;
const BALLON_COLLIDER_SQRD_RADIUS = 1;
const BOX_COLLIDER = "BOX_COLLIDER";
const BEGINNING_NO_OBSTACLE_SEGMENTS = 15;








class Slope extends __WEBPACK_IMPORTED_MODULE_2__game_object_game_object__["a" /* default */]{

  constructor(transformationMatrix = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["identityMatrix4"], rasterizer, img_src = "snow.jpg"){
    super(undefined);
    this._transformationMatrix = transformationMatrix.slice(0,16);
    this.mesh = new __WEBPACK_IMPORTED_MODULE_5__game_object_mesh__["a" /* default */]({
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
    this.segmentRotation = [-0.25,0,0];
    this.segmentPosition = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](transformationMatrix,
      [0,SEGMENT_LENGTH,0,1]).slice(0,3);
    this.obstacles = [];
    this.balloons = [];
    this.balloonsCreatedSinceStart = 0;
    //this.segmentRotation[0] = 0;
    this._setupTreeMesh();
    this._setupBalloonMesh();
    const firstLoop = this.createEdgeLoop();
    let unpackedVertices;

    this.segmentsSinceStart = 0;
    for(let i = 0; i< firstLoop.length; i+=3){
      unpackedVertices = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](
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

  }
  _setupTreeMesh(){
    this.sideGeometry = [];
    this.currentSideGeometryType = TREE_SEGMENT;
    this.treesCreatedSinceStart = 0;
    __WEBPACK_IMPORTED_MODULE_0__tree_js__["a" /* default */].textureBuffer = this.rasterizer.bufferTexture("assets/tree.png");
    __WEBPACK_IMPORTED_MODULE_0__tree_js__["a" /* default */].textured = true;
    this.treeMesh= new __WEBPACK_IMPORTED_MODULE_5__game_object_mesh__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__tree_js__["a" /* default */]);
    this.treeMesh.buffers = this.rasterizer.sendMeshToGPU(this.treeMesh);
  }
  _setupBalloonMesh(){
    this.balloonMesh = new __WEBPACK_IMPORTED_MODULE_5__game_object_mesh__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__balloon__["a" /* default */]);
    this.balloonMesh.colored = true;
    this.balloonMesh.buffers = this.rasterizer.sendMeshToGPU(this.balloonMesh);
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
        transformationMatrix = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat_4_multiply"](
          __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["translationMatrix"](leftRightToggle * SEGMENT_WIDTH/2, 0, 0),
          transformationMatrix
        );
        let treeObject;
        for(let i = 0; i < TREES_PER_SEGMENT; ++i){
          transformationMatrix =
          __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat_4_multiply"](
            __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["translationMatrix"](0, SEGMENT_LENGTH * i / TREES_PER_SEGMENT, 0,1),
            transformationMatrix );
          treeObject = new __WEBPACK_IMPORTED_MODULE_2__game_object_game_object__["a" /* default */](this.treeMesh,transformationMatrix);
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
  _addObstacleSegment(){
    const obstacleSegment =[];
    const transformationMatrix =
    __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat_4_multiply"](
      __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["translationMatrix"](0, -SEGMENT_LENGTH/TREES_PER_SEGMENT, 0,1),
      this.segmentMatrices[this.segmentMatrices.length -1]);
    if(this.segmentsSinceStart > BEGINNING_NO_OBSTACLE_SEGMENTS && Math.random() < TREE_PROBABILITY_LENGTHWISE){
        const segment = 0;
        const widthWiseCount = Math.floor(Math.random()*
          TREE_MAX_DENSITY_WIDTHWISE);
        let id, gameObject, treeTransformation;
        for(let i = 0; i < widthWiseCount; ++i){
          treeTransformation = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat_4_multiply"](
            __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["translationMatrix"]((Math.random() * 0.8 + 0.1) * SEGMENT_WIDTH -SEGMENT_WIDTH/2,
             Math.random()* SEGMENT_LENGTH, 0),
             transformationMatrix
          );
          gameObject = new __WEBPACK_IMPORTED_MODULE_2__game_object_game_object__["a" /* default */](this.treeMesh, treeTransformation);
          id = `treeObstacle${this.treesCreatedSinceStart}`;
          gameObject.id = id;
          gameObject.collider = {type: BOX_COLLIDER, dimensions:[
            TREE_COLLIDER_WIDTH, TREE_COLLIDER_DEPTH, TREE_COLLIDER_HEIGHT,]};
          obstacleSegment.push(gameObject);
          this.rasterizer.objects[id] = gameObject;
          ++this.treesCreatedSinceStart;
        }
    }
    this.obstacles.push(obstacleSegment);
  }
  _addBalloonsSegment(){
    const balloonSegment = [];
    let transformationMatrix, newBalloon, id;
    if(Math.random() < BALLOON_PROBABILITY_LENGTHWISE){
      for(let i = 0; i <= Math.floor(Math.random() * BALLOON_DENSITY_WIDTHWISE); ++ i){
        transformationMatrix = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat_4_multiply"](
          __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["translationMatrix"](Math.random() * SEGMENT_WIDTH - SEGMENT_WIDTH/2,
           SEGMENT_LENGTH/2, BALLOON_FLOAT_HEIGHT),
          this.segmentMatrices[this.segmentMatrices.length - 1]
        );
        newBalloon = new __WEBPACK_IMPORTED_MODULE_2__game_object_game_object__["a" /* default */](this.balloonMesh, transformationMatrix);
        id = `balloon${this.balloonsCreatedSinceStart}`;
        newBalloon.id = id;
        balloonSegment.push(newBalloon);
        this.rasterizer.objects[id] = newBalloon;
        ++this.balloonsCreatedSinceStart;
      }
    }
    this.balloons.push(balloonSegment);
  }
  _deleteObstacleSegment(){
    const deletedSegment = this.obstacles.shift();
    for(let i = 0; i< deletedSegment.length; ++i){
      delete this.rasterizer.objects[deletedSegment[i].id];
    }
  }
  _deleteBallonSegment(){
    const deletedSegment = this.balloons.shift();
    for(let i = 0; i < deletedSegment.length; ++i){
      delete this.rasterizer.objects[deletedSegment[i].id];
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
    if(idx < BACK_BUFFER_ANOUNT){
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
    const segmentStartLine = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](
      __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat4RotationComponent"](this.segmentMatrices[segmentNumber]),
        [-1,0,0,1]);
    const segmentStartNormal = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["vectorCross"]([0,0,1],
       segmentStartLine);
    const offsetVector = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["subtractVectors"](
         pos, __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat4TranslationComponent"](this.segmentMatrices[segmentNumber]));
    const result = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["vectorDot"](offsetVector, segmentStartNormal);
    return result < 0;
  }

  boxCollidesWithObstacle(boxMatrix, boxDimensions, movement, segment_number){
    let obstacle;
    let collisionData;
    for(let i = 0; i < this.obstacles[segment_number].length; ++i){
      obstacle = this.obstacles[segment_number][i];
      collisionData = __WEBPACK_IMPORTED_MODULE_4__utils_collision_utils__["b" /* movingBoxIntersectsBox */](
        boxMatrix, boxDimensions, obstacle.getTransformationMatrix(),
        obstacle.collider.dimensions, movement);
      if(collisionData) return collisionData;
    }
    return false;
  }

  capsuleCollidesWithObstacle(capsulePointA, capsulePointB, capsuleRadius, segment_number){
    let obstacle;
    let collisionData;
    for(let i = 0; i < this.obstacles[segment_number].length; ++i){
      obstacle = this.obstacles[segment_number][i];
      collisionData = __WEBPACK_IMPORTED_MODULE_4__utils_collision_utils__["c" /* sphereCollidesCapsule */](__WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat4TranslationComponent"](
        obstacle.getTransformationMatrix()
      ),TREE_RADIUS,capsulePointA,capsulePointB,capsuleRadius );
      if(collisionData) return collisionData;
    }
    return false;
  }

  positionCollidesWithObstacle(pos, segment_number){
    let transformedPosition;
    let obstacle;
    let dimensions;
    for(let i =0; i < this.obstacles[segment_number].length; ++i){
      obstacle = this.obstacles[segment_number][i];
      transformedPosition = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](
        __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["inverse_mat4_rot_pos"](
            obstacle.getTransformationMatrix()
        ),
        pos.concat(1)
      );
      dimensions = obstacle.collider.dimensions;
      if(transformedPosition[0] > -dimensions[0]/2 &&
       transformedPosition[0] < dimensions[0]/2 &&
       transformedPosition[1] > -dimensions[1]/2 &&
        transformedPosition[1] < dimensions[1]/2 &&
        transformedPosition[2] >= -0.01 &&
         transformedPosition[2] < dimensions[2]){
           return true;
         }
    }
    return false;
  }

  positionCollidesWithBalloon(pos, segment_number){
    const balloons = this.balloons[segment_number];
    let balloonPos;
    for(let i = 0; i < ballons.length; ++i){
      balloonPos = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat4TranslationComponent"](balloons[i].transformationMatrix);
      if(vectorSquareMag(
          __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["subtractVectors"](pos, balloonPos)
        ) <=  BALLON_COLLIDER_SQRD_RADIUS){
            return balloons[i];
      }
    }
    return false;
  }

  segmentLocalCoords(segment_number, pos){
    return
          __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](object.position.concat(1),
            __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["inverse_mat4_rot_pos"](
              this.matrices[nextSegmentNumber]));
  }

  getSurroundingTriangle(pos, segmentNumber){
    const startIdx = 6 * EDGE_LOOP_RESOLUTION * segmentNumber;
    const vertex = this.mesh.packedVertex.bind(this.mesh);
    const inverseSegmentTransform = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["inverse_mat4_rot_pos"](
      this.segmentMatrices[segmentNumber]
    );
    const transformedPosition = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](
      inverseSegmentTransform,
      pos.concat(1)
    );
    let transformedTriangle;
    for(let i = startIdx; i < startIdx + 6 * EDGE_LOOP_RESOLUTION - 1; i+=3){
      transformedTriangle = []
      for(let j = 0; j < 3; ++j){
        transformedTriangle.push(
          __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](
            inverseSegmentTransform,
          vertex(this.mesh.faces[i+j]).concat(1))
        );
      }
      if(__WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["triangleContainsPoint"](transformedPosition, transformedTriangle[0],
        transformedTriangle[1],transformedTriangle[2])){
          return [vertex(this.mesh.faces[i]),
            vertex(this.mesh.faces[i + 1]), vertex(this.mesh.faces[i + 2])];
      }
    }
  }

  _boxIsBeyondEdge(boxMatrix, boxDimensions, segmentNumber, toggleLeft){
    const checkPoints = __WEBPACK_IMPORTED_MODULE_4__utils_collision_utils__["a" /* boxColliderToPoints */](boxMatrix, boxDimensions);
    let pointBeyondEdge = false;
    for(let i =0; i <checkPoints.length; ++i){
      pointBeyondEdge = this._positionIsBeyondEdge(checkPoints[i], segmentNumber,
        toggleLeft);
      if(pointBeyondEdge){
        return pointBeyondEdge;
      }
    }
  }
  boxIsBeyondEdge(boxMatrix, boxDimensions, segmentNumber){
    return(
      this._boxIsBeyondEdge(boxMatrix, boxDimensions,segmentNumber, true) ||
      this._boxIsBeyondEdge(boxMatrix, boxDimensions,segmentNumber, false)
    );
  }

  positionIsBeyondEdge(pos, segmentNumber){
    return (
      this._positionIsBeyondEdge(pos, segmentNumber, true) ||
      this._positionIsBeyondEdge(pos, segmentNumber, false)
    );
  }
  _positionIsBeyondEdge(pos, segmentNumber, toggleLeft){
    const xOffset = toggleLeft? -SEGMENT_WIDTH/2 : SEGMENT_WIDTH/2;
    const currentSegPoint = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](
      this.segmentMatrices[segmentNumber],
      [xOffset, 0, 0, 1]

    );
    const nextSegPoint = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](
      this.segmentMatrices[segmentNumber + 1],
      [xOffset, 0, 0, 1]
    );
    let vec0, vec1;
    if(toggleLeft){
      vec0 = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["subtractVectors"](nextSegPoint, currentSegPoint);
      vec1 = [0,0,1];
    }
    else{
      vec1 = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["subtractVectors"](nextSegPoint, currentSegPoint);
      vec0 = [0,0,1];
    }
    const edgeNormal = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["vectorCross"](vec0, vec1);
    const posOffset = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["subtractVectors"](pos, currentSegPoint);
    if(__WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["vectorDot"](posOffset, edgeNormal) < 0){
      let edgeVector =  toggleLeft? vec0: vec1;
      return{normal: edgeNormal, colliderPoint: pos,
         vector: edgeVector, edgePoint0: currentSegPoint,
        edgePoint1: nextSegPoint, toggleLeft};
    }
    return false;
  }

  generateSegment(){
    const pos = this.segmentPosition;
    this.generateNewSegmentRotation();

    let transformationMatrix = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["translationMatrix"](
      pos[0], pos[1], pos[2]
    );
    let xRot = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["xRotationMatrix"](this.segmentRotation[0]);
    let yRot = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["yRotationMatrix"](this.segmentRotation[1]);
    let zRot = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["zRotationMatrix"](this.segmentRotation[2]);
    transformationMatrix = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat_4_multiply"](
      yRot,
      __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat_4_multiply"](
        xRot,
        __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["mat_4_multiply"](
          zRot,
          transformationMatrix
        )
      )
    );
    this.segmentPosition = __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](transformationMatrix,
       [0, SEGMENT_LENGTH, 0,1]);

     let newSegment = this.createEdgeLoop();
    // let transformedSegment = MathUtils.addVectors(newSegment, this.segmentPosition);
     let transformedSegment = [];
     let transformedPos;
     for(let i = 0; i < newSegment.length; i +=3){
       transformedPos = newSegment.slice(i, i+3);
       transformedPos.push(1);
       transformedPos =  __WEBPACK_IMPORTED_MODULE_3__utils_math_utils__["multiplyVec4ByMatrix4"](transformationMatrix,transformedPos);
       for(let i = 0; i < 3; ++i){
         transformedSegment.push(transformedPos[i]);
       }
     }
    this._addSegment(transformedSegment);
    this._addSideGeometrySegment();
    this._addObstacleSegment();
    this._addBalloonsSegment();
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
    ++this.segmentsSinceStart;
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
    this._deleteObstacleSegment();
    this._deleteBallonSegment();
    this.mesh.setDirty();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slope;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "vertices": [1.557284, -4.881069, 1.220433, -2.305502, -4.881067, 1.220433, 0.265122, -1.595123, 15.595764, 5.357604, 3.060327, 2.000748, 1.557284, -4.881069, 1.220433, 0.265122, -1.595123, 15.595764, -2.305502, -4.881067, 1.220433, -5.014175, 2.409782, 3.088122, 0.265122, -1.595123, 15.595764, -0.217849, -0.647796, 18.588009, 0.149692, 0.434673, 18.588009, 0.149692, 0.434673, -2.595972, 0.149692, 0.434673, 18.588009, 0.517232, -0.647796, 18.588009, 0.517232, -0.647796, -2.595972, -0.217849, -0.647796, 18.588009, 0.517232, -0.647796, 18.588009, 0.149692, 0.434673, 18.588009, -0.217849, -0.647796, -2.595972, 0.517232, -0.647796, -2.595972, 0.517232, -0.647796, 18.588009, 1.835783, 2.397462, 16.168344, 1.178417, -2.402114, 16.409208, 0.074321, -0.154875, 22.801958, 1.178417, -2.402114, 16.409208, -1.606885, -2.66519, 16.403688, 0.074321, -0.154875, 22.801958, 1.557284, -4.881069, 9.418711, -2.552244, -6.14147, 10.179499, -1.606885, -2.66519, 16.403688, 3.756239, 2.69887, 10.140981, 1.557284, -4.881069, 9.418711, 1.178417, -2.402114, 16.409208, -5.047791, 2.294961, 10.932926, -2.981071, 2.698907, 16.168344, -1.606885, -2.66519, 16.403688, -1.606885, -2.66519, 16.403688, -2.981071, 2.698907, 16.168344, 0.074321, -0.154875, 22.801958, -0.217849, -0.647796, -2.595972, 0.149692, 0.434673, -2.595972, 0.517232, -0.647796, -2.595972, -2.118086, 4.178652, 1.220433, 1.7447, 4.17865, 1.220433, -0.825924, 1.598287, 15.595764, -5.918405, -2.057512, 2.000748, -2.118086, 4.178652, 1.220433, -0.825924, 1.598287, 15.595764, 1.7447, 4.17865, 1.220433, 4.453373, -1.546658, 3.088122, -0.825924, 1.598287, 15.595764, -2.396585, -1.536982, 16.168344, -1.739219, 2.231995, 16.409208, 0.060611, 0.03945, 22.883163, -1.739219, 2.231995, 16.409208, 1.046084, 2.438582, 16.403688, 0.060611, 0.03945, 22.883163, 1.991442, 5.168411, 10.179499, 1.046084, 2.438582, 16.403688, -1.739219, 2.231995, 16.409208, -4.317041, -1.77367, 10.140981, -2.118086, 4.178652, 9.418711, -1.739219, 2.231995, 16.409208, 4.486988, -1.456492, 10.932926, 2.420269, -1.773699, 16.168344, 1.046084, 2.438582, 16.403688, 1.046084, 2.438582, 16.403688, 2.420269, -1.773699, 16.168344, 0.060611, 0.03945, 22.883163, -0.217849, -0.647796, -2.595972, -0.217849, -0.647796, 18.588009, 0.149692, 0.434673, -2.595972, 0.149692, 0.434673, -2.595972, 0.149692, 0.434673, 18.588009, 0.517232, -0.647796, -2.595972, -0.217849, -0.647796, 18.588009, -0.217849, -0.647796, -2.595972, 0.517232, -0.647796, 18.588009, 1.178417, -2.402114, 16.409208, 1.557284, -4.881069, 9.418711, -1.606885, -2.66519, 16.403688, 1.835783, 2.397462, 16.168344, 3.756239, 2.69887, 10.140981, 1.178417, -2.402114, 16.409208, -2.552244, -6.14147, 10.179499, -5.047791, 2.294961, 10.932926, -1.606885, -2.66519, 16.403688, -2.118086, 4.178652, 9.418711, 1.991442, 5.168411, 10.179499, -1.739219, 2.231995, 16.409208, -2.396585, -1.536982, 16.168344, -4.317041, -1.77367, 10.140981, -1.739219, 2.231995, 16.409208, 1.991442, 5.168411, 10.179499, 4.486988, -1.456492, 10.932926, 1.046084, 2.438582, 16.403688],

    "normals": [-0.483688, 0.842769, -0.236122, 0.480911, 0.832118, -0.276193, -0.043703, 0.92346, -0.381115, -0.880398, 0.438948, -0.179449, -0.483688, 0.842769, -0.236122, -0.043703, 0.92346, -0.381115, 0.480911, 0.832118, -0.276193, 0.885617, 0.39256, -0.248085, -0.043703, 0.92346, -0.381115, -0.672292, -0.481735, 0.562059, 0.0, 0.839137, 0.54387, 0.0, 0.839137, -0.54387, 0.0, 0.839137, 0.54387, 0.672292, -0.481735, 0.562059, 0.672292, -0.481735, -0.562059, -0.672292, -0.481735, 0.562059, 0.672292, -0.481735, 0.562059, 0.0, 0.839137, 0.54387, -0.672292, -0.481735, -0.562059, 0.672292, -0.481735, -0.562059, 0.672292, -0.481735, 0.562059, -0.957732, 0.117985, -0.262307, -0.65627, 0.673482, -0.340129, -0.019562, 0.762871, -0.646229, -0.65627, 0.673482, -0.340129, 0.522965, 0.73104, -0.438185, -0.019562, 0.762871, -0.646229, -0.646443, 0.688803, -0.328013, 0.248054, 0.829218, -0.500809, 0.522965, 0.73104, -0.438185, -0.951964, 0.222114, -0.21073, -0.646443, 0.688803, -0.328013, -0.65627, 0.673482, -0.340129, 0.905881, 0.258431, -0.335429, 0.909146, 0.217292, -0.355266, 0.522965, 0.73104, -0.438185, 0.522965, 0.73104, -0.438185, 0.909146, 0.217292, -0.355266, -0.019562, 0.762871, -0.646229, -0.672292, -0.481735, -0.562059, 0.0, 0.839137, -0.54387, 0.672292, -0.481735, -0.562059, 0.452254, -0.869869, -0.196783, -0.451094, -0.860897, -0.235176, 0.035829, -0.950804, -0.307627, 0.831965, -0.528214, -0.169591, 0.452254, -0.869869, -0.196783, 0.035829, -0.950804, -0.307627, -0.451094, -0.860897, -0.235176, -0.846004, -0.477554, -0.237007, 0.035829, -0.950804, -0.307627, 0.942381, -0.145085, -0.30137, 0.647053, -0.669759, -0.364269, -0.060701, -0.809687, -0.583667, 0.647053, -0.669759, -0.364269, -0.517136, -0.753868, -0.405225, -0.060701, -0.809687, -0.583667, -0.318857, -0.868831, -0.378704, -0.517136, -0.753868, -0.405225, 0.647053, -0.669759, -0.364269, 0.935667, -0.291879, -0.198248, 0.636647, -0.733268, -0.238685, 0.647053, -0.669759, -0.364269, -0.887112, -0.328959, -0.32371, -0.906217, -0.27781, -0.318674, -0.517136, -0.753868, -0.405225, -0.517136, -0.753868, -0.405225, -0.906217, -0.27781, -0.318674, -0.060701, -0.809687, -0.583667, -0.672292, -0.481735, -0.562059, -0.672292, -0.481735, 0.562059, 0.0, 0.839137, -0.54387, 0.0, 0.839137, -0.54387, 0.0, 0.839137, 0.54387, 0.672292, -0.481735, -0.562059, -0.672292, -0.481735, 0.562059, -0.672292, -0.481735, -0.562059, 0.672292, -0.481735, 0.562059, -0.65627, 0.673482, -0.340129, -0.646443, 0.688803, -0.328013, 0.522965, 0.73104, -0.438185, -0.957732, 0.117985, -0.262307, -0.951964, 0.222114, -0.21073, -0.65627, 0.673482, -0.340129, 0.248054, 0.829218, -0.500809, 0.905881, 0.258431, -0.335429, 0.522965, 0.73104, -0.438185, 0.636647, -0.733268, -0.238685, -0.318857, -0.868831, -0.378704, 0.647053, -0.669759, -0.364269, 0.942381, -0.145085, -0.30137, 0.935667, -0.291879, -0.198248, 0.647053, -0.669759, -0.364269, -0.318857, -0.868831, -0.378704, -0.887112, -0.328959, -0.32371, -0.517136, -0.753868, -0.405225],

    "colors": [],

    "uvs": [0.478762, 0.015432, 0.731847, 0.015432, 0.478762, 0.993737, 0.225678, 0.015432, 0.478762, 0.015432, 0.225678, 0.993737, 0.731847, 0.015432, 0.984932, 0.015432, 0.731847, 0.993737, 0.15441, 0.171148, 0.15441, -0.011232, 0.15441, -0.011232, 0.009955, -0.011232, 0.009955, 0.171148, 0.009955, 0.171148, 0.15441, 0.171148, 0.009955, 0.171148, 0.15441, -0.011232, 0.15441, 0.171148, 0.009955, 0.171148, 0.009955, 0.171148, 0.225678, 0.504585, 0.478762, 0.504584, 0.225678, 0.993737, 0.478762, 0.504584, 0.731847, 0.504585, 0.478762, 0.993737, 0.478762, 0.015432, 0.731847, 0.015432, 0.731847, 0.504585, 0.225678, 0.015432, 0.478762, 0.015432, 0.478762, 0.504584, 0.984932, 0.015432, 0.984932, 0.504585, 0.731847, 0.504585, 0.731847, 0.504585, 0.984932, 0.504585, 0.731847, 0.993737, 0.15441, 0.171148, 0.009955, -0.011232, 0.009955, 0.171148, 0.478762, 0.015432, 0.731847, 0.015432, 0.478762, 0.993737, 0.225678, 0.015432, 0.478762, 0.015432, 0.225678, 0.993737, 0.731847, 0.015432, 0.984932, 0.015432, 0.731847, 0.993737, 0.225678, 0.504585, 0.478762, 0.504584, 0.225678, 0.993737, 0.478762, 0.504584, 0.731847, 0.504585, 0.478762, 0.993737, 0.731847, 0.015432, 0.731847, 0.504585, 0.478762, 0.504584, 0.225678, 0.015432, 0.478762, 0.015432, 0.478762, 0.504584, 0.984932, 0.015432, 0.984932, 0.504585, 0.731847, 0.504585, 0.731847, 0.504585, 0.984932, 0.504585, 0.731847, 0.993737, 0.15441, 0.171148, 0.15441, 0.171148, 0.15441, -0.011232, 0.009955, -0.011232, 0.009955, -0.011232, 0.009955, 0.171148, 0.15441, 0.171148, 0.15441, 0.171148, 0.009955, 0.171148, 0.478762, 0.504584, 0.478762, 0.015432, 0.731847, 0.504585, 0.225678, 0.504585, 0.225678, 0.015432, 0.478762, 0.504584, 0.731847, 0.015432, 0.984932, 0.015432, 0.731847, 0.504585, 0.478762, 0.015432, 0.731847, 0.015432, 0.478762, 0.504584, 0.225678, 0.504585, 0.225678, 0.015432, 0.478762, 0.504584, 0.731847, 0.015432, 0.984932, 0.015432, 0.731847, 0.504585],

    "faces": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95],

    "bones": [],

    "boneWeights": [],

    "boneIndices": [],

    "animations": {}
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "vertices": [-2.072248, 1.505576, -0.832262, -0.791528, 2.436073, -0.832262, -0.489191, 1.505576, -2.17889, -2.072248, 1.505576, 0.832262, -1.280719, 0.930497, 2.17889, -0.489191, 1.505576, 2.17889, -2.072248, 1.505576, 0.832262, -0.791528, 2.436074, 0.832262, -0.791528, 2.436073, -0.832262, -0.489191, 1.505576, -2.17889, -0.791528, 2.436073, -0.832262, 0.791528, 2.436073, -0.832262, -0.489191, 1.505576, 2.17889, 0.489192, 1.505576, 2.17889, 0.791529, 2.436074, 0.832262, -0.791528, 2.436074, 0.832262, 0.791529, 2.436074, 0.832262, 0.791528, 2.436073, -0.832262, 0.489192, 1.505576, -2.17889, 0.791528, 2.436073, -0.832262, 2.072248, 1.505576, -0.832262, 0.489192, 1.505576, 2.17889, 1.28072, 0.930497, 2.17889, 2.072248, 1.505576, 0.832262, 0.791528, 2.436073, -0.832262, 0.791529, 2.436074, 0.832262, 2.072248, 1.505576, 0.832262, 1.28072, 0.930497, -2.17889, 2.072248, 1.505576, -0.832262, 2.561439, 0.0, -0.832262, 1.28072, 0.930497, 2.17889, 1.583057, -0.0, 2.17889, 2.56144, 0.0, 0.832262, 2.072248, 1.505576, 0.832262, 2.56144, 0.0, 0.832262, 2.561439, 0.0, -0.832262, 1.240287, -0.150705, -2.729312, 2.561439, 0.0, -0.832262, 2.072248, -1.505576, -0.832262, 1.583057, -0.0, 2.17889, 1.28072, -0.930497, 2.17889, 2.072248, -1.505576, 0.832262, 2.56144, 0.0, 0.832262, 2.072248, -1.505576, 0.832262, 2.072248, -1.505576, -0.832262, 1.003413, -0.879727, -2.729312, 2.072248, -1.505576, -0.832262, 0.791529, -2.436073, -0.832262, 1.28072, -0.930497, 2.17889, 0.489192, -1.505576, 2.17889, 0.791529, -2.436073, 0.832262, 2.072248, -1.505576, 0.832262, 0.791529, -2.436073, 0.832262, 0.791529, -2.436073, -0.832262, 0.38327, -1.330288, -2.729312, 0.791529, -2.436073, -0.832262, -0.791528, -2.436073, -0.832262, 0.489192, -1.505576, 2.17889, -0.489191, -1.505576, 2.17889, -0.791528, -2.436073, 0.832262, 0.791529, -2.436073, 0.832262, -0.791528, -2.436073, 0.832262, -0.791528, -2.436073, -0.832262, -0.791528, -2.436073, -0.832262, -2.072247, -1.505576, -0.832262, -1.003413, -0.879728, -2.729312, -0.489191, -1.505576, 2.17889, -1.280719, -0.930497, 2.17889, -2.072247, -1.505576, 0.832262, -0.791528, -2.436073, 0.832262, -2.072247, -1.505576, 0.832262, -2.072247, -1.505576, -0.832262, 0.0, -0.150705, -3.299341, -1.240287, -0.150705, -2.729312, -1.280719, 0.930497, -2.17889, -2.561439, 0.0, -0.832262, -2.561439, -0.0, 0.832262, -2.072248, 1.505576, 0.832262, -1.583056, 0.0, 2.17889, 0.0, -0.0, 2.693256, -1.280719, 0.930497, 2.17889, -2.561439, 0.0, -0.832262, -2.072248, 1.505576, -0.832262, -1.280719, 0.930497, -2.17889, -1.583056, 0.0, 2.17889, -1.280719, 0.930497, 2.17889, -2.072248, 1.505576, 0.832262, 0.0, -0.150705, -3.299341, -1.280719, 0.930497, -2.17889, -0.489191, 1.505576, -2.17889, -1.280719, 0.930497, 2.17889, 0.0, -0.0, 2.693256, -0.489191, 1.505576, 2.17889, 0.0, -0.150705, -3.299341, -0.489191, 1.505576, -2.17889, 0.489192, 1.505576, -2.17889, -0.489191, 1.505576, 2.17889, 0.0, -0.0, 2.693256, 0.489192, 1.505576, 2.17889, 0.0, -0.150705, -3.299341, 0.489192, 1.505576, -2.17889, 1.28072, 0.930497, -2.17889, 0.489192, 1.505576, 2.17889, 0.0, -0.0, 2.693256, 1.28072, 0.930497, 2.17889, 0.0, -0.150705, -3.299341, 1.28072, 0.930497, -2.17889, 1.240287, -0.150705, -2.729312, 1.28072, 0.930497, 2.17889, 0.0, -0.0, 2.693256, 1.583057, -0.0, 2.17889, 0.0, -0.150705, -3.299341, 1.240287, -0.150705, -2.729312, 1.003413, -0.879727, -2.729312, 1.583057, -0.0, 2.17889, 0.0, -0.0, 2.693256, 1.28072, -0.930497, 2.17889, 0.0, -0.150705, -3.299341, 1.003413, -0.879727, -2.729312, 0.38327, -1.330288, -2.729312, 1.28072, -0.930497, 2.17889, 0.0, -0.0, 2.693256, 0.489192, -1.505576, 2.17889, 0.0, -0.150705, -3.299341, 0.38327, -1.330288, -2.729312, -0.383269, -1.330288, -2.729312, 0.489192, -1.505576, 2.17889, 0.0, -0.0, 2.693256, -0.489191, -1.505576, 2.17889, 0.0, -0.150705, -3.299341, -0.383269, -1.330288, -2.729312, -1.003413, -0.879728, -2.729312, -0.489191, -1.505576, 2.17889, 0.0, -0.0, 2.693256, -1.280719, -0.930497, 2.17889, -2.072247, -1.505576, -0.832262, -2.561439, 0.0, -0.832262, -1.240287, -0.150705, -2.729312, -1.280719, -0.930497, 2.17889, -1.583056, 0.0, 2.17889, -2.561439, -0.0, 0.832262, 0.0, -0.150705, -3.299341, -1.003413, -0.879728, -2.729312, -1.240287, -0.150705, -2.729312, -2.072247, -1.505576, -0.832262, -2.072247, -1.505576, 0.832262, -2.561439, -0.0, 0.832262, -1.280719, -0.930497, 2.17889, 0.0, -0.0, 2.693256, -1.583056, 0.0, 2.17889, 0.057702, 0.443236, -4.228172, 0.393527, -0.383082, -4.381704, -0.601891, -0.248365, -4.31964, 0.393527, -0.383082, -4.381704, 0.057702, 0.443236, -4.228172, 0.0, -0.150705, -3.299341, -0.601891, -0.248365, -4.31964, 0.393527, -0.383082, -4.381704, 0.0, -0.150705, -3.299341, -0.601891, -0.248365, -4.31964, 0.0, -0.150705, -3.299341, 0.057702, 0.443236, -4.228172, -1.280719, 0.930497, -2.17889, -2.072248, 1.505576, -0.832262, -0.489191, 1.505576, -2.17889, -0.791528, 2.436074, 0.832262, -2.072248, 1.505576, 0.832262, -0.489191, 1.505576, 2.17889, -2.072248, 1.505576, -0.832262, -2.072248, 1.505576, 0.832262, -0.791528, 2.436073, -0.832262, 0.489192, 1.505576, -2.17889, -0.489191, 1.505576, -2.17889, 0.791528, 2.436073, -0.832262, -0.791528, 2.436074, 0.832262, -0.489191, 1.505576, 2.17889, 0.791529, 2.436074, 0.832262, -0.791528, 2.436073, -0.832262, -0.791528, 2.436074, 0.832262, 0.791528, 2.436073, -0.832262, 1.28072, 0.930497, -2.17889, 0.489192, 1.505576, -2.17889, 2.072248, 1.505576, -0.832262, 0.791529, 2.436074, 0.832262, 0.489192, 1.505576, 2.17889, 2.072248, 1.505576, 0.832262, 2.072248, 1.505576, -0.832262, 0.791528, 2.436073, -0.832262, 2.072248, 1.505576, 0.832262, 1.240287, -0.150705, -2.729312, 1.28072, 0.930497, -2.17889, 2.561439, 0.0, -0.832262, 2.072248, 1.505576, 0.832262, 1.28072, 0.930497, 2.17889, 2.56144, 0.0, 0.832262, 2.072248, 1.505576, -0.832262, 2.072248, 1.505576, 0.832262, 2.561439, 0.0, -0.832262, 1.003413, -0.879727, -2.729312, 1.240287, -0.150705, -2.729312, 2.072248, -1.505576, -0.832262, 2.56144, 0.0, 0.832262, 1.583057, -0.0, 2.17889, 2.072248, -1.505576, 0.832262, 2.561439, 0.0, -0.832262, 2.56144, 0.0, 0.832262, 2.072248, -1.505576, -0.832262, 0.38327, -1.330288, -2.729312, 1.003413, -0.879727, -2.729312, 0.791529, -2.436073, -0.832262, 2.072248, -1.505576, 0.832262, 1.28072, -0.930497, 2.17889, 0.791529, -2.436073, 0.832262, 2.072248, -1.505576, -0.832262, 2.072248, -1.505576, 0.832262, 0.791529, -2.436073, -0.832262, -0.383269, -1.330288, -2.729312, 0.38327, -1.330288, -2.729312, -0.791528, -2.436073, -0.832262, 0.791529, -2.436073, 0.832262, 0.489192, -1.505576, 2.17889, -0.791528, -2.436073, 0.832262, 0.791529, -2.436073, -0.832262, 0.791529, -2.436073, 0.832262, -0.791528, -2.436073, -0.832262, -0.383269, -1.330288, -2.729312, -0.791528, -2.436073, -0.832262, -1.003413, -0.879728, -2.729312, -0.791528, -2.436073, 0.832262, -0.489191, -1.505576, 2.17889, -2.072247, -1.505576, 0.832262, -0.791528, -2.436073, -0.832262, -0.791528, -2.436073, 0.832262, -2.072247, -1.505576, -0.832262, -2.072248, 1.505576, -0.832262, -2.561439, 0.0, -0.832262, -2.072248, 1.505576, 0.832262, -1.240287, -0.150705, -2.729312, -2.561439, 0.0, -0.832262, -1.280719, 0.930497, -2.17889, -2.561439, -0.0, 0.832262, -1.583056, 0.0, 2.17889, -2.072248, 1.505576, 0.832262, -1.003413, -0.879728, -2.729312, -2.072247, -1.505576, -0.832262, -1.240287, -0.150705, -2.729312, -2.072247, -1.505576, 0.832262, -1.280719, -0.930497, 2.17889, -2.561439, -0.0, 0.832262, -2.561439, 0.0, -0.832262, -2.072247, -1.505576, -0.832262, -2.561439, -0.0, 0.832262],

    "normals": [-0.773614, 0.562059, -0.292459, -0.29548, 0.909452, -0.292459, -0.217444, 0.672048, -0.707816, -0.773614, 0.562059, 0.292459, -0.505814, 0.367473, 0.780419, -0.193182, 0.594623, 0.780419, -0.773614, 0.562059, 0.292459, -0.29548, 0.909452, 0.292459, -0.29548, 0.909452, -0.292459, -0.217444, 0.672048, -0.707816, -0.29548, 0.909452, -0.292459, 0.29548, 0.909452, -0.292459, -0.193182, 0.594623, 0.780419, 0.193182, 0.594623, 0.780419, 0.29548, 0.909452, 0.292459, -0.29548, 0.909452, 0.292459, 0.29548, 0.909452, 0.292459, 0.29548, 0.909452, -0.292459, 0.217444, 0.672048, -0.707816, 0.29548, 0.909452, -0.292459, 0.773614, 0.562059, -0.292459, 0.193182, 0.594623, 0.780419, 0.505814, 0.367473, 0.780419, 0.773614, 0.562059, 0.292459, 0.29548, 0.909452, -0.292459, 0.29548, 0.909452, 0.292459, 0.773614, 0.562059, 0.292459, 0.573962, 0.453322, -0.681906, 0.773614, 0.562059, -0.292459, 0.958647, 0.004791, -0.284524, 0.505814, 0.367473, 0.780419, 0.625202, 0.0, 0.780419, 0.956267, 0.0, 0.292459, 0.773614, 0.562059, 0.292459, 0.956267, 0.0, 0.292459, 0.958647, 0.004791, -0.284524, 0.638356, 0.067324, -0.766747, 0.958647, 0.004791, -0.284524, 0.781152, -0.562822, -0.270119, 0.625202, 0.0, 0.780419, 0.505814, -0.367473, 0.780419, 0.773614, -0.562059, 0.292459, 0.956267, 0.0, 0.292459, 0.773614, -0.562059, 0.292459, 0.781152, -0.562822, -0.270119, 0.549333, -0.406812, -0.72985, 0.781152, -0.562822, -0.270119, 0.299722, -0.9176, -0.260994, 0.505814, -0.367473, 0.780419, 0.193182, -0.594623, 0.780419, 0.29548, -0.909452, 0.292459, 0.773614, -0.562059, 0.292459, 0.29548, -0.909452, 0.292459, 0.299722, -0.9176, -0.260994, 0.211371, -0.658406, -0.722343, 0.299722, -0.9176, -0.260994, -0.299722, -0.9176, -0.260994, 0.193182, -0.594623, 0.780419, -0.193182, -0.594623, 0.780419, -0.29548, -0.909452, 0.292459, 0.29548, -0.909452, 0.292459, -0.29548, -0.909452, 0.292459, -0.299722, -0.9176, -0.260994, -0.299722, -0.9176, -0.260994, -0.781152, -0.562822, -0.270119, -0.549333, -0.406812, -0.72985, -0.193182, -0.594623, 0.780419, -0.505814, -0.367473, 0.780419, -0.773614, -0.562059, 0.292459, -0.29548, -0.909452, 0.292459, -0.773614, -0.562059, 0.292459, -0.781152, -0.562822, -0.270119, 0.007508, 0.086612, -0.996185, -0.638356, 0.067324, -0.766747, -0.573962, 0.453322, -0.681906, -0.958647, 0.004791, -0.284524, -0.956267, 0.0, 0.292459, -0.773614, 0.562059, 0.292459, -0.625202, 0.0, 0.780419, 0.0, 0.0, 1.0, -0.505814, 0.367473, 0.780419, -0.958647, 0.004791, -0.284524, -0.773614, 0.562059, -0.292459, -0.573962, 0.453322, -0.681906, -0.625202, 0.0, 0.780419, -0.505814, 0.367473, 0.780419, -0.773614, 0.562059, 0.292459, 0.007508, 0.086612, -0.996185, -0.573962, 0.453322, -0.681906, -0.217444, 0.672048, -0.707816, -0.505814, 0.367473, 0.780419, 0.0, 0.0, 1.0, -0.193182, 0.594623, 0.780419, 0.007508, 0.086612, -0.996185, -0.217444, 0.672048, -0.707816, 0.217444, 0.672048, -0.707816, -0.193182, 0.594623, 0.780419, 0.0, 0.0, 1.0, 0.193182, 0.594623, 0.780419, 0.007508, 0.086612, -0.996185, 0.217444, 0.672048, -0.707816, 0.573962, 0.453322, -0.681906, 0.193182, 0.594623, 0.780419, 0.0, 0.0, 1.0, 0.505814, 0.367473, 0.780419, 0.007508, 0.086612, -0.996185, 0.573962, 0.453322, -0.681906, 0.638356, 0.067324, -0.766747, 0.505814, 0.367473, 0.780419, 0.0, 0.0, 1.0, 0.625202, 0.0, 0.780419, 0.007508, 0.086612, -0.996185, 0.638356, 0.067324, -0.766747, 0.549333, -0.406812, -0.72985, 0.625202, 0.0, 0.780419, 0.0, 0.0, 1.0, 0.505814, -0.367473, 0.780419, 0.007508, 0.086612, -0.996185, 0.549333, -0.406812, -0.72985, 0.211371, -0.658406, -0.722343, 0.505814, -0.367473, 0.780419, 0.0, 0.0, 1.0, 0.193182, -0.594623, 0.780419, 0.007508, 0.086612, -0.996185, 0.211371, -0.658406, -0.722343, -0.211371, -0.658406, -0.722343, 0.193182, -0.594623, 0.780419, 0.0, 0.0, 1.0, -0.193182, -0.594623, 0.780419, 0.007508, 0.086612, -0.996185, -0.211371, -0.658406, -0.722343, -0.549333, -0.406812, -0.72985, -0.193182, -0.594623, 0.780419, 0.0, 0.0, 1.0, -0.505814, -0.367473, 0.780419, -0.781152, -0.562822, -0.270119, -0.958647, 0.004791, -0.284524, -0.638356, 0.067324, -0.766747, -0.505814, -0.367473, 0.780419, -0.625202, 0.0, 0.780419, -0.956267, 0.0, 0.292459, 0.007508, 0.086612, -0.996185, -0.549333, -0.406812, -0.72985, -0.638356, 0.067324, -0.766747, -0.781152, -0.562822, -0.270119, -0.773614, -0.562059, 0.292459, -0.956267, 0.0, 0.292459, -0.505814, -0.367473, 0.780419, 0.0, 0.0, 1.0, -0.625202, 0.0, 0.780419, 0.160131, 0.9523, -0.259651, 0.706992, -0.51561, -0.483993, -0.889126, -0.268899, -0.370281, 0.706992, -0.51561, -0.483993, 0.160131, 0.9523, -0.259651, 0.007508, 0.086612, -0.996185, -0.889126, -0.268899, -0.370281, 0.706992, -0.51561, -0.483993, 0.007508, 0.086612, -0.996185, -0.889126, -0.268899, -0.370281, 0.007508, 0.086612, -0.996185, 0.160131, 0.9523, -0.259651, -0.573962, 0.453322, -0.681906, -0.773614, 0.562059, -0.292459, -0.217444, 0.672048, -0.707816, -0.29548, 0.909452, 0.292459, -0.773614, 0.562059, 0.292459, -0.193182, 0.594623, 0.780419, -0.773614, 0.562059, -0.292459, -0.773614, 0.562059, 0.292459, -0.29548, 0.909452, -0.292459, 0.217444, 0.672048, -0.707816, -0.217444, 0.672048, -0.707816, 0.29548, 0.909452, -0.292459, -0.29548, 0.909452, 0.292459, -0.193182, 0.594623, 0.780419, 0.29548, 0.909452, 0.292459, -0.29548, 0.909452, -0.292459, -0.29548, 0.909452, 0.292459, 0.29548, 0.909452, -0.292459, 0.573962, 0.453322, -0.681906, 0.217444, 0.672048, -0.707816, 0.773614, 0.562059, -0.292459, 0.29548, 0.909452, 0.292459, 0.193182, 0.594623, 0.780419, 0.773614, 0.562059, 0.292459, 0.773614, 0.562059, -0.292459, 0.29548, 0.909452, -0.292459, 0.773614, 0.562059, 0.292459, 0.638356, 0.067324, -0.766747, 0.573962, 0.453322, -0.681906, 0.958647, 0.004791, -0.284524, 0.773614, 0.562059, 0.292459, 0.505814, 0.367473, 0.780419, 0.956267, 0.0, 0.292459, 0.773614, 0.562059, -0.292459, 0.773614, 0.562059, 0.292459, 0.958647, 0.004791, -0.284524, 0.549333, -0.406812, -0.72985, 0.638356, 0.067324, -0.766747, 0.781152, -0.562822, -0.270119, 0.956267, 0.0, 0.292459, 0.625202, 0.0, 0.780419, 0.773614, -0.562059, 0.292459, 0.958647, 0.004791, -0.284524, 0.956267, 0.0, 0.292459, 0.781152, -0.562822, -0.270119, 0.211371, -0.658406, -0.722343, 0.549333, -0.406812, -0.72985, 0.299722, -0.9176, -0.260994, 0.773614, -0.562059, 0.292459, 0.505814, -0.367473, 0.780419, 0.29548, -0.909452, 0.292459, 0.781152, -0.562822, -0.270119, 0.773614, -0.562059, 0.292459, 0.299722, -0.9176, -0.260994, -0.211371, -0.658406, -0.722343, 0.211371, -0.658406, -0.722343, -0.299722, -0.9176, -0.260994, 0.29548, -0.909452, 0.292459, 0.193182, -0.594623, 0.780419, -0.29548, -0.909452, 0.292459, 0.299722, -0.9176, -0.260994, 0.29548, -0.909452, 0.292459, -0.299722, -0.9176, -0.260994, -0.211371, -0.658406, -0.722343, -0.299722, -0.9176, -0.260994, -0.549333, -0.406812, -0.72985, -0.29548, -0.909452, 0.292459, -0.193182, -0.594623, 0.780419, -0.773614, -0.562059, 0.292459, -0.299722, -0.9176, -0.260994, -0.29548, -0.909452, 0.292459, -0.781152, -0.562822, -0.270119, -0.773614, 0.562059, -0.292459, -0.958647, 0.004791, -0.284524, -0.773614, 0.562059, 0.292459, -0.638356, 0.067324, -0.766747, -0.958647, 0.004791, -0.284524, -0.573962, 0.453322, -0.681906, -0.956267, 0.0, 0.292459, -0.625202, 0.0, 0.780419, -0.773614, 0.562059, 0.292459, -0.549333, -0.406812, -0.72985, -0.781152, -0.562822, -0.270119, -0.638356, 0.067324, -0.766747, -0.773614, -0.562059, 0.292459, -0.505814, -0.367473, 0.780419, -0.956267, 0.0, 0.292459, -0.958647, 0.004791, -0.284524, -0.781152, -0.562822, -0.270119, -0.956267, 0.0, 0.292459],

    "colors": [0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.678431, 0.141176, 0.141176, 0.690196, 0.152941, 0.156863, 0.933333, 0.623529, 0.690196, 0.913725, 0.007843, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.690196, 0.152941, 0.156863, 0.756863, 0.184314, 0.223529, 0.913725, 0.007843, 0.062745, 0.913725, 0.007843, 0.062745, 0.913725, 0.007843, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.756863, 0.184314, 0.223529, 0.682353, 0.145098, 0.14902, 0.921569, 0.003922, 0.062745, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.921569, 0.003922, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.682353, 0.145098, 0.14902, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.921569, 0.003922, 0.062745, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.686275, 0.113725, 0.156863, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.929412, 0.0, 0.058824, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.92549, 0.0, 0.058824, 0.929412, 0.0, 0.058824, 0.92549, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.964706, 0.384314, 0.411765, 0.92549, 0.0, 0.058824, 0.964706, 0.384314, 0.411765, 0.678431, 0.141176, 0.141176, 0.698039, 0.156863, 0.164706, 0.678431, 0.141176, 0.141176, 0.815686, 0.152941, 0.227451, 0.678431, 0.141176, 0.141176, 0.682353, 0.145098, 0.145098, 0.894118, 0.047059, 0.094118, 0.964706, 0.384314, 0.411765, 0.894118, 0.047059, 0.094118, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.85098, 0.152941, 0.247059, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.933333, 0.623529, 0.690196, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.560784, 0.082353, 0.121569, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.690196, 0.152941, 0.156863, 0.560784, 0.082353, 0.121569, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.690196, 0.152941, 0.156863, 0.243137, 0.0, 0.015686, 0.756863, 0.184314, 0.223529, 0.560784, 0.082353, 0.121569, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.756863, 0.184314, 0.223529, 0.243137, 0.0, 0.015686, 0.682353, 0.145098, 0.14902, 0.560784, 0.082353, 0.121569, 0.678431, 0.141176, 0.141176, 0.796078, 0.14902, 0.211765, 0.682353, 0.145098, 0.14902, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.690196, 0.098039, 0.164706, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.65098, 0.086275, 0.145098, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.65098, 0.086275, 0.145098, 0.85098, 0.152941, 0.247059, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.772549, 0.14902, 0.196078, 0.815686, 0.152941, 0.227451, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.682353, 0.145098, 0.145098, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.85098, 0.152941, 0.247059, 0.682353, 0.145098, 0.145098, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.541176, 0.07451, 0.121569, 0.815686, 0.152941, 0.227451, 0.85098, 0.152941, 0.247059, 0.678431, 0.141176, 0.141176, 0.890196, 0.027451, 0.07451, 0.929412, 0.0, 0.058824, 0.682353, 0.145098, 0.145098, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.239216, 0.0, 0.015686, 0.239216, 0.0, 0.015686, 0.239216, 0.0, 0.015686, 0.239216, 0.0, 0.015686, 0.239216, 0.0, 0.015686, 0.560784, 0.082353, 0.121569, 0.513726, 0.070588, 0.109804, 0.239216, 0.0, 0.015686, 0.541176, 0.07451, 0.121569, 0.239216, 0.0, 0.015686, 0.560784, 0.082353, 0.121569, 0.25098, 0.003922, 0.019608, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.933333, 0.623529, 0.690196, 0.690196, 0.152941, 0.156863, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.690196, 0.152941, 0.156863, 0.913725, 0.007843, 0.062745, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.756863, 0.184314, 0.223529, 0.921569, 0.003922, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.921569, 0.003922, 0.062745, 0.686275, 0.113725, 0.156863, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.921569, 0.003922, 0.062745, 0.682353, 0.145098, 0.14902, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.921569, 0.003922, 0.062745, 0.678431, 0.141176, 0.141176, 0.654902, 0.098039, 0.145098, 0.686275, 0.113725, 0.156863, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.65098, 0.086275, 0.145098, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.92549, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.85098, 0.152941, 0.247059, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.92549, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.964706, 0.384314, 0.411765, 0.678431, 0.141176, 0.141176, 0.92549, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.772549, 0.14902, 0.196078, 0.698039, 0.156863, 0.164706, 0.815686, 0.152941, 0.227451, 0.964706, 0.384314, 0.411765, 0.678431, 0.141176, 0.141176, 0.894118, 0.047059, 0.094118, 0.678431, 0.141176, 0.141176, 0.964706, 0.384314, 0.411765, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.85098, 0.152941, 0.247059, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.815686, 0.152941, 0.227451, 0.678431, 0.141176, 0.141176, 0.85098, 0.152941, 0.247059, 0.890196, 0.027451, 0.07451, 0.682353, 0.145098, 0.145098, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824],

    "uvs": [],

    "faces": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251],

    "bones": [],

    "boneWeights": [],

    "boneIndices": [],

    "animations": {}
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export approximateCollisionNormal */
/* unused harmony export boxIntersectsBox */
/* harmony export (immutable) */ __webpack_exports__["c"] = sphereCollidesCapsule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_utils__ = __webpack_require__(0);


const COLLISION_REJECTION = 0.05;
/* unused harmony export COLLISION_REJECTION */


const movingBoxIntersectsBox = (matrix0, dimensions0, matrix1, dimensions1, moveVector) =>{
  const colliderPoint = boxIntersectsBox(matrix0, dimensions0, matrix1, dimensions1) || 
  boxIntersectsBox(matrix1, dimensions1, matrix0, dimensions0);
  if(colliderPoint){
    return {normal: approximateCollisionNormal(
      __WEBPACK_IMPORTED_MODULE_0__math_utils__["subtractVectors"](colliderPoint, moveVector.concat(0)), matrix1, dimensions1),
      colliderPoint
    };
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = movingBoxIntersectsBox;

function approximateCollisionNormal(position, boxMatrix, boxDimensions){
  const transformedPoint = __WEBPACK_IMPORTED_MODULE_0__math_utils__["multiplyVec4ByMatrix4"](
    __WEBPACK_IMPORTED_MODULE_0__math_utils__["inverse_mat4_rot_pos"](boxMatrix), position);
  let maxDimensionIndex;
  let maxDistFromSurface = 0;
  let distFromSurface;
  for(let i = 0; i < 2; ++i){
    distFromSurface = Math.abs(Math.abs(transformedPoint[i]) - boxDimensions[i]);
    if(distFromSurface > maxDistFromSurface){
      maxDistFromSurface = distFromSurface;
      maxDimensionIndex = i;
    }
  }
  const normal = [0,0,0,0];
  normal[maxDimensionIndex] = (transformedPoint[maxDimensionIndex] < 0) ? -1 : 1;
  return __WEBPACK_IMPORTED_MODULE_0__math_utils__["multiplyVec4ByMatrix4"](boxMatrix, normal).slice(0,3);
};
function boxIntersectsBox(matrix0, dimensions0, matrix1, dimensions1){
  let transformedPoint, pointCollides;
  const worldCoordsPoints = boxColliderToPoints(matrix0, dimensions0);
  for(let i = 0; i < worldCoordsPoints.length; ++i){
    transformedPoint = __WEBPACK_IMPORTED_MODULE_0__math_utils__["multiplyVec4ByMatrix4"](
      __WEBPACK_IMPORTED_MODULE_0__math_utils__["inverse_mat4_rot_pos"](matrix1),
      worldCoordsPoints[i]
    );
    pointCollides = true;
    for(let j = 0; j < 3; ++j){
      if(transformedPoint[j] > dimensions1[j] ||
         transformedPoint[j] < -1* dimensions1[j]){
           pointCollides = false;
           break;
      }
    }
    if(pointCollides){
       return worldCoordsPoints[i];
    }
  }
  return false;
}

function sphereCollidesCapsule(sphereOrigin, sphereRadius,
capsulePoint0, capsulePoint1, capsuleRadius){
  const capsuleVector = __WEBPACK_IMPORTED_MODULE_0__math_utils__["subtractVectors"](capsulePoint1, capsulePoint0);
  const point0ToSphereOrigin = __WEBPACK_IMPORTED_MODULE_0__math_utils__["subtractVectors"](sphereOrigin, capsulePoint0);
  const point0ToSphereAngle = __WEBPACK_IMPORTED_MODULE_0__math_utils__["angleBetweenVectors"](point0ToSphereOrigin, capsuleVector);
  const point1ToSphereOrigin = __WEBPACK_IMPORTED_MODULE_0__math_utils__["subtractVectors"](sphereOrigin, capsulePoint1);
  const point1ToSphereAngle = __WEBPACK_IMPORTED_MODULE_0__math_utils__["angleBetweenVectors"](point1ToSphereOrigin,
     __WEBPACK_IMPORTED_MODULE_0__math_utils__["scaleVector"](capsuleVector, -1)
    );
  const maxDist = sphereRadius + capsuleRadius;
  let dist;
  if(point0ToSphereAngle < Math.PI/2 &&
    point1ToSphereAngle < Math.PI/2){
    dist =  __WEBPACK_IMPORTED_MODULE_0__math_utils__["vectorMag"](point0ToSphereOrigin) * Math.sin(point0ToSphereAngle);
    if(dist <= maxDist){
      const rotationMatrix = __WEBPACK_IMPORTED_MODULE_0__math_utils__["axisAngleToMatrix"](
        __WEBPACK_IMPORTED_MODULE_0__math_utils__["vectorCross"](point0ToSphereOrigin, capsuleVector),
        Math.PI/2
      );
      const capsuleNormal = __WEBPACK_IMPORTED_MODULE_0__math_utils__["multiplyVec4ByMatrix4"](rotationMatrix, capsuleVector.concat(0)).slice(0,3);
      if(isNaN(capsuleNormal[0])){
        debugger;
      }
      return {capsuleNormal,
      sphereNormal: __WEBPACK_IMPORTED_MODULE_0__math_utils__["scaleVector"](capsuleNormal, -1),
      penetration: maxDist - dist};
    }
    return false;
  } else if((dist = __WEBPACK_IMPORTED_MODULE_0__math_utils__["distance"](capsulePoint0, sphereOrigin)) <= maxDist){
    const capsuleNormal = __WEBPACK_IMPORTED_MODULE_0__math_utils__["subtractVectors"](sphereOrigin, capsulePoint0);
    return {capsuleNormal,
      sphereNormal: __WEBPACK_IMPORTED_MODULE_0__math_utils__["scaleVector"](capsuleNormal, -1),
      penetration: maxDist - dist
    };
  } else if((dist = __WEBPACK_IMPORTED_MODULE_0__math_utils__["distance"](capsulePoint1, sphereOrigin)) <= maxDist){
    const capsuleNormal = __WEBPACK_IMPORTED_MODULE_0__math_utils__["subtractVectors"](sphereOrigin, capsulePoint1);
    return {capsuleNormal,
      sphereNormal: __WEBPACK_IMPORTED_MODULE_0__math_utils__["scaleVector"](capsuleNormal, -1),
      penetration: maxDist - dist
    };
  }
  return false;
}

const boxColliderToPoints = (matrix, dimensions) =>{
  const points = [];
  for(let xDirection = -1; xDirection <= 1; xDirection+= 2){
    for(let yDirection = -1; yDirection<= 1; yDirection+= 2){
      for(let zDirection = -1; zDirection<= 1; zDirection+= 2){
        points.push(
          __WEBPACK_IMPORTED_MODULE_0__math_utils__["multiplyVec4ByMatrix4"](
            matrix, [dimensions[0] * xDirection,
            dimensions[1] * yDirection,
            dimensions[2] * zDirection, 1]
          )
        );
      }
    }
  }
  return points;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = boxColliderToPoints;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map