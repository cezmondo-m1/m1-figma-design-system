# M1 Design System — Index

## How to use this index
When I describe a screen, reference this index to identify the correct
component names, variants, and tokens. Use exact names as documented —
do not invent component names or token values.

## Design tokens (summary)

Full detail in [tokens.md](tokens.md).

### Colors (240 total)
- **Primitives (10 palettes):** Teal (5), Blue (5), Violet (5), Red (5), Orange (5), Yellow (5), Green (5), Jade (5), Grey (7), Gold (5), ORC (3)
- **Semantic FG:** FG/Neutral Main `#1C2026`, FG/Neutral Secondary `#546073`, FG/Primary `#2A7DA7`, FG/Critical `#B3485A`, FG/Success `#1F7C3E`, FG/Warning Shade `#7A631F`, FG/Promotion `#D6A55C`, FG/Secondary `#152B56` (+ 10 more)
- **Semantic BG:** BG/Neutral Primary `#FFFFFF`, BG/Neutral Secondary `#F3F5F8`, BG/Neutral Tertiary `#E8ECF2`, BG/Elevation 1 `#FFFFFF`, BG/Critical Subtle `#F6E9EB`, BG/Warning Subtle `#FBF4DF`, BG/Info Subtle `#E8EDF5`, BG/Success Subtle `#E9F6EE` (+ 6 more)
- **Semantic Border:** Border/Main `#D4DBE6`, Border/Active `#2A7DA7`, Border/Critical `#D08E99`, Border/Info `#99ADD5`, Border/Success `#92D2A8`, Border/Warning `#EDD17B`, Border/Promotion `#D6A55C` (+ 1 more)
- **Chart:** 10 chart-specific tokens (Datapoint, Chart Area, Bg Plot, etc.)
- **Gradients:** 13 light + 14 dark gradient definitions
- **Dark mode:** Full parallel set for all primitives, semantic FG/BG/Border, Chart, and Gradients

### Type scale (51 styles)
Font family: **Inter** (all styles)

| Scale | Sizes | Weights |
|-------|-------|---------|
| HXL (Header 1) | 52px (+ DT/MAX 62px) | 300, 400, 500, 600 |
| HL (Header 2) | 42px (+ DT/MAX 52px) | 300, 500, 600 |
| HM (Header 3) | 32px (+ DT/MAX 42px) | 300, 500, 600 |
| HS (Header 4) | 28px (+ DT/MAX 38px) | 300, 500, 600 |
| HXS (Header 5) | 24px (+ DT/MAX 34px) | 300, 500, 600 |
| HXXS (Header 6) | 20px (+ DT/MAX 30px) | 300, 500, 600 |
| PXL (Body XL) | 18px (+ DT/MAX 28px) | 300, 400, 500, 600 |
| PL (Body L) | 16px (+ DT/MAX 26px) | 400, 600, 400-Underlined |
| PM (Body M) | 14px (+ DT/MAX 24px) | 400, 600, 400-Underline |
| PS (Body S) | 12px (+ DT/MAX 22px) | 400, 600, 400-Underline |
| PXS (Body XS) | 11px | 400, 600 |
| Special | 36px, 16px, 14px, 12px, 10px | PinPad, Label L/M/S, Nav Web/Mobile |

### Spacing scale (12 tokens)
Base unit: 8px. Scale: Zero (0), 3XS (4), 2XS (8), XS (12), S (16), M (24), L (32), XL (40), 2XL (48), 3XL (56), 4XL (64), 5XL (88).

### Radius (5 tokens)
XS (4px), S (8px), M (12px), L (16px), XL (24px).

### Elevation / Shadow (8 styles)
Light: Shadow Level 1-4. Dark: Dark/Shadow Level 1-4.

---

## Component registry

