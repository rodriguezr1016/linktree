export const getDisplayUrl = (href: string) => {
  const url = new URL(href);

  return url.hostname.replace("www.", "");
};

export const getQrCodeUrl = (href: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(href)}`;

export const getQrCodeFileName = (label: string) =>
  `${label.toLowerCase().replaceAll(" ", "-")}-qr-code.png`;
