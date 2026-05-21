import type { ReactNode } from "react";

export type LinkCategory = "Socials" | "Work" | "Dev" | "Media" | "Shop";

export type LinkItem = {
  label: string;
  href: string;
  categories: LinkCategory[];
  icon: ReactNode;
  canPreview?: boolean;
};

export type Category = {
  label: LinkCategory;
  icon: string;
};

export const links: LinkItem[] = [
  {
    label: "Portfolio",
    href: "https://nextjs-portfolio-eta-opal.vercel.app/",
    categories: ["Work", "Dev"],
    canPreview: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/rodriguezr1016",
    categories: ["Dev", "Work"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#github-icon-clip)">
          <path
            d="M5.99967 12.6667C2.66634 13.6667 2.66634 11 1.33301 10.6667M10.6663 14.6667V12.0867C10.6913 11.7688 10.6484 11.4492 10.5404 11.1492C10.4323 10.8492 10.2616 10.5756 10.0397 10.3467C12.133 10.1133 14.333 9.32 14.333 5.68C14.3328 4.74922 13.9748 3.85413 13.333 3.18C13.6369 2.36567 13.6154 1.46557 13.273 0.666666C13.273 0.666666 12.4863 0.433332 10.6663 1.65333C9.13835 1.23921 7.52767 1.23921 5.99967 1.65333C4.17967 0.433332 3.39301 0.666666 3.39301 0.666666C3.05059 1.46557 3.0291 2.36567 3.33301 3.18C2.68643 3.85913 2.32802 4.76231 2.33301 5.7C2.33301 9.31333 4.53301 10.1067 6.62634 10.3667C6.40701 10.5933 6.23785 10.8636 6.12988 11.1599C6.02191 11.4563 5.97755 11.772 5.99967 12.0867V14.6667"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="github-icon-clip">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rene-rodriguez-570648329/",
    categories: ["Socials", "Work"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M26.6663 13.3334C29.3185 13.3334 31.862 14.3869 33.7374 16.2623C35.6128 18.1377 36.6663 20.6812 36.6663 23.3334V35H29.9997V23.3334C29.9997 22.4493 29.6485 21.6015 29.0234 20.9764C28.3982 20.3512 27.5504 20 26.6663 20C25.7823 20 24.9344 20.3512 24.3093 20.9764C23.6842 21.6015 23.333 22.4493 23.333 23.3334V35H16.6663V23.3334C16.6663 20.6812 17.7199 18.1377 19.5953 16.2623C21.4706 14.3869 24.0142 13.3334 26.6663 13.3334Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99967 15H3.33301V35H9.99967V15Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66634 10C8.50729 10 9.99967 8.50766 9.99967 6.66671C9.99967 4.82576 8.50729 3.33337 6.66634 3.33337C4.82539 3.33337 3.33301 4.82576 3.33301 6.66671C3.33301 8.50766 4.82539 10 6.66634 10Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: "https://nextjs-portfolio-eta-opal.vercel.app/Resume",
    categories: ["Work", "Dev"],
    canPreview: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reneerooster1016/",
    categories: ["Socials", "Media"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
      >
        <path
          d="M17.5 6.22913H17.51M7 1.91663H17C19.7614 1.91663 22 4.06193 22 6.70829V16.2916C22 18.938 19.7614 21.0833 17 21.0833H7C4.23858 21.0833 2 18.938 2 16.2916V6.70829C2 4.06193 4.23858 1.91663 7 1.91663ZM16 10.8962C16.1234 11.6938 15.9813 12.5083 15.5938 13.224C15.2063 13.9397 14.5931 14.5201 13.8416 14.8826C13.0901 15.2451 12.2384 15.3712 11.4078 15.2431C10.5771 15.115 9.80976 14.7392 9.21484 14.1691C8.61992 13.5989 8.22773 12.8635 8.09407 12.0675C7.9604 11.2714 8.09207 10.4553 8.47033 9.73507C8.84859 9.01486 9.45419 8.42729 10.201 8.05594C10.9478 7.68459 11.7978 7.54836 12.63 7.66663C13.4789 7.78727 14.2649 8.16636 14.8717 8.74792C15.4785 9.32948 15.8741 10.0827 16 10.8962Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@renerodriguez315",
    categories: ["Media", "Socials"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="16"
        viewBox="0 0 32 24"
        fill="none"
      >
        <path
          d="M30.0538 4.72667C29.8954 4.09388 29.5728 3.5141 29.1186 3.04587C28.6645 2.57765 28.0948 2.23758 27.4671 2.06C25.1738 1.5 16.0004 1.5 16.0004 1.5C16.0004 1.5 6.8271 1.5 4.53377 2.11333C3.9061 2.29091 3.33641 2.63099 2.88223 3.09921C2.42806 3.56743 2.10549 4.14721 1.9471 4.78C1.52739 7.10741 1.32208 9.46841 1.33377 11.8333C1.31881 14.2161 1.52413 16.5951 1.9471 18.94C2.12172 19.5531 2.45151 20.1109 2.90463 20.5593C3.35775 21.0078 3.91886 21.3318 4.53377 21.5C6.8271 22.1133 16.0004 22.1133 16.0004 22.1133C16.0004 22.1133 25.1738 22.1133 27.4671 21.5C28.0948 21.3224 28.6645 20.9823 29.1186 20.5141C29.5728 20.0459 29.8954 19.4661 30.0538 18.8333C30.4702 16.5235 30.6755 14.1804 30.6671 11.8333C30.6821 9.45061 30.4767 7.0716 30.0538 4.72667Z"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.0004 16.1933L20.6671 11.8333L13.0004 7.47333V16.1933Z"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
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

export const categories: Category[] = [
  { label: "Socials", icon: "@" },
  { label: "Work", icon: "W" },
  { label: "Dev", icon: "</>" },
  { label: "Media", icon: "▶" },
  { label: "Shop", icon: "$" },
];
