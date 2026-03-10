import { useState } from 'react'

// ---------------------------------------------------------------------------
// Inputs — from Input.md (Inputs, Large inputs, Search inputs)
// ---------------------------------------------------------------------------

const LIGHT = {
  main: '#1C2026',
  secondary: '#546073',
  border: '#8F9BAE',
  borderMain: '#D4DBE6',
  active: '#2A7DA7',
  error: '#C4382E',
  disabled: '#8F9BAE',
  bg: '#FFFFFF',
  bgDisabled: '#F3F5F8',
  hoverBg: '#E5EFF4',
  iosBg: '#E9EDF2',
}

const DARK = {
  main: '#ECEFF4',
  secondary: '#8F9BAE',
  border: '#5E6D82',
  borderMain: '#2F3641',
  active: '#6FA7C3',
  error: '#D08E99',
  disabled: '#5E6D82',
  bg: '#0F1115',
  bgDisabled: '#1A1E23',
  hoverBg: '#1A2A35',
  iosBg: '#1A1E23',
}

// ---------------------------------------------------------------------------
// FormField — Default Input (Flat or Elevated)
// ---------------------------------------------------------------------------
export function FormField({
  label = 'Label',
  value = '',
  placeholder = 'Input text',
  helperText = 'Helper text',
  state = 'Default',
  kind = 'Flat',
  type = 'Text',
  prefix = '',
  suffix = '',
  darkMode = false,
  onChange,
}) {
  const t = darkMode ? DARK : LIGHT
  const [focused, setFocused] = useState(false)
  const isActive = state === 'Active' || focused
  const isError = state === 'Error'
  const isDisabled = state === 'Disabled'
  const isFilled = state === 'Filled' || value.length > 0
  const isFlat = kind === 'Flat'

  const borderColor = isError ? t.error : isActive ? t.active : isDisabled ? t.borderMain : t.border
  const borderWidth = isActive || isError ? 2 : 1
  const labelColor = isError ? t.error : isActive ? t.active : isDisabled ? t.disabled : t.secondary
  const inputColor = isDisabled ? t.disabled : isFilled || isActive ? t.main : t.secondary
  const helperColor = isError ? t.error : t.secondary
  const bg = isDisabled ? t.bgDisabled : t.bg
  const floated = isActive || isFilled

  const isDropdown = type === 'Dropdown'
  const isDate = type === 'Date'

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', width: '100%' }}>
      <div
        style={{
          position: 'relative',
          height: 56,
          backgroundColor: bg,
          ...(isFlat ? {
            borderBottom: `${borderWidth}px solid ${borderColor}`,
          } : {
            border: `${borderWidth}px solid ${borderColor}`,
            borderRadius: 8,
            padding: '0 16px',
          }),
          display: 'flex', alignItems: 'flex-end',
          paddingBottom: 8,
          paddingTop: 16,
          opacity: isDisabled ? 0.7 : 1,
        }}
      >
        {/* Floating label */}
        <span style={{
          position: 'absolute',
          left: isFlat ? 0 : 16,
          top: floated ? 4 : 16,
          fontSize: floated ? 12 : 16,
          lineHeight: floated ? '16px' : '24px',
          fontWeight: 400,
          color: labelColor,
          transition: 'all 150ms ease-out',
          pointerEvents: 'none',
        }}>
          {label}
        </span>

        {/* Prefix */}
        {prefix && floated && (
          <span style={{ fontSize: 16, lineHeight: '24px', color: t.secondary, marginRight: 4, flexShrink: 0 }}>
            {prefix}
          </span>
        )}

        {/* Input / display */}
        <input
          type={isDate ? 'date' : 'text'}
          value={value}
          placeholder={floated ? placeholder : ''}
          disabled={isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange?.(e.target.value)}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16, lineHeight: '24px', fontWeight: 400,
            color: inputColor,
            border: 'none', outline: 'none',
            backgroundColor: 'transparent',
            flex: 1, minWidth: 0,
            padding: 0,
            cursor: isDisabled ? 'not-allowed' : 'text',
          }}
        />

        {/* Suffix */}
        {suffix && floated && (
          <span style={{ fontSize: 16, lineHeight: '24px', color: t.secondary, marginLeft: 4, flexShrink: 0 }}>
            {suffix}
          </span>
        )}

        {/* Dropdown chevron */}
        {isDropdown && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill={t.main} style={{ flexShrink: 0, marginLeft: 4 }}>
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        )}

        {/* Date calendar icon */}
        {isDate && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill={t.main} style={{ flexShrink: 0, marginLeft: 4 }}>
            <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" />
          </svg>
        )}

        {/* Error icon */}
        {isError && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill={t.error} style={{ flexShrink: 0, marginLeft: 4 }}>
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 3a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1zm0 8a1 1 0 100 2 1 1 0 000-2z" />
          </svg>
        )}
      </div>

      {/* Helper text */}
      {helperText && (
        <div style={{
          marginTop: 4,
          fontSize: 12, lineHeight: '16px', fontWeight: 400,
          color: helperColor,
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          {isError && (
            <svg width="12" height="12" viewBox="0 0 20 20" fill={t.error} style={{ flexShrink: 0 }}>
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 3a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1zm0 8a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          )}
          {helperText}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// MultilineInput — Large multiline text area
// ---------------------------------------------------------------------------
export function MultilineInput({
  label = 'Label',
  value = '',
  placeholder = 'Input text',
  helperText = 'Helper text',
  state = 'Default',
  maxLength = 250,
  darkMode = false,
  onChange,
}) {
  const t = darkMode ? DARK : LIGHT
  const [focused, setFocused] = useState(false)
  const isActive = state === 'Active' || focused
  const isError = state === 'Error'
  const isDisabled = state === 'Disabled'
  const isFilled = state === 'Filled' || value.length > 0
  const floated = isActive || isFilled

  const borderColor = isError ? t.error : isActive ? t.active : isDisabled ? t.borderMain : t.border
  const borderWidth = isActive || isError ? 2 : 1
  const labelColor = isError ? t.error : isActive ? t.active : isDisabled ? t.disabled : t.secondary
  const inputColor = isDisabled ? t.disabled : isFilled || isActive ? t.main : t.secondary
  const helperColor = isError ? t.error : t.secondary
  const bg = isDisabled ? t.bgDisabled : t.bg
  const overLimit = value.length > maxLength

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', width: '100%' }}>
      <div style={{
        position: 'relative',
        minHeight: 136,
        backgroundColor: bg,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: 8,
        padding: '16px 16px 8px',
        display: 'flex', flexDirection: 'column',
        opacity: isDisabled ? 0.7 : 1,
      }}>
        {/* Floating label */}
        <span style={{
          fontSize: floated ? 12 : 16,
          lineHeight: floated ? '16px' : '24px',
          fontWeight: 400,
          color: labelColor,
          transition: 'all 150ms ease-out',
          pointerEvents: 'none',
          marginBottom: floated ? 4 : 0,
        }}>
          {label}
        </span>

        <textarea
          value={value}
          placeholder={floated ? placeholder : ''}
          disabled={isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange?.(e.target.value)}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16, lineHeight: '24px', fontWeight: 400,
            color: inputColor,
            border: 'none', outline: 'none',
            backgroundColor: 'transparent',
            flex: 1, minHeight: 60, resize: 'vertical',
            padding: 0,
            cursor: isDisabled ? 'not-allowed' : 'text',
          }}
        />

        {/* Character count */}
        <div style={{
          textAlign: 'right',
          fontSize: 12, lineHeight: '16px', fontWeight: 400,
          color: overLimit ? t.error : t.secondary,
          marginTop: 4,
        }}>
          {value.length}/{maxLength}
        </div>
      </div>

      {/* Helper text */}
      {helperText && (
        <div style={{
          marginTop: 4,
          fontSize: 12, lineHeight: '16px', fontWeight: 400,
          color: helperColor,
        }}>
          {helperText}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// SearchField — Search input with platform variants
// ---------------------------------------------------------------------------
export function SearchField({
  device = 'Web',
  state = 'Default',
  value = '',
  label = '',
  darkMode = false,
  onChange,
}) {
  const t = darkMode ? DARK : LIGHT
  const [focused, setFocused] = useState(false)
  const isHover = state === 'Hover'
  const isEntered = state === 'Entered' || focused
  const isDisabled = state === 'Disabled'

  const isIOS = device === 'iOS'
  const isAndroid = device === 'Android'

  const borderColor = isEntered || isHover ? t.active : isDisabled ? t.borderMain : t.border
  const inputBg = isDisabled ? t.bg
    : isHover ? t.hoverBg
    : isIOS && !isEntered ? t.iosBg
    : t.bg
  const textColor = isDisabled ? t.disabled : isEntered ? t.main : t.secondary

  const height = isIOS ? 36 : 48
  const radius = device === 'Web' ? 32 : isIOS ? 8 : 12
  const px = isIOS ? 12 : 16

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: 8 }}>
      {/* Label */}
      {label && (
        <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 400, color: t.secondary, flexShrink: 0 }}>
          {label}
        </span>
      )}

      <div style={{
        height,
        borderRadius: radius,
        border: `1px solid ${borderColor}`,
        backgroundColor: inputBg,
        display: 'flex', alignItems: 'center',
        padding: `0 ${px}px`,
        flex: 1,
        opacity: isDisabled ? 0.7 : 1,
      }}>
        {/* Search icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill={t.secondary} style={{ flexShrink: 0, marginRight: 8 }}>
          <path d="M8 3a5 5 0 104.383 7.39l3.614 3.613a1 1 0 01-1.414 1.414l-3.614-3.614A5 5 0 018 3zm0 2a3 3 0 100 6 3 3 0 000-6z" />
        </svg>

        <input
          type="text"
          value={value}
          placeholder="Search"
          disabled={isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange?.(e.target.value)}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16, lineHeight: '24px', fontWeight: 400,
            color: textColor,
            border: 'none', outline: 'none',
            backgroundColor: 'transparent',
            flex: 1, minWidth: 0,
            padding: 0,
            cursor: isDisabled ? 'not-allowed' : 'text',
          }}
        />

        {/* Clear button when entered */}
        {isEntered && value && (
          <button
            onClick={() => onChange?.('')}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0, marginLeft: 8, flexShrink: 0 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill={t.secondary}>
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        )}
      </div>

      {/* iOS Cancel button */}
      {isIOS && isEntered && (
        <span style={{
          fontSize: 16, lineHeight: '24px', fontWeight: 400,
          color: t.active, cursor: 'pointer', flexShrink: 0,
        }}>
          Cancel
        </span>
      )}
    </div>
  )
}
