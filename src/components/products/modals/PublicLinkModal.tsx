import { X, Copy, ExternalLink } from "lucide-react";

interface Props {
  productName: string;
  productSlug: string;
  status: "Live" | "Draft";
  onClose: () => void;
}

export default function PublicLinkModal({
  productName,
  productSlug,
  status,
  onClose,
}: Props) {
  const url = `cadnamart.com/p/${productSlug}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#F3F4F6]">
          <p className="text-[18px] font-semibold text-[#4C4D60]">
            Public product link
          </p>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={16} className="text-[#9899A3]" />
          </button>
        </div>

        <div className="px-5 py-4 space-y-4">

          {/* Product name + status */}
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[15px] font-medium text-[#4C4D60] min-w-0 truncate">
              {productName}
            </p>
            <span
              className={`shrink-0 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                status === "Live"
                  ? "bg-[#EDFDF7] border border-[#00BC7D] text-[#00AB72]"
                  : "bg-[#F1F2F4] border border-[#D0D5DD] text-[#9899A3]"
              }`}
            >
              {status}
            </span>
          </div>

          {/* URL copy row */}
          <div className="flex items-center gap-2">
            <input
              readOnly
              value={url}
              className="flex-1 min-w-0 px-3 py-2 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg bg-gray-50 focus:outline-none"
            />
            <button
              onClick={() => void navigator.clipboard.writeText(url)}
              className="shrink-0 px-3 py-2 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition"
            >
              <Copy size={14} />
            </button>
          </div>

          {/* Draft warning */}
          {status === "Draft" && (
            <p className="text-[12px] text-yellow-600 bg-yellow-50 rounded-lg px-3 py-2 leading-relaxed">
              ⚠ This product is currently a draft. The link won't be publicly
              accessible until your KYC is approved and the product is set to
              Live.
            </p>
          )}

          <p className="text-[12px] text-[#9899A3]">
            Share this link with buyers or on social media.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
            >
              Close
            </button>
            <button
              onClick={() => window.open(`https://${url}`, "_blank")}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition"
            >
              <ExternalLink size={13} />
              Open in new tab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}