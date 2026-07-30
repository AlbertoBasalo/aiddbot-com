---
title: AIDD Workflow
subtitle: Three doors, one machine — explore, build, re-explore
description: How AIDDbot turns requirements into verified software with explore, feature, and refactor doors.
slug: workflow
order: 2
toc:
  - label: What holds
    anchor: what-holds-it-together
  - label: Three doors
    anchor: the-three-doors
  - label: Explore
    anchor: understanding-what-is-there
  - label: Build
    anchor: building-a-feature
  - label: Drift
    anchor: re-exploring-for-drift
---

AIDDbot implements **AI-Driven Development** — agent acceleration with practices professional teams already trust. The full picture lives in the [repo docs](https://github.com/AIDDbot/AIDDbot/blob/main/docs/AIDD.workflow.md); this page is the short version.

## What holds it together

**The green e2e suite is the contract.** A green test changes only through a plan, which makes a silent behavior change structurally impossible.

**One writer, two evaluators.** `/codify` is the only skill that writes code. `/verify` and `/qualify` only judge and report. Nothing grades its own work.

**Every cycle starts from a spec.** What differs is which door it came through.

## The three doors

```mermaid
flowchart LR
  YOU([you 🧑‍💻])
  YOU -->|what is there?| EXP["/explore-and-extract"]
  YOU -->|add something| FEA["/spec-feature"]
  YOU -->|what drifted?| DRF["/explore-and-refactor"]
  EXP --> DOC[documentation 📚]
  FEA --> BLD["/build-spec"]
  DRF --> BLD
  BLD --> REL[released 🚀]
```

Documentation first: the other doors read it. Feature and refactor both converge on the same build machine.

## Understanding what is there

```markdown
/explore-and-extract
```

```mermaid
flowchart LR
  TREE[repo tree + guides] -->|/explore| SYS[agent rules · system architecture · model · PRD]
  SRC[container source] -->|/extract ×container| DET[container architecture ·  container rules · data schemas]
```

- **`/explore`** sees the repo tree and Guide files only — produces the system-level view.
- **`/extract`** reads source, one container at a time — produces that container's detail.

Both apply **evidence wins**: describe what exists, propose a default where nothing does.

## Building a feature

```markdown
/spec-feature riders can rate a trip 1 to 5 stars
```

```mermaid
flowchart LR
  SPEC["/specify"] --> CHK{you read it 🧑‍💻}
  CHK --> PLAN["/planify"]
  PLAN --> CODE["/codify"]
  CODE --> VER["/verify❓"]
  VER -->|⛔| CODE
  VER -->|✅| QLF["/qualify❓"]
  QLF -->|⛔| CODE
  QLF -->|✅| REL["/release 🚀"]
```

1. **`/specify`** writes the spec — problem, outcomes, numbered acceptance criteria.
2. **You read it** — the one manual checkpoint.
3. Loops close on red tests or failed gates via `/codify`. Nothing ships until both are green.

## Re-exploring for drift

```markdown
/explore-and-refactor
```

```mermaid
flowchart LR
  EXP["/explore → /extract"] --> RPT[drift report]
  RPT --> PICK{you pick a defect 🧑‍💻}
  PICK --> REF["/spec-refactor"]
  REF --> MARK[mark result]
  MARK -->|more ❓| PICK
```

Same documentation pass as explore, plus a comparison against what those docs expect. `/spec-refactor` runs the same build machine underneath — with **suite non-regression** as the first criterion.

## Two kinds of spec

Both are written by `/specify`; the command (or you) names the kind.

| | Functional | Refactor |
| --- | --- | --- |
| From | a requirement | a structural directive |
| Branch | `feat/{spec_key}` | `refactor/{spec_key}` |
| Judged by | `/verify` + e2e suite | `/qualify` gates + `/verify` non-regression |

Status chain: `pending` → `planned` → `in-progress` → `verified` | `failed` → `done`.

**Next:** [Getting started](/getting-started/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
