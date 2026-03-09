# Input

**Compiled from Figma pages:** Inputs, Large inputs, Search inputs

**Type:** Component

---

## Overview

The Input system covers all text entry components across the M1 product. It includes standard form fields, large multiline inputs, and search fields — each with platform-specific and state-specific variants.

| Input type | Component(s) | Total variants |
|-----------|-------------|----------------|
| Default Input | Form fields | 92 |
| Large Input | Multiline Input, inputWrapper, scrollBar | 24 |
| Search Input | searchField | 10 |

---

## Dark mode

All input components support dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `FG/Neutral Main` → `Dark/FG/Neutral Main`, `Border/Main` → `Dark/Border/Main`). See tokens.md for the full dark token set.

---

## Default Input — Form fields

**Page:** Inputs

**Figma node ID:** `29301:130755`

### Variants

#### Breakpoint
- Desktop
- Mobile

#### State
- Default
- Active
- Error
- Disabled
- Filled

#### Kind
- Flat
- Elevated

#### Type
- Text
- Dropdown
- Date

**Total variants:** 92 (not all combinations — some duplicate/overlapping entries exist)

| Variant | Node ID |
|---------|---------|
| Breakpoint=Desktop, State=Default, Kind=Flat, Type=Text | `29301:130756` |
| Breakpoint=Desktop, State=Active, Kind=Flat, Type=Text | `29301:130768` |
| Breakpoint=Desktop, State=Error, Kind=Flat, Type=Text | `29301:130780` |
| Breakpoint=Desktop, State=Disabled, Kind=Flat, Type=Text | `29301:130792` |
| Breakpoint=Desktop, State=Filled, Kind=Flat, Type=Text | `29301:130804` |
| Breakpoint=Desktop, State=Default, Kind=Flat, Type=Dropdown | `29301:130816` |
| Breakpoint=Desktop, State=Active, Kind=Flat, Type=Dropdown | `29301:130828` |
| Breakpoint=Desktop, State=Error, Kind=Flat, Type=Dropdown | `29301:130840` |
| Breakpoint=Desktop, State=Disabled, Kind=Flat, Type=Dropdown | `29301:130852` |
| Breakpoint=Desktop, State=Filled, Kind=Flat, Type=Dropdown | `29301:130864` |
| Breakpoint=Desktop, State=Default, Kind=Flat, Type=Date | `38420:22362` |
| Breakpoint=Desktop, State=Active, Kind=Flat, Type=Date | `38420:22373` |
| Breakpoint=Desktop, State=Error, Kind=Flat, Type=Date | `38420:22384` |
| Breakpoint=Desktop, State=Disabled, Kind=Flat, Type=Date | `38420:22395` |
| Breakpoint=Desktop, State=Filled, Kind=Flat, Type=Date | `38420:22406` |
| Breakpoint=Desktop, State=Default, Kind=Elevated, Type=Text | `29301:130876` |
| Breakpoint=Desktop, State=Active, Kind=Elevated, Type=Text | `29301:130888` |
| Breakpoint=Desktop, State=Active, Kind=Elevated, Type=Text | `49512:10406` |
| Breakpoint=Desktop, State=Error, Kind=Elevated, Type=Text | `29301:130900` |
| Breakpoint=Desktop, State=Disabled, Kind=Elevated, Type=Text | `29301:130912` |
| Breakpoint=Desktop, State=Filled, Kind=Elevated, Type=Text | `29301:130924` |
| Breakpoint=Desktop, State=Default, Kind=Elevated, Type=Dropdown | `29301:130936` |
| Breakpoint=Desktop, State=Active, Kind=Elevated, Type=Dropdown | `29301:130948` |
| Breakpoint=Desktop, State=Active, Kind=Elevated, Type=Dropdown | `50560:8266` |
| Breakpoint=Desktop, State=Error, Kind=Elevated, Type=Dropdown | `29301:130960` |
| Breakpoint=Desktop, State=Disabled, Kind=Elevated, Type=Dropdown | `29301:130972` |
| Breakpoint=Desktop, State=Filled, Kind=Elevated, Type=Dropdown | `29301:130984` |
| Breakpoint=Desktop, State=Default, Kind=Elevated, Type=Date | `38420:22417` |
| Breakpoint=Desktop, State=Active, Kind=Elevated, Type=Date | `38420:22428` |
| Breakpoint=Desktop, State=Error, Kind=Elevated, Type=Date | `38420:22439` |
| Breakpoint=Desktop, State=Disabled, Kind=Elevated, Type=Date | `38420:22450` |
| Breakpoint=Desktop, State=Filled, Kind=Elevated, Type=Date | `38420:22461` |
| Breakpoint=Mobile, State=Default, Kind=Flat, Type=Text | `29301:130996` |
| Breakpoint=Mobile, State=Active, Kind=Flat, Type=Text | `29301:131008` |
| Breakpoint=Mobile, State=Error, Kind=Flat, Type=Text | `29301:131020` |
| Breakpoint=Mobile, State=Disabled, Kind=Flat, Type=Text | `29301:131032` |
| Breakpoint=Mobile, State=Filled, Kind=Flat, Type=Text | `29301:131044` |
| Breakpoint=Mobile, State=Default, Kind=Flat, Type=Dropdown | `29301:131056` |
| Breakpoint=Mobile, State=Active, Kind=Flat, Type=Dropdown | `29301:131068` |
| Breakpoint=Mobile, State=Error, Kind=Flat, Type=Dropdown | `29301:131080` |
| Breakpoint=Mobile, State=Disabled, Kind=Flat, Type=Dropdown | `29301:131092` |
| Breakpoint=Mobile, State=Filled, Kind=Flat, Type=Dropdown | `29301:131104` |
| Breakpoint=Mobile, State=Default, Kind=Flat, Type=Date | `38420:22472` |
| Breakpoint=Mobile, State=Active, Kind=Flat, Type=Date | `38420:22483` |
| Breakpoint=Mobile, State=Error, Kind=Flat, Type=Date | `38420:22494` |
| Breakpoint=Mobile, State=Disabled, Kind=Flat, Type=Date | `38420:22505` |
| Breakpoint=Mobile, State=Filled, Kind=Flat, Type=Date | `38420:22516` |
| Breakpoint=Mobile, State=Default, Kind=Elevated, Type=Text | `29301:131116` |
| Breakpoint=Mobile, State=Active, Kind=Elevated, Type=Text | `29301:131128` |
| Breakpoint=Mobile, State=Error, Kind=Elevated, Type=Text | `29301:131140` |
| Breakpoint=Mobile, State=Disabled, Kind=Elevated, Type=Text | `29301:131152` |
| Breakpoint=Mobile, State=Filled, Kind=Elevated, Type=Text | `29301:131164` |
| Breakpoint=Mobile, State=Default, Kind=Elevated, Type=Dropdown | `29301:131176` |
| Breakpoint=Mobile, State=Active, Kind=Elevated, Type=Dropdown | `29301:131188` |
| Breakpoint=Mobile, State=Error, Kind=Elevated, Type=Dropdown | `29301:131200` |
| Breakpoint=Mobile, State=Disabled, Kind=Elevated, Type=Dropdown | `29301:131212` |
| Breakpoint=Mobile, State=Filled, Kind=Elevated, Type=Dropdown | `29301:131224` |
| Breakpoint=Mobile, State=Default, Kind=Elevated, Type=Date | `38420:22527` |
| Breakpoint=Mobile, State=Active, Kind=Elevated, Type=Date | `38420:22538` |
| Breakpoint=Mobile, State=Error, Kind=Elevated, Type=Date | `38420:22549` |
| Breakpoint=Mobile, State=Disabled, Kind=Elevated, Type=Date | `38420:22560` |
| Breakpoint=Mobile, State=Filled, Kind=Elevated, Type=Date | `38420:22571` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Breakpoint | VARIANT | Desktop, Mobile | Desktop |
| State | VARIANT | Default, Active, Error, Disabled, Filled | Default |
| Kind | VARIANT | Flat, Elevated | Flat |
| Type | VARIANT | Text, Dropdown, Date | Text |

