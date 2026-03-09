# M1 Intelligence Panel

**Page:** M1 Intelligence 2 (external file)

**Type:** Pattern

**Figma file:** `YJjRkvR0bInRPROG0WnvrS` ("M1 Intelligence 2")

**Figma node ID:** `6667:116246`

---

## Overview

The M1 Intelligence Panel is a collapsible AI chat interface that overlays or sits alongside the main app content. It provides conversational AI access to portfolio questions, market news, and financial guidance. The panel is composed entirely from existing M1 design system components — it has no unique component set of its own. This document describes the panel's anatomy, layout, and how existing components are assembled.

---

## Components on this page

The panel is a composed frame (not a COMPONENT_SET). It references components from the M1 Intelligence component library:

| Component | Role in panel | Component ID | Source |
|-----------|--------------|--------------|--------|
| chatField | Text input area for prompts | `4421:3818` | M1 Intelligence library |
| inputWrapper | Inner text field wrapper | `4421:3739` | M1 Intelligence library |
| _web-l3-tabs | Tab bar items (Chat / History) | `4421:3724`, `4421:3726` | M1 Intelligence library |
| Buttons (Suggestion) | Prompt suggestion pills | `4403:1350` | M1 Intelligence library |
| Links | Footer disclosure links | `4403:1711` | M1 Intelligence library |
| Pills | "Early Beta" badge | `4403:1764` | M1 Intelligence library |
| Hot button | Send button inside chat field | `4403:1167` | M1 Intelligence library |
| close20 | Close panel icon | `4421:3719` | M1 Intelligence library |
| create20 | New chat icon | `4499:4639` | M1 Intelligence library |
| expandScreen20 | Expand panel icon | `4499:4637` | M1 Intelligence library |
| moreVert20 | Overflow menu icon | `4421:3730` | M1 Intelligence library |
| add16 | Icon inside suggestion buttons | `4403:579` | M1 Intelligence library |
| caretDown16 | Icon inside suggestion buttons | `4403:585` | M1 Intelligence library |
| rewards14 | Icon inside Early Beta pill | `4403:1720` | M1 Intelligence library |

---

## Variants

The panel appears in the following configurations based on context:

| Variant | Description | Notes |
|---------|-------------|-------|
| Compact | Side panel overlay (360px wide) | The node documented here |
| Expanded | Full-width or wider panel | Seen in sibling frames on the same Figma page |
| Chat active | Showing active conversation thread | Thread replaces welcome content area |
| History | Showing past conversation list | Triggered by History tab |

> **Note:** These are not formal COMPONENT_SET variants — they are separate frames in Figma representing different states/configurations of the same panel pattern.

---

## Props / Properties

The panel itself has no configurable variant properties (it is a FRAME, not a COMPONENT_SET). The internal components accept the following relevant props:

### chatField

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Placeholder text | TEXT | Any | "Ask M1 Intelligence" |
| Helper text | TEXT | Any | "Helper text" |
| Send button | INSTANCE | Hot button | arrowRight icon |

### _web-l3-tabs

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Text | TEXT | Any | "Chat" / "History" |
| Active | Inferred from border | Active (bottom border) / Inactive | — |

### Suggestion Buttons

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Button label | TEXT | Any | Prompt suggestion text |
| Kind | VARIANT | Suggestion (from Buttons system) | Suggestion |

---

## Usage notes

No description provided in Figma component description field.

The M1 Intelligence Panel is the primary interface for M1's AI assistant feature. Based on the design:

- **Compact mode** (360px) sits alongside main content in a right-side panel
- Panel can be expanded to a wider view via the expand icon
- New conversations are started via the create icon or by typing in the chat field
- Suggested prompts help users get started with common queries
- The panel includes a **Chat** and **History** tab for switching between active conversation and past threads
- Footer includes "Early Beta" badge and legal disclaimers (AI Terms of Use, Disclosures)
- The disclaimer "AI-generated. May contain errors. Not financial advice." is always visible

---

