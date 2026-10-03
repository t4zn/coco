# Trido — Next.js Landing Page

Modern, responsive landing page for Trido built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4 & PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run development server:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Type-check & Build:
   ```bash
   pnpm check
   pnpm build
   ```

4. Start production server:
   ```bash
   pnpm start
   ```

## Project Structure
```
coco/
├── app/
│   ├── globals.css         # Typography, custom animations, theme variables
│   ├── layout.tsx          # Font imports, SEO metadata, root layout
│   └── page.tsx            # Main homepage route
├── components/
│   └── landing/            # Clean, modular landing page components
│       ├── Award.tsx       # Recognition & stats section
│       ├── BoardDemo.tsx   # Interactive animated preview of the board
│       ├── Closing.tsx     # FAQ, CTA form, and footer
│       ├── Features.tsx    # Feature cards and widgets showcase
│       ├── Hero.tsx        # Hero section with animated typography
│       ├── How.tsx         # "How it works" 3-step breakdown
│       ├── LandingPage.tsx # Master landing page assembler
│       ├── Marquee.tsx     # Animated command ticker
│       ├── Navbar.tsx      # Clean navigation bar with smooth scroll
│       ├── Story.tsx       # Story section
│       ├── cn.ts           # Classnames utility
│       ├── content.ts      # Structured landing page content & copy
│       └── shared.tsx      # Reusable motion components and logo
└── public/                 # Static assets (logo, favicon, touch icons)
```
