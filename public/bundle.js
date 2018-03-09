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
exports.UPDATE_INTERVAL = exports.DEFAULT_ANIMATION_FRAMERATE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_ANIMATION_FRAMERATE = exports.DEFAULT_ANIMATION_FRAMERATE = 60;
var UPDATE_INTERVAL = exports.UPDATE_INTERVAL = 33;
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
    if (!this.isStatic) setInterval(this.update.bind(this), UPDATE_INTERVAL);
    this.angularVelocity = MathUtils.IdentityQuaternion;
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

var mat4ToDualQuat = __webpack_require__(11);

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
      this.vertices = data.vertexPositions;
      this.faces = data.vertexPositionIndices;
      if (colored) {
        this.colors = Array(this.vertices.length);
        data.vertexColorIndices.forEach(function (colorIdx, positionInArray) {
          var outputPosition = _this.faces[positionInArray] * 3;
          for (var i = 0; i < 3; ++i) {
            _this.colors[outputPosition + i] = data.vertexColors[colorIdx * 3 + i];
          }
        });
      }

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
exports.addPoints = addPoints;
exports.updateSpeed = updateSpeed;
exports.updateTime = updateTime;
exports.setStartTime = setStartTime;
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

/***/ }),
/* 4 */
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


var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

var _webgl_utils = __webpack_require__(7);

var WebGLUtils = _interopRequireWildcard(_webgl_utils);

var _asset_utils = __webpack_require__(4);

var AssetUtils = _interopRequireWildcard(_asset_utils);

var _input = __webpack_require__(8);

var Input = _interopRequireWildcard(_input);

var _untitled = __webpack_require__(9);

var _untitled2 = _interopRequireDefault(_untitled);

var _game_object = __webpack_require__(1);

var _game_object2 = _interopRequireDefault(_game_object);

var _skybox = __webpack_require__(10);

var _skybox2 = _interopRequireDefault(_skybox);

var _character = __webpack_require__(18);

var _character2 = _interopRequireDefault(_character);

var _slope = __webpack_require__(22);

var _slope2 = _interopRequireDefault(_slope);

var _mesh = __webpack_require__(2);

var _mesh2 = _interopRequireDefault(_mesh);

var _hud = __webpack_require__(3);

