# Cadna Mart Sellers FE

React + TypeScript frontend starter with a standards-first setup.

## Stack

- React 19
- TypeScript (strict mode)
- Vite
- Tailwind CSS v4
- ESLint (type-aware and strict)
- Husky (local Git hooks)
- GitHub Actions (PR quality gates)

## Core Engineering Standards

### SOLID

- **Single Responsibility**: keep components, hooks, services, and utilities focused on one reason to change.
- **Open-Closed**: prefer extension through composition and clear interfaces over editing stable modules.
- **Liskov Substitution**: preserve contract behavior when extending shared abstractions.
- **Interface Segregation**: use small, task-specific types and interfaces.
- **Dependency Inversion**: depend on abstractions and boundary contracts instead of concrete implementation details.

### DRY

- Extract repeated logic into shared hooks/utilities.
- Reuse type definitions instead of duplicating shapes.
- Centralize constants and configuration.

### Definition of Done (Required)

Every change must pass all quality gates:

- `npm run typecheck`
- `npm run lint`
- `npm run build`

No code should be merged unless all checks pass locally and in CI.

## Architecture Baseline

```text
src/
  core/
    constants/              # global constants and immutable config
  App.tsx                   # top-level app shell
  index.css                 # global styles + Tailwind import
  main.tsx                  # app bootstrap
```

As the project grows, use this directional structure:

```text
src/
  app/                      # app-level providers, router, layouts
  core/                     # shared domain-neutral utilities, constants, types
  features/                 # business features (self-contained)
    <feature-name>/
      components/
      hooks/
      services/
      types/
  shared/                   # generic UI primitives and cross-feature utilities
```

## Branching and Delivery Flow

Required flow:

`samad -> dev -> main`

### Branch Rules

- `samad`: Samad pushes here directly.
- `dev`: no direct pushes; changes arrive only through Pull Requests.
- `main`: protected release branch; only repository owner can push/merge.

### Important Note on "pre-add"

Git has no native `pre-add` hook. The closest strict enforcement is:

- `pre-commit` hook (configured)
- `pre-push` hook (configured)
- required PR checks in GitHub Actions (configured)

## Local Setup

1. Install dependencies:
   `npm install`
2. Start dev server:
   `npm run dev`

## Quality Automation

### Husky Hooks

- `.husky/pre-commit`: runs `npm run validate`
- `.husky/pre-push`: runs `npm run validate`

`npm run validate` runs: typecheck + lint + build.

### GitHub Actions

Workflow: `.github/workflows/pr-checks.yml`

On every PR into `dev` or `main`, CI runs:

- install dependencies (`npm ci`)
- typecheck
- lint
- build

## GitHub Settings to Enforce Permissions

Apply these in **Settings -> Branches** (or **Rulesets**) on GitHub:

1. **Rule for `main`**
   - Require pull request before merging.
   - Require status checks and select `PR Checks / Typecheck, Lint, Build`.
   - Restrict who can push to only repository owner.
2. **Rule for `dev`**
   - Require pull request before merging.
   - Require status checks and select `PR Checks / Typecheck, Lint, Build`.
   - Disable direct pushes.
3. **Rule for `samad`**
   - Restrict push access to Samad (and owner if desired for recovery/admin).

## Ownership

`CODEOWNERS` is set so the repository owner is the default code owner:

- `.github/CODEOWNERS`

This helps enforce review discipline aligned with the branch strategy.
