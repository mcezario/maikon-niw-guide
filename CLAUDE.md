# Claude Code Guidelines — EB2 NIW Educative

## Architecture

Single-page scroll at `/`. All sections live in `client/src/pages/ScrollPage.tsx`.

**Section order (must stay in sync across Navbar, ScrollPage, and App):**
1. `#home`
2. `#what-is-eb2`
3. `#why-sign`
4. `#who-has-signed`
5. `#process`
6. `#faq`
7. `#endeavor`
8. `#sign`

## Navigation rules

- All internal cross-section links must use `<a href="#section-id">`, never `<Link to="/path">`.
- Each `<section>` in `ScrollPage.tsx` needs `className="scroll-mt-16"` (except `#home`) so anchors land below the fixed navbar.
- Old path-based URLs are redirected via `HashRedirect` in `App.tsx` — do not add new path-based routes for content sections.

## Recommender data

Single source of truth: `client/src/pages/WhoHasSigned.tsx`.

- `independent[]` — has `signed`, `tbd`, `backup` booleans. `tbd: true` = unknown/placeholder contact. `backup: true` = fallback for the slot above it.
- `dependent[]` — has `signed` boolean only.
- `potentialDependent[]` — no signed state; display only.
- Keep each group sorted alphabetically by first name (except TBD/backup slots which follow the confirmed entries).

## Scroll spy

`ScrollPage.tsx` uses `IntersectionObserver` with `rootMargin: '-64px 0px -55% 0px'` to detect the active section. On intersection it calls `history.replaceState` and dispatches `window.dispatchEvent(new CustomEvent('scrollspy'))` — because `replaceState` does not fire `hashchange`. The Navbar listens to both `scrollspy` and `hashchange`.

## Dev commands

```bash
# Frontend
cd client && npm install
cd client && npm run dev      # http://localhost:5173
cd client && npm run build    # output: client/dist/

# Backend
cd server && npm install
cd server && npm run dev      # http://localhost:3001
```

## Deployment

Vercel Git integration — push to `main` = auto production deploy. No local `.vercel/project.json`. Do not run `vercel --prod` manually.

## Environment

- `server/.env` — `ACCESS_CODES=CODE:Name:Email` (comma-separated), plus DocuSign credentials (`DOCUSIGN_*`).
- Recommendation letter PDF: `server/public/letters/recommendation_letter.pdf`.
