import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  hasVariants: boolean;
  productId: string;
}

export default function ViewVariants({ hasVariants, productId }: Props) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
        <h2 className="text-[18px] font-semibold text-[#5D5FEF]">Variants</h2>
        <button
          onClick={() => void navigate(`/seller/products/${productId}/edit`)}
          className="flex items-center gap-1.5 text-[14px] text-[#4C4D60] border border-[#BABAC1] rounded-lg px-3 py-1.5 hover:bg-gray-50 transition"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Edit
        </button>
      </div>

      {hasVariants ? (
        <p className="text-[13px] text-[#696A7A]">
          This product has multiple variants configured.
        </p>
      ) : (
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-[#9899A3]">No variants configured.</p>
          <button
            onClick={() => void navigate(`/seller/products/${productId}/edit`)}
            className="flex items-center gap-1 text-[13px] text-[#5D5FEF] underline underline-offset-2 hover:opacity-75 transition"
          >
            Add variants
            <ArrowRight size={13} strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}