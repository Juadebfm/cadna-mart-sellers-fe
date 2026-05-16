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
│   │   ├── Button.tsx              # Button + ButtonLink (primary / white / white-glow / outline)
│   │   └── SectionPill.tsx         # Uppercase pill above section headings
│   │
│   ├── layout/                     # Site-wide layout components
│   │   ├── Navbar.tsx              # Sticky header w/ scroll-state shadow
│   │   ├── MobileMenu.tsx          # Portal'd drawer for <lg screens
│   │   └── Footer.tsx              # Newsletter + multi-column footer
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
└── index.css                       # Tailwind import + globals (overflow, scroll-padding)
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

Before adding a new button/pill/card, check `components/ui/`. The CTA button is parameterized via `variant` and `size`:

```tsx
import { ButtonLink, Button } from "@/components/ui/Button";

<ButtonLink to="/signup" variant="primary">Start Selling</ButtonLink>     // indigo gradient
<ButtonLink to="/signup" variant="white">Start Selling Today</ButtonLink> // white on dark
<ButtonLink to="/signup" variant="white-glow">Start Selling</ButtonLink>  // hero variant w/ glow
<ButtonLink to="/signup" variant="outline">Sign in</ButtonLink>           // outlined
<ButtonLink to="/signup" size="sm">Sign in</ButtonLink>                   // 40px height, used in Navbar
```

**Default button size is the canonical primary CTA**: `h-[54px]`, `min-w-[245px]` on `sm:+`, full-width on mobile, `py-[18px]`, `rounded-[8px]`, `text-[16px]`. Don't hand-roll a one-off button with these dimensions — use the primitive.

Section pills follow the same pattern. **Section labels are always uppercase** — `SectionPill` applies `uppercase` automatically, so pass the copy in any case.

```tsx
import SectionPill from "@/components/ui/SectionPill";

<SectionPill color="green">Why Cadna Mart</SectionPill>   // renders "WHY CADNA MART"
<SectionPill color="purple">frequently asked questions</SectionPill>
<SectionPill color="indigo">How it works</SectionPill>
```

### Naming

- **Components & pages:** PascalCase (`Hero.tsx`, `SignupEmail.tsx`)
- **Schemas, utilities, hooks:** camelCase (`signup.ts`, `useDebounce.ts`)
- **Image assets:** kebab-case (`cadna-mart-main-logo.png`)

---

## Landing page

`LandingPage.tsx` composes sections in this order: `Hero → HowItWorks → WhyCadnaMart → Pricing → BeforeYouStart → Faqs → ReadyToStart → Footer`.

### Section anchors (in-page navigation)

The Navbar (desktop links) and MobileMenu both target these IDs:

| Anchor      | Element that carries the `id`                          |
| ----------- | ------------------------------------------------------ |
| `#hero`     | `<section id="hero">` in [`Hero.tsx`](./src/components/landing/Hero.tsx) |
| `#pricing`  | The **inner gradient card** `<div id="pricing">` in [`Pricing.tsx`](./src/components/landing/Pricing.tsx) — not the outer `<section>`. This skips the section's `mt-[100px]` breathing-room gap so anchor jumps land on the pricing card, not in empty space above it. |
| `#faqs`     | `<section id="faqs">` in [`Faqs.tsx`](./src/components/landing/Faqs.tsx)   |
| `#support`  | `<footer id="support">` in [`Footer.tsx`](./src/components/layout/Footer.tsx) |

When adding a new in-nav section, decide whether the anchor target should be the `<section>` or an inner element — anything that has natural top whitespace (margin / spacer) above its visible header should put the `id` on the inner content, like Pricing does.

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

## Signup wizard

The wizard is a sequence of routes, each rendering one step. There is **no global store** — step-to-step data is carried via React Router's `location.state`:

```tsx
// SignupEmail.tsx — after the user enters their email
void navigate("/signup/details", { state: { email } });

// SignupDetails.tsx — reads previous step, forwards everything
const flowState = location.state as { email?: string; details?: Partial<SignupDetailsData> } | null;
// ...
void navigate("/signup/password", { state: { email, details: detailsData } });

// SignupPassword.tsx — reads back-link to "Edit" returns to /signup/details with the same state
void navigate("/signup/details", { state: { email, details } });
```

Each step:

1. Reads `location.state` to hydrate any previously-entered fields.
2. Validates locally with a schema from `src/schemas/signup.ts` (`validateEmail`, `validateSignupDetails`, etc).
3. On submit, navigates forward with the merged state.

A direct visit to `/signup/password` without `location.state` falls back to empty defaults — handle this gracefully (no crashes), but assume the user will normally arrive in-order.

### Step indicator

