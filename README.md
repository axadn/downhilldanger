## Downhill Hazard

[Downhill Hazard](https://axadn.github.io/downhill-hazard/) is a 3D browser game built from scratch using vanilla JavaScript.


### Features and Overview
Users control a character in 3rd person to navigate down a slope on a snowboard.
Collisions with the edge of the course and with trees dampen the player's velocity.

The slope is procedurally generated. Each time a player progresses forward a segment,
a new segment is added to the front of the path as one is removed.

Basic collision detection is implemented to prevent players from navigating off the edges of the slope.
Collision detection is also present on the trees present in the middle of the path, but it is currently shaky at best.

The game does not currently utilize a back end. Testing on a local machine with textures enabled, however,
requires setting up a server due to the browser treating loading an image from a local file path as a cross-origin request.

### Challenges
Currently, the rotation and position for all objects and all segments of the slope are stored as 4X4 transformation matrices. I have provided some math utilities to assist in combining and manipulating transformations, vector functions such as projection, dot and cross product for computing boundaries. It can often be confusing chaining together multiple transformations in sequence. I have
come up with some basic guidelines, however, implementing this project.
It helps to recall that a transformation matrix maps each component x, y, z, and w to a function of all 4 inputs x, y, z, and w.
- Therefore, to apply a transformation to a matrix in global space can be thought of as inputing the old matrix into a local coordinate system specified by the second matrix in the product( oldMatrix X transformMatrix )
- Applying a transformation to a matrix in local space can be thought of as the opposite, inputting the transformation into a local space specified by the original matrix ( transformMatrix X oldMatrix)
- Inputting a vector representing local coordinates into a matrix ( vector X matrix) will transform that vector into global coordinates
- Inputting a vector representing global coordinates into the inverse of a matrix( vector X matrix^-1) will transform that vector into local coordinates

### Moving forward
- Add debugging functions the rasterizer class to instantly rasterize guide lines and boxes to
assist with debugging of physics and other features
- Implement an object pool for the trees to eliminate slowdowns due to garbage collection
- Give the player a bounding box for more accurate collision detection
- Add skeletal animation and texturing to the player
