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
      "AIDD combines agent acceleration with one-spec delivery, shared rules, and evidence so teams ship software they can trust.",
  },
  intro: {
    title: "AI-Driven Development",
    lead:
      "AIDD is how professional teams use AI coding agents without giving up structure, standards, or accountability.",
    paragraphs: [
      "Agents generate code faster than ever, but speed alone does not produce correct, maintainable software. Missing context leads to invention; absent standards lead to chaos; skipped verification leads to expensive drift.",
      "AIDDbot implements AIDD as Agent Skills: one small specification per change, evidence that does not grade its own work, and a quality loop that turns debt into the next delivery.",
    ],
  },
  principles: [
    {
      title: "One change, one specification",
      subtitle:
        "The spec owns its requirements. The PRD is the product view of what already shipped.",
      cards: [
        {
          title: "Small enough to approve",
          description:
            "Architect writes one spec and pauses. You check the requirements before anyone codes — or include YOLO to continue. One spec is open at a time.",
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
            "Acceptance must be green. Review findings become technical debt and do not block the release. After three repair rounds, leftovers ship as recorded debt — never hidden.",
        },
        {
          title: "Rules over tools",
          description:
            "AGENTS.md, skills, schemas, and project rules travel with the repo. Every shipped spec promotes its lessons into those rules.",
        },
      ],
    },
    {
      title: "Quality is a delivery, not a side quest",
      subtitle:
        "Everyday changes prove the diff. System-wide checks belong to a quality review that re-enters the same loop.",
      cards: [
        {
          title: "Scan, then repair one slice",
          description:
            "Craftsman refreshes debt records. Architect selects one coherent group. The same delivery flow ships the repair.",
        },
        {
          title: "Nothing invented on the way",
          description:
            "If no eligible debt remains, you get the review. Quality does not invent a new product requirement to stay busy.",
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
