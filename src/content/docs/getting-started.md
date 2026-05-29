---
title: Getting Started
subtitle: Add AIDDbot to your repo in three simple steps
description: Install AIDDbot agent skills into your project, establish your environment, and run the mode-aware architecture flow.
slug: getting-started
order: 1
toc:
  - label: 1. Install
    anchor: step-1--clone-into-your-project
  - label: 2. Establish
    anchor: step-2--establish-your-environment
  - label: 3. Build
    anchor: step-3--build-your-first-feature
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

---

## Step 2 — Establish your environment

Run the architect skills once to set up your project context. There is a single flow — no separate greenfield and brownfield paths. Each step is **mode-aware**: prescriptive when you start fresh, descriptive when there is existing code to read.

```markdown
/establish → /explore → /elaborate → /extract
```

For UI work, `/envision` optionally authors a `DESIGN.md` per surface that `/codify` later implements.

#### What gets created

| Path | Purpose |
| --- | --- |
| `AGENTS.md` | Main project instructions — stack, paths, conventions |
| `SOUL.md` | Assistant soul — expertise, personality and git rules |
| `.product/arch/` | Architecture documentation (C4 levels and ADRs) |
| `.agents/rules/` | Coding rules and conventions, one file per tier |

---

## Step 3 — Build your first feature

Once established, follow the builder pipeline with checkpoints for every new feature:

```markdown
/specify → /planify → /codify 
```

#### Verify functionality loop

End-to-end tests confirm specs are actually met — not just that code compiles. If the tests fail, you can run the rectify skill to fix the issues and then run the verify skill again.

```markdown
/verify -> /rectify? (optional) -> /verify
```
#### Craftsman pipeline for a better codebase

Seek for defects and opportunities for improvement in the codebase. Then document and release like a boss.

```markdown
/review -> /refactor -> /release
```

> Check and approve each step before moving on. You stay in control at every checkpoint.
>
> Human in the loop!

---

**Next:** [Skills catalog](/skills/) 