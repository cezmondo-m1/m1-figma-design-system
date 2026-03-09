import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons'

// ---------------------------------------------------------------------------
// Color tokens per Kind (Default state) — from Buttons.md
// ---------------------------------------------------------------------------
const LIGHT_KINDS = {
  Primary:              { bg: '#2A7DA7', border: null,      text: '#FFFFFF', hoverBg: '#1F5B7A', hoverBorder: null,      hoverText: '#FFFFFF', disabledBg: '#E8ECF2', disabledBorder: null,      disabledText: '#8F9BAE' },
  Secondary:            { bg: null,      border: '#2A7DA7', text: '#2A7DA7', hoverBg: '#E5EFF4', hoverBorder: '#1F5B7A', hoverText: '#1F5B7A', disabledBg: null,      disabledBorder: '#8F9BAE', disabledText: '#8F9BAE' },
  'Text button':        { bg: null,      border: null,      text: '#2A7DA7', hoverBg: null,      hoverBorder: null,      hoverText: '#1F5B7A', disabledBg: null,      disabledBorder: '#8F9BAE', disabledText: '#8F9BAE' },
  Promotion:            { bg: '#D6A55C', border: null,      text: '#1C2026', hoverBg: '#6A4A1B', hoverBorder: null,      hoverText: '#FFFFFF', disabledBg: '#E8ECF2', disabledBorder: null,      disabledText: '#8F9BAE' },
  'Promotion secondary':{ bg: null,      border: '#D6A55C', text: '#6A4A1B', hoverBg: '#F7EDDE', hoverBorder: '#6A4A1B', hoverText: '#6A4A1B', disabledBg: null,      disabledBorder: '#8F9BAE', disabledText: '#8F9BAE' },
  'Promotion text':     { bg: null,      border: null,      text: '#D6A55C', hoverBg: null,      hoverBorder: '#2A7DA7', hoverText: '#6A4A1B', disabledBg: null,      disabledBorder: '#8F9BAE', disabledText: '#8F9BAE' },
  Destructive:          { bg: null,      border: '#B3485A', text: '#B3485A', hoverBg: '#F6E9EB', hoverBorder: '#B3485A', hoverText: '#B3485A', disabledBg: null,      disabledBorder: '#8F9BAE', disabledText: '#8F9BAE' },
  'Destructive text':   { bg: null,      border: null,      text: '#B3485A', hoverBg: null,      hoverBorder: '#771E2D', hoverText: '#771E2D', disabledBg: null,      disabledBorder: '#8F9BAE', disabledText: '#8F9BAE' },
  'Inverse primary':    { bg: '#A6C9DA', border: null,      text: '#1C2026', hoverBg: '#2A7DA7', hoverBorder: null,      hoverText: '#FFFFFF', disabledBg: '#546073', disabledBorder: null,      disabledText: '#8F9BAE' },
  'Inverse secondary':  { bg: null,      border: '#A6C9DA', text: '#A6C9DA', hoverBg: '#E5EFF4', hoverBorder: '#2A7DA7', hoverText: '#2A7DA7', disabledBg: null,      disabledBorder: '#8F9BAE', disabledText: '#8F9BAE' },
  'Inverse text button':{ bg: null,      border: null,      text: '#A6C9DA', hoverBg: null,      hoverBorder: '#2A7DA7', hoverText: '#2A7DA7', disabledBg: null,      disabledBorder: '#8F9BAE', disabledText: '#8F9BAE' },
  Suggestion:           { bg: null,      border: '#D4DBE6', text: '#1C2026', hoverBg: '#E8ECF2', hoverBorder: '#D4DBE6', hoverText: '#1C2026', disabledBg: null,      disabledBorder: '#D4DBE6', disabledText: '#8F9BAE' },
  Feature:              { bg: null,      border: 'gradient', text: '#1C2026', hoverBg: '#FFFFFF', hoverBorder: 'gradient', hoverText: '#2A7DA7', disabledBg: null,      disabledBorder: '#D4DBE6', disabledText: '#8F9BAE' },
}

