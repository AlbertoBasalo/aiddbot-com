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
      "AIDD combines agent acceleration with specs, shared rules, and human verification so teams ship software they can trust.",
  },
  intro: {
    title: "AI-Driven Development",
    lead:
      "AIDD is how professional teams use AI coding agents without giving up structure, standards, or accountability.",
    paragraphs: [
      "Agents generate code faster than ever, but speed alone does not produce correct, maintainable software. Missing context leads to invention; absent standards lead to chaos; skipped verification leads to expensive drift.",
      "AIDDbot implements AIDD as production-ready skills: the green e2e suite is the contract, /codify writes delivery code, /verify and /qualify only judge, and you own the checkpoints that matter.",
    ],
  },
  principles: [
    {
      title: "The green e2e suite is the contract",
      subtitle:
        "A green test changes only through a plan — silent behavior change becomes structurally impossible.",
      cards: [
        {
          title: "Executable product statement",
          description:
            "The suite says what the product does today. Plan steps authorize test edits the same way they authorize code edits.",
        },
        {
          title: "Acceptance criteria travel",
          description:
            "Each AC id lands in an e2e test title, so a criterion and its proof stay attached end to end.",
        },
      ],
    },
    {
      title: "One delivery writer, two evaluators",
      subtitle:
        "/codify writes delivery code. /verify and /qualify only judge and report. Nothing grades its own work.",
      cards: [
        {
          title: "Separated sessions",
          description:
            "Implementation and evaluation never share a session. Every fix lands back through /codify.",
        },
        {
          title: "Rules over tools",
          description:
            "AGENTS.md, skills, and conventions travel with the repo across Cursor, Claude Code, Copilot, and the next editor.",
        },
      ],
    },
    {
      title: "Human checkpoints that matter",
      subtitle:
        "You approve scopes and specs at key stops — or include YOLO to continue without them.",
      cards: [
        {
          title: "Wrong spec, correct wrong code",
          description:
            "A wrong spec buys correct code for the wrong problem. Reading it is the step that cannot be delegated.",
        },
        {
          title: "Loops close on their own",
          description:
            "After you approve, verify and qualify report; defects route back through /codify; nothing ships until both are green.",
        },
      ],
    },
  ],
  finalCta: {
    title: "See AIDD in practice",
    subtitle: "ABC — Architect, Builder, Craftsman. Three agents, one delivery loop.",
    cards: [],
    cta: {
      text: "Read the workflow",
      link: "/workflow/",
    },
  },
};
