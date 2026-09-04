---
title: Getting Started
subtitle: Copy AIDDbot in, then walk the delivery loop
description: Install AIDDbot with one command, establish your solution, and deliver requirements with Architect, Builder, and Craftsman.
slug: getting-started
order: 1
toc:
  - label: Install
    anchor: 1-copy-aiddbot-into-your-project
  - label: Establish
    anchor: 2-establish-your-solution
  - label: Deliver
    anchor: 3-deliver-a-requirement
  - label: Improve
    anchor: 4-improve-what-you-already-ship
  - label: Whats next?
    anchor: whats-next
---

**AIDDbot** is markdown for AI-Driven Development. One command copies it into your repo — no package dependency. It works with Cursor, Claude Code, GitHub Copilot, Codex, and other agent harnesses.

You invoke a public **orchestrator**. It composes the workflow and spawns **Architect**, **Builder**, or **Craftsman** where needed.

## 1. Copy AIDDbot into your project

From your project root (Node 18+):

```bash
npx --allow-git=all github:AIDDbot/AIDDbot init
```

That copies `.agents/` and the adapters your editor needs. Existing files are left alone. Preview with `--dry-run`; replace differing files with `--force`.

Full install options live in the [repo getting started guide](https://github.com/AIDDbot/AIDDbot/blob/main/docs/getting-started.md).

---

## 2. Establish your solution

Run one entrypoint to set the foundation:

```markdown
/architect-solution-foundation
```

On an existing app, Architect maps what is there. On an empty or docs-only repo, it designs first and scaffolds when you confirm. You approve the route when the choice is unclear.

---

## 3. Deliver a requirement

Describe what you need:

```markdown
/build-requested-change riders can rate a trip 1 to 5 stars
```

Architect scopes the work into one or more specifications. You review problem, outcomes, and acceptance criteria when the workflow stops — that is your main checkpoint.

After approval, delivery plans, codes, verifies, qualifies, and ships. No extra slash command is required. Include **YOLO** in the prompt if you want to skip approval stops.

---

## 4. Improve what you already ship

Turn durable quality findings into a reviewed remediation:

```markdown
/craft-lasting-quality
```

Craft gathers evidence, consolidates findings, and — after you accept the scope — fixes, verifies, qualifies, and ships a behavior-preserving patch. Include YOLO to skip the remediation checkpoint.

---

## Whats next?

The usual loop after establishment:

1. `/build-requested-change` — scope, specify, implement, verify, qualify, and ship
2. `/craft-lasting-quality` — optional evidence-backed remediation

**Next:** [Workflow](/workflow/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
