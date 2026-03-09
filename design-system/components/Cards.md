# baseCard

**Page:** Cards

**Type:** Component

**Figma node ID:** 60197:18062

## Variants

### Breakpoint
- Mobile
- Web

### Type
- Border
- Filled + Border
- Filled
- Elevated

### States
- Default
- Hover
- Pressed
- Selected
- Focused

**Total variants:** 40 (Breakpoint x Type x States = 2 x 4 x 5)

| Variant | Node ID |
|---------|---------|
| Breakpoint=Mobile, Type=Border, States=Default | 60197:18069 |
| Breakpoint=Web, Type=Border, States=Default | 60410:16230 |
| Breakpoint=Mobile, Type=Border, States=Hover | 60197:18106 |
| Breakpoint=Web, Type=Border, States=Hover | 60410:16232 |
| Breakpoint=Mobile, Type=Border, States=Pressed | 60197:18134 |
| Breakpoint=Web, Type=Border, States=Pressed | 60410:16235 |
| Breakpoint=Mobile, Type=Border, States=Selected | 60353:23113 |
| Breakpoint=Web, Type=Border, States=Selected | 60410:16238 |
| Breakpoint=Mobile, Type=Border, States=Focused | 60197:18176 |
| Breakpoint=Web, Type=Border, States=Focused | 60410:16240 |
| Breakpoint=Mobile, Type=Filled + Border, States=Default | 60197:18072 |
| Breakpoint=Web, Type=Filled + Border, States=Default | 60410:16242 |
| Breakpoint=Mobile, Type=Filled + Border, States=Hover | 60197:18109 |
| Breakpoint=Web, Type=Filled + Border, States=Hover | 60410:16245 |
| Breakpoint=Mobile, Type=Filled + Border, States=Pressed | 60197:18137 |
| Breakpoint=Web, Type=Filled + Border, States=Pressed | 60410:16248 |
| Breakpoint=Mobile, Type=Filled + Border, States=Selected | 60353:23116 |
| Breakpoint=Web, Type=Filled + Border, States=Selected | 60410:16251 |
| Breakpoint=Mobile, Type=Filled + Border, States=Focused | 60197:18179 |
| Breakpoint=Web, Type=Filled + Border, States=Focused | 60410:16253 |
| Breakpoint=Mobile, Type=Filled, States=Default | 60197:18078 |
| Breakpoint=Web, Type=Filled, States=Default | 60410:16255 |
| Breakpoint=Mobile, Type=Filled, States=Hover | 60197:18112 |
| Breakpoint=Web, Type=Filled, States=Hover | 60410:16258 |
| Breakpoint=Mobile, Type=Filled, States=Pressed | 60197:18140 |
| Breakpoint=Web, Type=Filled, States=Pressed | 60410:16261 |
| Breakpoint=Mobile, Type=Filled, States=Selected | 60353:23119 |
| Breakpoint=Web, Type=Filled, States=Selected | 60410:16264 |
| Breakpoint=Mobile, Type=Filled, States=Focused | 60197:18182 |
| Breakpoint=Web, Type=Filled, States=Focused | 60410:16266 |
| Breakpoint=Mobile, Type=Elevated, States=Default | 60197:18082 |
| Breakpoint=Web, Type=Elevated, States=Default | 60410:16268 |
| Breakpoint=Mobile, Type=Elevated, States=Hover | 60197:18114 |
| Breakpoint=Web, Type=Elevated, States=Hover | 60410:16271 |
| Breakpoint=Mobile, Type=Elevated, States=Pressed | 60197:18142 |
| Breakpoint=Web, Type=Elevated, States=Pressed | 60410:16274 |
| Breakpoint=Mobile, Type=Elevated, States=Selected | 60353:23122 |
| Breakpoint=Web, Type=Elevated, States=Selected | 60410:16277 |
| Breakpoint=Mobile, Type=Elevated, States=Focused | 60197:18185 |
| Breakpoint=Web, Type=Elevated, States=Focused | 60410:16279 |

## Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Breakpoint | VARIANT | Mobile, Web | Mobile |

> **Naming note:** `Breakpoint` deviates from the system convention of `Client` (Web, iOS, Android). `Mobile` conflates iOS and Android into a single variant.
| Type | VARIANT | Border, Filled + Border, Filled, Elevated | Border |
| States | VARIANT | Default, Hover, Pressed, Selected, Focused | Default |
| Content#60503:0 | INSTANCE_SWAP | Any component (default: 38833:15822) | 38833:15822 |

## Usage notes

No description provided in Figma component description field.

Documentation from the page specification frames:

**Purpose:** Used to group contextual information. A base card contains card content which uses a slot component.

**Breakpoints:**
- Cards support two breakpoints: one for mobile and one for web.
- The web variant uses larger padding to accommodate the greater space available on desktop screens, while mobile remains more compact.
- Padding can be modified based on project needs; however, the standard values are recommended unless there is a strong justification to deviate.
- Mobile: 320px - 574px screen size
- Desktop: 575px - Unlimited screen size

**Types (default styling):**
- **Border** — Border: Border/Main; Background: None; Elevation: None
- **Border (gradient variant)** — Border gradient: Gradient/Linear Feature Tertiary; Background: None; Elevation: None. *Use sparingly. Currently used for AI card.*
- **Filled + Border** — Border: Border/Main; Background: BG/Neutral Primary; Elevation: None
- **Filled** — Border: None; Background: BG/Neutral Primary; Elevation: None
- **Elevated** — Border: None; Background: BG/Elevation 1; Elevation: Shadow Level 1

**States:**
- **Default** — No interactive state
- **Hover** — Mouse over (web only)
- **Pressed** — Click or tap
- **Selected** — Card is selected, usually when content has a selection element such as radio button or checkbox
- **Focused** — Tab navigation on web or voice over for mobile native

**Interaction model:**
- Card states only apply when the entire card represents a single action (hover/click area extends across the whole card).
- When a card contains multiple interactive elements (e.g., links and CTAs), those individual elements handle their own states — the card itself does not.
- Static cards with no interactive elements should provide no interactive feedback.

**Accessibility:**
- For keyboard navigation, the user should see the focused state and be able to select the card by hitting Enter.

**Anatomy:**
1. baseCard container
2. .slot-component (instance swap for content)

## Dark mode

This component supports dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `BG/Neutral Primary` → `Dark/BG/Neutral Primary`, `Border/Main` → `Dark/Border/Main`). See tokens.md for the full dark token set.

## Tokens used

### Color tokens (by Type)

| Type | Background | Border | Elevation |
|------|-----------|--------|-----------|
| Border | None (transparent) | Border/Main `#D4DBE6` | None |
| Filled + Border | BG/Neutral Primary `#FFFFFF` | Border/Main `#D4DBE6` | None |
| Filled | BG/Neutral Primary `#FFFFFF` | None | None |
| Elevated | BG/Elevation 1 `#FFFFFF` | None | Shadow Level 1 |

### Color tokens (by State — Border type shown)

| State | Border color | Border weight |
|-------|-------------|---------------|
| Default | Border/Main `#D4DBE6` | 1px |
| Hover | Border/Main `#D4DBE6` | 1px |
| Pressed | Border/Main `#D4DBE6` | 1px |
| Selected | Teal/04 `#2A7DA7` | 2px |
| Focused | Teal/04 `#2A7DA7` | 1px |

### Spacing tokens

| Property | Mobile | Web |
|----------|--------|-----|
| Padding (all sides) | 16px | 24px |
| Corner radius | 16px | 16px |
| Border width | 1px (2px for Selected) | 1px (2px for Selected) |

### Elevation tokens

| Token | Value | Used by |
|-------|-------|---------|
| Shadow Level 1 | `drop-shadow(0px 0px 16px rgba(84,96,115,0.2))` | Elevated type (node ref: 30667:17368) |

## Card recipe guidelines

**Figma node ID:** `63573:12570`

