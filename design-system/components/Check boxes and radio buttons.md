# Check boxes and radio buttons

**Page:** Check boxes and radio buttons

**Type:** Component

**Figma node ID:** `64540:101392`

**Status:** In progress (page marked with construction indicator in Figma)

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| .radios | COMPONENT_SET | `29301:130670` | 2 |
| .checkboxes | COMPONENT_SET | `29301:130675` | 2 |
| .formSelect | COMPONENT_SET | `29301:130680` | 2 |
| .Switch | COMPONENT_SET | `29301:130714` | 6 |
| .Checkbox single | COMPONENT_SET | `29301:130742` | 2 |

---

## Dark mode

All components on this page support dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `FG/Neutral Main` → `Dark/FG/Neutral Main`, `Teal/04` → `Dark/Teal/04`). See tokens.md for the full dark token set.

---

## .radios

**Figma node ID:** `29301:130670`

### Variants

#### Status
- off
- On

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| Status=off | `29301:130671` |
| Status=On | `29301:130673` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Status | VARIANT | On, off | off |

### Usage notes

No description provided.

Atomic radio button indicator. Used as a child instance inside `.formSelect` (Kind=Radio) and `.Checkbox single` (Kind=Radio).

### Tokens used

#### Color (by Status)

| Status | Icon fill |
|--------|-----------|
| off | `#546073` (FG/Neutral Secondary) |
| On | `#2A7DA7` (Teal/04 / FG/Primary) |

#### Sizing

| Property | Value |
|----------|-------|
| Overall size | 24x24 |
| Icon size | 20x20 |

---

## .checkboxes

**Figma node ID:** `29301:130675`

### Variants

#### State
- Off
- On

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| State=Off | `29301:130676` |
| State=On | `29301:130678` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Off, On | Off |

### Usage notes

No description provided.

Atomic checkbox indicator. Used as a child instance inside `.formSelect` (Kind=Checkbox) and `.Checkbox single` (Kind=Checkbox).

### Tokens used

#### Color (by State)

| State | Icon fill |
|-------|-----------|
| Off | `#546073` (FG/Neutral Secondary) |
| On | `#2A7DA7` (Teal/04 / FG/Primary) |

#### Sizing

| Property | Value |
|----------|-------|
| Overall size | 24x24 |
| Icon size | 18x18 |

---

## .formSelect

**Figma node ID:** `29301:130680`

### Variants

#### Kind
- Checkbox
- Radio

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| Kind=Checkbox | `29301:130681` |
| Kind=Radio | `29301:130693` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Kind | VARIANT | Checkbox, Radio | Checkbox |
| Pill#5501:12 | BOOLEAN | true, false | true |
| Tooltip#5501:15 | BOOLEAN | true, false | true |
| List#5583:0 | BOOLEAN | true, false | false |
| Link#6416:0 | BOOLEAN | true, false | false |

### Usage notes

No description provided.

Rich selection row with checkbox or radio indicator, title, description text, optional pill badge, tooltip, bulleted list, and link. This is the primary form selection component used in dialogs, onboarding flows, and settings.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Checkbox/Radio icon (off) | FG/Neutral Secondary | `#546073` |
| Title text | FG/Neutral Main | `#1C2026` |
| Description text | FG/Neutral Secondary | `#546073` |
| Bulleted list text | FG/Neutral Secondary | `#546073` |
| Link text | FG/Primary | `#2A7DA7` |
| Pill background | Green/05 | `#1F7C3E` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Title | Inter | 600 (Semibold) | 16px | 24px |
| Description | Inter | 400 (Regular) | 16px | 24px |
| Bulleted list | Inter | 400 (Regular) | 14px | 20px |
| Link | Inter | 600 (Semibold) | 16px | 24px |

#### Spacing

| Property | Value |
|----------|-------|
| Item spacing (checkbox/radio to content) | 16px |
| Content item spacing | 8px |
| Header item spacing | 4px |
| Bulleted list padding left | 12px |

---

## .Switch

> **Deprecated:** This is the legacy Switch component (6 variants, iOS/Aos only, Light theme). It has been superseded by the updated `.Switch` on the dedicated [Switch](Switch.md) page (node `68210:59`, 16 variants with Web, iOS26, iOS18, and Android clients, plus disabled states). Use the new Switch component for all new work.

**Figma node ID:** `29301:130714`

### Variants

#### Client
- iOS
- Aos (Android)

#### Theme
- Light

#### State
- Off
- On
- Disabled

**Total variants:** 6 (Client 2 x Theme 1 x State 3)

| Variant | Node ID |
|---------|---------|
| Client=iOS, Theme=Light, State=Off | `29301:130720` |
| Client=iOS, Theme=Light, State=On | `29301:130728` |
| Client=iOS, Theme=Light, State=Disabled | `29301:130724` |
| Client=Aos, Theme=Light, State=Off | `29301:130737` |
| Client=Aos, Theme=Light, State=On | `29301:130715` |
| Client=Aos, Theme=Light, State=Disabled | `29301:130732` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Client | VARIANT | Aos, iOS | iOS |
| Theme | VARIANT | Light | Light |
| State | VARIANT | Disabled, Off, On | Off |

### Usage notes

No description provided.

Toggle switch with platform-specific styling for iOS and Android. iOS variant is larger (52x32) with rounded pill shape. Android variant is smaller (34x20) with a Material-style track and thumb.

### Tokens used

#### Color — iOS (by State)

| State | Track | Knob |
|-------|-------|------|
| Off | `#8F9BAE` (Grey/04) | `#FFFFFF` |
| On | `#2A7DA7` (Teal/04) | `#FFFFFF` |
| Disabled | `#546073` (FG/Neutral Secondary) | `#8F9BAE` (Grey/04) |

#### Color — Android (by State)

| State | Track | Thumb |
|-------|-------|-------|
| Off | `#9DA6E0` | `#CDD3E7` |
| On | `#2A7DA7` (Teal/04) | `#FFFFFF` |
| Disabled | `#E9EDF2` | `#E9EDF2` |

#### Sizing

| Client | Overall size | Track corner radius |
|--------|-------------|-------------------|
| iOS | 52x32 | 32px |
| Aos (Android) | 34x20 | 7px |

---

## .Checkbox single

**Figma node ID:** `29301:130742`

### Variants

#### Kind
- Checkbox
- Radio

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| Kind=Checkbox | `29301:130743` |
| Kind=Radio | `29301:130746` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Kind | VARIANT | Checkbox, Radio | Checkbox |

### Usage notes

No description provided.

Simple inline checkbox or radio with a single text label. Uses `.checkboxes` or `.radios` as the indicator with a text label beside it. Lighter-weight alternative to `.formSelect` when no description, pill, tooltip, or link is needed.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Checkbox/Radio icon (off) | FG/Neutral Secondary | `#546073` |
| Label text | FG/Neutral Main | `#1C2026` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Label | Inter | 400 (Regular) | 16px | 24px |

#### Spacing

| Property | Value |
|----------|-------|
| Item spacing (icon to label) | 16px |
| Overall size | 135x24 |

---

## Do not use with

