import { useState } from 'react'

// ---------------------------------------------------------------------------
// Navigation — from Navigation.md
// Mobile header, Mobile tab bar, Web sidebar, Web top header, Web footer
// ---------------------------------------------------------------------------

const LIGHT = {
  main: '#1C2026',
  secondary: '#546073',
  bg: '#FFFFFF',
  bgSecondary: '#F3F5F8',
  border: '#D4DBE6',
  teal: '#2A7DA7',
  blue08: '#152B56',
  infoSubtle: '#E8EDF5',
  grey04: '#8F9BAE',
  selected: '#E8ECF2',
}

const DARK = {
  main: '#ECEFF4',
  secondary: '#8F9BAE',
  bg: '#0F1115',
  bgSecondary: '#1A1E23',
  border: '#2F3641',
  teal: '#6FA7C3',
  blue08: '#CCD6EA',
  infoSubtle: '#272C35',
  grey04: '#5E6D82',
  selected: '#1A1E23',
}

// ---------------------------------------------------------------------------
// StatusBar — iOS / Android status bar
// ---------------------------------------------------------------------------
export function StatusBar({ os = 'iOS', darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  const isIOS = os === 'iOS'
  const w = isIOS ? 390 : 360
  const h = isIOS ? 54 : 24

  return (
    <div style={{
      fontFamily: isIOS ? '-apple-system, SF Pro, sans-serif' : 'Roboto, sans-serif',
      width: w, height: h, backgroundColor: t.bg,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: isIOS ? '14px 24px 0' : '0 16px',
      fontSize: isIOS ? 15 : 12, fontWeight: 600, color: t.main,
    }}>
      <span>{isIOS ? '9:41' : '12:30'}</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {/* Signal */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill={t.main}>
          <rect x="0" y="8" width="3" height="4" rx="0.5" />
          <rect x="4" y="5" width="3" height="7" rx="0.5" />
          <rect x="8" y="2" width="3" height="10" rx="0.5" />
          <rect x="12" y="0" width="3" height="12" rx="0.5" />
        </svg>
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill={t.main}>
          <path d="M8 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4-3a5.5 5.5 0 018 0l-1.2 1.2a3.8 3.8 0 00-5.6 0L4 7zm-3-3a9 9 0 0114 0L13.8 5.2a7.3 7.3 0 00-11.6 0L1 4z" />
        </svg>
        {/* Battery */}
        <svg width="24" height="12" viewBox="0 0 24 12" fill={t.main}>
          <rect x="0" y="1" width="20" height="10" rx="2" fill="none" stroke={t.main} strokeWidth="1" />
          <rect x="2" y="3" width="14" height="6" rx="1" />
          <rect x="21" y="4" width="2" height="4" rx="0.5" />
        </svg>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// MobileNav — top nav bar
// ---------------------------------------------------------------------------
export function MobileNav({ type = 'Default', darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  const isActions = type === 'Actions'
  const isOnboarding = type === 'Onboarding'

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      height: 56, display: 'flex', alignItems: 'center',
      padding: '0 16px', backgroundColor: t.bg,
    }}>
      {/* Left icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill={t.main} style={{ cursor: 'pointer' }}>
        {isActions || isOnboarding ? (
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        ) : (
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        )}
      </svg>

      {/* Title */}
      <span style={{
        flex: 1, textAlign: 'center',
        fontWeight: 600, fontSize: 20, lineHeight: '28px', color: t.main,
      }}>
        {isOnboarding ? '' : isActions ? '' : 'Invest'}
      </span>

      {/* Right icons */}
      {!isOnboarding && !isActions && (
        <div style={{ display: 'flex', gap: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={t.main} style={{ cursor: 'pointer' }}>
            <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </div>
      )}
      {isActions && (
        <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '24px', color: t.teal, cursor: 'pointer' }}>
          Done
        </span>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// MobileHeader — composed: StatusBar + MobileNav + optional progress
// ---------------------------------------------------------------------------
export function MobileHeader({ device = 'iOS', type = 'Default', darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  const isOnboarding = type === 'Onboarding'
  const w = device === 'iOS' ? 390 : 360

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: w, maxWidth: '100%',
      backgroundColor: t.bg,
      borderBottom: `1px solid ${t.border}`,
    }}>
      <StatusBar os={device} darkMode={darkMode} />
      <MobileNav type={type} darkMode={darkMode} />
      {isOnboarding && (
        <div style={{ height: 4, backgroundColor: darkMode ? '#E8ECF2' : '#E8ECF2', position: 'relative' }}>
          <div style={{ height: '100%', width: '40%', backgroundColor: t.teal, borderRadius: 2 }} />
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// MobileTabBar — bottom tab bar (5 tabs)
// Figma: 375×62 iOS / 375×54 Android
// Product container: 301×62 iOS (transparent) / 309×54 Android (solid bg)
// Intelligence tab: separate 62×62 iOS / 54×54 Android rounded container
// Active tab: full frame gets #EDEDED pill (iOS only), r=48
// ---------------------------------------------------------------------------
const TAB_ITEMS = ['Home', 'Earn', 'Invest', 'Borrow']

export function MobileTabBar({ activePage = 'Home', darkMode = false, platform = 'iOS' }) {
  const t = darkMode ? DARK : LIGHT
  const isIOS = platform === 'iOS'
  const barH = isIOS ? 62 : 54
  const tabH = isIOS ? 54 : 46
  const tabPad = isIOS ? '8px 4px' : '4px'

  // iOS: transparent product container; Android: solid bg
  const productBg = isIOS
    ? 'transparent'
    : (darkMode ? '#1A1E23' : '#FFFFFF')
  // Intelligence container matches product container style
  const intelBg = isIOS
    ? 'transparent'
    : (darkMode ? '#1A1E23' : '#FFFFFF')

  // Active pill only on iOS
  const activePillBg = isIOS
    ? (darkMode ? '#121212' : '#EDEDED')
    : 'transparent'
  // Active text: #1C2026 light / #ECEFF4 dark
  const activeTextColor = darkMode ? '#ECEFF4' : '#1C2026'
  const inactiveColor = darkMode ? '#8F9BAE' : '#546073'

  const tabIcon = (label, isActive) => {
    const fill = isActive ? activeTextColor : inactiveColor
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        {label === 'Home' && <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />}
        {label === 'Earn' && <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />}
        {label === 'Invest' && <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />}
        {label === 'Borrow' && <path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />}
        {label === 'Intelligence' && <path d="M19.5 12c0-1.58-.46-3.05-1.25-4.29l-1.46 1.46A5.97 5.97 0 0118 12c0 1.07-.28 2.07-.77 2.94l1.46 1.45c.79-1.25 1.25-2.72 1.25-4.39zM12 5.5c1.58 0 3.05.46 4.29 1.25l1.46-1.46A9.01 9.01 0 0012 3.5V5.5zm6.5 6.5c0 1.58-.46 3.05-1.25 4.29l1.46 1.46A9.01 9.01 0 0020.5 12h-2zM12 18.5c-1.58 0-3.05-.46-4.29-1.25l-1.46 1.46A9.01 9.01 0 0012 20.5v-2zM5.5 12c0-1.58.46-3.05 1.25-4.29L5.29 6.25A9.01 9.01 0 003.5 12h2zM12 8a4 4 0 100 8 4 4 0 000-8z" />}
      </svg>
    )
  }

  const renderProductTab = (label) => {
    const isActive = activePage === label
    return (
      <div key={label} style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        flex: 1, height: tabH, cursor: 'pointer',
        padding: tabPad,
        borderRadius: isActive ? 48 : 0,
        backgroundColor: isActive ? activePillBg : 'transparent',
        transition: 'background-color 150ms ease-out',
      }}>
        {tabIcon(label, isActive)}
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: isActive ? 600 : 400,
          fontSize: 10, lineHeight: '14px',
          color: isActive ? activeTextColor : inactiveColor,
        }}>
          {label}
        </span>
      </div>
    )
  }

  const isIntelActive = activePage === 'Intelligence'
  const intelSize = isIOS ? 62 : 54
  const intelR = isIOS ? 32 : 28

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: 375, maxWidth: '100%', height: barH,
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      {/* Product tabs container */}
      <div style={{
        flex: 1, display: 'flex', height: barH,
        backgroundColor: productBg,
        borderRadius: 32, padding: 4,
      }}>
        {TAB_ITEMS.map(renderProductTab)}
      </div>
      {/* Intelligence tab — separate rounded container */}
      <div style={{
        width: intelSize, height: intelSize, flexShrink: 0,
        backgroundColor: intelBg,
        borderRadius: intelR, padding: isIOS ? '8px 4px' : '7px 3px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}>
        {tabIcon('Intelligence', isIntelActive)}
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: isIntelActive ? 600 : 400,
          fontSize: isIOS ? 10 : 8.7, lineHeight: isIOS ? '14px' : '13px',
          color: isIntelActive ? activeTextColor : inactiveColor,
        }}>
          Intelligence
        </span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// AppNavigationItem — web sidebar nav item
// ---------------------------------------------------------------------------
export function AppNavigationItem({
  label = 'Home',
  state = 'Default',
  caption = '',
  icon = true,
  darkMode = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const t = darkMode ? DARK : LIGHT
  const isSelected = state === 'Selected'
  const isFocused = state === 'Focused'
  const isHover = state === 'Hover' || hovered

  const getBg = () => {
    if (isSelected) return t.infoSubtle
    if (isFocused) return 'rgba(158,158,158,0.25)'
    if (isHover) return 'rgba(158,158,158,0.12)'
    return 'transparent'
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'Inter, sans-serif',
        height: 40,
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '8px 24px',
        backgroundColor: getBg(),
        borderLeft: isSelected ? `2px solid ${t.blue08}` : '2px solid transparent',
        cursor: 'pointer',
        transition: 'background-color 100ms ease-out',
      }}
    >
      {icon && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={isSelected ? t.teal : t.main}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontWeight: 600, fontSize: 14, lineHeight: '20px',
          color: isSelected ? t.blue08 : t.main,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {label}
        </div>
        {caption && (
          <div style={{
            fontWeight: 400, fontSize: 12, lineHeight: '16px',
            color: isSelected ? t.blue08 : t.main,
          }}>
            {caption}
          </div>
        )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// NavSection — expandable product section with sub-navigation
// ---------------------------------------------------------------------------
const NAV_SECTION_DATA = {
  Earn: {
    icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />,
    groups: [
      { label: 'cash', items: [{ title: 'My Funds', amount: '$8,000,00.00 available', selected: true }] },
      { label: 'actions', items: [{ title: 'Add account', caption: 'Individual and joint' }] },
    ],
  },
  Invest: {
    icon: <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />,
    groups: [
      { label: 'brokerage', items: [
        { title: 'My Portfolio', amount: '$17,000.00', caption: 'Invest up to $17,000 with margin', selected: true },
        { title: 'Long-term investments', amount: '$50,000.00' },
      ]},
      { label: 'Retirement', items: [{ title: 'Roth IRA', amount: '$25,123.98' }] },
      { label: 'Insights', items: [{ title: 'Concentration analysis', caption: 'By sector, asset, and region' }] },
      { label: 'Actions', items: [
        { title: 'Transfer to M1', caption: 'Partial or full account', endIcon: true },
        { title: 'Add account', caption: 'Brokerage, retirement, and crypto', endIcon: true },
      ]},
    ],
  },
  Borrow: {
    icon: <path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />,
    groups: [
      { label: 'Margin', items: [{ title: 'Brokerage', amount: '$1,000.00 margin balance', selected: true }] },
      { label: 'Actions', items: [{ title: 'Add a loan', caption: 'Personal or margin', endIcon: true }] },
    ],
  },
  Research: {
    icon: <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />,
    groups: [
      { items: [
        { title: 'News' }, { title: 'Stocks' }, { title: 'Funds' }, { title: 'Crypto' },
        { title: 'Model Portfolios' }, { title: 'My Pies' }, { title: 'Watchlist' },
      ]},
    ],
  },
}

const WEB_NAV_FOOTER = [
  { label: 'Taylor Maede', icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /> },
  { label: 'Disclosures', icon: <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zM13 9V3.5L18.5 9H13z" /> },
  { label: 'Help', icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /> },
  { label: 'Log out', icon: <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" /> },
]

function SubNavItem({ title, amount, caption, selected, endIcon, darkMode }) {
  const t = darkMode ? DARK : LIGHT
  return (
    <div style={{
      padding: '12px 24px 12px 64px',
      display: 'flex', alignItems: 'center', gap: 16,
      backgroundColor: selected ? t.selected : 'transparent',
      borderLeft: selected ? `0.6px solid ${t.main}` : '0.6px solid transparent',
      cursor: 'pointer',
    }}>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontWeight: 600, fontSize: 14, lineHeight: '20px', color: t.main }}>
          {title}
        </div>
        {amount && (
          <div style={{ fontFamily: 'Inter Display, Inter, sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', color: t.main }}>
            {amount}
          </div>
        )}
        {caption && (
          <div style={{ fontFamily: 'Inter Display, Inter, sans-serif', fontWeight: 400, fontSize: 12, lineHeight: '16px', color: t.secondary }}>
            {caption}
          </div>
        )}
      </div>
      {endIcon && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={t.secondary}>
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
        </svg>
      )}
    </div>
  )
}

function MenuLabel({ label, darkMode }) {
  const t = darkMode ? DARK : LIGHT
  return (
    <div style={{
      padding: '8px 0', marginLeft: 64, marginRight: 24,
      borderBottom: `1px solid ${t.border}`,
    }}>
      <span style={{
        fontWeight: 400, fontSize: 11, lineHeight: '16px',
        color: t.secondary, textTransform: 'uppercase', letterSpacing: '0.5px',
      }}>
        {label}
      </span>
    </div>
  )
}

function NavSectionExpanded({ product, isOpen, darkMode, onToggle }) {
  const t = darkMode ? DARK : LIGHT
  const section = NAV_SECTION_DATA[product]
  if (!section) return null

  return (
    <div style={{
      backgroundColor: isOpen ? t.bgSecondary : 'transparent',
      transition: 'background-color 150ms ease-out',
    }}>
      {/* Section header */}
      <div
        onClick={() => onToggle?.(product)}
        style={{
          display: 'flex', alignItems: 'center', gap: 16,
          padding: '8px 24px', height: 40, cursor: 'pointer',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill={t.main}>
          {section.icon}
        </svg>
        <span style={{ flex: 1, fontWeight: 600, fontSize: 14, lineHeight: '20px', color: t.main }}>
          {product}
        </span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill={t.main}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 150ms ease-out' }}
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </div>

      {/* Sub-menu (visible when open) */}
      {isOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {section.groups.map((group, gi) => (
            <div key={gi}>
              {group.label && <MenuLabel label={group.label} darkMode={darkMode} />}
              {group.items.map((item, ii) => (
                <SubNavItem key={ii} {...item} darkMode={darkMode} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// WebRailNav — composed web sidebar
// Figma: 264px expanded / 72px collapsed × 1024px height
// 3 zones: Hot button, Main nav (Home + 4 product sections), Footer
// ---------------------------------------------------------------------------
export function WebRailNav({ selection = 'Home', collapsed = false, darkMode = false, onSelect }) {
  const t = darkMode ? DARK : LIGHT
  const width = collapsed ? 72 : 264

  // Home is a standalone AppNavigationItem; Earn/Invest/Borrow/Research are expandable nav-sections
  const isHomeSelected = selection === 'Home'
  const isSettingsSelected = selection === 'Settings'
  const productSections = ['Earn', 'Invest', 'Borrow', 'Research']

  // Home icon SVG paths
  const homeIcon = <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width, height: 640,
      backgroundColor: t.bg,
      borderRight: `1px solid ${t.border}`,
      display: 'flex', flexDirection: 'column',
      paddingTop: 24,
      overflow: 'hidden',
    }}>
      {/* Hot button */}
      <div style={{ padding: '0 8px', marginBottom: 24 }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start',
          gap: 8,
          padding: collapsed ? 0 : '12px 24px',
          height: collapsed ? 40 : 44,
          width: collapsed ? 40 : undefined,
          margin: collapsed ? '0 auto' : undefined,
          borderRadius: collapsed ? 40 : 24,
          border: `2px solid ${t.teal}`,
          cursor: 'pointer',
          background: `linear-gradient(135deg, ${t.teal}20, transparent)`,
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill={t.teal}>
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm-1 3v2H7v2h2v2h2v-2h2V9h-2V7H9z" />
          </svg>
          {!collapsed && (
            <span style={{ fontWeight: 600, fontSize: 14, lineHeight: '20px', color: t.teal }}>
              M1 Intelligence
            </span>
          )}
        </div>
      </div>

      {/* Main nav */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, overflowY: 'auto' }}>
        {/* Home item */}
        {collapsed ? (
          <div
            onClick={() => onSelect?.('Home')}
            style={{
              width: 40, height: 40, margin: '0 auto',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 8, cursor: 'pointer',
              backgroundColor: isHomeSelected ? t.infoSubtle : 'transparent',
              borderLeft: isHomeSelected ? `2px solid ${t.blue08}` : '2px solid transparent',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill={isHomeSelected ? t.teal : t.main}>
              {homeIcon}
            </svg>
          </div>
        ) : (
          <AppNavigationItem
            label="Home"
            state={isHomeSelected ? 'Selected' : 'Default'}
            darkMode={darkMode}
            onClick={() => onSelect?.('Home')}
          />
        )}

        {/* Product sections */}
        {productSections.map((product) => {
          const sectionData = NAV_SECTION_DATA[product]
          if (collapsed) {
            const isSel = selection === product
            return (
              <div
                key={product}
                onClick={() => onSelect?.(product)}
                style={{
                  width: 40, height: 40, margin: '0 auto',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 8, cursor: 'pointer',
                  backgroundColor: isSel ? t.infoSubtle : 'transparent',
                  borderLeft: isSel ? `2px solid ${t.blue08}` : '2px solid transparent',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={isSel ? t.teal : t.main}>
                  {sectionData?.icon}
                </svg>
              </div>
            )
          }
          return (
            <NavSectionExpanded
              key={product}
              product={product}
              isOpen={selection === product}
              darkMode={darkMode}
              onToggle={(p) => onSelect?.(p)}
            />
          )
        })}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: `1px solid ${t.border}`,
        padding: '8px 0 24px',
        display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        {WEB_NAV_FOOTER.map((item) => {
          const isFooterSelected = isSettingsSelected && item.label === 'Taylor Maede'
          if (collapsed) {
            return (
              <div
                key={item.label}
                style={{
                  width: 40, height: 40, margin: '0 auto',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 8, cursor: 'pointer',
                  backgroundColor: isFooterSelected ? t.selected : 'transparent',
                  borderLeft: isFooterSelected ? `2px solid ${t.main}` : '2px solid transparent',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={t.main}>
                  {item.icon}
                </svg>
              </div>
            )
          }
          return (
            <div key={item.label} style={{
              padding: '8px 24px', height: 40,
              fontWeight: 600, fontSize: 14, lineHeight: '20px',
              color: isFooterSelected ? t.main : t.main,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 16,
              backgroundColor: isFooterSelected ? t.selected : 'transparent',
              borderLeft: isFooterSelected ? `2px solid ${t.main}` : '2px solid transparent',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill={t.main}>
                {item.icon}
              </svg>
              {item.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// TopHeader — web top header bar
// ---------------------------------------------------------------------------
export function TopHeader({ border = true, darkMode = false }) {
  const t = darkMode ? DARK : LIGHT

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: '100%', maxWidth: 1288, height: 56,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 24px',
      backgroundColor: t.bg,
      borderBottom: border ? `0.5px solid ${t.border}` : 'none',
    }}>
      {/* Left: menu + logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill={t.main} style={{ cursor: 'pointer' }}>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill={t.teal}>
          <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm0 2.18l6 3v5.09c0 4.44-2.9 8.63-6 9.73-3.1-1.1-6-5.29-6-9.73v-5.09l6-3z" />
        </svg>
      </div>

      {/* Right: promo snippet */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#D6A55C">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a3 3 0 00-3-3c-1.05 0-1.95.56-2.47 1.37L12 4.13l-.53-.76A2.994 2.994 0 009 2a3 3 0 00-3 3c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4 15.38 12 17 10.83 14.92 8H20v6z" />
        </svg>
        <span style={{ fontWeight: 600, fontSize: 14, lineHeight: '20px', color: t.secondary }}>
          Get up to $75 when you transfer
        </span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// WebFooter — responsive web footer
// ---------------------------------------------------------------------------
export function WebFooter({ breakpoint = 'Desktop', alignment = 'Left', darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  const isMobile = breakpoint === 'Mobile web'
  const isDesktopLeft = breakpoint === 'Desktop' && alignment === 'Left'

  const links = ['Disclosures', 'Terms of Use', 'Privacy Policy']
  const tagline = 'M1: The Finance Super App®'
  const copyright = '© Copyright 2025 M1 Holdings Inc.'

  const linkStyle = {
    fontWeight: 400, fontSize: 16, lineHeight: '24px',
    color: t.teal, textDecoration: 'underline', cursor: 'pointer',
    padding: '12px 0',
  }
  const copyStyle = {
    fontWeight: 400, fontSize: 14, lineHeight: '20px', color: t.secondary,
  }

  if (isDesktopLeft) {
    return (
      <div style={{
        fontFamily: 'Inter, sans-serif',
        width: '100%', maxWidth: 1620,
        borderTop: `1px solid ${t.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 80px', height: 72,
      }}>
        <div style={{ display: 'flex', gap: 48 }}>
          {links.map((l) => <span key={l} style={linkStyle}>{l}</span>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={copyStyle}>{tagline}</span>
          <span style={copyStyle}>{copyright}</span>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: '100%',
      maxWidth: isMobile ? 375 : breakpoint === 'Tablet' ? 927 : 1334,
      borderTop: `1px solid ${t.border}`,
      padding: isMobile ? '0 16px 32px' : '0 48px 16px',
      display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 12,
      alignItems: alignment === 'Centered' ? 'center' : 'flex-start',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 4 : 32,
        flexWrap: 'wrap',
        justifyContent: alignment === 'Centered' ? 'center' : 'flex-start',
      }}>
        {links.map((l) => <span key={l} style={linkStyle}>{l}</span>)}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 12 : 16,
        alignItems: alignment === 'Centered' ? 'center' : 'flex-start',
      }}>
        <span style={copyStyle}>{tagline}</span>
        <span style={copyStyle}>{copyright}</span>
      </div>
    </div>
  )
}
