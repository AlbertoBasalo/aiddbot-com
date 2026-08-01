---
title: AIDD Workflow
subtitle: ABC — Architect, Builder, Craftsman. Three roles, one machine.
description: How AIDDbot turns requirements into verified software with Architect, Builder, and Craftsman commands.
slug: workflow
order: 2
toc:
  - label: What holds
    anchor: what-holds-it-together
  - label: ABC
    anchor: abc--three-roles
  - label: Architect
    anchor: architect--map-what-is-there
  - label: Builder
    anchor: builder--ship-a-feature
  - label: Craftsman
    anchor: craftsman--refactor-for-drift
---

AIDDbot implements **AI-Driven Development** — agent acceleration with practices professional teams already trust. The full picture lives in the [repo docs](https://github.com/AIDDbot/AIDDbot/blob/main/docs/AIDD.workflow.md); this page is the short version.

## What holds it together

**The green e2e suite is the contract.** A green test changes only through a plan, which makes a silent behavior change structurally impossible.

**One writer, two evaluators.** `/codify` is the only skill that writes code. `/verify` and `/qualify` only judge and report. Nothing grades its own work.

**Every cycle starts from a spec.** What differs is which ABC role opened the door.

## ABC — three roles

| Role | Command | Job |
| --- | --- | --- |
| **A · Architect** | `/architect-map` | Map what exists before anyone builds |
| **B · Builder** | `/builder-ship` | Spec a change, then ship it through `/ship-spec` |
| **C · Craftsman** | `/craftsman-refactor` | Fix drift or a proposal you bring — both ship through `/ship-spec` |

```mermaid
flowchart LR
  YOU([you 🧑‍💻])
  YOU -->|map what is there| ARC["/architect-map"]
  YOU -->|ship something| BLD["/builder-ship"]
  YOU -->|fix what drifted| CRF["/craftsman-refactor"]
  ARC --> DOC[documentation 📚]
  BLD --> MACH["/ship-spec"]
  CRF --> MACH
  MACH --> REL[released 🚀]
```

Architect first: the other roles read that map. Builder and Craftsman both converge on `/ship-spec`.

## Architect — map what is there

```markdown
/architect-map
```

```mermaid
flowchart LR
  TREE[repo tree + guides] -->|/explore| SYS[agent rules · system architecture · model · PRD]
  SRC[container source] -->|/extract ×container| DET[container architecture ·  container rules · data schemas]
```

- **`/explore`** sees the repo tree and Guide files only — produces the system-level view.
- **`/extract`** reads source, one container at a time — produces that container's detail.

Both apply **evidence wins**: describe what exists, propose a default where nothing does. The Architect role leaves you a verified map — not invented context.

## Builder — ship a feature

```markdown
/builder-ship riders can rate a trip 1 to 5 stars
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

The Builder role owns delivery from approved intent to release.

## Craftsman — refactor for drift

```markdown
/craftsman-refactor
```

Or pass a proposal directly:

```markdown
/craftsman-refactor extract shared validation into one module
```

```mermaid
flowchart LR
  YOU([you 🧑‍💻])
  YOU -->|no args| EXP["/explore → /extract"]
  EXP --> RPT[drift report]
  RPT --> PICK{you pick a defect 🧑‍💻}
  YOU -->|with proposal| PROP[your proposal]
  PICK --> SHIP["/ship-spec"]
  PROP --> SHIP
  SHIP --> MARK[mark result]
  MARK -->|more ❓| PICK
```

Without arguments, Craftsman re-maps like Architect and compares against what those docs expect. With a proposal, it skips straight to shipping. Either path calls `/ship-spec` — with **suite non-regression** as the first criterion.

The Craftsman role keeps structure honest as the product evolves.

## Two kinds of spec

Both are written by `/specify`; the command (or you) names the kind.

| | Functional | Refactor |
| --- | --- | --- |
| From | a requirement | a structural directive |
| Branch | `feat/{spec_key}` | `refactor/{spec_key}` |
| Judged by | `/verify` + e2e suite | `/qualify` gates + `/verify` non-regression |

Status chain: `pending` → `planned` → `in-progress` → `verified` | `failed` → `done`.

**Next:** [Getting started](/getting-started/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