> **Naming note:** `Breakpoint` deviates from the system convention of `Client` (Web, iOS, Android). `Desktop` should be `Web`; `Mobile` conflates iOS and Android.
| Label | TEXT | — | "Label" |
| Input text | TEXT | — | "Input text" |
| Helper text#4871:5 | BOOLEAN | true, false | true |
| Helper text | TEXT | — | "Helper text" |
| Prefix#6163:3 | BOOLEAN | true, false | false |
| Suffix#6163:0 | BOOLEAN | true, false | false |

### Usage notes

Standard form field input used throughout the product. Supports text entry, dropdowns, and date pickers. **Flat** kind uses a bottom border only; **Elevated** kind uses a full border with rounded corners and subtle elevation. Each state maps to a specific visual treatment (border color, label position, background).

### Known inconsistencies

- **Duplicate variants:** Two variants share the name `Breakpoint=Desktop, State=Active, Kind=Elevated` — nodes `49512:10406` (Type=Text) and `50560:8266` (Type=Dropdown). These appear to be duplicates or overrides of `29301:130888` and `29301:130948` respectively. Canonical nodes: `29301:130888` and `29301:130948` (original).
- **Error color token mismatch:** The Error state uses `#C4382E` for border, label, helper text, and icon. This was originally labeled as "Red/05" but tokens.md defines Red/05 as `#771E2D`. The value `#C4382E` does not appear in the canonical token list — it may be sourced from the external variable library or represent an unlisted semantic error token. Needs verification in Figma.