## Anatomy

The panel is structured as follows (top to bottom):

### 1. Header bar

| Element | Position | Details |
|---------|----------|---------|
| "New chat" label | Left | Inter 400 14px/20px, `#1C2026` |
| expandScreen20 icon | After label | 20x20 |
| create20 icon | After expand | 20x20, creates new conversation |
| moreVert20 icon | Right | 20x20, overflow menu, corner radius 4px |
| close20 icon | Far right | 20x20, closes panel |

### 2. Tab bar

| Element | Details |
|---------|---------|
| Container | Full width, bottom border `#D4DBE6` 1px |
| Active tab ("Chat") | Inter 600 14px/20px, `#1C2026`, bottom border `#1C2026` 1px |
| Inactive tab ("History") | Inter 400 14px/20px, `#546073`, no bottom border |
| Tab spacing | 40px gap between tabs |
| Tab padding | 20px top, 12px right, 16px bottom, 12px left |

### 3. Welcome content area

| Element | Details |
|---------|---------|
| Greeting | "Hello, Taylor" — Inter 500 28px/32px |
| Subtitle | "Ask about your portfolio, compare holdings, and more." — Inter 400 18px/24px, `#000000` |
| Spacing | 16px gap between greeting and subtitle, 24px gap before suggestions |

### 4. Suggestion prompts

Vertically stacked Suggestion-kind Buttons:

| Element | Details |
|---------|---------|
| Button kind | Suggestion (from Buttons.md) |
| Border | `#D4DBE6` 2px |
| Corner radius | 16px |
| Padding | 8px top/bottom, 16px left/right |
| Icon left | add16 icon |
| Label | Inter 600 12px/16px, `#1C2026` |
| Icon right | caretDown16 icon |
| Item spacing | 8px between icon and label |
| List spacing | 12px between buttons |

**Default prompt suggestions:**
- "Did I earn dividends this month?"
- "Strategies to diversify my portfolio"
- "What's the latest market news?"
- "Am I out performing the S&P 500?"
- "Metrics to consider when evaluating holdings"

### 5. Chat input field (chatField)

| Element | Details |
|---------|---------|
| Container | Full width, `#FFFFFF` background, `#8F9BAE` 1px border, 12px corner radius |
| Padding | 12px all sides |
| Item spacing | 12px between input area and send button |
| Placeholder text | "Ask M1 Intelligence" — Inter 400 14px/20px, `#546073` |
| Scrollbar track | 4px wide, `#E8ECF2`, 12px corner radius |
| Scrollbar thumb | 4px wide, `#8F9BAE`, 32px corner radius |
| Send button | 40x40 circle, `#E8ECF2` background, 40px corner radius, contains arrowRight icon |
| Helper text area | 8px top padding, Inter 400 12px/16px, `#8F9BAE` |

### 6. Footer

| Element | Details |
|---------|---------|
| Badge | "Early Beta" pill — `#D6A55C` background, Inter 400 12px/16px `#1C2026`, rewards14 icon, 16px corner radius |
| Disclaimer | "AI-generated. May contain errors. Not financial advice." — Inter 400 12px/16px, `#546073` |
| Badge + disclaimer spacing | 16px gap |
| Links row | "M1's AI Terms of Use" and "Disclosures" — Inter 400 12px/16px, `#1F5B7A`, 16px gap |

---

## Tokens used

### Color

