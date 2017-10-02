## Downhill Danger

### Background and Overview

Downhill Danger is a 3D game where players snowboard down a slope collecting balloons and avoiding trees.
It doesn't require any plugins or external libraries, relying on the standard WebGL API present in all modern browsers to rasterize graphics.


### Functionality & MVP  
	* Users collect balloons to Increase their score
	* Users dodge trees to get a better course time

### Wireframes

This app will consist of a single canvas to display gameplay. There will be gameplay instructions on the left side.
![wireframes](untitled.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- `WebGL` for rasterizing graphics
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry and math utilities, there will be six scripts involved in this project:

- `web_gl_utils.js`: this buffers mesh information and transformation data on the graphics processor. It asks game objects for information about their state and uses it
to rasterize graphics on the canvas.
- `mesh.js`: this script houses attributes for displaying meshes
- `game_object.js` : this script contains a class for logic shared between trees, balloons, and the player.
	It contains a reference to the mesh used to display the object, boundary box information for collisions, and collision detection functions.
- `character.js`: this script contains information specific to the player's character. It houses their current speed and steering parameters. It contains logic to slow down or stop upon collisions.
- `input.js`: this is where event listeners are instantiated to listen for the player's input
- `slope.js`: this procedurally generates the slope as the player moves forward, populating it with trees and balloons.

### Implementation Timeline

**Over the weekend**:
- [x] Become familiarized with the WebGL API
- [x] Implement a basic WebGL rasterizer for 3D assets
- [x] Create a basic rendering loop to render all objects registered on the rasterizer Class
- [x] set up an import/export pipeline to convert 3D assets to JSON
- [x] Write basic GLSL shaders for displaying objects with either vertex colors or textures
- [x] Write a basic GLSL shader to transform vertices based on skeletal data stored in transformation matrices
- [x] Set up weback. Create 'webpack.config.js'

**Day 1**: Procedurally genrate a slope
- [ ] Create a basic edge loop along the x- axis
- [ ] Extrude the the vertices forward a set distance
- [ ] Implement basic logic to accelerate the player down a slope.
- [ ] add another segment as the player moves forward a set distance

**Day 2**: Provide the player with controls to move left and right.
- [ ] Dampen the speed if the player collides with the edge of the course.
- [ ] Prevent the player from turning all the way around and traveling back up the slope.

**Day 3**:  Implement logic for collisions. Add trees and ballons along the course.
- [ ] Increase the player's ballon count if they collide with a balloon.  Knock them back a bit if they collide with a tree.
- [ ] Add basic textures to the balloons, player, and trees

**Day 4**: Polish the controls. Prettify Things
- [ ] Create a display to keep track of how may balloons the player has collected.
- [ ] Style a timer to show how long it takes the player to complete the course
- [ ] Add a congratulatory message upon completion of the course
- [ ] Add directions on how to play the game.
- [ ] Add basic skeletal animation


### Bonus features

Possible Additional Features:

- [ ] Add sound effects/ bgm
- [ ] Create additional obstacles
- [ ] Create additional player skins
- [ ] Create ramps to let the player aim for high-up balloons
