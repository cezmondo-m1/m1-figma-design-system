# Charts

**Page:** Charts

**Type:** Pattern

**Figma node ID:** 24305:11724

---

## Components on this page

| Component | Type | Node ID | Variants |
|-----------|------|---------|----------|
| .Tabs | COMPONENT_SET | 29301:128340 | 3 |
| .Overflow | COMPONENT_SET | 29301:128348 | 3 |
| .List – Stack | COMPONENT_SET | 29301:128355 | 2 |
| tabularData | COMPONENT_SET | 29301:128843 | 12 |
| .X – Section | COMPONENT | 29301:128876 | — |
| .Timeline Section | COMPONENT | 29301:128879 | — |
| dataSet | COMPONENT_SET | 29989:42525 | 8 |
| .gaugeChart | COMPONENT | 30236:96039 | — |
| .marginHealthGaugeChart | COMPONENT_SET | 30146:95164 | 5 |
| lineChart | COMPONENT_SET | 34649:30833 | 12 |

---

## Dark mode

All chart components support dark mode. Light mode tokens map to their `Dark/` equivalents in tokens.md (e.g., `Chart/Datapoint` → `Dark/Chart/Datapoint`, `FG/Neutral Main` → `Dark/FG/Neutral Main`). See tokens.md for the full dark token set.

---

## .Tabs

**Figma node ID:** 29301:128340

### Variants

#### State
- Active
- Default
- Hover

| Variant | Node ID |
|---------|---------|
| State=Active | 29301:128341 |
| State=Default | 29301:128343 |
| State=Hover | 29301:128345 |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Active, Default, Hover | Active |

### Usage notes

No description provided.

### Tokens used

#### Color (by state)

| State | Text fill | Border/Stroke | Background |
|-------|-----------|---------------|------------|
| Active | FG/Primary `#2A7DA7` | Teal/04 `#2A7DA7` | — |
| Default | FG/Neutral Secondary `#546073` | — | — |
| Hover | FG/Neutral Secondary `#546073` | — | Grey/02 `#E8ECF2` |

#### Typography

| State | Font | Weight | Size |
|-------|------|--------|------|
| Active | Inter | 600 (Semibold) | 12px |
| Default | Inter | 400 (Regular) | 12px |
| Hover | Inter | 400 (Regular) | 12px |

#### Spacing

| Property | Value |
|----------|-------|
| Padding | 4px (all sides) |
| Item spacing | 10px |

---

## .Overflow

**Figma node ID:** 29301:128348

### Variants

#### State
- Default
- Active
- Hover

| Variant | Node ID |
|---------|---------|
| State=Default | 29301:128349 |
| State=Hover | 29301:128351 |
| State=Active | 29301:128353 |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Active, Hover | Default |

### Usage notes

No description provided.

### Tokens used

#### Color (by state)

| State | Icon fill | Background |
|-------|-----------|------------|
| Default | FG/Neutral Secondary `#546073` | — |
| Hover | FG/Neutral Secondary `#546073` | Grey/02 `#E8ECF2` |
| Active | FG/Primary `#2A7DA7` | Teal/01 `#E5EFF4` |

---

## .List – Stack

**Figma node ID:** 29301:128355

### Variants

#### State
- Default
- Hover

| Variant | Node ID |
|---------|---------|
| State=Default | 29301:128356 |
| State=Hover | 29301:128360 |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | Default, Hover | Default |

### Usage notes

No description provided.

### Tokens used

#### Color (by state)

| State | Text fill | Background |
|-------|-----------|------------|
| Default | FG/Neutral Main `#1C2026` | — |
| Hover | FG/Neutral Main `#1C2026` | Grey/02 `#E8ECF2` |

#### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Label | Inter | 400 (Regular) | 14px |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top / bottom | 6px |
| Padding left / right | 12px |
| Item spacing | 10px |

---

## tabularData

**Figma node ID:** 29301:128843

### Variants

#### Type
- Default
- Link
- Pills

#### Layout
- Standard
- Single item

#### Size
- Default
- Large

**Total variants:** 12

