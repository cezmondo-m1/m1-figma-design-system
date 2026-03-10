// ---------------------------------------------------------------------------
// Links — from Links.md
// ---------------------------------------------------------------------------

const SIZES = {
  Large:  { fontSize: 16, lineHeight: '24px' },
  Medium: { fontSize: 14, lineHeight: '20px' },
  Small:  { fontSize: 12, lineHeight: '16px' },
}

const PADDING = {
  Large:  { Default: 8, Underline: 12, Super: 12 },
  Medium: { Default: 6, Underline: 8, Super: 8 },
  Small:  { Default: 2, Underline: 2, Super: 2 },
}

export default function Link({
  size = 'Large',
  kind = 'Default',
  children = 'Link label',
  superNum = null,
  darkMode = false,
  onClick,
}) {
  const color = darkMode ? '#6FA7C3' : '#2A7DA7'
  const { fontSize, lineHeight } = SIZES[size] || SIZES.Large
  const isUnderlined = kind === 'Underline' || kind === 'Super'
  const fontWeight = kind === 'Default' ? 600 : 400
  const padY = (PADDING[size] || PADDING.Large)[kind] || 8

  return (
    <span
      onClick={onClick}
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight, fontSize, lineHeight,
        color,
        textDecoration: isUnderlined ? 'underline' : 'none',
        textUnderlineOffset: 2,
        padding: `${padY}px 0`,
        cursor: 'pointer',
        display: 'inline-flex', alignItems: 'baseline', gap: 0,
      }}
    >
      {kind === 'Super' && superNum != null && (
        <sup style={{
          fontSize: Math.round(fontSize * 0.65),
          lineHeight: '1',
          verticalAlign: 'super',
          marginRight: 1,
        }}>
          {superNum}
        </sup>
      )}
      {children}
    </span>
  )
}
