# Rene Rodriguez Linktree

A Linktree-style profile page. The baseline page includes a profile image, name, title, location, categorized personal links, expandable link cards, QR sharing, and a custom warm clay/cream visual style.

## Assessment Write-Up: Feature Pitch


The feature I would pitch to Linktree is **reorderable profile links with persistent personalized ordering**.

Creators often change what they want visitors to notice first: a new project, a job search, a social channel, a shop link, or a timely campaign. Linktree already helps collect links, but ordering is one of the most important ways a creator communicates priority. This demo lets users press and hold a link card, get vibration-style visual feedback, drag it into a new position, and keep that order saved locally.

In a production Linktree version, this could become a creator-facing ordering tool backed by user profile settings. A later version could extend it into audience-aware ordering, scheduled ordering, analytics-informed recommendations, or per-category ordering.

### What is the feature?

The feature is a reorderable Linktree profile experience. A normal click expands a link card, while pressing and holding a card starts reorder mode. The cards vibrate slightly to show that they are movable, and the user can drag a card into a new position. The order is saved locally so it remains after refresh.

### Why does Linktree need it?

Link order is a creator's priority system. The first few links are usually the links that matter most right now: a new project, a resume, a shop drop, a video, a social account, or a campaign. Creators move through different moments, and their profile should make it easy to reflect those shifts.

I think this matters because Linktree is not just a list of links. It is often the front door to someone's work. Making priority easier to adjust gives creators more control over what visitors see first and creates a foundation for future features like scheduled ordering, campaign layouts, or analytics-informed recommendations.

### How I built it

I built the project with Next.js, React, TypeScript, and Tailwind CSS. I started with the baseline Linktree requirements: a profile header, real personal links, categories, responsive styling, and a warm clay/cream visual system. From there, I added expandable cards so each link could do more than navigate away immediately.

The UI is split into focused components:

- `ProfileHeader` renders the profile image, name, title, and location.
- `CategoryCarousel` handles the horizontal category filter.
- `LinkCard` renders each expandable link card, preview area, QR action, Visit action, and copy feedback.
- `QrModal` displays the QR code in-page with Download and Share actions.
- `FeatureBadge` calls out the reorder feature at the top of the page.

The data is separated from the UI in `app/data/links.tsx`. Each link has a label, URL, categories, icon, and an optional `canPreview` flag. Categories are arrays instead of single values, so a link like YouTube can belong to both `Media` and `Socials`.

The expandable card behavior is handled with React state in `app/page.tsx`. A normal click opens or closes a card. Inside each expanded card, users can open a QR modal, visit the link, or copy the URL. Copying gives visible feedback by changing the copy icon to a checkmark and showing a short "Copied link" message.

For previews, I used live iframes only for the portfolio pages I control. Many major sites block iframe embedding with security headers, so other links use a fallback preview card with the icon and domain. That keeps the experience reliable instead of showing broken frames.

The reorder feature uses pointer events. When the user presses and holds a link card, a timer starts. After the hold threshold, the app enters reorder mode, closes any expanded card, and applies a small vibration animation so the user knows the list is movable. While the pointer moves, the app checks which card is under the pointer with `document.elementFromPoint(...)` and swaps the dragged item with that target.

The saved order is stored in `localStorage`. I used `useSyncExternalStore` for the saved order because this is a Next.js app with server-rendered HTML. Reading `localStorage` directly during the first client render caused a hydration mismatch: the server rendered the default order, but the browser immediately rendered the saved order. `useSyncExternalStore` lets the server and hydration snapshot match first, then applies the browser's saved order after hydration.

### How I would build it at Linktree scale

For this demo, `localStorage` is enough because there is no authentication or backend. At Linktree scale, the order should be stored as part of the creator's profile settings. I would save an ordered list of link IDs by profile ID, not titles, because titles can change. The backend should validate that every ordered link belongs to the profile owner and handle deleted or newly added links gracefully.

For performance, the public profile API should return links already sorted, so visitors do not pay for extra client-side ordering work. In the editor, I would use optimistic updates so reordering feels instant, then reconcile with the server response if the save fails.

I would roll it out behind a feature flag and measure whether creators use it, how often they reorder links, whether reordered profiles improve click-through on top links, and whether users understand the press-and-hold interaction without extra instruction. I would also test mobile heavily, because many creators manage their profiles from their phones.

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
