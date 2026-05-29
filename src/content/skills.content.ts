export type SkillPipeline = "Architect" | "Builder" | "Craftsman";

export type Skill = {
  name: string;
  pipeline: SkillPipeline;
  description: string;
};

export const SKILLS_SECTION = {
  title: "Skills catalog",
  subtitle:
    "A set of skills that run in pipeline order with checkpoints to guide your review. ",
  cta: {
    text: "Invoke them, or let your agent decide.",
    link: "",
  },
};

export const SKILLS: Skill[] = [
  {
    name: "/establish",
    pipeline: "Architect",
    description: "Product, paths, personality and git rules (C4 L1).",
  },
  {
    name: "/explore",
    pipeline: "Architect",
    description: "System architecture and ADRs (C4 L2).",
  },
  {
    name: "/elaborate",
    pipeline: "Architect",
    description: "Tier/component architecture and the ER model (C4 L3).",
  },
  {
    name: "/extract",
    pipeline: "Architect",
    description: "Coding rules and conventions, one file per tier.",
  },
  {
    name: "/envision",
    pipeline: "Architect",
    description: "UI design spec — tokens and component behavior for a surface.",
  },
  {
    name: "/specify",
    pipeline: "Builder",
    description: "Specs with formal acceptance criteria.",
  },
  {
    name: "/planify",
    pipeline: "Builder",
    description: "Implementation plans from a spec.",
  },
  {
    name: "/codify",
    pipeline: "Builder",
    description: "Code and unit tests from plans.",
  },
  {
    name: "/verify",
    pipeline: "Builder",
    description: "E2E tests; updates the spec on failure.",
  },
  {
    name: "/rectify",
    pipeline: "Builder",
    description: "Fixes from the spec's Rectify section after a failed verify.",
  },
  {
    name: "/review",
    pipeline: "Craftsman",
    description: "Audits a11y, security and performance; fixes findings in place.",
  },
  {
    name: "/refactor",
    pipeline: "Craftsman",
    description: "Clean-code and DRY refactors with a detailed commit and test handoff.",
  },
  {
    name: "/release",
    pipeline: "Craftsman",
    description: "Version, changelog, and spec marked done plus released version.",
  },
];

export const SKILLS_BY_PIPELINE: SkillPipeline[] = [
  "Architect",
  "Builder",
  "Craftsman",
];
