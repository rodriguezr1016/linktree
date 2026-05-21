import { getQrCodeFileName, getQrCodeUrl } from "../lib/qr";

type QrLink = {
  label: string;
  href: string;
};

type QrModalProps = {
  qrLink: QrLink;
  onClose: () => void;
};

export function QrModal({ qrLink, onClose }: QrModalProps) {
  const handleDownloadQrCode = async () => {
    const response = await fetch(getQrCodeUrl(qrLink.href));
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");

    downloadLink.href = objectUrl;
    downloadLink.download = getQrCodeFileName(qrLink.label);
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    URL.revokeObjectURL(objectUrl);
  };

  const handleShareQrCode = async () => {
    const response = await fetch(getQrCodeUrl(qrLink.href));
    const blob = await response.blob();
    const file = new File([blob], getQrCodeFileName(qrLink.label), {
      type: blob.type || "image/png",
    });

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: `${qrLink.label} QR Code`,
        text: `QR code for ${qrLink.label}`,
        files: [file],
      });
      return;
    }

    if (navigator.share) {
      await navigator.share({
        title: `${qrLink.label} QR Code`,
        text: `Open ${qrLink.label}`,
        url: qrLink.href,
      });
      return;
    }

    await navigator.clipboard.writeText(qrLink.href);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1B20]/45 px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-code-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xs rounded-lg border border-[#D8CFC4] bg-[#FDFBF7] p-5 text-center shadow-[0_24px_70px_rgba(29,27,32,0.32)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <h2
            id="qr-code-title"
            className="text-base font-semibold text-[#4A443F]"
          >
            {qrLink.label} QR Code
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close QR code"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[#CDBFB4] text-[#4A443F] transition hover:border-[#A64E3F] hover:text-[#A64E3F]"
          >
            ×
          </button>
        </div>

        <div className="mt-5 rounded-md border border-[#E8E2D9] bg-white p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getQrCodeUrl(qrLink.href)}
            alt={`QR code for ${qrLink.label}`}
            className="mx-auto h-56 w-56"
          />
        </div>

        <p className="mt-3 break-all text-xs text-[#7D716B]">{qrLink.href}</p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleDownloadQrCode}
            className="rounded-md border border-[#CDBFB4] bg-[#A64E3F] px-3 py-2 text-sm font-semibold text-[#FDFBF7] transition hover:bg-[#8F4437]"
          >
            Download
          </button>
          <button
            type="button"
            onClick={handleShareQrCode}
            className="rounded-md border border-[#CDBFB4] bg-[#FDFBF7] px-3 py-2 text-sm font-semibold text-[#4A443F] transition hover:border-[#A64E3F] hover:text-[#A64E3F]"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
