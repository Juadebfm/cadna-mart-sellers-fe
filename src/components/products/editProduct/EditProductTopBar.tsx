import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  onDiscard: () => void;
  onSave: () => void;
}

export default function EditProductTopBar({ onDiscard, onSave }: Props) {
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

      {/* Right — Discard + Save Changes */}
      <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
        <button
          onClick={onDiscard}
          className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-gray-200 text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
        >
          Discard
        </button>
        <button
          onClick={onSave}
          className={"flex-1 sm:flex-none px-4 py-2 rounded-lg text-[16px] font-semibold transition bg-[#EFEFFD] text-[#9294F4] hover:bg-[#4446D0] cursor-pointer  hover:text-white  "}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}