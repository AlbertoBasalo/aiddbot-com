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
    "ABC commands open the doors. Skills are the steps underneath — invoke one at a time when you want to redo a step or watch what it does.",
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
  title: "ABC commands",
  subtitle:
    "Architect, Builder, Craftsman — each command chains skills in fresh subagents so no step inherits the previous step's clutter.",
};

export const COMMANDS: Command[] = [
  {
    name: "/architect-map",
    description:
      "Architect: map what is there — architecture, schemas, coding rules. Works on empty and mature repos.",
  },
  {
    name: "/builder-ship",
    description:
      "Builder: turn a requirement into a spec, then plan, build, verify, and ship.",
  },
  {
    name: "/craftsman-refactor",
    description:
      "Craftsman: re-map for drift or take your proposal, then ship the fix through /ship-spec.",
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
];

export const SKILLS_BY_PIPELINE: SkillPipeline[] = [
  "Context",
  "Capture",
  "Build",
  "Prove",
  "Ship",
];
