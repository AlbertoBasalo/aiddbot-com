---
title: AIDD Workflow
subtitle: One request becomes a spec, then a version you can trust.
description: The short AIDDbot loop — four commands, three agents, and where to read the full workflow.
slug: workflow
order: 2
---

You start one command. AIDDbot writes a spec, builds the change, checks it, and ships a version. This page is that loop. The rules in full are in the repository: [How it works](https://github.com/AIDDbot/AIDDbot/blob/main/docs/how-it-works.md) and the [AIDD workflow](https://github.com/AIDDbot/AIDDbot/blob/main/docs/AIDD.workflow.md).

## The idea

Each change starts as a small spec. You approve it before the code starts. Each requirement has a test. The change ships when those tests pass, or with the failures recorded as debt.

The models design, write, and review. A small program runs the tests and keeps the evidence. That work is more reliable, faster, and cheaper than asking a model to grade itself.

## Four commands

| Need | Command |
| --- | --- |
| Start a new system, or document an existing one | `/architect-initial-foundation` |
| Define a change now, build it later | `/architect-requested-spec your request` |
| Deliver one change | `/build-requested-spec your request` |
| Repair technical debt | `/craft-lasting-quality` |

In Codex, use `$` instead of `/`.

```mermaid
flowchart LR
  A[Prepare] --> B[Deliver a change]
  D[Draft] --> B
  C[Repair debt] --> B
  B --> V[New version]
```

## Three agents

| Agent | Work |
| --- | --- |
| **Architect** | Designs the system and writes the specs |
| **Builder** | Writes the code and the tests |
| **Craftsman** | Proves the spec, reviews the code, and ships |

A different agent checks the work. The Craftsman is never the Builder.

## One change

1. You describe the change in plain language — or point at a draft you already approved.
2. The Architect writes one spec and waits for you. Add `YOLO` to skip that pause. One spec is open at a time. A draft is not a spec, so you can write as many as you need.
3. The Builder writes the code and the tests.
4. The Craftsman runs the tests, reviews the change, and ships a version.

**Next:** [Getting started](/getting-started/) · [How it works](https://github.com/AIDDbot/AIDDbot/blob/main/docs/how-it-works.md) · [GitHub](https://github.com/AIDDbot/AIDDbot)
