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
    description: "Product, paths, personality and git rules.",
  },
  {
    name: "/explore",
    pipeline: "Architect",
    description: "System architecture and ADRs.",
  },
  {
    name: "/excavate",
    pipeline: "Architect",
    description: "Tier/component architecture and the ER model.",
  },
  {
    name: "/extract",
    pipeline: "Architect",
    description: "Coding rules and conventions per tier.",
  },
  {
    name: "/specify",
    pipeline: "Builder",
    description: "Specs with formal problem definition and acceptance criteria.",
  },
  {
    name: "/planify",
    pipeline: "Builder",
    description: "Implementation plans from a spec solution overview.",
  },
  {
    name: "/codify",
    pipeline: "Builder",
    description: "Code and unit tests following the plans.",
  },
  {
    name: "/verify",
    pipeline: "Builder",
    description: "E2E tests written for the spec acceptance criteria.",
  },
  {
    name: "/rectify",
    pipeline: "Builder",
    description: "Fixes the code after a failed verify.",
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
