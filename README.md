# Rene Rodriguez Linktree

A Linktree-style profile page. The baseline page includes a profile image, name, title, location, categorized personal links, expandable link cards, QR sharing, and a custom warm clay/cream visual style.

## Feature Pitch

The feature I would pitch to Linktree is **reorderable profile links with persistent personalized ordering**.

Creators often change what they want visitors to notice first: a new project, a job search, a social channel, a shop link, or a timely campaign. Linktree already helps collect links, but ordering is one of the most important ways a creator communicates priority. This demo lets users press and hold a link card, get vibration-style visual feedback, drag it into a new position, and keep that order saved locally.

In a production Linktree version, this could become a creator-facing ordering tool backed by user profile settings. A later version could extend it into audience-aware ordering, scheduled ordering, analytics-informed recommendations, or per-category ordering.

## What It Does

- Shows a personal profile section with image, name, title, and location.
- Displays real links for portfolio, GitHub, LinkedIn, resume, projects, social/media, and shop examples.
- Filters links by category: Socials, Work, Dev, Media, and Shop.
- Expands each link into a preview panel with Visit, Copy, and QR Code actions.
- Opens QR codes in an in-page modal with Download and Share actions.
- Lets users press and hold link cards to reorder them.
- Saves reordered links in `localStorage` so the order persists after reload.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Project Structure

```txt
app/
  components/
    CategoryCarousel.tsx
    FeatureBadge.tsx
    LinkCard.tsx
    ProfileHeader.tsx
    QrModal.tsx
  data/
    links.tsx
  lib/
    link-order.ts
    qr.ts
  page.tsx
```

`app/page.tsx` handles page-level state and interaction wiring. Link data, QR helpers, localStorage order persistence, and UI sections are split into smaller files so the page is easier to read and maintain.

## Notes And Tradeoffs

Some external sites block iframe previews with security headers, so the demo only uses live previews for portfolio pages that can be embedded. Other links show a styled preview fallback with the domain and icon.

The reorder feature uses `localStorage` for this assessment demo. At Linktree scale, this should live in a backend profile settings table keyed by creator/profile ID, with validation to ensure saved order only references links the creator owns.
