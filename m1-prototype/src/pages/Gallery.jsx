import { useState } from 'react'
import { Banner, Button, FloatingActionButton, HotButton, IconButton, Card, Radio, Checkbox, CheckboxSingle, FormSelect, Switch, ChartTabs, TabularData, DataSet, GaugeChart, MarginHealthGauge, LineChart } from '../components'
import { faPlus, faMinus, faArrowsRotate, faPen, faShareNodes } from '@fortawesome/free-solid-svg-icons'

// ---------------------------------------------------------------------------
// Navigation structure — mirrors the design-system docs
// ---------------------------------------------------------------------------
const NAV = [
  {
    category: 'Foundations',
    items: [
      { id: 'grids', label: 'Grids & Layouts' },
      { id: 'loading-states', label: 'Loading States' },
      { id: 'img-assets', label: 'Img Assets' },
    ],
  },
  {
    category: 'Feedback',
    items: [
      { id: 'banners', label: 'Banners' },
      { id: 'dialogs', label: 'Dialogs' },
      { id: 'toasts', label: 'Toasts' },
      { id: 'tooltips', label: 'Tooltips' },
    ],
  },
  {
    category: 'Buttons',
    items: [
      { id: 'buttons', label: 'Buttons' },
      { id: 'links', label: 'Links' },
    ],
  },
  {
    category: 'Inputs',
    items: [
      { id: 'inputs', label: 'Inputs' },
      { id: 'checkboxes-radios', label: 'Checkboxes & Radios' },
      { id: 'switch', label: 'Switch' },
    ],
  },
  {
    category: 'Data Display',
    items: [
      { id: 'cards', label: 'Cards' },
      { id: 'charts', label: 'Charts' },
      { id: 'tables', label: 'Tables' },
      { id: 'list-items', label: 'List Items' },
      { id: 'pills', label: 'Pills' },
    ],
  },
  {
    category: 'Navigation',
    items: [
      { id: 'navigation', label: 'Navigation' },
      { id: 'tabs', label: 'Tabs & Tab Bars' },
      { id: 'floating-panel', label: 'Floating Panel' },
    ],
  },
]

// ---------------------------------------------------------------------------
// Banner demo data
// ---------------------------------------------------------------------------
const BANNER_VARIANTS = [
  { state: 'Danger', kind: 'Web' },
  { state: 'Caution', kind: 'Web' },
  { state: 'Informational', kind: 'Web' },
  { state: 'Success', kind: 'Web' },
  { state: 'Danger', kind: 'Mobile' },
  { state: 'Caution', kind: 'Mobile' },
  { state: 'Informational', kind: 'Mobile' },
  { state: 'Success', kind: 'Mobile' },
]

// ---------------------------------------------------------------------------
// Dark mode toggle
// ---------------------------------------------------------------------------
function DarkModeToggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={[
        'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border',
        enabled
          ? 'bg-neutral-800 text-white border-neutral-700'
          : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300',
      ].join(' ')}
    >
      {enabled ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
        </svg>
      )}
      {enabled ? 'Dark' : 'Light'}
    </button>
  )
}

