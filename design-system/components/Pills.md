# Pills

**Page:** Pills

**Type:** Component

**Figma node ID:** `4659:147`

**Status:** Complete (page marked with checkmark in Figma)

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| Static pills | COMPONENT_SET | `68313:5524` | 7 |
| Actionable pills- Web | COMPONENT_SET | `68313:5546` | 18 |
| Actionable pills- Mobile | COMPONENT_SET | `68313:6692` | 4 |

---

## Dark mode

All pill components support dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `Blue/08` → `Dark/Blue/02`, `FG/Neutral Main` → `Dark/FG/Neutral Main`). See tokens.md for the full dark token set.

---

## Static pills

**Figma node ID:** `68313:5524`

### Variants

#### Kind
- Success
- Caution
- Danger
- Neutral
- Promotion
- Important
- Info

**Total variants:** 7

| Variant | Node ID |
|---------|---------|
| Kind=Success | `68313:5525` |
| Kind=Caution | `68313:5528` |
| Kind=Danger | `68313:5531` |
| Kind=Neutral | `68313:5534` |
| Kind=Important | `68313:5537` |
| Kind=Promotion | `68313:5540` |
| Kind=Info | `68313:5543` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Kind | VARIANT | Caution, Success, Danger, Neutral, Promotion, Important, Info | Success |
| Text#4187:0 | TEXT | — | "Pill Label" |

### Usage notes

No description provided.

Static, non-interactive badge pills used to indicate status or category. Each Kind maps to a distinct background color with either light (white) or dark (black) foreground text and icon, depending on background contrast. All variants include a leading icon instance (`rewards14`).

### Tokens used

#### Color (by Kind)

| Kind | Background | Text / Icon | Token |
|------|-----------|-------------|-------|
| Success | `#1F7C3E` | `#FFFFFF` | Green/05 |
| Caution | `#EDD17B` | `#1C2026` | Yellow/03 |
| Danger | `#B3485A` | `#FFFFFF` | Red/04 |
| Neutral | `#D4DBE6` | `#1C2026` | Border/Main |
| Important | `#152B56` | `#FFFFFF` | Blue/08 |
| Promotion | `#D6A55C` | `#1C2026` | Gold/04 |
| Info | `#99ADD5` | `#1C2026` | Blue/03 |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Label text | Inter | 400 (Regular) | 12px | 16px | Inter/PS/400 |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 2px |
| Padding left/right | 8px |
| Icon-to-text spacing | 4px |
| Corner radius | 24px (pill) |
| Layout mode | HORIZONTAL |

#### Sizing

| Property | Value |
|----------|-------|
| Height | 20px |
| Icon size | 14×14 |

---

## Actionable pills- Web

**Figma node ID:** `68313:5546`

### Variants

#### Kind
- Primary
- Secondary

#### Size
- Large
- Small

#### State
- Default
- Hover
- Selected

#### Icon
- True
- False

**Total variants:** 18 (not full 24 matrix — Small/Icon=True combinations are missing)

| Variant | Node ID |
|---------|---------|
| Kind=Primary, Size=Large, State=Default, Icon=True | `68313:5547` |
| Kind=Primary, Size=Large, State=Hover, Icon=True | `68313:5550` |
| Kind=Primary, Size=Large, State=Selected, Icon=True | `68313:5553` |
| Kind=Primary, Size=Large, State=Default, Icon=False | `68313:5556` |
| Kind=Primary, Size=Large, State=Hover, Icon=False | `68313:5559` |
| Kind=Primary, Size=Large, State=Selected, Icon=False | `68313:5562` |
| Kind=Primary, Size=Small, State=Default, Icon=False | `68313:5565` |
| Kind=Primary, Size=Small, State=Hover, Icon=False | `68313:5567` |
| Kind=Primary, Size=Small, State=Selected, Icon=False | `68313:5569` |
| Kind=Secondary, Size=Small, State=Default, Icon=False | `68313:5571` |
| Kind=Secondary, Size=Small, State=Hover, Icon=False | `68313:5573` |
| Kind=Secondary, Size=Small, State=Selected, Icon=False | `68313:5575` |
| Kind=Secondary, Size=Large, State=Default, Icon=True | `68313:5577` |
| Kind=Secondary, Size=Large, State=Default, Icon=False | `68313:5580` |
| Kind=Secondary, Size=Large, State=Hover, Icon=True | `68313:5583` |
| Kind=Secondary, Size=Large, State=Hover, Icon=False | `68313:5586` |
| Kind=Secondary, Size=Large, State=Selected, Icon=True | `68313:5589` |
| Kind=Secondary, Size=Large, State=Selected, Icon=False | `68313:5592` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Kind | VARIANT | Secondary, Primary | Primary |
| Size | VARIANT | Small, Large | Large |
| State | VARIANT | Default, Hover, Selected | Default |
| Icon | VARIANT | False, True | True |

