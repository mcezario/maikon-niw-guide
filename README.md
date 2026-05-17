# EB2 NIW Educative Website

A static site that educates recommenders about Maikon's EB2 NIW process and guides them to sign his recommendation letter.

**Stack:** Vite + React + TypeScript + Tailwind CSS

---

## Project Structure

```
eb2-educative/
└── client/   # React frontend (Vite + React Router + Tailwind)
```

---

## Architecture

Single-page scroll at `/`. All content lives in one scrollable page rendered by `client/src/pages/ScrollPage.tsx`. An `IntersectionObserver` updates the URL hash as sections scroll into view, and a custom `scrollspy` event keeps the Navbar active link in sync.

**Sections (in scroll order):**
`#home` → `#what-is-eb2` → `#why-sign` → `#who-has-signed` → `#process` → `#faq` → `#endeavor` → `#sign`

Old path-based URLs (`/sign`, `/endeavor`, etc.) redirect to the correct hash via `HashRedirect` in `App.tsx`.

---

## Prerequisites

- Node.js 18+
- npm 9+

---

## Setup

```bash
cd client && npm install
```

---

## Running the Project

### Development

```bash
cd client && npm run dev      # http://localhost:5173
```

### Production build

```bash
cd client && npm run build    # output: client/dist/
```

---

## Deployment

Vercel Git integration is configured — pushing to `main` automatically deploys to production. There is no local `.vercel/project.json`. Do not run `vercel --prod` manually; just push to `main`.
