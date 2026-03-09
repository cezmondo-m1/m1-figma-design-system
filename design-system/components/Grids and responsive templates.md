# Grids and responsive templates

**Page:** Grids and responsive templates

**Type:** Reference (no components — layout templates and grid documentation only)

**Figma node ID:** `21630:2507`

---

## Overview

This page documents the responsive grid system and layout templates used across the M1 product. It defines breakpoints, column grids, container constraints, and reusable page layout patterns. No COMPONENT or COMPONENT_SET nodes are defined on this page — all content is documentation frames and layout examples.

---

## Breakpoints

| Breakpoint | Width range | Grid columns | Gutters | Padding (margin) | Navigation state |
|-----------|-------------|-------------|---------|-------------------|------------------|
| XS | 320–574px | 12 | 16px | 16px | Hamburger menu |
| S | 575–699px | 12 | 24px | 24px | Hamburger menu |
| M | 700–927px | 12 | 16–24px | 24px | Collapsed by default |
| L | 928–1287px | 12 | 24px | 48px | Collapsed by default |
| XL | 1288–1619px | 12 | 24px | 64px | Open or collapsed |
| XXL | 1620–2020px | 12 | 24px | 64px | Open or collapsed |

---

## Web Container Constraints

| Constraint | Max content width | Content width | Grid columns | Padding | Gutters |
|-----------|------------------|---------------|-------------|---------|---------|
| Extra Large | 1760px | 100% | 12 | 64px | 24px |
| Large | 1200px | 100% | 12 | 64px | 24px |
| Medium | 900px | 100% | 12 | 48px | 24px |
| Small (1) | — | 100% | 12 | 24px | 24px |
| Small (2) | — | 100% | 12 | 24px | 24px |
| X-Small | — | 100% | 12 | 16px | 24px |

The majority of pages in the M1 product use the Extra Large constraint (1760px max content width). Responsive behavior can be determined by viewport or constrained by container. All product screens with side navigation are container-constrained.

---

## Base Grid States

Base grid states include options for navigation and M1 Intelligence panel being open or closed.

For breakpoints 700px and wider, 4 states are available:
- Nav Open, Panel
- Nav Open (Default View)
- Collapsed, Panel
- Collapsed (Default View)

For breakpoints below 700px (575–699, 320–574), navigation becomes a hamburger menu and M1 Intelligence is full page.

### Grid specs by breakpoint and nav state

| Breakpoint | Nav State | Frame width | Content columns | Gutter | Content margin | Nav width | Panel width |
|-----------|-----------|-------------|----------------|--------|---------------|-----------|-------------|
| XXL (1620–2020) | Nav Open, Panel | 2020px | 12 | 24px | 82px | 264px | 360px |
| XXL (1620–2020) | Collapsed, Panel | 2020px | 12 | 24px | 98px | 72px | 360px |
| XL (1288–1619) | Nav Open, Panel | 1288px | 12 | 24px | 27px | 264px | 360px |
| XL (1288–1619) | Collapsed, Panel | 1288px | 12 | 24px | 43px | 72px | 360px |
| L (928–1287) | Nav Open, Panel | 928px | 12 | 24px | 29px | 264px | 360px |
| L (928–1287) | Collapsed, Panel | 928px | 12 | 24px | 45px | 72px | 360px |
| M (700–927) | Nav Open, Panel | 700px | 12 | 16px | 18px | 264px | 360px |
| M (700–927) | Collapsed, Panel | 700px | 12 | 24px | 26px | 72px | 360px |
| S (575–699) | — | 575px | 12 | 24px | 22px | — | — |
| XS (320–574) | — | 320px | 12 | 16px | 9px | — | — |

**Notes:**
- At breakpoints below 700px, side navigation is collapsed by default; M1 Intelligence panel overlays content.
- Collapsed IA (Information Architecture) width: 72px.
- Open IA width: 264px.

---

## Container Grid Templates

Layout patterns available for arranging content within a container grid. Each pattern is documented across all 6 breakpoints.

### Template patterns

| Pattern | Description | Breakpoints documented |
|---------|-------------|----------------------|
| Full width | Single full-width content area | 6 |
| Linear rows | Vertically stacked content blocks (4–6 rows) | 5 |
| Cascade | Stacked content blocks with varied sizing | 1 |
| Fixed left column | Left sidebar with content area to the right | 5 |
| 1-2 split | Narrow left column, wide right column | 6 |
| 2-1 split | Wide left column, narrow right column | 6 |
| 2 column | Equal two-column layout | 6 |

### Example page mappings

| Template pattern | Example pages |
|-----------------|---------------|
| Full width | — |
| Linear rows | Transfers, Portfolio activity |
| Fixed left column | Invest, Earn |
| 1-2 split | Home |
| 2-1 split | Concentration analysis, Personal loans onboarding |
| 2 column | Portfolio editor |
| Cascade | News snapshot |

---

## Layout Templates

Higher-level page layout compositions organized into three sub-sections:

### Base layout
Demonstrates full page layouts at each breakpoint with navigation and panel combinations. Includes annotated specs for nav width (72px collapsed, 264px open) and panel width (360px).

### Container grid
Shows how content grid templates map to the available content area after navigation and panel are accounted for.

### Small constrained
Layout templates for the smaller breakpoints (928–1619px and below) using constrained content widths.

---

## Legacy Grid Templates (top-level frames)

Older grid reference frames at the page root level, using an 8-column grid system:

| Template | Width | Columns | Gutter | Margin |
|----------|-------|---------|--------|--------|
| 1 column full | 928px | 8 | 24px | 89px |
| 1 column constrained | 928px | 6 | 16px | 125px |
| 2 column | 928px | 8 | 24px | 89px |
| 2 column-no rail | 497px | 8 | 24px | 35px |
| 2 1 split | 928px | 8 | 24px | 89px |
| 2 2 split | 928px | 8 | 24px | 89px |
| 2 column 4x8 | 928px | 8 | 24px | 89px |
| 2 column 3x9 | 928px | 8 | 24px | 89px |
| 2 column 4x8 AND 3x9 | 928px | 8 | 24px | 89px |

**Note:** These top-level frames appear to be an older grid system (8 columns) compared to the Container Grid Templates section which uses 12 columns. The 12-column system in the Container Grid Templates section should be considered the current standard.

---

## Naming inconsistencies

- "Constrianed" typo in frame `71466:3849` — should be "Constrained"
- Duplicate frame names: two "2 column 4x8 AND 3x9" frames (`24196:31624`, `24196:31631`)
- Inconsistent spacing in divider labels: "928- 1287" vs "928 - 1287"

---

## Do not use with