var HUD = _interopRequireWildcard(_hud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

document.addEventListener("DOMContentLoaded", main);
function gameLoop(timestamp) {
  HUD.updateTime(timestamp);
  rasterizer.drawObjects.bind(rasterizer)(timestamp);
  window.requestAnimationFrame(gameLoop);
}
function main() {
  var rasterizer = new WebGLUtils.ObjectsRasterizer();
  (0, _slope2.default)(MathUtils.translationMatrix(0, -3, -4), rasterizer).then(function (slope) {
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
  HUD.setStartTime(Date.now());
  window.requestAnimationFrame(gameLoop);
  window.rasterizer = rasterizer;
  rasterizer.cameraTarget = character;
  slope.generateSegment();

  window.addEventListener('keydown', handleKeyDown(rasterizer));
  rasterizer.position[1] -= 2;
  rasterizer.position[0] += 0.3;
  rasterizer.rotation[0] -= 0.4;
  rasterizer.position[2] += 0.7;
  rasterizer.objects.slope = slope;
  rasterizer.position = [0, -6, 0];

  window.addEventListener("keydown", Input.keyDown(character));
  window.addEventListener("keyup", Input.keyUp(character));
};
var handleKeyDown = function handleKeyDown(rasterizer) {
  return function (e) {
    switch (e.key) {
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
        rasterizer.position[1] -= 0.1;
        break;
      case "s":
        rasterizer.position[2] += 0.1;
        break;
      case "d":
        rasterizer.position[2] -= 0.1;
        break;
    }
  };
};

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

var _hud = __webpack_require__(3);

var HUD = _interopRequireWildcard(_hud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_CAMERA_DIST = 1;
var BONE_INFLUENCES = 2;

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
    this.cameraDist = DEFAULT_CAMERA_DIST;
    this.viewMatrix = MathUtils.identityMatrix4;
    this.perspectiveMatrix = MathUtils.simple_perspective_matrix;
    this.compileDefaultShaders();
    //this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.rotation = [0, 0, 0];
    this.position = [0, 0, 0];

    this.objects = {};
    this.camera = new _game_object2.default();
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

        //fill the bones with identity matrix
        //  let identities = [];
        //  for(let i = 0; i < 20; ++i){
        //  identities = identities.concat(MathUtils.identityMatrix4);
        //  }
        // let composed = [];
        // let
        // const boneTransforms = obj.keys(currentAnimations).reduce(
        //   (accum, anim)=>{

        //   }
        // );
        var boneTransforms = obj.mixedAnimations;
        // for(let i = 0; i < boneTransforms.length; ++i){
        //   if(obj.mesh.bones[i].parent !== -1){
        //     composed.push(MathUtils.mat_4_multiply(
        //       composed[obj.mesh.bones[i].parent], boneTransforms[i]));
        //   }
        //   else{
        //     composed.push(boneTransforms[i]);
        //   }
        // }
        // let unBound = [];
        // for(let i = 0; i < boneTransforms.length; ++i){
        //   unBound = unBound.concat(MathUtils.mat_4_multiply(
        //     boneTransforms[i],
        //     MathUtils.inverse_mat4_rot_pos(obj.mesh.bones[i].bindPose)
        //     ));
        // }
        //for(let i = 0; i < boneTransforms.length; ++i){
        //  inverselyBound = inverselyBound.concat(
        //    MathUtils.mat_4_multiply(
        //      MathUtils.inverse_mat4_rot_pos(obj.mesh.bones[i].bindPose),
        //        boneTransforms[i],
        //    ));
        //}
        var boneTransformsLocation = this.gl.getUniformLocation(program, "boneTransforms");
        this.gl.uniform4fv(boneTransformsLocation, boneTransforms);
      }

      if (obj.mesh.textured) {
        var uvsAttrIndex = this.gl.getAttribLocation(program, "a_uvs");
        this.gl.vertexAttribPointer(uvsAttrIndex, 2, this.gl.FLOAT, false, strideLength, offset);
        this.gl.enableVertexAttribArray(uvsAttrIndex);
        offset += 8;
        this.gl.bindTexture(this.gl.TEXTURE_2D, obj.mesh.texture);

        // Fill the texture with a 1x1 blue pixel. TODO: Use actual image textures
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
    key: "positionCamera",
    value: function positionCamera() {
      this.camera.setPosition(this.cameraTarget.transformPoint([0, -18, 6]));
      var newPos = this.camera.getPosition();
      newPos[2] = this.cameraTarget.getPosition()[2] + 10;
      this.camera.setPosition(newPos);
      var rotation = this.cameraTarget.getRotation();
      var upLocal = this.cameraTarget.inverseTransformDirection([0, 0, 1]);
      var angleToUp = MathUtils.angleBetweenVectors([0, 0, 1], upLocal);
      var upAlignAxis = MathUtils.vectorCross(upLocal, [0, 0, 1]);
      this.camera.setRotation(MathUtils.multiplyQuaternions(MathUtils.axisAngleToQuaternion(upAlignAxis, angleToUp), rotation));
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
      HUD.updateTime(Date.now());
      this.adjustToCanvas();
      this.gl.clearColor(0.8, 0.8, 0.81, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      this.positionCamera();
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
    }
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var monkeyData = {
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
exports.default = monkeyData;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createSkyBox;

var _mesh = __webpack_require__(2);

var _mesh2 = _interopRequireDefault(_mesh);

var _skybox = __webpack_require__(17);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mat3FromMat4 = __webpack_require__(12);
var quatMultiply = __webpack_require__(13);
var quatFromMat3 = __webpack_require__(14);
var quatScale = __webpack_require__(15);

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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
module.exports = __webpack_require__(16);

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {"vertices":[-1000,999.999939,-1000.000122,-1000,1000.000122,999.999939,-1000,-999.999939,1000.000122,-1000,1000.000122,999.999939,1000,1000.000122,999.999939,1000,-999.999939,1000.000122,1000,1000.000122,999.999939,1000,999.999939,-1000.000122,1000,-1000.000122,-999.999939,1000,999.999939,-1000.000122,-1000,999.999939,-1000.000122,-1000,-1000.000122,-999.999939,1000,999.999939,-1000.000122,1000,1000.000122,999.999939,-1000,1000.000122,999.999939,-1000,-1000.000122,-999.999939,-1000,-999.999939,1000.000122,1000,-999.999939,1000.000122,-1000,-1000.000122,-999.999939,-1000,999.999939,-1000.000122,-1000,-999.999939,1000.000122,-1000,-999.999939,1000.000122,-1000,1000.000122,999.999939,1000,-999.999939,1000.000122,1000,-999.999939,1000.000122,1000,1000.000122,999.999939,1000,-1000.000122,-999.999939,1000,-1000.000122,-999.999939,1000,999.999939,-1000.000122,-1000,-1000.000122,-999.999939,-1000,999.999939,-1000.000122,1000,999.999939,-1000.000122,-1000,1000.000122,999.999939,1000,-1000.000122,-999.999939,-1000,-1000.000122,-999.999939,1000,-999.999939,1000.000122],"normals":[0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,-0.577349,0.577349,0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,-0.577349],"colors":[],"uvs":[0.333578,0.499511,0.666422,0.499511,0.666422,0.000245,0.666422,0.999266,0.666422,0.5,0.333578,0.5,0.333089,0.5,0.000245,0.5,0.000245,0.999266,0.333089,0.000245,0.000245,0.000245,0.000245,0.499511,0.999755,0.499511,0.999755,0.000245,0.666911,0.000245,0.666911,0.5,0.666911,0.999266,0.999755,0.999266,0.333578,0.000245,0.333578,0.499511,0.666422,0.000245,0.333578,0.999266,0.666422,0.999266,0.333578,0.5,0.333089,0.999266,0.333089,0.5,0.000245,0.999266,0.333089,0.499511,0.333089,0.000245,0.000245,0.499511,0.666911,0.499511,0.999755,0.499511,0.666911,0.000245,0.999755,0.5,0.666911,0.5,0.999755,0.999266],"faces":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"bones":[],"boneWeights":[],"boneIndices":[],"animations":{}}

/***/ }),
/* 18 */
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

var _hud = __webpack_require__(3);

var HUD = _interopRequireWildcard(_hud);

var _collision_utils = __webpack_require__(5);

var CollisionUtils = _interopRequireWildcard(_collision_utils);

var _asset_utils = __webpack_require__(4);

var AssetUtils = _interopRequireWildcard(_asset_utils);

var _snowboarder = __webpack_require__(19);

var _snowboarder2 = _interopRequireDefault(_snowboarder);

var _actions = __webpack_require__(20);

var _actions2 = _interopRequireDefault(_actions);

var _mesh = __webpack_require__(2);

var _mesh2 = _interopRequireDefault(_mesh);

var _mixer = __webpack_require__(21);

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
var STEER_ANIMATION_LERP_SPEED = 0.09;

var SNOWBOARD_RESTITUTION = 0.48;
var SNOWBOARD_FRICTION = [0.187, 0.01, 0.187, 1];
var BREAK_FRICTION = [0.04, 0.16, 0.04];
var COLLISION_INTENSITY_MIN_VELOCITY = 2;
var COLLISION_INTENSITY_MAX_VELOCITY = 10;
var SPEED_VOLUME_INTENSITY_MIN_VELOCITY = 0.2;
var SPEED_VOLUME_INTENSITY_MAX_VELOCITY = 20;
var HUD_DISPLAY_SPEED_MULTIPLIER = 8;

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
        slope = _ref.slope,
        transformationMatrix = _ref.transformationMatrix;

    _classCallCheck(this, Character);

    var _this = _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).call(this, mesh, transformationMatrix || MathUtils.identityMatrix4));

    _this.mesh = mesh;
    _this.boundingBox = boundingBox;
    _this.speed = 0.2;
    _this.fallSpeed = 0.15;
    _this.slope = slope;
    _this.currentSegmentNumber = 0;
    _this.input = { left: false, right: false, back: false };
    _this.velocity = [0, 1, 0];
    _this.localVelocity = [0, 0, 0];
    _this.localUp = [0, 0, 1];
    _this.friction = SNOWBOARD_FRICTION;
    _this.restitution = SNOWBOARD_RESTITUTION;
    _this.boxDimensions = [0.5, 5, 0.5];
    _this.capsuleRadius = 2;
    _this.setPosition([0, 0, 16]);
    _this.name = "snowboarder";
    _this.currentAnimations = {
      "neutral": { influence: 1 },
      "left": { influence: 0 },
      "right": { influence: 0 }
    };
    _this.currentAnimationFrame = 0;
    window.character = _this;
    _this.mixedAnimations = Array(_this.mesh.numBones * 8);
    _this.snowSound = _mixer2.default.play({ buffer: effectBuffers.sliding,
      priority: 10, volume: 0, loop: true });
    return _this;
  }

  _createClass(Character, [{
    key: "update",
    value: function update() {
      this._ensureAboveSurface();
      this._handleControls();
      this._getSurfaceData();
      this._moveForward();
      var surfaceOffset = MathUtils.subtractVectors(this.getPosition(), this.surfacePoint);
      var distanceFromSurface = MathUtils.vectorSquareMag(surfaceOffset);
      this.velocity[2] -= this.fallSpeed;
      this.transformDirectionInPlace([0, 0, 1], this.localUp);
      if (distanceFromSurface < this.capsuleRadius) {
        var snowVolume = MathUtils.vectorMag(this.velocity);
        snowVolume -= SPEED_VOLUME_INTENSITY_MIN_VELOCITY;
        if (snowVolume < 0) snowVolume = 0;
        snowVolume /= SPEED_VOLUME_INTENSITY_MAX_VELOCITY;
        this.snowSound.setVolume(snowVolume);
        this._planeAlign();
        MathUtils.projectVectorOntoPlaneInPlace(this.velocity, this.localUp, this.velocity);
        this.inverseTransformDirectionInPlace(this.velocity, this.localVelocity);
        this._applyFriction(this.localVelocity);
        this.transformDirectionInPlace(this.localVelocity, this.velocity);
      } else {
        this.snowSound.setVolume(0);
      }
      this.normalizeAnimationInfluence();
      this._mixAnimations();
      _get(Character.prototype.__proto__ || Object.getPrototypeOf(Character.prototype), "update", this).call(this);
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
      if (!this.floorTriangle) return;
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
      //first fill the lerped transform with the first animation we find,
      // which does not have influence 0, * its influence
      var firstAnimIndex = void 0;
      for (var i = 0; i < currentKeys.length; ++i) {
        if (this.currentAnimations[currentKeys[i]].influence !== 0) {
          firstAnimIndex = i;
          break;
        }
      }
      var anim = this.mesh.animations[currentKeys[firstAnimIndex]][0];
      var influence = this.currentAnimations[currentKeys[firstAnimIndex]].influence;
      for (var _i = 0; _i < anim.length; ++_i) {
        this.mixedAnimations[_i] = anim[_i] * influence;
      }
      // now add all the other anims * their influence
      for (var _i2 = firstAnimIndex + 1; _i2 < currentKeys.length; ++_i2) {
        if (this.currentAnimations[currentKeys[_i2]].influence === 0) continue;
        anim = this.mesh.animations[currentKeys[_i2]][0];
        influence = this.currentAnimations[currentKeys[_i2]].influence;
        for (var transformIdx = 0; transformIdx < anim.length; ++transformIdx) {
          this.mixedAnimations[transformIdx] += anim[transformIdx] * influence;
        }
      }
    }
  }, {
    key: "normalizeAnimationInfluence",
    value: function normalizeAnimationInfluence() {
      var magnitude = Object.values(this.currentAnimations).reduce(function (accum, anim) {
        return accum + anim.influence;
      }, 0);
      Object.values(this.currentAnimations).forEach(function (animation) {
        return animation.influence /= magnitude;
      });
    }
  }, {
    key: "steerAnimationLeft",
    value: function steerAnimationLeft() {
      this.fadeOutSteeringInfluence("right");
      this.fadeOutSteeringInfluence("neutral");
      this.fadeInSteeringInfluence("left");
    }
  }, {
    key: "steerAnimationRight",
    value: function steerAnimationRight() {
      this.fadeOutSteeringInfluence("left");
      this.fadeOutSteeringInfluence("neutral");
      this.fadeInSteeringInfluence("right");
    }
  }, {
    key: "steerAnimationNeutral",
    value: function steerAnimationNeutral() {
      this.fadeOutSteeringInfluence("right");
      this.fadeOutSteeringInfluence("left");
      this.fadeInSteeringInfluence("neutral");
    }
  }, {
    key: "fadeOutSteeringInfluence",
    value: function fadeOutSteeringInfluence(key) {
      this.currentAnimations[key].influence -= STEER_ANIMATION_LERP_SPEED;
      this.currentAnimations[key].influence = Math.max(this.currentAnimations[key].influence, 0);
    }
  }, {
    key: "fadeInSteeringInfluence",
    value: function fadeInSteeringInfluence(key) {
      this.currentAnimations[key].influence += STEER_ANIMATION_LERP_SPEED;
      this.currentAnimations[key].influence = Math.min(this.currentAnimations[key].influence, 1);
    }
  }, {
    key: "_handleControls",
    value: function _handleControls() {
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
      if (this.input.back) {
        this.friction = BREAK_FRICTION;
      } else {
        this.friction = SNOWBOARD_FRICTION;
      }
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
      // this.velocity = MathUtils.scaleVector(MathUtils.vectorNormalize(collisionData.normal),
      // MathUtils.vectorMag(this.velocity)); 

      // let pushBackVector = MathUtils.vectorNormalize(collisionData.normal);
      // pushBackVector = MathUtils.scaleVector(pushBackVector, 2);
      // this.setPosition(MathUtils.addVectors(this.getPosition(),
      //   pushBackVector));
      // const collisionOffsetVector = MathUtils.subtractVectors(
      //   collisionData.colliderPoint.slice(0,3),
      //   this.getPosition()
      // );
      //  let addAngularVelocAngle = MathUtils.angleBetweenVectors(
      //   this.velocity,
      //    MathUtils.scaleVector(collisionData.normal, -1)
      // );

      //  addAngularVelocAngle /= 15;
      //  addAngularVelocAngle *= MathUtils.vectorMag(this.velocity);
      //  const addAngularVelocAxis = MathUtils.vectorCross(
      //   this.velocity,
      //   MathUtils.scaleVector(collisionData.normal, -1)
      //  );
      //  this.addAngularVelocity(MathUtils.axisAngleToQuaternion(
      //    addAngularVelocAxis, addAngularVelocAngle)
      //  );
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
    key: "_moveForward",
    value: function _moveForward() {
      var edgeCollisionData = this.slope.boxIsBeyondEdge(this.getTransformationMatrix(), this.boxDimensions, this.currentSegmentNumber);
      var capsulePoint0 = this.getPosition();
      var capsulePoint1 = MathUtils.addVectors(this.getPosition(), this.velocity);
      var obstacleCollisionData = this.slope.capsuleCollidesWithObstacle(capsulePoint0, capsulePoint1, this.capsuleRadius, this.currentSegmentNumber);
      var balloonCount = this.slope.capsuleCollidesWithBalloons(capsulePoint0, capsulePoint1, this.capsuleRadius, this.currentSegmentNumber);
      if (balloonCount > 0) {
        _mixer2.default.play({ buffer: effectBuffers.collect });
        HUD.addPoints(balloonCount);
      }
      HUD.updateSpeed(MathUtils.vectorMag(this.velocity) * HUD_DISPLAY_SPEED_MULTIPLIER);
      // this.slope.boxCollidesWithObstacle(
      //   this.getTransformationMatrix(), this.boxDimensions,
      //   this.velocity, this.currentSegmentNumber);

      if (edgeCollisionData) {
        this._handleEdgeCollision(edgeCollisionData);
        return;
      } else if (obstacleCollisionData) {
        this._handleTreeCollision(obstacleCollisionData);
      }
      var nextWorldPos = MathUtils.projectVectorOntoPlane(this.velocity, this.surfacePlaneNormal);
      MathUtils.addVectorsInPlace(this.getPosition(), nextWorldPos, nextWorldPos);
      if (this.currentSegmentNumber < this.slope.segmentMatrices.length - 1 && this.slope.positionIsPastSegmentStart(nextWorldPos, this.currentSegmentNumber + 1)) {
        ++this.currentSegmentNumber;
        if (this.slope.notifyOfCharacterSegmentNumber(this.currentSegmentNumber)) {
          --this.currentSegmentNumber;
        }
        var triangleAfterMove = this.slope.getSurroundingTriangle(nextWorldPos, this.currentSegmentNumber) || this.floorTriangle;
      } else if (this.currentSegmentNumber > 0 && !this.slope.positionIsPastSegmentStart(nextWorldPos, this.currentSegmentNumber)) {
        --this.currentSegmentNumber;
        var _triangleAfterMove = this.slope.getSurroundingTriangle(nextWorldPos, this.currentSegmentNumber) || this.floorTriangle;
      }
    }
  }]);

  return Character;
}(_game_object2.default);

Character.transformedDirectionTemp = [0, 0, 0];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"vertexJointWeights":[{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"7":0.003463983,"10":0.996536},{"10":1},{"7":0.02490848,"10":0.9750915},{"7":0.0261588,"10":0.9738411},{"7":0.9034096,"10":0.09659034},{"7":0.8759885,"10":0.1240116},{"7":0.1209041,"10":0.879096},{"7":0.1185452,"10":0.8814548},{"9":1},{"9":1},{"9":1},{"9":1},{"9":1},{"9":1},{"9":1},{"9":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"5":1},{"5":1},{"5":1},{"5":1},{"5":1},{"5":1},{"5":1},{"5":1},{"1":0.912809,"7":0.08719098},{"1":0.936508,"7":0.063492},{"1":0.5323418,"7":0.4676582},{"1":0.2830502,"7":0.7169498},{"1":1},{"1":1},{"1":0.9242283,"7":0.07577168},{"1":0.9127049,"7":0.08729511},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"8":1},{"8":1},{"8":1},{"8":1},{"7":0.3190355,"8":0.6809645},{"7":0.5480422,"8":0.4519578},{"7":0.8556482,"8":0.1443518},{"7":0.1356266,"8":0.8643734},{"12":1},{"12":1},{"12":1},{"12":1},{"12":1},{"12":1},{"12":1},{"12":1}],"jointNamePositionIndex":{"root":0,"chest":1,"head":2,"arm_l":3,"arm1_l":4,"arm_r":5,"arm1_r":6,"hips":7,"leg_l":8,"leg1_l":9,"leg_r":10,"leg1_r":11,"board":12},"jointInverseBindPoses":{"0":[0.9999846,0.001514911,-0.005355298,0.1171227,0.005339145,0.01047319,0.9999309,-4.538868,0.00157088,-0.999944,0.01046496,0.06667679,0,0,0,1],"1":[0.9999845,0.001515746,-0.005355298,0.1171226,0.005339145,0.01047325,0.9999309,-4.708503,0.001571774,-0.999944,0.01046502,0.06667667,0,0,0,1],"2":[0.9999845,0.001512885,-0.005355298,0.1171228,0.005339145,0.01047307,0.9999309,-6.22218,0.001568853,-0.999944,0.01046484,0.06667751,0,0,0,1],"3":[0.9985148,0.000259414,0.0105465,-1.432514,0.01058655,-0.01044923,-0.999889,5.755089,-0.000149654,0.9999454,-0.01045143,-0.06854385,0,0,0,1],"4":[0.9985502,0.003638148,-0.00537002,-1.359839,-0.005270957,-0.01047301,-0.99993,4.602046,-0.003689527,0.9999385,-0.01045346,-0.06362706,0,0,0,1],"5":[0.9985899,0.001333951,0.01053577,1.487812,0.01058477,-0.01044929,-0.999889,5.801665,-0.00122565,0.9999445,-0.01046288,-0.06631743,0,0,0,1],"6":[0.9986261,0.003606796,-0.005369842,1.560928,-0.005274474,-0.01047295,-0.9999302,4.602241,-0.003661394,0.9999386,-0.01045358,-0.0701074,0,0,0,1],"7":[0.9999464,0.002169132,-0.009320795,0.1440452,-0.009297668,-0.01047521,-0.9999017,4.847153,-0.002266585,0.9999428,-0.01045775,-0.06678169,0,0,0,1],"8":[0.9999617,0.001603245,-0.007627308,-0.2950492,-0.007610201,-0.01047313,-0.999916,3.673811,-0.001683056,0.9999438,-0.01046377,-0.06659835,0,0,0,1],"9":[0.9999757,0.002013325,-0.005360484,-0.2986468,-0.005339264,-0.01047009,-0.9999306,1.572464,-0.002069354,0.9999431,-0.01046234,-0.06648194,0,0,0,1],"10":[0.9999628,0.000786273,-0.007618725,0.5273143,-0.007610201,-0.01047307,-0.999916,3.671943,-0.000866061,0.9999448,-0.01046997,-0.06635183,0,0,0,1],"11":[0.9999757,0.002013385,-0.005360543,0.5236644,-0.005339264,-0.01047009,-0.9999307,1.572463,-0.002069413,0.999943,-0.01046234,-0.06698387,0,0,0,1],"12":[0.9999845,0.001514971,-0.005355238,0.1171226,0.005339086,0.01047301,0.9999309,0.5960514,0.00157094,-0.999944,0.01046478,0.06667685,0,0,0,1]},"keyframes":{"0":[[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,-0.000001,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,-0.000001,1],[1.000001,0,0,0,0,1,0,0,0,0,1,0,-0.000001,0,-0.000002,1],[1.000001,0,0,0,0,1,0,0,0,0,1,0,0,0,-0.000001,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,-0.000001,1],[1,0,0,0,0,1,0,0,0,0,1,0,-0.000001,0,0,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0.000001,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]]},"vertexNormalIndices":[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29,30,30,30,31,31,31,32,32,32,33,33,33,34,34,34,35,35,35,36,36,36,37,37,37,38,38,38,39,39,39,40,40,40,41,41,41,42,42,42,43,43,43,44,44,44,45,45,45,46,46,46,47,47,47,48,48,48,49,49,49,50,50,50,51,51,51,52,52,52,53,53,53,54,54,54,55,55,55,56,56,56,57,57,57,58,58,58,59,59,59,60,60,60,61,61,61,62,62,62,63,63,63,64,64,64,65,65,65,66,66,66,67,67,67,68,68,68,69,69,69,70,70,70,71,71,71,72,72,72,73,73,73,74,74,74,75,75,75,76,76,76,77,77,77,78,78,78,79,79,79,80,80,80,81,81,81,82,82,82,83,83,83,84,84,84,85,85,85,86,86,86,87,87,87,88,88,88,89,89,89,90,90,90,91,91,91,92,92,92,93,93,93,94,94,94,95,95,95,96,96,96,97,97,97,98,98,98,99,99,99,100,100,100,101,101,101,102,102,102,103,103,103,104,104,104,105,105,105,106,106,106,107,107,107,108,108,108,109,109,109,110,110,110,111,111,111,112,112,112,113,113,113,114,114,114,115,115,115,116,116,116,117,117,117,118,118,118,119,119,119,120,120,120,121,121,121,122,122,122,123,123,123,124,124,124,125,125,125,126,126,126,127,127,127,128,128,128,129,129,129,130,130,130,131,131,131,132,132,132,133,133,133,134,134,134,135,135,135,136,136,136,137,137,137,138,138,138,139,139,139,140,140,140,141,141,141,142,142,142,143,143,143],"vertexNormals":[-0.004724204,-0.009587526,-0.999943,0.004724562,0.009587466,0.999943,0.9999889,0,-0.00472486,0.0000452991,-0.9999541,0.009587168,-0.9999889,0,0.00472474,-0.0000451311,0.9999541,-0.009587168,-0.004724621,-0.009587466,-0.999943,0.004723668,0.009587287,0.999943,0.9999889,0,-0.00472486,0.0000452095,-0.9999541,0.009587287,-0.9999889,1.7359e-7,0.00472474,-0.0000451239,0.9999541,-0.009587168,-0.004723489,-0.009587526,-0.999943,0.004724085,0.009587764,0.999943,0.9999889,0,-0.00472486,0.0000452112,-0.9999541,0.009587228,-0.9999889,0,0.00472474,-0.0000451045,0.9999541,-0.009587168,-0.004724025,-0.009587287,-0.999943,0.004724442,0.009587943,0.999943,0.9999889,5.16246e-7,-0.004725098,0.000045292,-0.9999541,0.009587347,-0.9999889,2.15102e-7,0.00472474,-0.000045112,0.9999541,-0.009587287,-0.00472331,-0.009587466,-0.999943,0.004725337,0.009587466,0.999943,0.9999396,-0.0000600864,-0.01100283,-0.00131464,-0.9604781,-0.2783523,-0.9999395,0.0000606167,0.01100283,0.001315236,0.9604781,0.2783529,-0.004724085,-0.009587466,-0.9999429,0.004724442,0.009587943,0.9999429,0.9999889,0,-0.004725039,0.0000453739,-0.9999541,0.009587347,-0.9999889,4.04257e-7,0.004724681,-0.000045122,0.9999541,-0.009587049,-0.004726171,-0.009587466,-0.999943,0.004724442,0.009587049,0.999943,0.9999889,-1.401e-7,-0.004724919,0.0000451716,-0.9999541,0.009587228,-0.9999889,1.7937e-7,0.00472474,-0.0000451767,0.9999541,-0.009587168,-0.00472486,-0.009587466,-0.999943,0.004725337,0.009587943,0.999943,0.9999889,0,-0.00472486,0.0000452318,-0.9999541,0.009587287,-0.9999889,0,0.00472486,-0.0000451132,0.9999541,-0.009587168,-0.004724204,-0.009587049,-0.999943,0.004724442,0.00958842,0.9999429,0.9999889,0,-0.004725039,0.0000453314,-0.9999541,0.009587347,-0.9999889,3.97478e-7,0.00472474,-0.0000452206,0.9999541,-0.009587109,-0.004723548,-0.009587049,-0.999943,0.004722654,0.009587466,0.999943,0.9999889,2.33739e-7,-0.004724979,0.0000453524,-0.9999541,0.009587168,-0.9999889,0,0.004724621,-0.0000450417,0.9999541,-0.009586691,-0.004723668,-0.009587466,-0.999943,0.004723668,0.009587287,0.999943,0.9999889,0,-0.00472486,0.0000452185,-0.9999541,0.009587347,-0.9999889,1.33832e-7,0.00472474,-0.0000451244,0.9999541,-0.009587228,-0.004724562,-0.009587466,-0.9999429,0.004724562,0.009587526,0.999943,0.9999888,1.54017e-7,-0.004730582,0.000045306,-0.9999541,0.009586393,-0.9999889,0.00000109352,0.004721999,-0.0000452575,0.9999542,-0.009584724,-0.004724681,-0.009587764,-0.999943,0.004724562,0.009587466,0.999943,0.9999889,-5.12309e-7,-0.004724681,0.0000449673,-0.9999541,0.009587347,-0.9999889,1.56132e-7,0.00472474,-0.00004511,0.9999541,-0.009587168,-0.004723668,-0.009587466,-0.999943,0.004724025,0.009587287,0.999943,0.9999889,-4.70373e-7,-0.004724681,0.0000447884,-0.9999541,0.009587228,-0.9999889,-1.43352e-7,0.00472474,-0.000045111,0.9999541,-0.009587228,-0.004723846,-0.009587883,-0.999943,0.004723608,0.009587645,0.999943,0.9999889,0,-0.004724681,0.0000449573,-0.9999541,0.009587228,-0.9999889,1.56132e-7,0.00472474,-0.0000451222,0.9999541,-0.009587168,-0.004723548,-0.009587526,-0.999943,0.004723072,0.009587466,0.999943,0.9999889,-5.50662e-7,-0.00472474,0.0000448239,-0.9999541,0.009587049,-0.9999889,1.37666e-7,0.00472474,-0.0000451457,0.9999541,-0.009587168,-0.004723548,-0.009587705,-0.999943,0.00472176,0.009587049,0.999943,0.9999395,-0.0000606192,-0.0110026,-0.001315414,-0.960478,-0.278353,-0.9999396,0.0000599877,0.0110026,0.001314759,0.9604781,0.2783526,-0.004723846,-0.009587466,-0.9999429,0.004722654,0.009587466,0.9999429,0.9999889,-7.88794e-7,-0.004724502,0.0000451001,-0.9999541,0.009586989,-0.9999889,3.15518e-7,0.004724681,-0.0000452367,0.9999541,-0.009587168,-0.004722654,-0.009587049,-0.999943,0.004724621,0.009587466,0.999943,0.9999889,-2.71709e-7,-0.00472474,0.0000448959,-0.9999541,0.009587168,-0.9999889,1.35855e-7,0.004724621,-0.0000451716,0.9999541,-0.009587168,-0.004724442,-0.009587943,-0.999943,0.004723966,0.009587943,0.999943,0.9999889,-4.12997e-7,-0.004724562,0.0000449561,-0.9999541,0.009587049,-0.9999889,0,0.0047248,-0.0000452404,0.9999541,-0.009587228,-0.004722714,-0.00958842,-0.9999429,0.004724025,0.009587049,0.9999429,0.9999889,-7.88793e-7,-0.004724383,0.0000450183,-0.9999541,0.00958687,-0.9999889,3.15517e-7,0.004724681,-0.0000451877,0.9999541,-0.009587049,-0.004724442,-0.009587049,-0.999943,0.004722952,0.00958842,0.999943,0.9999889,-4.46547e-7,-0.004724323,0.0000449356,-0.9999541,0.00958687,-0.9999889,2.23274e-7,0.004724681,-0.0000453106,0.9999541,-0.009586989,-0.004723668,-0.009587645,-0.999943,0.004723072,0.009587287,0.9999429,0.9999889,-5.73407e-7,-0.004724681,0.0000447901,-0.9999541,0.009587168,-0.9999889,1.43352e-7,0.00472474,-0.0000452902,0.9999541,-0.009587228,-0.004724562,-0.009587526,-0.9999429,0.004724562,0.009587526,0.9999429,0.9999889,-0.00000147856,-0.004718303,0.000045233,-0.9999541,0.009586632,-0.9999889,4.92854e-7,0.004719555,-0.000045345,0.9999541,-0.009586989],"vertexPositionIndices":[1,3,0,7,5,4,4,1,0,5,2,1,6,3,2,0,7,4,9,11,8,15,13,12,12,9,8,9,14,10,14,11,10,8,15,12,17,19,16,23,21,20,20,17,16,17,22,18,22,19,18,16,23,20,24,26,27,31,29,28,28,25,24,25,30,26,30,27,26,24,31,28,33,35,32,39,37,36,36,33,32,33,38,34,38,35,34,32,39,36,41,43,40,47,45,44,44,41,40,41,46,42,46,43,42,40,47,44,49,51,48,55,53,52,52,49,48,49,54,50,54,51,50,48,55,52,57,59,56,63,61,60,60,57,56,57,62,58,62,59,58,56,63,60,65,67,64,71,69,68,68,65,64,65,70,66,70,67,66,64,71,68,73,75,72,79,77,76,76,73,72,73,78,74,78,75,74,72,79,76,81,83,80,87,85,84,84,81,80,81,86,82,86,83,82,80,87,84,89,91,88,95,93,92,92,89,88,93,90,89,94,91,90,88,95,92,1,2,3,7,6,5,4,5,1,5,6,2,6,7,3,0,3,7,9,10,11,15,14,13,12,13,9,9,13,14,14,15,11,8,11,15,17,18,19,23,22,21,20,21,17,17,21,22,22,23,19,16,19,23,24,25,26,31,30,29,28,29,25,25,29,30,30,31,27,24,27,31,33,34,35,39,38,37,36,37,33,33,37,38,38,39,35,32,35,39,41,42,43,47,46,45,44,45,41,41,45,46,46,47,43,40,43,47,49,50,51,55,54,53,52,53,49,49,53,54,54,55,51,48,51,55,57,58,59,63,62,61,60,61,57,57,61,62,62,63,59,56,59,63,65,66,67,71,70,69,68,69,65,65,69,70,70,71,67,64,67,71,73,74,75,79,78,77,76,77,73,73,77,78,78,79,75,72,75,79,81,82,83,87,86,85,84,85,81,81,85,86,86,87,83,80,83,87,89,90,91,95,94,93,92,93,89,93,94,90,94,95,91,88,91,95],"vertexPositions":[-0.02285867,0.1688485,-0.668419,-0.02282607,-0.5496163,-0.6615304,-0.741316,-0.5496163,-0.6581356,-0.7413485,0.1688486,-0.6650243,-0.01281726,0.1892246,1.456769,-0.01278507,-0.5292403,1.463657,-0.7312748,-0.52924,1.467052,-0.7313073,0.1892247,1.460164,-0.02710407,0.1875391,1.28103,-0.02707147,-0.5309258,1.287918,-0.7455615,-0.5309257,1.291313,-0.745594,0.1875392,1.284424,-0.01616746,0.2097318,3.595688,-0.01613521,-0.5087331,3.602576,-0.7346251,-0.5087327,3.605971,-0.7346577,0.2097319,3.599082,0.7844988,0.1688486,-0.6722325,0.7845315,-0.5496163,-0.6653439,0.06604129,-0.5496162,-0.6619496,0.0660088,0.1688488,-0.6688385,0.7945401,0.1892247,1.452955,0.7945725,-0.5292402,1.459844,0.0760824,-0.52924,1.463238,0.07604998,0.1892248,1.456349,1.967197,0.3592059,2.755659,1.967244,-0.6741058,2.765566,0.9338961,-0.6741058,2.770447,0.9338496,0.359206,2.76054,1.975116,0.3752739,4.431521,1.975162,-0.658038,4.441429,0.9418143,-0.6580376,4.44631,0.9417678,0.3752741,4.436403,-0.9151775,0.8000327,2.979511,-0.9151306,-0.2332788,2.989418,-1.948478,-0.2332791,2.9943,-1.948525,0.8000329,2.984392,-0.8990764,0.3752735,4.4451,-0.8990301,-0.6580383,4.455007,-1.932377,-0.6580377,4.459888,-1.932424,0.3752738,4.449982,0.779386,0.3640995,3.271666,0.7794328,-0.6692123,3.281573,-0.7799566,-0.6692124,3.28894,-0.7800031,0.3640995,3.279033,0.7862961,0.3781207,4.73408,0.7863422,-0.6551911,4.743988,-0.773047,-0.6551908,4.751355,-0.7730935,0.378121,4.741447,1.993154,0.373651,4.262161,1.993201,-0.6596606,4.272068,0.9598528,-0.6596605,4.27695,0.9598063,0.3736512,4.267043,2.001178,0.3899332,5.960365,2.001224,-0.6433786,5.970272,0.9678765,-0.6433781,5.975154,0.9678298,0.3899333,5.965247,-0.8998999,0.3736031,4.270852,-0.8998531,-0.6597086,4.280759,-1.933201,-0.6597086,4.285642,-1.933248,0.3736032,4.275734,-0.8919816,0.3896709,5.946714,-0.8919352,-0.6436408,5.956622,-1.925282,-0.6436405,5.961504,-1.925329,0.3896711,5.951596,0.7850441,0.3755812,4.469191,0.7850911,-0.6577305,4.479097,-0.7742985,-0.6577305,4.486464,-0.7743449,0.3755813,4.476556,0.7919542,0.3896025,5.931605,0.7920002,-0.6437093,5.941513,-0.7673888,-0.6437088,5.948879,-0.7674354,0.3896026,5.938972,0.5297109,0.3911811,6.097457,0.5297579,-0.6421306,6.107364,-0.5035901,-0.6421307,6.112246,-0.5036367,0.3911811,6.102339,0.5345933,0.4010878,7.130758,0.5346396,-0.6322238,7.140666,-0.498708,-0.6322234,7.145547,-0.4987546,0.4010881,7.135639,0.7937093,0.1875392,1.277152,0.793742,-0.5309257,1.28404,0.07525187,-0.5309256,1.287435,0.07521939,0.1875392,1.280546,0.804646,0.2097319,3.59181,0.8046782,-0.508733,3.598699,0.08618819,-0.5087327,3.602093,0.08615577,0.2097321,3.595205,3.756558,1.04247,-0.9081976,3.756671,-1.444587,-0.8843522,-3.679613,-1.444587,-0.8492165,-3.679724,1.042469,-0.8730622,3.758398,1.046198,-0.5192224,3.758507,-1.440858,-0.4953768,-3.677777,-1.440858,-0.4602414,-3.677888,1.046199,-0.4840871],"vertexColors":[0.4823529,0.4823529,0.4823529,0.4823529,0.4823529,0.4823529,0.5490196,0.5490196,0.5490196,0.4156863,0.1490196,0.4823529,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.4705882,0.1686275,0.5490196,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.4705882,0.1686275,0.5490196,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.3607843,0.3607843,0.3607843,0.4470588,0.4470588,0.4470588,0.5529412,0.5529412,0.5529412,0.4627451,0.4627451,0.4627451,0.5647059,0.5647059,0.5647059,0.4980392,0.4980392,0.4980392,0.427451,0.1529412,0.4980392,0.3098039,0.1137255,0.3607843,0.4745098,0.172549,0.5529412,0.3098039,0.1137255,0.3607843,0.4352941,0.1568627,0.5058824,0.3803921,0.1372549,0.4431372,0.3294118,0.1294118,0.627451,0.3843137,0.1372549,0.4470588,0.3803921,0.1372549,0.4431372,0.4745098,0.172549,0.5529412,0.4,0.145098,0.4666666,0.427451,0.1529412,0.4980392,0.3921568,0.3921568,0.3921568,0.4823529,0.4823529,0.4823529,0.5882353,0.5882353,0.5882353,0.4235294,0.1529412,0.4941176,0.5137255,0.1882353,0.6,0.4549019,0.1647059,0.5294118,0.4549019,0.1647059,0.5294118,0.3372549,0.1215686,0.3921568,0.5058824,0.1843137,0.5882353,0.3372549,0.1215686,0.3921568,0.4588235,0.1686275,0.5372549,0.4117647,0.1490196,0.4784314,0.4588235,0.1686275,0.5372549,0.4117647,0.1490196,0.4823529,0.4117647,0.1490196,0.4784314,0.5058824,0.1843137,0.5882353,0.4235294,0.1529412,0.4941176,0.4549019,0.1647059,0.5294118,0.6117647,0.2235294,0.7098039,0.6509804,0.2352941,0.7568628,0.6627451,0.2392157,0.772549,0.7098039,0.7098039,0.7098039,0.7568628,0.7568628,0.7568628,0.772549,0.772549,0.772549,0.6627451,0.2392157,0.772549,0.6117647,0.2235294,0.7137255,0.6117647,0.2235294,0.7098039,0.6117647,0.2235294,0.7137255,0.6117647,0.2235294,0.7137255,0.6509804,0.2352941,0.7568628,0.6117647,0.2235294,0.7137255,0.6627451,0.2392157,0.772549,0.6509804,0.2352941,0.7568628,0.6117647,0.2235294,0.7098039,0.6117647,0.2235294,0.7098039,0.6627451,0.2392157,0.772549,0.02352941,0.05490195,0.9921569,0,0.04705882,1,0.254902,0.1176471,0.8509804,1,1,1,0.6666667,0.6666667,0.6666667,0.5764706,0.5764706,0.5764706,0.7176471,0.3960784,0.3843137,0.4470588,0.03921568,0.5529412,0.003921568,0.04705882,0.9960784,0.882353,0.1019608,0.2313725,0.9921569,0.04313725,0.0117647,1,0.03921568,0,0.9921569,0.04313725,0.0117647,0,0.04705882,1,0.4117647,0.04313725,0.5882353,0,0.04705882,1,0.9098039,0.2,0.5960785,0.6509804,0.1294118,0.4,0.5372549,0.1960784,0.627451,0.6470589,0.2352941,0.7529412,0.7490196,0.2705882,0.8705883,0.6352941,0.2313725,0.7372549,0.7450981,0.2705882,0.8705883,0.654902,0.2392157,0.7607843,0.654902,0.2392157,0.7607843,0.5372549,0.1960784,0.627451,0.7490196,0.2705882,0.8705883,0.5372549,0.1960784,0.627451,0.6392157,0.2313725,0.7450981,0.6431373,0.2352941,0.7490196,0.6392157,0.2313725,0.7450981,0.6431373,0.2352941,0.7529412,0.2196078,0.1098039,0.9137255,0.7490196,0.2705882,0.8705883,0.6352941,0.2313725,0.7372549,0.654902,0.2392157,0.7607843,0.5960785,0.5960785,0.5960785,0.7098039,0.7098039,0.7098039,0.8352941,0.8352941,0.8352941,0.6078432,0.2196078,0.7058824,0.7176471,0.2627451,0.8352941,0.627451,0.227451,0.7333334,0.627451,0.227451,0.7333334,0.509804,0.1843137,0.5960785,0.7176471,0.2588235,0.8352941,0.509804,0.1843137,0.5960785,0.6235294,0.227451,0.7254902,0.6117647,0.2235294,0.7137255,0.6235294,0.227451,0.7254902,0.6117647,0.2235294,0.7098039,0.6117647,0.2235294,0.7137255,0.7176471,0.2588235,0.8352941,0.6078432,0.2196078,0.7058824,0.627451,0.227451,0.7333334,0.6,0.6,0.6,0.7137255,0.7137255,0.7137255,0.8392157,0.8392157,0.8392157,0.6117647,0.2235294,0.7098039,0.7215687,0.2627451,0.8431373,0.6313726,0.2313725,0.7372549,0.6313726,0.2313725,0.7372549,0.6078432,0.1568627,0.4862745,0.882353,0.1372549,0.3607843,0.5803922,0.1686275,0.5176471,0.627451,0.227451,0.7176471,0.9960784,0.03921568,0.003921568,0.627451,0.227451,0.7176471,0.9450981,0.03921568,0.05882352,0.9960784,0.03921568,0.003921568,0.7921569,0.1294118,0.427451,0.6117647,0.2235294,0.7098039,0.6313726,0.2313725,0.7372549,0.627451,0.627451,0.627451,0.7529412,0.7529412,0.7529412,0.8705883,0.8705883,0.8705883,0.6352941,0.2313725,0.7372549,0.7450981,0.2705882,0.8705883,0.654902,0.2392157,0.7607843,0.654902,0.2392157,0.7607843,0.5372549,0.1960784,0.627451,0.7490196,0.2705882,0.8705883,0.5372549,0.1960784,0.627451,0.6392157,0.2313725,0.7450981,0.6431373,0.2352941,0.7490196,0.6392157,0.2313725,0.7450981,0.6470589,0.2352941,0.7529412,0.6431373,0.2352941,0.7490196,0.7490196,0.2705882,0.8705883,0.6352941,0.2313725,0.7372549,0.654902,0.2392157,0.7607843,0.5764706,0.2078431,0.6745098,0.6862745,0.2509804,0.8,0.7960785,0.2901961,0.9254902,0.6784314,0.2470588,0.7882353,0.7960785,0.2901961,0.9254902,0.6980392,0.254902,0.8117647,0.6980392,0.254902,0.8117647,0.5764706,0.2078431,0.6745098,0.7960785,0.2901961,0.9254902,0.5764706,0.2078431,0.6745098,0.6862745,0.2509804,0.8,0.6901961,0.2509804,0.8039216,0.6862745,0.2509804,0.8,0.6862745,0.2509804,0.8,0.6901961,0.2509804,0.8039216,0.7960785,0.2901961,0.9254902,0.6784314,0.2470588,0.7882353,0.6980392,0.254902,0.8117647,0.3607843,0.3607843,0.3607843,0.4470588,0.4470588,0.4470588,0.5529412,0.5529412,0.5529412,0.3960784,0.145098,0.4627451,0.4862745,0.1764706,0.5647059,0.427451,0.1529412,0.4980392,0.427451,0.1529412,0.4980392,0.3098039,0.1137255,0.3607843,0.4745098,0.172549,0.5529412,0.3098039,0.1137255,0.3607843,0.4352941,0.1568627,0.5058824,0.3803921,0.1372549,0.4431372,0.4352941,0.1568627,0.5058824,0.3843137,0.1372549,0.4470588,0.3803921,0.1372549,0.4431372,0.4745098,0.172549,0.5529412,0.3960784,0.145098,0.4627451,0.427451,0.1529412,0.4980392,0,0,0,0,0,0,0.05098038,0.01568627,0.05882352,0.003921568,0,0.003921568,0.003921568,0,0.003921568,0.02352941,0.007843136,0.02745097,0.02352941,0.007843136,0.02745097,0,0,0,0.05098038,0.01568627,0.05882352,0.003921568,0,0.003921568,0.05098038,0.01568627,0.05882352,0,0,0,0.02352941,0.007843136,0.02745097,0,0,0,0.05098038,0.01568627,0.05882352,0.05098038,0.01568627,0.05882352,0.003921568,0,0.003921568,0.02352941,0.007843136,0.02745097,0.4823529,0.4823529,0.4823529,0.5490196,0.5490196,0.5490196,0.4823529,0.4823529,0.4823529,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.4156863,0.1490196,0.4823529,0.4156863,0.1490196,0.4823529,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.4705882,0.1686275,0.5490196,0.4705882,0.1686275,0.5490196,0.4156863,0.1490196,0.4823529,0.4156863,0.1490196,0.4823529,0.4705882,0.1686275,0.5490196,0.4156863,0.1490196,0.4823529,0.4156863,0.1490196,0.4823529,0.3607843,0.3607843,0.3607843,0.4431372,0.4431372,0.4431372,0.4470588,0.4470588,0.4470588,0.4627451,0.4627451,0.4627451,0.5058824,0.5058824,0.5058824,0.5647059,0.5647059,0.5647059,0.427451,0.1529412,0.4980392,0.4862745,0.1764706,0.5647059,0.3098039,0.1137255,0.3607843,0.3098039,0.1137255,0.3607843,0.4862745,0.1764706,0.5647059,0.4352941,0.1568627,0.5058824,0.3294118,0.1294118,0.627451,0.3921568,0.145098,0.4666666,0.3843137,0.1372549,0.4470588,0.4745098,0.172549,0.5529412,0.3843137,0.1372549,0.4470588,0.4,0.145098,0.4666666,0.3921568,0.3921568,0.3921568,0.4784314,0.4784314,0.4784314,0.4823529,0.4823529,0.4823529,0.4235294,0.1529412,0.4941176,0.4588235,0.1686275,0.5372549,0.5137255,0.1882353,0.6,0.4549019,0.1647059,0.5294118,0.5137255,0.1882353,0.6,0.3372549,0.1215686,0.3921568,0.3372549,0.1215686,0.3921568,0.5137255,0.1882353,0.6,0.4588235,0.1686275,0.5372549,0.4588235,0.1686275,0.5372549,0.4235294,0.1529412,0.4941176,0.4117647,0.1490196,0.4823529,0.5058824,0.1843137,0.5882353,0.4117647,0.1490196,0.4823529,0.4235294,0.1529412,0.4941176,0.6117647,0.2235294,0.7098039,0.6117647,0.2235294,0.7137255,0.6509804,0.2352941,0.7568628,0.6117647,0.2235294,0.7098039,0.6117647,0.2235294,0.7137255,0.6509804,0.2431373,0.7568628,0.6627451,0.2392157,0.772549,0.6509804,0.2352941,0.7568628,0.6117647,0.2235294,0.7137255,0.6117647,0.2235294,0.7137255,0.6509804,0.2352941,0.7568628,0.6117647,0.2235294,0.7137255,0.6117647,0.2235294,0.7137255,0.6117647,0.2235294,0.7098039,0.6627451,0.2392157,0.772549,0.6117647,0.2235294,0.7098039,0.6627451,0.2392157,0.772549,0.6117647,0.2235294,0.7098039,0.02352941,0.05490195,0.9921569,0.2470588,0.1176471,0.8745098,0,0.04705882,1,1,1,1,0.6980392,0.6980392,0.6980392,0.6666667,0.6666667,0.6666667,0.7176471,0.3960784,0.3843137,0.6862745,0.6235294,0.6196079,0.4470588,0.03921568,0.5529412,0.882353,0.1019608,0.2313725,0.6117647,0.1960784,0.6078432,0.9921569,0.04313725,0.0117647,0.9921569,0.04313725,0.0117647,0.9882353,0.04705882,0.03529411,0,0.04705882,1,0,0.04705882,1,0,0.04705882,1,0.9098039,0.2,0.5960785,0.627451,0.627451,0.627451,0.7490196,0.7490196,0.7490196,0.7529412,0.7529412,0.7529412,0.6352941,0.2313725,0.7372549,0.6392157,0.2313725,0.7450981,0.7450981,0.2705882,0.8705883,0.654902,0.2392157,0.7607843,0.7450981,0.2705882,0.8705883,0.5372549,0.1960784,0.627451,0.5372549,0.1960784,0.627451,0.7450981,0.2705882,0.8705883,0.6392157,0.2313725,0.7450981,0.6392157,0.2313725,0.7450981,0.6352941,0.2313725,0.7372549,0.6431373,0.2352941,0.7529412,0.7490196,0.2705882,0.8705883,0.6588236,0.227451,0.7254902,0.6352941,0.2313725,0.7372549,0.5960785,0.5960785,0.5960785,0.7137255,0.7137255,0.7137255,0.7098039,0.7098039,0.7098039,0.6078432,0.2196078,0.7058824,0.6235294,0.227451,0.7254902,0.7176471,0.2627451,0.8352941,0.627451,0.227451,0.7333334,0.7176471,0.2627451,0.8352941,0.509804,0.1843137,0.5960785,0.509804,0.1843137,0.5960785,0.7176471,0.2627451,0.8352941,0.6235294,0.227451,0.7254902,0.6235294,0.227451,0.7254902,0.6078432,0.2196078,0.7058824,0.6117647,0.2235294,0.7098039,0.7176471,0.2588235,0.8352941,0.6117647,0.2235294,0.7098039,0.6078432,0.2196078,0.7058824,0.6,0.6,0.6,0.7176471,0.7176471,0.7176471,0.7137255,0.7137255,0.7137255,0.6117647,0.2235294,0.7098039,0.627451,0.227451,0.7176471,0.7215687,0.2627451,0.8431373,0.6313726,0.2313725,0.7372549,0.7215687,0.2627451,0.8431373,0.6078432,0.1568627,0.4862745,0.5803922,0.1686275,0.5176471,0.7215687,0.2627451,0.8431373,0.627451,0.227451,0.7176471,0.627451,0.227451,0.7176471,0.6117647,0.2235294,0.7098039,0.9450981,0.03921568,0.05882352,0.7921569,0.1294118,0.427451,0.8196079,0.0980392,0.2901961,0.6117647,0.2235294,0.7098039,0.627451,0.627451,0.627451,0.7490196,0.7490196,0.7490196,0.7529412,0.7529412,0.7529412,0.6352941,0.2313725,0.7372549,0.6392157,0.2313725,0.7450981,0.7450981,0.2705882,0.8705883,0.654902,0.2392157,0.7607843,0.7450981,0.2705882,0.8705883,0.5372549,0.1960784,0.627451,0.5372549,0.1960784,0.627451,0.7450981,0.2705882,0.8705883,0.6392157,0.2313725,0.7450981,0.6392157,0.2313725,0.7450981,0.6352941,0.2313725,0.7372549,0.6470589,0.2352941,0.7529412,0.7490196,0.2705882,0.8705883,0.6470589,0.2352941,0.7529412,0.6352941,0.2313725,0.7372549,0.5764706,0.2078431,0.6745098,0.6941177,0.2588235,0.8039216,0.6862745,0.2509804,0.8,0.6784314,0.2470588,0.7882353,0.6862745,0.2509804,0.8,0.7960785,0.2901961,0.9254902,0.6980392,0.254902,0.8117647,0.7960785,0.2901961,0.9254902,0.5764706,0.2078431,0.6745098,0.5764706,0.2078431,0.6745098,0.7960785,0.2901961,0.9254902,0.6862745,0.2509804,0.8,0.6862745,0.2509804,0.8,0.6784314,0.2470588,0.7882353,0.6862745,0.2509804,0.8,0.7960785,0.2901961,0.9254902,0.6862745,0.2509804,0.8,0.6784314,0.2470588,0.7882353,0.3607843,0.3607843,0.3607843,0.4431372,0.4431372,0.4431372,0.4470588,0.4470588,0.4470588,0.3960784,0.145098,0.4627451,0.4352941,0.1568627,0.5058824,0.4862745,0.1764706,0.5647059,0.427451,0.1529412,0.4980392,0.4862745,0.1764706,0.5647059,0.3098039,0.1137255,0.3607843,0.3098039,0.1137255,0.3607843,0.4862745,0.1764706,0.5647059,0.4352941,0.1568627,0.5058824,0.4352941,0.1568627,0.5058824,0.3960784,0.145098,0.4627451,0.3843137,0.1372549,0.4470588,0.4745098,0.172549,0.5529412,0.3843137,0.1372549,0.4470588,0.3960784,0.145098,0.4627451,0,0,0,0.05098038,0.02352941,0.05882352,0,0,0,0.003921568,0,0.003921568,0.02352941,0.007843136,0.1294118,0.003921568,0,0.003921568,0.02352941,0.007843136,0.02745097,0.003921568,0,0.003921568,0,0,0,0.003921568,0,0.003921568,0.02352941,0.007843136,0.02745097,0.05098038,0.01568627,0.05882352,0.02352941,0.007843136,0.02745097,0.003921568,0,0.003921568,0,0,0,0.05098038,0.01568627,0.05882352,0,0,0,0.003921568,0,0.003921568],"vertexColorIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431],"armatureName":"Armature","jointParents":{"root":null,"chest":"root","head":"chest","arm_l":"chest","arm1_l":"arm_l","arm_r":"chest","arm1_r":"arm_r","hips":"root","leg_l":"hips","leg1_l":"leg_l","leg_r":"hips","leg1_r":"leg_r","board":"root"}}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {"actions":{"ArmatureAction":{"0.0":[[-0.010643746703863144,0.06740376353263855,0.9976690411567688,0.1489696502685547,0.9960901141166687,-0.08679044246673584,0.016490573063492775,-0.2345123589038849,0.08769970387220383,0.9939437508583069,-0.06621643900871277,4.180955410003662,0,0,0,1],[-0.8783168196678162,0.11875393241643906,0.46309512853622437,0.16040374338626862,0.4579189717769623,-0.06935425102710724,0.8862845301628113,-0.24923501908779144,0.1373673975467682,0.9904986619949341,0.006535377353429794,4.349562644958496,0,0,0,1],[-0.8769083619117737,-0.1327057182788849,-0.4643413722515106,-0.9950202703475952,0.45867210626602173,0.07662883400917053,-0.8856338262557983,0.3453904390335083,0.15335223078727722,-0.9881893396377563,-0.006319008301943541,5.608684539794922,0,0,0,1],[-0.8500475287437439,0.1369122862815857,-0.5107505917549133,-1.1509778499603271,0.5270240902900696,0.30905044078826904,-0.7920435070991516,0.4354456663131714,0.049792926758527756,-0.9411650896072388,-0.3343709409236908,4.447351455688477,0,0,0,1],[-0.8773415684700012,-0.13270540535449982,-0.46339887380599976,1.573757529258728,0.4576827585697174,0.07662875950336456,-0.8861262202262878,-0.9942390322685242,0.1533321589231491,-0.9881893396377563,-0.006483841687440872,5.206905364990234,0,0,0,1],[-0.8474618792533875,0.36410146951675415,-0.3889935612678528,1.4178004264831543,0.5330516695976257,0.5546848177909851,-0.6393323540687561,-0.9041838645935059,-0.016562344506382942,-0.7482304573059082,-0.6632856130599976,4.045572280883789,0,0,0,1],[-0.8783155083656311,0.11875401437282562,0.46309763193130493,0.3401588499546051,0.45792150497436523,-0.06935407966375351,0.8862832188606262,-0.35421496629714966,0.1373673975467682,0.9904986619949341,0.006534797139465809,5.848857879638672,0,0,0,1],[-0.3373107314109802,-0.13018099963665009,-0.9323486685752869,0.1698671132326126,0.9269528388977051,0.1269197165966034,-0.35308006405830383,-0.2690655589103699,0.16429872810840607,-0.9833332896232605,0.07786211371421814,4.4872212409973145,0,0,0,1],[-0.29184460639953613,0.32399916648864746,-0.8999171257019043,-0.12396079301834106,0.816099226474762,0.575045108795166,-0.057627514004707336,0.28568607568740845,0.4988199770450592,-0.751234769821167,-0.4322334825992584,3.3619353771209717,0,0,0,1],[-0.14711982011795044,-0.35195595026016235,-0.9243820905685425,0.5566554069519043,0.9000744819641113,0.3399028182029724,-0.27266812324523926,1.4936676025390625,0.4101659059524536,-0.8721197247505188,0.26678064465522766,1.7838369607925415,0,0,0,1],[-0.21958622336387634,0.21754691004753113,-0.9510283470153809,0.1432461142539978,0.7946363091468811,-0.5256636142730713,-0.30372145771980286,-0.48528820276260376,-0.5659889578819275,-0.822409987449646,-0.05743923783302307,3.3098576068878174,0,0,0,1],[-0.3646259009838104,-0.35338079929351807,-0.8614926934242249,0.6002411246299744,0.771899938583374,-0.6321746706962585,-0.06739045679569244,-1.5895357131958008,-0.5207935571670532,-0.6895531415939331,0.503280758857727,1.5822428464889526,0,0,0,1],[-0.07175132632255554,0.010507896542549133,0.997367262840271,0.09220355749130249,0.9974202513694763,0.00290490104816854,0.071724534034729,-0.7893320322036743,-0.002143536927178502,0.9999405741691589,-0.010689213871955872,0.35803377628326416,0,0,0,1]]},"idle":{"0.0":[[0.9999845623970032,0.005339177791029215,0.0015709208091720939,-0.09299182146787643,0.0015149384271353483,0.010473271831870079,-0.9999440312385559,0.11403243988752365,-0.00535533158108592,0.9999309182167053,0.010464982129633427,4.5384840965271,0,0,0,1],[0.9999845623970032,0.005339165683835745,0.0015717799542471766,-0.09208611398935318,0.001515797572210431,0.010473296046257019,-0.9999440312385559,0.11580898612737656,-0.005355328321456909,0.9999309182167053,0.010465001687407494,4.708106994628906,0,0,0,1],[1.001375436782837,0.01056374330073595,-0.00014939613174647093,1.37367844581604,0.00026065518613904715,-0.010449307039380074,0.9999454021453857,0.12905019521713257,0.01059948094189167,-0.9998900890350342,-0.010451422072947025,5.768923282623291,0,0,0,1],[1.0014101266860962,-0.005339279305189848,-0.0036994637921452522,1.3860931396484375,0.0036394281778484583,-0.010473127476871014,0.9999386072158813,0.11677002906799316,-0.005317054223269224,-0.9999321103096008,-0.010453637689352036,4.593839168548584,0,0,0,1],[1.0012985467910767,0.010563436895608902,-0.0012254011817276478,-1.5511106252670288,0.0013380850432440639,-0.01044938713312149,0.9999446272850037,0.12494680285453796,0.01058589294552803,-0.9998900294303894,-0.010462862439453602,5.78458309173584,0,0,0,1],[1.0013340711593628,-0.005339069291949272,-0.003667762503027916,-1.5386962890625,0.0036109122447669506,-0.010473109781742096,0.9999387264251709,0.1126665472984314,-0.00531976530328393,-0.9999318718910217,-0.010453710332512856,4.609498977661133,0,0,0,1],[0.9999845623970032,0.005339177791029215,0.0015689050778746605,-0.08400434255599976,0.0015129236271604896,0.010473108850419521,-0.9999440312385559,0.13166217505931854,-0.005355309695005417,0.9999309182167053,0.01046482939273119,6.2216796875,0,0,0,1],[0.9999621510505676,-0.00929766520857811,-0.0022665751166641712,-0.09912396222352982,0.0021691694855690002,-0.010478409938514233,0.9999428391456604,0.11725588887929916,-0.009320986457169056,-0.999902069568634,-0.01045460905879736,4.847322940826416,0,0,0,1],[0.9999775290489197,-0.007610178552567959,-0.0016830468084663153,0.3228888511657715,0.0016033286228775978,-0.010476291179656982,0.9999439120292664,0.10555559396743774,-0.007627501618117094,-0.9999164342880249,-0.010460617020726204,3.6705567836761475,0,0,0,1],[0.9999915361404419,-0.005339173600077629,-0.0020693494006991386,0.30690234899520874,0.0020133969374001026,-0.010473281145095825,0.999943196773529,0.08354833722114563,-0.005360677372664213,-0.9999312162399292,-0.010459205135703087,1.5700595378875732,0,0,0,1],[0.9999786019325256,-0.007610151078552008,-0.0008660058956593275,-0.49941644072532654,0.0007863156497478485,-0.010476268827915192,0.9999449253082275,0.10440179705619812,-0.0076189241372048855,-0.9999163746833801,-0.01046682521700859,3.674959182739258,0,0,0,1],[0.9999915957450867,-0.0053392210975289345,-0.0020694013219326735,-0.5154029130935669,0.00201344839297235,-0.010473279282450676,0.9999432563781738,0.08239457756280899,-0.005360724870115519,-0.9999310970306396,-0.010459204204380512,1.5744614601135254,0,0,0,1],[0.9999845623970032,0.005339127965271473,0.0015709856525063515,-0.12040797621011734,0.0015150049002841115,0.010473069734871387,-0.9999440312385559,0.06025318801403046,-0.005355281755328178,0.9999309182167053,0.010464780032634735,-0.5960807800292969,0,0,0,1]]},"left":{"0.0":[[-0.5136050581932068,-0.46402886509895325,0.721725344657898,-2.723390817642212,0.842607855796814,-0.11402413249015808,0.5263181328773499,-0.34677156805992126,-0.16193260252475739,0.8784507513046265,0.44955769181251526,3.9095535278320312,0,0,0,1],[-0.9221076965332031,-0.3843472898006439,-0.04466710984706879,-2.8021061420440674,-0.19752782583236694,0.3683207631111145,0.9084728956222534,-0.36611396074295044,-0.33271726965904236,0.8465324640274048,-0.41555050015449524,4.058569431304932,0,0,0,1],[-0.9695066809654236,-0.1580895334482193,-0.19377578794956207,-4.559220314025879,0.2390090376138687,-0.36685219407081604,-0.8991081118583679,-0.260743647813797,0.07020359486341476,-0.9171428084373474,0.39268550276756287,4.477402210235596,0,0,0,1],[-0.9494009017944336,-0.09956875443458557,-0.30200785398483276,-4.745009422302246,0.31322795152664185,-0.14457958936691284,-0.9386619925498962,-0.6918732523918152,0.04900195077061653,-0.9847370386123657,0.16784879565238953,3.399563789367676,0,0,0,1],[-0.7228114008903503,0.5935966372489929,0.35712575912475586,-1.8621935844421387,-0.2856087386608124,0.21493491530418396,-0.9339847564697266,0.3166924715042114,-0.6310957670211792,-0.7757444977760315,0.01429566740989685,5.450682163238525,0,0,0,1],[-0.6496725082397461,0.1959211826324463,0.7361334562301636,-1.164590835571289,-0.1186261773109436,0.9287909865379333,-0.35124361515045166,0.5692868232727051,-0.7522404789924622,-0.3148716688156128,-0.5790127515792847,4.5390167236328125,0,0,0,1],[-0.9221078157424927,-0.3843472898006439,-0.04466438665986061,-3.3838839530944824,-0.19752521812915802,0.36832094192504883,0.9084733724594116,0.19140475988388062,-0.33271846175193787,0.84653240442276,-0.41554969549179077,5.339946269989014,0,0,0,1],[-0.5335230231285095,0.3443784713745117,-0.7725046277046204,-2.8626956939697266,0.8355467915534973,0.07284965366125107,-0.5445790886878967,-0.38854122161865234,-0.13126613199710846,-0.9359999895095825,-0.3266060948371887,4.182095050811768,0,0,0,1],[-0.5566103458404541,0.7477432489395142,-0.362038254737854,-2.6413676738739014,0.8185304999351501,0.5681540966033936,-0.08497309684753418,0.06750815361738205,0.14215123653411865,-0.34363481402397156,-0.9282814860343933,2.9555046558380127,0,0,0,1],[-0.4575897455215454,0.3951526880264282,-0.7965379953384399,-1.070603847503662,0.8569820523262024,0.43485182523727417,-0.2765814960002899,1.2610138654708862,0.23707875609397888,-0.809173047542572,-0.5376161336898804,2.233640432357788,0,0,0,1],[0.22556807100772858,0.8953468799591064,-0.38403093814849854,-2.2983102798461914,0.7934905290603638,-0.3975572884082794,-0.46079596877098083,-0.6370363831520081,-0.5652434825897217,-0.20078061521053314,-0.8001158237457275,3.2043585777282715,0,0,0,1],[0.08447101712226868,0.39055439829826355,-0.916700005531311,-0.41747891902923584,0.6904474496841431,-0.6862700581550598,-0.2287524789571762,-1.4721744060516357,-0.718438982963562,-0.613601565361023,-0.3276231586933136,2.7825841903686523,0,0,0,1],[-0.3680019676685333,-0.5217443704605103,0.7696477770805359,-0.03693634271621704,0.9043052792549133,-0.008231868036091328,0.426807165145874,-0.110923171043396,-0.21634848415851593,0.8530621528625488,0.4748455286026001,1.1377933025360107,0,0,0,1]]},"neutral":{"0.0":[[-0.010643746703863144,0.06740376353263855,0.9976690411567688,0.1489696502685547,0.9960901141166687,-0.08679044246673584,0.016490573063492775,-0.2345123589038849,0.08769970387220383,0.9939437508583069,-0.06621643900871277,4.180955410003662,0,0,0,1],[-0.8783168196678162,0.11875393241643906,0.46309512853622437,0.16040374338626862,0.4579189717769623,-0.06935425102710724,0.8862845301628113,-0.24923501908779144,0.1373673975467682,0.9904986619949341,0.006535377353429794,4.349562644958496,0,0,0,1],[-0.8769083619117737,-0.1327057182788849,-0.4643413722515106,-0.9950202703475952,0.45867210626602173,0.07662883400917053,-0.8856338262557983,0.3453904390335083,0.15335223078727722,-0.9881893396377563,-0.006319008301943541,5.608684539794922,0,0,0,1],[-0.8500475287437439,0.1369122862815857,-0.5107505917549133,-1.1509778499603271,0.5270240902900696,0.30905044078826904,-0.7920435070991516,0.4354456663131714,0.049792926758527756,-0.9411650896072388,-0.3343709409236908,4.447351455688477,0,0,0,1],[-0.8773415684700012,-0.13270540535449982,-0.46339887380599976,1.573757529258728,0.4576827585697174,0.07662875950336456,-0.8861262202262878,-0.9942390322685242,0.1533321589231491,-0.9881893396377563,-0.006483841687440872,5.206905364990234,0,0,0,1],[-0.8474618792533875,0.36410146951675415,-0.3889935612678528,1.4178004264831543,0.5330516695976257,0.5546848177909851,-0.6393323540687561,-0.9041838645935059,-0.016562344506382942,-0.7482304573059082,-0.6632856130599976,4.045572280883789,0,0,0,1],[-0.8783155083656311,0.11875401437282562,0.46309763193130493,0.3401588499546051,0.45792150497436523,-0.06935407966375351,0.8862832188606262,-0.35421496629714966,0.1373673975467682,0.9904986619949341,0.006534797139465809,5.848857879638672,0,0,0,1],[-0.3373107314109802,-0.13018099963665009,-0.9323486685752869,0.1698671132326126,0.9269528388977051,0.1269197165966034,-0.35308006405830383,-0.2690655589103699,0.16429872810840607,-0.9833332896232605,0.07786211371421814,4.4872212409973145,0,0,0,1],[-0.29184460639953613,0.32399916648864746,-0.8999171257019043,-0.12396079301834106,0.816099226474762,0.575045108795166,-0.057627514004707336,0.28568607568740845,0.4988199770450592,-0.751234769821167,-0.4322334825992584,3.3619353771209717,0,0,0,1],[-0.14711982011795044,-0.35195595026016235,-0.9243820905685425,0.5566554069519043,0.9000744819641113,0.3399028182029724,-0.27266812324523926,1.4936676025390625,0.4101659059524536,-0.8721197247505188,0.26678064465522766,1.7838369607925415,0,0,0,1],[-0.21958622336387634,0.21754691004753113,-0.9510283470153809,0.1432461142539978,0.7946363091468811,-0.5256636142730713,-0.30372145771980286,-0.48528820276260376,-0.5659889578819275,-0.822409987449646,-0.05743923783302307,3.3098576068878174,0,0,0,1],[-0.3646259009838104,-0.35338079929351807,-0.8614926934242249,0.6002411246299744,0.771899938583374,-0.6321746706962585,-0.06739045679569244,-1.5895357131958008,-0.5207935571670532,-0.6895531415939331,0.503280758857727,1.5822428464889526,0,0,0,1],[-0.07175132632255554,0.010507896542549133,0.997367262840271,0.09220355749130249,0.9974202513694763,0.00290490104816854,0.071724534034729,-0.7893320322036743,-0.002143536927178502,0.9999405741691589,-0.010689213871955872,0.35803377628326416,0,0,0,1]]},"right":{"0.0":[[0.6409245729446411,0.5106841325759888,0.5730772018432617,2.6717581748962402,0.7672317624092102,-0.40295323729515076,-0.49898311495780945,-1.0574921369552612,-0.023899395018815994,0.7594935297966003,-0.6500756740570068,3.9761171340942383,0,0,0,1],[-0.5650849342346191,0.3845454454421997,0.7299342155456543,2.758388042449951,0.6776062846183777,-0.2884068787097931,0.6765139698982239,-1.1258469820022583,0.47066837549209595,0.8768957853317261,-0.09759598970413208,4.104953289031982,0,0,0,1],[-0.09649638831615448,-0.5828330516815186,-0.8073885440826416,2.344405174255371,0.564411461353302,0.637157142162323,-0.526081919670105,-0.44459807872772217,0.8210509419441223,-0.5050345063209534,0.26740920543670654,5.7292962074279785,0,0,0,1],[-0.15849798917770386,-0.14870578050613403,-0.9765486717224121,1.659451961517334,0.7283264398574829,0.6511955261230469,-0.21627944707870483,0.3041974902153015,0.668401837348938,-0.7442442178726196,0.005646273493766785,5.135772705078125,0,0,0,1],[-0.6051907539367676,0.13159269094467163,-0.7856622338294983,3.996943712234497,0.7018487453460693,-0.38065558671951294,-0.6031002998352051,-2.4267070293426514,-0.37709173560142517,-0.9162014126777649,0.13795684278011322,4.352701187133789,0,0,0,1],[-0.5234226584434509,0.5216470956802368,-0.6743520498275757,4.151593208312988,0.7500172257423401,-0.09646821022033691,-0.6552773714065552,-2.874058485031128,-0.40553605556488037,-0.8486392498016357,-0.34059810638427734,3.2759690284729004,0,0,0,1],[-0.565082848072052,0.38454559445381165,0.7299357652664185,3.340465545654297,0.6776082515716553,-0.28840675950050354,0.6765120625495911,-1.5624018907546997,0.47066810727119446,0.8768957853317261,-0.09759750962257385,5.432290554046631,0,0,0,1],[0.16908469796180725,-0.46268996596336365,-0.8702489137649536,2.824479341506958,0.8882745504379272,0.45412880182266235,-0.06887272000312805,-1.1879010200500488,0.42706966400146484,-0.761370837688446,0.48778000473976135,4.210849285125732,0,0,0,1],[0.28902751207351685,-0.056151509284973145,-0.9556751251220703,2.355320453643799,0.582915186882019,0.8022084832191467,0.1291486769914627,-0.2706887722015381,0.7593951225280762,-0.5944023132324219,0.2645909786224365,3.5025980472564697,0,0,0,1],[0.31622010469436646,-0.8012334108352661,-0.5079712867736816,2.2373645305633545,0.7599924206733704,0.5344275236129761,-0.3698742389678955,1.414488673210144,0.5678265690803528,-0.2690911889076233,0.7779245376586914,2.253953456878662,0,0,0,1],[-0.24399541318416595,-0.7222678661346436,-0.6471477150917053,2.2141971588134766,0.9697614312171936,-0.17780669033527374,-0.167199045419693,-0.9996883869171143,0.005695261061191559,-0.6683713793754578,0.7438083291053772,3.149261951446533,0,0,0,1],[-0.2318391352891922,-0.9475978016853333,-0.21980425715446472,0.6969482898712158,0.9679392576217651,-0.20227470993995667,-0.1489521563053131,-1.3732022047042847,0.09668540954589844,-0.2472885549068451,0.964107871055603,1.7452319860458374,0,0,0,1],[0.45882388949394226,0.4765714108943939,0.7499068975448608,-0.19168755412101746,0.885974645614624,-0.30931782722473145,-0.34550192952156067,-0.10435605049133301,0.06730325520038605,0.822922945022583,-0.5641525983810425,1.4005063772201538,0,0,0,1]]},"right.001":{"0.0":[[0.5208860039710999,0.27377721667289734,0.8085319399833679,2.787280321121216,0.8534142374992371,-0.14590977132320404,-0.5003942847251892,-0.1222713515162468,-0.019023817032575607,0.9506610035896301,-0.30964773893356323,3.211697578430176,0,0,0,1],[-0.7622014880180359,0.10375390946865082,0.6389711499214172,2.8337225914001465,0.6391176581382751,-0.03621096909046173,0.7682560086250305,-0.14702275395393372,0.10284735262393951,0.9939436316490173,-0.038710884749889374,3.372962474822998,0,0,0,1],[-0.4258791506290436,-0.45211270451545715,-0.7847740054130554,1.8318347930908203,0.6851001977920532,0.4074943959712982,-0.6047779321670532,0.7475684881210327,0.5926729440689087,-0.7938928604125977,0.136086106300354,4.585356712341309,0,0,0,1],[-0.45228880643844604,0.032037049531936646,-0.8922207355499268,1.3005058765411377,0.8018515110015869,0.4552065134048462,-0.3885762095451355,1.226461410522461,0.3934601843357086,-0.8898478746414185,-0.23109859228134155,3.6523633003234863,0,0,0,1],[-0.5226818919181824,0.4692055881023407,-0.7128913402557373,4.060936450958252,0.4904880225658417,-0.5200470089912415,-0.7000555396080017,-1.1219980716705322,-0.698047935962677,-0.7148691415786743,0.04165712371468544,4.284557819366455,0,0,0,1],[-0.42273837327957153,0.8227384090423584,-0.3820444941520691,4.612353324890137,0.42489728331565857,-0.1941421926021576,-0.8848029375076294,-1.7331643104553223,-0.8008787035942078,-0.5359233617782593,-0.26725152134895325,3.44443416595459,0,0,0,1],[-0.7621996402740479,0.10375402122735977,0.6389732956886292,2.9907724857330322,0.6391198635101318,-0.036210816353559494,0.7682541608810425,-0.20183447003364563,0.10284722596406937,0.9939436316490173,-0.038711365312337875,4.877471923828125,0,0,0,1],[0.5192395448684692,-0.2758377194404602,-0.8088923692703247,2.86777400970459,0.8543398380279541,0.14253072440624237,0.4997994601726532,-0.1739710420370102,-0.022571714594960213,-0.9505782127380371,0.3096672296524048,3.505427598953247,0,0,0,1],[0.39833900332450867,-0.5405329465866089,-0.7410486936569214,2.7693369388580322,0.9060024619102478,0.10574629157781601,0.4098638892173767,0.3628932237625122,-0.1431809365749359,-0.834650456905365,0.5318459272384644,2.380662202835083,0,0,0,1],[0.2870005965232849,-0.9578898549079895,0.008985131978988647,1.6338541507720947,0.8796877264976501,0.26725172996520996,0.39336642622947693,0.5850315690040588,-0.3792005181312561,-0.10498929023742676,0.9193402528762817,0.627334713935852,0,0,0,1],[0.6084718704223633,-0.0058317407965660095,-0.7935559749603271,2.340928554534912,0.6065723896026611,0.6482139229774475,0.46032580733299255,-0.33883851766586304,0.5117056369781494,-0.7614392042160034,0.3979572057723999,2.396334171295166,0,0,0,1],[0.6075276732444763,-0.12400894612073898,-0.7845603227615356,2.3286778926849365,0.6056526303291321,0.7113916873931885,0.35653603076934814,1.0228471755981445,0.5139122605323792,-0.6917714476585388,0.5072956085205078,0.7967990636825562,0,0,0,1],[0.46943068504333496,0.071878582239151,0.880038857460022,0.9286874532699585,0.8828036189079285,-0.018898263573646545,-0.46936196088790894,-0.8327615261077881,-0.017105860635638237,0.9972343444824219,-0.07232612371444702,-1.1014654636383057,0,0,0,1]]},"root":{"0.0":[[0.9074034094810486,-0.4202500283718109,-0.003026895225048065,-0.09299182146787643,0.0015149470418691635,0.010473271831870079,-0.9999440312385559,0.11403243988752365,0.42025822401046753,0.9073479771614075,0.010140099562704563,4.5384840965271,0,0,0,1],[0.9074034094810486,-0.4202500283718109,-0.003026125952601433,-0.16428078711032867,0.0015158061869442463,0.010473296046257019,-0.9999440312385559,0.11580898612737656,0.42025822401046753,0.9073479771614075,0.01014048233628273,4.692401885986328,0,0,0,1],[-0.4550991654396057,0.8094341158866882,-0.3741758167743683,0.7114768028259277,0.0823654979467392,0.4559633731842041,0.8861790895462036,0.12905021011829376,0.8866240978240967,0.3730725049972534,-0.2743622064590454,6.275704383850098,0,0,0,1],[-0.4435116946697235,0.8165668249130249,-0.37258878350257874,1.6627345085144043,0.09273666888475418,0.45457932353019714,0.8858655095100403,0.6649044156074524,0.8914585709571838,0.35895177721977234,-0.27751657366752625,6.714144229888916,0,0,0,1],[0.9018159508705139,0.4346267282962799,0.0033387381117790937,-1.9425263404846191,0.001338093657977879,-0.01044938713312149,0.9999446272850037,0.12494678795337677,0.4352458715438843,-0.9005506038665771,-0.0099912965670228,5.046514987945557,0,0,0,1],[0.9086098074913025,0.4202505648136139,0.0011241664178669453,-1.4317471981048584,0.003610920626670122,-0.010473109781742096,0.9999387264251709,0.1126665323972702,0.4208641052246094,-0.9073488712310791,-0.011021289974451065,3.988175868988037,0,0,0,1],[0.9074034094810486,-0.4202500283718109,-0.003028654959052801,-0.8004036545753479,0.0015129322418943048,0.010473108850419521,-0.9999440312385559,0.13166217505931854,0.4202582538127899,0.9073479771614075,0.010139104910194874,6.065834045410156,0,0,0,1],[0.9090689420700073,0.4166547656059265,0.0023928205482661724,-0.22983339428901672,0.0021691781003028154,-0.010478409938514233,0.9999428391456604,0.11725588887929916,0.4166592061519623,-0.9090046882629395,-0.010426441207528114,4.815419673919678,0,0,0,1],[0.9083629846572876,0.41818827390670776,0.0029235498514026403,0.6524051427841187,0.001603337237611413,-0.010476291179656982,0.9999439120292664,0.10555559396743774,0.4181986153125763,-0.9083002805709839,-0.010183813981711864,3.9296834468841553,0,0,0,1],[0.9074119925498962,0.4202501177787781,0.002573291538283229,1.5308818817138672,0.002013405552133918,-0.010473281145095825,0.999943196773529,0.08354833722114563,0.4202563464641571,-0.9073482155799866,-0.010346758179366589,2.021641731262207,0,0,0,1],[0.9083603024482727,0.41818827390670776,0.0036657259333878756,-0.09376850724220276,0.0007863242644816637,-0.010476268827915192,0.9999449253082275,0.10440179705619812,0.4182068407535553,-0.9083002209663391,-0.009842099621891975,3.5840964317321777,0,0,0,1],[0.907412052154541,0.4202500581741333,0.002573244273662567,0.7847084999084473,0.0020134570077061653,-0.010473279282450676,0.9999432563781738,0.08239457756280899,0.4202563464641571,-0.9073481559753418,-0.010346779599785805,1.6760542392730713,0,0,0,1],[0.9074034094810486,-0.4202500879764557,-0.003026750637218356,2.064958333969116,0.0015150135150179267,0.010473069734871387,-0.9999440312385559,0.06025318801403046,0.4202582836151123,0.9073479771614075,0.010139944031834602,-0.12067508697509766,0,0,0,1]]},"spread":{"0.0":[[0.9999845623970032,0.005339177791029215,0.0015709208091720939,-0.09299182146787643,0.0015149384271353483,0.010473271831870079,-0.9999440312385559,0.11403243988752365,-0.00535533158108592,0.9999309182167053,0.010464982129633427,4.5384840965271,0,0,0,1],[0.9999845623970032,0.005339165683835745,0.0015717799542471766,-0.09208611398935318,0.001515797572210431,0.010473296046257019,-0.9999440312385559,0.11580898612737656,-0.005355328321456909,0.9999309182167053,0.010465001687407494,4.708106994628906,0,0,0,1],[0.4346863329410553,0.9021313190460205,0.008444871753454208,1.37367844581604,0.0009294850751757622,-0.009807059541344643,0.9999514818191528,0.12905019521713257,0.9009047150611877,-0.43398889899253845,-0.005093710031360388,5.768923282623291,0,0,0,1],[0.44898444414138794,0.8951146602630615,0.00687209190800786,2.43387508392334,0.00431838957592845,-0.009841582737863064,0.9999423027038574,0.11752481013536453,0.893875777721405,-0.4482403099536896,-0.008271905593574047,5.258893966674805,0,0,0,1],[0.5664734840393066,-0.8256722688674927,-0.009220688603818417,-1.5511106252670288,0.00007008109241724014,-0.011123699136078358,0.9999382495880127,0.12494680285453796,-0.8245786428451538,-0.5657143592834473,-0.006235314533114433,5.78458309173584,0,0,0,1],[0.5532657504081726,-0.8345639109611511,-0.010573341511189938,-2.521451711654663,0.00233234791085124,-0.011127199977636337,0.999935507774353,0.11187408119440079,-0.8334712386131287,-0.5525481700897217,-0.0042045218870043755,5.119748115539551,0,0,0,1],[0.9999845623970032,0.005339177791029215,0.0015689050778746605,-0.08400434255599976,0.0015129236271604896,0.010473108850419521,-0.9999440312385559,0.13166217505931854,-0.005355309695005417,0.9999309182167053,0.01046482939273119,6.2216796875,0,0,0,1],[0.9999621510505676,-0.00929766520857811,-0.0022665751166641712,-0.09912396222352982,0.0021691694855690002,-0.010478409938514233,0.9999428391456604,0.11725588887929916,-0.009320986457169056,-0.999902069568634,-0.01045460905879736,4.847322940826416,0,0,0,1],[0.844926118850708,0.5348863005638123,0.0035078958608210087,0.3228888511657715,0.0018351813778281212,-0.009456700645387173,0.9999536871910095,0.10555559396743774,0.534890353679657,-0.8448742032051086,-0.008968602865934372,3.6705567836761475,0,0,0,1],[0.8437105417251587,0.5368037819862366,0.0031823222525417805,1.4465099573135376,0.0022429374512284994,-0.009453167207539082,0.9999529123306274,0.08569016307592392,0.53680419921875,-0.8436573147773743,-0.0091765271499753,1.8957525491714478,0,0,0,1],[0.6817655563354492,-0.7315400242805481,-0.007797818630933762,-0.49941644072532654,-0.00011815503239631653,-0.01076904684305191,0.9999421238899231,0.10440179705619812,-0.7315760254859924,-0.6817197799682617,-0.0074251871556043625,3.674959182739258,0,0,0,1],[0.6834152936935425,-0.7299898862838745,-0.008619394153356552,-2.0361430644989014,0.0011096422094851732,-0.010768109932541847,0.9999415278434753,0.08177954703569412,-0.7300344109535217,-0.6833794116973877,-0.006545856595039368,2.2428884506225586,0,0,0,1],[0.9999845623970032,0.005339127965271473,0.0015709856525063515,-0.12040797621011734,0.0015150049002841115,0.010473069734871387,-0.9999440312385559,0.06025318801403046,-0.005355281755328178,0.9999309182167053,0.010464780032634735,-0.5960807800292969,0,0,0,1]]},"wave":{"0.0":[[0.9999845623970032,0.005339177791029215,0.0015709208091720939,-0.09299182146787643,0.0015149384271353483,0.010473271831870079,-0.9999440312385559,0.11403243988752365,-0.00535533158108592,0.9999309182167053,0.010464982129633427,4.5384840965271,0,0,0,1],[0.9999845623970032,0.005339165683835745,0.0015717799542471766,-0.09208611398935318,0.001515797572210431,0.010473296046257019,-0.9999440312385559,0.11580898612737656,-0.005355328321456909,0.9999309182167053,0.010465001687407494,4.708106994628906,0,0,0,1],[0.4346863329410553,0.9021313190460205,0.008444871753454208,1.37367844581604,0.0009294850751757622,-0.009807059541344643,0.9999514818191528,0.12905019521713257,0.9009047150611877,-0.43398889899253845,-0.005093710031360388,5.768923282623291,0,0,0,1],[0.44898444414138794,0.8951146602630615,0.00687209190800786,2.43387508392334,0.00431838957592845,-0.009841582737863064,0.9999423027038574,0.11752481013536453,0.893875777721405,-0.4482403099536896,-0.008271905593574047,5.258893966674805,0,0,0,1],[0.5664734840393066,-0.8256722688674927,-0.009220688603818417,-1.5511106252670288,0.00007008109241724014,-0.011123699136078358,0.9999382495880127,0.12494680285453796,-0.8245786428451538,-0.5657143592834473,-0.006235314533114433,5.78458309173584,0,0,0,1],[0.5532657504081726,-0.8345639109611511,-0.010573341511189938,-2.521451711654663,0.00233234791085124,-0.011127199977636337,0.999935507774353,0.11187408119440079,-0.8334712386131287,-0.5525481700897217,-0.0042045218870043755,5.119748115539551,0,0,0,1],[0.9999845623970032,0.005339177791029215,0.0015689050778746605,-0.08400434255599976,0.0015129236271604896,0.010473108850419521,-0.9999440312385559,0.13166217505931854,-0.005355309695005417,0.9999309182167053,0.01046482939273119,6.2216796875,0,0,0,1],[0.9999621510505676,-0.00929766520857811,-0.0022665751166641712,-0.09912396222352982,0.0021691694855690002,-0.010478409938514233,0.9999428391456604,0.11725588887929916,-0.009320986457169056,-0.999902069568634,-0.01045460905879736,4.847322940826416,0,0,0,1],[0.9999775290489197,-0.007610178552567959,-0.0016830468084663153,0.3228888511657715,0.0016033286228775978,-0.010476291179656982,0.9999439120292664,0.10555559396743774,-0.007627501618117094,-0.9999164342880249,-0.010460617020726204,3.6705567836761475,0,0,0,1],[0.9999915361404419,-0.005339173600077629,-0.0020693494006991386,0.30690234899520874,0.0020133969374001026,-0.010473281145095825,0.999943196773529,0.08354833722114563,-0.005360677372664213,-0.9999312162399292,-0.010459205135703087,1.5700595378875732,0,0,0,1],[0.9999786019325256,-0.007610151078552008,-0.0008660058956593275,-0.49941644072532654,0.0007863156497478485,-0.010476268827915192,0.9999449253082275,0.10440179705619812,-0.0076189241372048855,-0.9999163746833801,-0.01046682521700859,3.674959182739258,0,0,0,1],[0.9999915957450867,-0.0053392210975289345,-0.0020694013219326735,-0.5154029130935669,0.00201344839297235,-0.010473279282450676,0.9999432563781738,0.08239457756280899,-0.005360724870115519,-0.9999310970306396,-0.010459204204380512,1.5744614601135254,0,0,0,1],[0.9999845623970032,0.005339127965271473,0.0015709856525063515,-0.12040797621011734,0.0015150049002841115,0.010473069734871387,-0.9999440312385559,0.06025318801403046,-0.005355281755328178,0.9999309182167053,0.010464780032634735,-0.5960807800292969,0,0,0,1]]}},"inverseBindPoses":[[0.9999844431877136,0.0015149377286434174,-0.005355331115424633,0.11712270230054855,0.0053391773253679276,0.010473232716321945,0.9999308586120605,-4.538868427276611,0.001570921391248703,-0.9999439716339111,0.010465020313858986,0.0666768029332161,0,0,0,1],[0.9999844431877136,0.0015157967573031783,-0.005355327855795622,0.1171225905418396,0.0053391652181744576,0.010473256930708885,0.9999308586120605,-4.708503246307373,0.0015717806527391076,-0.9999439716339111,0.010465039871633053,0.06667670607566833,0,0,0,1],[0.9985147714614868,0.0002594143443275243,0.010546502657234669,-1.43251371383667,0.010586466640233994,-0.010449250228703022,-0.9998888373374939,5.7550883293151855,-0.00014965499576646835,0.999945342540741,-0.010451465845108032,-0.06854386627674103,0,0,0,1],[0.9985501170158386,0.003638187190517783,-0.005370005499571562,-1.3598393201828003,-0.0052711330354213715,-0.01047305017709732,-0.9999300241470337,4.602047443389893,-0.003689583158120513,0.999938428401947,-0.010453492403030396,-0.06362706422805786,0,0,0,1],[0.9985899925231934,0.0013339814031496644,0.010535761713981628,1.4878120422363281,0.010584956035017967,-0.010449307970702648,-0.999889075756073,5.801665306091309,-0.001225659972988069,0.9999443888664246,-0.01046290434896946,-0.06631745398044586,0,0,0,1],[0.998626172542572,0.0036068097688257694,-0.005369874648749828,1.5609285831451416,-0.0052745407447218895,-0.010472968220710754,-0.9999302625656128,4.6022419929504395,-0.0036614167038351297,0.9999385476112366,-0.010453629307448864,-0.07010744512081146,0,0,0,1],[0.9999844431877136,0.0015129229286685586,-0.005355309695005417,0.11712285876274109,0.00533917685970664,0.010473069734871387,0.9999308586120605,-6.222180366516113,0.0015689055435359478,-0.9999439716339111,0.010464868508279324,0.06667754054069519,0,0,0,1],[0.9999462366104126,0.0021691317670047283,-0.009320806711912155,0.14404524862766266,-0.00929769966751337,-0.01047525368630886,-0.9999016523361206,4.847153186798096,-0.0022666077129542828,0.9999426603317261,-0.010457759723067284,-0.06678170710802078,0,0,0,1],[0.9999617338180542,0.0016032858984544873,-0.007627320941537619,-0.29504919052124023,-0.007610239554196596,-0.010473133996129036,-0.9999158978462219,3.6738109588623047,-0.001683088717982173,0.9999437928199768,-0.010463768616318703,-0.06659835577011108,0,0,0,1],[0.9999756217002869,0.002013346878811717,-0.005360498558729887,-0.2986467480659485,-0.0053392695263028145,-0.01047012209892273,-0.9999305605888367,1.572463870048523,-0.0020693850237876177,0.9999430179595947,-0.010462354868650436,-0.06648196280002594,0,0,0,1],[0.9999627470970154,0.000786272925324738,-0.007618741597980261,0.527314305305481,-0.007610212080180645,-0.010473114438354969,-0.9999159574508667,3.671942949295044,-0.0008660606690682471,0.9999447464942932,-0.01046997494995594,-0.06635182350873947,0,0,0,1],[0.9999755620956421,0.002013398101553321,-0.00536054652184248,0.5236643552780151,-0.00533931702375412,-0.010470123030245304,-0.9999306797981262,1.5724631547927856,-0.002069436712190509,0.99994295835495,-0.010462353006005287,-0.0669839009642601,0,0,0,1],[0.9999844431877136,0.0015150040853768587,-0.005355281755328178,0.11712263524532318,0.005339127033948898,0.010473030619323254,0.9999308586120605,0.5960513949394226,0.0015709862345829606,-0.9999439716339111,0.010464818216860294,0.06667684763669968,0,0,0,1]],"jointNameIndices":{"root":0,"chest":1,"arm.l":2,"arm1.l":3,"arm.r":4,"arm1.r":5,"head":6,"hips":7,"leg.l":8,"leg1.l":9,"leg.r":10,"leg1.r":11,"board":12}}

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createSlope;

