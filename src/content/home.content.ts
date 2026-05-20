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
      "AI coding agents can generate code faster than ever, but is it the right and correct code?",
    cards: [],
    cta: {
      text: "Build software you can trust",
      link: "",
    }
  },
  services: {
    title: "Agents fail at scale",
    subtitle:
      "Real software needs structure, standards, and verification.",
    cards: [
      {
        title: "Detail or invent",
        description:
          "Missing context — or plausible fabrication.",
        cta: {
          text: "Spec-driven development",
          link: "",
        },
      },
      {
        title: "Guide or chaos",
        description:
          "Code that ignores your standards.",
        cta: {
          text: "Rules over tools",
          link: "",
        },
      },
      {
        title: "Verify or hope",
        description:
          "Silent drift until fixes are expensive.",
        cta: {
          text: "Human in the loop",
          link: "",
        },
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
          "Set up new projects and understand brownfield legacy codebases.",
        cta: {
          text: "Architect pipeline",
          link: "/skills#architect",
        },
      },
      {
        title: "Building",
        description:
          "A guided path from requirement to verified solution delivery.",
        cta: {
          text: "Builder pipeline",
          link: "/skills#builder",
        },
      },
      {
        title: "Crafting",
        description:
          "Review, repair, and release maintainable code with confidence.",
        cta: {
          text: "Craftsman pipeline",
          link: "/skills#craftsman",
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