`SignupDetails`, `SignupPassword`, and `SignupVerify` all render a 4-step indicator at the top (Email → Details → Password → Verify). The mobile sizing differs from desktop: circles `w-8 h-8 sm:w-10 sm:h-10`, connectors `w-6 sm:w-12`, slot widths `w-12 sm:w-20`, label slots `w-16 sm:w-32` with `text-[10px] sm:text-xs`. Keep the responsive scheme consistent across all three.

---

## Forms and validation

All signup field validation lives in [`src/schemas/signup.ts`](./src/schemas/signup.ts) — **no validation logic is inlined in page components.**

Each validator follows a shared shape:

```ts
export interface EmailValidationResult { isValid: boolean; error?: string; }
export const validateEmail = (email: string): EmailValidationResult => { ... };

export interface DetailsValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof SignupDetailsData, string>>;
}
export const validateSignupDetails = (
  details: Partial<SignupDetailsData>,
): DetailsValidationResult => { ... };
```

Pages run the validator on every render (cheap) for the `canSubmit` gate, and re-run it on submit to populate field-level errors:

```tsx
const validation = validateSignupDetails(detailsData);
const canSubmit = validation.isValid && agreedToTerms;

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validation.isValid) {
    setErrors(validation.errors);
    return;
  }
  void navigate("/signup/password", { state: { email, details: detailsData } });
};
```

When adding a new step or new field, extend `signup.ts` first, then wire the validator into the page.

---

## Styling conventions

### Tailwind breakpoints (default)

| Prefix  | Min-width |
| ------- | --------- |
| `sm:`   | 640px     |
| `md:`   | 768px     |
| `lg:`   | 1024px    |
| `xl:`   | 1280px    |
| `2xl:`  | 1536px    |

### Mobile-first

Write base classes for the smallest screen, then layer `sm: md: lg:` overrides upward. Examples found across the codebase:

```tsx
// Hero heading scales up
className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[64px]"

// Stack on mobile, row on desktop
className="flex flex-col lg:flex-row gap-12"

// Step indicator shrinks on mobile
className="w-12 sm:w-20"   // slot width
className="w-8 h-8 sm:w-10 sm:h-10"  // circle size
```

The desktop nav hides at `<lg` and the hamburger reveals at the same threshold — see [`Navbar.tsx`](./src/components/layout/Navbar.tsx).

### Global CSS (in `index.css`)

Two non-obvious globals that the rest of the app depends on:

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;   /* matches Navbar height — keeps anchor jumps off the navbar */
  overflow-x: clip;
}

body {
  overflow-x: clip;            /* NOT 'hidden' — see "Sticky navbar" below */
}
```

### Avoid

- Hand-rolled buttons that duplicate `Button`'s variants/sizes.
- Hand-rolled section pills.
- Long arbitrary `text-[Npx]` ladders for the same heading — pick the responsive ladder used by sibling sections.
- `overflow-x: hidden` on `html`/`body`/section wrappers (use `overflow-x: clip` instead — see next section).

---

## Sticky navbar + mobile drawer

Two patterns to be aware of when touching the Navbar or MobileMenu.

### 1. `overflow-x: clip` on `html` and `body` — not `hidden`

`position: sticky` on the Navbar will silently break if any ancestor has `overflow: hidden` / `auto` / `scroll`, because that ancestor becomes the sticky element's scroll container. We use `overflow-x: clip` instead, which prevents horizontal scrollbars **without** establishing a scroll container, so sticky continues to track the viewport.

If you ever need to suppress horizontal overflow somewhere in the app, reach for `clip` first; `hidden` only if you have a specific scroll-trap reason.

### 2. The MobileMenu is portalled to `document.body`

`MobileMenu` calls `createPortal(..., document.body)` so the drawer is rendered as a sibling of the React root, **not** inside `<header>`. Why this matters:

> Per spec, an element with a `transform`, `filter`, `backdrop-filter`, or `will-change` other than `none` becomes the **containing block** for `position: fixed` descendants. If we put `backdrop-filter` on the sticky Navbar and rendered the drawer inside it, the drawer's `fixed inset-0` would resolve to "fill the navbar" (80px tall) rather than the viewport.

The portal eliminates that class of bug, and as a defence-in-depth the Navbar currently uses **shadow-only elevation** for its scrolled state (no `backdrop-filter`, no transform) — see [`Navbar.tsx`](./src/components/layout/Navbar.tsx). If you ever add a glassy navbar effect, you must also keep the drawer portalled.

### 3. Closing the drawer + smooth-scrolling to a section

The drawer locks `document.body.style.overflow = "hidden"` while open. When a nav item is tapped, the handler:

1. `e.preventDefault()` — cancels the browser's default anchor jump.
2. `onClose()` — flips `isOpen` to false, which (via effect) clears `body.style.overflow` and starts the 300ms slide-out.
3. `setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 320)` — fires after the body overflow lock has released, so the smooth scroll isn't fighting the scroll trap.

The 320ms is intentionally one frame past the 300ms slide-out duration. If you change the drawer's animation timing, change this too.

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
