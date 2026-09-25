export type SkillPipeline =
  | "Context"
  | "Capture"
  | "Build"
  | "Prove"
  | "Ship"
  | "Record";

export type Skill = {
  name: string;
  pipeline: SkillPipeline;
  description: string;
};

export const SKILLS_SECTION = {
  title: "Skills catalog",
  subtitle:
    "Three public orchestrators open the doors. Focused primitives do the work underneath — invoke one when you want a single step.",
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
    "Architect, Builder, Craftsman — three entrypoints. Pick the outcome you need.",
};

export const COMMANDS: Command[] = [
  {
    name: "/architect-system-foundation",
    description:
      "Prepare or understand a system. Scaffold when there is no app source. Rerun to keep docs in sync with the code.",
  },
  {
    name: "/build-requested-spec",
    description:
      "Turn a natural-language request into one small spec, then implement, prove, and ship it.",
  },
  {
    name: "/craft-lasting-quality",
    description:
      "Review quality, record technical debt, and repair one coherent slice through the same delivery flow.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "/outline-system",
    pipeline: "Context",
    description: "Map the system: architecture, conceptual model, and the records a delivery needs.",
  },
  {
    name: "/rule-project",
    pipeline: "Context",
    description: "Extract each project's rules and schemas from the source.",
  },
  {
    name: "/scaffold-system",
    pipeline: "Context",
    description:
      "Scaffold projects and install dependencies. No functional product code.",
  },
  {
    name: "/define-spec",
    pipeline: "Capture",
    description: "Write one spec, propose the PRD delta, and pause for your approval.",
  },
  {
    name: "/implement-project",
    pipeline: "Build",
    description:
      "Write the code and tests for one project. Builder authors acceptance tests; it does not run them.",
  },
  {
    name: "/verify-behavior",
    pipeline: "Prove",
    description: "Run acceptance tests and report green or red.",
  },
  {
    name: "/review-implementation",
    pipeline: "Prove",
    description:
      "Review the changed code. Green or amber ships; red goes back. Amber becomes debt.",
  },
  {
    name: "/scan-quality",
    pipeline: "Prove",
    description: "System-wide quality pass. Refreshes the technical-debt list.",
  },
  {
    name: "/ship-spec",
    pipeline: "Ship",
    description: "Apply the product delta, record lessons, version the release, and merge.",
  },
  {
    name: "/record-journal",
    pipeline: "Record",
    description: "Append a readable event to the daily process journal.",
  },
];

export const SKILLS_BY_PIPELINE: SkillPipeline[] = [
  "Context",
  "Capture",
  "Build",
  "Prove",
  "Ship",
  "Record",
];
