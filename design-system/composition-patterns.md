# Composition Patterns

Page-level layout patterns observed across M1's production web app. These define how components are assembled into full screens.

---

## Shell / Chrome

Every authenticated page shares a common shell:

| Element | Component | Notes |
|---------|-----------|-------|
| Top header bar | `Top Header` | M1 logo (left), hamburger menu (mobile), "M1 Intelligence" button, promo banner ("Get up to $750 a year"), settings gear icon (right) |
| Left sidebar | `Web-rail-nav` | 200px width, dark on mobile overlay. Contains: logo, M1 Intelligence button, primary nav (Home, Earn, Invest, Borrow, Research), expandable sub-sections with account lists, bottom user section (username, Disclosures, Help, Log out) |
| Content area | — | Offset by sidebar width (`lg:ml-60`). White/light grey background (`BG/Neutral Primary` or `BG/Neutral Secondary`) |
| Footer | `Web footer` | "Disclosures" link, "M1: The Finance Super App", copyright notice. Only on pages with scrollable content |
| FAB chat button | — | Fixed bottom-right, circular dark button with chat icon |

### Sidebar sub-navigation patterns

The sidebar expands contextually based on the active section:

| Section | Sub-nav structure |
|---------|-------------------|
| Earn | `CASH` heading → account list, `ACTIONS` heading → "Add account", action links |
| Invest | `BROKERAGE` heading → portfolio list (name, balance, margin info), `RETIREMENT` heading → IRA list, `INSIGHTS` heading, `ACTIONS` heading → "Transfer to M1", "Add account" |
| Borrow | `MARGIN LOANS` heading → loan list, `ACTIONS` heading → "Take a loan" |
| Research | Flat links: News, Stocks, Funds, Crypto, Model Portfolios, My Pies, Watchlist |

---

## Page Types

### 1. Dashboard / Home

**Example:** Home screen

**Layout:**
- Full-width hero card with dark blue gradient background (`BG/Feature Flat`)
- Welcome message with user name
- Net worth display (large heading) with info tooltip
- Time range pills (1W, 1M, 3M, 6M, YTD, 1Y, ALL) — right-aligned
- Line chart filling hero width
- Action buttons: "Connect Bank", "Move money" — top right of hero

**Below hero — two-column grid:**
- Left: Assets section — cards for Earn, Invest with balance amounts
- Right: Liabilities section — Borrow card with balance
- Inline warning banner for data unavailability (Danger variant, subtle)

**Below grid — full-width:**
- "Transfers" section heading with "All transfers | Recurring" tab links (right-aligned)
- Transfers table: Date, From (icon + name), To (icon + name), status pill, Amount, chevron

### 2. Account Detail

**Example:** Earn Account (M1 High-Yield Cash Account)

**Layout:**
- Page heading: account name (left), "Move money" button (right, Primary kind)
- Summary row: Available balance (large), Current balance (right, in bordered card)

**Two-column below:**
- Left column:
  - "Interest" card (elevated, with illustration): APY rate large, earned this year, paid since opened — key-value rows with dividers
  - "Account details" card: masked routing/account numbers with eye toggle, transfer limits key-value list
- Right column:
  - "Complete these tasks" card: progress bar (1/3), checklist with radio circles + chevrons
  - "Transactions" section: Previous/Next pagination pills, table with date group headers (BG/Neutral Secondary), columns: Description (icon + text), Category, Amount (green positive values)

### 3. Invest Portfolio Detail

**Example:** My Growth Portfolio

**Layout:**
- Top: Sub-tab bar (Portfolio, Activity, Holdings, Funding) — underline active
- Account heading with emoji icon, Cash / Margin / Total buying power stats row (right), "Move money" button
- Full-width info banner (Informational variant) with action button

**Two-column below:**
- Left column:
  - Donut chart card with center value, gain/loss, percentage
  - Action icon buttons row: Buy, Sell, Rebalance, Edit, Share (circular icons with labels)
  - Info card with icon + message + "Resend email" link button
  - "Upcoming Activity" card: Trades/Transfers with status pills
  - "Automation" card: settings list with switch toggles, links
