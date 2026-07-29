---
title: Getting Started
subtitle: Copy the skills in, open a door, stay in control of the spec
description: Install AIDDbot agent skills into your project and run the three doors — explore, build, and re-explore for drift.
slug: getting-started
order: 1
toc:
  - label: Install
    anchor: 1-copy-the-skills-in
  - label: Explore
    anchor: 2-map-the-ground
  - label: Build
    anchor: 3-build-a-feature
  - label: Drift
    anchor: 4-re-explore-for-drift
---

AIDDbot is markdown. Nothing to install, no binary, no package — just a folder of instructions your coding agent reads. It works the same on an empty repository and on a twenty-year-old one.

## 1. Copy the skills in

From your **destination repository root**:

```bash
git clone https://github.com/AIDDbot/AIDDbot AIDDbot-tmp --single-branch --depth 1
```

Copy `.agents` into your project, then delete `AIDDbot-tmp`. You now have nine skills under `.agents/skills/` and five commands under `.agents/commands/`.

---

## 2. Map the ground

To understand what is there:

```markdown
/explore-and-extract
```

`/explore` reads the repo tree and Guide files — never source — and writes agent instructions, container architecture, conceptual model, and an empty PRD. `/extract` then documents each **container** (`api`, `web`, `db`, `e2e`, …) from its source, along with coding rules.

Both ask closed questions where evidence is missing. Answering them is the work — this documentation is every later step's context.

---

## 3. Build a feature

To add something new:

```markdown
/spec-feature my new feature with some requirements
```

`/specify` turns that into a one-page spec and **stops for you to read it**. That is the one checkpoint that cannot be delegated: everything downstream is derived from this file.

Once you approve, `/build-spec` plans, codes, runs the e2e suite, grades quality gates, and releases. Call `/build-spec` directly when a spec already exists. A red test or failed gate loops back to `/codify` on its own. Nothing ships until both are green.

---

## 4. Re-explore for drift

To correct technical drift over time:

```markdown
/explore-and-refactor
```

Same documentation pass as explore, plus a comparison against what those docs already expect. You get `arch/drift.report.md`, pick the top defect, and the command runs `/spec-refactor` on it.

A refactor may change *how* a test reaches its result, never *what* it asserts. If the suite still passes, the product still behaves.

---

## What lands in your repo

`AGENTS.md` at the root, plus folders for architecture, schemas, specs (one folder per feature), and the e2e suite. Paths are yours — `/explore` records the ones you pick.

**Next:** [Workflow](/workflow/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
