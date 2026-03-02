# 🛒 Cartly — Next-Gen Checkout Experience

**🔗 [Live Demo](https://cartly-app-delta.vercel.app/)**

Cartly is a high-performance checkout web application built with a focus on speed, type safety, and modern design. Developed using the latest **Next.js 15** (App Router) features to provide a seamless user experience.

---

## 🚀 Technical Highlights

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) for hybrid rendering and fast navigation.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for end-to-end type safety.
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with a custom design system and dark mode support.
- **Validation**: [Zod](https://zod.dev/) for ironclad runtime API response validation.
- **Data Fetching**: Server-side fetching with ISR (Incremental Static Regeneration) support for optimal performance.
- **Error Handling**: Custom Next.js Error Boundaries and Loading Skeletons for robust UX.

## 🛠 Features

- **Product Details**: Fetched dynamically via `product_id` URL search parameters using the [DummyJSON API](https://dummyjson.com/).
- **Promo System**: Real-time discount calculation with support for multiple codes (e.g., `SAVE10`, `CARTLY20`, `FREESHIP`).
- **Dynamic Pricing**: Instant order summary updates for subtotal, item discounts, and promo-applied totals.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.
- **Safety First**: Runtime validation of API data ensures the app never crashes due to unexpected data changes.

---

## ⚙️ Development & Setup

### 1. Prerequisites

- **Node.js**: `^18.18.0 || ^20.9.0 || >=21.1.0` (Recommended: v20 LTS)
- **npm**: `^9.x` or higher

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/mykhailokurochkin/cartly-app

# Install dependencies
npm install
```

### 3. Run Locally

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to default checkout) or [http://localhost:3000/checkout?product_id=1](http://localhost:3000/checkout?product_id=1).

---

## 🏗 Architecture

```text
app/                 # App Router (Pages, Layouts, Error Boundaries)
components/          # Reusable UI components (ProductCard, OrderSection, etc.)
lib/                 # Core logic: API layer, Formatting, Promo validation
types/               # TypeScript interfaces and Zod schemas
public/              # Static assets
```

---
