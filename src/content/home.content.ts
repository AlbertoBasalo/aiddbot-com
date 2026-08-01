import type { SectionProps } from "../components/Section.types";

export type Home = {
  layout: {
    title: string;
    description: string;
  };
  hero: SectionProps & {
    secondaryCta?: { text: string; link: string };
  };
  services: SectionProps;
  bestPractices: SectionProps;
  compatibility: SectionProps;
  finalCta: SectionProps;
};

export const HOME: Home = {
  layout: {
    title: "AIDDbot — Production-ready agent skills",
    description:
      "AI coding agents can generate code. AIDDbot builds software you can trust — spec-driven skills for Cursor, Copilot, Claude Code, and more.",
  },
  hero: {
    title: "AIDDbot",
    subtitle:
      "AIDDbot is a harness of skills, commands and subagents that works with any agent.",
    cards: [],
    cta: {
      text: "Build software you can trust",
      link: "",
    }
  },
  services: {
    title: "Why do  you need AIDD?",
    subtitle:
      "The agents are effective in isolated tasks; AI-Driven Development helps you build  real-world projects.",
    cards: [
      {
        title: "Detail or invent",
        description: "Lack of context produces plausible invention.",
        cta: {
          text: "Spec-Driven Development imposes detailed intent.",
          link: "",
        }
      },
      {
        title: "Guide or chaos",
        description: "Code that ignores your standards.",
        cta: {
          text: "Rules over tools tailored to the project.",
          link: "",
        }
      },
      {
        title: "Verify or hope",
        description: "Silent drift until fixes are expensive.",
        cta: {
          text: "Human in the loop at critical checkpoints.",
          link: "",
        }
      },
    ],
    cta: {
      text: "Get started",
      link: "/getting-started/",
    },
  },
  bestPractices: {
    title: "ABC — three roles, one lifecycle",
    subtitle:
      "Architect, Builder, Craftsman. Three commands that chain skills into fresh subagents and keep the context window clean.",
    cards: [
      {
        title: "Architect",
        description:
          "Maps what is there: system view, schemas, and coding rules. Works on greenfield and legacy repos alike.",
        cta: {
          text: "/architect-map",
          link: "",
        }
      },
      {
        title: "Builder",
        description:
          "Turns a requirement into a spec, wait for your approval, then plan, build, verify, qualify, and ship.",
        cta: {
          text: "/builder-ship",
          link: "",
        }
      },
      {
        title: "Craftsman",
        description:
          "Re-maps for drift or bring your own proposal, then ship each fix through /ship-spec.",
        cta: {
          text: "/craftsman-refactor",
          link: "",
        }
      },
    ],
    cta: {
      text: "See the workflow",
      link: "/workflow/",
    },
  },
  compatibility: {
    title: "Plain markdown. Any agent.",
    subtitle:
      "No CLI, no package install, just copy the `.agents` folder and run. AIDDbot works with the editors you already use.",
    cards: [
      {
        title: "Antigravity · Cursor · Devin · Kiro · VSCode · JetBrains · Zed",
        description: "IDEs that load project context from your repo.",
      },
      {
        title: "ClaudeCode · Codex · Copilot · Composer · OpenCode",
        description: "Agent harnesses that read or invoke skills.",
      },
    ],
    cta: {
      text: "View on GitHub",
      link: "https://github.com/AIDDbot/AIDDbot",
    },
  },
  finalCta: {
    title: "Open source, production-minded",
    subtitle:
      "AIDDbot is an open-source initiative by Alberto Basalo. Clone the skills, ship with confidence.",
    cards: [],
    cta: {
      text: "Más sobre Alberto Basalo en español",
      link: "https://albertobasalo.dev",
    },
  },
};
