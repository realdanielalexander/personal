---
title: PennOS — UNIX-like Operating System
slug: pennos
type: project
order: 4
label: Systems Project
hook: A UNIX-like operating-system project implemented in C, including preemptive priority scheduling, process lifecycle management, user-level concurrency, and a custom FAT-style filesystem.
problem: Understanding fundamental OS concepts requires hands-on implementation
contribution: Preemptive priority-aware scheduler, FAT-based file system, multi-process support
result: Educational OS kernel demonstrating core system concepts
year: 2024
role: Student
context: UPenn CIS Graduate Course
technologies: C, spthread
---

[VIDEO_PENNOS]

**Background**: PennOS is a modular, UNIX-like operating system built from scratch in C for a graduate operating systems course at the University of Pennsylvania. It combines a preemptive priority scheduler, full process lifecycle management, and a FAT-based file system, with an emphasis on how scheduling decisions shape system performance and fairness.

**My Contributions**:

* Built a custom OS kernel integrated with preemptive priority-aware process scheduling, foreground and background processes throughout the process lifecycle: process creation, execution, backgrounding, foregrounding, and termination, complete with user-level concurrency using the spthread library.
* Designed and implemented a modular FAT-based file system enabling persistent data storage and streamlined I/O handling.
* Integrated between kernel and scheduler, supported multi-process file operations and directory management.
