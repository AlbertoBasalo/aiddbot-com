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

**AIDDbot** is a set of Agent Skills for AI-Driven Development. One command copies it into your repo — no package to maintain. It works with Claude Code, Codex, Cursor, GitHub Copilot, and other agent harnesses.

You invoke a public **orchestrator**. It assigns **Architect**, **Builder**, or **Craftsman** where needed. Slash or `$` — both work.

## 1. Copy AIDDbot into your project

From your project root (Node 18+):

```bash
npx --allow-git=all github:AIDDbot/AIDDbot init
```

That seeds skills, harness adapters, and a small workspace so delivery can start. Your existing files stay put unless you pass `--force`.

Keep current later with:

```bash
npx --allow-git=all github:AIDDbot/AIDDbot update
```

`update` refreshes AIDDbot without wiping the product records it already created.

---

## 2. Customize your agents

Pick models and reasoning effort in **the editor you already use** — Claude Code, Codex, Copilot, or Cursor. AIDDbot ships sensible defaults; your local harness files are where you tune them.

`update` keeps your edits. Details live in the [customization guide](https://github.com/AIDDbot/AIDDbot/blob/main/docs/agent-customization.md).

---

## 3. Prepare the repository

```markdown
/architect-system-foundation
```

On an existing app, Architect maps what is there. On an empty repo, it asks what you need, scaffolds it, and then documents it.

Rerun whenever the docs should catch up with the code.

---

## 4. Deliver a change

```markdown
/build-requested-spec riders can rate a trip from 1 to 5 stars
```

One small spec. You approve it — that is the checkpoint that matters — then the loop implements, proves, and ships. Add **YOLO** to skip the pause.

---

## 5. Review quality

```markdown
/craft-lasting-quality
```

A deeper quality pass. When there is eligible debt, one coherent repair ships through the same delivery flow.

---

## Whats next?

1. `/build-requested-spec` — one spec, then ship
2. `/craft-lasting-quality` — review, then one selected repair
3. `/architect-system-foundation` — resync docs with the code

Every run leaves a readable trail in `.aiddbot/journals/`.

**Next:** [Workflow](/workflow/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
