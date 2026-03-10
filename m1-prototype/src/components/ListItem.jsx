// ---------------------------------------------------------------------------
// List Items — from List Items.md
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Color tokens
// ---------------------------------------------------------------------------
const LIGHT = {
  main: '#1C2026',
  secondary: '#546073',
  pillBg: '#1F7C3E',
  pillText: '#FFFFFF',
  green: '#1F7C3E',
  border: '#D4DBE6',
}

const DARK = {
  main: '#ECEFF4',
  secondary: '#8F9BAE',
  pillBg: '#1F7C3E',
  pillText: '#FFFFFF',
  green: '#4CAF6E',
  border: '#2F3641',
}

// ---------------------------------------------------------------------------
// .To-Do-List — leading indicator (Completed / Remaining / Dot)
// ---------------------------------------------------------------------------
export function ToDoList({ state = 'Completed', number = 1, darkMode = false }) {
  const t = darkMode ? DARK : LIGHT

  if (state === 'Completed') {
    return (
      <div style={{
        width: 24, height: 24, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill={t.green}>
          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
        </svg>
      </div>
    )
  }

  return (
    <div style={{
      width: 24, height: 24, borderRadius: 24, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '24px',
      color: darkMode ? t.main : '#000000',
    }}>
      {state === 'Dot' ? '•' : number}
    </div>
  )
}

// ---------------------------------------------------------------------------
// BasicListItem — description row (web: Paragraph/Bulleted/Numbered,
//                                   mobile: + Icon variant)
// ---------------------------------------------------------------------------
export function BasicListItem({
  client = 'Web',
  variant = 'Paragraph',
  text = 'Description text',
  showCaret = true,
  darkMode = false,
}) {
  const t = darkMode ? DARK : LIGHT
  const hasIcon = client === 'Mobile' && variant === 'Icon'

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      display: 'flex', alignItems: 'center', gap: 12,
      height: 40,
      width: client === 'Mobile' && hasIcon ? 410 : 374,
      maxWidth: '100%',
    }}>
      {hasIcon && (
        <div style={{
          width: 32, height: 32, borderRadius: 4, flexShrink: 0,
          backgroundColor: darkMode ? '#272C35' : '#E8ECF2',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill={t.main}>
            <rect x="3" y="3" width="10" height="10" rx="2" />
          </svg>
        </div>
      )}
      <span style={{
        flex: 1, fontWeight: 400, fontSize: 14, lineHeight: '20px',
        color: t.secondary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}>
        {text}
      </span>
      {showCaret && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill={t.main} style={{ flexShrink: 0 }}>
          <path d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" />
        </svg>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// listItem — rich list item with title, label, pill, descriptions, icon, caret
// ---------------------------------------------------------------------------
export default function ListItem({
  type = 'Large',
  client = 'Mobile',
  title = 'List item title',
  label = 'Label text',
  pill = null,
  descriptions = [],
  hasIcon = true,
  hasCaret = true,
  darkMode = false,
}) {
  const t = darkMode ? DARK : LIGHT
  const isMobile = client === 'Mobile'
  const padY = isMobile ? 16 : 32
  const padX = isMobile ? 0 : 24

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      padding: `${padY}px ${padX}px`,
      display: 'flex', alignItems: 'flex-start', gap: 16,
      maxWidth: '100%',
    }}>
      {/* Leading icon */}
      {hasIcon && (
        <div style={{
          width: 40, height: 40, borderRadius: 8, flexShrink: 0,
          backgroundColor: darkMode ? '#272C35' : '#E8ECF2',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill={t.main}>
            <rect x="3" y="3" width="14" height="14" rx="3" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
        {/* Title */}
        <span style={{ fontWeight: 600, fontSize: 20, lineHeight: '28px', color: t.main }}>
          {title}
        </span>

        {/* Label + pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 400, fontSize: 16, lineHeight: '24px', color: t.main }}>
            {label}
          </span>
          {pill && (
            <span style={{
              fontSize: 12, lineHeight: '16px', fontWeight: 400,
              padding: '2px 8px', borderRadius: 10,
              backgroundColor: t.pillBg, color: t.pillText,
            }}>
              {pill}
            </span>
          )}
        </div>

        {/* Description rows */}
        {descriptions.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {descriptions.map((desc, i) => (
              <BasicListItem
                key={i}
                client={client}
                variant={desc.variant || 'Paragraph'}
                text={desc.text || desc}
                showCaret={desc.showCaret ?? true}
                darkMode={darkMode}
              />
            ))}
          </div>
        )}
      </div>

      {/* Trailing caret */}
      {hasCaret && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={isMobile ? t.main : t.secondary} style={{ flexShrink: 0, marginTop: 2 }}>
          <path d="M8.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L13.586 12 8.293 6.707a1 1 0 010-1.414z" />
        </svg>
      )}
    </div>
  )
}
