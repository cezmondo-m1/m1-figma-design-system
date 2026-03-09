# Dialogs

**Page:** Dialogs

**Type:** Pattern

**Figma node ID:** `4659:0`

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| Web Dialog — Variants for design | COMPONENT_SET | `60312:27598` | 33 |
| Mobile Dialog — Variants for design | COMPONENT_SET | `60312:28697` | 12 |
| Web variants with scrim | COMPONENT | `53355:16663` | — |
| Mobile variants with scrim | COMPONENT | `53362:12302` | — |

---

## Web Dialog — Variants for design

**Figma node ID:** `60312:27598`

### Variants

#### Image
- true
- false

#### Type style
- Standard
- Small

#### Links
- true
- false

#### Slot
- true
- false

#### Button group
- true
- false

#### Sticky footer
- true
- false

**Total variants:** 33

| Variant | Node ID |
|---------|---------|
| Image=false, Type style=Standard, Links=true, Slot=true, Button group=true, Sticky footer=false | `60312:27599` |
| Image=false, Type style=Small, Links=true, Slot=true, Button group=true, Sticky footer=false | `60312:27630` |
| Image=true, Type style=Standard, Links=true, Slot=true, Button group=true, Sticky footer=true | `60312:27661` |
| Image=false, Type style=Standard, Links=false, Slot=true, Button group=true, Sticky footer=false | `60312:27694` |
| Image=false, Type style=Standard, Links=true, Slot=false, Button group=true, Sticky footer=false | `60312:27725` |
| Image=false, Type style=Standard, Links=false, Slot=false, Button group=true, Sticky footer=false | `60312:27756` |
| Image=false, Type style=Standard, Links=true, Slot=true, Button group=true, Sticky footer=true | `60312:27787` |
| Image=false, Type style=Small, Links=true, Slot=false, Button group=true, Sticky footer=false | `60312:27821` |
| Image=false, Type style=Standard, Links=false, Slot=false, Button group=false, Sticky footer=false | `60312:27852` |
| Image=false, Type style=Small, Links=false, Slot=true, Button group=true, Sticky footer=false | `60312:27883` |
| Image=false, Type style=Small, Links=false, Slot=false, Button group=true, Sticky footer=false | `60312:27913` |
| Image=false, Type style=Small, Links=false, Slot=false, Button group=false, Sticky footer=false | `60312:27944` |
| Image=false, Type style=Small, Links=true, Slot=true, Button group=true, Sticky footer=true | `60312:27975` |
| Image=false, Type style=Small, Links=false, Slot=true, Button group=true, Sticky footer=true | `60312:28010` |
| Image=true, Type style=Standard, Links=false, Slot=true, Button group=true, Sticky footer=true | `60312:28045` |
| Image=false, Type style=Standard, Links=false, Slot=true, Button group=true, Sticky footer=true | `60312:28078` |
| Image=false, Type style=Standard, Links=true, Slot=false, Button group=true, Sticky footer=true | `60312:28112` |
| Image=false, Type style=Standard, Links=false, Slot=false, Button group=true, Sticky footer=true | `60312:28147` |
| Image=false, Type style=Standard, Links=true, Slot=true, Button group=false, Sticky footer=true | `60312:28182` |
| Image=false, Type style=Standard, Links=false, Slot=true, Button group=false, Sticky footer=true | `60312:28216` |
| Image=false, Type style=Standard, Links=true, Slot=false, Button group=false, Sticky footer=true | `60312:28250` |
| Image=false, Type style=Standard, Links=false, Slot=false, Button group=false, Sticky footer=true | `60312:28284` |
| Image=false, Type style=Small, Links=false, Slot=false, Button group=true, Sticky footer=true | `60312:28318` |
| Image=false, Type style=Small, Links=true, Slot=true, Button group=false, Sticky footer=true | `60312:28353` |
| Image=false, Type style=Small, Links=false, Slot=true, Button group=false, Sticky footer=true | `60312:28387` |
| Image=false, Type style=Small, Links=true, Slot=false, Button group=false, Sticky footer=true | `60312:28421` |
| Image=false, Type style=Small, Links=false, Slot=false, Button group=false, Sticky footer=true | `60312:28455` |
| Image=true, Type style=Standard, Links=true, Slot=false, Button group=true, Sticky footer=true | `60312:28489` |
| Image=true, Type style=Standard, Links=false, Slot=false, Button group=true, Sticky footer=true | `60312:28524` |
| Image=true, Type style=Standard, Links=true, Slot=true, Button group=false, Sticky footer=true | `60312:28559` |
| Image=true, Type style=Standard, Links=false, Slot=true, Button group=false, Sticky footer=true | `60312:28593` |
| Image=true, Type style=Standard, Links=true, Slot=false, Button group=false, Sticky footer=true | `60312:28627` |
| Image=true, Type style=Standard, Links=false, Slot=false, Button group=false, Sticky footer=true | `60312:28661` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Image | VARIANT | true, false | false |
| Type style | VARIANT | Standard, Small | Standard |
| Links | VARIANT | true, false | true |
| Slot | VARIANT | true, false | true |
| Button group | VARIANT | true, false | true |
| Sticky footer | VARIANT | false, true | false |

### Usage notes

No description provided.

