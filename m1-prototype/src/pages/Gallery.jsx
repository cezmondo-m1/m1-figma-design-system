import { useState } from 'react'
import { Banner, Button, FloatingActionButton, HotButton, IconButton, Card, Radio, Checkbox, CheckboxSingle, FormSelect, Switch, ChartTabs, TabularData, DataSet, GaugeChart, MarginHealthGauge, LineChart, Dialog, FloatingPanel, ImageFixedAspectRatio, ImagePlaceholder, Link, ListItem, ToDoList, BasicListItem, Spinner, SkeletonLoader, IntelligencePanel, StaticPill, ActionablePill, ActionablePillMobile, TableHeader, TableSubHeader, TableRow, SlicesTable, SpendTable, EarnTable, TabItem, TabBar, TabsGroup, Toast, TooltipWeb, TooltipMobileSheet, FeatureHighlight, FormField, MultilineInput, SearchField, MobileHeader, MobileTabBar, AppNavigationItem, WebRailNav, TopHeader, WebFooter } from '../components'
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
      { id: 'intelligence-panel', label: 'Intelligence Panel' },
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

    </div>
  )
}

// ---------------------------------------------------------------------------
// Dialogs section
// ---------------------------------------------------------------------------
function dialogButtons({ darkMode, direction = 'row', primary = 'Confirm', secondary = 'Cancel', secondaryOutline = false, onPrimary, onSecondary }) {
  const primaryBg = darkMode ? '#6FA7C3' : '#2A7DA7'
  const primaryFg = darkMode ? '#1C2026' : '#FFFFFF'
  const accentBorder = darkMode ? '#6FA7C3' : '#2A7DA7'
  const accentColor = darkMode ? '#6FA7C3' : '#2A7DA7'
  const outlineBorder = darkMode ? '#2F3641' : '#D4DBE6'
  const outlineColor = darkMode ? '#ECEFF4' : '#1C2026'
  const isColumn = direction === 'column'
  return (
    <div style={{ display: 'flex', gap: 12, flexDirection: direction }}>
      <button style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 600,
        fontSize: 14, lineHeight: '20px',
        padding: '12px 24px', borderRadius: 24,
        border: 'none', backgroundColor: primaryBg, color: primaryFg,
        cursor: 'pointer', ...(isColumn ? { width: '100%', textAlign: 'center' } : {}),
      }} onClick={onPrimary}>{primary}</button>
      <button style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 600,
        fontSize: 14, lineHeight: '20px',
        padding: '12px 24px', borderRadius: 24,
        border: `2px solid ${secondaryOutline ? outlineBorder : accentBorder}`,
        backgroundColor: 'transparent',
        color: secondaryOutline ? outlineColor : accentColor,
        cursor: 'pointer', ...(isColumn ? { width: '100%', textAlign: 'center' } : {}),
      }} onClick={onSecondary}>{secondary}</button>
    </div>
  )
}