| Element | Token / Value | Notes |
|---------|---------------|-------|
| Panel background | `#FFFFFF` (BG/Neutral Primary) | |
| Panel corner radius | 16px | Outer frame |
| Inner frame corner radius | 12px | Content container |
| Header text | `#1C2026` (FG/Neutral Main) | "New chat" label |
| Active tab text | `#1C2026` (FG/Neutral Main) | |
| Active tab border | `#1C2026` (FG/Neutral Main) | 1px bottom border |
| Inactive tab text | `#546073` (FG/Neutral Secondary) | |
| Tab bar border | `#D4DBE6` (Border/Main) | 1px bottom border |
| Greeting text | Inherited (FG/Neutral Main) | 28px heading |
| Subtitle text | `#000000` | 18px body |
| Suggestion button border | `#D4DBE6` (Border/Main) | 2px, same as Suggestion kind |
| Suggestion button text | `#1C2026` (FG/Neutral Main) | |
| Chat field border | `#8F9BAE` (Grey/04) | 1px |
| Chat field background | `#FFFFFF` (BG/Neutral Primary) | |
| Placeholder text | `#546073` (FG/Neutral Secondary) | |
| Send button background | `#E8ECF2` (Grey/02) | Disabled state |
| Send button label | `#8F9BAE` (Grey/04) | Hidden label "Label" |
| Scrollbar track | `#E8ECF2` (Grey/02) | |
| Scrollbar thumb | `#8F9BAE` (Grey/04) | |
| Helper text | `#8F9BAE` (Grey/04) | |
| Beta badge background | `#D6A55C` (Gold/03) | |
| Beta badge text | `#1C2026` (FG/Neutral Main) | |
| Disclaimer text | `#546073` (FG/Neutral Secondary) | |
| Footer link text | `#1F5B7A` (Teal/05) | |

### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Header "New chat" | Inter | 400 | 14px | 20px |
| Tab label (active) | Inter | 600 | 14px | 20px |
| Tab label (inactive) | Inter | 400 | 14px | 20px |
| Greeting | Inter | 500 | 28px | 32px |
| Subtitle | Inter | 400 | 18px | 24px |
| Suggestion button label | Inter | 600 | 12px | 16px |
| Chat placeholder | Inter | 400 | 14px | 20px |
| Helper text | Inter | 400 | 12px | 16px |
| Beta badge label | Inter | 400 | 12px | 16px |
| Disclaimer text | Inter | 400 | 12px | 16px |
| Footer links | Inter | 400 | 12px | 16px |

### Spacing

| Property | Value |
|----------|-------|
| Panel width (Compact) | 360px |
| Panel height | 1021px (flexible) |
| Panel corner radius | 16px |
| Inner corner radius | 12px |
| Tab bar height | 48px |
| Tab gap | 40px |
| Tab padding | 20px / 12px / 16px / 12px (T/R/B/L) |
| Welcome → Suggestions gap | 24px |
| Greeting → Subtitle gap | 16px |
| Suggestion button gap | 12px |
| Suggestion button padding | 8px / 16px (V/H) |
| Suggestion button radius | 16px |
| Chat field padding | 12px all sides |
| Chat field corner radius | 12px |
| Chat field → send button gap | 12px |
| Send button size | 40x40 |
| Send button corner radius | 40px |
| Footer badge → disclaimer gap | 16px |
| Footer links gap | 16px |
| Chat area → footer gap | 32px |

---

## Dark mode

This panel should support dark mode. No dark variants are present in the Figma file, but based on the token mapping from dark-mode-mapping.md:

| Element | Light | Dark |
|---------|-------|------|
| Panel background | `#FFFFFF` | `#0F1115` (Dark/BG/Neutral Primary) |
| Header/tab text | `#1C2026` | `#ECEFF4` (Dark/FG/Neutral Main) |
| Inactive tab text | `#546073` | `#8F9BAE` (Dark/FG/Neutral Secondary) |
| Tab bar border | `#D4DBE6` | `#2F3641` (Dark/Border/Main) |
| Chat field border | `#8F9BAE` | `#5E6D82` (Dark/Grey/04) |
| Chat field background | `#FFFFFF` | `#0F1115` |
| Placeholder text | `#546073` | `#8F9BAE` |
| Send button bg | `#E8ECF2` | `#272C35` (Dark/Grey/02) |
| Suggestion border | `#D4DBE6` | `#2F3641` |
| Disclaimer text | `#546073` | `#8F9BAE` |
| Footer links | `#1F5B7A` | `#A6C9DA` (Dark/Teal/05) |

---

## Do not use with


