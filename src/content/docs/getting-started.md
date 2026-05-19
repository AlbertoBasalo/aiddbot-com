---
title: Getting Started
subtitle: Add AIDDbot to your repo in two steps
description: Install AIDDbot agent skills into your project, initialize your environment, and choose the greenfield or brownfield path.
slug: getting-started
order: 1
toc:
  - label: Install
    anchor: step-1--clone-into-your-project
  - label: Initialize
    anchor: step-2--initialize-your-environment
  - label: Choose your path
    anchor: greenfield-vs-brownfield
  - label: First feature
    anchor: build-your-first-feature
---

Skills are plain markdown files — no package to install, no binary to run. You need a git repository and an AI coding agent that reads project instructions (Cursor, VS Code Copilot, Claude Code, Codex, and others).

## Step 1 — Clone into your project

From inside your destination repository root, clone the AIDDbot repo:

```bash
git clone https://github.com/AIDDbot/AIDDbot AIDDbot-tmp
```

Move the `.agents` folder to your project root and delete the temporary clone:

```bash
# Bash (macOS / Linux / Git Bash)
cp -r AIDDbot-tmp/.agents ./.agents
rm -rf AIDDbot-tmp
```

```powershell
# PowerShell (Windows)
Copy-Item -Path AIDDbot-tmp/.agents -Destination ./.agents -Recurse -Force
Remove-Item -Path AIDDbot-tmp -Recurse -Force
```

Commit the new `.agents` folder so skills travel with your repo.

## Step 2 — Initialize your environment

In your agent chat, run the initialize skill:

```markdown
/initialize this project
> project main instructions
```

This creates or updates `AGENTS.md` with your project paths, stack, and conventions — the entry point for any agent joining the project.

## Greenfield vs brownfield

Choose the path that matches your codebase.

### Greenfield (new project)

If you are starting fresh, `/initialize` is enough. Your agent now has project context and the full skill library under `.agents/skills/`.

### Brownfield (legacy codebase)

For existing codebases, run the architect pipeline after initialize:

```markdown
/initialize → /explore → /extract
```

Then invoke each skill:

```markdown
/explore this codebase
> architecture insights

/extract from this source code
> actual coding conventions
```

`/explore` reverse-engineers architecture into `.product/arch/`. `/extract` captures real coding rules into `.product/rules/` so generated code matches your codebase instead of generic defaults.

## What gets created

| Path | Purpose |
| --- | --- |
| `.agents/skills/` | Skill library (markdown instructions your agent invokes) |
| `AGENTS.md` | Main project instructions — stack, paths, conventions |
| `.product/` | Product artifacts — specs, plans, reports, architecture docs |

Paths like `.product/` are configurable during `/initialize`. See [Workflow](/workflow/) for how artifacts flow through the pipelines.

## Build your first feature

Once initialized, follow the builder pipeline for every new feature:

```markdown
/specify → /planify → /codify → /verify
```

Example prompts:

```markdown
/specify a feature requirement
> formal spec with acceptance criteria

/planify the specification
> clear, ordered implementation plan

/codify the plan
> code on feat/{slug}

/verify the code
> E2E tests that confirm specs are met
```

Review each step before moving on — you stay in control at every checkpoint.

**Next:** [Spec-driven development workflow](/workflow/) · [Skills catalog](/skills/)