Card recipes define how content is arranged and structured inside the base card component. While the base card establishes the foundational container — padding, elevation, shape, and surface — the recipe defines how text, imagery, lists, and actions come together to form a cohesive, scannable message. These guidelines ensure cards remain flexible while still feeling consistent across the product.

### Base recipe

At its core, the content card should contain a title and body copy in a vertical stacking format. These are the basic building blocks that define this recipe. Occasionally, cards may contain imagery which helps support the message on the card. When in doubt, use this recipe as the default. All properties shown are optional — use them as needed.

| Slot | Description |
|------|-------------|
| 1. Imagery | Optional top image (e.g. 16:9 ratio) |
| 2. Card title | Primary heading (Inter 500, 28px/32px or 24px/28px) |
| 3. Tooltip | Optional info tooltip |
| 4. Subheader | Supporting context (Inter 400, 18px/24px) |
| 5. Body copy | Detailed description (Inter 400, 16px/24px) |
| 6. Disclosure links | Legal/disclosure text links (Inter 600, 16px) |
| 7. Primary CTA | Main action button |
| 8. Secondary CTA | Alternative action (text button) |

### Recipe examples

#### Home tile

Used for account summary tiles on the home screen.

| Slot | Description |
|------|-------------|
| 1. Thumbnail icon | Small icon identifying the account type |
| 2. Card title | Account name (e.g. "Invest") |
| 3. Descriptive text | Account description or status |
| 4. Value ($Amount) | Dollar value display (e.g. "$212,987.44") |
| 5. Value (%Performance) | Performance indicator (e.g. "▲ $1,736.47") |
| 6. Image thumbnail | Optional supporting graphic |

#### Value proposition

Used for rewards and value-focused content.

| Slot | Description |
|------|-------------|
| 1. Title | Section label (e.g. "Rewards") |
| 2. Large display text | Prominent value or rate (Inter 300, 28px) |
| 3. Subheader | Contextual label (e.g. "Your total rewards") |
| 4. Imagery (Thumbnail) | Optional small visual |
| 5. List items | Repeating rows of label + value pairs |

#### Product selection

Used for product marketing and onboarding cards.

| Slot | Description |
|------|-------------|
| 1. Imagery (illustration) | Top hero illustration |
| 2. Title | Product name (e.g. "M1 High-Yield Cash") |
| 3. Body copy | Product description and promotional text |
| 4. Primary button | Main CTA (e.g. "Open an account") |
| 5. Tertiary button | Secondary action (e.g. "Learn more") |

#### Text heavy (promotional)

Used for detailed informational or promotional content.

| Slot | Description |
|------|-------------|
| 1. Icon | Category or feature icon |
| 2. Title | Card heading |
| 3. Dropdown icon | Expandable/collapsible indicator |
| 4. Body copy | One or more paragraphs of descriptive text |
| 5. Disclosure link | Legal or terms link |
| 6. Primary button | Main action |

---

## Usage guidelines

### Core Principles

1. **Content should be scannable** — Users should understand the card's purpose within the first 1–2 lines. Text, media, and actions must be arranged to support quick scanning and decision-making.
2. **Recipes adapt, but the hierarchy remains stable** — Titles always lead. Supporting context follows. Actions sit at the end of the narrative. This predictable flow helps users navigate cards without cognitive friction.
3. **Use minimal elements as possible** — Only include elements that directly support the card's intent. Cards should feel purposeful, not crowded.
4. **One alignment rule per card** — Keep all text within a card aligned consistently (left or center) to maintain rhythm and readability.
5. **Content determines navigation behavior** — Cards with CTAs should rely on the CTA — not the entire card — to drive interaction. Conversely, simple cards with a single destination can make the entire surface tappable.

### Margins

Margin behavior differs between mobile and web due to differences in screen constraints, reading patterns, and how users interact with content.

| Platform | Outer margin | Base card breakpoint |
|----------|-------------|---------------------|
| Mobile | 16px | `Breakpoint = Mobile` |
| Web – desktop | 24px | `Breakpoint = Web` |

