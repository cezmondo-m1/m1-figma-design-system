# Navigation

**Type:** Component (multi-page compilation)

**Source pages:**
- Mobile header (`4659:122`)
- Mobile tab navigation (`64193:18247`)
- Web footer (`64193:18246`)
- Web nav (`64193:18248`)

**Status:** Complete (all pages marked with checkmark in Figma)

---

## Components on these pages

| Component | Page | Type | Node ID | Variants |
|-----------|------|------|---------|----------|
| status Bar | Mobile header | COMPONENT_SET | `29301:140396` | 4 |
| mobile-nav | Mobile header | COMPONENT_SET | `29301:140460` | 6 |
| Mobile-header | Mobile header | COMPONENT_SET | `29301:140497` | 12 |
| _mobile-rail-list | Mobile header | COMPONENT_SET | `29301:140714` | 4 |
| Mobile-rail | Mobile header | COMPONENT_SET | `29301:140863` | 8 |
| .sub-nav-links | Mobile header | COMPONENT_SET | `29301:141531` | 2 |
| Tab bar | Mobile tab navigation | COMPONENT_SET | `29301:140571` | 20 |
| Mobile tab navigation | Mobile tab navigation | COMPONENT_SET | `66171:24029` | 4 |
| Web footer | Web footer | COMPONENT_SET | `66347:4895` | 6 |
| web-menu-labels | Web nav | COMPONENT_SET | `29301:140736` | 1 |
| AppNavigationItem | Web nav | COMPONENT_SET | `29301:141075` | 4 |
| Web-rail-nav | Web nav | COMPONENT_SET | `29301:141359` | 12 |
| Top Header | Web nav | COMPONENT_SET | `67500:19238` | 2 |
| SubNavigationItem | Web nav | COMPONENT_SET | `67502:17837` | 8 |
| nav-section | Web nav | COMPONENT_SET | `67520:12794` | 16 |

**Total: 15 component sets, 107 variants**

---

## status Bar

**Figma node ID:** `29301:140396`

### Variants

#### OS
- Android
- iOS

#### Theme
- Light
- Dark

**Total variants:** 4 (OS 2 × Theme 2)

| Variant | Node ID |
|---------|---------|
| OS=Android, Theme=Light | `29301:140397` |
| OS=Android, Theme=Dark | `29301:140412` |
| OS=iOS, Theme=Light | `29301:140427` |
| OS=iOS, Theme=Dark | `29301:140442` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| OS | VARIANT | Android, iOS | Android |
| Theme | VARIANT | Light, Dark | Light |

### Usage notes

No description provided.

Platform status bar showing time, cellular signal, wifi, and battery indicators. iOS uses SF Pro for time display; Android uses Roboto. Light theme uses dark icons on white background; Dark theme uses light icons on dark background.

### Tokens used

#### Color (by Theme)

| Element | Light | Dark |
|---------|-------|------|
| Background | `#FFFFFF` | `#0F1115` |
| Icons / text | `#1C2026` (FG/Neutral Main) | `#ECEFF4` |

#### Sizing

| OS | Width | Height |
|----|-------|--------|
| iOS | 390px | 54px |
| Android | 360px | 24px |

---

## mobile-nav

**Figma node ID:** `29301:140460`

### Variants

#### Device
- Android
- iOS

#### Type
- Default
- Actions
- Onboarding

**Total variants:** 6 (Device 2 × Type 3)

| Variant | Node ID |
|---------|---------|
| Device=Android, Type=Default | `29301:140461` |
| Device=Android, Type=Actions | `29301:140469` |
| Device=Android, Type=Onboarding | `29301:140477` |
| Device=iOS, Type=Default | `29301:140485` |
| Device=iOS, Type=Actions | `29301:140489` |
| Device=iOS, Type=Onboarding | `29301:140493` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Device | VARIANT | Android, iOS | Android |
| Type | VARIANT | Default, Actions, Onboarding | Default |
| Announcements | BOOLEAN | true, false | true |
| Right icons | BOOLEAN | true, false | true |

### Usage notes

No description provided.

Navigation bar with hamburger menu icon, title text, and right-side action icons. **Actions** type replaces menu with close icon and adds action text link. **Onboarding** type is simplified with just a close icon.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Text / icons | FG/Neutral Main | `#1C2026` |
| Action text | FG/Primary / Teal/04 | `#2A7DA7` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Title | Inter | 600 (Semibold) | 20px | 28px | Inter/HXXS/600 |
| Action text | Inter | 600 (Semibold) | 16px | 24px | — |

#### Sizing

| Property | Value |
|----------|-------|
| Height | 56px |
| Icon size | 24×24 |

---

## Mobile-header

