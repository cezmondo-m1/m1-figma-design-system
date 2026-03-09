# Buttons

**Page:** Buttons and button groups, Floating action button, Hot buttons, Icon buttons

**Type:** Pattern

---

## Overview

The button system encompasses all interactive tap/click targets in the M1 design system. It includes standard buttons (13 kinds across 3 sizes), floating action buttons, hot buttons (icon + label), icon-only buttons (standard and elevated), and supporting layout components (button groups, footer CTAs).

## Types

| Type | Component | Node ID | Variants | Description |
|------|-----------|---------|----------|-------------|
| Default | Buttons | `29297:69635` | 234 | Standard buttons — primary, secondary, text, promotion, destructive, inverse, suggestion, feature |
| Floating Action | Floating Action Button | `29305:165367` | 2 | Persistent floating CTA with expand/compact states |
| Hot | Hot button | `64540:43239` | 24 | Circular icon button with label beneath |
| Icon (Standard) | standardIconButton | `63179:19396` | 9 | Bare icon button, no background |
| Icon (Elevated) | elevatedIconButton | `63179:19374` | 9 | Icon button with padding and hover background |
| Group | Group | `42634:17675` | 2 | Layout wrapper for arranging multiple buttons |
| Footer CTA (Stacked) | .footerCtaStacked | `29592:108751` | — | Mobile footer with stacked button slots + scrim |
| Footer CTA (Side by Side) | .footerCtaSideBySide | `29592:108760` | — | Footer with buttons arranged horizontally |

---

## Buttons

**Figma node ID:** `29297:69635`

### Variants

#### Kind
- Primary
- Secondary
- Text button
- Promotion
- Promotion secondary
- Promotion text
- Destructive
- Destructive text
- Inverse primary
- Inverse secondary
- Inverse text button
- Suggestion
- Feature

#### State
- Default
- Hover
- Disabled

#### Size
- Large
- Medium
- Small

#### End Icon
- True
- False

**Total variants:** 234 (Kind 13 x State 3 x Size 3 x End Icon 2)

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Kind | VARIANT | Primary, Secondary, Text button, Promotion, Promotion secondary, Promotion text, Destructive, Destructive text, Inverse primary, Inverse secondary, Inverse text button, Suggestion, Feature | Primary |
| State | VARIANT | Default, Hover, Disabled | Default |
| Size | VARIANT | Large, Medium, Small | Large |
| End Icon | VARIANT | True, False | False |
| Text#2563:5 | TEXT | Any | "Button label" |
| Icon#2563:6 | INSTANCE_SWAP | Any component (default: `31017:73379`) | `31017:73379` |
| Left Icon#2563:7 | BOOLEAN | true, false | false |
| Right icon#2564:8 | BOOLEAN | true, false | false |
| Med icon#2565:14 | INSTANCE_SWAP | Any component (default: `31017:73241`) | `31017:73241` |
| Small icon#2566:0 | INSTANCE_SWAP | Any component (default: `37997:40703`) | `37997:40703` |

### Usage notes

- Button states only apply when the entire button is a single tap target.
- Back buttons (Text button kind) are for web use only.
- Feature kind uses a gradient border (Gradient/Linear Feature Tertiary).

### Dark mode

This component supports dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `Teal/04` → `Dark/Teal/04`, `FG/Neutral Main` → `Dark/FG/Neutral Main`). See tokens.md for the full dark token set.

### Tokens used

#### Color (by Kind — Default state)

