import { useState } from 'react'

// ---------------------------------------------------------------------------
// Color tokens — from Check boxes and radio buttons.md + Switch.md
// ---------------------------------------------------------------------------
const LIGHT = {
  off: '#546073',       // FG/Neutral Secondary
  on: '#2A7DA7',        // Teal/04
  main: '#1C2026',      // FG/Neutral Main
  secondary: '#546073', // FG/Neutral Secondary
  primary: '#2A7DA7',   // FG/Primary
  pillBg: '#1F7C3E',    // Green/05
  pillText: '#FFFFFF',
  trackOff: '#8F9BAE',  // Grey/04
  trackOn: '#2A7DA7',   // Teal/04
  knob: '#FFFFFF',
}

const DARK = {
  off: '#8F9BAE',       // Dark/FG/Neutral Secondary
  on: '#6FA7C3',        // Dark/Teal/04
  main: '#ECEFF4',      // Dark/FG/Neutral Main
  secondary: '#8F9BAE', // Dark/FG/Neutral Secondary
  primary: '#6FA7C3',   // Dark/FG/Primary
  pillBg: '#1F7C3E',
  pillText: '#FFFFFF',
  trackOff: '#5E6D82',  // Dark/Grey/04
  trackOn: '#6FA7C3',   // Dark/Teal/04
  knob: '#FFFFFF',
}

