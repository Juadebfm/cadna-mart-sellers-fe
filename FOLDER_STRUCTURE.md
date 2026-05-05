```
cadna-mart-sellers-fe/
├── src/
│   ├── pages/                                    # Full-page route components
│   │   ├── LandingPage.tsx                      # Home page with all sections
│   │   ├── LoginPage.tsx                        # Seller login page ✨ NEW
│   │   └── SignupPage.tsx                       # Seller registration page ✨ NEW
│   │
│   ├── components/                              # Reusable UI components
│   │   ├── common/                              # Shared components across pages
│   │   │   ├── Navbar.tsx                       # Header navigation
│   │   │   └── Footer.tsx                       # Footer section
│   │   │
│   │   ├── landing/                             # Landing page specific components
│   │   │   └── Faqs.tsx                         # Frequently asked questions
│   │   │
│   │   └── auth/                                # Authentication components (reserved)
│   │
│   ├── assets/                                  # Static files (images, videos, etc.)
│   │   ├── images/                              # Image assets
│   │   │   ├── logos/                           # Brand & logo images
│   │   │   │   ├── cadna-mart-main-logo.png
│   │   │   │   └── cadna-mart-footer-logo.png
│   │   │   │
│   │   │   └── landing/                         # Landing page images
│   │   │       ├── landing-page-section-1-img.png
│   │   │       ├── ecommerce-vendor3d-1.png
│   │   │       ├── ecommerce-vendor3d-2.png
│   │   │       ├── portrait-beautiful-african-woman-floral-coat.png
│   │   │       ├── landing-page-rectangle-1.png
│   │   │       ├── landing-page-rectangle-2.png
│   │   │       ├── landing-page-box-img.png
│   │   │       ├── landing-page-hero-visual.png
│   │   │       ├── bubble-chat-1.png
│   │   │       ├── bubble-chat-2.png
│   │   │       └── ... (other landing images)
│   │
│   ├── core/                                    # Core business logic & utilities
│   │   ├── constants/                           # Application-wide constants
│   │   │   └── engineeringPrinciples.ts
│   │   │
│   │   ├── hooks/                               # Custom React hooks (reserved)
│   │   ├── utils/                               # Utility functions (reserved)
│   │   └── types/                               # TypeScript type definitions (reserved)
│   │
│   ├── styles/                                  # Global stylesheets (reserved)
│   │
│   ├── App.tsx                                  # Main router & route configuration
│   ├── main.tsx                                 # React app entry point
│   ├── index.css                                # Global styles
│   └── PROJECT_STRUCTURE.md                     # This structure guide
│
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## Legend

- ✨ **NEW** - Newly created files for authentication
- Bold folders = Organized subdirectories

## Quick Navigation

### Adding New Pages

1. Create file in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`

### Adding Components

- Feature-specific: `src/components/{featureName}/Component.tsx`
- Reusable: `src/components/common/Component.tsx`

### Adding Images

- Organize by: `src/assets/images/{category}/{image-name}.png`

### Adding Utilities

- Functions: `src/core/utils/utilityName.ts`
- Types: `src/core/types/index.ts`
- Hooks: `src/core/hooks/useHookName.ts`
