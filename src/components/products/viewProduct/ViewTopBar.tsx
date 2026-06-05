import { ArrowLeft, CircleOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  productId: string;
}

export default function ViewTopBar({ productId }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

      {/* Left — Back */}
      <button
        onClick={() => { void navigate(-1); }}
        className="flex items-center gap-1.5 text-[14px] text-[#4C4D60] hover:text-gray-800 transition border border-[#E5E7EB] rounded-md py-2 px-4 w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      {/* Right — Close Sales + Edit Product */}
      <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">

        <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-[#BABAC1] text-[14px] text-[#4C4D60] hover:bg-gray-50 transition">
          <CircleOff className="h-4 w-4 shrink-0" />
          Close Sales
        </button>

        <button
          onClick={() => { void navigate(`/seller/products/${productId}/edit`); }}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-[#5D5FEF] text-[#5D5FEF] hover:text-white text-[14px] border border-[#5D5FEF] transition"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Edit Product
        </button>

      </div>
    </div>
  );
}