**Figma node ID:** `29301:140497`

### Variants

#### Device
- iOS
- Android

#### Theme
- Light
- Dark

#### Type
- Default
- Actions
- Onboarding

**Total variants:** 12 (Device 2 × Theme 2 × Type 3)

| Variant | Node ID |
|---------|---------|
| Device=iOS, Theme=Light, Type=Default | `29301:140498` |
| Device=iOS, Theme=Light, Type=Actions | `29301:140507` |
| Device=iOS, Theme=Light, Type=Onboarding | `29301:140516` |
| Device=iOS, Theme=Dark, Type=Default | `29301:140525` |
| Device=iOS, Theme=Dark, Type=Actions | `29301:140534` |
| Device=iOS, Theme=Dark, Type=Onboarding | `29301:140543` |
| Device=Android, Theme=Light, Type=Default | `29301:140552` |
| Device=Android, Theme=Light, Type=Actions | `29301:140561` |
| Device=Android, Theme=Light, Type=Onboarding | `29301:140570` |
| Device=Android, Theme=Dark, Type=Default | `66213:122184` |
| Device=Android, Theme=Dark, Type=Actions | `66213:122193` |
| Device=Android, Theme=Dark, Type=Onboarding | `66213:122202` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Device | VARIANT | iOS, Android | iOS |
| Theme | VARIANT | Light, Dark | Light |
| Type | VARIANT | Default, Actions, Onboarding | Default |

### Usage notes

No description provided.

Full mobile header composing `status Bar` + `mobile-nav`. **Onboarding** type adds a progress indicator bar at the bottom.

### Tokens used

#### Color (by Theme)

| Element | Light | Dark |
|---------|-------|------|
| Background | `#FFFFFF` | `#0F1115` |
| Text / icons | `#1C2026` (FG/Neutral Main) | `#ECEFF4` |
| Border bottom | `#D4DBE6` (Border/Main) | `#2F3641` |
| Progress bar fill | `#2A7DA7` (Teal/04) | `#2A7DA7` (Teal/04) |
| Progress bar track | `#E8ECF2` | `#E8ECF2` |

#### Spacing

| Property | Value |
|----------|-------|
| Progress bar height | 4px |

#### Sizing

| Device | Width | Height |
|--------|-------|--------|
| iOS | 390px | 110px |
| Android | 360px | 80px |

---

## _mobile-rail-list

**Figma node ID:** `29301:140714`

### Variants

#### State
- Default
- Focused
- Selected
- Link

**Total variants:** 4

| Variant | Node ID |
|---------|---------|
| State=Default | `29301:140715` |
| State=Focused | `29301:140724` |
| State=Selected | `29301:140733` |
| State=Link | `29301:140742` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Focused, Selected, Link | Default |
| IconVis | BOOLEAN | true, false | true |
| Icon | INSTANCE_SWAP | — | (icon instance) |

### Usage notes

No description provided.

Navigation list item with icon + main text + caption text. Used as building block for `Mobile-rail`.

### Tokens used

#### Color (by State)

| State | Background | Left border | Text | Icon |
|-------|-----------|-------------|------|------|
| Default | transparent | none | `#1C2026` (FG/Neutral Main) | `#1C2026` |
| Focused | `#F3F5F8` (BG/Neutral Secondary) | none | `#1C2026` | `#1C2026` |
| Selected | `#E8ECF2` | `#1C2026` 1px | `#1C2026` (w600) | `#1C2026` |
| Link | transparent | none | `#2A7DA7` (FG/Primary) | `#2A7DA7` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Main text (Default/Focused/Link) | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 |
| Main text (Selected) | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 |
| Caption | Inter | 400 (Regular) | 12px | 16px | Inter/PS/400 |

#### Caption color

| State | Value |
|-------|-------|
| All states | `#546073` (FG/Neutral Secondary) |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 12px |
| Padding left/right | 16px |
| Icon-to-text spacing | 12px |
| Corner radius | 8px |

---

## Mobile-rail

**Figma node ID:** `29301:140863`

### Variants

#### Page
- Borrow
- Spend
- Save
- Invest

#### State
- Default
- Full

**Total variants:** 8 (Page 4 × State 2)

| Variant | Node ID |
|---------|---------|
| Page=Invest, State=Default | `29301:140864` |
| Page=Invest, State=Full | `29301:140910` |
| Page=Save, State=Default | `29301:140956` |
| Page=Save, State=Full | `29301:141002` |
| Page=Spend, State=Default | `29301:141048` |
| Page=Spend, State=Full | `29301:141051` |
| Page=Borrow, State=Default | `29301:141054` |
| Page=Borrow, State=Full | `29301:141057` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Page | VARIANT | Borrow, Spend, Save, Invest | Invest |
| State | VARIANT | Default, Full | Default |
| Add acct | BOOLEAN | true, false | true |
| Has CMA | BOOLEAN | true, false | true |

