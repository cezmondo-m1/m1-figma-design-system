# Toasts

**Page:** Toasts

**Type:** Component

**Figma node ID:** `4659:252`

**Status:** Complete (page marked with checkmark in Figma)

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| Toasts | COMPONENT_SET | `62397:9212` | 32 |

---

## Toasts

**Figma node ID:** `62397:9212`

### Variants

#### Mode
- Light
- Dark
- Light_Secondary
- Dark_Secondary

#### Leading Icon
- True
- False

#### Text Link
- True
- False

#### Trailing Icon
- True
- False

**Total variants:** 32 (Mode 4 × Leading Icon 2 × Text Link 2 × Trailing Icon 2)

| Variant | Node ID |
|---------|---------|
| Mode=Light, Leading Icon=True, Text Link=True, Trailing Icon=True | `62397:9213` |
| Mode=Light, Leading Icon=True, Text Link=True, Trailing Icon=False | `62397:9225` |
| Mode=Light, Leading Icon=False, Text Link=True, Trailing Icon=False | `62397:9236` |
| Mode=Light, Leading Icon=False, Text Link=True, Trailing Icon=True | `62397:9247` |
| Mode=Light, Leading Icon=False, Text Link=False, Trailing Icon=False | `62397:9259` |
| Mode=Light, Leading Icon=True, Text Link=False, Trailing Icon=False | `62397:9270` |
| Mode=Light, Leading Icon=False, Text Link=False, Trailing Icon=True | `62397:9282` |
| Mode=Light, Leading Icon=True, Text Link=False, Trailing Icon=True | `62397:9294` |
| Mode=Dark, Leading Icon=True, Text Link=True, Trailing Icon=True | `62397:9306` |
| Mode=Dark, Leading Icon=True, Text Link=True, Trailing Icon=False | `62397:9318` |
| Mode=Dark, Leading Icon=False, Text Link=True, Trailing Icon=False | `62397:9329` |
| Mode=Dark, Leading Icon=False, Text Link=True, Trailing Icon=True | `62397:9340` |
| Mode=Dark, Leading Icon=False, Text Link=False, Trailing Icon=False | `62397:9352` |
| Mode=Dark, Leading Icon=True, Text Link=False, Trailing Icon=False | `62397:9363` |
| Mode=Dark, Leading Icon=False, Text Link=False, Trailing Icon=True | `62397:9375` |
| Mode=Dark, Leading Icon=True, Text Link=False, Trailing Icon=True | `62397:9387` |
| Mode=Light_Secondary, Leading Icon=True, Text Link=True, Trailing Icon=True | `62397:9399` |
| Mode=Light_Secondary, Leading Icon=True, Text Link=True, Trailing Icon=False | `62397:9411` |
| Mode=Light_Secondary, Leading Icon=False, Text Link=True, Trailing Icon=False | `62397:9422` |
| Mode=Light_Secondary, Leading Icon=False, Text Link=True, Trailing Icon=True | `62397:9433` |
| Mode=Light_Secondary, Leading Icon=False, Text Link=False, Trailing Icon=False | `62397:9445` |
| Mode=Light_Secondary, Leading Icon=True, Text Link=False, Trailing Icon=False | `62397:9456` |
| Mode=Light_Secondary, Leading Icon=False, Text Link=False, Trailing Icon=True | `62397:9468` |
| Mode=Light_Secondary, Leading Icon=True, Text Link=False, Trailing Icon=True | `62397:9480` |
| Mode=Dark_Secondary, Leading Icon=True, Text Link=True, Trailing Icon=True | `62397:9492` |
| Mode=Dark_Secondary, Leading Icon=True, Text Link=True, Trailing Icon=False | `62397:9504` |
| Mode=Dark_Secondary, Leading Icon=False, Text Link=True, Trailing Icon=False | `62397:9515` |
| Mode=Dark_Secondary, Leading Icon=False, Text Link=True, Trailing Icon=True | `62397:9526` |
| Mode=Dark_Secondary, Leading Icon=False, Text Link=False, Trailing Icon=False | `62397:9538` |
| Mode=Dark_Secondary, Leading Icon=True, Text Link=False, Trailing Icon=False | `62397:9549` |
| Mode=Dark_Secondary, Leading Icon=False, Text Link=False, Trailing Icon=True | `62397:9561` |
| Mode=Dark_Secondary, Leading Icon=True, Text Link=False, Trailing Icon=True | `62397:9573` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Mode | VARIANT | Light, Dark, Light_Secondary, Dark_Secondary | Light |
| Leading Icon | VARIANT | True, False | True |
| Text Link | VARIANT | True, False | True |
| Trailing Icon | VARIANT | True, False | True |

### Usage notes

No description provided.

Toast notification component with 4 mode styles. Contains a message body, optional leading icon (check24), optional text link, and optional trailing close icon (close24). A progress bar indicator at the bottom shows the toast auto-dismiss timer. **Light** and **Dark** are primary styles; **Light_Secondary** and **Dark_Secondary** are secondary styles for use on dark backgrounds (web-only, e.g. Home page).

### Tokens used

#### Color (by Mode)

| Element | Light | Dark | Light_Secondary | Dark_Secondary |
|---------|-------|------|-----------------|----------------|
| Background | `#152B56` (Blue/08) | `#0C1931` | `#FFFFFF` (BG/Neutral Primary) | `#1A1E23` |
| Message text | `#FFFFFF` | `#ECEFF4` | `#1C2026` (FG/Neutral Main) | `#ECEFF4` |
| Leading icon | `#FFFFFF` | `#ECEFF4` | `#1C2026` (FG/Neutral Main) | `#ECEFF4` |
| Trailing icon (close) | `#FFFFFF` | `#ECEFF4` | `#1C2026` (FG/Neutral Main) | `#ECEFF4` |
| Text link | `#A6C9DA` (Teal/02) | `#6FA7C3` (Teal/03) | `#2A7DA7` (Teal/04 / FG/Primary) | `#6FA7C3` (Teal/03) |
| Progress bar | `#A6C9DA` (Teal/02) | `#6FA7C3` (Teal/03) | `#8F9BAE` (Grey/04) | `#5E6D82` |

#### Elevation

| Mode | Style |
|------|-------|
| Light | Shadow Level 2 (`30667:17369`) |
| Dark | Dark/Shadow Level 2 (`30757:122470`) |
| Light_Secondary | Shadow Level 2 (`30667:17369`) |
| Dark_Secondary | Dark/Shadow Level 2 (`30757:122470`) |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Message text | Inter | 400 (Regular) | 16px | 24px | Inter/PL/400 |
| Text link | Inter | 600 (Semibold) | 16px | 24px | Inter/PL/600 |

#### Spacing

| Property | Value |
|----------|-------|
| Corner radius | 12px |
| Content padding top | 16px |
| Content padding bottom | 12px |
| Content padding left/right | 16px |
| Content vertical spacing | 4px |
| Icon-to-text spacing | 12px |
| Text-to-link spacing | 4px |
| Link padding top/bottom | 8px |
| Progress bar height | 6px |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 400px |
| Height | 150px (with all elements) |
| Icon size | 24×24 |

---

## Do not use with

