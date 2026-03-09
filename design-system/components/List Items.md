# List Items

**Page:** List Items

**Type:** Component

**Figma node ID:** `21469:42367`

**Status:** Complete (page marked with checkmark in Figma)

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| listItem | COMPONENT_SET | `29301:139246` | 2 |
| .To-Do-List | COMPONENT_SET | `29301:139382` | 3 |
| Basiclistitem/web | COMPONENT_SET | `47324:25308` | 3 |
| Basiclistitem/mobile | COMPONENT_SET | `47602:19912` | 4 |

---

## Dark mode

All list item components support dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `FG/Neutral Main` → `Dark/FG/Neutral Main`, `FG/Neutral Secondary` → `Dark/FG/Neutral Secondary`). See tokens.md for the full dark token set.

---

## listItem

**Figma node ID:** `29301:139246`

### Variants

#### Type
- Large
- Default

#### Mobile/Web
- Mobile
- Web

**Total variants:** 2 (not all combinations — only Large/Mobile and Default/Web exist)

| Variant | Node ID |
|---------|---------|
| Type=Large, Mobile/Web=Mobile | `29301:139247` |
| Type=Default, Mobile/Web=Web | `29301:139257` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Type | VARIANT | Large, Default | Large |
| Mobile/Web | VARIANT | Mobile, Web | Mobile |

> **Naming note:** `Mobile/Web` deviates from the system convention of `Client` (Web, iOS, Android). `Mobile` conflates iOS and Android.
| Has Icon#12915:0 | BOOLEAN | true, false | true |
| Has caret#5313:5 | BOOLEAN | true, false | true |

### Usage notes

No description provided.

Rich list item component with title, label, optional pill badge, description rows (using `Basiclistitem` instances), optional leading icon, and optional trailing caret. **Large/Mobile** variant uses 16px vertical padding with no horizontal padding. **Default/Web** variant uses 32px vertical and 24px horizontal padding. Each variant embeds platform-specific `Basiclistitem` instances for description rows.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Title text | FG/Neutral Main | `#1C2026` |
| Label text | FG/Neutral Main | `#1C2026` |
| Description text | FG/Neutral Secondary | `#546073` |
| Leading icon | FG/Neutral Main | `#1C2026` |
| Trailing caret (caretRight24) | FG/Neutral Main | `#1C2026` |
| Trailing caret (caretRight20) | FG/Neutral Secondary | `#546073` |
| Pill background | Green/05 | `#1F7C3E` |
| Pill text | — | `#FFFFFF` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Title | Inter | 600 (Semibold) | 20px | 28px |
| Label | Inter | 400 (Regular) | 16px | 24px |
| Description | Inter | 400 (Regular) | 14px | 20px |
| Pill label | Inter | 400 (Regular) | 12px | 16px |

#### Spacing

| Property | Mobile (Large) | Web (Default) |
|----------|---------------|---------------|
| Padding top/bottom | 16px | 32px |
| Padding left/right | 0px | 24px |
| Content item spacing | 8px | 8px |
| Icon-to-copy spacing | 16px | 16px |
| Label-to-pill spacing | 8px | 8px |
| Description row item spacing | 12px | 12px |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| Large / Mobile | 582px | 188px |
| Default / Web | 530px | 220px |

---

## .To-Do-List

**Figma node ID:** `29301:139382`

### Variants

#### State
- Completed
- Remaining
- Dot

**Total variants:** 3

| Variant | Node ID |
|---------|---------|
| State=Completed | `29301:139383` |
| State=Remaining | `29301:139385` |
| State=Dot | `29301:139387` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Remaining, Completed, Dot | Completed |

### Usage notes

No description provided.

Atomic list indicator component used as a leading element in list items. **Completed** state shows a green checkmark icon (check24). **Remaining** state shows a numbered indicator (e.g. "1") in a circular frame. **Dot** state shows a bullet dot ("•") in a circular frame. All states are 24×24.

### Tokens used

#### Color (by State)

