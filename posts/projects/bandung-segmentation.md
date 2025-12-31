---
title: Semantic Segmentation for Urban Scene Understanding in Bandung, Indonesia
slug: bandung-segmentation
type: project
order: 2
hook: End-to-end urban scene segmentation pipeline optimized for Southeast Asian cities with complex road conditions.
problem: Existing pipelines fail to generalize to regions with high traffic variability and informal infrastructure
contribution: Custom data collection, extensible segmentation pipeline with DeepLabV3+
result: End-to-end semantic segmentation pipeline, accepted to IEEE International Conference on Data and Software Engineering 2022
year: 2022
role: Co-author
context: Research Project
team: Daniel Alexander, Hans Christian Kurniawan, Irfin Afifudin, Hery Heryanto
technologies: TensorFlow, Keras, DeepLabV3+, Python
status: Accepted to IEEE ICDSE 2022
---

**Daniel Alexander**, Hans Christian Kurniawan, Irfin Afifudin, Hery Heryanto

Accepted to the IEEE International Conference on Data and Software Engineering 2022

![Bandung segmentation demo](/bandung.gif)

**Background:** Urban scene analysis often struggles with scalability and extensibility to new patterns typically represented by the complex and irregular road conditions common in Southeast Asian cities.  While many existing semantic segmentation pipelines have been optimized for structured environments like those in European and American cities, they fail to generalize well to regions with high traffic variability, informal infrastructure, and non-standard road markings typical of Indonesia. This project addresses that limitation by building an end-to-end urban scene segmentation pipeline encompassing data collection, preprocessing, model training, evaluation, and deployment.

**Key Responsibilities:**

* **Data collection**: Designed and executed a full data collection pipeline: video capture from urban driving routes, frame extraction, and custom pixel annotation into different categories.
* **Code design and model building:** Invented an extensible segmentation pipeline from scratch using TensorFlow and Keras, utilized state-of-the-art model DeepLabV3+, performed hyperparameter tuning to ensure scalability across different model depths and filter configurations.
* **Experimentation:** Conducted systematic experiments under different environments and model configurations, performed quantitative and qualitative analysis and verified the correctness of the output based on the theoretical hypotheses.
* **Technical writing:** Authored detailed documentation of around 150 pages, detailing the system design, methodology, and experiment outcomes
