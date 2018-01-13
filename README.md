## Downhill Hazard

[Downhill Hazard](https://axadn.github.io/downhill-hazard/) is a 3D snowboarding game with physics built from scratch using JavaScript.


### Features and Overview
Users control a character in 3rd person to navigate down a slope on a snowboard.
Collisions with the edge of the course and with trees dampen the player's velocity.

The slope is procedurally generated. Each time a player progresses forward a segment,
a new segment is added to the front of the path as one is removed.

Basic collision detection is implemented to prevent players from navigating off the edges of the slope.
Collision detection is also present on the trees present in the middle of the path, but it is currently shaky at best.

The game does not currently utilize a back end. Testing on a local machine with textures enabled, however,
requires setting up a server due to the browser treating loading an image from a local file path as a cross-origin request.


### Moving forward
- Add debugging functions the rasterizer class to instantly rasterize guide lines and boxes to
assist with debugging of physics and other features
- Implement an object pool for the trees to help slowdowns due to garbage collection
- Add skeletal animation and texturing to the player
