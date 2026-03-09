# Tables

**Page:** Tables

**Type:** Pattern

**Figma node ID:** `4659:202`

**Status:** In progress (page marked with construction indicator in Figma)

> **⚠ Naming issue:** `slices table`, `spendTable`, `earnTable`, and `personalLoanTable` use `State` as the variant property for platform (`Web`/`Mobile`). Across the rest of the design system, `State` refers to interaction state (Default, Hover, Disabled, etc.) and platform is expressed via `Client`. This should be renamed to `Client` in Figma to avoid confusion. Additionally, `recent transfers table` uses `Kind` for the same purpose.

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| .header-default | COMPONENT | `29410:206210` | — |
| .header-sub-header | COMPONENT | `29410:206257` | — |
| .row-default-fixed | COMPONENT | `29410:206290` | — |
| .sub head row | COMPONENT | `29301:157607` | — |
| .spend row | COMPONENT | `29301:157637` | — |
| .earn row | COMPONENT | `29301:157667` | — |
| .personal loan row | COMPONENT | `29301:157696` | — |
| slices table | COMPONENT_SET | `29301:157563` | 2 |
| recent transfers table | COMPONENT_SET | `29301:157581` | 2 |
| spendTable | COMPONENT_SET | `29301:157609` | 2 |
| earnTable | COMPONENT_SET | `29301:157645` | 2 |
| personalLoanTable | COMPONENT_SET | `29301:157673` | 2 |

---

## Dark mode

All table components support dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `FG/Neutral Main` → `Dark/FG/Neutral Main`, `Border/Main` → `Dark/Border/Main`). See tokens.md for the full dark token set.

---

## .header-default

**Figma node ID:** `29410:206210`

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Default table header row with 4 column cells. Each cell contains a `.header` instance with sortable text. Used as the primary column header for data tables.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Header text | FG/Neutral Secondary | `#546073` |
| Row border (bottom) | Border/Main | `#D4DBE6` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Header text | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 8px |
| Column spacing | 32px |
| Border width | 1px (bottom) |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 728px |
| Height | 36px |

---

## .header-sub-header

**Figma node ID:** `29410:206257`

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Sub-header row with a tinted background, used to group rows under a category label within a table. Has 4 column cells matching the default header layout.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Background | BG/Neutral Secondary | `#F3F5F8` |
| Header text | FG/Neutral Secondary | `#546073` |
| Row border (bottom) | Border/Main | `#D4DBE6` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Header text | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 4px |
| Padding left/right | 8px |
| Column spacing | 32px |
| Border width | 1px (bottom) |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 728px |
| Height | 28px |

---

## .row-default-fixed

**Figma node ID:** `29410:206290`

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Default data row for generic tables with 4 column cells. First column uses body large text (16px); remaining columns use body medium text (14px). Each cell includes an optional trailing caret icon.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Cell text | FG/Neutral Main | `#1C2026` |
| Caret icon | FG/Neutral Secondary | `#546073` |
| Row border (bottom) | Border/Main | `#D4DBE6` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| First column text | Inter | 400 (Regular) | 16px | 24px | Inter/PL/400 |
| Other columns text | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 12px |
| Column spacing | 32px |
| Border width | 1px (bottom) |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 728px |
| Height | 64px |

---

## .sub head row

**Figma node ID:** `29301:157607`

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Section sub-header row with a tinted background used to divide table sections (e.g. "Slices" label). Single text cell spanning the full width.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Background | BG/Neutral Secondary | `#F3F5F8` |
| Text | FG/Neutral Secondary | `#546073` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Sub-header text | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 4px |
| Padding left | 8px |
| Item spacing | 10px |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 849px |
| Height | 28px |

---

## .spend row

