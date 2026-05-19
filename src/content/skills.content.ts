export type SkillPipeline = "Architecture" | "Building" | "Crafting";

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
		pipeline: "Architecture",
		description: "Sets up your project environment and main instructions file.",
		examplePrompt: "/initialize this project\n> project main instructions",
		status: "available",
	},
	{
		name: "/explore",
		pipeline: "Architecture",
		description:
			"Reverse-engineers legacy code for architecture insights (brownfield projects).",
		examplePrompt: "/explore this codebase\n> architecture insights",
		status: "available",
	},
	{
		name: "/extract",
		pipeline: "Architecture",
		description:
			"Extracts real rules and conventions from your codebase to guide generation.",
		examplePrompt: "/extract from this source code\n> actual coding conventions",
		status: "available",
	},
	{
		name: "/specify",
		pipeline: "Building",
		description: "Writes clear specifications with formal acceptance criteria.",
		examplePrompt: "/specify a feature requirement\n> formal spec with acceptance criteria",
		status: "available",
	},
	{
		name: "/planify",
		pipeline: "Building",
		description: "Breaks specs into concrete, ordered implementation steps.",
		examplePrompt: "/planify the specification\n> clear, ordered implementation plan",
		status: "available",
	},
	{
		name: "/codify",
		pipeline: "Building",
		description: "Generates code that follows your plans and your rules.",
		examplePrompt: "/codify the plan\n> code on feat/{slug}",
		status: "available",
	},
	{
		name: "/verify",
		pipeline: "Building",
		description: "Writes and runs E2E tests so specs are actually met.",
		examplePrompt: "/verify the code\n> E2E tests that confirm specs are met",
		status: "available",
	},
	{
		name: "/review",
		pipeline: "Crafting",
		description: "Reviews code for quality and generates a feedback report.",
		examplePrompt: "/review the source code\n> actionable quality feedback report",
		status: "available",
	},
	{
		name: "/repair",
		pipeline: "Crafting",
		description: "Fixes issues from review or verify reports.",
		examplePrompt: "/repair reported issues\n> fixed code issues",
		status: "available",
	},
	{
		name: "/release",
		pipeline: "Crafting",
		description:
			"Bumps version, updates CHANGELOG and docs, marks specs released.",
		examplePrompt: "/release a new version\n> semver bump and changelog",
		status: "available",
	},
	{
		name: "/repository",
		pipeline: "Crafting",
		description:
			"Manages git branches and conventional commits; invoked by other skills.",
		examplePrompt: "Used automatically by /codify, /repair, and other skills",
		status: "available",
	},
	{
		name: "/refactor",
		pipeline: "Crafting",
		description: "Improves existing code without changing its behavior.",
		examplePrompt: "/refactor the codebase\n> better structure and maintainability",
		status: "wip",
	},
];

export const SKILLS_BY_PIPELINE: SkillPipeline[] = [
	"Architecture",
	"Building",
	"Crafting",
];