| Variant | Node ID |
|---------|---------|
| Type=Link, Layout=Standard, Size=Default | 29301:128844 |
| Type=Link, Layout=Standard, Size=Large | 29960:41721 |
| Type=Pills, Layout=Standard, Size=Default | 29960:42244 |
| Type=Pills, Layout=Standard, Size=Large | 29960:42252 |
| Type=Default, Layout=Standard, Size=Default | 29301:128852 |
| Type=Default, Layout=Standard, Size=Large | 29960:41729 |
| Type=Link, Layout=Single item, Size=Default | 29301:128864 |
| Type=Pills, Layout=Single item, Size=Default | 29960:42285 |
| Type=Default, Layout=Single item, Size=Default | 29301:128872 |
| Type=Default, Layout=Single item, Size=Large | 29960:42133 |
| Type=Link, Layout=Single item, Size=Large | 29960:42163 |
| Type=Pills, Layout=Single item, Size=Large | 29960:42306 |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Type | VARIANT | Default, Link, Pills | Default |
| Layout | VARIANT | Single item, Standard | Standard |
| Size | VARIANT | Default, Large | Default |
| Show Tooltip#29960:0 | BOOLEAN | true, false | true |
| Show Pill#30049:8 | BOOLEAN | true, false | false |
| Show Pills#30049:21 | INSTANCE_SWAP | Any component (default: 29301:154527) | 29301:154527 |

### Usage notes

No description provided.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Label text | FG/Neutral Secondary | `#546073` |
| Value text | FG/Neutral Main | `#1C2026` |
| Link text | FG/Primary | `#2A7DA7` |
| Background | BG/Neutral Primary | `#FFFFFF` |

#### Typography

| Element | Font | Weight | Size | Line height | Style ref |
|---------|------|--------|------|-------------|-----------|
| Label | Inter | 400 (Regular) | 12px | 16px | Inter/PS/400 (29701:11466) |
| Value (Default) | Inter | 400 (Regular) | 14px | 20px | Inter/PM/400 (29701:11462) |
| Value (Large) | Inter | 400 (Regular) | 16px | 24px | Inter/PL/400 (29701:11458) |

#### Spacing

| Property | Value |
|----------|-------|
| Item spacing | 12px |

---

## .X – Section

**Figma node ID:** 29301:128876

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

### Tokens used

#### Color

| Element | Value |
|---------|-------|
| Label text | `#636363` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| X-axis label | Inter | 400 (Regular) | 12px | 16px |

#### Spacing

| Property | Value |
|----------|-------|
| Item spacing | 4px |

---

## .Timeline Section

**Figma node ID:** 29301:128879

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|

No configurable properties.

### Usage notes

No description provided.

### Tokens used

#### Color

| Element | Value |
|---------|-------|
| Label text | `#636363` |
| Divider stroke | `#DDDDDD` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Timeline label | Inter | 400 (Regular) | 8px | 12px |

#### Spacing

| Property | Value |
|----------|-------|
| Padding top | 26px |
| Padding right | 4px |
| Padding bottom | 2px |
| Padding left | 4px |

---

## dataSet

**Figma node ID:** 29989:42525

### Variants

#### Layout
- Columns
- 3 – Columns
- 2 – Columns
- Rows

#### Border
- Left
- Bottom

**Total variants:** 8

| Variant | Node ID |
|---------|---------|
| Layout=Columns, Border=Left | 29982:42392 |
| Layout=3 – Columns, Border=Left | 29989:42524 |
| Layout=2 – Columns, Border=Left | 29989:42637 |
| Layout=Rows, Border=Bottom | 30027:40786 |
| Layout=Rows, Border=Left | 30057:53300 |
| Layout=3 – Columns, Border=Bottom | 30032:47173 |
| Layout=2 – Columns, Border=Bottom | 30032:47175 |
| Layout=Columns, Border=Bottom | 30032:47174 |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Layout | VARIANT | Columns, 3 – Columns, 2 – Columns, Rows | Columns |
| Border | VARIANT | Left, Bottom | Left |
| Show Tooltip#30027:0 | BOOLEAN | true, false | true |

### Usage notes

No description provided.

Page documentation: "Data set is an organism component made of tabularData atomic components."

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Label text | FG/Neutral Secondary | `#546073` |
| Value text | FG/Neutral Main | `#1C2026` |
| Link text | FG/Primary | `#2A7DA7` |
| Background | BG/Neutral Primary | `#FFFFFF` |
| Accent border | Blue/03 | `#99ADD5` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Label | Inter | 400 (Regular) | 12px | 16px |
| Value (Default) | Inter | 400 (Regular) | 14px | 20px |
| Value (Large) | Inter | 500 (Medium) | 18px | 24px |

---

## .gaugeChart

**Figma node ID:** 30236:96039

### Variants

None — standalone component.

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Show info#30236:0 | BOOLEAN | true, false | true |