### Usage notes

No description provided.

Mobile navigation drawer/rail panel. Contains M1 logo, navigation list items (`_mobile-rail-list` instances), and optional "Add account" button. **Page** variant highlights the corresponding nav item as Selected. **Full** state expands sub-items.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Background | BG/Neutral Primary | `#FFFFFF` |
| Divider | Border/Main | `#D4DBE6` |
| Logo | Teal/04 | `#2A7DA7` |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 312px |
| Layout | Full-height vertical |

---

## .sub-nav-links

**Figma node ID:** `29301:141531`

### Variants

#### State
- Active
- Default

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| State=Active | `29301:141532` |
| State=Default | `29301:141536` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Active, Default | Active |

### Usage notes

No description provided.

Pill-shaped sub-navigation link used for secondary navigation within a section.

### Tokens used

#### Color (by State)

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | transparent | `#546073` (FG/Neutral Secondary) | `#D4DBE6` (Border/Main) 1px |
| Active | `#E8EDF5` (BG/Info Subtle) | `#1C2026` (FG/Neutral Main) | `#99ADD5` (Border/Info / Blue/03) 1px |

#### Typography

| State | Font | Weight | Size | Line height |
|-------|------|--------|------|-------------|
| Active | Inter | 600 (Semibold) | 14px | 20px |
| Default | Inter | 400 (Regular) | 14px | 20px |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 8px |
| Padding left/right | 16px |
| Corner radius | 24px (pill) |
| Border width | 1px |

#### Sizing

| Property | Value |
|----------|-------|
| Height | 36px |

---

## Tab bar

**Figma node ID:** `29301:140571`

### Variants

#### Page
- Home
- Save
- Invest
- Borrow
- M1 Intelligence

#### Theme
- Light
- Dark

#### Platform
- iOS
- Android

**Total variants:** 20 (Page 5 × Theme 2 × Platform 2)

**Note:** Duplicate variant — `Page=Borrow, Theme=Dark, Platform=iOS` appears twice (node IDs `66169:3245` and `66213:122238`). Canonical node: `66169:3245` (first occurrence).

| Variant | Node ID |
|---------|---------|
| Page=Save, Theme=Light, Platform=iOS | `29301:140572` |
| Page=Save, Theme=Light, Platform=Android | `66213:124894` |
| Page=Save, Theme=Dark, Platform=iOS | `66169:3211` |
| Page=Save, Theme=Dark, Platform=Android | `66213:125142` |
| Page=Home, Theme=Light, Platform=iOS | `29301:140588` |
| Page=Home, Theme=Light, Platform=Android | `66213:124911` |
| Page=Home, Theme=Dark, Platform=iOS | `66169:3228` |
| Page=Home, Theme=Dark, Platform=Android | `66213:125159` |
| Page=Borrow, Theme=Light, Platform=iOS | `29301:140604` |
| Page=Borrow, Theme=Light, Platform=Android | `66213:124928` |
| Page=Borrow, Theme=Dark, Platform=iOS | `66169:3245` |
| Page=Borrow, Theme=Dark, Platform=iOS (duplicate) | `66213:122238` |
| Page=Borrow, Theme=Dark, Platform=Android | `66213:125176` |
| Page=M1 Intelligence, Theme=Light, Platform=iOS | `66213:122213` |
| Page=M1 Intelligence, Theme=Light, Platform=Android | `66213:124945` |
| Page=M1 Intelligence, Theme=Dark, Platform=Android | `66213:125193` |
| Page=Invest, Theme=Light, Platform=iOS | `29301:140636` |
| Page=Invest, Theme=Light, Platform=Android | `66213:124962` |
| Page=Invest, Theme=Dark, Platform=iOS | `66169:3262` |
| Page=Invest, Theme=Dark, Platform=Android | `66213:125210` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Page | VARIANT | Home, Save, Invest, Borrow, M1 Intelligence | Home |
| Theme | VARIANT | Light, Dark | Light |
| Platform | VARIANT | iOS, Android | iOS |

> **Naming note:** `Platform` deviates from the system convention of `Client`.

### Usage notes

No description provided.

Bottom tab bar for mobile navigation. Contains 5 tab items (Home, Save/Earn, Invest, Borrow, M1 Intelligence) arranged horizontally. The **Page** property controls which tab is in the active/selected state. Active tab has a pill-shaped background fill and uses the "elevated" icon variant with gradient fill + semibold text. Inactive tabs use flat monochrome icons + regular text. The M1 Intelligence tab is separated from the other 4 product tabs in its own container.