| Kind | Background | Border | Text fill |
|------|-----------|--------|-----------|
| Primary | `#2A7DA7` (Teal/04) | — | `#FFFFFF` |
| Secondary | — | `#2A7DA7` (Teal/04) 2px | `#2A7DA7` |
| Text button | — | — | `#2A7DA7` |
| Promotion | `#D6A55C` (Gold/03) | — | `#1C2026` |
| Promotion secondary | — | `#D6A55C` (Gold/03) 2px | `#6A4A1B` (Gold/05) |
| Promotion text | — | — | `#D6A55C` (Gold/03) |
| Destructive | — | `#B3485A` (Red/04) 2px | `#B3485A` |
| Destructive text | — | — | `#B3485A` |
| Inverse primary | `#A6C9DA` (Teal/02) | — | `#1C2026` |
| Inverse secondary | — | `#A6C9DA` (Teal/02) 2px | `#A6C9DA` |
| Inverse text button | — | — | `#A6C9DA` |
| Suggestion | — | `#D4DBE6` (Grey/03) 2px | `#1C2026` |
| Feature | — | Gradient (linear) 2px | `#1C2026` |

#### Color (by State — all Kinds)

| Kind | Hover BG | Hover Border | Hover Text | Disabled BG | Disabled Border | Disabled Text |
|------|---------|-------------|-----------|------------|----------------|--------------|
| Primary | `#1F5B7A` | — | `#FFFFFF` | `#E8ECF2` | — | `#8F9BAE` |
| Secondary | `#E5EFF4` | `#1F5B7A` | `#1F5B7A` | — | `#8F9BAE` | `#8F9BAE` |
| Text button | — | — | `#1F5B7A` | — | `#8F9BAE` | `#8F9BAE` |
| Promotion | `#6A4A1B` | — | `#FFFFFF` | `#E8ECF2` | — | `#8F9BAE` |
| Promotion secondary | `#F7EDDE` | `#6A4A1B` | `#6A4A1B` | — | `#8F9BAE` | `#8F9BAE` |
| Promotion text | — | `#2A7DA7` | `#6A4A1B` | — | `#8F9BAE` | `#8F9BAE` |
| Destructive | `#F6E9EB` | `#B3485A` | `#B3485A` | — | `#8F9BAE` | `#8F9BAE` |
| Destructive text | — | `#771E2D` | `#771E2D` | — | `#8F9BAE` | `#8F9BAE` |
| Inverse primary | `#2A7DA7` | — | `#FFFFFF` | `#546073` | — | `#8F9BAE` |
| Inverse secondary | `#E5EFF4` | `#2A7DA7` | `#2A7DA7` | — | `#8F9BAE` | `#8F9BAE` |
| Inverse text button | — | `#2A7DA7` | `#2A7DA7` | — | `#8F9BAE` | `#8F9BAE` |
| Suggestion | `#E8ECF2` | `#D4DBE6` | `#1C2026` | — | `#D4DBE6` | `#8F9BAE` |
| Feature | `#FFFFFF` | Gradient | `#2A7DA7` | — | `#D4DBE6` | `#8F9BAE` |

#### Typography (by Size)

| Size | Font | Weight | Size | Line height |
|------|------|--------|------|-------------|
| Large | Inter | 600 (Semibold) | 16px | 24px |
| Medium | Inter | 600 (Semibold) | 14px | 20px |
| Small | Inter | 600 (Semibold) | 12px | 16px |

#### Spacing (by Size)

| Size | Padding top/bottom | Padding left/right | Item spacing | Corner radius |
|------|-------------------|-------------------|--------------|---------------|
| Large | 16px | 32px | 8px | 32px |
| Medium | 12px | 24px | 8px | 24px |
| Small | 8px | 16px | 8px | 16px |

---

## Floating Action Button

**Figma node ID:** `29305:165367`

### Variants

#### State
- Expand
- Compact

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| State=Expand | `29305:165368` |
| State=Compact | `29305:165371` |

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Expand, Compact | Expand |

### Usage notes

- **Expand** — shows icon + label text (173x48)
- **Compact** — icon only, text hidden (48x48)

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Background | Teal/04 | `#2A7DA7` |
| Text fill | — | `#FFFFFF` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Label | Inter | 400 (Regular) | 16px | 24px |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 12px |
| Padding left/right | 16px |
| Item spacing | 8px |
| Corner radius | 40px |

#### Elevation

| Token | Value |
|-------|-------|
| Shadow | `drop-shadow(0px 0px 24px rgba(83,96,115,0.20))` |

