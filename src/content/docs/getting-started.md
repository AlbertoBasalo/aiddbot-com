---
title: Getting Started
subtitle: Copy AIDDbot in, then pick the outcome you need
description: Install AIDDbot with one command, prepare your repository, deliver one spec, and review quality with Architect, Builder, and Craftsman.
slug: getting-started
order: 1
toc:
  - label: Install
    anchor: 1-copy-aiddbot-into-your-project
  - label: Prepare
    anchor: 2-prepare-the-repository
  - label: Deliver
    anchor: 3-deliver-a-change
  - label: Quality
    anchor: 4-review-quality
  - label: Whats next?
    anchor: whats-next
---

**AIDDbot** is a set of Agent Skills for AI-Driven Development. One command copies it into your repo — no package dependency. It works with Claude Code, Codex, Cursor, GitHub Copilot, and other agent harnesses.

You invoke a public **orchestrator**. It composes the workflow and assigns **Architect**, **Builder**, or **Craftsman** where needed.

## 1. Copy AIDDbot into your project

From your project root (Node 18+):

```bash
npx --allow-git=all github:AIDDbot/AIDDbot init
```

That copies `.agents/` and the adapters your harness needs. Existing files stay unchanged unless you pass `--force`. Later, `update` keeps skills and adapters current.

`init` also sets up a small `.aiddbot/` folder:

- **counters.yaml** — permanent IDs for specs, features, tests, and debt. Your project state; `update` never touches it.
- **efforts.yaml** — a portable `low` / `medium` / `high` effort policy, so each delegated agent runs on the right model for your harness.

Full install options live in the [repo getting started guide](https://github.com/AIDDbot/AIDDbot/blob/main/docs/getting-started.md).

---

## 2. Prepare the repository

Run one entrypoint to set the foundation:

```markdown
/architect-system-foundation
```

On an existing app, Architect documents the projects, schemas, and working rules. When there is no application source, it first asks what projects you need, scaffolds them, installs their dependencies, and then documents them.

Rerun it whenever the docs should catch up with the code.

---

## 3. Deliver a change

Describe one change in natural language:

```markdown
/build-requested-spec riders can rate a trip from 1 to 5 stars
```

The flow writes **one small specification**, pauses for your approval, implements it, verifies acceptance behavior, reviews the changed code, and ships it.

That approval stop is the checkpoint that matters. Add **YOLO** when you want the proposal accepted without a pause.

---

## 4. Review quality

Inspect the repository's quality and repair one coherent slice of debt:

```markdown
/craft-lasting-quality
```

Craftsman runs the configured system-wide checks and updates technical-debt records. When eligible debt exists, Architect selects one coherent group and the same delivery flow ships the repair.

---

## Whats next?

The usual loop after the repository is prepared:

1. `/build-requested-spec` — one spec, implement, prove, ship
2. `/craft-lasting-quality` — system review, then one selected repair
3. `/architect-system-foundation` — rerun to resync docs with the code

Every run leaves a readable trail in `.aiddbot/journals/`, one log per day.

**Next:** [Workflow](/workflow/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
