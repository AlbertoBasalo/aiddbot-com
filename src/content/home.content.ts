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
      "Agent skills for teams who want AI speed with proven quality.",
    cards: [],
    cta: {
      text: "Build software you can trust",
      link: "",
    },
  },
  services: {
    title: "Agents fail at scale",
    subtitle:
      "Real software needs structure, standards, and verification.",
    cards: [
      {
        title: "Detail or invent",
        description:
          "Critical context goes missing — or gets invented with confidence.",
      },
      {
        title: "Rules or chaos",
        description:
          "Output drifts from your conventions and becomes hard to maintain.",
      },
      {
        title: "Verify or hope",
        description:
          "Mistakes pile up until they are costly to fix.",
      },
    ],
  },
  aidd: {
    title: "The AIDD philosophy",
    subtitle:
      "AI-Driven Development combines AI acceleration with practices that professional teams already trust.",
    cards: [
      {
        title: "Spec-driven development",
        description:
          "Clear acceptance criteria up front so agents, engineers, and stakeholders share the same definition of done.",
      },
      {
        title: "Rules over tools",
        description:
          "Skills, AGENTS.md, and conventions you define travel with the repo across IDEs and agents.",
      },
      {
        title: "Human in the loop",
        description:
          "You stay in control. Approve specs, plans, code, and tests — you own what merges.",
      },
    ],
    cta: {
      text: "Explore on GitHub",
      link: "https://github.com/AIDDbot/AIDDbot",
    },
  },
  bestPractices: {
    title: "What you get",
    subtitle:
      "A skill library that lives in your project — portable, versioned, and ready for any agent that reads markdown instructions.",
    cards: [
      {
        title: "Architecture documentation",
        description:
          "Set up new projects and understand brownfield codebases.",
      },
      {
        title: "Building features",
        description:
          "A guided path from requirement to verified delivery.",
      },
      {
        title: "Crafting quality",
        description:
          "Improve what ships with review and repair workflows.",
      },
    ],
  },
  technologies: {
    title: "Works in your environment",
    subtitle:
      "Use the same skills in the editors and agents you already rely on — no vendor lock-in.",
    cards: [
      {
        title: "AI-powered IDEs",
        description:
          "Antigravity, Cursor, VS Code, and other tools that load project context from your repository.",
      },
      {
        title: "AI dev agents",
        description:
          "Claude Code, Codex, Copilot, OpenCode, and more — wherever markdown instructions are supported.",
      },
    ],
  },
  us: {
    title: "Get started",
    subtitle:
      "Add AIDDbot to your repo and follow the README for setup and workflows.",
    cards: [],
    cta: {
      text: "Open the repository",
      link: "https://github.com/AIDDbot/AIDDbot",
    },
  },
};
