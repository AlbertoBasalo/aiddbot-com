---
title: Getting Started
subtitle: Add AIDDbot to your repo in three simple steps
description: Install AIDDbot agent skills into your project, initialize your environment, and choose the greenfield or brownfield path.
slug: getting-started
order: 1
toc:
  - label: 1. Install
    anchor: step-1--clone-into-your-project
  - label: 2. Initialize
    anchor: step-2--initialize-your-environment
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

## Step 2 — Initialize your environment

Choose the path that matches your codebase and run the initialize skill in your agent chat.

#### Greenfield (starting fresh)

If you are building a new project from scratch, run the initialize skill to establish the project context and then explore the architecture your are about to build.

```markdown
/initialize → /explore
```

#### Brownfield (legacy codebase)

For existing codebases, you will want to leverage the excavate and extract skills to capture the architecture and rules from the actual code before starting to build new features.

```markdown
/initialize → /explore → /excavate → /extract
```

#### What gets created

| Path | Purpose |
| --- | --- |
| `AGENTS.md` | Main project instructions — stack, paths, conventions |
| `.product/arch/` | Architecture documentation |
| `.product/rules/` | Coding rules and conventions (extracted from legacy codebase) |

---

## Step 3 — Build your first feature

Once initialized, follow the builder pipeline with checkpoints for every new feature:

```markdown
/specify → /planify → /codify 
```

#### Verify functionality loop

End-to-end tests confirm specs are actually met — not just that code compiles. If the tests fail, you can run the rectify skill to fix the issues and then run the verify skill again.

```markdown
/verify -> /rectify? (optional) -> /verify
```
#### Review code quality loop

A stack of checks to ensure the code quality, and report any issues. If the review finds issues, you can run the repair skill to fix them and then run the review skill again.

```markdown
/review -> /repair? (optional) -> /review
```

#### Refactor

Improve the structure and maintainability of the generated code without changing its behavior.

```markdown
/refactor
```


#### Release

Prepare and publish a new release, including changelog generation.

```markdown
/release
```

Review each step before moving on — you stay in control at every checkpoint.

---

**Next:** [Skills catalog](/skills/) 