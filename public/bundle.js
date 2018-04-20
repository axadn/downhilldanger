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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mat_4_multiply = mat_4_multiply;
exports.mat4MultipyInPlace = mat4MultipyInPlace;
exports.inverseMat4InPlace = inverseMat4InPlace;
exports.addVectorsInPlace = addVectorsInPlace;
exports.subtractVectorsInPlace = subtractVectorsInPlace;
exports.vectorCrossInPlace = vectorCrossInPlace;
exports.mat4RotationComponentInPlace = mat4RotationComponentInPlace;
exports.scalarProjection = scalarProjection;
exports.projectVectorInPlace = projectVectorInPlace;
exports.projectVectorOntoPlane = projectVectorOntoPlane;
exports.projectVectorOntoPlaneInPlace = projectVectorOntoPlaneInPlace;
exports.planeNormalInPlace = planeNormalInPlace;
exports.multiplyVec4ByMatrix4 = multiplyVec4ByMatrix4;
exports.multiplyVec3ByMatrix4InPlace = multiplyVec3ByMatrix4InPlace;
exports.rotateVec3byMatrix4InPlace = rotateVec3byMatrix4InPlace;
exports.vectorNormalize = vectorNormalize;
exports.vectorNormalizeInPlace = vectorNormalizeInPlace;
exports.scaleVectorInPlace = scaleVectorInPlace;
exports.distance = distance;
exports.lerpQuaternions = lerpQuaternions;
var tempVector3 = [0, 0, 0];
var tempVector3_1 = [0, 0, 0];
var tempVector3_2 = [0, 0, 0];
var tempVector3_3 = [0, 0, 0];
function mat_4_multiply(matrix0, matrix1) {
  var result = [];
  var sum = 0;
  for (var i = 0; i < 4; ++i) {
    for (var j = 0; j < 4; ++j) {
      sum = 0;
      for (var k = 0; k < 4; ++k) {
        sum += matrix0[i * 4 + k] * matrix1[k * 4 + j];
      }
      result.push(sum);
    }
  }
  return result;
};

function mat4MultipyInPlace(matrix0, matrix1, result) {
  var sum = 0;
  for (var i = 0; i < 4; ++i) {
    for (var j = 0; j < 4; ++j) {
      sum = 0;
      for (var k = 0; k < 4; ++k) {
        sum += matrix0[i * 4 + k] * matrix1[k * 4 + j];
      }
      result[i * 4 + j] = sum;
    }
  }
  return result;
}

var identityMatrix4 = exports.identityMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
var translationMatrix = exports.translationMatrix = function translationMatrix(x, y, z) {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
};
var scaleMatrix = exports.scaleMatrix = function scaleMatrix(x, y, z, w) {
  return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, w];
};

var xRotationMatrix = exports.xRotationMatrix = function xRotationMatrix(radians) {
  var s = Math.sin(radians);
  var c = Math.cos(radians);
  return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
};

var yRotationMatrix = exports.yRotationMatrix = function yRotationMatrix(radians) {
  var s = Math.sin(radians);
  var c = Math.cos(radians);
  return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
};

var zRotationMatrix = exports.zRotationMatrix = function zRotationMatrix(radians) {
  var s = Math.sin(radians);
  var c = Math.cos(radians);
  return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};
var mat_4_transpose = exports.mat_4_transpose = function mat_4_transpose(mat) {
  var new_mat = [];
  for (var i = 0; i < 4; ++i) {
    for (var j = 0; j < 4; ++j) {
      new_mat.push(mat[i + j * 4]);
    }
  }
  return new_mat;
};
var inverse_mat4_rot_pos = exports.inverse_mat4_rot_pos = function inverse_mat4_rot_pos(mat) {
  /*invert a matrix that contains only rot and pos :
  * break down the matrix into a rotation and position component
  * transpose the rotation component
  * recombine them in reverse order (translation then rotation)
  */
  return mat_4_multiply([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1 * mat[12], -1 * mat[13], -1 * mat[14], 1], [mat[0], mat[4], mat[8], 0, mat[1], mat[5], mat[9], 0, mat[2], mat[6], mat[10], 0, 0, 0, 0, 1]);
};
var inverseRotComponentMap = [0, 4, 8, 0, 1, 5, 9, 0, 2, 6, 10, 0];
var inverseTranslationComponent = Array(16);
function inverseMat4InPlace(mat, result) {
  for (var i = 0; i < 3; ++i) {
    for (var j = 0; j < 3; ++j) {
      result[i * 4 + j] = mat[inverseRotComponentMap[i * 4 + j]];
    }
  }
  for (var _i = 0; _i < 4; ++_i) {
    result[12 + _i] = mat[_i] * -1 * mat[12] - mat[4 + _i] * mat[13] - mat[8 + _i] * mat[14];
  }
}

var swapYZMatrix = exports.swapYZMatrix = [
//x,y,z,w
1, 0, 0, 0, //x
0, 0, 1, 0, //y
0, 1, 0, 0, //z
0, 0, 0, 1];
var simple_perspective_matrix = exports.simple_perspective_matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1];

var translate_mat4 = exports.translate_mat4 = function translate_mat4(mat) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  return mat_4_multiply(mat, translationMatrix(x, y, z));
};

var pointIsAbovePlane = exports.pointIsAbovePlane = function pointIsAbovePlane(pos, vertex0, vertex1, vertex2) {
  // the normal to the plane

  var offsetVector = subtractVectors(pos, vertex1);
  // a vector from a point on the plane to the point we are checking

  return vectorDot(offsetVector, planeNormal(vertex0, vertex1, vertex2)) > 0;
};

var addVectors = exports.addVectors = function addVectors(vector1, vector2) {
  var newVector = [];
  for (var i = 0; i < vector1.length; ++i) {
    newVector.push(vector1[i] + vector2[i]);
  };
  return newVector;
};

function addVectorsInPlace(vector1, vector2, result) {
  var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
  var resultStartIdx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  for (var i = 0; i < length; ++i) {
    result[resultStartIdx + i] = vector1[i] + vector2[i];
  }
  return result;
}

function subtractVectorsInPlace(vector1, vector2, result) {
  var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
  var resultStartIdx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  for (var i = 0; i < length; ++i) {
    result[resultStartIdx + i] = vector1[i] - vector2[i];
  }
  return result;
}

var vectorCross = exports.vectorCross = function vectorCross(vector1, vector2) {
  return [vector1[1] * vector2[2] - vector1[2] * vector2[1], vector1[2] * vector2[0] - vector1[0] * vector2[2], vector1[0] * vector2[1] - vector1[1] * vector2[0]];
};

function vectorCrossInPlace(vector1, vector2, result) {
  var resultStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  result[resultStart] = vector1[1] * vector2[2] - vector1[2] * vector2[1];
  result[resultStart + 1] = vector1[2] * vector2[0] - vector1[0] * vector2[2];
  result[resultStart + 2] = vector1[0] * vector2[1] - vector1[1] * vector2[0];
}

var subtractVectors = exports.subtractVectors = function subtractVectors(vector1, vector2) {
  var newVector = [];
  for (var i = 0; i < vector1.length; ++i) {
    newVector.push(vector1[i] - vector2[i]);
  }
  return newVector;
};

var vectorDot = exports.vectorDot = function vectorDot(vector1, vector2) {
  return vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2];
};

/* indices
0  1  2  3
4  5  6  7
8  9  10 11
12 13 14 15

*/
var mat4TranslationComponent = exports.mat4TranslationComponent = function mat4TranslationComponent(mat) {
  return [mat[12], mat[13], mat[14]];
};
var mat4RotationComponent = exports.mat4RotationComponent = function mat4RotationComponent(mat) {
  return [mat[0], mat[1], mat[2], 0, mat[4], mat[5], mat[6], 0, mat[8], mat[9], mat[10], 0, 0, 0, 0, 1];
};

var rotationComponentMask = [true, true, true, false, true, true, true, false, true, true, true, false, false, false, false, false];
function mat4RotationComponentInPlace(mat, result) {
  for (var i = 0; i < 16; ++i) {
    if (rotationComponentMask[i]) {
      result[i] = mat[i];
    } else {
      result[i] = 0;
    }
  }
  result[15] = 1;
  return result;
}

var vectorSquareMag = exports.vectorSquareMag = function vectorSquareMag(vector) {
  var sum = 0;
  for (var i = 0; i < vector.length; ++i) {
    sum += vector[i] * vector[i];
  }
  return sum;
};

var projectVector = exports.projectVector = function projectVector(vector, onto) {
  var dotProduct = vectorDot(vector, onto);
  return scaleVector(onto, dotProduct / vectorSquareMag(onto));
};

function scalarProjection(vector, onto) {
  return vectorDot(vector, onto) / vectorMag(onto);
}
function projectVectorInPlace(vector, onto, result) {
  var scaleAmount = vectorDot(vector, onto) / vectorSquareMag(onto);
  for (var i = 0; i < 3; ++i) {
    result[i] = onto[i] * scaleAmount;
  }
  return result;
}

//----------------------------
var projectedAlongNormal = [0, 0, 0];
function projectVectorOntoPlane(vector, planeNormal) {
  return subtractVectors(vector, projectVectorInPlace(vector, planeNormal, projectedAlongNormal));
}
function projectVectorOntoPlaneInPlace(vector, planeNormal, result) {
  return subtractVectorsInPlace(vector, projectVectorInPlace(vector, planeNormal, projectedAlongNormal), result);
}
//---------------------------------
var planeNormal = exports.planeNormal = function planeNormal(t0, t1, t2) {
  var vectorA = subtractVectors(t1, t2);
  var vectorB = subtractVectors(t1, t0);
  return vectorCross(vectorA, vectorB);
};

var planeNormalVectorA = [0, 0, 0];
var planeNormalVectorB = [0, 0, 0];
function planeNormalInPlace(triangle, result) {
  var resultStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  subtractVectorsInPlace(triangle[1], triangle[2], planeNormalVectorA);
  subtractVectorsInPlace(triangle[1], triangle[0], planeNormalVectorB);
  return vectorCrossInPlace(planeNormalVectorA, planeNormalVectorB, result, resultStart);
}

var planeNormalTemp = [0, 0, 0];
var pointOffsetTemp = [0, 0, 0];
var triangleSideTemp = [0, 0, 0];
var sideOffsetCrossTemp = [0, 0, 0];
/**
triangle configuration :
t2

          t1


t0
*/
var triangleContainsPoint = exports.triangleContainsPoint = function triangleContainsPoint(p, triangle) {
  planeNormalInPlace(triangle, planeNormalTemp);

  //this checks if the first side is ahead of the point clockwise
  subtractVectorsInPlace(triangle[1], triangle[0], triangleSideTemp);
  subtractVectorsInPlace(p, triangle[0], pointOffsetTemp);
  vectorCrossInPlace(triangleSideTemp, pointOffsetTemp, sideOffsetCrossTemp);
  if (vectorDot(sideOffsetCrossTemp, planeNormalTemp) < 0) return false;

  //same thing for 2nd side
  subtractVectorsInPlace(triangle[2], triangle[1], triangleSideTemp);
  subtractVectorsInPlace(p, triangle[1], pointOffsetTemp);
  vectorCrossInPlace(triangleSideTemp, pointOffsetTemp, sideOffsetCrossTemp);
  if (vectorDot(sideOffsetCrossTemp, planeNormalTemp) < 0) return false;

  //3rd side
  subtractVectorsInPlace(triangle[0], triangle[2], triangleSideTemp);
  subtractVectorsInPlace(p, triangle[2], pointOffsetTemp);
  vectorCrossInPlace(triangleSideTemp, pointOffsetTemp, sideOffsetCrossTemp);
  if (vectorDot(sideOffsetCrossTemp, planeNormalTemp) < 0) return false;

  return true;
};

//--------------------------matrix multiplication--------------------------------//
function multiplyVec4ByMatrix4(matrix, vec) {
  if (vec.length < 4) {
    vec = vec.concat(0);
  }
  var result = [0, 0, 0, 0];
  for (var i = 0; i < 4; ++i) {
    for (var j = 0; j < 4; ++j) {
      result[j] += matrix[i * 4 + j] * vec[i];
    }
  }
  return result;
};

var vectorTransformTemp = [0, 0, 0];
function multiplyVec3ByMatrix4InPlace(matrix, vec, result) {
  for (var i = 0; i < 3; ++i) {
    vectorTransformTemp[i] = 0;
  }
  for (var _i2 = 0; _i2 < 3; ++_i2) {
    for (var j = 0; j < 3; ++j) {
      vectorTransformTemp[j] += matrix[_i2 * 4 + j] * vec[_i2];
    }
    for (var _j = 0; _j < 3; ++_j) {
      vectorTransformTemp[_j] += matrix[12 + _j];
    }
  }
  for (var _i3 = 0; _i3 < 3; ++_i3) {
    result[_i3] = vectorTransformTemp[_i3];
  }
  return result;
}

function rotateVec3byMatrix4InPlace(matrix, vec, result) {
  for (var i = 0; i < 3; ++i) {
    vectorTransformTemp[i] = 0;
  }
  for (var _i4 = 0; _i4 < 3; ++_i4) {
    for (var j = 0; j < 3; ++j) {
      vectorTransformTemp[j] += matrix[_i4 * 4 + j] * vec[_i4];
    }
  }
  for (var _i5 = 0; _i5 < 3; ++_i5) {
    result[_i5] = vectorTransformTemp[_i5];
  }
  return result;
};

//---------------------------vector magnitude---------------------------------------------//
var vectorMag = exports.vectorMag = function vectorMag(vector) {
  return Math.sqrt(vectorSquareMag(vector));
};

function vectorNormalize(vector) {
  var mag = vectorMag(vector);
  if (mag === 0) return vector;
  return scaleVector(vector, 1 / mag);
};

function vectorNormalizeInPlace(vector) {
  var mag = vectorMag(vector);
  if (mag === 0) return vector;
  return scaleVectorInPlace(vector, 1 / mag);
}
var scaleVector = exports.scaleVector = function scaleVector(vec, scale) {
  var newVec = [];
  for (var i = 0; i < vec.length; ++i) {
    newVec.push(vec[i] * scale);
  }
  return newVec;
};

function scaleVectorInPlace(vector, scale) {
  for (var i = 0; i < vector.length; ++i) {
    vector[i] *= scale;
  }
  return vector;
}

//-------------------------------------------------------------------------//
var vectorTriangleIntersection = exports.vectorTriangleIntersection = function vectorTriangleIntersection(origin, direction, t0, t1, t2) {
  var normal = vectorCross(subtractVectors(t1, t2), subtractVectors(t1, t0));
  var diffVector = subtractVectors(origin, t0);
  var magnitude = -1 * vectorDot(diffVector, normal) / vectorDot(direction, normal);
  return addVectors(origin, scaleVector(direction, magnitude));
};

var axisToVec = exports.axisToVec = function axisToVec(axis, vec) {
  var angle = angleBetweenVectors(axis.slice(0, 3), vec.slice(0, 3));
  if (Math.abs(angle) < 0.005) {
    return identityMatrix4;
  }
  var rotAxis = vectorCross(vec, axis);
  return axisAngleToMatrix(rotAxis, angle);
};

var axisAngleToMatrix = exports.axisAngleToMatrix = function axisAngleToMatrix(axis, angle) {
  axis = vectorNormalize(axis);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  var t = 1 - c;
  return [t * x * x + c, t * x * y - z * s, t * x * z + y * s, 0, t * x * y + z * s, t * y * y + c, t * y * z - x * s, 0, t * x * z - y * s, t * y * z + x * s, t * z * z + c, 0, 0, 0, 0, 1];
};

var bounceVectorOffPlane = exports.bounceVectorOffPlane = function bounceVectorOffPlane(vector, planeNormal) {
  planeNormal = vectorNormalize(planeNormal);
  return addVectors(scaleVector(planeNormal, -2 * vectorDot(vector, planeNormal)), vector);
};

function distance(vector0, vector1) {
  return vectorMag(subtractVectors(vector0, vector1));
}

var twoVectorsToQuaternion = exports.twoVectorsToQuaternion = function twoVectorsToQuaternion(vec1, vec2) {
  var axis = vectorNormalize(vectorCross(vec1, vec2));
  var angle = angleBetweenVectors(vec1, vec2);
  return axisAngleToQuaternion(axis, angle);
};

var axisAngleToQuaternion = exports.axisAngleToQuaternion = function axisAngleToQuaternion(axis, angle) {
  axis = vectorNormalize(axis);
  var sinOverTwo = Math.sin(angle / 2);
  return [Math.cos(angle / 2), axis[0] * sinOverTwo, axis[1] * sinOverTwo, axis[2] * sinOverTwo];
};

var angleBetweenVectors = exports.angleBetweenVectors = function angleBetweenVectors(to, from) {
  to = vectorNormalize(to);
  from = vectorNormalize(from);
  var dot = vectorDot(to, from);
  if (Math.abs(dot) > 1) {
    return 0;
  }
  return Math.acos(dot);
};
var multiplyQuaternions = exports.multiplyQuaternions = function multiplyQuaternions(q1, q2) {
  return [q1[0] * q2[0] - q1[1] * q2[1] - q1[2] * q2[2] - q1[3] * q2[3], q1[0] * q2[1] + q1[1] * q2[0] + q1[2] * q2[3] - q1[3] * q2[2], q1[0] * q2[2] - q1[1] * q1[3] + q1[2] * q2[0] + q1[3] * q2[1], q1[0] * q2[3] + q1[1] * q2[2] - q1[2] * q2[1] + q1[3] * q2[0]];
};

var quaternionToMatrix = exports.quaternionToMatrix = function quaternionToMatrix(q) {
  q = vectorNormalize(q);
  return [1 - q[2] * q[2] * 2 - q[3] * q[3] * 2, q[1] * q[2] * 2 - q[3] * q[0] * 2, q[1] * q[3] * 2 + q[2] * q[0] * 2, 0, q[1] * q[2] * 2 + q[3] * q[0] * 2, 1 - q[1] * q[1] * 2 - q[3] * q[3] * 2, q[2] * q[3] * 2 - q[1] * q[0] * 2, 0, q[1] * q[3] * 2 - q[2] * q[0] * 2, q[2] * q[3] * 2 + q[1] * q[0] * 2, 1 - q[1] * q[1] * 2 - q[2] * q[2] * 2, 0, 0, 0, 0, 1];
};
/*
0  1   2  3
4  5   6  7
8  9  10 11
12 13  14 15
*/
var setMatrixRotInPlace = exports.setMatrixRotInPlace = function setMatrixRotInPlace(mat, q) {
  q = vectorNormalize(q);
  mat[0] = 1 - q[2] * q[2] * 2 - q[3] * q[3] * 2;
  mat[1] = q[1] * q[2] * 2 - q[3] * q[0] * 2;
  mat[2] = q[1] * q[3] * 2 + q[2] * q[0] * 2;
  mat[4] = q[1] * q[2] * 2 + q[3] * q[0] * 2;
  mat[5] = 1 - q[1] * q[1] * 2 - q[3] * q[3] * 2;
  mat[6] = q[2] * q[3] * 2 - q[1] * q[0] * 2;
  mat[8] = q[1] * q[3] * 2 - q[2] * q[0] * 2;
  mat[9] = q[2] * q[3] * 2 + q[1] * q[0] * 2;
  mat[10] = 1 - q[1] * q[1] * 2 - q[2] * q[2] * 2;
};
var setMatrixLocInPlace = exports.setMatrixLocInPlace = function setMatrixLocInPlace(mat, vec) {
  mat[3] = vec[0];
  mat[7] = vec[1];
  mat[11] = vec[2];
};
var IdentityQuaternion = exports.IdentityQuaternion = [1, 0, 0, 0];

function lerpQuaternions(quat1, quat2, lerpAmount) {
  var result = [];
  for (var i = 0; i < 4; ++i) {
    result.push(quat1[i] * lerpAmount + quat2[i] * (1 - lerpAmount));
  }
  return result;
}

var scaleQuaternion = exports.scaleQuaternion = function scaleQuaternion(quat1, scale) {
  return lerpQuaternions(quat1, IdentityQuaternion, scale);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_ANIMATION_FRAMERATE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_ANIMATION_FRAMERATE = exports.DEFAULT_ANIMATION_FRAMERATE = 60;

var ANGULAR_DRAG = 0.3;
var DRAG = 0.4;

var GameObject = function () {
  function GameObject(mesh) {
    var transformationMatrix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MathUtils.identityMatrix4;
    var isStatic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, GameObject);

    this.mesh = mesh;
    this.isStatic = isStatic;
    this._transformationMatrix = transformationMatrix.slice(0, 16);
    this._transformationMatrixInverse = Array(16);
    this._inverseValid = false;
    this._position = MathUtils.mat4TranslationComponent(transformationMatrix);
    this._rotation = MathUtils.IdentityQuaternion;
    this.velocity = [0, 0, 0];
    this.angularVelocity = MathUtils.IdentityQuaternion.slice(0, 4);
  }

  _createClass(GameObject, [{
    key: "update",
    value: function update(timestamp) {
      this._applyVelocityStep();
      this._applyAngularVelocityStep();
      var localVelocity = this.inverseTransformDirection(this.velocity);
      this._applyDragStep();
      this._applyAngularDragStep();
      this.velocity = this.transformDirection(localVelocity);
    }
  }, {
    key: "_applyVelocityStep",
    value: function _applyVelocityStep() {
      this.setPosition(MathUtils.addVectors(this._position, this.velocity));
    }
  }, {
    key: "_applyAngularVelocityStep",
    value: function _applyAngularVelocityStep() {
      this.setRotation(MathUtils.multiplyQuaternions(this.angularVelocity, this.getRotation()));
    }
  }, {
    key: "addAngularVelocity",
    value: function addAngularVelocity(quat) {
      quat = MathUtils.vectorNormalize(quat);
      this.angularVelocity = MathUtils.multiplyQuaternions(this.angularVelocity, quat);
      MathUtils.vectorNormalizeInPlace(this.angularVelocity);
    }
  }, {
    key: "_applyDragStep",
    value: function _applyDragStep() {
      for (var i = 0; i < this.velocity.length; ++i) {
        this.velocity[i] -= this.velocity[i] * DRAG;
      }
    }
  }, {
    key: "_applyAngularDragStep",
    value: function _applyAngularDragStep() {
      this.angularVelocity = MathUtils.scaleQuaternion(this.angularVelocity, 1 - ANGULAR_DRAG);
    }
  }, {
    key: "setAngularVelocity",
    value: function setAngularVelocity(quat) {
      this.angularVelocity = quat.slice(0, 4);
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(point) {
      return MathUtils.multiplyVec4ByMatrix4(this._transformationMatrix, point.concat([1])).slice(0, 3);
    }
  }, {
    key: "transformDirection",
    value: function transformDirection(direction) {
      return MathUtils.multiplyVec4ByMatrix4(MathUtils.mat4RotationComponent(this._transformationMatrix), direction.concat([1])).slice(0, 3);
    }
  }, {
    key: "transformDirectionInPlace",
    value: function transformDirectionInPlace(direction, result) {
      return MathUtils.rotateVec3byMatrix4InPlace(this._transformationMatrix, direction, result);
    }
  }, {
    key: "_calculateInverse",
    value: function _calculateInverse() {
      MathUtils.inverseMat4InPlace(this._transformationMatrix, this._transformationMatrixInverse);
      this._inverseValid = true;
    }
  }, {
    key: "inverseTransformPoint",
    value: function inverseTransformPoint(point) {
      if (!this._inverseValid) this._calculateInverse();
      return MathUtils.multiplyVec4ByMatrix4(this._transformationMatrixInverse, point.concat([1])).slice(0, 3);
    }
  }, {
    key: "inverseTransformDirection",
    value: function inverseTransformDirection(direction) {
      if (!this._inverseValid) this._calculateInverse();
      var transformed = [0, 0, 0];
      return (0, _math_utils.rotateVec3byMatrix4InPlace)(this._transformationMatrixInverse, direction, transformed);
    }
  }, {
    key: "inverseTransformDirectionInPlace",
    value: function inverseTransformDirectionInPlace(direction, result) {
      if (!this._inverseValid) this._calculateInverse();
      return (0, _math_utils.rotateVec3byMatrix4InPlace)(this._transformationMatrixInverse, direction, result);
    }
  }, {
    key: "inverseTransformPointInPlace",
    value: function inverseTransformPointInPlace(direction, result) {
      if (!this._inverseValid) this._calculateInverse();
    }
    /*
     0  1   2  3
     4  5   6  7
     8  9  10 11
    12 13  14 15
    */

  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this._position = position;
      this._transformationMatrix[12] = position[0];
      this._transformationMatrix[13] = position[1];
      this._transformationMatrix[14] = position[2];
      this._inverseValid = false;
    }
  }, {
    key: "getRotation",
    value: function getRotation() {
      return this._rotation;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this._position;
    }
  }, {
    key: "setRotation",
    value: function setRotation(rotQuat) {
      this._rotation = MathUtils.vectorNormalize(rotQuat);
      MathUtils.setMatrixRotInPlace(this._transformationMatrix, this._rotation);
      this._inverseValid = false;
    }
  }, {
    key: "getTransformationMatrix",
    value: function getTransformationMatrix() {
      return this._transformationMatrix;
    }
  }, {
    key: "setTransformationMatrix",
    value: function setTransformationMatrix(transform) {
      for (var i = 0; i < 16; ++i) {
        this._transformationMatrix[i] = transform[i];
      }
    }
  }, {
    key: "playAnimation",
    value: function playAnimation(name) {
      var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.isPlayingAnimation = true;
      this.currentAnimation = name;
      this.currentAnimationFrame = 0;
      this.animationWillLoop = loop;
      this.currentAnimationFramerate = DEFAULT_ANIMATION_FRAMERATE;
    }
  }, {
    key: "updateFrame",
    value: function updateFrame() {
      ++this.currentAnimationFrame;
      if (this.currentAnimationFrame = this.mesh.animations[this.currentAnimation].length) {
        if (this.animationWillLoop) {
          this.currentAnimationFrame = 0;
        } else {
          --this.currentAnimationFrame;
          this.isPlayingAnimation = false;
        }
      }
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(timestamp) {
      return this.lastTimeStamp && timestamp - this.lastTimeStamp > 1000 / this.currentAnimationFramerate;
    }
  }]);

  return GameObject;
}();

exports.default = GameObject;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mesh = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createMesh;

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4ToDualQuat = __webpack_require__(10);

function isZeroQuat(quat) {
  return quat[0] === 0 && quat[1] === 0 && quat[2] === 0 && quat[3] === 1;
}
function createMesh() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var mesh = new Mesh(options);
  return new Promise(function (resolve, reject) {
    if (options.textured && options.img_src) {
      rasterizer.bufferTexture(options.img_src).then(function (texture) {
        mesh.texture = texture;
        resolve(mesh);
      }).catch(function (error) {
        return reject(error);
      });
    } else {
      if (options.textureBuffer) {
        mesh.texture = options.textureBuffer;
        mesh.textured = true;
      }
      resolve(mesh);
    }
  });
}

var Mesh = exports.Mesh = function () {
  function Mesh(_ref) {
    var _this = this;

    var vertices = _ref.vertices,
        faces = _ref.faces,
        bones = _ref.bones,
        colors = _ref.colors,
        uvs = _ref.uvs,
        skinWeights = _ref.skinWeights,
        skinIndices = _ref.skinIndices,
        animations = _ref.animations,
        bindPose = _ref.bindPose,
        colored = _ref.colored,
        skinned = _ref.skinned,
        textured = _ref.textured,
        rasterizer = _ref.rasterizer,
        textureBuffer = _ref.textureBuffer,
        img_src = _ref.img_src,
        mode2 = _ref.mode2,
        data = _ref.data,
        action_file = _ref.action_file;

    _classCallCheck(this, Mesh);

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
    this.animations = {};
    if (mode2) {
      this.vertices = data.vertexPositions;
      this.faces = data.vertexPositionIndices;
      if (textured) {
        this.uvs = [];
        for (var i = 0; i < data.vertexPositions.length / 3 * 2; ++i) {
          this.uvs.push(0);
        }
        var outputIdx = void 0;
        for (var _i = 0; _i < data.vertexUVIndices.length; ++_i) {
          outputIdx = data.vertexPositionIndices[_i] * 2;
          this.uvs[outputIdx] = data.vertexUVs[_i * 2];
          this.uvs[outputIdx + 1] = data.vertexUVs[_i * 2 + 1];
        }
      }
      if (colored) {
        this.colors = Array(this.vertices.length);
        data.vertexColorIndices.forEach(function (colorIdx, positionInArray) {
          var outputPosition = _this.faces[positionInArray] * 3;
          for (var _i2 = 0; _i2 < 3; ++_i2) {
            _this.colors[outputPosition + _i2] = data.vertexColors[colorIdx * 3 + _i2];
          }
        });
      }
      if (action_file) {
        this.boneWeights = [];
        this.boneIndices = [];
        var boneIndices = void 0;
        this.numBones = Object.keys(data.jointNamePositionIndex).length;
        data.vertexJointWeights.forEach(function (weights, vertexIdx) {
          boneIndices = Object.keys(weights);
          _this.boneWeights.push(weights[boneIndices[0]]);
          _this.boneIndices.push(parseInt(boneIndices[0]));
          if (boneIndices[1]) {
            _this.boneWeights.push(weights[boneIndices[1]]);
            _this.boneIndices.push(parseInt(boneIndices[1]));
          } else {
            _this.boneWeights.push(0);
            _this.boneIndices.push(0);
          }
        });

        var nameToAnimPosition = {};
        Object.keys(action_file.jointNameIndices).forEach(function (jointName) {
          nameToAnimPosition[jointName.replace(".", "_")] = action_file.jointNameIndices[jointName];
        });

        var boneOrder = Object.entries(data.jointNamePositionIndex).sort(function (nameIndex0, nameIndex1) {
          return nameIndex0[1] < nameIndex1[1] ? -1 : 1;
        }).map(function (entry) {
          return nameToAnimPosition[entry[0]];
        });

        var frame = void 0,
            newAction = void 0,
            matrix = void 0;
        Object.keys(action_file.actions).forEach(function (actionName) {
          newAction = [];
          Object.keys(action_file.actions[actionName]).forEach(function (keyFrame) {
            frame = [];
            boneOrder.forEach(function (animBoneIdx) {
              if (animBoneIdx === undefined) {
                matrix = MathUtils.identityMatrix4;
              } else {
                matrix = action_file.actions[actionName][keyFrame][animBoneIdx];
              }
              matrix = MathUtils.mat_4_transpose(MathUtils.mat_4_multiply(matrix, action_file.inverseBindPoses[animBoneIdx]));
              mat4ToDualQuat(matrix).forEach(function (el) {
                return frame.push(el);
              });
            });
            newAction.push(frame);
          });
          _this.animations[actionName] = newAction;
        });
      }
    }
  }

  _createClass(Mesh, [{
    key: "inverseBindVertices",
    value: function inverseBindVertices() {}
  }, {
    key: "setDirty",
    value: function setDirty() {
      //call this after modifying mesh data on-the-fly
      //to let the rasterizer know to update its buffers
      this.dirty = true;
    }
  }, {
    key: "setClean",
    value: function setClean() {
      this.dirty = false;
    }
  }, {
    key: "packedVertex",
    value: function packedVertex(idx) {
      //x,y,z coords for a vertex by element idx
      var posIdx = 3 * idx;
      var result = [];
      for (var i = posIdx; i < posIdx + 3; ++i) {
        result.push(this.vertices[i]);
      }
      return result;
    }
  }]);

  return Mesh;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadAsset = loadAsset;
function loadAsset(url) {
    var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.responseType = responseType;
    return new Promise(function (resolve, reject) {
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addPoints = addPoints;
exports.updateSpeed = updateSpeed;
exports.updateTime = updateTime;
exports.setStartTime = setStartTime;
exports.startGameplayHUD = startGameplayHUD;
exports.doStartMenuHUD = doStartMenuHUD;
exports.displayScoresStructure = displayScoresStructure;
var state = { time: 0, startTime: 0,
    bestTime: 0, points: 0, speed: 0 };

function addPoints(points) {
    state.points += points;
    renderPoints();
};

function updateSpeed(speed) {
    state.speed = Math.round(speed);
    renderSpeed();
}
function updateTime(time) {
    state.time = time;
    renderTime();
}
function setStartTime(time) {
    state.startTime = time;
}
function renderPoints() {
    document.querySelector(".hud-points_val").innerHTML = "" + state.points;
};

function renderSpeed() {
    document.querySelector(".hud-speed_val").innerHTML = "" + state.speed;
}

function renderTime() {
    var elapsed = state.time - state.startTime;
    document.querySelector(".hud-time_val").innerHTML = renderMinutes(elapsed) + "'" + renderSeconds(elapsed) + "\"" + renderMilliseconds(elapsed);
}

function renderMinutes(milliseconds) {
    var minutes = Math.floor(milliseconds / 60000);
    return "" + (minutes < 10 ? "0" : "") + minutes;
}
function renderSeconds(milliseconds) {
    var seconds = Math.floor(milliseconds % 60000 / 1000);
    return "" + (seconds < 10 ? "0" : "") + seconds;
}

function renderMilliseconds(milliseconds) {
    var m = milliseconds % 1000;
    if (m < 10) return "00" + m;else if (m < 100) return "0" + m;else return "" + m;
}

function startGameplayHUD() {
    state = { time: 0, startTime: 0,
        bestTime: 0, points: 0, speed: 0 };
    document.querySelector('.hud').innerHTML = "<div class = \"hud-left\">\n            <div class = \"hud-time\">\n              TIME <div class=\"hud-time_val\">00'00\"00</div>\n            </div>\n            <div class = \"hud-best-time\">\n              BEST 00:00:00\n            </div>\n          </div>\n          <div class = \"hud-right\">\n            <div class= \"hud-speed\">\n              SPEED <div class=\"hud-speed_val\">0</div> Km/h\n            </div>\n            <div class= \"hud-points\">\n              <div class=\"hud-points_val\">0</div> POINTS\n            </div>\n    </div>";
}

function doStartMenuHUD(callback) {
    var startButton = document.createElement("button");
    startButton.classList.add('start-button');
    startButton.onclick = callback;
    startButton.textContent = "START";
    var startMenu = document.createElement("div");
    startMenu.appendChild(startButton);
    startMenu.classList.add("start-menu");
    var hud = document.querySelector('.hud');
    hud.innerHTML = "";
    hud.appendChild(startMenu);
}

function displayScoresStructure() {
    var hud = document.querySelector(".hud");
    hud.innerHTML = "FINISHED";
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boxColliderToPoints = exports.movingBoxIntersectsBox = exports.COLLISION_REJECTION = undefined;
exports.approximateCollisionNormal = approximateCollisionNormal;
exports.boxIntersectsBox = boxIntersectsBox;
exports.sphereCollidesCapsule = sphereCollidesCapsule;

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var COLLISION_REJECTION = exports.COLLISION_REJECTION = 0.05;

var movingBoxIntersectsBox = exports.movingBoxIntersectsBox = function movingBoxIntersectsBox(matrix0, dimensions0, matrix1, dimensions1, moveVector) {
  var colliderPoint = boxIntersectsBox(matrix0, dimensions0, matrix1, dimensions1) || boxIntersectsBox(matrix1, dimensions1, matrix0, dimensions0);
  if (colliderPoint) {
    return { normal: approximateCollisionNormal(MathUtils.subtractVectors(colliderPoint, moveVector.concat(0)), matrix1, dimensions1),
      colliderPoint: colliderPoint
    };
  }
};
function approximateCollisionNormal(position, boxMatrix, boxDimensions) {
  var transformedPoint = MathUtils.multiplyVec4ByMatrix4(MathUtils.inverse_mat4_rot_pos(boxMatrix), position);
  var maxDimensionIndex = void 0;
  var maxDistFromSurface = 0;
  var distFromSurface = void 0;
  for (var i = 0; i < 2; ++i) {
    distFromSurface = Math.abs(Math.abs(transformedPoint[i]) - boxDimensions[i]);
    if (distFromSurface > maxDistFromSurface) {
      maxDistFromSurface = distFromSurface;
      maxDimensionIndex = i;
    }
  }
  var normal = [0, 0, 0, 0];
  normal[maxDimensionIndex] = transformedPoint[maxDimensionIndex] < 0 ? -1 : 1;
  return MathUtils.multiplyVec4ByMatrix4(boxMatrix, normal).slice(0, 3);
};
function boxIntersectsBox(matrix0, dimensions0, matrix1, dimensions1) {
  var transformedPoint = void 0,
      pointCollides = void 0;
  var worldCoordsPoints = boxColliderToPoints(matrix0, dimensions0);
  for (var i = 0; i < worldCoordsPoints.length; ++i) {
    transformedPoint = MathUtils.multiplyVec4ByMatrix4(MathUtils.inverse_mat4_rot_pos(matrix1), worldCoordsPoints[i]);
    pointCollides = true;
    for (var j = 0; j < 3; ++j) {
      if (transformedPoint[j] > dimensions1[j] || transformedPoint[j] < -1 * dimensions1[j]) {
        pointCollides = false;
        break;
      }
    }
    if (pointCollides) {
      return worldCoordsPoints[i];
    }
  }
  return false;
}

function sphereCollidesCapsule(sphereOrigin, sphereRadius, capsulePoint0, capsulePoint1, capsuleRadius) {
  var capsuleVector = MathUtils.subtractVectors(capsulePoint1, capsulePoint0);
  if (capsuleVector[0] === 0 && capsuleVector[1] === 0 && capsuleVector[2] === 0) {
    capsuleVector[0] = 0.01;
  }
  var point0ToSphereOrigin = MathUtils.subtractVectors(sphereOrigin, capsulePoint0);
  var point0ToSphereAngle = MathUtils.angleBetweenVectors(point0ToSphereOrigin, capsuleVector);
  var point1ToSphereOrigin = MathUtils.subtractVectors(sphereOrigin, capsulePoint1);
  var point1ToSphereAngle = MathUtils.angleBetweenVectors(point1ToSphereOrigin, MathUtils.scaleVector(capsuleVector, -1));
  var maxDist = sphereRadius + capsuleRadius;
  var dist = void 0;
  if (point0ToSphereAngle < Math.PI / 2 && point1ToSphereAngle < Math.PI / 2) {
    dist = MathUtils.vectorMag(point0ToSphereOrigin) * Math.sin(point0ToSphereAngle);
    if (dist <= maxDist) {
      return _getSphereCapsuleCollisionData({ sphereOrigin: sphereOrigin, sphereRadius: sphereRadius,
        point0ToSphereOrigin: point0ToSphereOrigin, capsuleRadius: capsuleRadius, capsuleVector: capsuleVector, dist: dist });
    }
    return false;
  } else if ((dist = MathUtils.distance(capsulePoint0, sphereOrigin)) <= maxDist) {
    var capsuleNormal = MathUtils.subtractVectors(sphereOrigin, capsulePoint0);
    var sphereNormal = MathUtils.subtractVectors(capsulePoint0, sphereOrigin);
    var penetration = sphereRadius - dist + capsuleRadius;
    var spherePoint = MathUtils.scaleVector(MathUtils.vectorNormalize(sphereNormal), sphereRadius);
    return { capsuleNormal: capsuleNormal, sphereNormal: sphereNormal, sphereOrigin: sphereOrigin, spherePoint: spherePoint, penetration: penetration };
  } else if ((dist = MathUtils.distance(capsulePoint1, sphereOrigin)) <= maxDist) {
    var _capsuleNormal = MathUtils.subtractVectors(sphereOrigin, capsulePoint1);
    var _sphereNormal = MathUtils.subtractVectors(capsulePoint1, sphereOrigin);
    var _penetration = sphereRadius - dist + capsuleRadius;
    var _spherePoint = MathUtils.scaleVector(MathUtils.vectorNormalize(_sphereNormal), sphereRadius);
    return { capsuleNormal: _capsuleNormal, sphereNormal: _sphereNormal, sphereOrigin: sphereOrigin, spherePoint: _spherePoint, penetration: _penetration };
  }
  return false;
}

function _getSphereCapsuleCollisionData(_ref) {
  var sphereOrigin = _ref.sphereOrigin,
      sphereRadius = _ref.sphereRadius,
      capsuleRadius = _ref.capsuleRadius,
      point0ToSphereOrigin = _ref.point0ToSphereOrigin,
      capsuleVector = _ref.capsuleVector,
      dist = _ref.dist;

  var rotationMatrix = MathUtils.axisAngleToMatrix(MathUtils.vectorCross(point0ToSphereOrigin, capsuleVector), Math.PI / 2);
  var penetration = void 0,
      spherePoint = void 0;
  penetration = sphereRadius - dist + capsuleRadius;
  var capsuleNormal = MathUtils.multiplyVec4ByMatrix4(rotationMatrix, capsuleVector.concat(0)).slice(0, 3);
  spherePoint = MathUtils.addVectors(sphereOrigin, MathUtils.scaleVector(MathUtils.vectorNormalize(capsuleNormal), sphereRadius - penetration));
  var side2 = MathUtils.scaleVector(MathUtils.vectorNormalize(capsuleNormal), -1 * Math.sqrt(Math.pow(sphereRadius, 2), Math.pow(sphereRadius - penetration)));
  spherePoint = MathUtils.addVectors(spherePoint, side2);
  return { capsuleNormal: capsuleNormal,
    sphereNormal: MathUtils.subtractVectors(spherePoint, sphereOrigin),
    sphereOrigin: sphereOrigin,
    spherePoint: spherePoint,
    penetration: penetration };
}

var boxColliderToPoints = exports.boxColliderToPoints = function boxColliderToPoints(matrix, dimensions) {
  var points = [];
  for (var xDirection = -1; xDirection <= 1; xDirection += 2) {
    for (var yDirection = -1; yDirection <= 1; yDirection += 2) {
      for (var zDirection = -1; zDirection <= 1; zDirection += 2) {
        points.push(MathUtils.multiplyVec4ByMatrix4(matrix, [dimensions[0] * xDirection, dimensions[1] * yDirection, dimensions[2] * zDirection, 1]));
      }
    }
  }
  return points;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_INTERVAL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

var _webgl_utils = __webpack_require__(7);

var WebGLUtils = _interopRequireWildcard(_webgl_utils);

var _asset_utils = __webpack_require__(3);

var AssetUtils = _interopRequireWildcard(_asset_utils);

var _input = __webpack_require__(8);

var Input = _interopRequireWildcard(_input);

var _game_object = __webpack_require__(1);

var _game_object2 = _interopRequireDefault(_game_object);

var _skybox = __webpack_require__(9);

var _skybox2 = _interopRequireDefault(_skybox);

var _character = __webpack_require__(17);

var _character2 = _interopRequireDefault(_character);

var _slope = __webpack_require__(21);

var _mesh = __webpack_require__(2);

var _mesh2 = _interopRequireDefault(_mesh);

var _hud = __webpack_require__(4);

var HUD = _interopRequireWildcard(_hud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GAMEPLAY_CAMERA_POS_OFFSET = [-0.5, -14, 10];
var GAMEPLAY_CAMERA_ROT_OFFSET = [];
var UPDATE_INTERVAL = exports.UPDATE_INTERVAL = 30;

var HUD_DISPLAY_SPEED_MULTIPLIER = 8;
document.addEventListener("DOMContentLoaded", main);
function main() {
  var rasterizer = new WebGLUtils.ObjectsRasterizer();
  (0, _slope.createSlope)(MathUtils.translationMatrix(0, -3, -4), rasterizer).then(function (slope) {
    return (0, _character2.default)(slope).then(function (character) {
      return { character: character, slope: slope };
    });
  }).then(function (_ref) {
    var character = _ref.character,
        slope = _ref.slope;
    return (0, _skybox2.default)().then(function (skybox) {
      return { character: character, slope: slope, skybox: skybox };
    });
  }).then(assetsLoaded).catch(function (error) {
    debugger;
    alert("error loading assets, please try reloading the page");
  });
}
function assetsLoaded(_ref2) {
  var character = _ref2.character,
      slope = _ref2.slope,
      skybox = _ref2.skybox;

  skybox.mesh.buffers = rasterizer.sendMeshToGPU(skybox.mesh);
  rasterizer.skyBox = skybox;
  rasterizer.objects.character = character;
  window.rasterizer = rasterizer;
  rasterizer.cameraTarget = character;
  rasterizer.position[1] -= 2;
  rasterizer.position[0] += 0.3;
  rasterizer.rotation[0] -= 0.4;
  rasterizer.position[2] += 0.7;
  rasterizer.objects.slope = slope;
  rasterizer.position = [0, -6, 0];
  var game = new Game(slope, character);
  game.startMenu();
};
function positionCamera(camera) {
  return function () {
    // const newPos = this.camera.getPosition();
    //newPos[2] = this.cameraTarget.getPosition()[2] + 10;
    // this.camera.setPosition(newPos);
    //this.camera.setRotation(this.cameraTarget.getRotation());

  };
}

var Game = function () {
  function Game(slope, character) {
    _classCallCheck(this, Game);

    this.slope = slope;
    this.character = character;
    this.keyDown = Input.keyDown(character);
    this.keyUp = Input.keyUp(character);
    this.blur = Input.releaseKeys(character);
    this.run = this.run.bind(this);
    this.start = this.start.bind(this);
    this.restart = this.restart.bind(this);
    rasterizer.camera = new _game_object2.default();
    rasterizer.camera.target = this.character;
    //rasterizer.drawObjects.bind(rasterizer)();
    this.camera = rasterizer.camera;
    this.fixedUpdate = this.fixedUpdate.bind(this);
  }

  _createClass(Game, [{
    key: "fixedUpdate",
    value: function fixedUpdate() {
      this.character.update();
      this.positionCamera();
    }
  }, {
    key: "startMenu",
    value: function startMenu() {
      HUD.doStartMenuHUD(this.start);
    }
  }, {
    key: "positionCamera",
    value: function positionCamera() {
      var rotation = this.camera.target.getRotation();
      var upLocal = this.camera.target.inverseTransformDirection([0, 0, 1]);
      var angleToUp = MathUtils.angleBetweenVectors([0, 0, 1], upLocal);
      var upAlignAxis = MathUtils.vectorCross(upLocal, [0, 0, 1]);
      var targetRotation = MathUtils.multiplyQuaternions(MathUtils.axisAngleToQuaternion(upAlignAxis, angleToUp), rotation);
      var finalRotation = MathUtils.lerpQuaternions(this.camera.getRotation(), targetRotation, 0.9);
      var currentPosition = this.camera.getPosition();
      var currentRotation = this.camera.getRotation();
      this.camera.setRotation(finalRotation);
      this.camera.setPosition(this.camera.target.getPosition());
      if (this.slope.positionIsBeyondEdge(this.camera.transformPoint(GAMEPLAY_CAMERA_POS_OFFSET), this.character.currentSegmentNumber)) {
        this.camera.setRotation(currentRotation);
      }
      this.camera.setPosition(this.camera.transformPoint(GAMEPLAY_CAMERA_POS_OFFSET));
    }
  }, {
    key: "start",
    value: function start() {
      HUD.startGameplayHUD();
      HUD.setStartTime(Date.now());

      window.addEventListener("keydown", this.keyDown);
      window.addEventListener("keyup", this.keyUp);
      window.addEventListener("blur", this.blur);

      this.animationHandle = window.requestAnimationFrame(this.run);
      this.fixedUpdateHandle = setInterval(this.fixedUpdate, UPDATE_INTERVAL);
    }
  }, {
    key: "run",
    value: function run(timestamp) {
      HUD.updateTime(Date.now());
      HUD.updateSpeed(MathUtils.vectorMag(this.character.velocity) * HUD_DISPLAY_SPEED_MULTIPLIER);
      rasterizer.drawObjects.bind(rasterizer)(timestamp);
      if (this.character.segmentsSinceStart > _slope.COURSE_LENGTH) {
        this.displayScores();
      } else {
        window.requestAnimationFrame(this.run);
      }
    }
  }, {
    key: "displayScores",
    value: function displayScores() {
      HUD.displayScoresStructure();
      window.clearInterval(this.fixedUpdateHandle);
      window.removeEventListener("keydown", this.keyDown);
      window.removeEventListener("keyup", this.keyUp);
      window.removeEventListener("blur", this.blur);
      setTimeout(this.restart, 1000);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.character.reset();
      this.slope.reset();
      this.start();
    }
  }]);

  return Game;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectsRasterizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createProgram = createProgram;
exports.compileShader = compileShader;

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

var _game_object = __webpack_require__(1);

var _game_object2 = _interopRequireDefault(_game_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BONE_INFLUENCES = 2;
var CAMERA_ROT_SPEED = 0.1;

var ObjectsRasterizer = exports.ObjectsRasterizer = function () {
  function ObjectsRasterizer() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ObjectsRasterizer);

    this.swapYZ = options.hasOwnProperty("swapYZ") ? options.swapYZ : true;
    window.rasterizer = this;
    var canvas = document.querySelector("#glCanvas");
    var canvas2 = document.querySelector("#flat-canvas");
    this.gl = canvas.getContext("webgl") || canvas.getContext('experimental-webgl');
    this.ctx = canvas2.getContext('2d');
    if (!this.gl) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it");
      return;
    }
    this.viewMatrix = MathUtils.identityMatrix4;
    this.perspectiveMatrix = MathUtils.simple_perspective_matrix;
    this.compileDefaultShaders();
    //this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.rotation = [0, 0, 0];
    this.position = [0, 0, 0];

    this.objects = {};
    this.camera = options.camera;
  }

  _createClass(ObjectsRasterizer, [{
    key: "compileDefaultShaders",
    value: function compileDefaultShaders() {
      this.defaultProgram = this.compileByID("default-vertex-shader", "default-fragment-shader");
      this.coloredProgram = this.compileByID("colored-vertex-shader", "colored-fragment-shader");
      this.skinnedColoredProgram = this.compileByID("skinned-colored-vertex-shader", "colored-fragment-shader");
      this.skinnedTexturedProgram = this.compileByID("skinned-textured-vertex-shader", "textured-fragment-shader");
      this.texturedProgram = this.compileByID("textured-vertex-shader", "textured-fragment-shader");
    }
  }, {
    key: "compileByID",
    value: function compileByID(vertexId, fragmentId) {
      var vertexShaderSource = document.getElementById(vertexId).text;
      var fragmentShaderSource = document.getElementById(fragmentId).text;
      var vertexShader = compileShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderSource);
      var fragmentShader = compileShader(this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderSource);
      return createProgram(this.gl, vertexShader, fragmentShader);
    }
  }, {
    key: "calculateStrideLength",
    value: function calculateStrideLength(skinned, textured, colored) {
      var strideLength = skinned ? 12 + BONE_INFLUENCES * 2 : 12;
      if (textured) strideLength += 8;else if (colored) strideLength += 4;
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

  }, {
    key: "meshToArrayBuffer",
    value: function meshToArrayBuffer(mesh) {
      var vertexIdx = 0;
      var weightIdx = 0;
      var boneIdx = 0;
      var uvIdx = 0;
      var colorIdx = 0;
      var offset = 0;
      var vertexDataLength = this.calculateStrideLength(mesh.skinned, mesh.textured, mesh.colored) * mesh.vertices.length / 3;
      var vertexData = new ArrayBuffer(vertexDataLength);
      var dataView = new DataView(vertexData);
      var littleEndian = true;
      while (offset < vertexDataLength) {
        for (var i = 0; i < 3; ++i) {
          dataView.setFloat32(offset, mesh.vertices[vertexIdx++], littleEndian);
          offset += 4;
        }
        if (mesh.skinned) {
          for (var _i = 0; _i < BONE_INFLUENCES; ++_i) {
            dataView.setUint8(offset++, mesh.boneWeights[weightIdx++] * 255, littleEndian);
          }
          for (var _i2 = 0; _i2 < BONE_INFLUENCES; ++_i2) {
            dataView.setUint8(offset++, mesh.boneIndices[boneIdx++], littleEndian);
          }
        }
        if (mesh.textured) {
          dataView.setFloat32(offset, mesh.uvs[uvIdx++], littleEndian);
          offset += 4;
          dataView.setFloat32(offset, -1 * mesh.uvs[uvIdx++], littleEndian);
          offset += 4;
        } else if (mesh.colored) {
          for (var _i3 = 0; _i3 < 3; ++_i3) {
            dataView.setUint8(offset++, mesh.colors[colorIdx++] * 255, littleEndian);
          }
          dataView.setUint8(offset++, 255, littleEndian);
        }
      }
      return vertexData;
    }
  }, {
    key: "determineProgram",
    value: function determineProgram(skinned, textured, colored) {
      if (skinned) {
        if (textured) {
          return this.skinnedTexturedProgram;
        } else if (colored) {
          return this.skinnedColoredProgram;
        } else {
          return this.defaultProgram;
        }
      } else {
        if (textured) {
          return this.texturedProgram;
        } else if (colored) {
          return this.coloredProgram;
        } else {
          return this.defaultProgram;
        }
      }
    }
  }, {
    key: "sendMeshToGPU",
    value: function sendMeshToGPU(mesh) {
      var verticesBuffer = this.gl.createBuffer();
      var verticesData = this.meshToArrayBuffer(mesh);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, verticesBuffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, verticesData, this.gl.STATIC_DRAW);
      var facesBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, facesBuffer);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(mesh.faces), this.gl.STATIC_DRAW);
      mesh.setClean();
      return { verticesBuffer: verticesBuffer, facesBuffer: facesBuffer };
    }
  }, {
    key: "removeMeshFromGPU",
    value: function removeMeshFromGPU(_ref) {
      var verticesBuffer = _ref.verticesBuffer,
          facesBuffer = _ref.facesBuffer;

      this.gl.deleteBuffer(verticesBuffer);
      this.gl.deleteBuffer(facesBuffer);
    }
  }, {
    key: "removeBufferFromGPU",
    value: function removeBufferFromGPU(buffer) {
      this.gl.deleteBuffer(buffer);
    }
  }, {
    key: "bufferTexture",
    value: function bufferTexture(img_src) {
      var _this = this;

      var texture = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
      this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
      var img = new Image();
      img.src = img_src;
      img.crossOrigin = "";
      return new Promise(function (resolve, reject) {
        img.addEventListener("load", function () {
          _this.gl.bindTexture(_this.gl.TEXTURE_2D, texture);
          _this.gl.texImage2D(_this.gl.TEXTURE_2D, 0, _this.gl.RGBA, _this.gl.RGBA, _this.gl.UNSIGNED_BYTE, img);
          _this.gl.generateMipmap(_this.gl.TEXTURE_2D);
          resolve(texture);
        });
        img.addEventListener("error", function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: "adjustToCanvas",
    value: function adjustToCanvas() {
      this.gl.canvas.width = this.gl.canvas.clientWidth;
      this.gl.canvas.height = this.gl.canvas.clientHeight;
      this.gl.viewport(0, 0, this.gl.canvas.clientWidth, this.gl.canvas.clientHeight);
    }
  }, {
    key: "drawSkyBox",
    value: function drawSkyBox() {
      this.skyBox.setPosition(this.camera.getPosition());
      this.draw(this.skyBox);
    }
  }, {
    key: "clipSpaceToFlatCanvasCoords",
    value: function clipSpaceToFlatCanvasCoords(x, y) {
      var canvas = document.querySelector("#flat-canvas");
      x *= canvas.width / 2;
      x += canvas.width / 2;
      y *= -canvas.height / 2;
      y += canvas.height / 2;
      return [x, y];
    }
  }, {
    key: "debugLine",
    value: function debugLine(start, end) {
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "black";

      start = MathUtils.multiplyVec4ByMatrix4(this.viewMatrix, start.concat(1));
      start = MathUtils.scaleVector(start, 1 / start[3]);
      start = this.clipSpaceToFlatCanvasCoords(start[0], start[1]);
      end = MathUtils.multiplyVec4ByMatrix4(this.viewMatrix, end.concat(1));
      end = MathUtils.scaleVector(end, 1 / end[3]);
      end = this.clipSpaceToFlatCanvasCoords(end[0], end[1]);
      this.ctx.beginPath();
      this.ctx.moveTo(start[0], start[1]);
      this.ctx.lineTo(end[0], end[1]);
      this.ctx.strokeStyle = style;
      this.ctx.stroke();
    }
  }, {
    key: "debugCircle",
    value: function debugCircle(pos, radius) {
      pos = MathUtils.multiplyVec4ByMatrix4(this.viewMatrix, pos.concat(0));
      this.ctx.arc(pos[0], pos[1], radius, 0, Math.PI * 2);
      this.ctx.stroke();
    }
  }, {
    key: "draw",
    value: function draw(obj) {
      var program = this.determineProgram(obj.mesh.skinned, obj.mesh.textured, obj.mesh.colored);
      this.gl.useProgram(program);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, obj.mesh.buffers.verticesBuffer);
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, obj.mesh.buffers.facesBuffer);

      var posAttrIndex = this.gl.getAttribLocation(program, "a_pos");
      var strideLength = this.calculateStrideLength(obj.mesh.skinned, obj.mesh.textured, obj.mesh.colored);
      //attribute index, size, data type, normalized?, stride length, offset
      var offset = 0;
      this.gl.vertexAttribPointer(posAttrIndex, 3, this.gl.FLOAT, false, strideLength, offset);
      this.gl.enableVertexAttribArray(posAttrIndex);
      offset += 12;
      if (obj.mesh.skinned) {
        var weightsAttrIndex = this.gl.getAttribLocation(program, "a_weights");
        var boneIndicesIndex = this.gl.getAttribLocation(program, "a_bone_indices");
        this.gl.vertexAttribPointer(weightsAttrIndex, BONE_INFLUENCES, this.gl.UNSIGNED_BYTE, true, strideLength, offset);
        this.gl.enableVertexAttribArray(weightsAttrIndex);
        offset += BONE_INFLUENCES;
        this.gl.vertexAttribPointer(boneIndicesIndex, BONE_INFLUENCES, this.gl.UNSIGNED_BYTE, false, strideLength, offset);
        this.gl.enableVertexAttribArray(boneIndicesIndex);
        offset += BONE_INFLUENCES;
        var boneTransforms = obj.mixedAnimations;

        var boneTransformsLocation = this.gl.getUniformLocation(program, "boneTransforms");
        this.gl.uniform4fv(boneTransformsLocation, boneTransforms);
      }

      if (obj.mesh.textured) {
        var uvsAttrIndex = this.gl.getAttribLocation(program, "a_uvs");
        this.gl.vertexAttribPointer(uvsAttrIndex, 2, this.gl.FLOAT, false, strideLength, offset);
        this.gl.enableVertexAttribArray(uvsAttrIndex);
        offset += 8;
        this.gl.bindTexture(this.gl.TEXTURE_2D, obj.mesh.texture);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
      } else if (obj.mesh.colored) {
        var colorsAttrIndex = this.gl.getAttribLocation(program, "vColor");
        this.gl.vertexAttribPointer(colorsAttrIndex, 4, this.gl.UNSIGNED_BYTE, true, strideLength, offset);
        this.gl.enableVertexAttribArray(colorsAttrIndex);
        offset += 4;
      }
      var viewMatrix = MathUtils.mat_4_multiply(obj.getTransformationMatrix(), this.viewMatrix);
      var viewMatrixUniformLocation = this.gl.getUniformLocation(program, "view_matrix");
      this.gl.uniformMatrix4fv(viewMatrixUniformLocation, false, viewMatrix);

      this.gl.drawElements(this.gl.TRIANGLES, obj.mesh.faces.length, this.gl.UNSIGNED_SHORT, 0);
    }
  }, {
    key: "test",
    value: function test() {
      var vertexBuffer = this.gl.createBuffer();
      var vertices = [-1, 1, 0.0, -1, -1, 0.0, 1, -1, 0.0];

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

      var indicesBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), this.gl.STATIC_DRAW);
      this.gl.useProgram(this.defaultProgram);

      var viewMatrixUniformLocation = this.gl.getUniformLocation(this.defaultProgram, "view_matrix");
      var viewMatrix = MathUtils.identityMatrix4;
      this.gl.uniformMatrix4fv(viewMatrixUniformLocation, false, viewMatrix);

      var posAttrIndex = this.gl.getAttribLocation(this.defaultProgram, "a_pos");
      this.gl.vertexAttribPointer(posAttrIndex, 3, this.gl.FLOAT, false, 0, 0);
      this.gl.clearColor(0.5, 0.5, 0.5, 0.9);
      this.gl.drawElements(this.gl.TRIANGLES, 3, this.gl.UNSIGNED_SHORT, 0);
    }
  }, {
    key: "calculateViewMatrix",
    value: function calculateViewMatrix() {
      //let cameraMatrix =  MathUtils.swapYZMatrix;
      var cameraMatrix = this.camera.getTransformationMatrix();
      var viewMatrix = MathUtils.inverse_mat4_rot_pos(cameraMatrix);
      if (this.swapYZ) {
        viewMatrix = MathUtils.mat_4_multiply(viewMatrix, MathUtils.swapYZMatrix);
      }
      viewMatrix = MathUtils.mat_4_multiply(viewMatrix, this.perspectiveMatrix);
      return viewMatrix;
    }
  }, {
    key: "drawObjects",
    value: function drawObjects(timestamp) {
      this.adjustToCanvas();
      this.gl.clearColor(0.8, 0.8, 0.81, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      this.viewMatrix = this.calculateViewMatrix();
      if (this.skyBox) {
        this.drawSkyBox();
      }
      var objKeys = Object.keys(this.objects);
      var obj = void 0;
      for (var i = 0; i < objKeys.length; ++i) {
        obj = this.objects[objKeys[i]];
        if (obj.mesh.dirty || !obj.mesh.buffers) {
          obj.mesh.buffers = this.sendMeshToGPU(obj.mesh);
        }
        if (obj.mesh.skinned && obj.shouldUpdate(timestamp)) {
          obj.updateFrame();
        }
        obj.lastTimeStamp = timestamp;
        this.draw(obj);
      }
    }
  }]);

  return ObjectsRasterizer;
}();
// create a rasterization program from a vertex and fragment shader


function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    alert("shader program intialization failed");
  }
  return program;
}

//compile a shader
function compileShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert("Could not compile shader" + gl.getShaderInfoLog(shader));
  }
  return shader;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var keyDown = exports.keyDown = function keyDown(character) {
  return function (e) {
    switch (e.key) {
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
        break;
      case " ":
        character.input.jump = true;
    }
  };
};

var keyUp = exports.keyUp = function keyUp(character) {
  return function (e) {
    switch (e.key) {
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
      case " ":
        character.input.jump = false;
    }
  };
};

var releaseKeys = exports.releaseKeys = function releaseKeys(character) {
  return function (e) {
    character.input.left = false;
    character.input.right = false;
    character.input.back = false;
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createSkyBox;

var _mesh = __webpack_require__(2);

var _mesh2 = _interopRequireDefault(_mesh);

var _skybox = __webpack_require__(16);

var _skybox2 = _interopRequireDefault(_skybox);

var _game_object = __webpack_require__(1);

var _game_object2 = _interopRequireDefault(_game_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSkyBox() {
    _skybox2.default.img_src = "skybox.jpg";
    _skybox2.default.textured = true;
    return (0, _mesh2.default)(_skybox2.default).then(function (mesh) {
        return new _game_object2.default(mesh);
    });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mat3FromMat4 = __webpack_require__(11);
var quatMultiply = __webpack_require__(12);
var quatFromMat3 = __webpack_require__(13);
var quatScale = __webpack_require__(14);

module.exports = convertMatrixToDualQuat;

// Convert a 4x4 matrix4x4 into a dual quaternion
//  recommended reading: https://www.cs.utah.edu/~ladislav/kavan07skinning/kavan07skinning.pdf
function convertMatrixToDualQuat(matrix4x4) {
  var rotationmatrix4x4 = mat3FromMat4([], matrix4x4);
  var rotationQuat = quatFromMat3([], rotationmatrix4x4);

  var transVec = [matrix4x4[12], matrix4x4[13], matrix4x4[14], 0];
  var transQuat = quatScale([], quatMultiply([], transVec, rotationQuat), 0.5);

  return [rotationQuat[0], rotationQuat[1], rotationQuat[2], rotationQuat[3], transQuat[0], transQuat[1], transQuat[2], transQuat[3]];
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fromMat4;

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @alias mat3.fromMat4
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = multiply;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3],
      bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fromMat3;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) {
      i = 1;
    }
    if (m[8] > m[i * 3 + i]) {
      i = 2;
    }
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;

    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(15);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = scale;

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"vertices":[-1000,999.999939,-1000.000122,-1000,1000.000122,999.999939,-1000,-999.999939,1000.000122,-1000,1000.000122,999.999939,1000,1000.000122,999.999939,1000,-999.999939,1000.000122,1000,1000.000122,999.999939,1000,999.999939,-1000.000122,1000,-1000.000122,-999.999939,1000,999.999939,-1000.000122,-1000,999.999939,-1000.000122,-1000,-1000.000122,-999.999939,1000,999.999939,-1000.000122,1000,1000.000122,999.999939,-1000,1000.000122,999.999939,-1000,-1000.000122,-999.999939,-1000,-999.999939,1000.000122,1000,-999.999939,1000.000122,-1000,-1000.000122,-999.999939,-1000,999.999939,-1000.000122,-1000,-999.999939,1000.000122,-1000,-999.999939,1000.000122,-1000,1000.000122,999.999939,1000,-999.999939,1000.000122,1000,-999.999939,1000.000122,1000,1000.000122,999.999939,1000,-1000.000122,-999.999939,1000,-1000.000122,-999.999939,1000,999.999939,-1000.000122,-1000,-1000.000122,-999.999939,-1000,999.999939,-1000.000122,1000,999.999939,-1000.000122,-1000,1000.000122,999.999939,1000,-1000.000122,-999.999939,-1000,-1000.000122,-999.999939,1000,-999.999939,1000.000122],"normals":[0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349],"colors":[],"uvs":[0.333578,0.499511,0.666422,0.499511,0.666422,0.000245,0.666422,0.999266,0.666422,0.5,0.333578,0.5,0.333089,0.5,0.000245,0.5,0.000245,0.999266,0.333089,0.000245,0.000245,0.000245,0.000245,0.499511,0.999755,0.499511,0.999755,0.000245,0.666911,0.000245,0.666911,0.5,0.666911,0.999266,0.999755,0.999266,0.333578,0.000245,0.333578,0.499511,0.666422,0.000245,0.333578,0.999266,0.666422,0.999266,0.333578,0.5,0.333089,0.999266,0.333089,0.5,0.000245,0.999266,0.333089,0.499511,0.333089,0.000245,0.000245,0.499511,0.666911,0.499511,0.999755,0.499511,0.666911,0.000245,0.999755,0.5,0.666911,0.5,0.999755,0.999266],"faces":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"bones":[],"boneWeights":[],"boneIndices":[],"animations":{}}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = createCharacter;

var _game_object = __webpack_require__(1);

var _game_object2 = _interopRequireDefault(_game_object);

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

var _hud = __webpack_require__(4);

var HUD = _interopRequireWildcard(_hud);

var _collision_utils = __webpack_require__(5);

var CollisionUtils = _interopRequireWildcard(_collision_utils);

var _asset_utils = __webpack_require__(3);

var AssetUtils = _interopRequireWildcard(_asset_utils);

var _snowboarder = __webpack_require__(18);

var _snowboarder2 = _interopRequireDefault(_snowboarder);

var _actions = __webpack_require__(19);

var _actions2 = _interopRequireDefault(_actions);

var _mesh = __webpack_require__(2);

var _mesh2 = _interopRequireDefault(_mesh);

var _mixer = __webpack_require__(20);

var _mixer2 = _interopRequireDefault(_mixer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SQR_MAGNITUDE_ALLOWED_ABOVE_SURFACE = 4;
var EDGE_COLLISION_DAMP_FACTOR = 0.2;
var EDGE_COLLISION_PADDING_ROTATION = 0.5;
var STEER_SPEED = 0.015;
var STEER_ANIMATION_LERP_SPEED = 0.12;

var SNOWBOARD_RESTITUTION = 0.48;
var SNOWBOARD_FRICTION = [0.187, 0.01, 0.187, 1];
var BREAK_FRICTION = [0.04, 0.16, 0.04];
var JUMP_VECTOR = [0, 0.1, 3];
var COLLISION_INTENSITY_MIN_VELOCITY = 2;
var COLLISION_INTENSITY_MAX_VELOCITY = 10;
var SPEED_VOLUME_INTENSITY_MIN_VELOCITY = 0.2;
var SPEED_VOLUME_INTENSITY_MAX_VELOCITY = 20;

window.MathUtils = MathUtils;


var effectBuffers = {};
function createCharacter(slope) {
  return new Promise(function (resolve, reject) {
    var runningJobs = {};
    var processedCharMesh = undefined;

    var soundEffects = ["hit", "collect", "sliding"];

    var finishJob = function finishJob(name) {
      delete runningJobs[name];
      if (Object.keys(runningJobs).length === 0) {
        resolve(new Character({ mesh: processedCharMesh, slope: slope }));
      }
    };
    var context = new (window.AudioContext || window.webkitAudioContext)();
    soundEffects.forEach(function (name) {
      if (effectBuffers.hasOwnProperty(name)) return;
      runningJobs["load_audio_" + name] = true;
      AssetUtils.loadAsset(name + ".mp3", "arraybuffer").then(function (result) {
        return new Promise(function (resolve, reject) {
          return context.decodeAudioData(result.target.response, resolve, reject);
        });
      }).then(function (buffer) {
        effectBuffers[name] = buffer;
      }).then(function () {
        return finishJob("load_audio_" + name);
      }).catch(reject);
    });

    runningJobs["process_mesh"] = true;
    (0, _mesh2.default)({ data: _snowboarder2.default,
      action_file: _actions2.default, mode2: true, colored: true, skinned: true }).then(function (mesh) {
      processedCharMesh = mesh;
      finishJob('process_mesh');
    }).catch(reject);
  });
}

var Character = function (_GameObject) {
  _inherits(Character, _GameObject);

  function Character(_ref) {
    var mesh = _ref.mesh,
        boundingBox = _ref.boundingBox,
        slope = _ref.slope;

    _classCallCheck(this, Character);

    var _this = _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).call(this, mesh));

    window.character = _this;
    _this.mesh = mesh;
    _this.boundingBox = boundingBox;

    _this.slope = slope;
    _this.currentSegmentNumber = 0;

    _this.capsuleRadius = 2;
    _this.setPosition([0, 0, 16]);
    _this.name = "snowboarder";

    window.character = _this;
    _this.mixedAnimations = Array(_this.mesh.numBones * 8);
    _this.snowSound = _mixer2.default.play({ buffer: effectBuffers.sliding,
      priority: 10, volume: 0, loop: true });
    _this._setup();
    return _this;
  }

  _createClass(Character, [{
    key: "_setup",
    value: function _setup() {
      this.segmentsSinceStart = 0;
      this.setPosition([0, 0, 16]);
      this.setRotation(MathUtils.IdentityQuaternion);
      this.setAngularVelocity(MathUtils.IdentityQuaternion);
      this.state = "ground";
      this.speed = 0.3;
      this.fallSpeed = 0.15;
      this.input = { left: false, right: false, back: false, jump: false };
      this.velocity = [0, 1, 0];
      this.localVelocity = [0, 0, 0];
      this.localUp = [0, 0, 1];
      this.friction = SNOWBOARD_FRICTION;
      this.restitution = SNOWBOARD_RESTITUTION;
      this.boxDimensions = [0.5, 5, 0.5];
      this.currentAnimations = {
        "neutral": { influence: 1, loop: true, frame: 0 },
        "left": { influence: 0, loop: true, frame: 0 },
        "right": { influence: 0, loop: true, frame: 0 },
        "brake": { influence: 0, loop: false, frame: 0 }
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this._setup();
    }
  }, {
    key: "_applyGravityStep",
    value: function _applyGravityStep() {
      this.velocity[2] -= this.fallSpeed;
    }
  }, {
    key: "_updateLocalUp",
    value: function _updateLocalUp() {
      this.transformDirectionInPlace([0, 0, 1], this.localUp);
    }
  }, {
    key: "update",
    value: function update() {
      this._ensureAboveSurface();

      //let's gather some data about the environment/ our orientation first : 
      this._getSurfaceData();
      this._updateSegmentNumber();
      this._updateLocalUp(); // the vector representing the character's z axis

      var surfaceOffset = MathUtils.subtractVectors(this.getPosition(), this.surfacePoint);
      var distanceFromSurface = MathUtils.vectorSquareMag(surfaceOffset);
      this._steerControls();
      switch (this.state) {
        case "ground":
          if (this.input.jump) {
            this._jump();
          }
          var snowVolume = MathUtils.vectorMag(this.velocity);
          snowVolume -= SPEED_VOLUME_INTENSITY_MIN_VELOCITY;
          if (snowVolume < 0) snowVolume = 0;
          snowVolume /= SPEED_VOLUME_INTENSITY_MAX_VELOCITY;
          this.snowSound.setVolume(snowVolume);
          this._planeAlign();
          if (MathUtils.vectorDot(this.velocity, this.localUp) < 0) {
            MathUtils.projectVectorOntoPlaneInPlace(this.velocity, this.localUp, this.velocity);
          }
          this.inverseTransformDirectionInPlace(this.velocity, this.localVelocity);
          this._applyFriction(this.localVelocity);
          this.transformDirectionInPlace(this.localVelocity, this.velocity);
          if (distanceFromSurface > this.capsuleRadius) {
            this.state = "air";
          }
          break;
        case "jump":
          this.snowSound.setVolume(0);
          if (MathUtils.vectorDot(this.localUp, this.velocity) <= 0) {
            this.state = "air";
          }
          this._upAlign();
          break;
        case "air":
          if (distanceFromSurface <= this.capsuleRadius) {
            this.state = "ground";
          }
          this.snowSound.setVolume(0);
          this._upAlign();
          break;
      }

      this._applyGravityStep();
      this._handleCollisions();
      this._updateAnimations();
      this._normalizeAnimationInfluence();
      this._mixAnimations();
      _get(Character.prototype.__proto__ || Object.getPrototypeOf(Character.prototype), "update", this).call(this);
    }
  }, {
    key: "_updateAnimations",
    value: function _updateAnimations() {
      var animEntries = Object.entries(this.currentAnimations);
      var mixerInfo = void 0,
          anim = void 0;
      for (var i = 0; i < animEntries.length; ++i) {
        mixerInfo = animEntries[i][1];
        anim = this.mesh.animations[animEntries[i][0]];
        if (!mixerInfo.playedThrough) {
          if (mixerInfo.reverse) {
            mixerInfo.frame -= 1;
            if (mixerInfo.frame < 0) {
              if (mixerInfo.loop) {
                mixerInfo.frame = anim.length - 1;
              } else {
                mixerInfo.frame = 0;
                mixerInfo.playedThrough = true;
              }
            }
          } else {
            mixerInfo.frame += 1;
            if (mixerInfo.frame >= anim.length) {
              if (mixerInfo.loop) {
                mixerInfo.frame = 0;
              } else {
                mixerInfo.frame = anim.length - 1;
                mixerInfo.playedThrough = true;
              }
            }
          }
        }
      }
    }
  }, {
    key: "_getSurfaceData",
    value: function _getSurfaceData() {
      var localDownVector = MathUtils.multiplyVec4ByMatrix4(this.slope.segmentMatrices[this.currentSegmentNumber], [0, 0, -1, 0]);
      var newFloorTriangle = this.slope.getSurroundingTriangle(this.getPosition(), this.currentSegmentNumber);
      this.floorTriangle = newFloorTriangle || this.floorTriangle;
      this.surfacePlaneNormal = MathUtils.planeNormal(this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]);
      this.surfacePoint = MathUtils.vectorTriangleIntersection(this.getPosition(), MathUtils.multiplyVec4ByMatrix4(this.slope.segmentMatrices[this.currentSegmentNumber], [0, 0, -1, 0]), this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]);
    }
  }, {
    key: "_ensureAboveSurface",
    value: function _ensureAboveSurface() {
      if (!this.floorTriangle) {
        return;
      }
      if (!MathUtils.pointIsAbovePlane(this.getPosition(), this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2])) {
        var upVector = MathUtils.multiplyVec4ByMatrix4(this.slope.segmentMatrices[this.currentSegmentNumber], [0, 0, 1, 0]);
        this.setPosition(MathUtils.vectorTriangleIntersection(this.getPosition(), upVector, this.floorTriangle[0], this.floorTriangle[1], this.floorTriangle[2]));
      }
    }
  }, {
    key: "_planeAlign",
    value: function _planeAlign() {
      var surfaceNormalLocal = this.inverseTransformDirection(this.surfacePlaneNormal);
      var planeAlignAxis = MathUtils.vectorCross(surfaceNormalLocal, [0, 0, 1]);
      var planeAlignAngle = MathUtils.angleBetweenVectors([0, 0, 1], surfaceNormalLocal);
      this.addAngularVelocity(MathUtils.axisAngleToQuaternion(planeAlignAxis, planeAlignAngle / 5));
    }
  }, {
    key: "_upAlign",
    value: function _upAlign() {
      var upLocal = this.inverseTransformDirection([0, 0, 1]);
      var planeAlignAxis = MathUtils.vectorCross(upLocal, [0, 0, 1]);
      var planeAlignAngle = MathUtils.angleBetweenVectors([0, 0, 1], upLocal);
      this.addAngularVelocity(MathUtils.axisAngleToQuaternion(planeAlignAxis, planeAlignAngle / 35));
    }
  }, {
    key: "_applyFriction",
    value: function _applyFriction(localVelocity) {
      var signFlip = void 0;
      for (var i = 0; i < localVelocity.length; ++i) {
        if (Math.abs(localVelocity[i]) < Math.abs(this.friction[i])) {
          localVelocity[i] = 0;
        } else {
          signFlip = localVelocity[i] < 0 ? -1 : 1;
          localVelocity[i] -= this.friction[i] * signFlip;
        }
      }
    }
  }, {
    key: "_steer",
    value: function _steer(direction) {
      this.addAngularVelocity(MathUtils.axisAngleToQuaternion(this.localUp, -1 * direction * STEER_SPEED));
    }
  }, {
    key: "_mixAnimations",
    value: function _mixAnimations() {
      var currentKeys = Object.keys(this.currentAnimations);
      // first fill the lerped transform with the first animation we find,
      // which does not have influence 0, * its influence
      var firstAnimIndex = void 0;
      var animFrame = void 0;
      for (var i = 0; i < currentKeys.length; ++i) {
        if (this.currentAnimations[currentKeys[i]].influence !== 0) {
          firstAnimIndex = i;
          animFrame = this.currentAnimations[currentKeys[i]].frame;
          break;
        }
      }
      var anim = this.mesh.animations[currentKeys[firstAnimIndex]][this.currentAnimations[currentKeys[firstAnimIndex]].frame];
      var influence = this.currentAnimations[currentKeys[firstAnimIndex]].influence;
      for (var _i = 0; _i < anim.length; ++_i) {
        this.mixedAnimations[_i] = anim[_i] * influence;
      }
      // now add all the other anims * their influence
      for (var idx = firstAnimIndex + 1; idx < currentKeys.length; ++idx) {
        if (this.currentAnimations[currentKeys[idx]].influence === 0) continue;
        anim = this.mesh.animations[currentKeys[idx]][this.currentAnimations[currentKeys[idx]].frame];
        influence = this.currentAnimations[currentKeys[idx]].influence;
        for (var transformIdx = 0; transformIdx < anim.length; ++transformIdx) {
          this.mixedAnimations[transformIdx] += anim[transformIdx] * influence;
        }
      }
    }
  }, {
    key: "_normalizeAnimationInfluence",
    value: function _normalizeAnimationInfluence() {
      var magnitude = Object.values(this.currentAnimations).reduce(function (accum, anim) {
        return accum + anim.influence;
      }, 0);
      Object.values(this.currentAnimations).forEach(function (animation) {
        return animation.influence /= magnitude;
      });
    }
  }, {
    key: "brakeAnimation",
    value: function brakeAnimation() {
      this.fadeOutSteeringInfluence("left");
      this.fadeOutSteeringInfluence("right");
      this.fadeOutSteeringInfluence("neutral");
      this.fadeInSteeringInfluence("brake", 4);
    }
  }, {
    key: "steerAnimationLeft",
    value: function steerAnimationLeft() {
      this.fadeOutSteeringInfluence("brake", 0.1);
      if (this.currentAnimations["right"].influence != 0) {
        this.fadeOutSteeringInfluence("right", 2);
        this.fadeInSteeringInfluence("neutral", 2);
      } else if (this.currentAnimations["brake"].influence > 0.7) {
        this.steerAnimationNeutral();
      } else {
        this.fadeOutSteeringInfluence("neutral");
        this.fadeInSteeringInfluence("left");
      }
    }
  }, {
    key: "steerAnimationRight",
    value: function steerAnimationRight() {
      this.fadeOutSteeringInfluence("brake", 0.1);
      if (this.currentAnimations["left"].influence != 0) {
        this.fadeOutSteeringInfluence("left", 2);
        this.fadeInSteeringInfluence("neutral", 2);
      } else if (this.currentAnimations["brake"].influence > 0.7) {
        this.steerAnimationNeutral();
      } else {
        this.fadeOutSteeringInfluence("neutral");
        this.fadeInSteeringInfluence("right");
      }
    }
  }, {
    key: "steerAnimationNeutral",
    value: function steerAnimationNeutral() {
      this.fadeOutSteeringInfluence("brake", 0.1);
      this.fadeOutSteeringInfluence("right", 2);
      this.fadeOutSteeringInfluence("left", 2);
      this.fadeInSteeringInfluence("neutral", 0.2);
    }
  }, {
    key: "fadeOutSteeringInfluence",
    value: function fadeOutSteeringInfluence(key) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.currentAnimations[key].influence -= STEER_ANIMATION_LERP_SPEED * speed;
      this.currentAnimations[key].influence = Math.max(this.currentAnimations[key].influence, 0);
      if (key == 'brake') {
        this.currentAnimations[key].playedThrough = false;
        this.currentAnimations[key].reverse = true;
      }
    }
  }, {
    key: "fadeInSteeringInfluence",
    value: function fadeInSteeringInfluence(key) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.currentAnimations[key].influence += STEER_ANIMATION_LERP_SPEED * speed;
      this.currentAnimations[key].influence = Math.min(this.currentAnimations[key].influence, 1);
      if (key == 'brake') {
        this.currentAnimations[key].playedThrough = false;
        this.currentAnimations[key].reverse = false;
      }
    }
  }, {
    key: "_steerControls",
    value: function _steerControls() {
      if (this.input.back) {
        this.friction = BREAK_FRICTION;
        this.brakeAnimation();
      } else {
        this.friction = SNOWBOARD_FRICTION;

        if (this.input.left ? !this.input.right : this.input.right) {
          if (this.input.right) {
            this._steer(-1);
            this.steerAnimationRight();
          } else {
            this.steerAnimationLeft();
            this._steer(1);
          }
        } else {
          this.steerAnimationNeutral();
        }
      }
    }
  }, {
    key: "_updateSegmentNumber",
    value: function _updateSegmentNumber() {
      if (this.currentSegmentNumber < this.slope.segmentMatrices.length - 1 && this.slope.positionIsPastSegmentStart(this.getPosition(), this.currentSegmentNumber + 1)) {
        ++this.segmentsSinceStart;
        this.currentSegmentNumber = this.slope.updateCharacterSegmentNumber(this.currentSegmentNumber);
        var triangleAfterMove = this.slope.getSurroundingTriangle(this.getPosition(), this.currentSegmentNumber) || this.floorTriangle;
      } else if (this.currentSegmentNumber > 0 && !this.slope.positionIsPastSegmentStart(this.getPosition(), this.currentSegmentNumber)) {
        --this.currentSegmentNumber;
        var _triangleAfterMove = this.slope.getSurroundingTriangle(this.getPosition(), this.currentSegmentNumber) || this.floorTriangle;
      }
    }
  }, {
    key: "_jump",
    value: function _jump() {
      MathUtils.addVectorsInPlace(this.velocity, this.transformDirection(JUMP_VECTOR), this.velocity, 3);
      this.state = "jump";
    }
  }, {
    key: "_handleCollision",
    value: function _handleCollision(collisionData) {
      var _this2 = this;

      var volume = MathUtils.vectorMag(this.velocity);
      volume -= COLLISION_INTENSITY_MIN_VELOCITY;
      volume /= COLLISION_INTENSITY_MAX_VELOCITY;
      if (volume > 0) {
        _mixer2.default.play({ buffer: effectBuffers.hit, volume: volume });
      }
      this.velocity = MathUtils.scaleVector(MathUtils.bounceVectorOffPlane(this.velocity, collisionData.normal), this.restitution);
      this.setPosition(MathUtils.addVectors(this.getPosition(), MathUtils.scaleVector(MathUtils.vectorNormalize(collisionData.normal), collisionData.penetration)));
      this.friction = [0, 0, 0];
      setTimeout(function () {
        return _this2.friction = SNOWBOARD_FRICTION;
      }, 500);
    }
  }, {
    key: "_handleEdgeCollision",
    value: function _handleEdgeCollision(collisionData) {
      this._handleCollision(collisionData);
    }
  }, {
    key: "_handleTreeCollision",
    value: function _handleTreeCollision(collisionData) {
      collisionData.normal = collisionData.sphereNormal;
      this._handleCollision(collisionData);
    }
  }, {
    key: "_handleCollisions",
    value: function _handleCollisions() {
      var edgeCollisionData = this.slope.boxIsBeyondEdge(this.getTransformationMatrix(), this.boxDimensions, this.currentSegmentNumber);
      var capsulePoint0 = this.getPosition();
      var capsulePoint1 = MathUtils.addVectors(this.getPosition(), this.velocity);
      var obstacleCollisionData = this.slope.capsuleCollidesWithObstacle(capsulePoint0, capsulePoint1, this.capsuleRadius, this.currentSegmentNumber);
      var balloonCount = this.slope.capsuleCollidesWithBalloons(capsulePoint0, capsulePoint1, this.capsuleRadius, this.currentSegmentNumber);
      if (balloonCount > 0) {
        _mixer2.default.play({ buffer: effectBuffers.collect });
        HUD.addPoints(balloonCount);
      }

      if (edgeCollisionData) {
        this._handleEdgeCollision(edgeCollisionData);
        return;
      } else if (obstacleCollisionData) {
        this._handleTreeCollision(obstacleCollisionData);
      }
    }
  }]);

  return Character;
}(_game_object2.default);

Character.transformedDirectionTemp = [0, 0, 0];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {"vertexJointWeights":[{"0":1},{"0":1},{"1":1},{"1":1},{"0":1},{"0":1},{"1":1},{"1":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":0.000123376,"5":0.9998766},{"4":0.0000673789,"5":0.9999327},{"4":0.000107727,"5":0.9998923},{"4":0.04117435,"5":0.9588257},{"4":0.000635725,"5":0.9993643},{"4":0.08761286,"5":0.9123871},{"4":0.000462355,"5":0.9995377},{"4":0.003237187,"5":0.9967628},{"4":0.000293432,"5":0.9997066},{"4":0,"5":1},{"6":7.13821e-7,"7":0.9999993},{"4":0,"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"4":1,"7":0},{"4":0.9999644,"7":0.0000356165},{"4":1,"7":0},{"4":0.999999,"7":0.00000103691},{"4":0.9988135,"7":0.00118643},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"8":0.000924238,"9":0.9990758},{"8":0.000213825,"9":0.9997862},{"8":0.005515396,"9":0.9944846},{"8":0.00000776274,"9":0.9999922},{"8":0.001412451,"9":0.9985876},{"8":0.0000161027,"9":0.9999839},{"8":0.00018801,"9":0.999812},{"8":0.002628147,"9":0.9973718},{"8":1,"10":0},{"8":1,"10":0},{"8":1,"10":0},{"8":0.9999718,"10":0.0000281663},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1,"10":0},{"8":0.9998304,"10":0.000169599},{"8":1,"10":0},{"8":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"1":1},{"1":1},{"1":1},{"1":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":0.0000252637,"12":0.9999747},{"11":0.000105625,"12":0.9998944},{"11":0.002696871,"12":0.9973031},{"11":0.00000400528,"12":0.999996},{"11":0,"12":1},{"11":0.0000911998,"12":0.9999088},{"11":0.000999188,"12":0.9990008},{"11":0.000263982,"12":0.999736},{"11":0.01860803,"12":0.9813919},{"11":0.00000973657,"12":0.9999903},{"6":1},{"6":0.9998414,"11":0.000158578},{"6":0.9999975,"7":0.00000257618},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"6":0.00000107035,"11":0.9999989},{"6":0.00004516,"11":0.9999548},{"6":0.0000231337,"7":0,"11":0.9999769},{"6":0.005811214,"11":0.9941888},{"6":0.000802966,"11":0.999197},{"13":0,"14":1},{"13":0.00000943574,"14":0.9999906},{"13":0,"14":1},{"13":0,"14":1},{"13":0.001032888,"14":0.9989671},{"13":0.00000201997,"14":0.999998},{"13":0,"14":1},{"13":0.00000229952,"14":0.9999977},{"13":0.9999993,"15":7.01295e-7},{"13":1,"15":0},{"13":1,"15":0},{"13":1,"15":0},{"13":1,"15":0},{"13":1,"15":0},{"13":1},{"13":1},{"13":1},{"13":0.9999985,"15":0.00000149091},{"13":1},{"13":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"0":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"13":1},{"13":1},{"13":1},{"13":1},{"13":1},{"13":1},{"13":1},{"13":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1}],"jointNamePositionIndex":{"head neck lower":0,"head neck upper":1,"pelvis":2,"spine":3,"leg right knee":4,"leg right ankle":5,"leg left thigh":6,"leg right thigh":7,"arm right elbow":8,"arm right wrist":9,"arm right shoulder":10,"leg left knee":11,"leg left ankle":12,"arm left elbow":13,"arm left wrist":14,"arm left shouler":15,"board":16,"root hips":17},"jointInverseBindPoses":{"0":[0.9999999,0,0,0.3360495,0,0.0000645965,0.9999999,-3.345903,0,-1,0.0000646263,-0.2315876,0,0,0,1],"1":[0.999382,-0.03423917,-0.00794506,0.3562572,0.000236895,-0.2194741,0.9756183,-3.53032,-0.03514814,-0.9750176,-0.2193303,0.5448708,0,0,0,1],"2":[1,-0.00000170572,0.00000169873,0.3401581,0.00000170608,0.01307386,-0.9999145,2.179038,0.00000168351,0.9999145,0.01307398,0.3568745,0,0,0,1],"3":[0.9999975,-0.001690924,-0.001470446,0.3426983,0.001690924,0.138814,0.990317,-2.111729,-0.001470446,-0.9903171,0.1388165,-0.7043724,0,0,0,1],"4":[0.9829514,0.1333615,-0.1265745,1.073601,-0.1333613,0.04321527,-0.9901247,0.6305866,-0.1265745,0.9901248,0.06026387,0.2132779,0,0,0,1],"5":[0.7090227,-0.5916454,-0.3837218,0.3154639,-0.6638623,-0.7435399,-0.08021813,-1.067575,-0.2378517,0.3116151,-0.9199578,-0.9453169,0,0,0,1],"6":[0.9740064,-0.1610838,0.159259,-0.4375252,0.1610834,-0.001755297,-0.9869391,1.712455,0.1592594,0.9869391,0.02423828,0.3164743,0,0,0,1],"7":[0.9740074,0.1610809,-0.1592566,1.10016,-0.161081,-0.001754999,-0.9869395,1.602869,-0.1592566,0.9869397,0.02423775,0.2081296,0,0,0,1],"8":[0.8582692,0.3730091,-0.3524759,2.361636,-0.373009,-0.0183131,-0.9276472,1.693511,-0.3524752,0.9276475,0.1234179,-0.6578379,0,0,0,1],"9":[0.8791055,0.3756789,-0.2933263,2.310055,-0.3051075,-0.02924346,-0.9518691,0.8936768,-0.3661744,0.926289,0.08891403,-0.6307706,0,0,0,1],"10":[0.7825813,0.4821545,-0.3938204,2.367366,-0.4821545,0.06923866,-0.8733461,2.069923,-0.3938196,0.8733463,0.2866575,-1.143706,0,0,0,1],"11":[0.9829508,-0.1333636,0.1265764,-0.4048805,0.1333634,0.04321533,-0.9901247,0.7213155,0.1265765,0.9901245,0.06026446,0.2993885,0,0,0,1],"12":[0.7392488,0.5560553,0.3798866,0.1381569,0.6261062,-0.7752393,-0.08363699,-0.6106911,0.2479961,0.2996777,-0.9212446,-0.7931421,0,0,0,1],"13":[0.7787206,-0.4660462,0.4199937,-1.96753,0.4660462,-0.01843881,-0.8845679,1.707209,0.4199941,0.884568,0.2028408,-0.7301048,0,0,0,1],"14":[0.799432,-0.4686206,0.3759025,-1.927145,0.410618,-0.03051042,-0.9112967,0.866589,0.4385216,0.8828724,0.1680333,-0.7013855,0,0,0,1],"15":[0.6821044,-0.5816631,0.4431716,-1.95204,0.5816628,0.06428658,-0.8108855,2.142741,0.4431723,0.8108853,0.3821822,-1.217532,0,0,0,1],"16":[0,1,-0.000477482,0.252128,-1,1.21793e-7,-0.000238791,3.418457,-0.000238776,0.000477482,0.9999999,1.080429,0,0,0,1],"17":[1,0.00000619888,0.00000163913,0.3401612,-0.00000620015,0.8696072,0.4937443,-0.6332162,0.0000016221,-0.4937442,0.8696071,-2.092196,0,0,0,1]},"keyframes":{"0":[[-0.701051,-0.275087,-0.657918,0,0.191541,-0.961335,0.197853,0,-0.686906,0.012687,0.726635,0,0.050373,-1.146293,0.894083,1],[-0.701051,-0.275087,-0.657918,0,0.191541,-0.961336,0.197853,0,-0.686906,0.012687,0.726635,0,0.050372,-1.146293,0.894082,1],[-0.603708,0.634236,-0.482992,0,-0.359894,-0.757431,-0.54477,0,-0.711346,-0.155056,0.685525,0,-0.084779,-0.5079,0.734228,1],[-0.681778,0.440927,-0.583749,0,-0.413701,-0.890485,-0.189443,0,-0.60335,0.112339,0.789524,0,-0.362759,-1.222713,0.618975,1],[-0.328316,0.916708,-0.227715,0,-0.921391,-0.363891,-0.136462,0,-0.207959,0.165012,0.964118,0,-0.497974,-0.672543,0.684041,1],[-0.817147,0.401166,-0.41393,0,-0.173137,-0.855747,-0.487566,0,-0.549814,-0.326746,0.768727,0,-1.114977,-1.833133,0.1958,1],[-0.602996,0.664243,0.441789,0,-0.718583,-0.21175,-0.66242,0,-0.346459,-0.716899,0.604998,0,-0.76998,0.826033,1.002637,1],[-0.258323,0.915338,-0.308911,0,-0.576762,-0.40265,-0.710788,0,-0.774993,-0.005445,0.631946,0,0.123423,-0.561229,0.636479,1],[-0.364125,-0.400516,-0.840833,0,0.073871,-0.912387,0.402609,0,-0.928416,0.084488,0.36181,0,1.188468,-2.241651,1.764935,1],[-0.364125,-0.400516,-0.840833,0,0.073871,-0.912387,0.402609,0,-0.928416,0.084488,0.36181,0,1.188468,-2.241652,1.764935,1],[-0.364126,-0.400516,-0.840832,0,0.073871,-0.912387,0.402609,0,-0.928416,0.084488,0.361809,0,1.188467,-2.241651,1.764935,1],[-0.557987,0.798418,0.22623,0,-0.829453,-0.545022,-0.122306,0,0.025649,-0.255891,0.966366,0,-1.102278,0.318894,0.995542,1],[0.008958,0.945037,0.326842,0,-0.860395,0.17384,-0.479062,0,-0.509549,-0.276921,0.814662,0,-1.828821,0.456117,0.709491,1],[-0.665766,0.710407,-0.228206,0,-0.460895,-0.63205,-0.622967,0,-0.586798,-0.309571,0.74822,0,-0.511404,-0.167075,0.309344,1],[-0.665766,0.710407,-0.228206,0,-0.460895,-0.632051,-0.622968,0,-0.586798,-0.309571,0.74822,0,-0.511404,-0.167075,0.309343,1],[-0.70486,0.638106,-0.309826,0,-0.511591,-0.759862,-0.401105,0,-0.491372,-0.124218,0.862046,0,-0.719864,-0.582809,0.164847,1],[-0.476709,0.879058,-0.002137,0,-0.692618,-0.377099,-0.61488,0,-0.541321,-0.291639,0.788618,0,-0.777159,-0.207522,1.127154,1],[-0.474706,0.879995,-0.016218,0,-0.638255,-0.356873,-0.682109,0,-0.60604,-0.31345,0.731071,0,-0.377114,0.074425,0.74106,1]]},"vertexNormalIndices":[0,1,2,3,0,2,4,5,6,7,4,6,6,3,2,7,6,2,5,4,1,0,5,1,5,0,6,6,0,3,2,1,4,7,2,4,8,9,10,11,8,10,12,13,14,12,15,13,13,16,14,17,16,13,16,10,9,17,10,16,17,15,18,13,15,17,18,10,17,11,10,18,11,18,15,9,19,16,20,19,9,14,21,12,21,19,20,19,14,16,21,14,19,8,15,12,8,11,15,8,20,9,20,8,21,8,12,21,22,23,24,25,23,22,26,27,28,29,27,26,26,30,31,32,30,26,33,26,28,32,26,33,34,33,35,32,33,34,30,34,36,32,34,30,30,37,31,36,37,30,22,38,25,35,38,22,39,38,40,41,39,40,29,40,27,41,40,29,42,29,43,41,29,42,44,23,45,24,23,44,29,44,45,26,44,29,44,31,37,26,31,44,38,46,25,47,48,49,48,50,49,51,50,52,50,51,49,53,52,48,52,50,48,47,49,54,54,49,51,53,48,54,48,47,54,53,54,52,52,54,51,55,56,57,58,59,60,60,59,61,62,55,63,56,55,62,64,57,62,57,56,62,64,58,57,57,58,60,63,55,59,59,55,61,55,57,61,61,57,60,64,62,63,64,63,58,58,63,59,65,66,67,67,66,68,68,66,69,66,65,69,68,69,70,70,69,71,67,68,72,72,68,70,65,73,69,69,73,71,72,65,67,65,72,73,73,74,71,72,74,73,70,74,72,71,74,70,75,76,77,77,76,78,78,76,79,76,75,79,79,80,78,78,80,81,79,75,80,80,75,82,78,81,77,77,81,83,75,77,82,82,77,83,81,80,84,84,80,85,82,86,80,80,86,85,83,81,87,87,81,84,82,83,86,86,83,87,88,89,90,89,88,91,89,91,92,92,91,93,94,92,95,95,92,93,94,88,90,88,94,95,88,95,91,91,95,93,96,97,98,97,96,99,100,101,102,101,100,103,104,105,106,104,106,107,101,107,106,103,107,101,104,100,102,105,104,102,108,100,109,103,100,108,109,104,110,100,104,109,110,107,111,104,107,110,111,103,108,107,103,111,98,96,108,109,98,108,97,109,110,98,109,97,111,97,110,99,97,111,96,111,108,111,96,99,102,101,106,105,102,106,112,113,114,115,113,114,116,117,118,119,120,121,121,120,122,116,118,123,124,116,125,121,126,127,121,122,126,125,116,123,119,127,118,118,127,123,127,119,121,122,124,126,126,124,125,125,113,115,113,125,123,127,112,123,112,113,123,126,112,127,112,126,114,115,114,125,125,114,126,116,124,117,119,118,120,120,118,117,122,120,124,124,120,117,128,129,130,131,128,130,132,133,134,133,135,134,136,135,137,137,135,133,138,135,136,135,138,134,132,139,137,132,137,133,138,132,134,139,132,138,137,139,136,139,138,136,140,141,142,141,140,143,143,144,141,145,146,147,146,145,148,148,140,146,143,140,148,142,145,147,141,145,142,145,144,149,144,145,141,143,149,144,148,149,143,146,140,142,147,146,142,145,149,148,150,151,152,151,150,153,154,151,153,152,151,154,153,155,154,154,155,156,150,157,153,153,157,155,152,154,158,158,154,156,150,152,157,157,152,158,156,159,158,158,159,157,157,159,155,159,156,155,160,161,162,161,160,163,164,163,165,161,163,164,166,162,167,160,162,166,166,164,165,167,164,166,168,162,161,162,168,169,164,168,161,170,168,164,169,167,162,171,167,169,167,170,164,171,170,167,169,172,171,171,172,170,172,168,170,168,172,169,173,174,175,176,173,175,177,176,175,178,176,177,175,174,179,177,175,179,174,173,179,179,173,180,180,173,176,178,180,176,181,182,183,182,181,184,185,186,187,188,185,187,186,184,182,184,186,185,185,189,190,188,189,185,185,181,184,190,181,185,189,191,190,192,191,189,183,190,191,181,190,183,187,186,191,192,187,191,191,182,183,186,182,191,193,194,195,194,196,197,198,199,200,199,201,200,195,194,197,198,193,195,202,193,198,200,202,198,196,199,197,201,199,196,197,203,195,204,203,197,195,203,205,198,195,205,199,205,206,198,205,199,206,197,199,204,197,206,203,206,204,205,206,203,207,208,209,210,211,212,213,214,215,216,217,218,219,220,216,208,221,222,208,223,221,207,224,208,217,225,219,219,226,217,219,218,226,227,228,229,229,230,227,231,213,229,213,212,229,229,212,211,211,232,229,233,234,235,233,235,236,237,238,239,240,238,237,239,238,240,239,241,237,237,242,240,219,242,237,240,242,219,233,223,208,233,243,214,224,244,245,215,212,213,245,208,224,243,215,214,224,207,244,207,233,208,244,207,245,245,207,208,233,207,234,246,236,247,248,247,236,246,247,248,235,216,248,235,248,236,248,233,246,220,233,248,248,216,220,217,235,225,217,216,235,220,243,233,217,226,218,216,218,219,249,220,219,214,231,222,213,231,214,220,250,215,210,250,220,215,250,210,212,215,210,220,215,243,236,246,233,214,222,223,233,214,223,251,227,252,227,253,254,253,255,254,254,252,227,252,256,251,249,232,211,222,221,223,257,258,259,260,258,257,259,258,260,261,228,251,262,261,251,251,256,262,222,231,261,228,261,231,229,228,231,227,251,228,262,259,261,262,257,259,260,208,259,259,208,222,259,222,261,235,219,225,263,264,241,241,264,237,219,237,264,265,241,239,239,266,265,240,266,239,263,241,265,232,263,230,229,232,230,230,253,227,264,249,219,210,249,211,263,232,264,265,255,253,253,263,265,253,230,263,249,210,220,232,249,264,267,268,269,270,271,272,273,274,275,276,277,278,278,273,276,273,275,276,278,272,273,278,279,272,271,273,272,280,281,274,271,280,273,281,280,270,272,281,270,271,270,280,280,274,273,277,282,278,283,284,285,286,284,287,287,288,289,288,290,291,288,287,290,286,287,289,284,290,287,291,286,289,291,292,282,286,291,282,293,285,286,293,286,282,282,277,293,285,284,286,291,289,288,294,285,268,275,274,295,278,282,279,279,282,292,295,296,275,297,298,285,285,298,283,276,275,268,268,285,293,296,299,300,299,301,300,296,302,299,295,302,296,268,275,269,268,267,294,301,303,304,304,303,297,267,301,304,301,267,300,296,300,275,275,300,269,267,269,300,297,285,304,304,285,294,294,267,304,276,268,277,293,277,268,305,306,307,306,308,307,308,308,306,309,310,311,312,311,310,313,311,312,314,315,316,317,314,316,318,319,320,319,318,321,321,314,317,319,321,317,317,320,319,316,320,317,315,314,321,318,315,321,319,314,321,314,319,317,322,323,324,325,322,324,326,322,325,327,322,326,328,329,330,329,329,328,331,322,327,332,331,327,323,322,331,333,323,331,333,46,46,330,334,328,335,334,330,334,335,336,324,337,325,336,337,324,337,326,325,338,326,337,326,332,327,338,332,326,323,336,324,333,336,323,339,340,341,341,342,343,339,341,343,344,339,343,345,344,343,346,344,345,345,342,347,343,342,345,342,347,347,348,349,350,350,349,351,349,348,352,353,349,352,352,348,354,348,350,354,349,355,351,355,349,353,356,356,356,357,357,357,358,358,358,359,359,359,360,360,360,361,361,361,362,362,362,360,360,360,363,363,363,364,364,364,365,365,365,360,360,360,366,366,366,367,367,367,368,368,368,369,369,369,370,370,370,360,360,360,371,371,371,372,372,372,373,373,373,374,374,374,375,375,375,376,376,376,377,377,377,378,378,378,379,379,379,380,380,380,381,381,381,360,360,360,382,382,382,383,383,383,384,384,384,385,385,385,386,386,386,387,387,387,388,388,388,388,388,388,360,360,360,389,389,389,390,390,390,391,391,391,392,392,392,393,393,393],"vertexNormals":[-0.5773299,0.577391,0.5773299,0.5773401,0.5773707,0.5773401,0.5773605,0.5773299,-0.5773605,-0.5773401,0.5773401,-0.5773707,0.5773605,-0.5773299,0.5773605,-0.5773707,-0.5773096,0.5773707,-0.5773605,-0.5773605,-0.5773299,0.5773401,-0.5773707,-0.5773401,0.000762981,0.652318,-0.7579451,-0.4271782,0.5502625,0.717447,0.4284551,0.5492795,0.7174388,0.7358239,0.6204299,-0.2713484,-0.000701939,-0.6113892,-0.7913298,0.2170796,-0.7040362,0.6761727,-0.2188208,-0.7034921,0.6761777,0.5326847,-0.7428714,-0.4054495,-0.5836437,-0.2651789,0.7674896,0.583072,-0.2664033,0.7675002,0.8545269,-0.2940183,-0.428179,-0.8551307,-0.2921953,-0.4282215,-0.7344462,0.6220743,-0.2713163,-0.5344585,-0.7415947,-0.4054523,0,-0.9949374,0.1004978,0,-0.5150074,0.8571859,0,-0.5150432,0.8571642,0,-0.9973564,-0.07266539,-0.6556497,0.692151,-0.301746,0.386375,0.2827923,-0.8779197,-0.3904922,0.2823629,-0.8762346,0.7322436,0.5563013,-0.3928717,-0.6399846,-0.205851,0.7403007,-0.5200815,0.4997251,0.6926689,-0.8864483,-0.4177104,-0.1993181,-0.6118195,-0.3197502,-0.7234894,-0.6476853,-0.7338114,-0.2049996,-0.2414699,-0.8313499,-0.5005495,-0.471493,-0.505461,0.7226365,-0.006500482,0.001770079,-0.9999774,0.2386626,-0.8316264,-0.5014357,0.4858983,-0.5891147,-0.6456366,0.6077638,-0.3189585,-0.7272473,0.8418881,-0.2114334,-0.4965083,0.9781993,0.006714165,0.2075606,0.9799287,-0.0000305188,0.1993489,0,0.7932408,0.6089081,0,0.7253301,0.6884014,0,-0.9440855,-0.3297005,-0.8881054,-0.02166855,-0.4591291,-0.06457811,-0.8227918,-0.5646622,-0.717,-0.01736569,0.696857,0.1045589,-0.8186479,0.5646974,0.06454777,0.8227934,0.5646634,0.8881047,0.02169901,0.4591287,0.7169851,0.01733481,-0.696873,-0.1045589,0.8186479,-0.5646974,0.6841745,-0.3414158,0.6444693,0.6503305,0.6211543,0.4373075,-0.3394628,0.6632083,0.6670231,-0.8135933,-0.04877042,-0.5793853,-0.08438569,-0.8045482,-0.5878616,-0.8255405,-0.08786433,0.557461,-0.08627676,-0.8475393,0.5236731,0.5713427,0.5796743,-0.5809865,0.692878,-0.3335751,-0.6392557,-0.3854907,0.7033808,-0.5972038,0.9298644,0.07523024,-0.3601287,-0.14161,-0.1666359,-0.9757967,-0.05533188,0.9768689,-0.2065561,-0.9970524,0.02533066,-0.07242131,-0.01049858,-0.9723435,-0.2333197,-0.7479983,-0.06753927,0.6602552,0.09604334,-0.8633831,0.4953237,0.07223826,0.7808879,0.6204804,0.91008,-0.02536135,0.4136561,0.1451197,0.003357112,0.9894085,-0.9539741,-0.001922667,0.2998832,0.1486571,-0.1578738,0.9762054,0.003448605,0.9839606,0.1783525,0.9988074,0.04736602,0.01184147,0.038576,-0.9942781,0.09961396,-0.03012228,-0.9311975,-0.3632683,0.8865811,0.02179062,-0.4620598,-0.9837699,-0.02252274,-0.1780155,-0.0771526,0.9272357,-0.3664445,0.988328,0.02368271,-0.1504893,0.02081418,-0.9997828,0.001068174,-0.9883092,-0.02444601,0.1504911,-0.02798557,0.9996084,0.0000305187,-0.7295686,0.5407139,-0.418758,-0.7124118,-0.6944971,0.1007136,-0.6957978,0.7145059,0.07312297,-0.741259,-0.5380903,-0.4012406,0.5854825,-0.7085669,-0.3938822,0.281995,-0.5580388,-0.7804303,0.5999194,0.6816809,-0.4188174,0.2954881,0.5235896,-0.7990875,-0.7450243,-0.5809859,-0.3277106,0.347461,0.5537097,-0.7567539,0.3372416,-0.5857627,-0.7369873,-0.7293624,0.5884525,-0.348933,0.7342968,-0.6654756,0.1339802,-0.7490661,-0.5737326,-0.3312566,0.3326299,-0.5952181,-0.7314867,-0.487546,-0.6434996,0.5900909,0.7501023,0.6520439,0.1103881,0.3468841,0.5610392,-0.7516027,-0.7366126,0.5789501,-0.349598,-0.4727072,0.6738268,0.5678957,-0.3897874,-0.5619752,0.7295545,0.7507514,-0.5870749,0.3028459,0.7658191,0.5789193,0.279953,-0.3761852,0.5930273,0.7119013,0.745934,0.5805168,0.3264701,-0.6360166,0.7132908,0.2944476,0.6274822,-0.7225507,-0.2901495,-0.7490671,-0.5739775,-0.3308298,-0.9355251,0.01550358,0.3529201,-0.002929747,0.01681578,0.9998543,-0.3463292,0.9049483,0.2472341,0.4464641,0.8925924,-0.06283885,0.7060642,0.003418147,0.7081396,0.8593786,-0.01928782,-0.5109761,0.4229097,-0.9054548,-0.03604358,-0.7083234,0.672219,-0.2154055,-0.3693374,-0.8881251,0.2735392,-0.7259657,-0.6602268,-0.192547,0.3302786,-0.678533,-0.6561319,0.3478333,0.6516572,-0.6740586,-0.003448605,-0.7781953,-0.628013,-0.4468051,-0.6962103,-0.5618331,-0.004577755,-0.7781918,-0.6280102,0.4367972,-0.7000291,-0.5649492,0.8883654,0,-0.4591373,0.7171966,0,0.696871,0.08459961,-0.8209702,-0.5646688,-0.08459961,-0.8209702,0.5646688,-0.8883718,0,0.4591248,-0.08459961,0.8209702,0.5646688,-0.7171966,0,-0.696871,0.08459812,0.8209561,-0.5646896,0.005584955,-0.8244438,-0.5659163,0.4513565,0.6447906,-0.616865,0.8048546,-0.1397477,-0.576784,-0.7206783,-0.2857199,-0.6316541,-0.5151923,0.6162409,-0.5956711,0.4035224,0.6436156,0.6503297,0.004821956,-0.8372249,0.5468376,0.8146446,-0.148353,0.5606653,-0.7107289,-0.2601448,0.6535971,-0.5867947,0.6926051,0.4194878,0.02996993,0.9779309,-0.2067684,0.1459438,-0.1630346,-0.9757664,-0.931561,0.05005109,-0.3601238,0.9960079,0.0521869,-0.07242083,0.03598219,-0.9717341,-0.2333199,0.7494699,-0.04764109,0.6603221,-0.07315397,-0.8655185,0.4955062,-0.09326636,0.7788478,0.62024,-0.9091784,-0.0492891,0.4134793,-0.1451803,0,0.9894053,0.991046,0,0.1335209,0.05734443,0.9289868,-0.3656436,0.9825185,0.000732448,-0.1861639,-0.00451678,0.9999896,-0.000579863,-0.8906727,0.000732461,-0.4546447,-0.9910501,0,-0.133491,-0.00451678,-0.9999896,-0.000579863,0.05694824,-0.9300028,-0.363114,-0.02682626,0.9836007,0.1783537,0.9536594,0.02185159,0.3000938,-0.9996815,0.02240097,0.01162773,-0.01492381,-0.9949234,0.09952282,-0.1445384,-0.1614155,0.9762447,0.7670062,-0.5516023,-0.3277752,-0.2083871,-0.5351901,-0.8186247,-0.1911118,0.5469668,-0.8150483,0.7856538,0.5270653,-0.3239605,-0.532531,0.7045987,-0.4689899,0.7006437,0.693441,0.1680421,-0.556307,-0.6836948,-0.4723177,0.6765787,-0.7180542,0.1632163,-0.2480595,0.5750415,-0.7796113,0.7593076,-0.5983819,-0.255717,-0.2678994,-0.560428,-0.7836775,0.7783671,0.5745584,-0.2530364,0.3123686,0.5691608,0.7605801,0.291157,-0.5846335,0.7572525,0.02923685,-0.4435889,0.8957535,0.04583942,0.4360545,0.8987521,-0.725414,0.45779,0.5140066,-0.7762235,0.5956724,0.2065229,-0.7948724,-0.5727537,0.2003279,-0.7401319,-0.4392387,0.5091898,0.565851,0.7460651,-0.3509979,0.9837026,-0.01733499,-0.1789659,0.7452189,0.656652,-0.1160036,0.5408982,-0.7569156,-0.3667535,0.724735,-0.6772474,-0.1268675,-0.2534012,0.6727355,-0.6951366,-0.2754032,-0.6566767,-0.7020889,-0.3024442,0.006958305,-0.9531418,0.02789473,-0.7182438,-0.6952322,0.04745692,0.7260764,-0.6859745,0.2671645,0.560789,0.7836701,0.2470563,-0.5755391,0.7795627,-0.7598379,0.5978112,0.2554767,-0.778728,-0.5740967,0.2529737,-0.7147231,-0.6864015,0.1342528,-0.2637761,-0.8708916,-0.4146928,-0.5119861,-0.844887,-0.1550363,0.5066584,-0.1233913,0.8532713,0.4585186,0.240002,0.8556634,-0.006012201,0.3005504,0.953747,-0.358997,0.2912444,0.8867344,-0.5354323,0.1232984,0.8355296,-0.1780787,0.2216599,0.9587258,0.8004743,-0.4642067,0.379148,-0.319111,-0.886772,0.3343707,0.7271144,-0.3170616,0.6089144,0.7449262,-0.4852336,0.4578574,0.60492,-0.659824,0.4457626,-0.6767589,0.6595462,-0.3271027,-0.650332,0.2587106,0.714239,-0.2117397,-0.8813842,0.4222892,0.350637,0.4896222,-0.7983257,0.5322508,-0.6701356,-0.5173271,0.4014531,0.4133251,-0.8173114,-0.01156663,0.8775089,-0.4794209,-0.6988916,0.7107026,0.08032673,-0.02035641,0.9461012,0.3232309,0.7030752,0.7110102,0.01223826,-0.7388097,0.3407473,0.581422,0.6723998,0.5042388,0.541869,-0.2950884,-0.9553673,0.01400822,0.04168939,-0.8810632,0.4711577,0.4936206,-0.8009204,-0.3389178,-0.3275603,0.1604688,-0.9311038,0.8791037,0.3990377,0.2606639,0.6587509,0.74515,-0.1039169,0.5032286,0.0130316,-0.8640552,0.7244085,-0.5953114,-0.3476159,0.9601285,-0.2089637,-0.1857082,0.7175717,0.6265324,0.3042172,-0.4538251,-0.6650506,0.5930857,-0.7264461,0.6858557,0.0433371,0.5532581,-0.2112562,0.8057768,-0.8078184,-0.04080444,0.5880175,-0.4710912,0.05429327,-0.8804121,0.3530505,-0.8564708,0.376581,0.7850185,-0.2807779,0.5521864,-0.2372885,-0.26381,0.9349324,-0.6395061,0.6482041,-0.4133564,-0.3689773,0.5580439,-0.743265,0.6547801,0.6505075,-0.3848416,0.3477357,0.58899,-0.7295004,0.8403373,0.3877118,-0.3788309,-0.7874866,0.4241862,-0.4471366,-0.6426535,0.5309209,-0.5523763,0.2343839,-0.07849419,-0.9689701,-0.9376816,-0.3076978,-0.1614788,-0.3696166,-0.914535,-0.1643453,-0.9638268,0.2665242,0.001678526,-0.9040262,0.2479953,-0.3481884,0.9741004,0.2083216,0.08792477,0.9435456,-0.2347877,0.2336584,0.8851453,0.2536137,-0.3901256,0.439505,-0.1717613,-0.8816652,-0.002838253,-0.9999585,-0.008667409,-0.003418087,-0.9740449,-0.226329,0.5194336,-0.8545018,-0.003936946,0.6574972,0.7350759,-0.1654119,0.5406304,0.2595111,-0.800233,0.254652,0.3074502,-0.9168571,0.8338357,-0.2307834,-0.501455,0.8153619,-0.5783466,-0.02646046,0.7970908,-0.5469279,-0.2559614,0.6888867,-0.4544357,-0.5647332,-0.005035698,-0.4125625,-0.9109154,0.4273279,0,-0.9040967,0.2855405,0.1006838,-0.9530633,0.6327449,-0.1781073,0.7535991,-0.2895632,0.5616392,0.7750578,-0.4191217,0.008697986,-0.9078884,-0.656147,-0.7355597,-0.1685918,-0.8591141,-0.4803104,-0.1767058,-0.778595,-0.5614539,-0.2802844,-0.8083927,-0.2212032,-0.5455002,-0.6202177,-0.1795768,0.7635983,-0.6575613,0.7350183,-0.1654127,-0.5406876,0.2586547,-0.8004716,0.2971643,0.5776652,0.7602608,-0.2206853,0.3231693,-0.9202497,-0.2861447,0.1193592,-0.9507233,-0.6822646,-0.4539173,-0.5731267,-0.5242235,-0.8515694,-0.00439471,0.8561003,-0.4925529,-0.1564731,0.6593473,-0.7371419,-0.1479289,-0.5122309,-0.844705,-0.1552196,-0.512269,-0.8446869,-0.1551914,0.5078098,-0.8473364,-0.155404,0.5103042,-0.8457359,-0.1559509,-0.000915576,-0.983329,-0.1818335,0.5537721,-0.8184351,-0.1532983,-0.5119314,-0.8448974,-0.1551603,-0.511835,-0.8449505,-0.1551893,-0.5032647,-0.8499038,-0.1561676,-0.5109808,-0.8454393,-0.1553421,-0.5079896,-0.8471783,-0.1556777,-0.5119242,-0.8448854,-0.1552497,0.4985033,-0.8527722,-0.1558014,0.5031719,-0.8501154,-0.1553127,0.5061598,-0.8484013,-0.1549761,0.5070836,-0.8478658,-0.1548871,0.5071087,-0.8478567,-0.1548549,-0.6354703,-0.7007204,-0.3242968,-0.6440231,-0.6907485,-0.3287869,-0.6204566,0.7137845,-0.3248776,-0.6123442,0.7226112,-0.3207299,0.6116334,-0.7233638,0.3203896,0.644716,0.6899148,0.3291791,0.6361237,0.6999405,0.3246999,0.6197342,-0.7145896,0.324486,0.7043817,-0.2654249,-0.6583282,0.3140133,-0.7020971,-0.6391052,-0.3139797,-0.7020901,-0.6391294,-0.7043817,-0.2654249,-0.6583282,-0.5679997,0.563086,-0.6002588,0.5679997,0.563086,-0.6002588,-0.0000610379,-0.4875101,0.8731174,0,0.01025426,0.9999474,-0.0000610392,-0.5212748,0.853389,0.9253403,-0.3759042,-0.04941046,0.7021751,0.7091333,-0.06387567,0.3293646,-0.9406669,-0.08163917,0,-0.997203,0.07474058,0,-0.9810776,0.1936152,-0.3288432,-0.9408121,-0.08206582,-0.9253147,-0.3759672,-0.0494107,-0.7021751,0.7091333,-0.06387567,0.003906369,0.6513945,0.7587292,0,0.9688472,0.2476593,0,0.4179857,0.9084537,0,-0.4874868,0.8731304,0.2179114,-0.5311361,0.8187852,0.3033314,-0.2976548,0.9052026,0.3211537,-0.8086372,0.4929159,0.6241264,-0.646833,0.4382618,0,-0.8730177,0.4876887,-0.1063271,-0.001648008,0.9943298,-0.7802526,0.01098686,0.6253679,-0.08023512,-0.5829787,0.808516,-0.6428029,-0.5628722,0.5195955,-0.05957269,0.5803762,0.8121666,-0.6243872,0.5794633,0.5237967,0.3703843,-0.00952202,0.9288298,-0.9981924,0.01510697,0.0581696,0.1082065,-0.9941285,0,-0.959479,0.2817804,0,-0.1082065,0.9941285,-8.27796e-7,0.959479,-0.2817804,0,0,0,-1,0,0,1,1.43924e-7,0,1,0.9594787,0.2817812,0,-0.9594789,-0.2817808,0,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,-1.26466e-7,0,-1,0.1082065,0.9941285,0,0,1,-3.26524e-7,-0.1082065,-0.9941285,0,0,-1,-3.49345e-7,0.1082066,-0.9941285,-0.00000110373,-0.959479,0.2817803,0,-0.1082065,0.9941285,0,0.9594789,-0.2817807,0,0,0,-1,0,0,1,0,0,1,0.9594787,0.2817811,0,-0.9594789,-0.2817807,0,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,-1,0.1082065,0.9941285,-5.51864e-7,0,1,-6.53048e-7,-0.1082066,-0.9941285,0,0,-1,6.53048e-7],"vertexPositionIndices":[0,1,2,3,0,2,4,5,6,7,4,6,6,3,2,7,6,2,5,4,1,0,5,1,5,0,6,6,0,3,2,1,4,7,2,4,8,9,10,11,8,10,12,13,14,12,15,13,13,16,14,17,16,13,16,10,9,17,10,16,17,15,18,13,15,17,18,10,17,11,10,18,11,18,15,9,19,16,20,19,9,14,21,12,21,19,20,19,14,16,21,14,19,8,15,12,8,11,15,8,20,9,20,8,21,8,12,21,22,23,24,25,23,22,26,27,28,29,27,26,26,30,31,32,30,26,33,26,28,32,26,33,34,33,35,32,33,34,30,34,36,32,34,30,30,37,31,36,37,30,22,38,25,35,38,22,39,38,40,41,39,40,29,40,27,41,40,29,42,29,43,41,29,42,44,23,45,24,23,44,29,44,45,26,44,29,44,31,37,26,31,44,38,46,25,47,48,49,48,50,49,51,50,52,50,51,49,53,52,48,52,50,48,47,49,54,54,49,51,53,48,54,48,47,54,53,54,52,52,54,51,55,56,57,58,59,60,60,59,61,62,55,63,56,55,62,64,57,62,57,56,62,64,58,57,57,58,60,63,55,59,59,55,61,55,57,61,61,57,60,64,62,63,64,63,58,58,63,59,65,66,67,67,66,68,68,66,69,66,65,69,68,69,70,70,69,71,67,68,72,72,68,70,65,73,69,69,73,71,72,65,67,65,72,73,73,74,71,72,74,73,70,74,72,71,74,70,75,76,77,77,76,78,78,76,79,76,75,79,79,80,78,78,80,81,79,75,80,80,75,82,78,81,77,77,81,83,75,77,82,82,77,83,81,80,84,84,80,85,82,86,80,80,86,85,83,81,87,87,81,84,82,83,86,86,83,87,88,89,90,89,88,91,89,91,92,92,91,93,94,92,95,95,92,93,94,88,90,88,94,95,88,95,91,91,95,93,96,97,98,97,96,99,100,101,102,101,100,103,104,105,106,104,106,107,101,107,106,103,107,101,104,100,102,105,104,102,108,100,109,103,100,108,109,104,110,100,104,109,110,107,111,104,107,110,111,103,108,107,103,111,98,96,108,109,98,108,97,109,110,98,109,97,111,97,110,99,97,111,96,111,108,111,96,99,102,101,106,105,102,106,112,113,114,115,113,114,116,117,118,119,120,121,121,120,122,116,118,123,124,116,125,121,126,127,121,122,126,125,116,123,119,127,118,118,127,123,127,119,121,122,124,126,126,124,125,125,113,115,113,125,123,127,112,123,112,113,123,126,112,127,112,126,114,115,114,125,125,114,126,116,124,117,119,118,120,120,118,117,122,120,124,124,120,117,128,129,130,131,128,130,132,133,134,133,135,134,136,135,137,137,135,133,138,135,136,135,138,134,132,139,137,132,137,133,138,132,134,139,132,138,137,139,136,139,138,136,140,141,142,141,140,143,143,144,141,145,146,147,146,145,148,148,140,146,143,140,148,142,145,147,141,145,142,145,144,149,144,145,141,143,149,144,148,149,143,146,140,142,147,146,142,145,149,148,150,151,152,151,150,153,154,151,153,152,151,154,153,155,154,154,155,156,150,157,153,153,157,155,152,154,158,158,154,156,150,152,157,157,152,158,156,159,158,158,159,157,157,159,155,159,156,155,160,161,162,161,160,163,164,163,165,161,163,164,166,162,167,160,162,166,166,164,165,167,164,166,168,162,161,162,168,169,164,168,161,170,168,164,169,167,162,171,167,169,167,170,164,171,170,167,169,172,171,171,172,170,172,168,170,168,172,169,173,174,175,176,173,175,177,176,175,178,176,177,175,174,179,177,175,179,174,173,179,179,173,180,180,173,176,178,180,176,181,182,183,182,181,184,185,186,187,188,185,187,186,184,182,184,186,185,185,189,190,188,189,185,185,181,184,190,181,185,189,191,190,192,191,189,183,190,191,181,190,183,187,186,191,192,187,191,191,182,183,186,182,191,193,194,195,194,196,197,198,199,200,199,201,200,195,194,197,198,193,195,202,193,198,200,202,198,196,199,197,201,199,196,197,203,195,204,203,197,195,203,205,198,195,205,199,205,206,198,205,199,206,197,199,204,197,206,203,206,204,205,206,203,207,208,209,210,211,212,213,214,215,216,217,218,219,220,216,208,221,222,208,223,221,207,224,208,217,225,219,219,226,217,219,218,226,227,228,229,229,230,227,231,213,229,213,212,229,229,212,211,211,232,229,233,234,235,233,235,236,237,238,239,240,238,237,239,238,240,239,241,237,237,242,240,219,242,237,240,242,219,233,223,208,233,243,214,224,244,245,215,212,213,245,208,224,243,215,214,224,207,244,207,233,208,244,207,245,245,207,208,233,207,234,246,236,247,248,247,236,246,247,248,235,216,248,235,248,236,248,233,246,220,233,248,248,216,220,217,235,225,217,216,235,220,243,233,217,226,218,216,218,219,249,220,219,214,231,222,213,231,214,220,250,215,210,250,220,215,250,210,212,215,210,220,215,243,236,246,233,214,222,223,233,214,223,251,227,252,227,253,254,253,255,254,254,252,227,252,256,251,249,232,211,222,221,223,257,258,259,260,258,257,259,258,260,261,228,251,262,261,251,251,256,262,222,231,261,228,261,231,229,228,231,227,251,228,262,259,261,262,257,259,260,208,259,259,208,222,259,222,261,235,219,225,263,264,241,241,264,237,219,237,264,265,241,239,239,266,265,240,266,239,263,241,265,232,263,230,229,232,230,230,253,227,264,249,219,210,249,211,263,232,264,265,255,253,253,263,265,253,230,263,249,210,220,232,249,264,267,268,269,270,271,272,273,274,275,276,277,278,278,273,276,273,275,276,278,272,273,278,279,272,271,273,272,280,281,274,271,280,273,281,280,270,272,281,270,271,270,280,280,274,273,277,282,278,283,284,285,286,284,287,287,288,289,288,290,291,288,287,290,286,287,289,284,290,287,291,286,289,291,292,282,286,291,282,293,285,286,293,286,282,282,277,293,285,284,286,291,289,288,294,285,268,275,274,295,278,282,279,279,282,292,295,296,275,297,298,285,285,298,283,276,275,268,268,285,293,296,299,300,299,301,300,296,302,299,295,302,296,268,275,269,268,267,294,301,303,304,304,303,297,267,301,304,301,267,300,296,300,275,275,300,269,267,269,300,297,285,304,304,285,294,294,267,304,276,268,277,293,277,268,305,306,307,306,308,307,309,308,306,310,311,312,313,312,311,314,312,313,315,316,317,318,315,317,319,320,321,320,319,322,322,315,318,320,322,318,318,321,320,317,321,318,316,315,322,319,316,322,320,315,322,315,320,318,323,324,325,326,323,325,327,323,326,328,323,327,329,330,331,332,330,329,333,323,328,334,333,328,324,323,333,335,324,333,335,336,337,331,338,329,339,338,331,338,339,340,325,341,326,340,341,325,341,327,326,342,327,341,327,334,328,342,334,327,324,340,325,335,340,324,343,344,345,345,346,347,343,345,347,348,343,347,349,348,347,350,348,349,349,346,351,347,346,349,346,352,351,353,354,355,355,354,356,354,353,357,358,354,357,357,353,359,353,355,359,354,360,356,360,354,358,373,364,363,370,367,369,380,365,377,372,361,371,384,365,371,382,362,372,382,366,380,384,361,374,366,371,365,364,369,363,363,383,373,373,384,374,368,381,379,381,380,379,364,381,370,376,382,381,367,383,369,383,377,384,368,378,367,379,377,378,361,375,374,374,376,373,373,376,364,370,368,367,380,366,365,372,362,361,384,377,365,382,375,362,382,372,366,384,371,361,366,372,371,364,370,369,363,369,383,373,383,384,368,370,381,381,382,380,364,376,381,376,375,382,367,378,383,383,378,377,368,379,378,379,380,377,361,362,375,374,375,376],"vertexPositions":[-0.1903401,-0.3730064,3.239235,-0.462193,-0.3730064,3.239235,-0.462193,-0.3729822,3.621359,-0.1903401,-0.3729822,3.621359,-0.462193,-0.06451034,3.239235,-0.1903187,-0.06451034,3.239235,-0.1903187,-0.06448608,3.621359,-0.462193,-0.06448608,3.621359,-0.3263521,0.04769241,1.598146,-0.8330569,-0.01221668,2.175258,0.1802459,-0.01350224,2.175258,0.3116623,0.04689192,1.876569,-0.3272926,-0.898873,1.598125,-0.01330864,-0.8992853,2.175258,-0.6412764,-0.8984849,2.175258,0.127641,-0.8994554,1.854846,-0.8337409,-0.7000329,2.175258,0.1795622,-0.7013185,2.175258,0.3109354,-0.7014881,1.876569,-0.9651145,-0.6998629,1.876569,-0.9643877,0.04849272,1.876569,-0.782205,-0.8982909,1.854846,-0.6791751,-0.991405,2.749412,-0.1532537,-0.6433496,3.372427,-0.6189818,-0.6433738,3.372427,-0.09308177,-0.9913809,2.749412,-1.099844,0.3377307,2.729563,0.1671002,-0.07229608,2.47303,-0.8207021,-0.07229608,2.47303,0.4498758,0.3377307,2.729563,-0.9707577,-0.4646166,3.363826,-0.9707577,0.1755386,3.364014,-1.111857,-0.7598934,2.727106,-0.8108689,-0.700397,2.446974,-0.8562705,-0.991405,2.749412,-0.6310377,-0.9009833,2.490566,-0.7659593,-0.6433496,3.372427,-0.7659806,0.1755386,3.364014,-0.02254277,-0.9009833,2.490566,0.2063026,-0.9913809,2.749412,0.1572674,-0.7003725,2.446974,0.4618886,-0.7598934,2.727084,0.3207894,-0.4646166,3.363826,0.3207894,0.1755386,3.364014,-0.6189818,0.1755386,3.364014,-0.1532537,0.1755386,3.364014,0.02920711,-0.9913809,2.749412,-1.549177,-0.2752352,-0.872963,-1.135904,-0.7266161,-0.9312593,-1.444116,-0.2723246,-0.1826328,-1.030844,-0.7236809,-0.2409291,-1.050851,0.2015159,-0.2409291,-0.6375572,-0.2498404,-0.2992256,-0.742639,-0.2527753,-0.9895558,-1.155912,0.1986054,-0.9312593,-0.8240793,-0.5995939,-0.7058004,-0.821429,0.08691233,-0.8369522,-1.421993,0.09074467,-0.6876392,-2.217202,-1.120634,-1.103441,-1.918245,-1.465803,-1.112522,-2.213056,-1.123763,-0.8858761,-1.914099,-1.468932,-0.894957,-0.8267297,0.09093856,-1.115604,-0.8320093,-0.5935545,-1.122811,-1.429923,0.09678411,-1.104649,-0.2910398,-0.2466388,0.6761721,-0.9772558,-0.4391245,0.1502128,-0.9040021,0.4266487,0.7597948,-1.484922,-0.2813475,0.8487702,-0.8723233,-0.9423861,0.764564,-1.05953,-0.4351467,1.856388,-0.7164325,-0.8090822,1.807984,-0.7337681,-0.04178333,1.80811,-0.3906707,-0.4156944,1.759685,-0.6991612,-0.4246929,1.9785,-1.483939,-0.2777092,0.7974505,-0.8297438,-0.4350011,1.12057,-0.9109494,0.4178439,0.7084545,-0.3073706,-0.2449411,0.6273516,-0.8802322,-0.9318353,0.7184937,-0.9781105,-0.5056796,0.1362584,-0.7688238,-0.253503,0.1052253,-1.198064,-0.2654605,0.1672912,-0.9887557,-0.01328396,0.1362584,-0.8262169,-0.2551038,-0.2719624,-1.035525,-0.5072804,-0.2409291,-1.255457,-0.2670614,-0.2098959,-1.04617,-0.01488476,-0.2409291,-2.405285,0.1122828,1.227062,-2.292979,-0.5914688,1.700306,-2.285881,0.1812387,1.689434,-2.411227,-0.5374777,1.236204,-1.655349,-0.6043723,1.469599,-1.875067,-0.5483438,1.042216,-1.646628,0.1683114,1.458144,-1.867713,0.1014167,1.032574,-1.729287,-0.3180449,2.515581,-1.526177,-0.07928115,2.439476,-1.528785,-0.3219499,2.443038,-1.726936,-0.07506108,2.512124,-1.484046,-0.5978719,1.918809,-2.292957,-0.5914929,1.700265,-1.655349,-0.6044207,1.469578,-2.121654,-0.5849684,2.149515,-1.475346,0.1748598,1.907374,-1.646649,0.1683114,1.458144,-2.285881,0.181239,1.689434,-2.114601,0.1878119,2.138664,-1.801749,-0.3206643,2.325154,-1.601376,-0.3247153,2.252654,-1.59864,-0.08190101,2.249051,-1.799526,-0.07782614,2.321739,-1.526177,-0.07928115,2.439476,-1.726935,-0.07506108,2.512124,-1.528785,-0.3219499,2.443038,-1.729287,-0.3180449,2.515581,-1.853371,-0.1850807,3.185582,-1.428513,-0.1862449,3.411459,-1.563371,0.2011278,3.115602,-1.165402,0.2207258,2.97131,-1.063334,-0.1936422,3.27935,-0.9794149,-0.2041934,2.796108,-1.173952,-0.6170332,2.98341,-1.64682,-0.07200473,2.722212,-1.571343,-0.5813303,3.12689,-1.649043,-0.3148432,2.725627,-1.44867,-0.3188937,2.653126,-1.445933,-0.07605528,2.649544,-0.3269506,-0.9020993,3.722706,-0.6890292,-0.6051484,3.642687,-0.3269506,-0.6692053,3.434118,0.04423397,-0.6056577,3.642374,0.8958532,-0.2524116,-0.8730254,0.7907499,-0.2524116,-0.1826744,0.4924558,-0.7151677,-0.9313219,0.3873526,-0.7151677,-0.2409707,-0.01604467,-0.2524116,-0.2992671,0.3873526,0.2103446,-0.2409707,0.08905869,-0.2524116,-0.9896183,0.4924558,0.2103207,-0.9313219,1.160204,-1.540314,-1.083946,0.8049436,0.06755709,-1.112605,1.486734,-1.228786,-1.082551,0.1518806,-0.5554988,-1.115396,0.2039726,0.1264475,-1.123998,0.7972483,0.07543981,-0.695616,1.156184,-1.53619,-0.8664023,1.482716,-1.224687,-0.8650069,0.1441854,-0.547616,-0.698386,0.1988214,0.131735,-0.8453665,0.240923,0.4313055,0.7596068,0.3345266,-0.4321392,0.150296,-0.3559647,-0.2603185,0.6761925,0.8383027,-0.2587905,0.8487911,0.241479,-0.9381418,0.7647725,0.4167147,-0.4250568,1.85645,0.08253109,-0.8092517,1.80815,0.08180427,-0.04171061,1.808047,-0.2523794,-0.4259057,1.759747,0.05621802,-0.4254933,1.978562,0.6020263,-0.2524116,-0.2099375,0.3365138,-0.006153047,0.1362372,0.5512087,-0.2524116,0.16725,0.3873526,-0.006153047,-0.2409707,0.1218406,-0.2524116,0.1052049,0.1726578,-0.2524116,-0.272004,0.3873526,-0.4986699,-0.2409707,0.3365138,-0.4986699,0.1362372,0.2493878,0.4226951,0.7084545,0.8372555,-0.2566804,0.7974305,-0.3396553,-0.2566804,0.6273516,0.2478702,-0.9274454,0.7184724,0.186651,-0.4321392,1.12057,1.94791,-0.5686691,1.350798,1.437122,-0.5580456,1.100097,1.445993,0.09178751,1.101638,1.958106,0.08113974,1.352986,1.179399,0.1567174,1.501882,1.788427,0.1440565,1.800799,1.168839,-0.6160629,1.500049,1.776286,-0.6286755,1.798196,0.941981,-0.1075621,2.459409,1.129721,-0.3545725,2.55255,0.9386044,-0.350304,2.458743,1.133291,-0.1114187,2.553257,1.22713,-0.1126072,2.371933,1.223325,-0.3554459,2.37112,1.555071,-0.6261529,2.226223,1.56717,0.1465791,2.228826,0.9581627,0.1592398,1.929931,1.035755,-0.1086294,2.278,1.032442,-0.3514678,2.277439,0.9476243,-0.6135405,1.928076,0.9084646,0.1569114,3.14043,1.179655,-0.2399449,3.234114,1.02992,-0.1104003,2.753516,0.8969864,-0.6255952,3.138182,1.026115,-0.3532385,2.752703,0.8385455,-0.1064225,2.659583,0.8352324,-0.3492849,2.659,0.3553967,-0.22253,2.75264,0.5177431,-0.645387,2.95215,0.5300339,0.1924203,2.954542,1.133291,-0.1114187,2.553257,1.129721,-0.3545725,2.55255,0.9419815,-0.1075622,2.459409,0.9386044,-0.350304,2.458743,-0.5137078,-0.8580765,4.454235,-0.8303849,-0.6609101,4.425574,-0.7896006,-0.6663673,4.320626,-0.001103281,-0.3905668,4.968114,0.1558991,0.1232214,4.975674,-0.3135268,0.1207958,5.007102,-0.7417197,0.1215721,4.965738,-0.8202529,-0.5243074,4.874282,-0.3218632,-0.4617545,5.016018,-0.1727694,-0.8103677,4.636534,-0.0818597,-1.235529,4.671006,0.1520306,-1.005473,4.604778,0.1513462,-0.7001301,4.535482,-0.07048803,-0.7083765,4.798618,-1.793499,0.1371194,4.252062,-1.051493,-0.3691985,4.673966,-0.9784525,-1.222019,4.933562,-0.9424777,-1.070863,4.731658,-0.08051306,-0.796543,4.561243,0.5623963,-0.4603231,3.628814,-0.3218632,0.6871683,3.955206,-0.8885689,0.5142803,4.406599,-0.3276132,0.7785842,4.53523,0.2448638,0.5142803,4.406599,-0.9828777,0.1618107,4.774958,0.2672659,0.3326611,4.747611,-0.418352,-0.8191482,4.674735,-0.3260742,-0.9617662,4.39987,-0.1476747,-0.8633885,4.45013,-0.3478558,-1.028466,4.574182,0.3225427,-0.3937927,4.413098,0.9264199,0.3327095,4.127574,0.3628779,-0.2233061,4.108078,0.1829822,-0.5776193,4.17777,0.4410051,-0.2103298,4.309478,0.9520707,0.09030777,4.685962,-1.256141,-1.818419,5.909682,-0.5454076,-1.010906,4.44409,-1.314774,-0.6634569,3.68657,-0.4808965,-1.167883,4.655179,-0.9090253,-1.124588,3.628002,-0.246985,-1.397939,4.721366,0.2983666,-0.3193792,4.790555,-0.3040789,-0.6849465,5.554618,-0.7776942,0.4941731,4.035786,-0.6152626,0.08713066,3.580914,0.1339679,0.4941731,4.035786,-0.02769434,0.1764847,3.580914,0.2477922,-0.004019021,3.778398,-0.8998978,-0.004019021,3.778398,-0.946133,-0.2377377,4.053822,-0.7518301,-0.485718,3.332918,-1.115448,-0.4084183,4.25223,-0.8146525,-0.6246735,4.176354,-1.073253,0.1433771,4.491034,-0.9537001,0.000710607,4.117578,0.4295263,0.1433771,4.491034,0.4077663,-0.2413759,4.535918,0.3015514,0.000734878,4.117578,0.2484122,-0.2377134,4.053822,-0.3262666,-0.8612301,3.853274,-0.3262666,-0.8821861,3.734559,-0.2582713,-0.8199481,3.849878,0.4689859,0.1287757,3.939274,0.3497319,0.02375257,3.79883,0.2477922,-0.004019021,3.778398,0.1368538,-0.30308,3.739202,0.2484122,-0.2377134,4.053822,0.1080394,-0.5970231,3.828882,0.03532046,-0.5875394,3.653162,-0.3262666,-0.650141,3.446966,-0.02756607,-0.2663337,3.536566,-0.02769434,0.1764847,3.580914,0.4314287,-0.07064676,4.162374,0.3015514,0.000734878,4.117578,-0.6153908,-0.2663337,3.536566,-0.8146525,-0.6246735,4.176354,-0.946133,-0.2377377,4.053822,-0.7594401,-0.5943551,3.829238,-0.788083,-0.30308,3.739202,-1.083577,-0.07064676,4.162374,-1.121155,0.1287757,3.939274,-1.00188,0.02375257,3.79885,-0.9537001,0.000710607,4.117578,-0.8998978,-0.004019021,3.778398,-0.6152626,0.08713066,3.580914,-0.6789828,-0.5875394,3.653162,-0.3940694,-0.8195357,3.849942,0.1829822,-0.5776193,4.17777,0.1381579,-0.6687445,4.320311,-0.7896006,-0.6663673,4.320626,-0.8303849,-0.6609101,4.425574,-0.1476747,-0.8633885,4.45013,-0.2589767,-0.9063921,4.320914,-0.3260742,-0.9617662,4.39987,0.1513462,-0.7001301,4.535482,-0.5137078,-0.8580765,4.454235,-0.3935565,-0.9063921,4.320914,-0.3307554,-0.8846602,3.850106,-0.4028975,-0.9279305,4.318022,-0.4034533,-0.8408805,3.84613,-0.7689306,-0.6157234,3.825926,-0.7995617,-0.6875417,4.31775,-0.3218846,-0.8846845,3.850106,-0.2489943,-0.8413413,3.84609,-0.2494432,-0.9277849,4.31777,0.1178082,-0.6181489,3.825134,0.1480334,-0.6899913,4.317439,1.168839,-0.6160629,1.500049,0.9476243,-0.6135405,1.928076,0.9581627,0.1592398,1.929931,1.179399,0.1567174,1.501882,1.555071,-0.6261529,2.226223,1.788427,0.1440565,1.800799,1.56717,0.1465791,2.228826,1.776286,-0.6286755,1.798196,0.1442926,-0.6916405,2.175174,-0.02955394,-0.8924942,2.175112,-0.6240265,-0.8924942,2.175112,-0.7978945,-0.6916405,2.175174,-0.8060598,-0.08461749,2.175341,0.1524578,-0.08461749,2.175341,-0.6189818,-0.6433738,3.372427,-0.7659806,0.1755386,3.364014,-0.7659593,-0.6433496,3.372427,-0.6189818,0.1755386,3.364014,0.1572674,-0.7003725,2.446974,0.1671002,-0.07229608,2.47303,-0.02254277,-0.9009833,2.490566,0.2063026,-0.9913809,2.749412,0.02920711,-0.9913809,2.749412,-0.6791751,-0.991405,2.749412,-0.8562705,-0.991405,2.749412,-0.6310377,-0.9009833,2.490566,-0.8108689,-0.700397,2.446974,-0.8207021,-0.07229608,2.47303,0.3207894,0.1755386,3.364014,0.4498758,0.3377307,2.729563,-0.1532537,0.1755386,3.364014,-0.1532537,-0.6433496,3.372427,0.1160131,-0.6433496,3.372427,0.3207894,-0.4646166,3.363826,0.2063026,-0.9913809,2.749412,0.4618886,-0.7598934,2.727084,0.02920711,-0.9913809,2.749412,-0.09308177,-0.9913809,2.749412,0.7317755,-0.2321591,3.412795,0.3838898,-0.2249312,3.242046,0.8969864,-0.6255952,3.138182,0.5177431,-0.645387,2.95215,0.9084646,0.1569114,3.14043,0.5300339,0.1924203,2.954542,1.179655,-0.2399449,3.234114,0.3553967,-0.22253,2.75264,2.653941,-1.199452,-1.265355,2.653941,-1.199452,-0.9999758,-3.334264,-1.199452,-1.265355,-3.334264,-1.199452,-0.9999758,2.653941,0.6882348,-1.265355,2.653941,0.6882348,-0.9999758,-3.334264,0.6882346,-1.265355,-3.334264,0.6882346,-0.9999758,-3.611453,-0.2556086,-1.265355,-3.611453,-0.2556086,-0.9999758,2.93113,-0.2556084,-1.265355,2.93113,-0.2556084,-0.9999758,-1.715874,-1.023297,-1.265355,1.035551,-1.023297,-1.265355,1.035551,-1.023297,-0.9999758,-1.715874,-1.023297,-0.9999758,1.03555,0.51208,-1.265355,-1.715874,0.5120799,-1.265355,-1.715874,0.51208,-0.9999758,1.03555,0.5120801,-0.9999758,-1.715874,-0.2556086,-0.9999758,1.035551,-0.2556085,-0.9999758,-1.715874,-0.2556086,-1.265355,1.035551,-0.2556085,-1.265355],"vertexColors":[0.6666667,0.5725491,0.4117647,0.9333333,0.7882353,0.5333334,0.3098039,0.2862745,0.2039216,0.3294118,0.3019608,0.2156863,0.6666667,0.5725491,0.4117647,0.3098039,0.2862745,0.2039216,0.6980392,0.6,0.4078431,0.427451,0.3803921,0.2862745,0.2862745,0.2666667,0.1843137,0.2705882,0.254902,0.172549,0.6980392,0.6,0.4078431,0.2862745,0.2666667,0.1843137,0.2862745,0.3333333,0.2941176,0.3294118,0.372549,0.3411765,0.3098039,0.3529412,0.3215686,0.2705882,0.3137255,0.2745098,0.2862745,0.3333333,0.2941176,0.3098039,0.3529412,0.3215686,0.427451,0.4745098,0.4509804,0.6980392,0.7411765,0.6431373,0.9333333,0.9764706,0.8392157,0.6666667,0.7098039,0.6470589,0.427451,0.4745098,0.4509804,0.9333333,0.9764706,0.8392157,0.427451,0.3843137,0.2862745,0.6666667,0.5725491,0.4117647,0.2862745,0.2666667,0.1843137,0.2862745,0.2666667,0.1843137,0.6666667,0.5725491,0.4117647,0.3294118,0.3019608,0.2156863,0.3098039,0.2862745,0.2039216,0.9333333,0.7882353,0.5333334,0.6980392,0.6,0.4078431,0.2705882,0.254902,0.172549,0.3098039,0.2862745,0.2039216,0.6980392,0.6,0.4078431,0.05882352,0.05098038,0.06274509,0.2,0.1568627,0.1921569,0.2,0.1568627,0.1882353,0.07450979,0.06274509,0.07843136,0.05882352,0.05098038,0.06274509,0.2,0.1568627,0.1882353,0.06274509,0.05490195,0.06666666,0.1333333,0.1098039,0.1372549,0.1333333,0.1098039,0.1411765,0.06274509,0.05490195,0.06666666,0.06666666,0.05882352,0.07450979,0.1333333,0.1098039,0.1372549,0.1333333,0.1098039,0.1372549,0.1686275,0.1333333,0.1686275,0.1333333,0.1098039,0.1411765,0.1686275,0.1333333,0.1647059,0.1686275,0.1333333,0.1686275,0.1333333,0.1098039,0.1372549,0.1686275,0.1333333,0.1686275,0.2,0.1568627,0.1882353,0.2,0.1568627,0.1921569,0.1686275,0.1333333,0.1647059,0.2,0.1568627,0.1882353,0.1686275,0.1333333,0.1686275,0.1686275,0.1333333,0.1647059,0.06666666,0.05882352,0.07450979,0.06274509,0.05490195,0.07058823,0.1333333,0.1098039,0.1372549,0.06666666,0.05882352,0.07450979,0.1686275,0.1333333,0.1647059,0.06274509,0.05490195,0.07058823,0.2,0.1568627,0.1882353,0.1686275,0.1333333,0.1647059,0.07450979,0.06274509,0.07843136,0.2,0.1568627,0.1882353,0.06274509,0.05490195,0.07058823,0.07450979,0.06274509,0.07843136,0.06274509,0.05490195,0.07058823,0.06666666,0.05882352,0.07450979,0.2,0.1568627,0.1921569,0.07450979,0.06274509,0.08235293,0.1686275,0.1333333,0.1686275,0.07843136,0.06274509,0.0862745,0.07450979,0.06274509,0.08235293,0.2,0.1568627,0.1921569,0.1333333,0.1098039,0.1411765,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.06666666,0.07450979,0.06274509,0.08235293,0.07450979,0.06274509,0.08235293,0.07843136,0.06274509,0.0862745,0.07450979,0.06274509,0.08235293,0.1333333,0.1098039,0.1411765,0.1686275,0.1333333,0.1686275,0.07450979,0.06274509,0.08235293,0.1333333,0.1098039,0.1411765,0.07450979,0.06274509,0.08235293,0.05882352,0.05098038,0.06274509,0.06666666,0.05882352,0.07450979,0.06274509,0.05490195,0.06666666,0.05882352,0.05098038,0.06274509,0.07450979,0.06274509,0.07843136,0.06666666,0.05882352,0.07450979,0.05882352,0.05098038,0.06274509,0.07843136,0.06274509,0.0862745,0.2,0.1568627,0.1921569,0.07843136,0.06274509,0.0862745,0.05882352,0.05098038,0.06274509,0.07450979,0.06274509,0.08235293,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.07450979,0.06274509,0.08235293,0.07450979,0.06274509,0.08235293,0.1294118,0.1058824,0.1372549,0.1294118,0.1058824,0.1372549,0.07058823,0.06274509,0.07843136,0.1294118,0.1058824,0.1372549,0.07450979,0.06274509,0.08235293,0.0980392,0.07843136,0.1019608,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.09411764,0.07843136,0.09411764,0.05882352,0.05098038,0.06274509,0.0980392,0.07843136,0.1019608,0.0980392,0.07843136,0.1019608,0.1372549,0.1098039,0.1411765,0.1921569,0.1490196,0.1843137,0.07843136,0.06666666,0.0862745,0.1372549,0.1098039,0.1411765,0.0980392,0.07843136,0.1019608,0.06274509,0.05490195,0.07058823,0.0980392,0.07843136,0.1019608,0.06274509,0.05490195,0.06666666,0.07843136,0.06666666,0.0862745,0.0980392,0.07843136,0.1019608,0.06274509,0.05490195,0.07058823,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.07058823,0.06274509,0.05490195,0.06666666,0.07843136,0.06666666,0.0862745,0.06274509,0.05490195,0.07058823,0.07450979,0.06274509,0.08235293,0.1372549,0.1098039,0.1411765,0.07450979,0.06274509,0.08235293,0.1098039,0.09019607,0.1215686,0.07843136,0.06666666,0.0862745,0.07450979,0.06274509,0.08235293,0.1372549,0.1098039,0.1411765,0.1372549,0.1098039,0.1411765,0.09019607,0.07450979,0.1019608,0.1921569,0.1490196,0.1843137,0.1098039,0.09019607,0.1215686,0.09019607,0.07450979,0.1019608,0.1372549,0.1098039,0.1411765,0.07450979,0.06274509,0.08235293,0.05882352,0.05098038,0.06274509,0.07058823,0.06274509,0.07843136,0.06274509,0.05490195,0.06666666,0.05882352,0.05098038,0.06274509,0.07450979,0.06274509,0.08235293,0.05490195,0.05098038,0.05882352,0.05882352,0.05098038,0.06274509,0.05490195,0.05098038,0.05882352,0.06274509,0.05490195,0.06666666,0.05490195,0.05098038,0.05882352,0.05490195,0.05098038,0.05882352,0.09411764,0.07843136,0.09411764,0.05490195,0.05098038,0.05882352,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.05490195,0.05098038,0.05882352,0.09411764,0.07843136,0.09411764,0.1176471,0.09411764,0.1176471,0.09411764,0.07843136,0.09411764,0.1137255,0.09411764,0.1176471,0.06274509,0.05490195,0.06666666,0.09411764,0.07843136,0.09411764,0.1176471,0.09411764,0.1176471,0.2117647,0.1647059,0.2,0.1294118,0.1058824,0.1372549,0.2156863,0.1686275,0.2039216,0.1294118,0.1058824,0.1372549,0.1294118,0.1058824,0.1372549,0.2117647,0.1647059,0.2,0.09411764,0.07843136,0.09411764,0.2117647,0.1647059,0.2,0.2156863,0.1686275,0.2039216,0.0980392,0.07843136,0.1019608,0.2117647,0.1647059,0.2,0.09411764,0.07843136,0.09411764,0.345098,0.3921568,0.3607843,0.345098,0.3921568,0.3607843,0.345098,0.3921568,0.3607843,0.0980392,0.07843136,0.1019608,0.1921569,0.1490196,0.1843137,0.2117647,0.1647059,0.2,0.05882352,0.05098038,0.06274509,0.06666666,0.05490195,0.07058823,0.07058823,0.06274509,0.07843136,0.1490196,0.1176471,0.07058823,0.1137255,0.09411764,0.05098038,0.2980392,0.2196078,0.1294118,0.1137255,0.09411764,0.05098038,0.1647059,0.1294118,0.07843136,0.2980392,0.2196078,0.1294118,0.4196078,0.3058823,0.172549,0.1647059,0.1294118,0.07843136,0.1764706,0.1372549,0.08235293,0.1647059,0.1294118,0.07843136,0.4196078,0.3058823,0.172549,0.2980392,0.2196078,0.1294118,0.1176471,0.09411764,0.05490195,0.1764706,0.1372549,0.08235293,0.1137255,0.09411764,0.05098038,0.1764706,0.1372549,0.08235293,0.1647059,0.1294118,0.07843136,0.1137255,0.09411764,0.05098038,0.1490196,0.1176471,0.07058823,0.2980392,0.2196078,0.1294118,0.2627451,0.1960784,0.1098039,0.2627451,0.1960784,0.1098039,0.2980392,0.2196078,0.1294118,0.4196078,0.3058823,0.172549,0.1176471,0.09411764,0.05490195,0.1137255,0.09411764,0.05098038,0.2627451,0.1960784,0.1098039,0.2627451,0.3058823,0.2666667,0.3411765,0.3843137,0.3607843,0.6117647,0.654902,0.5647059,0.1176471,0.09411764,0.05490195,0.2627451,0.1960784,0.1098039,0.1764706,0.1372549,0.08235293,0.1764706,0.1372549,0.08235293,0.2627451,0.1960784,0.1098039,0.4196078,0.3058823,0.172549,0.3490196,0.2588235,0.145098,0.3647059,0.2666667,0.1490196,0.345098,0.254902,0.145098,0.1294118,0.1019608,0.05882352,0.1333333,0.1058824,0.06274509,0.2196078,0.1647059,0.1019608,0.2196078,0.1647059,0.1019608,0.1333333,0.1058824,0.06274509,0.2156863,0.1647059,0.1019608,0.1254902,0.0980392,0.05882352,0.3490196,0.2588235,0.145098,0.1254902,0.1019608,0.05882352,0.3647059,0.2666667,0.1490196,0.3490196,0.2588235,0.145098,0.1254902,0.0980392,0.05882352,0.1215686,0.0980392,0.05882352,0.345098,0.254902,0.145098,0.1254902,0.0980392,0.05882352,0.345098,0.254902,0.145098,0.3647059,0.2666667,0.1490196,0.1254902,0.0980392,0.05882352,0.1215686,0.0980392,0.05882352,0.1294118,0.1019608,0.05882352,0.345098,0.254902,0.145098,0.345098,0.254902,0.145098,0.1294118,0.1019608,0.05882352,0.2196078,0.1647059,0.1019608,0.1254902,0.1019608,0.05882352,0.3490196,0.2588235,0.145098,0.1333333,0.1058824,0.06274509,0.1333333,0.1058824,0.06274509,0.3490196,0.2588235,0.145098,0.2156863,0.1647059,0.1019608,0.3490196,0.2588235,0.145098,0.345098,0.254902,0.145098,0.2156863,0.1647059,0.1019608,0.2156863,0.1647059,0.1019608,0.345098,0.254902,0.145098,0.2196078,0.1647059,0.1019608,0.1215686,0.0980392,0.05882352,0.1254902,0.0980392,0.05882352,0.1254902,0.1019608,0.05882352,0.1215686,0.0980392,0.05882352,0.1254902,0.1019608,0.05882352,0.1294118,0.1019608,0.05882352,0.1294118,0.1019608,0.05882352,0.1254902,0.1019608,0.05882352,0.1333333,0.1058824,0.06274509,0.06274509,0.05490195,0.06666666,0.05882352,0.05098038,0.06274509,0.0980392,0.08235293,0.0980392,0.0980392,0.08235293,0.0980392,0.05882352,0.05098038,0.06274509,0.1137255,0.09411764,0.1176471,0.1137255,0.09411764,0.1176471,0.05882352,0.05098038,0.06274509,0.07843136,0.06666666,0.09019607,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.07843136,0.06666666,0.09019607,0.1137255,0.09411764,0.1176471,0.07843136,0.06666666,0.09019607,0.1921569,0.1490196,0.1843137,0.1921569,0.1490196,0.1843137,0.07843136,0.06666666,0.09019607,0.1019608,0.08235293,0.1137255,0.0980392,0.08235293,0.0980392,0.1137255,0.09411764,0.1176471,0.1882353,0.1490196,0.1764706,0.1882353,0.1490196,0.1764706,0.1137255,0.09411764,0.1176471,0.1921569,0.1490196,0.1843137,0.06274509,0.05490195,0.06666666,0.09411764,0.07843136,0.0980392,0.07843136,0.06666666,0.09019607,0.07843136,0.06666666,0.09019607,0.09411764,0.07843136,0.0980392,0.1019608,0.08235293,0.1137255,0.1882353,0.1490196,0.1764706,0.06274509,0.05490195,0.06666666,0.0980392,0.08235293,0.0980392,0.06274509,0.05490195,0.06666666,0.1882353,0.1490196,0.1764706,0.09411764,0.07843136,0.0980392,0.4196078,0.4666666,0.427451,0.8980392,0.9411765,0.8235294,0.4666666,0.509804,0.4901961,0.8509804,0.8941177,0.7647059,0.8980392,0.9411765,0.8235294,0.4196078,0.4666666,0.427451,0.1921569,0.1490196,0.1843137,0.1960784,0.1568627,0.1882353,0.1882353,0.1490196,0.1764706,0.1019608,0.08235293,0.1137255,0.1960784,0.1568627,0.1882353,0.1921569,0.1490196,0.1843137,0.1294118,0.1058824,0.1333333,0.1294118,0.1058824,0.1372549,0.2039216,0.1607843,0.1921569,0.2039216,0.1607843,0.1921569,0.1294118,0.1058824,0.1372549,0.07450979,0.06274509,0.08235293,0.07450979,0.06274509,0.08235293,0.1294118,0.1058824,0.1372549,0.07058823,0.05882352,0.07843136,0.1294118,0.1058824,0.1372549,0.1294118,0.1058824,0.1333333,0.07058823,0.05882352,0.07843136,0.07058823,0.05882352,0.07843136,0.06274509,0.05490195,0.06666666,0.07450979,0.06274509,0.08235293,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.06666666,0.06274509,0.05490195,0.07058823,0.07058823,0.05882352,0.07843136,0.1294118,0.1058824,0.1333333,0.06274509,0.05490195,0.06666666,0.06274509,0.05490195,0.06666666,0.1294118,0.1058824,0.1333333,0.09411764,0.07843136,0.1019608,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.07058823,0.2039216,0.1607843,0.1921569,0.2039216,0.1607843,0.1921569,0.06274509,0.05490195,0.07058823,0.1607843,0.1254902,0.1529412,0.1294118,0.1058824,0.1333333,0.2039216,0.1607843,0.1921569,0.09411764,0.07843136,0.1019608,0.09411764,0.07843136,0.1019608,0.2039216,0.1607843,0.1921569,0.1607843,0.1254902,0.1529412,0.06274509,0.05490195,0.07058823,0.06274509,0.05490195,0.06666666,0.07058823,0.06274509,0.07843136,0.07058823,0.06274509,0.07843136,0.06274509,0.05490195,0.06666666,0.06666666,0.05882352,0.07450979,0.09411764,0.07843136,0.1019608,0.1176471,0.09411764,0.1215686,0.06274509,0.05490195,0.06666666,0.06274509,0.05490195,0.06666666,0.1176471,0.09411764,0.1215686,0.06666666,0.05882352,0.07450979,0.1607843,0.1254902,0.1529412,0.06274509,0.05490195,0.07058823,0.1921569,0.1529412,0.1843137,0.1921569,0.1529412,0.1843137,0.06274509,0.05490195,0.07058823,0.07058823,0.06274509,0.07843136,0.09411764,0.07843136,0.1019608,0.1607843,0.1254902,0.1529412,0.1176471,0.09411764,0.1215686,0.1176471,0.09411764,0.1215686,0.1607843,0.1254902,0.1529412,0.1921569,0.1529412,0.1843137,0.07058823,0.07450979,0.07058823,0.06666666,0.07058823,0.06666666,0.1058824,0.1098039,0.0980392,0.06666666,0.07058823,0.06666666,0.07058823,0.07450979,0.07058823,0.05882352,0.06274509,0.05882352,0.06666666,0.07058823,0.06666666,0.05882352,0.06274509,0.05882352,0.04705882,0.05098038,0.04313725,0.04705882,0.05098038,0.04313725,0.05882352,0.06274509,0.05882352,0.04313725,0.04705882,0.04313725,0.06666666,0.07058823,0.06666666,0.04705882,0.05098038,0.04313725,0.05490195,0.05882352,0.05490195,0.05490195,0.05882352,0.05490195,0.04705882,0.05098038,0.04313725,0.04313725,0.04705882,0.04313725,0.06666666,0.07058823,0.06666666,0.07058823,0.07450979,0.07058823,0.1058824,0.1098039,0.0980392,0.07058823,0.07450979,0.07058823,0.06666666,0.07058823,0.06666666,0.05490195,0.05882352,0.05490195,0.07058823,0.07450979,0.07058823,0.05490195,0.05882352,0.05490195,0.05882352,0.06274509,0.05882352,0.05882352,0.06274509,0.05882352,0.05490195,0.05882352,0.05490195,0.04313725,0.04705882,0.04313725,0.3372549,0.3843137,0.3529412,0.3137255,0.3568627,0.3254902,0.2431373,0.2901961,0.2431373,0.3137255,0.3568627,0.3254902,0.3372549,0.3843137,0.3529412,0.4117647,0.4549019,0.4352941,0.2705882,0.2392157,0.172549,0.3058823,0.2666667,0.1960784,0.2196078,0.2,0.1372549,0.3058823,0.2666667,0.1960784,0.2705882,0.2392157,0.172549,0.4196078,0.3529412,0.2666667,0.6,0.4901961,0.3411765,0.2823529,0.2470588,0.1843137,0.3686274,0.3137255,0.2431373,0.6,0.4901961,0.3411765,0.3686274,0.3137255,0.2431373,0.7803922,0.627451,0.4509804,0.3058823,0.2666667,0.1960784,0.7803922,0.627451,0.4509804,0.3686274,0.3137255,0.2431373,0.4196078,0.3529412,0.2666667,0.7803922,0.627451,0.4509804,0.3058823,0.2666667,0.1960784,0.6,0.4901961,0.3411765,0.2705882,0.2392157,0.172549,0.2196078,0.2,0.1372549,0.2823529,0.2470588,0.1843137,0.6,0.4901961,0.3411765,0.2196078,0.2,0.1372549,0.5137255,0.427451,0.3137255,0.2705882,0.2392157,0.172549,0.345098,0.2980392,0.2117647,0.4196078,0.3529412,0.2666667,0.2705882,0.2392157,0.172549,0.5137255,0.427451,0.3137255,0.345098,0.2980392,0.2117647,0.6,0.4901961,0.3411765,0.6627451,0.5372549,0.372549,0.2705882,0.2392157,0.172549,0.6,0.4901961,0.3411765,0.345098,0.2980392,0.2117647,0.6627451,0.5372549,0.372549,0.7803922,0.627451,0.4509804,0.8313726,0.6666667,0.4745098,0.6,0.4901961,0.3411765,0.7803922,0.627451,0.4509804,0.6627451,0.5372549,0.372549,0.8313726,0.6666667,0.4745098,0.4196078,0.3529412,0.2666667,0.5137255,0.427451,0.3137255,0.7803922,0.627451,0.4509804,0.4196078,0.3529412,0.2666667,0.8313726,0.6705883,0.4745098,0.2196078,0.2,0.1372549,0.3058823,0.2666667,0.1960784,0.5137255,0.427451,0.3137255,0.345098,0.2980392,0.2117647,0.2196078,0.2,0.1372549,0.5137255,0.427451,0.3137255,0.2823529,0.2470588,0.1803922,0.345098,0.2980392,0.2117647,0.6627451,0.5372549,0.372549,0.2196078,0.2,0.1372549,0.345098,0.2980392,0.2117647,0.2823529,0.2470588,0.1803922,0.8313726,0.6705883,0.4745098,0.2823529,0.2470588,0.1803922,0.6627451,0.5372549,0.372549,0.3686274,0.3137255,0.2431373,0.2823529,0.2470588,0.1803922,0.8313726,0.6705883,0.4745098,0.3058823,0.2666667,0.1960784,0.8313726,0.6705883,0.4745098,0.5137255,0.427451,0.3137255,0.8313726,0.6705883,0.4745098,0.3058823,0.2666667,0.1960784,0.3686274,0.3137255,0.2431373,0.2431373,0.2901961,0.2431373,0.3372549,0.3843137,0.3529412,0.4078431,0.4549019,0.4352941,0.2823529,0.2470588,0.1843137,0.2196078,0.2,0.1372549,0.3686274,0.3137255,0.2431373,0.7568628,0.8,0.6862745,0.7215687,0.7647059,0.6901961,0.2627451,0.3058823,0.2666667,0.3372549,0.3843137,0.3529412,0.7215687,0.7647059,0.6901961,0.2627451,0.3058823,0.2666667,0.4705882,0.3921568,0.2980392,0.8235294,0.6666667,0.4627451,0.6901961,0.5607843,0.4039216,0.5686275,0.4666666,0.3333333,0.7058824,0.5725491,0.3960784,0.2470588,0.2196078,0.1568627,0.2470588,0.2196078,0.1568627,0.7058824,0.5725491,0.3960784,0.2588235,0.227451,0.1647059,0.4705882,0.3921568,0.2980392,0.6901961,0.5607843,0.4039216,0.3843137,0.3254902,0.254902,0.3215686,0.2784314,0.2078431,0.4705882,0.3921568,0.2980392,0.3098039,0.2705882,0.2,0.2470588,0.2196078,0.1568627,0.2196078,0.2,0.1372549,0.2941176,0.2588235,0.1921569,0.2470588,0.2196078,0.1568627,0.2588235,0.227451,0.1647059,0.2196078,0.2,0.1372549,0.3098039,0.2705882,0.2,0.4705882,0.3921568,0.2980392,0.3843137,0.3254902,0.254902,0.5686275,0.4666666,0.3333333,0.2941176,0.2588235,0.1921569,0.6901961,0.5607843,0.4039216,0.6901961,0.5607843,0.4039216,0.2941176,0.2588235,0.1921569,0.3843137,0.3254902,0.254902,0.2941176,0.2588235,0.1921569,0.5686275,0.4666666,0.3333333,0.2470588,0.2196078,0.1568627,0.2588235,0.227451,0.1647059,0.3215686,0.2784314,0.2078431,0.2196078,0.2,0.1372549,0.2196078,0.2,0.1372549,0.3215686,0.2784314,0.2078431,0.3098039,0.2705882,0.2,0.3098039,0.2705882,0.2,0.6509804,0.5294118,0.3882353,0.3058823,0.2666667,0.1960784,0.6509804,0.5294118,0.3882353,0.3098039,0.2705882,0.2,0.3843137,0.3254902,0.254902,0.2941176,0.2588235,0.1921569,0.6862745,0.5568628,0.3843137,0.3843137,0.3254902,0.254902,0.6862745,0.5568628,0.3843137,0.6509804,0.5294118,0.3882353,0.3843137,0.3254902,0.254902,0.2196078,0.2,0.1372549,0.6862745,0.5568628,0.3843137,0.2941176,0.2588235,0.1921569,0.6862745,0.5568628,0.3843137,0.2196078,0.2,0.1372549,0.2352941,0.2117647,0.1490196,0.3058823,0.2666667,0.1960784,0.2352941,0.2117647,0.1490196,0.3098039,0.2705882,0.2,0.3098039,0.2705882,0.2,0.2352941,0.2117647,0.1490196,0.2196078,0.2,0.1372549,0.4705882,0.3921568,0.2980392,0.3215686,0.2784314,0.2078431,0.8235294,0.6666667,0.4627451,0.5686275,0.4666666,0.3333333,0.6901961,0.5607843,0.4039216,0.7058824,0.5725491,0.3960784,0.7058824,0.5725491,0.3960784,0.6901961,0.5607843,0.4039216,0.8235294,0.6666667,0.4627451,0.2588235,0.227451,0.1647059,0.7058824,0.5725491,0.3960784,0.3215686,0.2784314,0.2078431,0.3215686,0.2784314,0.2078431,0.7058824,0.5725491,0.3960784,0.8235294,0.6666667,0.4627451,0.2666667,0.3098039,0.2666667,0.2823529,0.3294118,0.2862745,0.2666667,0.3098039,0.2666667,0.2705882,0.3137255,0.2745098,0.2666667,0.3098039,0.2666667,0.2666667,0.3098039,0.2666667,0.1529412,0.1215686,0.07058823,0.2980392,0.2235294,0.1294118,0.1137255,0.09411764,0.05098038,0.2980392,0.2235294,0.1294118,0.1647059,0.1294118,0.07843136,0.1137255,0.09411764,0.05098038,0.172549,0.1333333,0.08235293,0.1647059,0.1294118,0.07843136,0.4156863,0.3058823,0.1686275,0.4156863,0.3058823,0.1686275,0.1647059,0.1294118,0.07843136,0.2980392,0.2235294,0.1294118,0.1176471,0.09411764,0.05490195,0.1647059,0.1294118,0.07843136,0.172549,0.1333333,0.08235293,0.1647059,0.1294118,0.07843136,0.1176471,0.09411764,0.05490195,0.1137255,0.09411764,0.05098038,0.1529412,0.1215686,0.07058823,0.2666667,0.2,0.1098039,0.4156863,0.3058823,0.1686275,0.1529412,0.1215686,0.07058823,0.4156863,0.3058823,0.1686275,0.2980392,0.2235294,0.1294118,0.2666667,0.3137255,0.2745098,0.3529412,0.3960784,0.3686274,0.2666667,0.3098039,0.2666667,0.2666667,0.2,0.1098039,0.1529412,0.1215686,0.07058823,0.1176471,0.09411764,0.05490195,0.4156863,0.3058823,0.1686275,0.2666667,0.2,0.1098039,0.172549,0.1333333,0.08235293,0.2666667,0.2,0.1098039,0.1176471,0.09411764,0.05490195,0.172549,0.1333333,0.08235293,0.1294118,0.1019608,0.05882352,0.1254902,0.1019608,0.05882352,0.1294118,0.1058824,0.05882352,0.1254902,0.1019608,0.05882352,0.1294118,0.1019608,0.05882352,0.1215686,0.0980392,0.05882352,0.1215686,0.0980392,0.05882352,0.1254902,0.1019608,0.05882352,0.1254902,0.1019608,0.05882352,0.3568627,0.2627451,0.1490196,0.2,0.1529412,0.09411764,0.2235294,0.1686275,0.1019608,0.2,0.1529412,0.09411764,0.3568627,0.2627451,0.1490196,0.3333333,0.2470588,0.1411765,0.3333333,0.2470588,0.1411765,0.1294118,0.1019608,0.05882352,0.2,0.1529412,0.09411764,0.1215686,0.0980392,0.05882352,0.1294118,0.1019608,0.05882352,0.3333333,0.2470588,0.1411765,0.1294118,0.1058824,0.05882352,0.3568627,0.2627451,0.1490196,0.2235294,0.1686275,0.1019608,0.1254902,0.1019608,0.05882352,0.3568627,0.2627451,0.1490196,0.1294118,0.1058824,0.05882352,0.3568627,0.2627451,0.1490196,0.1254902,0.1019608,0.05882352,0.372549,0.2745098,0.1529412,0.1254902,0.1019608,0.05882352,0.3568627,0.2627451,0.1490196,0.1254902,0.1019608,0.05882352,0.1215686,0.0980392,0.05882352,0.372549,0.2745098,0.1529412,0.1254902,0.1019608,0.05882352,0.3333333,0.2470588,0.1411765,0.372549,0.2745098,0.1529412,0.1215686,0.0980392,0.05882352,0.2,0.1529412,0.09411764,0.1294118,0.1019608,0.05882352,0.1294118,0.1058824,0.05882352,0.2235294,0.1686275,0.1019608,0.2,0.1529412,0.09411764,0.1294118,0.1058824,0.05882352,0.3568627,0.2627451,0.1490196,0.372549,0.2745098,0.1529412,0.3333333,0.2470588,0.1411765,0.1058824,0.0862745,0.1058824,0.06274509,0.05490195,0.06666666,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.1058824,0.0862745,0.1058824,0.1294118,0.1058824,0.1333333,0.07843136,0.06666666,0.0862745,0.06274509,0.05490195,0.06666666,0.1294118,0.1058824,0.1333333,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.07843136,0.06666666,0.0862745,0.1294118,0.1058824,0.1333333,0.1960784,0.1529412,0.1921569,0.07843136,0.06666666,0.0862745,0.07843136,0.06666666,0.0862745,0.1960784,0.1529412,0.1921569,0.09411764,0.07843136,0.1058824,0.1058824,0.0862745,0.1058824,0.1843137,0.145098,0.1764706,0.1294118,0.1058824,0.1333333,0.1294118,0.1058824,0.1333333,0.1843137,0.145098,0.1764706,0.1960784,0.1529412,0.1921569,0.05882352,0.05098038,0.06274509,0.07843136,0.06666666,0.0862745,0.07843136,0.06666666,0.0862745,0.07843136,0.06666666,0.0862745,0.07843136,0.06666666,0.0862745,0.09411764,0.07843136,0.1058824,0.1058824,0.0862745,0.1058824,0.05882352,0.05098038,0.06274509,0.1843137,0.145098,0.1764706,0.1843137,0.145098,0.1764706,0.05882352,0.05098038,0.06274509,0.07843136,0.06666666,0.0862745,0.427451,0.4745098,0.4549019,0.8509804,0.8941177,0.7843137,0.3529412,0.3960784,0.372549,0.3529412,0.3960784,0.372549,0.8509804,0.8941177,0.7843137,0.8431373,0.8862745,0.7568628,0.1843137,0.145098,0.1764706,0.1882353,0.1490196,0.1803922,0.1960784,0.1529412,0.1921569,0.1882353,0.1490196,0.1803922,0.09411764,0.07843136,0.1058824,0.1960784,0.1529412,0.1921569,0.1215686,0.0980392,0.1254902,0.1607843,0.1294118,0.1529412,0.0980392,0.07843136,0.1019608,0.1607843,0.1294118,0.1529412,0.1215686,0.0980392,0.1254902,0.1921569,0.1529412,0.1843137,0.06274509,0.05490195,0.06666666,0.1921569,0.1529412,0.1843137,0.07058823,0.05882352,0.07843136,0.1607843,0.1294118,0.1529412,0.1921569,0.1529412,0.1843137,0.06274509,0.05490195,0.06666666,0.06666666,0.05882352,0.07450979,0.0980392,0.07843136,0.1019608,0.06274509,0.05490195,0.06666666,0.1215686,0.0980392,0.1254902,0.0980392,0.07843136,0.1019608,0.06666666,0.05882352,0.07450979,0.06666666,0.05882352,0.07450979,0.06274509,0.05490195,0.06666666,0.07058823,0.05882352,0.07843136,0.06274509,0.05490195,0.06666666,0.06274509,0.05490195,0.06666666,0.06666666,0.05882352,0.07450979,0.2039216,0.1607843,0.1921569,0.0980392,0.07843136,0.1019608,0.1607843,0.1294118,0.1529412,0.0980392,0.07843136,0.1019608,0.2039216,0.1607843,0.1921569,0.1333333,0.1058824,0.1372549,0.06274509,0.05490195,0.06666666,0.2039216,0.1607843,0.1921569,0.1607843,0.1294118,0.1529412,0.07450979,0.06274509,0.08235293,0.2039216,0.1607843,0.1921569,0.06274509,0.05490195,0.06666666,0.1333333,0.1058824,0.1372549,0.06274509,0.05490195,0.06666666,0.0980392,0.07843136,0.1019608,0.07058823,0.05882352,0.07843136,0.06274509,0.05490195,0.06666666,0.1333333,0.1058824,0.1372549,0.06274509,0.05490195,0.06666666,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.06666666,0.07058823,0.05882352,0.07843136,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.06666666,0.1333333,0.1058824,0.1372549,0.1294118,0.1019608,0.1333333,0.07058823,0.05882352,0.07843136,0.07058823,0.05882352,0.07843136,0.1294118,0.1019608,0.1333333,0.07450979,0.06274509,0.08235293,0.1294118,0.1019608,0.1333333,0.2039216,0.1607843,0.1921569,0.07450979,0.06274509,0.08235293,0.2039216,0.1607843,0.1921569,0.1294118,0.1019608,0.1333333,0.1333333,0.1058824,0.1372549,0.05882352,0.06274509,0.05882352,0.05098038,0.05490195,0.04705882,0.04705882,0.05098038,0.04313725,0.06274509,0.06666666,0.05882352,0.05882352,0.06274509,0.05882352,0.04705882,0.05098038,0.04313725,0.05490195,0.05882352,0.05098038,0.06274509,0.06666666,0.05882352,0.04705882,0.05098038,0.04313725,0.1215686,0.1215686,0.1019608,0.06274509,0.06666666,0.05882352,0.05490195,0.05882352,0.05098038,0.04705882,0.05098038,0.04313725,0.05098038,0.05490195,0.04705882,0.05882352,0.06274509,0.05490195,0.05490195,0.05882352,0.05098038,0.04705882,0.05098038,0.04313725,0.05882352,0.06274509,0.05490195,0.05098038,0.05490195,0.04705882,0.05882352,0.06274509,0.05882352,0.05882352,0.06274509,0.05490195,0.05882352,0.06274509,0.05490195,0.05882352,0.06274509,0.05882352,0.07058823,0.07450979,0.07058823,0.07058823,0.07450979,0.07058823,0.05882352,0.06274509,0.05882352,0.06274509,0.06666666,0.05882352,0.1215686,0.1215686,0.1019608,0.07058823,0.07450979,0.07058823,0.06274509,0.06666666,0.05882352,0.2627451,0.3058823,0.2666667,0.345098,0.3921568,0.3607843,0.2784314,0.3254902,0.2862745,0.345098,0.3921568,0.3607843,0.2627451,0.3058823,0.2666667,0.4078431,0.4549019,0.4,0.8666667,0.6941177,0.4823529,0.6392157,0.5215687,0.3803921,0.7176471,0.5843138,0.4196078,0.8901961,0.7137255,0.4980392,0.8666667,0.6941177,0.4823529,0.7176471,0.5843138,0.4196078,0.6392157,0.5215687,0.3803921,0.3686274,0.3137255,0.2235294,0.3098039,0.2705882,0.2,0.3686274,0.3137255,0.2235294,0.6392157,0.5215687,0.3803921,0.8666667,0.6941177,0.4823529,0.8666667,0.6941177,0.4823529,0.6352941,0.5176471,0.3686274,0.4980392,0.4117647,0.2980392,0.8901961,0.7137255,0.4980392,0.6352941,0.5176471,0.3686274,0.8666667,0.6941177,0.4823529,0.8666667,0.6941177,0.4823529,0.2352941,0.2117647,0.1490196,0.3686274,0.3137255,0.2235294,0.4980392,0.4117647,0.2980392,0.2352941,0.2117647,0.1490196,0.8666667,0.6941177,0.4823529,0.6352941,0.5176471,0.3686274,0.3647059,0.3098039,0.2392157,0.4980392,0.4117647,0.2980392,0.4588235,0.3843137,0.2901961,0.3647059,0.3098039,0.2392157,0.6352941,0.5176471,0.3686274,0.2509804,0.227451,0.1607843,0.4980392,0.4117647,0.2980392,0.3647059,0.3098039,0.2392157,0.2352941,0.2117647,0.1490196,0.4980392,0.4117647,0.2980392,0.2509804,0.227451,0.1607843,0.7176471,0.5843138,0.4196078,0.6392157,0.5215687,0.3803921,0.3647059,0.3098039,0.2392157,0.4588235,0.3843137,0.2901961,0.7176471,0.5843138,0.4196078,0.3647059,0.3098039,0.2392157,0.3647059,0.3098039,0.2392157,0.3098039,0.2705882,0.2,0.2509804,0.227451,0.1607843,0.6392157,0.5215687,0.3803921,0.3098039,0.2705882,0.2,0.3647059,0.3098039,0.2392157,0.4431372,0.372549,0.2588235,0.3294118,0.2862745,0.2078431,0.5411765,0.4470588,0.3098039,0.3294118,0.2862745,0.2078431,0.2784314,0.2470588,0.1803922,0.3058823,0.2666667,0.1960784,0.2627451,0.2313725,0.1686275,0.2470588,0.2196078,0.1568627,0.227451,0.2039216,0.1411765,0.2470588,0.2196078,0.1568627,0.2431373,0.2196078,0.1529412,0.227451,0.2039216,0.1411765,0.5411765,0.4470588,0.3098039,0.3294118,0.2862745,0.2078431,0.3058823,0.2666667,0.1960784,0.2627451,0.2313725,0.1686275,0.4431372,0.372549,0.2588235,0.5411765,0.4470588,0.3098039,0.2627451,0.2313725,0.1686275,0.4431372,0.372549,0.2588235,0.2627451,0.2313725,0.1686275,0.227451,0.2039216,0.1411765,0.2627451,0.2313725,0.1686275,0.2627451,0.2313725,0.1686275,0.2784314,0.2470588,0.1803922,0.2470588,0.2196078,0.1568627,0.3058823,0.2666667,0.1960784,0.2431373,0.2196078,0.1529412,0.2470588,0.2196078,0.1568627,0.2784314,0.2470588,0.1803922,0.3058823,0.2666667,0.1960784,0.8941177,0.7176471,0.4980392,0.5411765,0.4470588,0.3098039,0.5450981,0.4509804,0.3333333,0.8941177,0.7176471,0.4980392,0.3058823,0.2666667,0.1960784,0.5411765,0.4470588,0.3098039,0.8941177,0.7176471,0.4980392,0.5647059,0.4627451,0.3333333,0.2627451,0.2313725,0.1686275,0.5411765,0.4470588,0.3098039,0.5647059,0.4627451,0.3333333,0.2470588,0.2196078,0.1568627,0.5647059,0.4627451,0.3333333,0.3568627,0.3058823,0.2352941,0.2627451,0.2313725,0.1686275,0.5647059,0.4627451,0.3333333,0.2470588,0.2196078,0.1568627,0.3568627,0.3058823,0.2352941,0.3058823,0.2666667,0.1960784,0.2470588,0.2196078,0.1568627,0.5450981,0.4509804,0.3333333,0.3058823,0.2666667,0.1960784,0.3568627,0.3058823,0.2352941,0.9882353,1,0.8862745,0.3960784,0.4392157,0.4196078,0.6039216,0.6509804,0.5960785,0.627451,0.6666667,0.5960785,0.3960784,0.4392157,0.4196078,0.9882353,1,0.8862745,0.3686274,0.4156863,0.3882353,0.2901961,0.3372549,0.2980392,0.3254902,0.372549,0.3372549,0.8941177,0.9686275,0.3254902,0.9568628,1,0.3490196,0.9176471,0.9882353,0.3372549,0.8,0.8705883,0.3019608,0.7019608,0.7647059,0.2705882,0.8666667,0.9372549,0.3215686,0.6431373,0.7058824,0.2392157,0.3686274,0.427451,0.1568627,0.7764706,0.8470588,0.2862745,0.6666667,0.7333334,0.2470588,0.5960785,0.6588236,0.227451,0.6431373,0.7058824,0.2392157,0.2823529,0.3372549,0.1176471,0.3529412,0.4078431,0.1490196,0.6392157,0.7019608,0.2509804,0.2823529,0.3372549,0.1176471,0.3764706,0.4352941,0.1607843,0.3529412,0.4078431,0.1490196,0.3568627,0.4156863,0.1529412,0.2784314,0.3294118,0.1137255,0.2823529,0.3372549,0.1176471,0.3686274,0.427451,0.1568627,0.2666667,0.317647,0.1098039,0.6666667,0.7333334,0.2470588,0.6666667,0.7333334,0.2470588,0.2705882,0.3215686,0.1137255,0.3686274,0.427451,0.1568627,0.6666667,0.7333334,0.2470588,0.7764706,0.8470588,0.2862745,0.2705882,0.3215686,0.1137255,0.3333333,0.3843137,0.1411765,0.4,0.4588235,0.172549,0.7098039,0.7764706,0.2705882,0.7098039,0.7764706,0.2705882,0.6627451,0.7254902,0.2470588,0.3333333,0.3843137,0.1411765,0.5647059,0.627451,0.227451,0.8,0.8705883,0.3019608,0.7098039,0.7764706,0.2705882,0.8,0.8705883,0.3019608,0.9176471,0.9882353,0.3372549,0.7098039,0.7764706,0.2705882,0.7098039,0.7764706,0.2705882,0.9176471,0.9882353,0.3372549,0.9568628,1,0.3490196,0.9568628,1,0.3490196,0.8941177,0.9647059,0.3254902,0.7098039,0.7764706,0.2705882,0.3294118,0.3843137,0.1372549,0.4392157,0.4980392,0.1803922,0.2823529,0.3372549,0.1176471,0.3294118,0.3843137,0.1372549,0.2823529,0.3372549,0.1176471,0.2588235,0.3137255,0.1058824,0.772549,0.8392157,0.2823529,0.6,0.6588236,0.2235294,0.2509804,0.3019608,0.1019608,0.2862745,0.3372549,0.1176471,0.6,0.6588236,0.2235294,0.772549,0.8392157,0.2823529,0.2509804,0.3019608,0.1019608,0.6,0.6588236,0.2235294,0.2862745,0.3372549,0.1176471,0.2588235,0.3019608,0.2627451,0.4470588,0.4901961,0.427451,0.7960785,0.8392157,0.7176471,0.772549,0.8392157,0.2823529,0.8039216,0.8705883,0.2941176,0.2862745,0.3372549,0.1176471,0.6666667,0.7333334,0.2470588,0.8039216,0.8705883,0.2941176,0.772549,0.8392157,0.2823529,0.2862745,0.3372549,0.1176471,0.8039216,0.8705883,0.2941176,0.6666667,0.7333334,0.2470588,0.3294118,0.3843137,0.1372549,0.3764706,0.4352941,0.1607843,0.2823529,0.3372549,0.1176471,0.3294118,0.3843137,0.1372549,0.4313725,0.4941176,0.1843137,0.7019608,0.7647059,0.2705882,0.2784314,0.3294118,0.1137255,0.3960784,0.4509804,0.1686275,0.8627451,0.9333333,0.3137255,0.8666667,0.9372549,0.3215686,0.9176471,0.9882353,0.3372549,0.8,0.8705883,0.3019608,0.8627451,0.9333333,0.3137255,0.2823529,0.3372549,0.1176471,0.2784314,0.3294118,0.1137255,0.4313725,0.4941176,0.1843137,0.8666667,0.9372549,0.3215686,0.7019608,0.7647059,0.2705882,0.2784314,0.3294118,0.1137255,0.3568627,0.4156863,0.1529412,0.3960784,0.4509804,0.1686275,0.3568627,0.4156863,0.1529412,0.3294118,0.3843137,0.1372549,0.2823529,0.3372549,0.1176471,0.3960784,0.4509804,0.172549,0.3568627,0.4156863,0.1529412,0.8627451,0.9333333,0.3254902,0.8627451,0.9333333,0.3137255,0.3568627,0.4156863,0.1529412,0.2823529,0.3372549,0.1176471,0.3294118,0.3843137,0.1372549,0.3568627,0.4156863,0.1529412,0.4392157,0.4980392,0.1803922,0.4745098,0.5372549,0.2,0.2588235,0.3137255,0.1058824,0.2627451,0.317647,0.1098039,0.4627451,0.5215687,0.1843137,0.2627451,0.317647,0.1098039,0.2588235,0.3137255,0.1058824,0.4745098,0.5372549,0.2,0.2627451,0.317647,0.1098039,0.4627451,0.5215687,0.1843137,0.2823529,0.3372549,0.1176471,0.6431373,0.7058824,0.2392157,0.4627451,0.5215687,0.1843137,0.2823529,0.3372549,0.1176471,0.4627451,0.5215687,0.1843137,0.2588235,0.3137255,0.1058824,0.4627451,0.5215687,0.1843137,0.3294118,0.3843137,0.1372549,0.4745098,0.5372549,0.2,0.5960785,0.6588236,0.227451,0.3294118,0.3843137,0.1372549,0.4627451,0.5215687,0.1843137,0.4627451,0.5215687,0.1843137,0.6431373,0.7058824,0.2392157,0.5960785,0.6588236,0.227451,0.3686274,0.427451,0.1568627,0.2823529,0.3372549,0.1176471,0.2666667,0.317647,0.1098039,0.3686274,0.427451,0.1568627,0.6431373,0.7058824,0.2392157,0.2823529,0.3372549,0.1176471,0.5960785,0.6588236,0.227451,0.4313725,0.4941176,0.1843137,0.3294118,0.3843137,0.1372549,0.3686274,0.427451,0.1568627,0.2705882,0.3215686,0.1137255,0.7764706,0.8470588,0.2862745,0.6431373,0.7058824,0.2392157,0.7764706,0.8470588,0.2862745,0.6666667,0.7333334,0.2470588,0.7686275,0.8352941,0.2823529,0.5960785,0.6588236,0.227451,0.6666667,0.7333334,0.2470588,0.7019608,0.7647059,0.2705882,0.5647059,0.627451,0.227451,0.6392157,0.7019608,0.2509804,0.8,0.8705883,0.3019608,0.5647059,0.627451,0.227451,0.7019608,0.7686275,0.2705882,0.5960785,0.6588236,0.227451,0.7411765,0.8117647,0.2823529,0.8666667,0.9372549,0.3215686,0.8941177,0.9686275,0.3254902,0.7411765,0.8117647,0.2823529,0.5960785,0.6588236,0.227451,0.8666667,0.9372549,0.3215686,0.7411765,0.8117647,0.2823529,0.8941177,0.9686275,0.3254902,0.9176471,0.9882353,0.3372549,0.8666667,0.9372549,0.3215686,0.8941177,0.9686275,0.3254902,0.5960785,0.6588236,0.227451,0.8666667,0.9372549,0.3215686,0.4313725,0.4941176,0.1843137,0.2588235,0.3137255,0.1058824,0.4745098,0.5372549,0.2,0.3294118,0.3843137,0.1372549,0.7019608,0.7647059,0.2705882,0.6392157,0.7019608,0.2509804,0.3764706,0.4352941,0.1607843,0.3294118,0.3843137,0.1372549,0.7019608,0.7686275,0.2705882,0.3764706,0.4352941,0.1607843,0.3411765,0.3960784,0.145098,0.3333333,0.3843137,0.1411765,0.2941176,0.3490196,0.1254902,0.3333333,0.3843137,0.1411765,0.4313725,0.4862745,0.1686275,0.2862745,0.3411765,0.1215686,0.4313725,0.4862745,0.1686275,0.4235294,0.4823529,0.1647059,0.2862745,0.3411765,0.1215686,0.2862745,0.3411765,0.1215686,0.2941176,0.3490196,0.1254902,0.3333333,0.3843137,0.1411765,0.2941176,0.3490196,0.1254902,0.3294118,0.3843137,0.1411765,0.3411765,0.3960784,0.145098,0.7686275,0.8352941,0.2823529,0.8941177,0.9647059,0.3254902,0.9568628,1,0.3490196,0.6392157,0.7019608,0.2509804,0.3529412,0.4078431,0.1490196,0.3764706,0.4352941,0.1607843,0.3215686,0.3764706,0.1333333,0.2392157,0.2901961,0.0980392,0.3411765,0.3960784,0.145098,0.3098039,0.3647059,0.1294118,0.2392157,0.2901961,0.0980392,0.3215686,0.3764706,0.1372549,0.3411765,0.3960784,0.145098,0.2392157,0.2901961,0.0980392,0.3098039,0.3647059,0.1294118,0.3803921,0.4352941,0.1607843,0.4,0.4588235,0.172549,0.3411765,0.3960784,0.145098,0.3372549,0.3921568,0.1411765,0.3803921,0.4352941,0.1607843,0.3411765,0.3960784,0.145098,0.3411765,0.3960784,0.145098,0.3294118,0.3843137,0.1411765,0.3372549,0.3921568,0.1411765,0.6392157,0.7019608,0.2509804,0.5647059,0.627451,0.227451,0.3803921,0.4352941,0.1607843,0.4,0.4588235,0.172549,0.3803921,0.4352941,0.1607843,0.5647059,0.627451,0.227451,0.7098039,0.7764706,0.2705882,0.4,0.4588235,0.172549,0.5647059,0.627451,0.227451,0.3333333,0.3843137,0.1411765,0.3411765,0.3960784,0.145098,0.4,0.4588235,0.172549,0.3372549,0.3921568,0.1411765,0.3411765,0.3960784,0.145098,0.3803921,0.4352941,0.1607843,0.3372549,0.3921568,0.1411765,0.3215686,0.3764706,0.1333333,0.3411765,0.3960784,0.145098,0.3098039,0.3647059,0.1294118,0.2823529,0.3372549,0.1176471,0.3411765,0.3960784,0.145098,0.3411765,0.3960784,0.145098,0.2823529,0.3372549,0.1176471,0.6392157,0.7019608,0.2509804,0.3411765,0.3960784,0.145098,0.6392157,0.7019608,0.2509804,0.3803921,0.4352941,0.1607843,0.2823529,0.3372549,0.1176471,0.6666667,0.7333334,0.2470588,0.2666667,0.317647,0.1098039,0.6627451,0.7294118,0.2431373,0.6431373,0.7098039,0.2392157,0.4313725,0.4901961,0.1686275,0.4313725,0.4901961,0.1686275,0.6431373,0.7098039,0.2392157,0.772549,0.8392157,0.2823529,0.6666667,0.7333334,0.2470588,0.772549,0.8392157,0.2823529,0.6431373,0.7098039,0.2392157,0.4,0.4588235,0.1568627,0.4313725,0.4901961,0.1686275,0.2509804,0.3019608,0.1019608,0.2588235,0.3019608,0.2627451,0.2509804,0.2941176,0.2509804,0.4156863,0.4588235,0.4,0.2862745,0.3372549,0.1215686,0.2431373,0.2941176,0.1019608,0.2509804,0.3019608,0.1058824,0.6627451,0.7294118,0.2431373,0.4313725,0.4901961,0.1686275,0.4,0.4588235,0.1568627,0.8941177,0.9647059,0.3254902,0.6627451,0.7294118,0.2431373,0.6627451,0.7254902,0.2470588,0.7098039,0.7764706,0.2705882,0.8941177,0.9647059,0.3254902,0.6627451,0.7254902,0.2470588,0.6627451,0.7254902,0.2470588,0.4313725,0.4862745,0.1686275,0.3333333,0.3843137,0.1411765,0.6431373,0.7098039,0.2392157,0.7686275,0.8352941,0.2823529,0.6666667,0.7333334,0.2470588,0.8941177,0.9686275,0.3254902,0.7686275,0.8352941,0.2823529,0.9568628,1,0.3490196,0.6627451,0.7294118,0.2431373,0.8941177,0.9647059,0.3254902,0.6431373,0.7098039,0.2392157,0.4,0.4588235,0.1568627,0.4235294,0.4784314,0.1647059,0.4313725,0.4862745,0.1686275,0.4313725,0.4862745,0.1686275,0.6627451,0.7294118,0.2431373,0.4,0.4588235,0.1568627,0.4313725,0.4862745,0.1686275,0.6627451,0.7254902,0.2470588,0.6627451,0.7294118,0.2431373,0.7686275,0.8352941,0.2823529,0.8941177,0.9647059,0.3254902,0.5960785,0.6588236,0.227451,0.8941177,0.9647059,0.3254902,0.7686275,0.8352941,0.2823529,0.6431373,0.7098039,0.2392157,0.3294118,0.3058823,0.2196078,0.3058823,0.2823529,0.2,0.3294118,0.3019608,0.2156863,0.5843138,0.5058824,0.345098,0.2745098,0.254902,0.1764706,0.2666667,0.2509804,0.172549,0.2862745,0.2666667,0.1882353,0.4235294,0.3764706,0.2627451,0.3058823,0.2823529,0.2,0.2745098,0.2588235,0.1764706,0.2431373,0.2352941,0.1568627,0.254902,0.2392157,0.1647059,0.254902,0.2392157,0.1647059,0.2862745,0.2666667,0.1882353,0.2745098,0.2588235,0.1764706,0.2862745,0.2666667,0.1882353,0.3058823,0.2823529,0.2,0.2745098,0.2588235,0.1764706,0.254902,0.2392157,0.1647059,0.2666667,0.2509804,0.172549,0.2862745,0.2666667,0.1882353,0.254902,0.2392157,0.1647059,0.254902,0.2392157,0.1647059,0.2666667,0.2509804,0.172549,0.2745098,0.254902,0.1764706,0.2862745,0.2666667,0.1882353,0.2666667,0.2509804,0.172549,0.8862745,0.9294118,0.8,0.8392157,0.882353,0.7803922,0.4235294,0.4666666,0.4117647,0.2745098,0.254902,0.1764706,0.8862745,0.7529412,0.509804,0.2862745,0.2666667,0.1882353,0.8392157,0.7098039,0.4941176,0.8862745,0.7529412,0.509804,0.5843138,0.5058824,0.345098,0.2666667,0.2509804,0.172549,0.8392157,0.7098039,0.4941176,0.5843138,0.5058824,0.345098,0.2745098,0.254902,0.1764706,0.5843138,0.5058824,0.345098,0.8862745,0.7529412,0.509804,0.8862745,0.7529412,0.509804,0.4235294,0.3764706,0.2627451,0.2862745,0.2666667,0.1882353,0.2431373,0.2352941,0.1568627,0.2666667,0.2509804,0.172549,0.254902,0.2392157,0.1647059,0.3294118,0.3058823,0.2196078,0.3411765,0.3137255,0.227451,0.3254902,0.2980392,0.2156863,0.3058823,0.2862745,0.2,0.3411765,0.3137255,0.227451,0.6,0.5215687,0.3803921,0.6,0.5215687,0.3803921,0.3843137,0.345098,0.2588235,0.2901961,0.2705882,0.1882353,0.3843137,0.345098,0.2588235,0.9686275,0.8156863,0.5568628,0.2745098,0.254902,0.1764706,0.3843137,0.345098,0.2588235,0.6,0.5215687,0.3803921,0.9686275,0.8156863,0.5568628,0.3058823,0.2862745,0.2,0.6,0.5215687,0.3803921,0.2901961,0.2705882,0.1882353,0.3411765,0.3882353,0.3568627,0.9686275,1,0.8745098,0.6,0.6470589,0.5960785,0.2745098,0.254902,0.1764706,0.3058823,0.2862745,0.2,0.2901961,0.2705882,0.1882353,0.2745098,0.254902,0.1764706,0.2627451,0.2470588,0.1686275,0.2666667,0.2509804,0.172549,0.3058823,0.2862745,0.2,0.2745098,0.254902,0.1764706,0.2666667,0.2509804,0.172549,0.2941176,0.2745098,0.1921569,0.3254902,0.2980392,0.2156863,0.3058823,0.2862745,0.2,0.2941176,0.2745098,0.1921569,0.3058823,0.2862745,0.2,0.2666667,0.2509804,0.172549,0.2666667,0.2509804,0.172549,0.2431373,0.2352941,0.1568627,0.2941176,0.2745098,0.1921569,0.3254902,0.2980392,0.2156863,0.3411765,0.3137255,0.227451,0.3058823,0.2862745,0.2,0.2745098,0.254902,0.1764706,0.2901961,0.2705882,0.1882353,0.3843137,0.345098,0.2588235,0.345098,0.3137255,0.227451,0.3254902,0.2980392,0.2156863,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.4235294,0.3764706,0.2627451,0.3803921,0.3411765,0.2392157,0.254902,0.2392157,0.1647059,0.2666667,0.2509804,0.172549,0.254902,0.2392157,0.1647059,0.254902,0.2392157,0.1647059,0.2666667,0.2509804,0.172549,0.2627451,0.2470588,0.1686275,0.3803921,0.3411765,0.2392157,0.3137255,0.2901961,0.2078431,0.3058823,0.2823529,0.2,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.2980392,0.2156863,0.3254902,0.2980392,0.2156863,0.3254902,0.3019608,0.2156863,0.3294118,0.3058823,0.2196078,0.2745098,0.2588235,0.1764706,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.3254902,0.2980392,0.2156863,0.2941176,0.2745098,0.1921569,0.3137255,0.2901961,0.2078431,0.3098039,0.2862745,0.2039216,0.3098039,0.2862745,0.2039216,0.3098039,0.2862745,0.2039216,0.3098039,0.2862745,0.2039216,0.3098039,0.2862745,0.2039216,0.3137255,0.2901961,0.2078431,0.3137255,0.2901961,0.2039216,0.3098039,0.2862745,0.2039216,0.3803921,0.3411765,0.2392157,0.3137255,0.2901961,0.2039216,0.3137255,0.2901961,0.2078431,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.3294118,0.3019608,0.2156863,0.3058823,0.2823529,0.2,0.3294118,0.3058823,0.2196078,0.345098,0.3137255,0.227451,0.3098039,0.2862745,0.2039216,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3294118,0.3058823,0.2196078,0.3098039,0.2862745,0.2039216,0.3254902,0.3019608,0.2156863,0.3098039,0.2862745,0.2039216,0.3294118,0.3058823,0.2196078,0.3098039,0.2862745,0.2039216,0.3137255,0.2901961,0.2078431,0.3098039,0.2862745,0.2039216,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.3098039,0.2862745,0.2039216,0.3294118,0.3019608,0.2156863,0.3294118,0.3058823,0.2196078,0.3294118,0.3019608,0.2156863,0.3098039,0.2862745,0.2039216,0.3254902,0.3019608,0.2156863,0.3254902,0.2980392,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.2980392,0.2156863,0.345098,0.3137255,0.227451,0.345098,0.3137255,0.227451,0.3294118,0.3058823,0.2196078,0.3254902,0.3019608,0.2156863,0.2745098,0.2588235,0.1764706,0.3058823,0.2823529,0.2,0.2431373,0.2352941,0.1568627,0.2941176,0.2745098,0.1921569,0.2431373,0.2352941,0.1568627,0.3058823,0.2823529,0.2,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3411765,0.3843137,0.3529412,0.3372549,0.3843137,0.3529412,0.317647,0.3607843,0.3294118,0.317647,0.3607843,0.3294118,0.3411765,0.3843137,0.3529412,0.317647,0.3607843,0.3294118,0.4509804,0.4980392,0.4666666,0.7607843,0.8039216,0.6901961,0.7607843,0.8039216,0.6862745,0.7607843,0.8039216,0.6901961,0.4509804,0.4980392,0.4666666,0.4549019,0.5019608,0.4705882,0.4549019,0.5019608,0.4705882,0.3411765,0.3843137,0.3529412,0.317647,0.3607843,0.3294118,0.7607843,0.8039216,0.6901961,0.4549019,0.5019608,0.4705882,0.317647,0.3607843,0.3294118,0.317647,0.3607843,0.3294118,0.7607843,0.8039216,0.6862745,0.7607843,0.8039216,0.6901961,0.317647,0.3607843,0.3294118,0.7607843,0.8039216,0.6862745,0.317647,0.3607843,0.3294118,0.3372549,0.3843137,0.3529412,0.3411765,0.3843137,0.3529412,0.4549019,0.5019608,0.4705882,0.4509804,0.4980392,0.4666666,0.3372549,0.3843137,0.3529412,0.4549019,0.5019608,0.4705882,0.7607843,0.8039216,0.6901961,0.3411765,0.3843137,0.3529412,0.4549019,0.5019608,0.4705882,0.3411765,0.3843137,0.3529412,0.7607843,0.8039216,0.6901961,0.317647,0.3607843,0.3294118,0.05098038,0.01568627,0.007843136,0.05098038,0.01568627,0.007843136,0.05490195,0.01960784,0.007843136,0.05882352,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.05490195,0.01960784,0.007843136,0.06666666,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.05882352,0.01960784,0.007843136,0.06274509,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.06666666,0.01960784,0.007843136,0.3607843,0.07058823,0.1098039,0.509804,0.0980392,0.145098,0.3490196,0.07058823,0.1058824,0.509804,0.0980392,0.145098,0.509804,0.0980392,0.145098,0.3607843,0.07058823,0.1098039,0.06274509,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.06274509,0.01960784,0.007843136,0.1294118,0.03921568,0.01568627,0.06274509,0.01960784,0.007843136,0.06274509,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.05098038,0.01568627,0.007843136,0.06274509,0.01960784,0.007843136,0.06274509,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.06274509,0.01960784,0.007843136,0.1882353,0.03921568,0.05882352,0.1764706,0.03921568,0.05490195,0.1764706,0.03921568,0.05490195,0.3490196,0.07058823,0.1058824,0.2039216,0.04313725,0.06274509,0.3607843,0.07058823,0.1098039,0.2117647,0.04313725,0.06666666,0.2039216,0.04313725,0.06274509,0.3490196,0.07058823,0.1058824,0.2039216,0.04313725,0.06274509,0.2117647,0.04313725,0.06666666,0.2,0.04313725,0.06274509,0.05490195,0.01960784,0.007843136,0.07450979,0.02352941,0.007843136,0.05882352,0.01960784,0.007843136,0.06666666,0.01960784,0.007843136,0.07450979,0.02352941,0.007843136,0.05490195,0.01960784,0.007843136,0.07450979,0.02352941,0.007843136,0.06666666,0.01960784,0.007843136,0.05882352,0.01960784,0.007843136,0.1137255,0.03137254,0.0117647,0.06666666,0.01960784,0.007843136,0.07450979,0.02352941,0.007843136,0.06666666,0.01960784,0.007843136,0.1294118,0.03921568,0.01568627,0.06274509,0.01960784,0.007843136,0.1137255,0.03137254,0.0117647,0.1294118,0.03921568,0.01568627,0.06666666,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.06666666,0.01960784,0.007843136,0.05490195,0.01960784,0.007843136,0.06274509,0.01960784,0.007843136,0.06666666,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.4078431,0.1098039,0.1294118,0.3529412,0.09411764,0.1137255,0.4,0.1058824,0.1294118,0.1960784,0.03137254,0.08235293,0.1215686,0.01960784,0.05490195,0.1176471,0.01960784,0.05490195,0.2,0.03137254,0.08235293,0.1960784,0.03137254,0.08235293,0.1176471,0.01960784,0.05490195,0.145098,0.02352941,0.06274509,0.2,0.03137254,0.08235293,0.1176471,0.01960784,0.05490195,0.07843136,0.0117647,0.03921568,0.145098,0.02352941,0.06274509,0.1176471,0.01960784,0.05490195,0.07450979,0.0117647,0.03921568,0.145098,0.02352941,0.06274509,0.07843136,0.0117647,0.03921568,0.07843136,0.0117647,0.03921568,0.1215686,0.01960784,0.05490195,0.07843136,0.01568627,0.03921568,0.1176471,0.01960784,0.05490195,0.1215686,0.01960784,0.05490195,0.07843136,0.0117647,0.03921568,0.1215686,0.01960784,0.05490195,0.07843136,0.01568627,0.03921568,0.07843136,0.01568627,0.03921568,0.1568627,0.1529412,0.1372549,0.1098039,0.1098039,0.1019608,0.1058824,0.1058824,0.0980392,0.1058824,0.1058824,0.0980392,0.1098039,0.1098039,0.1019608,0.07843136,0.07843136,0.07843136,0.1098039,0.1098039,0.1019608,0.1568627,0.1529412,0.1372549,0.1764706,0.172549,0.1490196,0.1411765,0.1372549,0.1215686,0.1098039,0.1098039,0.1019608,0.1764706,0.172549,0.1490196,0.1764706,0.172549,0.1490196,0.1568627,0.1529412,0.1372549,0.1607843,0.1568627,0.1372549,0.1568627,0.1529412,0.1372549,0.1058824,0.1058824,0.0980392,0.1607843,0.1568627,0.1372549,0.1098039,0.1098039,0.1019608,0.07058823,0.07058823,0.06666666,0.07843136,0.07843136,0.07843136,0.07058823,0.07058823,0.06666666,0.1098039,0.1098039,0.1019608,0.1411765,0.1372549,0.1215686,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1490196,0.03529411,0.06274509,0.1490196,0.03529411,0.06274509,0.1490196,0.03529411,0.06274509,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.1647059,0.03921568,0.07058823,0.1647059,0.03921568,0.07058823,0.1647059,0.03921568,0.07058823,0.1254902,0.03137254,0.05490195,0.1254902,0.03137254,0.05490195,0.1254902,0.03137254,0.05490195,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1490196,0.03529411,0.06274509,0.1490196,0.03529411,0.06274509,0.1490196,0.03529411,0.06274509,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.1647059,0.03921568,0.07058823,0.1647059,0.03921568,0.07058823,0.1647059,0.03921568,0.07058823,0.1254902,0.03137254,0.05490195,0.1254902,0.03137254,0.05490195,0.1254902,0.03137254,0.05490195,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352],"vertexColorIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,1485,1486,1487,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1524,1525,1526,1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,1557,1558,1559,1560,1561,1562,1563,1564,1565,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709],"armatureName":"Armature","jointParents":{"root hips":null,"spine":"root hips","head neck lower":"spine","head neck upper":"head neck lower","arm left shouler":"spine","arm left elbow":"arm left shouler","arm left wrist":"arm left elbow","arm right shoulder":"spine","arm right elbow":"arm right shoulder","arm right wrist":"arm right elbow","pelvis":"root hips","leg left thigh":"pelvis","leg left knee":"leg left thigh","leg left ankle":"leg left knee","leg right thigh":"pelvis","leg right knee":"leg right thigh","leg right ankle":"leg right knee","board":null},"vertexUVIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,1485,1486,1487,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1524,1525,1526,1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,1557,1558,1559,1560,1561,1562,1563,1564,1565,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709],"vertexUVs":[0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0.4809282,0.990294,0.04342818,0.771544,0.4809282,0.05279397,0.9809282,0.771544,0.4809282,0.990294,0.4809282,0.05279397,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0.96875,1.09375,0.8125,1.96875,0.8125,1.09375,0.8125,1.96875,0.03125,1.0625,0.8125,1.09375,0.03125,1.9375,0.03125,1.0625,0.8125,1.96875,1.96875,1.09375,1.84375,1.09375,1.84375,1.96875,1.03125,1.0625,1.84375,1.96875,1.84375,1.09375,1,1.9375,1.84375,1.96875,1.03125,1.0625,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"actions":{"brake":{"0.12":[[-0.041299305856227875,-0.9270532727241516,0.3726480305194855,0.17747542262077332,0.9991442561149597,-0.03748725354671478,0.01747298240661621,-0.5129205584526062,-0.002228856086730957,0.3730508089065552,0.9278082251548767,3.036098003387451,0,0,0,1],[-0.6612754464149475,-0.011139988899230957,0.7500604391098022,0.09203032404184341,0.7124533653259277,0.3036280870437622,0.63262939453125,-0.5163486003875732,-0.23478688299655914,0.9527255296707153,-0.19284513592720032,3.082611083984375,0,0,0,1],[-0.9928829669952393,-0.04037364199757576,0.1120418906211853,0.06989455223083496,0.09182325005531311,0.339592844247818,0.9360796809196472,-0.16636690497398376,-0.07584156095981598,0.9397057890892029,-0.3334686756134033,4.19793176651001,0,0,0,1],[-0.9881124496459961,-0.01502656377851963,0.15299680829048157,0.060985542833805084,0.1211177334189415,0.5368340611457825,0.8349488973617554,-0.09143098443746567,-0.09468032419681549,0.8435540199279785,-0.5286325216293335,4.4052910804748535,0,0,0,1],[0.30284610390663147,-0.38144150376319885,-0.8733766674995422,-0.5521339178085327,0.8683606386184692,0.4880739450454712,0.08794351667165756,0.44195353984832764,0.39272719621658325,-0.7850391268730164,0.4790399372577667,3.701590061187744,0,0,0,1],[0.1669105887413025,-0.0240480899810791,-0.9856787919998169,-0.8265364170074463,0.8446198105812073,0.5192543864250183,0.13035564124584198,0.7930655479431152,0.5086833834648132,-0.8542814254760742,0.10698044300079346,3.1368463039398193,0,0,0,1],[0.16802668571472168,0.006675567477941513,-0.985759973526001,-0.8497151732444763,0.8685746788978577,0.4719136953353882,0.15124768018722534,1.2935503721237183,0.4662034511566162,-0.8816195726394653,0.0734957754611969,2.3134446144104004,0,0,0,1],[-0.5831590890884399,0.7957664728164673,0.16334059834480286,0.7261340618133545,-0.7444909811019897,-0.44307148456573486,-0.49942001700401306,-0.9321061372756958,-0.3250500559806824,-0.4128473103046417,0.8508226275444031,4.1510162353515625,0,0,0,1],[-0.6589231491088867,0.7263904213905334,0.1953870952129364,1.257655143737793,-0.6458568572998047,-0.41318657994270325,-0.641985297203064,-1.2280495166778564,-0.38560056686401367,-0.5492115616798401,0.7414029836654663,3.875260591506958,0,0,0,1],[-0.7022513747215271,0.6754707098007202,0.2249024659395218,1.9625866413116455,-0.6207104921340942,-0.42621049284935,-0.6580747365951538,-1.6290297508239746,-0.34865427017211914,-0.6017338633537292,0.7185792326927185,3.342273712158203,0,0,0,1],[-0.4920247197151184,0.1516391932964325,-0.8572731614112854,0.07576512545347214,0.8367987275123596,-0.1892751008272171,-0.5137535333633423,-0.5170605182647705,-0.24016571044921875,-0.9701446294784546,-0.033763520419597626,3.0648977756500244,0,0,0,1],[0.16386005282402039,0.17947669327259064,-0.9700195789337158,0.19006749987602234,0.7459897994995117,0.6208629608154297,0.24089041352272034,-0.14047972857952118,0.6454835534095764,-0.7630972266197205,-0.03215320035815239,2.675279378890991,0,0,0,1],[0.17922884225845337,-0.526020348072052,-0.8313722014427185,0.37259194254875183,0.9361158013343811,0.3511032164096832,-0.020338013768196106,0.49157488346099854,0.30259570479393005,-0.7746155858039856,0.5553438663482666,1.8975032567977905,0,0,0,1],[-0.08162835240364075,0.9883142709732056,-0.1287309229373932,-0.4676786959171295,0.9144667387008667,0.12563267350196838,0.3846646845340729,1.0524309873580933,0.3963424861431122,-0.0863206684589386,-0.9140357971191406,0.6601238250732422,0,0,0,1],[-0.1569511890411377,0.23015612363815308,-0.9604136943817139,0.08936268091201782,0.8312620520591736,-0.49430182576179504,-0.25430089235305786,-1.0532809495925903,-0.5332632660865784,-0.8382684588432312,-0.11373890191316605,2.635603427886963,0,0,0,1],[-0.22684215009212494,-0.49459314346313477,-0.8389995694160461,0.3238425850868225,0.924782395362854,-0.379588782787323,-0.02626638114452362,-1.556488037109375,-0.30548375844955444,-0.7818505167961121,0.5434977412223816,1.7831950187683105,0,0,0,1],[-0.047507427632808685,0.9988378286361694,0.008129239082336426,-0.46622639894485474,0.9334582090377808,0.047291338443756104,-0.3555549085140228,-2.1628477573394775,-0.3555262088775635,-0.009303092956542969,-0.9346201419830322,0.5342576503753662,0,0,0,1],[-0.9990469813346863,0.042688917368650436,0.009089452214539051,-0.10903215408325195,-0.04284253716468811,-0.998930037021637,-0.017413582652807236,3.1127092838287354,0.008336362428963184,-0.017786405980587006,0.9998071193695068,0.2797333002090454,0,0,0,1]],"0.16":[[-0.12601305544376373,-0.9333314299583435,0.33617472648620605,0.1351378858089447,0.9911832809448242,-0.1324431151151657,0.003833472728729248,-0.5874848961830139,0.04094609618186951,0.3336936831474304,0.941791832447052,2.9589335918426514,0,0,0,1],[-0.6788545250892639,0.00268593430519104,0.734268069267273,0.04867524653673172,0.7039100527763367,0.28696975111961365,0.6497377753257751,-0.6002479791641235,-0.20896758139133453,0.9579358696937561,-0.1967012882232666,3.001798629760742,0,0,0,1],[-0.9957359433174133,-0.027460426092147827,0.08806923031806946,0.042828481644392014,0.07456099987030029,0.32260066270828247,0.9435940384864807,-0.26993557810783386,-0.05432280898094177,0.9461368322372437,-0.319177508354187,4.123305320739746,0,0,0,1],[-0.991887092590332,-0.007691944018006325,0.12689058482646942,0.03676895424723625,0.1042584702372551,0.5219020247459412,0.8466100692749023,-0.19874921441078186,-0.07273665815591812,0.8529707193374634,-0.5168658494949341,4.332083702087402,0,0,0,1],[0.3319077491760254,-0.3431577682495117,-0.8786811232566833,-0.6002078056335449,0.7777491211891174,0.6266590356826782,0.04904836416244507,0.3350970149040222,0.5338020324707031,-0.6996725797653198,0.47488313913345337,3.6502633094787598,0,0,0,1],[0.18984152376651764,0.0272076278924942,-0.9814379811286926,-0.8470696210861206,0.7489780187606812,0.6423139572143555,0.16268257796764374,0.7859047651290894,0.634817361831665,-0.7659587860107422,0.10155969858169556,3.146930694580078,0,0,0,1],[0.19341588020324707,0.05654531717300415,-0.9794864058494568,-0.8208454251289368,0.7789584398269653,0.5981220602989197,0.18834751844406128,1.405000925064087,0.5965024828910828,-0.7994078397750854,0.07163964956998825,2.408658981323242,0,0,0,1],[-0.6067293882369995,0.7719534039497375,0.18964919447898865,0.7118936777114868,-0.7331256866455078,-0.45119649171829224,-0.5088698267936707,-1.0223731994628906,-0.30725449323654175,-0.447782963514328,0.8396931886672974,4.0498366355896,0,0,0,1],[-0.626409113407135,0.7324516773223877,0.2666933238506317,1.2275091409683228,-0.6304436922073364,-0.27484506368637085,-0.7259483337402344,-1.3237435817718506,-0.4584225118160248,-0.6228758692741394,0.6339353322982788,3.750746250152588,0,0,0,1],[-0.6690626740455627,0.6793015003204346,0.3015023469924927,1.9383227825164795,-0.6149846911430359,-0.2782418131828308,-0.7378180623054504,-1.590469241142273,-0.41731008887290955,-0.679066002368927,0.6039215922355652,3.146271228790283,0,0,0,1],[-0.5494648814201355,0.16728155314922333,-0.8185998201370239,0.03317766636610031,0.8114935159683228,-0.12640608847141266,-0.570526123046875,-0.6014597415924072,-0.1989145576953888,-0.9777721166610718,-0.06629229336977005,2.983436107635498,0,0,0,1],[0.03592801094055176,0.17230139672756195,-0.984389066696167,0.10747146606445312,0.7157968282699585,0.6829475164413452,0.14566388726234436,-0.2014903724193573,0.6973838210105896,-0.7098556160926819,-0.09879601746797562,2.612903118133545,0,0,0,1],[0.07279440760612488,-0.5411553382873535,-0.8377662301063538,0.28254759311676025,0.9314441680908203,0.33716723322868347,-0.13685911893844604,0.49392735958099365,0.3565293252468109,-0.7703697085380554,0.5285993814468384,1.8874425888061523,0,0,0,1],[-0.18653395771980286,0.9714889526367188,-0.14633703231811523,-0.581899881362915,0.8777939081192017,0.23169998824596405,0.4192771911621094,1.0325219631195068,0.44122931361198425,-0.05024394392967224,-0.8959865570068359,0.6568455696105957,0,0,0,1],[-0.19332608580589294,0.3421715199947357,-0.9195346832275391,0.09972721338272095,0.8354285955429077,-0.4340354800224304,-0.33715370297431946,-1.1077401638031006,-0.5144749283790588,-0.8333858847618103,-0.2019495666027069,2.528881788253784,0,0,0,1],[-0.3072565495967865,-0.43462085723876953,-0.8465805649757385,0.44837164878845215,0.9089666604995728,-0.3974115550518036,-0.1258738934993744,-1.5496859550476074,-0.2817334532737732,-0.8081888556480408,0.5171628594398499,1.6833328008651733,0,0,0,1],[-0.12834689021110535,0.9894456267356873,0.0672680139541626,-0.24589687585830688,0.9365783929824829,0.14323420822620392,-0.3198522925376892,-2.184515953063965,-0.326111376285553,0.021949827671051025,-0.9450767040252686,0.3923221826553345,0,0,0,1],[-0.991439938545227,0.12929734587669373,-0.01814177632331848,-0.38501811027526855,-0.12828262150287628,-0.9905281662940979,-0.04896562919020653,2.9247872829437256,-0.024301063269376755,-0.04621921479701996,0.9986357092857361,0.28276216983795166,0,0,0,1]],"0.2":[[-0.38388171792030334,-0.8938895463943481,0.23150740563869476,0.014777779579162598,0.9115509986877441,-0.40686488151550293,-0.059456080198287964,-0.7994616031646729,0.14733940362930298,0.18820692598819733,0.9710144996643066,2.739565372467041,0,0,0,1],[-0.7364901304244995,0.04234057664871216,0.6751214861869812,-0.06904910504817963,0.6619182825088501,0.2508528232574463,0.7063543200492859,-0.8394714593887329,-0.13944873213768005,0.9670987129211426,-0.21277692914009094,2.7686917781829834,0,0,0,1],[-0.9999486804008484,0.009183794260025024,0.00421142578125,-0.028049707412719727,0.006652206182479858,0.2846984267234802,0.9585937261581421,-0.5520545840263367,0.007604613900184631,0.9585731029510498,-0.28474509716033936,3.9012234210968018,0,0,0,1],[-0.9992596507072449,0.009647410362958908,0.037237536162137985,-0.026023173704743385,0.03720643371343613,0.488201379776001,0.8719372153282166,-0.4892318844795227,-0.009767420589923859,0.8726774454116821,-0.4881991744041443,4.112746238708496,0,0,0,1],[0.38819563388824463,-0.21612548828125,-0.895875871181488,-0.7384698390960693,0.420427143573761,0.9065905809402466,-0.03653351217508316,0.023563086986541748,0.8200885653495789,-0.3624684512615204,0.4427995979785919,3.4922056198120117,0,0,0,1],[0.23294010758399963,0.18266889452934265,-0.9551809430122375,-0.8939468264579773,0.39786940813064575,0.8783360123634338,0.26500144600868225,0.6757488250732422,0.8873775005340576,-0.4417668581008911,0.1319214254617691,3.231451988220215,0,0,0,1],[0.2439681887626648,0.20856527984142303,-0.947090208530426,-0.7178808450698853,0.43950411677360535,0.8467720150947571,0.2996886968612671,1.5223355293273926,0.8644742369651794,-0.4893646240234375,0.1149202287197113,2.8056535720825195,0,0,0,1],[-0.6551691293716431,0.7092260122299194,0.26028871536254883,0.6845571994781494,-0.715377688407898,-0.471646785736084,-0.5155416131019592,-1.2525945901870728,-0.2428709864616394,-0.5239722728729248,0.8163738250732422,3.7575485706329346,0,0,0,1],[-0.5577877163887024,0.6994462609291077,0.44681739807128906,1.15827476978302,-0.5178871750831604,0.12738114595413208,-0.8459112644195557,-1.5676244497299194,-0.6485860347747803,-0.7032409906387329,0.2911831736564636,3.4075686931610107,0,0,0,1],[-0.5950579047203064,0.6343945860862732,0.4934040606021881,1.8370580673217773,-0.5289406180381775,0.15307877957820892,-0.83473801612854,-1.4440064430236816,-0.6050833463668823,-0.7577001452445984,0.24446682631969452,2.7251029014587402,0,0,0,1],[-0.7195563316345215,0.18980523943901062,-0.6679911613464355,-0.0818556398153305,0.687433660030365,0.058453433215618134,-0.7238904237747192,-0.8415905833244324,-0.09835202246904373,-0.980080246925354,-0.1725391000509262,2.7484352588653564,0,0,0,1],[-0.33128607273101807,0.0934765636920929,-0.9388883113861084,-0.13755486905574799,0.5216127634048462,0.8473379015922546,-0.09968885779380798,-0.40435490012168884,0.7862375378608704,-0.52276211977005,-0.32947003841400146,2.4325551986694336,0,0,0,1],[-0.2527151107788086,-0.5649036765098572,-0.7855052947998047,-0.04175986349582672,0.8392333388328552,0.276023805141449,-0.46850574016571045,0.46032989025115967,0.48147907853126526,-0.7776212692260742,0.404330849647522,1.8924524784088135,0,0,0,1],[-0.4867379069328308,0.8481816649436951,-0.2089827060699463,-0.9441431760787964,0.6963260769844055,0.5211771726608276,0.49346089363098145,0.901253342628479,0.5274618268013,0.09466609358787537,-0.844288170337677,0.6502717733383179,0,0,0,1],[-0.3018553555011749,0.6308571100234985,-0.7147741317749023,0.1327945441007614,0.8355473279953003,-0.18596279621124268,-0.5169888734817505,-1.2287890911102295,-0.45906805992126465,-0.7532840967178345,-0.4709775447845459,2.238104820251465,0,0,0,1],[-0.5303106307983398,-0.2275870442390442,-0.8166849613189697,0.7740839719772339,0.8119683861732483,-0.41344332695007324,-0.4120328426361084,-1.4195374250411987,-0.2438800036907196,-0.8816285133361816,0.4040471911430359,1.4793146848678589,0,0,0,1],[-0.3637894093990326,0.8998651504516602,0.24062320590019226,0.41053372621536255,0.8930165767669678,0.4103958010673523,-0.1846500039100647,-2.079976797103882,-0.26491114497184753,0.14770695567131042,-0.9528930187225342,0.0709906816482544,0,0,0,1],[-0.917794406414032,0.38840213418006897,-0.08244152367115021,-1.1696105003356934,-0.37290158867836,-0.9144911766052246,-0.1570025533437729,2.388374090194702,-0.13637223839759827,-0.11335353553295135,0.9841511845588684,0.29137396812438965,0,0,0,1]],"0.24":[[-0.6852638125419617,-0.7177898287773132,0.12325471639633179,-0.1315280646085739,0.6954858303070068,-0.6951773166656494,-0.18173673748970032,-1.0571335554122925,0.21613264083862305,-0.03881573677062988,0.9755921363830566,2.4729084968566895,0,0,0,1],[-0.8125652074813843,0.08131802082061768,0.5771703720092773,-0.199545755982399,0.5779820084571838,0.2403925061225891,0.7798388004302979,-1.1263972520828247,-0.07533244043588638,0.9672635793685913,-0.24233481287956238,2.480134963989258,0,0,0,1],[-0.9917035102844238,0.04413679242134094,-0.12073403596878052,-0.11213216185569763,-0.10447701811790466,0.2704654335975647,0.9570440649986267,-0.8521429300308228,0.07489515841007233,0.961717426776886,-0.26361003518104553,3.6132991313934326,0,0,0,1],[-0.9955752491950989,0.01631948910653591,-0.09254293888807297,-0.1023927628993988,-0.07379406690597534,0.47394904494285583,0.8774548768997192,-0.7924609184265137,0.05818018317222595,0.8804009556770325,-0.470647394657135,3.8255155086517334,0,0,0,1],[0.39767205715179443,-0.06747718900442123,-0.9150434136390686,-0.9080142378807068,-0.006511066108942032,0.9970598220825195,-0.07635502517223358,-0.3532397747039795,0.9175045490264893,0.036322347819805145,0.3960632085800171,3.265454053878784,0,0,0,1],[0.2350108027458191,0.35139524936676025,-0.9062515497207642,-0.9565562009811401,-0.001058473950251937,0.9324565529823303,0.36128151416778564,0.3640279769897461,0.9719921350479126,-0.08394560217857361,0.2195093035697937,3.291583776473999,0,0,0,1],[0.2541303038597107,0.37493211030960083,-0.8915404677391052,-0.6178628206253052,0.04344380274415016,0.9164476990699768,0.3977901041507721,1.2627789974212646,0.9661937952041626,-0.13982215523719788,0.21660864353179932,3.210672378540039,0,0,0,1],[-0.6791939735412598,0.661743700504303,0.317474901676178,0.661414384841919,-0.7180838584899902,-0.5096478462219238,-0.47393518686294556,-1.4671777486801147,-0.1518229842185974,-0.5498675107955933,0.8213373422622681,3.4069833755493164,0,0,0,1],[-0.5159614682197571,0.6211220026016235,0.5899070501327515,1.1034168004989624,-0.34670019149780273,0.47830718755722046,-0.8068587779998779,-1.8075898885726929,-0.78331458568573,-0.6208293437957764,-0.03144475817680359,3.0397071838378906,0,0,0,1],[-0.5444539785385132,0.5362072587013245,0.6450199484825134,1.7061896324157715,-0.37829554080963135,0.5293686985969543,-0.7593820095062256,-1.3434128761291504,-0.7486394047737122,-0.6574572920799255,-0.0853719711303711,2.437218189239502,0,0,0,1],[-0.8987413644790649,0.1631300002336502,-0.4070048928260803,-0.2084193229675293,0.437377005815506,0.2677389979362488,-0.8584972023963928,-1.1282140016555786,-0.03107556700706482,-0.9495812058448792,-0.31197744607925415,2.4578464031219482,0,0,0,1],[-0.6754845380783081,-0.12490469217300415,-0.7267186641693115,-0.43350881338119507,0.1036977767944336,0.9596635103225708,-0.26132917404174805,-0.7198406457901001,0.730046272277832,-0.2518826723098755,-0.6352853775024414,2.1918561458587646,0,0,0,1],[-0.6225273609161377,-0.535663366317749,-0.5705479383468628,-0.5578708052635193,0.5693790912628174,0.1901547908782959,-0.7997804880142212,0.26555225253105164,0.5369054675102234,-0.8227429389953613,0.18661880493164062,1.9236656427383423,0,0,0,1],[-0.7826862931251526,0.5494109988212585,-0.2924897372722626,-1.4135453701019287,0.3427719175815582,0.7727214694023132,0.53423672914505,0.5693075656890869,0.5195286273956299,0.3178824186325073,-0.7931207418441772,0.6094070672988892,0,0,0,1],[-0.4408445954322815,0.8347393274307251,-0.3299492597579956,0.15194332599639893,0.8092601299285889,0.2106235921382904,-0.5483938455581665,-1.310474157333374,-0.38827070593833923,-0.5087711811065674,-0.7683735489845276,1.9242955446243286,0,0,0,1],[-0.7425499558448792,0.0644058883190155,-0.6666872501373291,0.9972224235534668,0.6130015850067139,-0.3357543349266052,-0.715191125869751,-1.102826476097107,-0.26990562677383423,-0.939745306968689,0.20983335375785828,1.4187012910842896,0,0,0,1],[-0.6144611835479736,0.6640545725822449,0.4259924590587616,1.1001052856445312,0.7473269104957581,0.6629645228385925,0.044504910707473755,-1.6391644477844238,-0.25286418199539185,0.3457021415233612,-0.9036315679550171,-0.08245909214019775,0,0,0,1],[-0.7169060111045837,0.6871825456619263,-0.11758577823638916,-2.123335361480713,-0.6300848722457886,-0.7108278274536133,-0.31259769201278687,1.7309303283691406,-0.2983948588371277,-0.15001417696475983,0.9425796270370483,0.30184459686279297,0,0,0,1]],"0.28":[[-0.8559969663619995,-0.5117441415786743,0.07339603453874588,-0.23936420679092407,0.47255459427833557,-0.8320907354354858,-0.29037338495254517,-1.2470533847808838,0.2096690535545349,-0.21387505531311035,0.9540945291519165,2.2763664722442627,0,0,0,1],[-0.86360764503479,0.09418454766273499,0.4952886700630188,-0.28801998496055603,0.5016324520111084,0.2588503062725067,0.8254457712173462,-1.3307782411575317,-0.05046144127845764,0.9613145589828491,-0.27079135179519653,2.2664241790771484,0,0,0,1],[-0.9748680591583252,0.054264627397060394,-0.21607285737991333,-0.1848306953907013,-0.19222325086593628,0.28538835048675537,0.9389371871948242,-1.0355753898620605,0.11261576414108276,0.9568745493888855,-0.2677852213382721,3.3929784297943115,0,0,0,1],[-0.982094943523407,0.005273826420307159,-0.18831230700016022,-0.17285645008087158,-0.1622246354818344,0.48451200127601624,0.8596106767654419,-0.9726004600524902,0.09577301889657974,0.8747685551643372,-0.47498154640197754,3.604126214981079,0,0,0,1],[0.356840044260025,-0.006958730518817902,-0.9341395497322083,-1.0345431566238403,-0.1307467222213745,0.9897575974464417,-0.05731818079948425,-0.6146172881126404,0.9249706268310547,0.1425892412662506,0.3522753119468689,3.0703158378601074,0,0,0,1],[0.18649053573608398,0.4213157594203949,-0.887532651424408,-1.0395491123199463,-0.10737859457731247,0.9067099690437317,0.4078565835952759,0.09739738702774048,0.9765712022781372,0.01924072951078415,0.214333176612854,3.1728920936584473,0,0,0,1],[0.2090257704257965,0.4463439881801605,-0.8701063990592957,-0.63346266746521,-0.06412118673324585,0.8941020965576172,0.44324934482574463,0.9713323712348938,0.9758058190345764,-0.036858174949884415,0.2155105620622635,3.191437244415283,0,0,0,1],[-0.6800488233566284,0.6750080585479736,0.28617584705352783,0.633110761642456,-0.7248736619949341,-0.5604850053787231,-0.4005163908004761,-1.5811498165130615,-0.10995432734489441,-0.47981247305870056,0.8704537153244019,3.1637887954711914,0,0,0,1],[-0.46337562799453735,0.6185821890830994,0.6345375180244446,1.0839729309082031,-0.3234533965587616,0.548583447933197,-0.7709944248199463,-1.9555180072784424,-0.8250210285186768,-0.5625042915344238,-0.05411753058433533,2.8433046340942383,0,0,0,1],[-0.48880305886268616,0.5217856168746948,0.6991495490074158,1.6842809915542603,-0.3583694398403168,0.6105768084526062,-0.7062333822250366,-1.4231407642364502,-0.7953876256942749,-0.5957639813423157,-0.11145977675914764,2.2974178791046143,0,0,0,1],[-0.9775016903877258,0.10906586050987244,-0.18054066598415375,-0.2940204441547394,0.20905421674251556,0.3871445655822754,-0.8980060815811157,-1.331313133239746,-0.02804654836654663,-0.9155457019805908,-0.4012352228164673,2.2431318759918213,0,0,0,1],[-0.782733678817749,-0.34243863821029663,-0.5196763277053833,-0.6265817880630493,-0.2486194521188736,0.937541127204895,-0.24331974983215332,-0.9962462186813354,0.5705403089523315,-0.06125307083129883,-0.8189823627471924,1.9892693758010864,0,0,0,1],[-0.8157793283462524,-0.47269076108932495,-0.33326756954193115,-0.9723231196403503,0.29923832416534424,0.1481473296880722,-0.9426071643829346,-0.02636454626917839,0.4949345886707306,-0.8686864376068115,0.020591765642166138,1.915253758430481,0,0,0,1],[-0.9009628295898438,0.2648061513900757,-0.3437198996543884,-1.7274044752120972,0.042204804718494415,0.841899037361145,0.537981390953064,0.21028761565685272,0.43183839321136475,0.47019484639167786,-0.7696964144706726,0.5276045799255371,0,0,0,1],[-0.5447567701339722,0.838141918182373,-0.027532048523426056,0.12765370309352875,0.7682631611824036,0.48563915491104126,-0.41704419255256653,-1.340449333190918,-0.3361719250679016,-0.2483397275209427,-0.9084691405296326,1.7266086339950562,0,0,0,1],[-0.8293050527572632,0.26589179039001465,-0.49148207902908325,0.9743055701255798,0.44747447967529297,-0.2108071893453598,-0.8690952658653259,-0.8595131635665894,-0.3346935510635376,-0.9406711459159851,0.055843859910964966,1.4864277839660645,0,0,0,1],[-0.7415277361869812,0.43005186319351196,0.5149680972099304,1.399044394493103,0.6054474115371704,0.7596442699432373,0.2374315857887268,-1.1962591409683228,-0.28908494114875793,0.4878481924533844,-0.8236713409423828,-0.016211628913879395,0,0,0,1],[-0.5045920610427856,0.8569943308830261,-0.1046278104186058,-2.8262882232666016,-0.7555108666419983,-0.496957004070282,-0.42689183354377747,1.2374712228775024,-0.41783958673477173,-0.1363588273525238,0.8982295989990234,0.3095662593841553,0,0,0,1]],"0.32":[[-0.938511312007904,-0.34051764011383057,0.056963000446558,-0.31717079877853394,0.2971174716949463,-0.8806328177452087,-0.36906251311302185,-1.3840854167938232,0.1758357733488083,-0.32944464683532715,0.9276573061943054,2.134556293487549,0,0,0,1],[-0.8946311473846436,0.09200336039066315,0.437231183052063,-0.34945520758628845,0.4444749653339386,0.28308382630348206,0.8498857617378235,-1.4733895063400269,-0.04558068513870239,0.9546723365783691,-0.29414862394332886,2.1131417751312256,0,0,0,1],[-0.9587314128875732,0.05040279030799866,-0.2798112630844116,-0.24828499555587769,-0.2517392039299011,0.30693110823631287,0.9178349375724792,-1.1502275466918945,0.13214409351348877,0.9503964781761169,-0.28157591819763184,3.2321810722351074,0,0,0,1],[-0.9681199193000793,-0.012482911348342896,-0.2501773536205292,-0.23716291785240173,-0.22259750962257385,0.5008823871612549,0.8364014625549316,-1.0824989080429077,0.11486858874559402,0.8654255867004395,-0.487692654132843,3.441899299621582,0,0,0,1],[0.27143171429634094,0.02483731508255005,-0.9621376991271973,-1.1280186176300049,0.010005250573158264,0.9995408654212952,0.028625309467315674,-0.7906864285469055,0.9624060988426208,-0.0173959881067276,0.27105802297592163,2.9157512187957764,0,0,0,1],[0.0800785943865776,0.4023117125034332,-0.9119943380355835,-1.1101510524749756,0.02943742834031582,0.9135793447494507,0.4055955410003662,-0.07163381576538086,0.9963541030883789,-0.059325914829969406,0.06131492555141449,2.9032368659973145,0,0,0,1],[0.10187660157680511,0.4335296154022217,-0.8953626751899719,-0.7223816514015198,0.07287231087684631,0.8943754434585571,0.4413430988788605,0.808922290802002,0.9921247959136963,-0.11020924896001816,0.05952344089746475,2.846055269241333,0,0,0,1],[-0.6457583904266357,0.7584353685379028,0.0881567895412445,0.5993455648422241,-0.742603063583374,-0.5969973206520081,-0.30353665351867676,-1.6469284296035767,-0.17758357524871826,-0.26147696375846863,0.9487326741218567,2.9997611045837402,0,0,0,1],[-0.32333236932754517,0.755535364151001,0.5697560906410217,1.1059318780899048,-0.49206534028053284,0.38005173206329346,-0.7832188606262207,-2.045684337615967,-0.8082866072654724,-0.5335975289344788,0.2488897442817688,2.825111150741577,0,0,0,1],[-0.3544706702232361,0.6645292639732361,0.6578381061553955,1.8391473293304443,-0.5183222889900208,0.4459037184715271,-0.7297337055206299,-1.6768600940704346,-0.7782620191574097,-0.5996416807174683,0.18638046085834503,2.307277202606201,0,0,0,1],[-0.998107373714447,0.05942750722169876,-0.01582738757133484,-0.35363081097602844,0.04083831608295441,0.44804075360298157,-0.8930799961090088,-1.4725656509399414,-0.04598225653171539,-0.8920358419418335,-0.44961968064308167,2.0894622802734375,0,0,0,1],[-0.7763115167617798,-0.5011521577835083,-0.38234442472457886,-0.7436476945877075,-0.4758213758468628,0.8637318015098572,-0.1660166084766388,-1.2103351354599,0.4134424030780792,0.053047120571136475,-0.9089838266372681,1.828934907913208,0,0,0,1],[-0.898240864276886,-0.4135817289352417,-0.14870697259902954,-1.252512812614441,0.09965953230857849,0.13787122070789337,-0.9854236841201782,-0.31028440594673157,0.4280555248260498,-0.8999677896499634,-0.08262433111667633,1.8730236291885376,0,0,0,1],[-0.927152693271637,0.057521164417266846,-0.3702423572540283,-1.913172721862793,-0.16177913546562195,0.8298323154449463,0.5340467691421509,-0.09004741907119751,0.3379579186439514,0.5550405383110046,-0.7600753307342529,0.43540525436401367,0,0,0,1],[-0.6175328493118286,0.7703340649604797,0.15886813402175903,0.08366051316261292,0.726694643497467,0.6360654234886169,-0.2594914436340332,-1.3581819534301758,-0.30094555020332336,-0.04479573667049408,-0.9525887370109558,1.5994831323623657,0,0,0,1],[-0.8540476560592651,0.3857768177986145,-0.34896913170814514,0.8610233068466187,0.33777880668640137,-0.09891824424266815,-0.936013400554657,-0.7297024726867676,-0.39561161398887634,-0.9172741770744324,-0.04582644999027252,1.5649532079696655,0,0,0,1],[-0.7975295186042786,0.25367307662963867,0.5473547577857971,1.4772679805755615,0.5036460161209106,0.7794202566146851,0.3726191818714142,-0.887715756893158,-0.33209580183029175,0.572847843170166,-0.7493717670440674,0.09968841075897217,0,0,0,1],[-0.3335908055305481,0.9396698474884033,-0.07574721425771713,-3.333489418029785,-0.8027572631835938,-0.3252728283405304,-0.499778151512146,0.8692915439605713,-0.49426504969596863,-0.10591479390859604,0.8628349304199219,0.3151434659957886,0,0,0,1]],"0.36":[[-0.9799758195877075,-0.19126476347446442,0.05536399781703949,-0.3832087814807892,0.1492374986410141,-0.8895968794822693,-0.43167757987976074,-1.5003905296325684,0.13181635737419128,-0.4147712290287018,0.9003272652626038,2.014195442199707,0,0,0,1],[-0.9162885546684265,0.08266592770814896,0.391895055770874,-0.40107956528663635,0.39747118949890137,0.3081587553024292,0.8643232583999634,-1.59126615524292,-0.04931578040122986,0.9477364420890808,-0.31521958112716675,1.9842228889465332,0,0,0,1],[-0.9439762234687805,0.039885107427835464,-0.32759466767311096,-0.3104057312011719,-0.29704993963241577,0.3297683894634247,0.896110475063324,-1.239037036895752,0.14377176761627197,0.9432189464569092,-0.2994455397129059,3.0953621864318848,0,0,0,1],[-0.9549263119697571,-0.0332307443022728,-0.29497745633125305,-0.3016045093536377,-0.2688055634498596,0.5183824896812439,0.811802327632904,-1.166269063949585,0.12593430280685425,0.85450279712677,-0.5039495825767517,3.3034965991973877,0,0,0,1],[0.16587090492248535,0.10076305270195007,-0.9809863567352295,-1.2089664936065674,0.32646816968917847,0.9330626726150513,0.1510416567325592,-0.9315291047096252,0.9305405616760254,-0.34531378746032715,0.12187173962593079,2.7769975662231445,0,0,0,1],[-0.05391312390565872,0.3097623288631439,-0.9492846131324768,-1.1364792585372925,0.31041377782821655,0.9087646007537842,0.278910756111145,-0.26029980182647705,0.9490715861320496,-0.27963367104530334,-0.1451488733291626,2.5285847187042236,0,0,0,1],[-0.0363689549267292,0.34916454553604126,-0.9363557696342468,-0.8379138708114624,0.3535993695259094,0.8808576464653015,0.3147353529930115,0.6156156063079834,0.9346898794174194,-0.31964775919914246,-0.15550026297569275,2.259058952331543,0,0,0,1],[-0.5037128925323486,0.8274492621421814,-0.24819454550743103,0.5600931644439697,-0.8072727918624878,-0.553148627281189,-0.20575806498527527,-1.6971060037612915,-0.30754274129867554,0.09671783447265625,0.9466058015823364,2.868177890777588,0,0,0,1],[-0.1902216374874115,0.9486978650093079,0.2525619864463806,1.112776279449463,-0.7328487634658813,0.033964648842811584,-0.679542601108551,-2.0665738582611084,-0.6532589197158813,-0.3143536448478699,0.6887916922569275,2.932779312133789,0,0,0,1],[-0.23250159621238708,0.8972221612930298,0.37541303038597107,2.033447742462158,-0.7412144541740417,0.08645511418581009,-0.6656767725944519,-2.0336124897003174,-0.6297163963317871,-0.4330327808856964,0.6449335217475891,2.6277122497558594,0,0,0,1],[-0.992982029914856,0.015368163585662842,0.11726239323616028,-0.40395089983940125,-0.09534357488155365,0.48262155055999756,-0.8706239461898804,-1.5891090631484985,-0.06997328996658325,-0.8756941556930542,-0.4777694046497345,1.9604336023330688,0,0,0,1],[-0.7261648178100586,-0.6240622997283936,-0.288497656583786,-0.8264634013175964,-0.633240282535553,0.7705196142196655,-0.0728445053100586,-1.3959901332855225,0.267752468585968,0.12979131937026978,-0.9547056555747986,1.6852775812149048,0,0,0,1],[-0.9327815175056458,-0.3604295551776886,0.0030325502157211304,-1.4629199504852295,-0.05812728404998779,0.14211750030517578,-0.988141655921936,-0.5867390036582947,0.35572439432144165,-0.9218965172767639,-0.1535155177116394,1.8098779916763306,0,0,0,1],[-0.9164544939994812,-0.10583055019378662,-0.3858899474143982,-2.0386741161346436,-0.3139573335647583,0.7880815863609314,0.5294884443283081,-0.3597189784049988,0.24807660281658173,0.6064051389694214,-0.7554671764373779,0.3372304439544678,0,0,0,1],[-0.6760077476501465,0.6806324124336243,0.2824058532714844,0.028942227363586426,0.684064507484436,0.7221229672431946,-0.10292762517929077,-1.3768763542175293,-0.27398762106895447,0.12360402941703796,-0.9537572860717773,1.4987592697143555,0,0,0,1],[-0.8547486662864685,0.4665389657020569,-0.22747814655303955,0.7158432006835938,0.2574397623538971,0.000504709780216217,-0.9662943482398987,-0.6655194759368896,-0.4506991505622864,-0.8845007419586182,-0.1205371543765068,1.6332976818084717,0,0,0,1],[-0.8240997195243835,0.11046135425567627,0.5555702447891235,1.4610981941223145,0.4248330295085907,0.7692700028419495,0.47722184658050537,-0.6647133231163025,-0.3746689260005951,0.6293030381202698,-0.6808827519416809,0.22038567066192627,0,0,0,1],[-0.18689770996570587,0.9815114736557007,-0.04128284379839897,-3.76397705078125,-0.8145029544830322,-0.1783166229724884,-0.5520761013031006,0.549994707107544,-0.5492305755615234,-0.06955678015947342,0.8327710628509521,0.31988048553466797,0,0,0,1]],"0.4":[[-0.993686854839325,-0.09496568143367767,0.059739019721746445,-0.4265687167644501,0.05598447471857071,-0.8811509013175964,-0.46950963139533997,-1.5767556428909302,0.09722638130187988,-0.463201105594635,0.880903959274292,1.9351675510406494,0,0,0,1],[-0.9281108379364014,0.0732201635837555,0.3650341033935547,-0.43507885932922363,0.3681929409503937,0.32583385705947876,0.8707851767539978,-1.6672403812408447,-0.05518122389912605,0.9425876140594482,-0.32936862111091614,1.9002935886383057,0,0,0,1],[-0.9343569278717041,0.02979307249188423,-0.355092316865921,-0.35519713163375854,-0.3236411213874817,0.34603893756866455,0.880632758140564,-1.294475793838501,0.14911234378814697,0.9377471804618835,-0.3136810064315796,3.0055460929870605,0,0,0,1],[-0.9461742043495178,-0.04911104589700699,-0.3199117183685303,-0.3486228585243225,-0.2960395812988281,0.5308518409729004,0.7940765023231506,-1.2181174755096436,0.1308276653289795,0.846040666103363,-0.5168164372444153,3.212473154067993,0,0,0,1],[0.09236668050289154,0.20313376188278198,-0.9747851490974426,-1.2628417015075684,0.63401198387146,0.742870032787323,0.21488173305988312,-1.0199925899505615,0.7677879333496094,-0.6378724575042725,-0.06017264723777771,2.682793378829956,0,0,0,1],[-0.1495751142501831,0.21141588687896729,-0.9658837914466858,-1.1167107820510864,0.5798596739768982,0.810004711151123,0.0875004380941391,-0.4855846166610718,0.8008689284324646,-0.5469883680343628,-0.2437478005886078,2.223918914794922,0,0,0,1],[-0.13666489720344543,0.25632989406585693,-0.9568796753883362,-0.9129368662834167,0.6183976531028748,0.7766904830932617,0.11973892897367477,0.29514074325561523,0.7738915681838989,-0.5753671526908875,-0.2646598219871521,1.696702480316162,0,0,0,1],[-0.32455316185951233,0.788784384727478,-0.5220005512237549,0.5289866328239441,-0.8665765523910522,-0.46914952993392944,-0.1701284945011139,-1.7291088104248047,-0.3790910243988037,0.39713743329048157,0.8358058929443359,2.7852694988250732,0,0,0,1],[-0.19609639048576355,0.9644305109977722,-0.1772572100162506,1.0558440685272217,-0.8309499025344849,-0.25941383838653564,-0.49216508865356445,-2.042470693588257,-0.5206419229507446,0.05077981948852539,0.8522634506225586,3.0505318641662598,0,0,0,1],[-0.24295927584171295,0.9691404700279236,-0.041687220335006714,1.9917833805084229,-0.8237016797065735,-0.2288152575492859,-0.518805205821991,-2.2942209243774414,-0.5123335719108582,-0.09171092510223389,0.8538751602172852,3.099811553955078,0,0,0,1],[-0.9800293445587158,-0.012939982116222382,0.19843357801437378,-0.4372303783893585,-0.17847047746181488,0.49733471870422363,-0.8490034341812134,-1.6641600131988525,-0.08770182728767395,-0.8674622178077698,-0.48971205949783325,1.8765299320220947,0,0,0,1],[-0.6779332756996155,-0.6944330334663391,-0.24118462204933167,-0.8727709650993347,-0.714867115020752,0.6992495656013489,-0.003937870264053345,-1.5187413692474365,0.17138251662254333,0.16974547505378723,-0.9704714417457581,1.5876383781433105,0,0,0,1],[-0.9406320452690125,-0.3258674144744873,0.09498757123947144,-1.5829674005508423,-0.15088826417922974,0.1507626324892044,-0.9769871830940247,-0.7797327637672424,0.30404749512672424,-0.9333174824714661,-0.190981924533844,1.7548179626464844,0,0,0,1],[-0.8972615003585815,-0.20227031409740448,-0.3924400806427002,-2.1035115718841553,-0.3996354639530182,0.7499008178710938,0.5272008180618286,-0.5389028787612915,0.1876537948846817,0.6298699975013733,-0.7536910176277161,0.2639263868331909,0,0,0,1],[-0.7118145227432251,0.6123296022415161,0.34405434131622314,-0.014727316796779633,0.6531707644462585,0.7572018504142761,0.003718465566635132,-1.3919048309326172,-0.25824135541915894,0.2273731678724289,-0.9389426708221436,1.435369849205017,0,0,0,1],[-0.8474242687225342,0.5089876651763916,-0.15101175010204315,0.6037368178367615,0.21234065294265747,0.06423256546258926,-0.9750826358795166,-0.6477475166320801,-0.48660486936569214,-0.8583741188049316,-0.16251112520694733,1.673579454421997,0,0,0,1],[-0.8327490091323853,0.02315691113471985,0.5531671047210693,1.4168000221252441,0.3787117004394531,0.7526450157165527,0.5386127233505249,-0.5451416969299316,-0.4038655161857605,0.6580196619033813,-0.6355335116386414,0.3024024963378906,0,0,0,1],[-0.09305713325738907,0.9955467581748962,-0.015065602958202362,-4.046630382537842,-0.8099472522735596,-0.0844912901520729,-0.5803849101066589,0.32619115710258484,-0.5790732502937317,-0.04180661588907242,0.8142029047012329,0.3229975700378418,0,0,0,1]],"0.44":[[-0.9967254400253296,-0.050529178231954575,0.0631263256072998,-0.4471258521080017,0.013484766706824303,-0.8736401796340942,-0.4863852858543396,-1.6129603385925293,0.07972635328769684,-0.48394134640693665,0.871461033821106,1.897700309753418,0,0,0,1],[-0.9330193996429443,0.06806905567646027,0.3533289432525635,-0.4513012170791626,0.3550034165382385,0.3343617916107178,0.8730260133743286,-1.7029087543487549,-0.058713749051094055,0.9399831295013428,-0.3361309766769409,1.8607146739959717,0,0,0,1],[-0.9299507141113281,0.024373210966587067,-0.3668757379055023,-0.37733176350593567,-0.3351885676383972,0.3539312183856964,0.873144268989563,-1.3202251195907593,0.1511300653219223,0.9349536895751953,-0.3209690451622009,2.962984561920166,0,0,0,1],[-0.9421311020851135,-0.056984540075063705,-0.3303664028644562,-0.37195348739624023,-0.30789899826049805,0.5369048118591309,0.7854495048522949,-1.2421252727508545,0.1326168030500412,0.8417157530784607,-0.5233803391456604,3.169295310974121,0,0,0,1],[0.06303204596042633,0.26492229104042053,-0.9622074961662292,-1.288409948348999,0.7820543646812439,0.5858513116836548,0.21253176033496857,-1.0607876777648926,0.6200145483016968,-0.7658946514129639,-0.17025628685951233,2.6374738216400146,0,0,0,1],[-0.18952259421348572,0.1596413105726242,-0.968811571598053,-1.0978293418884277,0.7141769528388977,0.6995387077331543,-0.024439498782157898,-0.6393362283706665,0.6738193035125732,-0.6965347528457642,-0.2465905249118805,2.0865023136138916,0,0,0,1],[-0.17907898128032684,0.20672039687633514,-0.9618719220161438,-0.9439585208892822,0.7474575638771057,0.6643001437187195,0.0036081522703170776,0.03491616249084473,0.639717161655426,-0.7183122038841248,-0.27347689867019653,1.4151451587677002,0,0,0,1],[-0.24759790301322937,0.7472450733184814,-0.6167004704475403,0.5128743648529053,-0.8869502544403076,-0.430965781211853,-0.16609248518943787,-1.7444727420806885,-0.3898885250091553,0.5058589577674866,0.7694759368896484,2.746756076812744,0,0,0,1],[-0.20956675708293915,0.9143432974815369,-0.346493124961853,1.011986255645752,-0.8421005606651306,-0.34886786341667175,-0.4112865626811981,-2.032330274581909,-0.49693742394447327,0.2055903524160385,0.8430808782577515,3.084637403488159,0,0,0,1],[-0.25568342208862305,0.9430196285247803,-0.21293070912361145,1.8993180990219116,-0.8300330638885498,-0.3270540237426758,-0.4517516493797302,-2.37089204788208,-0.49565041065216064,0.06123434752225876,0.8663605451583862,3.284154176712036,0,0,0,1],[-0.9718930721282959,-0.026108013466000557,0.23396995663642883,-0.4531513750553131,-0.2151191234588623,0.5022364258766174,-0.8375452160835266,-1.6993846893310547,-0.09564164280891418,-0.8643361330032349,-0.4937364459037781,1.8369873762130737,0,0,0,1],[-0.6535165905952454,-0.7233397364616394,-0.22292503714561462,-0.8925828337669373,-0.7462829351425171,0.6649441719055176,0.030180007219314575,-1.578134298324585,0.12640243768692017,0.1860881745815277,-0.9743683338165283,1.5397671461105347,0,0,0,1],[-0.9413197040557861,-0.3097180724143982,0.1341334879398346,-1.6332627534866333,-0.1897096484899521,0.15682174265384674,-0.9692353010177612,-0.8730693459510803,0.2791546881198883,-0.9378069043159485,-0.20637574791908264,1.7245614528656006,0,0,0,1],[-0.8864573836326599,-0.24319954216480255,-0.39376014471054077,-2.128009796142578,-0.4345228970050812,0.7302341461181641,0.5272073745727539,-0.6225606203079224,0.15932059288024902,0.638444721698761,-0.7529975175857544,0.22649848461151123,0,0,0,1],[-0.7276259660720825,0.5789772272109985,0.3678932785987854,-0.03729607164859772,0.6382130980491638,0.7679888010025024,0.0536361038684845,-1.3986856937408447,-0.2514840364456177,0.2738213539123535,-0.9283197522163391,1.4066669940948486,0,0,0,1],[-0.842212438583374,0.5263621807098389,-0.11670810729265213,0.5478572845458984,0.19343659281730652,0.0929509624838829,-0.9766997694969177,-0.6448408961296082,-0.5032498836517334,-0.8451644778251648,-0.18010210990905762,1.6911448240280151,0,0,0,1],[-0.8346483707427979,-0.015513360500335693,0.5505644083023071,1.3886747360229492,0.3589054346084595,0.7429190278053284,0.5650293827056885,-0.4963599741458893,-0.4177905023097992,0.6692015528678894,-0.6145083904266357,0.3410691022872925,0,0,0,1],[-0.04976769909262657,0.9987589716911316,-0.0019722734577953815,-4.180635929107666,-0.8055377006530762,-0.04130665585398674,-0.5911031365394592,0.19907987117767334,-0.5904510021209717,-0.027829106897115707,0.8065935373306274,0.32448530197143555,0,0,0,1]],"0.48":[[-0.9971127510070801,-0.040900081396102905,0.06397975236177444,-0.45167264342308044,0.004313472658395767,-0.8716989755630493,-0.4900227189064026,-1.6209681034088135,0.07581305503845215,-0.48833194375038147,0.8693585395812988,1.8894134759902954,0,0,0,1],[-0.9340271353721619,0.06693177670240402,0.35087552666664124,-0.4549073278903961,0.35220810770988464,0.3362523913383484,0.8734323382377625,-1.710769772529602,-0.05952226370573044,0.9393905997276306,-0.33764269948005676,1.8519796133041382,0,0,0,1],[-0.9290096759796143,0.023180678486824036,-0.36932939291000366,-0.38224437832832336,-0.33759260177612305,0.355686753988266,0.8715035915374756,-1.3258858919143677,0.15156757831573486,0.934317946434021,-0.3226105570793152,2.9535703659057617,0,0,0,1],[-0.9412651658058167,-0.05868642032146454,-0.33253014087677,-0.3771292269229889,-0.31037166714668274,0.5382567644119263,0.7835491895675659,-1.2473986148834229,0.1330028921365738,0.8407351970672607,-0.524856686592102,3.159740686416626,0,0,0,1],[0.05596001818776131,0.2772457003593445,-0.9591682553291321,-1.2940057516098022,0.8104799389839172,0.548422634601593,0.20580561459064484,-1.0696616172790527,0.5830881595611572,-0.7889028787612915,-0.19401231408119202,2.6274280548095703,0,0,0,1],[-0.19858872890472412,0.15036676824092865,-0.968479573726654,-1.094559907913208,0.740925133228302,0.6698763370513916,-0.04792281985282898,-0.6751357316970825,0.6415553689002991,-0.7270871996879578,-0.24444040656089783,2.0599048137664795,0,0,0,1],[-0.18858684599399567,0.19789312779903412,-0.9619114995002747,-0.9496283531188965,0.7727885246276855,0.6343165040016174,-0.021011196076869965,-0.029473483562469482,0.6059982180595398,-0.7473160028457642,-0.2725532650947571,1.3590996265411377,0,0,0,1],[-0.2440410852432251,0.7432520389556885,-0.6229124069213867,0.5092200040817261,-0.8881819248199463,-0.4291800260543823,-0.16412481665611267,-1.7479573488235474,-0.38932788372039795,0.5132066011428833,0.7648810148239136,2.7382681369781494,0,0,0,1],[-0.2050364762544632,0.9130823612213135,-0.35247716307640076,1.0056648254394531,-0.8437056541442871,-0.3474266827106476,-0.40921247005462646,-2.0346221923828125,-0.4961049258708954,0.2134835124015808,0.841608464717865,3.08105731010437,0,0,0,1],[-0.25108569860458374,0.9430160522460938,-0.2183489054441452,1.891772985458374,-0.8317486643791199,-0.32557615637779236,-0.4496593177318573,-2.3717851638793945,-0.495125412940979,0.06870836764574051,0.8661004304885864,3.288234233856201,0,0,0,1],[-0.97001051902771,-0.029033629223704338,0.24132278561592102,-0.45669490098953247,-0.22279220819473267,0.5031407475471497,-0.8349927663803101,-1.7071473598480225,-0.09717650711536407,-0.8637166619300842,-0.494520366191864,1.8282623291015625,0,0,0,1],[-0.6484206318855286,-0.7290292382240295,-0.21924231946468353,-0.8967722654342651,-0.7523079514503479,0.6577187180519104,0.03793010115623474,-1.591728687286377,0.11654752492904663,0.18953247368335724,-0.9749329686164856,1.5287971496582031,0,0,0,1],[-0.9413528442382812,-0.3061296343803406,0.14191429316997528,-1.6434675455093384,-0.19738532602787018,0.15848508477210999,-0.9674303531646729,-0.893810510635376,0.27366775274276733,-0.9387050867080688,-0.20961599051952362,1.7173205614089966,0,0,0,1],[-0.8841888904571533,-0.2514617443084717,-0.39367151260375977,-2.1324822902679443,-0.44132089614868164,0.7259180545806885,0.5275213122367859,-0.6406446695327759,0.1531217247247696,0.6401640176773071,-0.7528238296508789,0.21782279014587402,0,0,0,1],[-0.730929434299469,0.5716834664344788,0.3727201521396637,-0.04242732375860214,0.6349789500236511,0.7698359489440918,0.06445148587226868,-1.3997739553451538,-0.25008752942085266,0.2837789058685303,-0.9257028102874756,1.4006738662719727,0,0,0,1],[-0.8409097790718079,0.529991626739502,-0.1094522774219513,0.5354486107826233,0.1895543783903122,0.09901678562164307,-0.9768646955490112,-0.6443256139755249,-0.5068924427032471,-0.8422024250030518,-0.18372637033462524,1.6950597763061523,0,0,0,1],[-0.8348509073257446,-0.023705899715423584,0.5499656200408936,1.382063627243042,0.3547993302345276,0.7406957149505615,0.5705147981643677,-0.48615509271621704,-0.4208816885948181,0.6714223027229309,-0.6099597215652466,0.34971559047698975,0,0,0,1],[-0.04031827673316002,0.9991864562034607,0.0009521371102891862,-4.2102742195129395,-0.8046000599861145,-0.031901270151138306,-0.5929597020149231,0.16426607966423035,-0.5924469828605652,-0.024673203006386757,0.8052315711975098,0.3248175382614136,0,0,0,1]],"0.52":[[-0.9972848892211914,-0.03548017144203186,0.06453149020671844,-0.4545157253742218,-0.0008880384266376495,-0.8704279065132141,-0.4922953248023987,-1.625975251197815,0.0736367255449295,-0.4910159707069397,0.8680328726768494,1.8842318058013916,0,0,0,1],[-0.9344882369041443,0.06664786487817764,0.34970027208328247,-0.4572201371192932,0.35093972086906433,0.3374190032482147,0.873492956161499,-1.7156795263290405,-0.059779033064842224,0.9389923810958862,-0.3387032747268677,1.8465235233306885,0,0,0,1],[-0.928551435470581,0.02287103608250618,-0.3704993724822998,-0.384878009557724,-0.33861055970191956,0.35679128766059875,0.8706566691398621,-1.329435110092163,0.15210360288619995,0.9339042901992798,-0.32355445623397827,2.9476592540740967,0,0,0,1],[-0.9408447742462158,-0.05924525856971741,-0.33361902832984924,-0.3798311948776245,-0.3114267587661743,0.539148211479187,0.7825169563293457,-1.250704050064087,0.1335095465183258,0.8401246070861816,-0.525705099105835,3.153738260269165,0,0,0,1],[0.054211605340242386,0.2861509919166565,-0.9566500186920166,-1.2970192432403564,0.8235767483711243,0.5289114713668823,0.20487752556800842,-1.0747573375701904,0.5646089911460876,-0.7989808320999146,-0.20699405670166016,2.6213669776916504,0,0,0,1],[-0.20174899697303772,0.1461860090494156,-0.968466579914093,-1.0911670923233032,0.7534757852554321,0.6549034118652344,-0.058107420802116394,-0.6942675113677979,0.6257573962211609,-0.7414387464523315,-0.24227367341518402,2.0465939044952393,0,0,0,1],[-0.19194699823856354,0.19387415051460266,-0.9620653986930847,-0.9502651691436768,0.7846207618713379,0.6191620230674744,-0.031771108508110046,-0.0630369782447815,0.5895146131515503,-0.7609542012214661,-0.2709639370441437,1.331955909729004,0,0,0,1],[-0.24237790703773499,0.7406524419784546,-0.6266470551490784,0.5070939064025879,-0.8888311386108398,-0.4284236431121826,-0.162578746676445,-1.7506089210510254,-0.3888847231864929,0.5175780057907104,0.7621556520462036,2.732701063156128,0,0,0,1],[-0.20280520617961884,0.9120322465896606,-0.3564642071723938,1.0018023252487183,-0.8445973992347717,-0.34712839126586914,-0.4076231122016907,-2.0367684364318848,-0.49550431966781616,0.21840064227581024,0.8406997919082642,3.0784101486206055,0,0,0,1],[-0.24880295991897583,0.9427652955055237,-0.2220139056444168,1.8868913650512695,-0.8326780796051025,-0.32528582215309143,-0.44814684987068176,-2.3736419677734375,-0.49471527338027954,0.07336583733558655,0.8659524321556091,3.290358781814575,0,0,0,1],[-0.9688406586647034,-0.030732128769159317,0.24577155709266663,-0.45897406339645386,-0.22739526629447937,0.5036940574645996,-0.8334169387817383,-1.711995244026184,-0.09818097949028015,-0.863335371017456,-0.4949875473976135,1.8228132724761963,0,0,0,1],[-0.6453940868377686,-0.7324030995368958,-0.216916024684906,-0.899397075176239,-0.7558389902114868,0.6533538699150085,0.04285350441932678,-1.600018858909607,0.11033686995506287,0.19161096215248108,-0.9752493500709534,1.521976351737976,0,0,0,1],[-0.9414048194885254,-0.30378901958465576,0.14652498066425323,-1.6496609449386597,-0.2019149512052536,0.15963563323020935,-0.9663059711456299,-0.9064141511917114,0.27016252279281616,-0.9392704367637634,-0.2116212248802185,1.7127565145492554,0,0,0,1],[-0.8828633427619934,-0.2564539909362793,-0.3934258818626404,-2.134936809539795,-0.4453069567680359,0.7232502102851868,0.5278363227844238,-0.6514104604721069,0.1491795927286148,0.641202449798584,-0.7527316212654114,0.2123556137084961,0,0,0,1],[-0.7328633069992065,0.5672097206115723,0.3757457137107849,-0.045678745955228806,0.6330647468566895,0.7708228826522827,0.07114329934120178,-1.40064537525177,-0.24928024411201477,0.29000961780548096,-0.9239881038665771,1.396882176399231,0,0,0,1],[-0.8400050401687622,0.5323065519332886,-0.10507864505052567,0.527732253074646,0.18729211390018463,0.10270942002534866,-0.9769200682640076,-0.6443634629249573,-0.5092283487319946,-0.840298056602478,-0.18597310781478882,1.6974661350250244,0,0,0,1],[-0.834862232208252,-0.028729885816574097,0.5497088432312012,1.3780453205108643,0.35239094495773315,0.7392860054969788,0.5738267302513123,-0.48029425740242004,-0.4228780269622803,0.6727786064147949,-0.6070777177810669,0.3551640510559082,0,0,0,1],[-0.0344538651406765,0.9994022846221924,0.002790745347738266,-4.2288055419921875,-0.803923487663269,-0.026055501773953438,-0.5941616296768188,0.14540979266166687,-0.5937339067459106,-0.022714713588356972,0.8043407797813416,0.325023889541626,0,0,0,1]],"0.56":[[-0.9973676204681396,-0.03241034969687462,0.06487051397562027,-0.45623260736465454,-0.003849109634757042,-0.8696430325508118,-0.49366647005081177,-1.6289989948272705,0.07241407036781311,-0.4926166534423828,0.8672284483909607,1.8811025619506836,0,0,0,1],[-0.9347106218338013,0.06662090122699738,0.34911099076271057,-0.4586363732814789,0.35033518075942993,0.3381193280220032,0.8734650611877441,-1.7186428308486938,-0.05984996259212494,0.938742458820343,-0.33938294649124146,1.8432303667068481,0,0,0,1],[-0.9283190965652466,0.02283146232366562,-0.37108397483825684,-0.38632020354270935,-0.3390624523162842,0.35746169090270996,0.8702059984207153,-1.331580638885498,0.1525162160396576,0.9336490631103516,-0.3240967094898224,2.9440805912017822,0,0,0,1],[-0.9406322836875916,-0.0594121515750885,-0.3341885209083557,-0.38128212094306946,-0.3118991553783417,0.5397031903266907,0.7819463014602661,-1.252701759338379,0.1339053511619568,0.8397566080093384,-0.526192307472229,3.1501033306121826,0,0,0,1],[0.054038118571043015,0.29178386926651,-0.954957127571106,-1.298675775527954,0.8300648331642151,0.518468976020813,0.20538727939128876,-1.077681303024292,0.5550440549850464,-0.8037738800048828,-0.21418213844299316,2.617781162261963,0,0,0,1],[-0.2028198391199112,0.14406917989253998,-0.9685603380203247,-1.0887714624404907,0.7597782015800476,0.6471396684646606,-0.06284084916114807,-0.7047035694122314,0.6177399158477783,-0.7486352920532227,-0.24071316421031952,2.039560079574585,0,0,0,1],[-0.19311942160129547,0.19181741774082184,-0.9622432589530945,-0.9499098658561707,0.7905495166778564,0.6112926602363586,-0.03680339828133583,-0.08095616102218628,0.5811522603034973,-0.767807126045227,-0.26969337463378906,1.3179857730865479,0,0,0,1],[-0.24156227707862854,0.7390493750572205,-0.6288511753082275,0.5058648586273193,-0.8891842365264893,-0.42808565497398376,-0.16153667867183685,-1.752368688583374,-0.3885857164859772,0.5201432108879089,0.7605603933334351,2.729250907897949,0,0,0,1],[-0.20166034996509552,0.9113097786903381,-0.35895341634750366,0.9995025396347046,-0.8451000452041626,-0.34714946150779724,-0.4065623879432678,-2.038302421569824,-0.49511465430259705,0.22136393189430237,0.8401543498039246,3.0766732692718506,0,0,0,1],[-0.2476239949464798,0.9425301551818848,-0.22431954741477966,1.8838905096054077,-0.8331930637359619,-0.3253227174282074,-0.4471622705459595,-2.3751964569091797,-0.4944400489330292,0.0761733204126358,0.8658674359321594,3.2914977073669434,0,0,0,1],[-0.9682500958442688,-0.0318312905728817,0.24795019626617432,-0.46037185192108154,-0.22977587580680847,0.5040044188499451,-0.8325760960578918,-1.714920997619629,-0.09846603125333786,-0.8631143569946289,-0.49531644582748413,1.8195246458053589,0,0,0,1],[-0.6443410515785217,-0.7337461709976196,-0.2155040204524994,-0.9010530710220337,-0.7572776675224304,0.6514638662338257,0.046105414628982544,-1.6049339771270752,0.10656315088272095,0.19290411472320557,-0.9754140377044678,1.5178028345108032,0,0,0,1],[-0.9416301250457764,-0.3022318482398987,0.14828822016716003,-1.6527360677719116,-0.20366865396499634,0.16070252656936646,-0.9657609462738037,-0.9131703972816467,0.268053263425827,-0.9395907521247864,-0.21287766098976135,1.7099864482879639,0,0,0,1],[-0.8825162649154663,-0.2586890459060669,-0.392741322517395,-2.1355245113372803,-0.44678524136543274,0.7218674421310425,0.5284795165061951,-0.6564624309539795,0.1467951536178589,0.641862690448761,-0.7526377439498901,0.20907390117645264,0,0,0,1],[-0.7338388562202454,0.5647245645523071,0.3775811195373535,-0.04765919968485832,0.632084846496582,0.7712676525115967,0.07493653893470764,-1.4012006521224976,-0.24889734387397766,0.2936547100543976,-0.9229395985603333,1.3945590257644653,0,0,0,1],[-0.8393895626068115,0.5337347984313965,-0.10272853821516037,0.5232681632041931,0.18610969185829163,0.10465660691261292,-0.97693932056427,-0.6445668339729309,-0.5106751322746277,-0.83915114402771,-0.1871809959411621,1.6987699270248413,0,0,0,1],[-0.8347510695457458,-0.03154575824737549,0.5497239828109741,1.3758625984191895,0.35112959146499634,0.7385323643684387,0.5755677223205566,-0.4773871898651123,-0.4241454303264618,0.6734799742698669,-0.6054136157035828,0.35829997062683105,0,0,0,1],[-0.03091578744351864,0.9995141625404358,0.0038924645632505417,-4.239995956420898,-0.8035762906074524,-0.022538818418979645,-0.594774603843689,0.13408687710762024,-0.5943980813026428,-0.021515823900699615,0.8038830161094666,0.32514846324920654,0,0,0,1]],"0.6":[[-0.9974154829978943,-0.030485235154628754,0.06506218761205673,-0.4571925103664398,-0.005685247480869293,-0.8692017793655396,-0.4944249093532562,-1.6306895017623901,0.07162482291460037,-0.49351704120635986,0.8667818903923035,1.8793530464172363,0,0,0,1],[-0.9348920583724976,0.0664445012807846,0.3486575186252594,-0.4594079852104187,0.34982654452323914,0.33851638436317444,0.8735147714614868,-1.720299243927002,-0.059985969215631485,0.9386116862297058,-0.33972012996673584,1.8413888216018677,0,0,0,1],[-0.9281427264213562,0.022645041346549988,-0.3715354800224304,-0.3872937560081482,-0.3394853174686432,0.3578340411186218,0.86988765001297,-1.3327744007110596,0.1526465117931366,0.9335106611251831,-0.3244331181049347,2.942089557647705,0,0,0,1],[-0.9404700398445129,-0.0596931092441082,-0.3345940411090851,-0.3822968006134033,-0.3123355805873871,0.5399964451789856,0.7815690636634827,-1.2538132667541504,0.13402515649795532,0.8395478129386902,-0.5264945030212402,3.1480817794799805,0,0,0,1],[0.053071435540914536,0.2943318486213684,-0.9542286396026611,-1.2997806072235107,0.835009753704071,0.5109984874725342,0.20405851304531097,-1.079474925994873,0.5476704239845276,-0.8076193332672119,-0.21865031123161316,2.6156911849975586,0,0,0,1],[-0.20420224964618683,0.14217117428779602,-0.9685498476028442,-1.0880433320999146,0.7645151019096375,0.6411066651344299,-0.06707824766635895,-0.7118713855743408,0.6114072203636169,-0.7541679739952087,-0.2396073043346405,2.0347037315368652,0,0,0,1],[-0.1945926547050476,0.18999013304710388,-0.9623084664344788,-0.9510111212730408,0.7949976325035095,0.6052073836326599,-0.04127269238233566,-0.09393888711929321,0.5745548605918884,-0.7730637192726135,-0.2688104808330536,1.3077967166900635,0,0,0,1],[-0.24090221524238586,0.7381739020347595,-0.6301307082176208,0.5051095485687256,-0.8894224762916565,-0.42776310443878174,-0.16107653081417084,-1.753182053565979,-0.3884492516517639,0.5216488838195801,0.759597897529602,2.7274227142333984,0,0,0,1],[-0.2008017897605896,0.9109854102134705,-0.3602546453475952,0.9981625080108643,-0.8454179763793945,-0.3469371199607849,-0.40608149766921997,-2.038900375366211,-0.49492016434669495,0.22302395105361938,0.8398295640945435,3.07585072517395,0,0,0,1],[-0.2467491775751114,0.942475438117981,-0.22550901770591736,1.8822356462478638,-0.8335294127464294,-0.32510778307914734,-0.44669070839881897,-2.3755884170532227,-0.49430984258651733,0.0777478814125061,0.8658015727996826,3.2922861576080322,0,0,0,1],[-0.9681482315063477,-0.03274243324995041,0.24822764098644257,-0.46113139390945435,-0.23045051097869873,0.5041249990463257,-0.8323164582252502,-1.7165565490722656,-0.09788575768470764,-0.8630098104476929,-0.4956134855747223,1.8176854848861694,0,0,0,1],[-0.645227313041687,-0.7331880331039429,-0.21474884450435638,-0.9021089673042297,-0.7568145990371704,0.6518327593803406,0.04843541979789734,-1.6077117919921875,0.10446780920028687,0.1937771737575531,-0.9754676818847656,1.5153089761734009,0,0,0,1],[-0.9421201348304749,-0.3011641502380371,0.1473425179719925,-1.653196930885315,-0.20281396806240082,0.16197943687438965,-0.9657275080680847,-0.9155167937278748,0.2669760286808014,-0.9397143721580505,-0.21368472278118134,1.7084333896636963,0,0,0,1],[-0.8831811547279358,-0.25843244791030884,-0.39141225814819336,-2.134279727935791,-0.44588178396224976,0.7215457558631897,0.5296804308891296,-0.6567690372467041,0.14553511142730713,0.6423276662826538,-0.7524857521057129,0.20732343196868896,0,0,0,1],[-0.7341079711914062,0.563701868057251,0.37858378887176514,-0.04877253621816635,0.6317943334579468,0.771342396736145,0.07659626007080078,-1.401375412940979,-0.2488401234149933,0.29541724920272827,-0.9223922491073608,1.3932381868362427,0,0,0,1],[-0.8389862179756165,0.5345315933227539,-0.10187379270792007,0.5211271047592163,0.1856764554977417,0.10523858666419983,-0.9769592881202698,-0.6447182893753052,-0.5114944577217102,-0.8385708928108215,-0.1875438541173935,1.6992053985595703,0,0,0,1],[-0.8345488905906677,-0.03274217247962952,0.5499602556228638,1.3749943971633911,0.35067665576934814,0.7383334636688232,0.5760988593101501,-0.4766089618206024,-0.4249166250228882,0.6736410856246948,-0.6046932935714722,0.3596622943878174,0,0,0,1],[-0.02891462855041027,0.9995715618133545,0.004477209877222776,-4.24625301361084,-0.8035943508148193,-0.02058112435042858,-0.5948210954666138,0.12471339106559753,-0.5944743156433105,-0.020796896889805794,0.8038455843925476,0.32521963119506836,0,0,0,1]],"0.64":[[-0.9974584579467773,-0.02883300557732582,0.06515628844499588,-0.4576549828052521,-0.0071999020874500275,-0.8689945340156555,-0.4947691857814789,-1.6315040588378906,0.07088615000247955,-0.4939808249473572,0.8665783405303955,1.8785101175308228,0,0,0,1],[-0.9351779818534851,0.0658087208867073,0.3480103611946106,-0.45970964431762695,0.34899333119392395,0.33872735500335693,0.873766303062439,-1.7210975885391235,-0.060379140079021454,0.938580334186554,-0.3397371768951416,1.840498685836792,0,0,0,1],[-0.9278981685638428,0.02199411764740944,-0.3721845746040344,-0.38833266496658325,-0.3402777910232544,0.3580055832862854,0.869507372379303,-1.333330512046814,0.15236817300319672,0.933460533618927,-0.3247085511684418,2.941162109375,0,0,0,1],[-0.9402426481246948,-0.060470595955848694,-0.335092693567276,-0.38347935676574707,-0.31314197182655334,0.540080189704895,0.7811885476112366,-1.2543315887451172,0.1337379813194275,0.8394383788108826,-0.5267422795295715,3.1471433639526367,0,0,0,1],[0.049580030143260956,0.29391634464263916,-0.9545444250106812,-1.30092453956604,0.841886043548584,0.501912534236908,0.1982736587524414,-1.080887794494629,0.5373737215995789,-0.8134477138519287,-0.2225591540336609,2.614394426345825,0,0,0,1],[-0.2076428234577179,0.13918080925941467,-0.9682525992393494,-1.0894861221313477,0.7709282040596008,0.6325623393058777,-0.07439914345741272,-0.719820499420166,0.6021252274513245,-0.7619014382362366,-0.23864544928073883,2.0292141437530518,0,0,0,1],[-0.19817551970481873,0.18716172873973846,-0.9621315002441406,-0.9553362131118774,0.801005482673645,0.5966554284095764,-0.048921167850494385,-0.11012351512908936,0.5649048686027527,-0.7803671360015869,-0.26816004514694214,1.2948532104492188,0,0,0,1],[-0.23988355696201324,0.7378333210945129,-0.6309177279472351,0.5045176148414612,-0.8896797895431519,-0.42715442180633545,-0.1612709015607834,-1.7529869079589844,-0.3884904384613037,0.5226287841796875,0.7589031457901001,2.7268848419189453,0,0,0,1],[-0.1996370106935501,0.9111144542694092,-0.36057573556900024,0.9973430633544922,-0.8456999063491821,-0.3460719883441925,-0.4062325954437256,-2.0382986068725586,-0.49490973353385925,0.2238398939371109,0.8396187424659729,3.075967311859131,0,0,0,1],[-0.24558676779270172,0.9427229762077332,-0.2257428616285324,1.8815414905548096,-0.8338598012924194,-0.32420164346694946,-0.446732759475708,-2.3741469383239746,-0.49433159828186035,0.07852628827095032,0.8657190203666687,3.293194532394409,0,0,0,1],[-0.9684700965881348,-0.03376716375350952,0.24683092534542084,-0.4614211320877075,-0.22976039350032806,0.5040844678878784,-0.8325315713882446,-1.7173454761505127,-0.09631143510341644,-0.8629940748214722,-0.4959491491317749,1.816796064376831,0,0,0,1],[-0.6480585336685181,-0.7307649850845337,-0.2144823968410492,-0.9028216004371643,-0.7545210123062134,0.654339075088501,0.050380319356918335,-1.609230399131775,0.10352802276611328,0.19448092579841614,-0.9754278063774109,1.5138057470321655,0,0,0,1],[-0.9429316520690918,-0.30037397146224976,0.14372019469738007,-1.6513389348983765,-0.19940263032913208,0.16368918120861053,-0.9661493897438049,-0.9144415259361267,0.2666807770729065,-0.9396711587905884,-0.2142431139945984,1.707676887512207,0,0,0,1],[-0.8848920464515686,-0.25581443309783936,-0.38926228880882263,-2.131159543991089,-0.4426185190677643,0.7221309542655945,0.5316162109375,-0.6529626846313477,0.1451033353805542,0.642717719078064,-0.7522361278533936,0.2066359519958496,0,0,0,1],[-0.733842134475708,0.5637785196304321,0.37898504734039307,-0.04930717870593071,0.6320223808288574,0.7711507081985474,0.07664290070533752,-1.4011180400848389,-0.24904507398605347,0.2957708239555359,-0.922223687171936,1.3925927877426147,0,0,0,1],[-0.8387389183044434,0.5348656177520752,-0.10215704888105392,0.5206581354141235,0.18576709926128387,0.104704350233078,-0.9769992828369141,-0.6446759700775146,-0.5118672251701355,-0.8384246826171875,-0.18718001246452332,1.6989175081253052,0,0,0,1],[-0.8342731595039368,-0.032716065645217896,0.5503800511360168,1.3750590085983276,0.3508010506629944,0.7386205196380615,0.5756546854972839,-0.47742003202438354,-0.42535537481307983,0.6733272075653076,-0.6047343015670776,0.3596079349517822,0,0,0,1],[-0.02790112979710102,0.9995996952056885,0.004698436241596937,-4.249269008636475,-0.8040021061897278,-0.019647959619760513,-0.5943018198013306,0.11315029859542847,-0.5939716696739197,-0.020359249785542488,0.8042283654212952,0.32525718212127686,0,0,0,1]],"0.68":[[-0.997514009475708,-0.026762524619698524,0.06519198417663574,-0.4578172266483307,-0.009027702733874321,-0.8689330220222473,-0.49484753608703613,-1.6317898035049438,0.0698908343911171,-0.49420586228370667,0.8665309548377991,1.8782143592834473,0,0,0,1],[-0.9356847405433655,0.064454086124897,0.3469007611274719,-0.459671288728714,0.3474912941455841,0.3388400077819824,0.8743214011192322,-1.7213783264160156,-0.061190102249383926,0.938633918762207,-0.3394443988800049,1.8401806354522705,0,0,0,1],[-0.9274822473526001,0.020613033324480057,-0.373299241065979,-0.3898676931858063,-0.34176576137542725,0.35804787278175354,0.8689064979553223,-1.3334884643554688,0.151569664478302,0.9334760904312134,-0.3250378370285034,2.940901756286621,0,0,0,1],[-0.9398542046546936,-0.062062591314315796,-0.33589112758636475,-0.38531914353370667,-0.3146499693393707,0.5399891138076782,0.7806457281112671,-1.2544801235198975,0.13292856514453888,0.8393810391426086,-0.5270386934280396,3.1468863487243652,0,0,0,1],[0.04209812730550766,0.29066532850265503,-0.9558984041213989,-1.3025811910629272,0.8532087802886963,0.48736533522605896,0.18577159941196442,-1.0825135707855225,0.5198691487312317,-0.8234009742736816,-0.22748082876205444,2.6133437156677246,0,0,0,1],[-0.21460841596126556,0.1341341733932495,-0.9674458503723145,-1.0934815406799316,0.7813757658004761,0.6178735494613647,-0.08766566216945648,-0.731911301612854,0.5860002636909485,-0.7747520804405212,-0.23740993440151215,2.021003246307373,0,0,0,1],[-0.2053806483745575,0.18243290483951569,-0.9615286588668823,-0.9641958475112915,0.810758650302887,0.5820085406303406,-0.06275064498186111,-0.1363721489906311,0.5481700897216797,-0.7924548983573914,-0.2674421966075897,1.2742561101913452,0,0,0,1],[-0.23808586597442627,0.7378805875778198,-0.6315434575080872,0.5038400888442993,-0.8900607824325562,-0.4260101616382599,-0.16219481825828552,-1.7517129182815552,-0.38872450590133667,0.5234957337379456,0.758185863494873,2.7273998260498047,0,0,0,1],[-0.1976844221353531,0.9117448329925537,-0.3600581884384155,0.9966971278190613,-0.8460610508918762,-0.34420034289360046,-0.4070707857608795,-2.0362603664398193,-0.49507707357406616,0.22415949404239655,0.8394351601600647,3.077061414718628,0,0,0,1],[-0.24365589022636414,0.9433714151382446,-0.2251262664794922,1.8815072774887085,-0.8343191146850586,-0.3222339451313019,-0.4472993016242981,-2.3702924251556396,-0.4945128858089447,0.07883988320827484,0.8655872941017151,3.2945988178253174,0,0,0,1],[-0.969163715839386,-0.03514895588159561,0.2438991665840149,-0.4613659977912903,-0.22794324159622192,0.503900408744812,-0.8331425189971924,-1.7176238298416138,-0.09361681342124939,-0.8630463480949402,-0.4963739514350891,1.8164771795272827,0,0,0,1],[-0.6528685092926025,-0.7264424562454224,-0.21458065509796143,-0.9033901691436768,-0.7503867745399475,0.658922553062439,0.05235639214515686,-1.6101634502410889,0.10335800051689148,0.1952003836631775,-0.9753021001815796,1.5127638578414917,0,0,0,1],[-0.9440946578979492,-0.2996891140937805,0.13737744092941284,-1.6473249197006226,-0.19340504705905914,0.16601452231407166,-0.9669718146324158,-0.9106699824333191,0.26698416471481323,-0.939481794834137,-0.2146948128938675,1.707385778427124,0,0,0,1],[-0.8876795768737793,-0.25087499618530273,-0.3861183524131775,-2.126051664352417,-0.4369417726993561,0.7235084772109985,0.5344324111938477,-0.6454765796661377,0.14528410136699677,0.6431158185005188,-0.7518609762191772,0.20664727687835693,0,0,0,1],[-0.7331655025482178,0.5646846890449524,0.3789460062980652,-0.049480900168418884,0.6326406002044678,0.7707610726356506,0.07545453310012817,-1.400380253791809,-0.24946865439414978,0.2950572371482849,-0.9223375916481018,1.3923752307891846,0,0,0,1],[-0.8386035561561584,0.534855306148529,-0.1033182293176651,0.521374523639679,0.18621405959129333,0.10322493314743042,-0.9770718812942505,-0.6443330645561218,-0.5119267702102661,-0.8386149406433105,-0.18616238236427307,1.6979990005493164,0,0,0,1],[-0.8339329957962036,-0.03175485134124756,0.5509519577026367,1.3757588863372803,0.3513314127922058,0.7393480539321899,0.5743963718414307,-0.4794403910636902,-0.42558491230010986,0.6725746989250183,-0.6054099798202515,0.3583855628967285,0,0,0,1],[-0.027459630742669106,0.9996119141578674,0.004672100301831961,-4.250330448150635,-0.8048200607299805,-0.019335869699716568,-0.5932038426399231,0.09602931141853333,-0.5928834676742554,-0.020049363374710083,0.8050386905670166,0.3252767324447632,0,0,0,1]]},"left":{"0.0":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.2916516065597534,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7550982236862183,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.260287046432495,0,0,0,1],[-0.626579999923706,-0.6957930326461792,0.3510974049568176,-1.3734016418457031,0.4815380573272705,0.008585356175899506,0.8763829469680786,-0.7992458343505859,-0.6127956509590149,0.7181909680366516,0.32967135310173035,2.2312352657318115,0,0,0,1],[-0.6763001680374146,-0.7238985300064087,-0.13634106516838074,-2.1917946338653564,-0.2329813838005066,0.034618549048900604,0.9718647003173828,-0.797195315361023,-0.6988116502761841,0.6890373229980469,-0.1920676827430725,3.066188097000122,0,0,0,1],[-0.7600587606430054,-0.6308332085609436,-0.1560765951871872,-2.3515329360961914,-0.4204532206058502,0.29423248767852783,0.8582808971405029,-0.7895562648773193,-0.49550941586494446,0.7179667949676514,-0.48887014389038086,3.218233823776245,0,0,0,1],[-0.5614073872566223,-0.2681126296520233,-0.7829031348228455,-2.593501567840576,0.8128193616867065,-0.35630157589912415,-0.4608408510684967,-0.3244543969631195,-0.1553923487663269,-0.8950783610343933,0.4179575443267822,2.2797555923461914,0,0,0,1],[-0.6649286150932312,0.028584927320480347,-0.7463597059249878,-2.786377191543579,0.7317361235618591,0.2253098338842392,-0.6432713866233826,-0.5807716846466064,0.14977440237998962,-0.9738680720329285,-0.17073166370391846,1.6358516216278076,0,0,0,1],[-0.6608630418777466,0.09034400433301926,-0.745048999786377,-2.7588253021240234,0.7434608340263367,0.21451666951179504,-0.633442223072052,-0.36360615491867065,0.10259780287742615,-0.9725333452224731,-0.20893347263336182,0.6971859931945801,0,0,0,1],[-0.06576278805732727,0.875764012336731,0.47823861241340637,-1.381085753440857,-0.8393417596817017,0.21063369512557983,-0.5011369585990906,-1.2512483596801758,-0.5396103858947754,-0.43436199426651,0.7212138175964355,3.4608964920043945,0,0,0,1],[0.017013907432556152,0.7024809122085571,0.7114987969398499,-0.796131432056427,-0.6075059175491333,0.5724509358406067,-0.5506685376167297,-1.1105585098266602,-0.7941320538520813,-0.42287108302116394,0.43650132417678833,3.1707704067230225,0,0,0,1],[-0.02532811276614666,0.6753109693527222,0.7370977401733398,-0.1144031286239624,-0.6435361504554749,0.5532245635986328,-0.5289642214775085,-0.5550188422203064,-0.7649955153465271,-0.4877471327781677,0.42057523131370544,2.7603917121887207,0,0,0,1],[-0.5163363218307495,0.8118541836738586,-0.2725607752799988,-1.3718698024749756,0.6758548021316528,0.19083788990974426,-0.71189945936203,-0.799155592918396,-0.5259438753128052,-0.551791250705719,-0.6472322940826416,2.2072253227233887,0,0,0,1],[-0.8347371816635132,0.4390854835510254,-0.3322913348674774,-1.2340691089630127,0.42115598917007446,0.8978485465049744,0.12843462824821472,-0.30926012992858887,0.3547411262989044,-0.03273731470108032,-0.9343913793563843,2.037153720855713,0,0,0,1],[-0.4081578254699707,-0.2114449441432953,-0.8880866765975952,-0.7555082440376282,0.8398662209510803,0.294319748878479,-0.4560706317424774,0.620333731174469,0.35781538486480713,-0.9320231676101685,0.057456523180007935,2.016484498977661,0,0,0,1],[-0.6907673478126526,0.7113114595413208,0.12990835309028625,-1.0932726860046387,0.6683297753334045,0.5595008730888367,0.49019768834114075,1.09048330783844,0.2759995460510254,0.425434410572052,-0.8618757724761963,0.5276604890823364,0,0,0,1],[0.05096498131752014,0.9977611303329468,-0.04330138862133026,-0.8242657780647278,0.9567426443099976,-0.06121327728033066,-0.28442224860191345,-1.1279370784759521,-0.2864362895488739,-0.02693270891904831,-0.9577207565307617,1.9114489555358887,0,0,0,1],[-0.4509833753108978,0.13610327243804932,-0.8820939660072327,0.15987826883792877,0.8141630291938782,-0.3422326445579529,-0.4690577983856201,-1.2058393955230713,-0.3657218813896179,-0.9297058582305908,0.04353104531764984,1.8713746070861816,0,0,0,1],[-0.27961963415145874,0.7806605100631714,0.5589112639427185,0.3772912919521332,0.9246143102645874,0.37577682733535767,-0.06228861212730408,-1.752526044845581,-0.25865238904953003,0.4993603527545929,-0.8268848061561584,0.3862513303756714,0,0,0,1],[-0.6923590898513794,0.476838618516922,-0.5415381789207458,-1.6475553512573242,-0.37695935368537903,-0.8789884448051453,-0.2920285761356354,3.207820415496826,-0.6152564883232117,0.0019492633873596787,0.7883245944976807,0.4238851070404053,0,0,0,1]],"0.04":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.2933788299560547,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7554678320884705,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.270317792892456,0,0,0,1],[-0.6278074979782104,-0.6941847801208496,0.35208672285079956,-1.3752652406692505,0.48117077350616455,0.009432800114154816,0.8765760660171509,-0.7993434071540833,-0.6118270754814148,0.7197349071502686,0.3280993700027466,2.244601011276245,0,0,0,1],[-0.6779266595840454,-0.7223477959632874,-0.13648810982704163,-2.191790819168091,-0.23341107368469238,0.03544802963733673,0.9717316627502441,-0.7963049411773682,-0.6970901489257812,0.6906207203865051,-0.1926354169845581,3.0813770294189453,0,0,0,1],[-0.7623904943466187,-0.6283225417137146,-0.15482701361179352,-2.351186990737915,-0.41651442646980286,0.2933492064476013,0.8605008125305176,-0.7884828448295593,-0.4952537417411804,0.7205252647399902,-0.48535239696502686,3.2337722778320312,0,0,0,1],[-0.5615175366401672,-0.2702142596244812,-0.7821011543273926,-2.595116138458252,0.812843382358551,-0.35702645778656006,-0.4602372348308563,-0.3241526782512665,-0.15486808121204376,-0.8941570520401001,0.4201183617115021,2.295419454574585,0,0,0,1],[-0.6644616723060608,0.025921165943145752,-0.74687260389328,-2.789503574371338,0.7322483062744141,0.22230002284049988,-0.6437356472015381,-0.5809913873672485,0.14934349060058594,-0.9746338129043579,-0.16669076681137085,1.652178168296814,0,0,0,1],[-0.6605250835418701,0.08768291026353836,-0.7456663250923157,-2.764519214630127,0.7438269853591919,0.21150608360767365,-0.6340245604515076,-0.3667268753051758,0.10211993008852005,-0.9734357595443726,-0.20492619276046753,0.7127745151519775,0,0,0,1],[-0.06721097230911255,0.87485271692276,0.479702889919281,-1.3803340196609497,-0.8398065567016602,0.20998838543891907,-0.500629186630249,-1.2502400875091553,-0.5387082695960999,-0.436505526304245,0.7205936908721924,3.4746816158294678,0,0,0,1],[0.015064239501953125,0.7017005681991577,0.7123122215270996,-0.7959883809089661,-0.6082232594490051,0.5718664526939392,-0.5504842400550842,-1.1099812984466553,-0.7936220765113831,-0.4249526262283325,0.43540558218955994,3.183123826980591,0,0,0,1],[-0.02722303941845894,0.6743802428245544,0.7378818392753601,-0.11501741409301758,-0.6442149877548218,0.5525897741317749,-0.528801679611206,-0.5550088882446289,-0.7643587589263916,-0.48975053429603577,0.4194028973579407,2.7707250118255615,0,0,0,1],[-0.5164762735366821,0.8116912841796875,-0.272781103849411,-1.3735970258712769,0.6757902503013611,0.1907278150320053,-0.711990237236023,-0.7995252013206482,-0.52588951587677,-0.5520690679550171,-0.647039532661438,2.2172560691833496,0,0,0,1],[-0.8333430886268616,0.4376137852668762,-0.33768853545188904,-1.2358331680297852,0.4221198558807373,0.8982463479042053,0.12234464287757874,-0.3096601068973541,0.3568672835826874,-0.0405900776386261,-0.9332730174064636,2.047067165374756,0,0,0,1],[-0.40994030237197876,-0.20988509058952332,-0.8876358270645142,-0.7587225437164307,0.8400177359580994,0.29232898354530334,-0.45707079768180847,0.6204586625099182,0.35541409254074097,-0.933001697063446,0.056469887495040894,2.0181329250335693,0,0,0,1],[-0.6921667456626892,0.7097349166870117,0.1310788094997406,-1.0939953327178955,0.6679776310920715,0.5611746311187744,0.48876214027404785,1.0874282121658325,0.2733336091041565,0.4258626401424408,-0.8625136613845825,0.5277458429336548,0,0,0,1],[0.046202920377254486,0.9981184601783752,-0.040311649441719055,-0.8260937333106995,0.9552711844444275,-0.05594775080680847,-0.2903900742530823,-1.1283692121505737,-0.2920992970466614,-0.025091655552387238,-0.9560589790344238,1.9213626384735107,0,0,0,1],[-0.45264899730682373,0.14391064643859863,-0.879999577999115,0.1585182249546051,0.8105491399765015,-0.34491634368896484,-0.47333139181137085,-1.2011584043502808,-0.37164390087127686,-0.9275359511375427,0.03947947919368744,1.8832097053527832,0,0,0,1],[-0.2825465798377991,0.7754765152931213,0.564627468585968,0.3884028494358063,0.9222496747970581,0.3815126419067383,-0.06247591972351074,-1.7521319389343262,-0.26386135816574097,0.5030751824378967,-0.8229782581329346,0.401552677154541,0,0,0,1],[-0.6899970173835754,0.47824084758758545,-0.54331374168396,-1.6475553512573242,-0.37852737307548523,-0.878219723701477,-0.29231351613998413,3.207820415496826,-0.616945207118988,0.003963598050177097,0.7869961857795715,0.4238851070404053,0,0,0,1]],"0.08":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.298405647277832,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7565435171127319,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.299510955810547,0,0,0,1],[-0.6313683390617371,-0.6894831657409668,0.3549462854862213,-1.3806891441345215,0.4801086187362671,0.011904299259185791,0.8771281242370605,-0.7996273636817932,-0.6089906096458435,0.7242038249969482,0.3235107660293579,2.2835001945495605,0,0,0,1],[-0.6826392412185669,-0.7178130745887756,-0.13692352175712585,-2.1917550563812256,-0.23465022444725037,0.03786751627922058,0.9713419675827026,-0.7937073707580566,-0.6920570135116577,0.6952053904533386,-0.19428503513336182,3.125554084777832,0,0,0,1],[-0.7691248655319214,-0.6209924817085266,-0.1510467827320099,-2.3501505851745605,-0.40498876571655273,0.2907440960407257,0.8668633103370667,-0.7853513956069946,-0.4943996071815491,0.7278982996940613,-0.47511371970176697,3.278960943222046,0,0,0,1],[-0.5618313550949097,-0.2763201594352722,-0.7797388434410095,-2.599785804748535,0.8129159212112427,-0.35912781953811646,-0.45847073197364807,-0.3232634961605072,-0.15334105491638184,-0.8914453387260437,0.4263943135738373,2.3410019874572754,0,0,0,1],[-0.6631267070770264,0.01814579963684082,-0.7482870817184448,-2.7985658645629883,0.7337136268615723,0.2135324627161026,-0.6450338363647461,-0.5816138982772827,0.14807911217212677,-0.9767676591873169,-0.15491294860839844,1.6997114419937134,0,0,0,1],[-0.6595667600631714,0.0799134373664856,-0.7473857402801514,-2.781075954437256,0.7448668479919434,0.20273543894290924,-0.6356667876243591,-0.3758000135421753,0.10072343051433563,-0.975967526435852,-0.19324249029159546,0.7582510709762573,0,0,0,1],[-0.07141493260860443,0.8721722364425659,0.4839577078819275,-1.3781390190124512,-0.8411517143249512,0.208100825548172,-0.49915650486946106,-1.2473077774047852,-0.5360618829727173,-0.44272929430007935,0.7187680006027222,3.5147628784179688,0,0,0,1],[0.00939534604549408,0.6994019746780396,0.714666485786438,-0.7955837845802307,-0.6103048920631409,0.5701555013656616,-0.5499544143676758,-1.1083097457885742,-0.7921099066734314,-0.4309978485107422,0.4322056174278259,3.219048023223877,0,0,0,1],[-0.03273093327879906,0.6716448068618774,0.7401496171951294,-0.11684346199035645,-0.6461839079856873,0.550733208656311,-0.5283355116844177,-0.5549977421760559,-0.7624783515930176,-0.4955662190914154,0.4159804582595825,2.8007826805114746,0,0,0,1],[-0.5168832540512085,0.8112162947654724,-0.2734221816062927,-1.3786238431930542,0.675602376461029,0.1904071867465973,-0.7122543454170227,-0.8006008863449097,-0.5257309675216675,-0.5528772473335266,-0.6464780569076538,2.2464492321014404,0,0,0,1],[-0.8292256593704224,0.4330710172653198,-0.3533187210559845,-1.2409671545028687,0.4250038266181946,0.8991261720657349,0.10461202263832092,-0.310824453830719,0.3629826605319977,-0.06341493129730225,-0.9296355843544006,2.0759189128875732,0,0,0,1],[-0.4152054488658905,-0.20538461208343506,-0.8862400054931641,-0.7683511972427368,0.8403436541557312,0.2865626811981201,-0.4601130187511444,0.6205302476882935,0.34846359491348267,-0.9357877969741821,0.053611353039741516,2.0229554176330566,0,0,0,1],[-0.6962886452674866,0.7050638198852539,0.13441267609596252,-1.0964348316192627,0.6668042540550232,0.5661106109619141,0.4846547842025757,1.0782885551452637,0.26562029123306274,0.42708665132522583,-0.8643162250518799,0.5281177759170532,0,0,0,1],[0.03242038935422897,0.9989795684814453,-0.03143945336341858,-0.8314142823219299,0.9506497383117676,-0.040532760322093964,-0.30760657787323,-1.1296268701553345,-0.30856725573539734,-0.019915267825126648,-0.9509941339492798,1.9502151012420654,0,0,0,1],[-0.45736491680145264,0.16664090752601624,-0.8735260963439941,0.15438508987426758,0.7998282313346863,-0.35227474570274353,-0.4859806001186371,-1.1874382495880127,-0.38870567083358765,-0.9209415912628174,0.027834177017211914,1.9174784421920776,0,0,0,1],[-0.2910129129886627,0.7600364685058594,0.5810815691947937,0.42057931423187256,0.9151604175567627,0.398210734128952,-0.0625234842300415,-1.7501662969589233,-0.27891331911087036,0.5135877132415771,-0.8114401698112488,0.44635534286499023,0,0,0,1],[-0.6830804944038391,0.4822821617126465,-0.548457145690918,-1.6475553512573242,-0.38307642936706543,-0.8759605884552002,-0.29316481947898865,3.207820415496826,-0.6218150854110718,0.009845771826803684,0.78310227394104,0.4238851070404053,0,0,0,1]],"0.12":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.3056321144104004,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7580898404121399,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.341477870941162,0,0,0,1],[-0.6364566087722778,-0.6826696395874023,0.3590056896209717,-1.3884862661361694,0.47860026359558105,0.015470810234546661,0.8778964281082153,-0.8000355362892151,-0.6048675179481506,0.7305632829666138,0.3168792426586151,2.3394200801849365,0,0,0,1],[-0.6893584728240967,-0.7112381458282471,-0.137568861246109,-2.191638946533203,-0.23640120029449463,0.041360042989254,0.97077476978302,-0.7899569869041443,-0.6847622394561768,0.7017332315444946,-0.19664974510669708,3.188985824584961,0,0,0,1],[-0.7786633372306824,-0.6103999614715576,-0.14524129033088684,-2.348583698272705,-0.38826197385787964,0.2869113087654114,0.8757478594779968,-0.7808303236961365,-0.49288517236709595,0.7383043766021729,-0.4604027271270752,3.3438332080841064,0,0,0,1],[-0.5622650980949402,-0.28507018089294434,-0.7762686610221863,-2.6064200401306152,0.8130279779434204,-0.3621269464492798,-0.4559059739112854,-0.3219553828239441,-0.15114252269268036,-0.8874679803848267,0.43538135290145874,2.406515598297119,0,0,0,1],[-0.6612714529037476,0.00690990686416626,-0.7501149773597717,-2.8114945888519287,0.7357550859451294,0.20090916752815247,-0.6467615365982056,-0.5824633240699768,0.14623597264289856,-0.9795857071876526,-0.13793951272964478,1.768086314201355,0,0,0,1],[-0.6582563519477844,0.06868115067481995,-0.7496544122695923,-2.8048343658447266,0.7462954521179199,0.19010543823242188,-0.6378899812698364,-0.3888164460659027,0.09870243072509766,-0.9793585538864136,-0.17639456689357758,0.8239097595214844,0,0,0,1],[-0.07743047177791595,0.8682450652122498,0.4900556206703186,-1.3749650716781616,-0.8430673480033875,0.20536276698112488,-0.49705439805984497,-1.243098258972168,-0.5322036147117615,-0.4516372084617615,0.716088056564331,3.5722804069519043,0,0,0,1],[0.0012598782777786255,0.6960262060165405,0.7180148363113403,-0.7950329184532166,-0.6132822036743164,0.5676718354225159,-0.5492112636566162,-1.1059290170669556,-0.789861798286438,-0.43965429067611694,0.4275760352611542,3.270615577697754,0,0,0,1],[-0.04063060134649277,0.6676435470581055,0.7433711886405945,-0.11956864595413208,-0.6489979028701782,0.5480417609214783,-0.5276848673820496,-0.5550273060798645,-0.7597032189369202,-0.5038869976997375,0.4110323190689087,2.843949556350708,0,0,0,1],[-0.5174681544303894,0.81053227186203,-0.2743428647518158,-1.3858503103256226,0.6753323674201965,0.18994566798210144,-0.712633490562439,-0.8021472096443176,-0.5255023837089539,-0.5540380477905273,-0.6456696391105652,2.2884161472320557,0,0,0,1],[-0.823157548904419,0.42586952447891235,-0.3755618929862976,-1.2483482360839844,0.4293515682220459,0.8996645212173462,0.07912337779998779,-0.31249845027923584,0.3715760409832001,-0.0961172878742218,-0.9234136343002319,2.1173949241638184,0,0,0,1],[-0.422970175743103,-0.19902297854423523,-0.8840171694755554,-0.78290194272995,0.8405101895332336,0.2783575654029846,-0.4648217260837555,0.6198703646659851,0.3385830819606781,-0.9396314024925232,0.0495440810918808,2.029985189437866,0,0,0,1],[-0.7023376226425171,0.6981387138366699,0.13901203870773315,-1.1008234024047852,0.6647313833236694,0.573363184928894,0.4789428114891052,1.0645217895507812,0.2546641528606415,0.42878520488739014,-0.866769552230835,0.5290076732635498,0,0,0,1],[0.012826748192310333,0.999751091003418,-0.018250077962875366,-0.8390635251998901,0.9431281089782715,-0.01815958321094513,-0.3319326341152191,-1.1314351558685303,-0.3321816921234131,-0.012954652309417725,-0.9431265592575073,1.9916927814483643,0,0,0,1],[-0.4638005197048187,0.19929595291614532,-0.863232433795929,0.1479869782924652,0.7839095592498779,-0.3616464138031006,-0.5046756863594055,-1.1674854755401611,-0.41276490688323975,-0.9107652902603149,0.011501982808113098,1.9662773609161377,0,0,0,1],[-0.3030425012111664,0.7369392514228821,0.6042231917381287,0.4663447439670563,0.9044398069381714,0.42217501997947693,-0.06129130721092224,-1.7451839447021484,-0.3002561330795288,0.5279096364974976,-0.7944545745849609,0.5114099979400635,0,0,0,1],[-0.6730293035507202,0.48798754811286926,-0.5557875633239746,-1.6475553512573242,-0.38957762718200684,-0.8726574778556824,-0.29444533586502075,3.207820415496826,-0.62869793176651,0.01835200935602188,0.7774330973625183,0.4238851070404053,0,0,0,1]],"0.16":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.3128585815429688,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7596361637115479,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.3834447860717773,0,0,0,1],[-0.6415078639984131,-0.6757926940917969,0.3630037307739258,-1.396283507347107,0.47711336612701416,0.019052818417549133,0.8786349892616272,-0.800443708896637,-0.600691556930542,0.7368453741073608,0.3102071285247803,2.3953399658203125,0,0,0,1],[-0.6960111856460571,-0.7045984268188477,-0.13823702931404114,-2.1914479732513428,-0.23811686038970947,0.044868968427181244,0.9701992869377136,-0.7861881852149963,-0.6773983836174011,0.7081863880157471,-0.19900627434253693,3.2523274421691895,0,0,0,1],[-0.7880216836929321,-0.5997496843338013,-0.13900287449359894,-2.3469274044036865,-0.37135833501815796,0.2829779088497162,0.8843167424201965,-0.7762871980667114,-0.49103403091430664,0.7484807968139648,-0.44571512937545776,3.4085986614227295,0,0,0,1],[-0.5626780986785889,-0.2937861382961273,-0.7727115154266357,-2.6129631996154785,0.8131483793258667,-0.365100622177124,-0.4533118009567261,-0.32061296701431274,-0.14894062280654907,-0.8833976984024048,0.44432589411735535,2.4720113277435303,0,0,0,1],[-0.659491777420044,-0.0043891966342926025,-0.7516989707946777,-2.824307918548584,0.7377191185951233,0.18826577067375183,-0.6483261585235596,-0.5832601189613342,0.14436495304107666,-0.9821084141731262,-0.12092173099517822,1.836510181427002,0,0,0,1],[-0.6570250988006592,0.05737985298037529,-0.7516818642616272,-2.828538417816162,0.7476453185081482,0.17745274305343628,-0.6399511098861694,-0.40179961919784546,0.09666785597801208,-0.9824552536010742,-0.1594906896352768,0.8899021148681641,0,0,0,1],[-0.08341166377067566,0.8642315864562988,0.4961308240890503,-1.3717713356018066,-0.8449610471725464,0.20259606838226318,-0.4949696660041809,-1.238896131515503,-0.5282819867134094,-0.46049779653549194,0.7133435606956482,3.6296780109405518,0,0,0,1],[-0.006857514381408691,0.6925666928291321,0.7213209271430969,-0.7945199012756348,-0.6162411570549011,0.5651597380638123,-0.5484893918037415,-1.1035748720169067,-0.7875266075134277,-0.4482695162296295,0.4229128956794739,3.3220949172973633,0,0,0,1],[-0.04850707948207855,0.6635614037513733,0.746547281742096,-0.12241297960281372,-0.6517917513847351,0.5453239679336548,-0.5270564556121826,-0.5551110506057739,-0.7568439841270447,-0.5121600031852722,0.4060521721839905,2.887068271636963,0,0,0,1],[-0.5180529356002808,0.8098466396331787,-0.27526259422302246,-1.393076777458191,0.6750625967979431,0.18948350846767426,-0.7130119800567627,-0.8036935329437256,-0.5252728462219238,-0.5551976561546326,-0.6448597311973572,2.330383062362671,0,0,0,1],[-0.8169221878051758,0.4178871214389801,-0.39750272035598755,-1.255730152130127,0.433930903673172,0.8993454575538635,0.053678035736083984,-0.31417277455329895,0.37992364168167114,-0.12863805890083313,-0.916029691696167,2.1588714122772217,0,0,0,1],[-0.4309529662132263,-0.1927998960018158,-0.881537139415741,-0.7982786893844604,0.8403185606002808,0.2702704071998596,-0.4699130356311798,0.6183093786239624,0.3288525938987732,-0.9432827234268188,0.0455394983291626,2.0371851921081543,0,0,0,1],[-0.7085205316543579,0.6909723281860352,0.14337310194969177,-1.1062593460083008,0.6622070074081421,0.5807818174362183,0.47346994280815125,1.0500422716140747,0.24388612806797028,0.43040597438812256,-0.8690628409385681,0.5303751230239868,0,0,0,1],[-0.0064771175384521484,0.9999685883522034,-0.004567727446556091,-0.8467134833335876,0.9345817565917969,0.0044286251068115234,-0.3557202219963074,-1.1332436800003052,-0.35568901896476746,-0.006573081016540527,-0.9345812201499939,2.0331711769104004,0,0,0,1],[-0.469825804233551,0.231858491897583,-0.8517661690711975,0.14104612171649933,0.7674314975738525,-0.36955755949020386,-0.5239045023918152,-1.147297739982605,-0.43624839186668396,-0.89981609582901,-0.004307612776756287,2.0145156383514404,0,0,0,1],[-0.3148946762084961,0.7128045558929443,0.6266986131668091,0.5114197134971619,0.8931137919425964,0.4460065960884094,-0.05852717161178589,-1.737633466720581,-0.3212302327156067,0.5412831902503967,-0.7770609855651855,0.5771387815475464,0,0,0,1],[-0.6628534197807312,0.493569016456604,-0.5630410313606262,-1.6475553512573242,-0.39603230357170105,-0.8692900538444519,-0.29579272866249084,3.207820415496826,-0.6354401111602783,0.02691514976322651,0.771681010723114,0.4238851070404053,0,0,0,1]],"0.2":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.317885398864746,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7607117891311646,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.412637710571289,0,0,0,1],[-0.6449993848800659,-0.6709721088409424,0.3657485544681549,-1.401707410812378,0.4760921895503998,0.02155328541994095,0.8791310787200928,-0.8007276058197021,-0.5977556705474854,0.7411692142486572,0.30554261803627014,2.4342386722564697,0,0,0,1],[-0.7005993723869324,-0.6999419331550598,-0.13871505856513977,-2.1912717819213867,-0.23928901553153992,0.04731915891170502,0.9697945713996887,-0.7835560441017151,-0.6722359657287598,0.712630569934845,-0.20064039528369904,3.296335458755493,0,0,0,1],[-0.7944186329841614,-0.5923112630844116,-0.13441091775894165,-2.345723867416382,-0.3595002591609955,0.2801840901374817,0.8900877833366394,-0.7731143832206726,-0.48954930901527405,0.7554230690002441,-0.435519814491272,3.453587293624878,0,0,0,1],[-0.5629531145095825,-0.2998284697532654,-0.7701860070228577,-2.617460250854492,0.8132375478744507,-0.3671536445617676,-0.4514901340007782,-0.31965872645378113,-0.1474069207906723,-0.880511999130249,0.45052215456962585,2.5175600051879883,0,0,0,1],[-0.6582986116409302,-0.012283504009246826,-0.7526564598083496,-2.8331518173217773,0.7390400767326355,0.17946112155914307,-0.6493180394172668,-0.5837827920913696,0.14304862916469574,-0.9836886525154114,-0.10906100273132324,1.8841347694396973,0,0,0,1],[-0.656215488910675,0.04948059096932411,-0.7529494166374207,-2.8449912071228027,0.7485384345054626,0.16864006221294403,-0.6412888169288635,-0.4108086824417114,0.09524622559547424,-0.9844352602958679,-0.14770233631134033,0.936003565788269,0,0,0,1],[-0.0875520408153534,0.8613891005516052,0.5003429055213928,-1.3695387840270996,-0.8462653160095215,0.20065486431121826,-0.49353015422821045,-1.2359780073165894,-0.5255171060562134,-0.4666326940059662,0.7113962769508362,3.6695337295532227,0,0,0,1],[-0.012493252754211426,0.6901110410690308,0.7235953211784363,-0.794185996055603,-0.6182882785797119,0.5633957982063293,-0.5480000376701355,-1.101953387260437,-0.785851001739502,-0.45423734188079834,0.41964924335479736,3.3578529357910156,0,0,0,1],[-0.05397223308682442,0.6606744527816772,0.7487294673919678,-0.12446212768554688,-0.6537230610847473,0.5434181690216064,-0.5266327857971191,-0.5552013516426086,-0.7548054456710815,-0.5178858637809753,0.40256890654563904,2.91703462600708,0,0,0,1],[-0.5184594392776489,0.8093688488006592,-0.2759017050266266,-1.3981035947799683,0.674875020980835,0.18916164338588715,-0.7132749557495117,-0.8047691583633423,-0.5251127481460571,-0.5560035705566406,-0.6442955732345581,2.3595759868621826,0,0,0,1],[-0.8124918341636658,0.4118816554546356,-0.4125656485557556,-1.260865330696106,0.4372488558292389,0.8986185193061829,0.03602686524391174,-0.315337598323822,0.3855779767036438,-0.15112251043319702,-0.9102152585983276,2.187723398208618,0,0,0,1],[-0.4366265833377838,-0.1885589063167572,-0.8796606063842773,-0.8094539642333984,0.839973509311676,0.2647245526313782,-0.47367218136787415,0.6166924238204956,0.322182834148407,-0.9457097053527832,0.042798787355422974,2.0423264503479004,0,0,0,1],[-0.7128934264183044,0.6858502626419067,0.14626091718673706,-1.1106600761413574,0.6601877808570862,0.5860291719436646,0.4698101282119751,1.0395662784576416,0.23650623857975006,0.43148428201675415,-0.8705666065216064,0.5316394567489624,0,0,0,1],[-0.019716471433639526,0.9997918605804443,0.005228251218795776,-0.8520352244377136,0.9280407428741455,0.020246446132659912,-0.3719275891780853,-1.1345018148422241,-0.37195637822151184,-0.002481132745742798,-0.9282470345497131,2.0620245933532715,0,0,0,1],[-0.4737733006477356,0.2544146180152893,-0.8430966734886169,0.13589616119861603,0.755662202835083,-0.3741803467273712,-0.5375534296035767,-1.1331373453140259,-0.4522320032119751,-0.8917748928070068,-0.014974668622016907,2.047734260559082,0,0,0,1],[-0.323028564453125,0.6954218745231628,0.6419039964675903,0.5423011779785156,0.8848902583122253,0.4624561667442322,-0.05570533871650696,-1.7308576107025146,-0.3355916142463684,0.5500203371047974,-0.7647590041160583,0.6232024431228638,0,0,0,1],[-0.6557029485702515,0.49737751483917236,-0.5680401921272278,-1.6475553512573242,-0.4004938006401062,-0.8669100999832153,-0.2967691123485565,3.207820415496826,-0.6400460600852966,0.032904092222452164,0.7676317095756531,0.4238851070404053,0,0,0,1]],"0.24":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.3196126222610474,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7610814571380615,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.42266845703125,0,0,0,1],[-0.6461948752403259,-0.6693089604377747,0.36668461561203003,-1.4035710096359253,0.4757436513900757,0.022414080798625946,0.879298210144043,-0.8008252382278442,-0.596741259098053,0.7426460385322571,0.3039354979991913,2.4476044178009033,0,0,0,1],[-0.7021682262420654,-0.6983349323272705,-0.13888195157051086,-2.1912031173706055,-0.23968780040740967,0.0481627881526947,0.9696545004844666,-0.7826497554779053,-0.670454740524292,0.7141490578651428,-0.20120109617710114,3.311446189880371,0,0,0,1],[-0.7965942621231079,-0.5897504687309265,-0.13278597593307495,-2.3453004360198975,-0.35540786385536194,0.2792135179042816,0.892034113407135,-0.7720219492912292,-0.48900195956230164,0.7577823400497437,-0.43202221393585205,3.4690332412719727,0,0,0,1],[-0.5630455017089844,-0.3019005060195923,-0.7693088054656982,-2.6189956665039062,0.8132690787315369,-0.3678562045097351,-0.45086103677749634,-0.3193272352218628,-0.14687979221343994,-0.879510223865509,0.4526461660861969,2.5332083702087402,0,0,0,1],[-0.6578974723815918,-0.015001952648162842,-0.7529581189155579,-2.8361778259277344,0.7394852638244629,0.17643411457538605,-0.649640679359436,-0.5839567184448242,0.14259347319602966,-0.984198272228241,-0.10498172044754028,1.9005037546157837,0,0,0,1],[-0.6559464335441589,0.04675980657339096,-0.7533578276634216,-2.850637435913086,0.7488364577293396,0.16561000049114227,-0.6417303681373596,-0.4139001965522766,0.09475651383399963,-0.9850822687149048,-0.14364661276340485,0.9518813490867615,0,0,0,1],[-0.08897049725055695,0.8604028820991516,0.5017874240875244,-1.368769884109497,-0.8467110395431519,0.19998487830162048,-0.49303746223449707,-1.2349762916564941,-0.5245601534843445,-0.4687349796295166,0.7107203006744385,3.6832151412963867,0,0,0,1],[-0.014427274465560913,0.6892580389976501,0.7243719100952148,-0.7940757870674133,-0.6189896464347839,0.5627867579460144,-0.5478342771530151,-1.1013991832733154,-0.7852656841278076,-0.45628297328948975,0.4185245633125305,3.3701300621032715,0,0,0,1],[-0.055847086012363434,0.6596735715866089,0.749474048614502,-0.12517976760864258,-0.6543844938278198,0.5427606105804443,-0.5264896750450134,-0.5552382469177246,-0.754095733165741,-0.5198476910591125,0.40136897563934326,2.9273266792297363,0,0,0,1],[-0.5185990929603577,0.8092045187950134,-0.27612125873565674,-1.3998308181762695,0.6748106479644775,0.18905097246170044,-0.7133651971817017,-0.8051388263702393,-0.5250575542449951,-0.5562803745269775,-0.644101619720459,2.3696067333221436,0,0,0,1],[-0.8109527230262756,0.4097336530685425,-0.41770070791244507,-1.2626299858093262,0.4384133219718933,0.8982733488082886,0.029974430799484253,-0.31573793292045593,0.3874911367893219,-0.15881794691085815,-0.9080902338027954,2.197636842727661,0,0,0,1],[-0.43859773874282837,-0.18711921572685242,-0.8789870738983154,-0.8133834600448608,0.8398145437240601,0.26283541321754456,-0.4750038683414459,0.6160363554954529,0.3199113607406616,-0.9465221166610718,0.04186660051345825,2.0441222190856934,0,0,0,1],[-0.7144085764884949,0.684065043926239,0.14722484350204468,-1.1122896671295166,0.6594443321228027,0.5878470540046692,0.4685812294483185,1.0358924865722656,0.2339944988489151,0.431845098733902,-0.8710662126541138,0.5321375131607056,0,0,0,1],[-0.02422747015953064,0.999669075012207,0.00864487886428833,-0.8538638353347778,0.9256815910339355,0.025698289275169373,-0.3774292469024658,-1.1349343061447144,-0.37752673029899597,-0.0011418536305427551,-0.9259981513023376,2.071938991546631,0,0,0,1],[-0.4750836193561554,0.26214104890823364,-0.8399868011474609,0.13406561315059662,0.7515631914138794,-0.37560001015663147,-0.5422890186309814,-1.1282527446746826,-0.45765548944473267,-0.888935923576355,-0.01857396960258484,2.059083938598633,0,0,0,1],[-0.3258017599582672,0.6893399357795715,0.647042453289032,0.5528128743171692,0.8820010423660278,0.46807748079299927,-0.054566651582717896,-1.7282408475875854,-0.3404812216758728,0.5529141426086426,-0.7604992389678955,0.6390872001647949,0,0,0,1],[-0.6532324552536011,0.49867162108421326,-0.5697488784790039,-1.6475553512573242,-0.4020208418369293,-0.8660851120948792,-0.29711201786994934,3.207820415496826,-0.6416125893592834,0.03496773540973663,0.7662314176559448,0.4238851070404053,0,0,0,1]],"0.28":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.3177226781845093,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7606770396232605,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.4116928577423096,0,0,0,1],[-0.6448867321014404,-0.6711286306381226,0.3656601011753082,-1.4015318155288696,0.47612497210502625,0.021472260355949402,0.8791152834892273,-0.8007184863090515,-0.5978512167930603,0.7410298585891724,0.3056938052177429,2.4329798221588135,0,0,0,1],[-0.7004513740539551,-0.7000930309295654,-0.138699471950531,-2.1912779808044434,-0.23925143480300903,0.047239750623703,0.9698076248168945,-0.7836413979530334,-0.6724035739898682,0.7124872803688049,-0.20058773458003998,3.2949118614196777,0,0,0,1],[-0.7942129969596863,-0.5925523638725281,-0.1345628798007965,-2.3457632064819336,-0.35988539457321167,0.28027525544166565,0.8899033665657043,-0.7732172608375549,-0.48959970474243164,0.7552000284194946,-0.4358496069908142,3.452132225036621,0,0,0,1],[-0.5629445314407349,-0.29963311553001404,-0.770268440246582,-2.6173157691955566,0.8132345676422119,-0.3670874238014221,-0.4515492916107178,-0.3196900188922882,-0.14745672047138214,-0.8806060552597046,0.45032191276550293,2.5160861015319824,0,0,0,1],[-0.6583369374275208,-0.012027502059936523,-0.7526273131370544,-2.832866668701172,0.7389979362487793,0.17974616587162018,-0.6492871642112732,-0.5837664604187012,0.14309121668338776,-0.983639657497406,-0.10944512486457825,1.8825931549072266,0,0,0,1],[-0.6562412977218628,0.049736812710762024,-0.7529101967811584,-2.844459295272827,0.7485101819038391,0.16892538964748383,-0.6412466764450073,-0.4105176031589508,0.09529212862253189,-0.9843733310699463,-0.14808420836925507,0.9345091581344604,0,0,0,1],[-0.08741815388202667,0.8614817261695862,0.5002067685127258,-1.369611144065857,-0.8462233543395996,0.2007179856300354,-0.4935764968395233,-1.236072301864624,-0.5256070494651794,-0.46643444895744324,0.7114599943161011,3.6682448387145996,0,0,0,1],[-0.012310855090618134,0.6901910901069641,0.7235220074653625,-0.7941964864730835,-0.6182222366333008,0.5634531378746033,-0.5480156540870667,-1.1020054817199707,-0.7859060168266296,-0.4540444612503052,0.41975533962249756,3.356696367263794,0,0,0,1],[-0.05379539355635643,0.660768449306488,0.7486591935157776,-0.12439495325088501,-0.6536608338356018,0.5434801578521729,-0.5266462564468384,-0.5551978349685669,-0.7548721432685852,-0.5177009105682373,0.4026821255683899,2.916065216064453,0,0,0,1],[-0.5184462070465088,0.8093843460083008,-0.2758811116218567,-1.3979408740997314,0.6748812198638916,0.18917208909988403,-0.7132663726806641,-0.8047344088554382,-0.525117814540863,-0.5559775829315186,-0.6443138718605042,2.358631134033203,0,0,0,1],[-0.8126363158226013,0.4120819568634033,-0.4120808243751526,-1.2606991529464722,0.4371398389339447,0.8986485600471497,0.03659743070602417,-0.3152998983860016,0.3853972256183624,-0.15039673447608948,-0.9104120135307312,2.1867895126342773,0,0,0,1],[-0.4364413619041443,-0.18869486451148987,-0.8797234296798706,-0.8090860247612,0.8399872183799744,0.2649030089378357,-0.47354772686958313,0.6167516112327576,0.3223975896835327,-0.9456324577331543,0.042886942625045776,2.0421581268310547,0,0,0,1],[-0.7127509713172913,0.6860178709030151,0.1461695432662964,-1.1105092763900757,0.6602563261985779,0.5858582854270935,0.469926655292511,1.0399105548858643,0.2367437481880188,0.4314500093460083,-0.8705190420150757,0.5315945148468018,0,0,0,1],[-0.019290462136268616,0.9998018741607666,0.004907667636871338,-0.8518630266189575,0.928260087966919,0.019733279943466187,-0.3714074492454529,-1.1344611644744873,-0.3714309632778168,-0.002609238028526306,-0.9284570217132568,2.0610907077789307,0,0,0,1],[-0.4736486077308655,0.2536860704421997,-0.8433862924575806,0.13606694340705872,0.7560468912124634,-0.3740420937538147,-0.5371084213256836,-1.1335971355438232,-0.4517190456390381,-0.8920403718948364,-0.01463375985622406,2.046663522720337,0,0,0,1],[-0.32276666164398193,0.695992112159729,0.6414176821708679,0.5413081645965576,0.8851608037948608,0.4619256854057312,-0.05580812692642212,-1.7310965061187744,-0.33512961864471436,0.5497446656227112,-0.7651594877243042,0.6217076778411865,0,0,0,1],[-0.6559351086616516,0.49725475907325745,-0.5678789019584656,-1.6475553512573242,-0.40034937858581543,-0.8669873476028442,-0.2967369258403778,3.207820415496826,-0.6398979425430298,0.03270982950925827,0.7677634358406067,0.4238851070404053,0,0,0,1]],"0.32":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.3135660886764526,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7597875595092773,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.387554168701172,0,0,0,1],[-0.6420004963874817,-0.6751159429550171,0.3633919060230255,-1.3970469236373901,0.4769688844680786,0.019404418766498566,0.8787058591842651,-0.8004836440086365,-0.6002799272537231,0.7374564409255981,0.3095515966415405,2.400815486907959,0,0,0,1],[-0.6966589689254761,-0.7039448022842407,-0.13830363750457764,-2.191425323486328,-0.23828306794166565,0.04521344602108002,0.9701427221298218,-0.7858180999755859,-0.6766737103462219,0.708814263343811,-0.1992366909980774,3.2585248947143555,0,0,0,1],[-0.7889280319213867,-0.5987039804458618,-0.13836896419525146,-2.3467605113983154,-0.36969414353370667,0.2825874984264374,0.8851386904716492,-0.7758411169052124,-0.4908347427845001,0.7494648694992065,-0.44427889585494995,3.4149346351623535,0,0,0,1],[-0.5627175569534302,-0.29463768005371094,-0.7723584771156311,-2.6135988235473633,0.8131607174873352,-0.3653905391693115,-0.453056275844574,-0.3204796314239502,-0.14872492849826813,-0.8829942941665649,0.445199579000473,2.478423595428467,0,0,0,1],[-0.6593217253684998,-0.005498766899108887,-0.7518408894538879,-2.8255560398101807,0.737907350063324,0.18702681362628937,-0.6484706401824951,-0.5833353400230408,0.14418035745620728,-0.9823396801948547,-0.11925321817398071,1.843212604522705,0,0,0,1],[-0.6569089293479919,0.05626975744962692,-0.7518673539161682,-2.8308558464050293,0.7477734088897705,0.17621272802352905,-0.6401442289352417,-0.40306901931762695,0.0964680165052414,-0.9827427864074707,-0.15783271193504333,0.8963816165924072,0,0,0,1],[-0.08399553596973419,0.8638339638710022,0.49672451615333557,-1.3714574575424194,-0.8451454639434814,0.20232361555099487,-0.4947664141654968,-1.2384848594665527,-0.5278946161270142,-0.46136289834976196,0.7130714654922485,3.6352920532226562,0,0,0,1],[-0.007651433348655701,0.6922234296798706,0.7216424345970154,-0.7944716215133667,-0.6165300607681274,0.5649121999740601,-0.5484197735786438,-1.1033456325531006,-0.7872931957244873,-0.4491109251976013,0.4224545359611511,3.3271312713623047,0,0,0,1],[-0.049277134239673615,0.6631573438644409,0.7468559145927429,-0.12269777059555054,-0.6520643830299377,0.5450564026832581,-0.5269960761070251,-0.5551220178604126,-0.7565593123435974,-0.5129675269126892,0.4055628180503845,2.8912880420684814,0,0,0,1],[-0.5181101560592651,0.8097794055938721,-0.2753525674343109,-1.3937842845916748,0.6750361323356628,0.18943825364112854,-0.713049054145813,-0.8038449287414551,-0.5252503752708435,-0.5553112030029297,-0.6447803974151611,2.3344924449920654,0,0,0,1],[-0.816303014755249,0.41706401109695435,-0.3996333181858063,-1.2564529180526733,0.4343913793563843,0.8992682695388794,0.051190465688705444,-0.31433671712875366,0.3807274401187897,-0.1318104863166809,-0.9152448177337646,2.162932872772217,0,0,0,1],[-0.4317459464073181,-0.19219841063022614,-0.8812803030014038,-0.7998281121253967,0.8402804136276245,0.26948559284210205,-0.47043177485466003,0.6181082129478455,0.3279086947441101,-0.9436299204826355,0.04515138268470764,2.0379018783569336,0,0,0,1],[-0.7091326713562012,0.6902577877044678,0.14378690719604492,-1.1068480014801025,0.661935567855835,0.5815165042877197,0.4729474186897278,1.048587441444397,0.24284137785434723,0.4305602014064789,-0.8692790269851685,0.5305371284484863,0,0,0,1],[-0.008350476622581482,0.9999599456787109,-0.003202289342880249,-0.8474624752998352,0.9336904287338257,0.0066505372524261475,-0.35801899433135986,-1.1334208250045776,-0.3579835593700409,-0.005979716777801514,-0.9337087869644165,2.0372326374053955,0,0,0,1],[-0.4703935384750366,0.23503927886486053,-0.850580096244812,0.14033719897270203,0.7657895088195801,-0.3702522814273834,-0.5258132219314575,-1.1453098058700562,-0.43851613998413086,-0.8987045884132385,-0.005826130509376526,2.0192084312438965,0,0,0,1],[-0.31604522466659546,0.7103866934776306,0.6288610696792603,0.5157917737960815,0.8919731378555298,0.4483295679092407,-0.058174312114715576,-1.73675537109375,-0.3232635259628296,0.5425413846969604,-0.7753384113311768,0.5836070775985718,0,0,0,1],[-0.6618503332138062,0.494108647108078,-0.563746988773346,-1.6475553512573242,-0.3966616094112396,-0.8689567446708679,-0.2959282398223877,3.207820415496826,-0.6360926032066345,0.02775660529732704,0.7711133360862732,0.4238851070404053,0,0,0,1]],"0.36":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.3085287809371948,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7587096691131592,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.358299493789673,0,0,0,1],[-0.6384857892990112,-0.6799207329750061,0.36061564087867737,-1.3916118144989014,0.47800150513648987,0.016904883086681366,0.8781962394714355,-0.8001991510391235,-0.6032001376152039,0.7330907583236694,0.314209520816803,2.3618345260620117,0,0,0,1],[-0.6920331716537476,-0.7085845470428467,-0.13783395290374756,-2.1915714740753174,-0.23709338903427124,0.04276470094919205,0.9705450534820557,-0.7884483933448792,-0.6818187832832336,0.7043289542198181,-0.19759555160999298,3.214385986328125,0,0,0,1],[-0.7824370265007019,-0.6061375737190247,-0.14279238879680634,-2.347930669784546,-0.3815073072910309,0.2853466868400574,0.8792208433151245,-0.7790117859840393,-0.49218350648880005,0.7424111366271973,-0.45451200008392334,3.3698060512542725,0,0,0,1],[-0.5624332427978516,-0.2885679602622986,-0.7748531699180603,-2.6090540885925293,0.8130751252174377,-0.36332225799560547,-0.4548696279525757,-0.3214215040206909,-0.15026050806045532,-0.8858475089073181,0.4389719069004059,2.4327704906463623,0,0,0,1],[-0.6605490446090698,0.002388089895248413,-0.7507790923118591,-2.8166449069976807,0.7365515828132629,0.19584326446056366,-0.6474084258079529,-0.5827893018722534,0.14548905193805695,-0.9806323647499084,-0.13112300634384155,1.7955069541931152,0,0,0,1],[-0.6577534079551697,0.06415914744138718,-0.750495970249176,-2.814342975616455,0.7468459010124207,0.18503613770008087,-0.6387357711791992,-0.39402520656585693,0.09788824617862701,-0.9806351661682129,-0.16962510347366333,0.8503215909004211,0,0,0,1],[-0.079832062125206,0.8666467666625977,0.49249354004859924,-1.3736873865127563,-0.8438292145729065,0.20425713062286377,-0.4962165057659149,-1.2414127588272095,-0.5306391716003418,-0.45519471168518066,0.714995801448822,3.595301628112793,0,0,0,1],[-0.001996062695980072,0.6946495175361633,0.719345211982727,-0.7948228120803833,-0.6144707202911377,0.5666682720184326,-0.548919141292572,-1.1049820184707642,-0.7889362573623657,-0.44311273097991943,0.4257110357284546,3.2912607192993164,0,0,0,1],[-0.043790582567453384,0.6660169363021851,0.7446497678756714,-0.12069457769393921,-0.6501204967498779,0.5469554662704468,-0.5274300575256348,-0.5550541877746582,-0.7585672736167908,-0.507209062576294,0.40904003381729126,2.861238479614258,0,0,0,1],[-0.517702579498291,0.810257613658905,-0.27471160888671875,-1.388746976852417,0.6752241849899292,0.1897604912519455,-0.7127853631973267,-0.8027670383453369,-0.5254105925559998,-0.5545029640197754,-0.645345151424408,2.3052377700805664,0,0,0,1],[-0.8206776976585388,0.42276278138160706,-0.38439512252807617,-1.2513071298599243,0.43115976452827454,0.8996397256851196,0.06891617178916931,-0.3131695091724396,0.3749523162841797,-0.10917788743972778,-0.9205928444862366,2.1340198516845703,0,0,0,1],[-0.4261448085308075,-0.19651129841804504,-0.8830536603927612,-0.7889671921730042,0.8404765129089355,0.2751007080078125,-0.4668174088001251,0.6193531155586243,0.3346635401248932,-0.9411180019378662,0.04793047904968262,2.0328469276428223,0,0,0,1],[-0.7048007249832153,0.6952942609786987,0.14078912138938904,-1.1028764247894287,0.6637734770774841,0.5763181447982788,0.4767196774482727,1.0588020086288452,0.2503211796283722,0.4294445216655731,-0.8677076101303101,0.5294947624206543,0,0,0,1],[0.0050523653626441956,0.9999048709869385,-0.012823551893234253,-0.8421299457550049,0.9398247003555298,-0.009128972887992859,-0.3415345549583435,-1.1321600675582886,-0.3416195213794708,-0.010326392948627472,-0.939781665802002,2.0083184242248535,0,0,0,1],[-0.46626508235931396,0.21236376464366913,-0.8587771654129028,0.14527007937431335,0.7773693799972534,-0.3649948239326477,-0.5123234987258911,-1.1594196557998657,-0.4222485423088074,-0.9064657092094421,0.005099490284919739,1.9856808185577393,0,0,0,1],[-0.30781522393226624,0.7273876070976257,0.6133161187171936,0.48450252413749695,0.8999713659286499,0.4317485988140106,-0.06036686897277832,-1.742466926574707,-0.30870887637138367,0.5333849787712097,-0.7875271439552307,0.5376815795898438,0,0,0,1],[-0.6689651608467102,0.49023953080177307,-0.5587041974067688,-1.6475553512573242,-0.39217036962509155,-0.8713152408599854,-0.2949773669242859,3.207820415496826,-0.6314172744750977,0.02177770622074604,0.7751373052597046,0.4238851070404053,0,0,0,1]],"0.4":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.3034168481826782,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7576158046722412,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.328612804412842,0,0,0,1],[-0.634900689125061,-0.684765100479126,0.3577677309513092,-1.3860961198806763,0.47906023263931274,0.014375925064086914,0.8776641488075256,-0.7999103665351868,-0.606137216091156,0.7286219596862793,0.3189164102077484,2.322277545928955,0,0,0,1],[-0.6873056888580322,-0.7132606506347656,-0.13736861944198608,-2.1916823387145996,-0.23586827516555786,0.04028774052858353,0.9709494113922119,-0.7911084890365601,-0.687005877494812,0.6997400522232056,-0.19592583179473877,3.1695499420166016,0,0,0,1],[-0.7757579684257507,-0.6136536598205566,-0.14706721901893616,-2.3490734100341797,-0.39340880513191223,0.28809717297554016,0.8730574250221252,-0.7822184562683105,-0.4933854341506958,0.7351385951042175,-0.46491074562072754,3.3239574432373047,0,0,0,1],[-0.5621343851089478,-0.28239139914512634,-0.7773416638374329,-2.604396343231201,0.812992513179779,-0.3612104058265686,-0.4566952884197235,-0.3223600387573242,-0.15181699395179749,-0.8886970281600952,0.4326307773590088,2.3864338397979736,0,0,0,1],[-0.6618322134017944,0.01036122441291809,-0.7495803833007812,-2.807543992996216,0.7351373434066772,0.2047809362411499,-0.6462492942810059,-0.5822086334228516,0.14680393040180206,-0.9787530899047852,-0.1431475579738617,1.7471203804016113,0,0,0,1],[-0.658649742603302,0.07213196903467178,-0.7489843964576721,-2.7975571155548096,0.7458657026290894,0.19397956132888794,-0.6372257471084595,-0.38482993841171265,0.09932340681552887,-0.9783502221107483,-0.18156537413597107,0.8037463426589966,0,0,0,1],[-0.07558995485305786,0.8694581985473633,0.4881887137889862,-1.3759403228759766,-0.8424824476242065,0.2062050998210907,-0.4976968765258789,-1.2443876266479492,-0.5333930253982544,-0.44891148805618286,0.716916561126709,3.5546607971191406,0,0,0,1],[0.00375201553106308,0.6970700025558472,0.7169929146766663,-0.7951978445053101,-0.6123715043067932,0.5684361457824707,-0.5494368076324463,-1.1066558361053467,-0.7905601859092712,-0.43700504302978516,0.42899900674819946,3.2548165321350098,0,0,0,1],[-0.03821129351854324,0.6688787341117859,0.7423884272575378,-0.1187206506729126,-0.6481374502182007,0.5488695502281189,-0.527881920337677,-0.5550124049186707,-0.7605628967285156,-0.5013414025306702,0.41255277395248413,2.830721378326416,0,0,0,1],[-0.5172889232635498,0.8107420802116394,-0.27406075596809387,-1.3836350440979004,0.6754150390625,0.1900872141122818,-0.7125173807144165,-0.801673173904419,-0.5255725979804993,-0.5536823272705078,-0.645917534828186,2.2755510807037354,0,0,0,1],[-0.8250359296798706,0.4281606078147888,-0.3687736392021179,-1.2460856437683105,0.42799368500709534,0.899590790271759,0.08693438768386841,-0.3119852542877197,0.36896735429763794,-0.0861089825630188,-0.9254450798034668,2.104680299758911,0,0,0,1],[-0.4205660820007324,-0.20095908641815186,-0.88472580909729,-0.7783533334732056,0.8404971361160278,0.2808613181114197,-0.46333709359169006,0.6201685667037964,0.3415970802307129,-0.938473641872406,0.050784945487976074,2.0278146266937256,0,0,0,1],[-0.7004684805870056,0.7002875804901123,0.1376267969608307,-1.099367618560791,0.6654149293899536,0.5711213946342468,0.4806690812110901,1.068819522857666,0.2580050826072693,0.4282725751399994,-0.8660348057746887,0.5286866426467896,0,0,0,1],[0.018803924322128296,0.9995733499526978,-0.022346749901771545,-0.8367186784744263,0.9455432891845703,-0.025042757391929626,-0.3245307505130768,-1.1308807134628296,-0.32495221495628357,-0.015027433633804321,-0.9456112384796143,1.9789775609970093,0,0,0,1],[-0.4618711769580841,0.18929165601730347,-0.8665124773979187,0.15000584721565247,0.788850724697113,-0.3589269816875458,-0.49888432025909424,-1.1736286878585815,-0.40544962882995605,-0.9139696955680847,0.016455307602882385,1.9513767957687378,0,0,0,1],[-0.29937317967414856,0.7441316843032837,0.5971966981887817,0.4523826241493225,0.9077913761138916,0.4148385524749756,-0.06183212995529175,-1.7469830513000488,-0.2937517464160919,0.5236192941665649,-0.7997083067893982,0.491390585899353,0,0,0,1],[-0.6761239171028137,0.4862517714500427,-0.5535485148429871,-1.6475553512573242,-0.387589693069458,-0.8736770153045654,-0.29404568672180176,3.207820415496826,-0.6266028881072998,0.015738291665911674,0.7791798710823059,0.4238851070404053,0,0,0,1]],"0.44":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.2987794876098633,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7566235065460205,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.301682233810425,0,0,0,1],[-0.6316325664520264,-0.6891322135925293,0.3551577925682068,-1.3810924291610718,0.48003000020980835,0.012088529765605927,0.877168595790863,-0.7996484637260437,-0.6087786555290222,0.7245347499847412,0.32316863536834717,2.286393165588379,0,0,0,1],[-0.6829885244369507,-0.7174744606018066,-0.13695642352104187,-2.1917505264282227,-0.2347416877746582,0.038047872483730316,0.9713127613067627,-0.7935136556625366,-0.6916813850402832,0.695544958114624,-0.194407656788826,3.128837823867798,0,0,0,1],[-0.7696226239204407,-0.6204460263252258,-0.15075719356536865,-2.350071430206299,-0.4041277766227722,0.29054832458496094,0.8673304915428162,-0.7851178646087646,-0.49432963132858276,0.728442370891571,-0.47435230016708374,3.2823195457458496,0,0,0,1],[-0.5618544220924377,-0.27677375078201294,-0.7795614004135132,-2.600131034851074,0.8129215240478516,-0.3592836558818817,-0.4583386778831482,-0.3231966495513916,-0.15322746336460114,-0.8912419080734253,0.42686036229133606,2.3443918228149414,0,0,0,1],[-0.6630290150642395,0.01756596565246582,-0.7483876347541809,-2.7992372512817383,0.7338212132453918,0.21287982165813446,-0.6451272368431091,-0.581659197807312,0.14798444509506226,-0.9769207239151001,-0.15403595566749573,1.7032476663589478,0,0,0,1],[-0.6594972014427185,0.07933393120765686,-0.7475090026855469,-2.78230619430542,0.7449427247047424,0.20208251476287842,-0.6357858180999756,-0.37647438049316406,0.10061920434236526,-0.9761502146720886,-0.19237226247787476,0.7616397738456726,0,0,0,1],[-0.07172705233097076,0.8719711303710938,0.4842737913131714,-1.3779751062393188,-0.8412514328956604,0.20795977115631104,-0.49904727935791016,-1.2470896244049072,-0.5358638167381287,-0.4431913495063782,0.7186309695243835,3.5177414417266846,0,0,0,1],[0.008973918855190277,0.69922935962677,0.7148406505584717,-0.7955541610717773,-0.6104594469070435,0.5700276494026184,-0.5499154329299927,-1.1081857681274414,-0.7919957041740417,-0.43144679069519043,0.4319669306278229,3.2217180728912354,0,0,0,1],[-0.03314029052853584,0.6714398264884949,0.7403172850608826,-0.1169813871383667,-0.6463301181793213,0.5505945086479187,-0.5283013582229614,-0.5549978017807007,-0.7623368501663208,-0.49599796533584595,0.4157252311706543,2.8030171394348145,0,0,0,1],[-0.5169135332107544,0.8111810088157654,-0.27346980571746826,-1.3789976835250854,0.6755882501602173,0.19038328528404236,-0.7122740745544434,-0.8006808757781982,-0.5257192850112915,-0.5529373288154602,-0.6464362144470215,2.2486205101013184,0,0,0,1],[-0.828916072845459,0.43271782994270325,-0.35447633266448975,-1.2413489818572998,0.4252229630947113,0.8991750478744507,0.10329270362854004,-0.31091105937957764,0.3634330630302429,-0.06511056423187256,-0.92934250831604,2.0780646800994873,0,0,0,1],[-0.4156016409397125,-0.20505228638648987,-0.8861315250396729,-0.7690834999084473,0.8403609991073608,0.28613531589508057,-0.46034717559814453,0.6205182075500488,0.34794893860816956,-0.9359915852546692,0.05339978635311127,2.023315668106079,0,0,0,1],[-0.69659823179245,0.7047117948532104,0.1346563696861267,-1.0966362953186035,0.6667080521583557,0.5664817690849304,0.4843534231185913,1.0775939226150513,0.26504942774772644,0.42717623710632324,-0.8644474148750305,0.5281524658203125,0,0,0,1],[0.03140006214380264,0.9990332126617432,-0.0307694673538208,-0.8318099975585938,0.9502859115600586,-0.03938110172748566,-0.30887776613235474,-1.1297204494476318,-0.3097909986972809,-0.019541092216968536,-0.9506039619445801,1.9523611068725586,0,0,0,1],[-0.4577080309391022,0.1683315634727478,-0.8730223178863525,0.1540675312280655,0.7990189790725708,-0.352794885635376,-0.4869336187839508,-1.1864123344421387,-0.38996422290802,-0.9204349517822266,0.026977062225341797,1.9200167655944824,0,0,0,1],[-0.2916395366191864,0.7588675022125244,0.582294225692749,0.4229624271392822,0.9146209359169006,0.3994525372982025,-0.062497347593307495,-1.7499711513519287,-0.28002631664276123,0.5143517255783081,-0.8105725049972534,0.4497029781341553,0,0,0,1],[-0.6825634241104126,0.48258015513420105,-0.5488380789756775,-1.6475553512573242,-0.38341376185417175,-0.8757911324501038,-0.2932293117046356,3.207820415496826,-0.6221743822097778,0.01028449460864067,0.7828111052513123,0.4238851070404053,0,0,0,1]],"0.48":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.2950387001037598,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.755823016166687,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.2799575328826904,0,0,0,1],[-0.6289852857589722,-0.6926358342170715,0.3530341386795044,-1.3770562410354614,0.48081886768341064,0.010248012840747833,0.8767598867416382,-0.7994371652603149,-0.6108933687210083,0.7212146520614624,0.32658642530441284,2.2574455738067627,0,0,0,1],[-0.6794862747192383,-0.7208541035652161,-0.13663074374198914,-2.1917831897735596,-0.2338220775127411,0.03624603897333145,0.9716033935546875,-0.7954482436180115,-0.6954320073127747,0.6921385526657104,-0.19318059086799622,3.0959692001342773,0,0,0,1],[-0.7646229267120361,-0.6259059309959412,-0.15360230207443237,-2.3508498668670654,-0.41271859407424927,0.292494535446167,0.862618088722229,-0.7874500751495361,-0.49498987197875977,0.7229719758033752,-0.4819713830947876,3.248699188232422,0,0,0,1],[-0.5616223812103271,-0.27223214507102966,-0.7813259363174438,-2.596662998199463,0.8128668069839478,-0.35772162675857544,-0.4596555233001709,-0.3238610029220581,-0.15436410903930664,-0.8932666182518005,0.42219293117523193,2.310471773147583,0,0,0,1],[-0.6640170216560364,0.0233575701713562,-0.7473527193069458,-2.7925021648406982,0.7327362298965454,0.21940620243549347,-0.6441730260848999,-0.5811998248100281,0.14892758429050446,-0.9753541350364685,-0.16280439496040344,1.6678709983825684,0,0,0,1],[-0.6602046489715576,0.08512157201766968,-0.7462469935417175,-2.769988775253296,0.7441744804382324,0.208611398935318,-0.6345754861831665,-0.3697245121002197,0.10165964066982269,-0.9742873907089233,-0.20107150077819824,0.7277730703353882,0,0,0,1],[-0.06860080361366272,0.8739723563194275,0.4811091125011444,-1.3796104192733765,-0.8402518033981323,0.20936664938926697,-0.5001418590545654,-1.2492713928222656,-0.5378378033638,-0.43856310844421387,0.7199943661689758,3.4879226684570312,0,0,0,1],[0.013191558420658112,0.7009460926055908,0.7130919694900513,-0.795852780342102,-0.6089115738868713,0.5713029503822327,-0.5503080487251282,-1.1094279289245605,-0.7931274175643921,-0.42695096135139465,0.434350848197937,3.194990634918213,0,0,0,1],[-0.029042834416031837,0.6734814047813416,0.7386332154273987,-0.11561399698257446,-0.6448661684989929,0.5519781112670898,-0.5286464691162109,-0.5550023317337036,-0.7637423872947693,-0.49167343974113464,0.4182746112346649,2.7806525230407715,0,0,0,1],[-0.5166106224060059,0.8115344047546387,-0.272992879152298,-1.375256896018982,0.6757282018661499,0.1906219720840454,-0.7120774984359741,-0.7998803853988647,-0.5258371829986572,-0.5523360371589661,-0.6468541622161865,2.226895809173584,0,0,0,1],[-0.831993043422699,0.43615639209747314,-0.34286293387413025,-1.2375283241271973,0.42305928468704224,0.8985824584960938,0.11648997664451599,-0.3100445866584778,0.3588985204696655,-0.048132628202438354,-0.9321346879005432,2.056594133377075,0,0,0,1],[-0.41166597604751587,-0.20839262008666992,-0.8871885538101196,-0.7618569135665894,0.8401443362236023,0.2904197573661804,-0.4580538272857666,0.6205301284790039,0.3531121611595154,-0.9339320063591003,0.0555240660905838,2.0197205543518066,0,0,0,1],[-0.6935195326805115,0.708206057548523,0.13219153881072998,-1.0947455167770386,0.6676146388053894,0.5627942085266113,0.48739367723464966,1.0844497680664062,0.2707786560058594,0.42627012729644775,-0.8631179332733154,0.527847409248352,0,0,0,1],[0.04163888841867447,0.9984320402145386,-0.037410035729408264,-0.8278506398200989,0.9538009166717529,-0.05087210237979889,-0.2961006760597229,-1.128784418106079,-0.29753977060317993,-0.023352503776550293,-0.9544238448143005,1.9308898448944092,0,0,0,1],[-0.4542276859283447,0.1514156013727188,-0.8779240250587463,0.15718194842338562,0.8070422410964966,-0.3474211096763611,-0.4774740934371948,-1.1966432332992554,-0.3773065209388733,-0.9254037141799927,0.035609692335128784,1.8945542573928833,0,0,0,1],[-0.2853507399559021,0.770435631275177,0.5700910687446594,0.3990550637245178,0.9199428558349609,0.38702651858329773,-0.06257367134094238,-1.7516180276870728,-0.26884955167770386,0.5065956711769104,-0.8191953301429749,0.41630327701568604,0,0,0,1],[-0.687720000743866,0.47958171367645264,-0.5450160503387451,-1.6475553512573242,-0.3800317347049713,-0.8774771690368652,-0.29259103536605835,3.207820415496826,-0.6185605525970459,0.005902676843106747,0.7857149839401245,0.4238851070404053,0,0,0,1]],"0.52":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.2925524711608887,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7552910447120667,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.265519142150879,0,0,0,1],[-0.6272205114364624,-0.6949546933174133,0.351613849401474,-1.3743736743927002,0.4813461899757385,0.009027302265167236,0.8764839768409729,-0.7992967367172241,-0.6122909188270569,0.7189968824386597,0.3288516402244568,2.2382068634033203,0,0,0,1],[-0.6771489977836609,-0.7230901718139648,-0.13641762733459473,-2.191793203353882,-0.2332059144973755,0.03505111485719681,0.9717953205108643,-0.7967309951782227,-0.6979142427444458,0.6898638010025024,-0.1923639327287674,3.0741114616394043,0,0,0,1],[-0.761276125907898,-0.6295240521430969,-0.1554279625415802,-2.351353168487549,-0.41840022802352905,0.29377254843711853,0.8594408631324768,-0.7889964580535889,-0.4953784942626953,0.7193030118942261,-0.4870353937149048,3.22633957862854,0,0,0,1],[-0.5614650249481201,-0.26920899748802185,-0.7824855446815491,-2.5943446159362793,0.812831699848175,-0.3566800355911255,-0.4605261981487274,-0.3242974281311035,-0.15511901676654816,-0.8945983648300171,0.41908496618270874,2.287925958633423,0,0,0,1],[-0.6646845936775208,0.027196168899536133,-0.7466289401054382,-2.78800892829895,0.7320038676261902,0.22373998165130615,-0.6435148119926453,-0.580886960029602,0.14954979717731476,-0.9742695093154907,-0.16862422227859497,1.6443672180175781,0,0,0,1],[-0.6606863141059875,0.08895667642354965,-0.7453727126121521,-2.76179575920105,0.74365234375,0.21294642984867096,-0.6337472796440125,-0.3652345538139343,0.10234860330820084,-0.9730060696601868,-0.20684364438056946,0.7053146958351135,0,0,0,1],[-0.06651836633682251,0.8752893805503845,0.47900253534317017,-1.380693793296814,-0.8395843505859375,0.2102973461151123,-0.5008718371391296,-1.2507221698760986,-0.5391402244567871,-0.4354804456233978,0.7208909392356873,3.468087673187256,0,0,0,1],[0.015996873378753662,0.702074408531189,0.7119234800338745,-0.7960565090179443,-0.6078802943229675,0.5721462965011597,-0.5505720973014832,-1.1102570295333862,-0.7938666343688965,-0.4239572584629059,0.435930073261261,3.1772146224975586,0,0,0,1],[-0.026316624134778976,0.6748260259628296,0.7375071048736572,-0.11472272872924805,-0.643890380859375,0.5528936982154846,-0.5288791060447693,-0.5550130009651184,-0.7646639347076416,-0.4887925982475281,0.4199639856815338,2.765781879425049,0,0,0,1],[-0.5164092779159546,0.8117691874504089,-0.27267569303512573,-1.3727706670761108,0.6758211851119995,0.19078047573566437,-0.7119468450546265,-0.7993484139442444,-0.5259155035018921,-0.5519362092018127,-0.6471317410469055,2.2124574184417725,0,0,0,1],[-0.8340112566947937,0.43832361698150635,-0.3351081311702728,-1.234989047050476,0.421656996011734,0.8980621099472046,0.12525832653045654,-0.3094687759876251,0.35585176944732666,-0.03683391213417053,-0.9338163733482361,2.0423245429992676,0,0,0,1],[-0.40908557176589966,-0.21063053607940674,-0.8878534436225891,-0.757178544998169,0.8399478197097778,0.293280690908432,-0.45658954977989197,0.6204053163528442,0.35656213760375977,-0.9325350522994995,0.056941837072372437,2.017343759536743,0,0,0,1],[-0.6914958953857422,0.7104910612106323,0.13052043318748474,-1.093641996383667,0.6681494116783142,0.5603725910186768,0.48944735527038574,1.0888950824737549,0.27460819482803345,0.42565810680389404,-0.8622097969055176,0.5277020931243896,0,0,0,1],[0.04847947508096695,0.997951328754425,-0.04174564778804779,-0.8252191543579102,0.9559825658798218,-0.058468811213970184,-0.28753840923309326,-1.1281625032424927,-0.28939035534858704,-0.02596856653690338,-0.9568588733673096,1.916619896888733,0,0,0,1],[-0.4518548846244812,0.14017534255981445,-0.8810096383094788,0.1591726839542389,0.8122825622558594,-0.34364238381385803,-0.47128212451934814,-1.2034000158309937,-0.36881449818611145,-0.928580105304718,0.041414692997932434,1.8775513172149658,0,0,0,1],[-0.2811473309993744,0.7779641151428223,0.5618966817855835,0.3830904960632324,0.923385500907898,0.37876835465431213,-0.062397271394729614,-1.7523386478424072,-0.2613717019557953,0.5013043880462646,-0.8248507976531982,0.3942263126373291,0,0,0,1],[-0.6911280155181885,0.4775710105895996,-0.5424648523330688,-1.6475553512573242,-0.37777769565582275,-0.8785879611968994,-0.292176753282547,3.207820415496826,-0.6161382794380188,0.0029995241202414036,0.7876322865486145,0.4238851070404053,0,0,0,1]],"0.56":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.2916516065597534,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7550982236862183,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.260287046432495,0,0,0,1],[-0.626579999923706,-0.6957930326461792,0.3510974049568176,-1.3734016418457031,0.4815380573272705,0.008585356175899506,0.8763829469680786,-0.7992458343505859,-0.6127956509590149,0.7181909680366516,0.32967135310173035,2.2312352657318115,0,0,0,1],[-0.6763001680374146,-0.7238985300064087,-0.13634106516838074,-2.1917946338653564,-0.2329813838005066,0.034618549048900604,0.9718647003173828,-0.797195315361023,-0.6988116502761841,0.6890373229980469,-0.1920676827430725,3.066188097000122,0,0,0,1],[-0.7600587606430054,-0.6308332085609436,-0.1560765951871872,-2.3515329360961914,-0.4204532206058502,0.29423248767852783,0.8582808971405029,-0.7895562648773193,-0.49550941586494446,0.7179667949676514,-0.48887014389038086,3.218233823776245,0,0,0,1],[-0.5614073872566223,-0.2681126296520233,-0.7829031348228455,-2.593501567840576,0.8128193616867065,-0.35630157589912415,-0.4608408510684967,-0.3244543969631195,-0.1553923487663269,-0.8950783610343933,0.4179575443267822,2.2797555923461914,0,0,0,1],[-0.6649286150932312,0.028584927320480347,-0.7463597059249878,-2.786377191543579,0.7317361235618591,0.2253098338842392,-0.6432713866233826,-0.5807716846466064,0.14977440237998962,-0.9738680720329285,-0.17073166370391846,1.6358516216278076,0,0,0,1],[-0.6608630418777466,0.09034400433301926,-0.745048999786377,-2.7588253021240234,0.7434608340263367,0.21451666951179504,-0.633442223072052,-0.36360615491867065,0.10259780287742615,-0.9725333452224731,-0.20893347263336182,0.6971859931945801,0,0,0,1],[-0.06576278805732727,0.875764012336731,0.47823861241340637,-1.381085753440857,-0.8393417596817017,0.21063369512557983,-0.5011369585990906,-1.2512483596801758,-0.5396103858947754,-0.43436199426651,0.7212138175964355,3.4608964920043945,0,0,0,1],[0.017013907432556152,0.7024809122085571,0.7114987969398499,-0.796131432056427,-0.6075059175491333,0.5724509358406067,-0.5506685376167297,-1.1105585098266602,-0.7941320538520813,-0.42287108302116394,0.43650132417678833,3.1707704067230225,0,0,0,1],[-0.02532811276614666,0.6753109693527222,0.7370977401733398,-0.1144031286239624,-0.6435361504554749,0.5532245635986328,-0.5289642214775085,-0.5550188422203064,-0.7649955153465271,-0.4877471327781677,0.42057523131370544,2.7603917121887207,0,0,0,1],[-0.5163363218307495,0.8118541836738586,-0.2725607752799988,-1.3718698024749756,0.6758548021316528,0.19083788990974426,-0.71189945936203,-0.799155592918396,-0.5259438753128052,-0.551791250705719,-0.6472322940826416,2.2072253227233887,0,0,0,1],[-0.8347371816635132,0.4390854835510254,-0.3322913348674774,-1.2340691089630127,0.42115598917007446,0.8978485465049744,0.12843462824821472,-0.30926012992858887,0.3547411262989044,-0.03273731470108032,-0.9343913793563843,2.037153720855713,0,0,0,1],[-0.4081578254699707,-0.2114449441432953,-0.8880866765975952,-0.7555082440376282,0.8398662209510803,0.294319748878479,-0.4560706317424774,0.620333731174469,0.35781538486480713,-0.9320231676101685,0.057456523180007935,2.016484498977661,0,0,0,1],[-0.6907673478126526,0.7113114595413208,0.12990835309028625,-1.0932726860046387,0.6683297753334045,0.5595008730888367,0.49019768834114075,1.09048330783844,0.2759995460510254,0.425434410572052,-0.8618757724761963,0.5276604890823364,0,0,0,1],[0.05096498131752014,0.9977611303329468,-0.04330138862133026,-0.8242657780647278,0.9567426443099976,-0.06121327728033066,-0.28442224860191345,-1.1279370784759521,-0.2864362895488739,-0.02693270891904831,-0.9577207565307617,1.9114489555358887,0,0,0,1],[-0.4509833753108978,0.13610327243804932,-0.8820939660072327,0.15987826883792877,0.8141630291938782,-0.3422326445579529,-0.4690577983856201,-1.2058393955230713,-0.3657218813896179,-0.9297058582305908,0.04353104531764984,1.8713746070861816,0,0,0,1],[-0.27961963415145874,0.7806605100631714,0.5589112639427185,0.3772912919521332,0.9246143102645874,0.37577682733535767,-0.06228861212730408,-1.752526044845581,-0.25865238904953003,0.4993603527545929,-0.8268848061561584,0.3862513303756714,0,0,0,1],[-0.6923590898513794,0.476838618516922,-0.5415381789207458,-1.6475553512573242,-0.37695935368537903,-0.8789884448051453,-0.2920285761356354,3.207820415496826,-0.6152564883232117,0.0019492633873596787,0.7883245944976807,0.4238851070404053,0,0,0,1]]},"neutral":{"0.0":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.19904693961143494,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.0754141807556152,0,0,0,1],[-0.6529766917228699,-0.018016591668128967,0.7571640014648438,0.11444257199764252,0.7156388163566589,0.3126196265220642,0.6246041059494019,-0.47373664379119873,-0.24795743823051453,0.9497075080871582,-0.1912398785352707,3.123547077178955,0,0,0,1],[-0.9912880659103394,-0.046820130199193954,0.12311065196990967,0.08421191573143005,0.09927335381507874,0.3487001061439514,0.9319621324539185,-0.11315363645553589,-0.08656327426433563,0.9360643029212952,-0.3410140872001648,4.235295295715332,0,0,0,1],[-0.9860882759094238,-0.018885405734181404,0.16514714062213898,0.0738803967833519,0.1283498853445053,0.5448169708251953,0.82867431640625,-0.03620807081460953,-0.10562480986118317,0.8383423686027527,-0.5348135232925415,4.4418511390686035,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.5278058052062988,0.9148361682891846,0.3876246511936188,0.11323864758014679,0.49558764696121216,0.29210835695266724,-0.8288179636001587,0.47721460461616516,3.7271642684936523,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.8180732727050781,0.8964698314666748,0.42950496077537537,0.1089419350028038,0.7744381427764893,0.41810834407806396,-0.9013423323631287,0.11299324035644531,3.1309268474578857,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.8718037009239197,0.9160460829734802,0.3806556165218353,0.1263406127691269,1.188417673110962,0.3734290599822998,-0.9244080185890198,0.07759280502796173,2.2621653079986572,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.7344900965690613,-0.7457026243209839,-0.4340667724609375,-0.5054836273193359,-0.8846712112426758,-0.31816279888153076,-0.43459445238113403,0.8425554037094116,4.202020645141602,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.2615731954574585,-0.6464337110519409,-0.40909343957901,-0.6440232992172241,-1.1746000051498413,-0.3756905496120453,-0.5640039443969727,0.735360860824585,3.9117393493652344,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.957698106765747,-0.6210803389549255,-0.424692839384079,-0.6587072014808655,-1.571608066558838,-0.3378036618232727,-0.6133291125297546,0.7139436602592468,3.3643970489501953,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.09782453626394272,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1061551570892334,0,0,0,1],[0.22687344253063202,0.17967525124549866,-0.957207441329956,0.23116743564605713,0.7541614770889282,0.5894821286201477,0.2893986701965332,-0.11107714474201202,0.6162541508674622,-0.787545382976532,-0.0017664991319179535,2.7071406841278076,0,0,0,1],[0.2307741492986679,-0.5175269842147827,-0.82396000623703,0.41407620906829834,0.9336193799972534,0.3562767505645752,0.037711068987846375,0.48901355266571045,0.27404117584228516,-0.7779673933982849,0.5653920769691467,1.9054222106933594,0,0,0,1],[-0.029594600200653076,0.9922229647636414,-0.12090721726417542,-0.41262704133987427,0.9279983639717102,0.07221922278404236,0.36551839113235474,1.058133840560913,0.37140730023384094,-0.10138401389122009,-0.9229179620742798,0.6626886129379272,0,0,0,1],[-0.13884037733078003,0.17282389104366302,-0.9751184582710266,0.08478102087974548,0.828371524810791,-0.519331693649292,-0.20998921990394592,-1.0233643054962158,-0.5427007675170898,-0.8369148969650269,-0.07105826586484909,2.690525770187378,0,0,0,1],[-0.1864294409751892,-0.5223381519317627,-0.8321104049682617,0.26071518659591675,0.9291732311248779,-0.36890411376953125,0.023395270109176636,-1.5520422458648682,-0.31918907165527344,-0.7688126564025879,0.5541167855262756,1.8385491371154785,0,0,0,1],[-0.00755542516708374,0.9997495412826538,-0.02108442783355713,-0.5736740231513977,0.9283736348152161,-0.0008220076560974121,-0.3716477155685425,-2.141334295272827,-0.3715716302394867,-0.022382140159606934,-0.9281343221664429,0.6104385852813721,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.04":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.1971862018108368,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.0781021118164062,0,0,0,1],[-0.6529766917228699,-0.018016576766967773,0.7571640014648438,0.11258183419704437,0.7158758044242859,0.31171029806137085,0.6247869729995728,-0.47373664379119873,-0.24727225303649902,0.950006365776062,-0.19064189493656158,3.126235008239746,0,0,0,1],[-0.9912880659103394,-0.04682011529803276,0.12311065196990967,0.0823511928319931,0.0993560254573822,0.34780383110046387,0.9322881698608398,-0.11421811580657959,-0.08646818995475769,0.9363976120948792,-0.3401218056678772,4.238327980041504,0,0,0,1],[-0.9860882759094238,-0.01888539083302021,0.16514714062213898,0.07201968133449554,0.12845078110694885,0.5440141558647156,0.829185962677002,-0.03747032582759857,-0.10550189018249512,0.8388633728027344,-0.5340200066566467,4.444957256317139,0,0,0,1],[0.2788344919681549,-0.4034951329231262,-0.8714606761932373,-0.529666543006897,0.9145561456680298,0.38841789960861206,0.11278165131807327,0.4950093626976013,0.2929839491844177,-0.8284464478492737,0.4773227870464325,3.7307796478271484,0,0,0,1],[0.14672529697418213,-0.055745527148246765,-0.9876055717468262,-0.8199340105056763,0.8960691690444946,0.43036770820617676,0.10883361101150513,0.774430513381958,0.41896629333496094,-0.9009307622909546,0.11309748888015747,3.1348094940185547,0,0,0,1],[0.14632655680179596,-0.023899365216493607,-0.9889479875564575,-0.8736644387245178,0.9156882166862488,0.3815404772758484,0.12626616656780243,1.189241647720337,0.374305784702301,-0.9240431785583496,0.07771372050046921,2.266444683074951,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.7326294183731079,-0.745397686958313,-0.4336503744125366,-0.5062900185585022,-0.885703444480896,-0.3188764452934265,-0.43500977754592896,0.8420711159706116,4.204314708709717,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.2597124576568604,-0.6460737586021423,-0.4085531532764435,-0.6447269320487976,-1.1753541231155396,-0.3763091266155243,-0.5643953084945679,0.7347439527511597,3.9137558937072754,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.955837368965149,-0.6207566857337952,-0.42410531640052795,-0.6593903303146362,-1.5718379020690918,-0.3383979797363281,-0.6137353777885437,0.7133126854896545,3.3660340309143066,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.09596379846334457,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1088430881500244,0,0,0,1],[0.22795936465263367,0.1782866269350052,-0.9572089910507202,0.22930669784545898,0.754161536693573,0.5894820094108582,0.28939855098724365,-0.11107714474201202,0.6158530712127686,-0.7878609895706177,-0.00007906928658485413,2.7098286151885986,0,0,0,1],[0.23001590371131897,-0.5153750777244568,-0.8255192041397095,0.41080182790756226,0.9336193799972534,0.35627663135528564,0.0377110093832016,0.4890134334564209,0.2746778130531311,-0.7793945670127869,0.5631130337715149,1.9077889919281006,0,0,0,1],[-0.029521450400352478,0.9922027587890625,-0.12108910083770752,-0.4124639630317688,0.927998423576355,0.07221916317939758,0.3655182719230652,1.058133602142334,0.37141305208206177,-0.10157972574234009,-0.9228942394256592,0.6627756357192993,0,0,0,1],[-0.1405092477798462,0.17024849355220795,-0.9753323793411255,0.08292028307914734,0.828371524810791,-0.5193316340446472,-0.20998921990394592,-1.0233643054962158,-0.542271077632904,-0.8374426364898682,-0.06805817782878876,2.693213701248169,0,0,0,1],[-0.18535968661308289,-0.5197609066963196,-0.833961009979248,0.25623270869255066,0.9291731715202332,-0.36890408396720886,0.02339521050453186,-1.5520422458648682,-0.31981155276298523,-0.7705574035644531,0.5513274669647217,1.8406997919082642,0,0,0,1],[-0.0076363831758499146,0.9997445940971375,-0.021286338567733765,-0.5740395784378052,0.9283737540245056,-0.0008217990398406982,-0.3716476261615753,-2.141334056854248,-0.37156999111175537,-0.022599637508392334,-0.9281299114227295,0.6098021268844604,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.08":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.19157525897026062,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.0862064361572266,0,0,0,1],[-0.6529765725135803,-0.01801663637161255,0.7571640610694885,0.1069708913564682,0.716586709022522,0.3089665472507477,0.6253345608711243,-0.47373664379119873,-0.2452046275138855,0.9509022831916809,-0.18883736431598663,3.1343393325805664,0,0,0,1],[-0.9912880659103394,-0.04682016372680664,0.12311077117919922,0.07674018293619156,0.09960541129112244,0.34509921073913574,0.9332661032676697,-0.11742997169494629,-0.08618107438087463,0.937397837638855,-0.3374289870262146,4.247465133666992,0,0,0,1],[-0.9860882759094238,-0.018885409459471703,0.16514725983142853,0.0664086565375328,0.12875498831272125,0.5415902733802795,0.8307240605354309,-0.041278988122940063,-0.10513069480657578,0.840430498123169,-0.5316240787506104,4.454315185546875,0,0,0,1],[0.2788345515727997,-0.40349504351615906,-0.8714606761932373,-0.5352774262428284,0.9137064218521118,0.3908078372478485,0.11140339076519012,0.4932602047920227,0.2956230044364929,-0.8273217678070068,0.4776463210582733,3.741678237915039,0,0,0,1],[0.1467253416776657,-0.05574546754360199,-0.9876055717468262,-0.8255448341369629,0.8948558568954468,0.4329666197299957,0.10850682854652405,0.7744007110595703,0.4215514659881592,-0.899684727191925,0.11341111361980438,3.146517038345337,0,0,0,1],[0.14632660150527954,-0.023899313062429428,-0.9889479875564575,-0.8792752027511597,0.9146037697792053,0.3842063248157501,0.1260414570569992,1.1917167901992798,0.3769477903842926,-0.9229379892349243,0.07807780802249908,2.279353141784668,0,0,0,1],[-0.5854052901268005,0.7891221046447754,0.18597421050071716,0.7270182967185974,-0.7444740533828735,-0.4323929250240326,-0.5087187886238098,-0.8888139724731445,-0.3210270404815674,-0.43625980615615845,0.8406060338020325,4.211225509643555,0,0,0,1],[-0.6640625596046448,0.7173158526420593,0.21089860796928406,1.2541013956069946,-0.644984781742096,-0.40692228078842163,-0.6468453407287598,-1.1776248216629028,-0.37817275524139404,-0.5655723810195923,0.7328796982765198,3.9198317527770996,0,0,0,1],[-0.7072105407714844,0.6659305095672607,0.2374638319015503,1.9502263069152832,-0.6197772026062012,-0.42233192920684814,-0.661446750164032,-1.5725258588790894,-0.3401886820793152,-0.6149571537971497,0.7114061713218689,3.370967388153076,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.0903528556227684,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1169474124908447,0,0,0,1],[0.23123016953468323,0.17409583926200867,-0.9571958780288696,0.2236957550048828,0.754161536693573,0.5894821882247925,0.28939875960350037,-0.11107714474201202,0.6146327257156372,-0.7887975573539734,0.005009487271308899,2.717932939529419,0,0,0,1],[0.22771745920181274,-0.5088576674461365,-0.8301863074302673,0.4009246826171875,0.933619499206543,0.35627683997154236,0.037711068987846375,0.4890136122703552,0.27658653259277344,-0.783665120601654,0.5562093257904053,1.9149398803710938,0,0,0,1],[-0.029302358627319336,0.9921426773071289,-0.12163352966308594,-0.4119300842285156,0.927998423576355,0.07221934199333191,0.3655185103416443,1.0581340789794922,0.3714306950569153,-0.10216483473777771,-0.9228223562240601,0.6631046533584595,0,0,0,1],[-0.14553451538085938,0.16247135400772095,-0.9759218692779541,0.07730934023857117,0.8283714652061462,-0.519331693649292,-0.2099892497062683,-1.0233643054962158,-0.5409441590309143,-0.8389861583709717,-0.05900607258081436,2.7013180255889893,0,0,0,1],[-0.18211562931537628,-0.5119407176971436,-0.8394947648048401,0.24270465970039368,0.9291732311248779,-0.36890414357185364,0.023395270109176636,-1.5520422458648682,-0.32166996598243713,-0.7757750749588013,0.5428644418716431,1.8472328186035156,0,0,0,1],[-0.007874689996242523,0.9997298717498779,-0.021881848573684692,-0.575075626373291,0.9283736348152161,-0.0008220970630645752,-0.37164774537086487,-2.141334295272827,-0.37156516313552856,-0.023241043090820312,-0.9281160831451416,0.6080003976821899,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.12":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.1823761761188507,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.099494218826294,0,0,0,1],[-0.6529766917228699,-0.018016576766967773,0.7571640610694885,0.09777180850505829,0.7177392840385437,0.30446240305900574,0.6262214183807373,-0.47373664379119873,-0.24181024730205536,0.9523539543151855,-0.18587559461593628,3.147627115249634,0,0,0,1],[-0.9912881255149841,-0.04682011529803276,0.12311071157455444,0.06754116714000702,0.10001218318939209,0.3406585454940796,0.9348528385162354,-0.1227024495601654,-0.0857086032629013,0.9390206336975098,-0.3330080807209015,4.262426853179932,0,0,0,1],[-0.9860883355140686,-0.018885377794504166,0.16514720022678375,0.05720965191721916,0.1292511373758316,0.5376063585281372,0.8332310318946838,-0.0475313663482666,-0.1045200526714325,0.8429843783378601,-0.5276862382888794,4.469635009765625,0,0,0,1],[0.2788345217704773,-0.4034951329231262,-0.8714606761932373,-0.5444765686988831,0.9122970700263977,0.39471927285194397,0.10914141684770584,0.4903748035430908,0.2999442219734192,-0.825462818145752,0.4781683385372162,3.759536027908325,0,0,0,1],[0.14672532677650452,-0.055745527148246765,-0.9876055717468262,-0.8347440958023071,0.8928505778312683,0.4372200667858124,0.10796883702278137,0.7743290662765503,0.42578205466270447,-0.8976253867149353,0.11392347514629364,3.1657121181488037,0,0,0,1],[0.14632658660411835,-0.023899365216493607,-0.9889479875564575,-0.8884745240211487,0.9128093719482422,0.3885703682899475,0.12567049264907837,1.1957447528839111,0.3812723159790039,-0.9211091995239258,0.07867356389760971,2.3005332946777344,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.18597429990768433,0.7178193926811218,-0.7429463267326355,-0.43032321333885193,-0.5126917958259583,-0.8939063549041748,-0.3245469927787781,-0.43830156326293945,0.838188886642456,4.222536563873291,0,0,0,1],[-0.6640625,0.7173157930374146,0.21089869737625122,1.244902491569519,-0.6431876420974731,-0.40424078702926636,-0.6503069400787354,-1.1813347339630127,-0.381221204996109,-0.5674921274185181,0.7298099994659424,3.929779052734375,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746392130851746,1.9410274028778076,-0.6181601285934448,-0.41941654682159424,-0.6648065447807312,-1.5736334323883057,-0.343118280172348,-0.616949200630188,0.7082676291465759,3.379051685333252,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.08115377277135849,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.130235195159912,0,0,0,1],[0.23657909035682678,0.1672133207321167,-0.957115888595581,0.2144966721534729,0.754161536693573,0.5894820690155029,0.2893986701965332,-0.11107714474201202,0.6125937700271606,-0.7902852296829224,0.013353124260902405,2.7312207221984863,0,0,0,1],[0.22390921413898468,-0.49808037281036377,-0.837723970413208,0.38471925258636475,0.9336194396018982,0.3562767207622528,0.037711143493652344,0.4890134930610657,0.27967843413352966,-0.7905588150024414,0.5447906255722046,1.926713228225708,0,0,0,1],[-0.028948292136192322,0.9920449256896973,-0.12251284718513489,-0.41091978549957275,0.927998423576355,0.07221919298171997,0.3655183017253876,1.058133840560913,0.37145838141441345,-0.10311031341552734,-0.922706127166748,0.6638659238815308,0,0,0,1],[-0.15374958515167236,0.14968501031398773,-0.9767067432403564,0.06811025738716125,0.828371524810791,-0.5193316340446472,-0.2099892497062683,-1.0233643054962158,-0.5386667847633362,-0.841361403465271,-0.04414787143468857,2.7146058082580566,0,0,0,1],[-0.1767391562461853,-0.49896439909935,-0.8484094142913818,0.22048911452293396,0.9291732311248779,-0.36890408396720886,0.023395225405693054,-1.5520422458648682,-0.32465508580207825,-0.7841840386390686,0.528823733329773,1.858102560043335,0,0,0,1],[-0.008249454200267792,0.999705970287323,-0.022817790508270264,-0.5765626430511475,0.9283737540245056,-0.000821918249130249,-0.37164756655693054,-2.141334056854248,-0.37155696749687195,-0.024249166250228882,-0.9280934929847717,0.6054375171661377,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.16":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.17011871933937073,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.117199420928955,0,0,0,1],[-0.6529766321182251,-0.01801663637161255,0.7571640610694885,0.08551435172557831,0.7192500233650208,0.29844990372657776,0.6273812651634216,-0.4737366735935211,-0.23727869987487793,0.954255223274231,-0.1819223016500473,3.165332317352295,0,0,0,1],[-0.9912880659103394,-0.04682016745209694,0.12311074137687683,0.055283643305301666,0.10055071115493774,0.3347294330596924,0.9369344711303711,-0.12974047660827637,-0.08507619798183441,0.941150426864624,-0.3271053433418274,4.282323837280273,0,0,0,1],[-0.9860882759094238,-0.018885420635342598,0.16514723002910614,0.044952116906642914,0.1299077272415161,0.5322790145874023,0.836542546749115,-0.05587773025035858,-0.1037028506398201,0.8463582396507263,-0.5224205851554871,4.490001678466797,0,0,0,1],[0.2788345217704773,-0.40349501371383667,-0.8714607357978821,-0.556734025478363,0.9103871583938599,0.3999175429344177,0.1061234176158905,0.486496239900589,0.30569207668304443,-0.8229568600654602,0.47884711623191833,3.7833096981048584,0,0,0,1],[0.14672529697418213,-0.05574539303779602,-0.987605631351471,-0.8470014333724976,0.8901475667953491,0.4428726136684418,0.10724811255931854,0.7741900682449341,0.4314047694206238,-0.894849956035614,0.11460216343402863,3.191288709640503,0,0,0,1],[0.14632657170295715,-0.023899231106042862,-0.9889480471611023,-0.9007317423820496,0.9103866219520569,0.39437198638916016,0.1251717507839203,1.2010540962219238,0.3870218098163605,-0.91864013671875,0.07946459949016571,2.328784942626953,0,0,0,1],[-0.5854052305221558,0.7891221642494202,0.18597424030303955,0.7055618166923523,-0.7408846020698547,-0.42755019664764404,-0.517967939376831,-0.9006773233413696,-0.3292262554168701,-0.44100677967071533,0.834938645362854,4.237570285797119,0,0,0,1],[-0.6640625,0.7173159122467041,0.21089865267276764,1.2326449155807495,-0.6407704949378967,-0.40065351128578186,-0.6548967361450195,-1.186253547668457,-0.3852701485157013,-0.5700302720069885,0.7256940007209778,3.9430060386657715,0,0,0,1],[-0.7072104811668396,0.6659305691719055,0.23746387660503387,1.9287699460983276,-0.615983784198761,-0.41551703214645386,-0.6692602038383484,-1.5750709772109985,-0.34701013565063477,-0.6195821166038513,0.7040606141090393,3.38981556892395,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.06889631599187851,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1479403972625732,0,0,0,1],[0.24367935955524445,0.15802150964736938,-0.9568961262702942,0.20223921537399292,0.7541615962982178,0.5894820690155029,0.28939858078956604,-0.11107717454433441,0.6098040342330933,-0.7921743392944336,0.024470731616020203,2.7489259243011475,0,0,0,1],[0.21876128017902374,-0.48355159163475037,-0.8475388288497925,0.36310455203056335,0.9336194396018982,0.3562766909599304,0.0377110093832016,0.4890134334564209,0.28372302651405334,-0.7995280027389526,0.5293923020362854,1.942495346069336,0,0,0,1],[-0.028484314680099487,0.991915225982666,-0.12366533279418945,-0.40932604670524597,0.927998423576355,0.07221931219100952,0.3655183017253876,1.0581337213516235,0.3714941740036011,-0.10434943437576294,-0.9225524663925171,0.665320634841919,0,0,0,1],[-0.16464552283287048,0.1325860619544983,-0.9774013757705688,0.055852800607681274,0.828371524810791,-0.519331693649292,-0.20998921990394592,-1.0233643054962158,-0.5354369282722473,-0.8442248106002808,-0.024325011298060417,2.7323110103607178,0,0,0,1],[-0.16947290301322937,-0.48139533400535583,-0.8599640727043152,0.1908249855041504,0.9291732907295227,-0.36890408396720886,0.023395255208015442,-1.5520422458648682,-0.32850661873817444,-0.7950903177261353,0.509818434715271,1.8728928565979004,0,0,0,1],[-0.008724190294742584,0.9996740818023682,-0.02400389313697815,-0.5781617164611816,0.9283737540245056,-0.0008220970630645752,-0.3716477155685425,-2.141334056854248,-0.3715462386608124,-0.02552667260169983,-0.9280635118484497,0.6028060913085938,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.2":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.15577062964439392,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.1379244327545166,0,0,0,1],[-0.6529766321182251,-0.01801660656929016,0.7571640610694885,0.0711662620306015,0.7209822535514832,0.2913966476917267,0.628707230091095,-0.4737366735935211,-0.23196211457252502,0.9564326405525208,-0.17728552222251892,3.1860573291778564,0,0,0,1],[-0.9912880659103394,-0.04682014510035515,0.12311074137687683,0.040935590863227844,0.10117614269256592,0.327771931886673,0.9393237829208374,-0.13799640536308289,-0.08433149755001068,0.9435960650444031,-0.32017919421195984,4.305558204650879,0,0,0,1],[-0.9860882759094238,-0.018885398283600807,0.16514723002910614,0.03060406818985939,0.13066986203193665,0.5260159373283386,0.8403765559196472,-0.06566893309354782,-0.10274091362953186,0.8502649068832397,-0.5162302851676941,4.513775825500488,0,0,0,1],[0.2788345515727997,-0.40349510312080383,-0.8714606761932373,-0.5710820555686951,0.9081054329872131,0.40598243474960327,0.1025853157043457,0.4819076359272003,0.312404990196228,-0.8199820518493652,0.47961753606796265,3.8111071586608887,0,0,0,1],[0.1467253565788269,-0.055745527148246765,-0.9876055717468262,-0.8613495230674744,0.8869381546974182,0.44946709275245667,0.10639916360378265,0.7739644646644592,0.4379647970199585,-0.8915560841560364,0.11539073288440704,3.221226215362549,0,0,0,1],[0.14632661640644073,-0.023899372667074203,-0.9889479875564575,-0.9150799512863159,0.9075043797492981,0.4011434316635132,0.1245817169547081,1.2071845531463623,0.3937324583530426,-0.9157036542892456,0.0803864449262619,2.3618972301483154,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.18597427010536194,0.6912137269973755,-0.7384337186813354,-0.4242827892303467,-0.5241180658340454,-0.9085818529129028,-0.33468714356422424,-0.4441513121128082,0.8310918211936951,4.2551140785217285,0,0,0,1],[-0.6640625,0.7173157930374146,0.21089866757392883,1.218296766281128,-0.6379085779190063,-0.39643430709838867,-0.660236656665802,-1.1919755935668945,-0.3899903893470764,-0.5729726552963257,0.7208392024040222,3.958449363708496,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746389150619507,1.9144216775894165,-0.6134050488471985,-0.4109315872192383,-0.6744400262832642,-1.5766985416412354,-0.3515484035015106,-0.6226328611373901,0.6991003751754761,3.4024033546447754,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.0545482262969017,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1686654090881348,0,0,0,1],[0.25194984674453735,0.14723367989063263,-0.9564749002456665,0.1878911256790161,0.754161536693573,0.5894820690155029,0.28939855098724365,-0.11107717454433441,0.6064338088035583,-0.7942500710487366,0.03748181462287903,2.769650936126709,0,0,0,1],[0.21263474225997925,-0.4663178622722626,-0.8586821556091309,0.33777448534965515,0.9336193799972534,0.35627663135528564,0.03771097958087921,0.4890134334564209,0.28834307193756104,-0.8097005486488342,0.5111197233200073,1.9611072540283203,0,0,0,1],[-0.027948498725891113,0.9917638301849365,-0.12499618530273438,-0.4071267545223236,0.9279983639717102,0.07221928238868713,0.3655182719230652,1.058133602142334,0.37153488397598267,-0.10578030347824097,-0.9223730564117432,0.6676827669143677,0,0,0,1],[-0.17731830477714539,0.11249423027038574,-0.9777034521102905,0.04150471091270447,0.8283714056015015,-0.519331693649292,-0.20998930931091309,-1.0233643054962158,-0.5313746929168701,-0.8471361398696899,-0.0011001471430063248,2.7530360221862793,0,0,0,1],[-0.1608358919620514,-0.46046674251556396,-0.8729850649833679,0.15602347254753113,0.9291731119155884,-0.36890414357185364,0.023395225405693054,-1.5520422458648682,-0.33282041549682617,-0.8073911070823669,0.4871859848499298,1.8906540870666504,0,0,0,1],[-0.009257212281227112,0.9996364116668701,-0.025335103273391724,-0.5795316696166992,0.9283735156059265,-0.0008219778537750244,-0.3716477155685425,-2.141334295272827,-0.37153342366218567,-0.026960790157318115,-0.9280281066894531,0.6009178161621094,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.24":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.14067554473876953,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.159728527069092,0,0,0,1],[-0.6529766321182251,-0.018016576766967773,0.7571640014648438,0.05607117712497711,0.7227622270584106,0.28395891189575195,0.6300653219223022,-0.4737366735935211,-0.22635498642921448,0.9586671590805054,-0.17239674925804138,3.2078614234924316,0,0,0,1],[-0.9912880659103394,-0.04682011529803276,0.12311068177223206,0.02584053948521614,0.10182803869247437,0.3204328417778015,0.9417824745178223,-0.14670208096504211,-0.08354310691356659,0.9461135268211365,-0.3128734827041626,4.3299360275268555,0,0,0,1],[-0.9860882759094238,-0.018885385245084763,0.16514717042446136,0.015509024262428284,0.13146387040615082,0.5193958282470703,0.8443610072135925,-0.0759940817952156,-0.10172287374734879,0.8543250560760498,-0.5096872448921204,4.5387091636657715,0,0,0,1],[0.2788345515727997,-0.40349510312080383,-0.8714606761932373,-0.5861771702766418,0.9056514501571655,0.4123392701148987,0.09885682910680771,0.4770238697528839,0.31944912672042847,-0.8168037533760071,0.48039987683296204,3.840315103530884,0,0,0,1],[0.1467253565788269,-0.055745527148246765,-0.9876055717468262,-0.8764446377754211,0.8835095763206482,0.45637860894203186,0.10549964755773544,0.7736536860466003,0.44484075903892517,-0.8880378007888794,0.11621372401714325,3.252720355987549,0,0,0,1],[0.14632661640644073,-0.023899372667074203,-0.9889479875564575,-0.9301750659942627,0.9044187068939209,0.40824398398399353,0.12395354360342026,1.2135354280471802,0.40076953172683716,-0.912559986114502,0.08135172724723816,2.396782398223877,0,0,0,1],[-0.5854052305221558,0.7891220450401306,0.1859743595123291,0.6761186718940735,-0.7358118295669556,-0.42082005739212036,-0.5305576324462891,-0.916872501373291,-0.3404126763343811,-0.4474334120750427,0.8269957304000854,4.273508548736572,0,0,0,1],[-0.6640625,0.7173157334327698,0.210898756980896,1.2032017707824707,-0.634860098361969,-0.39197176694869995,-0.6658157110214233,-1.1979533433914185,-0.39493346214294434,-0.5760345458984375,0.7156891822814941,3.974651575088501,0,0,0,1],[-0.7072104811668396,0.6659303903579712,0.23746398091316223,1.8993265628814697,-0.6106559634208679,-0.4060828685760498,-0.6798498034477234,-1.578345537185669,-0.35630229115486145,-0.6258058547973633,0.6938406229019165,3.4156341552734375,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.03945314139127731,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.19046950340271,0,0,0,1],[0.2606011927127838,0.13585422933101654,-0.9558406472206116,0.17279604077339172,0.754161536693573,0.5894820690155029,0.2893986701965332,-0.11107717454433441,0.6027666926383972,-0.7962754368782043,0.05116355046629906,2.791455030441284,0,0,0,1],[0.2060808688402176,-0.44794678688049316,-0.8699856996536255,0.3110951781272888,0.9336194396018982,0.35627666115760803,0.03771102428436279,0.4890134334564209,0.29306307435035706,-0.8200066685676575,0.49163320660591125,1.9808495044708252,0,0,0,1],[-0.02738729864358902,0.991602897644043,-0.126388818025589,-0.4044598937034607,0.9279984831809998,0.07221916317939758,0.365518182516098,1.058133602142334,0.3715766668319702,-0.10727772116661072,-0.9221832752227783,0.670961856842041,0,0,0,1],[-0.19054466485977173,0.09128482639789581,-0.9774254560470581,0.026409626007080078,0.8283714652061462,-0.519331693649292,-0.2099892497062683,-1.0233643054962158,-0.5267765522003174,-0.8496832847595215,0.023337988182902336,2.7748401165008545,0,0,0,1],[-0.15162056684494019,-0.43808460235595703,-0.8860552310943604,0.1193372830748558,0.9291731715202332,-0.36890411376953125,0.023395255208015442,-1.5520422458648682,-0.33711838722229004,-0.8197510838508606,0.46298953890800476,1.9098652601242065,0,0,0,1],[-0.00980878621339798,0.9995954036712646,-0.02671271562576294,-0.5804643630981445,0.9283736348152161,-0.0008220076560974121,-0.37164777517318726,-2.141334295272827,-0.3715191185474396,-0.028444617986679077,-0.9279894232749939,0.6003850698471069,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.28":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.1263275146484375,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.180453300476074,0,0,0,1],[-0.6529766321182251,-0.01801660656929016,0.7571640014648438,0.04172314703464508,0.7244136333465576,0.27687346935272217,0.6313209533691406,-0.4737366735935211,-0.22101278603076935,0.9607374668121338,-0.1677403599023819,3.228586196899414,0,0,0,1],[-0.9912880659103394,-0.04682014510035515,0.12311068177223206,0.011492474004626274,0.10244205594062805,0.31343910098075867,0.9440666437149048,-0.1549951136112213,-0.08278904855251312,0.9484534859657288,-0.3059118986129761,4.3530449867248535,0,0,0,1],[-0.9860882759094238,-0.018885411322116852,0.16514718532562256,0.0011609522625803947,0.13221129775047302,0.5130743384361267,0.8481009006500244,-0.08583038300275803,-0.10074952244758606,0.8581364154815674,-0.5034395456314087,4.5623345375061035,0,0,0,1],[0.2788345217704773,-0.4034951329231262,-0.8714606761932373,-0.6005252003669739,0.9032684564590454,0.41835835576057434,0.09530742466449738,0.4723285734653473,0.32612675428390503,-0.8137373328208923,0.4811166524887085,3.8680419921875,0,0,0,1],[0.14672532677650452,-0.055745527148246765,-0.9876055717468262,-0.890792727470398,0.8802013993263245,0.4629223942756653,0.10463877022266388,0.773288369178772,0.45135149359703064,-0.8846443891525269,0.11698944866657257,3.282653331756592,0,0,0,1],[0.14632658660411835,-0.023899365216493607,-0.9889479875564575,-0.9445231556892395,0.901435375213623,0.4149700999259949,0.12334954738616943,1.2194774150848389,0.407435804605484,-0.9095212817192078,0.08226464688777924,2.4299862384796143,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.1859743297100067,0.6617705821990967,-0.7332786321640015,-0.4175052344799042,-0.5366487503051758,-0.9247279167175293,-0.34583592414855957,-0.4505281448364258,0.823056161403656,4.290932655334473,0,0,0,1],[-0.6640625,0.7173157930374146,0.2108987271785736,1.1888537406921387,-0.6319271326065063,-0.3877083361148834,-0.6710814237594604,-1.20359468460083,-0.39960989356040955,-0.5789128541946411,0.7107540369033813,3.990008592605591,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746395111083984,1.8849786520004272,-0.6080088019371033,-0.40145161747932434,-0.6849538683891296,-1.579849362373352,-0.3608010709285736,-0.6287870407104492,0.6888025403022766,3.4281978607177734,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.025105111300945282,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.2111942768096924,0,0,0,1],[0.26877427101135254,0.12501266598701477,-0.9550564289093018,0.1584480106830597,0.7541615962982178,0.5894818902015686,0.2893984615802765,-0.11107717454433441,0.5991666913032532,-0.7980495095252991,0.06415778398513794,2.8121798038482666,0,0,0,1],[0.19975708425045013,-0.43028247356414795,-0.8803151249885559,0.2857104539871216,0.9336193799972534,0.3562764525413513,0.037710919976234436,0.4890132546424866,0.2974090278148651,-0.8294119834899902,0.4728885889053345,1.9997682571411133,0,0,0,1],[-0.02685147523880005,0.9914470911026001,-0.1277189552783966,-0.40162748098373413,0.9279983639717102,0.07221940159797668,0.36551806330680847,1.0581331253051758,0.371615469455719,-0.1087082028388977,-0.9220000505447388,0.6748565435409546,0,0,0,1],[-0.2030043601989746,0.07107502222061157,-0.9765952825546265,0.012061595916748047,0.8283714652061462,-0.519331693649292,-0.2099892497062683,-1.0233643054962158,-0.522101640701294,-0.8516119718551636,0.04654993116855621,2.795564889907837,0,0,0,1],[-0.14276474714279175,-0.4165268540382385,-0.8978443741798401,0.0844157412648201,0.9291731715202332,-0.36890408396720886,0.02339528501033783,-1.5520422458648682,-0.34096312522888184,-0.8309123516082764,0.4396916627883911,1.9286266565322876,0,0,0,1],[-0.010341629385948181,0.9995535612106323,-0.02804410457611084,-0.5809492468833923,0.9283735752105713,-0.0008221566677093506,-0.3716477155685425,-2.141334056854248,-0.3715047538280487,-0.0298786461353302,-0.9279501438140869,0.601317286491394,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.32":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.11407002806663513,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.1981585025787354,0,0,0,1],[-0.6529767513275146,-0.018016576766967773,0.7571640014648438,0.029465660452842712,0.7257930636405945,0.27080872654914856,0.632366418838501,-0.4737366735935211,-0.2164396047592163,0.9624645709991455,-0.16375543177127838,3.246291399002075,0,0,0,1],[-0.9912881851196289,-0.04682011902332306,0.12311059236526489,-0.0007649771869182587,0.10296204686164856,0.307451069355011,0.9459772109985352,-0.16209325194358826,-0.08214125037193298,0.9504114389419556,-0.2999517619609833,4.372737884521484,0,0,0,1],[-0.9860883951187134,-0.018885407596826553,0.1651470959186554,-0.01109649334102869,0.1328439712524414,0.5076519250869751,0.851259171962738,-0.09424985945224762,-0.09991362690925598,0.861355185508728,-0.4980807304382324,4.582459449768066,0,0,0,1],[0.2788344919681549,-0.403495192527771,-0.8714607357978821,-0.6127827763557434,0.9011936187744141,0.42348209023475647,0.0922711044549942,0.4682767689228058,0.33181700110435486,-0.8110826015472412,0.48170819878578186,3.8917012214660645,0,0,0,1],[0.14672528207302094,-0.05574557185173035,-0.987605631351471,-0.9030503034591675,0.8773372769355774,0.4684924781322479,0.10389874130487442,0.7729225158691406,0.45689377188682556,-0.8817071318626404,0.11764711141586304,3.3082222938537598,0,0,0,1],[0.14632654190063477,-0.023899409919977188,-0.9889480471611023,-0.9567807912826538,0.898847758769989,0.42069804668426514,0.1228281557559967,1.2244802713394165,0.4131128787994385,-0.9068859815597534,0.08304101228713989,2.458386182785034,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.1859743297100067,0.649513304233551,-0.7310830354690552,-0.4146554470062256,-0.541828989982605,-0.9314189553260803,-0.35045361518859863,-0.4531523287296295,0.8196552395820618,4.305772304534912,0,0,0,1],[-0.6640625,0.7173157930374146,0.2108987271785736,1.1765964031219482,-0.6293944120407104,-0.3840494155883789,-0.6755506992340088,-1.208382248878479,-0.40358731150627136,-0.5813465118408203,0.7065075635910034,4.003095626831055,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746395111083984,1.8727213144302368,-0.6057212948799133,-0.3974778950214386,-0.6892843842506409,-1.5810861587524414,-0.3646284341812134,-0.6313064098358154,0.6844689846038818,3.4389231204986572,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.012847624719142914,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.2288994789123535,0,0,0,1],[0.275716632604599,0.1157335489988327,-0.9542466998100281,0.14619052410125732,0.7541615962982178,0.5894819498062134,0.2893986105918884,-0.11107717454433441,0.596004068851471,-0.799447774887085,0.07524806261062622,2.8298850059509277,0,0,0,1],[0.1942894607782364,-0.4150550663471222,-0.888809084892273,0.2640068531036377,0.9336193799972534,0.35627657175064087,0.03771105408668518,0.48901331424713135,0.3010096549987793,-0.8371357917785645,0.4567238688468933,2.016050100326538,0,0,0,1],[-0.026387035846710205,0.9913105964660645,-0.12887048721313477,-0.3990066647529602,0.927998423576355,0.072219118475914,0.365518182516098,1.0581333637237549,0.3716488778591156,-0.10994639992713928,-0.921839714050293,0.6788002252578735,0,0,0,1],[-0.21355414390563965,0.053784310817718506,-0.9754499197006226,-0.0001958906650543213,0.8283714056015015,-0.519331693649292,-0.20998933911323547,-1.0233643054962158,-0.5178759694099426,-0.8528785705566406,0.06635189056396484,2.813270092010498,0,0,0,1],[-0.13514411449432373,-0.39793863892555237,-0.9074037671089172,0.05455636605620384,0.9291731119155884,-0.368904173374176,0.023395225405693054,-1.5520422458648682,-0.3440547585487366,-0.8399730920791626,0.4196087718009949,1.945042371749878,0,0,0,1],[-0.010816596448421478,0.9995145797729492,-0.02922964096069336,-0.5811156034469604,0.9283735752105713,-0.0008217096328735352,-0.37164780497550964,-2.141334295272827,-0.37149110436439514,-0.031155914068222046,-0.9279136657714844,0.6032593250274658,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.36":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.10487091541290283,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.2114462852478027,0,0,0,1],[-0.6529765725135803,-0.018016621470451355,0.7571640014648438,0.020266547799110413,0.7268095016479492,0.26625022292137146,0.6331342458724976,-0.4737366735935211,-0.21300187706947327,0.9637355804443359,-0.16076049208641052,3.2595791816711426,0,0,0,1],[-0.9912880063056946,-0.04682014882564545,0.12311071157455444,-0.009964141994714737,0.10334977507591248,0.3029491901397705,0.9473863244056702,-0.1674283742904663,-0.08165302872657776,0.9518560171127319,-0.2954709231853485,4.38748836517334,0,0,0,1],[-0.986088216304779,-0.018885407596826553,0.16514720022678375,-0.02029566466808319,0.13331547379493713,0.5035693645477295,0.8536071181297302,-0.10057839006185532,-0.09928376972675323,0.86374831199646,-0.4940459728240967,4.59752893447876,0,0,0,1],[0.2788345217704773,-0.40349504351615906,-0.8714606761932373,-0.6219817996025085,0.8996130228042603,0.42731642723083496,0.08999020606279373,0.4652116000652313,0.33607882261276245,-0.809069037437439,0.48213955760002136,3.909440517425537,0,0,0,1],[0.14672531187534332,-0.05574546754360199,-0.9876055717468262,-0.9122492074966431,0.8751649856567383,0.47266051173210144,0.10334089398384094,0.7726157307624817,0.46104124188423157,-0.879479706287384,0.1181376576423645,3.3274102210998535,0,0,0,1],[0.14632657170295715,-0.02389930561184883,-0.9889479875564575,-0.9659795761108398,0.8968824744224548,0.42498579621315,0.12243388593196869,1.2281908988952637,0.41736266016960144,-0.9048845171928406,0.0836215391755104,2.4797210693359375,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.18597427010536194,0.6403139233589172,-0.7294158935546875,-0.412506103515625,-0.5457024574279785,-0.9364286661148071,-0.35391008853912354,-0.4551098942756653,0.8170814514160156,4.316882133483887,0,0,0,1],[-0.6640625,0.7173157930374146,0.21089866757392883,1.1673970222473145,-0.6274769306182861,-0.3812936544418335,-0.678887128829956,-1.2119563817977905,-0.40656188130378723,-0.5831577777862549,0.7033020853996277,4.012897968292236,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746389150619507,1.863521933555603,-0.603988528251648,-0.3944854736328125,-0.6925163865089417,-1.5819859504699707,-0.36749139428138733,-0.6331806778907776,0.68119877576828,3.446967840194702,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.003648512065410614,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.242187261581421,0,0,0,1],[0.2809014320373535,0.10876038670539856,-0.9535545110702515,0.13699141144752502,0.754161536693573,0.5894820094108582,0.2893986105918884,-0.11107717454433441,0.5935781002044678,-0.800426185131073,0.08356331288814545,2.843172788619995,0,0,0,1],[0.19014990329742432,-0.40355443954467773,-0.8949790000915527,0.24770909547805786,0.9336193799972534,0.3562766909599304,0.03771102428436279,0.4890133738517761,0.3036416471004486,-0.8427401185035706,0.44451189041137695,2.028341770172119,0,0,0,1],[-0.026032887399196625,0.9912052154541016,-0.1297491192817688,-0.3969331979751587,0.9279983639717102,0.07221925258636475,0.3655183017253876,1.058133602142334,0.3716740012168884,-0.11089128255844116,-0.9217164516448975,0.68213951587677,0,0,0,1],[-0.22141033411026,0.04079917073249817,-0.9743273258209229,-0.009395003318786621,0.8283714652061462,-0.519331693649292,-0.2099892795085907,-1.0233643054962158,-0.51456618309021,-0.8535982966423035,0.0811883881688118,2.8265578746795654,0,0,0,1],[-0.1294018030166626,-0.38391003012657166,-0.9142588376998901,0.03213842213153839,0.9291731715202332,-0.36890411376953125,0.023395240306854248,-1.5520422458648682,-0.3462553024291992,-0.8464769124984741,0.40445542335510254,1.9575974941253662,0,0,0,1],[-0.011191077530384064,0.9994826316833496,-0.03016561269760132,-0.5811240673065186,0.9283735156059265,-0.000822111964225769,-0.37164774537086487,-2.141334295272827,-0.37147998809814453,-0.03216394782066345,-0.9278836846351624,0.6054251194000244,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.4":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.09926006197929382,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.219550609588623,0,0,0,1],[-0.6529766321182251,-0.01801663637161255,0.7571640014648438,0.014655694365501404,0.7274212837219238,0.263467013835907,0.6335957050323486,-0.47373664379119873,-0.2109028846025467,0.9645000696182251,-0.15893210470676422,3.267683506011963,0,0,0,1],[-0.9912880659103394,-0.04682016745209694,0.12311068177223206,-0.015575012192130089,0.10358503460884094,0.3002001643180847,0.948235273361206,-0.17068564891815186,-0.08135432004928589,0.952726423740387,-0.2927348017692566,4.396471977233887,0,0,0,1],[-0.9860882759094238,-0.018885433673858643,0.16514718532562256,-0.02590653859078884,0.13360150158405304,0.5010737776756287,0.8550297021865845,-0.10444227606058121,-0.09889847785234451,0.8651983141899109,-0.49157971143722534,4.606704235076904,0,0,0,1],[0.2788344919681549,-0.40349507331848145,-0.8714607357978821,-0.6275926828384399,0.898638904094696,0.4296501576900482,0.08859793841838837,0.46333158016204834,0.33867430686950684,-0.8078320622444153,0.48239725828170776,3.9202523231506348,0,0,0,1],[0.14672526717185974,-0.055745452642440796,-0.987605631351471,-0.9178601503372192,0.8738301992416382,0.4751974046230316,0.10299935936927795,0.7724145650863647,0.4635656476020813,-0.8781116008758545,0.11843539774417877,3.339111804962158,0,0,0,1],[0.14632652699947357,-0.023899290710687637,-0.9889480471611023,-0.971590518951416,0.8956736326217651,0.42759621143341064,0.1221919134259224,1.2304348945617676,0.4199499785900116,-0.9036539196968079,0.08397454023361206,2.492741346359253,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.18597429990768433,0.6347031593322754,-0.728391170501709,-0.4111904799938202,-0.5480589270591736,-0.9394788146018982,-0.3560141921043396,-0.45629870891571045,0.8155027627944946,4.323646068572998,0,0,0,1],[-0.6640625,0.7173157930374146,0.21089869737625122,1.1617863178253174,-0.6263006925582886,-0.37960851192474365,-0.680914580821991,-1.214127779006958,-0.4083715081214905,-0.5842559337615967,0.7013393640518188,4.018867492675781,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746392130851746,1.857911229133606,-0.602925181388855,-0.3926558792591095,-0.6944799423217773,-1.582521915435791,-0.3692333698272705,-0.6343166828155518,0.679196834564209,3.451871633529663,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,-0.0019623413681983948,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.250291585922241,0,0,0,1],[0.28405314683914185,0.1045038253068924,-0.9530968070030212,0.13138055801391602,0.7541614174842834,0.5894821882247925,0.28939878940582275,-0.11107714474201202,0.5920765399932861,-0.800993025302887,0.08863132447004318,2.8512771129608154,0,0,0,1],[0.1876114010810852,-0.39651280641555786,-0.8986547589302063,0.23776507377624512,0.9336193203926086,0.35627689957618713,0.037711113691329956,0.4890136122703552,0.30521681904792786,-0.8460760116577148,0.43703317642211914,2.0358691215515137,0,0,0,1],[-0.025813527405261993,0.9911397695541382,-0.13029265403747559,-0.39562880992889404,0.9279983639717102,0.07221902906894684,0.3655184805393219,1.0581341981887817,0.3716893196105957,-0.11147579550743103,-0.9216398000717163,0.6843380928039551,0,0,0,1],[-0.22617501020431519,0.03287768363952637,-0.9735320210456848,-0.01500585675239563,0.8283714652061462,-0.519331693649292,-0.20998939871788025,-1.0233643054962158,-0.5124897956848145,-0.8539401292800903,0.0902247428894043,2.8346621990203857,0,0,0,1],[-0.12589308619499207,-0.37532877922058105,-0.9183028340339661,0.01846351847052574,0.9291732311248779,-0.36890414357185364,0.023395150899887085,-1.5520422458648682,-0.34754645824432373,-0.8503167033195496,0.3951875567436218,1.9653539657592773,0,0,0,1],[-0.01142933964729309,0.9994617700576782,-0.030760645866394043,-0.5810912251472473,0.9283736944198608,-0.0008218884468078613,-0.37164777517318726,-2.141334295272827,-0.3714728355407715,-0.03280487656593323,-0.9278641939163208,0.6070479154586792,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.44":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.0973992645740509,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.222238540649414,0,0,0,1],[-0.6529766917228699,-0.018016591668128967,0.7571640014648438,0.012794896960258484,0.7276228666305542,0.26254358887672424,0.6337475776672363,-0.47373664379119873,-0.21020641922950745,0.9647518992424011,-0.15832550823688507,3.270371437072754,0,0,0,1],[-0.9912880659103394,-0.046820130199193954,0.12311065196990967,-0.01743575744330883,0.1036628782749176,0.29928797483444214,0.9485151171684265,-0.17176637053489685,-0.08125510811805725,0.9530134797096252,-0.2918269634246826,4.399449348449707,0,0,0,1],[-0.9860882759094238,-0.018885405734181404,0.16514714062213898,-0.027767274528741837,0.13369613885879517,0.5002453327178955,0.8554999828338623,-0.1057242825627327,-0.09877052158117294,0.8656776547431946,-0.49076104164123535,4.609745025634766,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.6294534802436829,0.898314356803894,0.4304233193397522,0.08813609927892685,0.46270644664764404,0.3395344913005829,-0.807420551776886,0.48248186707496643,3.923837184906006,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.9197210073471069,0.873386025428772,0.47603777050971985,0.10288593173027039,0.7723456025123596,0.46440204977989197,-0.8776564002037048,0.11853392422199249,3.3429927825927734,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.9734514355659485,0.8952712416648865,0.4284610450267792,0.12211146950721741,1.2311758995056152,0.42080727219581604,-0.9032442569732666,0.08409145474433899,2.497061014175415,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.6328424215316772,-0.7280501127243042,-0.4107535183429718,-0.548839271068573,-0.9404894113540649,-0.35671132802963257,-0.4566921591758728,0.814977765083313,4.325887680053711,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.1599254608154297,-0.6259095668792725,-0.37904906272888184,-0.6815855503082275,-1.2148464918136597,-0.4089708626270294,-0.5846191644668579,0.7006872892379761,4.020846366882324,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.8560503721237183,-0.6025714874267578,-0.39204853773117065,-0.6951296925544739,-1.5826977491378784,-0.3698103725910187,-0.6346924304962158,0.6785317063331604,3.453497886657715,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,-0.0038231387734413147,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.2529795169830322,0,0,0,1],[0.2850964069366455,0.10309158265590668,-0.9529390931129456,0.1295197606086731,0.7541614770889282,0.5894821286201477,0.28939875960350037,-0.11107714474201202,0.5915749073028564,-0.8011760115623474,0.09031133353710175,2.8539650440216064,0,0,0,1],[0.18676725029945374,-0.3941733241081238,-0.8998589515686035,0.23446662724018097,0.9336194396018982,0.3562767505645752,0.037711068987846375,0.48901355266571045,0.3057340979576111,-0.8471686244010925,0.4345482587814331,2.0383706092834473,0,0,0,1],[-0.02574017643928528,0.9911177158355713,-0.13047447800636292,-0.39519017934799194,0.927998423576355,0.07221919298171997,0.36551833152770996,1.058133840560913,0.371694415807724,-0.11167126893997192,-0.9216141700744629,0.6850942373275757,0,0,0,1],[-0.22775053977966309,0.030250579118728638,-0.9732498526573181,-0.01686665415763855,0.8283714056015015,-0.519331693649292,-0.20998930931091309,-1.0233643054962158,-0.5117915868759155,-0.8540372252464294,0.09321919083595276,2.8373501300811768,0,0,0,1],[-0.12472876161336899,-0.3724795877933502,-0.9196208715438843,0.013928338885307312,0.9291731119155884,-0.36890411376953125,0.023395225405693054,-1.5520422458648682,-0.3479660451412201,-0.8515685796737671,0.3921106457710266,1.9679429531097412,0,0,0,1],[-0.011510349810123444,0.9994546175003052,-0.030962616205215454,-0.5810750126838684,0.9283735156059265,-0.0008219480514526367,-0.3716477155685425,-2.141334295272827,-0.3714703321456909,-0.033022552728652954,-0.9278573989868164,0.6076370477676392,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.48":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.10201659798622131,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.215569019317627,0,0,0,1],[-0.6529766917228699,-0.01801660656929016,0.7571640014648438,0.017412230372428894,0.7271213531494141,0.2648346722126007,0.6333698034286499,-0.47373664379119873,-0.21193435788154602,0.9641255140304565,-0.15983060002326965,3.263701915740967,0,0,0,1],[-0.9912880659103394,-0.04682014510035515,0.12311065196990967,-0.012818442657589912,0.1034693717956543,0.30155107378959656,0.9478192329406738,-0.1690850555896759,-0.08150115609169006,0.9522998929023743,-0.29407942295074463,4.392059803009033,0,0,0,1],[-0.9860882759094238,-0.0188854169100523,0.16514715552330017,-0.023149963468313217,0.13346093893051147,0.5023003816604614,0.8543317317962646,-0.10254358500242233,-0.09908787161111832,0.8644869923591614,-0.4927919805049896,4.602198123931885,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.6248361468315125,0.8991184830665588,0.42850393056869507,0.08928187191486359,0.46425604820251465,0.3373994827270508,-0.8084407448768616,0.4822711944580078,3.9149413108825684,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.9151036739349365,0.8744868636131287,0.47395145893096924,0.10316704213619232,0.7725144624710083,0.4623258411884308,-0.8787847757339478,0.11828920245170593,3.3333628177642822,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.9688341021537781,0.8962684273719788,0.426314115524292,0.12231069803237915,1.2293338775634766,0.41867920756340027,-0.9042595624923706,0.08380115032196045,2.4863433837890625,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.6374597549438477,-0.7288955450057983,-0.4118371605873108,-0.5469017624855042,-0.937980592250824,-0.3549807667732239,-0.4557151198387146,0.8162792921066284,4.320323944091797,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.1645429134368896,-0.6268794536590576,-0.3804367184638977,-0.6799192428588867,-1.2130614519119263,-0.4074828028678894,-0.5837170481681824,0.7023044228553772,4.01593542098999,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.8606678247451782,-0.6034483909606934,-0.3935551047325134,-0.6935160160064697,-1.5822594165802002,-0.3683778941631317,-0.6337592005729675,0.680181086063385,3.449462413787842,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.0007941946387290955,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.246309995651245,0,0,0,1],[0.2825058698654175,0.10659533739089966,-0.9533250331878662,0.1341370940208435,0.754161536693573,0.5894821882247925,0.28939878940582275,-0.11107714474201202,0.5928164720535278,-0.8007174134254456,0.08614183962345123,2.8472955226898193,0,0,0,1],[0.18885985016822815,-0.3999747633934021,-0.8968572020530701,0.24265077710151672,0.9336194396018982,0.35627681016921997,0.03771108388900757,0.4890136122703552,0.30444589257240295,-0.844444990158081,0.4407101273536682,2.032167911529541,0,0,0,1],[-0.02592148631811142,0.9911720752716064,-0.13002490997314453,-0.39627328515052795,0.9279985427856445,0.07221914827823639,0.36551833152770996,1.0581340789794922,0.3716818690299988,-0.11118772625923157,-0.9216775894165039,0.6832423210144043,0,0,0,1],[-0.2238367795944214,0.03676943480968475,-0.9739331603050232,-0.01224932074546814,0.8283714056015015,-0.519331693649292,-0.2099892497062683,-1.0233643054962158,-0.5135153532028198,-0.8537814021110535,0.0857866108417511,2.8306806087493896,0,0,0,1],[-0.12761732935905457,-0.3795466125011444,-0.916329026222229,0.025181844830513,0.9291731715202332,-0.36890411376953125,0.023395270109176636,-1.5520422458648682,-0.3469170928001404,-0.8484423160552979,0.3997427523136139,1.9615339040756226,0,0,0,1],[-0.011311322450637817,0.9994722008705139,-0.030465751886367798,-0.5811104774475098,0.9283736348152161,-0.0008219778537750244,-0.37164777517318726,-2.141334295272827,-0.3714764416217804,-0.03248724341392517,-0.9278738498687744,0.6062220335006714,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.52":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.11017870903015137,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.203779458999634,0,0,0,1],[-0.6529766321182251,-0.01801660656929016,0.7571640014648438,0.025574341416358948,0.726224958896637,0.26888108253479004,0.6326929330825806,-0.4737366735935211,-0.2149859517812729,0.9630048871040344,-0.1624889224767685,3.2519123554229736,0,0,0,1],[-0.9912880659103394,-0.04682014510035515,0.12311068177223206,-0.004656331613659859,0.10312628746032715,0.30554744601249695,0.9465758800506592,-0.16434931755065918,-0.08193495869636536,0.9510250687599182,-0.29805707931518555,4.37898063659668,0,0,0,1],[-0.9860882759094238,-0.018885411322116852,0.16514718532562256,-0.014987853355705738,0.13304373621940613,0.505926251411438,0.8522547483444214,-0.09692598879337311,-0.09964746236801147,0.8623698353767395,-0.49637526273727417,4.588837623596191,0,0,0,1],[0.2788345217704773,-0.4034951329231262,-0.8714606761932373,-0.61667400598526,0.9005273580551147,0.4251052141189575,0.09130644053220749,0.46698257327079773,0.3336207866668701,-0.8102329969406128,0.48189201951026917,3.89920711517334,0,0,0,1],[0.14672532677650452,-0.055745527148246765,-0.9876055717468262,-0.9069415330886841,0.8764206767082214,0.4702569246292114,0.10366299748420715,0.7727959752082825,0.45864951610565186,-0.880767285823822,0.11785498261451721,3.3163394927978516,0,0,0,1],[0.14632658660411835,-0.023899365216493607,-0.9889479875564575,-0.9606719613075256,0.8980188369750977,0.4225129783153534,0.12266165018081665,1.2260544300079346,0.41491180658340454,-0.9060417413711548,0.08328685164451599,2.467409372329712,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.1859743297100067,0.6456217765808105,-0.7303797006607056,-0.4137473404407501,-0.5434689521789551,-0.9335393309593201,-0.35191676020622253,-0.4539816975593567,0.8185687065124512,4.310474872589111,0,0,0,1],[-0.6640625,0.7173157930374146,0.2108987271785736,1.1727049350738525,-0.6285849809646606,-0.3828847110271454,-0.6769638061523438,-1.2098960876464844,-0.404846727848053,-0.5821143984794617,0.7051534652709961,4.007244110107422,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746395111083984,1.8688298463821411,-0.6049898862838745,-0.3962131142616272,-0.690653383731842,-1.5814696550369263,-0.36584052443504333,-0.6321010589599609,0.6830874085426331,3.442326545715332,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.00895630568265915,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.234520435333252,0,0,0,1],[0.27791261672973633,0.112784743309021,-0.9539627432823181,0.14229920506477356,0.7541614770889282,0.5894820690155029,0.289398729801178,-0.11107717454433441,0.5949834585189819,-0.7998690605163574,0.07876645028591156,2.835505962371826,0,0,0,1],[0.19254203140735626,-0.41019725799560547,-0.8914406895637512,0.25711366534233093,0.9336193203926086,0.3562767505645752,0.03771109879016876,0.4890134334564209,0.3021305799484253,-0.8395267724990845,0.4515659511089325,2.021242141723633,0,0,0,1],[-0.026237912476062775,0.9912663102149963,-0.12924042344093323,-0.39813992381095886,0.9279983043670654,0.07221922278404236,0.36551833152770996,1.058133840560913,0.37165969610214233,-0.1103442907333374,-0.9217878580093384,0.6801729202270508,0,0,0,1],[-0.21688401699066162,0.048291996121406555,-0.9750025272369385,-0.004087209701538086,0.8283714056015015,-0.519331693649292,-0.20998933911323547,-1.0233643054962158,-0.5164902806282043,-0.8532072305679321,0.0726308599114418,2.8188910484313965,0,0,0,1],[-0.13271696865558624,-0.39201128482818604,-0.9103373289108276,0.04507388547062874,0.9291731715202332,-0.36890411376953125,0.023395180702209473,-1.5520422458648682,-0.3449982702732086,-0.8427557349205017,0.4132058620452881,1.9503288269042969,0,0,0,1],[-0.010972671210765839,0.9995012283325195,-0.029620051383972168,-0.5811296701431274,0.9283736348152161,-0.0008219480514526367,-0.37164774537086487,-2.141334295272827,-0.3714865744113922,-0.031576305627822876,-0.9279011487960815,0.6041007041931152,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.56":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.11941167712211609,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749290943145752,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.1904430389404297,0,0,0,1],[-0.6529766917228699,-0.01801660656929016,0.7571640014648438,0.03480730950832367,0.7251954674720764,0.2734529376029968,0.631913959980011,-0.47373661398887634,-0.21843355894088745,0.9617166519165039,-0.16549281775951385,3.2385759353637695,0,0,0,1],[-0.9912880659103394,-0.04682014510035515,0.12311065196990967,0.004576636478304863,0.10273584723472595,0.3100620210170746,0.945149302482605,-0.15899845957756042,-0.08242395520210266,0.9495627880096436,-0.3025505542755127,4.364161968231201,0,0,0,1],[-0.9860882759094238,-0.0188854169100523,0.16514715552330017,-0.005754885263741016,0.13256880640983582,0.5100173950195312,0.8498870730400085,-0.09057892858982086,-0.10027839243412018,0.8599566221237183,-0.5004184246063232,4.573696136474609,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.6074410676956177,0.9021021127700806,0.4212513267993927,0.09359465539455414,0.47004714608192444,0.3293389081954956,-0.8122434616088867,0.4814528226852417,3.881394386291504,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.897708535194397,0.8785896301269531,0.46606746315956116,0.10422169417142868,0.7730880975723267,0.45448076725006104,-0.8829914927482605,0.11736118793487549,3.2970802783966064,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.9514389634132385,0.8999796509742737,0.41820400953292847,0.12305592000484467,1.2223085165023804,0.4106408953666687,-0.9080389142036438,0.08270318061113358,2.4460062980651855,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.6548548340797424,-0.7320433855056763,-0.4158993363380432,-0.539574146270752,-0.9285053014755249,-0.3484429717063904,-0.45201098918914795,0.8211413621902466,4.299310684204102,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.1819379329681396,-0.6305012702941895,-0.3856457769870758,-0.673606276512146,-1.2062994241714478,-0.4018559753894806,-0.580288827419281,0.7083616256713867,3.997396230697632,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.8780628442764282,-0.6067211627960205,-0.39921149611473083,-0.6874005198478699,-1.5805524587631226,-0.3629623055458069,-0.6302116513252258,0.6863608360290527,3.4342503547668457,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.01818927377462387,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678535938263,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.221184015274048,0,0,0,1],[0.2726960778236389,0.1197790652513504,-0.9546154141426086,0.15153217315673828,0.7541614770889282,0.5894821882247925,0.289398729801178,-0.11107711493968964,0.5973923802375793,-0.7988516092300415,0.07041649520397186,2.822169542312622,0,0,0,1],[0.19667932391166687,-0.42170533537864685,-0.8851456046104431,0.2734668254852295,0.9336194396018982,0.35627683997154236,0.03771105408668518,0.4890136122703552,0.2994537651538849,-0.8338056206703186,0.4637840986251831,2.008941411972046,0,0,0,1],[-0.026590175926685333,0.991370677947998,-0.1283664107322693,-0.40016990900039673,0.9279984831809998,0.07221914827823639,0.3655184209346771,1.0581340789794922,0.3716345429420471,-0.10940435528755188,-0.9219101667404175,0.677011251449585,0,0,0,1],[-0.2089678943157196,0.06132146716117859,-0.9759984016418457,0.005145758390426636,0.8283714652061462,-0.5193317532539368,-0.2099892497062683,-1.0233643054962158,-0.5197435021400452,-0.8523698449134827,0.05772655829787254,2.8055546283721924,0,0,0,1],[-0.13847018778324127,-0.4060555696487427,-0.9032970666885376,0.06757082045078278,0.9291731119155884,-0.368904173374176,0.02339528501033783,-1.5520423650741577,-0.34272968769073486,-0.8360795378684998,0.4283778667449951,1.9378448724746704,0,0,0,1],[-0.010606572031974792,0.9995318651199341,-0.02870577573776245,-0.5810672044754028,0.9283734560012817,-0.0008221268653869629,-0.37164783477783203,-2.1413345336914062,-0.37149733304977417,-0.03059139847755432,-0.9279299974441528,0.6022814512252808,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.6":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.1289861500263214,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.1766130924224854,0,0,0,1],[-0.6529766321182251,-0.01801660656929016,0.7571640610694885,0.04438178241252899,0.7241106033325195,0.27818751335144043,0.6310908794403076,-0.47373664379119873,-0.22200356423854828,0.9603577852249146,-0.16860388219356537,3.224745988845825,0,0,0,1],[-0.9912880659103394,-0.04682014510035515,0.12311074137687683,0.014151109382510185,0.10232868790626526,0.3147363066673279,0.9436472654342651,-0.15345710515975952,-0.0829290896654129,0.9480237364768982,-0.30720311403274536,4.348767280578613,0,0,0,1],[-0.9860882759094238,-0.018885398283600807,0.16514723002910614,0.003819587640464306,0.1320733278989792,0.5142477750778198,0.8474113941192627,-0.08400612324476242,-0.10093027353286743,0.8574336171150208,-0.5045992732048035,4.557961940765381,0,0,0,1],[0.2788345515727997,-0.40349510312080383,-0.8714606761932373,-0.5978665351867676,0.9037137031555176,0.4172447621822357,0.09596549719572067,0.4732024669647217,0.32489073276519775,-0.8143088817596436,0.4809858500957489,3.8629069328308105,0,0,0,1],[0.1467253565788269,-0.055745527148246765,-0.9876055717468262,-0.8881340026855469,0.8808180093765259,0.46171173453330994,0.10479871183633804,0.7733612060546875,0.4501469135284424,-0.8852767944335938,0.1168462336063385,3.277107000350952,0,0,0,1],[0.14632661640644073,-0.023899372667074203,-0.9889479875564575,-0.9418644309043884,0.9019918441772461,0.41372546553611755,0.12346196919679642,1.2183833122253418,0.4062022268772125,-0.910088062286377,0.08209586143493652,2.423830270767212,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.18597427010536194,0.664429247379303,-0.7337510585784912,-0.41812121868133545,-0.5355222821235657,-0.9232740998268127,-0.3448323905467987,-0.4499565064907074,0.8237895369529724,4.287708282470703,0,0,0,1],[-0.6640625,0.7173157930374146,0.21089866757392883,1.1915123462677002,-0.6324732303619385,-0.3884999454021454,-0.670108437538147,-1.202552318572998,-0.39874500036239624,-0.5783818364143372,0.7116714715957642,3.987166166305542,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746389150619507,1.8876372575759888,-0.6085017919540405,-0.40231144428253174,-0.6840108633041382,-1.5795753002166748,-0.35996896028518677,-0.6282371878623962,0.689738929271698,3.425870895385742,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.027763746678829193,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.2073540687561035,0,0,0,1],[0.26726382970809937,0.12702327966690063,-0.9552150964736938,0.1611066460609436,0.7541614174842834,0.5894820690155029,0.289398729801178,-0.11107714474201202,0.5998422503471375,-0.7977318167686462,0.06175095960497856,2.8083395957946777,0,0,0,1],[0.20093557238578796,-0.43356937170028687,-0.8784322738647461,0.29041588306427,0.9336193799972534,0.3562767505645752,0.03771109879016876,0.4890134930610657,0.29661449790000916,-0.8276985287666321,0.4763769507408142,1.9962514638900757,0,0,0,1],[-0.026950985193252563,0.99147629737854,-0.12747138738632202,-0.4021725654602051,0.927998423576355,0.0722191333770752,0.36551833152770996,1.058133840560913,0.37160855531692505,-0.10844188928604126,-0.9220343232154846,0.6740767955780029,0,0,0,1],[-0.20070448517799377,0.07482273876667023,-0.9767906069755554,0.014720231294631958,0.8283714652061462,-0.519331693649292,-0.20998933911323547,-1.0233643054962158,-0.5229901075363159,-0.8512908816337585,0.04225100949406624,2.791724681854248,0,0,0,1],[-0.14441177248954773,-0.4205392003059387,-0.8957079648971558,0.09088953584432602,0.9291731715202332,-0.368904173374176,0.02339513599872589,-1.5520422458648682,-0.34026890993118286,-0.8288887739181519,0.44402745366096497,1.925113320350647,0,0,0,1],[-0.010241620242595673,0.9995614886283875,-0.02779373526573181,-0.5808848738670349,0.9283735752105713,-0.000821918249130249,-0.37164774537086487,-2.141334295272827,-0.37150752544403076,-0.02960902452468872,-0.9279575347900391,0.6010364294052124,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.64":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.1385517716407776,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.1627960205078125,0,0,0,1],[-0.6529766321182251,-0.01801660656929016,0.7571640014648438,0.05394740402698517,0.7230091691017151,0.2829110622406006,0.6302533149719238,-0.47373664379119873,-0.22556498646736145,0.9589768648147583,-0.1717081218957901,3.2109289169311523,0,0,0,1],[-0.9912880659103394,-0.04682014510035515,0.12311068177223206,0.023716730996966362,0.10191929340362549,0.3193986415863037,0.9421237707138062,-0.14792850613594055,-0.08343175053596497,0.9464631080627441,-0.3118440806865692,4.33336067199707,0,0,0,1],[-0.9860882759094238,-0.018885411322116852,0.16514718532562256,0.013385209254920483,0.13157497346401215,0.5184618234634399,0.8449174761772156,-0.07744871824979782,-0.10157912224531174,0.8548920154571533,-0.5087642073631287,4.542211055755615,0,0,0,1],[0.2788345217704773,-0.4034951329231262,-0.8714606761932373,-0.5883009433746338,0.9053018689155579,0.41323167085647583,0.09833180159330368,0.4763321876525879,0.3204386234283447,-0.8163526058197021,0.48050767183303833,3.844421148300171,0,0,0,1],[0.14672532677650452,-0.055745527148246765,-0.9876055717468262,-0.8785684108734131,0.8830230236053467,0.4573487937450409,0.1053726077079773,0.7736039757728577,0.44580596685409546,-0.887538492679596,0.11632904410362244,3.2571511268615723,0,0,0,1],[0.14632658660411835,-0.023899365216493607,-0.9889479875564575,-0.9322988390922546,0.9039803147315979,0.4092409610748291,0.12386459857225418,1.2144207954406738,0.4017576277256012,-0.9121133089065552,0.08148723840713501,2.4016945362091064,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.1859743297100067,0.6739948391914368,-0.7354394197463989,-0.42033082246780396,-0.5314610600471497,-0.9180368185043335,-0.3412165641784668,-0.44789308309555054,0.8264154195785522,4.2760910987854,0,0,0,1],[-0.6640625,0.7173157930374146,0.2108987271785736,1.201077938079834,-0.6344281435012817,-0.39134204387664795,-0.6665974855422974,-1.1987909078598022,-0.395626962184906,-0.5764626264572144,0.7149611711502075,3.9769272804260254,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746395111083984,1.8972028493881226,-0.6102661490440369,-0.40539875626564026,-0.6806077361106873,-1.5785720348358154,-0.3569693863391876,-0.6262493133544922,0.6930973529815674,3.417494535446167,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.03732936829328537,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1935369968414307,0,0,0,1],[0.26181408762931824,0.1342509388923645,-0.9557356834411621,0.17067226767539978,0.7541614770889282,0.5894820690155029,0.2893986105918884,-0.11107714474201202,0.6022408604621887,-0.7965474128723145,0.053087666630744934,2.794522523880005,0,0,0,1],[0.20515041053295135,-0.44534382224082947,-0.8715404868125916,0.30733925104141235,0.9336193203926086,0.3562767505645752,0.03771102428436279,0.4890134930610657,0.29371511936187744,-0.8214231729507446,0.48887157440185547,1.9836400747299194,0,0,0,1],[-0.02730831503868103,0.9915800094604492,-0.12658488750457764,-0.4040578603744507,0.9279981851577759,0.07221932709217072,0.36551833152770996,1.058133840560913,0.3715824484825134,-0.10748857259750366,-0.9221563339233398,0.6714897155761719,0,0,0,1],[-0.19239607453346252,0.0882960706949234,-0.9773373603820801,0.024285852909088135,0.828371524810791,-0.519331693649292,-0.20998921990394592,-1.0233643054962158,-0.5261032581329346,-0.8499990701675415,0.026775293052196503,2.777907609939575,0,0,0,1],[-0.150315061211586,-0.4349096119403839,-0.8878400325775146,0.11417096853256226,0.9291732907295227,-0.3689040541648865,0.023395299911499023,-1.5520422458648682,-0.3377026319503784,-0.8214399218559265,0.45955774188041687,1.9126112461090088,0,0,0,1],[-0.009886711835861206,0.9995894432067871,-0.026907503604888916,-0.5805588364601135,0.9283738136291504,-0.0008220076560974121,-0.3716476857662201,-2.141334056854248,-0.371517151594162,-0.028654396533966064,-0.9279837608337402,0.6004332304000854,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.68":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.147893488407135,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.1493024826049805,0,0,0,1],[-0.6529766917228699,-0.018016591668128967,0.7571640014648438,0.06328912079334259,0.7219165563583374,0.2875175476074219,0.6294206976890564,-0.47373664379119873,-0.2290378212928772,0.9576058983802795,-0.17473572492599487,3.1974353790283203,0,0,0,1],[-0.9912880659103394,-0.046820130199193954,0.12311065196990967,0.03305846452713013,0.10151702165603638,0.3239445984363556,0.9406139850616455,-0.14253681898117065,-0.0839206725358963,0.9449169039726257,-0.3163692057132721,4.3182878494262695,0,0,0,1],[-0.9860882759094238,-0.018885405734181404,0.16514714062213898,0.02272694557905197,0.1310851275920868,0.5225653648376465,0.8424622416496277,-0.0710538998246193,-0.1022103875875473,0.8523899912834167,-0.512819766998291,4.526796817779541,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.5789592862129211,0.906831681728363,0.4093027412891388,0.10064040124416351,0.47936636209487915,0.31608328223228455,-0.8183296322822571,0.48002949357032776,3.8263535499572754,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.8692268133163452,0.8851556181907654,0.45307716727256775,0.10593055188655853,0.7738117575645447,0.44155624508857727,-0.8897267580032349,0.11582118272781372,3.237661361694336,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.9229572415351868,0.9059008955955505,0.4048517942428589,0.12425483763217926,1.2105114459991455,0.3974076509475708,-0.9140700101852417,0.08089089393615723,2.3800954818725586,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.683336615562439,-0.7370710372924805,-0.42247897386550903,-0.5274824500083923,-0.9129115343093872,-0.3376774787902832,-0.4458674192428589,0.8289605379104614,4.264720916748047,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.2104196548461914,-0.636322557926178,-0.39410853385925293,-0.6631529927253723,-1.1951004266738892,-0.392572820186615,-0.574574887752533,0.7181571125984192,3.966909885406494,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.90654456615448,-0.6119750142097473,-0.4084044098854065,-0.6772681474685669,-1.5775662660598755,-0.35403183102607727,-0.6242935657501221,0.6963608860969543,3.409308910369873,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.04667108505964279,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1800434589385986,0,0,0,1],[0.2564709782600403,0.1412990689277649,-0.9561682939529419,0.1800139844417572,0.7541614770889282,0.5894821286201477,0.2893986105918884,-0.11107714474201202,0.6045356392860413,-0.7953273057937622,0.04462258145213127,2.781028985977173,0,0,0,1],[0.20922794938087463,-0.4567600190639496,-0.8646355271339417,0.3238559365272522,0.9336193799972534,0.3562767505645752,0.03771096467971802,0.48901355266571045,0.2908245921134949,-0.815130352973938,0.5009827017784119,1.971388578414917,0,0,0,1],[-0.027655698359012604,0.9916800260543823,-0.1257229447364807,-0.4057775139808655,0.9279983043670654,0.07221932709217072,0.36551839113235474,1.058133840560913,0.3715569078922272,-0.10656175017356873,-0.9222743511199951,0.6692904233932495,0,0,0,1],[-0.1842346489429474,0.10143429040908813,-0.977634608745575,0.03362756967544556,0.8283714652061462,-0.519331693649292,-0.2099892497062683,-1.0233643054962158,-0.5290164947509766,-0.8485314846038818,0.011653468012809753,2.764414072036743,0,0,0,1],[-0.1560417264699936,-0.4488293528556824,-0.8798887133598328,0.1368873417377472,0.9291731715202332,-0.36890408396720886,0.023395270109176636,-1.5520422458648682,-0.3350949287414551,-0.8139179348945618,0.47460418939590454,1.9006117582321167,0,0,0,1],[-0.009545043110847473,0.9996153712272644,-0.02605414390563965,-0.5800780057907104,0.9283736348152161,-0.0008219778537750244,-0.3716476857662201,-2.141334056854248,-0.37152594327926636,-0.027735143899917603,-0.9280083179473877,0.6004494428634644,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.72":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.1568547785282135,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.1363582611083984,0,0,0,1],[-0.6529768109321594,-0.018016591668128967,0.7571640014648438,0.07225041091442108,0.7208526730537415,0.2919301986694336,0.6286084055900574,-0.47373664379119873,-0.23236431181430817,0.9562698602676392,-0.1776363104581833,3.1844911575317383,0,0,0,1],[-0.9912881851196289,-0.04682013764977455,0.1231105625629425,0.04201975464820862,0.10112887620925903,0.32829833030700684,0.9391450881958008,-0.13737186789512634,-0.0843878984451294,0.9434130191802979,-0.32070326805114746,4.303804397583008,0,0,0,1],[-0.9860883951187134,-0.018885433673858643,0.165147066116333,0.03168823570013046,0.1306123286485672,0.5264902710914612,0.8400884866714478,-0.06492823362350464,-0.10281376540660858,0.8499712944030762,-0.5166991353034973,4.51198148727417,0,0,0,1],[0.27883443236351013,-0.40349525213241577,-0.8714607954025269,-0.5699980854988098,0.9082797169685364,0.4055248498916626,0.10285275429487228,0.4822562336921692,0.31189826130867004,-0.8202083706855774,0.47956031560897827,3.8090076446533203,0,0,0,1],[0.14672522246837616,-0.05574561655521393,-0.9876057505607605,-0.8602656722068787,0.8871824741363525,0.44896969199180603,0.10646336525678635,0.7739838361740112,0.4374698996543884,-0.8918067216873169,0.1153315007686615,3.218963861465454,0,0,0,1],[0.14632648229599,-0.02389945089817047,-0.9889481663703918,-0.913996160030365,0.9077239632606506,0.4006325602531433,0.12462639808654785,1.2067245244979858,0.39322608709335327,-0.9159273505210876,0.08031708002090454,2.359393358230591,0,0,0,1],[-0.5854052305221558,0.7891222238540649,0.18597441911697388,0.6922980546951294,-0.7386205196380615,-0.42453038692474365,-0.5236544013023376,-0.9079853296279907,-0.3342750072479248,-0.443914532661438,0.8313840627670288,4.253790378570557,0,0,0,1],[-0.6640625,0.7173159122467041,0.21089884638786316,1.2193812131881714,-0.6381262540817261,-0.3967537581920624,-0.6598345041275024,-1.191544532775879,-0.38963431119918823,-0.5727514028549194,0.7212074398994446,3.9572839736938477,0,0,0,1],[-0.7072104811668396,0.6659305691719055,0.2374640703201294,1.9155062437057495,-0.6136012673377991,-0.41127875447273254,-0.6740500330924988,-1.5765774250030518,-0.3512060046195984,-0.6224035620689392,0.6994765400886536,3.4014527797698975,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.05563237518072128,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1670992374420166,0,0,0,1],[0.2513265311717987,0.14804983139038086,-0.9565129280090332,0.1889752745628357,0.754161536693573,0.5894819498062134,0.28939852118492126,-0.11107714474201202,0.6066923141479492,-0.794098436832428,0.03649882972240448,2.768084764480591,0,0,0,1],[0.213101327419281,-0.46762800216674805,-0.8578534722328186,0.3396894931793213,0.9336193203926086,0.35627657175064087,0.03771103918552399,0.4890133738517761,0.2879982888698578,-0.8089446425437927,0.512509286403656,1.9596953392028809,0,0,0,1],[-0.027988776564598083,0.9917752742767334,-0.12489587068557739,-0.407304584980011,0.9279982447624207,0.07221914827823639,0.3655182421207428,1.0581334829330444,0.37153178453445435,-0.10567259788513184,-0.9223867654800415,0.6674783229827881,0,0,0,1],[-0.176364004611969,0.11401495337486267,-0.977699875831604,0.04258885979652405,0.8283714652061462,-0.519331693649292,-0.2099892795085907,-1.0233643054962158,-0.5316921472549438,-0.8469328880310059,-0.0028554610908031464,2.751469850540161,0,0,0,1],[-0.16149301826953888,-0.4620606303215027,-0.8720210790634155,0.15865571796894073,0.9291731715202332,-0.36890414357185364,0.02339521050453186,-1.5520422458648682,-0.3325020372867584,-0.8064799904823303,0.48890942335128784,1.8892948627471924,0,0,0,1],[-0.009217537939548492,0.9996393918991089,-0.025235742330551147,-0.579445481300354,0.9283736944198608,-0.000821918249130249,-0.3716477155685425,-2.141334295272827,-0.37153416872024536,-0.026853829622268677,-0.928030788898468,0.6010140180587769,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.76":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.1653059422969818,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.1241512298583984,0,0,0,1],[-0.6529766917228699,-0.018016621470451355,0.7571640014648438,0.08070157468318939,0.7198354005813599,0.29608583450317383,0.627829909324646,-0.4737366735935211,-0.23549680411815643,0.9549914002418518,-0.18036815524101257,3.1722841262817383,0,0,0,1],[-0.9912880659103394,-0.046820152550935745,0.12311065196990967,0.05047088488936424,0.10076096653938293,0.3323976993560791,0.9377416372299194,-0.13250765204429626,-0.08482687175273895,0.9419764876365662,-0.32478415966033936,4.29012393951416,0,0,0,1],[-0.9860882759094238,-0.018885424360632896,0.16514715552330017,0.04013936221599579,0.1301640123128891,0.5301814079284668,0.8378337025642395,-0.05915943533182144,-0.10338077694177628,0.847673773765564,-0.5203474164009094,4.497984409332275,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.5615468621253967,0.909627377986908,0.4019542932510376,0.10493721812963486,0.48496297001838684,0.3079456090927124,-0.8219640254974365,0.4791085124015808,3.792637348175049,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.8518143892288208,0.8890764117240906,0.44508734345436096,0.10696393251419067,0.7741219997406006,0.4336077570915222,-0.8937504291534424,0.11486741900444031,3.2013304233551025,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.9055448174476624,0.9094253182411194,0.39664581418037415,0.12497451901435852,1.2031207084655762,0.38927504420280457,-0.9176605939865112,0.07977434992790222,2.339886426925659,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.7007490992546082,-0.7400671243667603,-0.42645686864852905,-0.5200340747833252,-0.9033312797546387,-0.3310600519180298,-0.4420642554759979,0.833653450012207,4.243461608886719,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.2278321981430054,-0.6398144960403442,-0.39924076199531555,-0.6566919684410095,-1.188177227973938,-0.3868558704853058,-0.5710207223892212,0.7240700721740723,3.948190927505493,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.923957109451294,-0.6151226162910461,-0.413981556892395,-0.6710018515586853,-1.575623631477356,-0.34853455424308777,-0.6206092238426208,0.7024011611938477,3.3940391540527344,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.0640835389494896,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1548922061920166,0,0,0,1],[0.24645856022834778,0.15440626442432404,-0.9567745923995972,0.197426438331604,0.7541614770889282,0.5894820690155029,0.2893986701965332,-0.11107717454433441,0.6086861491203308,-0.7928869128227234,0.028835508972406387,2.755877733230591,0,0,0,1],[0.21671807765960693,-0.477797269821167,-0.851318895816803,0.35461145639419556,0.9336193203926086,0.3562767505645752,0.03771108388900757,0.4890134334564209,0.2852867841720581,-0.8029800653457642,0.5232918858528137,1.9487216472625732,0,0,0,1],[-0.02830396592617035,0.9918645024299622,-0.12411355972290039,-0.40862709283828735,0.9279982447624207,0.07221932709217072,0.36551839113235474,1.058133840560913,0.37150806188583374,-0.10483115911483765,-0.9224921464920044,0.6660325527191162,0,0,0,1],[-0.16890662908554077,0.12585517764091492,-0.9775642156600952,0.05104002356529236,0.828371524810791,-0.519331693649292,-0.20998930931091309,-1.0233643054962158,-0.53410804271698,-0.8452544212341309,-0.016536422073841095,2.739262819290161,0,0,0,1],[-0.1665906459093094,-0.47441649436950684,-0.8643941283226013,0.1791601926088333,0.9291732311248779,-0.3689042031764984,0.023395195603370667,-1.5520422458648682,-0.3299775719642639,-0.7992740273475647,0.5022705793380737,1.8787965774536133,0,0,0,1],[-0.008905008435249329,0.9996614456176758,-0.024455398321151733,-0.5786784291267395,0.9283736348152161,-0.0008220076560974121,-0.37164774537086487,-2.141334295272827,-0.3715417981147766,-0.02601301670074463,-0.9280515909194946,0.6020267009735107,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.8":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.17312690615653992,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749290943145752,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.112854242324829,0,0,0,1],[-0.6529766321182251,-0.018016576766967773,0.7571640610694885,0.0885225385427475,0.7188819050788879,0.29992660880088806,0.6270989775657654,-0.47373661398887634,-0.2383917272090912,0.953792154788971,-0.1828932762145996,3.160987138748169,0,0,0,1],[-0.9912880659103394,-0.04682011529803276,0.12311074137687683,0.058291900902986526,0.10041892528533936,0.33618584275245667,0.9364269971847534,-0.12801185250282288,-0.08523169159889221,0.9406313300132751,-0.32855525612831116,4.277444839477539,0,0,0,1],[-0.9860882759094238,-0.018885372206568718,0.16514721512794495,0.04796038568019867,0.12974707782268524,0.5335884690284729,0.8357328772544861,-0.05382773280143738,-0.10390377044677734,0.8455333709716797,-0.5237149000167847,4.485008239746094,0,0,0,1],[0.27883458137512207,-0.40349510312080383,-0.8714606761932373,-0.5537257790565491,0.9108592867851257,0.39864325523376465,0.10686447471380234,0.4874517023563385,0.3042824864387512,-0.823574960231781,0.47868236899375916,3.777477264404297,0,0,0,1],[0.1467253863811493,-0.05574549734592438,-0.9876055717468262,-0.8439932465553284,0.8908141851425171,0.44148701429367065,0.10742537677288055,0.7742288112640381,0.4300263524055481,-0.8955344557762146,0.114436075091362,3.185011386871338,0,0,0,1],[0.14632664620876312,-0.023899342864751816,-0.9889479875564575,-0.8977236747741699,0.9109845161437988,0.3929496109485626,0.12529459595680237,1.1997573375701904,0.3856121003627777,-0.9192494750022888,0.07927080988883972,2.321847915649414,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.18597429990768433,0.7085700631141663,-0.7413934469223022,-0.4282323718070984,-0.5166749954223633,-0.8990170955657959,-0.32807910442352295,-0.44034451246261597,0.8357394337654114,4.233884811401367,0,0,0,1],[-0.6640625,0.7173157930374146,0.21089869737625122,1.2356531620025635,-0.641366183757782,-0.4015354514122009,-0.6537728309631348,-1.1850489377975464,-0.38427793979644775,-0.5694094896316528,0.726706862449646,3.939762830734253,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746392130851746,1.931778073310852,-0.616520345211029,-0.41647565364837646,-0.6681697964668274,-1.5747222900390625,-0.3460563123226166,-0.6189383268356323,0.7050957679748535,3.3871748447418213,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.0719045028090477,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678535938263,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1435952186584473,0,0,0,1],[0.2419397383928299,0.16027957201004028,-0.956961989402771,0.2052474021911621,0.7541614770889282,0.5894820690155029,0.2893986999988556,-0.11107711493968964,0.6104964017868042,-0.7917205691337585,0.02174229919910431,2.7445807456970215,0,0,0,1],[0.22003231942653656,-0.4871343970298767,-0.8451547026634216,0.36841142177581787,0.9336193203926086,0.3562767505645752,0.03771115839481354,0.4890134930610657,0.28273850679397583,-0.7973502278327942,0.533190131187439,1.9386119842529297,0,0,0,1],[-0.028597429394721985,0.9919470548629761,-0.12338399887084961,-0.4097423553466797,0.9279983639717102,0.07221898436546326,0.36551833152770996,1.058133840560913,0.3714853823184967,-0.104047030210495,-0.9225902557373047,0.6649160385131836,0,0,0,1],[-0.16197717189788818,0.13678857684135437,-0.9772680997848511,0.058860987424850464,0.8283714652061462,-0.5193316340446472,-0.20998930931091309,-1.0233643054962158,-0.536250114440918,-0.8435541391372681,-0.02919204719364643,2.727965831756592,0,0,0,1],[-0.17126654088497162,-0.48573511838912964,-0.8571639060974121,0.19811132550239563,0.9291731715202332,-0.36890414357185364,0.023395150899887085,-1.5520422458648682,-0.32757502794265747,-0.7924465537071228,0.5145125389099121,1.8692305088043213,0,0,0,1],[-0.00860990583896637,0.9996818900108337,-0.023718059062957764,-0.5778077840805054,0.9283736348152161,-0.0008220374584197998,-0.3716476261615753,-2.141334295272827,-0.37154871225357056,-0.025218814611434937,-0.9280708432197571,0.6033668518066406,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.84":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.18019762635231018,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.1026411056518555,0,0,0,1],[-0.6529768109321594,-0.01801656186580658,0.757163941860199,0.09559325873851776,0.7180097699165344,0.30339470505714417,0.6264294981956482,-0.47373664379119873,-0.2410055696964264,0.9526945948600769,-0.18517357110977173,3.1507740020751953,0,0,0,1],[-0.9912881255149841,-0.046820107847452164,0.12311050295829773,0.06536263972520828,0.1001080870628357,0.33960580825805664,0.9352254867553711,-0.12395226955413818,-0.08559642732143402,0.9394018650054932,-0.331959992647171,4.265966415405273,0,0,0,1],[-0.9860883355140686,-0.0188854169100523,0.16514699161052704,0.055031128227710724,0.12936809659004211,0.5366611480712891,0.8338220119476318,-0.04901348799467087,-0.10437507927417755,0.8435864448547363,-0.5267519950866699,4.4732584953308105,0,0,0,1],[0.27883443236351013,-0.40349528193473816,-0.8714606761932373,-0.5466552376747131,0.9119603037834167,0.3956442177295685,0.10860519856214523,0.4896882176399231,0.3009665906429291,-0.8250198364257812,0.4782903492450714,3.763763189315796,0,0,0,1],[0.14672522246837616,-0.05574570596218109,-0.987605631351471,-0.836922824382782,0.8923728466033936,0.43822595477104187,0.1078408733010292,0.774307906627655,0.4267825186252594,-0.8971346616744995,0.1140444278717041,3.170258045196533,0,0,0,1],[0.14632648229599,-0.023899544030427933,-0.9889480471611023,-0.8906534314155579,0.9123814702033997,0.3896026313304901,0.1255820393562317,1.1966931819915771,0.3822951912879944,-0.9206729531288147,0.07881438732147217,2.3055520057678223,0,0,0,1],[-0.585405170917511,0.7891221642494202,0.18597447872161865,0.7156409621238708,-0.7425821423530579,-0.42983150482177734,-0.5136309862136841,-0.8951107859611511,-0.32537949085235596,-0.43878358602523804,0.8376136422157288,4.225212097167969,0,0,0,1],[-0.6640625,0.7173158526420593,0.21089890599250793,1.242724061012268,-0.6427600383758545,-0.40360432863235474,-0.6511245369911194,-1.1822106838226318,-0.3819418251514435,-0.5679447650909424,0.7290806174278259,3.9321327209472656,0,0,0,1],[-0.7072104811668396,0.6659305095672607,0.23746412992477417,1.9388489723205566,-0.6177752614021301,-0.4187246561050415,-0.665600061416626,-1.5738917589187622,-0.3438108265399933,-0.6174188852310181,0.7075219750404358,3.3809661865234375,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.07897522300481796,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1333820819854736,0,0,0,1],[0.23784318566322327,0.1655813604593277,-0.9570862650871277,0.21231812238693237,0.7541614770889282,0.5894820094108582,0.28939858078956604,-0.11107714474201202,0.6121038794517517,-0.7906287312507629,0.01532910019159317,2.734367609024048,0,0,0,1],[0.2230001986026764,-0.4955120086669922,-0.839487612247467,0.38087934255599976,0.9336192607879639,0.35627663135528564,0.03771102428436279,0.4890134334564209,0.2804034352302551,-0.7921712398529053,0.5420689582824707,1.9295103549957275,0,0,0,1],[-0.028865352272987366,0.9920217990875244,-0.12271910905838013,-0.4106569290161133,0.9279983043670654,0.07221904397010803,0.3655182123184204,1.058133602142334,0.3714646100997925,-0.10333213210105896,-0.9226789474487305,0.6640874147415161,0,0,0,1],[-0.15569046139717102,0.14665092527866364,-0.9768595695495605,0.06593170762062073,0.8283714652061462,-0.519331693649292,-0.2099892497062683,-1.0233643054962158,-0.5381089448928833,-0.841895580291748,-0.040626585483551025,2.717752695083618,0,0,0,1],[-0.1754559576511383,-0.49586421251296997,-0.8504907488822937,0.21522188186645508,0.9291731715202332,-0.36890414357185364,0.023395240306854248,-1.5520422458648682,-0.32535025477409363,-0.7861480712890625,0.5254697799682617,1.8607056140899658,0,0,0,1],[-0.008335523307323456,0.9997001886367798,-0.023033231496810913,-0.5768775343894958,0.9283735752105713,-0.0008221864700317383,-0.37164774537086487,-2.141334295272827,-0.37155506014823914,-0.024481087923049927,-0.9280881881713867,0.6049032211303711,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.88":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.18638965487480164,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.0936970710754395,0,0,0,1],[-0.6529766917228699,-0.018016576766967773,0.757163941860199,0.10178528726100922,0.7172383666038513,0.30642837285995483,0.6258363127708435,-0.4737366735935211,-0.24329185485839844,0.9517231583595276,-0.18716835975646973,3.1418299674987793,0,0,0,1],[-0.9912880659103394,-0.04682011529803276,0.12311059236526489,0.07155464589595795,0.09983488917350769,0.34259694814682007,0.9341631531715393,-0.12040117383003235,-0.08591493964195251,0.9383150935173035,-0.33493784070014954,4.255902290344238,0,0,0,1],[-0.9860882759094238,-0.018885403871536255,0.1651470810174942,0.06122313067317009,0.12903493642807007,0.5393460392951965,0.8321395516395569,-0.04480235278606415,-0.10478672385215759,0.8418723344802856,-0.5294057726860046,4.462954521179199,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.5404630899429321,0.9129145741462708,0.3930138349533081,0.11012852936983109,0.4916362464427948,0.2980596721172333,-0.8262760639190674,0.47794193029403687,3.751746654510498,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.8307305574417114,0.8937280774116516,0.43536558747291565,0.10820376873016357,0.77436363697052,0.4239374101161957,-0.8985262513160706,0.11370031535625458,3.1573376655578613,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.884460985660553,0.9135949015617371,0.3866674602031708,0.12583260238170624,1.1939918994903564,0.3793865740299225,-0.921909511089325,0.0784139335155487,2.291290521621704,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743893146515,0.7218328714370728,-0.743614912033081,-0.43122732639312744,-0.5109597444534302,-0.8916856646537781,-0.3230120539665222,-0.43741196393966675,0.8392457962036133,4.217604637145996,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.21089880168437958,1.2489159107208252,-0.6439734697341919,-0.4054117798805237,-0.6487983465194702,-1.1797178983688354,-0.37989214062690735,-0.5666560530662537,0.7311513423919678,3.9254415035247803,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.2374640256166458,1.9450408220291138,-0.6188673377037048,-0.4206896126270294,-0.6633424758911133,-1.573153018951416,-0.3418409526348114,-0.616081714630127,0.7096389532089233,3.37552547454834,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.08516725152730942,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1244380474090576,0,0,0,1],[0.23424752056598663,0.17021778225898743,-0.9571597576141357,0.21851015090942383,0.7541614770889282,0.5894821882247925,0.28939875960350037,-0.11107717454433441,0.6134890913963318,-0.7896435260772705,0.009712830185890198,2.725423574447632,0,0,0,1],[0.22557666897773743,-0.5027960538864136,-0.8344531655311584,0.3917912244796753,0.9336194396018982,0.3562769293785095,0.03771109879016876,0.48901355266571045,0.27833524346351624,-0.7875680327415466,0.5497874617576599,1.9215693473815918,0,0,0,1],[-0.02910199761390686,0.9920875430107117,-0.12213075160980225,-0.41138070821762085,0.9279985427856445,0.07221898436546326,0.3655185103416443,1.0581341981887817,0.3714463412761688,-0.1026996374130249,-0.9227569103240967,0.6634995937347412,0,0,0,1],[-0.1501692235469818,0.15526866912841797,-0.9763921499252319,0.07212373614311218,0.8283714652061462,-0.519331693649292,-0.20998919010162354,-1.0233643054962158,-0.5396758913993835,-0.8403489589691162,-0.05063265934586525,2.708808660507202,0,0,0,1],[-0.17909330129623413,-0.504648745059967,-0.8445448875427246,0.23018674552440643,0.9291731715202332,-0.36890411376953125,0.023395255208015442,-1.5520422458648682,-0.32336241006851196,-0.7805382013320923,0.5349738597869873,1.8533360958099365,0,0,0,1],[-0.008088082075119019,0.9997164011001587,-0.02241501212120056,-0.5759451985359192,0.9283736348152161,-0.0008220970630645752,-0.3716477155685425,-2.141334295272827,-0.37156060338020325,-0.023815274238586426,-0.9281032681465149,0.6064950227737427,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.92":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.19155868887901306,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.47492915391921997,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.086230516433716,0,0,0,1],[-0.6529766917228699,-0.018016576766967773,0.7571640610694885,0.10695432126522064,0.7165887951850891,0.3089584708213806,0.6253363490104675,-0.4737366735935211,-0.24519853293895721,0.9509047865867615,-0.1888321489095688,3.1343634128570557,0,0,0,1],[-0.9912881255149841,-0.04682011529803276,0.12311071157455444,0.07672367990016937,0.09960606694221497,0.3450912535190582,0.9332691431045532,-0.11743944883346558,-0.08618015050888062,0.9374005794525146,-0.33742111921310425,4.24749231338501,0,0,0,1],[-0.9860883355140686,-0.018885377794504166,0.16514720022678375,0.06639216840267181,0.12875580787658691,0.5415831804275513,0.8307287096977234,-0.041290223598480225,-0.10512953251600266,0.8404349088668823,-0.5316170454025269,4.454342842102051,0,0,0,1],[0.2788345217704773,-0.4034951329231262,-0.8714606761932373,-0.5352940559387207,0.9137040972709656,0.3908149302005768,0.11139922589063644,0.49325498938560486,0.29563063383102417,-0.8273184299468994,0.4776473343372345,3.7417104244232178,0,0,0,1],[0.14672532677650452,-0.055745527148246765,-0.9876055717468262,-0.8255615234375,0.8948523998260498,0.43297436833381653,0.1085057407617569,0.7744005918502808,0.4215589463710785,-0.899681031703949,0.11341211199760437,3.1465516090393066,0,0,0,1],[0.14632658660411835,-0.023899365216493607,-0.9889479875564575,-0.8792919516563416,0.914600670337677,0.38421425223350525,0.12604066729545593,1.1917240619659424,0.37695544958114624,-0.9229347109794617,0.07807895541191101,2.279391288757324,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.18597429990768433,0.7270019054412842,-0.7444714307785034,-0.43238911032676697,-0.5087260007858276,-0.8888231515884399,-0.32103317975997925,-0.43626347184181213,0.8406016826629639,4.211246013641357,0,0,0,1],[-0.6640625,0.7173157930374146,0.21089869737625122,1.2540850639343262,-0.6449816226959229,-0.40691739320755005,-0.646851658821106,-1.1776313781738281,-0.37817806005477905,-0.5655757784843445,0.7328742146492004,3.9198498725891113,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746392130851746,1.9502099752426147,-0.6197744011878967,-0.42232662439346313,-0.6614528894424438,-1.5725276470184326,-0.34019380807876587,-0.6149606704711914,0.7114006280899048,3.3709821701049805,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.09033628553152084,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.47416791319847107,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.116971492767334,0,0,0,1],[0.23123978078365326,0.17408344149589539,-0.9571958184242249,0.22367918491363525,0.7541614770889282,0.5894821286201477,0.2893986105918884,-0.11107717454433441,0.6146290302276611,-0.7888002991676331,0.005024570971727371,2.717957019805908,0,0,0,1],[0.2277105748653412,-0.5088382959365845,-0.8302000761032104,0.40089550614356995,0.9336193799972534,0.3562767207622528,0.03771097958087921,0.4890134930610657,0.27659207582473755,-0.7836777567863464,0.5561888813972473,1.9149610996246338,0,0,0,1],[-0.029301807284355164,0.9921425580978394,-0.12163513898849487,-0.41192832589149475,0.9279983043670654,0.07221949100494385,0.3655184209346771,1.058133840560913,0.3714306652545929,-0.1021665632724762,-0.9228222966194153,0.6631057262420654,0,0,0,1],[-0.14554935693740845,0.16244834661483765,-0.9759235382080078,0.07729277014732361,0.828371524810791,-0.5193316340446472,-0.2099892497062683,-1.0233643054962158,-0.5409400463104248,-0.8389906287193298,-0.05897932127118111,2.7013421058654785,0,0,0,1],[-0.18210597336292267,-0.5119175314903259,-0.8395110368728638,0.2426646649837494,0.9291732311248779,-0.36890411376953125,0.02339521050453186,-1.5520422458648682,-0.32167530059814453,-0.775790274143219,0.5428391695022583,1.847252368927002,0,0,0,1],[-0.007875390350818634,0.9997298717498779,-0.021883606910705566,-0.5750784873962402,0.9283736348152161,-0.0008220970630645752,-0.3716476559638977,-2.141334295272827,-0.37156498432159424,-0.023242831230163574,-0.9281159043312073,0.6079956293106079,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"0.96":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.1955362856388092,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.0804851055145264,0,0,0,1],[-0.6529766917228699,-0.01801660656929016,0.7571640014648438,0.11093191802501678,0.7160854339599609,0.31090378761291504,0.6249485611915588,-0.47373664379119873,-0.24666449427604675,0.9502705931663513,-0.1901114583015442,3.128618001937866,0,0,0,1],[-0.9912880659103394,-0.04682014510035515,0.12311065196990967,0.08070124685764313,0.0994294285774231,0.3470088243484497,0.9325764775276184,-0.11516225337982178,-0.08638384938240051,0.936692476272583,-0.3393303155899048,4.241015434265137,0,0,0,1],[-0.9860882759094238,-0.0188854169100523,0.16514715552330017,0.07036972790956497,0.12854033708572388,0.5433018207550049,0.8296388983726501,-0.03858988732099533,-0.10539283603429794,0.839324951171875,-0.5333159565925598,4.447709560394287,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.5313164591789246,0.9143070578575134,0.38912099599838257,0.11237648874521255,0.49449580907821655,0.29376018047332764,-0.8281164765357971,0.47741836309432983,3.73398494720459,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.8215839862823486,0.8957130908966064,0.4311322867870331,0.10873763263225555,0.7744227647781372,0.41972678899765015,-0.9005651473999023,0.11318983137607574,3.1382522583007812,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.8753144145011902,0.9153700470924377,0.3823246955871582,0.12620021402835846,1.1899707317352295,0.37508293986320496,-0.9237189888954163,0.07782086730003357,2.27023983001709,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.7309794425964355,-0.7451268434524536,-0.43328094482421875,-0.5070046186447144,-0.8866183757781982,-0.3195090591907501,-0.43537771701812744,0.8416411280632019,4.206347465515137,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.2580626010894775,-0.6457542181015015,-0.40807393193244934,-0.6453503966331482,-1.1760222911834717,-0.3768574595451355,-0.5647419095039368,0.7341965436935425,3.9155430793762207,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.9541875123977661,-0.620469331741333,-0.4235842227935791,-0.6599956154823303,-1.5720409154891968,-0.3389248549938202,-0.614095151424408,0.7127528190612793,3.3674848079681396,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.09431388229131699,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1112260818481445,0,0,0,1],[0.22892189025878906,0.17705489695072174,-0.9572079181671143,0.2276567816734314,0.7541614770889282,0.5894821882247925,0.28939878940582275,-0.11107714474201202,0.6154962778091431,-0.7881386876106262,0.001417204737663269,2.7122116088867188,0,0,0,1],[0.22934208810329437,-0.513463020324707,-0.8268969655036926,0.40789803862571716,0.9336194396018982,0.35627686977386475,0.037711143493652344,0.4890136122703552,0.27524104714393616,-0.780655562877655,0.5610879063606262,1.9098892211914062,0,0,0,1],[-0.02945655584335327,0.9921851754188538,-0.12124967575073242,-0.4123133718967438,0.9279984831809998,0.0722188949584961,0.3655184209346771,1.0581341981887817,0.37141847610473633,-0.10175231099128723,-0.9228731989860535,0.6628614664077759,0,0,0,1],[-0.14198806881904602,0.16796335577964783,-0.9755144119262695,0.08127036690711975,0.828371524810791,-0.5193316340446472,-0.20998916029930115,-1.0233643054962158,-0.5418857932090759,-0.8379038572311401,-0.06539729237556458,2.695596694946289,0,0,0,1],[-0.18440860509872437,-0.5174691677093506,-0.8355955481529236,0.25225651264190674,0.9291732311248779,-0.3689040541648865,0.02339532971382141,-1.5520422458648682,-0.3203608989715576,-0.7720983028411865,0.5488470792770386,1.8426132202148438,0,0,0,1],[-0.007707223296165466,0.9997403025627136,-0.02146381139755249,-0.5743549466133118,0.9283736944198608,-0.0008221566677093506,-0.3716477155685425,-2.141334056854248,-0.3715686500072479,-0.02279070019721985,-0.9281256198883057,0.6092541217803955,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"1.0":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.19811782240867615,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749290943145752,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.076756238937378,0,0,0,1],[-0.6529766321182251,-0.018016591668128967,0.7571640014648438,0.11351345479488373,0.7157571911811829,0.31216558814048767,0.6246954798698425,-0.47373661398887634,-0.24761530756950378,0.9498568773269653,-0.19094128906726837,3.1248891353607178,0,0,0,1],[-0.9912880659103394,-0.046820130199193954,0.12311068177223206,0.08328279852867126,0.09931468963623047,0.3482525944709778,0.9321249723434448,-0.11368510127067566,-0.08651579916477203,0.9362308382987976,-0.34056857228279114,4.236809253692627,0,0,0,1],[-0.9860882759094238,-0.018885400146245956,0.16514717042446136,0.07295127958059311,0.1284003108739853,0.5444161295890808,0.8289297819137573,-0.036838285624980927,-0.10556343197822571,0.8386026620864868,-0.5344173908233643,4.44340181350708,0,0,0,1],[0.2788345217704773,-0.4034951329231262,-0.8714606761932373,-0.5287348628044128,0.914696455001831,0.388020783662796,0.11301048845052719,0.49529901146888733,0.2925456762313843,-0.8286325931549072,0.47726869583129883,3.7289695739746094,0,0,0,1],[0.14672532677650452,-0.055745527148246765,-0.9876055717468262,-0.8190023899078369,0.8962697982788086,0.4299357831478119,0.10888786613941193,0.774434506893158,0.41853684186935425,-0.9011369943618774,0.11304529011249542,3.1328654289245605,0,0,0,1],[0.14632658660411835,-0.023899365216493607,-0.9889479875564575,-0.8727328181266785,0.9158674478530884,0.3810975253582001,0.12630346417427063,1.1888293027877808,0.3738669455051422,-0.9242259860038757,0.07765316963195801,2.2643017768859863,0,0,0,1],[-0.5854052305221558,0.7891221046447754,0.1859743297100067,0.7335609197616577,-0.7455505132675171,-0.43385881185531616,-0.5058863759040833,-0.8851866126060486,-0.3185192346572876,-0.43480193614959717,0.8423136472702026,4.2031660079956055,0,0,0,1],[-0.6640625,0.7173157930374146,0.2108987271785736,1.2606439590454102,-0.6462541818618774,-0.4088236093521118,-0.6443747282028198,-1.1749765872955322,-0.3759995102882385,-0.5641995072364807,0.7350528836250305,3.9127461910247803,0,0,0,1],[-0.7072104811668396,0.665930449962616,0.23746395111083984,1.9567688703536987,-0.620918869972229,-0.4243994355201721,-0.6590483784675598,-1.5717227458953857,-0.33810052275657654,-0.6135320663452148,0.7136286497116089,3.3652143478393555,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.09689541906118393,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678535938263,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.107497215270996,0,0,0,1],[0.22741574048995972,0.1789819598197937,-0.9572085738182068,0.23023831844329834,0.7541614770889282,0.5894820690155029,0.2893986105918884,-0.11107711493968964,0.616054117679596,-0.7877032160758972,-0.0009239278733730316,2.7084827423095703,0,0,0,1],[0.23039579391479492,-0.5164530277252197,-0.8247392177581787,0.41244131326675415,0.9336193203926086,0.3562766909599304,0.03771102428436279,0.4890134930610657,0.2743593454360962,-0.7786806225776672,0.5642547011375427,1.9066036939620972,0,0,0,1],[-0.029558002948760986,0.9922128915786743,-0.12099814414978027,-0.41254639625549316,0.9279983043670654,0.07221907377243042,0.3655182719230652,1.058133840560913,0.3714102804660797,-0.10148176550865173,-0.9229060411453247,0.6627308130264282,0,0,0,1],[-0.13967382907867432,0.17153817415237427,-0.9752264022827148,0.0838519036769867,0.8283714652061462,-0.519331693649292,-0.20998916029930115,-1.0233643054962158,-0.5424869060516357,-0.83717942237854,-0.06956039369106293,2.6918678283691406,0,0,0,1],[-0.1858956515789032,-0.5210524201393127,-0.8330354690551758,0.25847721099853516,0.9291731715202332,-0.3689040541648865,0.023395344614982605,-1.5520422458648682,-0.31950029730796814,-0.7696847319602966,0.5527251362800598,1.8396217823028564,0,0,0,1],[-0.007595926523208618,0.9997471570968628,-0.02118566632270813,-0.5738582015037537,0.9283736944198608,-0.0008221268653869629,-0.3716476559638977,-2.141334056854248,-0.3715709149837494,-0.022491097450256348,-0.928132176399231,0.6101181507110596,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]],"1.04":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.19904693961143494,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.0754141807556152,0,0,0,1],[-0.6529766917228699,-0.018016591668128967,0.7571640014648438,0.11444257199764252,0.7156388163566589,0.3126196265220642,0.6246041059494019,-0.47373664379119873,-0.24795743823051453,0.9497075080871582,-0.1912398785352707,3.123547077178955,0,0,0,1],[-0.9912880659103394,-0.046820130199193954,0.12311065196990967,0.08421191573143005,0.09927335381507874,0.3487001061439514,0.9319621324539185,-0.11315363645553589,-0.08656327426433563,0.9360643029212952,-0.3410140872001648,4.235295295715332,0,0,0,1],[-0.9860882759094238,-0.018885405734181404,0.16514714062213898,0.0738803967833519,0.1283498853445053,0.5448169708251953,0.82867431640625,-0.03620807081460953,-0.10562480986118317,0.8383423686027527,-0.5348135232925415,4.4418511390686035,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.5278058052062988,0.9148361682891846,0.3876246511936188,0.11323864758014679,0.49558764696121216,0.29210835695266724,-0.8288179636001587,0.47721460461616516,3.7271642684936523,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.8180732727050781,0.8964698314666748,0.42950496077537537,0.1089419350028038,0.7744381427764893,0.41810834407806396,-0.9013423323631287,0.11299324035644531,3.1309268474578857,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.8718037009239197,0.9160460829734802,0.3806556165218353,0.1263406127691269,1.188417673110962,0.3734290599822998,-0.9244080185890198,0.07759280502796173,2.2621653079986572,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.7344900965690613,-0.7457026243209839,-0.4340667724609375,-0.5054836273193359,-0.8846712112426758,-0.31816279888153076,-0.43459445238113403,0.8425554037094116,4.202020645141602,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.2615731954574585,-0.6464337110519409,-0.40909343957901,-0.6440232992172241,-1.1746000051498413,-0.3756905496120453,-0.5640039443969727,0.735360860824585,3.9117393493652344,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.957698106765747,-0.6210803389549255,-0.424692839384079,-0.6587072014808655,-1.571608066558838,-0.3378036618232727,-0.6133291125297546,0.7139436602592468,3.3643970489501953,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.09782453626394272,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1061551570892334,0,0,0,1],[0.22687344253063202,0.17967525124549866,-0.957207441329956,0.23116743564605713,0.7541614770889282,0.5894821286201477,0.2893986701965332,-0.11107714474201202,0.6162541508674622,-0.787545382976532,-0.0017664991319179535,2.7071406841278076,0,0,0,1],[0.2307741492986679,-0.5175269842147827,-0.82396000623703,0.41407620906829834,0.9336193799972534,0.3562767505645752,0.037711068987846375,0.48901355266571045,0.27404117584228516,-0.7779673933982849,0.5653920769691467,1.9054222106933594,0,0,0,1],[-0.029594600200653076,0.9922229647636414,-0.12090721726417542,-0.41262704133987427,0.9279983639717102,0.07221922278404236,0.36551839113235474,1.058133840560913,0.37140730023384094,-0.10138401389122009,-0.9229179620742798,0.6626886129379272,0,0,0,1],[-0.13884037733078003,0.17282389104366302,-0.9751184582710266,0.08478102087974548,0.828371524810791,-0.519331693649292,-0.20998921990394592,-1.0233643054962158,-0.5427007675170898,-0.8369148969650269,-0.07105826586484909,2.690525770187378,0,0,0,1],[-0.1864294409751892,-0.5223381519317627,-0.8321104049682617,0.26071518659591675,0.9291732311248779,-0.36890411376953125,0.023395270109176636,-1.5520422458648682,-0.31918907165527344,-0.7688126564025879,0.5541167855262756,1.8385491371154785,0,0,0,1],[-0.00755542516708374,0.9997495412826538,-0.02108442783355713,-0.5736740231513977,0.9283736348152161,-0.0008220076560974121,-0.3716477155685425,-2.141334295272827,-0.3715716302394867,-0.022382140159606934,-0.9281343221664429,0.6104385852813721,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]]},"right":{"0.0":[[0.6470701694488525,-0.5754731893539429,0.5001307725906372,1.8879835605621338,0.7593386173248291,0.5454344749450684,-0.35483211278915405,-2.0865001678466797,-0.06859225034713745,0.6093699932098389,0.7899134755134583,2.268590211868286,0,0,0,1],[-0.3143215477466583,0.549628496170044,0.7740224599838257,1.837968349456787,0.9380592107772827,0.05463351309299469,0.3421400189399719,-2.0377542972564697,0.1457623988389969,0.8336207866668701,-0.5327566862106323,2.3364017009735107,0,0,0,1],[-0.6247172355651855,0.6366314888000488,0.45213812589645386,2.471919536590576,0.6650233268737793,0.13031883537769318,0.7353644371032715,-1.9754092693328857,0.4092341363430023,0.7600772380828857,-0.5047870874404907,3.316777229309082,0,0,0,1],[-0.8743836879730225,0.4809519648551941,-0.06433072686195374,2.612401247024536,0.13251280784606934,0.36421409249305725,0.9218395948410034,-1.9466526508331299,0.4667908549308777,0.797516942024231,-0.38219499588012695,3.484498977661133,0,0,0,1],[0.8137420415878296,-0.5704102516174316,-0.11161059141159058,2.0260283946990967,0.5801794528961182,0.8086820840835571,0.09708429872989655,-1.0842597484588623,0.03487949073314667,-0.14375557005405426,0.9889984130859375,3.2149839401245117,0,0,0,1],[0.8139392733573914,-0.4039207398891449,-0.4175543785095215,1.615684986114502,0.5401244163513184,0.7908226847648621,0.2878634035587311,-0.5025076866149902,0.21393732726573944,-0.45983433723449707,0.8618488311767578,3.1115686893463135,0,0,0,1],[0.7943523526191711,-0.42637380957603455,-0.4326784014701843,1.2263647317886353,0.5772702097892761,0.7515935897827148,0.3191652297973633,0.2597290277481079,0.1891145259141922,-0.5033015608787537,0.8431627750396729,2.668355941772461,0,0,0,1],[-0.876438558101654,0.4556029140949249,-0.15582174062728882,2.6329967975616455,-0.07138869911432266,-0.44298055768013,-0.8936841487884521,-2.8936963081359863,-0.47619134187698364,-0.7721357345581055,0.42077046632766724,2.9294652938842773,0,0,0,1],[-0.8868278861045837,0.41490310430526733,-0.2034466564655304,2.9373104572296143,0.06604477763175964,-0.32194337248802185,-0.944452166557312,-3.1895790100097656,-0.45735469460487366,-0.8510036468505859,0.25810641050338745,2.4137279987335205,0,0,0,1],[-0.9115864038467407,0.3657025098800659,-0.1878049373626709,3.339956521987915,0.08380022644996643,-0.281940221786499,-0.955764889717102,-3.50201153755188,-0.4024755656719208,-0.8870010375976562,0.22636713087558746,1.587864637374878,0,0,0,1],[0.5901997089385986,-0.42595720291137695,-0.6857293844223022,1.8218212127685547,0.7932220697402954,0.1482996940612793,0.5905978083610535,-2.025132894515991,-0.1498759388923645,-0.89250648021698,0.4254050850868225,2.3238003253936768,0,0,0,1],[0.8831771612167358,-0.3834053874015808,-0.270182728767395,1.8724992275238037,0.46506309509277344,0.640961766242981,0.6106425523757935,-1.595052719116211,-0.06094682961702347,-0.6649575233459473,0.7443903684616089,1.8729418516159058,0,0,0,1],[0.6795898675918579,-0.7245266437530518,0.11497502028942108,1.482193946838379,0.6910788416862488,0.6848732233047485,0.2309950292110443,-0.9425559043884277,-0.24610529839992523,-0.07752501964569092,0.9661377668380737,1.1960175037384033,0,0,0,1],[0.16229969263076782,0.8848129510879517,-0.4367668032646179,0.3248271942138672,0.8909311890602112,0.058861613273620605,0.4503074884414673,0.15146803855895996,0.42414671182632446,-0.4622139036655426,-0.7787539958953857,1.0721782445907593,0,0,0,1],[0.15201331675052643,-0.750443696975708,-0.643215537071228,1.4115303754806519,0.9265643358230591,-0.11833256483078003,0.3570377230644226,-2.3300116062164307,-0.3440501093864441,-0.6502550840377808,0.6773462295532227,2.0211634635925293,0,0,0,1],[0.4044948220252991,-0.9100221395492554,-0.09079515933990479,0.6475811004638672,0.856107234954834,0.3418615460395813,0.38757088780403137,-2.4504737854003906,-0.32165876030921936,-0.23450079560279846,0.9173576831817627,1.359205961227417,0,0,0,1],[0.6995072364807129,0.33234813809394836,-0.6326408982276917,-0.8060991764068604,0.4292403757572174,-0.9031903147697449,0.00013169646263122559,-1.9043800830841064,-0.5713512301445007,-0.27164706587791443,-0.7744452953338623,0.9846116304397583,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.04":[[0.646735668182373,-0.5743986368179321,0.5017960071563721,1.8827614784240723,0.7595759034156799,0.5446717143058777,-0.3554954528808594,-2.0833756923675537,-0.06911802291870117,0.6110637187957764,0.7885580062866211,2.2820308208465576,0,0,0,1],[-0.3147546648979187,0.5504486560821533,0.7732632160186768,1.8328689336776733,0.937787652015686,0.054541051387786865,0.3428986668586731,-2.0347108840942383,0.14657343924045563,0.8330854773521423,-0.5333710312843323,2.3499908447265625,0,0,0,1],[-0.6247104406356812,0.6373292803764343,0.45116353034973145,2.4677858352661133,0.664421558380127,0.130318745970726,0.7359082698822021,-1.9724823236465454,0.410220742225647,0.7594922780990601,-0.5048666596412659,3.3297486305236816,0,0,0,1],[-0.8770664930343628,0.4766194224357605,-0.059904277324676514,2.608421564102173,0.13556718826293945,0.3652239739894867,0.9209956526756287,-1.9437257051467896,0.46084290742874146,0.799653172492981,-0.384939581155777,3.4973411560058594,0,0,0,1],[0.8132196664810181,-0.5710594654083252,-0.11209678649902344,2.0212371349334717,0.5810163617134094,0.8076506853103638,0.10060197114944458,-1.0815571546554565,0.03308527171611786,-0.14694160223007202,0.9885916113853455,3.228876829147339,0,0,0,1],[0.8133793473243713,-0.40442609786987305,-0.41815581917762756,1.610426664352417,0.5416164398193359,0.7887816429138184,0.2906465530395508,-0.5005470514297485,0.21228842437267303,-0.4628857970237732,0.8606219291687012,3.1231696605682373,0,0,0,1],[0.7937699556350708,-0.42682716250419617,-0.4332996606826782,1.2206193208694458,0.5786539912223816,0.749374270439148,0.32186657190322876,0.25972241163253784,0.18732206523418427,-0.5062183141708374,0.8418154716491699,2.677015781402588,0,0,0,1],[-0.8766562938690186,0.45574501156806946,-0.1541728675365448,2.6290364265441895,-0.0710827112197876,-0.43962323665618896,-0.8953649997711182,-2.890467405319214,-0.47583627700805664,-0.7739684581756592,0.4177943468093872,2.941793203353882,0,0,0,1],[-0.8871043920516968,0.4156375527381897,-0.2007244974374771,2.9334449768066406,0.06704826653003693,-0.31422317028045654,-0.9469783902168274,-3.184107542037964,-0.4566722810268402,-0.8535270690917969,0.25088122487068176,2.4248318672180176,0,0,0,1],[-0.9117904305458069,0.36732640862464905,-0.1835983693599701,3.336803913116455,0.08496897667646408,-0.26865798234939575,-0.9594805240631104,-3.4890480041503906,-0.4017678499221802,-0.8904457688331604,0.21374867856502533,1.5965195894241333,0,0,0,1],[0.589694619178772,-0.4277736246585846,-0.6850330233573914,1.8166934251785278,0.7935261726379395,0.14908556640148163,0.5899911522865295,-2.022081136703491,-0.15025411546230316,-0.8915062546730042,0.42736440896987915,2.3374342918395996,0,0,0,1],[0.8831823468208313,-0.3807494044303894,-0.27389633655548096,1.8663614988327026,0.46542468667030334,0.6391739845275879,0.6122388243675232,-1.5915348529815674,-0.05804213881492615,-0.6681966185569763,0.7417172193527222,1.8869085311889648,0,0,0,1],[0.6812026500701904,-0.724591076374054,0.10455246269702911,1.478760004043579,0.6905536651611328,0.6833857297897339,0.23689574003219604,-0.940858006477356,-0.24310213327407837,-0.08917492628097534,0.9658929109573364,1.2066867351531982,0,0,0,1],[0.1623520851135254,0.8871880769729614,-0.4319021701812744,0.3212902545928955,0.887218713760376,0.060309261083602905,0.4573901295661926,0.15078985691070557,0.4318386912345886,-0.4574498236179352,-0.7773382663726807,1.0642377138137817,0,0,0,1],[0.15324056148529053,-0.7470048666000366,-0.6469167470932007,1.4058791399002075,0.9257301092147827,-0.12053004652261734,0.3584635853767395,-2.3267624378204346,-0.3457469940185547,-0.6538015007972717,0.6730546951293945,2.035309314727783,0,0,0,1],[0.4056446850299835,-0.9090007543563843,-0.09576162695884705,0.6454305648803711,0.8554862141609192,0.34068065881729126,0.38997456431388855,-2.4494616985321045,-0.3218630850315094,-0.24011391401290894,0.9158326983451843,1.369741439819336,0,0,0,1],[0.695502758026123,0.3343193233013153,-0.6360085606575012,-0.8066180944442749,0.43198132514953613,-0.9018810987472534,-0.0016854405403137207,-1.9052543640136719,-0.5741674900054932,-0.2735713720321655,-0.7716802954673767,0.9861806631088257,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.08":[[0.6457561254501343,-0.5712507367134094,0.5066277980804443,1.8675634860992432,0.7602688074111938,0.5424437522888184,-0.35741591453552246,-2.074281692504883,-0.07064303755760193,0.6159768104553223,0.7845903635025024,2.321147918701172,0,0,0,1],[-0.31600913405418396,0.5528302192687988,0.7710493803024292,1.8180296421051025,0.9369926452636719,0.05427166819572449,0.34510791301727295,-2.0258538722991943,0.14893990755081177,0.831524670124054,-0.5351482033729553,2.389538288116455,0,0,0,1],[-0.6246834993362427,0.6393541097640991,0.448326975107193,2.4557509422302246,0.6626657247543335,0.13031825423240662,0.7374901175498962,-1.963964581489563,0.4130920171737671,0.7577885389328003,-0.5050854682922363,3.367494583129883,0,0,0,1],[-0.8846251964569092,0.4639362394809723,-0.04691898822784424,2.5968334674835205,0.14440491795539856,0.3682335317134857,0.918450653553009,-1.9352080821990967,0.44337964057922363,0.8057089447975159,-0.39274317026138306,3.5347113609313965,0,0,0,1],[0.8116874098777771,-0.572949230670929,-0.11354997754096985,2.007295608520508,0.5834278464317322,0.8045696020126343,0.1108163595199585,-1.0736969709396362,0.027866601943969727,-0.15619641542434692,0.987332820892334,3.2693116664886475,0,0,0,1],[0.8117313385009766,-0.4058859944343567,-0.4199400544166565,1.595125675201416,0.5459356307983398,0.7827723622322083,0.2987009882926941,-0.4949033856391907,0.20747865736484528,-0.4717249274253845,0.8569878339767456,3.1569466590881348,0,0,0,1],[0.7920572757720947,-0.4281335473060608,-0.43514108657836914,1.203911304473877,0.5826550722122192,0.7428489923477173,0.3296802043914795,0.2595739960670471,0.1820967197418213,-0.5146623849868774,0.8378325700759888,2.70227313041687,0,0,0,1],[-0.8772945404052734,0.45611056685447693,-0.14938637614250183,2.617501735687256,-0.07017862796783447,-0.4298141896724701,-0.9001859426498413,-2.881065845489502,-0.47479280829429626,-0.7792446613311768,0.40908318758010864,2.977661371231079,0,0,0,1],[-0.887927770614624,0.4176211953163147,-0.19280922412872314,2.922154426574707,0.0699840635061264,-0.2916342616081238,-0.9539663195610046,-3.168154239654541,-0.4546264708042145,-0.8605470061302185,0.22972367703914642,2.4571757316589355,0,0,0,1],[-0.9124208092689514,0.37167441844940186,-0.171303391456604,3.3274383544921875,0.08839620649814606,-0.2297138273715973,-0.9692355990409851,-3.4511730670928955,-0.3995909094810486,-0.8994937539100647,0.17674139142036438,1.6220510005950928,0,0,0,1],[0.588219940662384,-0.43304967880249023,-0.6829827427864075,1.8017722368240356,0.7944125533103943,0.1513645350933075,0.5882154703140259,-2.013199806213379,-0.15134720504283905,-0.8885700702667236,0.43305569887161255,2.377112865447998,0,0,0,1],[0.8831214308738708,-0.37292197346687317,-0.2846503257751465,1.8485041856765747,0.4665175676345825,0.6339426040649414,0.6168290376663208,-1.5813002586364746,-0.0495772659778595,-0.6775293350219727,0.7338229417800903,1.9275692701339722,0,0,0,1],[0.6857331395149231,-0.7240630984306335,0.07418087124824524,1.4688708782196045,0.6891334056854248,0.6786717176437378,0.25396832823753357,-0.9359489679336548,-0.23423369228839874,-0.12303385138511658,0.9643636345863342,1.237846851348877,0,0,0,1],[0.1617054045200348,0.8939560651779175,-0.41796380281448364,0.3122445344924927,0.8760667443275452,0.06492286920547485,0.4777991771697998,0.148168683052063,0.45426684617996216,-0.44342708587646484,-0.7726666927337646,1.041311264038086,0,0,0,1],[0.1568692922592163,-0.7368746995925903,-0.657577395439148,1.3894398212432861,0.9232847094535828,-0.12696164846420288,0.36252743005752563,-2.3173105716705322,-0.3506244421005249,-0.664000391960144,0.6604285836219788,2.0764846801757812,0,0,0,1],[0.40900319814682007,-0.9058555364608765,-0.11019301414489746,0.6393037438392639,0.8536834716796875,0.337163507938385,0.3969200551509857,-2.44655704498291,-0.3223992884159088,-0.25641143321990967,0.9112144708633423,1.4005343914031982,0,0,0,1],[0.6837102174758911,0.33992552757263184,-0.6457487344741821,-0.8077207207679749,0.4397967457771301,-0.8980693817138672,-0.007097512483596802,-1.9079681634902954,-0.5823396444320679,-0.27914535999298096,-0.7635170817375183,0.9909397959709167,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.12":[[0.6443313956260681,-0.5666725039482117,0.5135363340377808,1.8457152843475342,0.7612713575363159,0.5392197370529175,-0.36014989018440247,-2.0612082481384277,-0.07282191514968872,0.6229963302612305,0.7788276672363281,2.3773813247680664,0,0,0,1],[-0.317798912525177,0.5562410950660706,0.7678542137145996,1.7967019081115723,0.9358371496200562,0.053884029388427734,0.348289430141449,-2.013123035430908,0.15235774219036102,0.8292722702026367,-0.5376753211021423,2.446385622024536,0,0,0,1],[-0.6246272325515747,0.6422510147094727,0.44424641132354736,2.4384398460388184,0.6601276397705078,0.13031746447086334,0.7397629022598267,-1.9517221450805664,0.4172202944755554,0.7553352117538452,-0.5053672790527344,3.4217419624328613,0,0,0,1],[-0.8948302865028381,0.4455275535583496,-0.028004825115203857,2.5801615715026855,0.15696117281913757,0.3727395534515381,0.9145646691322327,-1.9229657649993896,0.4179021716117859,0.8139843344688416,-0.4034690856933594,3.5884172916412354,0,0,0,1],[0.809453010559082,-0.5756664872169495,-0.11573556065559387,1.987260103225708,0.5868320465087891,0.7999346256256104,0.12543335556983948,-1.0624117851257324,0.020373031497001648,-0.16944970190525055,0.9853283166885376,3.3274426460266113,0,0,0,1],[0.8093142509460449,-0.4079568088054657,-0.42259013652801514,1.573135495185852,0.5520839095115662,0.7739558815956116,0.3101552426815033,-0.4869524836540222,0.20053601264953613,-0.4843180179595947,0.8515993356704712,3.2055435180664062,0,0,0,1],[0.789548933506012,-0.4299781024456024,-0.4378722608089447,1.1799250841140747,0.588337779045105,0.7332989573478699,0.3407813608646393,0.2590271234512329,0.17456261813640594,-0.5266799926757812,0.8319472074508667,2.738732099533081,0,0,0,1],[-0.8782252073287964,0.4565116763114929,-0.14253611862659454,2.6008996963500977,-0.0688464492559433,-0.415615051984787,-0.9069312810897827,-2.8675403594970703,-0.4732651114463806,-0.7866770029067993,0.396433025598526,3.0291967391967773,0,0,0,1],[-0.8891628980636597,0.4200730323791504,-0.1814572960138321,2.905820369720459,0.07423759251832962,-0.25886937975883484,-0.9630552530288696,-3.1451447010040283,-0.45152747631073,-0.8697842359542847,0.1989920437335968,2.503746747970581,0,0,0,1],[-0.913424015045166,0.37693914771080017,-0.15353216230869293,3.313483715057373,0.09337441623210907,-0.1730869859457016,-0.9804702997207642,-3.396366596221924,-0.39615216851234436,-0.9099214673042297,0.12290551513433456,1.659657597541809,0,0,0,1],[0.5860875844955444,-0.44060784578323364,-0.6799753308296204,1.7803277969360352,0.7956904172897339,0.15461856126785278,0.58563631772995,-2.0004348754882812,-0.15289916098117828,-0.8842839598655701,0.4412073493003845,2.4341495037078857,0,0,0,1],[0.8828350305557251,-0.3614240884780884,-0.2999590337276459,1.8228466510772705,0.46819305419921875,0.6263535022735596,0.6232788562774658,-1.5665990114212036,-0.03738756477832794,-0.6906910538673401,0.7221829891204834,1.986054539680481,0,0,0,1],[0.6918065547943115,-0.721439003944397,0.030497819185256958,1.4549181461334229,0.6873770952224731,0.6709046363830566,0.27820783853530884,-0.928973376750946,-0.22117100656032562,-0.17150244116783142,0.9600367546081543,1.2829334735870361,0,0,0,1],[0.15869340300559998,0.903286874294281,-0.39860960841178894,0.30248355865478516,0.8591660261154175,0.072580486536026,0.5065231323242188,0.14273697137832642,0.48646703362464905,-0.42285361886024475,-0.7645552754402161,1.0089735984802246,0,0,0,1],[0.16222897171974182,-0.7220047116279602,-0.6726004481315613,1.3658274412155151,0.9197260141372681,-0.13629500567913055,0.36814114451408386,-2.30373477935791,-0.357471764087677,-0.6783311367034912,0.641935408115387,2.1356911659240723,0,0,0,1],[0.41385719180107117,-0.9008868932723999,-0.13086393475532532,0.6308289766311646,0.8511067032814026,0.33190131187438965,0.4067668914794922,-2.4424827098846436,-0.3230171203613281,-0.2797224819660187,0.9041103720664978,1.4451522827148438,0,0,0,1],[0.6664146184921265,0.34763890504837036,-0.6595747470855713,-0.8082585334777832,0.45059794187545776,-0.892598032951355,-0.01518683135509491,-1.912299633026123,-0.594014585018158,-0.28708207607269287,-0.7514856457710266,0.9983203411102295,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.16":[[0.6428874731063843,-0.5620324611663818,0.520399272441864,1.8238670825958252,0.7622815370559692,0.5359713435173035,-0.3628520667552948,-2.048135280609131,-0.07498449087142944,0.6299636960029602,0.7729961276054382,2.433614730834961,0,0,0,1],[-0.3195716440677643,0.559636116027832,0.7646447420120239,1.7753796577453613,0.9346669912338257,0.053495749831199646,0.351476788520813,-2.000394582748413,0.15579386055469513,0.8270100951194763,-0.5401691198348999,2.5032269954681396,0,0,0,1],[-0.6245496869087219,0.6451308727264404,0.4401635527610779,2.4211161136627197,0.6575738787651062,0.130316361784935,0.7420340776443481,-1.9394828081130981,0.421348512172699,0.7528771162033081,-0.5056101083755493,3.4759714603424072,0,0,0,1],[-0.9042382836341858,0.42693716287612915,-0.00882682204246521,2.5634732246398926,0.16932666301727295,0.37745070457458496,0.9104173183441162,-1.9107266664505005,0.39202266931533813,0.8217394351959229,-0.41359710693359375,3.642104387283325,0,0,0,1],[0.807182788848877,-0.5783808827400208,-0.11803561449050903,1.9672324657440186,0.5901615619659424,0.7950593829154968,0.13996535539627075,-1.0511434078216553,0.012892007827758789,-0.1826375424861908,0.9830958843231201,3.3855764865875244,0,0,0,1],[0.806842029094696,-0.4099908173084259,-0.4253401756286621,1.5511550903320312,0.5581579208374023,0.7649345397949219,0.32145801186561584,-0.47919130325317383,0.19356243312358856,-0.49677249789237976,0.8460205793380737,3.25419020652771,0,0,0,1],[0.7869876027107239,-0.43177923560142517,-0.4407019019126892,1.1559841632843018,0.5939366817474365,0.7235540747642517,0.3517230451107025,0.25809305906295776,0.16700483858585358,-0.5385503172874451,0.8258772492408752,2.775374412536621,0,0,0,1],[-0.8791707754135132,0.45676708221435547,-0.1357259452342987,2.584272861480713,-0.0674760490655899,-0.4013044834136963,-0.9134559035301208,-2.854003667831421,-0.47170430421829224,-0.7939257621765137,0.38363614678382874,3.080700159072876,0,0,0,1],[-0.8904568552970886,0.42205744981765747,-0.17015589773654938,2.889364004135132,0.07852381467819214,-0.22579875588417053,-0.971004068851471,-3.122049331665039,-0.4482407569885254,-0.8779988288879395,0.1679224967956543,2.5504086017608643,0,0,0,1],[-0.9145397543907166,0.38104644417762756,-0.13571827113628387,3.298953056335449,0.09839201718568802,-0.11588478833436966,-0.9883773326873779,-3.341177463531494,-0.39234551787376404,-0.9172644019126892,0.06848927587270737,1.698347568511963,0,0,0,1],[0.5839410424232483,-0.44813328981399536,-0.6768971681594849,1.7588905096054077,0.7969723343849182,0.15784631669521332,0.5830262303352356,-1.9876731634140015,-0.15442775189876556,-0.8799211978912354,0.4493226408958435,2.4911813735961914,0,0,0,1],[0.8823123574256897,-0.3496473431587219,-0.31507450342178345,1.7972065210342407,0.4699901044368744,0.6186922192573547,0.6295467615127563,-1.5519115924835205,-0.025185227394104004,-0.7035388946533203,0.7102105021476746,2.0445783138275146,0,0,0,1],[0.6973426342010498,-0.7166186571121216,-0.013088792562484741,1.4412667751312256,0.6859623193740845,0.6619946360588074,0.30202433466911316,-0.9220851063728333,-0.20777161419391632,-0.2195928990840912,0.9532103538513184,1.3283782005310059,0,0,0,1],[0.15325236320495605,0.9121063947677612,-0.38023120164871216,0.2965322732925415,0.841308057308197,0.08141493797302246,0.5343894362449646,0.13539236783981323,0.5183764696121216,-0.4017880856990814,-0.7548853754997253,0.9775980710983276,0,0,0,1],[0.16775035858154297,-0.7067893743515015,-0.6872474551200867,1.3422396183013916,0.9161218404769897,-0.14571931958198547,0.37347930669784546,-2.2901737689971924,-0.36411648988723755,-0.6922535300254822,0.6230604648590088,2.1949143409729004,0,0,0,1],[0.41873493790626526,-0.8953956365585327,-0.1514206826686859,0.6227303147315979,0.8485512733459473,0.3264039158821106,0.41643911600112915,-2.4385156631469727,-0.32345354557037354,-0.30286577343940735,0.8964654207229614,1.4902024269104004,0,0,0,1],[0.6487448811531067,0.35493555665016174,-0.6731650829315186,-0.8075854182243347,0.46086710691452026,-0.8871550559997559,-0.02361626923084259,-1.9171142578125,-0.605583906173706,-0.29491838812828064,-0.7391152381896973,1.0064010620117188,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.2":[[0.6418718695640564,-0.5587685704231262,0.5251460075378418,1.808669090270996,0.7629885673522949,0.5336976051330566,-0.36471277475357056,-2.03904128074646,-0.07647913694381714,0.6347792148590088,0.7688994407653809,2.4727320671081543,0,0,0,1],[-0.32079482078552246,0.5619884729385376,0.7624039053916931,1.760550618171692,0.9338443279266357,0.053225353360176086,0.3536974787712097,-1.9915413856506348,0.15819470584392548,0.8254308700561523,-0.5418841242790222,2.5427639484405518,0,0,0,1],[-0.6244834661483765,0.6471242308616638,0.437322199344635,2.4090576171875,0.6557881832122803,0.13031545281410217,0.7436128258705139,-1.930970311164856,0.4242199957370758,0.7511645555496216,-0.5057560801506042,3.5136849880218506,0,0,0,1],[-0.910304069519043,0.41391411423683167,0.0046520233154296875,2.5518546104431152,0.1778068244457245,0.38084444403648376,0.9073821902275085,-1.9022144079208374,0.37380653619766235,0.8268206715583801,-0.42028090357780457,3.6794400215148926,0,0,0,1],[0.8055827617645264,-0.5802656412124634,-0.11970305442810059,1.9533052444458008,0.5924339294433594,0.7915279865264893,0.15002015233039856,-1.0433145761489868,0.007696852087974548,-0.1917697936296463,0.9814098477363586,3.4260177612304688,0,0,0,1],[0.8050900101661682,-0.41138237714767456,-0.4273115396499634,1.5358721017837524,0.5623390078544617,0.7585408687591553,0.3292280435562134,-0.4739028811454773,0.18869465589523315,-0.5053519606590271,0.8420296311378479,3.2880618572235107,0,0,0,1],[0.7851748466491699,-0.4330050051212311,-0.442727655172348,1.139359951019287,0.5977818369865417,0.716663122177124,0.3592372536659241,0.2572188973426819,0.16173508763313293,-0.5467182993888855,0.8215479850769043,2.8009767532348633,0,0,0,1],[-0.8798373341560364,0.45685917139053345,-0.1310139000415802,2.5726919174194336,-0.06650083512067795,-0.3912864029407501,-0.917863130569458,-2.8445801734924316,-0.4705984890460968,-0.7988580465316772,0.3746500611305237,3.116508722305298,0,0,0,1],[-0.8913908004760742,0.4231647253036499,-0.1623346507549286,2.8778445720672607,0.08152033388614655,-0.20263653993606567,-0.9758549928665161,-3.1059343814849854,-0.4458426535129547,-0.8831022381782532,0.14613187313079834,2.5829226970672607,0,0,0,1],[-0.915381133556366,0.3832263946533203,-0.12334223091602325,3.288508176803589,0.10189247876405716,-0.07586264610290527,-0.9918986558914185,-3.302584648132324,-0.38947901129722595,-0.9205336570739746,0.030395328998565674,1.7259089946746826,0,0,0,1],[0.5824396014213562,-0.45334839820861816,-0.6747144460678101,1.7439824342727661,0.7978665232658386,0.16007578372955322,0.581192672252655,-1.9787973165512085,-0.15547730028629303,-0.8768415451049805,0.4549458920955658,2.530851364135742,0,0,0,1],[0.8818093538284302,-0.34129807353019714,-0.3254661560058594,1.779381275177002,0.4713105857372284,0.6133255958557129,0.633796751499176,-1.5417027473449707,-0.01669691503047943,-0.7122834324836731,0.7016934156417847,2.0853114128112793,0,0,0,1],[0.7008670568466187,-0.7119779586791992,-0.043279021978378296,1.431941032409668,0.6851813197135925,0.6551399827003479,0.3183055520057678,-0.9173395037651062,-0.1982726901769638,-0.25274381041526794,0.9469997882843018,1.3602094650268555,0,0,0,1],[0.14806511998176575,0.9179141521453857,-0.36811745166778564,0.29461967945098877,0.8283669948577881,0.08823052048683167,0.5531940460205078,0.12918823957443237,0.5402637124061584,-0.3868449926376343,-0.747305691242218,0.956473708152771,0,0,0,1],[0.1716817021369934,-0.6960121393203735,-0.6972035765647888,1.3258459568023682,0.913591206073761,-0.15232163667678833,0.37702715396881104,-2.2807486057281494,-0.3686145842075348,-0.7016876339912415,0.6097195148468018,2.23612117767334,0,0,0,1],[0.4221374988555908,-0.89127117395401,-0.16563823819160461,0.6173078417778015,0.8467886447906494,0.3224458694458008,0.4230579733848572,-2.4358115196228027,-0.32364991307258606,-0.31884920597076416,0.8908345103263855,1.5218054056167603,0,0,0,1],[0.6362510323524475,0.3597610592842102,-0.6824640035629272,-0.8064194321632385,0.46768659353256226,-0.8833966255187988,-0.029665425419807434,-1.9207327365875244,-0.6135585308074951,-0.30030447244644165,-0.7303173542022705,1.0124719142913818,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.24":[[0.6415207982063293,-0.5576401948928833,0.5267717242240906,1.8034470081329346,0.7632322311401367,0.5329136848449707,-0.3653484582901001,-2.035916566848755,-0.07699087262153625,0.6364277601242065,0.7674842476844788,2.4861724376678467,0,0,0,1],[-0.32121309638023376,0.5627949237823486,0.7616325616836548,1.7554559707641602,0.9335600137710571,0.05313237011432648,0.35446101427078247,-1.988499641418457,0.1590215265750885,0.8248872756958008,-0.5424696207046509,2.5563478469848633,0,0,0,1],[-0.6244582533836365,0.647807240486145,0.4363458752632141,2.4049129486083984,0.6551728248596191,0.13031509518623352,0.7441549301147461,-1.9280457496643066,0.4252064824104309,0.7505757808685303,-0.5058019757270813,3.5266411304473877,0,0,0,1],[-0.9122964143753052,0.4094243347644806,0.00930735468864441,2.547860622406006,0.18069636821746826,0.38203200697898865,0.9063115119934082,-1.899289846420288,0.3675103187561035,0.8285067081451416,-0.42250797152519226,3.6922662258148193,0,0,0,1],[0.8050294518470764,-0.5809122323989868,-0.1202886700630188,1.9485207796096802,0.5932062268257141,0.7902883291244507,0.15346425771713257,-1.0406264066696167,0.005913570523262024,-0.19489923119544983,0.9808056354522705,3.439913511276245,0,0,0,1],[0.8044822216033936,-0.4118557572364807,-0.4279997944831848,1.5306224822998047,0.5637669563293457,0.7563219666481018,0.33187997341156006,-0.4721065163612366,0.18701903522014618,-0.5082834959030151,0.8406378626823425,3.29970645904541,0,0,0,1],[0.7845464944839478,-0.43342071771621704,-0.4434344470500946,1.1336541175842285,0.5990933179855347,0.7142744660377502,0.3618004024028778,0.2568765878677368,0.15992221236228943,-0.5495075583457947,0.8200406432151794,2.80979585647583,0,0,0,1],[-0.8800681233406067,0.456874817609787,-0.12940004467964172,2.5687098503112793,-0.06616154313087463,-0.3878325819969177,-0.9193521738052368,-2.841341018676758,-0.47021472454071045,-0.8005315661430359,0.3715468943119049,3.1288089752197266,0,0,0,1],[-0.8917181491851807,0.4234940707683563,-0.15965650975704193,2.873872995376587,0.08255227655172348,-0.19465145468711853,-0.977392315864563,-3.100388288497925,-0.4449974596500397,-0.8847389817237854,0.1386139690876007,2.5941052436828613,0,0,0,1],[-0.9156826138496399,0.3838483691215515,-0.11909846216440201,3.2848563194274902,0.10309545695781708,-0.06208237260580063,-0.9927319884300232,-3.2892894744873047,-0.3884526491165161,-0.9213066101074219,0.017274759709835052,1.7355031967163086,0,0,0,1],[0.5819222331047058,-0.4551365375518799,-0.6739566326141357,1.7388607263565063,0.7981740832328796,0.160838782787323,0.5805591940879822,-1.9757479429244995,-0.1558353304862976,-0.8757748603820801,0.45687368512153625,2.544481039047241,0,0,0,1],[0.8816101551055908,-0.33840060234069824,-0.3290121555328369,1.7732584476470947,0.47177740931510925,0.6114750504493713,0.635235607624054,-1.5381965637207031,-0.013781338930130005,-0.7152506709098816,0.6987320780754089,2.099311351776123,0,0,0,1],[0.7020150423049927,-0.7101411819458008,-0.05361786484718323,1.4287678003311157,0.6849516034126282,0.6526627540588379,0.32384055852890015,-0.9157171249389648,-0.19497808814048767,-0.264066606760025,0.9445910453796387,1.3711886405944824,0,0,0,1],[0.14602279663085938,0.9198439717292786,-0.3640943169593811,0.2943805456161499,0.8238288760185242,0.09069576859474182,0.5595356225967407,0.12685346603393555,0.5477070808410645,-0.381656289100647,-0.7445501685142517,0.9493657350540161,0,0,0,1],[0.1730489432811737,-0.6922740936279297,-0.7005789875984192,1.3202157020568848,0.9127175807952881,-0.1545979529619217,0.37821438908576965,-2.2775118350982666,-0.3701360821723938,-0.7048802971839905,0.6050974726676941,2.2502810955047607,0,0,0,1],[0.42330777645111084,-0.8897969722747803,-0.1705058217048645,0.6154829263687134,0.846186101436615,0.32106125354766846,0.42531052231788635,-2.434892177581787,-0.32369714975357056,-0.32431691884994507,0.8888411521911621,1.5327152013778687,0,0,0,1],[0.6319223642349243,0.3613712191581726,-0.6856276392936707,-0.805889368057251,0.4699671268463135,-0.8821118474006653,-0.03177677094936371,-1.922025203704834,-0.6162831783294678,-0.3021416962146759,-0.7272586822509766,1.0146474838256836,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.28":[[0.6418783664703369,-0.5587893128395081,0.5251157879829407,1.8087658882141113,0.7629839181900024,0.5337120890617371,-0.36470094323158264,-2.0390989780426025,-0.07646968960762024,0.6347485780715942,0.7689256072044373,2.4724831581115723,0,0,0,1],[-0.3207870125770569,0.5619734525680542,0.7624182105064392,1.7606450319290161,0.9338495135307312,0.05322709679603577,0.3536832928657532,-1.9915975332260132,0.15817931294441223,0.8254408836364746,-0.5418732166290283,2.5425124168395996,0,0,0,1],[-0.6244838237762451,0.6471115350723267,0.43734031915664673,2.4091343879699707,0.6557995080947876,0.13031546771526337,0.7436026930809021,-1.9310243129730225,0.4242016077041626,0.7511754035949707,-0.5057551860809326,3.5134449005126953,0,0,0,1],[-0.9102665781974792,0.41399720311164856,0.0045659542083740234,2.5519285202026367,0.17775321006774902,0.3808225393295288,0.9074019193649292,-1.902268409729004,0.37392300367355347,0.8267890810966492,-0.42023932933807373,3.6792023181915283,0,0,0,1],[0.8055930733680725,-0.5802534818649292,-0.11969223618507385,1.953393816947937,0.5924195051193237,0.7915507555007935,0.14995630085468292,-1.0433642864227295,0.007729828357696533,-0.19171170890331268,0.9814208745956421,3.425760507583618,0,0,0,1],[0.8051013350486755,-0.41137343645095825,-0.42729878425598145,1.5359693765640259,0.5623124837875366,0.758581817150116,0.3291788101196289,-0.47393620014190674,0.18872560560703278,-0.5052975416183472,0.8420552611351013,3.287846326828003,0,0,0,1],[0.7851865291595459,-0.4329971373081207,-0.4427145719528198,1.1394658088684082,0.5977574586868286,0.7167072296142578,0.3591896593570709,0.25722503662109375,0.1617685854434967,-0.5466665625572205,0.8215757608413696,2.800813674926758,0,0,0,1],[-0.8798330426216125,0.45685896277427673,-0.13104389607906342,2.572765827178955,-0.06650722026824951,-0.39135026931762695,-0.9178353548049927,-2.844639778137207,-0.4706057012081146,-0.7988268136978149,0.37470752000808716,3.116281032562256,0,0,0,1],[-0.8913847804069519,0.42315855622291565,-0.16238436102867126,2.8779184818267822,0.08150109648704529,-0.20278427004814148,-0.975825846195221,-3.10603666305542,-0.44585832953453064,-0.8830710649490356,0.14627104997634888,2.5827157497406006,0,0,0,1],[-0.9153756499290466,0.38321441411972046,-0.12342090904712677,3.288576126098633,0.10187005251646042,-0.07611774653196335,-0.9918813109397888,-3.302830219268799,-0.3894979655742645,-0.9205173254013062,0.030638322234153748,1.7257323265075684,0,0,0,1],[0.582449197769165,-0.45331519842147827,-0.6747283339500427,1.7440773248672485,0.7978606820106506,0.16006159782409668,0.5812042951583862,-1.978853702545166,-0.15547069907188416,-0.8768612742424011,0.4549100995063782,2.5305988788604736,0,0,0,1],[0.8818128108978271,-0.34135153889656067,-0.32540035247802734,1.7794947624206543,0.47130197286605835,0.6133595705032349,0.6337699294090271,-1.5417675971984863,-0.01675097644329071,-0.7122284173965454,0.7017480134963989,2.085052013397217,0,0,0,1],[0.7008454203605652,-0.7120108008384705,-0.04308736324310303,1.4320001602172852,0.6851857304573059,0.6551851034164429,0.31820276379585266,-0.9173697233200073,-0.19833368062973022,-0.25253385305404663,0.9470430612564087,1.3600060939788818,0,0,0,1],[0.1481015384197235,0.9178780913352966,-0.3681926131248474,0.2946263551712036,0.828450620174408,0.08818554878234863,0.5530757904052734,0.12923014163970947,0.54012531042099,-0.38694074749946594,-0.7473562955856323,0.9566057920455933,0,0,0,1],[0.17165647447109222,-0.6960811614990234,-0.6971407532691956,1.325950264930725,0.913607120513916,-0.15227951109409332,0.3770049214363098,-2.280808448791504,-0.36858633160591125,-0.7016281485557556,0.6098049283027649,2.235858678817749,0,0,0,1],[0.42211583256721497,-0.8912980556488037,-0.16554802656173706,0.6173418760299683,0.8467997312545776,0.3224713206291199,0.4230160415172577,-2.435828447341919,-0.32364901900291443,-0.31874769926071167,0.8908710479736328,1.5216034650802612,0,0,0,1],[0.6363309025764465,0.3597307503223419,-0.6824050545692444,-0.8064283132553101,0.46764397621154785,-0.8834203481674194,-0.029626458883285522,-1.9207090139389038,-0.6135081052780151,-0.30027028918266296,-0.7303734421730042,1.0124320983886719,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.32":[[0.6426240801811218,-0.561185896396637,0.5216366052627563,1.8199121952056885,0.7624651193618774,0.5353808403015137,-0.36333778500556946,-2.0457687377929688,-0.07537421584129333,0.6312192678451538,0.7719332575798035,2.443794012069702,0,0,0,1],[-0.3198906481266022,0.5602489709854126,0.7640622854232788,1.7715204954147339,0.9344536066055298,0.053425371646881104,0.35205429792404175,-1.9980906248092651,0.15641775727272034,0.8265995383262634,-0.5406169295310974,2.5135157108306885,0,0,0,1],[-0.6245334148406982,0.6456503868103027,0.4394243657588959,2.4179787635803223,0.6571100354194641,0.13031607866287231,0.7424448728561401,-1.937267541885376,0.42209571599960327,0.7524315714836121,-0.5056498646736145,3.485786199569702,0,0,0,1],[-0.9058547616004944,0.4235549569129944,-0.005329549312591553,2.560450553894043,0.17154362797737122,0.3783247470855713,0.909639298915863,-1.9085115194320679,0.38729849457740784,0.8230865001678467,-0.41536521911621094,3.651820659637451,0,0,0,1],[0.806768000125885,-0.5788715481758118,-0.11846417188644409,1.963607907295227,0.590756356716156,0.7941514849662781,0.14258621633052826,-1.0491054058074951,0.011539384722709656,-0.185017392039299,0.9826674461364746,3.3961000442504883,0,0,0,1],[0.8063886761665344,-0.41035470366477966,-0.4258485436439514,1.5471775531768799,0.5592494606971741,0.7632799744606018,0.3234873414039612,-0.4778064489364624,0.19229701161384583,-0.4990118443965912,0.8449904918670654,3.2630016803741455,0,0,0,1],[0.7865183353424072,-0.4321002662181854,-0.44122448563575745,1.151655912399292,0.594941258430481,0.7217696309089661,0.3536861538887024,0.25788313150405884,0.16563446819782257,-0.5406829118728638,0.8247588276863098,2.78202748298645,0,0,0,1],[-0.8793436288833618,0.45679792761802673,-0.13449780642986298,2.5812602043151855,-0.06722399592399597,-0.3987024426460266,-0.9146131873130798,-2.8515520095825195,-0.4714181423187256,-0.7952179908752441,0.3813043534755707,3.090019702911377,0,0,0,1],[-0.8906973004341125,0.42236724495887756,-0.16811718046665192,2.8863720893859863,0.07930253446102142,-0.21978303790092468,-0.9723201394081116,-3.1178598403930664,-0.4476255774497986,-0.8793753385543823,0.16226544976234436,2.5588650703430176,0,0,0,1],[-0.9147537350654602,0.38166722655296326,-0.13249516487121582,3.296261787414551,0.09930256009101868,-0.10548456013202667,-0.989450216293335,-3.3311500549316406,-0.39161691069602966,-0.9182608723640442,0.05859188735485077,1.7054681777954102,0,0,0,1],[0.5835509896278381,-0.4494919180870056,-0.6763323545455933,1.755010724067688,0.797204852104187,0.15842773020267487,0.582550585269928,-1.985363245010376,-0.15470197796821594,-0.8791232705116272,0.4507876932621002,2.50150465965271,0,0,0,1],[0.8821924924850464,-0.3474867343902588,-0.31778860092163086,1.7925671339035034,0.470328152179718,0.6172985434532166,0.63066166639328,-1.549254298210144,-0.022976167500019073,-0.7058297991752625,0.708008885383606,2.055176258087158,0,0,0,1],[0.6982859969139099,-0.7155123353004456,-0.02095770835876465,1.4388269186019897,0.6857429146766663,0.6602622270584106,0.30628502368927,-0.9208465814590454,-0.20531310141086578,-0.22824597358703613,0.9517092108726501,1.3366440534591675,0,0,0,1],[0.15201207995414734,0.9136446714401245,-0.37702280282974243,0.295859694480896,0.837979793548584,0.08313632011413574,0.5393310785293579,0.1338634490966797,0.524101197719574,-0.3979222774505615,-0.752977728843689,0.9720414876937866,0,0,0,1],[0.16876646876335144,-0.7039996385574341,-0.6898569464683533,1.3379724025726318,0.9154650568962097,-0.14743395149707794,0.3744157552719116,-2.287720203399658,-0.3652969002723694,-0.6947285532951355,0.6196050047874451,2.205636501312256,0,0,0,1],[0.41961976885795593,-0.8943461775779724,-0.15512743592262268,0.6213030219078064,0.8480913043022156,0.32538437843322754,0.41817033290863037,-2.437807559967041,-0.32351309061050415,-0.3070346415042877,0.8950245380401611,1.4984049797058105,0,0,0,1],[0.6455091238021851,0.35621118545532227,-0.6755974292755127,-0.8073362708091736,0.4626675546169281,-0.8861744403839111,-0.025176391005516052,-1.9180347919464111,-0.6076651811599731,-0.2963252365589142,-0.7368407845497131,1.0079442262649536,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.36":[[0.6435074210166931,-0.564024806022644,0.5174691081047058,1.8332128524780273,0.7618484497070312,0.5373637676239014,-0.36170005798339844,-2.053727388381958,-0.07406136393547058,0.6269897222518921,0.7754989862442017,2.409560203552246,0,0,0,1],[-0.3188154995441437,0.5581857562065125,0.766019344329834,1.7844997644424438,0.9351692199707031,0.05366191267967224,0.35011282563209534,-2.0058391094207764,0.15432190895080566,0.8279789090156555,-0.5391064286231995,2.4789130687713623,0,0,0,1],[-0.6245855093002319,0.6439010500907898,0.4419102668762207,2.428528070449829,0.658668041229248,0.13031688332557678,0.7410628795623779,-1.9447180032730103,0.4195827841758728,0.7539291381835938,-0.5055109262466431,3.4527761936187744,0,0,0,1],[-0.900312602519989,0.4349096417427063,-0.01706075668334961,2.5706138610839844,0.16406157612800598,0.37541085481643677,0.9122229814529419,-1.915961742401123,0.40313947200775146,0.8184866309165955,-0.40933892130851746,3.6191413402557373,0,0,0,1],[0.8081582188606262,-0.5772204399108887,-0.11703777313232422,1.9757983684539795,0.5887464880943298,0.7971739768981934,0.13375981152057648,-1.0559616088867188,0.016090407967567444,-0.1770045906305313,0.9840786457061768,3.360708713531494,0,0,0,1],[0.8079063296318054,-0.40912550687789917,-0.4241517186164856,1.5605559349060059,0.5555689334869385,0.7688182592391968,0.31664180755615234,-0.4824882745742798,0.19654911756515503,-0.49146217107772827,0.8484301567077637,3.23337459564209,0,0,0,1],[0.7880897521972656,-0.4310143291950226,-0.4394795894622803,1.1662191152572632,0.5915520191192627,0.7277460694313049,0.34706225991249084,0.2585393786430359,0.17024052143096924,-0.5334908962249756,0.8284962177276611,2.7596771717071533,0,0,0,1],[-0.8787643909454346,0.4566757082939148,-0.13863392174243927,2.59138822555542,-0.06806696951389313,-0.40743908286094666,-0.9106922149658203,-2.859795570373535,-0.4723760187625885,-0.7908477783203125,0.38912785053253174,3.0586726665496826,0,0,0,1],[-0.8898960947990417,0.4212656021118164,-0.17498266696929932,2.896418333053589,0.07668673992156982,-0.23997949063777924,-0.9677442908287048,-3.131938934326172,-0.4496697783470154,-0.8746111392974854,0.181251659989357,2.5304369926452637,0,0,0,1],[-0.9140486717224121,0.37943071126937866,-0.14333853125572205,3.305238962173462,0.09624232351779938,-0.14041075110435486,-0.9854045510292053,-3.3648290634155273,-0.39401909708976746,-0.9145035743713379,0.09182526916265488,1.6816635131835938,0,0,0,1],[0.5848609805107117,-0.444918155670166,-0.6782224178314209,1.7680596113204956,0.7964233756065369,0.15646883845329285,0.5841463804244995,-1.9931317567825317,-0.15377667546272278,-0.8817967176437378,0.4458557367324829,2.4667859077453613,0,0,0,1],[0.8825648427009583,-0.3547181189060211,-0.30863338708877563,1.8081722259521484,0.46920663118362427,0.6219776272773743,0.62688809633255,-1.5581926107406616,-0.030405528843402863,-0.6980822682380676,0.7153717279434204,2.0195393562316895,0,0,0,1],[0.6950414776802063,-0.718948483467102,0.005535244941711426,1.4470704793930054,0.6865254640579224,0.6659438610076904,0.2918927073478699,-0.9250215888023376,-0.21354199945926666,-0.19907742738723755,0.9564350843429565,1.308894157409668,0,0,0,1],[0.1558741331100464,0.908399224281311,-0.38796138763427734,0.2986142635345459,0.8490586280822754,0.07749465107917786,0.522583544254303,0.13876444101333618,0.5047794580459595,-0.4108593463897705,-0.7592048645019531,0.9908857345581055,0,0,0,1],[0.1653694212436676,-0.7133387923240662,-0.6810293197631836,1.352326512336731,0.9176685810089111,-0.14167767763137817,0.371229887008667,-2.2959725856781006,-0.36129942536354065,-0.6863493323326111,0.6311794519424438,2.169578790664673,0,0,0,1],[0.41664615273475647,-0.8978080749511719,-0.14264309406280518,0.6261498928070068,0.8496413230895996,0.32878363132476807,0.4123237729072571,-2.440200090408325,-0.3232889771461487,-0.2929885983467102,0.8998011350631714,1.4708774089813232,0,0,0,1],[0.6563470363616943,0.35186585783958435,-0.6673824787139893,-0.8080195188522339,0.456540584564209,-0.8894784450531006,-0.019970715045928955,-1.9149973392486572,-0.6006491184234619,-0.2915792763233185,-0.7444475293159485,1.0028539896011353,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.4":[[0.6444069743156433,-0.5669155120849609,0.5131730437278748,1.846867561340332,0.7612183094024658,0.5393903255462646,-0.36000654101371765,-2.0618977546691895,-0.07270732522010803,0.6226274371147156,0.7791333198547363,2.374415874481201,0,0,0,1],[-0.31770503520965576,0.5560616254806519,0.7680230736732483,1.7978266477584839,0.9358984231948853,0.05390442907810211,0.34812161326408386,-2.013794422149658,0.1521771103143692,0.829391360282898,-0.5375428795814514,2.443387985229492,0,0,0,1],[-0.6246308088302612,0.6420986652374268,0.4444616436958313,2.4393534660339355,0.6602617502212524,0.13031747937202454,0.7396432161331177,-1.9523677825927734,0.4170026481151581,0.7554647922515869,-0.5053533911705017,3.418881893157959,0,0,0,1],[-0.8943119049072266,0.4465029537677765,-0.02900928258895874,2.5810415744781494,0.1563033163547516,0.37249666452407837,0.9147763252258301,-1.9236114025115967,0.41925618052482605,0.813560962677002,-0.40291815996170044,3.585585832595825,0,0,0,1],[0.8095719218254089,-0.5755233764648438,-0.11561742424964905,1.9883166551589966,0.5866543054580688,0.8001850843429565,0.12466442584991455,-1.0630065202713013,0.020767956972122192,-0.16875231266021729,0.9854398965835571,3.3243770599365234,0,0,0,1],[0.8094432950019836,-0.4078485071659088,-0.42244791984558105,1.5742950439453125,0.5517613887786865,0.7744261026382446,0.3095548152923584,-0.48736709356307983,0.2009029984474182,-0.4836573004722595,0.8518884778022766,3.202979564666748,0,0,0,1],[0.7896828055381775,-0.42988190054893494,-0.43772581219673157,1.1811890602111816,0.5880399942398071,0.7338076233863831,0.3401997685432434,0.25906574726104736,0.17496061325073242,-0.5260498523712158,0.8322624564170837,2.736804962158203,0,0,0,1],[-0.8781757950782776,0.45649439096450806,-0.14289630949497223,2.601776123046875,-0.06891773641109467,-0.41636645793914795,-0.9065811634063721,-2.8682541847229004,-0.47334662079811096,-0.7862896919250488,0.3971037268638611,3.026479959487915,0,0,0,1],[-0.8890964388847351,0.41995561122894287,-0.1820547729730606,2.9066851139068604,0.07401233166456223,-0.2606050670146942,-0.9626043438911438,-3.146360397338867,-0.45169568061828613,-0.8693225979804993,0.2006213515996933,2.501288890838623,0,0,0,1],[-0.9133684635162354,0.3766906261444092,-0.15447098016738892,3.314234495162964,0.09311062097549438,-0.17608922719955444,-0.9799606800079346,-3.3992667198181152,-0.39634278416633606,-0.9094484448432922,0.12576061487197876,1.657647728919983,0,0,0,1],[0.5862003564834595,-0.4402099847793579,-0.6801357269287109,1.7814586162567139,0.7956228852272034,0.15444768965244293,0.5857730507850647,-2.001107931137085,-0.15281780064105988,-0.8845118284225464,0.44077837467193604,2.4311418533325195,0,0,0,1],[0.882856011390686,-0.3620375096797943,-0.2991564869880676,1.8241993188858032,0.4681016206741333,0.6267557740211487,0.6229430437088013,-1.5673738718032837,-0.03803074359893799,-0.6900045871734619,0.7228052616119385,1.9829694032669067,0,0,0,1],[0.6914995908737183,-0.7216323614120483,0.032800108194351196,1.4556463956832886,0.6874611973762512,0.6713431477546692,0.2769392728805542,-0.9293387532234192,-0.22186847031116486,-0.1689545214176178,0.9603273868560791,1.2805471420288086,0,0,0,1],[0.15891316533088684,0.9028072953224182,-0.3996075689792633,0.3029029369354248,0.8600817918777466,0.07214701175689697,0.5050286650657654,0.14307206869125366,0.4847738444805145,-0.42395082116127014,-0.7650226354598999,1.0106573104858398,0,0,0,1],[0.1619422435760498,-0.7227976322174072,-0.671817421913147,1.3670722246170044,0.9199147820472717,-0.135800302028656,0.36785194277763367,-2.304450273513794,-0.3571155071258545,-0.6775854229927063,0.6429202556610107,2.132568359375,0,0,0,1],[0.4136005938053131,-0.9011620283126831,-0.1297764778137207,0.6312665343284607,0.851241946220398,0.3321848511695862,0.40625178813934326,-2.442694664001465,-0.32298895716667175,-0.2784970998764038,0.9044984579086304,1.4427886009216309,0,0,0,1],[0.6673364639282227,0.347242534160614,-0.6588513255119324,-0.8082605004310608,0.4500412046909332,-0.8928860425949097,-0.014751389622688293,-1.912058711051941,-0.5934012532234192,-0.2866658866405487,-0.7521286606788635,0.9979140758514404,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.44":[[0.6452486515045166,-0.5696202516555786,0.5091041326522827,1.859748363494873,0.7606265544891357,0.5412933230400085,-0.3583974838256836,-2.0696053504943848,-0.0714242160320282,0.6184936165809631,0.7825369834899902,2.3412628173828125,0,0,0,1],[-0.31665146350860596,0.5540521144866943,0.7699081301689148,1.810400128364563,0.936581015586853,0.05413311719894409,0.3462453782558441,-2.0212998390197754,0.15016041696071625,0.8307200074195862,-0.5360559821128845,2.4098734855651855,0,0,0,1],[-0.6246659755706787,0.6403921842575073,0.44686758518218994,2.4495604038238525,0.6617595553398132,0.1303180456161499,0.7383034229278564,-1.9595850706100464,0.41456878185272217,0.7569114565849304,-0.5051907300949097,3.3869011402130127,0,0,0,1],[-0.8883661031723022,0.4573739469051361,-0.040185749530792236,2.590871810913086,0.14891698956489563,0.36982131004333496,0.9170912504196167,-1.93082857131958,0.4343152642250061,0.8087279200553894,-0.39664730429649353,3.553924322128296,0,0,0,1],[0.8108924031257629,-0.5739214420318604,-0.11431863903999329,2.0001277923583984,0.5846540927886963,0.8029394149780273,0.11605418473482132,-1.0696582794189453,0.025184795260429382,-0.1609441637992859,0.9866421222686768,3.290104866027832,0,0,0,1],[0.8108732104301453,-0.40663087368011475,-0.42087650299072266,1.5872585773468018,0.5481433868408203,0.7796425223350525,0.3028152287006378,-0.49203741550445557,0.2049989104270935,-0.4762449860572815,0.8550825715065002,3.1743245124816895,0,0,0,1],[0.7911663055419922,-0.42879825830459595,-0.43610671162605286,1.1953262090682983,0.584697425365448,0.7394556403160095,0.3336690664291382,0.25942325592041016,0.1794045865535736,-0.5189776420593262,0.8357489109039307,2.715294361114502,0,0,0,1],[-0.8776258230209351,0.4562711715698242,-0.1469314843416214,2.6115663051605225,-0.06970672309398651,-0.42474815249443054,-0.9026241302490234,-2.8762290477752686,-0.47425004839897156,-0.7819241285324097,0.4045751690864563,2.9960994720458984,0,0,0,1],[-0.8883630037307739,0.4185525178909302,-0.18874390423297882,2.9163262844085693,0.07150115072727203,-0.27995193004608154,-0.9573478102684021,-3.159933567047119,-0.45353931188583374,-0.8639676570892334,0.2187720537185669,2.4738242626190186,0,0,0,1],[-0.9127669930458069,0.37369129061698914,-0.1649562269449234,3.322514057159424,0.09017070382833481,-0.20953711867332458,-0.9736343026161194,-3.431615114212036,-0.3984028100967407,-0.9035754799842834,0.15756264328956604,1.6353797912597656,0,0,0,1],[0.5874587893486023,-0.4357569217681885,-0.6819152235984802,1.7941007614135742,0.7948691248893738,0.15253150463104248,0.5872965455055237,-2.0086333751678467,-0.15190492570400238,-0.8870456218719482,0.43597573041915894,2.3975155353546143,0,0,0,1],[0.88304603099823,-0.36884206533432007,-0.2901475727558136,1.8393244743347168,0.4671027660369873,0.6312369108200073,0.6191567182540894,-1.5760400295257568,-0.045219264924526215,-0.6822723746299744,0.7296983003616333,1.9484851360321045,0,0,0,1],[0.6879660487174988,-0.7233774065971375,0.05855277180671692,1.4638445377349854,0.6884661912918091,0.6760265827178955,0.2626829743385315,-0.9334431290626526,-0.2296021431684494,-0.14040511846542358,0.9631039500236511,1.253934383392334,0,0,0,1],[0.16090932488441467,0.8973497152328491,-0.410940557718277,0.30831360816955566,0.8701362013816833,0.06752428412437439,0.48816317319869995,0.14644914865493774,0.465801477432251,-0.43612435460090637,-0.769950807094574,1.0296497344970703,0,0,0,1],[0.15876734256744385,-0.7315964698791504,-0.6629930138587952,1.3809908628463745,0.9220172762870789,-0.13028886914253235,0.3645668029785156,-2.312452554702759,-0.35309624671936035,-0.6691721081733704,0.6538589596748352,2.097661018371582,0,0,0,1],[0.41073620319366455,-0.9041385650634766,-0.11759841442108154,0.6362280249595642,0.8527594804763794,0.33530884981155396,0.4004615843296051,-2.4450862407684326,-0.32264092564582825,-0.264767050743103,0.908735990524292,1.4164459705352783,0,0,0,1],[0.6775685548782349,0.3427318036556244,-0.6507193446159363,-0.8080537915229797,0.4437199831008911,-0.8961104154586792,-0.009950190782546997,-1.9094600677490234,-0.5865265130996704,-0.2819952368736267,-0.7592530250549316,0.993503987789154,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.48":[[0.6459792256355286,-0.5719682574272156,0.5055327415466309,1.87101411819458,0.7601112723350525,0.5429505705833435,-0.35698115825653076,-2.0763463973999023,-0.0702974796295166,0.6148635149002075,0.7854942083358765,2.3122663497924805,0,0,0,1],[-0.31572526693344116,0.5522902011871338,0.7715526819229126,1.8213986158370972,0.9371737241744995,0.054332926869392395,0.3446062207221985,-2.027864694595337,0.14840185642242432,0.8318795561790466,-0.5347462296485901,2.380559206008911,0,0,0,1],[-0.6246907711029053,0.6388951539993286,0.4489710330963135,2.458484172821045,0.6630648970603943,0.13031844794750214,0.7371311187744141,-1.9658982753753662,0.4124402105808258,0.7581756711006165,-0.5050376057624817,3.3589251041412354,0,0,0,1],[-0.8829420208930969,0.4668252170085907,-0.04988029599189758,2.5994653701782227,0.14240530133247375,0.3675411343574524,0.9190399050712585,-1.9371416568756104,0.4473641514778137,0.8043554425239563,-0.39099591970443726,3.5262272357940674,0,0,0,1],[0.8120368719100952,-0.5725203156471252,-0.11321523785591125,2.010460376739502,0.5828835964202881,0.8052794337272644,0.10850035399198532,-1.0754809379577637,0.02905106544494629,-0.15409760177135468,0.9876286387443542,3.2601308822631836,0,0,0,1],[0.8121078610420227,-0.4055561125278473,-0.4195307791233063,1.5985990762710571,0.544958233833313,0.7841455936431885,0.29687824845314026,-0.49617671966552734,0.2085721641778946,-0.46972376108169556,0.8578214049339294,3.149275779724121,0,0,0,1],[0.7924484610557556,-0.4278388023376465,-0.43471890687942505,1.20770263671875,0.5817502737045288,0.7443389892578125,0.32791247963905334,0.2596242427825928,0.18328426778316498,-0.5127513408660889,0.8387451171875,2.696531057357788,0,0,0,1],[-0.8771491050720215,0.4560338854789734,-0.15047141909599304,2.620121955871582,-0.07038576155900955,-0.43204617500305176,-0.899100661277771,-2.8832008838653564,-0.47503119707107544,-0.7780544757843018,0.41106751561164856,2.9695186614990234,0,0,0,1],[-0.8877383470535278,0.41719093918800354,-0.19460515677928925,2.9247233867645264,0.06931547820568085,-0.29677820205688477,-0.9524274468421936,-3.1717801094055176,-0.45509886741638184,-0.8589959740638733,0.23454391956329346,2.4498281478881836,0,0,0,1],[-0.9122729301452637,0.37073662877082825,-0.174100860953331,3.329589605331421,0.08761485666036606,-0.23859132826328278,-0.967159628868103,-3.4597909450531006,-0.40010055899620056,-0.8975681066513062,0.18517868220806122,1.616208553314209,0,0,0,1],[0.5885552763938904,-0.43185311555862427,-0.6834514141082764,1.8051596879959106,0.7942112684249878,0.1508481353521347,0.5886198878288269,-2.015216112136841,-0.1511000096797943,-0.889240026473999,0.43176501989364624,2.3681039810180664,0,0,0,1],[0.8831452131271362,-0.37471187114715576,-0.28221598267555237,1.85255765914917,0.46626436710357666,0.6351339817047119,0.6157941818237305,-1.5836232900619507,-0.05150049179792404,-0.6754227876663208,0.7356301546096802,1.9183354377746582,0,0,0,1],[0.6847261190414429,-0.7242766618728638,0.08108007907867432,1.471102237701416,0.6894418597221375,0.6797919273376465,0.2501060366630554,-0.9370591640472412,-0.23626358807086945,-0.11535409092903137,0.9648175239562988,1.230757474899292,0,0,0,1],[0.1619567573070526,0.8924387693405151,-0.4210977554321289,0.3141348361968994,0.8786433935165405,0.06382367014884949,0.4731937050819397,0.14884793758392334,0.44917216897010803,-0.44663161039352417,-0.7737984657287598,1.0464895963668823,0,0,0,1],[0.15603800117969513,-0.7391903400421143,-0.6551717519760132,1.3931713104248047,0.923842191696167,-0.12549689412117004,0.36161601543426514,-2.319455862045288,-0.3495250940322876,-0.6617010235786438,0.6633128523826599,2.0671350955963135,0,0,0,1],[0.40823912620544434,-0.9065921902656555,-0.10691976547241211,0.6406779289245605,0.8540921211242676,0.33797240257263184,0.3953498601913452,-2.447211265563965,-0.3222852051258087,-0.25271645188331604,0.9122864007949829,1.3935256004333496,0,0,0,1],[0.6864052414894104,0.33866971731185913,-0.6435455679893494,-0.807523250579834,0.4380435347557068,-0.8989347815513611,-0.005852863192558289,-1.9073302745819092,-0.5804875493049622,-0.2778834402561188,-0.7653853893280029,0.9898333549499512,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.52":[[0.6465547680854797,-0.5738171339035034,0.5026935935020447,1.8799428939819336,0.7597039937973022,0.5442594289779663,-0.35585278272628784,-2.0816893577575684,-0.06940138339996338,0.6119767427444458,0.787824809551239,2.2892849445343018,0,0,0,1],[-0.3149878978729248,0.5508908033370972,0.7728533744812012,1.830116629600525,0.9376407861709595,0.05449104309082031,0.34330815076828003,-2.0330684185028076,0.1470116227865219,0.8327965140342712,-0.5337017774581909,2.3573250770568848,0,0,0,1],[-0.6247062683105469,0.6377052068710327,0.4506377875804901,2.4655542373657227,0.6640965938568115,0.13031859695911407,0.7362017631530762,-1.9709028005599976,0.41075319051742554,0.7591765522956848,-0.5049086809158325,3.33674955368042,0,0,0,1],[-0.8784964084625244,0.4742753207683563,-0.05750730633735657,2.6062729358673096,0.13721218705177307,0.36577412486076355,0.9205336570739746,-1.9421461820602417,0.4576212167739868,0.8007944822311401,-0.38640761375427246,3.5042724609375,0,0,0,1],[0.8129370212554932,-0.5714098811149597,-0.1123623251914978,2.018651247024536,0.5814663171768188,0.8070882558822632,0.10249894857406616,-1.080099105834961,0.032117217779159546,-0.14866000413894653,0.9883668422698975,3.236375570297241,0,0,0,1],[0.813075840473175,-0.404697984457016,-0.4184832274913788,1.607588768005371,0.5424200892448425,0.7876750230789185,0.2921454906463623,-0.49949365854263306,0.21139782667160034,-0.4645299017429352,0.8599553108215332,3.129432201385498,0,0,0,1],[0.7934544086456299,-0.42707082629203796,-0.43363770842552185,1.2175194025039673,0.579399049282074,0.7481715679168701,0.3233211636543274,0.2597091794013977,0.1863541305065155,-0.5077894926071167,0.8410840034484863,2.6816935539245605,0,0,0,1],[-0.87677401304245,0.45581817626953125,-0.15328408777713776,2.6268980503082275,-0.07091643661260605,-0.43780842423439026,-0.8962669372558594,-2.8887243270874023,-0.4756440222263336,-0.7749535441398621,0.4161844849586487,2.948446273803711,0,0,0,1],[-0.8872546553611755,0.41602274775505066,-0.19925597310066223,2.9313554763793945,0.06759113818407059,-0.3100474178791046,-0.9483152031898499,-3.18115234375,-0.45629969239234924,-0.8548654913902283,0.246971994638443,2.4308269023895264,0,0,0,1],[-0.9119030833244324,0.36817535758018494,-0.1813240498304367,3.335088014602661,0.08560188859701157,-0.261467307806015,-0.961408793926239,-3.4820404052734375,-0.4013773798942566,-0.8922340273857117,0.2069167047739029,1.6012158393859863,0,0,0,1],[0.5894216895103455,-0.4287531077861786,-0.6846553087234497,1.813925862312317,0.7936903238296509,0.14950919151306152,0.5896629691123962,-2.0204341411590576,-0.15045765042304993,-0.8909646272659302,0.42842116951942444,2.344792604446411,0,0,0,1],[0.8831795454025269,-0.3793086111545563,-0.27589672803878784,1.8630491495132446,0.46562278270721436,0.638206958770752,0.613096296787262,-1.5896365642547607,-0.056473508477211,-0.6699380874633789,0.7402660846710205,1.8944473266601562,0,0,0,1],[0.6820613741874695,-0.7245734333992004,0.0989236980676651,1.476914405822754,0.6902779340744019,0.6825546026229858,0.24007350206375122,-0.9399441480636597,-0.24147173762321472,-0.09546008706092834,0.9657012224197388,1.21245276927948,0,0,0,1],[0.16232237219810486,0.8884594440460205,-0.42929157614707947,0.31947290897369385,0.8851891756057739,0.06112009286880493,0.4611985385417938,0.1503760814666748,0.43599456548690796,-0.45486703515052795,-0.7765334844589233,1.0599638223648071,0,0,0,1],[0.15390720963478088,-0.7451397180557251,-0.6489062309265137,1.4028294086456299,0.9252785444259644,-0.12171869724988937,0.35922688245773315,-2.3250091075897217,-0.3466583788394928,-0.6557067632675171,0.6707285046577454,2.0429441928863525,0,0,0,1],[0.4062662422657013,-0.90843665599823,-0.09844058752059937,0.6442795395851135,0.8551512956619263,0.34003746509552,0.39126822352409363,-2.448918342590332,-0.32196909189224243,-0.24314069747924805,0.9149965047836304,1.375436782836914,0,0,0,1],[0.6933311223983765,0.3353734314441681,-0.6378216743469238,-0.8068680167198181,0.43344882130622864,-0.9011741280555725,-0.0026751458644866943,-1.9057385921478271,-0.5756855607032776,-0.27460816502571106,-0.7701795101165771,0.9870409965515137,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.56":[[0.6469330787658691,-0.5750330090522766,0.5008139610290527,1.8858418464660645,0.7594359517097473,0.5451218485832214,-0.35510432720184326,-2.085218667984009,-0.0688079297542572,0.6100649237632751,0.7893580794334412,2.274101972579956,0,0,0,1],[-0.3144993185997009,0.5499649047851562,0.7737112641334534,1.8358769416809082,0.9379481077194214,0.05459563434123993,0.34245115518569946,-2.036505937576294,0.14609485864639282,0.8334013819694519,-0.5330088138580322,2.3419744968414307,0,0,0,1],[-0.6247146129608154,0.6369176506996155,0.45173853635787964,2.470224380493164,0.6647767424583435,0.13031883537769318,0.7355876564979553,-1.9742085933685303,0.40963873267173767,0.7598373889923096,-0.5048200488090515,3.322096824645996,0,0,0,1],[-0.8754891157150269,0.479176789522171,-0.06251770257949829,2.610769271850586,0.13376638293266296,0.36462679505348206,0.9214956760406494,-1.9454519748687744,0.4643550515174866,0.7983962893486023,-0.38332444429397583,3.4897656440734863,0,0,0,1],[0.8135281801223755,-0.5706764459609985,-0.11180925369262695,2.0240633487701416,0.5805231928825378,0.808260977268219,0.09852736443281174,-1.083150863647461,0.03414374589920044,-0.14506253600120544,0.9888332486152649,3.2206814289093018,0,0,0,1],[0.8137102127075195,-0.40412813425064087,-0.4178003966808319,1.6135284900665283,0.5407367944717407,0.789987325668335,0.2890057861804962,-0.5017017722129822,0.21326148509979248,-0.4610866606235504,0.8613470792770386,3.116325855255127,0,0,0,1],[0.7941141128540039,-0.4265599250793457,-0.4329325556755066,1.224008321762085,0.5778382420539856,0.7506850361824036,0.32027411460876465,0.25972980260849,0.18837976455688477,-0.5044987201690674,0.8426116704940796,2.671905994415283,0,0,0,1],[-0.8765277862548828,0.45566242933273315,-0.1551453024148941,2.6313726902008057,-0.07126365602016449,-0.4416046738624573,-0.894375205039978,-2.8923721313476562,-0.47604602575302124,-0.7728885412216187,0.4195510149002075,2.934521198272705,0,0,0,1],[-0.8869409561157227,0.4152078330516815,-0.20233020186424255,2.9357261657714844,0.06645583361387253,-0.31878015398979187,-0.9454962015151978,-3.187335729598999,-0.45707616209983826,-0.8520452976226807,0.2551462948322296,2.418281078338623,0,0,0,1],[-0.9116693735122681,0.36637672781944275,-0.18608111143112183,3.338667869567871,0.08427879214286804,-0.27649998664855957,-0.9573113918304443,-3.4966983795166016,-0.40218785405158997,-0.8884343504905701,0.2211988866329193,1.5914068222045898,0,0,0,1],[0.5899926424026489,-0.42670226097106934,-0.6854444146156311,1.8197181224822998,0.7933468222618103,0.14862209558486938,0.5903491973876953,-2.023881196975708,-0.15003114938735962,-0.892096757888794,0.42620885372161865,2.3293912410736084,0,0,0,1],[0.8831808567047119,-0.38231828808784485,-0.271706759929657,1.8699820041656494,0.46521055698394775,0.6402292251586914,0.6112983226776123,-1.5936098098754883,-0.05975593626499176,-0.6662877798080444,0.74329674243927,1.878669023513794,0,0,0,1],[0.6802546381950378,-0.7245683073997498,0.11070196330547333,1.4807833433151245,0.6908612847328186,0.6842713952064514,0.2334168255329132,-0.9418587684631348,-0.24487654864788055,-0.08230304718017578,0.9660548567771912,1.2003904581069946,0,0,0,1],[0.16233813762664795,0.8857898712158203,-0.43476760387420654,0.32335007190704346,0.8894162774085999,0.059446871280670166,0.4532158374786377,0.15120387077331543,0.42729973793029785,-0.46026358008384705,-0.7781851887702942,1.0689187049865723,0,0,0,1],[0.15251529216766357,-0.7490361928939819,-0.6447356939315796,1.4092124700546265,0.9262226223945618,-0.11923303455114365,0.3576241731643677,-2.328678846359253,-0.3447471857070923,-0.6517118215560913,0.675589382648468,2.0269641876220703,0,0,0,1],[0.4049660563468933,-0.9096070528030396,-0.09283220767974854,0.6466960310935974,0.8558525443077087,0.3413788676261902,0.38855764269828796,-2.4500577449798584,-0.32174378633499146,-0.23680320382118225,0.9167361259460449,1.3635237216949463,0,0,0,1],[0.6978679299354553,0.33315908908843994,-0.6340233087539673,-0.8063212037086487,0.4303678870201111,-0.9026534557342529,-0.0006107985973358154,-1.9047350883483887,-0.5725066661834717,-0.2724369168281555,-0.7733136415481567,0.9852515459060669,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]],"0.6":[[0.6470701694488525,-0.5754731893539429,0.5001307725906372,1.8879835605621338,0.7593386173248291,0.5454344749450684,-0.35483211278915405,-2.0865001678466797,-0.06859225034713745,0.6093699932098389,0.7899134755134583,2.268590211868286,0,0,0,1],[-0.3143215477466583,0.549628496170044,0.7740224599838257,1.837968349456787,0.9380592107772827,0.05463351309299469,0.3421400189399719,-2.0377542972564697,0.1457623988389969,0.8336207866668701,-0.5327566862106323,2.3364017009735107,0,0,0,1],[-0.6247172355651855,0.6366314888000488,0.45213812589645386,2.471919536590576,0.6650233268737793,0.13031883537769318,0.7353644371032715,-1.9754092693328857,0.4092341363430023,0.7600772380828857,-0.5047870874404907,3.316777229309082,0,0,0,1],[-0.8743836879730225,0.4809519648551941,-0.06433072686195374,2.612401247024536,0.13251280784606934,0.36421409249305725,0.9218395948410034,-1.9466526508331299,0.4667908549308777,0.797516942024231,-0.38219499588012695,3.484498977661133,0,0,0,1],[0.8137420415878296,-0.5704102516174316,-0.11161059141159058,2.0260283946990967,0.5801794528961182,0.8086820840835571,0.09708429872989655,-1.0842597484588623,0.03487949073314667,-0.14375557005405426,0.9889984130859375,3.2149839401245117,0,0,0,1],[0.8139392733573914,-0.4039207398891449,-0.4175543785095215,1.615684986114502,0.5401244163513184,0.7908226847648621,0.2878634035587311,-0.5025076866149902,0.21393732726573944,-0.45983433723449707,0.8618488311767578,3.1115686893463135,0,0,0,1],[0.7943523526191711,-0.42637380957603455,-0.4326784014701843,1.2263647317886353,0.5772702097892761,0.7515935897827148,0.3191652297973633,0.2597290277481079,0.1891145259141922,-0.5033015608787537,0.8431627750396729,2.668355941772461,0,0,0,1],[-0.876438558101654,0.4556029140949249,-0.15582174062728882,2.6329967975616455,-0.07138869911432266,-0.44298055768013,-0.8936841487884521,-2.8936963081359863,-0.47619134187698364,-0.7721357345581055,0.42077046632766724,2.9294652938842773,0,0,0,1],[-0.8868278861045837,0.41490310430526733,-0.2034466564655304,2.9373104572296143,0.06604477763175964,-0.32194337248802185,-0.944452166557312,-3.1895790100097656,-0.45735469460487366,-0.8510036468505859,0.25810641050338745,2.4137279987335205,0,0,0,1],[-0.9115864038467407,0.3657025098800659,-0.1878049373626709,3.339956521987915,0.08380022644996643,-0.281940221786499,-0.955764889717102,-3.50201153755188,-0.4024755656719208,-0.8870010375976562,0.22636713087558746,1.587864637374878,0,0,0,1],[0.5901997089385986,-0.42595720291137695,-0.6857293844223022,1.8218212127685547,0.7932220697402954,0.1482996940612793,0.5905978083610535,-2.025132894515991,-0.1498759388923645,-0.89250648021698,0.4254050850868225,2.3238003253936768,0,0,0,1],[0.8831771612167358,-0.3834053874015808,-0.270182728767395,1.8724992275238037,0.46506309509277344,0.640961766242981,0.6106425523757935,-1.595052719116211,-0.06094682961702347,-0.6649575233459473,0.7443903684616089,1.8729418516159058,0,0,0,1],[0.6795898675918579,-0.7245266437530518,0.11497502028942108,1.482193946838379,0.6910788416862488,0.6848732233047485,0.2309950292110443,-0.9425559043884277,-0.24610529839992523,-0.07752501964569092,0.9661377668380737,1.1960175037384033,0,0,0,1],[0.16229969263076782,0.8848129510879517,-0.4367668032646179,0.3248271942138672,0.8909311890602112,0.058861613273620605,0.4503074884414673,0.15146803855895996,0.42414671182632446,-0.4622139036655426,-0.7787539958953857,1.0721782445907593,0,0,0,1],[0.15201331675052643,-0.750443696975708,-0.643215537071228,1.4115303754806519,0.9265643358230591,-0.11833256483078003,0.3570377230644226,-2.3300116062164307,-0.3440501093864441,-0.6502550840377808,0.6773462295532227,2.0211634635925293,0,0,0,1],[0.4044948220252991,-0.9100221395492554,-0.09079515933990479,0.6475811004638672,0.856107234954834,0.3418615460395813,0.38757088780403137,-2.4504737854003906,-0.32165876030921936,-0.23450079560279846,0.9173576831817627,1.359205961227417,0,0,0,1],[0.6995072364807129,0.33234813809394836,-0.6326408982276917,-0.8060991764068604,0.4292403757572174,-0.9031903147697449,0.00013169646263122559,-1.9043800830841064,-0.5713512301445007,-0.27164706587791443,-0.7744452953338623,0.9846116304397583,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]]}},"inverseBindPoses":[[1,0.000006192593446030514,0.0000016506993461007369,0.3401612341403961,-0.000006200147254276089,0.8696072697639465,0.49374428391456604,-0.6332163214683533,0.0000016220974430325441,-0.49374428391456604,0.8696072101593018,-2.092196226119995,0,0,0,1],[0.9999974966049194,-0.001690975041128695,-0.0014704522909596562,0.34269827604293823,0.0016909493133425713,0.1388140171766281,0.9903170466423035,-2.1117289066314697,-0.0014704818604514003,-0.9903171062469482,0.13881650567054749,-0.7043722867965698,0,0,0,1],[0.9999998807907104,-1.0349356216465821e-7,-5.275655912129196e-9,0.33604949712753296,5.434556360484066e-9,0.00006459653377532959,0.9999998807907104,-3.345902919769287,-1.0360928826003146e-7,-1.0000001192092896,0.00006462633609771729,-0.23158760368824005,0,0,0,1],[0.9993820190429688,-0.03423922881484032,-0.00794508308172226,0.3562571704387665,0.0002368949499214068,-0.21947410702705383,0.9756183624267578,-3.530320644378662,-0.03514815866947174,-0.9750175476074219,-0.2193303108215332,0.544870913028717,0,0,0,1],[0.6821043491363525,-0.5816630721092224,0.44317150115966797,-1.9520394802093506,0.5816627144813538,0.06428665667772293,-0.810885488986969,2.1427414417266846,0.4431723356246948,0.8108852505683899,0.382182240486145,-1.2175318002700806,0,0,0,1],[0.778720498085022,-0.46604621410369873,0.4199937582015991,-1.9675297737121582,0.46604636311531067,-0.01843882165849209,-0.88456791639328,1.7072092294692993,0.41999396681785583,0.8845680356025696,0.20284079015254974,-0.7301048040390015,0,0,0,1],[0.7994319796562195,-0.468620628118515,0.37590253353118896,-1.9271445274353027,0.41061797738075256,-0.030510440468788147,-0.9112967252731323,0.8665889501571655,0.4385215938091278,0.8828722834587097,0.16803334653377533,-0.7013854384422302,0,0,0,1],[0.7825813293457031,0.4821545481681824,-0.3938203454017639,2.367365598678589,-0.48215430974960327,0.06923879683017731,-0.873346209526062,2.0699241161346436,-0.3938196897506714,0.8733463287353516,0.28665757179260254,-1.143706202507019,0,0,0,1],[0.858269214630127,0.3730091154575348,-0.3524759113788605,2.361635684967041,-0.3730089068412781,-0.01831306889653206,-0.9276472330093384,1.6935110092163086,-0.35247522592544556,0.9276474714279175,0.12341787666082382,-0.6578379273414612,0,0,0,1],[0.8791053295135498,0.3756788969039917,-0.2933262288570404,2.3100545406341553,-0.3051074743270874,-0.029243454337120056,-0.951869010925293,0.8936766386032104,-0.3661743700504303,0.9262889623641968,0.08891407400369644,-0.6307705044746399,0,0,0,1],[1,-0.000001705669433249568,0.0000016839220506881247,0.3401581346988678,0.0000017060779100575019,0.013073861598968506,-0.9999145269393921,2.1790380477905273,0.0000016835075484777917,0.9999145269393921,0.013073980808258057,0.35687455534935,0,0,0,1],[0.9740064144134521,-0.16108378767967224,0.1592591106891632,-0.4375252425670624,0.16108344495296478,-0.0017553512006998062,-0.9869393110275269,1.71245539188385,0.15925946831703186,0.9869391918182373,0.02423832193017006,0.3164743185043335,0,0,0,1],[0.982950747013092,-0.13336357474327087,0.12657636404037476,-0.40488043427467346,0.13336345553398132,0.043215323239564896,-0.9901245832443237,0.7213154435157776,0.1265765279531479,0.990124523639679,0.06026449054479599,0.29938846826553345,0,0,0,1],[0.7392488121986389,0.5560553073883057,0.37988659739494324,0.1381569504737854,0.6261062622070312,-0.7752393484115601,-0.08363701403141022,-0.6106911301612854,0.24799615144729614,0.2996777296066284,-0.9212446212768555,-0.7931421995162964,0,0,0,1],[0.9740073084831238,0.16108092665672302,-0.1592567414045334,1.1001601219177246,-0.161081001162529,-0.0017550289630889893,-0.986939549446106,1.6028691530227661,-0.15925666689872742,0.9869396686553955,0.02423778548836708,0.20812968909740448,0,0,0,1],[0.9829513430595398,0.13336148858070374,-0.12657447159290314,1.0736008882522583,-0.13336139917373657,0.04321528598666191,-0.9901247024536133,0.630586564540863,-0.1265745759010315,0.9901248216629028,0.060263920575380325,0.2132779061794281,0,0,0,1],[0.7090227603912354,-0.5916455388069153,-0.38372188806533813,0.31546396017074585,-0.663862407207489,-0.7435400485992432,-0.08021817356348038,-1.0675750970840454,-0.23785185813903809,0.3116150200366974,-0.9199577569961548,-0.9453169107437134,0,0,0,1],[5.0590344358170114e-8,0.9999999403953552,-0.0004774821281898767,0.25212791562080383,-1.0000001192092896,1.2179273767287668e-7,-0.00023879119544290006,3.418456792831421,-0.00023879112268332392,0.0004774820990860462,0.9999998211860657,1.080428957939148,0,0,0,1]],"jointNameIndices":{"root hips":0,"spine":1,"head neck lower":2,"head neck upper":3,"arm left shouler":4,"arm left elbow":5,"arm left wrist":6,"arm right shoulder":7,"arm right elbow":8,"arm right wrist":9,"pelvis":10,"leg left thigh":11,"leg left knee":12,"leg left ankle":13,"leg right thigh":14,"leg right knee":15,"leg right ankle":16,"board":17}}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mixer = function () {
    function Mixer(numChannels) {
        _classCallCheck(this, Mixer);

        this.numChannels = numChannels;
        this.heap = []; // min heap for priority queue
        this.context = new (window.AudioContext || window.webkitAudioContext)();
    }

    _createClass(Mixer, [{
        key: "play",
        value: function play(_ref) {
            var buffer = _ref.buffer,
                priority = _ref.priority,
                loop = _ref.loop,
                volume = _ref.volume;

            if (this.heap.length == this.numChannels) {
                this._popHeap();
            }
            var source = this.context.createBufferSource();
            var gainNode = this.context.createGain();
            source.buffer = buffer;
            source.loop = loop === undefined ? false : loop;
            source.connect(gainNode);
            gainNode.gain.value = volume === undefined ? 1 : volume;
            gainNode.connect(this.context.destination);
            source.start(0);
            var soundDescriptor = { source: source, priority: priority || 0 };
            var idx = this._pushHeap(soundDescriptor);
            source.onended = this._removeSound(soundDescriptor);
            return {
                setVolume: function setVolume(volume) {
                    gainNode.gain.value = volume;
                }
            };
        }
    }, {
        key: "_removeSound",
        value: function _removeSound(soundDescriptor) {
            var _this = this;

            //swap with bottom of heap, pop bottom, then heapify down
            return function () {
                var idx = soundDescriptor.index;
                _this.heap[idx].source.onended = null;
                _this.heap[idx].source.stop();
                _this.heap[idx] = _this.heap[_this.heap.length - 1];
                _this.heap[idx].index = idx;
                _this.heap.pop();

                var temp = void 0;
                while (idx < _this.heap.length - 1 && (idx * 2 < _this.heap.length && _this.heap[idx].priority > _this.heap[idx * 2].priority || idx * 2 + 1 < _this.heap.length && _this.heap[idx].priority > _this.heap[idx * 2 + 1].priority)) {
                    temp = _this.heap[idx];
                    if (idx * 2 + 1 >= _this.heap.length || _this.heap[idx * 2].priority < _this.heap[idx * 2 + 1].priority) {
                        _this.heap[idx] = _this.heap[idx * 2];
                        _this.heap[idx].index = idx;
                        _this.heap[idx * 2] = temp;
                        _this.heap[idx * 2].index = idx;
                        idx = idx * 2;
                    } else {
                        _this.heap[idx] = _this.heap[idx * 2 + 1];
                        _this.heap[idx].index = idx;
                        _this.heap[idx * 2 + 1] = temp;
                        _this.heap[idx * 2 + 1].index = idx * 2 + 1;
                        idx = idx * 2 + 1;
                    }
                }
            };
        }
    }, {
        key: "_pushHeap",
        value: function _pushHeap(soundDescriptor) {
            // append to bottom of heap, then heapify up
            soundDescriptor.index = this.heap.push(soundDescriptor) - 1;
            var index = soundDescriptor.index;
            var parentIdx = Math.floor((index - 1) / 2);
            var temp = void 0;
            while (index !== 0 && this.heap[index].priority < this.heap[parentIdx].priority) {
                temp = this.heap[index];
                this.heap[index] = this.heap[parentIdx];
                this.heap[index].index = index;
                this.heap[parentIdx] = temp;
                this.heap[parentIdx].index = parentIdx;
                index = parentIdx;
                parentIdx = Math.floor((index - 1) / 2);
            }
            return index;
        }
    }, {
        key: "_popHeap",
        value: function _popHeap() {
            this._removeSound({ index: 0 })();
        }
    }]);

    return Mixer;
}();

exports.default = new Mixer(5);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COURSE_LENGTH = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createSlope = createSlope;

var _balloon = __webpack_require__(22);

var _balloon2 = _interopRequireDefault(_balloon);

var _tree_pool = __webpack_require__(23);

var _tree_pool2 = _interopRequireDefault(_tree_pool);

var _game_object = __webpack_require__(1);

var _game_object2 = _interopRequireDefault(_game_object);

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

var _collision_utils = __webpack_require__(5);

var CollisionUtils = _interopRequireWildcard(_collision_utils);

var _mesh = __webpack_require__(2);

var _mesh2 = _interopRequireDefault(_mesh);

var _tree = __webpack_require__(24);

var _tree2 = _interopRequireDefault(_tree);

var _finish_line = __webpack_require__(25);

var _finish_line2 = _interopRequireDefault(_finish_line);

var _ice_block = __webpack_require__(26);

var _ice_block2 = _interopRequireDefault(_ice_block);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SEGMENT_WIDTH = 90;
var SEGMENT_LENGTH = 27;
var EDGE_LOOP_RESOLUTION = 5;

var TURN_TYPE_SWITCH_FREQUENCY = 3;
var SHARP_TURN = 0.2;
var SHARP_TURN_BANK = 0.2;
var GRADUAL_TURN = 0.1;
var GRADUAL_TURN_BANK = 0.1;
var TILES_PER_SEGMENT = 1;
var TREES_PER_SEGMENT = 2;
var TREE_COLLIDER = "TREE_COLLIDER";
var TREE_RADIUS = 3;
var TREE_SEGMENT = "TREE_SEGMENT";
var SNOW_SEGMENT = "SNOW_SEGMENT";
var TREE_PROBABILITY_LENGTHWISE = 0.3;
var TREE_MAX_DENSITY_WIDTHWISE = 4;
var BALLOON_PROBABILITY_LENGTHWISE = 0.3;
var BALLOON_DENSITY_WIDTHWISE = 2;
var BALLOON_FLOAT_HEIGHT = 6;
var BALLOON_RADIUS = 5;
var BOX_COLLIDER = "BOX_COLLIDER";
var BEGINNING_NO_OBSTACLE_SEGMENTS = 15;
var CLIFF_PROBABILITY = 0.05;

var SLOPE = -0.25;
var CLIFF_SLOPE = -Math.PI / 3;

var SLOPE_BUFFER_AMOUNT = 20;
var BACK_BUFFER_ANOUNT = 10;
var COURSE_LENGTH = exports.COURSE_LENGTH = 300;
var FINISH_LINE_LENGTH = 10;

var iceBlockMesh = void 0;
function createSlope() {
  var transformationMatrix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MathUtils.identityMatrix4;
  var rasterizer = arguments[1];

  _tree2.default.textured = true;
  _balloon2.default.colored = true;
  _tree2.default.img_src = "tree.png";
  var args = [];
  window.finishLineMesh = _finish_line2.default;
  window.createMesh = _mesh2.default;

  return (0, _mesh2.default)({
    faces: [],
    vertices: [],
    textured: true,
    img_src: "snow.jpg",
    uvs: [],
    rasterizer: rasterizer
  }).then(function (processedMesh) {
    return args.push(processedMesh);
  }).then(function () {
    return (0, _mesh2.default)({ data: _ice_block2.default, mode2: true, colored: true });
  }).then(function (processedMesh) {
    return iceBlockMesh = processedMesh;
  }).then(function () {
    return args.push(MathUtils.identityMatrix4.slice(0, 16));
  }).then(function () {
    return (0, _mesh2.default)(_tree2.default);
  }).then(function (processedMesh) {
    return args.push(new _tree_pool2.default(processedMesh));
  }).then(function () {
    return (0, _mesh2.default)(_balloon2.default);
  }).then(function (processedMesh) {
    return args.push(processedMesh);
  }).then(function () {
    return (0, _mesh2.default)({ data: _finish_line2.default, mode2: true,
      img_src: "finish_line.jpg", textured: true });
  }).then(function (processedMesh) {
    args.push(processedMesh);
  }).then(function () {
    return new (Function.prototype.bind.apply(Slope, [null].concat(args)))();
  });
};

var Slope = function (_GameObject) {
  _inherits(Slope, _GameObject);

  function Slope(mesh, transformationMatrix, treePool, balloonMesh, finishLineMesh) {
    _classCallCheck(this, Slope);

    var _this = _possibleConstructorReturn(this, (Slope.__proto__ || Object.getPrototypeOf(Slope)).call(this, mesh, undefined));

    window.slope = _this;
    _this.treePool = treePool;
    _this.balloonMesh = balloonMesh;
    _this.finishLineMesh = finishLineMesh;
    _this.rasterizer = rasterizer;
    _this._setup();
    return _this;
  }

  _createClass(Slope, [{
    key: "_setup",
    value: function _setup() {
      var transformationMatrix = this.getTransformationMatrix();
      this.bufferedSegments = 0;
      this.uvH = 0;
      this.segmentMatrices = [transformationMatrix];
      this.segmentRotation = [-0.25, 0, 0];
      this.segmentPosition = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, [0, SEGMENT_LENGTH, 0, 1]).slice(0, 3);
      this.obstacles = [{}];
      this.balloons = [[]];
      this.balloonsCreatedSinceStart = 0;
      this.sideGeometry = [[]];
      this.currentSideGeometryType = TREE_SEGMENT;
      this.treesCreatedSinceStart = 0;
      var firstLoop = this._createEdgeLoop();
      var unpackedVertices = void 0;
      this.turnDirection = "left";
      this.currentTurn = "right";
      this.segmentsSinceStart = 0;
      for (var i = 0; i < firstLoop.length; i += 3) {
        unpackedVertices = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, firstLoop.slice(i, i + 3).concat(1)).slice(0, 3);
        for (var j = 0; j < unpackedVertices.length; ++j) {
          this.mesh.vertices.push(unpackedVertices[j]);
        }
      }
      for (var _i = 0; _i < SLOPE_BUFFER_AMOUNT + BACK_BUFFER_ANOUNT; ++_i) {
        this._generateSegment();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      while (this.segmentMatrices.length > 0) {
        this.deleteSegment();
      }
      this._setup();
    }
  }, {
    key: "_addUvsSegment",
    value: function _addUvsSegment() {
      for (var i = 0; i <= EDGE_LOOP_RESOLUTION; ++i) {
        this.mesh.uvs.push(this.uvH, i / EDGE_LOOP_RESOLUTION * TILES_PER_SEGMENT);
      }
    }
  }, {
    key: "_deleteUvsSegment",
    value: function _deleteUvsSegment() {
      for (var i = 0; i <= EDGE_LOOP_RESOLUTION; ++i) {
        this.mesh.uvs.shift();
        this.mesh.uvs.shift();
      }
    }
  }, {
    key: "_addSideGeometrySegment",
    value: function _addSideGeometrySegment() {

      if (this.currentSideGeometryType === TREE_SEGMENT) {
        var objects = [];

        var leftRightToggle = -1;
        for (var i = 0; i < 2; ++i) {
          var transformationMatrix = this.segmentMatrices[this.segmentMatrices.length - 1];
          transformationMatrix = MathUtils.mat_4_multiply(MathUtils.translationMatrix(leftRightToggle * (SEGMENT_WIDTH / 2 + 20), 0, 0), transformationMatrix);
          var _object = void 0;

          _object = new _game_object2.default(iceBlockMesh, transformationMatrix, true);
          _object.id = "iceblock" + this.treesCreatedSinceStart;
          //tree.setPosition(MathUtils.mat4TranslationComponent(transformationMatrix));
          this.rasterizer.objects[_object.id] = _object;
          ++this.treesCreatedSinceStart;
          objects.push(_object);
          leftRightToggle *= -1;
        }
        this.sideGeometry.push(objects);
      }
    }
  }, {
    key: "_deleteSideGeometrySegment",
    value: function _deleteSideGeometrySegment() {

      var objects = this.sideGeometry.shift();
      for (var i = 0; i < objects.length; ++i) {
        //this.treePool.releaseTree(treesSeg.trees[i]);
        delete this.rasterizer.objects[objects[i].id];
      }
    }
  }, {
    key: "_addObstacleSegment",
    value: function _addObstacleSegment() {
      var obstacleSegment = [];
      var transformationMatrix = MathUtils.mat_4_multiply(MathUtils.translationMatrix(0, -SEGMENT_LENGTH / TREES_PER_SEGMENT, 0, 1), this.segmentMatrices[this.segmentMatrices.length - 1]);
      if (this.segmentsSinceStart > BEGINNING_NO_OBSTACLE_SEGMENTS && Math.random() < TREE_PROBABILITY_LENGTHWISE) {
        var segment = 0;
        var widthWiseCount = Math.floor(Math.random() * TREE_MAX_DENSITY_WIDTHWISE);
        var tree = void 0,
            treeTransformation = void 0;
        for (var i = 0; i < widthWiseCount; ++i) {
          treeTransformation = MathUtils.mat_4_multiply(MathUtils.translationMatrix((Math.random() * 0.8 + 0.1) * SEGMENT_WIDTH - SEGMENT_WIDTH / 2, Math.random() * SEGMENT_LENGTH, 0), transformationMatrix);
          tree = this.treePool.pullTree(this.treesCreatedSinceStart);
          tree.setPosition(MathUtils.mat4TranslationComponent(treeTransformation));
          obstacleSegment.push(tree);
          this.rasterizer.objects[tree.id] = tree;
          ++this.treesCreatedSinceStart;
        }
      }
      this.obstacles.push(obstacleSegment);
    }
  }, {
    key: "_addBalloonsSegment",
    value: function _addBalloonsSegment() {
      var balloonSegment = {};
      var transformationMatrix = void 0,
          newBalloon = void 0,
          id = void 0;
      if (Math.random() < BALLOON_PROBABILITY_LENGTHWISE) {
        for (var i = 0; i <= Math.floor(Math.random() * BALLOON_DENSITY_WIDTHWISE); ++i) {
          transformationMatrix = MathUtils.mat_4_multiply(MathUtils.translationMatrix(Math.random() * SEGMENT_WIDTH - SEGMENT_WIDTH / 2, SEGMENT_LENGTH / 2, BALLOON_FLOAT_HEIGHT), this.segmentMatrices[this.segmentMatrices.length - 1]);
          newBalloon = new _game_object2.default(this.balloonMesh, transformationMatrix);
          id = "balloon" + this.balloonsCreatedSinceStart;
          newBalloon.id = id;
          balloonSegment[i] = newBalloon;
          this.rasterizer.objects[id] = newBalloon;
          ++this.balloonsCreatedSinceStart;
        }
      }
      this.balloons.push(balloonSegment);
    }
  }, {
    key: "_deleteObstacleSegment",
    value: function _deleteObstacleSegment() {
      var deletedSegment = this.obstacles.shift();
      for (var i = 0; i < deletedSegment.length; ++i) {
        this.treePool.releaseTree(deletedSegment[i]);
        delete this.rasterizer.objects[deletedSegment[i].id];
      }
    }
  }, {
    key: "_deleteBalloonSegment",
    value: function _deleteBalloonSegment() {
      var _this2 = this;

      var deletedSegment = this.balloons.shift();
      Object.keys(deletedSegment).forEach(function (key) {
        delete _this2.rasterizer.objects[deletedSegment[key].id];
      });
    }
  }, {
    key: "_createEdgeLoop",
    value: function _createEdgeLoop() {
      var vertices = [];
      for (var i = 0; i <= EDGE_LOOP_RESOLUTION; ++i) {
        vertices.push(SEGMENT_WIDTH / EDGE_LOOP_RESOLUTION * i - SEGMENT_WIDTH / 2, 0, 0);
      }
      return vertices;
    }
  }, {
    key: "updateCharacterSegmentNumber",
    value: function updateCharacterSegmentNumber(idx) {
      if (idx < BACK_BUFFER_ANOUNT) {
        return idx + 1;
      } else {
        if (this.segmentsSinceStart <= COURSE_LENGTH) {
          this._generateSegment();
        }
        this.deleteSegment();
        return idx;
      }
    }
  }, {
    key: "generateNewSegmentRotation",
    value: function generateNewSegmentRotation() {
      var randomTurn = Math.random();
      if (randomTurn < 0.05 * TURN_TYPE_SWITCH_FREQUENCY) {
        randomTurn = Math.random();
        if (randomTurn < 0.66) {
          this.currentTurn = "none";
        } else if (randomTurn < 0.75) {
          this.currentTurn = "gradual";
        } else {
          this.currentTurn = "sharp";
        }
        if (Math.random() < 0.5) {
          this.turnDirection = "left";
        } else {
          this.turnDirection = "right";
        }
      }

      var multiplier = this.turnDirection === "left" ? -1 : 1;
      switch (this.currentTurn) {
        case "sharp":
          this.segmentRotation[2] += multiplier * SHARP_TURN;
          this.segmentRotation[1] = -1 * multiplier * SHARP_TURN_BANK;
          break;
        case "gradual":
          this.segmentRotation[2] += multiplier * GRADUAL_TURN;
          this.segmentRotation[1] = -1 * multiplier * GRADUAL_TURN_BANK;
          break;
        default:
          this.segmentRotation[1] = Math.random() * 0.03;
          break;
      }

      if (Math.random() <= CLIFF_PROBABILITY) {
        this.segmentRotation[0] = CLIFF_SLOPE;
      } else {
        this.segmentRotation[0] = SLOPE;
      }
    }
  }, {
    key: "positionIsPastSegmentStart",
    value: function positionIsPastSegmentStart(pos, segmentNumber) {
      var segmentStartLine = MathUtils.multiplyVec4ByMatrix4(MathUtils.mat4RotationComponent(this.segmentMatrices[segmentNumber]), [-1, 0, 0, 1]);
      var segmentStartNormal = MathUtils.vectorCross([0, 0, 1], segmentStartLine);
      var offsetVector = MathUtils.subtractVectors(pos, MathUtils.mat4TranslationComponent(this.segmentMatrices[segmentNumber]));
      var result = MathUtils.vectorDot(offsetVector, segmentStartNormal);
      return result < 0;
    }
  }, {
    key: "segmentIsPastFinish",
    value: function segmentIsPastFinish(segmentNumber) {
      return segmentNumber > COURSE_LENGTH;
    }
  }, {
    key: "boxCollidesWithObstacle",
    value: function boxCollidesWithObstacle(boxMatrix, boxDimensions, movement, segment_number) {
      var obstacle = void 0;
      var collisionData = void 0;
      for (var i = 0; i < this.obstacles[segment_number].length; ++i) {
        obstacle = this.obstacles[segment_number][i];
        collisionData = CollisionUtils.movingBoxIntersectsBox(boxMatrix, boxDimensions, obstacle.getTransformationMatrix(), obstacle.collider.dimensions, movement);
        if (collisionData) return collisionData;
      }
      return false;
    }
  }, {
    key: "capsuleCollidesWithObstacle",
    value: function capsuleCollidesWithObstacle(capsulePointA, capsulePointB, capsuleRadius, segment_number) {
      var obstacle = void 0;
      var collisionData = void 0;
      for (var i = 0; i < this.obstacles[segment_number].length; ++i) {
        obstacle = this.obstacles[segment_number][i];
        collisionData = CollisionUtils.sphereCollidesCapsule(MathUtils.mat4TranslationComponent(obstacle.getTransformationMatrix()), TREE_RADIUS, capsulePointA, capsulePointB, capsuleRadius);
        if (collisionData) return collisionData;
      }
      for (var _i2 = 0; _i2 < this.obstacles[segment_number + 1].length; ++_i2) {
        obstacle = this.obstacles[segment_number + 1][_i2];
        collisionData = CollisionUtils.sphereCollidesCapsule(MathUtils.mat4TranslationComponent(obstacle.getTransformationMatrix()), TREE_RADIUS, capsulePointA, capsulePointB, capsuleRadius);
        if (collisionData) return collisionData;
      }
      return false;
    }
  }, {
    key: "capsuleCollidesWithBalloons",
    value: function capsuleCollidesWithBalloons(capsulePointA, capsulePointB, capsuleRadius, segment_number) {
      var _this3 = this;

      var points = 0;
      var balloon = void 0;
      Object.keys(this.balloons[segment_number]).forEach(function (key) {
        if (CollisionUtils.sphereCollidesCapsule(_this3.balloons[segment_number][key].getPosition(), BALLOON_RADIUS, capsulePointA, capsulePointB, capsuleRadius)) {
          ++points;
          delete _this3.rasterizer.objects[_this3.balloons[segment_number][key].id];
          delete _this3.balloons[segment_number][key];
        }
      });
      if (segment_number < this.balloons.length - 1) {

        Object.keys(this.balloons[segment_number + 1]).forEach(function (key) {
          if (CollisionUtils.sphereCollidesCapsule(_this3.balloons[segment_number + 1][key].getPosition(), BALLOON_RADIUS, capsulePointA, capsulePointB, capsuleRadius)) {
            ++points;
            delete _this3.rasterizer.objects[_this3.balloons[segment_number + 1][key].id];
            delete _this3.balloons[segment_number + 1][key];
          }
        });
      }
      return points;
    }
  }, {
    key: "positionCollidesWithObstacle",
    value: function positionCollidesWithObstacle(pos, segment_number) {
      var transformedPosition = void 0;
      var obstacle = void 0;
      var dimensions = void 0;
      for (var i = 0; i < this.obstacles[segment_number].length; ++i) {
        obstacle = this.obstacles[segment_number][i];
        transformedPosition = MathUtils.multiplyVec4ByMatrix4(MathUtils.inverse_mat4_rot_pos(obstacle.getTransformationMatrix()), pos.concat(1));
        dimensions = obstacle.collider.dimensions;
        if (transformedPosition[0] > -dimensions[0] / 2 && transformedPosition[0] < dimensions[0] / 2 && transformedPosition[1] > -dimensions[1] / 2 && transformedPosition[1] < dimensions[1] / 2 && transformedPosition[2] >= -0.01 && transformedPosition[2] < dimensions[2]) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "segmentLocalCoords",
    value: function segmentLocalCoords(segment_number, pos) {
      return;
      MathUtils.multiplyVec4ByMatrix4(object.position.concat(1), MathUtils.inverse_mat4_rot_pos(this.matrices[nextSegmentNumber]));
    }
  }, {
    key: "getSurroundingTriangle",
    value: function getSurroundingTriangle(pos, segmentNumber) {
      var startIdx = 6 * EDGE_LOOP_RESOLUTION * segmentNumber;
      var vertex = this.mesh.packedVertex.bind(this.mesh);
      var inverseSegmentTransform = MathUtils.inverse_mat4_rot_pos(this.segmentMatrices[segmentNumber]);
      var transformedPosition = MathUtils.multiplyVec4ByMatrix4(inverseSegmentTransform, pos.concat(1));
      var transformedTriangle = void 0;
      for (var i = startIdx; i < startIdx + 6 * EDGE_LOOP_RESOLUTION - 1; i += 3) {
        transformedTriangle = [];
        for (var j = 0; j < 3; ++j) {
          transformedTriangle.push(MathUtils.multiplyVec4ByMatrix4(inverseSegmentTransform, vertex(this.mesh.faces[i + j]).concat(1)));
        }
        if (MathUtils.triangleContainsPoint(transformedPosition, transformedTriangle)) {
          return [vertex(this.mesh.faces[i]), vertex(this.mesh.faces[i + 1]), vertex(this.mesh.faces[i + 2])];
        }
      }
    }
  }, {
    key: "_boxIsBeyondEdge",
    value: function _boxIsBeyondEdge(boxMatrix, boxDimensions, segmentNumber, toggleLeft) {
      var checkPoints = CollisionUtils.boxColliderToPoints(boxMatrix, boxDimensions);
      var pointBeyondEdge = false;
      for (var i = 0; i < checkPoints.length; ++i) {
        pointBeyondEdge = this._positionIsBeyondEdge(checkPoints[i], segmentNumber, toggleLeft);
        if (pointBeyondEdge) {

          return pointBeyondEdge;
        }
      }
    }
  }, {
    key: "boxIsBeyondEdge",
    value: function boxIsBeyondEdge(boxMatrix, boxDimensions, segmentNumber) {
      return this._boxIsBeyondEdge(boxMatrix, boxDimensions, segmentNumber, true) || this._boxIsBeyondEdge(boxMatrix, boxDimensions, segmentNumber, false);
    }
  }, {
    key: "positionIsBeyondEdge",
    value: function positionIsBeyondEdge(pos, segmentNumber) {
      return this._positionIsBeyondEdge(pos, segmentNumber, true) || this._positionIsBeyondEdge(pos, segmentNumber, false);
    }
  }, {
    key: "_positionIsBeyondEdge",
    value: function _positionIsBeyondEdge(pos, segmentNumber, toggleLeft) {
      var xOffset = toggleLeft ? -SEGMENT_WIDTH / 2 : SEGMENT_WIDTH / 2;
      var currentSegPoint = MathUtils.multiplyVec4ByMatrix4(this.segmentMatrices[segmentNumber], [xOffset, 0, 0, 1]);
      var nextSegPoint = MathUtils.multiplyVec4ByMatrix4(this.segmentMatrices[segmentNumber + 1], [xOffset, 0, 0, 1]);
      var edgeVector = void 0,
          vec1 = void 0;
      if (toggleLeft) {
        edgeVector = MathUtils.subtractVectors(nextSegPoint, currentSegPoint);
        MathUtils.rotateVec3byMatrix4InPlace(this.segmentMatrices[segmentNumber], [0, 0, 1], localUpTemp);
      } else {
        edgeVector = MathUtils.subtractVectors(nextSegPoint, currentSegPoint);
        MathUtils.rotateVec3byMatrix4InPlace(this.segmentMatrices[segmentNumber], [0, 0, -1], localUpTemp);
      }
      var edgeNormal = MathUtils.vectorCross(edgeVector, localUpTemp);
      var posOffset = MathUtils.subtractVectors(pos, currentSegPoint);
      if (MathUtils.vectorDot(posOffset, edgeNormal) < 0) {
        var penetration = -1 * MathUtils.scalarProjection(posOffset, edgeNormal);
        return { normal: edgeNormal, colliderPoint: pos,
          vector: edgeVector, edgePoint0: currentSegPoint,
          penetration: penetration,
          edgePoint1: nextSegPoint, toggleLeft: toggleLeft };
      }
      return false;
    }
  }, {
    key: "_extrapolateNextSegment",
    value: function _extrapolateNextSegment(segmentRotation) {
      var pos = this.segmentPosition;
      var transformationMatrix = MathUtils.translationMatrix(pos[0], pos[1], pos[2]);
      var xRot = MathUtils.xRotationMatrix(segmentRotation[0]);
      var yRot = MathUtils.yRotationMatrix(segmentRotation[1]);
      var zRot = MathUtils.zRotationMatrix(segmentRotation[2]);
      transformationMatrix = MathUtils.mat_4_multiply(yRot, MathUtils.mat_4_multiply(xRot, MathUtils.mat_4_multiply(zRot, transformationMatrix)));
      this.segmentPosition = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, [0, SEGMENT_LENGTH, 0, 1]);

      var newSegment = this._createEdgeLoop();
      // let transformedSegment = MathUtils.addVectors(newSegment, this.segmentPosition);
      var transformedSegment = [];
      var transformedPos = void 0;
      for (var i = 0; i < newSegment.length; i += 3) {
        transformedPos = newSegment.slice(i, i + 3);
        transformedPos.push(1);
        transformedPos = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, transformedPos);
        for (var _i3 = 0; _i3 < 3; ++_i3) {
          transformedSegment.push(transformedPos[_i3]);
        }
      }
      this._addEdgeLoop(transformedSegment);
      //this.segmentPosition =
      //  MathUtils.mat4TranslationComponent(segmentMatrix);
      this.segmentMatrices.push(transformationMatrix);
      this._addUvsSegment();
      this.uvH += SEGMENT_LENGTH / SEGMENT_WIDTH;
    }
  }, {
    key: "_generateSegment",
    value: function _generateSegment() {
      if (this.segmentsSinceStart == COURSE_LENGTH) {
        this._generateFinishLine();
      } else {
        this.generateNewSegmentRotation();
        this._extrapolateNextSegment(this.segmentRotation);
        this._addSideGeometrySegment();
        this._addObstacleSegment();
        this._addBalloonsSegment();
      }
    }
  }, {
    key: "_generateFinishLine",
    value: function _generateFinishLine() {
      var interpolateTowardX = 0.3;
      var interpolateTowardY = 0;
      var rotation = this.segmentRotation;
      var lastMatrix = this.segmentMatrices[this.segmentMatrices.length - 1];
      var finishLine = new _game_object2.default(this.finishLineMesh, undefined, true);
      rasterizer.objects["finish_line"] = finishLine;
      finishLine.setPosition(MathUtils.mat4TranslationComponent(lastMatrix));

      //figures out the appropriate zRotation

      finishLine.setRotation(MathUtils.axisAngleToQuaternion([0, 0, 1], -1 * this.segmentRotation[2]));

      for (var i = 0; i < FINISH_LINE_LENGTH; ++i) {
        rotation[0] = (rotation[0] * 2 + interpolateTowardX) / 3;
        rotation[1] = (rotation[1] * 2 + interpolateTowardY) / 3;
        this._extrapolateNextSegment(rotation);
        this._addSideGeometrySegment();
        this.obstacles.push([]);
        this.balloons.push([]);
      }
    }
  }, {
    key: "_addEdgeLoop",
    value: function _addEdgeLoop(vertices) {
      var startIdx = this.mesh.vertices.length / 3 - 1 - EDGE_LOOP_RESOLUTION;
      for (var i = 0; i < vertices.length; ++i) {
        this.mesh.vertices.push(vertices[i]);
      }
      for (var _i4 = startIdx; _i4 < startIdx + EDGE_LOOP_RESOLUTION; ++_i4) {
        //first triangle
        this.mesh.faces.push(_i4);
        this.mesh.faces.push(_i4 + 1);
        this.mesh.faces.push(_i4 + EDGE_LOOP_RESOLUTION + 1);

        //second triangle
        this.mesh.faces.push(_i4 + 1);
        this.mesh.faces.push(_i4 + EDGE_LOOP_RESOLUTION + 2);
        this.mesh.faces.push(_i4 + EDGE_LOOP_RESOLUTION + 1);

        /*triangle configuration
              t2 , t2      t1
               t0      t1 ,t0
        */
      }
      this.mesh.setDirty();
      ++this.segmentsSinceStart;
    }
  }, {
    key: "deleteSegment",
    value: function deleteSegment() {
      //values per vertex is 3
      for (var i = 0; i < (EDGE_LOOP_RESOLUTION + 1) * 3; ++i) {
        this.mesh.vertices.shift();
      }
      //values per face is 3, there are two faces per segment
      for (var _i5 = 0; _i5 < EDGE_LOOP_RESOLUTION * 6; ++_i5) {
        this.mesh.faces.pop();
      }
      this.segmentMatrices.shift();
      this._deleteUvsSegment();
      this._deleteSideGeometrySegment();
      this._deleteObstacleSegment();
      this._deleteBalloonSegment();
      this.mesh.setDirty();
    }
  }]);

  return Slope;
}(_game_object2.default);

var localUpTemp = [0, 0, 0];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "vertices": [-2.072248, 1.505576, -0.832262, -0.791528, 2.436073, -0.832262, -0.489191, 1.505576, -2.17889, -2.072248, 1.505576, 0.832262, -1.280719, 0.930497, 2.17889, -0.489191, 1.505576, 2.17889, -2.072248, 1.505576, 0.832262, -0.791528, 2.436074, 0.832262, -0.791528, 2.436073, -0.832262, -0.489191, 1.505576, -2.17889, -0.791528, 2.436073, -0.832262, 0.791528, 2.436073, -0.832262, -0.489191, 1.505576, 2.17889, 0.489192, 1.505576, 2.17889, 0.791529, 2.436074, 0.832262, -0.791528, 2.436074, 0.832262, 0.791529, 2.436074, 0.832262, 0.791528, 2.436073, -0.832262, 0.489192, 1.505576, -2.17889, 0.791528, 2.436073, -0.832262, 2.072248, 1.505576, -0.832262, 0.489192, 1.505576, 2.17889, 1.28072, 0.930497, 2.17889, 2.072248, 1.505576, 0.832262, 0.791528, 2.436073, -0.832262, 0.791529, 2.436074, 0.832262, 2.072248, 1.505576, 0.832262, 1.28072, 0.930497, -2.17889, 2.072248, 1.505576, -0.832262, 2.561439, 0.0, -0.832262, 1.28072, 0.930497, 2.17889, 1.583057, -0.0, 2.17889, 2.56144, 0.0, 0.832262, 2.072248, 1.505576, 0.832262, 2.56144, 0.0, 0.832262, 2.561439, 0.0, -0.832262, 1.240287, -0.150705, -2.729312, 2.561439, 0.0, -0.832262, 2.072248, -1.505576, -0.832262, 1.583057, -0.0, 2.17889, 1.28072, -0.930497, 2.17889, 2.072248, -1.505576, 0.832262, 2.56144, 0.0, 0.832262, 2.072248, -1.505576, 0.832262, 2.072248, -1.505576, -0.832262, 1.003413, -0.879727, -2.729312, 2.072248, -1.505576, -0.832262, 0.791529, -2.436073, -0.832262, 1.28072, -0.930497, 2.17889, 0.489192, -1.505576, 2.17889, 0.791529, -2.436073, 0.832262, 2.072248, -1.505576, 0.832262, 0.791529, -2.436073, 0.832262, 0.791529, -2.436073, -0.832262, 0.38327, -1.330288, -2.729312, 0.791529, -2.436073, -0.832262, -0.791528, -2.436073, -0.832262, 0.489192, -1.505576, 2.17889, -0.489191, -1.505576, 2.17889, -0.791528, -2.436073, 0.832262, 0.791529, -2.436073, 0.832262, -0.791528, -2.436073, 0.832262, -0.791528, -2.436073, -0.832262, -0.791528, -2.436073, -0.832262, -2.072247, -1.505576, -0.832262, -1.003413, -0.879728, -2.729312, -0.489191, -1.505576, 2.17889, -1.280719, -0.930497, 2.17889, -2.072247, -1.505576, 0.832262, -0.791528, -2.436073, 0.832262, -2.072247, -1.505576, 0.832262, -2.072247, -1.505576, -0.832262, 0.0, -0.150705, -3.299341, -1.240287, -0.150705, -2.729312, -1.280719, 0.930497, -2.17889, -2.561439, 0.0, -0.832262, -2.561439, -0.0, 0.832262, -2.072248, 1.505576, 0.832262, -1.583056, 0.0, 2.17889, 0.0, -0.0, 2.693256, -1.280719, 0.930497, 2.17889, -2.561439, 0.0, -0.832262, -2.072248, 1.505576, -0.832262, -1.280719, 0.930497, -2.17889, -1.583056, 0.0, 2.17889, -1.280719, 0.930497, 2.17889, -2.072248, 1.505576, 0.832262, 0.0, -0.150705, -3.299341, -1.280719, 0.930497, -2.17889, -0.489191, 1.505576, -2.17889, -1.280719, 0.930497, 2.17889, 0.0, -0.0, 2.693256, -0.489191, 1.505576, 2.17889, 0.0, -0.150705, -3.299341, -0.489191, 1.505576, -2.17889, 0.489192, 1.505576, -2.17889, -0.489191, 1.505576, 2.17889, 0.0, -0.0, 2.693256, 0.489192, 1.505576, 2.17889, 0.0, -0.150705, -3.299341, 0.489192, 1.505576, -2.17889, 1.28072, 0.930497, -2.17889, 0.489192, 1.505576, 2.17889, 0.0, -0.0, 2.693256, 1.28072, 0.930497, 2.17889, 0.0, -0.150705, -3.299341, 1.28072, 0.930497, -2.17889, 1.240287, -0.150705, -2.729312, 1.28072, 0.930497, 2.17889, 0.0, -0.0, 2.693256, 1.583057, -0.0, 2.17889, 0.0, -0.150705, -3.299341, 1.240287, -0.150705, -2.729312, 1.003413, -0.879727, -2.729312, 1.583057, -0.0, 2.17889, 0.0, -0.0, 2.693256, 1.28072, -0.930497, 2.17889, 0.0, -0.150705, -3.299341, 1.003413, -0.879727, -2.729312, 0.38327, -1.330288, -2.729312, 1.28072, -0.930497, 2.17889, 0.0, -0.0, 2.693256, 0.489192, -1.505576, 2.17889, 0.0, -0.150705, -3.299341, 0.38327, -1.330288, -2.729312, -0.383269, -1.330288, -2.729312, 0.489192, -1.505576, 2.17889, 0.0, -0.0, 2.693256, -0.489191, -1.505576, 2.17889, 0.0, -0.150705, -3.299341, -0.383269, -1.330288, -2.729312, -1.003413, -0.879728, -2.729312, -0.489191, -1.505576, 2.17889, 0.0, -0.0, 2.693256, -1.280719, -0.930497, 2.17889, -2.072247, -1.505576, -0.832262, -2.561439, 0.0, -0.832262, -1.240287, -0.150705, -2.729312, -1.280719, -0.930497, 2.17889, -1.583056, 0.0, 2.17889, -2.561439, -0.0, 0.832262, 0.0, -0.150705, -3.299341, -1.003413, -0.879728, -2.729312, -1.240287, -0.150705, -2.729312, -2.072247, -1.505576, -0.832262, -2.072247, -1.505576, 0.832262, -2.561439, -0.0, 0.832262, -1.280719, -0.930497, 2.17889, 0.0, -0.0, 2.693256, -1.583056, 0.0, 2.17889, 0.057702, 0.443236, -4.228172, 0.393527, -0.383082, -4.381704, -0.601891, -0.248365, -4.31964, 0.393527, -0.383082, -4.381704, 0.057702, 0.443236, -4.228172, 0.0, -0.150705, -3.299341, -0.601891, -0.248365, -4.31964, 0.393527, -0.383082, -4.381704, 0.0, -0.150705, -3.299341, -0.601891, -0.248365, -4.31964, 0.0, -0.150705, -3.299341, 0.057702, 0.443236, -4.228172, -1.280719, 0.930497, -2.17889, -2.072248, 1.505576, -0.832262, -0.489191, 1.505576, -2.17889, -0.791528, 2.436074, 0.832262, -2.072248, 1.505576, 0.832262, -0.489191, 1.505576, 2.17889, -2.072248, 1.505576, -0.832262, -2.072248, 1.505576, 0.832262, -0.791528, 2.436073, -0.832262, 0.489192, 1.505576, -2.17889, -0.489191, 1.505576, -2.17889, 0.791528, 2.436073, -0.832262, -0.791528, 2.436074, 0.832262, -0.489191, 1.505576, 2.17889, 0.791529, 2.436074, 0.832262, -0.791528, 2.436073, -0.832262, -0.791528, 2.436074, 0.832262, 0.791528, 2.436073, -0.832262, 1.28072, 0.930497, -2.17889, 0.489192, 1.505576, -2.17889, 2.072248, 1.505576, -0.832262, 0.791529, 2.436074, 0.832262, 0.489192, 1.505576, 2.17889, 2.072248, 1.505576, 0.832262, 2.072248, 1.505576, -0.832262, 0.791528, 2.436073, -0.832262, 2.072248, 1.505576, 0.832262, 1.240287, -0.150705, -2.729312, 1.28072, 0.930497, -2.17889, 2.561439, 0.0, -0.832262, 2.072248, 1.505576, 0.832262, 1.28072, 0.930497, 2.17889, 2.56144, 0.0, 0.832262, 2.072248, 1.505576, -0.832262, 2.072248, 1.505576, 0.832262, 2.561439, 0.0, -0.832262, 1.003413, -0.879727, -2.729312, 1.240287, -0.150705, -2.729312, 2.072248, -1.505576, -0.832262, 2.56144, 0.0, 0.832262, 1.583057, -0.0, 2.17889, 2.072248, -1.505576, 0.832262, 2.561439, 0.0, -0.832262, 2.56144, 0.0, 0.832262, 2.072248, -1.505576, -0.832262, 0.38327, -1.330288, -2.729312, 1.003413, -0.879727, -2.729312, 0.791529, -2.436073, -0.832262, 2.072248, -1.505576, 0.832262, 1.28072, -0.930497, 2.17889, 0.791529, -2.436073, 0.832262, 2.072248, -1.505576, -0.832262, 2.072248, -1.505576, 0.832262, 0.791529, -2.436073, -0.832262, -0.383269, -1.330288, -2.729312, 0.38327, -1.330288, -2.729312, -0.791528, -2.436073, -0.832262, 0.791529, -2.436073, 0.832262, 0.489192, -1.505576, 2.17889, -0.791528, -2.436073, 0.832262, 0.791529, -2.436073, -0.832262, 0.791529, -2.436073, 0.832262, -0.791528, -2.436073, -0.832262, -0.383269, -1.330288, -2.729312, -0.791528, -2.436073, -0.832262, -1.003413, -0.879728, -2.729312, -0.791528, -2.436073, 0.832262, -0.489191, -1.505576, 2.17889, -2.072247, -1.505576, 0.832262, -0.791528, -2.436073, -0.832262, -0.791528, -2.436073, 0.832262, -2.072247, -1.505576, -0.832262, -2.072248, 1.505576, -0.832262, -2.561439, 0.0, -0.832262, -2.072248, 1.505576, 0.832262, -1.240287, -0.150705, -2.729312, -2.561439, 0.0, -0.832262, -1.280719, 0.930497, -2.17889, -2.561439, -0.0, 0.832262, -1.583056, 0.0, 2.17889, -2.072248, 1.505576, 0.832262, -1.003413, -0.879728, -2.729312, -2.072247, -1.505576, -0.832262, -1.240287, -0.150705, -2.729312, -2.072247, -1.505576, 0.832262, -1.280719, -0.930497, 2.17889, -2.561439, -0.0, 0.832262, -2.561439, 0.0, -0.832262, -2.072247, -1.505576, -0.832262, -2.561439, -0.0, 0.832262],

    "normals": [-0.773614, 0.562059, -0.292459, -0.29548, 0.909452, -0.292459, -0.217444, 0.672048, -0.707816, -0.773614, 0.562059, 0.292459, -0.505814, 0.367473, 0.780419, -0.193182, 0.594623, 0.780419, -0.773614, 0.562059, 0.292459, -0.29548, 0.909452, 0.292459, -0.29548, 0.909452, -0.292459, -0.217444, 0.672048, -0.707816, -0.29548, 0.909452, -0.292459, 0.29548, 0.909452, -0.292459, -0.193182, 0.594623, 0.780419, 0.193182, 0.594623, 0.780419, 0.29548, 0.909452, 0.292459, -0.29548, 0.909452, 0.292459, 0.29548, 0.909452, 0.292459, 0.29548, 0.909452, -0.292459, 0.217444, 0.672048, -0.707816, 0.29548, 0.909452, -0.292459, 0.773614, 0.562059, -0.292459, 0.193182, 0.594623, 0.780419, 0.505814, 0.367473, 0.780419, 0.773614, 0.562059, 0.292459, 0.29548, 0.909452, -0.292459, 0.29548, 0.909452, 0.292459, 0.773614, 0.562059, 0.292459, 0.573962, 0.453322, -0.681906, 0.773614, 0.562059, -0.292459, 0.958647, 0.004791, -0.284524, 0.505814, 0.367473, 0.780419, 0.625202, 0.0, 0.780419, 0.956267, 0.0, 0.292459, 0.773614, 0.562059, 0.292459, 0.956267, 0.0, 0.292459, 0.958647, 0.004791, -0.284524, 0.638356, 0.067324, -0.766747, 0.958647, 0.004791, -0.284524, 0.781152, -0.562822, -0.270119, 0.625202, 0.0, 0.780419, 0.505814, -0.367473, 0.780419, 0.773614, -0.562059, 0.292459, 0.956267, 0.0, 0.292459, 0.773614, -0.562059, 0.292459, 0.781152, -0.562822, -0.270119, 0.549333, -0.406812, -0.72985, 0.781152, -0.562822, -0.270119, 0.299722, -0.9176, -0.260994, 0.505814, -0.367473, 0.780419, 0.193182, -0.594623, 0.780419, 0.29548, -0.909452, 0.292459, 0.773614, -0.562059, 0.292459, 0.29548, -0.909452, 0.292459, 0.299722, -0.9176, -0.260994, 0.211371, -0.658406, -0.722343, 0.299722, -0.9176, -0.260994, -0.299722, -0.9176, -0.260994, 0.193182, -0.594623, 0.780419, -0.193182, -0.594623, 0.780419, -0.29548, -0.909452, 0.292459, 0.29548, -0.909452, 0.292459, -0.29548, -0.909452, 0.292459, -0.299722, -0.9176, -0.260994, -0.299722, -0.9176, -0.260994, -0.781152, -0.562822, -0.270119, -0.549333, -0.406812, -0.72985, -0.193182, -0.594623, 0.780419, -0.505814, -0.367473, 0.780419, -0.773614, -0.562059, 0.292459, -0.29548, -0.909452, 0.292459, -0.773614, -0.562059, 0.292459, -0.781152, -0.562822, -0.270119, 0.007508, 0.086612, -0.996185, -0.638356, 0.067324, -0.766747, -0.573962, 0.453322, -0.681906, -0.958647, 0.004791, -0.284524, -0.956267, 0.0, 0.292459, -0.773614, 0.562059, 0.292459, -0.625202, 0.0, 0.780419, 0.0, 0.0, 1.0, -0.505814, 0.367473, 0.780419, -0.958647, 0.004791, -0.284524, -0.773614, 0.562059, -0.292459, -0.573962, 0.453322, -0.681906, -0.625202, 0.0, 0.780419, -0.505814, 0.367473, 0.780419, -0.773614, 0.562059, 0.292459, 0.007508, 0.086612, -0.996185, -0.573962, 0.453322, -0.681906, -0.217444, 0.672048, -0.707816, -0.505814, 0.367473, 0.780419, 0.0, 0.0, 1.0, -0.193182, 0.594623, 0.780419, 0.007508, 0.086612, -0.996185, -0.217444, 0.672048, -0.707816, 0.217444, 0.672048, -0.707816, -0.193182, 0.594623, 0.780419, 0.0, 0.0, 1.0, 0.193182, 0.594623, 0.780419, 0.007508, 0.086612, -0.996185, 0.217444, 0.672048, -0.707816, 0.573962, 0.453322, -0.681906, 0.193182, 0.594623, 0.780419, 0.0, 0.0, 1.0, 0.505814, 0.367473, 0.780419, 0.007508, 0.086612, -0.996185, 0.573962, 0.453322, -0.681906, 0.638356, 0.067324, -0.766747, 0.505814, 0.367473, 0.780419, 0.0, 0.0, 1.0, 0.625202, 0.0, 0.780419, 0.007508, 0.086612, -0.996185, 0.638356, 0.067324, -0.766747, 0.549333, -0.406812, -0.72985, 0.625202, 0.0, 0.780419, 0.0, 0.0, 1.0, 0.505814, -0.367473, 0.780419, 0.007508, 0.086612, -0.996185, 0.549333, -0.406812, -0.72985, 0.211371, -0.658406, -0.722343, 0.505814, -0.367473, 0.780419, 0.0, 0.0, 1.0, 0.193182, -0.594623, 0.780419, 0.007508, 0.086612, -0.996185, 0.211371, -0.658406, -0.722343, -0.211371, -0.658406, -0.722343, 0.193182, -0.594623, 0.780419, 0.0, 0.0, 1.0, -0.193182, -0.594623, 0.780419, 0.007508, 0.086612, -0.996185, -0.211371, -0.658406, -0.722343, -0.549333, -0.406812, -0.72985, -0.193182, -0.594623, 0.780419, 0.0, 0.0, 1.0, -0.505814, -0.367473, 0.780419, -0.781152, -0.562822, -0.270119, -0.958647, 0.004791, -0.284524, -0.638356, 0.067324, -0.766747, -0.505814, -0.367473, 0.780419, -0.625202, 0.0, 0.780419, -0.956267, 0.0, 0.292459, 0.007508, 0.086612, -0.996185, -0.549333, -0.406812, -0.72985, -0.638356, 0.067324, -0.766747, -0.781152, -0.562822, -0.270119, -0.773614, -0.562059, 0.292459, -0.956267, 0.0, 0.292459, -0.505814, -0.367473, 0.780419, 0.0, 0.0, 1.0, -0.625202, 0.0, 0.780419, 0.160131, 0.9523, -0.259651, 0.706992, -0.51561, -0.483993, -0.889126, -0.268899, -0.370281, 0.706992, -0.51561, -0.483993, 0.160131, 0.9523, -0.259651, 0.007508, 0.086612, -0.996185, -0.889126, -0.268899, -0.370281, 0.706992, -0.51561, -0.483993, 0.007508, 0.086612, -0.996185, -0.889126, -0.268899, -0.370281, 0.007508, 0.086612, -0.996185, 0.160131, 0.9523, -0.259651, -0.573962, 0.453322, -0.681906, -0.773614, 0.562059, -0.292459, -0.217444, 0.672048, -0.707816, -0.29548, 0.909452, 0.292459, -0.773614, 0.562059, 0.292459, -0.193182, 0.594623, 0.780419, -0.773614, 0.562059, -0.292459, -0.773614, 0.562059, 0.292459, -0.29548, 0.909452, -0.292459, 0.217444, 0.672048, -0.707816, -0.217444, 0.672048, -0.707816, 0.29548, 0.909452, -0.292459, -0.29548, 0.909452, 0.292459, -0.193182, 0.594623, 0.780419, 0.29548, 0.909452, 0.292459, -0.29548, 0.909452, -0.292459, -0.29548, 0.909452, 0.292459, 0.29548, 0.909452, -0.292459, 0.573962, 0.453322, -0.681906, 0.217444, 0.672048, -0.707816, 0.773614, 0.562059, -0.292459, 0.29548, 0.909452, 0.292459, 0.193182, 0.594623, 0.780419, 0.773614, 0.562059, 0.292459, 0.773614, 0.562059, -0.292459, 0.29548, 0.909452, -0.292459, 0.773614, 0.562059, 0.292459, 0.638356, 0.067324, -0.766747, 0.573962, 0.453322, -0.681906, 0.958647, 0.004791, -0.284524, 0.773614, 0.562059, 0.292459, 0.505814, 0.367473, 0.780419, 0.956267, 0.0, 0.292459, 0.773614, 0.562059, -0.292459, 0.773614, 0.562059, 0.292459, 0.958647, 0.004791, -0.284524, 0.549333, -0.406812, -0.72985, 0.638356, 0.067324, -0.766747, 0.781152, -0.562822, -0.270119, 0.956267, 0.0, 0.292459, 0.625202, 0.0, 0.780419, 0.773614, -0.562059, 0.292459, 0.958647, 0.004791, -0.284524, 0.956267, 0.0, 0.292459, 0.781152, -0.562822, -0.270119, 0.211371, -0.658406, -0.722343, 0.549333, -0.406812, -0.72985, 0.299722, -0.9176, -0.260994, 0.773614, -0.562059, 0.292459, 0.505814, -0.367473, 0.780419, 0.29548, -0.909452, 0.292459, 0.781152, -0.562822, -0.270119, 0.773614, -0.562059, 0.292459, 0.299722, -0.9176, -0.260994, -0.211371, -0.658406, -0.722343, 0.211371, -0.658406, -0.722343, -0.299722, -0.9176, -0.260994, 0.29548, -0.909452, 0.292459, 0.193182, -0.594623, 0.780419, -0.29548, -0.909452, 0.292459, 0.299722, -0.9176, -0.260994, 0.29548, -0.909452, 0.292459, -0.299722, -0.9176, -0.260994, -0.211371, -0.658406, -0.722343, -0.299722, -0.9176, -0.260994, -0.549333, -0.406812, -0.72985, -0.29548, -0.909452, 0.292459, -0.193182, -0.594623, 0.780419, -0.773614, -0.562059, 0.292459, -0.299722, -0.9176, -0.260994, -0.29548, -0.909452, 0.292459, -0.781152, -0.562822, -0.270119, -0.773614, 0.562059, -0.292459, -0.958647, 0.004791, -0.284524, -0.773614, 0.562059, 0.292459, -0.638356, 0.067324, -0.766747, -0.958647, 0.004791, -0.284524, -0.573962, 0.453322, -0.681906, -0.956267, 0.0, 0.292459, -0.625202, 0.0, 0.780419, -0.773614, 0.562059, 0.292459, -0.549333, -0.406812, -0.72985, -0.781152, -0.562822, -0.270119, -0.638356, 0.067324, -0.766747, -0.773614, -0.562059, 0.292459, -0.505814, -0.367473, 0.780419, -0.956267, 0.0, 0.292459, -0.958647, 0.004791, -0.284524, -0.781152, -0.562822, -0.270119, -0.956267, 0.0, 0.292459],

    "colors": [0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.678431, 0.141176, 0.141176, 0.690196, 0.152941, 0.156863, 0.933333, 0.623529, 0.690196, 0.913725, 0.007843, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.690196, 0.152941, 0.156863, 0.756863, 0.184314, 0.223529, 0.913725, 0.007843, 0.062745, 0.913725, 0.007843, 0.062745, 0.913725, 0.007843, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.756863, 0.184314, 0.223529, 0.682353, 0.145098, 0.14902, 0.921569, 0.003922, 0.062745, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.921569, 0.003922, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.682353, 0.145098, 0.14902, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.921569, 0.003922, 0.062745, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.686275, 0.113725, 0.156863, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.929412, 0.0, 0.058824, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.92549, 0.0, 0.058824, 0.929412, 0.0, 0.058824, 0.92549, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.964706, 0.384314, 0.411765, 0.92549, 0.0, 0.058824, 0.964706, 0.384314, 0.411765, 0.678431, 0.141176, 0.141176, 0.698039, 0.156863, 0.164706, 0.678431, 0.141176, 0.141176, 0.815686, 0.152941, 0.227451, 0.678431, 0.141176, 0.141176, 0.682353, 0.145098, 0.145098, 0.894118, 0.047059, 0.094118, 0.964706, 0.384314, 0.411765, 0.894118, 0.047059, 0.094118, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.85098, 0.152941, 0.247059, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.933333, 0.623529, 0.690196, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.560784, 0.082353, 0.121569, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.690196, 0.152941, 0.156863, 0.560784, 0.082353, 0.121569, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.690196, 0.152941, 0.156863, 0.243137, 0.0, 0.015686, 0.756863, 0.184314, 0.223529, 0.560784, 0.082353, 0.121569, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.756863, 0.184314, 0.223529, 0.243137, 0.0, 0.015686, 0.682353, 0.145098, 0.14902, 0.560784, 0.082353, 0.121569, 0.678431, 0.141176, 0.141176, 0.796078, 0.14902, 0.211765, 0.682353, 0.145098, 0.14902, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.690196, 0.098039, 0.164706, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.65098, 0.086275, 0.145098, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.65098, 0.086275, 0.145098, 0.85098, 0.152941, 0.247059, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.541176, 0.07451, 0.121569, 0.772549, 0.14902, 0.196078, 0.815686, 0.152941, 0.227451, 0.678431, 0.141176, 0.141176, 0.243137, 0.0, 0.015686, 0.682353, 0.145098, 0.145098, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.85098, 0.152941, 0.247059, 0.682353, 0.145098, 0.145098, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.541176, 0.07451, 0.121569, 0.815686, 0.152941, 0.227451, 0.85098, 0.152941, 0.247059, 0.678431, 0.141176, 0.141176, 0.890196, 0.027451, 0.07451, 0.929412, 0.0, 0.058824, 0.682353, 0.145098, 0.145098, 0.243137, 0.0, 0.015686, 0.678431, 0.141176, 0.141176, 0.239216, 0.0, 0.015686, 0.239216, 0.0, 0.015686, 0.239216, 0.0, 0.015686, 0.239216, 0.0, 0.015686, 0.239216, 0.0, 0.015686, 0.560784, 0.082353, 0.121569, 0.513726, 0.070588, 0.109804, 0.239216, 0.0, 0.015686, 0.541176, 0.07451, 0.121569, 0.239216, 0.0, 0.015686, 0.560784, 0.082353, 0.121569, 0.25098, 0.003922, 0.019608, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.933333, 0.623529, 0.690196, 0.690196, 0.152941, 0.156863, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.690196, 0.152941, 0.156863, 0.913725, 0.007843, 0.062745, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.913725, 0.007843, 0.062745, 0.756863, 0.184314, 0.223529, 0.921569, 0.003922, 0.062745, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.921569, 0.003922, 0.062745, 0.686275, 0.113725, 0.156863, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.921569, 0.003922, 0.062745, 0.682353, 0.145098, 0.14902, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.921569, 0.003922, 0.062745, 0.678431, 0.141176, 0.141176, 0.654902, 0.098039, 0.145098, 0.686275, 0.113725, 0.156863, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.65098, 0.086275, 0.145098, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.92549, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.85098, 0.152941, 0.247059, 0.65098, 0.086275, 0.145098, 0.678431, 0.141176, 0.141176, 0.92549, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.964706, 0.384314, 0.411765, 0.678431, 0.141176, 0.141176, 0.92549, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.772549, 0.14902, 0.196078, 0.698039, 0.156863, 0.164706, 0.815686, 0.152941, 0.227451, 0.964706, 0.384314, 0.411765, 0.678431, 0.141176, 0.141176, 0.894118, 0.047059, 0.094118, 0.678431, 0.141176, 0.141176, 0.964706, 0.384314, 0.411765, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.85098, 0.152941, 0.247059, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.933333, 0.623529, 0.690196, 0.815686, 0.152941, 0.227451, 0.678431, 0.141176, 0.141176, 0.85098, 0.152941, 0.247059, 0.890196, 0.027451, 0.07451, 0.682353, 0.145098, 0.145098, 0.929412, 0.0, 0.058824, 0.678431, 0.141176, 0.141176, 0.678431, 0.141176, 0.141176, 0.929412, 0.0, 0.058824],

    "uvs": [],

    "faces": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251],

    "bones": [],

    "boneWeights": [],

    "boneIndices": [],

    "animations": {}
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

var _game_object = __webpack_require__(1);

var _game_object2 = _interopRequireDefault(_game_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreePool = function () {
    function TreePool(mesh) {
        _classCallCheck(this, TreePool);

        this.treeMesh = mesh;
        this.pool = [];
    }

    _createClass(TreePool, [{
        key: "pullTree",
        value: function pullTree(id) {
            var transformation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MathUtils.identityMatrix4;

            var tree = void 0;
            if (this.pool.length == 0) {
                tree = new _game_object2.default(this.treeMesh, transformation, true);
            } else {
                tree = this.pool[this.pool.length - 1];
                tree.setTransformationMatrix(transformation);
                this.pool.pop();
            }
            tree.id = "treeObstacle" + id;
            return tree;
        }
    }, {
        key: "releaseTree",
        value: function releaseTree(tree) {
            this.pool.push(tree);
        }
    }]);

    return TreePool;
}();

exports.default = TreePool;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "vertices": [1.557284, -4.881069, 1.220433, -2.305502, -4.881067, 1.220433, 0.265122, -1.595123, 15.595764, 5.357604, 3.060327, 2.000748, 1.557284, -4.881069, 1.220433, 0.265122, -1.595123, 15.595764, -2.305502, -4.881067, 1.220433, -5.014175, 2.409782, 3.088122, 0.265122, -1.595123, 15.595764, -0.217849, -0.647796, 18.588009, 0.149692, 0.434673, 18.588009, 0.149692, 0.434673, -2.595972, 0.149692, 0.434673, 18.588009, 0.517232, -0.647796, 18.588009, 0.517232, -0.647796, -2.595972, -0.217849, -0.647796, 18.588009, 0.517232, -0.647796, 18.588009, 0.149692, 0.434673, 18.588009, -0.217849, -0.647796, -2.595972, 0.517232, -0.647796, -2.595972, 0.517232, -0.647796, 18.588009, 1.835783, 2.397462, 16.168344, 1.178417, -2.402114, 16.409208, 0.074321, -0.154875, 22.801958, 1.178417, -2.402114, 16.409208, -1.606885, -2.66519, 16.403688, 0.074321, -0.154875, 22.801958, 1.557284, -4.881069, 9.418711, -2.552244, -6.14147, 10.179499, -1.606885, -2.66519, 16.403688, 3.756239, 2.69887, 10.140981, 1.557284, -4.881069, 9.418711, 1.178417, -2.402114, 16.409208, -5.047791, 2.294961, 10.932926, -2.981071, 2.698907, 16.168344, -1.606885, -2.66519, 16.403688, -1.606885, -2.66519, 16.403688, -2.981071, 2.698907, 16.168344, 0.074321, -0.154875, 22.801958, -0.217849, -0.647796, -2.595972, 0.149692, 0.434673, -2.595972, 0.517232, -0.647796, -2.595972, -2.118086, 4.178652, 1.220433, 1.7447, 4.17865, 1.220433, -0.825924, 1.598287, 15.595764, -5.918405, -2.057512, 2.000748, -2.118086, 4.178652, 1.220433, -0.825924, 1.598287, 15.595764, 1.7447, 4.17865, 1.220433, 4.453373, -1.546658, 3.088122, -0.825924, 1.598287, 15.595764, -2.396585, -1.536982, 16.168344, -1.739219, 2.231995, 16.409208, 0.060611, 0.03945, 22.883163, -1.739219, 2.231995, 16.409208, 1.046084, 2.438582, 16.403688, 0.060611, 0.03945, 22.883163, 1.991442, 5.168411, 10.179499, 1.046084, 2.438582, 16.403688, -1.739219, 2.231995, 16.409208, -4.317041, -1.77367, 10.140981, -2.118086, 4.178652, 9.418711, -1.739219, 2.231995, 16.409208, 4.486988, -1.456492, 10.932926, 2.420269, -1.773699, 16.168344, 1.046084, 2.438582, 16.403688, 1.046084, 2.438582, 16.403688, 2.420269, -1.773699, 16.168344, 0.060611, 0.03945, 22.883163, -0.217849, -0.647796, -2.595972, -0.217849, -0.647796, 18.588009, 0.149692, 0.434673, -2.595972, 0.149692, 0.434673, -2.595972, 0.149692, 0.434673, 18.588009, 0.517232, -0.647796, -2.595972, -0.217849, -0.647796, 18.588009, -0.217849, -0.647796, -2.595972, 0.517232, -0.647796, 18.588009, 1.178417, -2.402114, 16.409208, 1.557284, -4.881069, 9.418711, -1.606885, -2.66519, 16.403688, 1.835783, 2.397462, 16.168344, 3.756239, 2.69887, 10.140981, 1.178417, -2.402114, 16.409208, -2.552244, -6.14147, 10.179499, -5.047791, 2.294961, 10.932926, -1.606885, -2.66519, 16.403688, -2.118086, 4.178652, 9.418711, 1.991442, 5.168411, 10.179499, -1.739219, 2.231995, 16.409208, -2.396585, -1.536982, 16.168344, -4.317041, -1.77367, 10.140981, -1.739219, 2.231995, 16.409208, 1.991442, 5.168411, 10.179499, 4.486988, -1.456492, 10.932926, 1.046084, 2.438582, 16.403688],

    "normals": [-0.483688, 0.842769, -0.236122, 0.480911, 0.832118, -0.276193, -0.043703, 0.92346, -0.381115, -0.880398, 0.438948, -0.179449, -0.483688, 0.842769, -0.236122, -0.043703, 0.92346, -0.381115, 0.480911, 0.832118, -0.276193, 0.885617, 0.39256, -0.248085, -0.043703, 0.92346, -0.381115, -0.672292, -0.481735, 0.562059, 0.0, 0.839137, 0.54387, 0.0, 0.839137, -0.54387, 0.0, 0.839137, 0.54387, 0.672292, -0.481735, 0.562059, 0.672292, -0.481735, -0.562059, -0.672292, -0.481735, 0.562059, 0.672292, -0.481735, 0.562059, 0.0, 0.839137, 0.54387, -0.672292, -0.481735, -0.562059, 0.672292, -0.481735, -0.562059, 0.672292, -0.481735, 0.562059, -0.957732, 0.117985, -0.262307, -0.65627, 0.673482, -0.340129, -0.019562, 0.762871, -0.646229, -0.65627, 0.673482, -0.340129, 0.522965, 0.73104, -0.438185, -0.019562, 0.762871, -0.646229, -0.646443, 0.688803, -0.328013, 0.248054, 0.829218, -0.500809, 0.522965, 0.73104, -0.438185, -0.951964, 0.222114, -0.21073, -0.646443, 0.688803, -0.328013, -0.65627, 0.673482, -0.340129, 0.905881, 0.258431, -0.335429, 0.909146, 0.217292, -0.355266, 0.522965, 0.73104, -0.438185, 0.522965, 0.73104, -0.438185, 0.909146, 0.217292, -0.355266, -0.019562, 0.762871, -0.646229, -0.672292, -0.481735, -0.562059, 0.0, 0.839137, -0.54387, 0.672292, -0.481735, -0.562059, 0.452254, -0.869869, -0.196783, -0.451094, -0.860897, -0.235176, 0.035829, -0.950804, -0.307627, 0.831965, -0.528214, -0.169591, 0.452254, -0.869869, -0.196783, 0.035829, -0.950804, -0.307627, -0.451094, -0.860897, -0.235176, -0.846004, -0.477554, -0.237007, 0.035829, -0.950804, -0.307627, 0.942381, -0.145085, -0.30137, 0.647053, -0.669759, -0.364269, -0.060701, -0.809687, -0.583667, 0.647053, -0.669759, -0.364269, -0.517136, -0.753868, -0.405225, -0.060701, -0.809687, -0.583667, -0.318857, -0.868831, -0.378704, -0.517136, -0.753868, -0.405225, 0.647053, -0.669759, -0.364269, 0.935667, -0.291879, -0.198248, 0.636647, -0.733268, -0.238685, 0.647053, -0.669759, -0.364269, -0.887112, -0.328959, -0.32371, -0.906217, -0.27781, -0.318674, -0.517136, -0.753868, -0.405225, -0.517136, -0.753868, -0.405225, -0.906217, -0.27781, -0.318674, -0.060701, -0.809687, -0.583667, -0.672292, -0.481735, -0.562059, -0.672292, -0.481735, 0.562059, 0.0, 0.839137, -0.54387, 0.0, 0.839137, -0.54387, 0.0, 0.839137, 0.54387, 0.672292, -0.481735, -0.562059, -0.672292, -0.481735, 0.562059, -0.672292, -0.481735, -0.562059, 0.672292, -0.481735, 0.562059, -0.65627, 0.673482, -0.340129, -0.646443, 0.688803, -0.328013, 0.522965, 0.73104, -0.438185, -0.957732, 0.117985, -0.262307, -0.951964, 0.222114, -0.21073, -0.65627, 0.673482, -0.340129, 0.248054, 0.829218, -0.500809, 0.905881, 0.258431, -0.335429, 0.522965, 0.73104, -0.438185, 0.636647, -0.733268, -0.238685, -0.318857, -0.868831, -0.378704, 0.647053, -0.669759, -0.364269, 0.942381, -0.145085, -0.30137, 0.935667, -0.291879, -0.198248, 0.647053, -0.669759, -0.364269, -0.318857, -0.868831, -0.378704, -0.887112, -0.328959, -0.32371, -0.517136, -0.753868, -0.405225],

    "colors": [],

    "uvs": [0.478762, 0.015432, 0.731847, 0.015432, 0.478762, 0.993737, 0.225678, 0.015432, 0.478762, 0.015432, 0.225678, 0.993737, 0.731847, 0.015432, 0.984932, 0.015432, 0.731847, 0.993737, 0.15441, 0.171148, 0.15441, -0.011232, 0.15441, -0.011232, 0.009955, -0.011232, 0.009955, 0.171148, 0.009955, 0.171148, 0.15441, 0.171148, 0.009955, 0.171148, 0.15441, -0.011232, 0.15441, 0.171148, 0.009955, 0.171148, 0.009955, 0.171148, 0.225678, 0.504585, 0.478762, 0.504584, 0.225678, 0.993737, 0.478762, 0.504584, 0.731847, 0.504585, 0.478762, 0.993737, 0.478762, 0.015432, 0.731847, 0.015432, 0.731847, 0.504585, 0.225678, 0.015432, 0.478762, 0.015432, 0.478762, 0.504584, 0.984932, 0.015432, 0.984932, 0.504585, 0.731847, 0.504585, 0.731847, 0.504585, 0.984932, 0.504585, 0.731847, 0.993737, 0.15441, 0.171148, 0.009955, -0.011232, 0.009955, 0.171148, 0.478762, 0.015432, 0.731847, 0.015432, 0.478762, 0.993737, 0.225678, 0.015432, 0.478762, 0.015432, 0.225678, 0.993737, 0.731847, 0.015432, 0.984932, 0.015432, 0.731847, 0.993737, 0.225678, 0.504585, 0.478762, 0.504584, 0.225678, 0.993737, 0.478762, 0.504584, 0.731847, 0.504585, 0.478762, 0.993737, 0.731847, 0.015432, 0.731847, 0.504585, 0.478762, 0.504584, 0.225678, 0.015432, 0.478762, 0.015432, 0.478762, 0.504584, 0.984932, 0.015432, 0.984932, 0.504585, 0.731847, 0.504585, 0.731847, 0.504585, 0.984932, 0.504585, 0.731847, 0.993737, 0.15441, 0.171148, 0.15441, 0.171148, 0.15441, -0.011232, 0.009955, -0.011232, 0.009955, -0.011232, 0.009955, 0.171148, 0.15441, 0.171148, 0.15441, 0.171148, 0.009955, 0.171148, 0.478762, 0.504584, 0.478762, 0.015432, 0.731847, 0.504585, 0.225678, 0.504585, 0.225678, 0.015432, 0.478762, 0.504584, 0.731847, 0.015432, 0.984932, 0.015432, 0.731847, 0.504585, 0.478762, 0.015432, 0.731847, 0.015432, 0.478762, 0.504584, 0.225678, 0.504585, 0.225678, 0.015432, 0.478762, 0.504584, 0.731847, 0.015432, 0.984932, 0.015432, 0.731847, 0.504585],

    "faces": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95],

    "bones": [],

    "boneWeights": [],

    "boneIndices": [],

    "animations": {}
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {"vertexNormalIndices":[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5],"vertexNormals":[0,-1,0,0,-1,-2.88361e-7,0,-1,0,0,-1,0,0,-1,0,0,-1,0],"vertexPositionIndices":[1,2,3,5,7,4,9,10,11,1,0,2,5,6,7,9,8,10],"vertexPositions":[-44.8994,0.05830764,41.70965,-42.68512,0.05830746,41.70965,-44.89939,0.05830627,-31.0142,-42.68511,0.05830627,-31.0142,42.86183,0.05830496,26.30216,42.86181,0.05830061,41.30216,-42.68512,0.05830746,41.30216,-42.68511,0.05830627,26.30216,42.67117,0.05830764,41.70965,44.88545,0.05830746,41.70965,42.67119,0.05830627,-31.0142,44.88547,0.05830627,-31.0142],"vertexColors":[],"vertexColorIndices":[],"jointParents":{"Bone":null},"vertexUVIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"vertexUVs":[0.06513917,0.8626151,0.05330669,0.6880213,0.06513917,0.6880214,2.708732,0.9698154,-1.871233,0.01333433,2.708734,0.01333367,0.06513917,0.8626151,0.05330669,0.6880213,0.06513917,0.6880214,0.06513917,0.8626151,0.05330681,0.8626151,0.05330669,0.6880213,2.708732,0.9698154,-1.871234,0.9698154,-1.871233,0.01333433,0.06513917,0.8626151,0.05330681,0.8626151,0.05330669,0.6880213]}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {"vertexNormalIndices":[0,1,2,3,4,5,1,6,7,8,9,4,10,8,3,1,11,12,13,14,15,5,16,17,18,17,12,10,16,19,15,16,13,10,9,20,19,21,9,22,10,3,22,5,17,23,24,18,25,23,11,26,14,27,15,26,24,18,26,28,18,29,22,13,29,27,30,7,6,16,31,17,12,31,6,1,32,2,2,30,16,21,33,34,5,34,33,5,35,19,4,21,34,2,15,0,15,24,0,0,25,1,3,8,4,1,12,6,8,20,9,10,20,8,1,25,11,13,27,14,5,19,16,12,11,23,18,22,17,12,23,18,10,13,16,15,2,16,10,19,9,19,35,21,22,13,10,22,3,5,23,0,24,25,0,23,29,28,27,28,26,27,15,14,26,18,24,26,18,28,29,13,22,29,6,31,30,30,32,7,16,30,31,12,17,31,1,7,32,2,32,30,21,35,33,5,4,34,5,33,35,4,9,21],"vertexNormals":[0.1578441,0.07709085,0.9844502,-0.2435438,0.5958583,0.7652708,-0.2607595,-0.3937944,0.8814366,0.6830729,0.1380062,-0.717193,-0.5637241,-0.6948965,-0.4464685,-0.797869,-0.0900017,-0.5960747,-0.8359538,0.3990397,0.3767606,-0.8025128,0.1959358,0.5635444,0.7628527,-0.6322009,-0.1355654,-0.2324382,-0.4536756,0.8603203,0.3912606,-0.3868658,0.8350149,0.6799009,0.6213961,-0.3893606,-0.5481228,0.6993754,-0.4587324,0.3417558,-0.851948,0.3967211,0.9343093,-0.06503599,0.3504804,0.4040173,-0.2824581,0.8700503,-0.1534189,-0.4457603,0.8819073,-0.7695468,-0.3245128,-0.5499902,0.7566905,0.1214355,-0.6423965,-0.2692422,0.6817729,0.6802164,0.4464956,-0.2739402,0.8518208,-0.7151586,-0.2561484,0.6503356,0.8723926,-0.2313969,-0.4305655,0.8389486,0.03027522,-0.5433679,0.2152521,0.5606687,0.7995732,0.5735419,0.1811602,0.7988935,0.7396067,0.5798683,0.3416645,0.8152847,-0.4512845,0.3628404,0.8285446,0.5221894,0.2020699,0.911274,-0.3381227,0.2350592,-0.6468455,-0.6713521,0.3617696,-0.8574784,-0.3455123,0.3812507,-0.83705,-0.3543279,0.4168922,-0.8633521,0.4751504,0.1698688,-0.8550981,-0.4235205,0.2990615,-0.5927205,0.6913902,0.4131128],"vertexPositionIndices":[21,6,12,17,3,14,6,29,28,1,2,3,15,1,17,6,5,7,10,22,13,14,8,9,18,9,7,15,8,16,13,8,10,15,2,0,16,34,2,11,15,17,11,14,9,20,19,18,4,20,5,25,22,23,13,25,19,18,25,26,18,24,11,10,24,23,31,28,29,8,30,9,7,30,29,6,27,12,12,31,8,34,32,33,14,33,32,14,35,16,3,34,33,12,13,21,13,19,21,21,4,6,17,1,3,6,7,29,1,0,2,15,0,1,6,4,5,10,23,22,14,16,8,7,5,20,18,11,9,7,20,18,15,10,8,13,12,8,15,16,2,16,35,34,11,10,15,11,17,14,20,21,19,4,21,20,24,26,23,26,25,23,13,22,25,18,19,25,18,26,24,10,11,24,29,30,31,31,27,28,8,31,30,7,9,30,6,28,27,12,27,31,34,35,32,14,3,33,14,32,35,3,2,34],"vertexPositions":[9.13724,-8.441002,16.42844,21.40076,-14.86361,-6.043671,-8.205769,-8.477887,16.43557,-20.89053,-15.02145,-6.189342,9.193512,9.071981,20.0153,21.39018,15.35777,-6.241027,-8.214997,9.1348,20.02372,-20.91537,15.55163,-6.224918,-5.169699,-2.668061,15.12361,-23.00105,-2.229995,-7.516958,12.32366,-2.860654,14.46453,21.41224,-3.935491,-6.678593,-7.146565,1.508543,21.19001,11.80308,1.287835,20.92481,-20.98055,-5.485781,-6.357476,8.379414,-3.666539,13.62816,-8.332114,-3.142496,15.43783,20.89326,-7.531758,-10.6343,21.35365,5.993031,-6.578738,10.51145,5.281824,20.46234,21.42121,10.51972,-6.419772,5.929622,6.301643,19.05932,16.08014,1.73341,15.37579,16.35935,-0.7306554,11.60713,21.72446,-1.105398,-0.4456169,15.25643,4.204691,15.03962,21.67695,4.809314,-0.3727903,-13.11554,2.72943,17.00121,-13.74988,7.065863,16.38793,-21.05705,11.21178,1.681342,-22.16477,0.9264541,0.9901357,-11.9815,0.2096481,13.39752,-21.50366,-6.041234,-2.828486,-21.52686,-12.82521,-2.748916,-12.34281,-7.719856,13.13712,-12.3451,-3.757639,12.25144],"vertexColors":[0.9294118,0.9490196,1,0.9058824,0.9254902,1,0.8235294,0.8470588,0.8862745,0.4784314,0.4862745,0.4431372,0.4745098,0.4862745,0.4509804,0.4431372,0.4549019,0.4156863,0.9058824,0.9254902,1,0.6156863,0.6392157,0.6235294,0.7607843,0.7843137,0.8156863,0.5215687,0.5372549,0.4941176,0.772549,0.7960785,0.8235294,0.4745098,0.4901961,0.4509804,0.9098039,0.9294118,0.9960784,0.5215687,0.5372549,0.4941176,0.4784314,0.4862745,0.4431372,0.9058824,0.9254902,1,0.6509804,0.6588236,0.6784314,0.4823529,0.4980392,0.4588235,0.8352941,0.8588235,0.9019608,0.8745098,0.8901961,0.9568628,0.9058824,0.9254902,0.9882353,0.4431372,0.4549019,0.4196078,0.8156863,0.8431373,0.8784314,0.4470588,0.4588235,0.4235294,0.5176471,0.5294118,0.4862745,0.4470588,0.4588235,0.4235294,0.4823529,0.4980392,0.4588235,0.9098039,0.9294118,0.9960784,0.8156863,0.8392157,0.8784314,0.8509804,0.8745098,0.9254902,0.9058824,0.9254902,0.9882353,0.8156863,0.8431373,0.8784314,0.8352941,0.8588235,0.9019608,0.9098039,0.9294118,0.9960784,0.772549,0.8,0.8235294,0.8509804,0.8745098,0.9254902,0.8509804,0.8745098,0.9254902,0.7215687,0.7450981,0.7568628,0.772549,0.7960785,0.8235294,0.4980392,0.509804,0.4666666,0.9098039,0.9294118,0.9960784,0.4784314,0.4862745,0.4431372,0.4980392,0.509804,0.4666666,0.4431372,0.4549019,0.4156863,0.4470588,0.4588235,0.4235294,0.5019608,0.509804,0.4705882,0.9490196,0.9647059,1,0.4901961,0.4980392,0.4588235,0.9607843,0.9764706,1,0.5019608,0.509804,0.4705882,0.6509804,0.6588236,0.6784314,0.9058824,0.9215686,1,0.8745098,0.8901961,0.9568628,0.8313726,0.8509804,0.9019608,0.9058824,0.9254902,0.9882353,0.9058824,0.9215686,1,0.9490196,0.9647059,1,0.4901961,0.4980392,0.4588235,0.9058824,0.9215686,1,0.8352941,0.8509804,0.9098039,0.4901961,0.4980392,0.4588235,0.7764706,0.7921569,0.8313726,0.4980392,0.509804,0.4666666,0.8352941,0.8588235,0.9019608,0.7764706,0.7921569,0.8313726,0.8313726,0.8509804,0.9019608,0.6470589,0.6745098,0.6588236,0.7607843,0.7843137,0.8156863,0.6156863,0.6392157,0.6235294,0.8156863,0.8431373,0.8784314,0.5686275,0.5960785,0.5568628,0.4470588,0.4588235,0.4235294,0.4823529,0.4980392,0.4588235,0.5686275,0.5960785,0.5568628,0.6156863,0.6392157,0.6235294,0.9058824,0.9254902,1,0.7254902,0.7529412,0.7647059,0.8235294,0.8470588,0.8862745,0.8235294,0.8470588,0.8862745,0.6470589,0.6745098,0.6588236,0.8156863,0.8431373,0.8784314,0.7215687,0.7450981,0.7568628,0.5764706,0.6,0.5725491,0.5568628,0.5803922,0.5411765,0.4431372,0.4549019,0.4156863,0.5568628,0.5803922,0.5411765,0.5764706,0.6,0.5725491,0.4431372,0.4549019,0.4156863,0.7764706,0.7960785,0.8352941,0.8509804,0.8745098,0.9254902,0.4745098,0.4862745,0.4509804,0.7215687,0.7450981,0.7568628,0.5568628,0.5803922,0.5411765,0.8235294,0.8470588,0.8862745,0.9058824,0.9254902,0.9882353,0.9294118,0.9490196,1,0.9058824,0.9254902,0.9882353,0.9490196,0.9647059,1,0.9294118,0.9490196,1,0.9294118,0.9490196,1,0.9607843,0.9764706,1,0.9058824,0.9254902,1,0.4784314,0.4862745,0.4431372,0.5215687,0.5372549,0.4941176,0.4745098,0.4862745,0.4509804,0.9058824,0.9254902,1,0.4823529,0.4980392,0.4588235,0.6156863,0.6392157,0.6235294,0.5215687,0.5372549,0.4941176,0.8509804,0.8745098,0.9254902,0.772549,0.7960785,0.8235294,0.9098039,0.9294118,0.9960784,0.8509804,0.8745098,0.9254902,0.5215687,0.5372549,0.4941176,0.9058824,0.9254902,1,0.9607843,0.9764706,1,0.6509804,0.6588236,0.6784314,0.8352941,0.8588235,0.9019608,0.8313726,0.8509804,0.9019608,0.8745098,0.8901961,0.9568628,0.4431372,0.4549019,0.4196078,0.8509804,0.8745098,0.9254902,0.8156863,0.8431373,0.8784314,0.4823529,0.4980392,0.4588235,0.6509804,0.6588236,0.6784314,0.5019608,0.509804,0.4705882,0.5176471,0.5294118,0.4862745,0.4980392,0.509804,0.4666666,0.4470588,0.4588235,0.4235294,0.4823529,0.4980392,0.4588235,0.5019608,0.509804,0.4705882,0.5176471,0.5294118,0.4862745,0.9098039,0.9294118,0.9960784,0.8352941,0.8588235,0.9019608,0.8156863,0.8392157,0.8784314,0.9058824,0.9254902,0.9882353,0.8235294,0.8470588,0.8862745,0.8156863,0.8431373,0.8784314,0.9098039,0.9294118,0.9960784,0.8509804,0.8745098,0.9254902,0.772549,0.8,0.8235294,0.8509804,0.8745098,0.9254902,0.7764706,0.7960785,0.8352941,0.7215687,0.7450981,0.7568628,0.4980392,0.509804,0.4666666,0.8352941,0.8588235,0.9019608,0.9098039,0.9294118,0.9960784,0.4980392,0.509804,0.4666666,0.4784314,0.4862745,0.4431372,0.4431372,0.4549019,0.4156863,0.5019608,0.509804,0.4705882,0.9294118,0.9490196,1,0.9490196,0.9647059,1,0.9607843,0.9764706,1,0.9294118,0.9490196,1,0.5019608,0.509804,0.4705882,0.7764706,0.7921569,0.8313726,0.8352941,0.8509804,0.9098039,0.8313726,0.8509804,0.9019608,0.8352941,0.8509804,0.9098039,0.9058824,0.9215686,1,0.8313726,0.8509804,0.9019608,0.9058824,0.9254902,0.9882353,0.8745098,0.8901961,0.9568628,0.9058824,0.9215686,1,0.4901961,0.4980392,0.4588235,0.9490196,0.9647059,1,0.9058824,0.9215686,1,0.4901961,0.4980392,0.4588235,0.8352941,0.8509804,0.9098039,0.7764706,0.7921569,0.8313726,0.8352941,0.8588235,0.9019608,0.4980392,0.509804,0.4666666,0.7764706,0.7921569,0.8313726,0.6156863,0.6392157,0.6235294,0.5686275,0.5960785,0.5568628,0.6470589,0.6745098,0.6588236,0.6470589,0.6745098,0.6588236,0.7254902,0.7529412,0.7647059,0.7607843,0.7843137,0.8156863,0.8156863,0.8431373,0.8784314,0.6470589,0.6745098,0.6588236,0.5686275,0.5960785,0.5568628,0.4823529,0.4980392,0.4588235,0.4470588,0.4588235,0.4235294,0.5686275,0.5960785,0.5568628,0.9058824,0.9254902,1,0.7607843,0.7843137,0.8156863,0.7254902,0.7529412,0.7647059,0.8235294,0.8470588,0.8862745,0.7254902,0.7529412,0.7647059,0.6470589,0.6745098,0.6588236,0.7215687,0.7450981,0.7568628,0.7764706,0.7960785,0.8352941,0.5764706,0.6,0.5725491,0.4431372,0.4549019,0.4156863,0.4745098,0.4862745,0.4509804,0.5568628,0.5803922,0.5411765,0.4431372,0.4549019,0.4156863,0.5764706,0.6,0.5725491,0.7764706,0.7960785,0.8352941,0.4745098,0.4862745,0.4509804,0.772549,0.8,0.8235294,0.7215687,0.7450981,0.7568628],"vertexColorIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203],"jointParents":{"Bone":null}}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map