### Usage notes

No description provided.

Interactive pill buttons for web. Used as filter chips, toggles, or selection indicators. **Primary** pills use lighter backgrounds with dark text; **Secondary** pills use medium-blue tones. The icon slot uses an `insights20` icon instance. Small size variants wrap the pill in a vertical frame with 2px top/bottom padding for alignment.

### Tokens used

#### Color — Primary Kind (by State)

| State | Background | Text | Icon |
|-------|-----------|------|------|
| Default | `#E8ECF2` | `#152B56` (Blue/08) | `#152B56` |
| Hover | `#8F9BAE` (Grey/04) | `#152B56` (Blue/08) | `#FFFFFF` |
| Selected | `#152B56` (Blue/08) | `#152B56` (Blue/08) | `#FFFFFF` |

#### Color — Secondary Kind (by State)

| State | Background | Text | Icon |
|-------|-----------|------|------|
| Default | `#CCD6EA` (Blue/02) | `#152B56` / `#1C2026` | `#152B56` / `#1C2026` |
| Hover | `#99ADD5` (Blue/03) | `#152B56` / `#1C2026` | `#1C2026` / `#FFFFFF` |
| Selected | `#3C5A94` (Blue/06) | `#152B56` / `#FFFFFF` | `#FFFFFF` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Label text | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 |

#### Spacing

| Property | Large | Small |
|----------|-------|-------|
| Padding top/bottom | 4px | 4px (inner pill) + 2px (outer frame) |
| Padding left/right | 8px | 8px |
| Icon-to-text spacing | 8px | 8px |
| Corner radius | 24px | 24px |

#### Sizing

| Size | Height |
|------|--------|
| Large | 28px |
| Small | 24px (outer frame) / 20px (inner pill) |
| Icon size | 20×20 |

---

## Actionable pills- Mobile

**Figma node ID:** `68313:6692`

### Variants

#### Property 1
- Mobile- Short form

#### Property 2
- default
- selected

#### Property 3
- true
- false

**Total variants:** 4 (Property 1 has only 1 value × Property 2: 2 × Property 3: 2)

| Variant | Node ID |
|---------|---------|
| Property 1=Mobile- Short form, Property 2=default, Property 3=true | `68313:6693` |
| Property 1=Mobile- Short form, Property 2=selected, Property 3=true | `68313:6695` |
| Property 1=Mobile- Short form, Property 2=default, Property 3=false | `68313:6697` |
| Property 1=Mobile- Short form, Property 2=selected, Property 3=false | `68313:6699` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Property 1 | VARIANT | Mobile- Short form | Mobile- Short form |
| Property 2 | VARIANT | default, selected | default |
| Property 3 | VARIANT | false, true | true |

> **Naming note:** These are unnamed generic properties in Figma. Based on behavior, the intended mapping is:
> - `Property 1` → **Client** (currently only `Mobile- Short form`)
> - `Property 2` → **State** (`default` = Default, `selected` = Selected)
> - `Property 3` → **Icon** (`true` = icon shown, `false` = icon hidden)

### Usage notes

No description provided.

Mobile-specific actionable pill, currently only available in "Mobile- Short form" format. Property 2 controls the selection state (default vs selected). Property 3 appears to control icon visibility (true = icon shown, false = icon hidden). Each variant wraps an internal `Actionable Pill/Web/Medium/default/true` instance within a 40×40 touch target frame.

### Tokens used

#### Color (by Property 2 / State)

| State | Background | Text | Icon |
|-------|-----------|------|------|
| default | `#E8ECF2` | `#152B56` (Blue/08) | `#152B56` |
| selected | `#152B56` (Blue/08) | `#152B56` / `#FFFFFF` | `#FFFFFF` |

**Note:** When Property 3=false and Property 2=selected, text also becomes `#FFFFFF`.

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Label text | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 |

#### Spacing

| Property | Value |
|----------|-------|
| Inner pill padding top/bottom | 4px |
| Inner pill padding left/right | 8px |
| Icon-to-text spacing | 8px |
| Corner radius | 24px |
| Layout mode | VERTICAL (wrapper) |

#### Sizing

| Property | Value |
|----------|-------|
| Touch target | 40×40 |
| Inner pill height | 28px |
| Icon size | 20×20 |

---

## Do not use with

