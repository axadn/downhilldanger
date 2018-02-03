import * as MathUtils from "./math_utils";
import { angleBetweenVectors } from "./math_utils";
export const COLLISION_REJECTION = 0.05;

export const movingBoxIntersectsBox = (matrix0, dimensions0, matrix1, dimensions1, moveVector) =>{
  const colliderPoint = boxIntersectsBox(matrix0, dimensions0, matrix1, dimensions1) || 
  boxIntersectsBox(matrix1, dimensions1, matrix0, dimensions0);
  if(colliderPoint){
    return {normal: approximateCollisionNormal(
      MathUtils.subtractVectors(colliderPoint, moveVector.concat(0)), matrix1, dimensions1),
      colliderPoint
    };
  }
};
export function approximateCollisionNormal(position, boxMatrix, boxDimensions){
  const transformedPoint = MathUtils.multiplyVec4ByMatrix4(
    MathUtils.inverse_mat4_rot_pos(boxMatrix), position);
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
  return MathUtils.multiplyVec4ByMatrix4(boxMatrix, normal).slice(0,3);
};
export function boxIntersectsBox(matrix0, dimensions0, matrix1, dimensions1){
  let transformedPoint, pointCollides;
  const worldCoordsPoints = boxColliderToPoints(matrix0, dimensions0);
  for(let i = 0; i < worldCoordsPoints.length; ++i){
    transformedPoint = MathUtils.multiplyVec4ByMatrix4(
      MathUtils.inverse_mat4_rot_pos(matrix1),
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

export function sphereCollidesCapsule(sphereOrigin, sphereRadius,
capsulePoint0, capsulePoint1, capsuleRadius){
  const capsuleVector = MathUtils.subtractVectors(capsulePoint1, capsulePoint0);
  if (capsuleVector[0] === 0 && capsuleVector[1] === 0 && capsuleVector[2] === 0){
    capsuleVector[0] = 0.01;
  }
  const point0ToSphereOrigin = MathUtils.subtractVectors(sphereOrigin, capsulePoint0);
  const point0ToSphereAngle = MathUtils.angleBetweenVectors(point0ToSphereOrigin, capsuleVector);
  const point1ToSphereOrigin = MathUtils.subtractVectors(sphereOrigin, capsulePoint1);
  const point1ToSphereAngle = MathUtils.angleBetweenVectors(point1ToSphereOrigin,
     MathUtils.scaleVector(capsuleVector, -1)
    );
  const maxDist = sphereRadius + capsuleRadius;
  let dist;
  if(point0ToSphereAngle < Math.PI/2 &&
    point1ToSphereAngle < Math.PI/2){
    dist =  MathUtils.vectorMag(point0ToSphereOrigin) * Math.sin(point0ToSphereAngle);
    if(dist <= maxDist){
      const rotationMatrix = MathUtils.axisAngleToMatrix(
        MathUtils.vectorCross(point0ToSphereOrigin, capsuleVector),
        Math.PI/2
      );
      const capsuleNormal = MathUtils.multiplyVec4ByMatrix4(rotationMatrix, capsuleVector.concat(0)).slice(0,3);
      if(isNaN(capsuleNormal[0])){
        debugger;
      }
      return {capsuleNormal,
      sphereNormal: MathUtils.scaleVector(capsuleNormal, -1),
      penetration: maxDist - dist};
    }
    return false;
  } else if((dist = MathUtils.distance(capsulePoint0, sphereOrigin)) <= maxDist){
    const capsuleNormal = MathUtils.subtractVectors(sphereOrigin, capsulePoint0);
    return {capsuleNormal,
      sphereNormal: MathUtils.scaleVector(capsuleNormal, -1),
      penetration: maxDist - dist
    };
  } else if((dist = MathUtils.distance(capsulePoint1, sphereOrigin)) <= maxDist){
    const capsuleNormal = MathUtils.subtractVectors(sphereOrigin, capsulePoint1);
    return {capsuleNormal,
      sphereNormal: MathUtils.scaleVector(capsuleNormal, -1),
      penetration: maxDist - dist
    };
  }
  return false;
}

export const boxColliderToPoints = (matrix, dimensions) =>{
  const points = [];
  for(let xDirection = -1; xDirection <= 1; xDirection+= 2){
    for(let yDirection = -1; yDirection<= 1; yDirection+= 2){
      for(let zDirection = -1; zDirection<= 1; zDirection+= 2){
        points.push(
          MathUtils.multiplyVec4ByMatrix4(
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