// ---------------------------------------------------------------------------
// Radio — atomic radio indicator (24x24)
// ---------------------------------------------------------------------------
export function Radio({ checked = false, darkMode = false, onChange, disabled = false }) {
  const t = darkMode ? DARK : LIGHT
  const color = checked ? t.on : t.off

  return (
    <button
      role="radio"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      style={{
        width: 24, height: 24, padding: 2,
        background: 'none', border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="2" />
        {checked && <circle cx="10" cy="10" r="5" fill={color} />}
      </svg>
    </button>
  )
}

// ---------------------------------------------------------------------------
// Checkbox — atomic checkbox indicator (24x24, icon 18x18)
// ---------------------------------------------------------------------------
export function Checkbox({ checked = false, darkMode = false, onChange, disabled = false }) {
  const t = darkMode ? DARK : LIGHT
  const color = checked ? t.on : t.off

  return (
    <button
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      style={{
        width: 24, height: 24, padding: 3,
        background: 'none', border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        {checked ? (
          <>
            <rect x="1" y="1" width="16" height="16" rx="2" fill={color} />
            <path d="M4.5 9L7.5 12L13.5 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <rect x="1" y="1" width="16" height="16" rx="2" stroke={color} strokeWidth="2" />
        )}
      </svg>
    </button>
  )
}

// ---------------------------------------------------------------------------
// CheckboxSingle — inline checkbox or radio with a single text label
// ---------------------------------------------------------------------------
export function CheckboxSingle({
  kind = 'Checkbox',
  label = 'Label',
  checked = false,
  darkMode = false,
  onChange,
  disabled = false,
}) {
  const t = darkMode ? DARK : LIGHT

  return (
    <label
      style={{
        fontFamily: 'Inter, sans-serif',
        display: 'inline-flex', alignItems: 'center', gap: 16,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {kind === 'Radio' ? (
        <Radio checked={checked} darkMode={darkMode} onChange={onChange} disabled={disabled} />
      ) : (
        <Checkbox checked={checked} darkMode={darkMode} onChange={onChange} disabled={disabled} />
      )}
      <span style={{
        fontWeight: 400, fontSize: 16, lineHeight: '24px',
        color: t.main,
      }}>
        {label}
      </span>
    </label>
  )
}

// ---------------------------------------------------------------------------
// FormSelect — rich selection row with indicator, title, description,
//   optional pill, tooltip, list, and link
// ---------------------------------------------------------------------------
export function FormSelect({
  kind = 'Checkbox',
  checked = false,
  title = 'Selection title',
  description = 'Description text',
  pill = null,
  tooltip = false,
  list = null,
  link = null,
  darkMode = false,
  onChange,
}) {
  const t = darkMode ? DARK : LIGHT

  return (
    <div
      onClick={onChange}
      style={{
        fontFamily: 'Inter, sans-serif',
        display: 'flex', alignItems: 'flex-start', gap: 16,
        cursor: 'pointer',
      }}
    >
      {kind === 'Radio' ? (
        <Radio checked={checked} darkMode={darkMode} />
      ) : (
        <Checkbox checked={checked} darkMode={darkMode} />
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {/* Header row: title + optional pill + tooltip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '24px', color: t.main }}>
            {title}
          </span>
          {pill && (
            <span style={{
              backgroundColor: t.pillBg, color: t.pillText,
              fontSize: 12, fontWeight: 600, lineHeight: '16px',
              padding: '2px 8px', borderRadius: 8,
            }}>
              {pill}
            </span>
          )}
          {tooltip && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill={t.secondary} style={{ marginLeft: 2 }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          )}
        </div>

        {/* Description */}
        <span style={{ fontWeight: 400, fontSize: 16, lineHeight: '24px', color: t.secondary }}>
          {description}
        </span>

        {/* Optional bulleted list */}
        {list && list.length > 0 && (
          <ul style={{ margin: 0, paddingLeft: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {list.map((item, i) => (
              <li key={i} style={{ fontWeight: 400, fontSize: 14, lineHeight: '20px', color: t.secondary }}>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Optional link */}
        {link && (
          <span style={{ fontWeight: 600, fontSize: 16, lineHeight: '24px', color: t.primary, cursor: 'pointer' }}>
            {link}
          </span>
        )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Switch — toggle switch (Web client from Switch.md)
// Web: 52x33, 28x28 knob, 32px radius
// ---------------------------------------------------------------------------
const SWITCH_SIZES = {
  Web:     { w: 52, h: 33, knob: 28, radius: 32, pad: 2.5 },
  iOS26:   { w: 64, h: 28, knob: 24, radius: 100, pad: 2 },
  iOS18:   { w: 51, h: 31, knob: 27, radius: 100, pad: 2 },
  Android: { w: 34, h: 20, knob: 20, radius: 7, pad: 0 },
}

export function Switch({
  on = false,
  client = 'Web',
  disabled = false,
  darkMode = false,
  onChange,
}) {
  const t = darkMode ? DARK : LIGHT
  const s = SWITCH_SIZES[client] || SWITCH_SIZES.Web
  const isAndroid = client === 'Android'

  // Track color
  let trackColor = on ? t.trackOn : t.trackOff
  if (disabled && isAndroid) {
    trackColor = on ? '#A6C9DA' : '#E8ECF2'
  }

  // Disabled treatment
  const opacity = disabled && !isAndroid ? 0.5 : 1

  // Knob position
  const knobLeft = on ? s.w - s.knob - s.pad : s.pad
  const knobTop = (s.h - s.knob) / 2

  return (
    <button
      role="switch"
      aria-checked={on}
      disabled={disabled}
      onClick={onChange}
      style={{
        position: 'relative',
        width: s.w, height: s.h,
        borderRadius: s.radius,
        backgroundColor: trackColor,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity,
        transition: 'background-color 150ms ease-out',
        padding: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: knobTop, left: knobLeft,
          width: s.knob, height: s.knob,
          borderRadius: s.knob,
          backgroundColor: t.knob,
          boxShadow: client === 'Web'
            ? '0 1px 3px rgba(0,0,0,0.2), inset 0 0 0 0.5px #1C2026'
            : isAndroid
              ? '0 1px 2px rgba(33,33,33,0.08)'
              : '0 1px 3px rgba(0,0,0,0.2)',
          transition: 'left 150ms ease-out',
        }}
      />
    </button>
  )
}
