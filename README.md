## Downhill Hazard

[Downhill Hazard](https://axadn.github.io/downhill-hazard/public) is a 3D snowboarding game with physics built from scratch using JavaScript.


### Features and Overview
Users control a character in 3rd person to navigate down a slope on a snowboard.

The slope is procedurally generated. Each time a player progresses forward a segment,
a new segment is added to the front of the path as one is removed.

Collision detection is implemented for the edges of the path, the trees, and balloons.


### Moving forward
- [x] Add debugging functions the rasterizer class 
- [x] Implement an object pool for the trees to help slowdowns due to garbage collection
- [ ] Do more math and physics operations in place to create less garbage
- [x] Add skeletal animation support
- [ ] texture the player
- [ ] implement the finish line
- [ ] add other obstacle types
