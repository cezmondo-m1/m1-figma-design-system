# Tooltip

## Overview

The tooltip system provides contextual information anchored to UI elements across Web and Mobile platforms. It includes two distinct types: **Standard Tooltip** for in-context explanations triggered by user interaction, and **Feature Highlight** for automatically surfaced feature discovery and onboarding moments.

## Types

| Type | Description | Trigger |
|------|-------------|---------|
| Standard Tooltip | Short, contextual explanation that helps users understand UI or functionality at the moment they need it. Lightweight and non-blocking. | Web: hover/focus on trigger element. Mobile: presented as bottom sheet. |
| Feature Highlight | Surfaces new features, updated UI, or interactive areas at key moments. Anchors to a related UI element with a directional tail. | Automatic — based on logic (new release, first-time experience, feature flag activation). Not user-initiated. |

---

## Dark mode

All tooltip components support dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `Blue/08` → `Dark/Blue/02`, `FG/Neutral Inverse` → `Dark/FG/Neutral Inverse`). See tokens.md for the full dark token set.

---

## Standard Tooltip

**Source page:** Standard Tooltip (`64134:36109`)

**4 component sets, 48 total variants**

| Component | Node ID | Variants | Platform | Description |
|-----------|---------|----------|----------|-------------|
| .tooltip-web | `71584:2219` | 12 | Web | Pre-filled content tooltip panel |
| .tooltip-web-slots | `71584:2448` | 12 | Web | Slot-based tooltip panel for custom content composition |
| .tooltip-mobile-sheet | `71584:2647` | 12 | Mobile | Pre-filled bottom sheet tooltip |
| .tooltip-mobile-sheet-slots | `71584:2772` | 12 | Mobile | Slot-based bottom sheet tooltip for custom content composition |

### Variants

All 4 component sets share the same variant matrix:

#### Headline
- True
- False

#### Text Link
- True
- False

#### Add slot
- 0
- 1
- 2

**Total variants per component:** 12 (Headline 2 × Text Link 2 × Add slot 3)

**Note:** `.tooltip-web` has a duplicate variant — `Headline=True, Text Link=False, Add slot=1` appears twice (node IDs `71584:2345` and `71584:2365`). Canonical node: `71584:2345` (first occurrence).

### Placement

Placement (top/bottom/left/right) is **not a variant property** on Standard Tooltip components. The components represent content-only panels — placement relative to a trigger element is handled at the composition level.

The Specs artwork in Figma shows a "Tail" (triangle/polygon) pointing from the tooltip to its trigger, but this tail is part of the documentation illustration, not the component itself.

| Position | Description |
|----------|-------------|
| N/A (web) | Web tooltip is a floating panel positioned by the consuming layout. No built-in placement variants. |
| Bottom sheet (mobile) | Mobile tooltip always presents as a bottom sheet rising from the screen edge. No directional tail. |

### Props — .tooltip-web / .tooltip-web-slots

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Headline | VARIANT | True, False | False |
| Text Link | VARIANT | True, False | False |
| Add slot | VARIANT | 0, 1, 2 | 0 |

### Props — .tooltip-mobile-sheet / .tooltip-mobile-sheet-slots

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Headline | VARIANT | True, False | False |
| Text Link | VARIANT | True, False | False |
| Add slot | VARIANT | 0, 1, 2 | 0 |

### Trigger behaviour

- **Web:** Tooltip appears on hover or focus of the trigger element. Dismisses when hover/focus leaves the trigger or the user clicks outside.
- **Mobile:** Tooltip appears as a bottom sheet. Dismisses on swipe down, tap outside, or navigation.
- Both platforms: tooltips are lightweight and non-blocking — they should not prevent users from completing primary tasks.

### Usage notes

From Figma documentation:

> Tooltips are used to provide short, contextual explanations that help users understand UI or functionality at the moment they need it. They should remain lightweight and non-blocking, allowing users to continue their task without interruption.
>
> **Web** — Tooltips are used to clarify UI elements or functionality in place, where a brief explanation can be surfaced contextually near the trigger. Web tooltips are best suited for dense interfaces where spatial proximity reinforces meaning.
>
> **Mobile** — The tooltip sheet is used to provide just-in-time explanations on touch devices, where a floating contextual container is not appropriate. The bottom sheet format allows for readable, focused messaging without navigating away from the current screen.
>
> Avoid using tooltips for disclosures, onboarding flows, or long-form explanations on either platform.

**Content hierarchy:**
- **Body** content is required — should focus on a single idea or explanation
- **Headlines** are optional — may add clarity but should be avoided if they introduce unnecessary hierarchy for short content
- **Links** are optional — used sparingly, typically to direct users to a Help Center article or another area of the product for deeper learning
- **Slots** support nesting additional content or components when needed — any additional content should remain secondary to the primary message

### Tokens used

#### Color — Web (.tooltip-web / .tooltip-web-slots)

| Element | Token | Value |
|---------|-------|-------|
| Background | Blue/08 | `#152B56` |
| Headline text | FG/Neutral Inverse | `#FFFFFF` |
| Body text | FG/Neutral Inverse | `#FFFFFF` |
| Slot placeholder | Border/Critical | `#D08E99` (design-only indicator, not rendered) |

