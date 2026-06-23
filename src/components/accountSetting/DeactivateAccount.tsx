import { useState } from "react";
export default function DeactivateAccount() {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-red-100 px-4 py-4 sm:px-5 sm:py-5 space-y-3">
      <p className="text-[16px] sm:text-[18px] font-semibold text-[#BA1B1B] mb-4 pb-2 border-b border-[#E5E7EB]">
        Deactivate seller account
      </p>

      <div className="space-y-2">
        <p className="text-[14px] sm:text-[16px] font-medium text-[#4C4D60]">
          Deactivate seller account
        </p>
        <p className="text-[13px] sm:text-[14px] text-[#696A7A] leading-relaxed">
          Your store will go offline and products will be hidden. Orders in
          progress will still be fulfilled.
        </p>
        <button
          onClick={() => {
            setShowConfirm(true);
          }}
          className="mt-2 w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#BA1B1B] text-white text-[13px] font-medium hover:bg-red-700 transition"
        >
          Deactivate account
        </button>
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30 p-4">
          <div className="bg-white rounded-2xl p-5 sm:p-6 w-full max-w-sm space-y-4">
            <p className="text-[15px] sm:text-[16px] font-semibold text-[#BA1B1B]">
              Are you sure?
            </p>
            <p className="text-[13px] text-[#9899A3]">
              This will take your store offline. You can reactivate it later.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setShowConfirm(false);
                }}
                className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowConfirm(false);
                }}
                className="flex-1 py-2.5 rounded-lg bg-[#BA1B1B] text-white text-[13px] font-medium hover:bg-red-700 transition"
              >
                Yes, deactivate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
