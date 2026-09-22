export type SkillPipeline =
  | "Context"
  | "Capture"
  | "Build"
  | "Prove"
  | "Ship"
  | "Record"
  | "Meta";

export type Skill = {
  name: string;
  pipeline: SkillPipeline;
  description: string;
};

export const SKILLS_SECTION = {
  title: "Skills catalog",
  subtitle:
    "Three public orchestrators open the doors. Focused primitives do the work underneath — and stay available when you want a single step.",
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
    name: "/architect-system-foundation",
    description:
      "Prepare the repository: scaffold when there is no application source, then document architecture, schemas, and working rules. Rerun any time to resync docs with the code.",
  },
  {
    name: "/build-requested-spec",
    description:
      "Turn a natural-language request into one small spec, then implement, verify, review, and ship it.",
  },
  {
    name: "/craft-lasting-quality",
    description:
      "Inspect system-wide quality, update technical-debt records, and deliver one coherent repair through the same delivery flow.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "/document-system",
    pipeline: "Context",
    description:
      "Agent instructions, system architecture, conceptual model, and missing product records from repository evidence.",
  },
  {
    name: "/document-project",
    pipeline: "Context",
    description:
      "Per-project architecture, database and API schemas, and coding rules from source.",
  },
  {
    name: "/scaffold-system",
    pipeline: "Context",
    description:
      "Scaffold projects, install dependencies, and wire root start and E2E scripts. No functional product code.",
  },
  {
    name: "/define-spec",
    pipeline: "Capture",
    description:
      "Define one delivery: branch, spec, PRD proposal, schema impact, reserved IDs, and approval.",
  },
  {
    name: "/implement-project",
    pipeline: "Build",
    description:
      "Write code, unit tests, and acceptance-test changes for one project — or repair reported findings.",
  },
  {
    name: "/verify-acceptance",
    pipeline: "Prove",
    description:
      "Run the acceptance tests for one spec and write a green or red verification report.",
  },
  {
    name: "/review-implementation",
    pipeline: "Prove",
    description:
      "Changed-code quality verdict — report only. Green or amber ships; red returns for repair. Amber becomes debt.",
  },
  {
    name: "/inspect-quality",
    pipeline: "Prove",
    description:
      "Run configured system-wide quality checks and refresh technical-debt records.",
  },
  {
    name: "/ship-spec",
    pipeline: "Ship",
    description:
      "Apply PRD and schema changes, promote learned rules, sync the release version, and integrate the branch.",
  },
  {
    name: "/record-journal",
    pipeline: "Record",
    description:
      "Append one human-readable event to the daily process journal.",
  },
  {
    name: "/maintain-skills",
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
  "Record",
  "Meta",
];
