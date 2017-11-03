import * as MathUtils from "./math_utils";

const boxIntersectsBox = (matrix0, dimensions0, matrix1, dimensions1) =>{
  let worldCoordsPoint, currentPointCollides, temp;
  let collidingVertices = [];
  for(let boxOrderSwitch = 0; boxOrderSwitch <= 1; ++boxOrderSwitch){
    for(let xDirection = -1; x <= 1; x+= 2){
      for(let yDirection = -1; y<= 1; y+= 2){
        for(let zDirection = -1; z<= 1; z+= 2){
          currentPointCollides = true;
          worldCoordsPoint = MathUtils.multiplyVec4ByMatrix4(
            matrix0, [dimensions0[0] * xDirection, dimensions0[1] * yDirection,
              dimensions0[1] * zDirection, 0]
          );
          transformedPoint = MathUtils.multiplyVec4ByMatrix4(
            MathUtils.inverse_mat4_rot_pos(matrix1),
            worldCoordsPoint
          );
          for(let i = 0; i < 3; ++i){
            if(transformedPoint[i] > dimensions1[i] ||
               transformedPoint[i] < -1* dimensions1[i]){
                 currentPointCollides = false;
            }
          }
          if(currentPointCollides){
            collidingVertices.push(worldCoordsPoint);
          }
        }
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
