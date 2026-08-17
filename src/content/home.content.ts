import type { SectionProps } from "../components/Section.types";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps & {
    secondaryCta?: { text: string; link: string };
  };
  services: SectionProps;
  bestPractices: SectionProps;
  compatibility: SectionProps;
  finalCta: SectionProps;
};

export const HOME: Home = {
  layout: {
    title: "AIDDbot — Production‑ready AI agent skills built on AI‑Driven Development",
    description:
      "AI coding agents can generate code. AIDDbot builds software you can trust — spec-driven skills for Cursor, Copilot, Claude Code, and more.",
  },
  hero: {
    title: "AIDDbot",
    subtitle:
      "A set of skills, commands and subagents that works with any harness.",
    cards: [],
    cta: {
      text: "Build software you can trust",
      link: "",
    }
  },
  services: {
    title: "Why do you need AIDD?",
    subtitle:
      "AI‑Driven Development lets you build real‑world, production‑ready projects.",
    cards: [
      {
        title: "Detail or invent",
        description: "Does lack of context cause AI hallucinations?",
        cta: {
          text: "Spec-Driven Development imposes detailed intent.",
          link: "",
        }
      },
      {
        title: "Guide or chaos",
        description: "Is AI‑generated code ignoring your standards?",
        cta: {
          text: "Rules over tools tailored to the project.",
          link: "",
        }
      },
      {
        title: "Verify or hope",
        description: "Does silent AI drift make fixes expensive?",
        cta: {
          text: "Human in the loop at critical checkpoints.",
          link: "",
        }
      },
    ],
    cta: {
      text: "Get started",
      link: "/getting-started/",
    },
  },
  "bestPractices": {
    "title": "ABC — three roles, one lifecycle",
    "subtitle": "Architect, Builder, Craftsman. Three agent roles that chain skills into task‑oriented workflows across the development lifecycle.",
    "cards": [
      {
        "title": "Architect",
        "description": "Maps greenfield and legacy repositories, establishing the structural foundations your agents will build on.",
        "cta": {
          "text": "/architect-map",
          "link": ""
        }
      },
      {
        "title": "Builder",
        "description": "Turns a requirement into a spec, gets approval, then plans, codes, verifies, qualifies, and ships end‑to‑end.",
        "cta": {
          "text": "/builder-ship",
          "link": ""
        }
      },
      {
        "title": "Craftsman",
        "description": "Evaluates drift, proposes refactors, applies fixes, and ships with confidence through disciplined checks.",
        "cta": {
          "text": "/craftsman-refactor",
          "link": ""
        }
      }
    ],
    "cta": {
      "text": "See the workflow",
      "link": "/workflow/"
    }
  
},
  "compatibility": {
    "title": "Plain markdown. Any agent.",
    "subtitle": "No CLI, no package install — just copy the `.agents` folder and run. AIDDbot works with the editors and agent harnesses you already use.",
    "cards": [
      {
        "title": "Antigravity · Cursor · Devin · Kiro · VSCode · JetBrains · Zed",
        "description": "Compatible with any IDE that loads project context directly from your repository."
      },
      {
        "title": "ClaudeCode · Codex · Copilot · Composer · OpenCode",
        "description": "Works with every agent harness capable of reading or invoking skills."
      }
    ],
    "cta": {
      "text": "View on GitHub",
      "link": "https://github.com/AIDDbot/AIDDbot"
    }
  }

,
  finalCta: {
    title: "Open source, production-minded",
    subtitle:
      "AIDDbot is an open-source initiative by Alberto Basalo.",
    cards: [],
    cta: {
      text: "Más sobre Alberto Basalo en español",
      link: "https://albertobasalo.dev",
    },
  },
};
