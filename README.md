# EB2 NIW Educative Website

A full-stack site that educates recommenders about Maikon's EB2 NIW process and collects recommendation letter signatures via DocuSign.

**Stack:** Vite + React + TypeScript + Tailwind CSS (client) · Express + TypeScript + DocuSign eSign SDK (server)

---

## Project Structure

```
eb2-educative/
├── client/   # React frontend (Vite + React Router + Tailwind)
└── server/   # Express API (DocuSign integration, access codes, letter PDF serving)
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

### Client

```bash
cd client && npm install
```

### Server

```bash
cd server && npm install
```

Copy `server/.env.example` to `server/.env` and fill in:
- `ACCESS_CODES` — comma-separated `CODE:Name:Email` entries
- DocuSign credentials (`DOCUSIGN_*` vars)

Place the recommendation letter PDF at `server/public/letters/recommendation_letter.pdf`.

---

## Running the Project

### Development

```bash
# Terminal 1 — frontend
cd client && npm run dev      # http://localhost:5173

# Terminal 2 — backend
cd server && npm run dev      # http://localhost:3001
```

### Production build

```bash
cd client && npm run build    # output: client/dist/
```

---

## Deployment

Vercel Git integration is configured — pushing to `main` automatically deploys to production. There is no local `.vercel/project.json`. Do not run `vercel --prod` manually; just push to `main`.
