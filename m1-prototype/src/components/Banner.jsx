const LIGHT_STYLES = {
  Danger: {
    bg: '#F6E9EB',
    border: '#D08E99',
    accent: '#B3485A',
    text: '#1C2026',
  },
  Caution: {
    bg: '#FBF4DF',
    border: '#EDD17B',
    accent: '#7A631F',
    text: '#1C2026',
  },
  Informational: {
    bg: '#E8EDF5',
    border: '#99ADD5',
    accent: '#152B56',
    text: '#1C2026',
  },
  Success: {
    bg: '#E9F6EE',
    border: '#92D2A8',
    accent: '#1F7C3E',
    text: '#1C2026',
  },
}

const DARK_STYLES = {
  Danger: {
    bg: '#310C13',
    border: '#D08E99',
    accent: '#C4717F',
    text: '#ECEFF4',
  },
  Caution: {
    bg: '#282415',
    border: '#EDD17B',
    accent: '#DCC272',
    text: '#ECEFF4',
  },
  Informational: {
    bg: '#0C1931',
    border: '#99ADD5',
    accent: '#6E8BC3',
    text: '#ECEFF4',
  },
  Success: {
    bg: '#0C3119',
    border: '#92D2A8',
    accent: '#279D4F',
    text: '#ECEFF4',
  },
}

const STATE_ICONS = {
  Danger: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4V7h2v6h-2z"
    />
  ),
  Caution: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
    />
  ),
  Informational: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
    />
  ),
  Success: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    />
  ),
}

export default function Banner({
  state = 'Danger',
  kind = 'Web',
  message = 'This is a banner message.',
  linkText = 'Text link here',
  showLink = true,
  showIcon = true,
  darkMode = false,
}) {
  const palette = darkMode ? DARK_STYLES : LIGHT_STYLES
  const colors = palette[state] || palette.Danger

  const icon = showIcon && (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={colors.accent}
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {STATE_ICONS[state]}
    </svg>
  )

  const link = showLink && (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      style={{ color: colors.accent, fontFamily: 'Inter, sans-serif' }}
      className="text-base font-semibold leading-6 whitespace-nowrap hover:underline"
    >
      {linkText}
    </a>
  )

  const messageEl = (
    <p
      style={{ color: colors.text, fontFamily: 'Inter, sans-serif' }}
      className="text-base font-normal leading-6"
    >
      {message}
    </p>
  )

  if (kind === 'Mobile') {
    return (
      <div
        style={{
          backgroundColor: colors.bg,
          borderColor: colors.border,
        }}
        className="rounded-lg border px-4 py-3"
      >
        <div className="flex items-start gap-3">
          {icon}
          <div className="flex flex-col gap-2 min-w-0">
            {messageEl}
            {link}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundColor: colors.bg,
        borderColor: colors.border,
        maxWidth: 1600,
      }}
      className="rounded-lg border px-4 py-3"
    >
      <div className="flex items-center gap-2">
        {icon}
        <div className="flex items-baseline gap-6 flex-wrap min-w-0">
          {messageEl}
          {link}
        </div>
      </div>
    </div>
  )
}
