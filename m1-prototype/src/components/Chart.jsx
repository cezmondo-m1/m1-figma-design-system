import { useState } from 'react'

// ---------------------------------------------------------------------------
// Color tokens — from Charts.md
// ---------------------------------------------------------------------------
const LIGHT = {
  main: '#1C2026',
  secondary: '#546073',
  primary: '#2A7DA7',
  bg: '#FFFFFF',
  grey02: '#E8ECF2',
  grey03: '#D4DBE6',
  grey04: '#8F9BAE',
  teal01: '#E5EFF4',
  teal04: '#2A7DA7',
  blue03: '#99ADD5',
  blue04: '#3C5A94',
  blue05: '#152B56',
  chartArea: '#99ADD5',
  axisLabel: '#636363',
  axisDivider: '#DDDDDD',
}

const DARK = {
  main: '#ECEFF4',
  secondary: '#8F9BAE',
  primary: '#6FA7C3',
  bg: '#0F1115',
  grey02: '#272C35',
  grey03: '#2F3641',
  grey04: '#5E6D82',
  teal01: '#0D2531',
  teal04: '#6FA7C3',
  blue03: '#6E8BC3',
  blue04: '#6E8BC3',
  blue05: '#3C5A94',
  chartArea: '#3C5A94',
  axisLabel: '#8F9BAE',
  axisDivider: '#2F3641',
}

// Gauge health colors
const GAUGE_COLORS = {
  green03: '#92D2A8',
  green05: '#1F7C3E',
  yellow03: '#EDD17B',
  yellow05: '#7A631F',
  red03: '#D08E99',
  red04: '#B3485A',
  red05: '#771E2D',
}

