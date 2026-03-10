import { useState } from 'react'

// ---------------------------------------------------------------------------
// Color tokens — from M1 Intelligence Panel.md
// ---------------------------------------------------------------------------
const LIGHT = {
  bg: '#FFFFFF',
  main: '#1C2026',
  secondary: '#546073',
  border: '#D4DBE6',
  fieldBorder: '#8F9BAE',
  grey02: '#E8ECF2',
  grey04: '#8F9BAE',
  subtitle: '#000000',
  badgeBg: '#D6A55C',
  footerLink: '#1F5B7A',
}

const DARK = {
  bg: '#0F1115',
  main: '#ECEFF4',
  secondary: '#8F9BAE',
  border: '#2F3641',
  fieldBorder: '#5E6D82',
  grey02: '#272C35',
  grey04: '#5E6D82',
  subtitle: '#ECEFF4',
  badgeBg: '#D6A55C',
  footerLink: '#A6C9DA',
}

const SUGGESTIONS = [
  'Did I earn dividends this month?',
  'Strategies to diversify my portfolio',
  "What's the latest market news?",
  'Am I out performing the S&P 500?',
  'Metrics to consider when evaluating holdings',
]

// ---------------------------------------------------------------------------
// M1 Intelligence Panel — Compact (360px)
// ---------------------------------------------------------------------------
export default function IntelligencePanel({
  darkMode = false,
  userName = 'Taylor',
  activeTab = 'Chat',
  onClose,
}) {
  const t = darkMode ? DARK : LIGHT
  const [tab, setTab] = useState(activeTab)

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      width: 360, maxWidth: '100%',
      backgroundColor: t.bg,
      borderRadius: 16,
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
      border: `1px solid ${t.border}`,
      height: 680,
    }}>
      {/* 1. Header bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '12px 16px',
      }}>
        <span style={{ fontWeight: 400, fontSize: 14, lineHeight: '20px', color: t.main, flex: 1 }}>
          New chat
        </span>
        {/* expandScreen20 */}
        <HeaderIcon darkMode={darkMode} t={t}>
          <path d="M4 14v2h4v-2H4zM16 8V6h-4v2h4zM3 3h18v18H3V3zm2 2v14h14V5H5z" />
        </HeaderIcon>
        {/* create20 */}
        <HeaderIcon darkMode={darkMode} t={t}>
          <path d="M10 3v7H3v2h7v7h2v-7h7v-2h-7V3h-2z" />
        </HeaderIcon>
        {/* moreVert20 */}
        <HeaderIcon darkMode={darkMode} t={t}>
          <path d="M10 3a2 2 0 110 4 2 2 0 010-4zm0 5a2 2 0 110 4 2 2 0 010-4zm0 5a2 2 0 110 4 2 2 0 010-4z" />
        </HeaderIcon>
        {/* close20 */}
        <HeaderIcon darkMode={darkMode} t={t} onClick={onClose}>
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </HeaderIcon>
      </div>

      {/* 2. Tab bar */}
      <div style={{
        display: 'flex', gap: 40,
        borderBottom: `1px solid ${t.border}`,
        padding: '0 16px',
      }}>
        {['Chat', 'History'].map((label) => {
          const isActive = tab === label
          return (
            <button
              key={label}
              onClick={() => setTab(label)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: isActive ? 600 : 400,
                fontSize: 14, lineHeight: '20px',
                color: isActive ? t.main : t.secondary,
                padding: '20px 12px 16px',
                border: 'none', backgroundColor: 'transparent',
                borderBottom: isActive ? `2px solid ${t.main}` : '2px solid transparent',
                cursor: 'pointer',
                marginBottom: -1,
              }}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* 3–4. Content area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 16px', display: 'flex', flexDirection: 'column' }}>
        {tab === 'Chat' ? (
          <>
            {/* Welcome */}
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ margin: 0, fontWeight: 500, fontSize: 28, lineHeight: '32px', color: t.main }}>
                Hello, {userName}
              </h2>
              <p style={{ margin: '16px 0 0', fontWeight: 400, fontSize: 18, lineHeight: '24px', color: t.subtitle }}>
                Ask about your portfolio, compare holdings, and more.
              </p>
            </div>

            {/* Suggestion prompts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SUGGESTIONS.map((text) => (
                <button
                  key={text}
                  style={{
                    fontFamily: 'Inter, sans-serif', fontWeight: 600,
                    fontSize: 12, lineHeight: '16px',
                    padding: '8px 16px', borderRadius: 16,
                    border: `2px solid ${t.border}`,
                    backgroundColor: 'transparent', color: t.main,
                    cursor: 'pointer', textAlign: 'left',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}
                >
                  {/* add16 */}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill={t.main} style={{ flexShrink: 0 }}>
                    <path d="M10 3v7H3v2h7v7h2v-7h7v-2h-7V3h-2z" />
                  </svg>
                  <span style={{ flex: 1 }}>{text}</span>
                  {/* caretDown16 */}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill={t.secondary} style={{ flexShrink: 0 }}>
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
              ))}
            </div>
          </>
        ) : (
          /* History placeholder */
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 14, color: t.secondary }}>No conversation history</span>
          </div>
        )}

        <div style={{ flex: 1 }} />
      </div>

      {/* 5. Chat input field */}
      <div style={{ padding: '0 16px 12px' }}>
        <div style={{
          border: `1px solid ${t.fieldBorder}`,
          borderRadius: 12, padding: 12,
          backgroundColor: t.bg,
          display: 'flex', alignItems: 'flex-end', gap: 12,
        }}>
          <div style={{ flex: 1 }}>
            <span style={{
              fontWeight: 400, fontSize: 14, lineHeight: '20px',
              color: t.secondary,
            }}>
              Ask M1 Intelligence
            </span>
          </div>
          {/* Send button */}
          <div style={{
            width: 40, height: 40, borderRadius: 40, flexShrink: 0,
            backgroundColor: t.grey02,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill={t.grey04}>
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        {/* Helper text */}
        <div style={{ paddingTop: 8 }}>
          <span style={{ fontWeight: 400, fontSize: 12, lineHeight: '16px', color: t.grey04 }}>
            Helper text
          </span>
        </div>
      </div>

      {/* 6. Footer */}
      <div style={{
        padding: '0 16px 16px',
        display: 'flex', flexDirection: 'column', gap: 16,
        alignItems: 'center',
      }}>
        {/* Badge + disclaimer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{
            fontSize: 12, lineHeight: '16px', fontWeight: 400,
            padding: '2px 10px', borderRadius: 16,
            backgroundColor: t.badgeBg, color: '#1C2026',
            display: 'inline-flex', alignItems: 'center', gap: 4,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="#1C2026" style={{ flexShrink: 0 }}>
              <path d="M7 1l1.76 3.57L12.5 5.36l-2.75 2.68.65 3.78L7 10.07 3.6 11.82l.65-3.78L1.5 5.36l3.74-.79L7 1z" />
            </svg>
            Early Beta
          </span>
          <span style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, color: t.secondary, textAlign: 'center' }}>
            AI-generated. May contain errors. Not financial advice.
          </span>
        </div>
        {/* Links */}
        <div style={{ display: 'flex', gap: 16 }}>
          <span style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, color: t.footerLink, cursor: 'pointer' }}>
            M1's AI Terms of Use
          </span>
          <span style={{ fontSize: 12, lineHeight: '16px', fontWeight: 400, color: t.footerLink, cursor: 'pointer' }}>
            Disclosures
          </span>
        </div>
      </div>
    </div>
  )
}

// Small helper for header icon buttons
function HeaderIcon({ children, darkMode, t, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 28, height: 28, borderRadius: 4,
        border: 'none', backgroundColor: 'transparent',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 0,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = darkMode ? '#272C35' : '#E8ECF2' }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill={t.main}>
        {children}
      </svg>
    </button>
  )
}
