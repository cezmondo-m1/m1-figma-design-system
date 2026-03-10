// ---------------------------------------------------------------------------
// Tables — from Tables.md
// ---------------------------------------------------------------------------

const LIGHT = {
  main: '#1C2026',
  secondary: '#546073',
  bg: '#FFFFFF',
  bgSub: '#F3F5F8',
  border: '#D4DBE6',
  teal: '#2A7DA7',
  green: '#1F7C3E',
  red: '#B3485A',
}

const DARK = {
  main: '#ECEFF4',
  secondary: '#8F9BAE',
  bg: '#0F1115',
  bgSub: '#1A1E23',
  border: '#2F3641',
  teal: '#6FA7C3',
  green: '#4CAF6E',
  red: '#D08E99',
}

// ---------------------------------------------------------------------------
// TableHeader — sortable column header row
// ---------------------------------------------------------------------------
export function TableHeader({ columns = [], sub = false, darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      display: 'flex', alignItems: 'center',
      padding: sub ? '4px 8px' : '8px 0',
      backgroundColor: sub ? t.bgSub : 'transparent',
      borderBottom: `1px solid ${t.border}`,
    }}>
      {columns.map((col, i) => (
        <div key={i} style={{
          flex: col.flex || 1, minWidth: 0,
          fontWeight: 600, fontSize: 14, lineHeight: '20px',
          color: t.secondary,
          textAlign: col.align || 'left',
          paddingRight: i < columns.length - 1 ? 32 : 0,
        }}>
          {col.label}
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// TableSubHeader — section divider row with tinted background
// ---------------------------------------------------------------------------
export function TableSubHeader({ label = 'Section', darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      padding: '4px 8px',
      backgroundColor: t.bgSub,
      fontWeight: 600, fontSize: 14, lineHeight: '20px',
      color: t.secondary,
    }}>
      {label}
    </div>
  )
}

// ---------------------------------------------------------------------------
// TableRow — data row with flexible columns
// ---------------------------------------------------------------------------
export function TableRow({ cells = [], darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      display: 'flex', alignItems: 'center',
      padding: '12px 0',
      borderBottom: `1px solid ${t.border}`,
    }}>
      {cells.map((cell, i) => (
        <div key={i} style={{
          flex: cell.flex || 1, minWidth: 0,
          display: 'flex', alignItems: 'center', gap: cell.gap || 0,
          textAlign: cell.align || 'left',
          paddingRight: i < cells.length - 1 ? 32 : 0,
        }}>
          {cell.icon && (
            <div style={{
              width: 24, height: 24, borderRadius: 4, flexShrink: 0, marginRight: 16,
              backgroundColor: darkMode ? '#272C35' : '#E8ECF2',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill={t.teal}>
                <rect x="2" y="2" width="10" height="10" rx="2" />
              </svg>
            </div>
          )}
          {cell.image && (
            <div style={{
              width: 32, height: 32, borderRadius: 3.5, flexShrink: 0, marginRight: 12,
              background: darkMode
                ? 'linear-gradient(135deg, #272C35, #1A1E23)'
                : 'linear-gradient(135deg, #E8ECF2, #F3F5F8)',
              border: `2px solid ${t.teal}`,
            }} />
          )}
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{
              fontWeight: cell.bold ? 600 : 400,
              fontSize: cell.large ? 16 : 14,
              lineHeight: cell.large ? '24px' : '20px',
              color: cell.color === 'green' ? t.green : cell.color === 'red' ? t.red : t.main,
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {cell.text}
            </div>
            {cell.sub && (
              <div style={{ fontWeight: 400, fontSize: 12, lineHeight: '16px', color: t.secondary }}>
                {cell.sub}
              </div>
            )}
          </div>
          {cell.pill && (
            <span style={{
              fontSize: 12, lineHeight: '16px', fontWeight: 400,
              padding: '2px 8px', borderRadius: 8, marginLeft: 8, flexShrink: 0,
              backgroundColor: cell.pill === 'danger' ? t.red : (darkMode ? '#272C35' : '#E8ECF2'),
              color: cell.pill === 'danger' ? '#FFFFFF' : t.main,
            }}>
              {cell.pillLabel || cell.pill}
            </span>
          )}
          {cell.caret && (
            <svg width="16" height="16" viewBox="0 0 20 20" fill={t.secondary} style={{ flexShrink: 0, marginLeft: 8 }}>
              <path d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// SlicesTable — composed portfolio holdings table
// ---------------------------------------------------------------------------
export function SlicesTable({ client = 'Web', darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  const isMobile = client === 'Mobile'
  const width = isMobile ? 375 : 700

  const holdings = [
    { ticker: 'AAPL', name: 'Apple Inc.', value: '$12,340.50', gain: '+$1,204.30', pct: '+10.8%', alloc: '8.7%' },
    { ticker: 'MSFT', name: 'Microsoft Corp.', value: '$9,870.25', gain: '+$842.15', pct: '+9.3%', alloc: '6.9%' },
    { ticker: 'GOOGL', name: 'Alphabet Inc.', value: '$7,120.80', gain: '-$310.40', pct: '-4.2%', alloc: '5.0%' },
  ]

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', width, maxWidth: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontWeight: 300, fontSize: 20, lineHeight: '28px', color: t.main }}>Slices</span>
        <span style={{ fontWeight: 400, fontSize: 16, lineHeight: '24px', color: t.secondary, marginLeft: 8 }}>·  3 holdings</span>
      </div>
      {!isMobile && (
        <TableHeader columns={[
          { label: 'Name', flex: 2 }, { label: 'Value' }, { label: 'Gain/Return' }, { label: 'Allocation' },
        ]} darkMode={darkMode} />
      )}
      {holdings.map((h) => isMobile ? (
        <div key={h.ticker} style={{ display: 'flex', alignItems: 'center', padding: '12px 0', borderBottom: `1px solid ${t.border}` }}>
          <div style={{ width: 32, height: 32, borderRadius: 3.5, marginRight: 12, background: darkMode ? 'linear-gradient(135deg, #272C35, #1A1E23)' : 'linear-gradient(135deg, #E8ECF2, #F3F5F8)', border: `2px solid ${t.teal}` }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 400, fontSize: 16, lineHeight: '24px', color: t.main }}>{h.ticker}</div>
            <div style={{ fontWeight: 400, fontSize: 12, lineHeight: '16px', color: t.secondary }}>{h.name}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 400, fontSize: 14, lineHeight: '20px', color: t.main }}>{h.value}</div>
            <div style={{ fontWeight: 600, fontSize: 12, lineHeight: '16px', color: h.gain.startsWith('+') ? t.green : t.red }}>{h.pct}</div>
          </div>
        </div>
      ) : (
        <TableRow key={h.ticker} darkMode={darkMode} cells={[
          { flex: 2, image: true, text: h.ticker, sub: h.name, large: true },
          { text: h.value },
          { text: h.gain, sub: h.pct, color: h.gain.startsWith('+') ? 'green' : 'red' },
          { text: h.alloc },
        ]} />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// SpendTable — composed Spend product table
// ---------------------------------------------------------------------------
export function SpendTable({ client = 'Web', darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  const isMobile = client === 'Mobile'

  const rows = [
    { label: 'Checking', value: '$4,230.00', status: 'Active', danger: false },
    { label: 'Credit Card', value: '$1,842.50', status: 'Past Due', danger: true },
  ]

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', width: isMobile ? 375 : 700, maxWidth: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontWeight: 300, fontSize: 20, lineHeight: '28px', color: t.main }}>Spend</span>
      </div>
      <TableSubHeader label="Accounts" darkMode={darkMode} />
      {rows.map((r) => (
        <TableRow key={r.label} darkMode={darkMode} cells={[
          { flex: 2, icon: true, text: r.label, large: true },
          { text: r.value },
          { text: '', pill: r.danger ? 'danger' : 'neutral', pillLabel: r.status },
          ...(!isMobile ? [{ text: '', caret: true }] : []),
        ]} />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// EarnTable — composed Earn product table
// ---------------------------------------------------------------------------
export function EarnTable({ client = 'Web', darkMode = false }) {
  const t = darkMode ? DARK : LIGHT
  const isMobile = client === 'Mobile'

  const rows = [
    { label: 'High-Yield Cash', value: '$18,500.00', apy: '4.50% APY' },
    { label: 'Savings', value: '$5,200.00', apy: '3.75% APY' },
  ]

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', width: isMobile ? 375 : 700, maxWidth: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontWeight: 300, fontSize: 20, lineHeight: '28px', color: t.main }}>Earn</span>
      </div>
      {rows.map((r) => (
        <TableRow key={r.label} darkMode={darkMode} cells={[
          { flex: 2, icon: true, text: r.label, large: true },
          { text: r.value },
          { text: r.apy, color: 'green' },
        ]} />
      ))}
    </div>
  )
}