// ---------------------------------------------------------------------------
// ChartTabs — time period selector tabs
// ---------------------------------------------------------------------------
export function ChartTabs({ tabs = ['1W','1M','3M','6M','YTD','1Y','3Y','ALL'], active = '3M', onChange, darkMode = false }) {
  const t = darkMode ? DARK : LIGHT

  return (
    <div style={{ display: 'flex', gap: 0, borderRadius: 8, overflow: 'hidden' }}>
      {tabs.map((tab) => {
        const isActive = tab === active
        return (
          <button
            key={tab}
            onClick={() => onChange?.(tab)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: isActive ? 600 : 400,
              fontSize: 12, lineHeight: '16px',
              padding: '4px 10px',
              border: 'none',
              cursor: 'pointer',
              color: isActive ? t.primary : t.secondary,
              backgroundColor: isActive ? (darkMode ? t.teal01 : t.teal01) : 'transparent',
              borderBottom: isActive ? `2px solid ${t.teal04}` : '2px solid transparent',
              transition: 'all 100ms ease-out',
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.backgroundColor = t.grey02
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

// ---------------------------------------------------------------------------
// ChartOverflow — overflow menu icon button
// ---------------------------------------------------------------------------
export function ChartOverflow({ state = 'Default', darkMode = false, onClick }) {
  const t = darkMode ? DARK : LIGHT
  const isActive = state === 'Active'

  return (
    <button
      onClick={onClick}
      style={{
        width: 24, height: 24, borderRadius: 4, border: 'none',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: isActive ? t.teal01 : 'transparent',
        transition: 'background-color 100ms ease-out',
      }}
      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = t.grey02 }}
      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = isActive ? t.teal01 : 'transparent' }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill={isActive ? t.primary : t.secondary}>
        <circle cx="8" cy="3" r="1.5" />
        <circle cx="8" cy="8" r="1.5" />
        <circle cx="8" cy="13" r="1.5" />
      </svg>
    </button>
  )
}

// ---------------------------------------------------------------------------
// TabularData — label + value row
// ---------------------------------------------------------------------------
export function TabularData({
  label = 'Label',
  value = '$0.00',
  type = 'Default',
  size = 'Default',
  darkMode = false,
  onClick,
}) {
  const t = darkMode ? DARK : LIGHT
  const isLink = type === 'Link'
  const valueFontSize = size === 'Large' ? 16 : 14
  const valueLineHeight = size === 'Large' ? '24px' : '20px'

  return (
    <div
      onClick={isLink ? onClick : undefined}
      style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        gap: 12, cursor: isLink ? 'pointer' : 'default',
      }}
    >
      <span style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, lineHeight: '16px',
        color: t.secondary,
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 400,
        fontSize: valueFontSize, lineHeight: valueLineHeight,
        color: isLink ? t.primary : t.main,
        textDecoration: isLink ? 'none' : undefined,
      }}>
        {value}
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// DataSet — group of tabularData rows with accent border
// ---------------------------------------------------------------------------
export function DataSet({
  rows = [],
  layout = 'Rows',
  border = 'Left',
  size = 'Default',
  darkMode = false,
}) {
  const t = darkMode ? DARK : LIGHT
  const isRows = layout === 'Rows'
  const borderStyle = border === 'Left'
    ? { borderLeft: `3px solid ${t.blue03}`, paddingLeft: 12 }
    : { borderBottom: `1px solid ${t.grey03}`, paddingBottom: 12 }

  return (
    <div style={{
      ...borderStyle,
      display: 'flex',
      flexDirection: isRows ? 'column' : 'row',
      gap: 12,
      ...(isRows ? {} : { flexWrap: 'wrap' }),
    }}>
      {rows.map((row, i) => (
        <div key={i} style={isRows ? {} : { flex: '1 1 0', minWidth: 100 }}>
          <TabularData label={row.label} value={row.value} size={size} darkMode={darkMode} type={row.type} />
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// GaugeChart — semi-circle gauge with center value
// ---------------------------------------------------------------------------
export function GaugeChart({
  value = 72,
  label = '',
  segments = null,
  showInfo = true,
  darkMode = false,
}) {
  const t = darkMode ? DARK : LIGHT
  const defaultSegments = [
    { color: t.teal04, weight: 40 },
    { color: t.blue04, weight: 30 },
    { color: t.blue05, weight: 30 },
  ]
  const segs = segments || defaultSegments
  const total = segs.reduce((sum, s) => sum + s.weight, 0)

  // Build arc paths for a 180-degree gauge
  const cx = 100, cy = 100, r = 80, strokeWidth = 16
  const startAngle = Math.PI
  let currentAngle = startAngle

  const arcs = segs.map((seg) => {
    const sweep = (seg.weight / total) * Math.PI
    const x1 = cx + r * Math.cos(currentAngle)
    const y1 = cy + r * Math.sin(currentAngle)
    const endAngle = currentAngle + sweep
    const x2 = cx + r * Math.cos(endAngle)
    const y2 = cy + r * Math.sin(endAngle)
    const largeArc = sweep > Math.PI ? 1 : 0
    const d = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`
    currentAngle = endAngle
    return { d, color: seg.color }
  })

  // Track (remaining unfilled)
  const filledSweep = Math.PI
  const trackX1 = cx + r * Math.cos(startAngle)
  const trackY1 = cy + r * Math.sin(startAngle)
  const trackX2 = cx + r * Math.cos(startAngle + filledSweep)
  const trackY2 = cy + r * Math.sin(startAngle + filledSweep)
  const trackD = `M ${trackX1} ${trackY1} A ${r} ${r} 0 0 1 ${trackX2} ${trackY2}`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <svg width="200" height="110" viewBox="0 0 200 110">
        {/* Track background */}
        <path d={trackD} fill="none" stroke={t.grey02} strokeWidth={strokeWidth} strokeLinecap="round" />
        {/* Segments */}
        {arcs.map((arc, i) => (
          <path key={i} d={arc.d} fill="none" stroke={arc.color} strokeWidth={strokeWidth} strokeLinecap="round" />
        ))}
        {/* Center value */}
        <text x={cx} y={cy - 4} textAnchor="middle" style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 42, fill: t.main,
        }}>
          {value}%
        </text>
      </svg>
      {showInfo && label && (
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', color: t.secondary }}>
          {label}
        </span>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// MarginHealthGauge — gauge with health states (good/warning/danger/critical/empty)
// ---------------------------------------------------------------------------
export function MarginHealthGauge({ state = 'good', value = 75, darkMode = false }) {
  const t = darkMode ? DARK : LIGHT

  const stateConfig = {
    good:     { indicator: GAUGE_COLORS.green05, needlePos: 0.15 },
    warning:  { indicator: GAUGE_COLORS.yellow05, needlePos: 0.40 },
    danger:   { indicator: GAUGE_COLORS.red04, needlePos: 0.65 },
    critical: { indicator: GAUGE_COLORS.red05, needlePos: 0.85 },
    empty:    { indicator: t.grey04, needlePos: 0.5 },
  }
  const cfg = stateConfig[state] || stateConfig.good

  const isEmptyState = state === 'empty'
  const segments = isEmptyState
    ? [
        { color: t.grey03, weight: 50 },
        { color: t.grey02, weight: 50 },
      ]
    : [
        { color: GAUGE_COLORS.green03, weight: 25 },
        { color: GAUGE_COLORS.yellow03, weight: 25 },
        { color: GAUGE_COLORS.red03, weight: 25 },
        { color: GAUGE_COLORS.red04, weight: 25 },
      ]

  // Build arcs
  const cx = 100, cy = 100, r = 80, strokeWidth = 16
  const startAngle = Math.PI
  const totalWeight = segments.reduce((s, seg) => s + seg.weight, 0)
  let currentAngle = startAngle

  const arcs = segments.map((seg) => {
    const sweep = (seg.weight / totalWeight) * Math.PI
    const x1 = cx + r * Math.cos(currentAngle)
    const y1 = cy + r * Math.sin(currentAngle)
    const endAngle = currentAngle + sweep
    const x2 = cx + r * Math.cos(endAngle)
    const y2 = cy + r * Math.sin(endAngle)
    const d = `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`
    currentAngle = endAngle
    return { d, color: seg.color }
  })

  // Needle position
  const needleAngle = startAngle + cfg.needlePos * Math.PI
  const needleLen = r - strokeWidth
  const nx = cx + needleLen * Math.cos(needleAngle)
  const ny = cy + needleLen * Math.sin(needleAngle)

  const stateLabels = { good: 'Good', warning: 'Warning', danger: 'Danger', critical: 'Critical', empty: 'No data' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <svg width="200" height="115" viewBox="0 0 200 115">
        {arcs.map((arc, i) => (
          <path key={i} d={arc.d} fill="none" stroke={arc.color} strokeWidth={strokeWidth} strokeLinecap="butt" />
        ))}
        {/* Needle */}
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={cfg.indicator} strokeWidth={3} strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={4} fill={cfg.indicator} />
        {/* State label */}
        <text x={cx} y={cy + 16} textAnchor="middle" style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, fill: cfg.indicator,
        }}>
          {stateLabels[state]}
        </text>
      </svg>
      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: t.secondary }}>
        Margin health
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// LineChart — line chart with area fill, tabs, and axis labels
// ---------------------------------------------------------------------------
export function LineChart({
  title = 'Chart Title',
  value = '',
  change = '',
  changePositive = true,
  size = 'Desktop',
  state = 'Default',
  noDataMessage = 'No data available',
  points = null,
  xLabels = null,
  yLabels = null,
  darkMode = false,
}) {
  const [activeTab, setActiveTab] = useState('3M')
  const [hoveredPoint, setHoveredPoint] = useState(null)
  const t = darkMode ? DARK : LIGHT

  const isMobile = size === 'Mobile' || size === 'Large Mobile'
  const isNoData = state === 'No data'
  const chartWidth = isMobile ? 320 : 500
  const chartHeight = isMobile ? 160 : 200

  // Default sample data
  const defaultPoints = [30, 45, 38, 52, 48, 55, 50, 62, 58, 70, 65, 72]
  const data = points || defaultPoints
  const defaultXLabels = xLabels || (isMobile
    ? ['Jan', 'Apr', 'Jul', 'Oct']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
  const defaultYLabels = yLabels || ['$250K', '$200K', '$150K', '$100K', '$50K']

  // Build SVG path
  const maxVal = Math.max(...data)
  const minVal = Math.min(...data)
  const range = maxVal - minVal || 1
  const padding = { top: 10, right: 10, bottom: 10, left: 10 }
  const plotW = chartWidth - padding.left - padding.right
  const plotH = chartHeight - padding.top - padding.bottom

  const pointCoords = data.map((val, i) => ({
    x: padding.left + (i / (data.length - 1)) * plotW,
    y: padding.top + (1 - (val - minVal) / range) * plotH,
    val,
  }))

  const linePath = pointCoords.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaPath = linePath + ` L ${pointCoords[pointCoords.length - 1].x} ${chartHeight} L ${pointCoords[0].x} ${chartHeight} Z`

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div>
          {title && (
            <p style={{ fontWeight: 600, fontSize: 24, lineHeight: '28px', color: t.main, margin: 0 }}>
              {title}
            </p>
          )}
          {value && (
            <p style={{ fontWeight: 600, fontSize: 24, lineHeight: '28px', color: t.main, margin: '4px 0 0' }}>
              {value}
            </p>
          )}
          {change && (
            <p style={{
              fontWeight: 400, fontSize: 14, lineHeight: '20px', margin: '4px 0 0',
              color: changePositive ? '#1F7C3E' : '#B3485A',
            }}>
              {changePositive ? '▲' : '▼'} {change}
            </p>
          )}
        </div>
        <ChartOverflow darkMode={darkMode} />
      </div>

      {/* Chart area */}
      {isNoData ? (
        <div style={{
          width: chartWidth, height: chartHeight, display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: t.grey02, borderRadius: 8,
        }}>
          <span style={{ fontSize: 14, color: t.secondary }}>{noDataMessage}</span>
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          {/* Y-axis labels */}
          <div style={{
            position: 'absolute', left: -40, top: padding.top, bottom: padding.bottom,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            {defaultYLabels.map((l, i) => (
              <span key={i} style={{ fontSize: 8, color: t.axisLabel, lineHeight: '12px' }}>{l}</span>
            ))}
          </div>

          <svg width={chartWidth} height={chartHeight} style={{ display: 'block' }}>
            {/* Gradient area fill */}
            <defs>
              <linearGradient id={`chartGrad-${darkMode ? 'd' : 'l'}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={t.chartArea} stopOpacity="0.3" />
                <stop offset="100%" stopColor={t.chartArea} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill={`url(#chartGrad-${darkMode ? 'd' : 'l'})`} />
            <path d={linePath} fill="none" stroke={t.blue04} strokeWidth={2} />

            {/* Hover points */}
            {pointCoords.map((p, i) => (
              <circle
                key={i}
                cx={p.x} cy={p.y} r={hoveredPoint === i ? 5 : 0}
                fill={t.primary}
                style={{ transition: 'r 100ms ease-out' }}
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}

            {/* Invisible hover targets */}
            {pointCoords.map((p, i) => (
              <rect
                key={`h${i}`}
                x={p.x - plotW / data.length / 2}
                y={0}
                width={plotW / data.length}
                height={chartHeight}
                fill="transparent"
                onMouseEnter={() => setHoveredPoint(i)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}
          </svg>

          {/* X-axis labels */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            paddingTop: 4,
          }}>
            {defaultXLabels.map((l, i) => (
              <span key={i} style={{ fontSize: 8, color: t.axisLabel, lineHeight: '12px' }}>{l}</span>
            ))}
          </div>

          {/* Tooltip */}
          {hoveredPoint !== null && (
            <div style={{
              position: 'absolute',
              left: pointCoords[hoveredPoint].x - 30,
              top: pointCoords[hoveredPoint].y - 36,
              backgroundColor: darkMode ? '#272C35' : '#1C2026',
              color: '#FFFFFF',
              padding: '4px 8px', borderRadius: 4,
              fontWeight: 600, fontSize: 12, lineHeight: '16px',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}>
              {data[hoveredPoint]}
            </div>
          )}
        </div>
      )}

      {/* Tabs */}
      <div style={{ marginTop: 12 }}>
        <ChartTabs active={activeTab} onChange={setActiveTab} darkMode={darkMode} />
      </div>
    </div>
  )
}
