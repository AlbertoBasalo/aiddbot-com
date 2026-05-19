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
  audience: SectionProps;
  compatibility: SectionProps;
  finalCta: SectionProps;
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
      "AI coding agents can generate code. AIDDbot builds software you can trust.",
    cards: [],
    cta: {
      text: "Get started",
      link: "/getting-started/",
    },
    secondaryCta: {
      text: "View on GitHub",
      link: "https://github.com/AIDDbot/AIDDbot",
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
  bestPractices: {
    title: "What you get",
    subtitle:
      "Production-ready agent skills organized into three pipelines.",
    cards: [
      {
        title: "Architecture",
        description:
          "Set up new projects and understand brownfield codebases.",
        cta: {
          text: "See workflow",
          link: "/workflow/",
        },
      },
      {
        title: "Building",
        description:
          "A guided path from requirement to verified delivery.",
        cta: {
          text: "See workflow",
          link: "/workflow/",
        },
      },
      {
        title: "Crafting",
        description:
          "Review, repair, and release with confidence.",
        cta: {
          text: "Browse skills",
          link: "/skills/",
        },
      },
    ],
  },
  audience: {
    title: "Who it's for",
    subtitle: "Teams that want AI acceleration without sacrificing quality.",
    cards: [
      {
        title: "Frustrated by plausible-but-wrong code",
        description:
          "When agents invent context or miss critical details, specs and verification keep output trustworthy.",
      },
      {
        title: "Standards that actually matter",
        description:
          "Projects where consistency, conventions, and verifiability are non-negotiable.",
      },
      {
        title: "Any major agent or IDE",
        description:
          "Skills are markdown files — no CLI, no vendor lock-in. Works wherever your agent reads project instructions.",
      },
    ],
  },
  compatibility: {
    title: "Works in your environment",
    subtitle:
      "Use the same skills in the editors and agents you already rely on.",
    cards: [
      {
        title: "Cursor · VS Code · Claude Code",
        description: "AI-powered IDEs that load project context from your repo.",
      },
      {
        title: "Codex · Copilot · OpenCode · Antigravity",
        description: "Agents that invoke markdown skills from `.agents/skills/`.",
      },
    ],
    cta: {
      text: "See compatibility",
      link: "/compatibility/",
    },
  },
  finalCta: {
    title: "Build software you can trust",
    subtitle:
      "Add AIDDbot to your repo in two steps. No package install required.",
    cards: [],
    cta: {
      text: "Get started",
      link: "/getting-started/",
    },
  },
};
