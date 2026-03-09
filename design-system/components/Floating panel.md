# Floating panel

**Page:** Floating panel

**Type:** Pattern

**Figma node ID:** `67446:50722`

**Status:** In progress (page marked with construction indicator in Figma)

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| moveMoneyDropdown | COMPONENT_SET | `29297:70794` | 4 |

---

## Dark mode

This component supports dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `BG/Neutral Primary` → `Dark/BG/Neutral Primary`, `FG/Neutral Main` → `Dark/FG/Neutral Main`). See tokens.md for the full dark token set.

---

## moveMoneyDropdown

**Figma node ID:** `29297:70794`

### Variants

#### State
- Collapsed
- Expanded

#### Mobile/Web
- Mobile
- Web

**Total variants:** 4 (State 2 x Mobile/Web 2)

| Variant | Node ID |
|---------|---------|
| State=Collapsed, Mobile/Web=Web | `29297:70795` |
| State=Expanded, Mobile/Web=Web | `29297:70804` |
| State=Expanded, Mobile/Web=Mobile | `29297:70817` |
| State=Collapsed, Mobile/Web=Mobile | `29297:70831` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Expanded, Collapsed | Collapsed |
| Mobile/Web | VARIANT | Mobile, Web | Mobile |

> **Naming note:** `Mobile/Web` deviates from the system convention of `Client` (Web, iOS, Android). `Mobile` conflates iOS and Android.
| Has banner#7191:0 | BOOLEAN | true, false | false |

### Usage notes

No description provided.

Floating dropdown panel for the "Move money" action menu. Contains a list of transfer options with optional notification banner, and a "More options" / "Hide more options" toggle CTA.

**Collapsed state** shows 3 list items (One-time transfer, Recurring transfer, Smart Transfer) with a "More options" button.

**Expanded state** shows all 7 list items (One-time transfer, Recurring transfer, Smart Transfer, Wire transfer, Transfer from another brokerage, Direct deposit, Manage existing transfers) with a "Hide more options" button.

**Web variant** renders as a floating card with drop shadow and rounded corners. **Mobile variant** renders full-width with a mobile navigation header (close icon, title "Move money", right icons).

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Panel background | BG/Neutral Primary | `#FFFFFF` |
| CTA row background | BG/Neutral Primary | `#FFFFFF` |
| List item title | FG/Neutral Main | `#1C2026` |
| List item description | FG/Neutral Secondary | `#546073` |
| List item border | Border/Main | `#D4DBE6` |
| CTA button text | FG/Neutral Main | `#1C2026` |
| CTA button border | — | `#1C2026` |
| Pill background | Green/05 | `#1F7C3E` |
| Pill text | — | `#FFFFFF` |
| Banner background | — | `#FBF4DF` |
| Banner border | Yellow/03 | `#EDD17B` |
| Mobile nav title | FG/Neutral Main | `#1C2026` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| List item title | Inter | 400 (Regular) | 16px | 24px |
| List item description | Inter | 400 (Regular) | 14px | — |
| CTA button text | Inter | 600 (Semibold) | 16px | 24px |
| Pill label | Inter | 400 (Regular) | 12px | 16px |
| Mobile nav title | Inter | 400 (Regular) | 16px | 24px |

#### Spacing

| Property | Web | Mobile |
|----------|-----|--------|
| Panel corner radius | 8px | — |
| Notification padding top | 8px | 8px |
| Notification padding left/right | 16px | 16px |
| List item padding top/bottom | 16px | 16px |
| List item padding left/right | 16px | — |
| List item icon-to-copy spacing | 16px | 16px |
| List padding left (Mobile) | — | 16px |
| CTA button padding top/bottom | 16px | 16px |
| CTA button padding left/right | 8px | 8px |
| CTA button corner radius | 8px | 8px |

#### Elevation (Web only)

| Token | Value |
|-------|-------|
| Shadow 1 | `drop-shadow(0px 0px 40px rgba(35,38,45,0.20))` |
| Shadow 2 | `drop-shadow(0px 0px 10px rgba(35,38,45,0.05))` |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| Web / Collapsed | 298px | 272px |
| Web / Expanded | 298px | 732px |
| Mobile / Collapsed | 375px | 356px |
| Mobile / Expanded | 375px | 736px |

---

## Do not use with

