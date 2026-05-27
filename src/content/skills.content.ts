export type SkillPipeline = "Architect" | "Builder" | "Craftsman" | "Designer";

export type SkillStatus = "ready" | "wip";

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
    "Invoke any skill in your chat, or let your agent decide. ",
};

export const SKILLS: Skill[] = [
  {
    name: "/initialize",
    pipeline: "Architect",
    description: "Sets up your project environment and main instructions file.",
    examplePrompt: "/initialize this project",
    status: "ready",
  },
  {
    name: "/explore",
    pipeline: "Architect",
    description:
      "Systems and architectural decisions.",
    examplePrompt: "/explore this solution",
    status: "ready",
  },
  {
    name: "/excavate",
    pipeline: "Architect",
    description:
      "Reverse-engineers legacy code for architecture insights.",
    examplePrompt: "/excavate this project",
    status: "ready",
  },
  {
    name: "/extract",
    pipeline: "Architect",
    description:
      "Extracts real rules and conventions from your codebase.",
    examplePrompt: "/extract from this codebase",
    status: "ready",
  },
  {
    name: "/specify",
    pipeline: "Builder",
    description: "Writes clear specifications with formal acceptance criteria.",
    examplePrompt: "/specify a feature requirement",
    status: "ready",
  },
  {
    name: "/planify",
    pipeline: "Builder",
    description: "Breaks specs into concrete, ordered implementation steps.",
    examplePrompt: "/planify the specification",
    status: "ready",
  },
  {
    name: "/codify",
    pipeline: "Builder",
    description: "Generates code that follows your plans and your rules.",
    examplePrompt: "/codify the plan",
    status: "ready",
  },
  {
    name: "/verify",
    pipeline: "Builder",
    description: "Writes and runs E2E tests so specs are actually met.",
    examplePrompt: "/verify the code",
    status: "ready",
  },
  {
    name: "/rectify",
    pipeline: "Builder",
    description: "Rectifies issues from verify reports.",
    examplePrompt: "/rectify the issues",
    status: "ready",
  },
  {
    name: "/review",
    pipeline: "Craftsman",
    description: "Reviews code for quality and generates a feedback report.",
    examplePrompt: "/review the source code",
    status: "ready",
  },
  {
    name: "/repair",
    pipeline: "Craftsman",
    description: "Fixes issues from review or verify reports.",
    examplePrompt: "/repair reported issues",
    status: "ready",
  },
  {
    name: "/release",
    pipeline: "Craftsman",
    description: "Bumps version, updates CHANGELOG and artifacts.",
    examplePrompt: "/release a new version",
    status: "ready",
  },
  {
    name: "/repository",
    pipeline: "Craftsman",
    description: "Manages git branches and conventional commits.",
    examplePrompt: "Used automatically by other skills",
    status: "ready",
  },
  {
    name: "/refactor",
    pipeline: "Craftsman",
    description: "Improves existing code without changing its behavior.",
    examplePrompt: "(work in progress) ",
    status: "wip",
  },
  {
    name: "/design",
    pipeline: "Designer",
    description: "Creates design systems and design tokens.",
    examplePrompt: "/design the project",
    status: "ready",
  },
];

export const SKILLS_BY_PIPELINE: SkillPipeline[] = [
  "Architect",
  "Builder",
  "Craftsman",
  "Designer",
];
