# Cadna Mart Sellers FE

Marketing site and seller-onboarding flow for Cadna Mart, built with React 19, TypeScript, Vite, and Tailwind CSS v4.

---

## Quick start

```bash
npm install
npm run dev
```

The dev server runs on the default Vite port (usually `http://localhost:5173`).

### Available scripts

| Script             | What it does                                            |
| ------------------ | ------------------------------------------------------- |
| `npm run dev`      | Vite dev server with HMR                                |
| `npm run typecheck`| `tsc -b` — strict type-check, no emit                   |
| `npm run lint`     | ESLint, 0 warnings tolerated                            |
| `npm run build`    | Production build (`dist/`)                              |
| `npm run preview`  | Preview the production build locally                    |
| `npm run validate` | typecheck + lint + build (also runs in pre-commit / CI) |

---

## Stack

- **Framework:** React 19 + React Router v7 (lazy-loaded routes, nested layouts)
- **Language:** TypeScript with `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
- **Build tool:** Vite 8
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Icons:** `lucide-react` and `react-icons`
- **Linting:** ESLint 9 (type-aware, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)
- **Quality gates:** Husky pre-commit + GitHub Actions

---

## Project structure

```
src/
├── pages/                          # Full-page route components
│   ├── LandingPage.tsx             # Composes the landing sections
│   └── signup/                     # Multi-step signup wizard
│       ├── SignupEmail.tsx
│       ├── SignupDetails.tsx
│       ├── SignupPassword.tsx
│       ├── SignupVerify.tsx
│       ├── SignupComplete.tsx
│       └── SignupApplicationStatus.tsx
│
├── components/
│   ├── ui/                         # Reusable design-system primitives
│   │   ├── Button.tsx              # Button + ButtonLink (primary / white / white-glow)
│   │   └── SectionPill.tsx         # Uppercase pill above section headings
│   │
│   ├── layout/                     # Site-wide layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   └── landing/                    # Landing-page section components
│       ├── Hero.tsx
│       ├── HowItWorks.tsx
│       ├── WhyCadnaMart.tsx
│       ├── Pricing.tsx
│       ├── BeforeYouStart.tsx
│       ├── Faqs.tsx
│       └── ReadyToStart.tsx
│
├── assets/images/
│   ├── logos/                      # Header / footer brand logos
│   ├── landing/                    # Landing-page imagery
│   └── signup/                     # Signup-flow imagery
│
├── schemas/
│   └── signup.ts                   # Form-validation logic for signup
│
├── App.tsx                         # Routes (lazy-loaded, nested under /signup)
├── main.tsx                        # React entry point
└── index.css                       # Tailwind import + globals
```

### Path alias

Imports use `@/` instead of long relative paths. Configured in [`tsconfig.app.json`](./tsconfig.app.json) (`paths`) and [`vite.config.ts`](./vite.config.ts) (`resolve.alias`).

```tsx
import { ButtonLink } from "@/components/ui/Button";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import { validateEmail } from "@/schemas/signup";
```

---

## Architecture conventions

### Component layers

| Layer            | Lives in                | Responsibilities                                                                       |
| ---------------- | ----------------------- | -------------------------------------------------------------------------------------- |
| **UI primitive** | `components/ui/`        | Reusable presentation widgets. No page knowledge, no copy.                             |
| **Layout**       | `components/layout/`    | Header, footer, page shells.                                                           |
| **Section**      | `components/landing/`   | Larger landing-page chunks composed of UI primitives. Owns its copy and section markup.|
| **Page**         | `pages/`                | Route entry. Composes layout + sections; almost no markup of its own.                  |

A page should mostly *compose*. If a page grows past ~150 lines it's a signal to extract sections.

### Reusing primitives

Before adding a new button/pill/card, check `components/ui/`. The CTA button is parameterized via the `variant` prop:

```tsx
import { ButtonLink, Button } from "@/components/ui/Button";

