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
      "AIDDbot gives coding agents one way to start a system, draft a change, prove it, and ship a version you can trust.",
  },
  hero: {
    title: "AIDDbot",
    subtitle:
      "Agent skills for AI-Driven Development. You say what you need. The models judge. A deterministic core proves it.",
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
          text: "Specs first to detail your needs.",
          link: "",
        },
      },
      {
        title: "Guide or chaos",
        description: "Is AI‑generated code ignoring your standards?",
        cta: {
          text: "Coding rules to teach and evolve.",
          link: "",
        },
      },
      {
        title: "Verify or hope",
        description: "Does silent AI drift make fixes expensive?",
        cta: {
          text: "Ensure behavior and code quality.",
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
    title: "Four commands, one loop",
    subtitle:
      "Architect, Builder, Craftsman. Start a system, draft a change, ship it, or repair the debt.",
    cards: [
      {
        title: "Start",
        description:
          "Empty or existing code: document it.",
        cta: {
          text: "/architect-initial-foundation",
          link: "",
        },
      },
      {
        title: "Draft",
        description:
          "Specify the requirements now. Build it when you are ready. ",
        cta: {
          text: "/architect-requested-spec",
          link: "",
        },
      },
      {
        title: "Ship",
        description:
          "Take one spec, then code, prove, and ship a version you can trust.",
        cta: {
          text: "/build-requested-spec",
          link: "",
        },
      },
      {
        title: "Repair",
        description:
          "Fix the debt that matters first as soon as possible.",
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
      "One command copies the skills in. No package in your project. Claude Code, Codex, Cursor, and GitHub Copilot — install the ones you use. Built for 2026 models.",
    cards: [
      {
        title: "Antigravity · Cursor · VSCode · JetBrains · Zed",
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
