# aiddbot-com

Web site repo for [aiddbot.com](https://aiddbot.com)

# AIDDbot

> AI coding agents can generate code.  
> **AIDDbot builds software you can trust.**

**AIDDbot** is a harness of skills, commands, and subagents that works with any agent — no CLI, no package install, just markdown files that work everywhere.

Try it with Antigravity · Claude Code · Codex · Copilot · Composer · Cursor · OpenCode · VSCode · JetBrains

## Why do you need AIDD?

Agents are effective in isolated tasks. In real-world projects, three failure modes recur — and AI-Driven Development (AIDD) addresses each one:

| Failure | What it looks like | AIDD |
|---|---|---|
| **Detail or invent** | Lack of context that generates plausible invention. | _Spec-Driven Development_ |
| **Guide or chaos** | Code that ignores your standards. | _Rules over tools_ |
| **Verify or hope** | Silent drift until fixes are expensive. | _Human in the loop_ |

## Three doors

Convenient commands cover the entire lifecycle — chaining skills into fresh subagents and optimizing the context window:

| Command | What it does |
|---|---|
| `/explore-and-extract` | Document what is there — architecture, schemas, coding rules. Works on greenfield and legacy repos alike. |
| `/spec-feature` | Turn a requirement into a spec and wait for your approval. Then plan, build, verify, qualify, and release the solution. |
| `/explore-and-refactor` | Re-explore for technical drift, pick defects, and drive each fix through a refactor spec. |

> See the full [AIDD Workflow](https://github.com/AIDDbot/AIDDbot/blob/main/docs/AIDD.workflow.md) for a visual overview.

## What holds it together

- **The green e2e suite is the contract.** A green test changes only through a plan, which makes a silent behavior change structurally impossible.
- **One writer, two evaluators.** `/codify` is the only skill that writes code. `/verify` and `/qualify` only judge and report. Nothing grades its own work.
- **Every cycle starts from a spec.** What differs is which door it came through.

## Skills catalog

Commands open the doors. Skills are the steps underneath — invoke one at a time when you want to redo a step or watch what it does.

### Commands

Each command chains skills in fresh subagents so no step inherits the previous step's clutter.

| Command | What it does |
|---|---|
| `/explore-and-extract` | Document what is there — architecture, schemas, coding rules. Works on empty and mature repos. |
| `/spec-feature` | Turn a requirement into a spec, then plan, build, verify, and release. |
| `/explore-and-refactor` | Re-explore for technical drift, then drive each chosen fix through `/spec-refactor`. |

### Skills by pipeline

| Pipeline | Skill | What it does |
|---|---|---|
| **Context** | `/explore` | Agent setup, system architecture, conceptual model, and PRD shell — from the repo tree and Guide files only. |
| **Context** | `/extract` | Per-container architecture, schemas, and coding rules — one container at a time, reading source. |
| **Capture** | `/specify` | A feature spec or a refactor spec — kind named by the caller. Stops for you to read it. |
| **Build** | `/planify` | One implementation plan per container from the approved spec. |
| **Build** | `/codify` | The only skill that writes code — source, unit tests, and the e2e suite. |
| **Prove** | `/verify` | E2e verdict against acceptance criteria — report only, never fixes. |
| **Prove** | `/qualify` | Quality gates — report only. Failed gates loop back through `/codify`. |
| **Ship** | `/release` | Version, changelog, reconciled docs, and tag — only after verified. |

### Human checkpoints

You only review twice. Everything else runs without asking.

| Trigger | You check |
|---|---|
| After exploration | Architecture, schemas, and coding rules match the repo |
| After specification | Problem, outcomes, and acceptance criteria are right |
| After drift detection | The top defect is picked and the spec is refactored |

### Two kinds of spec

Both are written by `/specify`; the command (or you) names the kind.

| | Functional | Refactor |
|---|---|---|
| From | a requirement | a structural directive |
| Branch | `feat/{spec_key}` | `refactor/{spec_key}` |
| Judged by | `/verify` + e2e suite | `/qualify` gates + `/verify` non-regression |

Status chain: `pending` → `planned` → `in-progress` → `verified` | `failed` → `done`.

---

## Get started

Skills are plain markdown files — no package to install, no binary to run.

### 1. Copy the agents into your project

From your **destination repository root**:

```bash
npx tiged AIDDbot/AIDDbot/.agents .agents
```

Alternatively, copy the `.agents` folder from [the AIDDbot repo](https://github.com/AIDDbot/AIDDbot) into your project. Either way you will have skills under `.agents/skills/` and commands under `.agents/commands/`.

### 2. Explore the project and extract the context

```markdown
/explore-and-extract
```

Runs `/explore` (repo tree and Guide files → agent instructions, system architecture, conceptual model, PRD) then `/extract` for every container (`api`, `web`, `db`, `e2e`, …) from its source. Both ask closed questions where evidence is missing.

### 3. Build a feature

```markdown
/spec-feature my new feature with some requirements
```

Runs `/specify` to write a one-page spec and **stops for you to read it** — the one checkpoint that cannot be delegated. Once you approve, `/build-spec` plans, codes, runs the e2e suite, grades quality gates, and releases.

### 4. Re-explore for drift

```markdown
/explore-and-refactor
```

Re-runs `/explore`, compares against the `arch/` folder, and produces `arch/drift.report.md`. Pick the top defect; `/spec-refactor` generates a refactor spec and follows the same build process.

---

## Plain markdown. Any agent.

No CLI, no package install — just copy the `.agents` folder and run. AIDDbot works with the editors you already use.

| IDEs | Agent harnesses |
|---|---|
| Antigravity · Cursor · VSCode · JetBrains | Claude Code · Codex · Copilot · Composer · OpenCode |

---

## The AIDD philosophy

**AI-Driven Development** blends AI capabilities with proven software engineering practices. AIDDbot is built on three principles:

- **Human in the loop** — You are the decision-maker. You own every line of code.
- **Rules over tools** — Agents should follow your guidelines, not their own defaults.
- **Spec-driven development** — Define the problem precisely before any code is written.

### Who this is for

- Teams frustrated by agents that generate plausible-but-wrong code
- Engineers who want AI acceleration without sacrificing code quality
- Projects where standards, consistency, and verifiability actually matter

---

> Code smarter!  
> *— [Alberto Basalo](https://albertobasalo.dev)*

---

**Author** · [X-Twitter](https://x.com/albertobasalo) · [LinkedIn](https://www.linkedin.com/in/albertobasalo/)  
**Courses in Spanish** · [A.I. Code Academy](https://aicode.academy)  
**Repository** · [GitHub / AIDDbot](https://github.com/AIDDbot/AIDDbot)  
**Website** · [aiddbot.com](https://aiddbot.com)
