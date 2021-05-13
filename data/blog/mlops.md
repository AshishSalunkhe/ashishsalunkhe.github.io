---
title: MLOps - Machine Learning meets DevOps 
date: '2021-05-13'
tags: ['Machine Learning', 'DevOps', 'MLOps']
draft: false
summary: A blog on MLOps and how DevOps principles are applied to ML systems (MLOps).
---

# Production ML Systems

There's a lot more to machine learning. Implementation of an ML algorithm is just the tip of the iceberg. Machine learning systems are a part of a much larger ecosystem. Creating a well-performing machine learning model is just a small aspect of real-world machine learning solutions.

![mlsystems](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m9ralgaf6y69w4xht8xd.png)
Image Source: [ML Crash Course by Google] (https://developers.google.com/machine-learning/crash-course/production-ml-systems)

### Scenario and the Challenge

Let's say you are on the verge of signing the first customer for your startup. Your start-up has an amazing team of ML Engineers, Data Analysts, Data Scientists. They have been successful in creating state-of-the-art models with unprecedented results and metrics. 

The real problem here that arises is its deployment at the production level. In the [2020 State of Enterprise Report] (https://info.algorithmia.com/hubfs/2019/Whitepapers/The-State-of-Enterprise-ML-2020/Algorithmia_2020_State_of_Enterprise_ML.pdf?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8dfpb_B2Fa0nNTtRa6cO2tl5CysdXFLGpPo6KYPnp5gFRXGXy8TLlKoGcIXlVFsUTb1E_s), based on a survey of nearly 750 domain experts and practitioners in Machine Learning, had the following conclusions:


1. There was an increase in spending on AI by more than 2/3rds of the subgroups that were interviewed about their budget.
2. 43% of respondents cited difficulty in scaling their ML projects as to 30% in the previous year.
3. Half of the respondents deploy their systems between a week and 3 months, while 18 percent require more than 3 months.

Machine Learning is evolving swiftly, growing into new sectors and industries yet building projects at scale is difficult. This marks a huge gap between models generated through scripts, notebooks, and their deployment in a production system at scale. 

### Traditional Software Engineering approaches v/s MLOps Trade-off

As MLOps corresponds to DevOps for ML, there are challenges needed to be addressed.

As highlighted by Arnab Bose, and Aditya Aggarwal in their [blog](https://www.kdnuggets.com/2020/12/mlops-why-required-what-is.html), an example of such challenge is the role of data. There are two different Software paradigms involved in traditional software engineering and machine learning - software developers have well-defined logic and code for their software programs whereas data scientists follow a parameterized problem-solving coding approach. These parameters depend on data which vary with changes in data thus altering the entire code behavior. Therefore, another aspect of data and its irregular variation causes difficulties in tracking a well-defined software.

List of challenges that make it difficult to deploy ML models to production:
* Data Management
 * Huge Datasets
 * Dataset Tracking
 * Data Privacy
* Trial and Error and Iterative Development
 * Tracking changes: Hyper-parameter tuning, code changes, architecture changes
 * Code Quality: Production-ready code, code optimizations
 * Model Evaluation
 * Training, Inference, and Retraining
 * Testing
* Production Deployment
 * Monitoring
 * Cloud / On-premise - batch and real-time predictions
 * Infrastructure Requirements
* Security

Shout out to [Andrej Karpathy](https://twitter.com/karpathy) for the wonderful blog emphasizing Software 2.0 and the ongoing transition into the 2.0 stack.
{% medium https://medium.com/@karpathy/software-2-0-a64152b37c35 %}

#### How does an MLOps Life Cycle look like?

1. Data Engineering and Management
2. Training / Modeling (Machine Learning Pipeline)
3. Continuous Deployment
4. Monitoring


At first, one needs to define a business problem and translate it into objectives that can be addressed through machine learning solutions. 
Second, there should be a focus on collaboration between data engineers and data scientists to explore, create and manage dataset(s) for modeling.
Third, designing a pipeline comprising of operations like Model Training, Model Evaluation, Model Testing, and Model Packaging to be integrated with CI/CD for experimentation, tracking, validation, and testing.
Fourth, seamless deployment into production server - cloud, on-premise, or hybrid.
Finally, monitoring both model and computing resources (infrastructure) and their management. Key Performance Indicators (KPIs) help monitor the changes. 

![mlops](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ujx0p6369qtmp1ex2snk.png)

Thus, the aim is to provide an end-to-end machine learning pipeline for designing, building and managing reproduciable ML Software alongside test-driven development.