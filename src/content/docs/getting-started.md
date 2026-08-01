---
title: Getting Started
subtitle: Copy the skills in, then run ABC — Architect, Builder, Craftsman
description: Install AIDDbot agent skills and run the three ABC commands — architect-map, builder-ship, and craftsman-refactor.
slug: getting-started
order: 1
toc:
  - label: Install
    anchor: 1-copy-the-agents-into-your-project
  - label: Architect
    anchor: 2-architect--map-the-project
  - label: Builder
    anchor: 3-builder--ship-a-feature
  - label: Craftsman
    anchor: 4-craftsman--refactor-for-drift
  - label: Whats next?
    anchor: whats-next
---

**AIDDbot** is markdown. Nothing to install, no binary, no package — just a folder of instructions your coding agent. It works the same on a greenfield repository and on a legacy one.

The entry points are **ABC**: **A**rchitect, **B**uilder, **C**raftsman.

## 1. Copy the agents into your project

From your **destination repository root** run the following command:

```bash
npx tiged AIDDbot/AIDDbot/.agents .agents
```

Alternatively just copy the `.agents` from [the AIDDbot repo](https://github.com/AIDDbot/AIDDbot) into your project. Either way you will have a set os skills under `.agents/skills/` and convenient commands under `.agents/commands/`.

---

## 2. Architect — map the project

To understand what is there, run the Architect command:

```markdown
/architect-map
```

`/architect-map` starts with `/explore`, which reads the repo tree and _guide files_ and writes agent instructions, system architecture, conceptual model, and an empty PRD. Then runs `/extract` for every **container** (`api`, `web`, `db`, `e2e`, …) from its source and generates a detailed architecture report along with coding rules and data diagrams.

Both ask you to answer closed questions where evidence is missing. When finished you will have a detailed map to verify before the Builder ships anything.

---

## 3. Builder — ship a feature

Any new feature starts with the Builder command and your requirements:

```markdown
/builder-ship my new feature with some requirements
```

This runs `/specify`, which turns that into a one-page spec and **stops for you to read it**. That is the one checkpoint that cannot be delegated: everything downstream is derived from this file.

Once you approve, `/ship-spec` plans, codes, runs the e2e suite, grades quality gates, and releases. The Builder owns the path from approved intent to shipped software.

---

## 4. Craftsman — refactor for drift

No matter how well you build, architecture drift will happen over time. Pay that debt with the Craftsman command:

```markdown
/craftsman-refactor
```

This re-runs `/explore`, compares the new architecture with the one in the `arch/` folder, and produces `arch/drift.report.md`. Then it asks you to pick a defect and hands it to `/ship-spec` — with non-regression first.

Or skip the drift report and bring your own proposal:

```markdown
/craftsman-refactor extract shared validation into one module
```

Either path — detected defect or your proposal — ships through the same `/ship-spec` machine.

---

## Whats next?

Keep the ABC loop going: Architect when context is thin, Builder when you add value, Craftsman when structure drifts. To know more about the commands and skills, check the [workflow](/workflow/) page or [explore the skills catalog](/skills/) to see what else you can do.

**Next:** [Workflow](/workflow/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