**Note:** The M1 Intelligence tab label in the Figma source incorrectly reads "Borrow" — this may be a content error in the design file.

### Tokens used

#### Color (by Theme)

| Element | Light | Dark |
|---------|-------|------|
| Product tab container bg | `#000000` at 0.4% opacity (near transparent) | `#1A1E23` |
| Active tab pill bg | `#EDEDED` (Vibrant Fills/Light/Vibrant Tertiary) | `#121212` (Vibrant Fills/Dark/Vibrant Tertiary) |
| Active tab text | `#152B56` (Blue/08) | `#ECEFF4` |
| Active tab icon | Gradient `#2C426D` → `#2A7DA7` (elevated icons) | Gradient `#2C426D` → `#2A7DA7` (elevated icons) |
| Inactive tab text/icon | `#546073` (FG/Neutral Secondary) | `#8F9BAE` (Grey/04) |

#### Elevation

| Theme | Style |
|-------|-------|
| Dark | Dark/Shadow Level 1 (`30757:122471`) |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Tab label (active) | Inter | 600 (Semibold) | 10px | 14px | Inter/S/Nav/Mobile (`29701:11478`) |
| Tab label (inactive) | Inter | 400 (Regular) | 10px | 14px | Inter/S/Nav/Mobile (`29701:11478`) |

#### Spacing

| Property | Value |
|----------|-------|
| Product tab container padding | 4px all |
| Product tab container corner radius | 32px |
| Active pill corner radius | 48px |
| Tab item padding (iOS) | 8px top/bottom, 4px left/right |
| Tab item padding (Android) | 4px all |
| Product-to-Intelligence spacing | 12px |

#### Sizing

| Platform | Overall width | Overall height | Tab item height |
|----------|--------------|----------------|-----------------|
| iOS | 375px | 62px | 54px |
| Android | 375px | 54px | 46px |
| Icon size | 24×24 | — | — |

---

## Mobile tab navigation

**Figma node ID:** `66171:24029`

### Variants

#### Theme
- Light
- Dark

#### Platform
- iOS
- Android

**Total variants:** 4 (Theme 2 × Platform 2)

| Variant | Node ID |
|---------|---------|
| Theme=Light, Platform=iOS | `29301:140664` |
| Theme=Light, Platform=Android | `66213:127017` |
| Theme=Dark, Platform=iOS | `66171:24028` |
| Theme=Dark, Platform=Android | `66213:127019` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Theme | VARIANT | Light, Dark | Light |
| Platform | VARIANT | iOS, Android | iOS |
| Show Scrim | BOOLEAN | true, false | false |

> **Naming note:** `Platform` deviates from the system convention of `Client`.

### Usage notes

No description provided.

Wrapper component that composes a `Tab bar` instance with a scrim gradient overlay above it. The scrim fades from transparent to semi-opaque, providing a visual transition when content scrolls beneath the tab bar.

### Tokens used

#### Color (by Theme)

| Element | Light | Dark |
|---------|-------|------|
| Scrim gradient | `#FFFFFF` 0% → 38% opacity | `#0F1115` 0% → 38% opacity |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 8px |
| Inner tab bar padding left/right | 16px |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 411px |
| Height | 96px |

---

## Web footer

**Figma node ID:** `66347:4895`

### Variants

#### Property 1 (Breakpoint)
- Desktop
- Tablet
- Mobile web

#### Property 2 (Alignment)
- Left
- Centered

**Total variants:** 6 (Breakpoint 3 × Alignment 2)

| Variant | Node ID |
|---------|---------|
| Property 1=Desktop, Property 2=Left | `66347:4896` |
| Property 1=Desktop, Property 2=Centered | `66347:4950` |
| Property 1=Tablet, Property 2=Left | `66347:4912` |
| Property 1=Tablet, Property 2=Centered | `66347:4940` |
| Property 1=Mobile web, Property 2=Left | `66347:4922` |
| Property 1=Mobile web, Property 2=Centered | `66347:4931` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Property 1 | VARIANT | Desktop, Tablet, Mobile web | Desktop |
| Property 2 | VARIANT | Centered, Left | Left |

**Property naming note:** `Property 1` and `Property 2` are generic names — semantically they represent **Breakpoint** and **Alignment**.

### Usage notes

No description provided.

Web footer component with responsive breakpoint variants and two alignment options. Contains a top divider line, disclosure links, a tagline ("M1: The Finance Super App®"), an announcement icon button, and a copyright line ("© Copyright 2025 M1 Holdings Inc.").