// Dark mode — from dark-mode-mapping.md (Buttons section)
const DARK_KINDS = {
  Primary:              { bg: '#6FA7C3', border: null,      text: '#1C2026', hoverBg: '#A6C9DA', hoverBorder: null,      hoverText: '#1C2026', disabledBg: '#272C35', disabledBorder: null,      disabledText: '#5E6D82' },
  Secondary:            { bg: null,      border: '#6FA7C3', text: '#6FA7C3', hoverBg: '#0D2531', hoverBorder: '#A6C9DA', hoverText: '#A6C9DA', disabledBg: null,      disabledBorder: '#5E6D82', disabledText: '#5E6D82' },
  'Text button':        { bg: null,      border: null,      text: '#6FA7C3', hoverBg: null,      hoverBorder: null,      hoverText: '#A6C9DA', disabledBg: null,      disabledBorder: '#5E6D82', disabledText: '#5E6D82' },
  Promotion:            { bg: '#D6A55C', border: null,      text: '#1C2026', hoverBg: '#6A4A1B', hoverBorder: null,      hoverText: '#ECEFF4', disabledBg: '#272C35', disabledBorder: null,      disabledText: '#5E6D82' },
  'Promotion secondary':{ bg: null,      border: '#D6A55C', text: '#EBD2AD', hoverBg: '#362B1C', hoverBorder: '#6A4A1B', hoverText: '#EBD2AD', disabledBg: null,      disabledBorder: '#5E6D82', disabledText: '#5E6D82' },
  'Promotion text':     { bg: null,      border: null,      text: '#D6A55C', hoverBg: null,      hoverBorder: '#6FA7C3', hoverText: '#EBD2AD', disabledBg: null,      disabledBorder: '#5E6D82', disabledText: '#5E6D82' },
  Destructive:          { bg: null,      border: '#C4717F', text: '#C4717F', hoverBg: '#310C13', hoverBorder: '#C4717F', hoverText: '#C4717F', disabledBg: null,      disabledBorder: '#5E6D82', disabledText: '#5E6D82' },
  'Destructive text':   { bg: null,      border: null,      text: '#C4717F', hoverBg: null,      hoverBorder: '#DAA5AE', hoverText: '#DAA5AE', disabledBg: null,      disabledBorder: '#5E6D82', disabledText: '#5E6D82' },
  'Inverse primary':    { bg: '#A6C9DA', border: null,      text: '#1C2026', hoverBg: '#2A7DA7', hoverBorder: null,      hoverText: '#ECEFF4', disabledBg: '#2F3641', disabledBorder: null,      disabledText: '#5E6D82' },
  'Inverse secondary':  { bg: null,      border: '#A6C9DA', text: '#A6C9DA', hoverBg: '#0D2531', hoverBorder: '#6FA7C3', hoverText: '#6FA7C3', disabledBg: null,      disabledBorder: '#5E6D82', disabledText: '#5E6D82' },
  'Inverse text button':{ bg: null,      border: null,      text: '#A6C9DA', hoverBg: null,      hoverBorder: '#6FA7C3', hoverText: '#6FA7C3', disabledBg: null,      disabledBorder: '#5E6D82', disabledText: '#5E6D82' },
  Suggestion:           { bg: null,      border: '#2F3641', text: '#ECEFF4', hoverBg: '#272C35', hoverBorder: '#2F3641', hoverText: '#ECEFF4', disabledBg: null,      disabledBorder: '#2F3641', disabledText: '#5E6D82' },
  Feature:              { bg: null,      border: 'gradient', text: '#ECEFF4', hoverBg: '#1A1E23', hoverBorder: 'gradient', hoverText: '#6FA7C3', disabledBg: null,      disabledBorder: '#2F3641', disabledText: '#5E6D82' },
}

// ---------------------------------------------------------------------------
// Size tokens — from Buttons.md
// ---------------------------------------------------------------------------
const SIZES = {
  Large:  { py: 16, px: 32, fontSize: 16, lineHeight: '24px', radius: 32, iconSize: 20 },
  Medium: { py: 12, px: 24, fontSize: 14, lineHeight: '20px', radius: 24, iconSize: 16 },
  Small:  { py: 8,  px: 16, fontSize: 12, lineHeight: '16px', radius: 16, iconSize: 14 },
}

// Feature gradient border (Gradient/Linear Feature Tertiary approximation)
const FEATURE_GRADIENT = 'linear-gradient(135deg, #7DC9BC, #2A7DA7, #3C5A94)'

function getFeatureBorderStyle(disabled, disabledBorder) {
  if (disabled) {
    return { border: `2px solid ${disabledBorder}` }
  }
  return {
    border: '2px solid transparent',
    backgroundClip: 'padding-box',
    backgroundImage: `${FEATURE_GRADIENT}`,
    backgroundOrigin: 'border-box',
  }
}

