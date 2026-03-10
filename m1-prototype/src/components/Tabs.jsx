import { useState, useRef, useEffect } from 'react'

// ---------------------------------------------------------------------------
// Tabs and tab bars — from Tabs and tab bars.md
// ---------------------------------------------------------------------------

const LIGHT = {
  main: '#1C2026',
  secondary: '#546073',
  bg: '#FFFFFF',
  bgSecondary: '#F3F5F8',
  border: '#D4DBE6',
  pillActiveBg: '#E8EDF5',
  pillActiveBorder: '#99ADD5',
}

const DARK = {
  main: '#ECEFF4',
  secondary: '#8F9BAE',
  bg: '#0F1115',
  bgSecondary: '#1A1E23',
  border: '#2F3641',
  pillActiveBg: '#272C35',
  pillActiveBorder: '#3C5A94',
}

// ---------------------------------------------------------------------------
// TabItem — individual tab (Primary or Secondary hierarchy)
// ---------------------------------------------------------------------------
export function TabItem({
  label = 'Tab',
  hierarchy = 'Primary',
  active = false,
  darkMode = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const t = darkMode ? DARK : LIGHT
  const isPrimary = hierarchy === 'Primary'

  const getBg = () => {
    if (isPrimary) {
      return hovered && !active ? t.bgSecondary : 'transparent'
    }
    if (active) return t.pillActiveBg
    if (hovered) return t.bgSecondary
    return 'transparent'
  }

  const getColor = () => {
    if (active) return t.main
    return t.secondary
  }

  const getWeight = () => {
    if (active) return 600
    if (isPrimary && hovered) return 600
    return 400
  }

  const primaryStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: getWeight(),
    fontSize: 14, lineHeight: '20px',
    color: getColor(),
    backgroundColor: getBg(),
    padding: '16px 12px',
    height: 52,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', userSelect: 'none',
    borderBottom: active ? `2px solid ${t.main}` : '2px solid transparent',
    transition: 'background-color 100ms ease-out',
    whiteSpace: 'nowrap',
    border: 'none',
    borderBottomWidth: active ? 2 : 2,
    borderBottomStyle: 'solid',
    borderBottomColor: active ? t.main : 'transparent',
  }

  const secondaryStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: getWeight(),
    fontSize: 14, lineHeight: '20px',
    color: getColor(),
    backgroundColor: getBg(),
    padding: '8px 16px',
    height: 36,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', userSelect: 'none',
    borderRadius: 24,
    border: active
      ? `1px solid ${t.pillActiveBorder}`
      : hovered
        ? '1px solid transparent'
        : `1px solid ${t.border}`,
    transition: 'background-color 100ms ease-out, border-color 100ms ease-out',
    whiteSpace: 'nowrap',
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={isPrimary ? primaryStyle : secondaryStyle}
    >
      {label}
    </button>
  )
}

// ---------------------------------------------------------------------------
// TabBar — composed horizontal tab bar with overflow scrims
// ---------------------------------------------------------------------------
export function TabBar({
  type = 'Web primary tab bar',
  tabs = ['Overview', 'Activity', 'Holdings', 'Research', 'News', 'Settings', 'Help'],
  activeIndex = 0,
  darkMode = false,
  onTabChange,
}) {
  const t = darkMode ? DARK : LIGHT
  const scrollRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const isMobile = type === 'Mobile tab bar'
  const isSecondary = type === 'Web secondary tab bar'
  const isCentered = type === 'Web centered tab bar'
  const hierarchy = isSecondary ? 'Secondary' : 'Primary'
  const gap = isMobile ? 0 : 8
  const width = isMobile ? 397 : 705
  const barHeight = isSecondary ? 36 : 52

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const check = () => {
      setShowLeft(el.scrollLeft > 4)
      setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
    }
    check()
    el.addEventListener('scroll', check, { passive: true })
    return () => el.removeEventListener('scroll', check)
  }, [tabs])

  const scrimColor = darkMode ? '15,17,21' : '255,255,255'

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
      width, maxWidth: '100%',
      height: barHeight,
      borderBottom: isSecondary ? 'none' : `1px solid ${t.border}`,
    }}>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          alignItems: 'stretch',
          gap,
          height: '100%',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {tabs.map((label, i) => (
          <TabItem
            key={label}
            label={label}
            hierarchy={hierarchy}
            active={i === activeIndex}
            darkMode={darkMode}
            onClick={() => onTabChange?.(i)}
          />
        ))}
      </div>

      {/* Left scrim */}
      {showLeft && (
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 24, pointerEvents: 'none',
          background: `linear-gradient(to right, rgba(${scrimColor},1) 0%, rgba(${scrimColor},0.64) 64%, rgba(${scrimColor},0) 100%)`,
        }} />
      )}
      {/* Right scrim */}
      {showRight && (
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: 32, pointerEvents: 'none',
          background: `linear-gradient(to left, rgba(${scrimColor},1) 0%, rgba(${scrimColor},0.64) 64%, rgba(${scrimColor},0) 100%)`,
        }} />
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// TabsGroup — compact horizontal tab group (2–7 tabs)
// ---------------------------------------------------------------------------
export function TabsGroup({
  tabs = ['Overview', 'Activity', 'Holdings'],
  activeIndex = 0,
  darkMode = false,
  onTabChange,
}) {
  const t = darkMode ? DARK : LIGHT

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      display: 'inline-flex',
      gap: 16,
      height: 44,
      borderBottom: `1px solid ${t.border}`,
    }}>
      {tabs.map((label, i) => {
        const isActive = i === activeIndex
        return (
          <TabGroupItem
            key={label}
            label={label}
            active={isActive}
            darkMode={darkMode}
            onClick={() => onTabChange?.(i)}
          />
        )
      })}
    </div>
  )
}

// Internal tab item for TabsGroup (slightly different sizing than TabItem Primary)
function TabGroupItem({ label, active, darkMode, onClick }) {
  const [hovered, setHovered] = useState(false)
  const t = darkMode ? DARK : LIGHT

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: active ? 600 : 400,
        fontSize: 14, lineHeight: '20px',
        color: active ? t.main : hovered ? t.main : t.secondary,
        backgroundColor: hovered && !active ? t.bgSecondary : 'transparent',
        padding: '16px 8px',
        height: 44,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', userSelect: 'none',
        border: 'none',
        borderBottom: active ? `2px solid ${t.main}` : '2px solid transparent',
        transition: 'background-color 100ms ease-out',
        whiteSpace: 'nowrap',
        marginBottom: -1,
      }}
    >
      {label}
    </button>
  )
}