### Usage notes

No description provided.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Gauge arc segment 1 | Teal/04 | `#2A7DA7` |
| Gauge arc segment 2 | Blue/04 | `#3C5A94` |
| Gauge arc segment 3 | Blue/05 | `#152B56` |
| Track (inactive) | Grey/03 | `#D4DBE6` |
| Track (background) | Grey/02 | `#E8ECF2` |
| Label text | FG/Neutral Secondary | `#546073` |
| Value text | FG/Neutral Main | `#1C2026` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Center value | Inter | 300 (Light) | 42px | 48px |
| Info label | Inter | 400 (Regular) | 14px | 20px |

#### Spacing

| Property | Value |
|----------|-------|
| Item spacing | 14px |

---

## .marginHealthGaugeChart

**Figma node ID:** 30146:95164

### Variants

#### State
- good
- warning
- critical
- empty
- danger

**Total variants:** 5

| Variant | Node ID |
|---------|---------|
| State=good | 30146:95161 |
| State=warning | 30146:95163 |
| State=danger | 30146:95160 |
| State=critical | 30146:95162 |
| State=empty | 30236:96090 |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| State | VARIANT | good, warning, critical, empty, danger | good |

### Usage notes

No description provided.

### Tokens used

#### Color (by state)

| State | Active indicator | Gauge segments |
|-------|-----------------|----------------|
| good | Green/05 `#1F7C3E` | Green/03, Red/04, Red/03, Yellow/03, Grey/03 |
| warning | Yellow/05 `#7A631F` | Green/03, Red/04, Red/03, Yellow/03, Grey/03 |
| danger | — | Green/03, Red/04, Red/03, Yellow/03, Grey/03 |
| critical | Red/05 `#771E2D` | Green/03, Red/04, Red/03, Yellow/03, Grey/03 |
| empty | Grey/04 `#8F9BAE` | Grey/03, Grey/02 |

#### Semantic color mapping

| Gauge zone | Token | Value | Meaning |
|-----------|-------|-------|---------|
| Green segment | Green/03 | `#92D2A8` | Healthy / safe |
| Yellow segment | Yellow/03 | `#EDD17B` | Warning |
| Red (light) | Red/03 | `#D08E99` | Danger |
| Red (dark) | Red/04 | `#B3485A` | Critical |
| Inactive track | Grey/03 | `#D4DBE6` | Unfilled |

---

## lineChart

**Figma node ID:** 34649:30833

### Variants

#### Size
- Large Mobile
- Mobile
- Desktop

#### State
- Default
- Focus
- Menu
- No data

**Total variants:** 12

| Variant | Node ID |
|---------|---------|
| State=Default, Size=Large Mobile | 34649:30834 |
| State=No data, Size=Large Mobile | 36348:15869 |
| State=Focus, Size=Large Mobile | 34649:30891 |
| State=Default, Size=Mobile | 34649:30946 |
| State=No data, Size=Mobile | 36348:15709 |
| State=Focus, Size=Mobile | 34649:31005 |
| State=Menu, Size=Large Mobile | 34649:31064 |
| State=Menu, Size=Mobile | 34649:31119 |
| State=Focus, Size=Desktop | 34875:11584 |
| State=Menu, Size=Desktop | 34876:11337 |
| State=Default, Size=Desktop | 34875:11666 |
| State=No data, Size=Desktop | 36349:15383 |

### Props / Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| Size | VARIANT | Large Mobile, Mobile, Desktop | Mobile |
| State | VARIANT | Default, Focus, Menu, No data | Default |

### Usage notes

No description provided.

### Tokens used

#### Color

| Element | Token | Value |
|---------|-------|-------|
| Chart area fill | Chart/Chart Area | Gradient (Blue/03 to transparent) |
| Datapoint line | Chart/Datapoint | Blue/04 `#3C5A94` |

#### Typography

| Element | Font | Weight | Size | Line height |
|---------|------|--------|------|-------------|
| Chart title / value | Inter | 600 (Semibold) | 24px | 28px |
| Axis labels | Inter | 400 (Regular) | 12px | 16px |
| Supporting text | Inter | 400 (Regular) | 14px | 20px |
| Tooltip label | Inter | 600 (Semibold) | 12px | 16px |
| Timeline tick | Inter | 400 (Regular) | 8px | 12px |

#### Spacing

| Property | Value |
|----------|-------|
| Item spacing | 16px |

---

## Do not use with

