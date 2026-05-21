import { links, type LinkItem } from "../data/links";

const linkOrderStorageKey = "linktree-link-order";
const linkOrderChangeEvent = "linktree-link-order-change";
const defaultLinkOrderSnapshot = JSON.stringify(
  links.map((link) => link.label),
);

export const subscribeToLinkOrder = (onStoreChange: () => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(linkOrderChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(linkOrderChangeEvent, onStoreChange);
  };
};

export const getLinkOrderSnapshot = () => {
  if (typeof window === "undefined") {
    return defaultLinkOrderSnapshot;
  }

  return (
    window.localStorage.getItem(linkOrderStorageKey) ?? defaultLinkOrderSnapshot
  );
};

export const getServerLinkOrderSnapshot = () => defaultLinkOrderSnapshot;

export const getOrderedLinksFromSnapshot = (snapshot: string) => {
  try {
    const savedLabels = JSON.parse(snapshot) as string[];
    const savedLinks = savedLabels
      .map((label) => links.find((link) => link.label === label))
      .filter((link): link is LinkItem => Boolean(link));
    const newLinks = links.filter((link) => !savedLabels.includes(link.label));

    return [...savedLinks, ...newLinks];
  } catch {
    return links;
  }
};

export const saveLinkOrder = (nextLinks: LinkItem[]) => {
  window.localStorage.setItem(
    linkOrderStorageKey,
    JSON.stringify(nextLinks.map((link) => link.label)),
  );
  window.dispatchEvent(new Event(linkOrderChangeEvent));
};
