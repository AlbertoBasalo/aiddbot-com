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
      "AI coding agents can generate code. AIDDbot builds software you can trust.",
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
    title: "Why you need AIDD",
    subtitle:
      "Agents are strong on isolated tasks. On real projects, three failure modes show up repeatedly.",
    cards: [
      {
        title: "Detail or invent",
        description: "Missing context — or plausible fabrication. Spec-driven development keeps intent in the repo.",
      },
      {
        title: "Guide or chaos",
        description: "Code that ignores your standards. Rules over tools — versioned with the project.",
      },
      {
        title: "Verify or hope",
        description: "Silent drift until fixes are expensive. Human in the loop at the one checkpoint that matters.",
      },
    ],
  },
  bestPractices: {
    title: "Three doors",
    subtitle:
      "Four commands cover the lifecycle. Each chains skills in fresh subagents so nothing inherits the previous step's clutter.",
    cards: [
      {
        title: "explore-and-extract",
        description: "Document what is there — architecture, schemas, coding rules. Works on empty and mature repos alike.",
      },
      {
        title: "spec-feature",
        description: "Turn a requirement into a spec, then plan, build, verify, and release.",
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
      "No CLI, no package install — copy `.agents/` and run. Same skills in the editors you already use.",
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
      text: "Get started",
      link: "/getting-started/",
    },
  },
  finalCta: {
    title: "Open source, production-minded",
    subtitle:
      "AIDDbot is an open-source initiative by Alberto Basalo. Clone the skills, ship with confidence.",
    cards: [],
    cta: {
      text: "View on GitHub",
      link: "https://github.com/AIDDbot/AIDDbot",
    },
  },
};
