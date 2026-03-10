import { useEffect, useState } from 'react'

// ---------------------------------------------------------------------------
// Spinner — animated circular arc (120×120)
// Theme: Light (#8693A9) or Dark (#4B4C4E)
// ---------------------------------------------------------------------------
export function Spinner({ theme = 'Light', size = 120 }) {
  const color = theme === 'Dark' ? '#4B4C4E' : '#8693A9'
  const halfColor = theme === 'Dark' ? '#4B4C4E' : 'rgba(134,147,169,0.5)'
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    let frame
    let start
    const animate = (ts) => {
      if (!start) start = ts
      setRotation(((ts - start) / 1000) * 270 % 360)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <svg
      width={size} height={size} viewBox="0 0 120 120"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Background arc */}
      <circle
        cx="60" cy="60" r="54"
        fill="none" stroke={halfColor} strokeWidth="1.5"
        strokeDasharray="254 340"
        strokeLinecap="round"
      />
      {/* Foreground arc */}
      <circle
        cx="60" cy="60" r="54"
        fill="none" stroke={color} strokeWidth="1.5"
        strokeDasharray="85 254"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// SkeletonLoader — shimmer gradient placeholder
// Resizable, default 90×80, 4px radius
// ---------------------------------------------------------------------------
export function SkeletonLoader({
  theme = 'Light',
  width = 90,
  height = 80,
  borderRadius = 4,
  style: customStyle,
}) {
  const baseColor = theme === 'Dark' ? '#2F3641' : '#D4DBE6'
  const gradientId = `skel-${Math.random().toString(36).slice(2, 8)}`

  return (
    <div style={{
      width, height, borderRadius, overflow: 'hidden',
      position: 'relative',
      ...customStyle,
    }}>
      <svg width="100%" height="100%" style={{ display: 'block' }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0.25" stopColor={baseColor} stopOpacity="0.20" />
            <stop offset="0.50" stopColor={baseColor} stopOpacity="0.50" />
            <stop offset="0.75" stopColor={baseColor} stopOpacity="0.20" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" rx={borderRadius} fill={`url(#${gradientId})`}>
          <animate
            attributeName="x"
            values="-100%;100%"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect width="200%" height="100%" rx={borderRadius} fill={`url(#${gradientId})`}>
          <animate
            attributeName="x"
            values="-200%;100%"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  )
}
