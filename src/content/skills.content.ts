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
    "Four commands open the doors. Private primitives do the steps underneath.",
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
  title: "The commands",
  subtitle:
    "Architect, Builder, Craftsman. Four entrypoints. Pick the outcome you need.",
};

export const COMMANDS: Command[] = [
  {
    name: "/architect-initial-foundation",
    description:
      "Start from a proved archetype, or document the code you already have. Run it again when the docs must match the code.",
  },
  {
    name: "/architect-requested-spec",
    description:
      "Turn a request into an approved draft. Build it later. A draft does not block a spec in progress.",
  },
  {
    name: "/build-requested-spec",
    description:
      "Turn a request, a draft, or a debt item into one spec, then implement, prove, and ship.",
  },
  {
    name: "/craft-lasting-quality",
    description:
      "Repair debt from urgent to small. Or ask it to upgrade the dependencies.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "/outline-system",
    pipeline: "Context",
    description: "Map the system from the code: architecture, model, and schemas.",
  },
  {
    name: "/rule-project",
    pipeline: "Context",
    description: "Write one project's rules and the commands it actually runs.",
  },
  {
    name: "/define-spec",
    pipeline: "Capture",
    description: "Turn one request into an approved spec, or a draft for later.",
  },
  {
    name: "/implement-project",
    pipeline: "Build",
    description: "Write the code and the tests for one project. Check only what changed.",
  },
  {
    name: "/verify-behavior",
    pipeline: "Prove",
    description: "Acceptance is red or green. Green is the proof. Red goes back.",
  },
  {
    name: "/review-implementation",
    pipeline: "Prove",
    description: "What lint and tests cannot see. Findings become urgent debt and do not block the release.",
  },
  {
    name: "/scan-quality",
    pipeline: "Prove",
    description: "Refresh the debt list — structure first, then complexity and coverage.",
  },
  {
    name: "/ship-spec",
    pipeline: "Ship",
    description: "Prove the whole system, update the product record, and release.",
  },
];

export const OTHER_SKILLS_SECTION = {
  title: "The private primitives",
  subtitle: "The steps those four commands use. Run one when you want a single step.",
};