**Layout by breakpoint:**
- **Desktop/Left** — Single-row horizontal layout with disclosures on the left, tagline + icon + copyright on the right
- **Desktop/Centered** & **Tablet** — Two-row vertical stack: disclosure links row on top, tagline + copyright row below
- **Mobile web** — Vertical stack: disclosure links stacked, then tagline + copyright stacked below

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Disclosure link text | FG/Primary | `#2A7DA7` (Teal/04) |
| Tagline text | FG/Neutral Secondary | `#546073` |
| Copyright text | FG/Neutral Secondary | `#546073` |
| Announcement icon | FG/Neutral Secondary | `#546073` |
| Top divider line | Border/Main | `#D4DBE6` (1px stroke) |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Disclosure links | Inter | 400 (Regular) | 16px | 24px | Inter/PL/400-Underlined (`52550:12331`) |
| Tagline / Copyright | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 (`29701:11462`) |

#### Spacing (by Breakpoint)

| Property | Desktop/Left | Desktop/Centered & Tablet | Mobile web |
|----------|-------------|--------------------------|------------|
| Outer padding left/right | 80px | 48px | 16px |
| Outer padding bottom | — | 16px | 32px |
| Disclosure link spacing | 48px | 32px | 4px (vertical stack) |
| Link-to-copy row spacing | — (same row) | 12px (vertical) | 24px |
| Copy item spacing | 24px | 16px | 12px |
| Link padding top/bottom | 12px | 12px | 12px |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| Desktop/Left | 1620px | 72px |
| Desktop/Centered | 1334px | 136px |
| Tablet | 927px | 136px |
| Mobile web (both) | 327px | 232px |

#### Icons

| Icon | Size |
|------|------|
| announcement24 (via standardIconButton) | 24×24 |

---

## web-menu-labels

**Figma node ID:** `29301:140736`

### Variants

#### State
- Default

**Total variants:** 1

| Variant | Node ID |
|---------|---------|
| State=Default | `29301:140739` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default | Default |
| Label | TEXT | — | "Label" |

### Usage notes

No description provided.

Section label used within the web side navigation to categorize groups of `SubNavigationItem` entries (e.g., "Cash accounts", "Brokerage accounts", "Actions"). Renders as a small text label with a bottom border divider.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Label text | Grey/04 | `#8F9BAE` |
| Bottom border | Border/Main | `#D4DBE6` (1px) |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Label text | Inter | 500 (Medium) | 10px | 12px |

#### Spacing

| Property | Value |
|----------|-------|
| Padding left | 64px |
| Padding top/bottom | 8px |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 148px |
| Height | 28px |

---

## AppNavigationItem

**Figma node ID:** `29301:141075`

### Variants

#### State
- Default
- Hover
- Focused
- Selected

**Total variants:** 4

| Variant | Node ID |
|---------|---------|
| State=Default | `29301:141076` |
| State=Hover | `29301:141083` |
| State=Focused | `29301:141090` |
| State=Selected | `29301:141097` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Hover, Focused, Selected | Default |
| Right icon | BOOLEAN | true, false | false |
| Caption | BOOLEAN | true, false | false |
| Left Icon | BOOLEAN | true, false | true |
| Main Text | BOOLEAN | true, false | true |

### Usage notes

No description provided.

Primary navigation list item used in `Web-rail-nav`. Contains a left icon slot, main text label, optional caption text, and optional right chevron icon. Used as building block for the web sidebar navigation.

### Tokens used

#### Color (by State)

| State | Background | Left border | Text | Icon |
|-------|-----------|-------------|------|------|
| Default | transparent | none | `#1C2026` (FG/Neutral Main) | `#1C2026` |
| Hover | `#9E9E9E` at 12% opacity | none | `#1C2026` | `#1C2026` |
| Focused | `#9E9E9E` at 25% opacity | none | `#1C2026` | `#1C2026` |
| Selected | `#E8EDF5` (BG/Info Subtle) | `#152B56` (Blue/08) 1px | `#152B56` (FG/Secondary) | Gradient `#2C426D` → `#2A7DA7` (elevated) |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Main text | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 (`29701:11463`) |
| Caption text | Inter | 400 (Regular) | 12px | 16px | Inter/PS/400 (`29701:11466`) |

#### Caption color

| State | Value |
|-------|-------|
| Default / Hover / Focused | `#1C2026` (FG/Neutral Main) |
| Selected | `#152B56` (FG/Secondary) |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 8px |
| Padding left/right | 24px |
| Icon-to-text spacing | 16px |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 216px (standalone); 264px in Web-rail-nav context (fills parent) |
| Height | 40px |
| Left icon | 24×24 |
| End icon | 16×16 |

---

## Web-rail-nav

**Figma node ID:** `29301:141359`

### Variants

#### State
- Expanded
- Collapsed