| Component | Page | Variants | Key props | File |
|-----------|------|----------|-----------|------|
| .Checkbox single | Check boxes and radio buttons | 2 | Kind | `Check boxes and radio buttons.md` |
| .checkboxes | Check boxes and radio buttons | 2 | State | `Check boxes and radio buttons.md` |
| .earn row | Tables | — | — | `Tables.md` |
| .footerCtaSideBySide | Buttons and button groups | — | — | `Buttons.md` |
| .footerCtaStacked | Buttons and button groups | — | — | `Buttons.md` |
| .formSelect | Check boxes and radio buttons | 2 | Kind | `Check boxes and radio buttons.md` |
| .gaugeChart | Charts | — | — | `Charts.md` |
| .header-default | Tables | — | — | `Tables.md` |
| .header-sub-header | Tables | — | — | `Tables.md` |
| .imageFixedAspectRatio | Img Assets | 3 | Aspect ratio | `Img Assets.md` |
| .List – Stack | Charts | 2 | State | `Charts.md` |
| .marginHealthGaugeChart | Charts | 5 | State | `Charts.md` |
| .Overflow | Charts | 3 | State | `Charts.md` |
| .personal loan row | Tables | — | — | `Tables.md` |
| .radios | Check boxes and radio buttons | 2 | Status | `Check boxes and radio buttons.md` |
| .row-default-fixed | Tables | — | — | `Tables.md` |
| .spend row | Tables | — | — | `Tables.md` |
| .sub head row | Tables | — | — | `Tables.md` |
| .sub-nav-links | Mobile header | 2 | State | `Navigation.md` |
| .Switch (legacy) | Check boxes and radio buttons | 6 | Client, Theme, State | `Check boxes and radio buttons.md` |
| .Switch (current) | Switch | 16 | Client, State | `Switch.md` |
| .Tabs | Charts | 3 | State | `Charts.md` |
| .Timeline Section | Charts | — | — | `Charts.md` |
| .To-Do-List | List Items | 3 | State | `List Items.md` |
| .tooltip-mobile-sheet | Standard Tooltip | 12 | Headline, Text Link, Add slot | `Tooltip.md` |
| .tooltip-mobile-sheet-slots | Standard Tooltip | 12 | Headline, Text Link, Add slot | `Tooltip.md` |
| .tooltip-web | Standard Tooltip | 12 | Headline, Text Link, Add slot | `Tooltip.md` |
| .tooltip-web-slots | Standard Tooltip | 12 | Headline, Text Link, Add slot | `Tooltip.md` |
| .X – Section | Charts | — | — | `Charts.md` |
| Actionable pills- Mobile | Pills | 4 | Property 1, Property 2, Property 3 | `Pills.md` |
| Actionable pills- Web | Pills | 18 | Kind, Size, State, Icon | `Pills.md` |
| AppNavigationItem | Web nav | 4 | State | `Navigation.md` |
| Banners | Banners | 8 | Kind, State | `Banners.md` |
| baseCard | Cards | 40 | Breakpoint, Type, States | `Cards.md` |
| Basiclistitem/mobile | List Items | 4 | Mobile | `List Items.md` |
| Basiclistitem/web | List Items | 3 | Web | `List Items.md` |
| Buttons | Buttons and button groups | 234 | Kind, State, Size, End Icon | `Buttons.md` |
| dataSet | Charts | 8 | Layout, Border | `Charts.md` |
| earnTable | Tables | 2 | State | `Tables.md` |
| elevatedIconButton | Icon buttons | 9 | State, iconButton | `Buttons.md` |
| Feature Highlight | Feature Highlight | 12 | Alignment, Position, Close | `Tooltip.md` |
| Floating Action Button | Floating action button | 2 | State | `Buttons.md` |
| Form fields | Inputs | 92 | Breakpoint, State, Kind, Type | `Input.md` |
| Group | Buttons and button groups | 2 | Orientation | `Buttons.md` |
| Hot button | Hot buttons | 24 | State, Kind, Dynamic Type | `Buttons.md` |
| imagePlaceholder | Img Assets | 2 | Type | `Img Assets.md` |
| imagePlaceholder/Type3 | Img Assets | — | — | `Img Assets.md` |
| inputWrapper | Large inputs | 3 | State | `Input.md` |
| lineChart | Charts | 12 | Size, State | `Charts.md` |
| Links | Links | 9 | Size, Kind | `Links.md` |
| listItem | List Items | 2 | Type, Mobile/Web | `List Items.md` |
| M1 Intelligence Panel | M1 Intelligence 2 (external) | — | — (composed frame) | `M1 Intelligence Panel.md` |
| Mobile Dialog — Variants for design | Dialogs | 12 | Links, Slot, Button group, Android close | `Dialogs.md` |
| Mobile tab navigation | Mobile tab navigation | 4 | Theme, Platform | `Navigation.md` |
| Mobile variants with scrim | Dialogs | — | — | `Dialogs.md` |
| Mobile-header | Mobile header | 12 | Device, Theme, Type | `Navigation.md` |
| Mobile-rail | Mobile header | 8 | Page, State | `Navigation.md` |
| mobile-nav | Mobile header | 6 | Device, Type | `Navigation.md` |
| moveMoneyDropdown | Floating panel | 4 | State, Mobile/Web | `Floating panel.md` |
| Multiline Input | Large inputs | 19 | Breakpoint, State, Kind | `Input.md` |
| nav-section | Web nav | 16 | Product, State | `Navigation.md` |
| personalLoanTable | Tables | 2 | State | `Tables.md` |
| recent transfers table | Tables | 2 | Kind | `Tables.md` |
| scrollBar | Large inputs | 2 | State | `Input.md` |
| searchField | Search inputs | 10 | Device, State | `Input.md` |
| skeleton-loader | Loading States | 2 | Theme | `Loading States.md` |
| slices table | Tables | 2 | State | `Tables.md` |
| spendTable | Tables | 2 | State | `Tables.md` |
| Spinner | Loading States | 2 | Theme | `Loading States.md` |
| standardIconButton | Icon buttons | 9 | State, iconButton | `Buttons.md` |
| Static pills | Pills | 7 | Kind | `Pills.md` |
| status Bar | Mobile header | 4 | OS, Theme | `Navigation.md` |
| SubNavigationItem | Web nav | 8 | State, $Amount, Caption | `Navigation.md` |
| Tab bar (content tabs) | Tabs and tab bars | 4 | Type | `Tabs and tab bars.md` |
| Tab bar (mobile nav) | Mobile tab navigation | 20 | Page, Theme, Platform | `Navigation.md` |
| Tab states | Tabs and tab bars | 6 | Heirarchy, State | `Tabs and tab bars.md` |
| Tabs | Tabs and tab bars | 3 | State | `Tabs and tab bars.md` |
| Tabs Group | Tabs and tab bars | 6 | Tabs | `Tabs and tab bars.md` |
| tabularData | Charts | 12 | Type, Layout, Size | `Charts.md` |
| Toasts | Toasts | 32 | Mode, Leading Icon, Text Link, Trailing Icon | `Toasts.md` |
| Top Header | Web nav | 2 | Border | `Navigation.md` |
| Web Dialog — Variants for design | Dialogs | 33 | Image, Type style, Links, Slot, Button group, Sticky footer | `Dialogs.md` |
| Web footer | Web footer | 6 | Property 1, Property 2 | `Navigation.md` |
| web-menu-labels | Web nav | 1 | State | `Navigation.md` |
| Web-rail-nav | Web nav | 12 | State, Selection | `Navigation.md` |
| Web variants with scrim | Dialogs | — | — | `Dialogs.md` |
| _mobile-rail-list | Mobile header | 4 | State | `Navigation.md` |

