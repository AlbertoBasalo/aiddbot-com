export type SkillPipeline = "Architecture" | "Building" | "Crafting";

export type SkillStatus = "available" | "wip";

export type Skill = {
  name: string;
  pipeline: SkillPipeline;
  description: string;
  status: SkillStatus;
};

export const SKILLS_SECTION = {
  title: "Skills catalog",
  subtitle:
    "Invoke any skill in your agent chat. Each one is a markdown file in your project's .agents folder.",
};

export const SKILLS: Skill[] = [
  {
    name: "/initialize",
    pipeline: "Architecture",
    description: "Sets up your project environment and main instructions file.",
    status: "available",
  },
  {
    name: "/explore",
    pipeline: "Architecture",
    description:
      "Reverse-engineers legacy code for architecture insights (brownfield projects).",
    status: "available",
  },
  {
    name: "/extract",
    pipeline: "Architecture",
    description:
      "Extracts real rules and conventions from your codebase to guide generation.",
    status: "available",
  },
  {
    name: "/specify",
    pipeline: "Building",
    description: "Writes clear specifications with formal acceptance criteria.",
    status: "available",
  },
  {
    name: "/planify",
    pipeline: "Building",
    description: "Breaks specs into concrete, ordered implementation steps.",
    status: "available",
  },
  {
    name: "/codify",
    pipeline: "Building",
    description: "Generates code that follows your plans and your rules.",
    status: "available",
  },
  {
    name: "/verify",
    pipeline: "Building",
    description: "Writes and runs E2E tests so specs are actually met.",
    status: "available",
  },
  {
    name: "/review",
    pipeline: "Crafting",
    description: "Reviews code for quality and generates a feedback report.",
    status: "available",
  },
  {
    name: "/repair",
    pipeline: "Crafting",
    description: "Fixes issues identified during review.",
    status: "available",
  },
  {
    name: "/repository",
    pipeline: "Crafting",
    description: "Manages repository tasks with git commits and branches.",
    status: "wip",
  },
  {
    name: "/refactor",
    pipeline: "Crafting",
    description: "Improves existing code without changing its behavior.",
    status: "wip",
  },
  {
    name: "/release",
    pipeline: "Crafting",
    description:
      "Prepares and publishes a new release, including changelog generation.",
    status: "wip",
  },
];