### Tokens used

#### Color (by State)

| State | Border | Label | Input text | Background (Flat) | Background (Elevated) |
|-------|--------|-------|------------|-------------------|----------------------|
| Default | `#8F9BAE` (Grey/04) | `#546073` (FG/Neutral Secondary) | `#546073` (FG/Neutral Secondary) | `#FFFFFF` | `#FFFFFF` |
| Active | `#2A7DA7` (Teal/04) | `#2A7DA7` (FG/Primary) | `#1C2026` (FG/Neutral Main) | `#FFFFFF` | `#FFFFFF` |
| Error | `#C4382E` | `#C4382E` | `#1C2026` (FG/Neutral Main) | `#FFFFFF` | `#FFFFFF` |
| Disabled | `#D4DBE6` (Border/Main) | `#8F9BAE` (Grey/04) | `#8F9BAE` (Grey/04) | `#F3F5F8` (BG/Neutral Secondary) | `#F3F5F8` |
| Filled | `#8F9BAE` (Grey/04) | `#546073` (FG/Neutral Secondary) | `#1C2026` (FG/Neutral Main) | `#FFFFFF` | `#FFFFFF` |

| Element | Token | Value |
|---------|-------|-------|
| Helper text (default) | FG/Neutral Secondary | `#546073` |
| Helper text (error) | — | `#C4382E` |
| Error icon | — | `#C4382E` |
| Suffix/Prefix text | FG/Neutral Secondary | `#546073` |
| Dropdown chevron | FG/Neutral Main | `#1C2026` |
| Date calendar icon | FG/Neutral Main | `#1C2026` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Label (resting) | Inter | 400 (Regular) | 16px | 24px |
| Label (floated/active) | Inter | 400 (Regular) | 12px | 16px |
| Input text | Inter | 400 (Regular) | 16px | 24px |
| Helper text | Inter | 400 (Regular) | 12px | 16px |
| Prefix/Suffix | Inter | 400 (Regular) | 16px | 24px |

#### Spacing

| Property | Flat | Elevated |
|----------|------|----------|
| Height | 56px | 56px |
| Corner radius | 0px (bottom border only) | 8px |
| Padding left/right | 0px | 16px |
| Padding top | 16px | 16px |
| Padding bottom | 8px | 8px |
| Label-to-input gap | 0px | 0px |
| Helper text margin top | 4px | 4px |
| Border width (bottom/all) | 1px (bottom) | 1px (all) |
| Active border width | 2px | 2px |

---

## Large Input — Multiline Input

**Page:** Large inputs

**Figma node ID:** `49512:10411`

### Variants

#### Breakpoint
- Desktop
- Mobile

#### State
- Default
- Active
- Error
- Disabled
- Filled

#### Kind
- Elevated

**Total variants:** 19 (some combinations not present — Kind currently only has Elevated, but 2 Desktop Active variants exist as duplicates). Canonical nodes: `49512:10406` and `50560:8266` are duplicates of nodes in the Default Input component set — see Known inconsistencies above.

