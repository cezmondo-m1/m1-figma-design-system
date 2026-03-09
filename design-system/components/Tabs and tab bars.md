# Tabs and tab bars

**Page:** Tabs and tab bars

**Type:** Component

**Figma node ID:** `67238:61091`

**Status:** Complete (page marked with checkmark in Figma)

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| Tab states | COMPONENT_SET | `67399:5473` | 6 |
| Tab bar | COMPONENT_SET | `67399:5486` | 4 |
| Tabs | COMPONENT_SET | `67500:17450` | 3 |
| Tabs Group | COMPONENT_SET | `67500:17457` | 6 |

---

## Dark mode

All tab components support dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `FG/Neutral Main` → `Dark/FG/Neutral Main`, `BG/Neutral Secondary` → `Dark/BG/Neutral Secondary`). See tokens.md for the full dark token set.

---

## Tab states

**Figma node ID:** `67399:5473`

### Variants

#### Heirarchy
- Primary
- Secondary

#### State
- Active
- Default
- Hover

**Total variants:** 6 (Heirarchy 2 × State 3)

| Variant | Node ID |
|---------|---------|
| Heirarchy=Primary, State=Active | `67399:5474` |
| Heirarchy=Primary, State=Default | `67399:5476` |
| Heirarchy=Primary, State=Hover | `67399:5478` |
| Heirarchy=Secondary, State=Active | `67399:5480` |
| Heirarchy=Secondary, State=Default | `67399:5482` |
| Heirarchy=Secondary, State=Hover | `67399:5484` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Heirarchy | VARIANT | Primary, Secondary | Primary |
| State | VARIANT | Active, Default, Hover | Active |

### Usage notes

No description provided.

Individual tab item component with two hierarchy styles. **Primary** tabs use a bottom border indicator for the active state and are used in standard tab bars. **Secondary** tabs use a pill shape with rounded corners and a border — used for filter-style tab groups.

### Tokens used

#### Color — Primary (by State)

| State | Background | Text | Bottom border |
|-------|-----------|------|--------------|
| Active | transparent | `#1C2026` (FG/Neutral Main) | `#1C2026` (1px) |
| Default | transparent | `#1C2026` (FG/Neutral Main) | none |
| Hover | `#F3F5F8` (BG/Neutral Secondary) | `#546073` (FG/Neutral Secondary) | none |

#### Color — Secondary (by State)

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Active | `#E8EDF5` | `#1C2026` (FG/Neutral Main) | `#99ADD5` (Blue/03) 1px |
| Default | transparent | `#546073` (FG/Neutral Secondary) | `#D4DBE6` (Border/Main) 1px |
| Hover | `#F3F5F8` (BG/Neutral Secondary) | `#546073` (FG/Neutral Secondary) | none |

#### Typography

| State | Font | Weight | Size | Line height | Style ref |
|-------|------|--------|------|-------------|-----------|
| Active | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 |
| Default | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 |
| Hover | Inter | 600 (Semibold) — Primary / 400 (Regular) — Secondary | 14px | 20px | Inter/PM/600 / Inter/PM/400 |

#### Spacing

| Property | Primary | Secondary |
|----------|---------|-----------|
| Padding top/bottom | 16px | 8px |
| Padding left/right | 12px | 16px |
| Corner radius | — | 24px (pill) |
| Border width (active) | 1px (bottom) | 1px (all) |

#### Sizing

| Heirarchy | Height |
|-----------|--------|
| Primary | 52px |
| Secondary | 36px |

---

## Tab bar

**Figma node ID:** `67399:5486`

### Variants

#### Type
- Web primary tab bar
- Mobile tab bar
- Web secondary tab bar
- Web centered tab bar

**Total variants:** 4

| Variant | Node ID |
|---------|---------|
| Type=Web primary tab bar | `67399:5487` |
| Type=Mobile tab bar | `67399:5498` |
| Type=Web secondary tab bar | `67399:5509` |
| Type=Web centered tab bar | `67399:5520` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Type | VARIANT | Web primary tab bar, Mobile tab bar, Web secondary tab bar, Web centered tab bar | Web primary tab bar |

