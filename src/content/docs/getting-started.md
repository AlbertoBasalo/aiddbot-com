---
title: Getting Started
subtitle: Copy AIDDbot in, then pick the outcome you need
description: Install AIDDbot with one command, prepare your system, deliver one spec, and review quality — with Claude Code, Codex, Cursor, or GitHub Copilot.
slug: getting-started
order: 1
toc:
  - label: Install
    anchor: 1-copy-aiddbot-into-your-project
  - label: Customize
    anchor: 2-customize-your-agents
  - label: Prepare
    anchor: 3-prepare-the-repository
  - label: Deliver
    anchor: 4-deliver-a-change
  - label: Quality
    anchor: 5-review-quality
  - label: Whats next?
    anchor: whats-next
---

**AIDDbot** is a set of Agent Skills for AI-Driven Development. One command copies it into your repo — no package to maintain. It works with Claude Code, Codex, Cursor, and GitHub Copilot.

You invoke a public **orchestrator**. It assigns **Architect**, **Builder**, or **Craftsman** subagents where needed. Slash or `$` — both work. Built for models from 2026 on.

## 0. Copy AIDDbot into your project

From your project root (Node 18+ only to install):

```bash
npx --allow-git=all github:AIDDbot/AIDDbot init
```
Keep current later with:

```bash
npx --allow-git=all github:AIDDbot/AIDDbot update
```
Open your preferred agent chat and start delivering.

---

## 1. Prepare the repository

For any greenfield to star from scratch or a legacy brownfield project to maintain, Architect builds a solid foundation.

```markdown
/architect-system-foundation
```

Rerun whenever the docs should catch up with the code.

---

## 2. Deliver a change

Formally, Builder delivers one feature, fix, or technical change from a natural-language request — one spec, then ship.

```markdown
/build-requested-spec your new feature
```
Add **YOLO** to skip the pause and go for a walk.

---

## 3. Review quality

Your code runs as expected, but it is well-written and ready for the next change?

```markdown
/craft-lasting-quality
```
Know and pay your technical debt.

---

## Whats next?

Every run leaves a readable trail in `.aiddbot/journals/`.

Customize and refine with the [customization guide](https://github.com/AIDDbot/AIDDbot/blob/main/docs/agent-customization.md).

**Next:** [Workflow](/workflow/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
