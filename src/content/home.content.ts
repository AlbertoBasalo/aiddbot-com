import type { SectionProps } from "../components/Section.types";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps;
  services: SectionProps;
  technologies: SectionProps;
  bestPractices: SectionProps;
  aidd: SectionProps;
  us: SectionProps;
};

export const HOME: Home = {
  layout: {
    title: "AIDDbot — Production-ready agent skills",
    description:
      "AI coding agents can generate code. AIDDbot builds software you can trust with spec-driven skills that work in any AI coding environment.",
  },
  hero: {
    title: "AIDDbot",
    subtitle:
      "AI coding agents can generate code. AIDDbot builds software you can trust — production-ready agent skills with no CLI, no package install, just markdown that works everywhere.",
    cards: [],
    cta: {
      text: "Get started on GitHub",
      link: "https://github.com/AIDDbot/AIDDbot",
    },
  },
  services: {
    title: "Why agents fail at scale",
    subtitle:
      "Modern agents shine on isolated features. Real projects expose three failure modes — AI-Driven Development (AIDD) addresses each one.",
    cards: [
      {
        title: "Detail or invent",
        description:
          "Critical context goes missing — or gets fabricated convincingly. AIDDbot answers with spec-driven development: define the problem precisely before any code is written.",
      },
      {
        title: "Rules or chaos",
        description:
          "Output drifts from your standards and becomes unmaintainable. AIDDbot enforces rules over tools: agents follow your guidelines, not their own defaults.",
      },
      {
        title: "Verify or hope",
        description:
          "Errors compound silently until fixes are expensive. AIDDbot keeps you human in the loop: review each step, own every line, and verify before you ship.",
      },
    ],
  },
  aidd: {
    title: "The AIDD philosophy",
    subtitle:
      "AI-Driven Development blends AI speed with proven software engineering. AIDDbot implements three principles on every workflow.",
    cards: [
      {
        title: "Human in the loop",
        description:
          "You are the decision-maker. Review specs, plans, code, and tests at each step — you own every line that lands in the repo.",
      },
      {
        title: "Rules over tools",
        description:
          "Productivity comes from context and conventions you define — AGENTS.md, extracted rules, and skills — not from whichever agent happens to be active.",
      },
      {
        title: "Spec-driven development",
        description:
          "Formal specs with acceptance criteria align agents, engineers, and stakeholders before implementation starts.",
      },
    ],
    cta: {
      text: "Explore the skills catalog",
      link: "https://github.com/AIDDbot/AIDDbot",
    },
  },
  bestPractices: {
    title: "What you get",
    subtitle:
      "Invoke skills directly or let your agent trigger them. Plain markdown files — clone once, then run the pipeline that matches your goal.",
    cards: [
      {
        title: "Architecture documentation",
        description:
          "/initialize sets up your environment and main instructions. On brownfield codebases, /explore reverse-engineers structure and /extract captures real conventions from source.",
      },
      {
        title: "Building features",
        description:
          "For every new feature: /specify writes acceptance criteria, /planify breaks work into ordered steps, /codify generates code to your rules, /verify runs E2E tests against the spec.",
      },
      {
        title: "Crafting quality",
        description:
          "After delivery: /review and /repair for feedback and fixes. Roadmap skills — /repository, /refactor, /release — extend the same workflow to git, structure, and releases.",
      },
    ],
  },
  technologies: {
    title: "Works in your environment",
    subtitle:
      "No vendor lock-in. Drop the .agents folder into any project and use the same skills across your toolchain.",
    cards: [
      {
        title: "AI-powered IDEs",
        description:
          "Antigravity, Cursor, VS Code, and other editors that load project skills and rules from your repo.",
      },
      {
        title: "AI dev agents",
        description:
          "Claude Code, Codex, Copilot, OpenCode, Gemini, and comparable agents — if it reads markdown instructions, it runs AIDDbot.",
      },
    ],
  },
  us: {
    title: "Get started in two steps",
    subtitle:
      "Clone the skills into your project root, run /initialize, then build features you can trust with specify → planify → codify → verify.",
    cards: [
      {
        title: "1. Clone into your project",
        description:
          "From your repo root: clone github.com/AIDDbot/AIDDbot, copy .agents to the project root, remove the temporary folder. Skills are files — nothing to npm install.",
      },
      {
        title: "2. Initialize your environment",
        description:
          "Run /initialize to generate AGENTS.md and project context. On legacy codebases, chain /explore and /extract before your first feature spec.",
      },
    ],
    cta: {
      text: "Open the repository",
      link: "https://github.com/AIDDbot/AIDDbot",
    },
  },
};
