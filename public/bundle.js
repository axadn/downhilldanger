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
        debugger;
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

module.exports = {"vertexJointWeights":[{"0":1},{"0":1},{"1":1},{"1":1},{"0":1},{"0":1},{"1":1},{"1":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"2":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":0.000123376,"5":0.9998766},{"4":0.0000673789,"5":0.9999327},{"4":0.000107727,"5":0.9998923},{"4":0.04117435,"5":0.9588257},{"4":0.000635725,"5":0.9993643},{"4":0.08761286,"5":0.9123871},{"4":0.000462355,"5":0.9995377},{"4":0.003237187,"5":0.9967628},{"4":0.000293432,"5":0.9997066},{"4":0,"5":1},{"6":7.13821e-7,"7":0.9999993},{"4":0,"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"7":1},{"4":1,"7":0},{"4":0.9999644,"7":0.0000356165},{"4":1,"7":0},{"4":0.999999,"7":0.00000103691},{"4":0.9988135,"7":0.00118643},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"4":1},{"8":0.000924238,"9":0.9990758},{"8":0.000213825,"9":0.9997862},{"8":0.005515396,"9":0.9944846},{"8":0.00000776274,"9":0.9999922},{"8":0.001412451,"9":0.9985876},{"8":0.0000161027,"9":0.9999839},{"8":0.00018801,"9":0.999812},{"8":0.002628147,"9":0.9973718},{"8":1,"10":0},{"8":1,"10":0},{"8":1,"10":0},{"8":0.9999718,"10":0.0000281663},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1},{"8":1,"10":0},{"8":0.9998304,"10":0.000169599},{"8":1,"10":0},{"8":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"10":1},{"1":1},{"1":1},{"1":1},{"1":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":0.0000252637,"12":0.9999747},{"11":0.000105625,"12":0.9998944},{"11":0.002696871,"12":0.9973031},{"11":0.00000400528,"12":0.999996},{"11":0,"12":1},{"11":0.0000911998,"12":0.9999088},{"11":0.000999188,"12":0.9990008},{"11":0.000263982,"12":0.999736},{"11":0.01860803,"12":0.9813919},{"11":0.00000973657,"12":0.9999903},{"6":1},{"6":0.9998414,"11":0.000158578},{"6":0.9999975,"7":0.00000257618},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"6":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"11":1},{"6":0.00000107035,"11":0.9999989},{"6":0.00004516,"11":0.9999548},{"6":0.0000231337,"7":0,"11":0.9999769},{"6":0.005811214,"11":0.9941888},{"6":0.000802966,"11":0.999197},{"13":0,"14":1},{"13":0.00000943574,"14":0.9999906},{"13":0,"14":1},{"13":0,"14":1},{"13":0.001032888,"14":0.9989671},{"13":0.00000201997,"14":0.999998},{"13":0,"14":1},{"13":0.00000229952,"14":0.9999977},{"13":0.9999993,"15":7.01295e-7},{"13":1,"15":0},{"13":1,"15":0},{"13":1,"15":0},{"13":1,"15":0},{"13":1,"15":0},{"13":1},{"13":1},{"13":1},{"13":0.9999985,"15":0.00000149091},{"13":1},{"13":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"0":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"1":1},{"13":1},{"13":1},{"13":1},{"13":1},{"13":1},{"13":1},{"13":1},{"13":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"3":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"15":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1},{"16":1}],"jointNamePositionIndex":{"head neck lower":0,"head neck upper":1,"pelvis":2,"spine":3,"leg right knee":4,"leg right ankle":5,"leg left thigh":6,"leg right thigh":7,"arm right elbow":8,"arm right wrist":9,"arm right shoulder":10,"leg left knee":11,"leg left ankle":12,"arm left elbow":13,"arm left wrist":14,"arm left shouler":15,"board":16,"root hips":17},"jointInverseBindPoses":{"0":[0.9999999,0,0,0.3360495,0,0.0000645965,0.9999999,-3.345903,0,-1,0.0000646263,-0.2315876,0,0,0,1],"1":[0.999382,-0.03423917,-0.00794506,0.3562572,0.000236895,-0.2194741,0.9756183,-3.53032,-0.03514814,-0.9750176,-0.2193303,0.5448708,0,0,0,1],"2":[1,-0.00000170572,0.00000169873,0.3401581,0.00000170608,0.01307386,-0.9999145,2.179038,0.00000168351,0.9999145,0.01307398,0.3568745,0,0,0,1],"3":[0.9999975,-0.001690924,-0.001470446,0.3426983,0.001690924,0.138814,0.990317,-2.111729,-0.001470446,-0.9903171,0.1388165,-0.7043724,0,0,0,1],"4":[0.9829514,0.1333615,-0.1265745,1.073601,-0.1333613,0.04321527,-0.9901247,0.6305866,-0.1265745,0.9901248,0.06026387,0.2132779,0,0,0,1],"5":[0.7090227,-0.5916454,-0.3837218,0.3154639,-0.6638623,-0.7435399,-0.08021813,-1.067575,-0.2378517,0.3116151,-0.9199578,-0.9453169,0,0,0,1],"6":[0.9740064,-0.1610838,0.159259,-0.4375252,0.1610834,-0.001755297,-0.9869391,1.712455,0.1592594,0.9869391,0.02423828,0.3164743,0,0,0,1],"7":[0.9740074,0.1610809,-0.1592566,1.10016,-0.161081,-0.001754999,-0.9869395,1.602869,-0.1592566,0.9869397,0.02423775,0.2081296,0,0,0,1],"8":[0.8582692,0.3730091,-0.3524759,2.361636,-0.373009,-0.0183131,-0.9276472,1.693511,-0.3524752,0.9276475,0.1234179,-0.6578379,0,0,0,1],"9":[0.8791055,0.3756789,-0.2933263,2.310055,-0.3051075,-0.02924346,-0.9518691,0.8936768,-0.3661744,0.926289,0.08891403,-0.6307706,0,0,0,1],"10":[0.7825813,0.4821545,-0.3938204,2.367366,-0.4821545,0.06923866,-0.8733461,2.069923,-0.3938196,0.8733463,0.2866575,-1.143706,0,0,0,1],"11":[0.9829508,-0.1333636,0.1265764,-0.4048805,0.1333634,0.04321533,-0.9901247,0.7213155,0.1265765,0.9901245,0.06026446,0.2993885,0,0,0,1],"12":[0.7392488,0.5560553,0.3798866,0.1381569,0.6261062,-0.7752393,-0.08363699,-0.6106911,0.2479961,0.2996777,-0.9212446,-0.7931421,0,0,0,1],"13":[0.7787206,-0.4660462,0.4199937,-1.96753,0.4660462,-0.01843881,-0.8845679,1.707209,0.4199941,0.884568,0.2028408,-0.7301048,0,0,0,1],"14":[0.799432,-0.4686206,0.3759025,-1.927145,0.410618,-0.03051042,-0.9112967,0.866589,0.4385216,0.8828724,0.1680333,-0.7013855,0,0,0,1],"15":[0.6821044,-0.5816631,0.4431716,-1.95204,0.5816628,0.06428658,-0.8108855,2.142741,0.4431723,0.8108853,0.3821822,-1.217532,0,0,0,1],"16":[0,1,-0.000477482,0.252128,-1,1.21793e-7,-0.000238791,3.418457,-0.000238776,0.000477482,0.9999999,1.080429,0,0,0,1],"17":[1,0.00000619888,0.00000163913,0.3401612,-0.00000620015,0.8696072,0.4937443,-0.6332162,0.0000016221,-0.4937442,0.8696071,-2.092196,0,0,0,1]},"keyframes":{"0":[[-0.701051,-0.275087,-0.657918,0,0.191541,-0.961335,0.197853,0,-0.686906,0.012687,0.726635,0,0.050373,-1.146293,0.894083,1],[-0.701051,-0.275087,-0.657918,0,0.191541,-0.961336,0.197853,0,-0.686906,0.012687,0.726635,0,0.050372,-1.146293,0.894082,1],[-0.603708,0.634236,-0.482992,0,-0.359894,-0.757431,-0.54477,0,-0.711346,-0.155056,0.685525,0,-0.084779,-0.5079,0.734228,1],[-0.681778,0.440927,-0.583749,0,-0.413701,-0.890485,-0.189443,0,-0.60335,0.112339,0.789524,0,-0.362759,-1.222713,0.618975,1],[-0.328316,0.916708,-0.227715,0,-0.921391,-0.363891,-0.136462,0,-0.207959,0.165012,0.964118,0,-0.497974,-0.672543,0.684041,1],[-0.817147,0.401166,-0.41393,0,-0.173137,-0.855747,-0.487566,0,-0.549814,-0.326746,0.768727,0,-1.114977,-1.833133,0.1958,1],[-0.602996,0.664243,0.441789,0,-0.718583,-0.21175,-0.66242,0,-0.346459,-0.716899,0.604998,0,-0.76998,0.826033,1.002637,1],[-0.258323,0.915338,-0.308911,0,-0.576762,-0.40265,-0.710788,0,-0.774993,-0.005445,0.631946,0,0.123423,-0.561229,0.636479,1],[-0.364125,-0.400516,-0.840833,0,0.073871,-0.912387,0.402609,0,-0.928416,0.084488,0.36181,0,1.188468,-2.241651,1.764935,1],[-0.364125,-0.400516,-0.840833,0,0.073871,-0.912387,0.402609,0,-0.928416,0.084488,0.36181,0,1.188468,-2.241652,1.764935,1],[-0.364126,-0.400516,-0.840832,0,0.073871,-0.912387,0.402609,0,-0.928416,0.084488,0.361809,0,1.188467,-2.241651,1.764935,1],[-0.557987,0.798418,0.22623,0,-0.829453,-0.545022,-0.122306,0,0.025649,-0.255891,0.966366,0,-1.102278,0.318894,0.995542,1],[0.008958,0.945037,0.326842,0,-0.860395,0.17384,-0.479062,0,-0.509549,-0.276921,0.814662,0,-1.828821,0.456117,0.709491,1],[-0.665766,0.710407,-0.228206,0,-0.460895,-0.63205,-0.622967,0,-0.586798,-0.309571,0.74822,0,-0.511404,-0.167075,0.309344,1],[-0.665766,0.710407,-0.228206,0,-0.460895,-0.632051,-0.622968,0,-0.586798,-0.309571,0.74822,0,-0.511404,-0.167075,0.309343,1],[-0.70486,0.638106,-0.309826,0,-0.511591,-0.759862,-0.401105,0,-0.491372,-0.124218,0.862046,0,-0.719864,-0.582809,0.164847,1],[-0.476709,0.879058,-0.002137,0,-0.692618,-0.377099,-0.61488,0,-0.541321,-0.291639,0.788618,0,-0.777159,-0.207522,1.127154,1],[-0.474706,0.879995,-0.016218,0,-0.638255,-0.356873,-0.682109,0,-0.60604,-0.31345,0.731071,0,-0.377114,0.074425,0.74106,1]]},"vertexNormalIndices":[0,1,2,3,0,2,4,5,6,7,4,6,6,3,2,7,6,2,5,4,1,0,5,1,5,0,6,6,0,3,2,1,4,7,2,4,8,9,10,11,8,10,12,13,14,12,15,13,13,16,14,17,16,13,16,10,9,17,10,16,17,15,18,13,15,17,18,10,17,11,10,18,11,18,15,9,19,16,20,19,9,14,21,12,21,19,20,19,14,16,21,14,19,8,15,12,8,11,15,8,20,9,20,8,21,8,12,21,22,23,24,25,23,22,26,27,28,29,27,26,26,30,31,32,30,26,33,26,28,32,26,33,34,33,35,32,33,34,30,34,36,32,34,30,30,37,31,36,37,30,22,38,25,35,38,22,39,38,40,41,39,40,29,40,27,41,40,29,42,29,43,41,29,42,44,23,45,24,23,44,29,44,45,26,44,29,44,31,37,26,31,44,38,46,25,47,48,49,48,50,49,51,50,52,50,51,49,53,52,48,52,50,48,47,49,54,54,49,51,53,48,54,48,47,54,53,54,52,52,54,51,55,56,57,58,59,60,60,59,61,62,55,63,56,55,62,64,57,62,57,56,62,64,58,57,57,58,60,63,55,59,59,55,61,55,57,61,61,57,60,64,62,63,64,63,58,58,63,59,65,66,67,67,66,68,68,66,69,66,65,69,68,69,70,70,69,71,67,68,72,72,68,70,65,73,69,69,73,71,72,65,67,65,72,73,73,74,71,72,74,73,70,74,72,71,74,70,75,76,77,77,76,78,78,76,79,76,75,79,79,80,78,78,80,81,79,75,80,80,75,82,78,81,77,77,81,83,75,77,82,82,77,83,81,80,84,84,80,85,82,86,80,80,86,85,83,81,87,87,81,84,82,83,86,86,83,87,88,89,90,89,88,91,89,91,92,92,91,93,94,92,95,95,92,93,94,88,90,88,94,95,88,95,91,91,95,93,96,97,98,97,96,99,100,101,102,101,100,103,104,105,106,104,106,107,101,107,106,103,107,101,104,100,102,105,104,102,108,100,109,103,100,108,109,104,110,100,104,109,110,107,111,104,107,110,111,103,108,107,103,111,98,96,108,109,98,108,97,109,110,98,109,97,111,97,110,99,97,111,96,111,108,111,96,99,102,101,106,105,102,106,112,113,114,115,113,114,116,117,118,119,120,121,121,120,122,116,118,123,124,116,125,121,126,127,121,122,126,125,116,123,119,127,118,118,127,123,127,119,121,122,124,126,126,124,125,125,113,115,113,125,123,127,112,123,112,113,123,126,112,127,112,126,114,115,114,125,125,114,126,116,124,117,119,118,120,120,118,117,122,120,124,124,120,117,128,129,130,131,128,130,132,133,134,133,135,134,136,135,137,137,135,133,138,135,136,135,138,134,132,139,137,132,137,133,138,132,134,139,132,138,137,139,136,139,138,136,140,141,142,141,140,143,143,144,141,145,146,147,146,145,148,148,140,146,143,140,148,142,145,147,141,145,142,145,144,149,144,145,141,143,149,144,148,149,143,146,140,142,147,146,142,145,149,148,150,151,152,151,150,153,154,151,153,152,151,154,153,155,154,154,155,156,150,157,153,153,157,155,152,154,158,158,154,156,150,152,157,157,152,158,156,159,158,158,159,157,157,159,155,159,156,155,160,161,162,161,160,163,164,163,165,161,163,164,166,162,167,160,162,166,166,164,165,167,164,166,168,162,161,162,168,169,164,168,161,170,168,164,169,167,162,171,167,169,167,170,164,171,170,167,169,172,171,171,172,170,172,168,170,168,172,169,173,174,175,176,173,175,177,176,175,178,176,177,175,174,179,177,175,179,174,173,179,179,173,180,180,173,176,178,180,176,181,182,183,182,181,184,185,186,187,188,185,187,186,184,182,184,186,185,185,189,190,188,189,185,185,181,184,190,181,185,189,191,190,192,191,189,183,190,191,181,190,183,187,186,191,192,187,191,191,182,183,186,182,191,193,194,195,194,196,197,198,199,200,199,201,200,195,194,197,198,193,195,202,193,198,200,202,198,196,199,197,201,199,196,197,203,195,204,203,197,195,203,205,198,195,205,199,205,206,198,205,199,206,197,199,204,197,206,203,206,204,205,206,203,207,208,209,210,211,212,213,214,215,216,217,218,219,220,216,208,221,222,208,223,221,207,224,208,217,225,219,219,226,217,219,218,226,227,228,229,229,230,227,231,213,229,213,212,229,229,212,211,211,232,229,233,234,235,233,235,236,237,238,239,240,238,237,239,238,240,239,241,237,237,242,240,219,242,237,240,242,219,233,223,208,233,243,214,224,244,245,215,212,213,245,208,224,243,215,214,224,207,244,207,233,208,244,207,245,245,207,208,233,207,234,246,236,247,248,247,236,246,247,248,235,216,248,235,248,236,248,233,246,220,233,248,248,216,220,217,235,225,217,216,235,220,243,233,217,226,218,216,218,219,249,220,219,214,231,222,213,231,214,220,250,215,210,250,220,215,250,210,212,215,210,220,215,243,236,246,233,214,222,223,233,214,223,251,227,252,227,253,254,253,255,254,254,252,227,252,256,251,249,232,211,222,221,223,257,258,259,260,258,257,259,258,260,261,228,251,262,261,251,251,256,262,222,231,261,228,261,231,229,228,231,227,251,228,262,259,261,262,257,259,260,208,259,259,208,222,259,222,261,235,219,225,263,264,241,241,264,237,219,237,264,265,241,239,239,266,265,240,266,239,263,241,265,232,263,230,229,232,230,230,253,227,264,249,219,210,249,211,263,232,264,265,255,253,253,263,265,253,230,263,249,210,220,232,249,264,267,268,269,270,271,272,273,274,275,276,277,278,278,273,276,273,275,276,278,272,273,278,279,272,271,273,272,280,281,274,271,280,273,281,280,270,272,281,270,271,270,280,280,274,273,277,282,278,283,284,285,286,284,287,287,288,289,288,290,291,288,287,290,286,287,289,284,290,287,291,286,289,291,292,282,286,291,282,293,285,286,293,286,282,282,277,293,285,284,286,291,289,288,294,285,268,275,274,295,278,282,279,279,282,292,295,296,275,297,298,285,285,298,283,276,275,268,268,285,293,296,299,300,299,301,300,296,302,299,295,302,296,268,275,269,268,267,294,301,303,304,304,303,297,267,301,304,301,267,300,296,300,275,275,300,269,267,269,300,297,285,304,304,285,294,294,267,304,276,268,277,293,277,268,305,306,307,306,308,307,308,308,306,309,310,311,312,311,310,313,311,312,314,315,316,317,314,316,318,319,320,319,318,321,321,314,317,319,321,317,317,320,319,316,320,317,315,314,321,318,315,321,319,314,321,314,319,317,322,323,324,325,322,324,326,322,325,327,322,326,328,329,330,329,329,328,331,322,327,332,331,327,323,322,331,333,323,331,333,46,46,330,334,328,335,334,330,334,335,336,324,337,325,336,337,324,337,326,325,338,326,337,326,332,327,338,332,326,323,336,324,333,336,323,339,340,341,341,342,343,339,341,343,344,339,343,345,344,343,346,344,345,345,342,347,343,342,345,342,347,347,348,349,350,350,349,351,349,348,352,353,349,352,352,348,354,348,350,354,349,355,351,355,349,353,356,356,356,357,357,357,358,358,358,359,359,359,360,360,360,361,361,361,362,362,362,360,360,360,363,363,363,364,364,364,365,365,365,360,360,360,366,366,366,367,367,367,368,368,368,369,369,369,370,370,370,360,360,360,371,371,371,372,372,372,373,373,373,374,374,374,375,375,375,376,376,376,377,377,377,378,378,378,379,379,379,380,380,380,381,381,381,360,360,360,382,382,382,383,383,383,384,384,384,385,385,385,386,386,386,387,387,387,388,388,388,388,388,388,360,360,360,389,389,389,390,390,390,391,391,391,392,392,392,393,393,393],"vertexNormals":[-0.5773299,0.577391,0.5773299,0.5773401,0.5773707,0.5773401,0.5773605,0.5773299,-0.5773605,-0.5773401,0.5773401,-0.5773707,0.5773605,-0.5773299,0.5773605,-0.5773707,-0.5773096,0.5773707,-0.5773605,-0.5773605,-0.5773299,0.5773401,-0.5773707,-0.5773401,0.000762981,0.652318,-0.7579451,-0.4271782,0.5502625,0.717447,0.4284551,0.5492795,0.7174388,0.7358239,0.6204299,-0.2713484,-0.000701939,-0.6113892,-0.7913298,0.2170796,-0.7040362,0.6761727,-0.2188208,-0.7034921,0.6761777,0.5326847,-0.7428714,-0.4054495,-0.5836437,-0.2651789,0.7674896,0.583072,-0.2664033,0.7675002,0.8545269,-0.2940183,-0.428179,-0.8551307,-0.2921953,-0.4282215,-0.7344462,0.6220743,-0.2713163,-0.5344585,-0.7415947,-0.4054523,0,-0.9949374,0.1004978,0,-0.5150074,0.8571859,0,-0.5150432,0.8571642,0,-0.9973564,-0.07266539,-0.6556497,0.692151,-0.301746,0.386375,0.2827923,-0.8779197,-0.3904922,0.2823629,-0.8762346,0.7322436,0.5563013,-0.3928717,-0.6399846,-0.205851,0.7403007,-0.5200815,0.4997251,0.6926689,-0.8864483,-0.4177104,-0.1993181,-0.6118195,-0.3197502,-0.7234894,-0.6476853,-0.7338114,-0.2049996,-0.2414699,-0.8313499,-0.5005495,-0.471493,-0.505461,0.7226365,-0.006500482,0.001770079,-0.9999774,0.2386626,-0.8316264,-0.5014357,0.4858983,-0.5891147,-0.6456366,0.6077638,-0.3189585,-0.7272473,0.8418881,-0.2114334,-0.4965083,0.9781993,0.006714165,0.2075606,0.9799287,-0.0000305188,0.1993489,0,0.7932408,0.6089081,0,0.7253301,0.6884014,0,-0.9440855,-0.3297005,-0.8881054,-0.02166855,-0.4591291,-0.06457811,-0.8227918,-0.5646622,-0.717,-0.01736569,0.696857,0.1045589,-0.8186479,0.5646974,0.06454777,0.8227934,0.5646634,0.8881047,0.02169901,0.4591287,0.7169851,0.01733481,-0.696873,-0.1045589,0.8186479,-0.5646974,0.6841745,-0.3414158,0.6444693,0.6503305,0.6211543,0.4373075,-0.3394628,0.6632083,0.6670231,-0.8135933,-0.04877042,-0.5793853,-0.08438569,-0.8045482,-0.5878616,-0.8255405,-0.08786433,0.557461,-0.08627676,-0.8475393,0.5236731,0.5713427,0.5796743,-0.5809865,0.692878,-0.3335751,-0.6392557,-0.3854907,0.7033808,-0.5972038,0.9298644,0.07523024,-0.3601287,-0.14161,-0.1666359,-0.9757967,-0.05533188,0.9768689,-0.2065561,-0.9970524,0.02533066,-0.07242131,-0.01049858,-0.9723435,-0.2333197,-0.7479983,-0.06753927,0.6602552,0.09604334,-0.8633831,0.4953237,0.07223826,0.7808879,0.6204804,0.91008,-0.02536135,0.4136561,0.1451197,0.003357112,0.9894085,-0.9539741,-0.001922667,0.2998832,0.1486571,-0.1578738,0.9762054,0.003448605,0.9839606,0.1783525,0.9988074,0.04736602,0.01184147,0.038576,-0.9942781,0.09961396,-0.03012228,-0.9311975,-0.3632683,0.8865811,0.02179062,-0.4620598,-0.9837699,-0.02252274,-0.1780155,-0.0771526,0.9272357,-0.3664445,0.988328,0.02368271,-0.1504893,0.02081418,-0.9997828,0.001068174,-0.9883092,-0.02444601,0.1504911,-0.02798557,0.9996084,0.0000305187,-0.7295686,0.5407139,-0.418758,-0.7124118,-0.6944971,0.1007136,-0.6957978,0.7145059,0.07312297,-0.741259,-0.5380903,-0.4012406,0.5854825,-0.7085669,-0.3938822,0.281995,-0.5580388,-0.7804303,0.5999194,0.6816809,-0.4188174,0.2954881,0.5235896,-0.7990875,-0.7450243,-0.5809859,-0.3277106,0.347461,0.5537097,-0.7567539,0.3372416,-0.5857627,-0.7369873,-0.7293624,0.5884525,-0.348933,0.7342968,-0.6654756,0.1339802,-0.7490661,-0.5737326,-0.3312566,0.3326299,-0.5952181,-0.7314867,-0.487546,-0.6434996,0.5900909,0.7501023,0.6520439,0.1103881,0.3468841,0.5610392,-0.7516027,-0.7366126,0.5789501,-0.349598,-0.4727072,0.6738268,0.5678957,-0.3897874,-0.5619752,0.7295545,0.7507514,-0.5870749,0.3028459,0.7658191,0.5789193,0.279953,-0.3761852,0.5930273,0.7119013,0.745934,0.5805168,0.3264701,-0.6360166,0.7132908,0.2944476,0.6274822,-0.7225507,-0.2901495,-0.7490671,-0.5739775,-0.3308298,-0.9355251,0.01550358,0.3529201,-0.002929747,0.01681578,0.9998543,-0.3463292,0.9049483,0.2472341,0.4464641,0.8925924,-0.06283885,0.7060642,0.003418147,0.7081396,0.8593786,-0.01928782,-0.5109761,0.4229097,-0.9054548,-0.03604358,-0.7083234,0.672219,-0.2154055,-0.3693374,-0.8881251,0.2735392,-0.7259657,-0.6602268,-0.192547,0.3302786,-0.678533,-0.6561319,0.3478333,0.6516572,-0.6740586,-0.003448605,-0.7781953,-0.628013,-0.4468051,-0.6962103,-0.5618331,-0.004577755,-0.7781918,-0.6280102,0.4367972,-0.7000291,-0.5649492,0.8883654,0,-0.4591373,0.7171966,0,0.696871,0.08459961,-0.8209702,-0.5646688,-0.08459961,-0.8209702,0.5646688,-0.8883718,0,0.4591248,-0.08459961,0.8209702,0.5646688,-0.7171966,0,-0.696871,0.08459812,0.8209561,-0.5646896,0.005584955,-0.8244438,-0.5659163,0.4513565,0.6447906,-0.616865,0.8048546,-0.1397477,-0.576784,-0.7206783,-0.2857199,-0.6316541,-0.5151923,0.6162409,-0.5956711,0.4035224,0.6436156,0.6503297,0.004821956,-0.8372249,0.5468376,0.8146446,-0.148353,0.5606653,-0.7107289,-0.2601448,0.6535971,-0.5867947,0.6926051,0.4194878,0.02996993,0.9779309,-0.2067684,0.1459438,-0.1630346,-0.9757664,-0.931561,0.05005109,-0.3601238,0.9960079,0.0521869,-0.07242083,0.03598219,-0.9717341,-0.2333199,0.7494699,-0.04764109,0.6603221,-0.07315397,-0.8655185,0.4955062,-0.09326636,0.7788478,0.62024,-0.9091784,-0.0492891,0.4134793,-0.1451803,0,0.9894053,0.991046,0,0.1335209,0.05734443,0.9289868,-0.3656436,0.9825185,0.000732448,-0.1861639,-0.00451678,0.9999896,-0.000579863,-0.8906727,0.000732461,-0.4546447,-0.9910501,0,-0.133491,-0.00451678,-0.9999896,-0.000579863,0.05694824,-0.9300028,-0.363114,-0.02682626,0.9836007,0.1783537,0.9536594,0.02185159,0.3000938,-0.9996815,0.02240097,0.01162773,-0.01492381,-0.9949234,0.09952282,-0.1445384,-0.1614155,0.9762447,0.7670062,-0.5516023,-0.3277752,-0.2083871,-0.5351901,-0.8186247,-0.1911118,0.5469668,-0.8150483,0.7856538,0.5270653,-0.3239605,-0.532531,0.7045987,-0.4689899,0.7006437,0.693441,0.1680421,-0.556307,-0.6836948,-0.4723177,0.6765787,-0.7180542,0.1632163,-0.2480595,0.5750415,-0.7796113,0.7593076,-0.5983819,-0.255717,-0.2678994,-0.560428,-0.7836775,0.7783671,0.5745584,-0.2530364,0.3123686,0.5691608,0.7605801,0.291157,-0.5846335,0.7572525,0.02923685,-0.4435889,0.8957535,0.04583942,0.4360545,0.8987521,-0.725414,0.45779,0.5140066,-0.7762235,0.5956724,0.2065229,-0.7948724,-0.5727537,0.2003279,-0.7401319,-0.4392387,0.5091898,0.565851,0.7460651,-0.3509979,0.9837026,-0.01733499,-0.1789659,0.7452189,0.656652,-0.1160036,0.5408982,-0.7569156,-0.3667535,0.724735,-0.6772474,-0.1268675,-0.2534012,0.6727355,-0.6951366,-0.2754032,-0.6566767,-0.7020889,-0.3024442,0.006958305,-0.9531418,0.02789473,-0.7182438,-0.6952322,0.04745692,0.7260764,-0.6859745,0.2671645,0.560789,0.7836701,0.2470563,-0.5755391,0.7795627,-0.7598379,0.5978112,0.2554767,-0.778728,-0.5740967,0.2529737,-0.7147231,-0.6864015,0.1342528,-0.2637761,-0.8708916,-0.4146928,-0.5119861,-0.844887,-0.1550363,0.5066584,-0.1233913,0.8532713,0.4585186,0.240002,0.8556634,-0.006012201,0.3005504,0.953747,-0.358997,0.2912444,0.8867344,-0.5354323,0.1232984,0.8355296,-0.1780787,0.2216599,0.9587258,0.8004743,-0.4642067,0.379148,-0.319111,-0.886772,0.3343707,0.7271144,-0.3170616,0.6089144,0.7449262,-0.4852336,0.4578574,0.60492,-0.659824,0.4457626,-0.6767589,0.6595462,-0.3271027,-0.650332,0.2587106,0.714239,-0.2117397,-0.8813842,0.4222892,0.350637,0.4896222,-0.7983257,0.5322508,-0.6701356,-0.5173271,0.4014531,0.4133251,-0.8173114,-0.01156663,0.8775089,-0.4794209,-0.6988916,0.7107026,0.08032673,-0.02035641,0.9461012,0.3232309,0.7030752,0.7110102,0.01223826,-0.7388097,0.3407473,0.581422,0.6723998,0.5042388,0.541869,-0.2950884,-0.9553673,0.01400822,0.04168939,-0.8810632,0.4711577,0.4936206,-0.8009204,-0.3389178,-0.3275603,0.1604688,-0.9311038,0.8791037,0.3990377,0.2606639,0.6587509,0.74515,-0.1039169,0.5032286,0.0130316,-0.8640552,0.7244085,-0.5953114,-0.3476159,0.9601285,-0.2089637,-0.1857082,0.7175717,0.6265324,0.3042172,-0.4538251,-0.6650506,0.5930857,-0.7264461,0.6858557,0.0433371,0.5532581,-0.2112562,0.8057768,-0.8078184,-0.04080444,0.5880175,-0.4710912,0.05429327,-0.8804121,0.3530505,-0.8564708,0.376581,0.7850185,-0.2807779,0.5521864,-0.2372885,-0.26381,0.9349324,-0.6395061,0.6482041,-0.4133564,-0.3689773,0.5580439,-0.743265,0.6547801,0.6505075,-0.3848416,0.3477357,0.58899,-0.7295004,0.8403373,0.3877118,-0.3788309,-0.7874866,0.4241862,-0.4471366,-0.6426535,0.5309209,-0.5523763,0.2343839,-0.07849419,-0.9689701,-0.9376816,-0.3076978,-0.1614788,-0.3696166,-0.914535,-0.1643453,-0.9638268,0.2665242,0.001678526,-0.9040262,0.2479953,-0.3481884,0.9741004,0.2083216,0.08792477,0.9435456,-0.2347877,0.2336584,0.8851453,0.2536137,-0.3901256,0.439505,-0.1717613,-0.8816652,-0.002838253,-0.9999585,-0.008667409,-0.003418087,-0.9740449,-0.226329,0.5194336,-0.8545018,-0.003936946,0.6574972,0.7350759,-0.1654119,0.5406304,0.2595111,-0.800233,0.254652,0.3074502,-0.9168571,0.8338357,-0.2307834,-0.501455,0.8153619,-0.5783466,-0.02646046,0.7970908,-0.5469279,-0.2559614,0.6888867,-0.4544357,-0.5647332,-0.005035698,-0.4125625,-0.9109154,0.4273279,0,-0.9040967,0.2855405,0.1006838,-0.9530633,0.6327449,-0.1781073,0.7535991,-0.2895632,0.5616392,0.7750578,-0.4191217,0.008697986,-0.9078884,-0.656147,-0.7355597,-0.1685918,-0.8591141,-0.4803104,-0.1767058,-0.778595,-0.5614539,-0.2802844,-0.8083927,-0.2212032,-0.5455002,-0.6202177,-0.1795768,0.7635983,-0.6575613,0.7350183,-0.1654127,-0.5406876,0.2586547,-0.8004716,0.2971643,0.5776652,0.7602608,-0.2206853,0.3231693,-0.9202497,-0.2861447,0.1193592,-0.9507233,-0.6822646,-0.4539173,-0.5731267,-0.5242235,-0.8515694,-0.00439471,0.8561003,-0.4925529,-0.1564731,0.6593473,-0.7371419,-0.1479289,-0.5122309,-0.844705,-0.1552196,-0.512269,-0.8446869,-0.1551914,0.5078098,-0.8473364,-0.155404,0.5103042,-0.8457359,-0.1559509,-0.000915576,-0.983329,-0.1818335,0.5537721,-0.8184351,-0.1532983,-0.5119314,-0.8448974,-0.1551603,-0.511835,-0.8449505,-0.1551893,-0.5032647,-0.8499038,-0.1561676,-0.5109808,-0.8454393,-0.1553421,-0.5079896,-0.8471783,-0.1556777,-0.5119242,-0.8448854,-0.1552497,0.4985033,-0.8527722,-0.1558014,0.5031719,-0.8501154,-0.1553127,0.5061598,-0.8484013,-0.1549761,0.5070836,-0.8478658,-0.1548871,0.5071087,-0.8478567,-0.1548549,-0.6354703,-0.7007204,-0.3242968,-0.6440231,-0.6907485,-0.3287869,-0.6204566,0.7137845,-0.3248776,-0.6123442,0.7226112,-0.3207299,0.6116334,-0.7233638,0.3203896,0.644716,0.6899148,0.3291791,0.6361237,0.6999405,0.3246999,0.6197342,-0.7145896,0.324486,0.7043817,-0.2654249,-0.6583282,0.3140133,-0.7020971,-0.6391052,-0.3139797,-0.7020901,-0.6391294,-0.7043817,-0.2654249,-0.6583282,-0.5679997,0.563086,-0.6002588,0.5679997,0.563086,-0.6002588,-0.0000610379,-0.4875101,0.8731174,0,0.01025426,0.9999474,-0.0000610392,-0.5212748,0.853389,0.9253403,-0.3759042,-0.04941046,0.7021751,0.7091333,-0.06387567,0.3293646,-0.9406669,-0.08163917,0,-0.997203,0.07474058,0,-0.9810776,0.1936152,-0.3288432,-0.9408121,-0.08206582,-0.9253147,-0.3759672,-0.0494107,-0.7021751,0.7091333,-0.06387567,0.003906369,0.6513945,0.7587292,0,0.9688472,0.2476593,0,0.4179857,0.9084537,0,-0.4874868,0.8731304,0.2179114,-0.5311361,0.8187852,0.3033314,-0.2976548,0.9052026,0.3211537,-0.8086372,0.4929159,0.6241264,-0.646833,0.4382618,0,-0.8730177,0.4876887,-0.1063271,-0.001648008,0.9943298,-0.7802526,0.01098686,0.6253679,-0.08023512,-0.5829787,0.808516,-0.6428029,-0.5628722,0.5195955,-0.05957269,0.5803762,0.8121666,-0.6243872,0.5794633,0.5237967,0.3703843,-0.00952202,0.9288298,-0.9981924,0.01510697,0.0581696,0.1082065,-0.9941285,0,-0.959479,0.2817804,0,-0.1082065,0.9941285,-8.27796e-7,0.959479,-0.2817804,0,0,0,-1,0,0,1,1.43924e-7,0,1,0.9594787,0.2817812,0,-0.9594789,-0.2817808,0,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,-1.26466e-7,0,-1,0.1082065,0.9941285,0,0,1,-3.26524e-7,-0.1082065,-0.9941285,0,0,-1,-3.49345e-7,0.1082066,-0.9941285,-0.00000110373,-0.959479,0.2817803,0,-0.1082065,0.9941285,0,0.9594789,-0.2817807,0,0,0,-1,0,0,1,0,0,1,0.9594787,0.2817811,0,-0.9594789,-0.2817807,0,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,-1,0.1082065,0.9941285,-5.51864e-7,0,1,-6.53048e-7,-0.1082066,-0.9941285,0,0,-1,6.53048e-7],"vertexPositionIndices":[0,1,2,3,0,2,4,5,6,7,4,6,6,3,2,7,6,2,5,4,1,0,5,1,5,0,6,6,0,3,2,1,4,7,2,4,8,9,10,11,8,10,12,13,14,12,15,13,13,16,14,17,16,13,16,10,9,17,10,16,17,15,18,13,15,17,18,10,17,11,10,18,11,18,15,9,19,16,20,19,9,14,21,12,21,19,20,19,14,16,21,14,19,8,15,12,8,11,15,8,20,9,20,8,21,8,12,21,22,23,24,25,23,22,26,27,28,29,27,26,26,30,31,32,30,26,33,26,28,32,26,33,34,33,35,32,33,34,30,34,36,32,34,30,30,37,31,36,37,30,22,38,25,35,38,22,39,38,40,41,39,40,29,40,27,41,40,29,42,29,43,41,29,42,44,23,45,24,23,44,29,44,45,26,44,29,44,31,37,26,31,44,38,46,25,47,48,49,48,50,49,51,50,52,50,51,49,53,52,48,52,50,48,47,49,54,54,49,51,53,48,54,48,47,54,53,54,52,52,54,51,55,56,57,58,59,60,60,59,61,62,55,63,56,55,62,64,57,62,57,56,62,64,58,57,57,58,60,63,55,59,59,55,61,55,57,61,61,57,60,64,62,63,64,63,58,58,63,59,65,66,67,67,66,68,68,66,69,66,65,69,68,69,70,70,69,71,67,68,72,72,68,70,65,73,69,69,73,71,72,65,67,65,72,73,73,74,71,72,74,73,70,74,72,71,74,70,75,76,77,77,76,78,78,76,79,76,75,79,79,80,78,78,80,81,79,75,80,80,75,82,78,81,77,77,81,83,75,77,82,82,77,83,81,80,84,84,80,85,82,86,80,80,86,85,83,81,87,87,81,84,82,83,86,86,83,87,88,89,90,89,88,91,89,91,92,92,91,93,94,92,95,95,92,93,94,88,90,88,94,95,88,95,91,91,95,93,96,97,98,97,96,99,100,101,102,101,100,103,104,105,106,104,106,107,101,107,106,103,107,101,104,100,102,105,104,102,108,100,109,103,100,108,109,104,110,100,104,109,110,107,111,104,107,110,111,103,108,107,103,111,98,96,108,109,98,108,97,109,110,98,109,97,111,97,110,99,97,111,96,111,108,111,96,99,102,101,106,105,102,106,112,113,114,115,113,114,116,117,118,119,120,121,121,120,122,116,118,123,124,116,125,121,126,127,121,122,126,125,116,123,119,127,118,118,127,123,127,119,121,122,124,126,126,124,125,125,113,115,113,125,123,127,112,123,112,113,123,126,112,127,112,126,114,115,114,125,125,114,126,116,124,117,119,118,120,120,118,117,122,120,124,124,120,117,128,129,130,131,128,130,132,133,134,133,135,134,136,135,137,137,135,133,138,135,136,135,138,134,132,139,137,132,137,133,138,132,134,139,132,138,137,139,136,139,138,136,140,141,142,141,140,143,143,144,141,145,146,147,146,145,148,148,140,146,143,140,148,142,145,147,141,145,142,145,144,149,144,145,141,143,149,144,148,149,143,146,140,142,147,146,142,145,149,148,150,151,152,151,150,153,154,151,153,152,151,154,153,155,154,154,155,156,150,157,153,153,157,155,152,154,158,158,154,156,150,152,157,157,152,158,156,159,158,158,159,157,157,159,155,159,156,155,160,161,162,161,160,163,164,163,165,161,163,164,166,162,167,160,162,166,166,164,165,167,164,166,168,162,161,162,168,169,164,168,161,170,168,164,169,167,162,171,167,169,167,170,164,171,170,167,169,172,171,171,172,170,172,168,170,168,172,169,173,174,175,176,173,175,177,176,175,178,176,177,175,174,179,177,175,179,174,173,179,179,173,180,180,173,176,178,180,176,181,182,183,182,181,184,185,186,187,188,185,187,186,184,182,184,186,185,185,189,190,188,189,185,185,181,184,190,181,185,189,191,190,192,191,189,183,190,191,181,190,183,187,186,191,192,187,191,191,182,183,186,182,191,193,194,195,194,196,197,198,199,200,199,201,200,195,194,197,198,193,195,202,193,198,200,202,198,196,199,197,201,199,196,197,203,195,204,203,197,195,203,205,198,195,205,199,205,206,198,205,199,206,197,199,204,197,206,203,206,204,205,206,203,207,208,209,210,211,212,213,214,215,216,217,218,219,220,216,208,221,222,208,223,221,207,224,208,217,225,219,219,226,217,219,218,226,227,228,229,229,230,227,231,213,229,213,212,229,229,212,211,211,232,229,233,234,235,233,235,236,237,238,239,240,238,237,239,238,240,239,241,237,237,242,240,219,242,237,240,242,219,233,223,208,233,243,214,224,244,245,215,212,213,245,208,224,243,215,214,224,207,244,207,233,208,244,207,245,245,207,208,233,207,234,246,236,247,248,247,236,246,247,248,235,216,248,235,248,236,248,233,246,220,233,248,248,216,220,217,235,225,217,216,235,220,243,233,217,226,218,216,218,219,249,220,219,214,231,222,213,231,214,220,250,215,210,250,220,215,250,210,212,215,210,220,215,243,236,246,233,214,222,223,233,214,223,251,227,252,227,253,254,253,255,254,254,252,227,252,256,251,249,232,211,222,221,223,257,258,259,260,258,257,259,258,260,261,228,251,262,261,251,251,256,262,222,231,261,228,261,231,229,228,231,227,251,228,262,259,261,262,257,259,260,208,259,259,208,222,259,222,261,235,219,225,263,264,241,241,264,237,219,237,264,265,241,239,239,266,265,240,266,239,263,241,265,232,263,230,229,232,230,230,253,227,264,249,219,210,249,211,263,232,264,265,255,253,253,263,265,253,230,263,249,210,220,232,249,264,267,268,269,270,271,272,273,274,275,276,277,278,278,273,276,273,275,276,278,272,273,278,279,272,271,273,272,280,281,274,271,280,273,281,280,270,272,281,270,271,270,280,280,274,273,277,282,278,283,284,285,286,284,287,287,288,289,288,290,291,288,287,290,286,287,289,284,290,287,291,286,289,291,292,282,286,291,282,293,285,286,293,286,282,282,277,293,285,284,286,291,289,288,294,285,268,275,274,295,278,282,279,279,282,292,295,296,275,297,298,285,285,298,283,276,275,268,268,285,293,296,299,300,299,301,300,296,302,299,295,302,296,268,275,269,268,267,294,301,303,304,304,303,297,267,301,304,301,267,300,296,300,275,275,300,269,267,269,300,297,285,304,304,285,294,294,267,304,276,268,277,293,277,268,305,306,307,306,308,307,309,308,306,310,311,312,313,312,311,314,312,313,315,316,317,318,315,317,319,320,321,320,319,322,322,315,318,320,322,318,318,321,320,317,321,318,316,315,322,319,316,322,320,315,322,315,320,318,323,324,325,326,323,325,327,323,326,328,323,327,329,330,331,332,330,329,333,323,328,334,333,328,324,323,333,335,324,333,335,336,337,331,338,329,339,338,331,338,339,340,325,341,326,340,341,325,341,327,326,342,327,341,327,334,328,342,334,327,324,340,325,335,340,324,343,344,345,345,346,347,343,345,347,348,343,347,349,348,347,350,348,349,349,346,351,347,346,349,346,352,351,353,354,355,355,354,356,354,353,357,358,354,357,357,353,359,353,355,359,354,360,356,360,354,358,373,364,363,370,367,369,380,365,377,372,361,371,384,365,371,382,362,372,382,366,380,384,361,374,366,371,365,364,369,363,363,383,373,373,384,374,368,381,379,381,380,379,364,381,370,376,382,381,367,383,369,383,377,384,368,378,367,379,377,378,361,375,374,374,376,373,373,376,364,370,368,367,380,366,365,372,362,361,384,377,365,382,375,362,382,372,366,384,371,361,366,372,371,364,370,369,363,369,383,373,383,384,368,370,381,381,382,380,364,376,381,376,375,382,367,378,383,383,378,377,368,379,378,379,380,377,361,362,375,374,375,376],"vertexPositions":[-0.1903401,-0.3730064,3.239235,-0.462193,-0.3730064,3.239235,-0.462193,-0.3729822,3.621359,-0.1903401,-0.3729822,3.621359,-0.462193,-0.06451034,3.239235,-0.1903187,-0.06451034,3.239235,-0.1903187,-0.06448608,3.621359,-0.462193,-0.06448608,3.621359,-0.3263521,0.04769241,1.598146,-0.8330569,-0.01221668,2.175258,0.1802459,-0.01350224,2.175258,0.3116623,0.04689192,1.876569,-0.3272926,-0.898873,1.598125,-0.01330864,-0.8992853,2.175258,-0.6412764,-0.8984849,2.175258,0.127641,-0.8994554,1.854846,-0.8337409,-0.7000329,2.175258,0.1795622,-0.7013185,2.175258,0.3109354,-0.7014881,1.876569,-0.9651145,-0.6998629,1.876569,-0.9643877,0.04849272,1.876569,-0.782205,-0.8982909,1.854846,-0.6791751,-0.991405,2.749412,-0.1532537,-0.6433496,3.372427,-0.6189818,-0.6433738,3.372427,-0.09308177,-0.9913809,2.749412,-1.099844,0.3377307,2.729563,0.1671002,-0.07229608,2.47303,-0.8207021,-0.07229608,2.47303,0.4498758,0.3377307,2.729563,-0.9707577,-0.4646166,3.363826,-0.9707577,0.1755386,3.364014,-1.111857,-0.7598934,2.727106,-0.8108689,-0.700397,2.446974,-0.8562705,-0.991405,2.749412,-0.6310377,-0.9009833,2.490566,-0.7659593,-0.6433496,3.372427,-0.7659806,0.1755386,3.364014,-0.02254277,-0.9009833,2.490566,0.2063026,-0.9913809,2.749412,0.1572674,-0.7003725,2.446974,0.4618886,-0.7598934,2.727084,0.3207894,-0.4646166,3.363826,0.3207894,0.1755386,3.364014,-0.6189818,0.1755386,3.364014,-0.1532537,0.1755386,3.364014,0.02920711,-0.9913809,2.749412,-1.549177,-0.2752352,-0.872963,-1.135904,-0.7266161,-0.9312593,-1.444116,-0.2723246,-0.1826328,-1.030844,-0.7236809,-0.2409291,-1.050851,0.2015159,-0.2409291,-0.6375572,-0.2498404,-0.2992256,-0.742639,-0.2527753,-0.9895558,-1.155912,0.1986054,-0.9312593,-0.8240793,-0.5995939,-0.7058004,-0.821429,0.08691233,-0.8369522,-1.421993,0.09074467,-0.6876392,-2.217202,-1.120634,-1.103441,-1.918245,-1.465803,-1.112522,-2.213056,-1.123763,-0.8858761,-1.914099,-1.468932,-0.894957,-0.8267297,0.09093856,-1.115604,-0.8320093,-0.5935545,-1.122811,-1.429923,0.09678411,-1.104649,-0.2910398,-0.2466388,0.6761721,-0.9772558,-0.4391245,0.1502128,-0.9040021,0.4266487,0.7597948,-1.484922,-0.2813475,0.8487702,-0.8723233,-0.9423861,0.764564,-1.05953,-0.4351467,1.856388,-0.7164325,-0.8090822,1.807984,-0.7337681,-0.04178333,1.80811,-0.3906707,-0.4156944,1.759685,-0.6991612,-0.4246929,1.9785,-1.483939,-0.2777092,0.7974505,-0.8297438,-0.4350011,1.12057,-0.9109494,0.4178439,0.7084545,-0.3073706,-0.2449411,0.6273516,-0.8802322,-0.9318353,0.7184937,-0.9781105,-0.5056796,0.1362584,-0.7688238,-0.253503,0.1052253,-1.198064,-0.2654605,0.1672912,-0.9887557,-0.01328396,0.1362584,-0.8262169,-0.2551038,-0.2719624,-1.035525,-0.5072804,-0.2409291,-1.255457,-0.2670614,-0.2098959,-1.04617,-0.01488476,-0.2409291,-2.405285,0.1122828,1.227062,-2.292979,-0.5914688,1.700306,-2.285881,0.1812387,1.689434,-2.411227,-0.5374777,1.236204,-1.655349,-0.6043723,1.469599,-1.875067,-0.5483438,1.042216,-1.646628,0.1683114,1.458144,-1.867713,0.1014167,1.032574,-1.729287,-0.3180449,2.515581,-1.526177,-0.07928115,2.439476,-1.528785,-0.3219499,2.443038,-1.726936,-0.07506108,2.512124,-1.484046,-0.5978719,1.918809,-2.292957,-0.5914929,1.700265,-1.655349,-0.6044207,1.469578,-2.121654,-0.5849684,2.149515,-1.475346,0.1748598,1.907374,-1.646649,0.1683114,1.458144,-2.285881,0.181239,1.689434,-2.114601,0.1878119,2.138664,-1.801749,-0.3206643,2.325154,-1.601376,-0.3247153,2.252654,-1.59864,-0.08190101,2.249051,-1.799526,-0.07782614,2.321739,-1.526177,-0.07928115,2.439476,-1.726935,-0.07506108,2.512124,-1.528785,-0.3219499,2.443038,-1.729287,-0.3180449,2.515581,-1.853371,-0.1850807,3.185582,-1.428513,-0.1862449,3.411459,-1.563371,0.2011278,3.115602,-1.165402,0.2207258,2.97131,-1.063334,-0.1936422,3.27935,-0.9794149,-0.2041934,2.796108,-1.173952,-0.6170332,2.98341,-1.64682,-0.07200473,2.722212,-1.571343,-0.5813303,3.12689,-1.649043,-0.3148432,2.725627,-1.44867,-0.3188937,2.653126,-1.445933,-0.07605528,2.649544,-0.3269506,-0.9020993,3.722706,-0.6890292,-0.6051484,3.642687,-0.3269506,-0.6692053,3.434118,0.04423397,-0.6056577,3.642374,0.8958532,-0.2524116,-0.8730254,0.7907499,-0.2524116,-0.1826744,0.4924558,-0.7151677,-0.9313219,0.3873526,-0.7151677,-0.2409707,-0.01604467,-0.2524116,-0.2992671,0.3873526,0.2103446,-0.2409707,0.08905869,-0.2524116,-0.9896183,0.4924558,0.2103207,-0.9313219,1.160204,-1.540314,-1.083946,0.8049436,0.06755709,-1.112605,1.486734,-1.228786,-1.082551,0.1518806,-0.5554988,-1.115396,0.2039726,0.1264475,-1.123998,0.7972483,0.07543981,-0.695616,1.156184,-1.53619,-0.8664023,1.482716,-1.224687,-0.8650069,0.1441854,-0.547616,-0.698386,0.1988214,0.131735,-0.8453665,0.240923,0.4313055,0.7596068,0.3345266,-0.4321392,0.150296,-0.3559647,-0.2603185,0.6761925,0.8383027,-0.2587905,0.8487911,0.241479,-0.9381418,0.7647725,0.4167147,-0.4250568,1.85645,0.08253109,-0.8092517,1.80815,0.08180427,-0.04171061,1.808047,-0.2523794,-0.4259057,1.759747,0.05621802,-0.4254933,1.978562,0.6020263,-0.2524116,-0.2099375,0.3365138,-0.006153047,0.1362372,0.5512087,-0.2524116,0.16725,0.3873526,-0.006153047,-0.2409707,0.1218406,-0.2524116,0.1052049,0.1726578,-0.2524116,-0.272004,0.3873526,-0.4986699,-0.2409707,0.3365138,-0.4986699,0.1362372,0.2493878,0.4226951,0.7084545,0.8372555,-0.2566804,0.7974305,-0.3396553,-0.2566804,0.6273516,0.2478702,-0.9274454,0.7184724,0.186651,-0.4321392,1.12057,1.94791,-0.5686691,1.350798,1.437122,-0.5580456,1.100097,1.445993,0.09178751,1.101638,1.958106,0.08113974,1.352986,1.179399,0.1567174,1.501882,1.788427,0.1440565,1.800799,1.168839,-0.6160629,1.500049,1.776286,-0.6286755,1.798196,0.941981,-0.1075621,2.459409,1.129721,-0.3545725,2.55255,0.9386044,-0.350304,2.458743,1.133291,-0.1114187,2.553257,1.22713,-0.1126072,2.371933,1.223325,-0.3554459,2.37112,1.555071,-0.6261529,2.226223,1.56717,0.1465791,2.228826,0.9581627,0.1592398,1.929931,1.035755,-0.1086294,2.278,1.032442,-0.3514678,2.277439,0.9476243,-0.6135405,1.928076,0.9084646,0.1569114,3.14043,1.179655,-0.2399449,3.234114,1.02992,-0.1104003,2.753516,0.8969864,-0.6255952,3.138182,1.026115,-0.3532385,2.752703,0.8385455,-0.1064225,2.659583,0.8352324,-0.3492849,2.659,0.3553967,-0.22253,2.75264,0.5177431,-0.645387,2.95215,0.5300339,0.1924203,2.954542,1.133291,-0.1114187,2.553257,1.129721,-0.3545725,2.55255,0.9419815,-0.1075622,2.459409,0.9386044,-0.350304,2.458743,-0.5137078,-0.8580765,4.454235,-0.8303849,-0.6609101,4.425574,-0.7896006,-0.6663673,4.320626,-0.001103281,-0.3905668,4.968114,0.1558991,0.1232214,4.975674,-0.3135268,0.1207958,5.007102,-0.7417197,0.1215721,4.965738,-0.8202529,-0.5243074,4.874282,-0.3218632,-0.4617545,5.016018,-0.1727694,-0.8103677,4.636534,-0.0818597,-1.235529,4.671006,0.1520306,-1.005473,4.604778,0.1513462,-0.7001301,4.535482,-0.07048803,-0.7083765,4.798618,-1.793499,0.1371194,4.252062,-1.051493,-0.3691985,4.673966,-0.9784525,-1.222019,4.933562,-0.9424777,-1.070863,4.731658,-0.08051306,-0.796543,4.561243,0.5623963,-0.4603231,3.628814,-0.3218632,0.6871683,3.955206,-0.8885689,0.5142803,4.406599,-0.3276132,0.7785842,4.53523,0.2448638,0.5142803,4.406599,-0.9828777,0.1618107,4.774958,0.2672659,0.3326611,4.747611,-0.418352,-0.8191482,4.674735,-0.3260742,-0.9617662,4.39987,-0.1476747,-0.8633885,4.45013,-0.3478558,-1.028466,4.574182,0.3225427,-0.3937927,4.413098,0.9264199,0.3327095,4.127574,0.3628779,-0.2233061,4.108078,0.1829822,-0.5776193,4.17777,0.4410051,-0.2103298,4.309478,0.9520707,0.09030777,4.685962,-1.256141,-1.818419,5.909682,-0.5454076,-1.010906,4.44409,-1.314774,-0.6634569,3.68657,-0.4808965,-1.167883,4.655179,-0.9090253,-1.124588,3.628002,-0.246985,-1.397939,4.721366,0.2983666,-0.3193792,4.790555,-0.3040789,-0.6849465,5.554618,-0.7776942,0.4941731,4.035786,-0.6152626,0.08713066,3.580914,0.1339679,0.4941731,4.035786,-0.02769434,0.1764847,3.580914,0.2477922,-0.004019021,3.778398,-0.8998978,-0.004019021,3.778398,-0.946133,-0.2377377,4.053822,-0.7518301,-0.485718,3.332918,-1.115448,-0.4084183,4.25223,-0.8146525,-0.6246735,4.176354,-1.073253,0.1433771,4.491034,-0.9537001,0.000710607,4.117578,0.4295263,0.1433771,4.491034,0.4077663,-0.2413759,4.535918,0.3015514,0.000734878,4.117578,0.2484122,-0.2377134,4.053822,-0.3262666,-0.8612301,3.853274,-0.3262666,-0.8821861,3.734559,-0.2582713,-0.8199481,3.849878,0.4689859,0.1287757,3.939274,0.3497319,0.02375257,3.79883,0.2477922,-0.004019021,3.778398,0.1368538,-0.30308,3.739202,0.2484122,-0.2377134,4.053822,0.1080394,-0.5970231,3.828882,0.03532046,-0.5875394,3.653162,-0.3262666,-0.650141,3.446966,-0.02756607,-0.2663337,3.536566,-0.02769434,0.1764847,3.580914,0.4314287,-0.07064676,4.162374,0.3015514,0.000734878,4.117578,-0.6153908,-0.2663337,3.536566,-0.8146525,-0.6246735,4.176354,-0.946133,-0.2377377,4.053822,-0.7594401,-0.5943551,3.829238,-0.788083,-0.30308,3.739202,-1.083577,-0.07064676,4.162374,-1.121155,0.1287757,3.939274,-1.00188,0.02375257,3.79885,-0.9537001,0.000710607,4.117578,-0.8998978,-0.004019021,3.778398,-0.6152626,0.08713066,3.580914,-0.6789828,-0.5875394,3.653162,-0.3940694,-0.8195357,3.849942,0.1829822,-0.5776193,4.17777,0.1381579,-0.6687445,4.320311,-0.7896006,-0.6663673,4.320626,-0.8303849,-0.6609101,4.425574,-0.1476747,-0.8633885,4.45013,-0.2589767,-0.9063921,4.320914,-0.3260742,-0.9617662,4.39987,0.1513462,-0.7001301,4.535482,-0.5137078,-0.8580765,4.454235,-0.3935565,-0.9063921,4.320914,-0.3307554,-0.8846602,3.850106,-0.4028975,-0.9279305,4.318022,-0.4034533,-0.8408805,3.84613,-0.7689306,-0.6157234,3.825926,-0.7995617,-0.6875417,4.31775,-0.3218846,-0.8846845,3.850106,-0.2489943,-0.8413413,3.84609,-0.2494432,-0.9277849,4.31777,0.1178082,-0.6181489,3.825134,0.1480334,-0.6899913,4.317439,1.168839,-0.6160629,1.500049,0.9476243,-0.6135405,1.928076,0.9581627,0.1592398,1.929931,1.179399,0.1567174,1.501882,1.555071,-0.6261529,2.226223,1.788427,0.1440565,1.800799,1.56717,0.1465791,2.228826,1.776286,-0.6286755,1.798196,0.1442926,-0.6916405,2.175174,-0.02955394,-0.8924942,2.175112,-0.6240265,-0.8924942,2.175112,-0.7978945,-0.6916405,2.175174,-0.8060598,-0.08461749,2.175341,0.1524578,-0.08461749,2.175341,-0.6189818,-0.6433738,3.372427,-0.7659806,0.1755386,3.364014,-0.7659593,-0.6433496,3.372427,-0.6189818,0.1755386,3.364014,0.1572674,-0.7003725,2.446974,0.1671002,-0.07229608,2.47303,-0.02254277,-0.9009833,2.490566,0.2063026,-0.9913809,2.749412,0.02920711,-0.9913809,2.749412,-0.6791751,-0.991405,2.749412,-0.8562705,-0.991405,2.749412,-0.6310377,-0.9009833,2.490566,-0.8108689,-0.700397,2.446974,-0.8207021,-0.07229608,2.47303,0.3207894,0.1755386,3.364014,0.4498758,0.3377307,2.729563,-0.1532537,0.1755386,3.364014,-0.1532537,-0.6433496,3.372427,0.1160131,-0.6433496,3.372427,0.3207894,-0.4646166,3.363826,0.2063026,-0.9913809,2.749412,0.4618886,-0.7598934,2.727084,0.02920711,-0.9913809,2.749412,-0.09308177,-0.9913809,2.749412,0.7317755,-0.2321591,3.412795,0.3838898,-0.2249312,3.242046,0.8969864,-0.6255952,3.138182,0.5177431,-0.645387,2.95215,0.9084646,0.1569114,3.14043,0.5300339,0.1924203,2.954542,1.179655,-0.2399449,3.234114,0.3553967,-0.22253,2.75264,2.653941,-1.199452,-1.265355,2.653941,-1.199452,-0.9999758,-3.334264,-1.199452,-1.265355,-3.334264,-1.199452,-0.9999758,2.653941,0.6882348,-1.265355,2.653941,0.6882348,-0.9999758,-3.334264,0.6882346,-1.265355,-3.334264,0.6882346,-0.9999758,-3.611453,-0.2556086,-1.265355,-3.611453,-0.2556086,-0.9999758,2.93113,-0.2556084,-1.265355,2.93113,-0.2556084,-0.9999758,-1.715874,-1.023297,-1.265355,1.035551,-1.023297,-1.265355,1.035551,-1.023297,-0.9999758,-1.715874,-1.023297,-0.9999758,1.03555,0.51208,-1.265355,-1.715874,0.5120799,-1.265355,-1.715874,0.51208,-0.9999758,1.03555,0.5120801,-0.9999758,-1.715874,-0.2556086,-0.9999758,1.035551,-0.2556085,-0.9999758,-1.715874,-0.2556086,-1.265355,1.035551,-0.2556085,-1.265355],"vertexColors":[0.6666667,0.5725491,0.4117647,0.9333333,0.7882353,0.5333334,0.3098039,0.2862745,0.2039216,0.3294118,0.3019608,0.2156863,0.6666667,0.5725491,0.4117647,0.3098039,0.2862745,0.2039216,0.6980392,0.6,0.4078431,0.427451,0.3803921,0.2862745,0.2862745,0.2666667,0.1843137,0.2705882,0.254902,0.172549,0.6980392,0.6,0.4078431,0.2862745,0.2666667,0.1843137,0.2862745,0.3333333,0.2941176,0.3294118,0.372549,0.3411765,0.3098039,0.3529412,0.3215686,0.2705882,0.3137255,0.2745098,0.2862745,0.3333333,0.2941176,0.3098039,0.3529412,0.3215686,0.427451,0.4745098,0.4509804,0.6980392,0.7411765,0.6431373,0.9333333,0.9764706,0.8392157,0.6666667,0.7098039,0.6470589,0.427451,0.4745098,0.4509804,0.9333333,0.9764706,0.8392157,0.427451,0.3843137,0.2862745,0.6666667,0.5725491,0.4117647,0.2862745,0.2666667,0.1843137,0.2862745,0.2666667,0.1843137,0.6666667,0.5725491,0.4117647,0.3294118,0.3019608,0.2156863,0.3098039,0.2862745,0.2039216,0.9333333,0.7882353,0.5333334,0.6980392,0.6,0.4078431,0.2705882,0.254902,0.172549,0.3098039,0.2862745,0.2039216,0.6980392,0.6,0.4078431,0.05882352,0.05098038,0.06274509,0.2,0.1568627,0.1921569,0.2,0.1568627,0.1882353,0.07450979,0.06274509,0.07843136,0.05882352,0.05098038,0.06274509,0.2,0.1568627,0.1882353,0.06274509,0.05490195,0.06666666,0.1333333,0.1098039,0.1372549,0.1333333,0.1098039,0.1411765,0.06274509,0.05490195,0.06666666,0.06666666,0.05882352,0.07450979,0.1333333,0.1098039,0.1372549,0.1333333,0.1098039,0.1372549,0.1686275,0.1333333,0.1686275,0.1333333,0.1098039,0.1411765,0.1686275,0.1333333,0.1647059,0.1686275,0.1333333,0.1686275,0.1333333,0.1098039,0.1372549,0.1686275,0.1333333,0.1686275,0.2,0.1568627,0.1882353,0.2,0.1568627,0.1921569,0.1686275,0.1333333,0.1647059,0.2,0.1568627,0.1882353,0.1686275,0.1333333,0.1686275,0.1686275,0.1333333,0.1647059,0.06666666,0.05882352,0.07450979,0.06274509,0.05490195,0.07058823,0.1333333,0.1098039,0.1372549,0.06666666,0.05882352,0.07450979,0.1686275,0.1333333,0.1647059,0.06274509,0.05490195,0.07058823,0.2,0.1568627,0.1882353,0.1686275,0.1333333,0.1647059,0.07450979,0.06274509,0.07843136,0.2,0.1568627,0.1882353,0.06274509,0.05490195,0.07058823,0.07450979,0.06274509,0.07843136,0.06274509,0.05490195,0.07058823,0.06666666,0.05882352,0.07450979,0.2,0.1568627,0.1921569,0.07450979,0.06274509,0.08235293,0.1686275,0.1333333,0.1686275,0.07843136,0.06274509,0.0862745,0.07450979,0.06274509,0.08235293,0.2,0.1568627,0.1921569,0.1333333,0.1098039,0.1411765,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.06666666,0.07450979,0.06274509,0.08235293,0.07450979,0.06274509,0.08235293,0.07843136,0.06274509,0.0862745,0.07450979,0.06274509,0.08235293,0.1333333,0.1098039,0.1411765,0.1686275,0.1333333,0.1686275,0.07450979,0.06274509,0.08235293,0.1333333,0.1098039,0.1411765,0.07450979,0.06274509,0.08235293,0.05882352,0.05098038,0.06274509,0.06666666,0.05882352,0.07450979,0.06274509,0.05490195,0.06666666,0.05882352,0.05098038,0.06274509,0.07450979,0.06274509,0.07843136,0.06666666,0.05882352,0.07450979,0.05882352,0.05098038,0.06274509,0.07843136,0.06274509,0.0862745,0.2,0.1568627,0.1921569,0.07843136,0.06274509,0.0862745,0.05882352,0.05098038,0.06274509,0.07450979,0.06274509,0.08235293,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.07450979,0.06274509,0.08235293,0.07450979,0.06274509,0.08235293,0.1294118,0.1058824,0.1372549,0.1294118,0.1058824,0.1372549,0.07058823,0.06274509,0.07843136,0.1294118,0.1058824,0.1372549,0.07450979,0.06274509,0.08235293,0.0980392,0.07843136,0.1019608,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.09411764,0.07843136,0.09411764,0.05882352,0.05098038,0.06274509,0.0980392,0.07843136,0.1019608,0.0980392,0.07843136,0.1019608,0.1372549,0.1098039,0.1411765,0.1921569,0.1490196,0.1843137,0.07843136,0.06666666,0.0862745,0.1372549,0.1098039,0.1411765,0.0980392,0.07843136,0.1019608,0.06274509,0.05490195,0.07058823,0.0980392,0.07843136,0.1019608,0.06274509,0.05490195,0.06666666,0.07843136,0.06666666,0.0862745,0.0980392,0.07843136,0.1019608,0.06274509,0.05490195,0.07058823,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.07058823,0.06274509,0.05490195,0.06666666,0.07843136,0.06666666,0.0862745,0.06274509,0.05490195,0.07058823,0.07450979,0.06274509,0.08235293,0.1372549,0.1098039,0.1411765,0.07450979,0.06274509,0.08235293,0.1098039,0.09019607,0.1215686,0.07843136,0.06666666,0.0862745,0.07450979,0.06274509,0.08235293,0.1372549,0.1098039,0.1411765,0.1372549,0.1098039,0.1411765,0.09019607,0.07450979,0.1019608,0.1921569,0.1490196,0.1843137,0.1098039,0.09019607,0.1215686,0.09019607,0.07450979,0.1019608,0.1372549,0.1098039,0.1411765,0.07450979,0.06274509,0.08235293,0.05882352,0.05098038,0.06274509,0.07058823,0.06274509,0.07843136,0.06274509,0.05490195,0.06666666,0.05882352,0.05098038,0.06274509,0.07450979,0.06274509,0.08235293,0.05490195,0.05098038,0.05882352,0.05882352,0.05098038,0.06274509,0.05490195,0.05098038,0.05882352,0.06274509,0.05490195,0.06666666,0.05490195,0.05098038,0.05882352,0.05490195,0.05098038,0.05882352,0.09411764,0.07843136,0.09411764,0.05490195,0.05098038,0.05882352,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.05490195,0.05098038,0.05882352,0.09411764,0.07843136,0.09411764,0.1176471,0.09411764,0.1176471,0.09411764,0.07843136,0.09411764,0.1137255,0.09411764,0.1176471,0.06274509,0.05490195,0.06666666,0.09411764,0.07843136,0.09411764,0.1176471,0.09411764,0.1176471,0.2117647,0.1647059,0.2,0.1294118,0.1058824,0.1372549,0.2156863,0.1686275,0.2039216,0.1294118,0.1058824,0.1372549,0.1294118,0.1058824,0.1372549,0.2117647,0.1647059,0.2,0.09411764,0.07843136,0.09411764,0.2117647,0.1647059,0.2,0.2156863,0.1686275,0.2039216,0.0980392,0.07843136,0.1019608,0.2117647,0.1647059,0.2,0.09411764,0.07843136,0.09411764,0.345098,0.3921568,0.3607843,0.345098,0.3921568,0.3607843,0.345098,0.3921568,0.3607843,0.0980392,0.07843136,0.1019608,0.1921569,0.1490196,0.1843137,0.2117647,0.1647059,0.2,0.05882352,0.05098038,0.06274509,0.06666666,0.05490195,0.07058823,0.07058823,0.06274509,0.07843136,0.1490196,0.1176471,0.07058823,0.1137255,0.09411764,0.05098038,0.2980392,0.2196078,0.1294118,0.1137255,0.09411764,0.05098038,0.1647059,0.1294118,0.07843136,0.2980392,0.2196078,0.1294118,0.4196078,0.3058823,0.172549,0.1647059,0.1294118,0.07843136,0.1764706,0.1372549,0.08235293,0.1647059,0.1294118,0.07843136,0.4196078,0.3058823,0.172549,0.2980392,0.2196078,0.1294118,0.1176471,0.09411764,0.05490195,0.1764706,0.1372549,0.08235293,0.1137255,0.09411764,0.05098038,0.1764706,0.1372549,0.08235293,0.1647059,0.1294118,0.07843136,0.1137255,0.09411764,0.05098038,0.1490196,0.1176471,0.07058823,0.2980392,0.2196078,0.1294118,0.2627451,0.1960784,0.1098039,0.2627451,0.1960784,0.1098039,0.2980392,0.2196078,0.1294118,0.4196078,0.3058823,0.172549,0.1176471,0.09411764,0.05490195,0.1137255,0.09411764,0.05098038,0.2627451,0.1960784,0.1098039,0.2627451,0.3058823,0.2666667,0.3411765,0.3843137,0.3607843,0.6117647,0.654902,0.5647059,0.1176471,0.09411764,0.05490195,0.2627451,0.1960784,0.1098039,0.1764706,0.1372549,0.08235293,0.1764706,0.1372549,0.08235293,0.2627451,0.1960784,0.1098039,0.4196078,0.3058823,0.172549,0.3490196,0.2588235,0.145098,0.3647059,0.2666667,0.1490196,0.345098,0.254902,0.145098,0.1294118,0.1019608,0.05882352,0.1333333,0.1058824,0.06274509,0.2196078,0.1647059,0.1019608,0.2196078,0.1647059,0.1019608,0.1333333,0.1058824,0.06274509,0.2156863,0.1647059,0.1019608,0.1254902,0.0980392,0.05882352,0.3490196,0.2588235,0.145098,0.1254902,0.1019608,0.05882352,0.3647059,0.2666667,0.1490196,0.3490196,0.2588235,0.145098,0.1254902,0.0980392,0.05882352,0.1215686,0.0980392,0.05882352,0.345098,0.254902,0.145098,0.1254902,0.0980392,0.05882352,0.345098,0.254902,0.145098,0.3647059,0.2666667,0.1490196,0.1254902,0.0980392,0.05882352,0.1215686,0.0980392,0.05882352,0.1294118,0.1019608,0.05882352,0.345098,0.254902,0.145098,0.345098,0.254902,0.145098,0.1294118,0.1019608,0.05882352,0.2196078,0.1647059,0.1019608,0.1254902,0.1019608,0.05882352,0.3490196,0.2588235,0.145098,0.1333333,0.1058824,0.06274509,0.1333333,0.1058824,0.06274509,0.3490196,0.2588235,0.145098,0.2156863,0.1647059,0.1019608,0.3490196,0.2588235,0.145098,0.345098,0.254902,0.145098,0.2156863,0.1647059,0.1019608,0.2156863,0.1647059,0.1019608,0.345098,0.254902,0.145098,0.2196078,0.1647059,0.1019608,0.1215686,0.0980392,0.05882352,0.1254902,0.0980392,0.05882352,0.1254902,0.1019608,0.05882352,0.1215686,0.0980392,0.05882352,0.1254902,0.1019608,0.05882352,0.1294118,0.1019608,0.05882352,0.1294118,0.1019608,0.05882352,0.1254902,0.1019608,0.05882352,0.1333333,0.1058824,0.06274509,0.06274509,0.05490195,0.06666666,0.05882352,0.05098038,0.06274509,0.0980392,0.08235293,0.0980392,0.0980392,0.08235293,0.0980392,0.05882352,0.05098038,0.06274509,0.1137255,0.09411764,0.1176471,0.1137255,0.09411764,0.1176471,0.05882352,0.05098038,0.06274509,0.07843136,0.06666666,0.09019607,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.07843136,0.06666666,0.09019607,0.1137255,0.09411764,0.1176471,0.07843136,0.06666666,0.09019607,0.1921569,0.1490196,0.1843137,0.1921569,0.1490196,0.1843137,0.07843136,0.06666666,0.09019607,0.1019608,0.08235293,0.1137255,0.0980392,0.08235293,0.0980392,0.1137255,0.09411764,0.1176471,0.1882353,0.1490196,0.1764706,0.1882353,0.1490196,0.1764706,0.1137255,0.09411764,0.1176471,0.1921569,0.1490196,0.1843137,0.06274509,0.05490195,0.06666666,0.09411764,0.07843136,0.0980392,0.07843136,0.06666666,0.09019607,0.07843136,0.06666666,0.09019607,0.09411764,0.07843136,0.0980392,0.1019608,0.08235293,0.1137255,0.1882353,0.1490196,0.1764706,0.06274509,0.05490195,0.06666666,0.0980392,0.08235293,0.0980392,0.06274509,0.05490195,0.06666666,0.1882353,0.1490196,0.1764706,0.09411764,0.07843136,0.0980392,0.4196078,0.4666666,0.427451,0.8980392,0.9411765,0.8235294,0.4666666,0.509804,0.4901961,0.8509804,0.8941177,0.7647059,0.8980392,0.9411765,0.8235294,0.4196078,0.4666666,0.427451,0.1921569,0.1490196,0.1843137,0.1960784,0.1568627,0.1882353,0.1882353,0.1490196,0.1764706,0.1019608,0.08235293,0.1137255,0.1960784,0.1568627,0.1882353,0.1921569,0.1490196,0.1843137,0.1294118,0.1058824,0.1333333,0.1294118,0.1058824,0.1372549,0.2039216,0.1607843,0.1921569,0.2039216,0.1607843,0.1921569,0.1294118,0.1058824,0.1372549,0.07450979,0.06274509,0.08235293,0.07450979,0.06274509,0.08235293,0.1294118,0.1058824,0.1372549,0.07058823,0.05882352,0.07843136,0.1294118,0.1058824,0.1372549,0.1294118,0.1058824,0.1333333,0.07058823,0.05882352,0.07843136,0.07058823,0.05882352,0.07843136,0.06274509,0.05490195,0.06666666,0.07450979,0.06274509,0.08235293,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.06666666,0.06274509,0.05490195,0.07058823,0.07058823,0.05882352,0.07843136,0.1294118,0.1058824,0.1333333,0.06274509,0.05490195,0.06666666,0.06274509,0.05490195,0.06666666,0.1294118,0.1058824,0.1333333,0.09411764,0.07843136,0.1019608,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.07058823,0.2039216,0.1607843,0.1921569,0.2039216,0.1607843,0.1921569,0.06274509,0.05490195,0.07058823,0.1607843,0.1254902,0.1529412,0.1294118,0.1058824,0.1333333,0.2039216,0.1607843,0.1921569,0.09411764,0.07843136,0.1019608,0.09411764,0.07843136,0.1019608,0.2039216,0.1607843,0.1921569,0.1607843,0.1254902,0.1529412,0.06274509,0.05490195,0.07058823,0.06274509,0.05490195,0.06666666,0.07058823,0.06274509,0.07843136,0.07058823,0.06274509,0.07843136,0.06274509,0.05490195,0.06666666,0.06666666,0.05882352,0.07450979,0.09411764,0.07843136,0.1019608,0.1176471,0.09411764,0.1215686,0.06274509,0.05490195,0.06666666,0.06274509,0.05490195,0.06666666,0.1176471,0.09411764,0.1215686,0.06666666,0.05882352,0.07450979,0.1607843,0.1254902,0.1529412,0.06274509,0.05490195,0.07058823,0.1921569,0.1529412,0.1843137,0.1921569,0.1529412,0.1843137,0.06274509,0.05490195,0.07058823,0.07058823,0.06274509,0.07843136,0.09411764,0.07843136,0.1019608,0.1607843,0.1254902,0.1529412,0.1176471,0.09411764,0.1215686,0.1176471,0.09411764,0.1215686,0.1607843,0.1254902,0.1529412,0.1921569,0.1529412,0.1843137,0.07058823,0.07450979,0.07058823,0.06666666,0.07058823,0.06666666,0.1058824,0.1098039,0.0980392,0.06666666,0.07058823,0.06666666,0.07058823,0.07450979,0.07058823,0.05882352,0.06274509,0.05882352,0.06666666,0.07058823,0.06666666,0.05882352,0.06274509,0.05882352,0.04705882,0.05098038,0.04313725,0.04705882,0.05098038,0.04313725,0.05882352,0.06274509,0.05882352,0.04313725,0.04705882,0.04313725,0.06666666,0.07058823,0.06666666,0.04705882,0.05098038,0.04313725,0.05490195,0.05882352,0.05490195,0.05490195,0.05882352,0.05490195,0.04705882,0.05098038,0.04313725,0.04313725,0.04705882,0.04313725,0.06666666,0.07058823,0.06666666,0.07058823,0.07450979,0.07058823,0.1058824,0.1098039,0.0980392,0.07058823,0.07450979,0.07058823,0.06666666,0.07058823,0.06666666,0.05490195,0.05882352,0.05490195,0.07058823,0.07450979,0.07058823,0.05490195,0.05882352,0.05490195,0.05882352,0.06274509,0.05882352,0.05882352,0.06274509,0.05882352,0.05490195,0.05882352,0.05490195,0.04313725,0.04705882,0.04313725,0.3372549,0.3843137,0.3529412,0.3137255,0.3568627,0.3254902,0.2431373,0.2901961,0.2431373,0.3137255,0.3568627,0.3254902,0.3372549,0.3843137,0.3529412,0.4117647,0.4549019,0.4352941,0.2705882,0.2392157,0.172549,0.3058823,0.2666667,0.1960784,0.2196078,0.2,0.1372549,0.3058823,0.2666667,0.1960784,0.2705882,0.2392157,0.172549,0.4196078,0.3529412,0.2666667,0.6,0.4901961,0.3411765,0.2823529,0.2470588,0.1843137,0.3686274,0.3137255,0.2431373,0.6,0.4901961,0.3411765,0.3686274,0.3137255,0.2431373,0.7803922,0.627451,0.4509804,0.3058823,0.2666667,0.1960784,0.7803922,0.627451,0.4509804,0.3686274,0.3137255,0.2431373,0.4196078,0.3529412,0.2666667,0.7803922,0.627451,0.4509804,0.3058823,0.2666667,0.1960784,0.6,0.4901961,0.3411765,0.2705882,0.2392157,0.172549,0.2196078,0.2,0.1372549,0.2823529,0.2470588,0.1843137,0.6,0.4901961,0.3411765,0.2196078,0.2,0.1372549,0.5137255,0.427451,0.3137255,0.2705882,0.2392157,0.172549,0.345098,0.2980392,0.2117647,0.4196078,0.3529412,0.2666667,0.2705882,0.2392157,0.172549,0.5137255,0.427451,0.3137255,0.345098,0.2980392,0.2117647,0.6,0.4901961,0.3411765,0.6627451,0.5372549,0.372549,0.2705882,0.2392157,0.172549,0.6,0.4901961,0.3411765,0.345098,0.2980392,0.2117647,0.6627451,0.5372549,0.372549,0.7803922,0.627451,0.4509804,0.8313726,0.6666667,0.4745098,0.6,0.4901961,0.3411765,0.7803922,0.627451,0.4509804,0.6627451,0.5372549,0.372549,0.8313726,0.6666667,0.4745098,0.4196078,0.3529412,0.2666667,0.5137255,0.427451,0.3137255,0.7803922,0.627451,0.4509804,0.4196078,0.3529412,0.2666667,0.8313726,0.6705883,0.4745098,0.2196078,0.2,0.1372549,0.3058823,0.2666667,0.1960784,0.5137255,0.427451,0.3137255,0.345098,0.2980392,0.2117647,0.2196078,0.2,0.1372549,0.5137255,0.427451,0.3137255,0.2823529,0.2470588,0.1803922,0.345098,0.2980392,0.2117647,0.6627451,0.5372549,0.372549,0.2196078,0.2,0.1372549,0.345098,0.2980392,0.2117647,0.2823529,0.2470588,0.1803922,0.8313726,0.6705883,0.4745098,0.2823529,0.2470588,0.1803922,0.6627451,0.5372549,0.372549,0.3686274,0.3137255,0.2431373,0.2823529,0.2470588,0.1803922,0.8313726,0.6705883,0.4745098,0.3058823,0.2666667,0.1960784,0.8313726,0.6705883,0.4745098,0.5137255,0.427451,0.3137255,0.8313726,0.6705883,0.4745098,0.3058823,0.2666667,0.1960784,0.3686274,0.3137255,0.2431373,0.2431373,0.2901961,0.2431373,0.3372549,0.3843137,0.3529412,0.4078431,0.4549019,0.4352941,0.2823529,0.2470588,0.1843137,0.2196078,0.2,0.1372549,0.3686274,0.3137255,0.2431373,0.7568628,0.8,0.6862745,0.7215687,0.7647059,0.6901961,0.2627451,0.3058823,0.2666667,0.3372549,0.3843137,0.3529412,0.7215687,0.7647059,0.6901961,0.2627451,0.3058823,0.2666667,0.4705882,0.3921568,0.2980392,0.8235294,0.6666667,0.4627451,0.6901961,0.5607843,0.4039216,0.5686275,0.4666666,0.3333333,0.7058824,0.5725491,0.3960784,0.2470588,0.2196078,0.1568627,0.2470588,0.2196078,0.1568627,0.7058824,0.5725491,0.3960784,0.2588235,0.227451,0.1647059,0.4705882,0.3921568,0.2980392,0.6901961,0.5607843,0.4039216,0.3843137,0.3254902,0.254902,0.3215686,0.2784314,0.2078431,0.4705882,0.3921568,0.2980392,0.3098039,0.2705882,0.2,0.2470588,0.2196078,0.1568627,0.2196078,0.2,0.1372549,0.2941176,0.2588235,0.1921569,0.2470588,0.2196078,0.1568627,0.2588235,0.227451,0.1647059,0.2196078,0.2,0.1372549,0.3098039,0.2705882,0.2,0.4705882,0.3921568,0.2980392,0.3843137,0.3254902,0.254902,0.5686275,0.4666666,0.3333333,0.2941176,0.2588235,0.1921569,0.6901961,0.5607843,0.4039216,0.6901961,0.5607843,0.4039216,0.2941176,0.2588235,0.1921569,0.3843137,0.3254902,0.254902,0.2941176,0.2588235,0.1921569,0.5686275,0.4666666,0.3333333,0.2470588,0.2196078,0.1568627,0.2588235,0.227451,0.1647059,0.3215686,0.2784314,0.2078431,0.2196078,0.2,0.1372549,0.2196078,0.2,0.1372549,0.3215686,0.2784314,0.2078431,0.3098039,0.2705882,0.2,0.3098039,0.2705882,0.2,0.6509804,0.5294118,0.3882353,0.3058823,0.2666667,0.1960784,0.6509804,0.5294118,0.3882353,0.3098039,0.2705882,0.2,0.3843137,0.3254902,0.254902,0.2941176,0.2588235,0.1921569,0.6862745,0.5568628,0.3843137,0.3843137,0.3254902,0.254902,0.6862745,0.5568628,0.3843137,0.6509804,0.5294118,0.3882353,0.3843137,0.3254902,0.254902,0.2196078,0.2,0.1372549,0.6862745,0.5568628,0.3843137,0.2941176,0.2588235,0.1921569,0.6862745,0.5568628,0.3843137,0.2196078,0.2,0.1372549,0.2352941,0.2117647,0.1490196,0.3058823,0.2666667,0.1960784,0.2352941,0.2117647,0.1490196,0.3098039,0.2705882,0.2,0.3098039,0.2705882,0.2,0.2352941,0.2117647,0.1490196,0.2196078,0.2,0.1372549,0.4705882,0.3921568,0.2980392,0.3215686,0.2784314,0.2078431,0.8235294,0.6666667,0.4627451,0.5686275,0.4666666,0.3333333,0.6901961,0.5607843,0.4039216,0.7058824,0.5725491,0.3960784,0.7058824,0.5725491,0.3960784,0.6901961,0.5607843,0.4039216,0.8235294,0.6666667,0.4627451,0.2588235,0.227451,0.1647059,0.7058824,0.5725491,0.3960784,0.3215686,0.2784314,0.2078431,0.3215686,0.2784314,0.2078431,0.7058824,0.5725491,0.3960784,0.8235294,0.6666667,0.4627451,0.2666667,0.3098039,0.2666667,0.2823529,0.3294118,0.2862745,0.2666667,0.3098039,0.2666667,0.2705882,0.3137255,0.2745098,0.2666667,0.3098039,0.2666667,0.2666667,0.3098039,0.2666667,0.1529412,0.1215686,0.07058823,0.2980392,0.2235294,0.1294118,0.1137255,0.09411764,0.05098038,0.2980392,0.2235294,0.1294118,0.1647059,0.1294118,0.07843136,0.1137255,0.09411764,0.05098038,0.172549,0.1333333,0.08235293,0.1647059,0.1294118,0.07843136,0.4156863,0.3058823,0.1686275,0.4156863,0.3058823,0.1686275,0.1647059,0.1294118,0.07843136,0.2980392,0.2235294,0.1294118,0.1176471,0.09411764,0.05490195,0.1647059,0.1294118,0.07843136,0.172549,0.1333333,0.08235293,0.1647059,0.1294118,0.07843136,0.1176471,0.09411764,0.05490195,0.1137255,0.09411764,0.05098038,0.1529412,0.1215686,0.07058823,0.2666667,0.2,0.1098039,0.4156863,0.3058823,0.1686275,0.1529412,0.1215686,0.07058823,0.4156863,0.3058823,0.1686275,0.2980392,0.2235294,0.1294118,0.2666667,0.3137255,0.2745098,0.3529412,0.3960784,0.3686274,0.2666667,0.3098039,0.2666667,0.2666667,0.2,0.1098039,0.1529412,0.1215686,0.07058823,0.1176471,0.09411764,0.05490195,0.4156863,0.3058823,0.1686275,0.2666667,0.2,0.1098039,0.172549,0.1333333,0.08235293,0.2666667,0.2,0.1098039,0.1176471,0.09411764,0.05490195,0.172549,0.1333333,0.08235293,0.1294118,0.1019608,0.05882352,0.1254902,0.1019608,0.05882352,0.1294118,0.1058824,0.05882352,0.1254902,0.1019608,0.05882352,0.1294118,0.1019608,0.05882352,0.1215686,0.0980392,0.05882352,0.1215686,0.0980392,0.05882352,0.1254902,0.1019608,0.05882352,0.1254902,0.1019608,0.05882352,0.3568627,0.2627451,0.1490196,0.2,0.1529412,0.09411764,0.2235294,0.1686275,0.1019608,0.2,0.1529412,0.09411764,0.3568627,0.2627451,0.1490196,0.3333333,0.2470588,0.1411765,0.3333333,0.2470588,0.1411765,0.1294118,0.1019608,0.05882352,0.2,0.1529412,0.09411764,0.1215686,0.0980392,0.05882352,0.1294118,0.1019608,0.05882352,0.3333333,0.2470588,0.1411765,0.1294118,0.1058824,0.05882352,0.3568627,0.2627451,0.1490196,0.2235294,0.1686275,0.1019608,0.1254902,0.1019608,0.05882352,0.3568627,0.2627451,0.1490196,0.1294118,0.1058824,0.05882352,0.3568627,0.2627451,0.1490196,0.1254902,0.1019608,0.05882352,0.372549,0.2745098,0.1529412,0.1254902,0.1019608,0.05882352,0.3568627,0.2627451,0.1490196,0.1254902,0.1019608,0.05882352,0.1215686,0.0980392,0.05882352,0.372549,0.2745098,0.1529412,0.1254902,0.1019608,0.05882352,0.3333333,0.2470588,0.1411765,0.372549,0.2745098,0.1529412,0.1215686,0.0980392,0.05882352,0.2,0.1529412,0.09411764,0.1294118,0.1019608,0.05882352,0.1294118,0.1058824,0.05882352,0.2235294,0.1686275,0.1019608,0.2,0.1529412,0.09411764,0.1294118,0.1058824,0.05882352,0.3568627,0.2627451,0.1490196,0.372549,0.2745098,0.1529412,0.3333333,0.2470588,0.1411765,0.1058824,0.0862745,0.1058824,0.06274509,0.05490195,0.06666666,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.1058824,0.0862745,0.1058824,0.1294118,0.1058824,0.1333333,0.07843136,0.06666666,0.0862745,0.06274509,0.05490195,0.06666666,0.1294118,0.1058824,0.1333333,0.05882352,0.05098038,0.06274509,0.06274509,0.05490195,0.06666666,0.07843136,0.06666666,0.0862745,0.1294118,0.1058824,0.1333333,0.1960784,0.1529412,0.1921569,0.07843136,0.06666666,0.0862745,0.07843136,0.06666666,0.0862745,0.1960784,0.1529412,0.1921569,0.09411764,0.07843136,0.1058824,0.1058824,0.0862745,0.1058824,0.1843137,0.145098,0.1764706,0.1294118,0.1058824,0.1333333,0.1294118,0.1058824,0.1333333,0.1843137,0.145098,0.1764706,0.1960784,0.1529412,0.1921569,0.05882352,0.05098038,0.06274509,0.07843136,0.06666666,0.0862745,0.07843136,0.06666666,0.0862745,0.07843136,0.06666666,0.0862745,0.07843136,0.06666666,0.0862745,0.09411764,0.07843136,0.1058824,0.1058824,0.0862745,0.1058824,0.05882352,0.05098038,0.06274509,0.1843137,0.145098,0.1764706,0.1843137,0.145098,0.1764706,0.05882352,0.05098038,0.06274509,0.07843136,0.06666666,0.0862745,0.427451,0.4745098,0.4549019,0.8509804,0.8941177,0.7843137,0.3529412,0.3960784,0.372549,0.3529412,0.3960784,0.372549,0.8509804,0.8941177,0.7843137,0.8431373,0.8862745,0.7568628,0.1843137,0.145098,0.1764706,0.1882353,0.1490196,0.1803922,0.1960784,0.1529412,0.1921569,0.1882353,0.1490196,0.1803922,0.09411764,0.07843136,0.1058824,0.1960784,0.1529412,0.1921569,0.1215686,0.0980392,0.1254902,0.1607843,0.1294118,0.1529412,0.0980392,0.07843136,0.1019608,0.1607843,0.1294118,0.1529412,0.1215686,0.0980392,0.1254902,0.1921569,0.1529412,0.1843137,0.06274509,0.05490195,0.06666666,0.1921569,0.1529412,0.1843137,0.07058823,0.05882352,0.07843136,0.1607843,0.1294118,0.1529412,0.1921569,0.1529412,0.1843137,0.06274509,0.05490195,0.06666666,0.06666666,0.05882352,0.07450979,0.0980392,0.07843136,0.1019608,0.06274509,0.05490195,0.06666666,0.1215686,0.0980392,0.1254902,0.0980392,0.07843136,0.1019608,0.06666666,0.05882352,0.07450979,0.06666666,0.05882352,0.07450979,0.06274509,0.05490195,0.06666666,0.07058823,0.05882352,0.07843136,0.06274509,0.05490195,0.06666666,0.06274509,0.05490195,0.06666666,0.06666666,0.05882352,0.07450979,0.2039216,0.1607843,0.1921569,0.0980392,0.07843136,0.1019608,0.1607843,0.1294118,0.1529412,0.0980392,0.07843136,0.1019608,0.2039216,0.1607843,0.1921569,0.1333333,0.1058824,0.1372549,0.06274509,0.05490195,0.06666666,0.2039216,0.1607843,0.1921569,0.1607843,0.1294118,0.1529412,0.07450979,0.06274509,0.08235293,0.2039216,0.1607843,0.1921569,0.06274509,0.05490195,0.06666666,0.1333333,0.1058824,0.1372549,0.06274509,0.05490195,0.06666666,0.0980392,0.07843136,0.1019608,0.07058823,0.05882352,0.07843136,0.06274509,0.05490195,0.06666666,0.1333333,0.1058824,0.1372549,0.06274509,0.05490195,0.06666666,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.06666666,0.07058823,0.05882352,0.07843136,0.07450979,0.06274509,0.08235293,0.06274509,0.05490195,0.06666666,0.1333333,0.1058824,0.1372549,0.1294118,0.1019608,0.1333333,0.07058823,0.05882352,0.07843136,0.07058823,0.05882352,0.07843136,0.1294118,0.1019608,0.1333333,0.07450979,0.06274509,0.08235293,0.1294118,0.1019608,0.1333333,0.2039216,0.1607843,0.1921569,0.07450979,0.06274509,0.08235293,0.2039216,0.1607843,0.1921569,0.1294118,0.1019608,0.1333333,0.1333333,0.1058824,0.1372549,0.05882352,0.06274509,0.05882352,0.05098038,0.05490195,0.04705882,0.04705882,0.05098038,0.04313725,0.06274509,0.06666666,0.05882352,0.05882352,0.06274509,0.05882352,0.04705882,0.05098038,0.04313725,0.05490195,0.05882352,0.05098038,0.06274509,0.06666666,0.05882352,0.04705882,0.05098038,0.04313725,0.1215686,0.1215686,0.1019608,0.06274509,0.06666666,0.05882352,0.05490195,0.05882352,0.05098038,0.04705882,0.05098038,0.04313725,0.05098038,0.05490195,0.04705882,0.05882352,0.06274509,0.05490195,0.05490195,0.05882352,0.05098038,0.04705882,0.05098038,0.04313725,0.05882352,0.06274509,0.05490195,0.05098038,0.05490195,0.04705882,0.05882352,0.06274509,0.05882352,0.05882352,0.06274509,0.05490195,0.05882352,0.06274509,0.05490195,0.05882352,0.06274509,0.05882352,0.07058823,0.07450979,0.07058823,0.07058823,0.07450979,0.07058823,0.05882352,0.06274509,0.05882352,0.06274509,0.06666666,0.05882352,0.1215686,0.1215686,0.1019608,0.07058823,0.07450979,0.07058823,0.06274509,0.06666666,0.05882352,0.2627451,0.3058823,0.2666667,0.345098,0.3921568,0.3607843,0.2784314,0.3254902,0.2862745,0.345098,0.3921568,0.3607843,0.2627451,0.3058823,0.2666667,0.4078431,0.4549019,0.4,0.8666667,0.6941177,0.4823529,0.6392157,0.5215687,0.3803921,0.7176471,0.5843138,0.4196078,0.8901961,0.7137255,0.4980392,0.8666667,0.6941177,0.4823529,0.7176471,0.5843138,0.4196078,0.6392157,0.5215687,0.3803921,0.3686274,0.3137255,0.2235294,0.3098039,0.2705882,0.2,0.3686274,0.3137255,0.2235294,0.6392157,0.5215687,0.3803921,0.8666667,0.6941177,0.4823529,0.8666667,0.6941177,0.4823529,0.6352941,0.5176471,0.3686274,0.4980392,0.4117647,0.2980392,0.8901961,0.7137255,0.4980392,0.6352941,0.5176471,0.3686274,0.8666667,0.6941177,0.4823529,0.8666667,0.6941177,0.4823529,0.2352941,0.2117647,0.1490196,0.3686274,0.3137255,0.2235294,0.4980392,0.4117647,0.2980392,0.2352941,0.2117647,0.1490196,0.8666667,0.6941177,0.4823529,0.6352941,0.5176471,0.3686274,0.3647059,0.3098039,0.2392157,0.4980392,0.4117647,0.2980392,0.4588235,0.3843137,0.2901961,0.3647059,0.3098039,0.2392157,0.6352941,0.5176471,0.3686274,0.2509804,0.227451,0.1607843,0.4980392,0.4117647,0.2980392,0.3647059,0.3098039,0.2392157,0.2352941,0.2117647,0.1490196,0.4980392,0.4117647,0.2980392,0.2509804,0.227451,0.1607843,0.7176471,0.5843138,0.4196078,0.6392157,0.5215687,0.3803921,0.3647059,0.3098039,0.2392157,0.4588235,0.3843137,0.2901961,0.7176471,0.5843138,0.4196078,0.3647059,0.3098039,0.2392157,0.3647059,0.3098039,0.2392157,0.3098039,0.2705882,0.2,0.2509804,0.227451,0.1607843,0.6392157,0.5215687,0.3803921,0.3098039,0.2705882,0.2,0.3647059,0.3098039,0.2392157,0.4431372,0.372549,0.2588235,0.3294118,0.2862745,0.2078431,0.5411765,0.4470588,0.3098039,0.3294118,0.2862745,0.2078431,0.2784314,0.2470588,0.1803922,0.3058823,0.2666667,0.1960784,0.2627451,0.2313725,0.1686275,0.2470588,0.2196078,0.1568627,0.227451,0.2039216,0.1411765,0.2470588,0.2196078,0.1568627,0.2431373,0.2196078,0.1529412,0.227451,0.2039216,0.1411765,0.5411765,0.4470588,0.3098039,0.3294118,0.2862745,0.2078431,0.3058823,0.2666667,0.1960784,0.2627451,0.2313725,0.1686275,0.4431372,0.372549,0.2588235,0.5411765,0.4470588,0.3098039,0.2627451,0.2313725,0.1686275,0.4431372,0.372549,0.2588235,0.2627451,0.2313725,0.1686275,0.227451,0.2039216,0.1411765,0.2627451,0.2313725,0.1686275,0.2627451,0.2313725,0.1686275,0.2784314,0.2470588,0.1803922,0.2470588,0.2196078,0.1568627,0.3058823,0.2666667,0.1960784,0.2431373,0.2196078,0.1529412,0.2470588,0.2196078,0.1568627,0.2784314,0.2470588,0.1803922,0.3058823,0.2666667,0.1960784,0.8941177,0.7176471,0.4980392,0.5411765,0.4470588,0.3098039,0.5450981,0.4509804,0.3333333,0.8941177,0.7176471,0.4980392,0.3058823,0.2666667,0.1960784,0.5411765,0.4470588,0.3098039,0.8941177,0.7176471,0.4980392,0.5647059,0.4627451,0.3333333,0.2627451,0.2313725,0.1686275,0.5411765,0.4470588,0.3098039,0.5647059,0.4627451,0.3333333,0.2470588,0.2196078,0.1568627,0.5647059,0.4627451,0.3333333,0.3568627,0.3058823,0.2352941,0.2627451,0.2313725,0.1686275,0.5647059,0.4627451,0.3333333,0.2470588,0.2196078,0.1568627,0.3568627,0.3058823,0.2352941,0.3058823,0.2666667,0.1960784,0.2470588,0.2196078,0.1568627,0.5450981,0.4509804,0.3333333,0.3058823,0.2666667,0.1960784,0.3568627,0.3058823,0.2352941,0.9882353,1,0.8862745,0.3960784,0.4392157,0.4196078,0.6039216,0.6509804,0.5960785,0.627451,0.6666667,0.5960785,0.3960784,0.4392157,0.4196078,0.9882353,1,0.8862745,0.3686274,0.4156863,0.3882353,0.2901961,0.3372549,0.2980392,0.3254902,0.372549,0.3372549,0.8941177,0.9686275,0.3254902,0.9568628,1,0.3490196,0.9176471,0.9882353,0.3372549,0.8,0.8705883,0.3019608,0.7019608,0.7647059,0.2705882,0.8666667,0.9372549,0.3215686,0.6431373,0.7058824,0.2392157,0.3686274,0.427451,0.1568627,0.7764706,0.8470588,0.2862745,0.6666667,0.7333334,0.2470588,0.5960785,0.6588236,0.227451,0.6431373,0.7058824,0.2392157,0.2823529,0.3372549,0.1176471,0.3529412,0.4078431,0.1490196,0.6392157,0.7019608,0.2509804,0.2823529,0.3372549,0.1176471,0.3764706,0.4352941,0.1607843,0.3529412,0.4078431,0.1490196,0.3568627,0.4156863,0.1529412,0.2784314,0.3294118,0.1137255,0.2823529,0.3372549,0.1176471,0.3686274,0.427451,0.1568627,0.2666667,0.317647,0.1098039,0.6666667,0.7333334,0.2470588,0.6666667,0.7333334,0.2470588,0.2705882,0.3215686,0.1137255,0.3686274,0.427451,0.1568627,0.6666667,0.7333334,0.2470588,0.7764706,0.8470588,0.2862745,0.2705882,0.3215686,0.1137255,0.3333333,0.3843137,0.1411765,0.4,0.4588235,0.172549,0.7098039,0.7764706,0.2705882,0.7098039,0.7764706,0.2705882,0.6627451,0.7254902,0.2470588,0.3333333,0.3843137,0.1411765,0.5647059,0.627451,0.227451,0.8,0.8705883,0.3019608,0.7098039,0.7764706,0.2705882,0.8,0.8705883,0.3019608,0.9176471,0.9882353,0.3372549,0.7098039,0.7764706,0.2705882,0.7098039,0.7764706,0.2705882,0.9176471,0.9882353,0.3372549,0.9568628,1,0.3490196,0.9568628,1,0.3490196,0.8941177,0.9647059,0.3254902,0.7098039,0.7764706,0.2705882,0.3294118,0.3843137,0.1372549,0.4392157,0.4980392,0.1803922,0.2823529,0.3372549,0.1176471,0.3294118,0.3843137,0.1372549,0.2823529,0.3372549,0.1176471,0.2588235,0.3137255,0.1058824,0.772549,0.8392157,0.2823529,0.6,0.6588236,0.2235294,0.2509804,0.3019608,0.1019608,0.2862745,0.3372549,0.1176471,0.6,0.6588236,0.2235294,0.772549,0.8392157,0.2823529,0.2509804,0.3019608,0.1019608,0.6,0.6588236,0.2235294,0.2862745,0.3372549,0.1176471,0.2588235,0.3019608,0.2627451,0.4470588,0.4901961,0.427451,0.7960785,0.8392157,0.7176471,0.772549,0.8392157,0.2823529,0.8039216,0.8705883,0.2941176,0.2862745,0.3372549,0.1176471,0.6666667,0.7333334,0.2470588,0.8039216,0.8705883,0.2941176,0.772549,0.8392157,0.2823529,0.2862745,0.3372549,0.1176471,0.8039216,0.8705883,0.2941176,0.6666667,0.7333334,0.2470588,0.3294118,0.3843137,0.1372549,0.3764706,0.4352941,0.1607843,0.2823529,0.3372549,0.1176471,0.3294118,0.3843137,0.1372549,0.4313725,0.4941176,0.1843137,0.7019608,0.7647059,0.2705882,0.2784314,0.3294118,0.1137255,0.3960784,0.4509804,0.1686275,0.8627451,0.9333333,0.3137255,0.8666667,0.9372549,0.3215686,0.9176471,0.9882353,0.3372549,0.8,0.8705883,0.3019608,0.8627451,0.9333333,0.3137255,0.2823529,0.3372549,0.1176471,0.2784314,0.3294118,0.1137255,0.4313725,0.4941176,0.1843137,0.8666667,0.9372549,0.3215686,0.7019608,0.7647059,0.2705882,0.2784314,0.3294118,0.1137255,0.3568627,0.4156863,0.1529412,0.3960784,0.4509804,0.1686275,0.3568627,0.4156863,0.1529412,0.3294118,0.3843137,0.1372549,0.2823529,0.3372549,0.1176471,0.3960784,0.4509804,0.172549,0.3568627,0.4156863,0.1529412,0.8627451,0.9333333,0.3254902,0.8627451,0.9333333,0.3137255,0.3568627,0.4156863,0.1529412,0.2823529,0.3372549,0.1176471,0.3294118,0.3843137,0.1372549,0.3568627,0.4156863,0.1529412,0.4392157,0.4980392,0.1803922,0.4745098,0.5372549,0.2,0.2588235,0.3137255,0.1058824,0.2627451,0.317647,0.1098039,0.4627451,0.5215687,0.1843137,0.2627451,0.317647,0.1098039,0.2588235,0.3137255,0.1058824,0.4745098,0.5372549,0.2,0.2627451,0.317647,0.1098039,0.4627451,0.5215687,0.1843137,0.2823529,0.3372549,0.1176471,0.6431373,0.7058824,0.2392157,0.4627451,0.5215687,0.1843137,0.2823529,0.3372549,0.1176471,0.4627451,0.5215687,0.1843137,0.2588235,0.3137255,0.1058824,0.4627451,0.5215687,0.1843137,0.3294118,0.3843137,0.1372549,0.4745098,0.5372549,0.2,0.5960785,0.6588236,0.227451,0.3294118,0.3843137,0.1372549,0.4627451,0.5215687,0.1843137,0.4627451,0.5215687,0.1843137,0.6431373,0.7058824,0.2392157,0.5960785,0.6588236,0.227451,0.3686274,0.427451,0.1568627,0.2823529,0.3372549,0.1176471,0.2666667,0.317647,0.1098039,0.3686274,0.427451,0.1568627,0.6431373,0.7058824,0.2392157,0.2823529,0.3372549,0.1176471,0.5960785,0.6588236,0.227451,0.4313725,0.4941176,0.1843137,0.3294118,0.3843137,0.1372549,0.3686274,0.427451,0.1568627,0.2705882,0.3215686,0.1137255,0.7764706,0.8470588,0.2862745,0.6431373,0.7058824,0.2392157,0.7764706,0.8470588,0.2862745,0.6666667,0.7333334,0.2470588,0.7686275,0.8352941,0.2823529,0.5960785,0.6588236,0.227451,0.6666667,0.7333334,0.2470588,0.7019608,0.7647059,0.2705882,0.5647059,0.627451,0.227451,0.6392157,0.7019608,0.2509804,0.8,0.8705883,0.3019608,0.5647059,0.627451,0.227451,0.7019608,0.7686275,0.2705882,0.5960785,0.6588236,0.227451,0.7411765,0.8117647,0.2823529,0.8666667,0.9372549,0.3215686,0.8941177,0.9686275,0.3254902,0.7411765,0.8117647,0.2823529,0.5960785,0.6588236,0.227451,0.8666667,0.9372549,0.3215686,0.7411765,0.8117647,0.2823529,0.8941177,0.9686275,0.3254902,0.9176471,0.9882353,0.3372549,0.8666667,0.9372549,0.3215686,0.8941177,0.9686275,0.3254902,0.5960785,0.6588236,0.227451,0.8666667,0.9372549,0.3215686,0.4313725,0.4941176,0.1843137,0.2588235,0.3137255,0.1058824,0.4745098,0.5372549,0.2,0.3294118,0.3843137,0.1372549,0.7019608,0.7647059,0.2705882,0.6392157,0.7019608,0.2509804,0.3764706,0.4352941,0.1607843,0.3294118,0.3843137,0.1372549,0.7019608,0.7686275,0.2705882,0.3764706,0.4352941,0.1607843,0.3411765,0.3960784,0.145098,0.3333333,0.3843137,0.1411765,0.2941176,0.3490196,0.1254902,0.3333333,0.3843137,0.1411765,0.4313725,0.4862745,0.1686275,0.2862745,0.3411765,0.1215686,0.4313725,0.4862745,0.1686275,0.4235294,0.4823529,0.1647059,0.2862745,0.3411765,0.1215686,0.2862745,0.3411765,0.1215686,0.2941176,0.3490196,0.1254902,0.3333333,0.3843137,0.1411765,0.2941176,0.3490196,0.1254902,0.3294118,0.3843137,0.1411765,0.3411765,0.3960784,0.145098,0.7686275,0.8352941,0.2823529,0.8941177,0.9647059,0.3254902,0.9568628,1,0.3490196,0.6392157,0.7019608,0.2509804,0.3529412,0.4078431,0.1490196,0.3764706,0.4352941,0.1607843,0.3215686,0.3764706,0.1333333,0.2392157,0.2901961,0.0980392,0.3411765,0.3960784,0.145098,0.3098039,0.3647059,0.1294118,0.2392157,0.2901961,0.0980392,0.3215686,0.3764706,0.1372549,0.3411765,0.3960784,0.145098,0.2392157,0.2901961,0.0980392,0.3098039,0.3647059,0.1294118,0.3803921,0.4352941,0.1607843,0.4,0.4588235,0.172549,0.3411765,0.3960784,0.145098,0.3372549,0.3921568,0.1411765,0.3803921,0.4352941,0.1607843,0.3411765,0.3960784,0.145098,0.3411765,0.3960784,0.145098,0.3294118,0.3843137,0.1411765,0.3372549,0.3921568,0.1411765,0.6392157,0.7019608,0.2509804,0.5647059,0.627451,0.227451,0.3803921,0.4352941,0.1607843,0.4,0.4588235,0.172549,0.3803921,0.4352941,0.1607843,0.5647059,0.627451,0.227451,0.7098039,0.7764706,0.2705882,0.4,0.4588235,0.172549,0.5647059,0.627451,0.227451,0.3333333,0.3843137,0.1411765,0.3411765,0.3960784,0.145098,0.4,0.4588235,0.172549,0.3372549,0.3921568,0.1411765,0.3411765,0.3960784,0.145098,0.3803921,0.4352941,0.1607843,0.3372549,0.3921568,0.1411765,0.3215686,0.3764706,0.1333333,0.3411765,0.3960784,0.145098,0.3098039,0.3647059,0.1294118,0.2823529,0.3372549,0.1176471,0.3411765,0.3960784,0.145098,0.3411765,0.3960784,0.145098,0.2823529,0.3372549,0.1176471,0.6392157,0.7019608,0.2509804,0.3411765,0.3960784,0.145098,0.6392157,0.7019608,0.2509804,0.3803921,0.4352941,0.1607843,0.2823529,0.3372549,0.1176471,0.6666667,0.7333334,0.2470588,0.2666667,0.317647,0.1098039,0.6627451,0.7294118,0.2431373,0.6431373,0.7098039,0.2392157,0.4313725,0.4901961,0.1686275,0.4313725,0.4901961,0.1686275,0.6431373,0.7098039,0.2392157,0.772549,0.8392157,0.2823529,0.6666667,0.7333334,0.2470588,0.772549,0.8392157,0.2823529,0.6431373,0.7098039,0.2392157,0.4,0.4588235,0.1568627,0.4313725,0.4901961,0.1686275,0.2509804,0.3019608,0.1019608,0.2588235,0.3019608,0.2627451,0.2509804,0.2941176,0.2509804,0.4156863,0.4588235,0.4,0.2862745,0.3372549,0.1215686,0.2431373,0.2941176,0.1019608,0.2509804,0.3019608,0.1058824,0.6627451,0.7294118,0.2431373,0.4313725,0.4901961,0.1686275,0.4,0.4588235,0.1568627,0.8941177,0.9647059,0.3254902,0.6627451,0.7294118,0.2431373,0.6627451,0.7254902,0.2470588,0.7098039,0.7764706,0.2705882,0.8941177,0.9647059,0.3254902,0.6627451,0.7254902,0.2470588,0.6627451,0.7254902,0.2470588,0.4313725,0.4862745,0.1686275,0.3333333,0.3843137,0.1411765,0.6431373,0.7098039,0.2392157,0.7686275,0.8352941,0.2823529,0.6666667,0.7333334,0.2470588,0.8941177,0.9686275,0.3254902,0.7686275,0.8352941,0.2823529,0.9568628,1,0.3490196,0.6627451,0.7294118,0.2431373,0.8941177,0.9647059,0.3254902,0.6431373,0.7098039,0.2392157,0.4,0.4588235,0.1568627,0.4235294,0.4784314,0.1647059,0.4313725,0.4862745,0.1686275,0.4313725,0.4862745,0.1686275,0.6627451,0.7294118,0.2431373,0.4,0.4588235,0.1568627,0.4313725,0.4862745,0.1686275,0.6627451,0.7254902,0.2470588,0.6627451,0.7294118,0.2431373,0.7686275,0.8352941,0.2823529,0.8941177,0.9647059,0.3254902,0.5960785,0.6588236,0.227451,0.8941177,0.9647059,0.3254902,0.7686275,0.8352941,0.2823529,0.6431373,0.7098039,0.2392157,0.3294118,0.3058823,0.2196078,0.3058823,0.2823529,0.2,0.3294118,0.3019608,0.2156863,0.5843138,0.5058824,0.345098,0.2745098,0.254902,0.1764706,0.2666667,0.2509804,0.172549,0.2862745,0.2666667,0.1882353,0.4235294,0.3764706,0.2627451,0.3058823,0.2823529,0.2,0.2745098,0.2588235,0.1764706,0.2431373,0.2352941,0.1568627,0.254902,0.2392157,0.1647059,0.254902,0.2392157,0.1647059,0.2862745,0.2666667,0.1882353,0.2745098,0.2588235,0.1764706,0.2862745,0.2666667,0.1882353,0.3058823,0.2823529,0.2,0.2745098,0.2588235,0.1764706,0.254902,0.2392157,0.1647059,0.2666667,0.2509804,0.172549,0.2862745,0.2666667,0.1882353,0.254902,0.2392157,0.1647059,0.254902,0.2392157,0.1647059,0.2666667,0.2509804,0.172549,0.2745098,0.254902,0.1764706,0.2862745,0.2666667,0.1882353,0.2666667,0.2509804,0.172549,0.8862745,0.9294118,0.8,0.8392157,0.882353,0.7803922,0.4235294,0.4666666,0.4117647,0.2745098,0.254902,0.1764706,0.8862745,0.7529412,0.509804,0.2862745,0.2666667,0.1882353,0.8392157,0.7098039,0.4941176,0.8862745,0.7529412,0.509804,0.5843138,0.5058824,0.345098,0.2666667,0.2509804,0.172549,0.8392157,0.7098039,0.4941176,0.5843138,0.5058824,0.345098,0.2745098,0.254902,0.1764706,0.5843138,0.5058824,0.345098,0.8862745,0.7529412,0.509804,0.8862745,0.7529412,0.509804,0.4235294,0.3764706,0.2627451,0.2862745,0.2666667,0.1882353,0.2431373,0.2352941,0.1568627,0.2666667,0.2509804,0.172549,0.254902,0.2392157,0.1647059,0.3294118,0.3058823,0.2196078,0.3411765,0.3137255,0.227451,0.3254902,0.2980392,0.2156863,0.3058823,0.2862745,0.2,0.3411765,0.3137255,0.227451,0.6,0.5215687,0.3803921,0.6,0.5215687,0.3803921,0.3843137,0.345098,0.2588235,0.2901961,0.2705882,0.1882353,0.3843137,0.345098,0.2588235,0.9686275,0.8156863,0.5568628,0.2745098,0.254902,0.1764706,0.3843137,0.345098,0.2588235,0.6,0.5215687,0.3803921,0.9686275,0.8156863,0.5568628,0.3058823,0.2862745,0.2,0.6,0.5215687,0.3803921,0.2901961,0.2705882,0.1882353,0.3411765,0.3882353,0.3568627,0.9686275,1,0.8745098,0.6,0.6470589,0.5960785,0.2745098,0.254902,0.1764706,0.3058823,0.2862745,0.2,0.2901961,0.2705882,0.1882353,0.2745098,0.254902,0.1764706,0.2627451,0.2470588,0.1686275,0.2666667,0.2509804,0.172549,0.3058823,0.2862745,0.2,0.2745098,0.254902,0.1764706,0.2666667,0.2509804,0.172549,0.2941176,0.2745098,0.1921569,0.3254902,0.2980392,0.2156863,0.3058823,0.2862745,0.2,0.2941176,0.2745098,0.1921569,0.3058823,0.2862745,0.2,0.2666667,0.2509804,0.172549,0.2666667,0.2509804,0.172549,0.2431373,0.2352941,0.1568627,0.2941176,0.2745098,0.1921569,0.3254902,0.2980392,0.2156863,0.3411765,0.3137255,0.227451,0.3058823,0.2862745,0.2,0.2745098,0.254902,0.1764706,0.2901961,0.2705882,0.1882353,0.3843137,0.345098,0.2588235,0.345098,0.3137255,0.227451,0.3254902,0.2980392,0.2156863,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.4235294,0.3764706,0.2627451,0.3803921,0.3411765,0.2392157,0.254902,0.2392157,0.1647059,0.2666667,0.2509804,0.172549,0.254902,0.2392157,0.1647059,0.254902,0.2392157,0.1647059,0.2666667,0.2509804,0.172549,0.2627451,0.2470588,0.1686275,0.3803921,0.3411765,0.2392157,0.3137255,0.2901961,0.2078431,0.3058823,0.2823529,0.2,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.2980392,0.2156863,0.3254902,0.2980392,0.2156863,0.3254902,0.3019608,0.2156863,0.3294118,0.3058823,0.2196078,0.2745098,0.2588235,0.1764706,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.3254902,0.2980392,0.2156863,0.2941176,0.2745098,0.1921569,0.3137255,0.2901961,0.2078431,0.3098039,0.2862745,0.2039216,0.3098039,0.2862745,0.2039216,0.3098039,0.2862745,0.2039216,0.3098039,0.2862745,0.2039216,0.3098039,0.2862745,0.2039216,0.3137255,0.2901961,0.2078431,0.3137255,0.2901961,0.2039216,0.3098039,0.2862745,0.2039216,0.3803921,0.3411765,0.2392157,0.3137255,0.2901961,0.2039216,0.3137255,0.2901961,0.2078431,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.3294118,0.3019608,0.2156863,0.3058823,0.2823529,0.2,0.3294118,0.3058823,0.2196078,0.345098,0.3137255,0.227451,0.3098039,0.2862745,0.2039216,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3294118,0.3058823,0.2196078,0.3098039,0.2862745,0.2039216,0.3254902,0.3019608,0.2156863,0.3098039,0.2862745,0.2039216,0.3294118,0.3058823,0.2196078,0.3098039,0.2862745,0.2039216,0.3137255,0.2901961,0.2078431,0.3098039,0.2862745,0.2039216,0.3058823,0.2823529,0.2,0.3058823,0.2823529,0.2,0.3098039,0.2862745,0.2039216,0.3294118,0.3019608,0.2156863,0.3294118,0.3058823,0.2196078,0.3294118,0.3019608,0.2156863,0.3098039,0.2862745,0.2039216,0.3254902,0.3019608,0.2156863,0.3254902,0.2980392,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.3019608,0.2156863,0.3254902,0.2980392,0.2156863,0.345098,0.3137255,0.227451,0.345098,0.3137255,0.227451,0.3294118,0.3058823,0.2196078,0.3254902,0.3019608,0.2156863,0.2745098,0.2588235,0.1764706,0.3058823,0.2823529,0.2,0.2431373,0.2352941,0.1568627,0.2941176,0.2745098,0.1921569,0.2431373,0.2352941,0.1568627,0.3058823,0.2823529,0.2,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3254902,0.372549,0.3372549,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3098039,0.3568627,0.3215686,0.3411765,0.3843137,0.3529412,0.3372549,0.3843137,0.3529412,0.317647,0.3607843,0.3294118,0.317647,0.3607843,0.3294118,0.3411765,0.3843137,0.3529412,0.317647,0.3607843,0.3294118,0.4509804,0.4980392,0.4666666,0.7607843,0.8039216,0.6901961,0.7607843,0.8039216,0.6862745,0.7607843,0.8039216,0.6901961,0.4509804,0.4980392,0.4666666,0.4549019,0.5019608,0.4705882,0.4549019,0.5019608,0.4705882,0.3411765,0.3843137,0.3529412,0.317647,0.3607843,0.3294118,0.7607843,0.8039216,0.6901961,0.4549019,0.5019608,0.4705882,0.317647,0.3607843,0.3294118,0.317647,0.3607843,0.3294118,0.7607843,0.8039216,0.6862745,0.7607843,0.8039216,0.6901961,0.317647,0.3607843,0.3294118,0.7607843,0.8039216,0.6862745,0.317647,0.3607843,0.3294118,0.3372549,0.3843137,0.3529412,0.3411765,0.3843137,0.3529412,0.4549019,0.5019608,0.4705882,0.4509804,0.4980392,0.4666666,0.3372549,0.3843137,0.3529412,0.4549019,0.5019608,0.4705882,0.7607843,0.8039216,0.6901961,0.3411765,0.3843137,0.3529412,0.4549019,0.5019608,0.4705882,0.3411765,0.3843137,0.3529412,0.7607843,0.8039216,0.6901961,0.317647,0.3607843,0.3294118,0.05098038,0.01568627,0.007843136,0.05098038,0.01568627,0.007843136,0.05490195,0.01960784,0.007843136,0.05882352,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.05490195,0.01960784,0.007843136,0.06666666,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.05882352,0.01960784,0.007843136,0.06274509,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.06666666,0.01960784,0.007843136,0.3607843,0.07058823,0.1098039,0.509804,0.0980392,0.145098,0.3490196,0.07058823,0.1058824,0.509804,0.0980392,0.145098,0.509804,0.0980392,0.145098,0.3607843,0.07058823,0.1098039,0.06274509,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.06274509,0.01960784,0.007843136,0.1294118,0.03921568,0.01568627,0.06274509,0.01960784,0.007843136,0.06274509,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.05098038,0.01568627,0.007843136,0.06274509,0.01960784,0.007843136,0.06274509,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.06274509,0.01960784,0.007843136,0.1882353,0.03921568,0.05882352,0.1764706,0.03921568,0.05490195,0.1764706,0.03921568,0.05490195,0.3490196,0.07058823,0.1058824,0.2039216,0.04313725,0.06274509,0.3607843,0.07058823,0.1098039,0.2117647,0.04313725,0.06666666,0.2039216,0.04313725,0.06274509,0.3490196,0.07058823,0.1058824,0.2039216,0.04313725,0.06274509,0.2117647,0.04313725,0.06666666,0.2,0.04313725,0.06274509,0.05490195,0.01960784,0.007843136,0.07450979,0.02352941,0.007843136,0.05882352,0.01960784,0.007843136,0.06666666,0.01960784,0.007843136,0.07450979,0.02352941,0.007843136,0.05490195,0.01960784,0.007843136,0.07450979,0.02352941,0.007843136,0.06666666,0.01960784,0.007843136,0.05882352,0.01960784,0.007843136,0.1137255,0.03137254,0.0117647,0.06666666,0.01960784,0.007843136,0.07450979,0.02352941,0.007843136,0.06666666,0.01960784,0.007843136,0.1294118,0.03921568,0.01568627,0.06274509,0.01960784,0.007843136,0.1137255,0.03137254,0.0117647,0.1294118,0.03921568,0.01568627,0.06666666,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.06666666,0.01960784,0.007843136,0.05490195,0.01960784,0.007843136,0.06274509,0.01960784,0.007843136,0.06666666,0.01960784,0.007843136,0.05098038,0.01568627,0.007843136,0.4078431,0.1098039,0.1294118,0.3529412,0.09411764,0.1137255,0.4,0.1058824,0.1294118,0.1960784,0.03137254,0.08235293,0.1215686,0.01960784,0.05490195,0.1176471,0.01960784,0.05490195,0.2,0.03137254,0.08235293,0.1960784,0.03137254,0.08235293,0.1176471,0.01960784,0.05490195,0.145098,0.02352941,0.06274509,0.2,0.03137254,0.08235293,0.1176471,0.01960784,0.05490195,0.07843136,0.0117647,0.03921568,0.145098,0.02352941,0.06274509,0.1176471,0.01960784,0.05490195,0.07450979,0.0117647,0.03921568,0.145098,0.02352941,0.06274509,0.07843136,0.0117647,0.03921568,0.07843136,0.0117647,0.03921568,0.1215686,0.01960784,0.05490195,0.07843136,0.01568627,0.03921568,0.1176471,0.01960784,0.05490195,0.1215686,0.01960784,0.05490195,0.07843136,0.0117647,0.03921568,0.1215686,0.01960784,0.05490195,0.07843136,0.01568627,0.03921568,0.07843136,0.01568627,0.03921568,0.1568627,0.1529412,0.1372549,0.1098039,0.1098039,0.1019608,0.1058824,0.1058824,0.0980392,0.1058824,0.1058824,0.0980392,0.1098039,0.1098039,0.1019608,0.07843136,0.07843136,0.07843136,0.1098039,0.1098039,0.1019608,0.1568627,0.1529412,0.1372549,0.1764706,0.172549,0.1490196,0.1411765,0.1372549,0.1215686,0.1098039,0.1098039,0.1019608,0.1764706,0.172549,0.1490196,0.1764706,0.172549,0.1490196,0.1568627,0.1529412,0.1372549,0.1607843,0.1568627,0.1372549,0.1568627,0.1529412,0.1372549,0.1058824,0.1058824,0.0980392,0.1607843,0.1568627,0.1372549,0.1098039,0.1098039,0.1019608,0.07058823,0.07058823,0.06666666,0.07843136,0.07843136,0.07843136,0.07058823,0.07058823,0.06666666,0.1098039,0.1098039,0.1019608,0.1411765,0.1372549,0.1215686,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1490196,0.03529411,0.06274509,0.1490196,0.03529411,0.06274509,0.1490196,0.03529411,0.06274509,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.1647059,0.03921568,0.07058823,0.1647059,0.03921568,0.07058823,0.1647059,0.03921568,0.07058823,0.1254902,0.03137254,0.05490195,0.1254902,0.03137254,0.05490195,0.1254902,0.03137254,0.05490195,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1490196,0.03529411,0.06274509,0.1490196,0.03529411,0.06274509,0.1490196,0.03529411,0.06274509,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.1647059,0.03921568,0.07058823,0.1647059,0.03921568,0.07058823,0.1647059,0.03921568,0.07058823,0.1254902,0.03137254,0.05490195,0.1254902,0.03137254,0.05490195,0.1254902,0.03137254,0.05490195,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.3215686,0.07058823,0.1254902,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.0862745,0.01960784,0.03529411,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.2313725,0.05098038,0.09019607,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352,0.1294118,0.03137254,0.05882352],"vertexColorIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,1485,1486,1487,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1524,1525,1526,1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,1557,1558,1559,1560,1561,1562,1563,1564,1565,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709],"armatureName":"Armature","jointParents":{"root hips":null,"spine":"root hips","head neck lower":"spine","head neck upper":"head neck lower","arm left shouler":"spine","arm left elbow":"arm left shouler","arm left wrist":"arm left elbow","arm right shoulder":"spine","arm right elbow":"arm right shoulder","arm right wrist":"arm right elbow","pelvis":"root hips","leg left thigh":"pelvis","leg left knee":"leg left thigh","leg left ankle":"leg left knee","leg right thigh":"pelvis","leg right knee":"leg right thigh","leg right ankle":"leg right knee","board":null},"vertexUVIndices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,1133,1134,1135,1136,1137,1138,1139,1140,1141,1142,1143,1144,1145,1146,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191,1192,1193,1194,1195,1196,1197,1198,1199,1200,1201,1202,1203,1204,1205,1206,1207,1208,1209,1210,1211,1212,1213,1214,1215,1216,1217,1218,1219,1220,1221,1222,1223,1224,1225,1226,1227,1228,1229,1230,1231,1232,1233,1234,1235,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1270,1271,1272,1273,1274,1275,1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,1298,1299,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320,1321,1322,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,1340,1341,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1361,1362,1363,1364,1365,1366,1367,1368,1369,1370,1371,1372,1373,1374,1375,1376,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1419,1420,1421,1422,1423,1424,1425,1426,1427,1428,1429,1430,1431,1432,1433,1434,1435,1436,1437,1438,1439,1440,1441,1442,1443,1444,1445,1446,1447,1448,1449,1450,1451,1452,1453,1454,1455,1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,1466,1467,1468,1469,1470,1471,1472,1473,1474,1475,1476,1477,1478,1479,1480,1481,1482,1483,1484,1485,1486,1487,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1524,1525,1526,1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,1557,1558,1559,1560,1561,1562,1563,1564,1565,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709],"vertexUVs":[0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0.4809282,0.990294,0.04342818,0.771544,0.4809282,0.05279397,0.9809282,0.771544,0.4809282,0.990294,0.4809282,0.05279397,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0.96875,1.09375,0.8125,1.96875,0.8125,1.09375,0.8125,1.96875,0.03125,1.0625,0.8125,1.09375,0.03125,1.9375,0.03125,1.0625,0.8125,1.96875,1.96875,1.09375,1.84375,1.09375,1.84375,1.96875,1.03125,1.0625,1.84375,1.96875,1.84375,1.09375,1,1.9375,1.84375,1.96875,1.03125,1.0625,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {"actions":{"brake":{"0.0":[[-0.9970340132713318,-0.07228203117847443,-0.02643417753279209,-0.2933923900127411,0.07580631226301193,-0.8629483580589294,-0.49957340955734253,-1.7975775003433228,0.013298852369189262,-0.500095546245575,0.865868091583252,1.9995390176773071,0,0,0,1],[-0.9919439554214478,0.042426079511642456,-0.11936284601688385,-0.3006790280342102,-0.12667587399482727,-0.33835121989250183,0.9324547052383423,-1.8866405487060547,-0.0008261948823928833,0.9400629997253418,0.3409997820854187,1.9609284400939941,0,0,0,1],[-0.6550365090370178,-0.005646072328090668,-0.7555763721466064,-0.2519553005695343,-0.7090575695037842,-0.3409302830696106,0.6172552108764648,-2.2920618057250977,-0.2610839009284973,0.940071702003479,0.21931831538677216,3.0564544200897217,0,0,0,1],[-0.6804567575454712,-0.1715405285358429,-0.7124274373054504,-0.2532011866569519,-0.6847760081291199,-0.19727055728435516,0.7015455961227417,-2.367292881011963,-0.26088446378707886,0.9652243256568909,0.016767218708992004,3.2638943195343018,0,0,0,1],[-0.39216604828834534,-0.2589641809463501,-0.8826913237571716,-1.219081163406372,0.28246453404426575,0.8793006539344788,-0.38346385955810547,-2.305617570877075,0.8754543662071228,-0.399710088968277,-0.27168363332748413,2.796046257019043,0,0,0,1],[-0.5233433246612549,0.00672188401222229,-0.8520957827568054,-1.405375599861145,0.16008779406547546,0.9829391837120056,-0.09056912362575531,-1.6730637550354004,0.8369494676589966,-0.18380850553512573,-0.5154905915260315,2.5085015296936035,0,0,0,1],[-0.5202443599700928,0.06578361988067627,-0.8514805436134338,-1.39889657497406,0.20799650251865387,0.9767666459083557,-0.051620252430438995,-0.7256549596786499,0.8283019661903381,-0.20395970344543457,-0.5218399167060852,2.3313372135162354,0,0,0,1],[0.43787682056427,-0.1263166069984436,0.8901169300079346,0.6946555972099304,-0.34091484546661377,0.8928060531616211,0.2944047152996063,-2.057413101196289,-0.8318896889686584,-0.4323672354221344,0.3478753864765167,2.7955408096313477,0,0,0,1],[0.34293538331985474,-0.2167898267507553,0.9140008687973022,0.6102842092514038,-0.4425315260887146,0.8209832310676575,0.3607657849788666,-1.461075782775879,-0.8285893797874451,-0.5281936526298523,0.1856074333190918,2.506747245788574,0,0,0,1],[0.358073890209198,-0.22857360541820526,0.9052829742431641,0.3998987674713135,-0.4922504127025604,0.7776663303375244,0.39105528593063354,-0.6643459796905518,-0.7933924794197083,-0.585652768611908,0.1659460961818695,1.9941574335098267,0,0,0,1],[-0.993270993232727,0.09881286323070526,0.06040878966450691,-0.3006981909275055,0.04886931553483009,0.8304759860038757,-0.5549067258834839,-1.8827288150787354,-0.10499997437000275,-0.5482204556465149,-0.8297165036201477,1.9371896982192993,0,0,0,1],[-0.7762956023216248,-0.5786178112030029,-0.25013405084609985,-0.6947928667068481,-0.5793973207473755,0.8112598657608032,-0.07846111059188843,-1.5450732707977295,0.24832262098789215,0.08401799201965332,-0.9650269150733948,1.7909319400787354,0,0,0,1],[-0.948826789855957,-0.3104060888290405,-0.05810592323541641,-1.2829630374908447,0.04342106729745865,0.05401693284511566,-0.9975955486297607,-0.6913563013076782,0.3127983510494232,-0.9490681290626526,-0.03777457773685455,1.8672983646392822,0,0,0,1],[-0.9454973936080933,-0.07727320492267609,-0.31632915139198303,-1.7788090705871582,-0.22390206158161163,0.8596290349960327,0.4592447280883789,-0.6050690412521362,0.2364383041858673,0.5050413608551025,-0.8300783038139343,0.35124659538269043,0,0,0,1],[-0.8903399705886841,0.4521283805370331,0.05361904203891754,0.1768188327550888,0.45226311683654785,0.891825258731842,-0.010286778211593628,-1.5192583799362183,-0.05246976017951965,0.01509121060371399,-0.9985085129737854,1.6206142902374268,0,0,0,1],[-0.974477231502533,0.21813860535621643,0.05301183834671974,0.6410109400749207,-0.04166586697101593,0.056290674954652786,-0.9975448250770569,-0.6390207409858704,-0.2205871194601059,-0.9742932319641113,-0.045765046030282974,1.6450035572052002,0,0,0,1],[-0.9785124063491821,0.020555272698402405,0.20516206324100494,0.9894683361053467,0.13353294134140015,0.8213402628898621,0.554589569568634,-0.5491013526916504,-0.1571081578731537,0.5700684785842896,-0.8064361810684204,0.08865582942962646,0,0,0,1],[-0.02725246362388134,0.9996183514595032,0.0044915517792105675,-4.250483512878418,-0.8060687780380249,-0.019317766651511192,-0.59150630235672,0.0703778862953186,-0.5911939740180969,-0.019740508869290352,0.8062878251075745,0.3252904415130615,0,0,0,1]]},"left":{"0.0":[[-0.46769243478775024,-0.8022890686988831,-0.37093910574913025,-1.2916516065597534,0.8834933042526245,-0.4369123578071594,-0.16895803809165955,-0.7550982236862183,-0.026514768600463867,-0.4067426025867462,0.9131578803062439,2.260287046432495,0,0,0,1],[-0.626579999923706,-0.6957930326461792,0.3510974049568176,-1.3734016418457031,0.4815380573272705,0.008585356175899506,0.8763829469680786,-0.7992458343505859,-0.6127956509590149,0.7181909680366516,0.32967135310173035,2.2312352657318115,0,0,0,1],[-0.6763001680374146,-0.7238985300064087,-0.13634106516838074,-2.1917946338653564,-0.2329813838005066,0.034618549048900604,0.9718647003173828,-0.797195315361023,-0.6988116502761841,0.6890373229980469,-0.1920676827430725,3.066188097000122,0,0,0,1],[-0.7600587606430054,-0.6308332085609436,-0.1560765951871872,-2.3515329360961914,-0.4204532206058502,0.29423248767852783,0.8582808971405029,-0.7895562648773193,-0.49550941586494446,0.7179667949676514,-0.48887014389038086,3.218233823776245,0,0,0,1],[-0.5614073872566223,-0.2681126296520233,-0.7829031348228455,-2.593501567840576,0.8128193616867065,-0.35630157589912415,-0.4608408510684967,-0.3244543969631195,-0.1553923487663269,-0.8950783610343933,0.4179575443267822,2.2797555923461914,0,0,0,1],[-0.6649286150932312,0.028584927320480347,-0.7463597059249878,-2.786377191543579,0.7317361235618591,0.2253098338842392,-0.6432713866233826,-0.5807716846466064,0.14977440237998962,-0.9738680720329285,-0.17073166370391846,1.6358516216278076,0,0,0,1],[-0.6608630418777466,0.09034400433301926,-0.745048999786377,-2.7588253021240234,0.7434608340263367,0.21451666951179504,-0.633442223072052,-0.36360615491867065,0.10259780287742615,-0.9725333452224731,-0.20893347263336182,0.6971859931945801,0,0,0,1],[-0.06576278805732727,0.875764012336731,0.47823861241340637,-1.381085753440857,-0.8393417596817017,0.21063369512557983,-0.5011369585990906,-1.2512483596801758,-0.5396103858947754,-0.43436199426651,0.7212138175964355,3.4608964920043945,0,0,0,1],[0.017013907432556152,0.7024809122085571,0.7114987969398499,-0.796131432056427,-0.6075059175491333,0.5724509358406067,-0.5506685376167297,-1.1105585098266602,-0.7941320538520813,-0.42287108302116394,0.43650132417678833,3.1707704067230225,0,0,0,1],[-0.02532811276614666,0.6753109693527222,0.7370977401733398,-0.1144031286239624,-0.6435361504554749,0.5532245635986328,-0.5289642214775085,-0.5550188422203064,-0.7649955153465271,-0.4877471327781677,0.42057523131370544,2.7603917121887207,0,0,0,1],[-0.5163363218307495,0.8118541836738586,-0.2725607752799988,-1.3718698024749756,0.6758548021316528,0.19083788990974426,-0.71189945936203,-0.799155592918396,-0.5259438753128052,-0.551791250705719,-0.6472322940826416,2.2072253227233887,0,0,0,1],[-0.8347371816635132,0.4390854835510254,-0.3322913348674774,-1.2340691089630127,0.42115598917007446,0.8978485465049744,0.12843462824821472,-0.30926012992858887,0.3547411262989044,-0.03273731470108032,-0.9343913793563843,2.037153720855713,0,0,0,1],[-0.4081578254699707,-0.2114449441432953,-0.8880866765975952,-0.7555082440376282,0.8398662209510803,0.294319748878479,-0.4560706317424774,0.620333731174469,0.35781538486480713,-0.9320231676101685,0.057456523180007935,2.016484498977661,0,0,0,1],[-0.6907673478126526,0.7113114595413208,0.12990835309028625,-1.0932726860046387,0.6683297753334045,0.5595008730888367,0.49019768834114075,1.09048330783844,0.2759995460510254,0.425434410572052,-0.8618757724761963,0.5276604890823364,0,0,0,1],[0.05096498131752014,0.9977611303329468,-0.04330138862133026,-0.8242657780647278,0.9567426443099976,-0.06121327728033066,-0.28442224860191345,-1.1279370784759521,-0.2864362895488739,-0.02693270891904831,-0.9577207565307617,1.9114489555358887,0,0,0,1],[-0.4509833753108978,0.13610327243804932,-0.8820939660072327,0.15987826883792877,0.8141630291938782,-0.3422326445579529,-0.4690577983856201,-1.2058393955230713,-0.3657218813896179,-0.9297058582305908,0.04353104531764984,1.8713746070861816,0,0,0,1],[-0.27961963415145874,0.7806605100631714,0.5589112639427185,0.3772912919521332,0.9246143102645874,0.37577682733535767,-0.06228861212730408,-1.752526044845581,-0.25865238904953003,0.4993603527545929,-0.8268848061561584,0.3862513303756714,0,0,0,1],[-0.6923590898513794,0.476838618516922,-0.5415381789207458,-1.6475553512573242,-0.37695935368537903,-0.8789884448051453,-0.2920285761356354,3.207820415496826,-0.6152564883232117,0.0019492633873596787,0.7883245944976807,0.4238851070404053,0,0,0,1]]},"neutral":{"0.0":[[-0.000006562707312696148,-0.9204720854759216,0.3908088207244873,0.19904693961143494,0.9996930360794067,0.009677618741989136,0.02281048893928528,-0.4749291241168976,-0.02477848529815674,0.3906888961791992,0.9201891422271729,3.0754141807556152,0,0,0,1],[-0.6529766917228699,-0.018016591668128967,0.7571640014648438,0.11444257199764252,0.7156388163566589,0.3126196265220642,0.6246041059494019,-0.47373664379119873,-0.24795743823051453,0.9497075080871582,-0.1912398785352707,3.123547077178955,0,0,0,1],[-0.9912880659103394,-0.046820130199193954,0.12311065196990967,0.08421191573143005,0.09927335381507874,0.3487001061439514,0.9319621324539185,-0.11315363645553589,-0.08656327426433563,0.9360643029212952,-0.3410140872001648,4.235295295715332,0,0,0,1],[-0.9860882759094238,-0.018885405734181404,0.16514714062213898,0.0738803967833519,0.1283498853445053,0.5448169708251953,0.82867431640625,-0.03620807081460953,-0.10562480986118317,0.8383423686027527,-0.5348135232925415,4.4418511390686035,0,0,0,1],[0.2788344621658325,-0.4034951329231262,-0.8714606761932373,-0.5278058052062988,0.9148361682891846,0.3876246511936188,0.11323864758014679,0.49558764696121216,0.29210835695266724,-0.8288179636001587,0.47721460461616516,3.7271642684936523,0,0,0,1],[0.14672526717185974,-0.055745527148246765,-0.9876055717468262,-0.8180732727050781,0.8964698314666748,0.42950496077537537,0.1089419350028038,0.7744381427764893,0.41810834407806396,-0.9013423323631287,0.11299324035644531,3.1309268474578857,0,0,0,1],[0.14632652699947357,-0.023899365216493607,-0.9889479875564575,-0.8718037009239197,0.9160460829734802,0.3806556165218353,0.1263406127691269,1.188417673110962,0.3734290599822998,-0.9244080185890198,0.07759280502796173,2.2621653079986572,0,0,0,1],[-0.585405170917511,0.7891221046447754,0.1859743297100067,0.7344900965690613,-0.7457026243209839,-0.4340667724609375,-0.5054836273193359,-0.8846712112426758,-0.31816279888153076,-0.43459445238113403,0.8425554037094116,4.202020645141602,0,0,0,1],[-0.6640624403953552,0.7173157930374146,0.2108987420797348,1.2615731954574585,-0.6464337110519409,-0.40909343957901,-0.6440232992172241,-1.1746000051498413,-0.3756905496120453,-0.5640039443969727,0.735360860824585,3.9117393493652344,0,0,0,1],[-0.7072104215621948,0.665930449962616,0.23746396601200104,1.957698106765747,-0.6210803389549255,-0.424692839384079,-0.6587072014808655,-1.571608066558838,-0.3378036618232727,-0.6133291125297546,0.7139436602592468,3.3643970489501953,0,0,0,1],[-0.4638866186141968,0.14249327778816223,-0.8743600845336914,0.09782453626394272,0.8463141322135925,-0.22043997049331665,-0.4849317967891693,-0.4741678833961487,-0.26184335350990295,-0.9649361968040466,-0.01833502948284149,3.1061551570892334,0,0,0,1],[0.22687344253063202,0.17967525124549866,-0.957207441329956,0.23116743564605713,0.7541614770889282,0.5894821286201477,0.2893986701965332,-0.11107714474201202,0.6162541508674622,-0.787545382976532,-0.0017664991319179535,2.7071406841278076,0,0,0,1],[0.2307741492986679,-0.5175269842147827,-0.82396000623703,0.41407620906829834,0.9336193799972534,0.3562767505645752,0.037711068987846375,0.48901355266571045,0.27404117584228516,-0.7779673933982849,0.5653920769691467,1.9054222106933594,0,0,0,1],[-0.029594600200653076,0.9922229647636414,-0.12090721726417542,-0.41262704133987427,0.9279983639717102,0.07221922278404236,0.36551839113235474,1.058133840560913,0.37140730023384094,-0.10138401389122009,-0.9229179620742798,0.6626886129379272,0,0,0,1],[-0.13884037733078003,0.17282389104366302,-0.9751184582710266,0.08478102087974548,0.828371524810791,-0.519331693649292,-0.20998921990394592,-1.0233643054962158,-0.5427007675170898,-0.8369148969650269,-0.07105826586484909,2.690525770187378,0,0,0,1],[-0.1864294409751892,-0.5223381519317627,-0.8321104049682617,0.26071518659591675,0.9291732311248779,-0.36890411376953125,0.023395270109176636,-1.5520422458648682,-0.31918907165527344,-0.7688126564025879,0.5541167855262756,1.8385491371154785,0,0,0,1],[-0.00755542516708374,0.9997495412826538,-0.02108442783355713,-0.5736740231513977,0.9283736348152161,-0.0008220076560974121,-0.3716477155685425,-2.141334295272827,-0.3715716302394867,-0.022382140159606934,-0.9281343221664429,0.6104385852813721,0,0,0,1],[-0.9997235536575317,0.00010728536290116608,0.023513900116086006,0.0315861701965332,-0.00017150817438960075,-0.9999963641166687,-0.0027213951107114553,3.2083985805511475,0.023513521999120712,-0.002724672434851527,0.9997198581695557,0.27819013595581055,0,0,0,1]]},"right":{"0.0":[[0.6470701694488525,-0.5754731893539429,0.5001307725906372,1.8879835605621338,0.7593386173248291,0.5454344749450684,-0.35483211278915405,-2.0865001678466797,-0.06859225034713745,0.6093699932098389,0.7899134755134583,2.268590211868286,0,0,0,1],[-0.3143215477466583,0.549628496170044,0.7740224599838257,1.837968349456787,0.9380592107772827,0.05463351309299469,0.3421400189399719,-2.0377542972564697,0.1457623988389969,0.8336207866668701,-0.5327566862106323,2.3364017009735107,0,0,0,1],[-0.6247172355651855,0.6366314888000488,0.45213812589645386,2.471919536590576,0.6650233268737793,0.13031883537769318,0.7353644371032715,-1.9754092693328857,0.4092341363430023,0.7600772380828857,-0.5047870874404907,3.316777229309082,0,0,0,1],[-0.8743836879730225,0.4809519648551941,-0.06433072686195374,2.612401247024536,0.13251280784606934,0.36421409249305725,0.9218395948410034,-1.9466526508331299,0.4667908549308777,0.797516942024231,-0.38219499588012695,3.484498977661133,0,0,0,1],[0.8137420415878296,-0.5704102516174316,-0.11161059141159058,2.0260283946990967,0.5801794528961182,0.8086820840835571,0.09708429872989655,-1.0842597484588623,0.03487949073314667,-0.14375557005405426,0.9889984130859375,3.2149839401245117,0,0,0,1],[0.8139392733573914,-0.4039207398891449,-0.4175543785095215,1.615684986114502,0.5401244163513184,0.7908226847648621,0.2878634035587311,-0.5025076866149902,0.21393732726573944,-0.45983433723449707,0.8618488311767578,3.1115686893463135,0,0,0,1],[0.7943523526191711,-0.42637380957603455,-0.4326784014701843,1.2263647317886353,0.5772702097892761,0.7515935897827148,0.3191652297973633,0.2597290277481079,0.1891145259141922,-0.5033015608787537,0.8431627750396729,2.668355941772461,0,0,0,1],[-0.876438558101654,0.4556029140949249,-0.15582174062728882,2.6329967975616455,-0.07138869911432266,-0.44298055768013,-0.8936841487884521,-2.8936963081359863,-0.47619134187698364,-0.7721357345581055,0.42077046632766724,2.9294652938842773,0,0,0,1],[-0.8868278861045837,0.41490310430526733,-0.2034466564655304,2.9373104572296143,0.06604477763175964,-0.32194337248802185,-0.944452166557312,-3.1895790100097656,-0.45735469460487366,-0.8510036468505859,0.25810641050338745,2.4137279987335205,0,0,0,1],[-0.9115864038467407,0.3657025098800659,-0.1878049373626709,3.339956521987915,0.08380022644996643,-0.281940221786499,-0.955764889717102,-3.50201153755188,-0.4024755656719208,-0.8870010375976562,0.22636713087558746,1.587864637374878,0,0,0,1],[0.5901997089385986,-0.42595720291137695,-0.6857293844223022,1.8218212127685547,0.7932220697402954,0.1482996940612793,0.5905978083610535,-2.025132894515991,-0.1498759388923645,-0.89250648021698,0.4254050850868225,2.3238003253936768,0,0,0,1],[0.8831771612167358,-0.3834053874015808,-0.270182728767395,1.8724992275238037,0.46506309509277344,0.640961766242981,0.6106425523757935,-1.595052719116211,-0.06094682961702347,-0.6649575233459473,0.7443903684616089,1.8729418516159058,0,0,0,1],[0.6598893404006958,-0.7316623330116272,0.17092876136302948,1.482193946838379,0.7011410593986511,0.6814109086990356,0.20995309948921204,-0.9425559043884277,-0.27008742094039917,-0.01870065927505493,0.9626542329788208,1.1960175037384033,0,0,0,1],[0.13729900121688843,0.896484911441803,-0.42126479744911194,0.31342852115631104,0.6999310255050659,0.21312537789344788,0.6816699504852295,0.14593732357025146,0.7008890509605408,-0.3884488046169281,-0.5982155799865723,1.166144847869873,0,0,0,1],[0.15201331675052643,-0.750443696975708,-0.643215537071228,1.4115303754806519,0.9265643358230591,-0.11833256483078003,0.3570377230644226,-2.3300116062164307,-0.3440501093864441,-0.6502550840377808,0.6773462295532227,2.0211634635925293,0,0,0,1],[0.4044948220252991,-0.9100221395492554,-0.09079515933990479,0.6475811004638672,0.856107234954834,0.3418615460395813,0.38757088780403137,-2.4504737854003906,-0.32165876030921936,-0.23450079560279846,0.9173576831817627,1.359205961227417,0,0,0,1],[0.6995072364807129,0.33234813809394836,-0.6326408982276917,-0.8060991764068604,0.4292403757572174,-0.9031903147697449,0.00013169646263122559,-1.9043800830841064,-0.5713512301445007,-0.27164706587791443,-0.7744452953338623,0.9846116304397583,0,0,0,1],[-0.8725935816764832,-0.4216948449611664,0.24648290872573853,1.5370665788650513,0.4093787670135498,-0.9066583514213562,-0.10188016295433044,2.500969171524048,0.26643818616867065,0.012004928663372993,0.9637772440910339,0.5820105075836182,0,0,0,1]]}},"inverseBindPoses":[[1,0.000006192593446030514,0.0000016506993461007369,0.3401612341403961,-0.000006200147254276089,0.8696072697639465,0.49374428391456604,-0.6332163214683533,0.0000016220974430325441,-0.49374428391456604,0.8696072101593018,-2.092196226119995,0,0,0,1],[0.9999974966049194,-0.001690975041128695,-0.0014704522909596562,0.34269827604293823,0.0016909493133425713,0.1388140171766281,0.9903170466423035,-2.1117289066314697,-0.0014704818604514003,-0.9903171062469482,0.13881650567054749,-0.7043722867965698,0,0,0,1],[0.9999998807907104,-1.0349356216465821e-7,-5.275655912129196e-9,0.33604949712753296,5.434556360484066e-9,0.00006459653377532959,0.9999998807907104,-3.345902919769287,-1.0360928826003146e-7,-1.0000001192092896,0.00006462633609771729,-0.23158760368824005,0,0,0,1],[0.9993820190429688,-0.03423922881484032,-0.00794508308172226,0.3562571704387665,0.0002368949499214068,-0.21947410702705383,0.9756183624267578,-3.530320644378662,-0.03514815866947174,-0.9750175476074219,-0.2193303108215332,0.544870913028717,0,0,0,1],[0.6821043491363525,-0.5816630721092224,0.44317150115966797,-1.9520394802093506,0.5816627144813538,0.06428665667772293,-0.810885488986969,2.1427414417266846,0.4431723356246948,0.8108852505683899,0.382182240486145,-1.2175318002700806,0,0,0,1],[0.778720498085022,-0.46604621410369873,0.4199937582015991,-1.9675297737121582,0.46604636311531067,-0.01843882165849209,-0.88456791639328,1.7072092294692993,0.41999396681785583,0.8845680356025696,0.20284079015254974,-0.7301048040390015,0,0,0,1],[0.7994319796562195,-0.468620628118515,0.37590253353118896,-1.9271445274353027,0.41061797738075256,-0.030510440468788147,-0.9112967252731323,0.8665889501571655,0.4385215938091278,0.8828722834587097,0.16803334653377533,-0.7013854384422302,0,0,0,1],[0.7825813293457031,0.4821545481681824,-0.3938203454017639,2.367365598678589,-0.48215430974960327,0.06923879683017731,-0.873346209526062,2.0699241161346436,-0.3938196897506714,0.8733463287353516,0.28665757179260254,-1.143706202507019,0,0,0,1],[0.858269214630127,0.3730091154575348,-0.3524759113788605,2.361635684967041,-0.3730089068412781,-0.01831306889653206,-0.9276472330093384,1.6935110092163086,-0.35247522592544556,0.9276474714279175,0.12341787666082382,-0.6578379273414612,0,0,0,1],[0.8791053295135498,0.3756788969039917,-0.2933262288570404,2.3100545406341553,-0.3051074743270874,-0.029243454337120056,-0.951869010925293,0.8936766386032104,-0.3661743700504303,0.9262889623641968,0.08891407400369644,-0.6307705044746399,0,0,0,1],[1,-0.000001705669433249568,0.0000016839220506881247,0.3401581346988678,0.0000017060779100575019,0.013073861598968506,-0.9999145269393921,2.1790380477905273,0.0000016835075484777917,0.9999145269393921,0.013073980808258057,0.35687455534935,0,0,0,1],[0.9740064144134521,-0.16108378767967224,0.1592591106891632,-0.4375252425670624,0.16108344495296478,-0.0017553512006998062,-0.9869393110275269,1.71245539188385,0.15925946831703186,0.9869391918182373,0.02423832193017006,0.3164743185043335,0,0,0,1],[0.982950747013092,-0.13336357474327087,0.12657636404037476,-0.40488043427467346,0.13336345553398132,0.043215323239564896,-0.9901245832443237,0.7213154435157776,0.1265765279531479,0.990124523639679,0.06026449054479599,0.29938846826553345,0,0,0,1],[0.7392488121986389,0.5560553073883057,0.37988659739494324,0.1381569504737854,0.6261062622070312,-0.7752393484115601,-0.08363701403141022,-0.6106911301612854,0.24799615144729614,0.2996777296066284,-0.9212446212768555,-0.7931421995162964,0,0,0,1],[0.9740073084831238,0.16108092665672302,-0.1592567414045334,1.1001601219177246,-0.161081001162529,-0.0017550289630889893,-0.986939549446106,1.6028691530227661,-0.15925666689872742,0.9869396686553955,0.02423778548836708,0.20812968909740448,0,0,0,1],[0.9829513430595398,0.13336148858070374,-0.12657447159290314,1.0736008882522583,-0.13336139917373657,0.04321528598666191,-0.9901247024536133,0.630586564540863,-0.1265745759010315,0.9901248216629028,0.060263920575380325,0.2132779061794281,0,0,0,1],[0.7090227603912354,-0.5916455388069153,-0.38372188806533813,0.31546396017074585,-0.663862407207489,-0.7435400485992432,-0.08021817356348038,-1.0675750970840454,-0.23785185813903809,0.3116150200366974,-0.9199577569961548,-0.9453169107437134,0,0,0,1],[5.0590344358170114e-8,0.9999999403953552,-0.0004774821281898767,0.25212791562080383,-1.0000001192092896,1.2179273767287668e-7,-0.00023879119544290006,3.418456792831421,-0.00023879112268332392,0.0004774820990860462,0.9999998211860657,1.080428957939148,0,0,0,1]],"jointNameIndices":{"root hips":0,"spine":1,"head neck lower":2,"head neck upper":3,"arm left shouler":4,"arm left elbow":5,"arm left wrist":6,"arm right shoulder":7,"arm right elbow":8,"arm right wrist":9,"pelvis":10,"leg left thigh":11,"leg left knee":12,"leg left ankle":13,"leg right thigh":14,"leg right knee":15,"leg right ankle":16,"board":17}}

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