| Variant | Node ID |
|---------|---------|
| Breakpoint=Desktop, State=Default, Kind=Elevated | `49512:10412` |
| Breakpoint=Desktop, State=Active, Kind=Elevated | `49512:10406` |
| Breakpoint=Desktop, State=Active, Kind=Elevated | `50560:8266` |
| Breakpoint=Desktop, State=Error, Kind=Elevated | `49512:10424` |
| Breakpoint=Desktop, State=Disabled, Kind=Elevated | `49512:10430` |
| Breakpoint=Desktop, State=Filled, Kind=Elevated | `49512:10436` |
| Breakpoint=Mobile, State=Default, Kind=Elevated | `49512:10442` |
| Breakpoint=Mobile, State=Active, Kind=Elevated | `49512:10448` |
| Breakpoint=Mobile, State=Error, Kind=Elevated | `49512:10454` |
| Breakpoint=Mobile, State=Disabled, Kind=Elevated | `49512:10460` |
| Breakpoint=Mobile, State=Filled, Kind=Elevated | `49512:10466` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Breakpoint | VARIANT | Desktop, Mobile | Desktop |
| State | VARIANT | Default, Active, Error, Disabled, Filled | Default |
| Kind | VARIANT | Elevated | Elevated |
| Label | TEXT | — | "Label" |
| Input text | TEXT | — | "Input text" |
| Helper text#4871:5 | BOOLEAN | true, false | true |
| Helper text | TEXT | — | "Helper text" |
| Character count#49512:0 | BOOLEAN | true, false | true |

### Usage notes

Multi-line text area input for longer-form content. Uses the same state model as Default Input but only has the Elevated kind. Includes an optional character count indicator (e.g. "0/250") in the bottom-right corner. The input area is taller to accommodate multiple lines of text with a scroll bar for overflow.

### Tokens used

#### Color

Same color token mapping as Default Input (Elevated kind) — see Default Input color table above.

| Element | Token | Value |
|---------|-------|-------|
| Character count text | FG/Neutral Secondary | `#546073` |
| Character count text (error/over limit) | Red/05 | `#C4382E` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Label (resting) | Inter | 400 (Regular) | 16px | 24px |
| Label (floated/active) | Inter | 400 (Regular) | 12px | 16px |
| Input text | Inter | 400 (Regular) | 16px | 24px |
| Helper text | Inter | 400 (Regular) | 12px | 16px |
| Character count | Inter | 400 (Regular) | 12px | 16px |

#### Spacing

| Property | Value |
|----------|-------|
| Min height | 136px |
| Corner radius | 8px |
| Padding left/right | 16px |
| Padding top | 16px |
| Padding bottom | 8px |
| Helper text margin top | 4px |
| Border width | 1px |
| Active border width | 2px |

---

## Large Input — inputWrapper

**Page:** Large inputs

**Figma node ID:** `50560:8272`

### Variants

#### State
- Default
- Active
- Disabled

**Total variants:** 3

| Variant | Node ID |
|---------|---------|
| State=Default | `50560:8273` |
| State=Active | `50560:8276` |
| State=Disabled | `50560:8279` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Active, Disabled | Default |

### Usage notes

A wrapper/container component that provides the bordered frame around input content without the input internals. Used to compose custom input-like containers (e.g., wrapping non-standard content in an input-styled border). Has only 3 states (no Error or Filled).

### Tokens used

#### Color (by State)

| State | Border | Background |
|-------|--------|------------|
| Default | `#8F9BAE` (Grey/04) | `#FFFFFF` |
| Active | `#2A7DA7` (Teal/04) | `#FFFFFF` |
| Disabled | `#D4DBE6` (Border/Main) | `#F3F5F8` (BG/Neutral Secondary) |

#### Spacing

| Property | Value |
|----------|-------|
| Corner radius | 8px |
| Border width | 1px |
| Active border width | 2px |

---

## Large Input — scrollBar

**Page:** Large inputs

**Figma node ID:** `50560:8282`

### Variants

#### State
- Default
- Hover

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| State=Default | `50560:8283` |
| State=Hover | `50560:8285` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Hover | Default |

### Usage notes

Custom scrollbar indicator used inside Multiline Input when content overflows. Default state shows a thin track; Hover state shows a wider, more visible thumb.

### Tokens used

#### Color

| State | Track | Thumb |
|-------|-------|-------|
| Default | transparent | `#D4DBE6` (Border/Main) |
| Hover | `#F3F5F8` (BG/Neutral Secondary) | `#8F9BAE` (Grey/04) |

#### Sizing

| State | Track width | Thumb width |
|-------|------------|-------------|
| Default | 6px | 4px |
| Hover | 8px | 6px |

---

## Search Input — searchField

**Page:** Search inputs

**Figma node ID:** `36065:31213`

### Variants

