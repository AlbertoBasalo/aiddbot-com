---
title: Getting Started
subtitle: Copy the skills in, explore, build and stay in control
description: Install AIDDbot agent skills into your project and run the three commands — explore, build, and re-explore for drift.
slug: getting-started
order: 1
toc:
  - label: Install
    anchor: 1-copy-the-agents-into-your-project
  - label: Explore
    anchor: 2-explore-the-project-and-extract-the-context
  - label: Build
    anchor: 3-build-a-feature
  - label: Re-explore for drift
    anchor: 4-re-explore-for-drift
  - label: Whats next?
    anchor: 5-whats-next
---

**AIDDbot** is markdown. Nothing to install, no binary, no package — just a folder of instructions your coding agent. It works the same on a greenfield repository and on a legacy one.

## 1. Copy the agents into your project

From your **destination repository root** run the following command:

```bash
npx tiged AIDDbot/AIDDbot/.agents .agents
```

Alternatively just copy the `.agents` from [the AIDDbot repo](https://github.com/AIDDbot/AIDDbot) into your project. Either way you will have a set os skills under `.agents/skills/` and convenient commands under `.agents/commands/`.

---

## 2. Explore the project and extract the context

To understand what is there run or paste this command into your agent's input field:

```markdown
/explore-and-extract
```

It starts running `/explore` which reads the repo tree and _guide files_ and writes agent instructions, system architecture, conceptual model, and an empty PRD. Then runs `/extract` for every **container** (`api`, `web`, `db`, `e2e`, …) from its source and generates a detailed architecture report along with coding rules and data diagrams.

Both ask you to answer closed questions where evidence is missing. When finished you will have a detailed documentation to verify before starting to build.

---

## 3. Build a feature

Any new feature starts with a request for a specification. Run this command with your requirements:

```markdown
/spec-feature my new feature with some requirements
```

This will run `/specify` which turns that into a one-page spec and **stops for you to read it**. That is the one checkpoint that cannot be delegated: everything downstream is derived from this file.

Once you approve, it will run `/build-spec` which plans, codes, runs the e2e suite, grades quality gates, and releases. 

---

## 4. Re-explore for drift

No matter how well you build, architecture drift will happen over time. To pay this technical debt run this command:

```markdown
/explore-and-refactor
```

This command starts running `/explore` again, but this time it will compare the new architecture with the one in the `arch/` folder and you get `arch/drift.report.md`. 

Then will ask you to pick the top defect, and send it to `/spec-refactor` to generate a new spec (a refactor one) and follow the building process again.

---

## Whats next?

You can continue to build new or amend existing features, explore the project for drift again. To know more about the commands and skills, check the [workflow](/workflow/) page or [explore the skills catalog](/skills/) to see what else you can do.

**Next:** [Workflow](/workflow/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
