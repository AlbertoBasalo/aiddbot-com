---
title: Compatibility
subtitle: Plain markdown. Any agent.
description: AIDDbot works with major IDEs and agent harnesses — no CLI, no package install, just copy the skills folder.
slug: compatibility
order: 3
toc:
  - label: How it works
    anchor: how-it-works
  - label: IDEs
    anchor: ides
  - label: Agent harnesses
    anchor: agent-harnesses
---

AIDDbot is a folder of markdown skills and commands. Your editor or agent reads them from the repo — nothing to install globally, no binary, no npm package.

## How it works

Copy `.agents` into your project root (see [Getting started](/getting-started/)). From there, any tool that loads project context can invoke the skills:

- **Skills** live under `.agents/skills/` — instructions the agent follows for explore, specify, codify, and the rest of the workflow.
- **Commands** live under `.agents/commands/` — slash-style entry points like `/explore-and-extract` or `/spec-feature`.

Because everything is plain markdown, compatibility is about *where* your agent runs, not a proprietary SDK.

## IDEs

These editors load instructions and repo context from the workspace:

| Editor | Notes |
| --- | --- |
| **Cursor** | Skills and rules from `.agents/` and `AGENTS.md` |
| **VS Code** | Copilot and other extensions that read project files |
| **JetBrains** | AI assistants tied to the open project |
| **Antigravity** | Agent workflows over the repo tree |

If your IDE can see the repo, it can run AIDDbot.

## Agent harnesses

These harnesses read or invoke skills directly:

| Harness | Notes |
| --- | --- |
| **Claude Code** | Reads `AGENTS.md` and skill files from the tree |
| **Codex** | Works from project context and command markdown |
| **GitHub Copilot** | Composer and agent modes use repo instructions |
| **OpenCode** | CLI and IDE flows over the same skill layout |

The workflow is identical across harnesses: explore → spec → build → verify. Only the invocation surface differs.

**Next:** [Getting started](/getting-started/) · [Workflow](/workflow/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
