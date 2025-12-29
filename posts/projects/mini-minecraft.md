---
title: Mini Minecraft
slug: mini-minecraft
type: project
order: 3
hook: Minecraft from scratch leveraging the GLSL shader engine built in C.
problem: Building a 3D game engine from scratch with shader support
contribution: Player physics and collision, texture generation and animation, GUI and crafting systems
result: Complete 3D game with procedural world generation
---

[VIDEO_MINI_MINECRAFT]

UPenn CIS graduate level class final project

**Background**: UPenn level built a minecraft-style 3D game that leverages the GLSL shader engine in C.

**Key Responsibilities:**

* Registered keyboard presses to update player positions based on player physics, implemented player physics, collision, ground mode, and gravity by using ray marching calculations
* Built texture generation and animation pipelines by loading in a UV coordinate file and registered each block to different coordinates, differentiated between opaque and transparent blocks, made textures animate over time relative to a time function.
* Synthesized GUI, crafting, and inventory logic that lets players collect blocks and craft new blocks based on a predefined recipe