---

## Hot button

**Figma node ID:** `64540:43239`

### Variants

#### State
- Default
- Hover
- Disabled

#### Kind
- Primary
- Secondary
- Tertiary
- Feature

#### Dynamic Type
- Default
- Large

**Total variants:** 24 (State 3 x Kind 4 x Dynamic Type 2)

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Hover, Disabled | Default |
| Kind | VARIANT | Primary, Secondary, Tertiary, Feature | Primary |
| Dynamic Type | VARIANT | Default, Large | Default |
| Has lable#6025:0 | BOOLEAN | true, false | true |
| Icon#6025:1 | INSTANCE_SWAP | Any component (default: `31017:73241`) | `31017:73241` |
| Icon web#6025:2 | INSTANCE_SWAP | Any component (default: `31017:73402`) | `31017:73402` |
| Label#6996:0 | TEXT | Any | "Label" |

### Usage notes

- Hot buttons display a circular icon above a text label.
- Feature kind uses a gradient border on the icon circle (same as Feature Buttons).
- "Has lable" is the exact property name in Figma (typo in source).
- Web and Mobile use separate icon swap properties.

### Tokens used

#### Color (by Kind — Default state)

| Kind | Button BG | Icon fill | Label fill |
|------|----------|-----------|------------|
| Primary | `#2A7DA7` (Teal/04) | `#FFFFFF` | `#1C2026` (FG/Neutral Main) |
| Secondary | `#FFFFFF` | `#1C2026` | `#1C2026` |
| Tertiary | `#F3F5F8` (Grey/01) | `#2A7DA7` (Teal/04) | `#1C2026` |
| Feature | `#FFFFFF` (gradient border 2px) | `#1C2026` | `#1C2026` |

#### Color (by State)

| Kind | Hover BG | Disabled BG | Disabled Label |
|------|---------|-------------|----------------|
| Primary | `#1F5B7A` | `#E8ECF2` | `#8F9BAE` |
| Secondary | `#F3F5F8` | `#E8ECF2` | `#8F9BAE` |
| Tertiary | `#E8ECF2` | `#E8ECF2` | `#8F9BAE` |
| Feature | `#FFFFFF` | `#E8ECF2` | `#8F9BAE` |

#### Typography (by Dynamic Type)

| Dynamic Type | Font | Weight | Size | Line height |
|-------------|------|--------|------|-------------|
| Default | Inter | 600 (Semibold) | 12px | 16px |
| Large | Inter | 600 (Semibold) | 16px | 24px |

#### Spacing

| Property | Default Dynamic Type | Large Dynamic Type |
|----------|---------------------|-------------------|
| Button frame padding | 8px (all sides) | 8px (all sides) |
| Button corner radius | 40px | 40px |
| Button frame size | 40x40 | 40x40 |
| Label item spacing | 12px | 16px |

---

## elevatedIconButton

**Figma node ID:** `63179:19374`

### Variants

#### State
- Default
- Hover
- Disabled

#### iconButton (Size)
- Large
- Medium
- Small

**Total variants:** 9 (State 3 x Size 3)

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Hover, Disabled | Default |
| iconButton | VARIANT | Large, Medium, Small | Large |

### Usage notes

- Icon-only button with padding around the icon.
- Hover state adds a visible background fill and corner radius.
- No shadow/elevation found on the component despite the "elevated" name — the elevation may be applied at the usage context level.

### Tokens used

#### Color (by State)

| State | Background | Icon fill |
|-------|-----------|-----------|
| Default | — (transparent) | `#1C2026` (FG/Neutral Main) |
| Hover | `#F3F5F8` (Grey/01) | `#1C2026` |
| Disabled | — (transparent) | `#8F9BAE` (Grey/04) |

#### Spacing (by Size)

| Size | Padding (all sides) | Icon size | Overall size |
|------|-------------------|-----------|-------------|
| Large | 8px | 32px | 48x48 |
| Medium | 12px | 24px | 48x48 |
| Small | 6px | 28px | 40x40 |

