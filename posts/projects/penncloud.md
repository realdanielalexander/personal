---
title: PennCloud — Fault-Tolerant Distributed Cloud Platform
slug: penncloud
type: project
order: 6
hook: Distributed cloud platform providing email and file storage services with strong consistency and fault tolerance, built from scratch on a custom key-value store.
problem: Building a fault-tolerant distributed system that maintains correctness, consistency, and availability under node failures
contribution: Tablet-based distributed key-value store, synchronous replication protocol, Write-Ahead Logging, checkpointing, failure detection, and recovery mechanisms
result: Complete distributed cloud platform with transparent failover, strong consistency guarantees, and validated fault tolerance
year: 2024
role: Engineer
context: UPenn CIS Graduate Course
technologies: Go, Distributed Systems, Key-Value Store, Replication
---

![PennCloud Home Interface](/penncloud/home.png)

### Overview

PennCloud is a distributed cloud platform that provides email and file storage services through an interactive web interface, inspired by systems such as Gmail and Google Drive. The system was built entirely from scratch on top of a custom distributed key-value store, with the primary goal of maintaining correctness, consistency, and availability under node failures. Rather than relying on existing storage frameworks, PennCloud exposes and controls every layer of the system, enabling careful reasoning about replication, recovery, and failure handling.

### System Architecture

The system follows a modular, multi-tier architecture consisting of a load balancer, stateless frontend web servers, a coordinator, replicated backend storage nodes, and an administrative console. Users enter the system through a load balancer that redirects requests to healthy frontend servers using a least-connections strategy. Frontend servers handle HTTP requests for mail and drive operations and translate user actions into key-value store operations. Sessions are maintained via cookies, allowing transparent failover and load balancing without violating correctness. The coordinator serves as the control plane, tracking node liveness, tablet ownership, and primary assignments, while the admin console provides real-time observability and node control.

![Login Interface](/penncloud/login.png)

![Admin Console](/penncloud/admin_console.png)

### Distributed Storage Design

At the core of PennCloud is a tablet-based distributed key-value store that partitions the keyspace across backend nodes. Data is assigned to tablets based on key ranges, allowing horizontal scaling as nodes are added. The schema uses carefully designed key prefixes and unique identifiers rather than human-readable paths, which avoids hot spots and decouples logical naming from physical storage. This design simplifies operations such as renaming, moving, and deleting files and enables uniform data distribution across tablets.

### Schema Design

* `user:<username>` / `password`: Hashed password
* `session:<session_uid>` / `user`: Username associated with session
* `<username>:mailbox` / `inbox`: Comma-separated list of message UIDs
* `<username>:mailmsg:<msg_uid>` / `header`: JSON with from, subject, date fields
* `<username>:mailmsg:<msg_uid>` / `body`: Raw email body text
* `<username>:drive` / `root`: Children list for root folder
* `<username>:drive:UID_<uid>` / `type`: "file" or "folder"
* `<username>:drive:UID_<uid>` / `parent`: Parent folder UID
* `<username>:drive:UID_<uid>` / `children`: Child UIDs (folders only)
* `<username>:drive:UID_<uid>` / `size`: File size in bytes
* `<username>:drive:UID_<uid>` / `content_type`: MIME type
* `<username>:drive:UID_<uid>` / `chunks`: Number of chunks
* `<username>:drive:file:<uid>:<chunk_no>` / `chunk`: Raw binary chunk data (up to 4MB)

![Files Interface](/penncloud/files.png)

### Consistency and Replication

PennCloud employs a primary-based synchronous replication model to provide strong consistency guarantees. All write operations are routed through a primary replica, which orders updates and replicates them synchronously to all secondary replicas before acknowledging the client. Reads are served through the primary or forwarded from secondaries to ensure sequential consistency. This approach prioritizes correctness and simplifies system reasoning, ensuring that replicas remain consistent even in the presence of failures.

### Fault Tolerance and Recovery

Fault tolerance is a central design goal of the system. The coordinator continuously monitors storage nodes via heartbeats and detects failures within seconds. When a primary replica fails, a deterministic primary election protocol promotes a new primary without user-visible disruption. Backend nodes persist updates using a Write-Ahead Log and periodic checkpoints, ensuring durability and enabling recovery after crashes or administrative disables.

Recovery proceeds in two phases. Upon restart, a storage node replays its local checkpoint to restore its most recent consistent state. It then performs a snapshot-based catch-up by querying a live replica for the full set of keys and values in its assigned tablets. Rather than transferring logs between nodes, recovery reuses standard key-value operations, favoring simplicity and correctness over bandwidth efficiency.

![Fault Tolerance Diagram](/penncloud/fault_tolerance.png)

### Performance and Scalability

The system benefits from in-memory storage for low-latency reads and writes, chunked large-file storage that parallelizes uploads and downloads, and stateless frontend servers that scale naturally with demand. Tablet-based partitioning enables horizontal scalability for both data volume and user count. The primary-based replication model introduces a write bottleneck, but this tradeoff was intentionally chosen to provide strong consistency and simpler correctness guarantees.

![Inbox Interface](/penncloud/inbox.png)

### My Contributions

My primary contributions focused on the distributed storage and coordination layers. I designed and implemented the tablet-based replicated key-value store, synchronous replication protocol, Write-Ahead Logging and checkpointing mechanisms, and the full recovery workflow. I also implemented coordinator logic for heartbeat monitoring, failure detection, and primary election, and conducted extensive multi-node fault-tolerance testing under sequential failures and rapid failover scenarios to validate correctness.

### Key Takeaways

This project provided hands-on experience designing and validating a fault-tolerant distributed system where correctness under failure was treated as a first-class concern. It reinforced key lessons about consistency tradeoffs, recovery design, and observability, and directly informed my later research interests in large-scale inference and ML systems, where similar challenges arise in coordinating state, managing failures, and balancing performance with correctness.

