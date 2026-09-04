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
    "title": "ABC — three agents, one loop",
    "subtitle": "Architect, Builder, Craftsman. Three public orchestrators that turn intent into verified software.",
    "cards": [
      {
        "title": "Architect",
        "description": "Maps an existing solution or designs a greenfield one, then scaffolds when you confirm.",
        "cta": {
          "text": "/architect-solution-foundation",
          "link": ""
        }
      },
      {
        "title": "Builder",
        "description": "Scopes a requirement into specs, gets your approval, then implements, verifies, qualifies, and ships.",
        "cta": {
          "text": "/build-requested-change",
          "link": ""
        }
      },
      {
        "title": "Craftsman",
        "description": "Turns durable quality findings into behavior-preserving remediation you can ship with confidence.",
        "cta": {
          "text": "/craft-lasting-quality",
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
    "subtitle": "One copy-in command — no package in your project. AIDDbot works with the editors and agent harnesses you already use.",
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
