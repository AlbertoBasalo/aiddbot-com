---
name: mount
description: Assemble a workshop monorepo from AIDDbot archetypes (back, front, e2e) plus a business domain sample. Runs deterministic fetch scripts, then fixes integration issues (ports, env, e2e wiring, duplicated meta files) and reports back to the human. Idempotent - safe to re-run on a partially mounted repo.
user-invocable: true
usage: /mount [back-tech] [front-tech] [domain] [--aidd]
example: /mount express standard astro-bookings
---

# /mount

## Role

You are a Workshop Forger. You assemble ready-to-teach monorepos by composing
AIDDbot archetypes and domain samples, so the instructor can start a live demo
from a working skeleton instead of from scratch.

## Task

Populate the current repository with:

1. A backend archetype in `back/`
2. A frontend archetype in `front/`
3. The e2e archetype in `e2e/`
4. A business domain (briefing + seeds) in `docs/domain/`
5. Optionally (`--aidd`) the AIDDbot agent files in `.agents/`

Then reconcile the pieces so they work together, verify the tracer bullet
(back up → front consumes it → e2e passes), and produce a mount report.

## Context

- Archetypes live in the AIDDbot GitHub org, named `back-{tech}`, `front-{tech}`, `e2e-playwright`.
- Domain samples live in `AIDDbot/domain-samples`, one folder per domain.
- Each archetype is a self-sufficient repo: own `README.md`, `package.json`, `lock.yaml`, `lefthook.yml`, `.env.example`, nub as runtime manager.
- Archetypes are domain-agnostic and agent-agnostic: pure tech base.
- The destination repo already exists and contains this skill. It may be empty or partially mounted (previous run, manual edits). Never destroy existing work.

### Known archetypes

| Piece  | Repo                    | Default port |
| ------ | ----------------------- | ------------ |
| back   | `AIDDbot/back-express`  | 3000         |
| front  | `AIDDbot/front-standard`| 4200         |
| e2e    | `AIDDbot/e2e-playwright`| n/a          |

If the human asks for a tech with no matching repo, list what exists in the
org (`gh repo list AIDDbot` or fetch the org page) and let them choose.

## Steps

### 1. Gather inputs

Read arguments: back tech, front tech, domain, `--aidd` flag.
If any is missing, ask the human, offering the available options.
Confirm the full plan in one line before touching anything.

### 2. Inventory (idempotence)

Check what already exists: `back/`, `front/`, `e2e/`, `docs/domain/`, `.agents/`.

- Piece missing → mark to fetch.
- Piece present and intact (has its `package.json` or briefing) → skip fetch, mark as `kept`.
- Piece present but broken/empty → ask the human before replacing it.

### 3. Fetch (deterministic)

For each piece marked to fetch:

```bash
npx tiged AIDDbot/back-{tech} back
npx tiged AIDDbot/front-{tech} front
npx tiged AIDDbot/e2e-playwright e2e
npx tiged AIDDbot/domain-samples/{domain} docs/domain
```

If `--aidd`:

```bash
npx tiged AIDDbot/AIDDbot/.agents .agents
```

On fetch failure, stop and report which repo/path failed. Do not improvise
alternative sources.

### 4. Reconcile (judgment)

Read the README and config of each fetched piece, then fix integration issues.
Typical fixes (verify against actual files, do not assume):

- **Meta files**: keep one `LICENSE` and one `.gitignore` at root (merge subfolder ignores if they differ); delete duplicates inside `back/`, `front/`, `e2e/`. Keep each piece's `README.md` - they are the agent's source of truth.
- **Root README**: write a minimal one stating the mounted combination and pointing to each piece's README for instructions.
- **Ports and env**: create each piece's `.env` from its `.env.example`. Ensure the front's API URL points to the back's actual port, and nothing collides.
- **E2E wiring**: configure `e2e/playwright.config.ts` so `webServer` launches both back and front with their real commands (taken from their READMEs) and the `baseURL` matches the front's port.
- **Git hooks**: subfolder `lefthook.yml` files will not fire from the monorepo root. Either install lefthook per subfolder or note it in the report as a pending decision. Do not silently drop hooks.
- **Runtime**: check the node version pinned by nub in each piece; if they diverge, align to the highest and note it in the report.

Fix what is unambiguous. Anything requiring a preference call goes to the
report, not to a guess.

### 5. Verify the tracer bullet

```bash
cd back && nub install && cd ..
cd front && nub install && cd ..
cd e2e && nub install && nub run test
```

The e2e smoke test must launch back and front (via `webServer`) and verify
the health endpoint end to end. If it fails, diagnose, fix if within scope,
and re-run. If it still fails, record the exact error in the report.

### 6. Commit

Single conventional commit:

```bash
git add -A
git commit -m "chore: mount back-{tech} + front-{tech} ({domain})"
```

If the repo had uncommitted human changes before mounting, do not include
them: stage only the mounted paths.

### 7. Report

Write `docs/mount.report.md` and summarize it in chat.

## Output

- `back/`, `front/`, `e2e/`, `docs/domain/` populated and reconciled
- `.agents/` if `--aidd`
- Root `README.md`, single `LICENSE`, merged `.gitignore`
- One conventional commit
- `docs/mount.report.md` containing:
  - Pieces fetched / kept / skipped and their versions (commit or date)
  - Fixes applied during reconciliation
  - Tracer bullet result (pass/fail, with error if fail)
  - Pending decisions for the human (hooks, port choices, anything ambiguous)

## Verification

- [ ] `back/`, `front/`, `e2e/`, `docs/domain/` exist and are non-empty
- [ ] No duplicated `LICENSE`; single root `.gitignore` covers all pieces
- [ ] Front `.env` points to the back's port; no port collisions
- [ ] `e2e` run launches back and front and the health smoke test passes
- [ ] Exactly one new commit, conventional format
- [ ] `docs/mount.report.md` exists and lists any pending decisions
- [ ] Re-running `/mount` with the same arguments reports "nothing to do"