var _balloon = __webpack_require__(23);

var _balloon2 = _interopRequireDefault(_balloon);

var _tree_pool = __webpack_require__(24);

var _tree_pool2 = _interopRequireDefault(_tree_pool);

var _game_object = __webpack_require__(1);

var _game_object2 = _interopRequireDefault(_game_object);

var _math_utils = __webpack_require__(0);

var MathUtils = _interopRequireWildcard(_math_utils);

var _collision_utils = __webpack_require__(5);

var CollisionUtils = _interopRequireWildcard(_collision_utils);

var _mesh = __webpack_require__(2);

var _mesh2 = _interopRequireDefault(_mesh);

var _tree = __webpack_require__(25);

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SEGMENT_WIDTH = 90;
var SEGMENT_LENGTH = 50;
var EDGE_LOOP_RESOLUTION = 5;
var SLOPE_BUFFER_AMOUNT = 30;
var BACK_BUFFER_ANOUNT = 10;
var TURN_TYPE_SWITCH_FREQUENCY = 3;
var SHARP_TURN = 0.35;
var SHARP_TURN_BANK = 0.25;
var GRADUAL_TURN = 0.14;
var GRADUAL_TURN_BANK = 0.1;
var TILES_PER_SEGMENT = 1;
var TREES_PER_SEGMENT = 2;
var TREE_COLLIDER = "TREE_COLLIDER";
var TREE_RADIUS = 3;
var TREE_SEGMENT = "TREE_SEGMENT";
var SNOW_SEGMENT = "SNOW_SEGMENT";
var TREE_PROBABILITY_LENGTHWISE = 0.58;
var TREE_MAX_DENSITY_WIDTHWISE = 4;
var BALLOON_PROBABILITY_LENGTHWISE = 0.22;
var BALLOON_DENSITY_WIDTHWISE = 2;
var BALLOON_FLOAT_HEIGHT = 6;
var BALLOON_RADIUS = 4.2;
var BOX_COLLIDER = "BOX_COLLIDER";
var BEGINNING_NO_OBSTACLE_SEGMENTS = 15;
var CLIFF_PROBABILITY = 0.05;