// ---------------------------------------------------------------------------
// Button component
// ---------------------------------------------------------------------------
export default function Button({
  kind = 'Primary',
  state = 'Default',
  size = 'Large',
  children = 'Button label',
  leftIcon = false,
  rightIcon = false,
  darkMode = false,
  onClick,
}) {
  const palette = darkMode ? DARK_KINDS : LIGHT_KINDS
  const tokens = palette[kind] || palette.Primary
  const sizeTokens = SIZES[size] || SIZES.Large
  const isDisabled = state === 'Disabled'
  const isTextKind = kind === 'Text button' || kind === 'Promotion text' || kind === 'Destructive text' || kind === 'Inverse text button'
  const isFeature = kind === 'Feature'

  // Resolve colors for current state
  let bg, border, text
  if (isDisabled) {
    bg = tokens.disabledBg
    border = tokens.disabledBorder
    text = tokens.disabledText
  } else {
    bg = tokens.bg
    border = tokens.border
    text = tokens.text
  }

  // Base inline styles
  const style = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: sizeTokens.fontSize,
    lineHeight: sizeTokens.lineHeight,
    padding: `${sizeTokens.py}px ${sizeTokens.px}px`,
    borderRadius: sizeTokens.radius,
    color: text,
    backgroundColor: bg || 'transparent',
    border: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'background-color 100ms ease-out, border-color 100ms ease-out, color 100ms ease-out',
    opacity: 1,
    textDecoration: isTextKind ? 'none' : undefined,
  }

  // Border handling
  if (isFeature) {
    if (isDisabled) {
      style.border = `2px solid ${tokens.disabledBorder}`
    } else {
      // Use a pseudo-approach via box-shadow for gradient border
      style.border = '2px solid transparent'
      style.backgroundImage = `linear-gradient(${bg || (darkMode ? '#0F1115' : '#FFFFFF')}, ${bg || (darkMode ? '#0F1115' : '#FFFFFF')}), ${FEATURE_GRADIENT}`
      style.backgroundOrigin = 'border-box'
      style.backgroundClip = 'padding-box, border-box'
    }
  } else if (border && border !== 'gradient') {
    style.border = `2px solid ${border}`
  } else if (!isTextKind && !bg) {
    // Transparent background kinds without border — keep consistent sizing
    style.border = '2px solid transparent'
  }

  // Hover styles applied via onMouseEnter/Leave
  const hoverStyle = {
    backgroundColor: tokens.hoverBg || 'transparent',
    color: tokens.hoverText,
  }
  if (isFeature && !isDisabled) {
    hoverStyle.backgroundColor = tokens.hoverBg || 'transparent'
    hoverStyle.color = tokens.hoverText
  } else if (tokens.hoverBorder && tokens.hoverBorder !== 'gradient') {
    hoverStyle.borderColor = tokens.hoverBorder
  }

  function handleMouseEnter(e) {
    if (isDisabled) return
    Object.assign(e.currentTarget.style, {
      backgroundColor: hoverStyle.backgroundColor,
      color: hoverStyle.color,
      ...(hoverStyle.borderColor ? { borderColor: hoverStyle.borderColor } : {}),
    })
    // Update icon color too
    const icons = e.currentTarget.querySelectorAll('.btn-icon')
    icons.forEach((icon) => { icon.style.color = hoverStyle.color })
  }

  function handleMouseLeave(e) {
    if (isDisabled) return
    Object.assign(e.currentTarget.style, {
      backgroundColor: bg || 'transparent',
      color: text,
      ...(border && border !== 'gradient' ? { borderColor: border } : {}),
    })
    const icons = e.currentTarget.querySelectorAll('.btn-icon')
    icons.forEach((icon) => { icon.style.color = text })
  }

  return (
    <button
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {leftIcon && (
        <FontAwesomeIcon
          icon={faPlus}
          className="btn-icon"
          style={{ color: text, fontSize: sizeTokens.iconSize }}
        />
      )}
      {children}
      {rightIcon && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className="btn-icon"
          style={{ color: text, fontSize: sizeTokens.iconSize }}
        />
      )}
    </button>
  )
}

// ---------------------------------------------------------------------------
// FAB (Floating Action Button)
// ---------------------------------------------------------------------------
export function FloatingActionButton({
  label = 'Move money',
  compact = false,
  darkMode = false,
}) {
  const bg = darkMode ? '#6FA7C3' : '#2A7DA7'
  const text = darkMode ? '#1C2026' : '#FFFFFF'
  const hoverBg = darkMode ? '#A6C9DA' : '#1F5B7A'

  return (
    <button
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '24px',
        padding: '12px 16px',
        borderRadius: 40,
        backgroundColor: bg,
        color: text,
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        boxShadow: '0px 0px 24px rgba(83,96,115,0.20)',
        transition: 'background-color 200ms ease-out, width 200ms ease-out',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = hoverBg }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = bg }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill={text}>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
      {!compact && <span>{label}</span>}
    </button>
  )
}

