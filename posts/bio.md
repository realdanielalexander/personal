---
title: Bio
type: bio
---
## About Me

Hi! I'm Daniel. I'm actively looking for PhD opportunities in this cycle for Fall 2026.
I would love to discuss distributed systems and ML infrastructure!

## Research Interests

I'm currently a Master's student in Computer Science at the University of Pennsylvania, interested in distributed systems for ML serving. I'm currently working with Prof. Vincent Liu on developing techniques to accelerate large language model (LLM) serving systems.

## Projects

### Dynamic Rebatching for Efficient Early-Exit Inference with DREX

---

Xuting Liu, **Daniel Alexander**, Behnaz Arzani, Siva Kesava Reddy Kakarla, Vincent Liu (In submission to NSDI'26)

**Background:** Early-Exiting (EE) in Large Language Models (LLMs) is a technique that aim to accelerate inference by allowing "easy" tokens to exit the model early to save computational resources. However, operationalizing EE LLMs remains a challenge, since EE has mostly been studied in a *single-inference* setting. This project aims to extend EE LLM serving in a *batched* setting by introducing DREX, the first system that operationalizes EE LLMs through *Dynamic Rebatching*. DREX integrates two major innovations: a copy-free rebatching mechanism that eliminates physical data movement, and a memory-efficient state-copying approach that reduces redundant KV cache usage. Together, these optimizations deliver up to 2–12× throughput improvements over baseline frameworks while maintaining high output quality and eliminating involuntary exits.

**Key Responsibilities:**

* **Algorithm design**: designed the dynamic rebatching algorithm on the Sarathi serving framework, implemented an efficient batch-wise KV cache copying mechanism, implemented BERT score as a metric of output quality.
* **Experiment running**: extended the experimental suite to NVIDIA A100, H200, RTX 3090Ti, and RTX 5090Ti GPUs running Llama 2-7b,13b,70, and Qwen-14b models, introduced new workloads and datasets including HumanEval for code generation and XSUM for abstract summarization.
* **Technical Writing**: Contributed to the paper's techincal writing, generated key experimental figures in PGFPlots: throughput vs. confidence scores, early-exit proportion breakdowns, and memory efficiency visualization, and adapted design figures to TikZ.

### **Application of Convolutional Neural Network for Semantic Segmentation of Bandung Urban Scenes**

**Daniel Alexander**, Hans Christian Kurniawan, Irfin Afifudin, Hery Heryanto

Accepted to the IEEE International Conference on Data and Software Engineering 2022

[Video coming soon]

**Background:** Urban scene analysis often struggles with scalability and extensibility to new patterns typically represented by the complex and irregular road conditions common in Southeast Asian cities.  While many existing semantic segmentation pipelines have been optimized for structured environments like those in European and American cities, they fail to generalize well to regions with high traffic variability, informal infrastructure, and non-standard road markings typical of Indonesia. This project addresses that limitation by building an end-to-end urban scene segmentation pipeline encompassing data collection, preprocessing, model training, evaluation, and deployment.

**Key Responsibilities:**

* **Data collection**: Designed and executed a full data collection pipeline: video capture from urban driving routes, frame extraction, and custom pixel annotation into different categories.
* **Code design and model building:** Invented an extensible segmentation pipeline from scratch using TensorFlow and Keras, utilized state-of-the-art model DeepLabV3+, performed hyperparameter tuning to ensure scalability across different model depths and filter configurations.
* **Experimentation:** Conducted systematic experiments under different environments and model configurations, performed quantitative and qualitative analysis and verified the correctness of the output based on the theoretical hypotheses.
* **Technical writing:** Authored detailed documentation of around 150 pages, detailing the system design, methodology, and experiment outcomes


### PennOS

---

[VIDEO_PENNOS]
**Background**: UPenn CIS graduate level course focusing on making a modular operating system kernel equipped with custom process scheduling and a FAT-based file system from scratch in C. Understanding and implementing schedulers is especially important, as process scheduling remains an ongoing research challenge in computer science and lies at the heart of system performance and fairness. By exploring these core OS concepts hands-on, the project enables a deeper appreciation for how fundamental scheduling and file management mechanisms work and why their continued development is critical to reliable computing systems.

**Key Responsibilities**:

* Built a custom OS kernel integrated with preemptive priority-aware process scheduling, foreground and background processes throughout the process lifecycle: process creation, execution, backgrounding, foregrounding, and termination, complete with user-level concurrency using the spthread library.
* Designed and implemented a modular FAT-based file system enabling persistent data storage and streamlined I/O handling.
* Integrated between kernel and scheduler, supported multi-process file operations and directory management.

### **Mini Minecraft**

---

UPenn CIS graduate level class final project

**Background**: UPenn level built a minecraft-style 3D game that leverages the GLSL shader engine in C.

**Key Responsibilities:**

* Registered keyboard presses to update player positions based on player physics, implemented player physics, collision, ground mode, and gravity by using ray marching calculations
* Built texture generation and animation pipelines by loading in a UV coordinate file and registered each block to different coordinates, differentiated between opaque and transparent blocks, made textures animate over time relative to a time function.
* Synthesized GUI, crafting, and inventory logic that lets players collect blocks and craft new blocks based on a predefined recipe


<!-- ### **Steerable Needle Keypoint Detection and ROS Integration**

---

[Video coming soon]

**Background**: Steerable needles offer a minimally invasive method to deliver treatment to hard-to-reach tissue regions. 

**Key Responsibilities**:

* Data collection
* Built a machine learning model for keypoint detection
* ROS integration

### **PennCloud**

UPenn graduate level course project (CIS 5050 Software Systems) building a full-fledged cloud server

---

[Video coming soon]

Background: built a kernel and scheduler that interacts with file system

**Key Responsibilities**:

* Backend KV store
* Orchestrator -->
