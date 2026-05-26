import type { SectionProps } from "../components/Section.types";

export type Aidd = {
  layout: {
    title: string;
    description: string;
  };
  intro: {
    title: string;
    lead: string;
    paragraphs: string[];
  };
  principles: SectionProps[];
  finalCta: SectionProps;
};

export const AIDD: Aidd = {
  layout: {
    title: "AI-Driven Development (AIDD) — AIDDbot",
    description:
      "AI-Driven Development combines agent acceleration with specs, shared rules, and human verification so teams ship software they can trust.",
  },
  intro: {
    title: "AI-Driven Development",
    lead:
      "AIDD is how professional teams use AI coding agents without giving up structure, standards, or accountability.",
    paragraphs: [
      "Agents generate code faster than ever, but speed alone does not produce correct, maintainable software. Missing context leads to invention; absent standards lead to chaos; skipped verification leads to expensive drift.",
      "AI-Driven Development (AIDD) treats the spec as the contract, keeps project rules versioned in the repo, and keeps humans responsible for what merges. AIDDbot implements AIDD through production-ready skills that work in any major agent environment.",
    ],
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
    title: "See AIDD in practice",
    subtitle:
      "AIDDbot skills apply these principles across architect, builder, and craftsman pipelines.",
    cards: [],
    cta: {
      text: "Read the workflow guide",
      link: "/workflow/",
    },
  },
};
