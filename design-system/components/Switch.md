# Switch

**Page:** Switch

**Type:** Component

**Figma node ID:** `66790:2663` (page) / `68210:59` (component set)

**Source:** Branch `WKtpzwEAIVge62xMePZnRs` (not yet merged to main)

> **Supersedes:** The legacy `.Switch` component on the [Check boxes and radio buttons](Check%20boxes%20and%20radio%20buttons.md) page (node `29301:130714`, 6 variants, iOS/Aos only). This version adds Web and iOS26 clients, disabled states, and is the canonical Switch going forward.

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| .Switch | COMPONENT_SET | `68210:59` | 16 |

---

## .Switch

**Figma node ID:** `68210:59`

### Variants

#### Client
- Web
- iOS26
- iOS18
- Android

#### State
- On
- Off
- On (Disabled)
- Off (Disabled)

**Total variants:** 16 (Client 4 × State 4)

| Variant | Node ID |
|---------|---------|
| Client=Web, State=On | `68210:58` |
| Client=Web, State=Off | `68210:60` |
| Client=Web, State=On (Disabled) | `71292:204` |
| Client=Web, State=Off (Disabled) | `71292:208` |
| Client=iOS26, State=On | `68210:95` |
| Client=iOS26, State=Off | `68210:96` |
| Client=iOS26, State=On (Disabled) | `68989:179` |
| Client=iOS26, State=Off (Disabled) | `68989:183` |
| Client=iOS18, State=On | `68210:124` |
| Client=iOS18, State=Off | `68210:125` |
| Client=iOS18, State=On (Disabled) | `68989:174` |
| Client=iOS18, State=Off (Disabled) | `68989:176` |
| Client=Android, State=On | `68210:280` |
| Client=Android, State=Off | `68210:281` |
| Client=Android, State=On (Disabled) | `68989:155` |
| Client=Android, State=Off (Disabled) | `68989:167` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Client | VARIANT | Web, iOS26, iOS18, Android | Web |
| State | VARIANT | On, Off, Off (Disabled), On (Disabled) | On |

### Usage notes

No description provided.

Toggle switch component with platform-specific styling for Web, iOS 26 (new style), iOS 18 (legacy style), and Android (Material). Disabled states are achieved via 50% opacity on the component (Web, iOS26, iOS18) or desaturated track colors (Android). This is an updated version of the `.Switch` component that previously lived on the "Check boxes and radio buttons" page — it now has its own dedicated page with Web and iOS26 as new Client options.

### Tokens used

#### Color — Track (by Client × State)

| Client | On | Off | On (Disabled) | Off (Disabled) |
|--------|----|----|---------------|----------------|
| Web | `#2A7DA7` (Teal/04) | `#8F9BAE` (Grey/04) | `#2A7DA7` at 50% opacity | `#8F9BAE` at 50% opacity |
| iOS26 | `#2A7DA7` (Teal/04) | `#8F9BAE` (Grey/04) | `#2A7DA7` at 50% opacity | `#8F9BAE` at 50% opacity |
| iOS18 | `#2A7DA7` (Teal/04) | `#8F9BAE` (Grey/04) | `#2A7DA7` at 50% opacity | `#8F9BAE` at 50% opacity |
| Android | `#2A7DA7` (Teal/04) | `#8F9BAE` (Grey/04) | `#A6C9DA` | `#E8ECF2` |

#### Color — Knob/Thumb (by Client × State)

| Client | On | Off | On (Disabled) | Off (Disabled) |
|--------|----|----|---------------|----------------|
| Web | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| iOS26 | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| iOS18 | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| Android | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |

#### Additional color details

| Element | Token | Value | Notes |
|---------|-------|-------|-------|
| Web knob stroke | FG/Neutral Main | `#1C2026` | 0.5px stroke weight |
| iOS26 AX Label | — | `#FFFFFF` | Accessibility indicator line inside track |
| Android elevation | Surface overlay (style `67525:63`) | `#212121` at 8% opacity | Shadow behind thumb |

#### Elevation

| Client | Style |
|--------|-------|
| Web | Shadow Level 2 (style `30667:17369`) |
| Android | Surface overlay fill (`#212121` at 8% opacity) |

#### Sizing

| Client | Overall size | Track corner radius | Knob/Thumb size |
|--------|-------------|--------------------| ---------------|
| Web | 52×33 | 32px | 28×28 |
| iOS26 | 64×28 | 100px | 39×24 |
| iOS18 | 51×31 | 100px | 27×27 |
| Android | 34×20 | 7px (track only, 14px tall) | 20×20 |

#### Disabled treatment

| Client | Method |
|--------|--------|
| Web | Component opacity: 50% |
| iOS26 | Component opacity: 50% |
| iOS18 | Component opacity: 50% |
| Android | Desaturated track colors (On: `#A6C9DA`, Off: `#E8ECF2`) |

---

## Do not use with

