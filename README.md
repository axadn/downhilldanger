## Downhill Hazard

[Downhill Hazard (live link)](https://axadn.github.io/downhill-hazard/public) is a 3D snowboarding game with physics built from scratch using JavaScript.


### Features and Overview
Users control a character in 3rd person to navigate down a slope on a snowboard.

The slope is procedurally generated. Each time a player progresses forward a segment,
a new segment is added to the front of the path as one is removed.

Collision detection is implemented for the edges of the path, the trees, and balloons.

#### Object Pooling
In earlier stages of development, there were momentary slowdowns that became more frequent after playing for a little while. This seemed like an issue I've seen before with memory allocation. Because the slope deletes and instantiates lots of trees, the garbage collector becomes very taxed. We don't have direct control over how memory is used in JavaScript. We can, however, make the garbage collector's job a lot easier by re-using objects instead of instantiating new ones. The implementation of an Object Pool is very simple, but very effective :

```javascript
class TreePool{
    constructor(mesh){
        this.treeMesh = mesh;
        this.pool = [];
    }
    pullTree(id, transformation = MathUtils.identityMatrix4){
        let tree;
        if(this.pool.length == 0){
            tree = new GameObject(this.treeMesh, transformation, true);
        }else{
            tree = this.pool[this.pool.length - 1];
            tree.setTransformationMatrix(transformation);
            this.pool.pop();
        }
        tree.id = `treeObstacle${id}`;
        return tree;
    }
    releaseTree(tree){
        this.pool.push(tree);
    }
}

```

#### Animation Mixing
Eventually, when I began to add animations to the character, I ran into the problem of needing to smoothly interpolate between different animations. It is also extremely common to have multiple bones to affect the final position of a vertex. This is a bit of a problem because the exporter I am using exports the bone's animations as transformation matrices. Transformation matrices can not be directly interpolated because of how they represent transformations. This would produce garbage.

One solution is to extract the rotation and position and individualy interpolate these. This is inconvenient, however, because one needs to break down all the matrices, interpolate them, and then recombine them back into a transformation matrix.

A great solution to this problem that has seen use lately is dual quaternions. Dual quaternions by nature are very simple to interpolate (you can just treat each quaternion as 4D vector). One can write a shader that takes bone transformations formatted as dual quaternions. This allows us to easily interpolate the different animations and bone influences without converting back and forth between different formats. Dual quaternions also take less space than transformation matrices. Instead of 16 components, there are 8.

My eventual solution was to convert the transformation matrices into dual quaternions, and then use these for all the mixing and the shaders.

More about dual quaternions: 

https://www.cs.utah.edu/~ladislav/kavan07skinning/kavan07skinning.pdf
https://cs.gmu.edu/~jmlien/teaching/cs451/uploads/Main/dual-quaternion.pdf
http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.434.4796&rep=rep1&type=pdf

#### Collision Detection
Because of the way I have the slope procedurally generated (segment by segment) we only need to check the character's collider against colliders in the current segment, the previous segment, and the next segment. This saves a lot of calculations. We only need to check for collision against a few balloons and trees each frame. This is similar to the quadtree method used to divide space and detect likely colisions used in a lot of games.
  
#### Debugging
To assist with debugging, I've added a couple methods to the rasterizer class. 
These allow you to draw lines and circles between points in 3D space from the console or source code. This is useful for checking that the results of transformations and math operations are what you expect.
```javascript
  debugLine(start, end, style = "black"){
    start = MathUtils.multiplyVec4ByMatrix4(this.viewMatrix, start.concat(1));
    start = MathUtils.scaleVector(start, 1/start[3]);
    start = this.clipSpaceToFlatCanvasCoords(start[0],start[1]);
    end = MathUtils.multiplyVec4ByMatrix4(this.viewMatrix, end.concat(1));
    end = MathUtils.scaleVector(end, 1/end[3]);
    end = this.clipSpaceToFlatCanvasCoords(end[0], end[1]);
    this.ctx.beginPath();
    this.ctx.moveTo(start[0],start[1]);
    this.ctx.lineTo(end[0],end[1]);
    this.ctx.strokeStyle = style;
    this.ctx.stroke();
  }
  
  debugCircle(pos, radius){
    pos = MathUtils.multiplyVec4ByMatrix4(this.viewMatrix, pos.concat(0));
    this.ctx.arc(pos[0], pos[1], radius, 0, Math.PI * 2);
    this.ctx.stroke();
  }
 
```

### Moving forward
- [x] Add debugging functions the rasterizer class 
- [x] Implement an object pool for the trees to help slowdowns due to garbage collection
- [x] Do more math and physics operations in place to create less garbage
- [x] Add skeletal animation support
- [x] texture the player
- [x] implement the finish line
- [ ] add other obstacle types
- [ ] database for storing high scores
- [x] sound effects
- [ ] prevent camera from colliding with edge of course