// ---------------------------------------------------------------------------
// Chevron icon for collapsible sections
// ---------------------------------------------------------------------------
function ChevronIcon({ open }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      className={`transition-transform duration-150 ${open ? 'rotate-90' : ''}`}
    >
      <path d="M4.5 2.5L8.5 6L4.5 9.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Placeholder for components not yet built
// ---------------------------------------------------------------------------
function Placeholder({ label }) {
  return (
    <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-16 text-center">
      <p className="text-sm text-neutral-400">
        {label} — component not yet implemented
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Banner section (the only real component so far)
// ---------------------------------------------------------------------------
function BannerSection({ darkMode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {BANNER_VARIANTS.map(({ state, kind }) => (
        <div
          key={`${kind}-${state}`}
          className={[
            'rounded-xl border overflow-hidden',
            darkMode
              ? 'border-neutral-700 bg-neutral-900'
              : 'border-neutral-200 bg-white',
          ].join(' ')}
        >
          <div className={[
            'px-4 py-2.5 border-b',
            darkMode
              ? 'border-neutral-700 bg-neutral-800'
              : 'border-neutral-100 bg-neutral-50',
          ].join(' ')}>
            <span className={darkMode ? 'text-xs font-medium text-neutral-400' : 'text-xs font-medium text-neutral-500'}>
              {kind} / {state}
            </span>
          </div>
          <div className="p-5">
            <Banner state={state} kind={kind} darkMode={darkMode} />
          </div>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Button demo data
// ---------------------------------------------------------------------------
const BUTTON_KINDS = [
  'Primary', 'Secondary', 'Text button',
  'Promotion', 'Promotion secondary', 'Promotion text',
  'Destructive', 'Destructive text',
  'Inverse primary', 'Inverse secondary', 'Inverse text button',
  'Suggestion', 'Feature',
]
const BUTTON_SIZES = ['Large', 'Medium', 'Small']
const BUTTON_STATES = ['Default', 'Hover', 'Disabled']
const INVERSE_KINDS = new Set(['Inverse primary', 'Inverse secondary', 'Inverse text button'])

function ButtonSection({ darkMode }) {
  return (
    <div className="space-y-10">
      {/* Standard Buttons — all Kinds × States */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Standard Buttons</h2>
        <p className="text-sm text-neutral-500 mb-4">13 kinds across 3 states (Default, Hover, Disabled)</p>
        <div className="space-y-3">
          {BUTTON_KINDS.map((kind) => {
            const needsDarkBg = !darkMode && INVERSE_KINDS.has(kind)
            return (
              <div
                key={kind}
                className={[
                  'rounded-xl border overflow-hidden',
                  darkMode ? 'border-neutral-700 bg-neutral-900' : 'border-neutral-200 bg-white',
                ].join(' ')}
              >
                <div className={[
                  'px-4 py-2.5 border-b',
                  darkMode ? 'border-neutral-700 bg-neutral-800' : 'border-neutral-100 bg-neutral-50',
                ].join(' ')}>
                  <span className={darkMode ? 'text-xs font-medium text-neutral-400' : 'text-xs font-medium text-neutral-500'}>
                    {kind}
                  </span>
                </div>
                <div
                  className="p-5 flex flex-wrap items-center gap-3"
                  style={needsDarkBg ? { backgroundColor: '#152B56' } : undefined}
                >
                  {BUTTON_STATES.map((state) => (
                    <Button key={state} kind={kind} state={state} size="Large" darkMode={darkMode}>
                      {state}
                    </Button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Sizes</h2>
        <p className="text-sm text-neutral-500 mb-4">Large, Medium, Small — shown for Primary kind</p>
        <div className={[
          'rounded-xl border p-5 flex flex-wrap items-center gap-3',
          darkMode ? 'border-neutral-700 bg-neutral-900' : 'border-neutral-200 bg-white',
        ].join(' ')}>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} kind="Primary" size={size} darkMode={darkMode}>
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">With Icons</h2>
        <p className="text-sm text-neutral-500 mb-4">Left icon, right icon, and both</p>
        <div className={[
          'rounded-xl border p-5 flex flex-wrap items-center gap-3',
          darkMode ? 'border-neutral-700 bg-neutral-900' : 'border-neutral-200 bg-white',
        ].join(' ')}>
          <Button kind="Primary" leftIcon darkMode={darkMode}>Add asset</Button>
          <Button kind="Secondary" rightIcon darkMode={darkMode}>Continue</Button>
          <Button kind="Primary" leftIcon rightIcon darkMode={darkMode}>Transfer</Button>
        </div>
      </div>

      {/* Floating Action Button */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Floating Action Button</h2>
        <p className="text-sm text-neutral-500 mb-4">Expand and Compact variants</p>
        <div className={[
          'rounded-xl border p-5 flex flex-wrap items-center gap-4',
          darkMode ? 'border-neutral-700 bg-neutral-900' : 'border-neutral-200 bg-white',
        ].join(' ')}>
          <FloatingActionButton label="Move money" darkMode={darkMode} />
          <FloatingActionButton label="Move money" compact darkMode={darkMode} />
        </div>
      </div>

      {/* Hot Buttons */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Hot Buttons</h2>
        <p className="text-sm text-neutral-500 mb-4">Circular icon + label — 4 kinds × 3 states</p>
        <div className={[
          'rounded-xl border p-6',
          darkMode ? 'border-neutral-700 bg-neutral-900' : 'border-neutral-200 bg-white',
        ].join(' ')}>
          <div className="space-y-6">
            {['Primary', 'Secondary', 'Tertiary', 'Feature'].map((kind) => (
              <div key={kind}>
                <span className={[
                  'text-xs font-medium mb-3 block',
                  darkMode ? 'text-neutral-400' : 'text-neutral-500',
                ].join(' ')}>{kind}</span>
                <div className="flex flex-wrap gap-6">
                  <HotButton kind={kind} state="Default" label="Buy" icon={faPlus} darkMode={darkMode} />
                  <HotButton kind={kind} state="Default" label="Sell" icon={faMinus} darkMode={darkMode} />
                  <HotButton kind={kind} state="Default" label="Rebalance" icon={faArrowsRotate} darkMode={darkMode} />
                  <HotButton kind={kind} state="Default" label="Edit" icon={faPen} darkMode={darkMode} />
                  <HotButton kind={kind} state="Default" label="Share" icon={faShareNodes} darkMode={darkMode} />
                  <HotButton kind={kind} state="Disabled" label="Disabled" icon={faPlus} darkMode={darkMode} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Icon Buttons */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Icon Buttons</h2>
        <p className="text-sm text-neutral-500 mb-4">Elevated and Standard variants — 3 sizes × 3 states</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {['elevated', 'standard'].map((variant) => (
            <div
              key={variant}
              className={[
                'rounded-xl border overflow-hidden',
                darkMode ? 'border-neutral-700 bg-neutral-900' : 'border-neutral-200 bg-white',
              ].join(' ')}
            >
              <div className={[
                'px-4 py-2.5 border-b',
                darkMode ? 'border-neutral-700 bg-neutral-800' : 'border-neutral-100 bg-neutral-50',
              ].join(' ')}>
                <span className={darkMode ? 'text-xs font-medium text-neutral-400' : 'text-xs font-medium text-neutral-500'}>
                  {variant === 'elevated' ? 'elevatedIconButton' : 'standardIconButton'}
                </span>
              </div>
              <div className="p-5 flex flex-wrap items-center gap-4">
                {BUTTON_SIZES.map((size) => (
                  <div key={size} className="flex items-center gap-2">
                    <span className={[
                      'text-[10px] font-medium w-10',
                      darkMode ? 'text-neutral-500' : 'text-neutral-400',
                    ].join(' ')}>{size}</span>
                    <IconButton variant={variant} size={size} state="Default" icon={faPlus} darkMode={darkMode} />
                    <IconButton variant={variant} size={size} state="Disabled" icon={faPlus} darkMode={darkMode} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Card demo data
// ---------------------------------------------------------------------------
const CARD_TYPES = ['Border', 'Filled + Border', 'Filled', 'Elevated']
const CARD_STATES = ['Default', 'Hover', 'Pressed', 'Selected', 'Focused']

function CardSampleContent({ darkMode }) {
  return (
    <div>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        color: darkMode ? '#ECEFF4' : '#1C2026',
        marginBottom: 4,
      }}>
        Card title
      </p>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px',
        color: darkMode ? '#8F9BAE' : '#546073',
      }}>
        Supporting text or content goes here. Cards group contextual information.
      </p>
    </div>
  )
}

function CardSection({ darkMode }) {
  return (
    <div className="space-y-10">
      {/* Types × States grid */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Types &times; States</h2>
        <p className="text-sm text-neutral-500 mb-4">4 types (Border, Filled + Border, Filled, Elevated) &times; 5 states — Web breakpoint</p>
        <div className="space-y-6">
          {CARD_TYPES.map((type) => (
            <div key={type}>
              <h3 className="text-sm font-semibold text-neutral-700 mb-3">{type}</h3>
              <div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6 rounded-xl"
                style={{
                  backgroundColor: darkMode ? '#0F1115' : '#F3F5F8',
                }}
              >
                {CARD_STATES.map((state) => (
                  <div key={state}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 11,
                      fontWeight: 500,
                      color: darkMode ? '#5E6D82' : '#8F9BAE',
                      display: 'block',
                      marginBottom: 8,
                    }}>
                      {state}
                    </span>
                    <Card
                      type={type}
                      state={state}
                      breakpoint="Web"
                      darkMode={darkMode}
                    >
                      <CardSampleContent darkMode={darkMode} />
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Breakpoint comparison */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Breakpoints</h2>
        <p className="text-sm text-neutral-500 mb-4">Web (24px padding) vs Mobile (16px padding) — Border type shown</p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-xl"
          style={{ backgroundColor: darkMode ? '#0F1115' : '#F3F5F8' }}
        >
          {['Web', 'Mobile'].map((bp) => (
            <div key={bp}>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                fontWeight: 500,
                color: darkMode ? '#5E6D82' : '#8F9BAE',
                display: 'block',
                marginBottom: 8,
              }}>
                {bp} — {bp === 'Web' ? '24px' : '16px'} padding
              </span>
              <Card type="Border" state="Default" breakpoint={bp} darkMode={darkMode}>
                <CardSampleContent darkMode={darkMode} />
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive demo */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Interactive Demo</h2>
        <p className="text-sm text-neutral-500 mb-4">Hover and click these cards to see state transitions</p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-xl"
          style={{ backgroundColor: darkMode ? '#0F1115' : '#F3F5F8' }}
        >
          {CARD_TYPES.map((type) => (
            <Card
              key={type}
              type={type}
              state="Default"
              breakpoint="Web"
              darkMode={darkMode}
              onClick={() => {}}
            >
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '20px',
                color: darkMode ? '#ECEFF4' : '#1C2026',
                marginBottom: 4,
              }}>
                {type}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 13,
                lineHeight: '18px',
                color: darkMode ? '#8F9BAE' : '#546073',
              }}>
                Hover and click to see interaction states
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Recipe: Home Tile */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Recipe: Home Tile</h2>
        <p className="text-sm text-neutral-500 mb-4">Account summary tiles — thumbnail icon, title, value, performance</p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6 rounded-xl"
          style={{ backgroundColor: darkMode ? '#0F1115' : '#F3F5F8' }}
        >
          {/* Invest tile with value */}
          <Card type="Filled + Border" state="Default" breakpoint="Web" darkMode={darkMode} onClick={() => {}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: darkMode ? '#272C35' : '#E8ECF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill={darkMode ? '#6FA7C3' : '#2A7DA7'}><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: darkMode ? '#ECEFF4' : '#1C2026' }}>Invest</span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 4 }}>$212,987.44</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#4CAF50' }}>▲ $1,736.47</p>
          </Card>

          {/* Earn tile with value */}
          <Card type="Filled + Border" state="Default" breakpoint="Web" darkMode={darkMode} onClick={() => {}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: darkMode ? '#272C35' : '#E8ECF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill={darkMode ? '#6FA7C3' : '#2A7DA7'}><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: darkMode ? '#ECEFF4' : '#1C2026' }}>Earn</span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 4 }}>$48,250.00</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: darkMode ? '#8F9BAE' : '#546073' }}>5.00% APY</p>
          </Card>

          {/* Empty tile with CTA */}
          <Card type="Filled + Border" state="Default" breakpoint="Web" darkMode={darkMode} onClick={() => {}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: darkMode ? '#272C35' : '#E8ECF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill={darkMode ? '#6FA7C3' : '#2A7DA7'}><path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: darkMode ? '#ECEFF4' : '#1C2026' }}>Spend</span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>
              Get a debit card with no account fees.
            </p>
          </Card>
        </div>
      </div>

      {/* Recipe: Value Proposition */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Recipe: Value Proposition</h2>
        <p className="text-sm text-neutral-500 mb-4">Rewards and value-focused content — large display text, list items, borders</p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 rounded-xl"
          style={{ backgroundColor: darkMode ? '#0F1115' : '#F3F5F8' }}
        >
          <Card type="Filled + Border" state="Default" breakpoint="Web" darkMode={darkMode}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 18, color: darkMode ? '#8F9BAE' : '#546073', marginBottom: 4 }}>Rewards</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 28, color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 4 }}>$248.85</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073', marginBottom: 16 }}>Your total rewards</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { label: 'Estimated pending rewards', value: '$24.18' },
                { label: 'Lifetime rewards', value: '$1,346.77' },
                { label: 'Credit card cashback', value: '$--' },
                { label: 'Owner\'s rewards', value: '$--' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 0',
                  borderTop: i > 0 ? `1px solid ${darkMode ? '#2F3641' : '#D4DBE6'}` : 'none',
                }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>{row.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400, color: darkMode ? '#ECEFF4' : '#1C2026' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card type="Filled + Border" state="Default" breakpoint="Web" darkMode={darkMode}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 18, color: darkMode ? '#8F9BAE' : '#546073', marginBottom: 4 }}>Rewards</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 28, color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 4 }}>1.5% – 10%</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073', marginBottom: 16 }}>Cash back rate</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { label: 'Estimated pending rewards', value: '$24.18' },
                { label: 'Lifetime rewards', value: '$1,346.77' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 0',
                  borderTop: i > 0 ? `1px solid ${darkMode ? '#2F3641' : '#D4DBE6'}` : 'none',
                }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>{row.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400, color: darkMode ? '#ECEFF4' : '#1C2026' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Recipe: Product Selection */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Recipe: Product Selection</h2>
        <p className="text-sm text-neutral-500 mb-4">Product marketing and onboarding — hero imagery, body copy, CTA buttons</p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 rounded-xl"
          style={{ backgroundColor: darkMode ? '#0F1115' : '#F3F5F8' }}
        >
          <Card type="Filled + Border" state="Default" breakpoint="Web" darkMode={darkMode}>
            {/* Imagery placeholder */}
            <div style={{
              height: 160, borderRadius: 8, marginBottom: 16,
              background: darkMode
                ? 'linear-gradient(135deg, #1A1E23 0%, #272C35 100%)'
                : 'linear-gradient(135deg, #E5EFF4 0%, #F3F5F8 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>16:9 Illustration</span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 28, lineHeight: '32px', color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 8 }}>
              M1 High-Yield Cash
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '24px', color: darkMode ? '#8F9BAE' : '#546073', marginBottom: 8 }}>
              Boost your APY from 3.35% to 4.00% APY. Individual and Joint accounts are FDIC-insured³.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: darkMode ? '#6FA7C3' : '#1F5B7A', marginBottom: 16 }}>
              Disclosure links
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button kind="Primary" size="Medium" darkMode={darkMode}>Open an account</Button>
              <Button kind="Text button" size="Medium" darkMode={darkMode}>Learn more</Button>
            </div>
          </Card>

          <Card type="Filled + Border" state="Default" breakpoint="Web" darkMode={darkMode}>
            <div style={{
              height: 160, borderRadius: 8, marginBottom: 16,
              background: darkMode
                ? 'linear-gradient(135deg, #1A2030 0%, #0D2531 100%)'
                : 'linear-gradient(135deg, #D6E8F4 0%, #E5EFF4 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>16:9 Illustration</span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 28, lineHeight: '32px', color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 8 }}>
              Margin loans
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '24px', color: darkMode ? '#8F9BAE' : '#546073', marginBottom: 8 }}>
              Borrow at 5.90%³ against Individual or Joint Brokerage Accounts with at least $2,000 invested.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: darkMode ? '#6FA7C3' : '#1F5B7A', marginBottom: 16 }}>
              Disclosure links
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button kind="Primary" size="Medium" darkMode={darkMode}>Open an account</Button>
              <Button kind="Text button" size="Medium" darkMode={darkMode}>Learn more</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Recipe: Text Heavy (Promotional) */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Recipe: Text Heavy</h2>
        <p className="text-sm text-neutral-500 mb-4">Informational or promotional content — icon, title, body paragraphs, disclosure, CTAs</p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 rounded-xl"
          style={{ backgroundColor: darkMode ? '#0F1115' : '#F3F5F8' }}
        >
          <Card type="Border" state="Default" breakpoint="Web" darkMode={darkMode}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill={darkMode ? '#6FA7C3' : '#2A7DA7'}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 18, color: darkMode ? '#ECEFF4' : '#1C2026' }}>
                Card title here
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '24px', color: darkMode ? '#8F9BAE' : '#546073', marginBottom: 12 }}>
              Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '24px', color: darkMode ? '#8F9BAE' : '#546073', marginBottom: 16 }}>
              Paragraph 2: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: darkMode ? '#6FA7C3' : '#1F5B7A', marginBottom: 16 }}>
              Disclosure link
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button kind="Primary" size="Medium" darkMode={darkMode}>Primary button</Button>
              <Button kind="Text button" size="Medium" darkMode={darkMode}>Secondary button</Button>
            </div>
          </Card>

          {/* FAQ / list item variant */}
          <Card type="Border" state="Default" breakpoint="Web" darkMode={darkMode}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 8 }}>
              Have a question about margin?
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, lineHeight: '20px', color: darkMode ? '#8F9BAE' : '#546073', marginBottom: 16 }}>
              Get answers to common questions about borrowing against your portfolio.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { q: 'What can I use M1 Margin for?', a: 'Use margin for short-term liquidity needs.' },
                { q: 'How to leverage using margin?', a: 'Borrow against your portfolio value.' },
                { q: 'How does margin billing work?', a: 'Interest is charged daily, billed monthly.' },
                { q: 'Ask a different question', a: 'Contact support for more details.' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '12px 0',
                  borderTop: `1px solid ${darkMode ? '#2F3641' : '#D4DBE6'}`,
                }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 2 }}>{item.q}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Selection & State Composition */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Selection Cards</h2>
        <p className="text-sm text-neutral-500 mb-4">Cards with radio-button selection pattern — Selected vs Default state</p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 rounded-xl"
          style={{ backgroundColor: darkMode ? '#0F1115' : '#F3F5F8' }}
        >
          {/* Selection card */}
          <Card type="Border" state="Selected" breakpoint="Web" darkMode={darkMode}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{
                width: 20, height: 20, borderRadius: '50%', marginTop: 2,
                border: `2px solid ${darkMode ? '#6FA7C3' : '#2A7DA7'}`,
                backgroundColor: darkMode ? '#6FA7C3' : '#2A7DA7',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFFFFF' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 600, color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 4 }}>
                  Cash and savings
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>
                  Checking, savings, or cash on hand
                </p>
              </div>
            </div>
          </Card>

          {/* Unselected card */}
          <Card type="Border" state="Default" breakpoint="Web" darkMode={darkMode}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{
                width: 20, height: 20, borderRadius: '50%', marginTop: 2,
                border: `2px solid ${darkMode ? '#5E6D82' : '#8F9BAE'}`,
              }} />
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 600, color: darkMode ? '#ECEFF4' : '#1C2026', marginBottom: 4 }}>
                  Investment account
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>
                  Brokerage, retirement, or other investment accounts
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Checkboxes & Radios section
// ---------------------------------------------------------------------------
const SWITCH_CLIENTS = ['Web', 'iOS26', 'iOS18', 'Android']

function CheckboxRadioSection({ darkMode }) {
  const [radioValue, setRadioValue] = useState('a')
  const [checks, setChecks] = useState({ a: true, b: false, c: false })
  const [switchStates, setSwitchStates] = useState({ Web: true, iOS26: false, iOS18: true, Android: false })

  const toggleCheck = (key) => setChecks((p) => ({ ...p, [key]: !p[key] }))

  return (
    <div className="space-y-10">
      {/* Atomic Radio */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Radio (.radios)</h2>
        <p className="text-sm text-neutral-500 mb-4">Atomic radio indicator — On / Off states, 24×24</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Radio checked={false} darkMode={darkMode} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: darkMode ? '#8F9BAE' : '#546073' }}>Off</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Radio checked={true} darkMode={darkMode} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: darkMode ? '#8F9BAE' : '#546073' }}>On</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Radio checked={false} darkMode={darkMode} disabled />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>Disabled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Atomic Checkbox */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Checkbox (.checkboxes)</h2>
        <p className="text-sm text-neutral-500 mb-4">Atomic checkbox indicator — On / Off states, 24×24 (icon 18×18)</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox checked={false} darkMode={darkMode} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: darkMode ? '#8F9BAE' : '#546073' }}>Off</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox checked={true} darkMode={darkMode} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: darkMode ? '#8F9BAE' : '#546073' }}>On</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox checked={true} darkMode={darkMode} disabled />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>Disabled</span>
            </div>
          </div>
        </div>
      </div>

      {/* CheckboxSingle */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Checkbox Single (.Checkbox single)</h2>
        <p className="text-sm text-neutral-500 mb-4">Inline indicator + text label — Checkbox and Radio kinds, interactive</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <CheckboxSingle
              kind="Checkbox"
              label="Accept terms and conditions"
              checked={checks.a}
              darkMode={darkMode}
              onChange={() => toggleCheck('a')}
            />
            <CheckboxSingle
              kind="Checkbox"
              label="Subscribe to newsletter"
              checked={checks.b}
              darkMode={darkMode}
              onChange={() => toggleCheck('b')}
            />
            <div style={{ borderTop: `1px solid ${darkMode ? '#2F3641' : '#D4DBE6'}`, paddingTop: 16 }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Radio kind</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <CheckboxSingle
                  kind="Radio"
                  label="Individual account"
                  checked={radioValue === 'a'}
                  darkMode={darkMode}
                  onChange={() => setRadioValue('a')}
                />
                <CheckboxSingle
                  kind="Radio"
                  label="Joint account"
                  checked={radioValue === 'b'}
                  darkMode={darkMode}
                  onChange={() => setRadioValue('b')}
                />
                <CheckboxSingle
                  kind="Radio"
                  label="Trust account"
                  checked={radioValue === 'c'}
                  darkMode={darkMode}
                  onChange={() => setRadioValue('c')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FormSelect */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Form Select (.formSelect)</h2>
        <p className="text-sm text-neutral-500 mb-4">Rich selection row — title, description, optional pill/tooltip/list/link</p>
        <div
          className="rounded-xl border p-6 space-y-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 16 }}>Kind = Checkbox (all props visible)</span>
            <FormSelect
              kind="Checkbox"
              checked={checks.c}
              title="M1 Plus membership"
              description="Unlock premium features including lower borrowing rates, higher APY, and smart transfers."
              pill="Popular"
              tooltip
              list={['1.5% – 10% Owner\'s Rewards', 'Lower margin rate at 5.90%', 'Smart transfers and insights']}
              link="View all benefits"
              darkMode={darkMode}
              onChange={() => toggleCheck('c')}
            />
          </div>

          <div style={{ borderTop: `1px solid ${darkMode ? '#2F3641' : '#D4DBE6'}`, paddingTop: 24 }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 16 }}>Kind = Radio (minimal props)</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <FormSelect
                kind="Radio"
                checked={radioValue === 'a'}
                title="Individual brokerage"
                description="A standard investment account for one person."
                darkMode={darkMode}
                onChange={() => setRadioValue('a')}
              />
              <FormSelect
                kind="Radio"
                checked={radioValue === 'b'}
                title="Joint brokerage"
                description="A shared investment account for two people."
                pill="New"
                darkMode={darkMode}
                onChange={() => setRadioValue('b')}
              />
              <FormSelect
                kind="Radio"
                checked={radioValue === 'c'}
                title="Retirement (IRA)"
                description="Tax-advantaged account for retirement savings."
                link="Learn about IRA options"
                darkMode={darkMode}
                onChange={() => setRadioValue('c')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Switch */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Switch (.Switch)</h2>
        <p className="text-sm text-neutral-500 mb-4">4 clients (Web, iOS26, iOS18, Android) × 4 states (On, Off, On Disabled, Off Disabled)</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div className="space-y-8">
            {SWITCH_CLIENTS.map((client) => (
              <div key={client}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>
                  {client}
                </span>
                <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <Switch
                      client={client}
                      on={switchStates[client]}
                      darkMode={darkMode}
                      onChange={() => setSwitchStates((p) => ({ ...p, [client]: !p[client] }))}
                    />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>
                      {switchStates[client] ? 'On' : 'Off'} (tap)
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <Switch client={client} on={true} disabled darkMode={darkMode} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>On Disabled</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <Switch client={client} on={false} disabled darkMode={darkMode} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>Off Disabled</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Charts section
// ---------------------------------------------------------------------------
const GAUGE_STATES = ['good', 'warning', 'danger', 'critical', 'empty']

function ChartSection({ darkMode }) {
  const [activeTab, setActiveTab] = useState('3M')

  return (
    <div className="space-y-10">
      {/* ChartTabs */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Chart Tabs (.Tabs)</h2>
        <p className="text-sm text-neutral-500 mb-4">Time period selector — Active, Default, and Hover states</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <ChartTabs active={activeTab} onChange={setActiveTab} darkMode={darkMode} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: darkMode ? '#5E6D82' : '#8F9BAE', marginTop: 12 }}>
            Selected: {activeTab}
          </p>
        </div>
      </div>

      {/* TabularData */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Tabular Data (tabularData)</h2>
        <p className="text-sm text-neutral-500 mb-4">Label + value rows — Default, Link, and Pills types × Default and Large sizes</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Default size</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <TabularData label="Market value" value="$142,039.42" darkMode={darkMode} />
                <TabularData label="Allocation" value="22%" darkMode={darkMode} />
                <TabularData label="View details" value="Holdings →" type="Link" darkMode={darkMode} />
              </div>
            </div>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Large size</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <TabularData label="Total balance" value="$212,987.44" size="Large" darkMode={darkMode} />
                <TabularData label="Today's change" value="+$1,736.47" size="Large" darkMode={darkMode} />
                <TabularData label="Pending trades" value="2 orders" size="Large" type="Link" darkMode={darkMode} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DataSet */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Data Set (dataSet)</h2>
        <p className="text-sm text-neutral-500 mb-4">Grouped tabularData rows with accent border — Rows and Columns layouts × Left and Bottom borders</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Rows / Left border</span>
              <DataSet
                layout="Rows"
                border="Left"
                darkMode={darkMode}
                rows={[
                  { label: 'Market value', value: '$142,039.42' },
                  { label: 'Allocation', value: '22%' },
                  { label: 'Gain/Return', value: '▲ 1.45%' },
                  { label: 'Cost basis', value: '$128,450.00' },
                ]}
              />
            </div>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Columns / Bottom border</span>
              <DataSet
                layout="Columns"
                border="Bottom"
                darkMode={darkMode}
                rows={[
                  { label: 'Open', value: '$184.22' },
                  { label: 'High', value: '$186.50' },
                  { label: 'Low', value: '$182.10' },
                  { label: 'Close', value: '$185.88' },
                ]}
              />
            </div>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Rows / Bottom border / Large</span>
              <DataSet
                layout="Rows"
                border="Bottom"
                size="Large"
                darkMode={darkMode}
                rows={[
                  { label: 'Total assets', value: '$234,349.84' },
                  { label: 'Total liabilities', value: '$12,500.00' },
                  { label: 'Net worth', value: '$221,849.84' },
                ]}
              />
            </div>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>2-Columns / Left border</span>
              <DataSet
                layout="2 – Columns"
                border="Left"
                darkMode={darkMode}
                rows={[
                  { label: '52-week high', value: '$199.62' },
                  { label: '52-week low', value: '$124.17' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* GaugeChart */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Gauge Chart (.gaugeChart)</h2>
        <p className="text-sm text-neutral-500 mb-4">Semi-circle gauge with segmented arc and center value</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
            <GaugeChart value={72} label="Portfolio allocation" darkMode={darkMode} />
            <GaugeChart
              value={45}
              label="Risk exposure"
              darkMode={darkMode}
              segments={[
                { color: '#2A7DA7', weight: 45 },
                { color: '#3C5A94', weight: 35 },
                { color: '#152B56', weight: 20 },
              ]}
            />
          </div>
        </div>
      </div>

      {/* MarginHealthGauge */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Margin Health Gauge (.marginHealthGaugeChart)</h2>
        <p className="text-sm text-neutral-500 mb-4">5 states — good, warning, danger, critical, empty</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {GAUGE_STATES.map((state) => (
              <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <MarginHealthGauge state={state} darkMode={darkMode} />
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500,
                  color: darkMode ? '#5E6D82' : '#8F9BAE',
                }}>
                  State={state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LineChart */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Line Chart (lineChart)</h2>
        <p className="text-sm text-neutral-500 mb-4">Line chart with area fill, interactive tooltips, tabs, and axis labels — Desktop and Mobile sizes</p>
        <div className="space-y-6">
          {/* Desktop */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 16 }}>Desktop — Default state</span>
            <div style={{ paddingLeft: 48 }}>
              <LineChart
                title="M1 net worth"
                value="$234,349.84"
                change="$10,624.80 since January 8, 2024"
                changePositive
                size="Desktop"
                darkMode={darkMode}
              />
            </div>
          </div>

          {/* Mobile */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 16 }}>Mobile — Default state</span>
            <div style={{ maxWidth: 360, paddingLeft: 48 }}>
              <LineChart
                title="M1 net worth"
                value="$234,349.84"
                change="$10,624.80"
                changePositive
                size="Mobile"
                darkMode={darkMode}
              />
            </div>
          </div>

          {/* No data */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 16 }}>No data state</span>
            <div style={{ paddingLeft: 48 }}>
              <LineChart
                title="Performance"
                size="Desktop"
                state="No data"
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Render active component content
// ---------------------------------------------------------------------------
// Pages that have dark mode implemented
const DARK_MODE_PAGES = new Set(['banners', 'buttons', 'cards', 'checkboxes-radios', 'charts'])

function ActiveContent({ activeId, darkMode, onToggleDarkMode }) {
  const item = NAV.flatMap((g) => g.items).find((i) => i.id === activeId)
  if (!item) return null

  const supportsDarkMode = DARK_MODE_PAGES.has(activeId)

  return (
    <>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">{item.label}</h1>
          <p className="mt-1 text-sm text-neutral-500">
            M1 Liquid design system
          </p>
        </div>
        {supportsDarkMode && (
          <DarkModeToggle enabled={darkMode} onToggle={onToggleDarkMode} />
        )}
      </div>

      {activeId === 'banners' ? (
        <BannerSection darkMode={darkMode} />
      ) : activeId === 'buttons' ? (
        <ButtonSection darkMode={darkMode} />
      ) : activeId === 'cards' ? (
        <CardSection darkMode={darkMode} />
      ) : activeId === 'checkboxes-radios' ? (
        <CheckboxRadioSection darkMode={darkMode} />
      ) : activeId === 'charts' ? (
        <ChartSection darkMode={darkMode} />
      ) : (
        <Placeholder label={item.label} />
      )}
    </>
  )
}

// ---------------------------------------------------------------------------
// Sidebar
// ---------------------------------------------------------------------------
function Sidebar({ activeId, onNavigate, open, onClose, collapsed, onToggleCategory }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          'fixed top-0 left-0 z-40 h-screen w-60 bg-neutral-900 border-r border-neutral-800',
          'flex flex-col',
          'transition-transform duration-200 ease-in-out',
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        ].join(' ')}
      >
        {/* Logo area */}
        <div className="shrink-0 px-5 py-5 flex items-center justify-between border-b border-neutral-800">
          <span className="text-sm font-semibold tracking-wide text-white">
            M1 Design System
          </span>
          <button
            onClick={onClose}
            className="lg:hidden text-neutral-400 hover:text-white"
            aria-label="Close sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        {/* Scrollable nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {NAV.map((group) => {
            const isOpen = !collapsed.has(group.category)
            const hasActive = group.items.some((i) => i.id === activeId)

            return (
              <div key={group.category}>
                <button
                  onClick={() => onToggleCategory(group.category)}
                  className={[
                    'w-full flex items-center justify-between px-2 py-2 rounded-md text-[11px] font-semibold uppercase tracking-widest transition-colors',
                    hasActive && !isOpen
                      ? 'text-neutral-300'
                      : 'text-neutral-500 hover:text-neutral-300',
                  ].join(' ')}
                >
                  {group.category}
                  <ChevronIcon open={isOpen} />
                </button>

                {isOpen && (
                  <ul className="mt-0.5 mb-2 space-y-0.5">
                    {group.items.map((item) => {
                      const isActive = activeId === item.id
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => onNavigate(item.id)}
                            className={[
                              'w-full text-left block px-2 py-1.5 rounded-md text-[13px] transition-colors',
                              isActive
                                ? 'bg-neutral-800 text-white font-medium'
                                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50',
                            ].join(' ')}
                          >
                            {item.label}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

// ---------------------------------------------------------------------------
// Gallery (main export)
// ---------------------------------------------------------------------------
export default function Gallery() {
  const [activeId, setActiveId] = useState('banners')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(new Set())
  const [darkMode, setDarkMode] = useState(false)

  function handleNavigate(id) {
    setActiveId(id)
    setSidebarOpen(false)
    setDarkMode(false)
  }

  function handleToggleCategory(category) {
    setCollapsed((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <Sidebar
        activeId={activeId}
        onNavigate={handleNavigate}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={collapsed}
        onToggleCategory={handleToggleCategory}
      />

      {/* Content area — offset by sidebar width on desktop */}
      <main className="lg:ml-60">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-20 flex items-center gap-3 bg-white/80 backdrop-blur-sm border-b border-neutral-200 px-6 py-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-neutral-600 hover:text-neutral-900"
            aria-label="Open sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
          <span className="text-sm font-semibold text-neutral-800">
            M1 Design System
          </span>
        </header>

        {/* Active component content */}
        <div className="px-8 py-8">
          <ActiveContent
            activeId={activeId}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode((d) => !d)}
          />
        </div>
      </main>
    </div>
  )
}
