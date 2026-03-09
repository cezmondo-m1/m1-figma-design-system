# Banners

**Page:** Banners

**Type:** Component

**Figma node ID:** 29297:69554

## Variants

### Kind
- Mobile
- Web

### State
- Informational
- Caution
- Danger
- Success

**Total variants:** 8 (Kind x State = 2 x 4)

| Variant | Node ID |
|---------|---------|
| Kind=Web, State=Caution | 29297:69555 |
| Kind=Web, State=Informational | 29297:69563 |
| Kind=Web, State=Success | 29297:69571 |
| Kind=Web, State=Danger | 29297:69611 |
| Kind=Mobile, State=Danger | 29297:69579 |
| Kind=Mobile, State=Informational | 29297:69587 |
| Kind=Mobile, State=Success | 29297:69595 |
| Kind=Mobile, State=Caution | 29297:69603 |

## Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Kind | VARIANT | Mobile, Web | Web |
| State | VARIANT | Informational, Caution, Danger, Success | Danger |
| Link#6063:0 | BOOLEAN | true, false | true |
| Icon#6067:9 | BOOLEAN | true, false | true |

## Usage notes

No description provided in Figma component description field.

Documentation from the v2 Banners specification section:

**Purpose:** The general purpose of banners is to communicate persistent, contextual, or system-level information that requires user awareness or action. Banners are not used for marketing.

**Duration:** Banners persist until they're addressed by the user or programmatically removed.

**Placement:** System-level banners are placed at the top of the screen. Contextual banners may be placed inline near the relevant module (use sparingly).

**Content guidelines:**
- Banner copy should be as succinct as possible. Try not to exceed 130 characters or 20 words.
- Avoid wrapping copy for desktop banners. Copy may wrap to a maximum of four lines on mobile devices.
- Never truncate banner copy.
- Text link copy should be action-oriented.

**Accessibility:**
- Banners use a combination of icons and colors to show their meaning and level of importance to users.
- The default icon can be overwritten by a more appropriate icon that best communicates clear meaning.
- For actionable banners, the action/text link gets focus first. Use Tab to move to the action.

**Responsive behavior:**
- The Web banner should be responsive so when the screen is 574 px, the text link moves under the banner message (aligns with Page Templates).
- Maximum component width: 1600 px.

## Dark mode

This component supports dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `FG/Neutral Main` → `Dark/FG/Neutral Main`, `BG/Critical Subtle` → `Dark/BG/Critical Subtle`). See tokens.md for the full dark token set.

## Tokens used

### Color tokens (by state)

| State | Background | Border | Icon/Link text | Body text |
|-------|-----------|--------|----------------|-----------|
| Danger | `#F6E9EB` (BG/Critical Subtle) | `#D08E99` (Border/Critical) | `#B3485A` (FG/Critical) | `#1C2026` (FG/Neutral Main) |
| Caution | `#FBF4DF` (BG/Warning Subtle) | `#EDD17B` (Border/Warning) | `#7A631F` (FG/Warning Shade) | `#1C2026` (FG/Neutral Main) |
| Informational | `#E8EDF5` (BG/Info Subtle) | `#99ADD5` (Border/Info) | `#152B56` (FG/Secondary) | `#1C2026` (FG/Neutral Main) |
| Success | `#E9F6EE` (BG/Success Subtle) | `#92D2A8` (Border/Success) | `#1F7C3E` (FG/Success) | `#1C2026` (FG/Neutral Main) |

> Note: Color tokens were originally bound to Figma variables from an external library (variable IDs in the 29701:197XX range). Token names above are mapped to the closest semantic tokens defined in tokens.md based on hex value matching.

### Typography tokens

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Banner message | Inter | 400 (Regular) | 16px | 24px | Inter/PL/400 (29701:11458) |
| Text link | Inter | 600 (Semi-bold) | 16px | 24px | Inter/PL/600 (29701:11459) |

### Spacing tokens

| Property | Value | Notes |
|----------|-------|-------|
| Padding left / right | 16px | Bound to variable (external library) |
| Padding top / bottom | 12px | Bound to variable (external library) |
| Icon to content gap (Web) | 8px | itemSpacing on icon row |
| Message to link gap (Web) | 24px | itemSpacing on text row |
| Content to close gap (Mobile) | 24px | itemSpacing on content frame |
| Message to link gap (Mobile) | 8px | itemSpacing on message content |
| Icon to message gap (Mobile) | 12px | itemSpacing on banner frame |
| Corner radius | 8px | |
| Border width | 1px | |

### Anatomy

**Web:**
1. Border
2. icon24
3. Message
4. Text link

**Mobile:**
1. Border
2. Bg state
3. icon24
4. Message
5. Text link

## Do not use with