- Right column:
  - Time range pills + line chart
  - "Performance" section: key-value grid (Current value, Total gain, Starting value, Market gain, Net cash flow, Dividends earned)
  - "Benchmark" section with link
  - "Slices" table: Name (logo + ticker + company), Value, Total Gain/TWR, Actual/Target columns
  - "Removed slices" section

### 4. Balance Sheet (Filled State)

**Example:** Balance sheet with data

**Layout:**
- Section tab bar: About you, Your finances, M1 accounts, Documents, Security, Preferences, Platform fee
- Sub-pills row: Balance sheet (active), Cash flow, Investment profile, Investor disclosures
- Page heading: "Balance sheet"

**Two summary cards (side by side):**
- Total assets card: large dollar value, "Composition" label, stacked bar chart (blue shades), bullet legend
- Total liabilities card: same pattern, gold/orange bar

**Action buttons below cards:** "Add asset +", "Add liability +"

**Two-column sections below:**
- Left (Assets): Cash and savings, Investments (with sub-categories: Retirement, Brokerage, Health, Crypto), Real estate, Other significant assets
- Right (Liabilities): Mortgage, Credit cards, Other loans or debts
- Each section: heading with edit icon (pencil), total row (bold), detail rows (name + institution, right-aligned dollar value), dividers between rows
- CTA buttons at bottom of sections: "Open M1 Earn account", "Open M1 Invest account"

### 5. Balance Sheet (Empty / Zero State)

**Example:** Balance sheet with no data

**Layout:** Same shell and tab structure as filled state, but:
- Summary cards replaced with large dashed-border action cards: "Build your balance sheet" and "Add liabilities" — icon + heading + description centered
- Each asset/liability section shows empty state text: "No cash accounts added. Add checking, savings, or physical cash..." with CTA link buttons
- No edit icons, no data rows

### 6. Form / Selection Flow

**Example:** Add an asset, Transfer flow, Account type selection

**Layout:**
- Back link at top: "< Back to balance sheet" or "< Back" (FG/Primary color with left chevron)
- Centered content card (max-width ~560px), elevated or bordered
- Heading inside card
- Radio card list: each option is a bordered card with radio circle, title (bold), description text
- Selected state: teal border (`Border/Active`), filled radio
- Primary button at bottom of card: "Continue" (full-width within card)

**Mobile onboarding variant:**
- Minimal chrome — top bar with M1 logo, step title, help icon
- Progress bar at very top (thin colored line)
- Same centered card pattern but wider padding

### 7. Confirm / Review

**Example:** Account creation confirmation

**Layout:**
- Back link at top
- Large heading: "Does everything look correct?"
- Section with heading + "Edit" link (right-aligned)
- Content value below heading
- Divider
- Long-form text content (legal disclosures, terms)
- Link grid: two-column layout of document links (FG/Primary color)
- Divider
- Checkbox section at bottom: checkbox + label for agreements
- Primary "Continue" button

### 8. Settings / Profile Form

**Example:** Profile > Contact information

**Layout:**
- Section tab bar: Profile, Accounts, Documents, Platform fee, Security, Preferences
- Sub-pills row: Contact information (active), Employment, Investment profile, etc.
- Informational banner at top of content area
- Form sections with headings (e.g., "Email", "Primary account holder", "Secondary account holder")
- Outlined input fields in grid: First name / M.I. / Last name (3-col), Address / Apt (2-col), City / State / Postal code (3-col), Phone number
- "Save" button per form section, "Confirm" button for individual fields

### 9. Data Table / Research

**Example:** Stocks screener

**Layout:**
- Search bar at top (full-width within content area)
- Two-column: filters sidebar (left ~250px) + results table (right)

**Filters sidebar:**
- Heading "Filters" with "Reset" link
- Input range pairs: Min — Max for Market cap, P/E ratio, Dividend yield
- Radio list for Sector with counts in parentheses

**Results table:**
- Result count + Previous/Next pagination (top right)
- Table headers: Name, Market Cap (sortable), Div. Yield, Price History (1Y/2Y/5Y toggle), P/E Ratio
- Rows: company logo + ticker + name, formatted values, sparkline chart, dot rating indicators, chevron
- Alternating or consistent white rows

