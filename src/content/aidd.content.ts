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
      "AIDDbot implements AIDD as production-ready skills: the green e2e suite is the contract, /codify is the only writer, and you own the one checkpoint after the spec.",
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
      title: "One writer, two evaluators",
      subtitle:
        "/codify writes code. /verify and /qualify only judge and report. Nothing grades its own work.",
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
      title: "One checkpoint that is yours",
      subtitle:
        "After the spec is written the command stops — everything downstream is derived from that file.",
      cards: [
        {
          title: "Wrong spec, correct wrong code",
          description:
            "A wrong spec buys correct code for the wrong problem. Reading it is the one step that cannot be delegated.",
        },
        {
          title: "Loops close on their own",
          description:
            "After you approve, verify and qualify report; codify fixes; nothing ships until both are green.",
        },
      ],
    },
  ],
  finalCta: {
    title: "See AIDD in practice",
    subtitle: "Three doors, one machine — explore, build, and re-explore for drift.",
    cards: [],
    cta: {
      text: "Read the workflow",
      link: "/workflow/",
    },
  },
};