---

## Naming conventions

### Platform / breakpoint property
The system convention for platform variants is a property named `Client` with values `Web`, `iOS`, `Android`. However, many components deviate:

| Property name used | Values | Components using it |
|--------------------|--------|---------------------|
| Client | Web, iOS, Android, iOS26, iOS18, Aos | .Switch (current & legacy) |
| Breakpoint | Desktop, Mobile | baseCard, Form fields, Multiline Input |
| Device | Web, iOS, Android | searchField, mobile-nav, Mobile-header |
| Mobile/Web | Mobile, Web | moveMoneyDropdown, listItem |
| OS | Android, iOS | status Bar |
| Platform | iOS, Android | Tab bar (mobile nav), Mobile tab navigation |
| State (misused) | Web, Mobile | slices table, spendTable, earnTable, personalLoanTable |
| Kind (misused) | Web, Mobile | recent transfers table |
| Property 1 | Desktop, Tablet, Mobile web | Web footer |

### Component name prefixes
- **Dot prefix (`.`):** Internal/atomic components not intended for direct use (`.radios`, `.checkboxes`, `.Switch`, `.formSelect`, `.tooltip-web`, `.sub-nav-links`, etc.)
- **Underscore prefix (`_`):** Internal building blocks (`_mobile-rail-list`)
- **No prefix:** Public-facing components (Buttons, Links, Toasts, etc.)

### Casing patterns
- **PascalCase:** `AppNavigationItem`, `SubNavigationItem`
- **camelCase:** `baseCard`, `tabularData`, `dataSet`, `moveMoneyDropdown`, `listItem`, `searchField`, `elevatedIconButton`, `standardIconButton`, `imagePlaceholder`, `lineChart`
- **kebab-case:** `mobile-nav`, `skeleton-loader`, `web-menu-labels`, `nav-section`
- **Title-kebab:** `Mobile-header`, `Mobile-rail`, `Web-rail-nav`
- **Space-separated:** `Floating Action Button`, `Hot button`, `Tab bar`, `Form fields`, `Multiline Input`, `Feature Highlight`
- **Mixed:** `Basiclistitem/web`, `Basiclistitem/mobile` (slash-separated platform variants)

