import { X } from "lucide-react";

interface Props {
  productName: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeactivateProductModal({
  productName,
  onClose,
  onConfirm,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#F3F4F6]">
          <p className="text-[18px] font-semibold text-[#4C4D60]">
            Deactivate product
          </p>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={16} className="text-[#9899A3]" />
          </button>
        </div>

        <div className="px-5 py-4 space-y-3">
          <p className="text-[15px] font-semibold text-[#4C4D60]">
            {productName}
          </p>
          <p className="text-[13px] text-[#696A7A] leading-relaxed">
            This product will be hidden from your store and buyers won't be
            able to find or purchase it. You can reactivate it at any time.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
              Deactivate product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}