# Loading States

**Page:** Loading States

**Type:** Component

**Figma node ID:** `4659:92`

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| Spinner | COMPONENT_SET | `14881:24822` | 2 |
| skeleton-loader | COMPONENT_SET | `29301:154500` | 2 |

---

## Spinner

**Figma node ID:** `14881:24822`

### Variants

#### Theme
- Light
- Dark

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| Theme=Light | `14881:24821` |
| Theme=Dark | `14881:24820` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Theme | VARIANT | Dark, Light | Light |

### Usage notes

No description provided.

Animated spinner/loading indicator rendered as vector strokes forming a circular arc shape. The spinner is composed of 3 vector elements within a group — two arc strokes and one filled arc segment (at 50% opacity in the Light theme). The component is 120×120 and clips content.

### Tokens used

#### Color (by Theme)

| Theme | Element | Token | Value |
|-------|---------|-------|-------|
| Light | Arc strokes | Grey/04 | `#8693A9` |
| Light | Filled arc (50% opacity) | Light/Neutral/05 (style `866:754`) | `#8693A9` at 50% opacity |
| Dark | Arc strokes | — | `#4B4C4E` |
| Dark | Filled arc | — | `#4B4C4E` |

#### Spacing

No padding or layout — vector-based component.

#### Sizing

| Property | Value |
|----------|-------|
| Overall size | 120×120 |
| Stroke weight | 1.5px |

---

## skeleton-loader

**Figma node ID:** `29301:154500`

### Variants

#### Theme
- Light
- Dark

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| Theme=Light | `29301:154501` |
| Theme=Dark | `29301:154503` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Theme | VARIANT | Dark, Light | Light |

### Usage notes

No description provided.

Skeleton loading placeholder rendered as a rounded rectangle with an animated shimmer gradient. Both Light and Dark themes use the same gradient — a horizontal linear gradient with 3 stops using `#D4DBE6` at varying opacities to create the shimmer effect. The component is sized at 90×80 as a base but is intended to be resized to match the content it replaces.

### Tokens used

#### Color

| Theme | Element | Token | Value |
|-------|---------|-------|-------|
| Light | Gradient fill | — | Linear gradient `#D4DBE6` (see stops below) |
| Dark | Gradient fill | [PL Update] Gradient Linear Subtle (style `28870:8087`) | Linear gradient `#D4DBE6` (see stops below) |

#### Gradient stops (both themes)

| Stop position | Color | Alpha |
|--------------|-------|-------|
| 0.25 | `#D4DBE6` | 0.20 |
| 0.50 | `#D4DBE6` | 0.50 |
| 0.75 | `#D4DBE6` | 0.20 |

**Base color:** `#D4DBE6` corresponds to the `Border/Main` token.

#### Spacing

| Property | Value |
|----------|-------|
| Corner radius | 4px |

#### Sizing

| Property | Value |
|----------|-------|
| Base size | 90×80 |

---

## Do not use with

