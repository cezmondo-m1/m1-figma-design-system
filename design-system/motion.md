# Motion & Animation — Recommendations

> No motion tokens are defined in the Figma file. The following are recommended defaults based on common design system patterns, M1's existing component behaviour descriptions, and platform conventions.

---

## General Principles

- **Keep it fast.** Financial apps need to feel responsive. Most transitions should be 150–250ms.
- **Use ease-out for entrances, ease-in for exits.** Content appearing should decelerate into place; content leaving should accelerate away.
- **Respect reduced motion.** All animations should be wrapped in `prefers-reduced-motion` checks. When reduced motion is enabled, transitions should be instant (0ms) or use opacity-only fades.

---

## Recommended Timing Tokens

| Token | Duration | Easing | Use case |
|-------|----------|--------|----------|
| `motion-instant` | 0ms | — | State changes with no animation (toggle, checkbox) |
| `motion-fast` | 100ms | ease-out | Hover states, focus rings, pill selection |
| `motion-default` | 200ms | ease-out | Most transitions: tab switches, sidebar collapse, button state changes |
| `motion-moderate` | 300ms | ease-in-out | Panels sliding in/out, dialogs appearing, floating panel expand/collapse |
| `motion-slow` | 500ms | ease-in-out | Page transitions, large layout shifts |

---

## Per-Component Recommendations

### Toasts

| Property | Value | Notes |
|----------|-------|-------|
| Enter | 300ms ease-out, slide up 16px + fade in | Toast slides up from bottom edge |
| Persist | 5000ms (5s) default | Progress bar animates linearly over this duration |
| Exit | 200ms ease-in, fade out | Opacity to 0 |
| Stack offset | 8px between stacked toasts | If multiple toasts, offset vertically |

### Dialogs

| Property | Value | Notes |
|----------|-------|-------|
| Scrim fade in | 200ms ease-out | Opacity 0 → 80% |
| Dialog enter | 250ms ease-out, scale 0.95 → 1.0 + fade in | Subtle scale-up from center |
| Dialog exit | 150ms ease-in, fade out | Faster exit than enter |
| Mobile sheet | 300ms ease-out, slide up from bottom | Bottom sheet pattern for mobile dialogs |

### Tooltips — Standard

| Property | Value | Notes |
|----------|-------|-------|
| Web appear | 150ms ease-out, fade in | Delay: 200ms after hover starts |
| Web dismiss | 100ms ease-in, fade out | Immediate on hover leave |
| Mobile sheet | 300ms ease-out, slide up | Bottom sheet animation |
| Mobile dismiss | 200ms ease-in, slide down | Swipe or tap outside |

### Tooltips — Feature Highlight

| Property | Value | Notes |
|----------|-------|-------|
| Appear | 300ms ease-out, fade in + slide 8px from tail direction | Automatic trigger, no delay |
| Dismiss | 200ms ease-in, fade out | On close tap or tap outside |

### Floating Panel

| Property | Value | Notes |
|----------|-------|-------|
| Expand | 250ms ease-out | Height transition from collapsed to expanded |
| Collapse | 200ms ease-in | Height transition from expanded to collapsed |
| Web (dropdown) | 200ms ease-out, scale-y from top | Dropdown origin from trigger |
| Mobile (sheet) | 300ms ease-out, slide up | Full-width sheet from bottom |

### Sidebar / Navigation

| Property | Value | Notes |
|----------|-------|-------|
| Mobile slide in | 250ms ease-out | Translate-x from -100% to 0 |
| Mobile slide out | 200ms ease-in | Translate-x from 0 to -100% |
| Overlay fade | 200ms ease-out | Scrim opacity 0 → 40% |
| Web collapse | 200ms ease-in-out | Width transition 264px → 72px |
| Web expand | 250ms ease-in-out | Width transition 72px → 264px |

### Tabs

| Property | Value | Notes |
|----------|-------|-------|
| Active indicator slide | 200ms ease-out | Bottom border slides to new tab position |
| Content crossfade | 150ms | Opacity swap between tab panels |
| Hover BG | 100ms ease-out | Background color transition |

### Banners

| Property | Value | Notes |
|----------|-------|-------|
| Enter | 250ms ease-out, slide down + fade in | Enters from top of viewport |
| Dismiss | 200ms ease-in, slide up + fade out | Exits toward top |
| Height collapse | 200ms ease-in | After fade, container height collapses to 0 |

### Buttons

| Property | Value | Notes |
|----------|-------|-------|
| Hover transition | 100ms ease-out | Background/border color change |
| Active/press | 50ms | Instant feedback, slight scale 0.98 |
| Disabled transition | 150ms ease-out | Fade to disabled colors |
| FAB expand | 200ms ease-out | Width transition compact → expand |
| FAB collapse | 150ms ease-in | Width transition expand → compact |

### Switch

| Property | Value | Notes |
|----------|-------|-------|
| Toggle | 200ms ease-out | Knob slides left↔right, track color transitions |
| iOS spring | 200ms spring(1, 80, 12) | iOS uses spring physics if available |

### Loading States

| Property | Value | Notes |
|----------|-------|-------|
| Spinner rotation | 1000ms linear infinite | Continuous rotation |
| Skeleton shimmer | 1500ms ease-in-out infinite | Gradient sweep left to right, repeating |

### Cards

| Property | Value | Notes |
|----------|-------|-------|
| Hover elevation | 200ms ease-out | Shadow transition on hover |
| Press scale | 100ms, scale 0.98 | Subtle press feedback |
| Selected border | 150ms ease-out | Border color + width transition |

---

## CSS Implementation Pattern

```css
/* Base transition for interactive elements */
.interactive {
  transition-property: background-color, border-color, color, box-shadow, opacity, transform;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
