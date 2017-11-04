import * as MathUtils from "./math_utils";

export const boxIntersectsBox = (matrix0, dimensions0, matrix1, dimensions1) =>{
  let worldCoordsPoints, transformedPoint, currentPointCollides, temp;
  let collidingVertices = [];
  for(let boxOrderSwitch = 0; boxOrderSwitch <= 1; ++boxOrderSwitch){
    worldCoordsPoints = boxColliderToPoints(matrix0, dimensions0);
    for(let i = 0; i < worldCoordsPoints.length; ++i){
      currentPointCollides = true;
      transformedPoint = MathUtils.multiplyVec4ByMatrix4(
        MathUtils.inverse_mat4_rot_pos(matrix1),
        worldCoordsPoints[i]
      );
      for(let j = 0; j < 3; ++j){
        if(transformedPoint[j] > dimensions1[j] ||
           transformedPoint[j] < -1* dimensions1[j]){
             currentPointCollides = false;
        }
      }
      if(currentPointCollides){
        collidingVertices.push(worldCoordsPoint);
      }
    }
    temp = matrix0;
    matrix0 = matrix1;
    matrix1 = temp;
    temp = dimensions0;
    dimensions0 = dimensions1;
    dimensions1 = temp;
  }
  if(collidingVertices.length > 0){
    return collidingVertices;
  }
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
}
