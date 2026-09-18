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
    title: "AIDDbot — Agent skills for AI-Driven Development",
    description:
      "AIDDbot gives coding agents a shared way to understand a repository, deliver one change from a specification, and maintain technical quality.",
  },
  hero: {
    title: "AIDDbot",
    subtitle:
      "A set of Agent Skills for AI-Driven Development. Works with any major harness.",
    cards: [],
    cta: {
      text: "Build software you can trust",
      link: "",
    },
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
          text: "One small spec. Requirement text lives in the PRD.",
          link: "",
        },
      },
      {
        title: "Guide or chaos",
        description: "Is AI‑generated code ignoring your standards?",
        cta: {
          text: "Rules over tools tailored to the project.",
          link: "",
        },
      },
      {
        title: "Verify or hope",
        description: "Does silent AI drift make fixes expensive?",
        cta: {
          text: "Green ships. Amber becomes debt. Red stops the line.",
          link: "",
        },
      },
    ],
    cta: {
      text: "Get started",
      link: "/getting-started/",
    },
  },
  bestPractices: {
    title: "ABC — three agents, one loop",
    subtitle:
      "Architect, Builder, Craftsman. Three public orchestrators. Pick the outcome you need.",
    cards: [
      {
        title: "Architect",
        description:
          "Prepare or understand a solution — map what exists, or scaffold when there is no application source.",
        cta: {
          text: "/architect-solution-foundation",
          link: "",
        },
      },
      {
        title: "Builder",
        description:
          "Deliver one feature, fix, or technical change from a natural-language request — one spec, then ship.",
        cta: {
          text: "/build-requested-change",
          link: "",
        },
      },
      {
        title: "Craftsman",
        description:
          "Review quality, record technical debt, and repair one coherent slice through the same delivery flow.",
        cta: {
          text: "/craft-lasting-quality",
          link: "",
        },
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
      "One copy-in command — no package in your project. AIDDbot works with the editors and agent harnesses you already use.",
    cards: [
      {
        title: "Antigravity · Cursor · Devin · Kiro · VSCode · JetBrains · Zed",
        description:
          "Compatible with any IDE that loads project context directly from your repository.",
      },
      {
        title: "ClaudeCode · Codex · Copilot · Composer · OpenCode",
        description:
          "Works with every agent harness capable of reading or invoking skills.",
      },
    ],
    cta: {
      text: "View on GitHub",
      link: "https://github.com/AIDDbot/AIDDbot",
    },
  },
  finalCta: {
    title: "Open source, production-minded",
    subtitle: "AIDDbot is an open-source initiative by Alberto Basalo.",
    cards: [],
    cta: {
      text: "Más sobre Alberto Basalo en español",
      link: "https://albertobasalo.dev",
    },
  },
};
