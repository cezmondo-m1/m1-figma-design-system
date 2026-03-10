// ---------------------------------------------------------------------------
// Tooltip — from Tooltip.md
// Standard Tooltip (Web + Mobile) and Feature Highlight
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Standard Tooltip — Web
// ---------------------------------------------------------------------------
export function TooltipWeb({
  headline = '',
  body = 'Tooltip body text explaining the feature or element.',
  textLink = '',
  darkMode = false,
}) {
  const bg = '#152B56'
  const darkBg = '#CCD6EA'
  const useBg = darkMode ? darkBg : bg
  const textColor = darkMode ? '#152B56' : '#FFFFFF'

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: 343, maxWidth: '100%',
      borderRadius: 8,
      backgroundColor: useBg,
      padding: '12px 16px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.08)',
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      {headline && (
        <div style={{ fontWeight: 600, fontSize: 16, lineHeight: '24px', color: textColor }}>
          {headline}
        </div>
      )}
      <div style={{ fontWeight: 400, fontSize: 14, lineHeight: '20px', color: textColor }}>
        {body}
      </div>
      {textLink && (
        <div style={{
          fontWeight: 600, fontSize: 14, lineHeight: '20px',
          color: darkMode ? '#2A7DA7' : '#A6C9DA',
          cursor: 'pointer', marginTop: 8,
        }}>
          {textLink}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Standard Tooltip — Mobile (bottom sheet)
// ---------------------------------------------------------------------------
export function TooltipMobileSheet({
  headline = '',
  body = 'Tooltip body text explaining the feature or element.',
  textLink = '',
  darkMode = false,
}) {
  const bg = darkMode ? '#1A1E23' : '#FFFFFF'
  const textColor = darkMode ? '#ECEFF4' : '#1C2026'
  const handleColor = darkMode ? 'rgba(61,61,61,0.5)' : 'rgba(127,127,127,0.4)'

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: 375, maxWidth: '100%',
      borderRadius: '16px 16px 0 0',
      backgroundColor: bg,
      boxShadow: '0 -4px 16px rgba(0,0,0,0.12)',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Grab handle */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
        <div style={{ width: 36, height: 5, borderRadius: 2.5, backgroundColor: handleColor }} />
      </div>

      {/* Content */}
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {headline && (
          <div style={{ fontWeight: 600, fontSize: 16, lineHeight: '24px', color: textColor }}>
            {headline}
          </div>
        )}
        <div style={{ fontWeight: 400, fontSize: 14, lineHeight: '20px', color: textColor }}>
          {body}
        </div>
        {textLink && (
          <div style={{
            fontWeight: 600, fontSize: 16, lineHeight: '24px',
            color: darkMode ? '#6FA7C3' : '#2A7DA7',
            cursor: 'pointer', padding: '8px 0',
          }}>
            {textLink}
          </div>
        )}
      </div>

      {/* Home indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 8 }}>
        <div style={{ width: 134, height: 5, borderRadius: 100, backgroundColor: darkMode ? '#ECEFF4' : '#000000' }} />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Feature Highlight — with directional tail
// ---------------------------------------------------------------------------
export function FeatureHighlight({
  title = 'New Feature',
  body = 'Check out this new capability we just released.',
  linkText = '',
  alignment = 'Left',
  position = 'Bottom',
  close = false,
  darkMode = false,
  onClose,
}) {
  const bg = darkMode ? '#CCD6EA' : '#152B56'
  const textColor = darkMode ? '#152B56' : '#FFFFFF'
  const linkColor = darkMode ? '#2A7DA7' : '#A6C9DA'
  const closeColor = darkMode ? '#152B56' : '#ECEFF4'

  const tailWidth = 18
  const tailHeight = 12
  const tailAlign = alignment === 'Left' ? { left: 12 }
    : alignment === 'Right' ? { right: 12 }
    : { left: '50%', transform: 'translateX(-50%)' }

  const tailSvg = position === 'Bottom' ? (
    <svg width={tailWidth} height={tailHeight} viewBox={`0 0 ${tailWidth} ${tailHeight}`} style={{ display: 'block' }}>
      <path d={`M0,0 L${tailWidth / 2},${tailHeight} L${tailWidth},0`} fill={bg} />
    </svg>
  ) : (
    <svg width={tailWidth} height={tailHeight} viewBox={`0 0 ${tailWidth} ${tailHeight}`} style={{ display: 'block' }}>
      <path d={`M0,${tailHeight} L${tailWidth / 2},0 L${tailWidth},${tailHeight}`} fill={bg} />
    </svg>
  )

  const content = (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: 343, maxWidth: '100%',
      borderRadius: 8,
      backgroundColor: bg,
      padding: '12px 16px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.08)',
      display: 'flex', flexDirection: 'column', gap: 8,
      position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontWeight: 600, fontSize: 16, lineHeight: '24px', color: textColor }}>
            {title}
          </div>
          <div style={{ fontWeight: 400, fontSize: 14, lineHeight: '20px', color: textColor }}>
            {body}
          </div>
          {linkText && (
            <div style={{
              fontWeight: 600, fontSize: 14, lineHeight: '20px',
              color: linkColor, cursor: 'pointer', marginTop: 8,
            }}>
              {linkText}
            </div>
          )}
        </div>
        {close && (
          <button
            onClick={onClose}
            style={{
              border: 'none', background: 'transparent', cursor: 'pointer',
              padding: 0, marginLeft: 8, flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill={closeColor}>
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', position: 'relative' }}>
      {position === 'Top' && (
        <div style={{ position: 'relative', ...tailAlign, marginBottom: -1 }}>
          {tailSvg}
        </div>
      )}
      {content}
      {position === 'Bottom' && (
        <div style={{ position: 'relative', ...tailAlign, marginTop: -1 }}>
          {tailSvg}
        </div>
      )}
    </div>
  )
}
