---
title: Spec-Driven Development Workflow
subtitle: How AIDDbot turns requirements into verified software
description: Learn the AIDD philosophy, architect-builder-craftsman pipelines, human checkpoints, and the verify-repair loop.
slug: workflow
order: 2
toc:
  - label: Philosophy
    anchor: the-aidd-philosophy
  - label: Overview
    anchor: end-to-end-workflow
  - label: Architect
    anchor: architect-pipeline
  - label: Build & verify
    anchor: builder-pipeline
  - label: Craft & ship
    anchor: craftsman-pipeline
---

AIDDbot implements **AI-Driven Development (AIDD)** — AI acceleration with software engineering practices that professional teams already trust.

## The AIDD philosophy

Three principles guide every skill and every artifact:

### Spec-driven development

Define the problem precisely before any code is written. Specifications include formal acceptance criteria so agents, engineers, and stakeholders share the same definition of done.

### Rules over tools

Skills, `AGENTS.md`, and conventions you define travel with the repo across IDEs and agents. No vendor lock-in — your rules outlive any single tool.

### Human in the loop

You are the decision-maker. Approve specs, plans, code, and tests. You own what merges.

## End-to-end workflow

```mermaid
flowchart TD
  classDef nd fill:#f8fafc,stroke:#00c4cc,color:#457b9d
  classDef sg fill:#f1f5f9,stroke:#00f2ff,color:#457b9d

  HUM[HUMAN]

  subgraph P["Product folder"]
      SPC["specs/"]:::nd
      PLN["plans/"]:::nd
      RPT["reports/"]:::nd
      ARC["arch/"]:::nd
      RUL["rules/"]:::nd
  end

  subgraph A["Agents"]
      AGT["AGENTS.md"]:::nd
      SKL[".agents/skills/"]:::nd
  end

  subgraph S["Solution"]
      COD["Source Code + Unit Tests"]:::nd
      E2E["E2E Tests"]:::nd
      CHL["CHANGELOG.md"]:::nd
  end

  HUM -->|/initialize| AGT
  HUM -->|/explore| ARC
  HUM -->|/extract| RUL
  HUM -->|/specify| SPC
  AGT -.-> SPC
  AGT -.-> ARC
  RUL -.-> COD
  SPC -->|/planify| PLN
  ARC -.-> PLN
  PLN -->|/codify| COD
  COD -->|/verify| E2E
  E2E -->|failures| RPT
  COD -->|/review| RPT
  RPT -->|/repair| COD
  COD -->|/release| CHL

  class P,A,S sg
```

## Architect pipeline

Set up project context before building features.

### Greenfield

```mermaid
flowchart TD
  HUM[HUMAN]
  AGT["AGENTS.md"]:::nd
  SKL[".agents/skills/"]:::nd

  HUM -->|/initialize| AGT
  AGT --- SKL

  classDef nd fill:#f8fafc,stroke:#00c4cc,color:#457b9d
```

### Brownfield

```mermaid
flowchart TD
  HUM[HUMAN]
  AGT["AGENTS.md"]:::nd
  ARC["arch/"]:::nd
  RUL["rules/"]:::nd

  HUM -->|/initialize| AGT
  HUM -->|/explore| ARC
  HUM -->|/extract| RUL
  ARC --> RUL

  classDef nd fill:#f8fafc,stroke:#00c4cc,color:#457b9d
```

When complete, start features with `/specify`.

## Builder pipeline

Every new feature follows this order:

```mermaid
flowchart TD
  HUM[HUMAN]
  SPC["specs/{slug}.spec.md"]:::nd
  PLN["plans/{slug}.plan.md"]:::nd
  COD[Source Code]:::nd

  HUM -->|/specify| SPC
  SPC -->|/planify| PLN
  PLN -->|/codify| COD

  classDef nd fill:#f8fafc,stroke:#00c4cc,color:#457b9d
```

- `/planify` is recommended for non-trivial work.
- `/codify` creates a `feat/{slug}` branch before writing code.
- Unit tests are produced as part of `/codify`, not as a separate step.

## Verify and repair loop

End-to-end tests confirm specs are actually met — not just that code compiles.

```mermaid
flowchart TD
  HUM[HUMAN]
  SPC["specs/{slug}.spec.md"]:::nd
  COD[Source Code]:::nd
  E2E["E2E Tests"]:::nd
  RPT["reports/{slug}.verify.report.md"]:::nd

  SPC --> COD
  HUM -->|/codify| COD
  COD -->|/verify| E2E
  E2E -->|pass| SPC
  E2E -->|fail| RPT
  RPT -->|/repair| COD
  COD -->|/verify again| E2E

  classDef nd fill:#f8fafc,stroke:#00c4cc,color:#457b9d
```

On failure, `/verify` writes a report under `.product/reports/`. Run `/repair` on that report, then re-run `/verify`. The spec stays `in-progress` until tests pass.

## Craftsman pipeline

After building, improve and ship with confidence.

### Review and repair

```mermaid
flowchart TD
  HUM[HUMAN]
  RPT["reports/{slug}.report.md"]:::nd
  COD[Source Code]:::nd
  VFY["/verify"]:::nd

  HUM -->|/review or failed /verify| RPT
  RPT -->|/repair| COD
  COD --> VFY

  classDef nd fill:#f8fafc,stroke:#00c4cc,color:#457b9d
```

Use `/repair` for findings from `/review` or `/verify`. Review repairs preserve behavior unless fixing a defect; verify repairs may change behavior to meet acceptance criteria.

### Release

Requires specs at `status: verified`. Merge `feat/{slug}` to the default branch, then run `/release` to bump semver, update `CHANGELOG.md`, and mark specs as released.

## Human checkpoints

| Step | You review |
| --- | --- |
| `/specify` | Problem, solution, and acceptance criteria |
| `/planify` | Implementation order and scope |
| `/codify` | Code and unit tests before merge |
| `/verify` | E2E results and failure reports |
| `/review` | Quality feedback before acting |
| `/release` | Version bump and changelog |

**Next:** [Skills catalog](/skills/) · [Getting started](/getting-started/)
