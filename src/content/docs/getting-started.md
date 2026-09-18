---
title: Getting Started
subtitle: Copy AIDDbot in, then pick the outcome you need
description: Install AIDDbot with one command, prepare your repository, deliver one change, and review quality with Architect, Builder, and Craftsman.
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

**AIDDbot** is a set of Agent Skills for AI-Driven Development. One command copies it into your repo — no package dependency. It works with Cursor, Claude Code, GitHub Copilot, Codex, and other agent harnesses.

You invoke a public **orchestrator**. It composes the workflow and assigns **Architect**, **Builder**, or **Craftsman** where needed.

## 1. Copy AIDDbot into your project

From your project root (Node 18+):

```bash
npx --allow-git=all github:AIDDbot/AIDDbot init
```

That copies `.agents/` and the adapters your editor needs. Existing files stay unchanged unless you pass `--force`. Preview with `--dry-run`.

Full install options live in the [repo getting started guide](https://github.com/AIDDbot/AIDDbot/blob/main/docs/getting-started.md).

---

## 2. Prepare the repository

Run one entrypoint to set the foundation:

```markdown
/architect-solution-foundation
```

On an existing app, Architect documents the projects and working rules. When there is no application source, it first asks what projects you need, scaffolds them, installs their dependencies, and reconciles the main documentation.

---

## 3. Deliver a change

Describe one change in natural language:

```markdown
/build-requested-change riders can rate a trip from 1 to 5 stars
```

The flow writes **one small specification**, pauses for your approval, implements it, verifies acceptance behavior, reviews the changed code, and ships it.

That approval stop is the checkpoint that matters. Add **YOLO** when you want the proposal accepted without a pause.

---

## 4. Review quality

Run the repository's quality review and repair one coherent slice of debt:

```markdown
/craft-lasting-quality
```

Craftsman runs the configured system-wide checks and updates technical-debt records. When eligible debt exists, Architect selects one coherent group and the same delivery flow ships the repair.

---

## Whats next?

The usual loop after the repository is prepared:

1. `/build-requested-change` — one spec, implement, prove, ship
2. `/craft-lasting-quality` — system review, then one selected repair

**Next:** [Workflow](/workflow/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
