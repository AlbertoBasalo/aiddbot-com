# aiddbot-com

Web site repo for [aiddbot.com](https://aiddbot.com) — the public, marketing-oriented landing pages for AIDDbot.

> This repo contains **only the website**. The product itself (skills, CLI, technical docs) lives in [AIDDbot/AIDDbot](https://github.com/AIDDbot/AIDDbot), which is the source of truth. When the product changes, update the site content from there.

## AIDDbot in short

> AI coding agents can generate code.  
> **AIDDbot builds software you can trust.**

AIDDbot is a set of Agent Skills for AI-Driven Development (AIDD). One command copies it into a repository, with adapters for Claude Code, Codex, Cursor, and GitHub Copilot:

```bash
npx --allow-git=all github:AIDDbot/AIDDbot init
```

Three public orchestrators — **ABC: Architect, Builder, Craftsman**:

| Need | Command |
| --- | --- |
| Prepare or understand a system | `/architect-system-foundation` |
| Deliver one requested spec | `/build-requested-spec` |
| Review quality and repair debt | `/craft-lasting-quality` |

Product references:

- [README](https://github.com/AIDDbot/AIDDbot/blob/main/README.md)
- [Getting started](https://github.com/AIDDbot/AIDDbot/blob/main/docs/getting-started.md)
- [AIDD workflow](https://github.com/AIDDbot/AIDDbot/blob/main/docs/AIDD.workflow.md)
- [Skills catalog](https://github.com/AIDDbot/AIDDbot/blob/main/.agents/skills/skills.catalog.md)

## Where the site content lives

| Page | Source |
| --- | --- |
| Home `/` | `src/content/home.content.ts` |
| AIDD `/aidd/` | `src/content/aidd.content.ts` |
| Getting started `/getting-started/` | `src/content/docs/getting-started.md` |
| Workflow `/workflow/` | `src/content/docs/workflow.md` |
| Skills `/skills/` | `src/content/skills.content.ts`, `src/components/HumanCheckpointsTable.astro` |
| Legal | `src/content/legal/*.md` |

Keep site copy simpler and more marketing-oriented than the product docs, but never contradict them: command and skill names, flow stages, and gate rules must match the AIDDbot repo.

## Development

Astro 5 static site, managed with Bun.

```bash
bun install        # init
bun run dev        # local server
bun run build      # static build to dist/
bun run preview    # serve the build
bun run release    # deploy
```

---

**Author** · [Alberto Basalo](https://albertobasalo.dev) · [X-Twitter](https://x.com/albertobasalo) · [LinkedIn](https://www.linkedin.com/in/albertobasalo/)  
**Courses in Spanish** · [A.I. Code Academy](https://aicode.academy)  
**Repository** · [GitHub / AIDDbot](https://github.com/AIDDbot/AIDDbot)  
**Website** · [aiddbot.com](https://aiddbot.com)
