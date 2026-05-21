# Agents Instructions

### Behavior Guidelines

- Replace template placeholders with concrete project values.
- Business_Domain_Language: `English`.
- Chat responses should follow the user's language preference.
- Keep responses concise and explicit about assumptions.
- Ask focused closed questions only when a required value is missing.

### Environment

- **Agents_Folder**: `./.agents`
- **Product_Folder**: `./.product`
- **Source_folders**: `['/src']`
- **OS dev**: `Windows`
- **Terminal**: `PowerShell`
- **Git remote**: `https://github.com/AlbertoBasalo/aiddbot-com.git`
- **Default branch**: `master`

### Folder structure
````text
.                         # Project root
├── AGENTS.md             # Main instructions for coding agents
├── .agents/              # Skills and agent configuration
│   └── skills/           # Custom skills used by the project
├── .product/             # Product docs and planning artifacts
│   └── specs/            # Product specifications
├── public/               # Static assets served directly
├── src/                  # Astro source code
│   ├── components/       # Reusable UI components
│   ├── content/          # Blog and content collections
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route files
│   └── styles/           # Styling assets
├── dist/                 # Build output
└── package.json          # Scripts and dependencies
````

### Naming Conventions

- Use conventional commits.
- Use branch prefixes: `feat/`, `fix/`, `chore/`.
- Keep generated artifact names short and readable.
- Keep source names consistent with Astro conventions (`pages`, `layouts`, `components`).

## Product

AIDDbot is a public website built with Astro to publish landing pages for the AIDDbot project.

- AIDDbot is a set of skills to help developers build better software with AI.
- Works with any major Agent like Claude Code, Codex, Gemini, Copilot Composer, etc.
- AIDDbot implements the workflow of Spec-Driven Development, where the spec is the input for the agent to generate the code.

## Technology

- **Tooling**: Bun is the package manager for the project.

### `/src` Stack

- **Tier**: Frontend (static site generation)
- **Language**: TypeScript/JavaScript (Node.js runtime for tooling)
- **Framework**: Astro 5
- **Testing**: No automated tests configured yet (`npm run test` is placeholder)
- **Storage**: File-based content in `src/content`
- **Security**: Static deployment model, dependency hygiene, and least-privilege publishing workflow
- **Logging**: Build and runtime logs through Astro CLI and hosting platform logs

- **Development workflow**:
  - Init: `bun install`
  - Build: `bun run build`
  - Run: `bun run dev` (local), `bun run preview` (built output)
  - Test: `bun run test` (currently placeholder)
  - Lint: Not configured yet; add lint script before enforcing CI lint gate
  - Deploy: `bun run release`

- **Folder structure**:
````text
src/
├── content.config.ts     # Content collections configuration
├── components/           # Reusable UI pieces
├── content/              # Markdown content by locale/category
├── layouts/              # Shared page templates
├── pages/                # File-based routes
├── styles/               # Global and scoped styles
└── types/                # Shared type definitions
````

- **Agent Skills**:
  - `initialize`: Defines base paths, stack context, and AGENTS bootstrap.
  - `futuristic`: Applies modern, tech-forward design direction for content and UI.

## Principles

1. Think Before Coding  
Surface constraints, trade-offs, and success criteria before implementation.
2. Simplicity First  
Choose the minimal change that solves the problem and keeps maintenance cost low.
3. Surgical Changes  
Edit only the files required for the task and avoid opportunistic refactors.
4. Goal-Driven Execution  
Implement, verify, and report outcomes with clear next actions when gaps remain.

> last updated: May 2026