#### Selection
- Home
- Earn
- Invest
- Borrow
- Research
- Settings

**Total variants:** 12 (State 2 × Selection 6)

| Variant | Node ID |
|---------|---------|
| State=Expanded, Selection=Home | `29301:141381` |
| State=Expanded, Selection=Earn | `67522:71840` |
| State=Expanded, Selection=Invest | `67522:72271` |
| State=Expanded, Selection=Borrow | `67522:73957` |
| State=Expanded, Selection=Research | `67522:75231` |
| State=Expanded, Selection=Settings | `68091:24644` |
| State=Collapsed, Selection=Home | `67522:71636` |
| State=Collapsed, Selection=Earn | `67522:71825` |
| State=Collapsed, Selection=Invest | `67522:72286` |
| State=Collapsed, Selection=Borrow | `67522:73942` |
| State=Collapsed, Selection=Research | `67522:75246` |
| State=Collapsed, Selection=Settings | `68091:24659` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Expanded, Collapsed | Expanded |
| Selection | VARIANT | Home, Earn, Invest, Borrow, Research, Settings | Home |

### Usage notes

No description provided.

Full web sidebar navigation rail. Composes `AppNavigationItem` and `nav-section` instances into a scrollable vertical panel. Contains three zones: a top "hot button" area (M1 Intelligence / feature CTA), a main navigation area with expandable product sections, and a footer area with user/utility links.

**Expanded vs Collapsed:**
- **Expanded:** 264px wide — shows full icon + label + chevron for each nav item
- **Collapsed:** 72px wide — shows only icons (labels hidden via clipping); hot button renders as a circular icon button

**Main nav (5 items):**
1. **Home** — `AppNavigationItem` (no sub-menu). Selected state uses `#E8EDF5` bg + `#152B56` left border + elevated gradient icon (`homeElevated24`).
2. **Earn** — `nav-section` with sub-menu:
   - *cash* group: "My Funds" (`$8,000,00.00 available`)
   - *actions* group: "Add account" (caption: "Individual and joint")
3. **Invest** — `nav-section` with sub-menu:
   - *brokerage* group: "My Portfolio" (`$17,000.00`, caption: "Invest up to $17,000 with margin"), "Long-term investments" (`$50,000.00`)
   - *Retirement* group: "Roth IRA" (`$25,123.98`)
   - *Insights* group: "Concentration analysis" (caption: "By sector, asset, and region")
   - *Actions* group: "Transfer to M1" (caption: "Partial or full account", end icon: `transfer20`), "Add account" (caption: "Brokerage, retirement, and crypto", end icon: `addBubble24`)
4. **Borrow** — `nav-section` with sub-menu:
   - *Margin* group: "Brokerage" (`$1,000.00 margin balance`)
   - *Actions* group: "Add a loan" (caption: "Personal or margin", end icon: `addBubble24`)
5. **Research** — `nav-section` with sub-menu (no grouped labels):
   - "News", "Stocks", "Funds", "Crypto", "Model Portfolios", "My Pies", "Watchlist"

**Footer (4 items):** All are `AppNavigationItem` instances, ordered:
1. "Taylor Maede" (user account / avatar)
2. "Disclosures"
3. "Help"
4. "Log out"

When Selection=Settings, the first footer item ("Taylor Maede") shows Selected state (`#E8ECF2` bg + `#1C2026` left border).

**Selection behavior:**
- Selection=Home → Home item is Selected; all product nav-sections are Collapsed
- Selection=Earn → Home is Default; Earn nav-section is "Opened (Selected)" (`#F3F5F8` bg); other sections Collapsed
- Selection=Invest → Invest nav-section is "Opened (Selected)"; others Collapsed
- Selection=Borrow → Borrow nav-section is "Opened (Selected)"; others Collapsed
- Selection=Research → Research nav-section is "Opened (Selected)"; others Collapsed
- Selection=Settings → All nav-sections Collapsed; first footer item is Selected

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Background | BG/Neutral Primary | `#FFFFFF` |
| Right border | Border/Main | `#D4DBE6` (1px) |
| Footer top border | Border/Main | `#D4DBE6` (1px) |
| Hot button stroke | Gradient/Linear Feature Accent | style `58368:9272` |
| Selected item bg | BG/Info Subtle | `#E8EDF5` |
| Selected item border | Blue/08 | `#152B56` (1px left) |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Nav item labels | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 (`29701:11463`) |
| Hot button label (Expanded) | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 |
| Hot button label (Collapsed) | Inter | 600 (Semibold) | 12px | 16px | Inter/PS/600 (`29701:11467`) |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top | 24px |
| Section spacing | 24px |
| Nav item spacing | 4px |
| Hot button padding (Expanded) | 12px top/bottom, 24px left/right |
| Hot button corner radius (Expanded) | 24px |
| Hot button corner radius (Collapsed) | 40px |
| Footer padding top | 8px |
| Footer padding bottom | 24px |
| Footer item spacing | 4px |