#### Color — Mobile (.tooltip-mobile-sheet / .tooltip-mobile-sheet-slots)

| Element | Token | Value |
|---------|-------|-------|
| Background | BG/Elevation 1 (`59613:77232`) / `#FFFFFF` | `#FFFFFF` |
| Headline text | FG/Neutral Main | `#1C2026` |
| Body text | FG/Neutral Main | `#1C2026` |
| Text link | — | `#2A7DA7` (Teal/04) |
| Grab handle | Vibrant Labels/Vibrant Tertiary | `#7F7F7F` at 40% / `#3D3D3D` at 50% |
| Home indicator | Labels/Primary | `#000000` |

#### Elevation

| Platform | Style |
|----------|-------|
| Web | Shadow Level 2 (`30667:17369`) |
| Mobile | Shadow Level 2 (`30667:17369`) |

#### Typography — Web

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Headline | Inter | 600 (Semibold) | 16px | 24px | Inter/PL/600 (`29701:11459`) |
| Body text | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 (`29701:11462`) |

#### Typography — Mobile

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Headline | Inter | 600 (Semibold) | 16px | 24px | Inter/PL/600 (`29701:11459`) |
| Body text | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 (`29701:11462`) |
| Text link | Inter | 600 (Semibold) | 16px | 24px | Inter/PL/600 (`31017:74330`) |

#### Spacing — Web

| Property | Value |
|----------|-------|
| Content padding top/bottom | 12px |
| Content padding left/right | 16px |
| Primary slots spacing | 12px |
| Content group spacing | 8px |
| Extra slots spacing | 16px |
| Corner radius | 8px |

#### Spacing — Mobile

| Property | Value |
|----------|-------|
| Content spacing | 16px |
| Headline-to-body spacing | 8px |
| Link padding top/bottom | 8px |
| Grab handle corner radius | 2.5px |
| Home indicator corner radius | 100px |

#### Sizing — Web

| Property | Value |
|----------|-------|
| Width | 343px |
| Height | Varies by content |

#### Sizing — Mobile

| Property | Value |
|----------|-------|
| Width | 375px (full device width) |
| Height | 203px (base) |
| Grab handle | 36×5 |
| Home indicator | 134×5 |

---

## Feature Highlight

**Figma node ID:** `63893:4155`

**Source page:** Feature Highlight (`64134:36110`)

**1 component set, 12 variants**

### Variants

#### Alignment
- Left
- Centered
- Right

#### Position
- Bottom
- Top

#### Close
- True
- False

**Total variants:** 12 (Alignment 3 × Position 2 × Close 2)

| Variant | Node ID |
|---------|---------|
| Alignment=Left, Position=Bottom, Close=False | `63893:4156` |
| Alignment=Left, Position=Top, Close=False | `63893:4165` |
| Alignment=Centered, Position=Top, Close=False | `63893:4174` |
| Alignment=Right, Position=Top, Close=False | `63893:4183` |
| Alignment=Centered, Position=Bottom, Close=False | `63893:4192` |
| Alignment=Right, Position=Bottom, Close=False | `63893:4201` |
| Alignment=Left, Position=Bottom, Close=True | `64024:2651` |
| Alignment=Left, Position=Top, Close=True | `64024:2660` |
| Alignment=Centered, Position=Bottom, Close=True | `64024:2669` |
| Alignment=Centered, Position=Top, Close=True | `64024:2678` |
| Alignment=Right, Position=Bottom, Close=True | `64024:2687` |
| Alignment=Right, Position=Top, Close=True | `64024:2696` |

### Placement

| Position | Tail direction | Description |
|----------|---------------|-------------|
| Bottom | Points downward | Tooltip content above the trigger element. Tail extends from the bottom edge of the content toward the trigger below. |
| Top | Points upward | Tooltip content below the trigger element. Tail extends from the top edge of the content toward the trigger above. |

| Alignment | Tail horizontal position | Description |
|-----------|------------------------|-------------|
| Left | Left edge | Tail aligns with the left edge of the tooltip body. Left edge of tooltip aligns with trigger's left edge. |
| Centered | Center | Tail centers horizontally within the tooltip body. Tooltip centers horizontally with the trigger element. |
| Right | Right edge | Tail aligns with the right edge of the tooltip body. Right edge of tooltip aligns with trigger's right edge. |

### Props

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Alignment | VARIANT | Left, Centered, Right | Left |
| Position | VARIANT | Bottom, Top | Bottom |
| Close | VARIANT | True, False | False |

**Content (not variant-controlled):**

| Property | Type | Description |
|----------|------|-------------|
| Title | TEXT | Headline text — always present |
| Supporting text | TEXT | Body description — always present |
| Links | TEXT | Optional text link (visible in some variants) |

### Trigger behaviour

- **Trigger:** Appears automatically based on logic — new release, first-time experience, or feature flag activation. Never user-initiated (no hover, tap, or focus trigger).
- **Purpose:** Onboarding, feature discovery, or UI education.
- **Frequency:** Appears once per context or per session unless re-triggered by the app.
- **Dismissal:**
  - Tap or click outside the container
  - Tap the close affordance (`Close=True` variant)
  - Platform-specific navigation patterns
