# Img Assets

**Page:** Img Assets

**Type:** Component

**Figma node ID:** `29301:138346`

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| .imageFixedAspectRatio | COMPONENT_SET | `29301:138776` | 3 |
| imagePlaceholder | COMPONENT_SET | `29301:138952` | 2 |
| imagePlaceholder/Type3 | COMPONENT | `67924:17735` | — |

---

## Dark mode

Image components support dark mode where applicable. Design-time label overlays use placeholder colors that are not rendered at runtime. See tokens.md for the full dark token set.

---

## .imageFixedAspectRatio

**Figma node ID:** `29301:138776`

### Variants

#### Aspect ratio
- 1:1
- 4:3
- 16:9

**Total variants:** 3

| Variant | Node ID |
|---------|---------|
| Aspect ratio=1:1 | `29301:138783` |
| Aspect ratio=4:3 | `29301:138780` |
| Aspect ratio=16:9 | `29301:138777` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Aspect ratio | VARIANT | 1:1, 4:3, 16:9 | 1:1 |

### Usage notes

No description provided.

Image container that enforces a fixed aspect ratio using a rotated auto-layout trick ("Aspect ratio keeper" frames). The component uses an IMAGE fill (scaleMode=FILL) that clips content to maintain the chosen ratio. Used as a child instance inside `imagePlaceholder` and `imagePlaceholder/Type3`.

### Tokens used

#### Color

No solid color tokens — the component fill is an IMAGE type (placeholder image).

The overlay label text (aspect ratio indicator, e.g. "16:9") uses:

| Element | Token | Value |
|---------|-------|-------|
| Label text fill | — (bound variable) | `#D08E99` |

**Note:** The label text is a design-time indicator showing the aspect ratio — it is not part of the runtime component output.

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Aspect ratio label | Inter | 400 (Regular) | 52px | ~63px |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| 16:9 | 240px | 135px |
| 4:3 | 240px | 180px |
| 1:1 | 240px | 240px |

---

## imagePlaceholder

**Figma node ID:** `29301:138952`

### Variants

#### Type
- Default
- Mobile

**Total variants:** 2

| Variant | Node ID |
|---------|---------|
| Type=Default | `29301:138953` |
| Type=Mobile | `29301:138955` |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Type | VARIANT | Default, Mobile | Default |

### Usage notes

No description provided.

Wrapper component that contains a `.imageFixedAspectRatio` instance. **Default** variant uses a 1:1 aspect ratio image with 24px padding on all sides (288×288 total). **Mobile** variant uses a 16:9 aspect ratio image at full width with no padding (343×193 total, matching mobile viewport width).

### Tokens used

#### Color

No color tokens — the component has no fill or stroke. The contained `.imageFixedAspectRatio` instance provides the image fill.

#### Spacing

| Property | Default | Mobile |
|----------|---------|--------|
| Padding (all sides) | 24px | 0px |
| Layout mode | HORIZONTAL | HORIZONTAL |

#### Sizing

| Variant | Width | Height |
|---------|-------|--------|
| Default | 288px | 288px |
| Mobile | 343px | 193px |

#### Child instances

| Variant | Child component | Aspect ratio |
|---------|----------------|--------------|
| Default | .imageFixedAspectRatio | 1:1 |
| Mobile | .imageFixedAspectRatio | 16:9 |

---

## imagePlaceholder/Type3

**Figma node ID:** `67924:17735`

### Variants

None — standalone component (not a COMPONENT_SET).

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

Standalone component that appears to be a third type variant of `imagePlaceholder`, but lives outside the `imagePlaceholder` COMPONENT_SET as an independent COMPONENT. It is visually identical to `imagePlaceholder` Type=Default — a 288×288 wrapper with 24px padding containing a `.imageFixedAspectRatio` instance at 1:1 aspect ratio.

### Tokens used

#### Color

No color tokens — the component has no fill or stroke.

#### Spacing

| Property | Value |
|----------|-------|
| Padding (all sides) | 24px |
| Layout mode | HORIZONTAL |

#### Sizing

| Property | Value |
|----------|-------|
| Width | 288px |
| Height | 288px |

#### Child instances

| Child component | Aspect ratio |
|----------------|--------------|
| .imageFixedAspectRatio | 1:1 |

---

## Do not use with

