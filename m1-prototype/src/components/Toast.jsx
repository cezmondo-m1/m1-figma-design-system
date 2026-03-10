import { useState, useEffect, useRef } from 'react'

// ---------------------------------------------------------------------------
// Toasts — from Toasts.md
// ---------------------------------------------------------------------------

const MODES = {
  Light: {
    bg: '#152B56',
    text: '#FFFFFF',
    icon: '#FFFFFF',
    close: '#FFFFFF',
    link: '#A6C9DA',
    progress: '#A6C9DA',
    shadow: '0 4px 16px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.08)',
  },
  Dark: {
    bg: '#0C1931',
    text: '#ECEFF4',
    icon: '#ECEFF4',
    close: '#ECEFF4',
    link: '#6FA7C3',
    progress: '#6FA7C3',
    shadow: '0 4px 16px rgba(0,0,0,0.32), 0 2px 4px rgba(0,0,0,0.16)',
  },
  Light_Secondary: {
    bg: '#FFFFFF',
    text: '#1C2026',
    icon: '#1C2026',
    close: '#1C2026',
    link: '#2A7DA7',
    progress: '#8F9BAE',
    shadow: '0 4px 16px rgba(0,0,0,0.16), 0 2px 4px rgba(0,0,0,0.08)',
  },
  Dark_Secondary: {
    bg: '#1A1E23',
    text: '#ECEFF4',
    icon: '#ECEFF4',
    close: '#ECEFF4',
    link: '#6FA7C3',
    progress: '#5E6D82',
    shadow: '0 4px 16px rgba(0,0,0,0.32), 0 2px 4px rgba(0,0,0,0.16)',
  },
}

export default function Toast({
  mode = 'Light',
  leadingIcon = true,
  textLink = true,
  trailingIcon = true,
  message = 'Toast message goes here and can span multiple lines if needed.',
  linkLabel = 'Learn more',
  progress = 0.65,
  animated = false,
}) {
  const t = MODES[mode] || MODES.Light
  const [prog, setProg] = useState(animated ? 1 : progress)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!animated) { setProg(progress); return }
    const start = performance.now()
    const duration = 4000
    const tick = (now) => {
      const elapsed = now - start
      const remaining = Math.max(0, 1 - elapsed / duration)
      setProg(remaining)
      if (remaining > 0) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [animated, progress])

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: 400, maxWidth: '100%',
      borderRadius: 12,
      backgroundColor: t.bg,
      boxShadow: t.shadow,
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Content area */}
      <div style={{
        padding: '16px 16px 12px',
        display: 'flex', gap: 12,
        alignItems: 'flex-start',
      }}>
        {/* Leading icon */}
        {leadingIcon && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill={t.icon} style={{ flexShrink: 0, marginTop: 0 }}>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        )}

        {/* Message + link */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{
            fontWeight: 400, fontSize: 16, lineHeight: '24px',
            color: t.text,
          }}>
            {message}
          </span>
          {textLink && (
            <span style={{
              fontWeight: 600, fontSize: 16, lineHeight: '24px',
              color: t.link, cursor: 'pointer',
              padding: '8px 0',
            }}>
              {linkLabel}
            </span>
          )}
        </div>

        {/* Trailing close icon */}
        {trailingIcon && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill={t.close} style={{ flexShrink: 0, cursor: 'pointer' }}>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        )}
      </div>

      {/* Progress bar */}
      <div style={{
        height: 6,
        backgroundColor: 'transparent',
        position: 'relative',
      }}>
        <div style={{
          height: '100%',
          width: `${prog * 100}%`,
          backgroundColor: t.progress,
          borderRadius: '0 3px 3px 0',
          transition: animated ? 'none' : 'width 300ms ease-out',
        }} />
      </div>
    </div>
  )
}
