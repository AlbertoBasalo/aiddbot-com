export type SkillPipeline = "Architect" | "Builder" | "Craftsman" | "Director";

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
    "A set of skills that run in pipeline order with checkpoints to guide your review. ",
  cta: {
    text: "Invoke them, or let your agent decide.",
    link: "",
  },
};

export const SKILLS: Skill[] = [
  {
    name: "/establish",
    pipeline: "Architect",
    description: "Sets up your project environment and main instructions file.",
    examplePrompt: "/establish the project context",
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
    name: "/elaborate",
    pipeline: "Architect",
    description:
      "Elaborates on the a greenfield project context and architectural decisions.",
    examplePrompt: "/elaborate the greenfield project solution",
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
    name: "/envision",
    pipeline: "Architect",
    description: "Creates design systems and design tokens.",
    examplePrompt: "/envision the application UI design",
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
    examplePrompt: "/rectify the test issues",
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
    description: "Fixes defects from review or verify reports.",
    examplePrompt: "/repair reported defects",
    status: "ready",
  },
  {
    name: "/refactor",
    pipeline: "Craftsman",
    description: "Improves existing code without changing its behavior.",
    examplePrompt: "/refactor this module",
    status: "wip",
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
    pipeline: "Director",
    description: "Manages git branches and conventional commits.",
    examplePrompt: "Used automatically by other skills",
    status: "ready",
  },
];

export const SKILLS_BY_PIPELINE: SkillPipeline[] = [
  "Architect",
  "Builder",
  "Craftsman",
  "Director",
];
