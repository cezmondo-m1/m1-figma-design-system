# Links

**Page:** Links

**Type:** Component

**Figma node ID:** `29301:139219`

**Status:** In progress (page marked with construction indicator in Figma)

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| Links | COMPONENT_SET | `29301:139219` | 9 |

---

## Dark mode

This component supports dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `FG/Primary` → `Dark/FG/Primary`). See tokens.md for the full dark token set.

---

## Links

**Figma node ID:** `29301:139219`

### Variants

#### Size
- Large
- Medium
- Small

#### Kind
- Default
- Super
- Underline

**Total variants:** 9 (Size 3 x Kind 3)

| Variant | Node ID |
|---------|---------|
| Size=Large, Kind=Default | `29301:139222` |
| Size=Large, Kind=Super | `29301:139224` |
| Size=Large, Kind=Underline | `29301:139220` |
| Size=Medium, Kind=Default | `29301:139228` |
| Size=Medium, Kind=Super | `29301:139230` |
| Size=Medium, Kind=Underline | `29301:139226` |
| Size=Small, Kind=Default | `29301:139234` |
| Size=Small, Kind=Super | `29301:139236` |
| Size=Small, Kind=Underline | `29301:139232` |

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Size | VARIANT | Large, Medium, Small | Large |
| Kind | VARIANT | Default, Super, Underline | Default |

### Usage notes

- **Default** — semibold link text, no underline. Used as a standalone actionable link.
- **Underline** — regular weight with underline decoration. Used for inline disclosure/legal links.
- **Super** — regular weight with underline, prefixed with superscript numbers (e.g. `1,2,3,...`). Used for disclosure links with superscript references.

**Disclosure links:** Used to indicate mandatory legal/compliance/regulatory information is available. One link per copy block. Color: primary teal, white on dark backgrounds. Underlined. Left or center aligned.

**Inline links:** Avoid using inline links when possible. If context allows and at no cost to users, use block-level stacked links instead. When inline links are necessary, limit to 1 link per copy block.

**Links next to Buttons:** Primarily used in M1 Plus to acknowledge terms for membership.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Text fill | FG/Primary | `#2A7DA7` (Teal/04) |

#### Typography (by Size x Kind)

| Size | Kind | Font | Weight | Size | Line height | Text decoration |
|------|------|------|--------|------|-------------|-----------------|
| Large | Default | Inter | 600 (Semibold) | 16px | 24px | None |
| Large | Underline | Inter | 400 (Regular) | 16px | 24px | Underline |
| Large | Super | Inter | 400 (Regular) | 16px | 24px | Underline |
| Medium | Default | Inter | 600 (Semibold) | 14px | 20px | None |
| Medium | Underline | Inter | 400 (Regular) | 14px | 20px | Underline |
| Medium | Super | Inter | 400 (Regular) | 14px | 20px | Underline |
| Small | Default | Inter | 600 (Semibold) | 12px | 16px | None |
| Small | Underline | Inter | 400 (Regular) | 12px | 16px | Underline |
| Small | Super | Inter | 400 (Regular) | 12px | 16px | Underline |

#### Spacing (by Size x Kind)

| Size | Kind | Padding top/bottom |
|------|------|--------------------|
| Large | Default | 8px |
| Large | Underline | 12px |
| Large | Super | 12px |
| Medium | Default | 6px |
| Medium | Underline | 8px |
| Medium | Super | 8px |
| Small | Default | 2px |
| Small | Underline | 2px |
| Small | Super | 2px |

---

## Do not use with


