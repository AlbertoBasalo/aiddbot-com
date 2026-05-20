export type SkillPipeline = "Architect" | "Builder" | "Craftsman" | "Designer";

export type SkillStatus = "available" | "wip";

export type Skill = {
  name: string;
  pipeline: SkillPipeline;
  description: string;
  examplePrompt: string;
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
    pipeline: "Architect",
    description: "Sets up your project environment and main instructions file.",
    examplePrompt: "/initialize this project",
    status: "available",
  },
  {
    name: "/explore",
    pipeline: "Architect",
    description:
      "Reverse-engineers legacy code for architecture insights (brownfield projects).",
    examplePrompt: "/explore this codebase",
    status: "available",
  },
  {
    name: "/extract",
    pipeline: "Architect",
    description:
      "Extracts real rules and conventions from your codebase to guide generation.",
    examplePrompt: "/extract from this source code",
    status: "available",
  },
  {
    name: "/specify",
    pipeline: "Builder",
    description: "Writes clear specifications with formal acceptance criteria.",
    examplePrompt: "/specify a feature requirement",
    status: "available",
  },
  {
    name: "/planify",
    pipeline: "Builder",
    description: "Breaks specs into concrete, ordered implementation steps.",
    examplePrompt: "/planify the specification",
    status: "available",
  },
  {
    name: "/codify",
    pipeline: "Builder",
    description: "Generates code that follows your plans and your rules.",
    examplePrompt: "/codify the plan",
    status: "available",
  },
  {
    name: "/verify",
    pipeline: "Builder",
    description: "Writes and runs E2E tests so specs are actually met.",
    examplePrompt: "/verify the code",
    status: "available",
  },
  {
    name: "/review",
    pipeline: "Craftsman",
    description: "Reviews code for quality and generates a feedback report.",
    examplePrompt: "/review the source code",
    status: "available",
  },
  {
    name: "/repair",
    pipeline: "Craftsman",
    description: "Fixes issues from review or verify reports.",
    examplePrompt: "/repair reported issues",
    status: "available",
  },
  {
    name: "/release",
    pipeline: "Craftsman",
    description:
      "Bumps version, updates CHANGELOG and docs, marks specs released.",
    examplePrompt: "/release a new version",
    status: "available",
  },
  {
    name: "/repository",
    pipeline: "Craftsman",
    description:
      "Manages git branches and conventional commits; invoked by other skills.",
    examplePrompt: "Used automatically by /codify, /repair, and other skills",
    status: "available",
  },
  {
    name: "/refactor",
    pipeline: "Craftsman",
    description: "Improves existing code without changing its behavior.",
    examplePrompt: "/refactor the codebase",
    status: "wip",
  },
  {
    name: "/design",
    pipeline: "Designer",
    description: "Creates design systems and design tokens.",
    examplePrompt: "/design the project",
    status: "available",
  },
];

export const SKILLS_BY_PIPELINE: SkillPipeline[] = [
  "Architect",
  "Builder",
  "Craftsman",
  "Designer",
];
