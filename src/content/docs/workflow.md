---
title: Spec-Driven Development Workflow
subtitle: How AIDDbot turns requirements into verified software
description: Learn the AIDD philosophy, architect-builder-craftsman pipelines, and the verify-repair loop.
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

## Architect pipeline

Set up project context before building features.

### Greenfield

- Human runs **`/initialize`** on **`AGENTS.md`**.
- Keep skills and conventions under **`.agents/skills/`** next to that bootstrap.

### Brownfield

- Human **`/initialize`** → `AGENTS.md`.
- **`/explore`** → `arch/`, then **`/extract`** → `rules/` (architecture informs rules); **`arch/`** → **`rules/`** as you tighten constraints.

When complete, start features with **`/specify`**.

## Builder pipeline

Every new feature follows this order:

1. Human **`/specify`** → `specs/{slug}.spec.md`
2. **`/planify`** → `plans/{slug}.plan.md`
3. **`/codify`** → source (implementation + unit tests)

- `/planify` is recommended for non-trivial work.
- `/codify` creates a `feat/{slug}` branch before writing code.
- Unit tests are produced as part of `/codify`, not as a separate step.

## Verify and repair loop

End-to-end tests confirm specs are actually met — not just that code compiles.

1. `specs/{slug}.spec.md` drives implementation → **source**.
2. Human **`/codify`** maintains source; **`/verify`** runs **E2E tests**.
3. **Pass** → loop back to the spec as satisfied for that slice of work.
4. **Fail** → `reports/{slug}.verify.report.md`; **`/repair`** on that report → source; run **`/verify`** again.

On failure, `/verify` writes a report under `.product/reports/`. Run `/repair` on that report, then re-run `/verify`. The spec stays `in-progress` until tests pass.

## Craftsman pipeline

After building, improve and ship with confidence.

### Review and repair

1. Human opens **`/review`** or handles a failed **`/verify`** → `reports/{slug}.report.md`.
2. **`/repair`** → source, then **`/verify`** again as needed.

Use `/repair` for findings from `/review` or `/verify`. Review repairs preserve behavior unless fixing a defect; verify repairs may change behavior to meet acceptance criteria.

### Release

Requires specs at `status: verified`. Merge `feat/{slug}` to the default branch, then run `/release` to bump semver, update `CHANGELOG.md`, and mark specs as released.

**Next:** [Skills catalog](/skills/) · [Getting started](/getting-started/)
