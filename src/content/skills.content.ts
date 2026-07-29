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
    "Commands open the doors. Skills are the steps underneath — invoke one at a time when you want to redo a step or watch what it does.",
  cta: {
    text: "Full reference: commands, skills, checkpoints.",
    link: "",
  },
};

export type Command = {
  name: string;
  description: string;
};

export const COMMANDS_SECTION = {
  title: "Commands",
  subtitle:
    "Each command chains skills in fresh subagents so no step inherits the previous step's clutter.",
};

export const COMMANDS: Command[] = [
  {
    name: "/explore-and-extract",
    description:
      "Document what is there — architecture, schemas, coding rules. Works on empty and mature repos.",
  },
  {
    name: "/spec-feature",
    description:
      "Turn a requirement into a spec, then plan, build, verify, and release.",
  },
  {
    name: "/explore-and-refactor",
    description:
      "Re-explore for technical drift, then drive each chosen fix through /spec-refactor.",
  },
  {
    name: "/build-spec",
    description:
      "Take an existing approved spec from plan to release.",
  },
  {
    name: "/spec-refactor",
    description:
      "Write a refactor spec from a structural directive, then run the same build machine.",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "/explore",
    pipeline: "Context",
    description:
      "Agent setup, system architecture, conceptual model, and PRD shell — from the repo tree and Guide files only.",
  },
  {
    name: "/extract",
    pipeline: "Context",
    description:
      "Per-container architecture, schemas, and coding rules — one container at a time, reading source.",
  },
  {
    name: "/specify",
    pipeline: "Capture",
    description:
      "A feature spec or a refactor spec — kind named by the caller. Stops for you to read it.",
  },
  {
    name: "/planify",
    pipeline: "Build",
    description: "One implementation plan per container from the approved spec.",
  },
  {
    name: "/codify",
    pipeline: "Build",
    description:
      "The only skill that writes code — source, unit tests, and the e2e suite.",
  },
  {
    name: "/verify",
    pipeline: "Prove",
    description:
      "E2e verdict against acceptance criteria — report only, never fixes.",
  },
  {
    name: "/qualify",
    pipeline: "Prove",
    description:
      "Quality gates — report only. Failed gates loop back through /codify.",
  },
  {
    name: "/release",
    pipeline: "Ship",
    description:
      "Version, changelog, reconciled docs, and tag — only after verified.",
  },
  {
    name: "/skillify",
    pipeline: "Meta",
    description:
      "Outside the SDLC pipeline: the sole path to create or fix skills under .agents/skills/.",
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