### 10. News / Content Feed

**Example:** Research > News Snapshot

**Layout:**
- Sub-tab bar: News Snapshot (active), Top Stories
- Date range label
- Large page heading: "News Snapshot"
- Intro paragraph
- Section heading: "Macro lens"
- Article cards (no border, divider-separated):
  - Title (bold, link-style)
  - Date + preview text (secondary color)
  - Engagement count pill (outlined, small)

### 11. Transfer History

**Example:** All transfers page

**Layout:**
- Sub-tab bar: All transfers (active), Recurring
- Danger banner at top with action link ("Resend email")
- Section heading: "Completed transfers" with Previous/Next pagination
- Table: Date, From (icon + name), To (icon + name), Status pill (green "Complete" or red "Cancelled"), Amount, chevron

### 12. Transfer Detail (Modal/Full-screen)

**Example:** Transfer details overlay

**Layout:**
- Close X button (top right)
- Centered content (narrow, ~500px max-width)
- Heading: "Transfer details"
- Bordered card:
  - "Amount" label, large dollar value, status pill
  - Divider
  - Key-value pairs: Started (date + time), Finished (date + time)
  - "Transfer steps" sub-card (nested bordered): From account (icon + name) → arrow → To account (icon + name) + "Completed" status
- Primary "Done" button centered below card

### 13. Error State

**Example:** Portfolio error page

**Layout:**
- Sub-tab bar present (Portfolio, Activity, Holdings, Funding)
- Centered error content:
  - Warning illustration (custom, not icon — triangle with exclamation)
  - Heading: "Sorry, something went wrong."
  - Description paragraph (secondary text color)
  - Primary "Contact Support" button

### 14. Marketing / Upsell (First-time user)

**Example:** Earn marketing page

**Layout:**
- Large centered headline text (display size)
- Centered elevated card:
  - Illustration at top
  - Product name heading (bold)
  - Description paragraph
  - Primary "Open an account" button (full-width)
  - Secondary "Learn more" text link below
- Footer tagline: "M1. Yours to Build."

### 15. Benchmarking / Comparison Chart

**Example:** Benchmark your performance

**Layout:**
- Sub-tab bar: Portfolio (active), Activity, Holdings, Funding, Bank connection
- Back link at top
- Page heading: "Benchmark your performance"
- Description paragraph (secondary text)
- Search input (right-aligned): "Add benchmark using..." with search icon
- Time range pills: 1D, 1W, 1M (active/teal), 3M, YTD, 1Y, ALL + overflow menu (...)
- Multi-line comparison chart: portfolio line (dark blue) + benchmark lines (teal, grey) with Y-axis percentage, X-axis dates
- Three-column comparison cards below chart (divider-separated, not bordered):
  - Each card: Name (bold) + description (secondary), percentage change (right-aligned, with down-arrow loss indicator)
  - Key-value rows within each: Dividend yield, Expense ratio

### 16. Concentration / Allocation Analysis

**Example:** Sector Concentration

**Layout:**
- Sub-tab bar: Sector (active), Asset, Region
- Page heading: "Sector Concentration"
- Dropdown selector: "Aggregated view / All accounts" (outlined, with chevron)

**Two-column below:**
- Left: Large donut chart with center value (total dollar amount + "All sectors" label), colored segments matching sector list
- Right: Categorized allocation lists

**Allocation list pattern (repeats per category):**
- Category heading: "Equity sectors", "Unclassified sector", "Bond sectors"
- Column headers: Sector / Value, Actual allocation
- Rows: colored left-border accent (4px, matching donut segment color) + Sector name (bold) + dollar value (secondary) + percentage (right-aligned)
- Dividers between rows

- Footer links: "See how concentration works", "Disclosures"

---

## Recurring Composition Primitives

These small patterns repeat across multiple page types:

