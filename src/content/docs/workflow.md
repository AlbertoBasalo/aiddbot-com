---
title: AIDD Workflow
subtitle: ABC — Architect, Builder, Craftsman. Three agents, one delivery loop.
description: How AIDDbot turns one requested spec into verified software with Architect, Builder, and Craftsman.
slug: workflow
order: 2
toc:
  - label: What holds
    anchor: what-holds
  - label: Three entrypoints
    anchor: three-entrypoints
  - label: Foundation
    anchor: foundation
  - label: Delivery
    anchor: change-delivery
  - label: Quality
    anchor: quality-review
---

AIDDbot implements **AI-Driven Development** — agent speed with practices professional teams already trust. This page is the short version; the full picture lives in the [repo workflow docs](https://github.com/AIDDbot/AIDDbot/blob/main/docs/AIDD.workflow.md).

## What holds

**One change, one specification.** Requirement text lives in the PRD. A spec is a delivery you can approve.

**Evidence, not self-grading.** Builder writes. Craftsman proves. Green ships. Amber becomes debt. Red goes back for repair — and after three rounds, leftovers ship only as recorded debt.

**Docs that follow the code.** Shipping updates the product model and promotes lessons into the project rules.

**Quality is a deeper pass.** Everyday delivery proves the change. System-wide hardening belongs to `/craft-lasting-quality`.

## Three entrypoints

| Need | Orchestrator |
| --- | --- |
| Prepare or understand a system | `/architect-system-foundation` |
| Deliver one spec | `/build-requested-spec` |
| Review quality and repair debt | `/craft-lasting-quality` |

```mermaid
flowchart LR
  YOU([you]) -->|prepare| FOUND["/architect-system-foundation"]
  YOU -->|one spec| DELIVER["/build-requested-spec"]
  YOU -->|quality debt| QUALITY["/craft-lasting-quality"]
  FOUND --> DELIVER
  QUALITY --> DELIVER
  DELIVER --> LOOP["define → implement → verify → review → ship"]
  LOOP -->|green or amber| SHIPPED[shipped]
```

These three orchestrators are the public starting points. Focused skills stay available — see the [skills catalog](/skills/).

## Foundation

Empty repo: scaffold, then document. Existing app: document what is there. Product records already in the repo are kept.

Run it again whenever documentation should match the code.

## Change delivery

```markdown
/build-requested-spec riders can rate a trip from 1 to 5 stars
```

| Stage | Owner | Work |
| --- | --- | --- |
| Define | **Architect** | One spec. You approve it — unless you include YOLO. |
| Build | **Builder** | Code and tests. Writes acceptance tests; does not run them. |
| Prove and ship | **Craftsman** | Runs acceptance, reviews the diff, releases. |

A red report goes back to Builder. After three rounds, remaining failures are recorded as debt — never hidden.

## Quality review

```markdown
/craft-lasting-quality
```

Scan the system, pick one coherent slice of debt, and deliver it through `/build-requested-spec`. If nothing eligible remains, you get the review and the loop stops.

**Next:** [Getting started](/getting-started/) · [Skills catalog](/skills/) · [GitHub](https://github.com/AIDDbot/AIDDbot)