**Figma node ID:** `29301:157637`

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Data row for the Spend table. Contains 4 columns: leading icon + text label, value text, pill badge, and value + pill combination. The pill uses either a gradient fill (Silver Shimmer) or solid danger color (`#B3485A`).

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Background | BG/Neutral Primary | `#FFFFFF` |
| Cell text | FG/Neutral Main | `#1C2026` |
| Icon | Teal/04 | `#2A7DA7` |
| Caret icon | FG/Neutral Secondary | `#546073` |
| Row border | Border/Main | `#D4DBE6` |
| Pill (gradient) | Gradient/ORC/Silver Shimmer | Linear `#E8ECF1` → `#D4DBE6` |
| Pill (danger) | Red/04 | `#B3485A` |
| Pill text (danger) | — | `#FFFFFF` |
| Pill text (neutral) | FG/Neutral Main | `#1C2026` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Cell text | Inter | 400 (Regular) | 16px | 24px | Inter/PL/400 |
| Pill label | Inter | 400 (Regular) | 12px | 16px | Inter/PS/400 |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 16px |
| Column spacing | 24px |
| Icon-to-text spacing | 16px |
| Pill corner radius | 8px |
| Border width | 1px (bottom) |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 849px |
| Height | 64px |
| Icon size | 24×24 |

---

## .earn row

**Figma node ID:** `29301:157667`

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Data row for the Earn table. Contains 3 columns: leading icon + text label, value text, and value + pill combination. Structurally similar to `.spend row` but with one fewer column.

### Tokens used

#### Color

Same as `.spend row` — see above.

#### Typography

Same as `.spend row` — see above.

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 16px |
| Column spacing | 24px |
| Icon-to-text spacing | 16px |
| Border width | 1px (bottom) |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 849px |
| Height | 64px |

---

## .personal loan row

**Figma node ID:** `29301:157696`

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Data row for the Personal Loan table. Contains 4 columns: leading icon + text label, two value columns, and value + pill combination.

### Tokens used

#### Color

Same as `.spend row` — see above.

#### Typography

Same as `.spend row` — see above.

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 16px |
| Column spacing | 24px |
| Icon-to-text spacing | 16px |
| Border width | 1px (bottom) |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 849px |
| Height | 64px |

---

## slices table

**Figma node ID:** `29301:157563`

### Variants

#### State
- Web
- Mobile

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| State=Web | `29301:157564` |
| State=Mobile | `29301:157571` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Web, Mobile | Mobile |

> **Note:** `State` here refers to platform (Web/Mobile), not interaction state. See naming issue at top of file.

### Usage notes

No description provided.

Composed table for portfolio slices/holdings. Includes a table title with description and header links, a sortable column header row, and multiple data rows showing security image, ticker, name, value, gains/return, and allocation. **Web** variant is 700px wide with a 4-column grid. **Mobile** variant is 375px wide with a condensed 2-column layout (image+name on left, value+gains on right).

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Title text | FG/Neutral Secondary | `#546073` |
| Description text | FG/Neutral Secondary | `#546073` |
| Header text | FG/Neutral Secondary | `#546073` |
| Header sort icon | FG/Neutral Secondary | `#546073` |
| Cell text | FG/Neutral Main | `#1C2026` |
| Gains text (positive) | Green/05 | `#1F7C3E` |
| Pic color indicator | Teal/04 | `#2A7DA7` |
| Row border | Border/Main | `#D4DBE6` |
| Divider line | Border/Main | `#D4DBE6` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Table title | Inter | 300 (Light) | 20px | 28px | Inter/HXXS/300 |
| Description | Inter | 400 (Regular) | 16px | 24px | Inter/PL/400 |
| Header text | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 |
| Cell text (large) | Inter | 400 (Regular) | 16px | 24px | Inter/PL/400 |
| Cell text (medium) | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 |
| Gains value | Inter | 400 (Regular) | 14px / 12px | 20px / 16px | Inter/PM/400 / Inter/PS/400 |
| Gains percent | Inter | 600 (Semibold) | 12px | 16px | Inter/PS/600 |

#### Spacing

| Property | Web | Mobile |
|----------|-----|--------|
| Title padding bottom | 16px | 16px |
| Header row padding top/bottom | 8px | 8px |
| Data row padding top/bottom | 12px | 12px |
| Column spacing | 32px | 102px |
| Image corner radius | 3.5px | 3.5px |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| Web | 700px | 356px |
| Mobile | 375px | 356px |

