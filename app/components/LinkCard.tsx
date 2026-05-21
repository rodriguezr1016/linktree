import type { PointerEventHandler } from "react";
import type { LinkItem } from "../data/links";
import { getDisplayUrl } from "../lib/qr";

type LinkCardProps = {
  link: LinkItem;
  isExpanded: boolean;
  isDragging: boolean;
  isReordering: boolean;
  copiedLink: string;
  onPressStart: (label: string) => void;
  onPressEnd: () => void;
  onPressCancel: () => void;
  onPressLeave: () => void;
  onToggle: (label: string) => void;
  onQrOpen: (link: Pick<LinkItem, "label" | "href">) => void;
  onCopy: (href: string, label: string) => void;
};

export function LinkCard({
  link,
  isExpanded,
  isDragging,
  isReordering,
  copiedLink,
  onPressStart,
  onPressEnd,
  onPressCancel,
  onPressLeave,
  onToggle,
  onQrOpen,
  onCopy,
}: LinkCardProps) {
  const copied = copiedLink === link.label;
  const handlePointerDown: PointerEventHandler<HTMLButtonElement> = () => {
    onPressStart(link.label);
  };

  return (
    <div
      data-link-label={link.label}
      className={`overflow-hidden rounded-md border border-[#CDBFB4] bg-[#F5EFE8] shadow-[0_10px_24px_rgba(74,68,63,0.12)] transition ${
        isReordering ? "animate-link-vibrate" : ""
      } ${isDragging ? "scale-[1.02] opacity-80" : ""}`}
    >
      <button
        type="button"
        onPointerDown={handlePointerDown}
        onPointerUp={onPressEnd}
        onPointerCancel={onPressCancel}
        onPointerLeave={onPressLeave}
        onClick={() => onToggle(link.label)}
        className={`no-select flex w-full touch-none items-center bg-[#A64E3F] px-4 py-4 text-sm font-semibold text-[#FDFBF7] transition hover:bg-[#8F4437] ${
          isReordering ? "cursor-grabbing" : "cursor-grab"
        }`}
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
            isExpanded ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
          inert={isExpanded ? undefined : true}
          aria-hidden={!isExpanded}
        >
          <div className="flex flex-col gap-3 p-3">
            {link.canPreview ? (
              <div className="aspect-video overflow-hidden rounded-md border border-[#D8CFC4] bg-[#E8E2D9] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_18px_rgba(74,68,63,0.10)]">
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
              <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-md border border-[#D8CFC4] bg-[#E8E2D9] px-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_18px_rgba(74,68,63,0.10)]">
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
              <button
                type="button"
                onClick={() => onQrOpen({ label: link.label, href: link.href })}
                className="rounded-md border border-[#CDBFB4] bg-[#FDFBF7] px-3 py-2 text-sm font-semibold text-[#4A443F] transition hover:border-[#A64E3F] hover:text-[#A64E3F]"
              >
                QR Code
              </button>
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
                onClick={() => onCopy(link.href, link.label)}
                aria-label={`Copy ${link.label} link`}
                title={copied ? "Copied" : "Copy link"}
                className={`flex items-center justify-center rounded-md border text-[#4A443F] transition hover:border-[#A64E3F] hover:text-[#A64E3F] ${
                  copied
                    ? "border-[#A64E3F] bg-[#E8E2D9]"
                    : "border-[#CDBFB4] bg-[#FDFBF7]"
                }`}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
            <p
              className={`text-center text-xs font-semibold text-[#A64E3F] transition ${
                copied ? "opacity-100" : "opacity-0"
              }`}
              aria-live="polite"
            >
              Copied link
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CopyIcon() {
  return (
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
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
