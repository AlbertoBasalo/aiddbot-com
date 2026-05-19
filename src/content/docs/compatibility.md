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
- **Copilot** (GitHub Copilot, Copilot Composer)
- **Cursor**
- **OpenCode**
- **VS Code** (with AI extensions that load project context)

If your agent reads `AGENTS.md` and files from the repository, it can run AIDDbot skills.

## How skills load

1. You copy `.agents/` into your project root ([Getting Started](/getting-started/)).
2. Your IDE or agent discovers skills from `.agents/skills/` — each skill is a `SKILL.md` file with instructions.
3. You invoke skills in chat (e.g. `/specify`, `/codify`) or let your agent trigger them based on context.
4. Skills read and write artifacts relative to paths defined in `AGENTS.md` (default `.product/` for specs, plans, and reports).

Because skills are plain markdown:

- They version with your repo.
- They work offline once cloned.
- They are not tied to a single AI provider or editor.

## Rules over tools

Your conventions live in `AGENTS.md` and `.product/rules/`, not inside a proprietary tool config. Switch editors or agents without rewriting your workflow — the spec-driven pipeline stays the same.

## Getting started

Ready to add AIDDbot to a project?

**[Get started →](/getting-started/)**

Or browse the full skill list on the [Skills](/skills/) page.
