---
title: Mini Minecraft
slug: mini-minecraft
type: project
order: 3
hook: Minecraft from scratch leveraging the GLSL shader engine built in C.
problem: Building a 3D game engine from scratch with shader support
contribution: Player physics and collision, texture generation and animation, GUI and crafting systems
result: Complete 3D game with procedural world generation
year: 2024
role: Student
context: UPenn CIS Graduate Course
technologies: C, GLSL, OpenGL
---

[VIDEO_MINI_MINECRAFT]


**Background**: This is the final project for Interactive Computer Graphics (CIS 5600) at Penn. Together with my teammates, Eric Dai and Zain Khan, I built a Minecraft clone from scratch in a month using GLSL shader engine in C. We started off with a plain bloc 

### Player Input Registration and Physics Modeling

In the first milestone, I implemented player input handling by registering the WASD and space keys for movement and mouse movement for camera rotation. Player state updates were handled in `Player::tick()`, where input and position updates were computed based on `QDateTime::currentMSecsSinceEpoch()` to ensure time-consistent motion. In flight mode, the player moves freely along its forward, right, and up vectors without collision constraints. Pressing F switches the player into ground mode, where gravity is applied as a constant acceleration in the Y direction.

In ground mode, collision handling is enforced using a grid marching algorithm applied independently along the X, Y, and Z axes. Movement is clamped only along the axis where a collision is detected, allowing motion along the remaining axes to proceed uninterrupted. This axis-separated collision resolution ensures smoother movement and avoids unintended blocking. Grid marching is also used to determine block interaction within a fixed reach: a ray cast from the center of the screen identifies the first intersected block within three units. If the block is empty, it is replaced with grass and corresponding VBO data is generated; if the block is non-empty, it is removed and its VBO data is destroyed.

The primary challenges in this milestone were grid marching and mouse input handling. For collision detection, it was not initially obvious that only the colliding axis should be clamped. I resolved this by passing the ray direction into the collision detection function and directly modifying velocity components (e.g., setting `m_velocity.y = 0` and `ray.y = 0`) when a collision occurred. Another subtle issue involved ground detection: initially, the player was incorrectly considered grounded even when partially supported by a block edge, preventing gravity from being applied and causing the player to become stuck. I fixed this by checking whether the player’s bounding box was fully supported by ground blocks. If not, gravity is applied, allowing the player to fall naturally off block edges.

### Texture Generation

In the second milestone, I implemented texture loading and animation using a texture atlas. After examining the atlas layout, I computed the appropriate UV coordinates for each block type. I also improved block rendering by ensuring that only visible faces were generated, which significantly reduced unnecessary geometry.

For opaque blocks such as stone and dirt, faces adjacent to neighboring blocks were skipped entirely. Transparent blocks, such as water and lava, required additional logic: faces between two transparent blocks should not be rendered, while faces adjacent to solid blocks must remain visible to preserve visual correctness. Handling chunk boundaries introduced further complexity, as blocks at the edge of a chunk must consider neighbors that may belong to adjacent chunks. I initially added out-of-bounds checks, then extended the system to query neighboring chunks directly so that face visibility could be evaluated correctly across chunk borders.

Texture animation was added for water and lava by offsetting texture coordinates as a function of time. This produced a smooth flowing effect that made liquids feel more dynamic. Achieving consistent animation required careful tuning to avoid flickering or abrupt jumps, but after several iterations the motion became stable and visually coherent.

### GUI and Crafting

For the final milestone, I implemented an inventory and crafting system. I sourced additional texture atlases for the hotbar and crafting table and rendered the GUI using a separate vertex and fragment shader dedicated to screen-space rendering. Individual hotbar slots and numeric overlays were sampled directly from the texture atlas to display block quantities.

The inventory logic is represented as an array of `HotbarItem` objects, each storing a `BlockType` and a count. When the player breaks a block, the corresponding item is added to the hotbar, incrementing the count if the block type already exists. Placing a block decrements the count or removes the entry when the count reaches zero.

Crafting was implemented using a 3×3 grid, where recipes are stored in a hash map mapping a fixed-size array of `BlockTypes` to a resulting `BlockType`. This design enables efficient and deterministic recipe matching. A key challenge was ensuring that crafting inputs matched recipe keys exactly, which required careful alignment of the grid representation and converting pointer-based data structures into `std::array` for hash-based lookup.

User interaction introduced additional complexity. Mouse input needed to be context-sensitive: when the crafting GUI is open, mouse-look is disabled and cursor input is enabled to allow precise interaction with GUI elements. GUI rendering required careful calculation of slot positions, margins, and hitboxes to ensure that the crafting grid, output slot, and overlays aligned visually and functionally. Debugging click detection on the output slot was particularly tricky, but was resolved by ensuring that rendering and hitbox calculations shared the same coordinate logic.

Crafting succeeds only when the input grid exactly matches a recipe. On success, the crafted item is added to the inventory and the input items are consumed accordingly.