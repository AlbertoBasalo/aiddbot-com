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
      "AI-Driven Development (AIDD) gives you structure, standards, and verification.",
    cards: [
      {
        title: "Detail or invent",
        description:
          "Missing context filled with plausible fakes.",
      },
      {
        title: "Guide or chaos",
        description:
          "Code that ignores your standards.",
      },
      {
        title: "Verify or hope",
        description:
          "Silent drift until fixes are expensive.",
      },
    ],
  },
  bestPractices: {
    title: "The aid you need",
    subtitle:
      "AIDDbot is a set of production-ready agent skills useful at the three stages of SDLC",
    cards: [
      {
        title: "Foundation",
        description:
          "Set up new projects and understand brownfield legacy codebases.",
      },
      {
        title: "Features",
        description:
          "Spec-Driven Development from requirement to verified solution delivery.",
      },
      {
        title: "Quality",
        description:
          "Review, refactor, and release maintainable code with confidence.",
      },
    ], cta: {
      text: "See the whole skills catalog",
      link: "/skills/",
    },
  },
  audience: {
    title: "Who is AIDDbot for",
    subtitle: "Developers that want AI acceleration without sacrificing quality.",
    cards: [
      {
        title: "Frustrated by almost but not quite good code",
        description:
          "Teams working in large, complex codebases, with legacy systems.",
      },
      {
        title: "Standards that actually matter",
        description:
          "Projects where consistency, conventions, and verifiability are non-negotiable.",
      }
    ]
  },
  compatibility: {
    title: "Works in your environment",
    subtitle:
      "Use the same skills in the editors and agents you already rely on.",
    cards: [
      {
        title: "Antigravity · Cursor · IntelliJ · VSCode",
        description: "AI-powered IDEs that load project context from your repo.",
      },
      {
        title: "Claude Code · Codex · Copilot · OpenCode",
        description: "Agent harnesses that can read or invoke markdown skills.",
      },
    ], cta: {
      text: "Get started with AIDDbot",
      link: "/getting-started/",
    },
  },
  finalCta: {
    title: "Designed and crafted for production",
    subtitle:
      "AIDDbot is an open-source initiative by Alberto Basalo. Consultant and trainer for more than 30 years.",
    cards: [],
    cta: {
      text: "More about Alberto Basalo",
      link: "https://albertobasalo.dev",
    },
  },
};