#### Sizing

| State | Width | Height |
|-------|-------|--------|
| Expanded | 264px | 1024px |
| Collapsed | 72px | 1024px |
| Hot button (Expanded) | 248×44 |
| Hot button (Collapsed) | 40×40 |

---

## Top Header

**Figma node ID:** `67500:19238`

### Variants

#### Border
- On
- Off

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| Border=On | `67500:19239` |
| Border=Off | `67500:19247` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Border | VARIANT | Off, On | On |

### Usage notes

No description provided.

Web top header bar. Contains a left section with hamburger menu icon + M1 logo, and a right section with a promotional snippet (gift icon + text). **Border=On** adds a 0.5px bottom border.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Background | BG/Neutral Primary | `#FFFFFF` |
| Menu icon / Logo | FG/Neutral Main | `#1C2026` |
| Promo text | FG/Neutral Secondary | `#546073` |
| Border (On) | Border/Main | `#D4DBE6` (0.5px) |
| Gift icon | Gold gradient | `#D6A55C` → `#6A4A1B` + accents `#EBD2AD`, `#EBBC76` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Promo text | Inter | 600 (Semibold) | 14px | 20px | Inter/PM/600 (`29701:11463`) |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 16px |
| Padding left/right | 24px |
| Menu-to-logo spacing | 16px |
| Icon-to-promo-text spacing | 8px |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 1288px |
| Height | 56px |
| Icon size | 24×24 |

---

## SubNavigationItem

**Figma node ID:** `67502:17837`

### Variants

#### State
- Default
- Selected

#### $Amount
- On
- Off

#### Caption
- On
- Off

**Total variants:** 8 (State 2 × $Amount 2 × Caption 2)

| Variant | Node ID |
|---------|---------|
| State=Default, $Amount=On, Caption=On | `67502:17895` |
| State=Default, $Amount=On, Caption=Off | `67502:17911` |
| State=Default, $Amount=Off, Caption=On | `67502:17927` |
| State=Default, $Amount=Off, Caption=Off | `67520:12376` |
| State=Selected, $Amount=On, Caption=On | `67502:17999` |
| State=Selected, $Amount=On, Caption=Off | `67502:18007` |
| State=Selected, $Amount=Off, Caption=On | `67514:12195` |
| State=Selected, $Amount=Off, Caption=Off | `67520:12369` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Selected | Selected |
| $Amount | VARIANT | On, Off | Off |
| Caption | VARIANT | On, Off | Off |
| End icon | BOOLEAN | true, false | true |
| $Amount (text) | TEXT | — | "$--" |
| Title | TEXT | — | "Title" |
| Subtext | TEXT | — | "Descriptive text" |

### Usage notes

No description provided.

Sub-navigation item used within `nav-section` to represent individual accounts or action links. Shows a title, optional dollar amount, optional caption/description text, and an end icon (typically `addBubble24`).

### Tokens used

#### Color (by State)

| State | Background | Left border | Title text | Amount text | Caption text | End icon |
|-------|-----------|-------------|-----------|-------------|-------------|----------|
| Default | transparent | none | `#1C2026` (FG/Neutral Main) | `#1C2026` | `#546073` (FG/Neutral Secondary) | `#546073` |
| Selected | `#E8ECF2` | `#1C2026` 0.6px | `#1C2026` | `#1C2026` | `#546073` | `#546073` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Title | Inter | 600 (Semibold) | 14px | 20px |
| $Amount | Inter Display | 400 (Regular) | 14px | 20px |
| Caption | Inter Display | 400 (Regular) | 12px | 16px |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top/bottom | 12px |
| Padding left | 64px |
| Padding right | 24px |
| Content-to-icon spacing | 16px |
| Title-to-caption spacing | 4px |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 260px |
| Height | 84px (with all elements on) |
| End icon | 20×20 |

---

## nav-section

**Figma node ID:** `67520:12794`

### Variants

#### Product
- Borrow
- Earn
- Invest
- Research

#### State
- Collapsed
- Opened
- Opened (Full)
- Opened (Selected)

**Total variants:** 16 (Product 4 × State 4)