| State | Element | Token | Value |
|-------|---------|-------|-------|
| Completed | Checkmark icon | Green/05 | `#1F7C3E` |
| Remaining | Number text | — | `#000000` |
| Dot | Bullet text | — | `#000000` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Number / Bullet text | Inter | 400 (Regular) | 16px | 24px |

#### Spacing

| Property | Value |
|----------|-------|
| Corner radius | 24px (circular) |
| Padding left/right | 8px |

#### Sizing

| Property | Value |
|----------|-------|
| All states | 24×24 |

---

## Basiclistitem/web

**Figma node ID:** `47324:25308`

### Variants

#### Web
- Paragraph
- Bulleted
- Numbered

**Total variants:** 3

| Variant | Node ID |
|---------|---------|
| Web=Paragraph | `47324:25305` |
| Web=Bulleted | `47324:25306` |
| Web=Numbered | `47324:25307` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Web | VARIANT | Bulleted, Numbered, Paragraph | Paragraph |
| Right icon#47363:0 | INSTANCE_SWAP | — | `31017:73368` |
| Show caretRight24#47363:5 | BOOLEAN | true, false | false |
| Show caretRight25#47363:10 | BOOLEAN | true, false | true |
| Show caretRight26#47363:15 | BOOLEAN | true, false | true |

### Usage notes

No description provided.

Web-platform description row component used as a child inside `listItem` (Web variant). Shows description text with an optional trailing caret icon. The **Paragraph**, **Bulleted**, and **Numbered** variants are visually identical at the component level — the list style (bullet/number indicator) is expected to be applied by the parent component or by swapping the `.To-Do-List` instance. Supports instance swap for the right icon.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Description text | FG/Neutral Secondary | `#546073` |
| Caret icon | FG/Neutral Main | `#1C2026` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Description text | Inter | 400 (Regular) | 14px | 20px |

#### Spacing

| Property | Value |
|----------|-------|
| Item spacing (text to caret) | 12px |
| Layout mode | HORIZONTAL |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| All variants | 374px | 40px |

---

## Basiclistitem/mobile

**Figma node ID:** `47602:19912`

### Variants

#### Mobile
- Paragraph
- Bulleted
- Numbered
- Icon

**Total variants:** 4

| Variant | Node ID |
|---------|---------|
| Mobile=Paragraph | `47602:19913` |
| Mobile=Bulleted | `47602:19916` |
| Mobile=Numbered | `47602:19919` |
| Mobile=Icon | `47602:19922` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Mobile | VARIANT | Bulleted, Numbered, Paragraph, Icon | Paragraph |
| Right icon#47363:0 | INSTANCE_SWAP | — | `31017:73368` |
| Show caretRight24#47363:5 | BOOLEAN | true, false | true |
| Show caretRight25#47363:10 | BOOLEAN | true, false | true |
| Show caretRight26#47363:15 | BOOLEAN | true, false | true |

### Usage notes

No description provided.

Mobile-platform description row component used as a child inside `listItem` (Mobile variant). Shows description text with an optional trailing caret icon. The **Icon** variant adds a leading 32×32 icon before the description text. The **Paragraph**, **Bulleted**, and **Numbered** variants are visually identical at the component level — the list style is expected to be applied by the parent or by swapping in a `.To-Do-List` instance. Supports instance swap for the right icon.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Description text | FG/Neutral Secondary | `#546073` |
| Caret icon | FG/Neutral Main | `#1C2026` |
| Leading icon (Icon variant) | FG/Neutral Main | `#1C2026` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Description text | Inter | 400 (Regular) | 14px | 20px |

#### Spacing

| Property | Value |
|----------|-------|
| Item spacing (text to caret) | 12px |
| Icon-to-text spacing (Icon variant) | 12px |
| Layout mode | HORIZONTAL |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| Paragraph, Bulleted, Numbered | 374px | 40px |
| Icon | 410px | 40px |
| Leading icon (Icon variant) | 32×32 |

---

## Do not use with

