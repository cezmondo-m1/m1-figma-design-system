import { useState } from 'react'

// ---------------------------------------------------------------------------
// Color tokens per Type — from Cards.md
// ---------------------------------------------------------------------------
const LIGHT_TYPES = {
  Border:           { bg: 'transparent',  border: '#D4DBE6', shadow: null },
  'Filled + Border':{ bg: '#FFFFFF',      border: '#D4DBE6', shadow: null },
  Filled:           { bg: '#FFFFFF',      border: null,      shadow: null },
  Elevated:         { bg: '#FFFFFF',      border: null,      shadow: '0px 0px 16px rgba(84,96,115,0.2)' },
}

const DARK_TYPES = {
  Border:           { bg: 'transparent',  border: '#2F3641', shadow: null },
  'Filled + Border':{ bg: '#0F1115',      border: '#2F3641', shadow: null },
  Filled:           { bg: '#0F1115',      border: null,      shadow: null },
  Elevated:         { bg: '#1A1E23',      border: null,      shadow: '0px 0px 16px rgba(0,0,0,0.64)' },
}

// State border overrides
const LIGHT_SELECTED_BORDER = '#2A7DA7'
const DARK_SELECTED_BORDER = '#6FA7C3'
const LIGHT_FOCUSED_BORDER = '#2A7DA7'
const DARK_FOCUSED_BORDER = '#6FA7C3'

// ---------------------------------------------------------------------------
// Card component — baseCard from Cards.md
// ---------------------------------------------------------------------------
export default function Card({
  type = 'Border',
  state = 'Default',
  breakpoint = 'Web',
  darkMode = false,
  children,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const palette = darkMode ? DARK_TYPES : LIGHT_TYPES
  const tokens = palette[type] || palette.Border

  const isSelected = state === 'Selected'
  const isFocused = state === 'Focused'
  const isPressed = state === 'Pressed'
  const isInteractive = state === 'Hover' || hovered || isPressed

  const padding = breakpoint === 'Mobile' ? 16 : 24

  // Border resolution
  let borderColor = tokens.border
  let borderWidth = 1
  if (isSelected) {
    borderColor = darkMode ? DARK_SELECTED_BORDER : LIGHT_SELECTED_BORDER
    borderWidth = 2
  } else if (isFocused) {
    borderColor = darkMode ? DARK_FOCUSED_BORDER : LIGHT_FOCUSED_BORDER
    borderWidth = 1
  }

  // Pressed scale
  const transform = isPressed ? 'scale(0.98)' : undefined

  const style = {
    fontFamily: 'Inter, sans-serif',
    backgroundColor: tokens.bg,
    border: borderColor ? `${borderWidth}px solid ${borderColor}` : 'none',
    borderRadius: 16,
    padding,
    boxShadow: tokens.shadow || undefined,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'border-color 150ms ease-out, box-shadow 200ms ease-out, transform 100ms ease-out',
    transform,
  }

  // Focus ring
  if (isFocused) {
    style.outline = `2px solid ${darkMode ? DARK_FOCUSED_BORDER : LIGHT_FOCUSED_BORDER}`
    style.outlineOffset = 2
  }

  return (
    <div
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  )
}
