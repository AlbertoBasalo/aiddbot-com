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
    "Three public orchestrators open the doors. Internal workers run the middle of delivery. Focused primitives stay available when you want a single step.",
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
    "Architect, Builder, Craftsman — three entrypoints. Each owns an outcome and composes the skills underneath.",
};

export const COMMANDS: Command[] = [
  {
    name: "/architect-solution-foundation",
    description:
      "Prepare the repository: scaffold when there is no application source, then map architecture and working rules.",
  },
  {
    name: "/build-requested-change",
    description:
      "Turn a natural-language request into one small spec, then implement, verify, qualify, and ship it.",
  },
  {
    name: "/craft-lasting-quality",
    description:
      "Run system-wide quality checks, update technical-debt records, and deliver one coherent repair through the same delivery flow.",
  },
];

export const WORKERS_SECTION = {
  title: "Internal workers",
  subtitle:
    "You do not invoke these. Builder and Craftsman use them after a spec is approved.",
};

export const WORKERS: Command[] = [
  {
    name: "implement-change",
    description:
      "Coordinate implementation for one approved spec — code and the tests that spec requires.",
  },
  {
    name: "ship-implementation",
    description:
      "Refresh verification and qualification evidence, then release one spec.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "/explore",
    pipeline: "Context",
    description:
      "Agent setup, system architecture, conceptual model, and missing product records from the repository.",
  },
  {
    name: "/extract",
    pipeline: "Context",
    description: "Per-project architecture, schemas, and coding rules from source.",
  },
  {
    name: "/scaffoldify",
    pipeline: "Context",
    description:
      "Scaffold projects, install required dependencies, and reconcile main docs. No functional product code.",
  },
  {
    name: "/specify",
    pipeline: "Capture",
    description:
      "Define one delivery: branch, spec, PRD proposal, reserved IDs, and approval.",
  },
  {
    name: "/codify",
    pipeline: "Build",
    description:
      "Write application code, unit tests, and acceptance-test updates during delivery.",
  },
  {
    name: "/verify",
    pipeline: "Prove",
    description:
      "Acceptance-behavior verdict for a spec — report only. Green ships; red blocks.",
  },
  {
    name: "/qualify",
    pipeline: "Prove",
    description:
      "Changed-code quality verdict — report only. Green or amber ships; red blocks. Amber becomes debt.",
  },
  {
    name: "/curate-quality",
    pipeline: "Prove",
    description:
      "Run configured system-wide quality checks and refresh technical-debt records.",
  },
  {
    name: "/shipify",
    pipeline: "Ship",
    description:
      "Apply PRD changes, update debt and changelog records, and integrate the branch.",
  },
  {
    name: "/skillify",
    pipeline: "Meta",
    description: "Create or update skills under .agents/skills/.",
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
