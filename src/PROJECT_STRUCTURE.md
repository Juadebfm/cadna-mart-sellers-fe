# Project Structure Guide

## Overview

This project uses a **professional, scalable folder structure** that makes it easy for developers to understand where different types of files belong.

---

## Directory Structure

```
src/
├── pages/                          # Full-page components (route views)
│   ├── LandingPage.tsx            # Home/landing page
│   ├── LoginPage.tsx              # Login/sign-in page
│   └── SignupPage.tsx             # Sign-up/registration page
│
├── components/                     # Reusable UI components (organized by feature)
│   ├── common/                     # Common/layout components used across pages
│   │   ├── Navbar.tsx             # Navigation header
│   │   └── Footer.tsx             # Footer component
│   │
│   ├── landing/                    # Landing page specific components
│   │   └── Faqs.tsx               # FAQ accordion section
│   │
│   └── auth/                       # Authentication related components (placeholder)
│
├── assets/                         # Static files (images, videos, etc.)
│   └── images/                     # Image assets organized by category
│       ├── logos/                  # Brand logos
│       │   ├── cadna-mart-main-logo.png
│       │   └── cadna-mart-footer-logo.png
│       │
│       └── landing/                # Landing page images
│           ├── bubble-chat-1.png
│           ├── bubble-chat-2.png
│           ├── ecommerce-vendor3d-1.png
│           ├── ecommerce-vendor3d-2.png
│           ├── landing-page-*.png
│           └── ... (other images)
│
├── core/                           # Core business logic & utilities
│   ├── constants/                  # Application constants
│   │   └── engineeringPrinciples.ts
│   │
│   ├── hooks/                      # Custom React hooks (placeholder)
│   │
│   ├── utils/                      # Utility functions (placeholder)
│   │
│   └── types/                      # TypeScript type definitions (placeholder)
│
├── styles/                         # Global styles (placeholder)
│
├── App.tsx                         # Main app router
├── main.tsx                        # React entry point
└── index.css                       # Global CSS
```

---

## Naming Conventions

### Pages

- **Location:** `src/pages/`
- **Naming:** PascalCase (e.g., `LandingPage.tsx`, `LoginPage.tsx`)
- **Purpose:** Represent full page routes, each corresponds to a route in the router

### Components

- **Location:** `src/components/{feature}/`
- **Naming:** PascalCase (e.g., `Navbar.tsx`, `Faqs.tsx`)
- **Purpose:** Reusable UI components organized by feature/domain
- **Sub-folders:**
  - `common/` - Shared across multiple pages (Navbar, Footer)
  - `landing/` - Landing page specific components
  - `auth/` - Authentication related components

### Assets

- **Location:** `src/assets/images/{category}/`
- **Naming:** kebab-case (e.g., `cadna-mart-main-logo.png`, `bubble-chat-1.png`)
- **Organization:** Group by type (logos, landing, icons, etc.)

### Utilities & Constants

- **Location:** `src/core/{type}/`
- **Naming:** camelCase for functions (e.g., `calculateFee.ts`), PascalCase for constants
- **Types:** `src/core/types/` for TypeScript definitions
- **Hooks:** `src/core/hooks/` for custom React hooks

---

## Routing Structure

| Route     | Page         | File                        |
| --------- | ------------ | --------------------------- |
| `/`       | Landing/Home | `src/pages/LandingPage.tsx` |
| `/login`  | Sign In      | `src/pages/LoginPage.tsx`   |
| `/signup` | Sign Up      | `src/pages/SignupPage.tsx`  |

---

## Import Examples

### Importing Pages

```tsx
import LandingPage from "./pages/LandingPage";
```

### Importing Components

```tsx
import Navbar from "../components/common/Navbar";
import Faqs from "../components/landing/Faqs";
```

### Importing Assets

```tsx
import logo from "../assets/images/logos/cadna-mart-main-logo.png";
import landingImage from "../assets/images/landing/landing-page-section-1-img.png";
```

### Importing Utilities

```tsx
import { calculateFee } from "../core/utils/calculations";
import { API_BASE_URL } from "../core/constants/config";
```

---

## Best Practices

1. **Keep components small and focused** - Each component should have a single responsibility
2. **Use clear, descriptive names** - File and component names should be self-explanatory
3. **Group related files** - Keep related components and assets in the same folder
4. **Avoid deeply nested folders** - Maximum 3 levels deep is ideal
5. **Use index files for exports** - Optional but helps keep imports clean
6. **Update imports when reorganizing** - Always verify imports work after moving files

---

## Adding New Features

When adding a new feature:

1. Create a new folder in `src/components/{featureName}/` if it's feature-specific
2. Place components in that folder
3. Create a folder in `src/assets/images/{featureName}/` for feature-specific images
4. Add any feature-specific types to `src/core/types/`
5. Update `src/App.tsx` if adding new routes

---

## Notes

- The `src/app/` folder is currently reserved for future expansion
- The `src/styles/` folder is prepared for global stylesheets if needed
- All TypeScript files should have the `.tsx` extension (for components) or `.ts` (for utilities)
- Consider adding an `index.ts` file in each folder for cleaner exports when the project grows
