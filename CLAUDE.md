# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UK Broadband Availability Service - a Next.js 15 marketing site with lead generation for estate agencies. Built with App Router, React 19, TypeScript, and Tailwind CSS v4.

## Essential Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack on :3000

# Production
npm run build        # Production build with Turbopack
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Framework:** Next.js 15.5.5 (App Router only, no Pages directory)
- **React:** 19.1.0
- **State:** Zustand (dialog/modal management)
- **Forms:** TanStack React Form + Zod validation
- **Styling:** Tailwind CSS v4 with custom theme
- **Backend:** Airtable API for lead capture
- **Build:** Turbopack (--turbopack flag enabled)

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/access-request/ # Form submission endpoint (Airtable)
│   ├── layout.tsx          # Root layout (fonts, Header, Footer)
│   ├── page.tsx            # Homepage
│   └── globals.css         # Tailwind + custom styles
├── components/             # Feature-based organization
│   ├── Base/ui/           # Reusable UI primitives
│   ├── Dialog/            # ContactDialog (main lead form)
│   ├── Hero/, FAQ/, CTA/  # Page sections
│   └── Header/, Footer/   # Layout components
├── lib/
│   ├── validations.ts     # Zod schemas (source of truth)
│   └── form-submissions.ts # API client
├── store/
│   └── useDialogStore.tsx # Global dialog state (Zustand)
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript definitions
├── static/images.ts       # Centralized image imports
└── utils/                 # Helper functions
```

### Path Aliases
`@/*` maps to `./src/*`

## Key Patterns

### 1. Form Handling Pattern
**Two-stage form flow:**
1. **Email capture** → Opens full ContactDialog
2. **Full form** → Validates with Zod → POST `/api/access-request` → Airtable

**TanStack Form + Zod Pattern:**
```typescript
// 1. Define schema in lib/validations.ts
export const mySchema = z.object({ field: z.string().min(4) });

// 2. Create form
const form = useForm({
  defaultValues: { ... },
  validationLogic: revalidateLogic(),
  validators: { onDynamic: mySchema },
  onSubmit: async ({ value }) => {
    // Validate and submit
    const result = mySchema.safeParse(value);
    if (!result.success) return;
    await submitToAPI(result.data);
  }
});

// 3. Use form.Field
<form.Field name="field">
  {(field) => (
    <input
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  )}
</form.Field>
```

### 2. Dialog/Modal Management
**Global Zustand store pattern:**
```typescript
// Open dialog with tracking
const { openDialog } = useDialogStore();
openDialog("contact", "hero-section");

// Body scroll lock applied automatically (HTML._lock class)
```

### 3. API Routes
**Single endpoint:** `/api/access-request` (POST only)

**Pattern:**
- Dual validation (client + server Zod)
- Environment variable checks
- Direct Airtable API integration (no SDK)
- Typed responses: `ApiSuccessResponse | ApiErrorResponse`

**Required env vars:**
```bash
AIRTABLE_TOKEN           # Server-side only
AIRTABLE_BASE_ID
AIRTABLE_TABLE_NAME
NEXT_PUBLIC_DOMAIN       # Client-side
```

### 4. Component Creation
```typescript
// Feature-based folder structure
/src/components/FeatureName/ComponentName.tsx

// Import images from centralized location
import { logo } from "@/static/images";

// Use Tailwind v4 custom theme
className="corporate-radial py-16 px-5..."

// Export default function
export default function ComponentName() { ... }
```

### 5. Styling Architecture
**Tailwind CSS v4 with custom theme:**
- Custom colors: `corporate-blue`, `corporate-black`, `corporate-dark-grey`
- Custom breakpoint: `lg: 800px` (not default 1024px)
- Custom fonts: `font-national` (National 2 Condensed), `font-lato`
- CSS variables in `@theme` block

**Global styles in globals.css:**
- Custom animations: ticker, appear
- FAQ accordion styles
- Dialog scroll lock

### 6. Type Safety
- Centralized types in `/src/types/`
- Zod schemas as source of truth
- Type inference: `type FormData = z.infer<typeof schema>`
- Strict TypeScript enabled

## Deployment

### Laravel Forge Automation
- **Dev branch** → https://dev.broadbandavailability.com
- **Main branch** → https://broadbandavailability.com

**Workflow:**
1. Feature branch from `dev`
2. PR to `dev` → auto-deploy to dev site (client review)
3. Merge `dev` to `main` → auto-deploy to production

### GitHub Actions
`.github/workflows/nextjs.yml` deploys to GitHub Pages on push to `main` (secondary deployment).

## Important Technical Decisions

1. **Turbopack enabled:** Experimental `--turbopack` flag for faster builds
2. **App Router only:** No Pages directory, full Next.js 15 App Router
3. **React 19:** Early adoption of latest React
4. **Tailwind v4:** New `@theme` syntax
5. **Direct Airtable API:** No SDK dependency
6. **Zustand over Context:** Lightweight state for dialog management
7. **TanStack Form:** Modern form library with better TypeScript support

## Critical Business Logic

### Form Submission Flow
1. User enters email in CTA → Dialog opens with pre-filled email
2. Complete form in ContactDialog
3. Client-side Zod validation
4. POST to `/api/access-request`
5. Server-side Zod validation + environment checks
6. Submit to Airtable with `site_section` tracking
7. Success → close dialog after 2s
8. Error → inline error message

### Site Section Tracking
All forms track which section triggered the dialog:
- "hero-section"
- "benefits-section"
- "solutions-section"
- etc.

This data flows to Airtable for analytics.

## Common Tasks

### Adding a New Section Component
1. Create in `/src/components/SectionName/ComponentName.tsx`
2. Import images from `@/static/images`
3. Use Tailwind classes with custom theme colors
4. Import and render in `app/page.tsx`

### Adding a New Form Field
1. Update Zod schema in `lib/validations.ts`
2. Add field to type definitions
3. Add `<form.Field>` component
4. Update API route to handle new field
5. Update Airtable mapping in `route.ts`

### Adding a New API Route
```typescript
// app/api/[route-name]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  // Validate
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { success: false, message: 'Validation failed', errors: formatValidationErrors(result.error) },
      { status: 422 }
    );
  }

  // Process
  return NextResponse.json({ success: true }, { status: 200 });
}
```

### Adding a New Zustand Store
```typescript
// src/store/useStoreName.tsx
import { create } from "zustand";

export const useStoreName = create<StoreType>((set) => ({
  state: initialValue,
  action: () => set((s) => ({ ...s, state: newValue })),
}));
```

## Environment Setup

Required `.env.local`:
```bash
NEXT_PUBLIC_DOMAIN=http://localhost:3000
AIRTABLE_TOKEN=your_token
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=your_table_name
```

See `.env.example` for template.

## TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` → `./src/*`
- ES2017 target
- Module resolution: bundler
- JSX: preserve (handled by Next.js)

## Notable Gotchas

1. **Tailwind v4:** Uses new `@theme` syntax in CSS, not `tailwind.config.js`
2. **Custom lg breakpoint:** `800px` not default `1024px`
3. **Turbopack:** Some Next.js features may behave differently with `--turbopack`
4. **React 19:** Latest version, check for breaking changes in dependencies
5. **No test framework:** Tests not currently configured
6. **Body scroll lock:** Manually managed via `._lock` class on HTML element
7. **Font loading:** Mix of Google Fonts (optimized) and self-hosted fonts in `/public/fonts`

## Quick Import Reference

```typescript
// Common imports
import { useDialogStore } from "@/store/useDialogStore";
import { submitAccessRequest } from "@/lib/form-submissions";
import { accessRequestSchema } from "@/lib/validations";
import { logo, heroImage } from "@/static/images";
import type { ApiResponse } from "@/types/api";
```
