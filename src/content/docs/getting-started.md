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
  - label: Build
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
```

This creates or updates `AGENTS.md` with your project paths, stack, and conventions — the entry point for any agent joining the project.

### Greenfield vs brownfield

Choose the path that matches your codebase.

#### Greenfield (starting fresh)

If you are starting fresh, `/initialize` is enough. Your agent now has project context and the full skill library under `.agents/skills/`.

#### Brownfield (legacy codebase)

For existing codebases, run the architect pipeline after initialize:

```markdown
/initialize → /explore → /extract
```

`/explore` reverse-engineers architecture into `.product/arch/` 

`/extract` captures real coding rules into `.product/rules/` 

#### What gets created

| Path | Purpose |
| --- | --- |
| `.agents/skills/` | Skill library (markdown instructions your agent invokes) |
| `AGENTS.md` | Main project instructions — stack, paths, conventions |
| `.product/arch/` | Architecture documentation |
| `.product/rules/` | Coding rules and conventions |


## Build your first feature

Once initialized, follow the builder pipeline for every new feature:

```markdown
/specify → /planify → /codify 
```

### Verify and repair loop

End-to-end tests confirm specs are actually met — not just that code compiles.

```markdown
/verify -> /repair? (optional) -> /verify
```
### Review and repair

A stack of checks to ensure the code quality, and report any issues.

```markdown
/review -> /repair? (optional) -> /review
```

### Release

Release the code to the production environment. Bump the version and update the changelog.

```markdown
/release
```

Review each step before moving on — you stay in control at every checkpoint.

**Next:** [Skills catalog](/skills/)