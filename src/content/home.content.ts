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
    title: "AIDDbot — Production-ready agent skills",
    description:
      "AI coding agents can generate code. AIDDbot builds software you can trust — spec-driven skills for Cursor, Copilot, Claude Code, and more.",
  },
  hero: {
    title: "AIDDbot",
    subtitle:
      "AIDDbot is a harness of skills, commands and subagents that works with any agent.",
    cards: [],
    cta: {
      text: "Build software you can trust",
      link: "",
    },
    secondaryCta: {
      text: "Get started",
      link: "/getting-started/",
    },
  },
  services: {
    title: "Why do  you need AIDD?",
    subtitle:
      "The agents are effective in isolated tasks. In real-world projects, we haven't encountered recurring failures.",
    cards: [
      {
        title: "Detail or invent",
        description: "Lack of context that generates plausible invention -> Spec-Driven Development imposes detailed intent.",
      },
      {
        title: "Guide or chaos",
        description: "Code that ignores your standards -> Rules over tools tailored and attached to the project.",
      },
      {
        title: "Verify or hope",
        description: "Silent drift until fixes are expensive -> Human in the loop at critical checkpoints.",
      },
    ],
  },
  bestPractices: {
    title: "Three doors",
    subtitle:
      "Convenient commands cover the entire lifecycle chaining skills into new sub-agents, optimizing the context window.",
    cards: [
      {
        title: "explore-and-extract",
        description: "Document what is there — architecture, schemas, coding rules. Works on greenfield and legacy repos alike.",
      },
      {
        title: "spec-feature",
        description: "Turn a requirement into a spec and wait for your approval. Then plan, build, verify, qualify and release the solution.",
      },
      {
        title: "explore-and-refactor",
        description: "Re-explore for technical drift, pick defects, and drive each fix through a refactor spec.",
      },
    ],
    cta: {
      text: "See the workflow",
      link: "/workflow/",
    },
  },
  compatibility: {
    title: "Plain markdown. Any agent.",
    subtitle:
      "No CLI, no package install, just copy the `.agents` folder and run. AIDDbot works with the editors you already use.",
    cards: [
      {
        title: "Antigravity · Cursor · VSCode · JetBrains",
        description: "IDEs that load project context from your repo.",
      },
      {
        title: "Claude Code · Codex · Copilot · OpenCode",
        description: "Agent harnesses that read or invoke skills.",
      },
    ],
    cta: {
      text: "View on GitHub",
      link: "https://github.com/AIDDbot/AIDDbot",
    },
  },
  finalCta: {
    title: "Open source, production-minded",
    subtitle:
      "AIDDbot is an open-source initiative by Alberto Basalo. Clone the skills, ship with confidence.",
    cards: [],
    cta: {
      text: "Más sobre Alberto Basalo en español",
      link: "https://albertobasalo.dev",
    },
  },
};
