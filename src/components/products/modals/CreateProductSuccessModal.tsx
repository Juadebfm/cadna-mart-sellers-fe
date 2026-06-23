import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  productName: string;
  productId: string;
  onClose: () => void;
}

export default function CreateProductSuccessModal({ productName, productId, onClose }: Props) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden text-center px-6 py-8 space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[#E6F8F2] flex items-center justify-center mx-auto">
          <Check size={32} className="text-[#00AB72]" />
        </div>

        <div>
          <p className="text-[22px] font-medium text-[#0D0D0D]">Product Created!</p>
          <p className="text-[16px] text-[#696A7A] mt-1">
            <span className="font-medium text-[#4C4D60]">{productName}</span> has been successfully listed on your store.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <button
            onClick={() => void navigate(`/seller/products/${productId}/view`)}
            className="w-full py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition"
          >
            View Product
          </button>
          <button
            onClick={() => void navigate("/seller/products/create")}
            className="w-full py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
          >
            Add Another Product
          </button>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg text-[13px] text-[#9899A3] hover:text-[#4C4D60] transition"
          >
            Go to Products
          </button>
        </div>
      </div>
    </div>
  );
}