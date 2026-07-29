---
title: Compatibility
subtitle: Works in the editors and agents you already use
description: AIDDbot skills are plain markdown files that work in Cursor, VS Code, Claude Code, Codex, Copilot, and other AI coding environments.
slug: compatibility
order: 4
---

AIDDbot has no CLI, no package install, and no vendor-specific runtime. Skills are markdown files in `.agents/skills/` that any agent capable of reading project instructions can invoke.

## Supported environments

Try AIDDbot with:

- **Antigravity**
- **Claude Code**
- **Codex**
- **Copilot** (GitHub Copilot, Copilot CLI)
- **Cursor**
- **JetBrains IDEs**
- **OpenCode**
- **VS Code** (with any AI extension)

If your agent reads `AGENTS.md` and files from the repository, it can run AIDDbot skills.

## How skills load

1. You copy `.agents/` into your project root ([Getting Started](/getting-started/)).
2. Your IDE or agent discovers skills from `.agents/skills/` — each skill is a `SKILL.md` file.
3. You invoke **commands** (`/explore-and-extract`, `/spec-feature`, …) or individual skills in chat.
4. Skills read and write artifacts relative to paths defined in `AGENTS.md`.

Because skills are plain markdown:

- They version with your repo.
- They work offline once cloned.
- They are not tied to a single AI provider or editor.

## Rules over tools

Your conventions live in `AGENTS.md` and the rules files the skills write — not inside a proprietary tool config. Switch editors or agents without rewriting your workflow.

**[Get started →](/getting-started/)** · **[GitHub →](https://github.com/AIDDbot/AIDDbot)**
