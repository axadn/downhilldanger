## Downhill Hazard
Downhill Hazard is a 3D browser game built from scratch using vanilla JavaScript.
https://axadn.github.io/downhill-hazard/

### Features and Overview
Users control a character in 3rd person to navigate down a slope on a snowboard.
The slope is procedurally generated. Each time a player progresses forward a segment,
a new segment is added to the front of the path as one is removed.

Basic collision detection is implemented to prevent players from navigating off the edges of the slope.
Collision detection is also present on the trees present in the middle of the path, but it is currently shaky at best.

### Moving forward
- Add debugger functions the rasterizer to instantly rasterize guide lines and boxes to
assist with debugging of physics
- Implement an object pool for the trees to eliminate slowdowns owed to garbage collection
- Give the player a bounding box for more accurate collision detection
- Add skeletal animation and texturing to the player
