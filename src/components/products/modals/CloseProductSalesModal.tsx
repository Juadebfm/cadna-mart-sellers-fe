import { X, Ban } from "lucide-react";

interface Props {
  productName: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CloseProductSalesModal({
  productName,
  onClose,
  onConfirm,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <p className="text-[18px] font-semibold text-[#4C4D60]">
            Close product sales
          </p>
          <button onClick={onClose}>
            <X size={16} className="text-[#9899A3]" />
          </button>
        </div>

        <div className="px-5 pb-5 space-y-4">

          {/* Product warning banner — purple bg, product name + subtext together */}
          <div className="flex items-start gap-3 bg-[#F8F0FF] border border-[#E9D5FF] rounded-xl px-4 py-3">
            <Ban size={18} className="text-[#8900FF] shrink-0 mt-0.5" />
            <div>
              <p className="text-[13px] font-semibold text-[#8900FF]">
                {productName}
              </p>
              <p className="text-[12px] text-[#8900FF] opacity-80 mt-0.5">
                Buyers will no longer be able to purchase this product.
                Existing orders are not affected.
              </p>
            </div>
          </div>

          {/* Info text */}
          <p className="text-[13px] text-[#696A7A] leading-relaxed">
            Existing orders already placed will still be fulfilled normally.
            This only affects new purchases.
          </p>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-2.5 rounded-lg bg-[#BA1B1B] text-white text-[13px] font-medium hover:bg-red-700 transition"
            >
              Close sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}