---
title: Millennial Fashion — Distributed Web Engineering Project
slug: millennial-fashion
type: project
order: 5
hook: E-commerce system engineered with explicit architectural planning, workload assumptions, and operational constraints for scalable distributed service deployment.
problem: Building a web commerce system that scales, remains available under concurrent access, and is deployable in a realistic multi-node environment
contribution: Three-tier architecture design, workload-driven infrastructure planning, formal system modeling, containerized multi-server deployment with load balancing
result: Complete e-commerce workflow with modular architecture, explicit scalability planning, and production-oriented deployment validation
year: 2021
role: Student
context: Undergraduate Web Engineering Course
technologies: Vue.js, Go, MySQL, Docker, Nginx
---

![Architecture diagram](/millennial/millennialfashion.png)

### Overview

Millennial Fashion is a web commerce system built as part of my Web Engineering class final project in Indonesia. Together with my groupmates, Hanjaya Suryalim and Albertus Kevin, I planned, designed, and implemented a full-fledged distributed service system composed of multiple components. 

### Architecture and Planning

The system was designed using a three-tier architecture that separates presentation, application logic, and persistent storage. Then, the network architecture is defined in a network architecture diagram. This design is decided to facilitate failover support and load balancing. 


![Network architecture diagram](/millennial/network.png)

We then planned the development as if we had a team of software engineers. We made sure that each engineer is given a proportional workload in man-days, as well as estimated their monetary compensation. Cost and effort planning was conducted by estimating man-days across development, quality assurance, operations, and server configuration roles, and mapping those efforts to infrastructure costs. This ensured that the system design remained feasible under time and resource constraints.

![Man-days planning table](/millennial/man_days_table.png)

Use case modeling was employed to define system behavior from the perspective of different actors, clarifying access boundaries between users and administrators and constraining system complexity. Class and data modeling were used to formalize core entities such as users, products, carts, wishlists, and transactions, with explicit relationships defined to support transactional consistency and predictable database behavior.

![Use case diagram](/millennial/uc_diagram.jpg)

Considering these use cases, we then modeled the schema of database to persist data on MySQL RDBMS. Core application responsibilities—such as authentication, inventory management, billing, and transaction processing—were identified early and treated as distinct logical subsystems, influencing the design of the schema.

![Database schema diagram](/millennial/schema_diagram.png)

### Implementation and Deployment

Implementation followed the planned separation of concerns. The frontend layer was responsible solely for presentation and user interaction, while backend services enforced business logic and coordinated database access. All services were containerized and deployed on a separate VirtualBox instance to simulate actual deployment on the cloud.

![VirtualBox deployment](/millennial/virtualbox.png)

The UI components were designed with a strong focus on optimal user experience—prioritizing intuitive navigation, clear feedback, and responsive layouts to ensure seamless interaction across web and mobile devices. Special attention was given to accessibility and visual clarity, resulting in a straightforward, pleasant shopping and management workflow.

![Implementation screenshots](/millennial/implementation.png)

### Testing and Validation

Test cases were organized into a formal table specifying test steps, expected outcomes, and observed results. System behavior was validated using a structured black-box test matrix covering all user workflows, including registration, catalog navigation, cart updates, checkout, and transaction review. Each test case specified input conditions, expected outcomes, and observed results, all of which passed under normal operation.

### Outcome

The final system is an end-to-end scalable e-commerce system. Through this project, I learned how to plan, develop, and test a real-world distributed system that will prepare me for an engineering manager role.

