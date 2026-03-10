import { useState } from 'react'

// ---------------------------------------------------------------------------
// Static pill colors (by Kind)
// ---------------------------------------------------------------------------
const STATIC_KINDS = {
  Success:   { bg: '#1F7C3E', fg: '#FFFFFF' },
  Caution:   { bg: '#EDD17B', fg: '#1C2026' },
  Danger:    { bg: '#B3485A', fg: '#FFFFFF' },
  Neutral:   { bg: '#D4DBE6', fg: '#1C2026' },
  Important: { bg: '#152B56', fg: '#FFFFFF' },
  Promotion: { bg: '#D6A55C', fg: '#1C2026' },
  Info:      { bg: '#99ADD5', fg: '#1C2026' },
}

const STATIC_KINDS_DARK = {
  Success:   { bg: '#1F7C3E', fg: '#FFFFFF' },
  Caution:   { bg: '#7A631F', fg: '#ECEFF4' },
  Danger:    { bg: '#B3485A', fg: '#FFFFFF' },
  Neutral:   { bg: '#2F3641', fg: '#ECEFF4' },
  Important: { bg: '#CCD6EA', fg: '#152B56' },
  Promotion: { bg: '#D6A55C', fg: '#1C2026' },
  Info:      { bg: '#3C5A94', fg: '#FFFFFF' },
}

// ---------------------------------------------------------------------------
// StaticPill — non-interactive badge pill
// ---------------------------------------------------------------------------
export function StaticPill({ kind = 'Success', label = 'Pill Label', darkMode = false }) {
  const colors = (darkMode ? STATIC_KINDS_DARK : STATIC_KINDS)[kind] || STATIC_KINDS.Neutral

  return (
    <span style={{
      fontFamily: 'Inter, sans-serif', fontWeight: 400,
      fontSize: 12, lineHeight: '16px',
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 8px', borderRadius: 24, height: 20,
      backgroundColor: colors.bg, color: colors.fg,
    }}>
      {/* rewards14 icon */}
      <svg width="14" height="14" viewBox="0 0 14 14" fill={colors.fg} style={{ flexShrink: 0 }}>
        <path d="M7 1l1.76 3.57L12.5 5.36l-2.75 2.68.65 3.78L7 10.07 3.6 11.82l.65-3.78L1.5 5.36l3.74-.79L7 1z" />
      </svg>
      {label}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Actionable pill colors
// ---------------------------------------------------------------------------
const ACTION_COLORS = {
  Primary: {
    Default:  { bg: '#E8ECF2', text: '#152B56', icon: '#152B56' },
    Hover:    { bg: '#8F9BAE', text: '#152B56', icon: '#FFFFFF' },
    Selected: { bg: '#152B56', text: '#FFFFFF', icon: '#FFFFFF' },
  },
  Secondary: {
    Default:  { bg: '#CCD6EA', text: '#152B56', icon: '#152B56' },
    Hover:    { bg: '#99ADD5', text: '#152B56', icon: '#FFFFFF' },
    Selected: { bg: '#3C5A94', text: '#FFFFFF', icon: '#FFFFFF' },
  },
}

const ACTION_COLORS_DARK = {
  Primary: {
    Default:  { bg: '#272C35', text: '#CCD6EA', icon: '#CCD6EA' },
    Hover:    { bg: '#3A4252', text: '#CCD6EA', icon: '#ECEFF4' },
    Selected: { bg: '#CCD6EA', text: '#152B56', icon: '#152B56' },
  },
  Secondary: {
    Default:  { bg: '#1E242C', text: '#99ADD5', icon: '#99ADD5' },
    Hover:    { bg: '#2F3641', text: '#CCD6EA', icon: '#ECEFF4' },
    Selected: { bg: '#3C5A94', text: '#FFFFFF', icon: '#FFFFFF' },
  },
}

// ---------------------------------------------------------------------------
// ActionablePill — interactive filter/toggle pill (Web)
// ---------------------------------------------------------------------------
export function ActionablePill({
  kind = 'Primary',
  size = 'Large',
  selected = false,
  icon = true,
  label = 'Filter',
  darkMode = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const stateKey = selected ? 'Selected' : hovered ? 'Hover' : 'Default'
  const palette = (darkMode ? ACTION_COLORS_DARK : ACTION_COLORS)[kind] || ACTION_COLORS.Primary
  const c = palette[stateKey]
  const isSmall = size === 'Small'
  const pillHeight = isSmall ? 20 : 28

  const pill = (
    <span
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 400,
        fontSize: 14, lineHeight: '20px',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '4px 8px', borderRadius: 24, height: pillHeight,
        backgroundColor: c.bg, color: c.text,
        cursor: 'pointer', userSelect: 'none',
        transition: 'background-color 100ms ease-out',
      }}
    >
      {icon && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={c.icon} style={{ flexShrink: 0 }}>
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm-1 3v2H7v2h2v2h2v-2h2V9h-2V7H9z" />
        </svg>
      )}
      {label}
    </span>
  )

  if (isSmall) {
    return <div style={{ padding: '2px 0' }}>{pill}</div>
  }
  return pill
}

// ---------------------------------------------------------------------------
// ActionablePillMobile — mobile pill with 40×40 touch target
// ---------------------------------------------------------------------------
export function ActionablePillMobile({
  selected = false,
  icon = true,
  label = 'Filter',
  darkMode = false,
  onClick,
}) {
  const palette = (darkMode ? ACTION_COLORS_DARK : ACTION_COLORS).Primary
  const c = selected ? palette.Selected : palette.Default

  return (
    <div
      onClick={onClick}
      style={{
        minWidth: 40, minHeight: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <span style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 400,
        fontSize: 14, lineHeight: '20px',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '4px 8px', borderRadius: 24, height: 28,
        backgroundColor: c.bg, color: c.text,
        userSelect: 'none',
      }}>
        {icon && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill={c.icon} style={{ flexShrink: 0 }}>
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm-1 3v2H7v2h2v2h2v-2h2V9h-2V7H9z" />
          </svg>
        )}
        {label}
      </span>
    </div>
  )
}
