import { X, AlertTriangle } from "lucide-react";

interface Props {
  productName: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteProductModal({
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
            Delete product
          </p>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={16} className="text-[#9899A3]" />
          </button>
        </div>

        <div className="px-5 py-4 space-y-4">

          {/* Warning banner */}
          <div className="flex items-start gap-3 bg-[#FBE4E4] border border-[#F6C1C1] rounded-xl px-4 py-3">
            <AlertTriangle
              size={18}
              className="text-[#BA1B1B] shrink-0 mt-0.5"
            />
            <p className="text-[13px] text-[#BA1B1B] leading-relaxed">
              This action is permanent and cannot be undone. All product data,
              images and history will be deleted.
            </p>
          </div>

          {/* Confirmation text */}
          <p className="text-[13px] text-[#696A7A] leading-relaxed">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-[#4C4D60]">{productName}</span>?
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
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
              Yes, delete product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}