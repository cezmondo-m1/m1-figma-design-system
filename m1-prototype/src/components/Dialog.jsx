import { useEffect } from 'react'

// ---------------------------------------------------------------------------
// Color tokens — from Dialogs.md
// ---------------------------------------------------------------------------
const LIGHT = {
  bg: '#FFFFFF',
  main: '#1C2026',
  secondary: '#546073',
  primary: '#2A7DA7',
  border: '#D4DBE6',
  scrim: 'rgba(0,0,0,0.80)',
}

const DARK = {
  bg: '#0F1115',
  main: '#ECEFF4',
  secondary: '#8F9BAE',
  primary: '#6FA7C3',
  border: '#2F3641',
  scrim: 'rgba(0,0,0,0.85)',
}

// ---------------------------------------------------------------------------
// Dialog — Web and Mobile dialog component
// inline: renders without scrim/fixed positioning for static previews
// ---------------------------------------------------------------------------
export default function Dialog({
  open = false,
  onClose,
  variant = 'Web',
  typeStyle = 'Standard',
  title = 'Dialog title',
  body = '',
  image = false,
  imageContent = null,
  links = null,
  slot = null,
  buttonGroup = null,
  stickyFooter = false,
  androidClose = false,
  darkMode = false,
  inline = false,
}) {
  const t = darkMode ? DARK : LIGHT
  const isMobile = variant === 'Mobile'
  const isSmall = typeStyle === 'Small' && !isMobile

  // Lock body scroll when open (modal only)
  useEffect(() => {
    if (open && !inline) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open, inline])

  if (!open && !inline) return null

  // Typography
  const titleSize = isSmall ? 20 : 24
  const titleLineHeight = '28px'
  const bodySize = isSmall ? 14 : 16
  const bodyLineHeight = isSmall ? '20px' : '24px'

  // Spacing
  const dialogWidth = isMobile ? 343 : 584
  const cornerRadius = 8
  const bodyPadH = isMobile ? 16 : 32
  const bodyPadV = isMobile ? 16 : 32
  const itemSpacing = isMobile ? 16 : 24

  const dialogBox = (
    <div
      onClick={inline ? undefined : (e) => e.stopPropagation()}
      style={{
        fontFamily: 'Inter, sans-serif',
        width: dialogWidth, maxWidth: '100%',
        ...(inline ? {} : { maxHeight: isMobile ? 'calc(100vh - 120px)' : 'calc(100vh - 80px)' }),
        backgroundColor: t.bg,
        borderRadius: cornerRadius,
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: inline ? '0 4px 16px rgba(0,0,0,0.12)' : '0 16px 48px rgba(0,0,0,0.24)',
      }}
    >
      {/* Close button */}
      {!inline && (
        <div style={{
          display: 'flex', justifyContent: 'flex-end',
          padding: `${isMobile ? 12 : 16}px ${isMobile ? 12 : 16}px 0`,
        }}>
          <button
            onClick={onClose}
            style={{
              width: 32, height: 32, borderRadius: 4,
              border: 'none', backgroundColor: 'transparent',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = darkMode ? '#272C35' : '#E8ECF2' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill={t.secondary}>
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      )}

      {/* Scrollable content */}
      <div style={{
        overflowY: inline ? 'visible' : 'auto', flex: 1,
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Image */}
        {image && (
          <div style={{
            width: '100%', height: inline ? 120 : 200,
            background: darkMode
              ? 'linear-gradient(135deg, #1A1E23 0%, #272C35 100%)'
              : 'linear-gradient(135deg, #E5EFF4 0%, #F3F5F8 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {imageContent || (
              <span style={{ fontSize: 12, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>
                {inline ? 'Image' : 'Dialog image'}
              </span>
            )}
          </div>
        )}

        {/* Body content */}
        <div style={{
          padding: `${bodyPadV}px ${bodyPadH}px`,
          display: 'flex', flexDirection: 'column', gap: itemSpacing,
        }}>
          {/* Title */}
          <h2 style={{
            margin: 0, fontWeight: 600,
            fontSize: titleSize, lineHeight: titleLineHeight,
            color: t.main,
          }}>
            {title}
          </h2>

          {/* Body text */}
          {body && (
            <p style={{
              margin: 0, fontWeight: 400,
              fontSize: bodySize, lineHeight: bodyLineHeight,
              color: t.main,
            }}>
              {body}
            </p>
          )}

          {/* Links */}
          {links && links.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map((link, i) => (
                <span key={i} style={{
                  fontWeight: link.disclosure ? 400 : 600,
                  fontSize: link.disclosure ? 14 : 16,
                  lineHeight: link.disclosure ? '20px' : '24px',
                  color: t.primary, cursor: 'pointer',
                }}>
                  {link.label || link}
                </span>
              ))}
            </div>
          )}

          {/* Slot */}
          {slot}
        </div>
      </div>

      {/* Sticky footer OR inline button group */}
      {(buttonGroup || (androidClose && isMobile)) && (
        <div style={{
          padding: stickyFooter
            ? `24px ${bodyPadH}px ${bodyPadV}px`
            : `0 ${bodyPadH}px ${bodyPadV}px`,
          borderTop: stickyFooter ? `1px solid ${t.border}` : 'none',
          backgroundColor: t.bg,
          display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          {buttonGroup}
          {androidClose && isMobile && (
            <button
              onClick={onClose}
              style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 600,
                fontSize: 14, lineHeight: '20px',
                padding: '12px 24px', borderRadius: 24,
                border: `2px solid ${t.border}`,
                backgroundColor: 'transparent', color: t.main,
                cursor: 'pointer', width: '100%',
              }}
            >
              Close
            </button>
          )}
        </div>
      )}
    </div>
  )

  // Inline mode: render dialog box directly without scrim
  if (inline) return dialogBox

  // Modal mode: wrap in scrim overlay
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        backgroundColor: t.scrim,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? 16 : 0,
      }}
    >
      {dialogBox}
    </div>
  )
}
