export type SkillPipeline =
  | "Context"
  | "Capture"
  | "Build"
  | "Prove"
  | "Ship";

export type Skill = {
  name: string;
  pipeline: SkillPipeline;
  description: string;
};

export const SKILLS_SECTION = {
  title: "Skills catalog",
  subtitle:
    "Three public orchestrators open the doors. Private primitives do the steps underneath.",
  cta: {
    text: "Full reference on GitHub.",
    link: "https://github.com/AIDDbot/AIDDbot/blob/main/docs/AIDD.workflow.md",
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
      "Propose a new system and scaffold it after you approve — or document what already exists. Rerun to keep docs in sync.",
  },
  {
    name: "/build-requested-spec",
    description:
      "Turn a natural-language request into one spec that owns its requirements, then implement, prove, and ship.",
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
    description: "Map the system from the code: architecture, model, and the records a delivery needs.",
  },
  {
    name: "/rule-project",
    pipeline: "Context",
    description: "Extract each project's rules and the commands it actually runs.",
  },
  {
    name: "/define-spec",
    pipeline: "Capture",
    description: "Write one spec that owns its requirements, then pause for your approval.",
  },
  {
    name: "/implement-project",
    pipeline: "Build",
    description: "Write the code and tests for one project, and check this spec's acceptance along the way.",
  },
  {
    name: "/verify-behavior",
    pipeline: "Prove",
    description: "The acceptance evidence. Green ships; red goes back for repair.",
  },
  {
    name: "/review-implementation",
    pipeline: "Prove",
    description: "An expert look at what linters miss. Findings become debt and do not block the release.",
  },
  {
    name: "/scan-quality",
    pipeline: "Prove",
    description: "A system-wide quality pass that refreshes the debt list.",
  },
  {
    name: "/ship-spec",
    pipeline: "Ship",
    description: "Version the product, update the changelog, and merge.",
  },
];

export const OTHER_SKILLS_SECTION = {
  title: "The private primitives",
  subtitle: "The steps those three commands use. Run one when you want a single step.",
};
