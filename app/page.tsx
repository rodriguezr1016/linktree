"use client";

import {
  useRef,
  useState,
  useSyncExternalStore,
  type PointerEvent,
  type UIEvent,
} from "react";
import { CategoryCarousel } from "./components/CategoryCarousel";
import { FeatureBadge } from "./components/FeatureBadge";
import { LinkCard } from "./components/LinkCard";
import { ProfileHeader } from "./components/ProfileHeader";
import { QrModal } from "./components/QrModal";
import { categories, type LinkItem, type LinkCategory } from "./data/links";
import {
  getLinkOrderSnapshot,
  getOrderedLinksFromSnapshot,
  getServerLinkOrderSnapshot,
  saveLinkOrder,
  subscribeToLinkOrder,
} from "./lib/link-order";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<LinkCategory | "">(
    "",
  );
  const [categoryScrollProgress, setCategoryScrollProgress] = useState(0);
  const [expandedLink, setExpandedLink] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState("");
  const [isReordering, setIsReordering] = useState(false);
  const [draggingLink, setDraggingLink] = useState<string | null>(null);
  const [qrLink, setQrLink] = useState<Pick<LinkItem, "label" | "href"> | null>(
    null,
  );

  const longPressTimerRef = useRef<number | null>(null);
  const suppressNextClickRef = useRef(false);

  const linkOrderSnapshot = useSyncExternalStore(
    subscribeToLinkOrder,
    getLinkOrderSnapshot,
    getServerLinkOrderSnapshot,
  );
  const orderedLinks = getOrderedLinksFromSnapshot(linkOrderSnapshot);
  const visibleLinks = selectedCategory
    ? orderedLinks.filter((link) => link.categories.includes(selectedCategory))
    : orderedLinks;

  const handleCategoryScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
    const maxScrollLeft = scrollWidth - clientWidth;

    setCategoryScrollProgress(
      maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0,
    );
  };

  const handleCategoryToggle = (category: LinkCategory) => {
    setSelectedCategory((currentCategory) =>
      currentCategory === category ? "" : category,
    );
  };

  const handleCopyLink = async (href: string, label: string) => {
    await navigator.clipboard.writeText(href);
    setCopiedLink(label);
    window.setTimeout(() => {
      setCopiedLink((currentLink) => (currentLink === label ? "" : currentLink));
    }, 1500);
  };

  const startReorderPress = (label: string) => {
    longPressTimerRef.current = window.setTimeout(() => {
      suppressNextClickRef.current = true;
      setExpandedLink(null);
      setDraggingLink(label);
      setIsReordering(true);
    }, 450);
  };

  const clearReorderPress = () => {
    if (longPressTimerRef.current) {
      window.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const stopReordering = () => {
    clearReorderPress();
    setDraggingLink(null);

    window.setTimeout(() => {
      setIsReordering(false);
    }, 120);
  };

  const handleCardToggle = (label: string) => {
    if (suppressNextClickRef.current || isReordering) {
      suppressNextClickRef.current = false;
      return;
    }

    setExpandedLink((currentLink) => (currentLink === label ? null : label));
  };

  const moveDraggedLink = (targetLabel: string) => {
    if (!draggingLink || draggingLink === targetLabel) {
      return;
    }

    const nextLinks = [...orderedLinks];
    const currentIndex = nextLinks.findIndex(
      (link) => link.label === draggingLink,
    );
    const targetIndex = nextLinks.findIndex(
      (link) => link.label === targetLabel,
    );

    if (currentIndex === -1 || targetIndex === -1) {
      return;
    }

    [nextLinks[currentIndex], nextLinks[targetIndex]] = [
      nextLinks[targetIndex],
      nextLinks[currentIndex],
    ];

    saveLinkOrder(nextLinks);
  };

  const handleReorderPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isReordering) {
      return;
    }

    event.preventDefault();

    const targetCard = document
      .elementFromPoint(event.clientX, event.clientY)
      ?.closest("[data-link-label]");
    const targetLabel =
      targetCard instanceof HTMLElement ? targetCard.dataset.linkLabel : null;

    if (targetLabel) {
      moveDraggedLink(targetLabel);
    }
  };

  return (
    <main className="min-h-screen bg-[#E8E2D9] pb-12 text-[#4A443F]">
      <FeatureBadge />

      <section className="mx-auto mx-6 flex w-full max-w-md flex-col items-center overflow-hidden rounded-t-4xl border-2 border-[#D8CFC4] bg-[#FDFBF7] shadow-[0_24px_60px_rgba(74,68,63,0.18)]">
        <ProfileHeader />

        <CategoryCarousel
          categories={categories}
          selectedCategory={selectedCategory}
          scrollProgress={categoryScrollProgress}
          onCategoryToggle={handleCategoryToggle}
          onScroll={handleCategoryScroll}
        />

        <div
          className="flex w-full flex-col gap-3 px-6 py-8"
          onPointerMove={handleReorderPointerMove}
          onPointerUp={stopReordering}
          onPointerCancel={stopReordering}
        >
          {visibleLinks.map((link) => (
            <LinkCard
              key={link.label}
              link={link}
              isExpanded={expandedLink === link.label}
              isDragging={draggingLink === link.label}
              isReordering={isReordering}
              copiedLink={copiedLink}
              onPressStart={startReorderPress}
              onPressEnd={stopReordering}
              onPressCancel={stopReordering}
              onPressLeave={clearReorderPress}
              onToggle={handleCardToggle}
              onQrOpen={setQrLink}
              onCopy={handleCopyLink}
            />
          ))}
        </div>
      </section>

      {qrLink && <QrModal qrLink={qrLink} onClose={() => setQrLink(null)} />}
    </main>
  );
}