#### Device
- Web
- iOS
- Android

#### State
- Default
- Hover (Web only)
- Entered
- Disabled

**Total variants:** 10 (not all Device × State combinations — iOS and Android lack Hover state)

| Variant | Node ID |
|---------|---------|
| Device=Web, State=Default | `36065:31214` |
| Device=Web, State=Hover | `36065:31225` |
| Device=Web, State=Entered | `36065:31236` |
| Device=Web, State=Disabled | `36065:31247` |
| Device=iOS, State=Default | `36065:31258` |
| Device=iOS, State=Entered | `36065:31269` |
| Device=iOS, State=Disabled | `36065:31280` |
| Device=Android, State=Default | `36065:31291` |
| Device=Android, State=Entered | `36065:31302` |
| Device=Android, State=Disabled | `36065:31313` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Device | VARIANT | Web, iOS, Android | Web |

> **Naming note:** `Device` deviates from the system convention of `Client`. Values (Web, iOS, Android) are correct.
| State | VARIANT | Default, Hover, Entered, Disabled | Default |
| Value | TEXT | — | "Search" |
| Label | BOOLEAN | true, false | false |
| Default label | TEXT | — | "Label" |
| Dropdown | BOOLEAN | true, false | false |

### Usage notes

Search field component with platform-specific styling. **Web** uses a pill shape with an optional dropdown for search results (showing ticker + stock name list items) in the Entered state. **iOS** uses a filled background with a "Cancel" text button visible in the Entered state. **Android** uses a rounded rectangle with Material-style treatment. The Hover state is only available on Web (touch platforms do not have hover). The Dropdown prop only applies to the Web variant's Entered state.

### Tokens used

#### Color (by State)

| State | Border | Background | Text |
|-------|--------|------------|------|
| Default | `#8F9BAE` (Grey/04) | `#FFFFFF` (Web) / `#E9EDF2` (iOS) | `#546073` (FG/Neutral Secondary) |
| Hover | `#2A7DA7` (Teal/04) | `#E5EFF4` (Teal/01) | `#546073` (FG/Neutral Secondary) |
| Entered | `#2A7DA7` (Teal/04) | `#FFFFFF` | `#1C2026` (FG/Neutral Main) |
| Disabled | `#D4DBE6` (Border/Main) | `#FFFFFF` | `#8F9BAE` (Grey/04) |

| Element | Token | Value |
|---------|-------|-------|
| Placeholder text | FG/Neutral Secondary | `#546073` |
| Search icon | FG/Neutral Secondary | `#546073` |
| Dropdown background | BG/Neutral Primary | `#FFFFFF` |
| Dropdown item text (ticker) | FG/Neutral Main | `#1C2026` |
| Dropdown item text (name) | FG/Neutral Secondary | `#546073` |
| iOS Cancel button text | FG/Primary | `#2A7DA7` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Input text | Inter | 400 (Regular) | 16px | 24px |
| Label | Inter | 400 (Regular) | 14px | 20px |
| Dropdown ticker | Inter | 600 (Semibold) | 14px | 20px |
| Dropdown name | Inter | 400 (Regular) | 14px | 20px |
| iOS Cancel button | Inter | 400 (Regular) | 16px | 24px |

#### Spacing / Sizing (by Device)

| Device | Height | Corner radius | Padding left/right |
|--------|--------|---------------|-------------------|
| Web | 48px | 32px (pill) | 16px |
| iOS | 36px | 8px | 12px |
| Android | 48px | 12px | 16px |

---

## Cross-type state comparison

| State | Default Input | Multiline Input | inputWrapper | searchField |
|-------|--------------|-----------------|-------------|-------------|
| Default | Yes | Yes | Yes | Yes |
| Active/Hover | Active | Active | Active | Hover (Web only) |
| Entered | — | — | — | Yes |
| Filled | Yes | Yes | — | — |
| Error | Yes | Yes | — | — |
| Disabled | Yes | Yes | Yes | Yes |

**Notes:**
- Default Input and Multiline Input share the same 5-state model (Default, Active, Error, Disabled, Filled)
- inputWrapper has a reduced 3-state model (Default, Active, Disabled)
- searchField uses a different state model: Default, Hover, Entered, Disabled — no Error or Filled states
- "Active" (form fields) and "Hover" (search) both use Teal/04 (`#2A7DA7`) for the border highlight

---

## Do not use with

