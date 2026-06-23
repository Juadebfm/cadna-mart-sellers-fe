import { useState } from "react";
import { CircleAlert } from "lucide-react";
import HowToBulkUploadModal from "./model/HowToBulkUploadModal";

interface Props {
  onHowTo?: () => void;
}

export default function BulkUploadBanner({ onHowTo }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-[#222257] border border-[#CDCDFA] text-white rounded-xl px-4 py-3.5 sm:px-5">
        <div className="flex items-start sm:items-center gap-2">
          <CircleAlert
            size={20}
            className="shrink-0 text-[#DAB0FF] mt-0.5 sm:mt-0"
          />
          <p className="text-[13px] sm:text-[16px] leading-snug">
            New to bulk upload? Learn how to prepare your files correctly before
            you start.
          </p>
        </div>
        <button
          onClick={() => {
            onHowTo?.();
            setShowModal(true);
          }}
          className="w-full sm:w-auto shrink-0 px-4 py-2 sm:py-1.5 rounded-lg bg-white text-[#4C4D60] text-[13px] sm:text-[14px] font-semibold hover:bg-gray-100 border border-[#E5E7EB] transition"
        >
          How to bulk upload
        </button>
      </div>

      {showModal && (
        <HowToBulkUploadModal
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}