function DialogSection({ darkMode }) {
  const [openDialog, setOpenDialog] = useState(null)

  const demos = [
    {
      id: 'web-standard',
      label: 'Web / Standard — all props',
      variant: 'Web', typeStyle: 'Standard', image: true,
      title: 'Confirm your transfer',
      body: 'You are about to transfer $5,000.00 from your Brokerage account to your High-Yield Cash Account. This transfer will be processed within 1–2 business days.',
      links: [{ label: 'Transfer terms', disclosure: false }, { label: 'FDIC insurance details', disclosure: true }],
      slot: (
        <div style={{
          padding: 16, borderRadius: 8,
          backgroundColor: darkMode ? '#272C35' : '#F3F5F8',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>From</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: darkMode ? '#ECEFF4' : '#1C2026' }}>Brokerage</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>To</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: darkMode ? '#ECEFF4' : '#1C2026' }}>High-Yield Cash</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>Amount</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: darkMode ? '#ECEFF4' : '#1C2026' }}>$5,000.00</span>
          </div>
        </div>
      ),
      stickyFooter: true,
    },
    {
      id: 'web-small',
      label: 'Web / Small — minimal',
      variant: 'Web', typeStyle: 'Small',
      title: 'Are you sure?',
      body: 'This action cannot be undone. You will permanently delete this portfolio and all associated data.',
    },
    {
      id: 'web-no-buttons',
      label: 'Web / Standard — no buttons, links only',
      variant: 'Web', typeStyle: 'Standard',
      title: 'Important disclosures',
      body: 'Investment products are not FDIC insured, not bank guaranteed, and may lose value. M1 Finance LLC is a registered broker-dealer, member FINRA/SIPC.',
      links: [{ label: 'View full disclosures', disclosure: false }, { label: 'FINRA BrokerCheck', disclosure: true }],
      noButtons: true,
    },
    {
      id: 'mobile-standard',
      label: 'Mobile — standard',
      variant: 'Mobile',
      title: 'Enable notifications',
      body: 'Stay informed about your portfolio performance, trade confirmations, and account updates with push notifications.',
      links: [{ label: 'Notification preferences', disclosure: false }],
    },
    {
      id: 'mobile-android',
      label: 'Mobile — Android close',
      variant: 'Mobile', androidClose: true,
      title: 'Update available',
      body: 'A new version of M1 is available. Update now for the latest features and improvements.',
    },
  ]

  return (
    <div className="space-y-10">
      {/* Variant overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Web Dialog</h2>
        <p className="text-sm text-neutral-500 mb-4">584px wide, 8px radius. Standard and Small type styles. Optional image, links, slot, button group, sticky footer.</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Mobile Dialog</h2>
        <p className="text-sm text-neutral-500 mb-4">343px wide, 8px radius. Optional links, slot, button group, Android close.</p>
      </div>

      {/* Launch buttons */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Interactive Demos</h2>
        <p className="text-sm text-neutral-500 mb-4">Click to open each dialog variant with scrim overlay</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setOpenDialog(demo.id)}
                style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 600,
                  fontSize: 14, lineHeight: '20px',
                  padding: '12px 24px', borderRadius: 24,
                  border: `2px solid ${darkMode ? '#6FA7C3' : '#2A7DA7'}`,
                  backgroundColor: 'transparent',
                  color: darkMode ? '#6FA7C3' : '#2A7DA7',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'background-color 100ms ease-out',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = darkMode ? '#0D2531' : '#E5EFF4' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                {demo.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Static preview cards — using Dialog inline mode */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Static Previews</h2>
        <p className="text-sm text-neutral-500 mb-4">Dialog atoms without scrim — Web Standard, Web Small, and Mobile</p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-xl"
          style={{ backgroundColor: darkMode ? '#1A1E23' : '#F3F5F8' }}
        >
          {/* Web Standard */}
          <Dialog
            inline
            variant="Web"
            typeStyle="Standard"
            title="Standard dialog title"
            body="Body text explaining the purpose of this dialog. It provides context and helps the user make a decision."
            image
            links={[{ label: 'Learn more', disclosure: false }]}
            slot={
              <div style={{ padding: 16, borderRadius: 8, backgroundColor: darkMode ? '#272C35' : '#F3F5F8' }}>
                <span style={{ fontSize: 14, color: darkMode ? '#8F9BAE' : '#546073' }}>Slot content area</span>
              </div>
            }
            stickyFooter
            buttonGroup={dialogButtons({ darkMode, direction: 'row', primary: 'Primary action', secondary: 'Secondary' })}
            darkMode={darkMode}
          />

          {/* Web Small */}
          <Dialog
            inline
            variant="Web"
            typeStyle="Small"
            title="Small dialog title"
            body="Smaller body text for confirmations and simple messages that need less visual weight."
            buttonGroup={dialogButtons({ darkMode, direction: 'row', primary: 'Confirm', secondary: 'Cancel' })}
            darkMode={darkMode}
          />

          {/* Mobile */}
          <Dialog
            inline
            variant="Mobile"
            title="Mobile dialog"
            body="Mobile dialogs are 343px wide with 16px padding on all sides."
            links={[{ label: 'Notification preferences', disclosure: false }]}
            buttonGroup={dialogButtons({ darkMode, direction: 'column', primary: 'Enable', secondary: 'Close', secondaryOutline: true })}
            darkMode={darkMode}
          />
        </div>
      </div>

      {/* Scrim tokens reference */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Scrim</h2>
        <p className="text-sm text-neutral-500 mb-4">Dialogs render over a scrim overlay (#000000 at 80% opacity). Click any demo button above to see it in action.</p>
      </div>

      {/* Rendered dialog instances */}
      {demos.map((demo) => (
        <Dialog
          key={demo.id}
          open={openDialog === demo.id}
          onClose={() => setOpenDialog(null)}
          variant={demo.variant}
          typeStyle={demo.typeStyle || 'Standard'}
          title={demo.title}
          body={demo.body}
          image={demo.image || false}
          links={demo.links}
          slot={demo.slot}
          stickyFooter={demo.stickyFooter || false}
          androidClose={demo.androidClose || false}
          darkMode={darkMode}
          buttonGroup={demo.noButtons ? null : dialogButtons({
            darkMode,
            direction: demo.variant === 'Mobile' ? 'column' : 'row',
            onPrimary: () => setOpenDialog(null),
            onSecondary: () => setOpenDialog(null),
          })}
        />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Floating Panel section
// ---------------------------------------------------------------------------
function FloatingPanelSection({ darkMode }) {
  return (
    <div className="space-y-10">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">moveMoneyDropdown</h2>
        <p className="text-sm text-neutral-500 mb-4">Floating dropdown panel for the "Move money" action. Web (298px, drop shadow) and Mobile (375px, full-width with nav header). Collapsed shows 3 items, Expanded shows all 7.</p>
      </div>

      {/* Web variants */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Web — Collapsed / Expanded</h2>
        <p className="text-sm text-neutral-500 mb-4">298px wide with 8px radius and drop shadow. Click "More options" to toggle.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div className="flex flex-wrap gap-8 items-start">
            <FloatingPanel client="Web" darkMode={darkMode} />
            <FloatingPanel client="Web" state="Expanded" darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* Mobile variants */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Mobile — Collapsed / Expanded</h2>
        <p className="text-sm text-neutral-500 mb-4">375px wide, full-width with mobile nav header (close icon + title).</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div className="flex flex-wrap gap-8 items-start">
            <FloatingPanel client="Mobile" darkMode={darkMode} />
            <FloatingPanel client="Mobile" state="Expanded" darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* With banner */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">With Notification Banner</h2>
        <p className="text-sm text-neutral-500 mb-4">Optional banner slot (hasBanner) shown below header.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div className="flex flex-wrap gap-8 items-start">
            <FloatingPanel client="Web" hasBanner darkMode={darkMode} />
            <FloatingPanel client="Mobile" hasBanner darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Grids & Responsive Templates section (reference — no components)
// ---------------------------------------------------------------------------
const BREAKPOINTS = [
  { name: 'XS', range: '320–574px', cols: 12, gutters: '16px', padding: '16px', nav: 'Hamburger' },
  { name: 'S', range: '575–699px', cols: 12, gutters: '24px', padding: '24px', nav: 'Hamburger' },
  { name: 'M', range: '700–927px', cols: 12, gutters: '16–24px', padding: '24px', nav: 'Collapsed' },
  { name: 'L', range: '928–1287px', cols: 12, gutters: '24px', padding: '48px', nav: 'Collapsed' },
  { name: 'XL', range: '1288–1619px', cols: 12, gutters: '24px', padding: '64px', nav: 'Open / Collapsed' },
  { name: 'XXL', range: '1620–2020px', cols: 12, gutters: '24px', padding: '64px', nav: 'Open / Collapsed' },
]

const CONTAINERS = [
  { name: 'Extra Large', maxWidth: '1760px', cols: 12, padding: '64px', gutters: '24px' },
  { name: 'Large', maxWidth: '1200px', cols: 12, padding: '64px', gutters: '24px' },
  { name: 'Medium', maxWidth: '900px', cols: 12, padding: '48px', gutters: '24px' },
  { name: 'Small (1)', maxWidth: '—', cols: 12, padding: '24px', gutters: '24px' },
  { name: 'Small (2)', maxWidth: '—', cols: 12, padding: '24px', gutters: '24px' },
  { name: 'X-Small', maxWidth: '—', cols: 12, padding: '16px', gutters: '24px' },
]

const TEMPLATES = [
  { name: 'Full width', desc: 'Single full-width content area' },
  { name: 'Linear rows', desc: '4–6 vertically stacked content blocks' },
  { name: 'Cascade', desc: 'Stacked blocks with varied sizing' },
  { name: 'Fixed left column', desc: 'Left sidebar + content area' },
  { name: '1-2 split', desc: 'Narrow left, wide right' },
  { name: '2-1 split', desc: 'Wide left, narrow right' },
  { name: '2 column', desc: 'Equal two-column layout' },
]

const refTableStyle = {
  fontFamily: 'Inter, sans-serif', fontSize: 13, width: '100%',
  borderCollapse: 'collapse', textAlign: 'left',
}

function RefTh({ children }) {
  return (
    <th style={{ padding: '8px 12px', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#546073', borderBottom: '2px solid #D4DBE6' }}>
      {children}
    </th>
  )
}

function RefTd({ children, highlight }) {
  return (
    <td style={{ padding: '8px 12px', borderBottom: '1px solid #E8ECF2', color: '#1C2026', ...(highlight ? { fontWeight: 600 } : {}) }}>
      {children}
    </td>
  )
}

function GridsSection() {
  return (
    <div className="space-y-10">
      {/* Intro */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Grids & Responsive Templates</h2>
        <p className="text-sm text-neutral-500 mb-0">Reference documentation — no components. Defines breakpoints, container constraints, and page layout templates for the M1 product.</p>
      </div>

      {/* Breakpoints */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Breakpoints</h2>
        <p className="text-sm text-neutral-500 mb-4">6 responsive breakpoints from 320px to 2020px. All use a 12-column grid.</p>
        <div className="rounded-xl border p-6 overflow-x-auto" style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}>
          <table style={refTableStyle}>
            <thead>
              <tr>
                <RefTh>Breakpoint</RefTh>
                <RefTh>Width range</RefTh>
                <RefTh>Columns</RefTh>
                <RefTh>Gutters</RefTh>
                <RefTh>Padding</RefTh>
                <RefTh>Navigation</RefTh>
              </tr>
            </thead>
            <tbody>
              {BREAKPOINTS.map((bp) => (
                <tr key={bp.name}>
                  <RefTd highlight>{bp.name}</RefTd>
                  <RefTd>{bp.range}</RefTd>
                  <RefTd>{bp.cols}</RefTd>
                  <RefTd>{bp.gutters}</RefTd>
                  <RefTd>{bp.padding}</RefTd>
                  <RefTd>{bp.nav}</RefTd>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual breakpoint bars */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Breakpoint Visualization</h2>
        <p className="text-sm text-neutral-500 mb-4">Relative widths of each breakpoint range.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'Inter, sans-serif' }}>
            {BREAKPOINTS.map((bp) => {
              const max = { XS: 574, S: 699, M: 927, L: 1287, XL: 1619, XXL: 2020 }[bp.name]
              const pct = (max / 2020) * 100
              return (
                <div key={bp.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 32, fontSize: 12, fontWeight: 600, color: '#546073', textAlign: 'right', flexShrink: 0 }}>{bp.name}</span>
                  <div style={{ flex: 1, position: 'relative', height: 28 }}>
                    <div style={{
                      width: `${pct}%`, height: '100%', borderRadius: 4,
                      background: 'linear-gradient(90deg, #2A7DA7 0%, #6FA7C3 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8,
                      minWidth: 60,
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 500, color: '#FFFFFF' }}>{bp.range}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Container constraints */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Web Container Constraints</h2>
        <p className="text-sm text-neutral-500 mb-4">Most M1 pages use Extra Large (1760px max). All product screens with side navigation are container-constrained.</p>
        <div className="rounded-xl border p-6 overflow-x-auto" style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}>
          <table style={refTableStyle}>
            <thead>
              <tr>
                <RefTh>Constraint</RefTh>
                <RefTh>Max width</RefTh>
                <RefTh>Columns</RefTh>
                <RefTh>Padding</RefTh>
                <RefTh>Gutters</RefTh>
              </tr>
            </thead>
            <tbody>
              {CONTAINERS.map((c) => (
                <tr key={c.name}>
                  <RefTd highlight>{c.name}</RefTd>
                  <RefTd>{c.maxWidth}</RefTd>
                  <RefTd>{c.cols}</RefTd>
                  <RefTd>{c.padding}</RefTd>
                  <RefTd>{c.gutters}</RefTd>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Base grid states */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Base Grid States</h2>
        <p className="text-sm text-neutral-500 mb-4">For viewports ≥700px, 4 layout states are available based on nav and panel visibility. Below 700px, nav becomes a hamburger menu.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, fontFamily: 'Inter, sans-serif' }}>
            {[
              { label: 'Nav Open, Panel', nav: 264, panel: 360 },
              { label: 'Nav Open (Default)', nav: 264, panel: 0 },
              { label: 'Collapsed, Panel', nav: 72, panel: 360 },
              { label: 'Collapsed (Default)', nav: 72, panel: 0 },
            ].map((s) => {
              const total = s.nav + s.panel + 400
              return (
                <div key={s.label} style={{ borderRadius: 8, border: '1px solid #E8ECF2', overflow: 'hidden' }}>
                  <div style={{ padding: '8px 12px', backgroundColor: '#F3F5F8', fontSize: 12, fontWeight: 600, color: '#1C2026' }}>
                    {s.label}
                  </div>
                  <div style={{ display: 'flex', height: 48 }}>
                    <div style={{
                      width: `${(s.nav / total) * 100}%`, backgroundColor: '#2A7DA7',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: 10, color: '#FFFFFF', fontWeight: 500 }}>{s.nav}px</span>
                    </div>
                    <div style={{
                      flex: 1, backgroundColor: '#FFFFFF', borderLeft: '1px solid #E8ECF2', borderRight: s.panel ? '1px solid #E8ECF2' : 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: 10, color: '#546073', fontWeight: 500 }}>Content</span>
                    </div>
                    {s.panel > 0 && (
                      <div style={{
                        width: `${(s.panel / total) * 100}%`, backgroundColor: '#E5EFF4',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: 10, color: '#2A7DA7', fontWeight: 500 }}>{s.panel}px</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Container grid templates */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Container Grid Templates</h2>
        <p className="text-sm text-neutral-500 mb-4">7 layout patterns for content arrangement within the container grid.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, fontFamily: 'Inter, sans-serif' }}>
            {TEMPLATES.map((tpl) => {
              const cols = {
                'Full width': ['1fr'],
                'Linear rows': ['1fr', '1fr', '1fr', '1fr'],
                'Cascade': ['1fr', '0.7fr', '0.5fr'],
                'Fixed left column': null,
                '1-2 split': null,
                '2-1 split': null,
                '2 column': null,
              }[tpl.name]
              return (
                <div key={tpl.name} style={{ borderRadius: 8, border: '1px solid #E8ECF2', overflow: 'hidden' }}>
                  <div style={{ padding: '8px 12px', backgroundColor: '#F3F5F8', fontSize: 12, fontWeight: 600, color: '#1C2026' }}>
                    {tpl.name}
                  </div>
                  <div style={{ padding: 12, minHeight: 64 }}>
                    {cols ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {cols.map((fr, i) => (
                          <div key={i} style={{
                            height: 10, borderRadius: 2,
                            backgroundColor: '#2A7DA7', opacity: 0.15 + (i * 0.15),
                            width: fr === '1fr' ? '100%' : `${parseFloat(fr) * 100}%`,
                          }} />
                        ))}
                      </div>
                    ) : (
                      <div style={{ display: 'flex', gap: 4, height: 40 }}>
                        {tpl.name === 'Fixed left column' && (
                          <>
                            <div style={{ width: '25%', borderRadius: 2, backgroundColor: '#2A7DA7', opacity: 0.4 }} />
                            <div style={{ flex: 1, borderRadius: 2, backgroundColor: '#2A7DA7', opacity: 0.2 }} />
                          </>
                        )}
                        {tpl.name === '1-2 split' && (
                          <>
                            <div style={{ width: '33%', borderRadius: 2, backgroundColor: '#2A7DA7', opacity: 0.3 }} />
                            <div style={{ flex: 1, borderRadius: 2, backgroundColor: '#2A7DA7', opacity: 0.5 }} />
                          </>
                        )}
                        {tpl.name === '2-1 split' && (
                          <>
                            <div style={{ flex: 1, borderRadius: 2, backgroundColor: '#2A7DA7', opacity: 0.5 }} />
                            <div style={{ width: '33%', borderRadius: 2, backgroundColor: '#2A7DA7', opacity: 0.3 }} />
                          </>
                        )}
                        {tpl.name === '2 column' && (
                          <>
                            <div style={{ flex: 1, borderRadius: 2, backgroundColor: '#2A7DA7', opacity: 0.35 }} />
                            <div style={{ flex: 1, borderRadius: 2, backgroundColor: '#2A7DA7', opacity: 0.35 }} />
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '4px 12px 8px', fontSize: 11, color: '#546073' }}>{tpl.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Nav dimensions reference */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Key Dimensions</h2>
        <p className="text-sm text-neutral-500 mb-4">Fixed widths used across all grid states.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, fontFamily: 'Inter, sans-serif' }}>
            {[
              { label: 'Nav Open', value: '264px' },
              { label: 'Nav Collapsed', value: '72px' },
              { label: 'Intelligence Panel', value: '360px' },
              { label: 'Max Content Width', value: '1760px' },
            ].map((d) => (
              <div key={d.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: '#546073', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{d.label}</span>
                <span style={{ fontSize: 24, fontWeight: 600, color: '#1C2026' }}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Img Assets section
// ---------------------------------------------------------------------------
function ImgAssetsSection({ darkMode }) {
  return (
    <div className="space-y-10">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Img Assets</h2>
        <p className="text-sm text-neutral-500 mb-0">Image containers with fixed aspect ratios and placeholder wrappers. 2 component sets + 1 standalone.</p>
      </div>

      {/* .imageFixedAspectRatio */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">.imageFixedAspectRatio</h2>
        <p className="text-sm text-neutral-500 mb-4">Image container enforcing a fixed aspect ratio. 3 variants: 16:9 (240×135), 4:3 (240×180), 1:1 (240×240).</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end' }}>
            {['16:9', '4:3', '1:1'].map((ratio) => (
              <div key={ratio} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <ImageFixedAspectRatio ratio={ratio} darkMode={darkMode} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>
                  {ratio}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* imagePlaceholder */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">imagePlaceholder</h2>
        <p className="text-sm text-neutral-500 mb-4">Wrapper around .imageFixedAspectRatio. Default (1:1, 24px padding, 288×288) and Mobile (16:9, no padding, 343×193).</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                border: `1px dashed ${darkMode ? '#2F3641' : '#D4DBE6'}`,
                borderRadius: 4,
              }}>
                <ImagePlaceholder type="Default" darkMode={darkMode} />
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>
                Default — 288×288, 24px padding
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{
                border: `1px dashed ${darkMode ? '#2F3641' : '#D4DBE6'}`,
                borderRadius: 4,
              }}>
                <ImagePlaceholder type="Mobile" darkMode={darkMode} />
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>
                Mobile — 343×193, no padding
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* imagePlaceholder/Type3 */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">imagePlaceholder/Type3</h2>
        <p className="text-sm text-neutral-500 mb-4">Standalone component — visually identical to Default (288×288, 24px padding, 1:1). Lives outside the imagePlaceholder component set.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <div style={{
              border: `1px dashed ${darkMode ? '#2F3641' : '#D4DBE6'}`,
              borderRadius: 4,
            }}>
              <ImagePlaceholder type="Default" darkMode={darkMode} />
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>
              Type3 — identical to Default
            </span>
          </div>
        </div>
      </div>

      {/* Sizing reference */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Sizing Reference</h2>
        <p className="text-sm text-neutral-500 mb-4">All component dimensions from the spec.</p>
        <div
          className="rounded-xl border p-6 overflow-x-auto"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <table style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, width: '100%',
            borderCollapse: 'collapse', textAlign: 'left',
            color: darkMode ? '#ECEFF4' : '#1C2026',
          }}>
            <thead>
              <tr>
                {['Component', 'Variant', 'Width', 'Height', 'Aspect Ratio'].map((h) => (
                  <th key={h} style={{
                    padding: '8px 12px', fontWeight: 600, fontSize: 11,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    color: darkMode ? '#8F9BAE' : '#546073',
                    borderBottom: `2px solid ${darkMode ? '#2F3641' : '#D4DBE6'}`,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['.imageFixedAspectRatio', '16:9', '240px', '135px', '16:9'],
                ['.imageFixedAspectRatio', '4:3', '240px', '180px', '4:3'],
                ['.imageFixedAspectRatio', '1:1', '240px', '240px', '1:1'],
                ['imagePlaceholder', 'Default', '288px', '288px', '1:1'],
                ['imagePlaceholder', 'Mobile', '343px', '193px', '16:9'],
                ['imagePlaceholder/Type3', '—', '288px', '288px', '1:1'],
              ].map(([comp, variant, w, h, ar], i) => (
                <tr key={i}>
                  <td style={{ padding: '8px 12px', fontWeight: 600, borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{comp}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{variant}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{w}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{h}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{ar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Links section
// ---------------------------------------------------------------------------
function LinksSection({ darkMode }) {
  const sizes = ['Large', 'Medium', 'Small']
  const kinds = ['Default', 'Underline', 'Super']

  return (
    <div className="space-y-10">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Links</h2>
        <p className="text-sm text-neutral-500 mb-0">1 component set, 9 variants (Size 3 × Kind 3). Color: FG/Primary (#2A7DA7).</p>
      </div>

      {/* All variants grid */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">All Variants</h2>
        <p className="text-sm text-neutral-500 mb-4">Size × Kind matrix. Default is semibold with no underline. Underline and Super use regular weight with underline decoration.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <table style={{ fontFamily: 'Inter, sans-serif', borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ padding: '8px 16px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: darkMode ? '#8F9BAE' : '#546073', borderBottom: `2px solid ${darkMode ? '#2F3641' : '#D4DBE6'}`, textAlign: 'left' }}>
                  Size / Kind
                </th>
                {kinds.map((kind) => (
                  <th key={kind} style={{ padding: '8px 16px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: darkMode ? '#8F9BAE' : '#546073', borderBottom: `2px solid ${darkMode ? '#2F3641' : '#D4DBE6'}`, textAlign: 'left' }}>
                    {kind}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.map((size) => (
                <tr key={size}>
                  <td style={{ padding: '12px 16px', fontWeight: 600, fontSize: 13, color: darkMode ? '#ECEFF4' : '#1C2026', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>
                    {size}
                  </td>
                  {kinds.map((kind) => (
                    <td key={kind} style={{ padding: '12px 16px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>
                      <Link
                        size={size}
                        kind={kind}
                        superNum={kind === 'Super' ? sizes.indexOf(size) + 1 : null}
                        darkMode={darkMode}
                      >
                        {kind === 'Default' ? 'Learn more' : kind === 'Underline' ? 'Terms and conditions' : 'Disclosure link'}
                      </Link>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Usage examples */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Usage Examples</h2>
        <p className="text-sm text-neutral-500 mb-4">Common link patterns from the design system guidelines.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Stacked disclosure links */}
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Stacked disclosure links</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Link size="Medium" kind="Underline" darkMode={darkMode}>Privacy policy</Link>
                <Link size="Medium" kind="Underline" darkMode={darkMode}>Terms of service</Link>
                <Link size="Medium" kind="Underline" darkMode={darkMode}>FINRA BrokerCheck</Link>
              </div>
            </div>

            {/* Super disclosure links */}
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Super links with numbered references</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Link size="Small" kind="Super" superNum={1} darkMode={darkMode}>FDIC insurance terms and conditions</Link>
                <Link size="Small" kind="Super" superNum={2} darkMode={darkMode}>Investment advisory agreement</Link>
                <Link size="Small" kind="Super" superNum={3} darkMode={darkMode}>Brokerage account agreement</Link>
              </div>
            </div>

            {/* Link next to button */}
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Link next to button (M1 Plus terms pattern)</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 600,
                  fontSize: 14, lineHeight: '20px',
                  padding: '12px 24px', borderRadius: 24,
                  border: 'none',
                  backgroundColor: darkMode ? '#6FA7C3' : '#2A7DA7',
                  color: darkMode ? '#1C2026' : '#FFFFFF',
                  cursor: 'pointer',
                }}>
                  Get M1 Plus
                </button>
                <Link size="Medium" kind="Underline" darkMode={darkMode}>View membership terms</Link>
              </div>
            </div>

            {/* Standalone default link */}
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 12 }}>Standalone action link</span>
              <Link size="Large" kind="Default" darkMode={darkMode}>View all transactions →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Typography reference */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Typography Reference</h2>
        <p className="text-sm text-neutral-500 mb-4">Font specs per variant from the design system.</p>
        <div
          className="rounded-xl border p-6 overflow-x-auto"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <table style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, width: '100%',
            borderCollapse: 'collapse', textAlign: 'left',
            color: darkMode ? '#ECEFF4' : '#1C2026',
          }}>
            <thead>
              <tr>
                {['Size', 'Kind', 'Weight', 'Font Size', 'Line Height', 'Decoration', 'Pad Y'].map((h) => (
                  <th key={h} style={{
                    padding: '8px 12px', fontWeight: 600, fontSize: 11,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    color: darkMode ? '#8F9BAE' : '#546073',
                    borderBottom: `2px solid ${darkMode ? '#2F3641' : '#D4DBE6'}`,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Large', 'Default', '600', '16px', '24px', 'None', '8px'],
                ['Large', 'Underline', '400', '16px', '24px', 'Underline', '12px'],
                ['Large', 'Super', '400', '16px', '24px', 'Underline', '12px'],
                ['Medium', 'Default', '600', '14px', '20px', 'None', '6px'],
                ['Medium', 'Underline', '400', '14px', '20px', 'Underline', '8px'],
                ['Medium', 'Super', '400', '14px', '20px', 'Underline', '8px'],
                ['Small', 'Default', '600', '12px', '16px', 'None', '2px'],
                ['Small', 'Underline', '400', '12px', '16px', 'Underline', '2px'],
                ['Small', 'Super', '400', '12px', '16px', 'Underline', '2px'],
              ].map(([size, kind, wt, fs, lh, dec, pad], i) => (
                <tr key={i}>
                  {[size, kind, wt, fs, lh, dec, pad].map((val, j) => (
                    <td key={j} style={{
                      padding: '8px 12px',
                      fontWeight: j < 2 ? 600 : 400,
                      borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}`,
                    }}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// List Items section
// ---------------------------------------------------------------------------
function ListItemsSection({ darkMode }) {
  return (
    <div className="space-y-10">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">List Items</h2>
        <p className="text-sm text-neutral-500 mb-0">4 component sets: listItem (2v), .To-Do-List (3v), Basiclistitem/web (3v), Basiclistitem/mobile (4v).</p>
      </div>

      {/* listItem — Large/Mobile and Default/Web */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">listItem</h2>
        <p className="text-sm text-neutral-500 mb-4">Rich list item with title, label, pill, description rows, leading icon, and trailing caret. Large/Mobile (16px pad, no horizontal) and Default/Web (32px/24px pad).</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>Large / Mobile</span>
              <div style={{ border: `1px solid ${darkMode ? '#2F3641' : '#E8ECF2'}`, borderRadius: 8, overflow: 'hidden' }}>
                <ListItem
                  type="Large" client="Mobile"
                  title="Smart Transfer"
                  label="Automatic investing"
                  pill="New"
                  descriptions={[
                    { text: 'Automatically invest excess cash above your threshold', showCaret: true },
                    { text: 'Set up in 2 minutes — no minimums required', showCaret: true },
                  ]}
                  darkMode={darkMode}
                />
              </div>
            </div>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>Default / Web</span>
              <div style={{ border: `1px solid ${darkMode ? '#2F3641' : '#E8ECF2'}`, borderRadius: 8, overflow: 'hidden' }}>
                <ListItem
                  type="Default" client="Web"
                  title="Portfolio Performance"
                  label="Brokerage account"
                  descriptions={[
                    { text: 'Total value: $142,039.42 (+12.4% all time)', showCaret: true },
                    { text: 'Today: +$324.18 (+0.23%)', showCaret: false },
                    { text: 'View detailed breakdown', showCaret: true },
                  ]}
                  darkMode={darkMode}
                />
              </div>
            </div>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>Without icon or caret</span>
              <div style={{ border: `1px solid ${darkMode ? '#2F3641' : '#E8ECF2'}`, borderRadius: 8, overflow: 'hidden' }}>
                <ListItem
                  type="Default" client="Web"
                  title="Account Settings"
                  label="Manage your preferences"
                  hasIcon={false} hasCaret={false}
                  descriptions={[
                    { text: 'Personal information and security', showCaret: false },
                  ]}
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* .To-Do-List */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">.To-Do-List</h2>
        <p className="text-sm text-neutral-500 mb-4">Leading indicator — Completed (green check), Remaining (numbered), Dot (bullet). All 24×24.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { state: 'Completed', label: 'Completed' },
              { state: 'Remaining', label: 'Remaining (1)' },
              { state: 'Remaining', number: 2, label: 'Remaining (2)' },
              { state: 'Dot', label: 'Dot' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <ToDoList state={item.state} number={item.number || 1} darkMode={darkMode} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: darkMode ? '#8F9BAE' : '#546073' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* To-Do-List in context */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">.To-Do-List — In Context</h2>
        <p className="text-sm text-neutral-500 mb-4">Checklist pattern using To-Do-List indicators with description text.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'Inter, sans-serif', maxWidth: 400 }}>
            {[
              { state: 'Completed', text: 'Create your account' },
              { state: 'Completed', text: 'Verify your identity' },
              { state: 'Remaining', number: 3, text: 'Fund your account' },
              { state: 'Remaining', number: 4, text: 'Build your portfolio' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: `1px solid ${darkMode ? '#2F3641' : '#E8ECF2'}` }}>
                <ToDoList state={item.state} number={item.number || 1} darkMode={darkMode} />
                <span style={{
                  fontSize: 14, lineHeight: '20px',
                  color: item.state === 'Completed' ? (darkMode ? '#8F9BAE' : '#546073') : (darkMode ? '#ECEFF4' : '#1C2026'),
                  textDecoration: item.state === 'Completed' ? 'line-through' : 'none',
                }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Basiclistitem/web */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Basiclistitem/web</h2>
        <p className="text-sm text-neutral-500 mb-4">Web description row — Paragraph, Bulleted, Numbered. 374×40 with optional trailing caret.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Paragraph', 'Bulleted', 'Numbered'].map((v) => (
              <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', width: 80, flexShrink: 0 }}>{v}</span>
                <BasicListItem client="Web" variant={v} text={`${v} description row with trailing caret`} darkMode={darkMode} />
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', width: 80, flexShrink: 0 }}>No caret</span>
              <BasicListItem client="Web" variant="Paragraph" text="Description row without caret" showCaret={false} darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>

      {/* Basiclistitem/mobile */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Basiclistitem/mobile</h2>
        <p className="text-sm text-neutral-500 mb-4">Mobile description row — Paragraph, Bulleted, Numbered, Icon. Icon variant adds a leading 32×32 icon.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Paragraph', 'Bulleted', 'Numbered', 'Icon'].map((v) => (
              <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', width: 80, flexShrink: 0 }}>{v}</span>
                <BasicListItem client="Mobile" variant={v} text={`${v} mobile description row`} darkMode={darkMode} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Loading States section
// ---------------------------------------------------------------------------
function LoadingStatesSection() {
  return (
    <div className="space-y-10">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Loading States</h2>
        <p className="text-sm text-neutral-500 mb-0">2 component sets: Spinner (2v) and skeleton-loader (2v). Both have Light and Dark theme variants.</p>
      </div>

      {/* Spinner */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Spinner</h2>
        <p className="text-sm text-neutral-500 mb-4">Animated circular arc indicator. 120×120 base, 1.5px stroke. Light (#8693A9) and Dark (#4B4C4E) themes.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Light */}
          <div
            className="rounded-xl border p-6 flex flex-col items-center gap-4"
            style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#8F9BAE' }}>Light theme</span>
            <Spinner theme="Light" />
          </div>
          {/* Dark */}
          <div
            className="rounded-xl border p-6 flex flex-col items-center gap-4"
            style={{ borderColor: '#2F3641', backgroundColor: '#0F1115' }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#5E6D82' }}>Dark theme</span>
            <Spinner theme="Dark" />
          </div>
        </div>
      </div>

      {/* Spinner sizes */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Spinner — Scaled Sizes</h2>
        <p className="text-sm text-neutral-500 mb-4">Base is 120px. Commonly scaled down for inline use.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
            {[24, 40, 64, 120].map((s) => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Spinner theme="Light" size={s} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#8F9BAE' }}>{s}px</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* skeleton-loader */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">skeleton-loader</h2>
        <p className="text-sm text-neutral-500 mb-4">Shimmer gradient placeholder. Base 90×80, 4px radius. Resizable to match content. Gradient uses #D4DBE6 at varying opacities.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Light */}
          <div
            className="rounded-xl border p-6 flex flex-col gap-4"
            style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#8F9BAE' }}>Light theme</span>
            <SkeletonLoader theme="Light" />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#8F9BAE' }}>Base size — 90×80</span>
          </div>
          {/* Dark */}
          <div
            className="rounded-xl border p-6 flex flex-col gap-4"
            style={{ borderColor: '#2F3641', backgroundColor: '#0F1115' }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#5E6D82' }}>Dark theme</span>
            <SkeletonLoader theme="Dark" />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#5E6D82' }}>Base size — 90×80</span>
          </div>
        </div>
      </div>

      {/* Skeleton composition */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Skeleton — Content Placeholder</h2>
        <p className="text-sm text-neutral-500 mb-4">Skeleton loaders resized to approximate a card layout.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Light card skeleton */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: '#D4DBE6', backgroundColor: '#FFFFFF' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
              <SkeletonLoader theme="Light" width={320} height={160} borderRadius={8} />
              <SkeletonLoader theme="Light" width={200} height={20} borderRadius={4} />
              <SkeletonLoader theme="Light" width={280} height={14} borderRadius={4} />
              <SkeletonLoader theme="Light" width={240} height={14} borderRadius={4} />
              <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                <SkeletonLoader theme="Light" width={100} height={36} borderRadius={18} />
                <SkeletonLoader theme="Light" width={80} height={36} borderRadius={18} />
              </div>
            </div>
          </div>
          {/* Dark card skeleton */}
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: '#2F3641', backgroundColor: '#0F1115' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
              <SkeletonLoader theme="Dark" width={320} height={160} borderRadius={8} />
              <SkeletonLoader theme="Dark" width={200} height={20} borderRadius={4} />
              <SkeletonLoader theme="Dark" width={280} height={14} borderRadius={4} />
              <SkeletonLoader theme="Dark" width={240} height={14} borderRadius={4} />
              <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                <SkeletonLoader theme="Dark" width={100} height={36} borderRadius={18} />
                <SkeletonLoader theme="Dark" width={80} height={36} borderRadius={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Navigation section
// ---------------------------------------------------------------------------
const MOBILE_HEADER_TYPES = ['Default', 'Actions', 'Onboarding']
const MOBILE_TAB_PAGES = ['Home', 'Earn', 'Invest', 'Borrow', 'Intelligence']
const WEB_FOOTER_CONFIGS = [
  { breakpoint: 'Desktop', alignment: 'Left' },
  { breakpoint: 'Desktop', alignment: 'Centered' },
  { breakpoint: 'Tablet', alignment: 'Left' },
  { breakpoint: 'Mobile web', alignment: 'Left' },
]

function NavigationSection({ darkMode }) {
  const [activeTab, setActiveTab] = useState('Home')
  const [navSelection, setNavSelection] = useState('Home')
  const [navCollapsed, setNavCollapsed] = useState(false)

  const bg = darkMode ? '#0F1115' : '#FFFFFF'
  const border = darkMode ? '#2F3641' : '#D4DBE6'

  return (
    <div className="space-y-10">
      {/* Mobile Header */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Mobile Header</h2>
        <p className="text-sm text-neutral-500 mb-4">Composed: StatusBar + MobileNav. 3 types × iOS/Android × Light/Dark.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MOBILE_HEADER_TYPES.map((type) => (
            <div key={type}>
              <h3 className="text-sm font-medium text-neutral-600 mb-2">{type}</h3>
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: border, backgroundColor: bg }}>
                <MobileHeader device="iOS" type={type} darkMode={darkMode} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Tab Bar */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Mobile Tab Bar</h2>
        <p className="text-sm text-neutral-500 mb-4">Bottom navigation with 5 tabs. Active tab has pill highlight + gradient icon.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {MOBILE_TAB_PAGES.map((p) => (
            <button
              key={p}
              onClick={() => setActiveTab(p)}
              className={[
                'px-3 py-1 rounded text-xs font-medium border transition-colors',
                activeTab === p ? 'bg-neutral-800 text-white border-neutral-700' : 'bg-white text-neutral-600 border-neutral-200',
              ].join(' ')}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="rounded-xl border overflow-hidden inline-block" style={{ borderColor: border, backgroundColor: bg }}>
          <MobileTabBar activePage={activeTab} darkMode={darkMode} platform="iOS" />
        </div>
      </div>

      {/* Web Top Header */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Top Header</h2>
        <p className="text-sm text-neutral-500 mb-4">Web header bar with menu icon, logo, and promo snippet. Border On/Off variants.</p>
        <div className="space-y-4">
          {[true, false].map((b) => (
            <div key={String(b)}>
              <h3 className="text-sm font-medium text-neutral-600 mb-2">Border={b ? 'On' : 'Off'}</h3>
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: border, backgroundColor: bg }}>
                <TopHeader border={b} darkMode={darkMode} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Web Rail Nav */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Web Rail Nav</h2>
        <p className="text-sm text-neutral-500 mb-4">Sidebar navigation. Expanded (264px) / Collapsed (72px) with 6 selection states. Click sections to expand sub-navigation.</p>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <button
            onClick={() => setNavCollapsed(!navCollapsed)}
            className={[
              'px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors',
              navCollapsed ? 'bg-neutral-800 text-white border-neutral-700' : 'bg-white text-neutral-600 border-neutral-200',
            ].join(' ')}
          >
            {navCollapsed ? 'Collapsed' : 'Expanded'}
          </button>
          <span className="text-xs text-neutral-400 mx-1">|</span>
          {['Home', 'Earn', 'Invest', 'Borrow', 'Research', 'Settings'].map((sel) => (
            <button
              key={sel}
              onClick={() => setNavSelection(sel)}
              className={[
                'px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors',
                navSelection === sel ? 'bg-neutral-800 text-white border-neutral-700' : 'bg-white text-neutral-600 border-neutral-200',
              ].join(' ')}
            >
              {sel}
            </button>
          ))}
        </div>
        <div className="rounded-xl border overflow-hidden inline-block" style={{ borderColor: border }}>
          <WebRailNav
            selection={navSelection}
            collapsed={navCollapsed}
            darkMode={darkMode}
            onSelect={setNavSelection}
          />
        </div>
      </div>

      {/* AppNavigationItem states */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">AppNavigationItem — States</h2>
        <p className="text-sm text-neutral-500 mb-4">Default, Hover, Focused, Selected states for sidebar nav items.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
          <div className="space-y-1" style={{ width: 264 }}>
            {['Default', 'Hover', 'Focused', 'Selected'].map((state) => (
              <AppNavigationItem key={state} label={state} state={state} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>

      {/* Web Footer */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Web Footer</h2>
        <p className="text-sm text-neutral-500 mb-4">Responsive footer: Desktop/Tablet/Mobile web × Left/Centered alignment.</p>
        <div className="space-y-6">
          {WEB_FOOTER_CONFIGS.map((cfg) => (
            <div key={`${cfg.breakpoint}-${cfg.alignment}`}>
              <h3 className="text-sm font-medium text-neutral-600 mb-2">{cfg.breakpoint} / {cfg.alignment}</h3>
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: border, backgroundColor: bg }}>
                <WebFooter breakpoint={cfg.breakpoint} alignment={cfg.alignment} darkMode={darkMode} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Token reference */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Shared Tokens</h2>
        <div className="overflow-x-auto">
          <table className="text-sm border-collapse w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Token</th>
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Light</th>
                <th className="text-left py-2 font-medium text-neutral-500">Dark</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">FG/Neutral Main</td><td className="pr-4">#1C2026</td><td>#ECEFF4</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">FG/Neutral Secondary</td><td className="pr-4">#546073</td><td>#8F9BAE</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">BG/Neutral Primary</td><td className="pr-4">#FFFFFF</td><td>#0F1115</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Border/Main</td><td className="pr-4">#D4DBE6</td><td>#2F3641</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">FG/Primary (Teal/04)</td><td className="pr-4">#2A7DA7</td><td>#6FA7C3</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">BG/Info Subtle</td><td className="pr-4">#E8EDF5</td><td>#272C35</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Blue/08</td><td className="pr-4">#152B56</td><td>#CCD6EA</td></tr>
              <tr><td className="py-1.5 pr-4">Active tab pill bg</td><td className="pr-4">#EDEDED</td><td>#121212</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Inputs section
// ---------------------------------------------------------------------------
const INPUT_STATES = ['Default', 'Active', 'Error', 'Disabled', 'Filled']
const INPUT_TYPES = ['Text', 'Dropdown', 'Date']
const INPUT_KINDS = ['Flat', 'Elevated']
const SEARCH_DEVICES = ['Web', 'iOS', 'Android']

function InputsSection({ darkMode }) {
  const [formValues, setFormValues] = useState({})
  const [multiValue, setMultiValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const bg = darkMode ? '#0F1115' : '#FFFFFF'
  const border = darkMode ? '#2F3641' : '#D4DBE6'

  return (
    <div className="space-y-10">
      {/* Form Fields — by State */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Form Fields — States</h2>
        <p className="text-sm text-neutral-500 mb-4">Default, Active, Error, Disabled, Filled — shown in both Flat and Elevated kinds.</p>
        {INPUT_KINDS.map((kind) => (
          <div key={kind} className="mb-6">
            <h3 className="text-sm font-medium text-neutral-600 mb-3">{kind}</h3>
            <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {INPUT_STATES.map((state) => (
                  <FormField
                    key={`${kind}-${state}`}
                    label={state}
                    value={state === 'Filled' ? 'Filled value' : (formValues[`${kind}-${state}`] || '')}
                    state={state}
                    kind={kind}
                    helperText={state === 'Error' ? 'Error message' : 'Helper text'}
                    darkMode={darkMode}
                    onChange={(v) => setFormValues((p) => ({ ...p, [`${kind}-${state}`]: v }))}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Form Fields — by Type */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Form Fields — Types</h2>
        <p className="text-sm text-neutral-500 mb-4">Text, Dropdown, and Date input types.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {INPUT_TYPES.map((type) => (
              <FormField
                key={type}
                label={type === 'Dropdown' ? 'Select option' : type === 'Date' ? 'Date of birth' : 'Full name'}
                value={formValues[`type-${type}`] || ''}
                type={type}
                kind="Elevated"
                darkMode={darkMode}
                onChange={(v) => setFormValues((p) => ({ ...p, [`type-${type}`]: v }))}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Prefix / Suffix */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Prefix &amp; Suffix</h2>
        <p className="text-sm text-neutral-500 mb-4">Optional prefix and suffix text decorations.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Amount" prefix="$" value={formValues['prefix'] || ''} kind="Elevated" darkMode={darkMode} onChange={(v) => setFormValues((p) => ({ ...p, prefix: v }))} />
            <FormField label="Weight" suffix="lbs" value={formValues['suffix'] || ''} kind="Elevated" darkMode={darkMode} onChange={(v) => setFormValues((p) => ({ ...p, suffix: v }))} />
          </div>
        </div>
      </div>

      {/* Multiline Input */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Multiline Input</h2>
        <p className="text-sm text-neutral-500 mb-4">Large text area with character count. Elevated kind only.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <MultilineInput
              label="Description"
              value={multiValue}
              maxLength={250}
              darkMode={darkMode}
              onChange={setMultiValue}
            />
            <div className="space-y-4">
              <MultilineInput label="Disabled" state="Disabled" darkMode={darkMode} />
              <MultilineInput label="Error" state="Error" helperText="This field is required" darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>

      {/* Search Field */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Search Field</h2>
        <p className="text-sm text-neutral-500 mb-4">Platform-specific search inputs: Web (pill), iOS (filled + Cancel), Android (rounded rect).</p>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
          <div className="space-y-6">
            {SEARCH_DEVICES.map((device) => (
              <div key={device}>
                <h3 className="text-sm font-medium mb-2" style={{ color: darkMode ? '#8F9BAE' : '#546073' }}>{device}</h3>
                <div style={{ maxWidth: device === 'iOS' ? 375 : 500 }}>
                  <SearchField
                    device={device}
                    value={searchValue}
                    darkMode={darkMode}
                    onChange={setSearchValue}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disabled search states */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Search Field — Disabled</h2>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
          <div className="space-y-4">
            {SEARCH_DEVICES.map((device) => (
              <div key={device} style={{ maxWidth: device === 'iOS' ? 375 : 500 }}>
                <SearchField device={device} state="Disabled" darkMode={darkMode} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shared tokens */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Token Reference</h2>
        <div className="overflow-x-auto">
          <table className="text-sm border-collapse w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">State</th>
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Border</th>
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Label</th>
                <th className="text-left py-2 font-medium text-neutral-500">Input Text</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Default</td><td className="pr-4">#8F9BAE</td><td className="pr-4">#546073</td><td>#546073</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Active</td><td className="pr-4">#2A7DA7</td><td className="pr-4">#2A7DA7</td><td>#1C2026</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Error</td><td className="pr-4">#C4382E</td><td className="pr-4">#C4382E</td><td>#1C2026</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Disabled</td><td className="pr-4">#D4DBE6</td><td className="pr-4">#8F9BAE</td><td>#8F9BAE</td></tr>
              <tr><td className="py-1.5 pr-4">Filled</td><td className="pr-4">#8F9BAE</td><td className="pr-4">#546073</td><td>#1C2026</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Intelligence Panel section
// ---------------------------------------------------------------------------
function IntelligencePanelSection({ darkMode }) {
  return (
    <div className="space-y-10">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">M1 Intelligence Panel</h2>
        <p className="text-sm text-neutral-500 mb-0">Collapsible AI chat interface (360px compact). Composed from existing components — no unique component set. Includes header, Chat/History tabs, welcome content, suggestion prompts, chat input, and footer.</p>
      </div>

      {/* Compact panel — light & dark */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Compact Panel — Chat Tab</h2>
        <p className="text-sm text-neutral-500 mb-4">360px wide. Header with expand/create/more/close icons. Suggestion prompts, chat input, Early Beta badge, and disclaimer footer.</p>
        <div
          className="rounded-xl p-8 flex flex-wrap gap-8 justify-center"
          style={{ backgroundColor: darkMode ? '#1A1E23' : '#F3F5F8' }}
        >
          <IntelligencePanel darkMode={darkMode} />
        </div>
      </div>

      {/* History tab */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Compact Panel — History Tab</h2>
        <p className="text-sm text-neutral-500 mb-4">Switched to History tab showing past conversations.</p>
        <div
          className="rounded-xl p-8 flex flex-wrap gap-8 justify-center"
          style={{ backgroundColor: darkMode ? '#1A1E23' : '#F3F5F8' }}
        >
          <IntelligencePanel darkMode={darkMode} activeTab="History" />
        </div>
      </div>

      {/* Anatomy reference */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Panel Anatomy</h2>
        <p className="text-sm text-neutral-500 mb-4">Structural breakdown of the panel composition.</p>
        <div
          className="rounded-xl border p-6 overflow-x-auto"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <table style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, width: '100%',
            borderCollapse: 'collapse', textAlign: 'left',
            color: darkMode ? '#ECEFF4' : '#1C2026',
          }}>
            <thead>
              <tr>
                {['Section', 'Elements', 'Key Specs'].map((h) => (
                  <th key={h} style={{
                    padding: '8px 12px', fontWeight: 600, fontSize: 11,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    color: darkMode ? '#8F9BAE' : '#546073',
                    borderBottom: `2px solid ${darkMode ? '#2F3641' : '#D4DBE6'}`,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Header bar', 'New chat label, expand/create/more/close icons', '14px/20px, 400wt'],
                ['Tab bar', 'Chat (active) / History tabs', '600wt active, 400wt inactive, 40px gap'],
                ['Welcome area', 'Greeting heading, subtitle', '28px/32px 500wt, 18px/24px 400wt'],
                ['Suggestions', '5 prompt buttons with +/caret icons', '12px/16px 600wt, 16px radius, 12px gap'],
                ['Chat input', 'Text field + send button (40×40 circle)', '12px radius, 12px padding'],
                ['Footer', 'Early Beta badge, disclaimer, legal links', '12px/16px, Gold/03 badge bg'],
              ].map(([section, elements, specs], i) => (
                <tr key={i}>
                  <td style={{ padding: '8px 12px', fontWeight: 600, borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{section}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{elements}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{specs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key dimensions */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Key Dimensions</h2>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, fontFamily: 'Inter, sans-serif' }}>
            {[
              { label: 'Panel Width', value: '360px' },
              { label: 'Panel Radius', value: '16px' },
              { label: 'Inner Radius', value: '12px' },
              { label: 'Tab Bar Height', value: '48px' },
              { label: 'Send Button', value: '40×40' },
              { label: 'Suggestion Radius', value: '16px' },
            ].map((d) => (
              <div key={d.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#546073', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{d.label}</span>
                <span style={{ fontSize: 24, fontWeight: 600, color: darkMode ? '#ECEFF4' : '#1C2026' }}>{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Pills section
// ---------------------------------------------------------------------------
const STATIC_PILL_KINDS = ['Success', 'Caution', 'Danger', 'Neutral', 'Promotion', 'Important', 'Info']

function PillsSection({ darkMode }) {
  const [selectedWeb, setSelectedWeb] = useState({})
  const [selectedMobile, setSelectedMobile] = useState({})

  return (
    <div className="space-y-10">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Pills</h2>
        <p className="text-sm text-neutral-500 mb-0">3 component sets: Static pills (7v), Actionable pills- Web (18v), Actionable pills- Mobile (4v).</p>
      </div>

      {/* Static pills */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Static Pills</h2>
        <p className="text-sm text-neutral-500 mb-4">Non-interactive status badges. 7 kinds with leading icon. 12px/16px, 24px radius, 20px height.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {STATIC_PILL_KINDS.map((kind) => (
              <StaticPill key={kind} kind={kind} label={kind} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>

      {/* Actionable pills — Web Primary */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Actionable Pills — Web / Primary</h2>
        <p className="text-sm text-neutral-500 mb-4">Interactive filter chips. Large and Small sizes. Default → Hover → Selected states. Click to toggle.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Large with icon */}
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>Large — with icon</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Stocks', 'Crypto', 'ETFs', 'Bonds'].map((label) => (
                  <ActionablePill
                    key={label}
                    kind="Primary" size="Large" icon
                    label={label}
                    selected={!!selectedWeb[`pi-${label}`]}
                    onClick={() => setSelectedWeb(s => ({ ...s, [`pi-${label}`]: !s[`pi-${label}`] }))}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
            {/* Large without icon */}
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>Large — no icon</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['All', '1D', '1W', '1M', '3M', '1Y'].map((label) => (
                  <ActionablePill
                    key={label}
                    kind="Primary" size="Large" icon={false}
                    label={label}
                    selected={!!selectedWeb[`pn-${label}`]}
                    onClick={() => setSelectedWeb(s => ({ ...s, [`pn-${label}`]: !s[`pn-${label}`] }))}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
            {/* Small without icon */}
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>Small — no icon</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Buy', 'Sell', 'Dividend', 'Transfer'].map((label) => (
                  <ActionablePill
                    key={label}
                    kind="Primary" size="Small" icon={false}
                    label={label}
                    selected={!!selectedWeb[`ps-${label}`]}
                    onClick={() => setSelectedWeb(s => ({ ...s, [`ps-${label}`]: !s[`ps-${label}`] }))}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actionable pills — Web Secondary */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Actionable Pills — Web / Secondary</h2>
        <p className="text-sm text-neutral-500 mb-4">Blue-toned secondary kind. Same size/state/icon matrix as Primary.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>Large — with icon</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Growth', 'Value', 'Income'].map((label) => (
                  <ActionablePill
                    key={label}
                    kind="Secondary" size="Large" icon
                    label={label}
                    selected={!!selectedWeb[`si-${label}`]}
                    onClick={() => setSelectedWeb(s => ({ ...s, [`si-${label}`]: !s[`si-${label}`] }))}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>Small — no icon</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Tech', 'Healthcare', 'Energy', 'Finance'].map((label) => (
                  <ActionablePill
                    key={label}
                    kind="Secondary" size="Small" icon={false}
                    label={label}
                    selected={!!selectedWeb[`ss-${label}`]}
                    onClick={() => setSelectedWeb(s => ({ ...s, [`ss-${label}`]: !s[`ss-${label}`] }))}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actionable pills — Mobile */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Actionable Pills — Mobile</h2>
        <p className="text-sm text-neutral-500 mb-4">Mobile short-form pills with 40×40 touch target. Default and Selected states, with or without icon.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>With icon</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Stocks', 'Crypto', 'ETFs'].map((label) => (
                  <ActionablePillMobile
                    key={label}
                    icon
                    label={label}
                    selected={!!selectedMobile[`mi-${label}`]}
                    onClick={() => setSelectedMobile(s => ({ ...s, [`mi-${label}`]: !s[`mi-${label}`] }))}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
            <div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: darkMode ? '#5E6D82' : '#8F9BAE', display: 'block', marginBottom: 8 }}>Without icon</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['All', 'Buy', 'Sell'].map((label) => (
                  <ActionablePillMobile
                    key={label}
                    icon={false}
                    label={label}
                    selected={!!selectedMobile[`mn-${label}`]}
                    onClick={() => setSelectedMobile(s => ({ ...s, [`mn-${label}`]: !s[`mn-${label}`] }))}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Switch section
// ---------------------------------------------------------------------------
function SwitchSection({ darkMode }) {
  const [states, setStates] = useState({ Web: true, iOS26: false, iOS18: true, Android: false })

  return (
    <div className="space-y-10">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Switch (.Switch)</h2>
        <p className="text-sm text-neutral-500 mb-0">1 component set, 16 variants (Client 4 × State 4). Supersedes the legacy Switch from Check boxes and radio buttons.</p>
      </div>

      {/* All clients — interactive */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">All Clients — Interactive</h2>
        <p className="text-sm text-neutral-500 mb-4">Click to toggle. Each client has platform-specific sizing and styling.</p>
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
                      on={states[client]}
                      darkMode={darkMode}
                      onChange={() => setStates((p) => ({ ...p, [client]: !p[client] }))}
                    />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>
                      {states[client] ? 'On' : 'Off'} (tap)
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <Switch client={client} on disabled darkMode={darkMode} />
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

      {/* Sizing reference */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Sizing Reference</h2>
        <p className="text-sm text-neutral-500 mb-4">Platform-specific dimensions from the design system spec.</p>
        <div
          className="rounded-xl border p-6 overflow-x-auto"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <table style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, width: '100%',
            borderCollapse: 'collapse', textAlign: 'left',
            color: darkMode ? '#ECEFF4' : '#1C2026',
          }}>
            <thead>
              <tr>
                {['Client', 'Overall Size', 'Track Radius', 'Knob Size', 'Disabled Method'].map((h) => (
                  <th key={h} style={{
                    padding: '8px 12px', fontWeight: 600, fontSize: 11,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    color: darkMode ? '#8F9BAE' : '#546073',
                    borderBottom: `2px solid ${darkMode ? '#2F3641' : '#D4DBE6'}`,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Web', '52×33', '32px', '28×28', '50% opacity'],
                ['iOS26', '64×28', '100px', '39×24', '50% opacity'],
                ['iOS18', '51×31', '100px', '27×27', '50% opacity'],
                ['Android', '34×20', '7px', '20×20', 'Desaturated track'],
              ].map(([client, size, radius, knob, disabled], i) => (
                <tr key={i}>
                  <td style={{ padding: '8px 12px', fontWeight: 600, borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{client}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{size}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{radius}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{knob}</td>
                  <td style={{ padding: '8px 12px', borderBottom: `1px solid ${darkMode ? '#1E242C' : '#E8ECF2'}` }}>{disabled}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Color tokens */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Track Colors</h2>
        <p className="text-sm text-neutral-500 mb-4">On: Teal/04 (#2A7DA7), Off: Grey/04 (#8F9BAE). Android disabled uses desaturated tracks.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, fontFamily: 'Inter, sans-serif' }}>
            {[
              { label: 'On', color: '#2A7DA7', token: 'Teal/04' },
              { label: 'Off', color: '#8F9BAE', token: 'Grey/04' },
              { label: 'Android On Disabled', color: '#A6C9DA', token: '—' },
              { label: 'Android Off Disabled', color: '#E8ECF2', token: '—' },
            ].map((c) => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 24, height: 24, borderRadius: 4, backgroundColor: c.color, border: '1px solid rgba(0,0,0,0.1)' }} />
                <div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#ECEFF4' : '#1C2026', display: 'block' }}>{c.label}</span>
                  <span style={{ fontSize: 11, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>{c.color} {c.token !== '—' ? `(${c.token})` : ''}</span>
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
// Tables section
// ---------------------------------------------------------------------------
function TablesSection({ darkMode }) {
  return (
    <div className="space-y-10">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Tables</h2>
        <p className="text-sm text-neutral-500 mb-0">5 component sets + 7 standalone row/header components. Composed data tables for portfolio slices, transfers, spend, earn, and personal loans.</p>
      </div>

      {/* Primitives */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Table Primitives</h2>
        <p className="text-sm text-neutral-500 mb-4">Header, sub-header, and data row building blocks shared across all tables.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ maxWidth: 700, display: 'flex', flexDirection: 'column' }}>
            <TableHeader columns={[
              { label: 'Name', flex: 2 }, { label: 'Value' }, { label: 'Status' }, { label: '' },
            ]} darkMode={darkMode} />
            <TableSubHeader label="Category A" darkMode={darkMode} />
            <TableRow darkMode={darkMode} cells={[
              { flex: 2, icon: true, text: 'Row with icon', large: true },
              { text: '$1,234.56' },
              { text: '', pill: 'neutral', pillLabel: 'Active' },
              { text: '', caret: true },
            ]} />
            <TableRow darkMode={darkMode} cells={[
              { flex: 2, image: true, text: 'AAPL', sub: 'Apple Inc.', large: true },
              { text: '$12,340.50' },
              { text: '', pill: 'danger', pillLabel: 'Past Due' },
              { text: '', caret: true },
            ]} />
            <TableHeader columns={[
              { label: 'Name', flex: 2 }, { label: 'Value' }, { label: 'Status' },
            ]} sub darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* slices table */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">slices table</h2>
        <p className="text-sm text-neutral-500 mb-4">Portfolio holdings with ticker, value, gain/return, and allocation. Web (700px, 4-col) and Mobile (375px, 2-col condensed).</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div className="flex flex-wrap gap-8 items-start">
            <SlicesTable client="Web" darkMode={darkMode} />
            <SlicesTable client="Mobile" darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* spendTable */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">spendTable</h2>
        <p className="text-sm text-neutral-500 mb-4">Spend product table with sub-header dividers, icon rows, and status pills (gradient neutral + danger).</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div className="flex flex-wrap gap-8 items-start">
            <SpendTable client="Web" darkMode={darkMode} />
            <SpendTable client="Mobile" darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* earnTable */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">earnTable</h2>
        <p className="text-sm text-neutral-500 mb-4">Earn product table with APY values and status indicators.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div className="flex flex-wrap gap-8 items-start">
            <EarnTable client="Web" darkMode={darkMode} />
            <EarnTable client="Mobile" darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* Shared tokens */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Shared Color Tokens</h2>
        <p className="text-sm text-neutral-500 mb-4">Consistent palette across all table components.</p>
        <div
          className="rounded-xl border p-6"
          style={{ borderColor: darkMode ? '#2F3641' : '#D4DBE6', backgroundColor: darkMode ? '#0F1115' : '#FFFFFF' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, fontFamily: 'Inter, sans-serif' }}>
            {[
              { label: 'FG/Neutral Main', color: darkMode ? '#ECEFF4' : '#1C2026' },
              { label: 'FG/Neutral Secondary', color: darkMode ? '#8F9BAE' : '#546073' },
              { label: 'BG/Neutral Secondary', color: darkMode ? '#1A1E23' : '#F3F5F8' },
              { label: 'Border/Main', color: darkMode ? '#2F3641' : '#D4DBE6' },
              { label: 'Teal/04', color: darkMode ? '#6FA7C3' : '#2A7DA7' },
              { label: 'Green/05', color: darkMode ? '#4CAF6E' : '#1F7C3E' },
              { label: 'Red/04', color: darkMode ? '#D08E99' : '#B3485A' },
            ].map((c) => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 24, height: 24, borderRadius: 4, backgroundColor: c.color, border: '1px solid rgba(128,128,128,0.2)' }} />
                <div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#ECEFF4' : '#1C2026', display: 'block' }}>{c.label}</span>
                  <span style={{ fontSize: 11, color: darkMode ? '#5E6D82' : '#8F9BAE' }}>{c.color}</span>
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
// Tabs & Tab Bars section
// ---------------------------------------------------------------------------
const TAB_LABELS = ['Overview', 'Activity', 'Holdings', 'Research', 'News', 'Settings', 'Help']
const TAB_BAR_TYPES = ['Web primary tab bar', 'Mobile tab bar', 'Web secondary tab bar', 'Web centered tab bar']

function TabsSection({ darkMode }) {
  const [primaryActive, setPrimaryActive] = useState(0)
  const [secondaryActive, setSecondaryActive] = useState(0)
  const [barActives, setBarActives] = useState({})
  const [groupCount, setGroupCount] = useState(3)
  const [groupActive, setGroupActive] = useState(0)

  const bg = darkMode ? '#0F1115' : '#FFFFFF'
  const border = darkMode ? '#2F3641' : '#D4DBE6'

  return (
    <div className="space-y-10">
      {/* Tab States — Primary */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Tab States — Primary</h2>
        <p className="text-sm text-neutral-500 mb-4">Bottom border indicator for active state. Active / Default / Hover.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
          <div style={{ display: 'flex', gap: 8, borderBottom: `1px solid ${border}` }}>
            {['Active', 'Default', 'Hover'].map((label, i) => (
              <TabItem
                key={label}
                label={label}
                hierarchy="Primary"
                active={i === primaryActive}
                darkMode={darkMode}
                onClick={() => setPrimaryActive(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tab States — Secondary */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Tab States — Secondary</h2>
        <p className="text-sm text-neutral-500 mb-4">Pill-shaped tabs with rounded corners. Used for filter-style groups.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {['Stocks', 'ETFs', 'Crypto'].map((label, i) => (
              <TabItem
                key={label}
                label={label}
                hierarchy="Secondary"
                active={i === secondaryActive}
                darkMode={darkMode}
                onClick={() => setSecondaryActive(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tab Bar variants */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Tab Bar</h2>
        <p className="text-sm text-neutral-500 mb-4">Composed horizontal bar with overflow scrims. 4 variants.</p>
        <div className="space-y-6">
          {TAB_BAR_TYPES.map((type) => (
            <div key={type}>
              <h3 className="text-sm font-medium text-neutral-600 mb-2">{type}</h3>
              <div className="rounded-xl border p-6 overflow-hidden" style={{ borderColor: border, backgroundColor: bg }}>
                <TabBar
                  type={type}
                  tabs={TAB_LABELS}
                  activeIndex={barActives[type] ?? 0}
                  darkMode={darkMode}
                  onTabChange={(i) => setBarActives((prev) => ({ ...prev, [type]: i }))}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Group */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Tabs Group</h2>
        <p className="text-sm text-neutral-500 mb-4">Compact tab group — 2 to 7 tabs. Adjust count below.</p>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-neutral-600">Tabs:</span>
          {[2, 3, 4, 5, 6, 7].map((n) => (
            <button
              key={n}
              onClick={() => { setGroupCount(n); setGroupActive(0) }}
              className={[
                'px-3 py-1 rounded text-sm font-medium border transition-colors',
                groupCount === n
                  ? 'bg-neutral-800 text-white border-neutral-700'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400',
              ].join(' ')}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: bg }}>
          <TabsGroup
            tabs={TAB_LABELS.slice(0, groupCount)}
            activeIndex={groupActive}
            darkMode={darkMode}
            onTabChange={setGroupActive}
          />
        </div>
      </div>

      {/* Shared tokens */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Shared Tokens</h2>
        <div className="overflow-x-auto">
          <table className="text-sm border-collapse w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Token</th>
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Light</th>
                <th className="text-left py-2 font-medium text-neutral-500">Dark</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">FG/Neutral Main</td><td className="pr-4">#1C2026</td><td>#ECEFF4</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">FG/Neutral Secondary</td><td className="pr-4">#546073</td><td>#8F9BAE</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">BG/Neutral Secondary</td><td className="pr-4">#F3F5F8</td><td>#1A1E23</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Border/Main</td><td className="pr-4">#D4DBE6</td><td>#2F3641</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Pill Active BG</td><td className="pr-4">#E8EDF5</td><td>#272C35</td></tr>
              <tr><td className="py-1.5 pr-4">Pill Active Border (Blue/03)</td><td className="pr-4">#99ADD5</td><td>#3C5A94</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Toasts section
// ---------------------------------------------------------------------------
const TOAST_MODES = ['Light', 'Dark', 'Light_Secondary', 'Dark_Secondary']

function ToastsSection({ darkMode }) {
  const [leadingIcon, setLeadingIcon] = useState(true)
  const [textLink, setTextLink] = useState(true)
  const [trailingIcon, setTrailingIcon] = useState(true)

  return (
    <div className="space-y-10">
      {/* Interactive builder */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Toast Builder</h2>
        <p className="text-sm text-neutral-500 mb-4">Toggle optional elements. 4 mode styles × 2 leading icon × 2 text link × 2 trailing icon = 32 variants.</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            ['Leading Icon', leadingIcon, setLeadingIcon],
            ['Text Link', textLink, setTextLink],
            ['Trailing Icon', trailingIcon, setTrailingIcon],
          ].map(([label, val, setter]) => (
            <button
              key={label}
              onClick={() => setter(!val)}
              className={[
                'px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors',
                val ? 'bg-neutral-800 text-white border-neutral-700' : 'bg-white text-neutral-600 border-neutral-200',
              ].join(' ')}
            >
              {label}: {val ? 'On' : 'Off'}
            </button>
          ))}
        </div>
        <div className="space-y-6">
          {TOAST_MODES.map((mode) => {
            const isDarkBg = mode === 'Dark' || mode === 'Dark_Secondary'
            return (
              <div key={mode}>
                <h3 className="text-sm font-medium text-neutral-600 mb-2">{mode.replace('_', ' ')}</h3>
                <div
                  className="rounded-xl border p-6"
                  style={{
                    borderColor: isDarkBg ? '#2F3641' : '#D4DBE6',
                    backgroundColor: isDarkBg ? '#0F1115' : '#F3F5F8',
                  }}
                >
                  <Toast
                    mode={mode}
                    leadingIcon={leadingIcon}
                    textLink={textLink}
                    trailingIcon={trailingIcon}
                    progress={0.65}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Animated demo */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Animated Progress</h2>
        <p className="text-sm text-neutral-500 mb-4">Progress bar animates to show auto-dismiss timer.</p>
        <div
          className="rounded-xl border p-6"
          style={{
            borderColor: darkMode ? '#2F3641' : '#D4DBE6',
            backgroundColor: darkMode ? '#0F1115' : '#F3F5F8',
          }}
        >
          <Toast mode={darkMode ? 'Dark' : 'Light'} animated />
        </div>
      </div>

      {/* Shared tokens */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Token Reference</h2>
        <div className="overflow-x-auto">
          <table className="text-sm border-collapse w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Element</th>
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Light</th>
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Dark</th>
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Light Sec.</th>
                <th className="text-left py-2 font-medium text-neutral-500">Dark Sec.</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Background</td><td className="pr-4">#152B56</td><td className="pr-4">#0C1931</td><td className="pr-4">#FFFFFF</td><td>#1A1E23</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Text</td><td className="pr-4">#FFFFFF</td><td className="pr-4">#ECEFF4</td><td className="pr-4">#1C2026</td><td>#ECEFF4</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Link</td><td className="pr-4">#A6C9DA</td><td className="pr-4">#6FA7C3</td><td className="pr-4">#2A7DA7</td><td>#6FA7C3</td></tr>
              <tr><td className="py-1.5 pr-4">Progress</td><td className="pr-4">#A6C9DA</td><td className="pr-4">#6FA7C3</td><td className="pr-4">#8F9BAE</td><td>#5E6D82</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Tooltips section
// ---------------------------------------------------------------------------
const ALIGNMENTS = ['Left', 'Centered', 'Right']
const POSITIONS = ['Bottom', 'Top']

function TooltipsSection({ darkMode }) {
  const bg = darkMode ? '#0F1115' : '#FFFFFF'
  const border = darkMode ? '#2F3641' : '#D4DBE6'

  return (
    <div className="space-y-10">
      {/* Standard Tooltip — Web */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Standard Tooltip — Web</h2>
        <p className="text-sm text-neutral-500 mb-4">Floating panel with optional headline, body, text link. 343px wide.</p>
        <div className="space-y-4">
          <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: darkMode ? '#1A1E23' : '#F3F5F8' }}>
            <div className="flex flex-wrap gap-4">
              <TooltipWeb body="Short tooltip with body text only." darkMode={darkMode} />
              <TooltipWeb headline="With Headline" body="Tooltip with headline and body text for more context." darkMode={darkMode} />
              <TooltipWeb headline="Full Example" body="Tooltip with all optional elements enabled." textLink="Learn more" darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>

      {/* Standard Tooltip — Mobile sheet */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Standard Tooltip — Mobile</h2>
        <p className="text-sm text-neutral-500 mb-4">Bottom sheet with grab handle and home indicator. 375px wide.</p>
        <div className="rounded-xl border p-6 overflow-hidden" style={{ borderColor: border, backgroundColor: darkMode ? '#1A1E23' : '#F3F5F8' }}>
          <div className="flex flex-wrap gap-4 items-end">
            <TooltipMobileSheet body="Short tooltip explanation." darkMode={darkMode} />
            <TooltipMobileSheet headline="Feature Info" body="More detailed explanation with headline." textLink="View details" darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* Feature Highlight */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Feature Highlight</h2>
        <p className="text-sm text-neutral-500 mb-4">Directional tail anchored to trigger element. 3 alignments × 2 positions × 2 close states = 12 variants.</p>
        <div className="space-y-6">
          {POSITIONS.map((pos) => (
            <div key={pos}>
              <h3 className="text-sm font-medium text-neutral-600 mb-2">Position: {pos}</h3>
              <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: darkMode ? '#1A1E23' : '#F3F5F8' }}>
                <div className="flex flex-wrap gap-6">
                  {ALIGNMENTS.map((align) => (
                    <FeatureHighlight
                      key={`${pos}-${align}`}
                      title="New Feature"
                      body="Discover this exciting new capability."
                      linkText="Try it out"
                      alignment={align}
                      position={pos}
                      close={align === 'Right'}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Highlight with close */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Feature Highlight — Close Button</h2>
        <p className="text-sm text-neutral-500 mb-4">Close=True variant adds a dismiss affordance.</p>
        <div className="rounded-xl border p-6" style={{ borderColor: border, backgroundColor: darkMode ? '#1A1E23' : '#F3F5F8' }}>
          <FeatureHighlight
            title="Portfolio Insights"
            body="View AI-powered analysis of your holdings performance."
            linkText="Learn more"
            alignment="Centered"
            position="Bottom"
            close
            darkMode={darkMode}
          />
        </div>
      </div>

      {/* Shared tokens */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-800 mb-1">Token Reference</h2>
        <div className="overflow-x-auto">
          <table className="text-sm border-collapse w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Element</th>
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Web Tooltip</th>
                <th className="text-left py-2 pr-4 font-medium text-neutral-500">Mobile Sheet</th>
                <th className="text-left py-2 font-medium text-neutral-500">Feature Highlight</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Background</td><td className="pr-4">#152B56</td><td className="pr-4">#FFFFFF</td><td>#152B56</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Text</td><td className="pr-4">#FFFFFF</td><td className="pr-4">#1C2026</td><td>#FFFFFF</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Link</td><td className="pr-4">#A6C9DA</td><td className="pr-4">#2A7DA7</td><td>#A6C9DA</td></tr>
              <tr className="border-b border-neutral-100"><td className="py-1.5 pr-4">Width</td><td className="pr-4">343px</td><td className="pr-4">375px</td><td>343px</td></tr>
              <tr><td className="py-1.5 pr-4">Corner radius</td><td className="pr-4">8px</td><td className="pr-4">16px top</td><td>8px</td></tr>
            </tbody>
          </table>
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
const DARK_MODE_PAGES = new Set(['banners', 'buttons', 'cards', 'checkboxes-radios', 'charts', 'dialogs', 'floating-panel', 'img-assets', 'inputs', 'links', 'list-items', 'intelligence-panel', 'navigation', 'pills', 'switch', 'tables', 'tabs', 'toasts', 'tooltips'])

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
      ) : activeId === 'dialogs' ? (
        <DialogSection darkMode={darkMode} />
      ) : activeId === 'floating-panel' ? (
        <FloatingPanelSection darkMode={darkMode} />
      ) : activeId === 'grids' ? (
        <GridsSection />
      ) : activeId === 'img-assets' ? (
        <ImgAssetsSection darkMode={darkMode} />
      ) : activeId === 'links' ? (
        <LinksSection darkMode={darkMode} />
      ) : activeId === 'list-items' ? (
        <ListItemsSection darkMode={darkMode} />
      ) : activeId === 'loading-states' ? (
        <LoadingStatesSection />
      ) : activeId === 'inputs' ? (
        <InputsSection darkMode={darkMode} />
      ) : activeId === 'navigation' ? (
        <NavigationSection darkMode={darkMode} />
      ) : activeId === 'intelligence-panel' ? (
        <IntelligencePanelSection darkMode={darkMode} />
      ) : activeId === 'pills' ? (
        <PillsSection darkMode={darkMode} />
      ) : activeId === 'switch' ? (
        <SwitchSection darkMode={darkMode} />
      ) : activeId === 'tables' ? (
        <TablesSection darkMode={darkMode} />
      ) : activeId === 'tabs' ? (
        <TabsSection darkMode={darkMode} />
      ) : activeId === 'toasts' ? (
        <ToastsSection darkMode={darkMode} />
      ) : activeId === 'tooltips' ? (
        <TooltipsSection darkMode={darkMode} />
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