### Usage notes

No description provided.

Composed tab bar containing multiple `Tab states` instances arranged horizontally with edge scrim gradients for scroll overflow indication. Each variant includes 7 tab instances with the first tab in Active state.

- **Web primary tab bar** — 705px wide, uses Primary hierarchy tabs with 8px spacing
- **Mobile tab bar** — 397px wide, uses Primary hierarchy tabs with no spacing (fill container)
- **Web secondary tab bar** — 705px wide, uses Secondary hierarchy pill tabs with 8px spacing
- **Web centered tab bar** — 705px wide, uses Primary hierarchy tabs with 8px spacing, first tab fills available space

### Tokens used

#### Color

Same tab colors as `Tab states` — see above.

| Element | Token | Value |
|---------|-------|-------|
| Edge scrim gradient | — | Linear: `#FFFFFF` at 0% → 64% → 100% opacity |

#### Spacing

| Property | Web primary | Mobile | Web secondary | Web centered |
|----------|-----------|--------|---------------|-------------|
| Tab spacing | 8px | 0px (fill) | 8px | 8px |
| Left scrim width | 24px | 24px | 24px | 24px |
| Right scrim width | 32px | 32px | 32px | 32px |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| Web primary tab bar | 705px | 52px |
| Mobile tab bar | 397px | 52px |
| Web secondary tab bar | 705px | 36px |
| Web centered tab bar | 705px | 52px |

---

## Tabs

**Figma node ID:** `67500:17450`

### Variants

#### State
- Active
- Default
- Hover

**Total variants:** 3

| Variant | Node ID |
|---------|---------|
| State=Active | `67500:17451` |
| State=Default | `67500:17453` |
| State=Hover | `67500:17455` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Active, Hover | Active |

### Usage notes

No description provided.

Individual tab item used within `Tabs Group`. Functionally similar to `Tab states` Primary hierarchy but with slightly different padding (8px left/right instead of 12px) and a 44px height instead of 52px. Used as the building block for the `Tabs Group` component.

### Tokens used

#### Color (by State)

| State | Background | Text | Bottom border |
|-------|-----------|------|--------------|
| Active | transparent | `#1C2026` (FG/Neutral Main) | `#1C2026` (1px) |
| Default | transparent | `#546073` (FG/Neutral Secondary) | none |
| Hover | `#F3F5F8` (BG/Neutral Secondary) | `#1C2026` (FG/Neutral Main) | none |

#### Typography

| State | Font | Weight | Size | Line height | Style ref |
|-------|------|--------|------|-------------|-----------|
| Active | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 |
| Default | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 |
| Hover | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 16px |
| Padding left/right | 8px |
| Item spacing | 4px |
| Border width (active) | 1px (bottom) |

#### Sizing

| Property | Value |
|----------|-------|
| Height | 44px |

---

## Tabs Group

**Figma node ID:** `67500:17457`

### Variants

#### Tabs
- 2
- 3
- 4
- 5
- 6
- 7

**Total variants:** 6

| Variant | Node ID |
|---------|---------|
| Tabs=7 | `67500:17458` |
| Tabs=6 | `67500:17466` |
| Tabs=5 | `67500:17474` |
| Tabs=4 | `67500:17482` |
| Tabs=3 | `67500:17490` |
| Tabs=2 | `67500:17498` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Tabs | VARIANT | 2, 3, 4, 5, 6, 7 | 7 |

### Usage notes

No description provided.

Horizontal group of `Tabs` instances. The `Tabs` variant property controls how many tabs are visible (first tab is always Active, rest are Default). All variants contain 7 tab instances internally — the `Tabs` property controls how many are visible/expanded. Tab spacing is 16px.

### Tokens used

Same token set as `Tabs` — see above.

#### Spacing

| Property | Value |
|----------|-------|
| Tab spacing | 16px |
| Layout mode | HORIZONTAL |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| Tabs=7 | 629px | 44px |
| Tabs=2 | 169px | 44px |

---

## Do not use with

