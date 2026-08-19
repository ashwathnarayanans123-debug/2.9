# Vibe Coding vs AI Pair Programming

## Task Manager App

This project compares two different approaches to building the same Task Manager application:

* **Vibe Coding:** Lovable
* **AI Pair Programming:** Cursor

Both versions implement the same required features.

## Features

* Add a task with a title
* Mark a task as completed
* Filter tasks by:

  * All
  * Active
  * Completed
* Clean and usable user interface

## Repository Structure

```text
vibe-vs-pair-task-manager/
├── vibe-version/
├── pair-version/
└── README.md
```

## Live Deployments

* **Vibe Version:** https://task-joy-22.lovable.app
* **Pair Version:** https://29-deploy-temp.vercel.app/

## Comparison Table

| Dimension      | Vibe Version — Lovable                                                                                                                     | Pair Version — Cursor                                                                                       | Verdict  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | -------- |
| Speed          | Generated the complete Task Manager quickly from a natural-language prompt. Build time: **[enter actual time]**                            | Built step by step with AI assistance. Build time: **[enter actual time]**                                  | **Vibe** |
| Control        | Lovable generated the application structure and implementation automatically, giving less direct control over individual coding decisions. | I controlled the component structure and implementation while using Cursor for coding assistance.           | **Pair** |
| Code Quality   | The generated application provided a working implementation, but I needed to understand the generated structure before making changes.     | The code was developed step by step, making the structure easier to understand and maintain.                | **Pair** |
| Explainability | Some generated implementation details required additional time to understand.                                                              | I had more understanding of the code because I made the implementation decisions while using AI assistance. | **Pair** |
| Editability    | Changes may require understanding how the generated components and logic are connected.                                                    | Individual parts can be modified more directly because the implementation was built step by step.           | **Pair** |

## Build Observations

### Vibe Version

**Tool:** Lovable

**Build time:** [enter actual time]

**Files generated:** [enter actual number]

**Observation:**

Lovable generated a working Task Manager application from a natural-language description. The main advantage was the speed of getting a working interface and functionality.

### Pair Version

**Tool:** Cursor

**Build time:** [enter actual time]

**Files created/changed:** [enter actual number]

**Observation:**

Cursor was used as an AI pair-programming assistant. The application was built step by step, allowing me to make decisions about the structure and implementation while receiving AI assistance.

## When I Would Use Each Tool

### Vibe Coding Tool

I would use a vibe coding tool such as Lovable when I need to create a prototype quickly, explore an idea, or demonstrate a concept in a short amount of time.

### AI Pair Programming

I would use an AI pair-programming tool such as Cursor when building a project that needs to be understood, maintained, debugged, and modified over time. The pair-programming approach provides more control over the implementation.

## Conclusion

Both approaches can produce a working application, but they optimize for different things.

The **Vibe Coding approach** is stronger for speed and rapid prototyping, while the **AI Pair Programming approach** provides greater control, explainability, and editability.

For a quick prototype, I would choose **Lovable**. For a project that I expect to maintain and modify, I would choose **Cursor**.

## Submission

This repository contains both the Vibe Coding and AI Pair Programming implementations of the Task Manager application.