// ---------------------------------------------------------------------------
// Hot Button
// ---------------------------------------------------------------------------
const HOT_LIGHT = {
  Primary:   { bg: '#2A7DA7', icon: '#FFFFFF', label: '#1C2026', hoverBg: '#1F5B7A' },
  Secondary: { bg: '#FFFFFF', icon: '#1C2026', label: '#1C2026', hoverBg: '#F3F5F8' },
  Tertiary:  { bg: '#F3F5F8', icon: '#2A7DA7', label: '#1C2026', hoverBg: '#E8ECF2' },
  Feature:   { bg: '#FFFFFF', icon: '#1C2026', label: '#1C2026', hoverBg: '#FFFFFF' },
}

const HOT_DARK = {
  Primary:   { bg: '#6FA7C3', icon: '#1C2026', label: '#ECEFF4', hoverBg: '#A6C9DA' },
  Secondary: { bg: '#1A1E23', icon: '#ECEFF4', label: '#ECEFF4', hoverBg: '#272C35' },
  Tertiary:  { bg: '#272C35', icon: '#6FA7C3', label: '#ECEFF4', hoverBg: '#2F3641' },
  Feature:   { bg: '#1A1E23', icon: '#ECEFF4', label: '#ECEFF4', hoverBg: '#1A1E23' },
}

export function HotButton({
  kind = 'Primary',
  state = 'Default',
  label = 'Label',
  icon = faPlus,
  darkMode = false,
}) {
  const palette = darkMode ? HOT_DARK : HOT_LIGHT
  const tokens = palette[kind] || palette.Primary
  const isDisabled = state === 'Disabled'
  const disabledBg = darkMode ? '#272C35' : '#E8ECF2'
  const disabledLabel = darkMode ? '#5E6D82' : '#8F9BAE'

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        opacity: isDisabled ? 1 : 1,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 40,
          backgroundColor: isDisabled ? disabledBg : tokens.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 100ms ease-out',
          border: kind === 'Feature' && !isDisabled ? '2px solid transparent' : 'none',
          backgroundImage: kind === 'Feature' && !isDisabled
            ? `linear-gradient(${tokens.bg}, ${tokens.bg}), ${FEATURE_GRADIENT}`
            : undefined,
          backgroundOrigin: kind === 'Feature' && !isDisabled ? 'border-box' : undefined,
          backgroundClip: kind === 'Feature' && !isDisabled ? 'padding-box, border-box' : undefined,
        }}
        onMouseEnter={(e) => { if (!isDisabled) e.currentTarget.style.backgroundColor = tokens.hoverBg }}
        onMouseLeave={(e) => { if (!isDisabled) e.currentTarget.style.backgroundColor = tokens.bg }}
      >
        <FontAwesomeIcon
          icon={icon}
          style={{
            color: isDisabled ? disabledLabel : tokens.icon,
            fontSize: 18,
          }}
        />
      </div>
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: 12,
          lineHeight: '16px',
          color: isDisabled ? disabledLabel : tokens.label,
        }}
      >
        {label}
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Icon Button (elevated + standard)
// ---------------------------------------------------------------------------
export function IconButton({
  variant = 'elevated',
  size = 'Large',
  state = 'Default',
  icon = faPlus,
  darkMode = false,
}) {
  const isDisabled = state === 'Disabled'
  const isElevated = variant === 'elevated'

  const iconFill = isDisabled
    ? (darkMode ? '#5E6D82' : '#8F9BAE')
    : (darkMode ? '#ECEFF4' : '#1C2026')
  const hoverBg = darkMode ? '#272C35' : '#F3F5F8'

  const sizeMap = {
    elevated: { Large: { pad: 8, icon: 32, total: 48 }, Medium: { pad: 12, icon: 24, total: 48 }, Small: { pad: 6, icon: 28, total: 40 } },
    standard: { Large: { pad: 0, icon: 32, total: 32 }, Medium: { pad: 0, icon: 24, total: 24 }, Small: { pad: 0, icon: 20, total: 20 } },
  }
  const s = sizeMap[variant]?.[size] || sizeMap.elevated.Large

  return (
    <button
      disabled={isDisabled}
      style={{
        width: s.total,
        height: s.total,
        padding: s.pad,
        borderRadius: isElevated ? 24 : 0,
        backgroundColor: 'transparent',
        border: 'none',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 100ms ease-out',
      }}
      onMouseEnter={(e) => {
        if (!isDisabled && isElevated) e.currentTarget.style.backgroundColor = hoverBg
      }}
      onMouseLeave={(e) => {
        if (!isDisabled && isElevated) e.currentTarget.style.backgroundColor = 'transparent'
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ color: iconFill, fontSize: s.icon }}
      />
    </button>
  )
}