| Variant | Node ID |
|---------|---------|
| Product=Earn, State=Collapsed | `67514:12571` |
| Product=Earn, State=Opened | `67520:13480` |
| Product=Earn, State=Opened (Full) | `67520:13014` |
| Product=Earn, State=Opened (Selected) | `67502:17239` |
| Product=Invest, State=Collapsed | `67520:12793` |
| Product=Invest, State=Opened | `67520:13489` |
| Product=Invest, State=Opened (Full) | `67520:13023` |
| Product=Invest, State=Opened (Selected) | `67515:17564` |
| Product=Borrow, State=Collapsed | `67519:12688` |
| Product=Borrow, State=Opened | `67520:13506` |
| Product=Borrow, State=Opened (Full) | `67520:13040` |
| Product=Borrow, State=Opened (Selected) | `67516:17817` |
| Product=Research, State=Collapsed | `67520:12647` |
| Product=Research, State=Opened | `67520:13516` |
| Product=Research, State=Opened (Full) | `67520:13050` |
| Product=Research, State=Opened (Selected) | `67520:12646` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Product | VARIANT | Borrow, Earn, Invest, Research | Earn |
| State | VARIANT | Collapsed, Opened, Opened (Full), Opened (Selected) | Collapsed |

### Usage notes

No description provided.

Expandable navigation section that groups an `AppNavigationItem` header with a collapsible sub-menu of `web-menu-labels` + `SubNavigationItem` entries. Each **Product** maps to a different icon and set of sub-items. The **State** controls the expand/collapse behavior and visual treatment.

**State behaviors:**
- **Collapsed** — Only the `AppNavigationItem` header row is visible (40px height)
- **Opened** — Header + sub-menu visible, no selection highlight
- **Opened (Full)** — Same as Opened but with all sub-items fully expanded
- **Opened (Selected)** — Background tinted, header uses elevated icon, first sub-item shows Selected state

### Tokens used

#### Color (by State)

| Element | Collapsed / Opened | Opened (Selected) |
|---------|-------------------|-------------------|
| Section background | transparent | `#F3F5F8` (BG/Neutral Secondary) |
| Header icon | `#1C2026` (flat) | Gradient `#2C426D` → `#2A7DA7` (elevated) |
| Sub-menu dividers | `#D4DBE6` (Border/Main) | `#D4DBE6` |

#### Spacing

| Property | Value |
|----------|-------|
| Header-to-submenu spacing | 8px |
| Sub-menu group spacing | 16px |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 260px |
| Height (Collapsed) | 40px |
| Height (Opened) | varies by Product |

---

## Cross-component patterns

### Selected state consistency

All navigation components use a consistent selected state pattern:

| Component | Background | Border | Icon treatment |
|-----------|-----------|--------|---------------|
| _mobile-rail-list | `#E8ECF2` | `#1C2026` 1px left | — |
| AppNavigationItem | `#E8EDF5` | `#152B56` 1px left | Elevated gradient |
| SubNavigationItem | `#E8ECF2` | `#1C2026` 0.6px left | — |
| Tab bar (active tab) | `#EDEDED` / `#121212` | none (pill shape) | Elevated gradient |
| .sub-nav-links (Active) | `#E8EDF5` | `#99ADD5` 1px all | — |

### Mobile vs Web navigation comparison

| Aspect | Mobile | Web |
|--------|--------|-----|
| Primary nav | Tab bar (bottom, 5 items) | Web-rail-nav (sidebar, expandable sections) |
| Secondary nav | Mobile-rail (drawer, list items) | nav-section (collapsible accordion) |
| Sub-nav | .sub-nav-links (pill chips) | SubNavigationItem (indented list items) |
| Header | Mobile-header (status bar + nav bar) | Top Header (menu + logo + promo) |
| Footer | — (none) | Web footer (responsive, 3 breakpoints) |
| Theme support | Light / Dark | Light only |
| Platform variants | iOS / Android | Desktop / Tablet / Mobile web (footer only) |

### States across component types

| State | _mobile-rail-list | AppNavigationItem | SubNavigationItem | .sub-nav-links | Tab bar |
|-------|-------------------|-------------------|-------------------|----------------|---------|
| Default | Yes | Yes | Yes | Yes | Yes (inactive) |
| Hover | — | Yes | — | — | — |
| Focused | Yes | Yes | — | — | — |
| Selected / Active | Yes | Yes | Yes | Yes | Yes (active) |
| Link | Yes | — | — | — | — |

---

## Naming inconsistencies

- `Property 1` / `Property 2` on Web footer — should be named Breakpoint / Alignment
- `_mobile-rail-list` uses underscore prefix convention; `.sub-nav-links` uses dot prefix
- Mixed casing: `mobile-nav` (lowercase), `Mobile-header` (Title-kebab), `AppNavigationItem` (PascalCase), `web-menu-labels` (lowercase-kebab)
- `Tab bar` exists on both this page (mobile bottom tabs) and the "Tabs and tab bars" page (web content tabs) — different components with the same name

---

## Do not use with

