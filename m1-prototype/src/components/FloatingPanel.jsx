import { useState } from 'react'

// ---------------------------------------------------------------------------
// Color tokens — from Floating panel.md
// ---------------------------------------------------------------------------
const LIGHT = {
  bg: '#FFFFFF',
  main: '#1C2026',
  secondary: '#546073',
  border: '#D4DBE6',
  ctaBorder: '#1C2026',
  pillBg: '#1F7C3E',
  pillText: '#FFFFFF',
  bannerBg: '#FBF4DF',
  bannerBorder: '#EDD17B',
}

const DARK = {
  bg: '#0F1115',
  main: '#ECEFF4',
  secondary: '#8F9BAE',
  border: '#2F3641',
  ctaBorder: '#ECEFF4',
  pillBg: '#1F7C3E',
  pillText: '#FFFFFF',
  bannerBg: '#332A10',
  bannerBorder: '#7A631F',
}

// ---------------------------------------------------------------------------
// List item data
// ---------------------------------------------------------------------------
const COLLAPSED_ITEMS = [
  { title: 'One-time transfer', desc: 'Move money between your accounts' },
  { title: 'Recurring transfer', desc: 'Set up an automatic schedule' },
  { title: 'Smart Transfer', desc: 'Automatically invest spare cash', pill: 'New' },
]

const EXPANDED_ITEMS = [
  ...COLLAPSED_ITEMS,
  { title: 'Wire transfer', desc: 'Send a wire to an external account' },
  { title: 'Transfer from another brokerage', desc: 'Move assets from another firm' },
  { title: 'Direct deposit', desc: 'Route your paycheck to M1' },
  { title: 'Manage existing transfers', desc: 'View or cancel pending transfers' },
]

// ---------------------------------------------------------------------------
// FloatingPanel — moveMoneyDropdown component
// ---------------------------------------------------------------------------
export default function FloatingPanel({
  client = 'Web',
  state: controlledState,
  onToggle,
  hasBanner = false,
  darkMode = false,
}) {
  const [internalState, setInternalState] = useState('Collapsed')
  const state = controlledState ?? internalState
  const toggle = onToggle ?? (() => setInternalState(s => s === 'Collapsed' ? 'Expanded' : 'Collapsed'))

  const t = darkMode ? DARK : LIGHT
  const isMobile = client === 'Mobile'
  const isExpanded = state === 'Expanded'
  const items = isExpanded ? EXPANDED_ITEMS : COLLAPSED_ITEMS

  const panelWidth = isMobile ? 375 : 298

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: panelWidth, maxWidth: '100%',
      backgroundColor: t.bg,
      borderRadius: isMobile ? 0 : 8,
      overflow: 'hidden',
      ...(isMobile ? {} : {
        filter: 'drop-shadow(0px 0px 40px rgba(35,38,45,0.20)) drop-shadow(0px 0px 10px rgba(35,38,45,0.05))',
      }),
    }}>
      {/* Mobile header */}
      {isMobile && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px',
          borderBottom: `1px solid ${t.border}`,
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill={t.main} style={{ cursor: 'pointer' }}>
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
          <span style={{ fontWeight: 400, fontSize: 16, lineHeight: '24px', color: t.main }}>
            Move money
          </span>
          <div style={{ width: 20 }} />
        </div>
      )}

      {/* Optional banner */}
      {hasBanner && (
        <div style={{
          margin: isMobile ? '8px 16px 0' : '8px 16px 0',
          padding: '8px 12px',
          backgroundColor: t.bannerBg,
          border: `1px solid ${t.bannerBorder}`,
          borderRadius: 4,
          fontSize: 12, lineHeight: '16px', color: t.main,
        }}>
          Smart Transfer is now available for your account
        </div>
      )}

      {/* List items */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((item, i) => (
          <div
            key={item.title}
            style={{
              padding: `16px ${isMobile ? 16 : 16}px`,
              borderBottom: i < items.length - 1 ? `1px solid ${t.border}` : 'none',
              display: 'flex', gap: 16, alignItems: 'flex-start',
              cursor: 'pointer',
            }}
          >
            {/* Icon placeholder */}
            <div style={{
              width: 24, height: 24, borderRadius: 4, flexShrink: 0,
              backgroundColor: darkMode ? '#272C35' : '#E8ECF2',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill={t.secondary}>
                <path d="M7 1v12M1 7h12" stroke={t.secondary} strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 400, fontSize: 16, lineHeight: '24px', color: t.main }}>
                  {item.title}
                </span>
                {item.pill && (
                  <span style={{
                    fontSize: 12, lineHeight: '16px', fontWeight: 400,
                    padding: '2px 8px', borderRadius: 10,
                    backgroundColor: t.pillBg, color: t.pillText,
                  }}>
                    {item.pill}
                  </span>
                )}
              </div>
              <span style={{ fontWeight: 400, fontSize: 14, color: t.secondary }}>
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA toggle */}
      <div style={{ padding: '16px 8px', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={toggle}
          style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 600,
            fontSize: 16, lineHeight: '24px',
            padding: '8px 16px', borderRadius: 8,
            border: `1px solid ${t.ctaBorder}`,
            backgroundColor: 'transparent', color: t.main,
            cursor: 'pointer', width: '100%',
          }}
        >
          {isExpanded ? 'Hide more options' : 'More options'}
        </button>
      </div>
    </div>
  )
}
