---
title: DREX — Dynamic Rebatching for Early-Exit LLM Inference
slug: drex
type: project
order: 1
label: Preprint
hook: A serving system that dynamically reorganizes requests at each model exit point to improve batching efficiency, and handles the KV-cache state skipped layers leave behind with memory-efficient state copying. I contributed to scheduling and system implementation, experimental evaluation, and technical communication.
thumbnail: /drex/diagram.png
problem: KV-cache blow-up + poor batching with early exits
contribution: Exit-aware rebatching + batch-wise KV copy
result: 2–12% throughput improvement over baseline approaches while maintaining output quality
year: 2025
role: Co-author
context: Distributed Systems Lab, University of Pennsylvania
team: Xuting Liu, Daniel Alexander, Siva Kesava Reddy Kakarla, Behnaz Arzani, Vincent Liu
technologies: Python, PyTorch, CUDA, Sarathi Framework
status: Preprint, under revision
links: Paper|https://arxiv.org/abs/2512.15705
---

![DREX System Architecture](/drex/diagram.png)

Xuting Liu, **Daniel Alexander**, Siva Kesava Reddy Kakarla, Behnaz Arzani, Vincent Liu · Preprint, under revision · [arXiv:2512.15705](https://arxiv.org/abs/2512.15705)

### The System

Early-Exit (EE) LLMs accelerate inference by generating easier tokens with only a subset of the model's layers. Traditional batching frameworks are ill-suited to this, because not all requests in a batch are ready to exit at the same time. Existing solutions either force a uniform decision on the whole batch, which overlooks early-exit opportunities, or force premature exits, which degrades output quality.

DREX introduces *Dynamic Rebatching*: at each early-exit point, requests that meet the exit criteria are processed immediately, while those that continue are buffered, regrouped into a new batch, and forwarded to deeper layers. DREX implements this with two key optimizations: a copy-free rebatching buffer that avoids physical data movement, and an EE- and SLA-aware scheduler that analytically predicts whether a given rebatching operation will be profitable. It also handles the KV cache missing from skipped layers with memory-efficient state copying. DREX improves throughput by 2–12% over baseline approaches while maintaining output quality, and completely eliminates involuntary exits.

### My Contributions

* **System implementation**: contributed to the design and implementation of dynamic rebatching on the Sarathi serving framework, implemented an efficient batch-wise KV-cache copying mechanism, and implemented BERTScore as an output-quality metric.
* **Experimental evaluation**: extended the experimental suite to NVIDIA A100, H200, RTX 3090 Ti, and RTX 5090 GPUs running Llama 2 7B, 13B, and 70B and Qwen 14B models, and introduced new workloads, including HumanEval for code generation and XSum for abstractive summarization.
* **Technical communication**: contributed to the paper's writing, generated key experimental figures in PGFPlots (throughput vs. confidence threshold, early-exit proportion breakdowns, and memory efficiency), and adapted design figures to TikZ.