- **Behaviour:** Lightweight and non-blocking — must not prevent users from completing primary tasks.

### Usage notes

From Figma documentation:

> The Feature Highlight surfaces new features, updated UI, or interactive areas at key moments in the experience. It appears automatically (not user-triggered) and anchors to a related UI element with a tail that points directly to the target. The component is lightweight, non-blocking, and used consistently across both Web and Mobile clients.

**Content guidelines:**
- Keep content brief and easy to scan
- Use one or two short sentences to guide or educate the user without interrupting their flow

**When to use:**
- At key moments in the flow, especially for first-time or new users
- To guide gesture-based interactions or reveal available actions (mobile)
- Feature discovery or UI education

**Accessibility:**
- Must be non-blocking — should not prevent primary task completion
- Container announced to assistive technologies when it appears, without interrupting user's current context
- Dismissal accessible via standard interaction patterns (tap/click outside, platform-specific navigation)
- Focus should not be forcibly trapped within the Feature Highlight
- Must respect system accessibility settings such as reduced motion
- Content must be readable in both light and dark modes with sufficient color contrast
- The tail is purely decorative and does not convey meaning independently

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Background | Blue/08 (BG/Info per requirements) | `#152B56` |
| Title text | FG/Neutral On-Dark | `#FFFFFF` |
| Body text | FG/Neutral On-Dark | `#FFFFFF` |
| Text link | Teal/02 | `#A6C9DA` |
| Close icon | Dark/FG/Neutral On-Dark | `#ECEFF4` |
| Tail fill | Blue/08 | `#152B56` (matches background) |

#### Elevation

| Style |
|-------|
| Shadow Level 2 (`30667:17369`) |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Title | Inter | 600 (Semibold) | 16px | 24px | Inter/PL/600 (`29701:11459`) |
| Body text | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 (`29701:11462`) |
| Text link | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 (`29701:11463`) |

#### Spacing

| Property | Value |
|----------|-------|
| Content padding top/bottom | 12px |
| Content padding left/right | 16px |
| Title-to-body spacing | 8px |
| Content-to-link spacing | 16px |
| Corner radius | 8px |
| Tail padding left/right | 12px |
| Tail-to-trigger gap | 8px |
| Tail tip radius | 2px |

#### Sizing

| Element | Value |
|---------|-------|
| Width | 343px |
| Total height (with tail) | 116px |
| Content height | 104px |
| Tail | 18×12 (triangle) |
| Close icon | 20×20 |

---

## Behaviour rules

| Rule | Detail |
|------|--------|
| Only one tooltip visible at a time | Both Standard Tooltip and Feature Highlight should not stack — only one contextual overlay should be visible at any given moment. |
| Feature Highlight persists until dismissed | Remains visible until the user taps outside, uses the close affordance, or navigates away. Does not auto-dismiss on a timer. |
| Standard Tooltip dismisses on interaction end | Web: dismisses when hover/focus leaves the trigger. Mobile: dismisses on swipe down, tap outside, or navigation. |
| Feature Highlight is automatic only | Triggered by app logic (feature flags, first-time experience). Never triggered by user hover, tap, or focus. |
| Standard Tooltip is user-triggered | Web: triggered by hover or focus on the trigger element. Mobile: triggered by tap (opens bottom sheet). |
| Non-blocking | Both types must not prevent users from completing primary tasks. |
| Tail adjusts to position | Feature Highlight tail direction adjusts based on Position property — points toward the trigger element. |
| 8px gap between tail and trigger | Feature Highlight maintains an 8px gap between the tail tip and the trigger element. |

---

## Cross-type comparison

| Aspect | Standard Tooltip | Feature Highlight |
|--------|-----------------|-------------------|
| Background (web) | `#152B56` (Blue/08) | `#152B56` (Blue/08) |
| Background (mobile) | `#FFFFFF` (bottom sheet) | `#152B56` (same as web) |
| Text color (web) | `#FFFFFF` | `#FFFFFF` |
| Text color (mobile) | `#1C2026` (dark on white) | `#FFFFFF` (light on dark) |
| Text link color | N/A (slot-based) | `#A6C9DA` (Teal/02) |
| Has tail/arrow | No (content-only panel) | Yes (directional triangle) |
| Has placement variants | No | Yes (Position × Alignment) |
| Has close button | No | Yes (Close=True variant) |
| Has slots | Yes (Add slot 0/1/2) | No |
| Elevation | Shadow Level 2 | Shadow Level 2 |
| Corner radius | 8px | 8px |
| Content padding | 12px / 16px | 12px / 16px |
| Width | 343px (web) / 375px (mobile) | 343px |
| Title typography | Inter/PL/600 (16px) | Inter/PL/600 (16px) |
| Body typography | Inter/PM/400 (14px) | Inter/PM/400 (14px) |
| Platform variants | Web + Mobile (separate components) | Single component (shared) |

---

## Do not use with