**Modifiable padding (use sparingly):** In some cases, it is necessary to opt out of the default base card padding due to structural constraints. For example, a base card may use zero padding when the intent is for the hover or interactive state to span the full width of the card surface. In these scenarios, the content recipe defines the internal margins and spacing.

### Text usage

Cards may contain any combination of header, subheader, and body text depending on the complexity of the message:

| Element | Role |
|---------|------|
| Header | Communicates the primary purpose |
| Subheader | Adds context |
| Body text | Provides explanation or instruction |

All text should follow a predictable top-down hierarchy so users can quickly understand what the card is about and what action they should take.

### Imagery

Imagery is optional and should support the card's message, not introduce unrelated concepts.

| Type | Placement | Guidelines |
|------|-----------|------------|
| Large images | Top of card | Follow system ratios such as 16:9. Use cropped photography or large spot illustration. |
| Smaller graphic elements | Inline / horizontal | Spot illustrations, pictograms, or icons to reinforce meaning without overwhelming text. Can be placed horizontally. |
| Smaller photographic element | Inline | Compact visual for quick context. Follow 1:1 or 9:16 aspect ratio for uniformity and predictable cropping. |

### List items

List items help break complex information into scannable steps or grouped concepts. Lists must remain concise — each item should be a single idea. If list content becomes long or multi-layered, move the detail to a dedicated screen.

### Borders

Borders can be used within a card to help separate familiar or repeated content, such as list items or grouped sections. They provide gentle visual structure without adding heavy weight. Borders should never be used to increase emphasis or compensate for poor spacing.

---

## Accessibility

Accessibility is an essential consideration for all card recipes. Because cards often contain mixed elements — text, imagery, list items, actions — they must be structured in a way that supports clear reading order, screen-reader compatibility, and easy interaction for all users.

### Imagery accessibility

Images used within a card must include descriptive text when they convey information that is essential to understanding the card's message or purpose. Add a `label` (alt text) describing the image content and set `role: image`.

### Keyboard & focus behavior

**Entering a card:** When navigating via keyboard (Tab key), focus should land on the card as a whole before entering any specific interactive elements inside the card. This makes the card discoverable, ensures assistive technology announces it, and helps users understand when they are entering a new content region.

**Navigating within the card:** After focusing on the card container, keyboard users should be able to use Up/Down arrow keys to move through the card's micro-content, especially when the card is non-tappable and contains multiple focusable elements.

### Avoiding cognitive overload

Cards should not contain too many competing elements, such as long paragraphs, multiple CTAs, or dense imagery. Reducing unnecessary elements helps users with cognitive, learning, and attention difficulties understand the content more easily.

**Don't:**
- Include long paragraphs with multiple sub-bullets, disclaimers, and two CTAs
- Place large graphics between body copy sections
- Sprinkle additional small icons throughout
- Include too many CTAs (more than 2)

### Alignment

Stick to a single text alignment per card to support predictable reading rhythm.

| Alignment | When to use |
|-----------|------------|
| Left alignment | Default for data-heavy cards, list-based content, and most standard cards |
| Center alignment | Product marketing cards, hero illustrations, promotional content |

**Don't** mix left and center alignment within the same card.

### Responsive design

**Mobile layout:**
- Cards stack vertically and occupy the full width of the screen minus mobile safe margins
- Use the mobile breakpoint spacing (16px horizontal margin)
- Large illustrations scale down proportionally; avoid side-by-side content unless adequate horizontal space is available
- Align CTAs according to the card's overall text alignment (left or center)
- When more than one button is present, stack them vertically for clarity and touch-friendly spacing

**Desktop layout:**
- Cards may be arranged horizontally while maintaining safe margins
- Use vertically stacked layout in narrower card sizes (side panels, card carousels)
- Apply the desktop breakpoint spacing (24px horizontal margin)
- Larger hero images display more cleanly and can occupy wider areas
- Side-by-side content is generally preferred except in constrained layouts
- Multiple buttons may be arranged horizontally on wider cards; use vertical stacking on smaller or narrower cards

---

## Do not use with

