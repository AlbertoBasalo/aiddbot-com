export type SkillPipeline = "Foundation" | "Features" | "Quality";

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
    name: "/explore",
    pipeline: "Foundation",
    description: "Product, paths, personality and git rules, system architecture and ADRs.",
  },
  {
    name: "/extract",
    pipeline: "Foundation",
    description: "Tier/component architecture and the ER model, coding rules and conventions per tier.",
  },
  {
    name: "/specify",
    pipeline: "Features",
    description: "Specs with formal problem definition and acceptance criteria.",
  },
  {
    name: "/planify",
    pipeline: "Features",
    description: "Implementation plans from a spec solution overview.",
  },
  {
    name: "/codify",
    pipeline: "Features",
    description: "Code and unit tests following the plans.",
  },
  {
    name: "/verify",
    pipeline: "Features",
    description: "E2E tests written for the spec acceptance criteria.",
  },
  {
    name: "/review",
    pipeline: "Quality",
    description: "Audits a11y, security and performance; fixes findings in place.",
  },
  {
    name: "/refactor",
    pipeline: "Quality",
    description: "Clean-code and DRY refactors with a detailed commit and test handoff.",
  },
  {
    name: "/release",
    pipeline: "Quality",
    description: "Version, changelog, and spec marked done plus released version.",
  },
];

export const SKILLS_BY_PIPELINE: SkillPipeline[] = [
  "Foundation",
  "Features",
  "Quality",
];
