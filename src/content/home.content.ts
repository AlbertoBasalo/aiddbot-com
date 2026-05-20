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
  principles: SectionProps[];
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
          link: "#spec-driven-development",
        },
      },
      {
        title: "Guide or chaos",
        description:
          "Code that ignores your standards.",
        cta: {
          text: "Rules over tools",
          link: "#rules-over-tools",
        },
      },
      {
        title: "Verify or hope",
        description:
          "Silent drift until fixes are expensive.",
        cta: {
          text: "Human in the loop",
          link: "#human-in-the-loop",
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
  principles: [
    {
      title: "Spec-driven development",
      subtitle:
        "Replace guesswork with an explicit spec the agent must satisfy before code exists.",
      cards: [
        {
          title: "Intent before implementation",
          description:
            "When requirements live only in chat history, models interpolate and invent. AIDD treats the spec as the contract: scope, constraints, and acceptance criteria stay in-repo so every change traces back to written intent.",
        },
        {
          title: "Brownfield and greenfield",
          description:
            "Specs are not only for new features. Capture current behavior, risks, and migration steps so refactors and legacy work stay grounded instead of drifting into silent rewrites.",
        },
      ],
    },
    {
      title: "Rules over tools",
      subtitle:
        "Project standards beat clever one-off prompts — especially when the whole team ships through agents.",
      cards: [
        {
          title: "Living instructions in the repo",
          description:
            "AGENTS.md, skills, and conventions give the same guardrails in Cursor, Claude Code, Copilot, or the next editor. Tools change; the rules your team cares about stay versioned with the code.",
        },
        {
          title: "Consistency at scale",
          description:
            "Without shared rules, every developer gets a different “voice” from the model. Central patterns for naming, architecture, and review keep output predictable enough to trust in production.",
        },
      ],
    },
    {
      title: "Human in the loop",
      subtitle:
        "Automation accelerates work; humans still own correctness, security, and product judgment.",
      cards: [
        {
          title: "Verify, then merge",
          description:
            "Agents can propose diffs quickly — the bottleneck is knowing they are right. Build habits around tests, static checks, and targeted review so acceleration does not become silent debt.",
        },
        {
          title: "Catch drift early",
          description:
            "Small mistakes compound when no one reconciles output against the spec. Short feedback loops (local runs, CI, and explicit sign-off) keep fixes cheap and intent aligned with what shipped.",
        },
      ],
    },
  ],
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
