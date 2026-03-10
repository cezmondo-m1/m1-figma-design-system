// ---------------------------------------------------------------------------
// Img Assets — .imageFixedAspectRatio + imagePlaceholder components
// ---------------------------------------------------------------------------

const RATIOS = {
  '16:9': { w: 240, h: 135 },
  '4:3':  { w: 240, h: 180 },
  '1:1':  { w: 240, h: 240 },
}

// ---------------------------------------------------------------------------
// .imageFixedAspectRatio — image container that enforces a fixed aspect ratio
// ---------------------------------------------------------------------------
export function ImageFixedAspectRatio({
  ratio = '1:1',
  src = null,
  darkMode = false,
}) {
  const { w, h } = RATIOS[ratio] || RATIOS['1:1']

  return (
    <div style={{
      width: w, height: h, borderRadius: 4, overflow: 'hidden',
      backgroundColor: darkMode ? '#1A1E23' : '#E8ECF2',
      position: 'relative',
    }}>
      {src ? (
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div style={{
          width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: darkMode
            ? 'linear-gradient(135deg, #1A1E23 0%, #272C35 100%)'
            : 'linear-gradient(135deg, #E8ECF2 0%, #F3F5F8 100%)',
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 400,
            fontSize: 52, lineHeight: '63px',
            color: darkMode ? '#3A4252' : '#D08E99',
            opacity: 0.6, userSelect: 'none',
          }}>
            {ratio}
          </span>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// imagePlaceholder — wrapper with padding around .imageFixedAspectRatio
// type: 'Default' (1:1, 24px padding, 288×288)
//       'Mobile'  (16:9, no padding, 343×193)
// ---------------------------------------------------------------------------
export function ImagePlaceholder({
  type = 'Default',
  src = null,
  darkMode = false,
}) {
  const isMobile = type === 'Mobile'
  const ratio = isMobile ? '16:9' : '1:1'
  const padding = isMobile ? 0 : 24
  const width = isMobile ? 343 : 288
  const height = isMobile ? 193 : 288

  return (
    <div style={{
      width, height, padding,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <ImageFixedAspectRatio ratio={ratio} src={src} darkMode={darkMode} />
    </div>
  )
}