<ButtonLink to="/signup" variant="primary">Start Selling</ButtonLink>     // gradient
<ButtonLink to="/signup" variant="white">Start Selling Today</ButtonLink> // white on dark
<ButtonLink to="/signup" variant="white-glow">Start Selling</ButtonLink>  // hero variant w/ glow
```

Section pills follow the same pattern:

```tsx
import SectionPill from "@/components/ui/SectionPill";

<SectionPill color="green">Why Cadna Mart</SectionPill>
```

### Naming

- **Components & pages:** PascalCase (`Hero.tsx`, `SignupEmail.tsx`)
- **Schemas, utilities, hooks:** camelCase (`signup.ts`, `useDebounce.ts`)
- **Image assets:** kebab-case (`cadna-mart-main-logo.png`)

---

## Routing

Routes are declared in [`src/App.tsx`](./src/App.tsx), lazy-loaded via `React.lazy()`, and wrapped in `<Suspense>`. The signup wizard is nested under `/signup/*`:

| Route                | Component                  |
| -------------------- | -------------------------- |
| `/`                  | `LandingPage`              |
| `/signup`            | `SignupEmail`              |
| `/signup/details`    | `SignupDetails`            |
| `/signup/password`   | `SignupPassword`           |
| `/signup/verify`     | `SignupVerify`             |
| `/signup/complete`   | `SignupComplete`           |
| `/signup/status`     | `SignupApplicationStatus`  |

To add a new route, declare a `lazy(() => import(...))` component and slot it into the routes tree.

---

## Engineering standards

### SOLID
- **Single Responsibility** — components, hooks, schemas, and utilities each have one reason to change.
- **Open-Closed** — extend through composition (variants, props) before editing stable modules.
- **Liskov Substitution** — preserve contract behavior when extending shared abstractions.
- **Interface Segregation** — small, task-specific types and interfaces.
- **Dependency Inversion** — depend on abstractions and boundary contracts, not concrete implementation details.

### DRY
- Extract repeated styling into `components/ui/` primitives, not copy-pasted Tailwind class strings.
- Repeated card / list shapes → data array + `.map()`, not 6 hand-written JSX blocks.
- Centralize validation logic in `src/schemas/`.

### Definition of Done

Every change must pass:

- `npm run typecheck`
- `npm run lint`
- `npm run build`

No PR is merged unless all three pass locally and in CI.

---

## Branching and delivery

Required flow: `samad → dev → main`

| Branch  | Push policy                                                       |
| ------- | ----------------------------------------------------------------- |
| `samad` | Samad pushes here directly.                                       |
| `dev`   | No direct pushes — changes arrive only via Pull Request.          |
| `main`  | Protected release branch; only the repository owner can merge.    |

### A note on "pre-add"

Git has no native `pre-add` hook. Strict enforcement is layered as:

- `pre-commit` and `pre-push` Husky hooks (run `npm run validate`)
- Required PR checks in GitHub Actions

---

## Quality automation

### Husky hooks

- `.husky/pre-commit` → `npm run validate`
- `.husky/pre-push` → `npm run validate`

### CI

GitHub Actions workflow at `.github/workflows/pr-checks.yml`. Every PR into `dev` or `main` runs:

1. `npm ci`
2. `npm run typecheck`
3. `npm run lint`
4. `npm run build`

### Branch protection (apply in GitHub Settings → Branches / Rulesets)

1. **`main`**
   - Require pull request before merging.
   - Require status check `PR Checks / Typecheck, Lint, Build`.
   - Restrict push to repository owner only.
2. **`dev`**
   - Require pull request before merging.
   - Require status check `PR Checks / Typecheck, Lint, Build`.
   - Disable direct pushes.
3. **`samad`**
   - Restrict push access to Samad (and owner for recovery/admin).

---

## Ownership

[`CODEOWNERS`](./.github/CODEOWNERS) sets the repository owner as the default reviewer. This works alongside the branch-protection rules to enforce review discipline.
