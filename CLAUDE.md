# M1 Design System — Project Instructions

## Design system reference
Before starting any work always read:
- /design-system/index.md
- /design-system/tokens.md
- /design-system/motion.md
- /design-system/dark-mode-mapping.md
- /design-system/composition-patterns.md

## When building any component or screen
- Use exact component names from index.md
- Use exact token values from tokens.md
- Reference the relevant component MD in /design-system/components/
- Never hardcode color, spacing, radius or typography values
- Always check dark-mode-mapping.md when applying color tokens

## Component gallery
- React app lives in /m1-prototype/
- Runs on localhost:5173
- Add every new component to the gallery as you build it

---

# M1 Figma Design System

## Project structure

```
design-system/
  components/        # Markdown specs per Figma page (one .md per page)
  tokens.md          # Color, typography, spacing, radius, shadow tokens
  dark-mode-mapping.md
  motion.md
  composition-patterns.md
  index.md           # Master index (87 components, 862 variants, 316 tokens)

m1-prototype/        # Vite + React + Tailwind CSS v4
  src/
    components/      # React components with inline styles, dark mode support
    pages/Gallery.jsx  # Interactive gallery with sidebar nav
```

## Figma source

- File: `ZSzFNefkZtFPH4WxC5XubDw7` ("M1 Liquid - Product Library")
- API token: use env var `FIGMA_TOKEN`
- Node IDs must be URL-encoded in API calls (`:` -> `%3A`)
- Variables are from an external library and cannot be resolved via the variables API

## Documentation rules

- One `.md` file per Figma page (a page with 10 components = 1 file with 10 sections)
- Summary table at top listing all components on the page
- Exception: user may explicitly request splitting (e.g. Buttons vs Links)
- Keep empty "Do not use with" sections as placeholders
- Platform naming at M1: property = `Client`, values = `Web`, `iOS`, `Android`

## React prototype conventions

- Inline styles (no CSS modules), functional components
- Design tokens as LIGHT/DARK const objects at top of each component file
- Dark mode via `darkMode` prop on every component
- Gallery pattern: `DARK_MODE_PAGES` Set controls dark mode toggle visibility
- Gallery routing: NAV array -> section functions -> ternary chain in ActiveContent
- Barrel exports via `src/components/index.js`
- FontAwesome as temporary icon placeholder; custom M1 icons TBD
- Verify builds with `npx vite build` after changes

## Component implementation checklist

When adding a new component from a spec `.md`:
1. Read the spec file
2. Create/update `src/components/ComponentName.jsx`
3. Update `src/components/index.js` with exports
4. Update `src/pages/Gallery.jsx`:
   - Add to import line
   - Add component ID to `DARK_MODE_PAGES` Set
   - Add section function (e.g. `ComponentSection`)
   - Add routing in `ActiveContent` ternary chain
5. Run `npx vite build` to verify

## Git

- Remote: https://github.com/cezmondo-m1/m1-figma-design-system.git
- Branch: main
- Commit messages: describe what changed and why
- Co-author line: `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`
- Only commit when explicitly asked