### State property
Most interactive components use `State` with values like `Default`, `Hover`, `Disabled`, `Active`, `Focused`, `Selected`. The Tables page misuses `State` for platform (Web/Mobile).

### Theme / Mode
- `Theme: Light, Dark` used by: Spinner, skeleton-loader, status Bar, Mobile-header, Tab bar (nav), Mobile tab navigation
- `Mode: Light, Dark, Light_Secondary, Dark_Secondary` used by: Toasts
- Some components have no explicit theme property and rely on the global dark mode token swap

---

## Known gaps

### Naming inconsistencies
1. **`Tab bar` name collision:** The same component name appears in both `Navigation.md` (mobile bottom tab bar, 20 variants) and `Tabs and tab bars.md` (content tab bar, 4 variants). These are completely different components.
2. **`.Switch` duplication:** Two `.Switch` components exist — the legacy version in `Check boxes and radio buttons.md` (6 variants, node `29301:130714`) and the current version in `Switch.md` (16 variants, node `68210:59`). The legacy version is marked deprecated.
3. **Generic property names on Web footer:** `Property 1` and `Property 2` instead of semantic names (Breakpoint, Alignment).
4. **Generic property names on Actionable pills- Mobile:** `Property 1`, `Property 2`, `Property 3` instead of semantic names (Client, State, Icon).
5. **`Heirarchy` typo on Tab states:** Should be "Hierarchy".
6. **`Has lable` typo on Hot button:** Should be "Has label".
7. **Inconsistent platform property naming** across components (Client vs Breakpoint vs Device vs Mobile/Web vs OS vs Platform vs State vs Kind) — see table above.
8. **Mixed casing across component names:** No single convention (PascalCase, camelCase, kebab-case, space-separated all coexist).
9. **Prefix inconsistency:** `_mobile-rail-list` uses underscore; `.sub-nav-links` uses dot — both are internal building blocks on the same page.
10. **`Inter/PL/400-Underlined` vs `Inter/PM/400-Underline`:** Inconsistent suffix (past vs present tense) in typography tokens.
11. **`Dark/Border/M1 Plus` has no light-theme equivalent** — asymmetric token.

### Missing or incomplete content
12. **M1 Intelligence Panel** is a composed frame, not a formal COMPONENT_SET — it has no variants and references components from an external Figma library.
13. **Grids and responsive templates** contains no components — it is a reference document only.
14. **Duplicate variants:** Form fields has duplicate `Breakpoint=Desktop, State=Active, Kind=Elevated` entries (nodes `49512:10406` / `50560:8266`). Tab bar (nav) has a duplicate `Page=Borrow, Theme=Dark, Platform=iOS`. `.tooltip-web` has a duplicate `Headline=True, Text Link=False, Add slot=1`.
15. **Error color `#C4382E` in Form fields** does not appear in tokens.md — may be from an external library or an unlisted semantic error token.
16. **No description provided** for the majority of components — Figma description fields are empty. Usage notes are inferred from structure and page documentation.
17. **Switch.md** documents a component from a Figma branch (`WKtpzwEAIVge62xMePZnRs`) that has not been merged to the main Figma file.
18. **Tab bar (nav) M1 Intelligence tab label** reads "Borrow" in Figma source — likely a content error.

---

## File inventory

| File | Components | Total variants |
|------|-----------|----------------|
| `Banners.md` | 1 | 8 |
| `Buttons.md` | 8 | 282 |
| `Cards.md` | 1 | 40 |
| `Charts.md` | 10 | 48 |
| `Check boxes and radio buttons.md` | 5 | 14 |
| `Dialogs.md` | 4 | 45 |
| `Floating panel.md` | 1 | 4 |
| `Grids and responsive templates.md` | 0 | 0 |
| `Img Assets.md` | 3 | 5 |
| `Input.md` | 5 | 126 |
| `Links.md` | 1 | 9 |
| `List Items.md` | 4 | 12 |
| `Loading States.md` | 2 | 4 |
| `M1 Intelligence Panel.md` | 1 (composed) | 0 |
| `Navigation.md` | 15 | 109 |
| `Pills.md` | 3 | 29 |
| `Switch.md` | 1 | 16 |
| `Tables.md` | 12 | 10 |
| `Tabs and tab bars.md` | 4 | 19 |
| `Toasts.md` | 1 | 32 |
| `Tooltip.md` | 5 | 60 |
| **Total** | **87** | **862** |
