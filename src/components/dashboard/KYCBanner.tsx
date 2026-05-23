import { Shield, ArrowRight } from "lucide-react";

export default function KYCBanner() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#FAF5FF] border border-[#CDCDFA] rounded-xl px-5 py-4 mb-6 gap-4">
      
      <div className="flex items-start sm:items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#CDCDFA] flex items-center justify-center text-[#5D5FEF] font-bold text-sm shrink-0">
          <Shield size={16} />
        </div>
        <div>
          <p className="text-[14px] font-medium text-[#5D5FEF]">
            Complete your KYC to publish your store
          </p>
          <p className="text-[13px] text-[#696A7A] mt-0.5">
            Your products are saved as drafts. Verify your identity to go live
            and start receiving orders.
          </p>
        </div>
      </div>

      <button className="shrink-0 w-full sm:w-auto px-4 py-2 text-sm font-semibold text-white bg-[#8900FF] rounded-lg hover:bg-[#7A00E5] transition-colors flex items-center justify-center gap-2">
        Complete KYC <ArrowRight size={16} />
      </button>

    </div>
  );
}