---

## recent transfers table

**Figma node ID:** `29301:157581`

### Variants

#### Kind
- Web
- Mobile

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| Kind=Web | `29301:157582` |
| Kind=Mobile | `29301:157595` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Kind | VARIANT | Mobile, Web | Mobile |

> **Note:** `Kind` here refers to platform (Web/Mobile), not component kind. See naming issue at top of file.

### Usage notes

No description provided.

Composed table for recent transfer activity. Same general structure as slices table with title row, column headers, and data rows showing transfer details.

### Tokens used

Same token set as `slices table` — see above.

---

## spendTable

**Figma node ID:** `29301:157609`

### Variants

#### State
- Web
- Mobile

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| State=Web | `29301:157610` |
| State=Mobile | `29301:157626` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Mobile, Web | Web |

> **Note:** `State` here refers to platform (Web/Mobile), not interaction state. See naming issue at top of file.

### Usage notes

No description provided.

Composed table for the Spend product area. Uses `.sub head row` for section dividers and `.spend row` for data rows. Includes icon + label, amounts, pill badges, and status indicators.

### Tokens used

Same token set as `slices table` plus:

| Element | Token | Value |
|---------|-------|-------|
| Pill (gradient) | Gradient/ORC/Silver Shimmer | Linear `#E8ECF1` → `#D4DBE6` |

---

## earnTable

**Figma node ID:** `29301:157645`

### Variants

#### State
- Web
- Mobile

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| State=Web | `29301:157646` |
| State=Mobile | `29301:157661` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Web, Mobile | Web |

> **Note:** `State` here refers to platform (Web/Mobile), not interaction state. See naming issue at top of file.

### Usage notes

No description provided.

Composed table for the Earn product area. Uses `.earn row` for data rows. Includes icon + label, APY values, and status pill badges.

### Tokens used

Same token set as `spendTable` — see above.

---

## personalLoanTable

**Figma node ID:** `29301:157673`

### Variants

#### State
- Web
- Mobile

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| State=Web | `29301:157674` |
| State=Mobile | `29301:157690` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Web, Mobile | Web |

> **Note:** `State` here refers to platform (Web/Mobile), not interaction state. See naming issue at top of file.

### Usage notes

No description provided.

Composed table for the Personal Loans product area. Uses `.personal loan row` for data rows. Includes icon + label, loan amount, balance, and status pill.

### Tokens used

Same token set as `spendTable` — see above.

---

## Shared token summary

All table components share a consistent token palette:

#### Color tokens

| Token | Value | Usage |
|-------|-------|-------|
| FG/Neutral Main | `#1C2026` | Primary cell text |
| FG/Neutral Secondary | `#546073` | Header text, description, icons |
| BG/Neutral Primary | `#FFFFFF` | Row background |
| BG/Neutral Secondary | `#F3F5F8` | Sub-header row background |
| Border/Main | `#D4DBE6` | Row borders, dividers |
| Teal/04 | `#2A7DA7` | Leading icons, color indicators |
| Green/05 | `#1F7C3E` | Positive gains text |
| Red/04 | `#B3485A` | Danger pill background |
| Gradient/ORC/Silver Shimmer | `#E8ECF1` → `#D4DBE6` | Neutral gradient pill |

#### Typography styles

| Style | Font | Weight | Size | Line height |
|-------|------|--------|------|-------------|
| Inter/HXXS/300 | Inter | 300 (Light) | 20px | 28px |
| Inter/PL/400 | Inter | 400 (Regular) | 16px | 24px |
| Inter/PM/400 | Inter | 400 (Regular) | 14px | 20px |
| Inter/PM/600 | Inter | 600 (Semibold) | 14px | 20px |
| Inter/PS/400 | Inter | 400 (Regular) | 12px | 16px |
| Inter/PS/600 | Inter | 600 (Semibold) | 12px | 16px |

---

## Do not use with

