"use client";

import Image from "next/image";
import { useState, type UIEvent } from "react";

const links = [
  {
    label: "Portfolio",
    href: "https://nextjs-portfolio-eta-opal.vercel.app/",
    categories: ["Work", "Dev"],
    canPreview: true,
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/></svg>,
  },
  {
    label: "GitHub",
    href: "https://github.com/rodriguezr1016",
    categories: ["Dev", "Work"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_8317_1195)">
    <path d="M5.99967 12.6667C2.66634 13.6667 2.66634 11 1.33301 10.6667M10.6663 14.6667V12.0867C10.6913 11.7688 10.6484 11.4492 10.5404 11.1492C10.4323 10.8492 10.2616 10.5756 10.0397 10.3467C12.133 10.1133 14.333 9.32 14.333 5.68C14.3328 4.74922 13.9748 3.85413 13.333 3.18C13.6369 2.36567 13.6154 1.46557 13.273 0.666666C13.273 0.666666 12.4863 0.433332 10.6663 1.65333C9.13835 1.23921 7.52767 1.23921 5.99967 1.65333C4.17967 0.433332 3.39301 0.666666 3.39301 0.666666C3.05059 1.46557 3.0291 2.36567 3.33301 3.18C2.68643 3.85913 2.32802 4.76231 2.33301 5.7C2.33301 9.31333 4.53301 10.1067 6.62634 10.3667C6.40701 10.5933 6.23785 10.8636 6.12988 11.1599C6.02191 11.4563 5.97755 11.772 5.99967 12.0867V14.6667" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_8317_1195">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rene-rodriguez-570648329/",
    categories: ["Socials", "Work"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 40" fill="none">
  <path d="M26.6663 13.3334C29.3185 13.3334 31.862 14.3869 33.7374 16.2623C35.6128 18.1377 36.6663 20.6812 36.6663 23.3334V35H29.9997V23.3334C29.9997 22.4493 29.6485 21.6015 29.0234 20.9764C28.3982 20.3512 27.5504 20 26.6663 20C25.7823 20 24.9344 20.3512 24.3093 20.9764C23.6842 21.6015 23.333 22.4493 23.333 23.3334V35H16.6663V23.3334C16.6663 20.6812 17.7199 18.1377 19.5953 16.2623C21.4706 14.3869 24.0142 13.3334 26.6663 13.3334Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.99967 15H3.33301V35H9.99967V15Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.66634 10C8.50729 10 9.99967 8.50766 9.99967 6.66671C9.99967 4.82576 8.50729 3.33337 6.66634 3.33337C4.82539 3.33337 3.33301 4.82576 3.33301 6.66671C3.33301 8.50766 4.82539 10 6.66634 10Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
  },
  {
    label: "Resume",
    href: "https://nextjs-portfolio-eta-opal.vercel.app/Resume",
    categories: ["Work", "Dev"],
    canPreview: true,
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reneerooster1016/",
    categories: ["Socials", "Media"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
  <path d="M17.5 6.22913H17.51M7 1.91663H17C19.7614 1.91663 22 4.06193 22 6.70829V16.2916C22 18.938 19.7614 21.0833 17 21.0833H7C4.23858 21.0833 2 18.938 2 16.2916V6.70829C2 4.06193 4.23858 1.91663 7 1.91663ZM16 10.8962C16.1234 11.6938 15.9813 12.5083 15.5938 13.224C15.2063 13.9397 14.5931 14.5201 13.8416 14.8826C13.0901 15.2451 12.2384 15.3712 11.4078 15.2431C10.5771 15.115 9.80976 14.7392 9.21484 14.1691C8.61992 13.5989 8.22773 12.8635 8.09407 12.0675C7.9604 11.2714 8.09207 10.4553 8.47033 9.73507C8.84859 9.01486 9.45419 8.42729 10.201 8.05594C10.9478 7.68459 11.7978 7.54836 12.63 7.66663C13.4789 7.78727 14.2649 8.16636 14.8717 8.74792C15.4785 9.32948 15.8741 10.0827 16 10.8962Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@renerodriguez315",
    categories: ["Media", "Socials"],
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 32 24" fill="none">
  <path d="M30.0538 4.72667C29.8954 4.09388 29.5728 3.5141 29.1186 3.04587C28.6645 2.57765 28.0948 2.23758 27.4671 2.06C25.1738 1.5 16.0004 1.5 16.0004 1.5C16.0004 1.5 6.8271 1.5 4.53377 2.11333C3.9061 2.29091 3.33641 2.63099 2.88223 3.09921C2.42806 3.56743 2.10549 4.14721 1.9471 4.78C1.52739 7.10741 1.32208 9.46841 1.33377 11.8333C1.31881 14.2161 1.52413 16.5951 1.9471 18.94C2.12172 19.5531 2.45151 20.1109 2.90463 20.5593C3.35775 21.0078 3.91886 21.3318 4.53377 21.5C6.8271 22.1133 16.0004 22.1133 16.0004 22.1133C16.0004 22.1133 25.1738 22.1133 27.4671 21.5C28.0948 21.3224 28.6645 20.9823 29.1186 20.5141C29.5728 20.0459 29.8954 19.4661 30.0538 18.8333C30.4702 16.5235 30.6755 14.1804 30.6671 11.8333C30.6821 9.45061 30.4767 7.0716 30.0538 4.72667Z" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.0004 16.1933L20.6671 11.8333L13.0004 7.47333V16.1933Z" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
  },
  {
    label: "Projects",
    href: "https://nextjs-portfolio-eta-opal.vercel.app/Works",
    categories: ["Dev", "Work"],
    canPreview: true,
    icon: "{}",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/user/8ej2m6d78swathn9fi6pcwzf2",
    categories: ["Media", "Socials"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm4.586 14.422a.622.622 0 0 1-.856.207c-2.344-1.432-5.293-1.756-8.766-.961a.623.623 0 0 1-.277-1.215c3.8-.868 7.06-.489 9.692 1.12.293.18.386.56.207.849Zm1.223-2.72a.78.78 0 0 1-1.073.257c-2.682-1.649-6.771-2.126-9.943-1.163a.781.781 0 0 1-.453-1.495c3.625-1.1 8.131-.568 11.212 1.326a.78.78 0 0 1 .257 1.074Zm.105-2.833C14.698 8.96 9.39 8.784 6.319 9.714a.936.936 0 1 1-.543-1.792c3.526-1.07 9.392-.862 13.093 1.336a.936.936 0 0 1-.955 1.611Z" />
      </svg>
    ),
  },
  {
    label: "Etsy",
    href: "https://www.etsy.com",
    categories: ["Shop"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.75 3h10.5l.45 4.65h-1.55c-.35-2.1-1.1-2.8-3.05-2.8H10v5.35h2.2c1.3 0 1.65-.35 1.9-1.85h1.35v5.55H14.1c-.25-1.55-.6-1.9-1.9-1.9H10v6.15h3.45c2.15 0 3.05-.85 3.65-3.25h1.55L18 21H6.75v-1.25l1.4-.3V4.55l-1.4-.3V3Z" />
      </svg>
    ),
  },
  {
    label: "Nike",
    href: "https://www.nike.com",
    categories: ["Shop"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.8 7.65 8.35 13.38c-1.13.48-2.08.72-2.86.72-.88 0-1.54-.31-1.98-.92-.42-.58-.48-1.36-.18-2.32.25-.78.76-1.62 1.52-2.5-.08.42-.04.8.13 1.13.24.47.73.7 1.46.7.48 0 1.08-.1 1.8-.31L21.52 6l.28 1.65Z" />
      </svg>
    ),
  },
  {
    label: "Target",
    href: "https://www.target.com",
    categories: ["Shop"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 3.4a6.6 6.6 0 1 1 0 13.2 6.6 6.6 0 0 1 0-13.2Zm0 3.2a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Z" />
      </svg>
    ),
  },
  {
    label: "Uniqlo",
    href: "https://www.uniqlo.com/us",
    categories: ["Shop"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3 3h18v18H3V3Zm2 2v14h14V5H5Zm2 2h4v4H7V7Zm6 0h4v4h-4V7Zm-6 6h4v4H7v-4Zm6 0h4v4h-4v-4Z" />
      </svg>
    ),
  },
];

const categories = [
  { label: "Socials", icon: "@" },
  { label: "Work", icon: "W" },
  { label: "Dev", icon: "</>" },
  { label: "Media", icon: "▶" },
  { label: "Shop", icon: "$" },
];

const getDisplayUrl = (href: string) => {
  const url = new URL(href);

  return url.hostname.replace("www.", "");
};

const getQrCodeUrl = (href: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(href)}`;

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryScrollProgress, setCategoryScrollProgress] = useState(0);
  const [expandedLink, setExpandedLink] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState("");
  const visibleLinks = selectedCategory
    ? links.filter((link) => link.categories.includes(selectedCategory))
    : links;
  const handleCategoryScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
    const maxScrollLeft = scrollWidth - clientWidth;

    setCategoryScrollProgress(
      maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0,
    );
  };
  const handleCopyLink = async (href: string, label: string) => {
    await navigator.clipboard.writeText(href);
    setCopiedLink(label);
    window.setTimeout(() => {
      setCopiedLink((currentLink) => (currentLink === label ? "" : currentLink));
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#E8E2D9] px-6 py-12 text-[#4A443F]">
      <section className="mx-auto flex w-full max-w-md flex-col items-center overflow-hidden rounded-t-4xl border-2 border-[#D8CFC4] bg-[#FDFBF7]">
        <div className="flex w-full flex-col items-center border-b-2 border-[#E8E2D9] bg-[#F5EFE8] px-6 py-6">
          <Image
            src="/profile.JPG"
            alt="Profile photo"
            width={112}
            height={112}
            className="h-28 w-28 rounded-full border-4 border-[#A64E3F] object-cover"
            priority
          />

          <h1 className="mt-6 text-2xl font-semibold text-[#4A443F]">
            Rene Rodriguez
          </h1>
          <p className="mt-1 text-sm text-[#7D716B]">Software Developer</p>
          <div className="mt-2 flex flex-row items-center gap-1 text-sm text-[#7D716B]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z" fill="currentColor" />
            </svg>
            <p>Modesto, CA</p>
          </div>
        </div>

        <div className="w-full overflow-hidden px-6 pt-6">
          <div
            className="scrollbar-hide -mb-4 flex gap-2 overflow-x-auto pb-4"
            onScroll={handleCategoryScroll}
          >
            {categories.map((category) => (
              <button
                key={category.label}
                type="button"
                onClick={() =>
                  setSelectedCategory((currentCategory) =>
                    currentCategory === category.label ? "" : category.label,
                  )
                }
                className={`flex min-w-[calc((100%-1rem)/3)] items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category.label
                    ? "border-[#A64E3F] bg-[#A64E3F] text-[#FDFBF7]"
                    : "border-[#CDBFB4] bg-[#F5EFE8] text-[#4A443F] hover:border-[#A64E3F] hover:text-[#A64E3F]"
                }`}
              >
                <span className="text-xs font-semibold">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
          <div className="mt-3 h-1 w-full rounded-full bg-[#E8E2D9]">
            <div
              className="h-full rounded-full bg-[#A64E3F] transition-[left]"
              style={{
                left: `${categoryScrollProgress * 40}%`,
                position: "relative",
                width: "60%",
              }}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 px-6 py-8">
          {visibleLinks.map((link) => {
            const isExpanded = expandedLink === link.label;

            return (
            <div
              key={link.label}
              className="overflow-hidden rounded-md border border-[#CDBFB4] bg-[#F5EFE8]"
            >
              <button
                type="button"
                onClick={() =>
                  setExpandedLink((currentLink) =>
                    currentLink === link.label ? null : link.label,
                  )
                }
                className="flex w-full items-center bg-[#A64E3F] px-4 py-4 text-sm font-semibold text-[#FDFBF7] transition hover:bg-[#8F4437]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FDFBF7]/15 text-xs">
                  {link.icon}
                </span>
                <span className="flex-1 text-center">{link.label}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center text-sm transition-transform duration-300 ${
                    isExpanded ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div
                  className={`min-h-0 overflow-hidden transition duration-300 ease-out ${
                    isExpanded
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-3 p-3">
                  {link.canPreview ? (
                    <div className="aspect-video overflow-hidden rounded-md border border-[#D8CFC4] bg-[#E8E2D9]">
                      <iframe
                        src={link.href}
                        title={`${link.label} preview`}
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-md border border-[#D8CFC4] bg-[#E8E2D9] px-5 text-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#A64E3F] text-[#FDFBF7]">
                        {link.icon}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#4A443F]">
                          {link.label}
                        </p>
                        <p className="mt-1 text-xs text-[#7D716B]">
                          {getDisplayUrl(link.href)}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-[1fr_1fr_44px] gap-2">
                    <a
                      href={getQrCodeUrl(link.href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-[#CDBFB4] bg-[#FDFBF7] px-3 py-2 text-sm font-semibold text-[#4A443F] transition hover:border-[#A64E3F] hover:text-[#A64E3F]"
                    >
                      QR Code
                    </a>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-[#CDBFB4] bg-[#FDFBF7] px-3 py-2 text-sm font-semibold text-[#4A443F] transition hover:border-[#A64E3F] hover:text-[#A64E3F]"
                    >
                      Visit
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyLink(link.href, link.label)}
                      aria-label={`Copy ${link.label} link`}
                      title={
                        copiedLink === link.label ? "Copied" : "Copy link"
                      }
                      className="flex items-center justify-center rounded-md border border-[#CDBFB4] bg-[#FDFBF7] text-[#4A443F] transition hover:border-[#A64E3F] hover:text-[#A64E3F]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h7A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.5 8h7A2.5 2.5 0 0 1 16 10.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 17.5v-7A2.5 2.5 0 0 1 6.5 8Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