Documentation section references: "Dialog – Atom" (the inner dialog content component), "Dialog – Molecule" (the dialog with scrim wrapper).

### Dark mode

This component supports dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `BG/Neutral Primary` → `Dark/BG/Neutral Primary`, `FG/Neutral Main` → `Dark/FG/Neutral Main`). See tokens.md for the full dark token set.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Dialog background | BG/Neutral Primary | `#FFFFFF` |
| Title text (Standard) | FG/Neutral Main | `#1C2026` |
| Title text (Small) | FG/Neutral Main | `#1C2026` |
| Body text (Standard) | FG/Neutral Main | `#1C2026` |
| Body text (Small) | FG/Neutral Main | `#1C2026` |
| Link text | FG/Primary | `#2A7DA7` |
| Sticky footer background | BG/Neutral Primary | `#FFFFFF` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Standard title | Inter | 600 (Semibold) | 24px | 28px |
| Small title | Inter | 600 (Semibold) | 20px | 28px |
| Standard body | Inter | 400 (Regular) | 16px | 24px |
| Small body | Inter | 400 (Regular) | 14px | 20px |
| Link (Default) | Inter | 600 (Semibold) | 16px | 24px |
| Link (Disclosure) | Inter | 400 (Regular) | 14px | 20px |

#### Spacing

| Property | Value |
|----------|-------|
| Corner radius | 8px |
| Body padding top/bottom | 32px |
| Body padding left/right | 32px |
| Body item spacing | 24px |
| Sticky footer padding top | 24px |
| Sticky footer padding left/right | 32px |
| Dialog width | 584px |

---

## Mobile Dialog — Variants for design

**Figma node ID:** `60312:28697`

### Variants

#### Links
- true
- false

#### Slot
- true
- false

#### Button group
- true
- false

#### Android close
- true
- false

**Total variants:** 12

| Variant | Node ID |
|---------|---------|
| Links=true, Slot=true, Button group=true, Android close=false | `60312:28698` |
| Links=false, Slot=true, Button group=true, Android close=false | `60312:28718` |
| Links=true, Slot=false, Button group=true, Android close=false | `60312:28738` |
| Links=false, Slot=false, Button group=true, Android close=false | `60312:28758` |
| Links=false, Slot=false, Button group=false, Android close=false | `60312:28778` |
| Links=true, Slot=true, Button group=true, Android close=true | `60312:28798` |
| Links=true, Slot=false, Button group=true, Android close=true | `60312:28818` |
| Links=false, Slot=false, Button group=true, Android close=true | `60312:28838` |
| Links=true, Slot=true, Button group=false, Android close=true | `60312:28858` |
| Links=false, Slot=true, Button group=false, Android close=true | `60312:28878` |
| Links=false, Slot=false, Button group=false, Android close=true | `60312:28898` |
| Links=false, Slot=true, Button group=true, Android close=true | `60312:28918` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Links | VARIANT | true, false | true |
| Slot | VARIANT | true, false | true |
| Button group | VARIANT | true, false | true |
| Android close | VARIANT | false, true | false |

### Usage notes

No description provided.

Mobile dialog does not have Image or Type style variants — it uses a single title/body style. The Android close variant adds a secondary close affordance button at the bottom of the dialog for Android platform conventions.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Dialog background | BG/Neutral Primary | `#FFFFFF` |
| Title text | FG/Neutral Main | `#1C2026` |
| Body text | FG/Neutral Main | `#1C2026` |
| Link text | FG/Primary | `#2A7DA7` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Title | Inter | 600 (Semibold) | 24px | 28px |
| Body | Inter | 400 (Regular) | 16px | 24px |
| Link (Default) | Inter | 600 (Semibold) | 16px | 24px |
| Link (Disclosure) | Inter | 400 (Regular) | 14px | 20px |

#### Spacing

| Property | Value |
|----------|-------|
| Corner radius | 8px |
| Padding (all sides) | 16px |
| Content item spacing | 16px |
| Section item spacing | 24px |
| Link group item spacing | 8px |
| Dialog width | 343px |

---

## Web variants with scrim

**Figma node ID:** `53355:16663`

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Full-page wrapper component (1620x1024) that places a Web Dialog instance over a semi-transparent scrim. Demonstrates how the dialog appears in context on a web viewport.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Scrim overlay | — | `#000000` at 80% opacity |
| Dialog background | BG/Neutral Primary | `#FFFFFF` |

#### Spacing

| Property | Value |
|----------|-------|
| Viewport size | 1620x1024 |
| Dialog corner radius | 8px |

---

## Mobile variants with scrim

**Figma node ID:** `53362:12302`

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Full-screen mobile wrapper component (375x812) that places a Mobile Dialog instance over a semi-transparent scrim, including a status bar, mobile navigation header, and home indicator. Demonstrates how the dialog appears in context on a mobile viewport.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Scrim overlay | — | `#000000` at 80% opacity |
| Dialog background | BG/Neutral Primary | `#FFFFFF` |
| Dialog container background | — | Inherits scrim |

#### Spacing

| Property | Value |
|----------|-------|
| Viewport size | 375x812 |
| Dialog container padding | 16px |
| Dialog corner radius | 4px (outer container), 8px (inner dialog) |

---

## Do not use with

