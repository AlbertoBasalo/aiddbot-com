export type SkillPipeline =
  | "Context"
  | "Capture"
  | "Build"
  | "Prove"
  | "Ship"
  | "Meta";

export type Skill = {
  name: string;
  pipeline: SkillPipeline;
  description: string;
};

export const SKILLS_SECTION = {
  title: "Skills catalog",
  subtitle:
    "Three public orchestrators open the doors. Focused skills do the work underneath — invoke one when you want a single step.",
  cta: {
    text: "Full reference on GitHub.",
    link: "https://github.com/AIDDbot/AIDDbot/blob/main/.agents/skills/skills.catalog.md",
  },
};

export type Command = {
  name: string;
  description: string;
};

export const COMMANDS_SECTION = {
  title: "Public orchestrators",
  subtitle:
    "Architect, Builder, Craftsman — three entrypoints that own outcomes and compose the delivery loop.",
};

export const COMMANDS: Command[] = [
  {
    name: "/architect-solution-foundation",
    description:
      "Architect: map a brownfield solution or design a greenfield one, with optional scaffolding.",
  },
  {
    name: "/build-requested-change",
    description:
      "Builder: turn a requirement into one or more specs, then implement, verify, qualify, and ship.",
  },
  {
    name: "/craft-lasting-quality",
    description:
      "Craftsman: consolidate durable findings and ship behavior-preserving remediation.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "/explore",
    pipeline: "Context",
    description:
      "Agent setup, system architecture, conceptual model, and PRD shell from the repo tree and guides.",
  },
  {
    name: "/extract",
    pipeline: "Context",
    description:
      "Per-container architecture, schemas, and coding rules from source.",
  },
  {
    name: "/scaffoldify",
    pipeline: "Context",
    description:
      "Materialize a confirmed, installable solution scaffold.",
  },
  {
    name: "/specify",
    pipeline: "Capture",
    description:
      "Write a functional or technical specification — kind named by the caller.",
  },
  {
    name: "/scope-change",
    pipeline: "Capture",
    description:
      "Discover affected specs and write a coordinated change manifest.",
  },
  {
    name: "/planify",
    pipeline: "Build",
    description:
      "One implementation plan per affected container.",
  },
  {
    name: "/codify",
    pipeline: "Build",
    description:
      "Write application code, unit tests, and e2e suite updates during delivery.",
  },
  {
    name: "/verify",
    pipeline: "Prove",
    description:
      "E2e verdict for a spec, change, or findings regression scope — report only.",
  },
  {
    name: "/qualify",
    pipeline: "Prove",
    description:
      "Quality-gate verdict for a delivery or findings diff — report only.",
  },
  {
    name: "/shipify",
    pipeline: "Ship",
    description:
      "Version, changelog, reconciled docs, and tag after qualification.",
  },
  {
    name: "/skillify",
    pipeline: "Meta",
    description:
      "Create or update skills under .agents/skills/.",
  },
];

export const SKILLS_BY_PIPELINE: SkillPipeline[] = [
  "Context",
  "Capture",
  "Build",
  "Prove",
  "Ship",
  "Meta",
];
