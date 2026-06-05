import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  isValid: boolean;
  onSubmit: () => void;
}

export default function CreateProductTopBar({ isValid, onSubmit }: Props) {
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

      {/* Right — Cancel + Create Product */}
      <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
        <button
          onClick={() => { void navigate(-1); }}
          className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-gray-200 text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          disabled={!isValid}
          className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-[13px] font-semibold transition ${
            isValid
              ? "bg-[#5D5FEF] text-white hover:bg-[#4446D0] cursor-pointer"
              : "bg-[#EFEFFD] text-[#9294F4] cursor-not-allowed"
          }`}
        >
          Create Product
        </button>
      </div>
    </div>
  );
}