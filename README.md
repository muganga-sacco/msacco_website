# Muganga SACCO — React Website

A fully structured React project converted from [v0-microfinance-website-design-mauve.vercel.app](https://v0-microfinance-website-design-mauve.vercel.app/), built with Vite + React 18.

---

## 📁 Project Structure

```
muganga-sacco/
├── index.html                        # HTML entry point
├── package.json                      # Dependencies & scripts
├── vite.config.js                    # Vite configuration
└── src/
    ├── main.jsx                      # React DOM entry point
    ├── App.jsx                       # Root component (composes all sections)
    ├── styles/
    │   └── globals.css               # CSS variables, base styles, utility classes
    ├── constants/
    │   └── index.js                  # All static data (nav links, features, stats, etc.)
    ├── hooks/
    │   ├── useInView.js              # IntersectionObserver hook for scroll animations
    │   └── useScrolled.js            # Hook to detect scroll position for sticky nav
    └── components/
        ├── layout/
        │   ├── Navbar.jsx            # Sticky navbar with mobile menu
        │   └── Footer.jsx            # Footer with links and contact info
        ├── sections/
        │   ├── HeroSection.jsx       # Full hero with dashboard card visual
        │   ├── StatsBar.jsx          # Key metrics bar (10k members, 10%, 24/7, 24h)
        │   ├── FeaturesSection.jsx   # 6-card "Why Choose Us" grid
        │   ├── LoansSection.jsx      # Loans split layout with product cards
        │   ├── SavingsSection.jsx    # Savings split layout with progress bars
        │   └── CTASection.jsx        # Call-to-action banner
        └── ui/
            └── AnimatedSection.jsx   # Reusable fade-in/slide-up wrapper component
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or unzip the project
cd muganga-sacco

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🧩 Key Architectural Decisions

| Concern | Approach |
|---|---|
| **Data** | All static content lives in `src/constants/index.js` — easy to update |
| **Animations** | `useInView` hook + `AnimatedSection` component for scroll-triggered reveals |
| **Styling** | Pure CSS via `globals.css` using CSS custom properties (variables) |
| **Layout** | `Navbar` and `Footer` in `layout/`, page sections in `sections/` |
| **Reusability** | Shared UI primitives (e.g. `AnimatedSection`) in `ui/` |

---

## ✏️ Customization

- **Colors**: Edit CSS variables in `src/styles/globals.css` under `:root`
- **Content**: Update text, stats, and feature cards in `src/constants/index.js`
- **Sections**: Each section is a self-contained component — add, remove, or reorder in `App.jsx`

---

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **CSS Custom Properties** — Theming & design tokens
- **IntersectionObserver API** — Scroll animations (no external library needed)
