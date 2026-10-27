---
title: Getting Started
subtitle: Install AIDDbot, then ask for the change you need
description: Install AIDDbot with one command, prepare your repository, and deliver a change with Claude Code, Codex, Cursor, or GitHub Copilot.
slug: getting-started
order: 1
---

**AIDDbot** is a set of skills for your coding agent. You say what you need. The agent writes a spec, waits for you, then writes the code, the tests, and a new version. The models judge. A small program runs the tests and keeps the evidence.

## Install

You need Node.js 18 or later, Git, and one coding agent: Claude Code, Codex, GitHub Copilot, or Cursor. Use a model from 2026 or later. Older models often skip the commands that keep the evidence.

In the root folder of your repository, run:

```bash
npx github:AIDDbot/AIDDbot init
```

`init` adds the skills and the agent profiles, and commits them. If the folder is not a Git repository, it creates one. It never overwrites a file that already exists.

Add `--dry-run` to see the changes first. Add `--harness codex,cursor` to install only the agents you use. The names are `claude-code`, `codex`, `copilot`, and `cursor`.

## Prepare

Open your agent in the same folder and run:

```text
/architect-initial-foundation
```

In Codex, start each command with `$` instead of `/`.

- **Existing code:** the agent documents it. It does not change it.
- **Empty repository:** the agent asks about your product and proposes a system from a proved archetype — a web product or a local CLI, already tested. Approve it. The agent copies that foundation and stops when the unit tests pass. If none fits, it stops. It does not invent one.

## Deliver

Write the change in plain language:

```text
/build-requested-spec riders can rate a trip from 1 to 5 stars
```

Read the spec. Approve it, or ask for changes. The agents then write the code, test it, and ship a new version.

Add `YOLO` to the request to skip that approval.

To define the change now and build it later:

```text
/architect-requested-spec riders can rate a trip from 1 to 5 stars
```

You approve the draft. It waits in `.product/drafts/` and blocks nothing. When you are ready:

```text
/build-requested-spec .product/drafts/{slug}.md
```

## Repair

From time to time, run:

```text
/craft-lasting-quality
```

The agents look for technical debt and repair the most important part. To upgrade the dependencies, say so:

```text
/craft-lasting-quality upgrade the dependencies
```

## Update

```bash
npx github:AIDDbot/AIDDbot update
```

`update` replaces the skills and the agent profiles. It keeps your project files.

The same guide, with the current archetype versions, is in the repository: [Getting started](https://github.com/AIDDbot/AIDDbot/blob/main/docs/getting-started.md). To choose models, see [Customize agent profiles](https://github.com/AIDDbot/AIDDbot/blob/main/docs/agent-customization.md).

**Next:** [Workflow](/workflow/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
