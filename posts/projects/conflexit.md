---
title: ConFLExit — Confidence-Guided Rebatching for Early-Exit LLM Serving
slug: conflexit
type: project
order: 2
label: Master’s Thesis
hook: My master’s thesis on using model-derived confidence as a systems-level scheduling signal for router-aware flushing and dynamic rebatching. ConFLExit improves tail latency while exposing the tradeoff between responsiveness and batching efficiency.
year: 2026
role: Author
context: MSE Thesis, University of Pennsylvania
team: Advised by Prof. Vincent Liu
technologies: Python, PyTorch, CUDA
status: Master’s thesis
---

**Background:** Early-exit LLMs let easier tokens leave the model before the final layer, but in a batched serving system, requests that continue to deeper layers must wait to be regrouped. Deciding *when* to flush a partially filled batch is a scheduling problem: flushing early improves responsiveness, while waiting improves batching efficiency.

**Approach:** ConFLExit treats model-derived confidence as a systems-level scheduling signal, using it to guide router-aware flushing and dynamic rebatching decisions rather than relying on confidence-agnostic batching policies alone.

**Findings:** ConFLExit improves tail latency, and its evaluation characterizes the tradeoff between responsiveness and batching efficiency across workloads.

**Relation to DREX:** ConFLExit builds on the dynamic rebatching setting introduced by [DREX](/projects/drex), focusing on the scheduling signal that decides when rebatching and flushing should occur.
