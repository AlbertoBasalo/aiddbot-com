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
      "AIDD combines agent speed with one spec per change, shared rules, and evidence a model does not grade itself.",
  },
  intro: {
    title: "AI-Driven Development",
    lead:
      "AIDD is how professional teams use AI coding agents without giving up structure, standards, or accountability.",
    paragraphs: [
      "Agents generate code faster than ever, but speed alone does not produce correct, maintainable software. Missing context leads to invention; absent standards lead to chaos; skipped verification leads to expensive drift.",
      "AIDDbot implements AIDD as Agent Skills. One small specification per change. A deterministic core keeps the evidence. A quality loop turns debt into the next delivery.",
    ],
  },
  principles: [
    {
      title: "One change, one specification",
      subtitle:
        "The spec owns its requirements. A draft can wait. The PRD is the product view of what already shipped.",
      cards: [
        {
          title: "Small enough to approve",
          description:
            "Architect writes one spec and pauses. You check the requirements before anyone codes — or include YOLO to continue. One spec is open at a time. A draft has no branch, so it never blocks the one in progress.",
        },
        {
          title: "The spec is the source",
          description:
            "Requirements live on the spec. Shipping writes a one-line product view into the PRD — generated, not a second copy you maintain by hand.",
        },
      ],
    },
    {
      title: "Evidence that does not grade itself",
      subtitle:
        "Builder writes. Craftsman verifies acceptance and reviews the changed code. Red goes back for repair.",
      cards: [
        {
          title: "Green to ship, debt to remember",
          description:
            "Acceptance is green or red. Green continues. Red goes back. Review findings become urgent debt and do not block the release. After three repair rounds, leftovers ship as recorded debt — never hidden.",
        },
        {
          title: "Rules over tools",
          description:
            "AGENTS.md, skills, and project rules travel with the repo. The models judge. The core runs the tests and refuses a step that breaks a rule.",
        },
      ],
    },
    {
      title: "Quality is a delivery, not a side quest",
      subtitle:
        "Everyday changes prove the diff. System-wide checks belong to a quality pass that re-enters the same loop.",
      cards: [
        {
          title: "Urgent first, then the rest",
          description:
            "Urgent debt ships as a fix you approve. Structural debt ships as a refactor. The small items land together as a patch — no extra release.",
        },
        {
          title: "Nothing invented on the way",
          description:
            "If nothing eligible remains, you get the scan. Quality does not invent a new product requirement to stay busy.",
        },
      ],
    },
  ],
  finalCta: {
    title: "See AIDD in practice",
    subtitle:
      "Four commands. Three agents. One delivery loop.",
    cards: [],
    cta: {
      text: "Read the workflow",
      link: "/workflow/",
    },
  },
};