function createSlope() {
  var transformationMatrix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MathUtils.identityMatrix4;
  var rasterizer = arguments[1];

  var img_src = "snow.jpg";
  var tree_img = "tree.png";
  _tree2.default.textured = true;
  _balloon2.default.colored = true;
  _tree2.default.img_src = tree_img;
  return (0, _mesh2.default)({
    faces: [],
    vertices: [],
    textured: true,
    img_src: img_src,
    uvs: [],
    rasterizer: rasterizer
  }).then(function (slopeMesh) {
    return (0, _mesh2.default)(_tree2.default).then(function (treeDone) {
      return { mesh: slopeMesh, treePool: new _tree_pool2.default(treeDone) };
    });
  }).then(function (_ref) {
    var mesh = _ref.mesh,
        treePool = _ref.treePool;

    return (0, _mesh2.default)(_balloon2.default).then(function (balloonDone) {
      return { mesh: mesh, treePool: treePool, balloonMesh: balloonDone };
    });
  }).then(function (_ref2) {
    var mesh = _ref2.mesh,
        treePool = _ref2.treePool,
        balloonMesh = _ref2.balloonMesh;

    return new Slope(mesh, transformationMatrix, treePool, balloonMesh);
  });
};

var Slope = function (_GameObject) {
  _inherits(Slope, _GameObject);

  function Slope(mesh, transformationMatrix, treePool, balloonMesh) {
    _classCallCheck(this, Slope);

    var _this = _possibleConstructorReturn(this, (Slope.__proto__ || Object.getPrototypeOf(Slope)).call(this, undefined));

    _this.mesh = mesh;
    _this.treePool = treePool;
    _this.balloonMesh = balloonMesh;
    _this._transformationMatrix = transformationMatrix.slice(0, 16);
    _this.rasterizer = rasterizer;
    _this.currentTurn = "none";
    _this.bufferedSegments = 0;
    _this.uvH = 0;
    _this.segmentMatrices = [transformationMatrix];
    _this.segmentRotation = [-0.25, 0, 0];
    _this.segmentPosition = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, [0, SEGMENT_LENGTH, 0, 1]).slice(0, 3);
    _this.obstacles = [];
    _this.balloons = [];
    _this.balloonsCreatedSinceStart = 0;
    //this.segmentRotation[0] = 0;
    _this._setupTreeMesh();
    var firstLoop = _this.createEdgeLoop();
    var unpackedVertices = void 0;

    _this.segmentsSinceStart = 0;
    for (var i = 0; i < firstLoop.length; i += 3) {
      unpackedVertices = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, firstLoop.slice(i, i + 3).concat(1)).slice(0, 3);
      for (var j = 0; j < unpackedVertices.length; ++j) {
        _this.mesh.vertices.push(unpackedVertices[j]);
      }
    }
    for (var _i = 0; _i < SLOPE_BUFFER_AMOUNT + BACK_BUFFER_ANOUNT; ++_i) {
      _this.generateSegment();
    }

    return _this;
  }

  _createClass(Slope, [{
    key: "_setupTreeMesh",
    value: function _setupTreeMesh() {
      this.sideGeometry = [];
      this.currentSideGeometryType = TREE_SEGMENT;
      this.treesCreatedSinceStart = 0;
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
        var trees = [];

        var leftRightToggle = -1;
        for (var i = 0; i < 2; ++i) {
          var transformationMatrix = this.segmentMatrices[this.segmentMatrices.length - 1];
          transformationMatrix = MathUtils.mat_4_multiply(MathUtils.translationMatrix(leftRightToggle * SEGMENT_WIDTH / 2, 0, 0), transformationMatrix);
          var tree = void 0;
          for (var _i2 = 0; _i2 < TREES_PER_SEGMENT; ++_i2) {

            transformationMatrix = MathUtils.mat_4_multiply(MathUtils.translationMatrix(0, SEGMENT_LENGTH * _i2 / TREES_PER_SEGMENT, 0, 1), transformationMatrix);
            tree = this.treePool.pullTree(this.treesCreatedSinceStart);
            tree.setPosition(MathUtils.mat4TranslationComponent(transformationMatrix));
            this.rasterizer.objects[tree.id] = tree;
            ++this.treesCreatedSinceStart;
            trees.push(tree);
          }
          leftRightToggle *= -1;
        }
        this.sideGeometry.push({ trees: trees, type: TREE_SEGMENT });
      }
    }
  }, {
    key: "_deleteSideGeometrySegment",
    value: function _deleteSideGeometrySegment() {
      if (this.sideGeometry[0].type === TREE_SEGMENT) {
        var treesSeg = this.sideGeometry.shift();
        for (var i = 0; i < treesSeg.trees.length; ++i) {
          this.treePool.releaseTree(treesSeg.trees[i]);
          delete this.rasterizer.objects[treesSeg.trees[i].id];
        }
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
    key: "createEdgeLoop",
    value: function createEdgeLoop() {
      var vertices = [];
      for (var i = 0; i <= EDGE_LOOP_RESOLUTION; ++i) {
        vertices.push(SEGMENT_WIDTH / EDGE_LOOP_RESOLUTION * i - SEGMENT_WIDTH / 2, 0, 0);
      }
      return vertices;
    }
  }, {
    key: "notifyOfCharacterSegmentNumber",
    value: function notifyOfCharacterSegmentNumber(idx) {
      if (idx < BACK_BUFFER_ANOUNT) {
        return false;
      }
      this.generateSegment();
      this.deleteSegment();
      return true;
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
      //this.segmentRotation[2] += -0.2;
      //this.segmentRotation[0] -= 0.05;
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
      for (var _i3 = 0; _i3 < this.obstacles[segment_number + 1].length; ++_i3) {
        obstacle = this.obstacles[segment_number + 1][_i3];
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
    key: "generateSegment",
    value: function generateSegment() {
      var pos = this.segmentPosition;
      this.generateNewSegmentRotation();

      var transformationMatrix = MathUtils.translationMatrix(pos[0], pos[1], pos[2]);
      var xRot = MathUtils.xRotationMatrix(this.segmentRotation[0]);
      if (Math.random() <= CLIFF_PROBABILITY) {
        xRot = MathUtils.xRotationMatrix(-Math.PI / 3);
      }
      var yRot = MathUtils.yRotationMatrix(this.segmentRotation[1]);
      var zRot = MathUtils.zRotationMatrix(this.segmentRotation[2]);
      transformationMatrix = MathUtils.mat_4_multiply(yRot, MathUtils.mat_4_multiply(xRot, MathUtils.mat_4_multiply(zRot, transformationMatrix)));
      this.segmentPosition = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, [0, SEGMENT_LENGTH, 0, 1]);

      var newSegment = this.createEdgeLoop();
      // let transformedSegment = MathUtils.addVectors(newSegment, this.segmentPosition);
      var transformedSegment = [];
      var transformedPos = void 0;
      for (var i = 0; i < newSegment.length; i += 3) {
        transformedPos = newSegment.slice(i, i + 3);
        transformedPos.push(1);
        transformedPos = MathUtils.multiplyVec4ByMatrix4(transformationMatrix, transformedPos);
        for (var _i4 = 0; _i4 < 3; ++_i4) {
          transformedSegment.push(transformedPos[_i4]);
        }
      }
      this._addSegment(transformedSegment);
      this._addSideGeometrySegment();
      this._addObstacleSegment();
      this._addBalloonsSegment();
      //this.segmentPosition =
      //  MathUtils.mat4TranslationComponent(segmentMatrix);
      this.segmentMatrices.push(transformationMatrix);
      this._addUvsSegment();
      this.uvH += SEGMENT_LENGTH / SEGMENT_WIDTH;
    }
  }, {
    key: "_addSegment",
    value: function _addSegment(vertices) {
      var startIdx = this.mesh.vertices.length / 3 - 1 - EDGE_LOOP_RESOLUTION;
      for (var i = 0; i < vertices.length; ++i) {
        this.mesh.vertices.push(vertices[i]);
      }
      for (var _i5 = startIdx; _i5 < startIdx + EDGE_LOOP_RESOLUTION; ++_i5) {
        //first triangle
        this.mesh.faces.push(_i5);
        this.mesh.faces.push(_i5 + 1);
        this.mesh.faces.push(_i5 + EDGE_LOOP_RESOLUTION + 1);

        //second triangle
        this.mesh.faces.push(_i5 + 1);
        this.mesh.faces.push(_i5 + EDGE_LOOP_RESOLUTION + 2);
        this.mesh.faces.push(_i5 + EDGE_LOOP_RESOLUTION + 1);

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
      for (var _i6 = 0; _i6 < EDGE_LOOP_RESOLUTION * 6; ++_i6) {
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
/* 23 */
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
/* 24 */
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
/* 25 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map