| Property | Value |
|----------|-------|
| Corner radius (Hover) | 24px |
| Item spacing | 10px |

---

## standardIconButton

**Figma node ID:** `63179:19396`

### Variants

#### State
- Default
- Hover
- Disabled

#### iconButton (Size)
- Large
- Medium
- Small

**Total variants:** 9 (State 3 x Size 3)

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Hover, Disabled | Default |
| iconButton | VARIANT | Large, Medium, Small | Large |

### Usage notes

- Bare icon button — no background, no padding. The icon IS the tap target.
- Hover state adds a corner radius but no visible background fill.

### Tokens used

#### Color (by State)

| State | Background | Icon fill |
|-------|-----------|-----------|
| Default | — | `#1C2026` (FG/Neutral Main) |
| Hover | — | `#1C2026` |
| Disabled | — | `#8F9BAE` (Grey/04) |

#### Sizing

| Size | Overall size |
|------|-------------|
| Large | 32x32 |
| Medium | 24x24 |
| Small | 20x20 |

| Property | Value |
|----------|-------|
| Corner radius (Hover) | 24px |

---

## Group

**Figma node ID:** `42634:17675`

### Variants

#### Orientation
- Horizontal
- Stacked

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| Orientation=Horizontal | `42634:17481` |
| Orientation=Stacked | `42634:17713` |

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Orientation | VARIANT | Horizontal, Stacked | Horizontal |
| Slot 1#61718:27 | INSTANCE_SWAP | Any component (default: `61712:15023`) | `61712:15023` |
| Slot 2#61718:30 | INSTANCE_SWAP | Any component (default: `61712:15023`) | `61712:15023` |
| Slot 3#61718:33 | INSTANCE_SWAP | Any component (default: `61712:15023`) | `61712:15023` |
| Slot 4#61718:36 | INSTANCE_SWAP | Any component (default: `61712:15023`) | `61712:15023` |
| Slot 5#61718:39 | INSTANCE_SWAP | Any component (default: `61712:15023`) | `61712:15023` |

### Usage notes

- Layout wrapper for arranging multiple buttons.
- Horizontal layout: buttons in a row, center-aligned.
- Stacked layout: buttons in a vertical column.
- Avoid rogue patterns — use grouped buttons to maintain consistent experience.
- Web: switch from horizontal to vertical at narrow breakpoints.
- Mobile: center-aligned, wraps into grid format. Useful when text size is increased to maximum settings.

### Tokens used

#### Spacing

| Property | Value |
|----------|-------|
| Item spacing | 12px |
| Layout (Horizontal) | `HORIZONTAL`, center-aligned |
| Layout (Stacked) | `VERTICAL` |

---

## .footerCtaStacked

**Figma node ID:** `29592:108751`

### Variants

None — standalone component.

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Show Buttons#4274:1 | BOOLEAN | true, false | false |
| Show Scrim#4274:2 | BOOLEAN | true, false | true |

### Usage notes

- Mobile footer pattern with vertically stacked button slots, a divider, and a home indicator.
- Includes an optional scrim overlay.

### Tokens used

#### Color

| Element | Value |
|---------|-------|
| Background | `#FFFFFF` (BG/Neutral Primary) |

#### Spacing

| Property | Value |
|----------|-------|
| Padding left/right | 24px |

#### Anatomy

1. Scrim overlay
2. Body (divider + Group instance with 5 button slots + Home Indicator)

---

## .footerCtaSideBySide

**Figma node ID:** `29592:108760`

### Variants

None — standalone component.

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Secondary Cta#9896:0 | BOOLEAN | true, false | true |

### Usage notes

- Footer pattern with buttons arranged side by side.
- Includes a disclaimer copy area above the button group.

### Tokens used

#### Color

| Element | Value |
|---------|-------|
| Background | `#FFFFFF` (BG/Neutral Primary) |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top | 88px |
| Padding bottom | 16px |
| Item spacing | 16px |

---

## Do not use with


