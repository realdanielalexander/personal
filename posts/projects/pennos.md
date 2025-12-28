---
title: PennOS — UNIX-like Operating System from Scratch
slug: pennos
type: project
order: 4
hook: Unix-like OS kernel with custom process scheduling, virtual memory, and IPC built from scratch in C.
problem: Understanding fundamental OS concepts requires hands-on implementation
contribution: Preemptive priority-aware scheduler, FAT-based file system, multi-process support
result: Educational OS kernel demonstrating core system concepts
---

[VIDEO_PENNOS]

**Background**: UPenn CIS graduate level course focusing on making a modular operating system kernel equipped with custom process scheduling and a FAT-based file system from scratch in C. Understanding and implementing schedulers is especially important, as process scheduling remains an ongoing research challenge in computer science and lies at the heart of system performance and fairness. By exploring these core OS concepts hands-on, the project enables a deeper appreciation for how fundamental scheduling and file management mechanisms work and why their continued development is critical to reliable computing systems.

**Key Responsibilities**:

* Built a custom OS kernel integrated with preemptive priority-aware process scheduling, foreground and background processes throughout the process lifecycle: process creation, execution, backgrounding, foregrounding, and termination, complete with user-level concurrency using the spthread library.
* Designed and implemented a modular FAT-based file system enabling persistent data storage and streamlined I/O handling.
* Integrated between kernel and scheduler, supported multi-process file operations and directory management.
