---
title: Spec-Driven Development Workflow
subtitle: How AIDDbot turns requirements into verified software
description: Learn the AIDD philosophy, architect-builder-craftsman pipelines, and the verify-rectify loop.
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

Set up project context once before building features. There is a single flow — no separate greenfield and brownfield pipelines. Each step is **mode-aware**: prescriptive when you start fresh, descriptive when there is existing code to read.

```markdown
/explore → /extract
```

- **`/explore`** 
→ `AGENTS.md` — product, paths and git rules (C4 L1).
→ `arch/` — system architecture and ADRs (C4 L2).

- **`/extract`** 
→ tier/component architecture and the ER model (C4 L3).
→ `rules/` — coding rules and conventions, one file per tier.

When complete, start features with **`/specify`**.

## Builder pipeline

Every new feature follows this order:

1. Human **`/specify`** → `specs/{slug}.spec.md`
2. **`/planify`** → `plans/{slug}.plan.md`
3. **`/codify`** → source (implementation + unit tests)

- `/planify` is recommended for non-trivial work.
- `/codify` creates a `feat/{slug}` branch before writing code.
- Unit tests are produced as part of `/codify`, not as a separate step.

## Verify and rectify loop

End-to-end tests confirm specs are actually met — not just that code compiles.

1. `specs/{slug}.spec.md` drives implementation → **source**.
2. Human **`/codify`** maintains source; **`/verify`** runs **E2E tests**.
3. **Pass** → loop back to the spec as satisfied for that slice of work.
4. **Fail** → `/verify` updates the spec's Rectify section; **`/rectify`** applies those fixes → source; run **`/verify`** again.

On failure, `/verify` records what to fix in the spec. Run `/rectify` to apply those fixes, then re-run `/verify`. The spec stays `in-progress` until tests pass.

## Quality pipeline

After building, improve and ship with confidence.

### Review

**`/review`** audits accessibility, security, and performance, reporting the findings.

### Refactor

**`/codify`** applies clean-code and DRY improvements without changing behavior, with a detailed commit and test handoff.

### Release

Requires specs at `status: verified`. Merge `feat/{slug}` to the default branch, then run `/release` to bump semver, update `CHANGELOG.md`, and mark specs as released.

**Next:** [Skills catalog](/skills/) · [Getting started](/getting-started/)