| Pattern | Description | Used in |
|---------|-------------|---------|
| **Key-value row** | Label (left, secondary text) + Value (right, main text), separated by divider | Account details, Balance sheet, Performance |
| **Section with edit** | Section heading (left) + pencil icon button (right) + bottom border | Balance sheet categories |
| **Radio card list** | Vertically stacked bordered cards with radio + title + description | Add asset, Transfer flow, Account selection |
| **Sub-tab bar** | Horizontal text tabs with underline active indicator, top of content area | Portfolio, Transfers, News, Profile |
| **Sub-pill row** | Horizontal pills (filled active, outlined inactive) below tab bar | Balance sheet, Profile |
| **Summary stat card** | Bordered/elevated card with label, large value, supporting chart or legend | Total assets, Total liabilities, balance displays |
| **Action row** | Outlined button with icon: "Add asset +", "Add liability +" | Balance sheet |
| **Back navigation** | "< Back" or "< Back to [page]" link with left chevron, FG/Primary color | Flows, sub-pages |
| **Pagination** | "Previous" + "Next" outlined pill buttons, right-aligned | Tables, transaction lists |
| **Empty state** | Dashed-border card or inline text with description + CTA button/link | Balance sheet zero state, empty sections |
| **Status pill** | Small rounded pill with status text: green "Complete", red "Cancelled" | Transfers, activity |
| **Inline banner** | Banner component at top of content area for alerts/warnings | Transfers (danger), Profile (informational) |
| **Centered flow card** | Max-width centered card (~560px) with heading, content, primary button | Onboarding flows, selection screens |
| **Progress indicator** | Thin horizontal bar at page top or within card showing step completion | Onboarding, task checklists |
| **Account row in sidebar** | Account name (truncated), balance/description below, optional emoji/icons | Sidebar sub-nav for Earn, Invest, Borrow |

---

## Grid & Spacing Patterns

| Pattern | Value | Notes |
|---------|-------|-------|
| Content max-width | ~1200px (appears bounded) | Centered within content area |
| Two-column split | 50/50 or roughly equal | Balance sheet, summary cards |
| Left sidebar + right content | ~250px + rest | Stock screener filters |
| Card internal padding | 24px (matches spacing/06 token) | Consistent across elevated and bordered cards |
| Section vertical spacing | 32–40px between major sections | Between balance sheet categories |
| Row dividers | 1px `Border/Main` between list rows | Tables, key-value lists, transaction rows |
| Content area padding | 32px horizontal, 32px vertical | `px-8 py-8` pattern |

---

## Content Patterns (from screenshots)

### Financial data formats

| Type | Format | Example |
|------|--------|---------|
| Dollar amount (large) | `$X,XXX.XX` | `$2,107,849`, `$5.49` |
| Dollar amount (negative) | `-$X,XXX.XX` | `-$4,994.51` |
| Dollar amount (gain) | `+$X,XXX.XX` in green | `+$13,781.95` |
| Percentage | `X.XX%` | `3.10%`, `22.9% APR` |
| Percentage gain | Green up arrow + value | `4.78%` |
| Percentage loss | Red down arrow + value | `7.41%`, `100.00%` |
| Date | `Mon DD, YYYY` | `Dec 1, 2023`, `Feb 28, 2026` |
| Date range | `Mon DD - Mon DD, YYYY` | `Feb 27 - Mar 5, 2026` |
| Time | `H:MMpm TZ` | `2:11pm EST` |
| Market cap | `X.XXXT` or `XXX.XB` | `4.321T`, `986.7B` |
| Masked numbers | `••••••••XXXX` | `••••••••8445` |
| Account identifier | `Name - XXX` | `Individual - 041`, `Roth IRA - 130` |

### Common account types

- M1 High-Yield Cash Account
- Individual (Brokerage)
- Traditional IRA, SEP IRA, Roth IRA
- My Growth Portfolio, My Value Portfolio, My New Pie
- Margin on [Portfolio name]

### Common section labels

- Cash and savings, Investments, Real estate, Other significant assets (Assets)
- Mortgage, Credit cards, Other loans or debts (Liabilities)
- Retirement, Brokerage, Health, Crypto (Investment sub-categories)
- Performance, Upcoming Activity, Automation, Slices (Portfolio detail)
