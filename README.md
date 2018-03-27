## Downhill Hazard

[Downhill Hazard (live link)](https://axadn.github.io/downhill-hazard/public) is a 3D snowboarding game with physics built from scratch using JavaScript.


### Features and Overview
Users control a character in 3rd person to navigate down a slope on a snowboard.

The slope is procedurally generated. Each time a player progresses forward a segment,
a new segment is added to the front of the path as one is removed.

Collision detection is implemented for the edges of the path, the trees, and balloons.

#### Object Pooling
In earlier stages of development, there were momentary slowdowns that became more frequent the longer the application was open. This seemed like an issue with memory allocation. Because the slope deletes and instantiates lots of trees, the garbage collector becomes very taxed. We don't have direct control over how memory is used in JavaScript. We can, however, make the garbage collector's job a lot easier by re-using objects instead of instantiating new ones. The implementation of an Object Pool is very simple, but very effective :

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


### Moving forward
- [x] Add debugging functions the rasterizer class 
- [x] Implement an object pool for the trees to help slowdowns due to garbage collection
- [x] Do more math and physics operations in place to create less garbage
- [x] Add skeletal animation support
- [ ] texture the player
- [ ] implement the finish line
- [ ] add other obstacle types
- [x] sound effects
