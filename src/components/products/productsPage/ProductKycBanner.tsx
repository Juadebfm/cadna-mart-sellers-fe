import { CircleAlert,  } from "lucide-react";
interface Props {
  kycCompleted: boolean;
}

export default function ProductsKYCBanner({ kycCompleted }: Props) {
  if (kycCompleted) return null;

  return (
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#FAF5FF] border border-[#DAB0FF] rounded-xl px-5 py-4 mb-6 gap-4">
      <div className="flex items-start sm:items-center gap-2">
        <div className="w-8 h-8  flex items-center justify-center text-[#8900FF] font-bold text-sm shrink-0">
          <CircleAlert size={22} />
        </div>
        <div>
          
          <p className="text-[13px] text-[#7D00E8] mt-0.5">
            All 38 products are saved as drafts. Complete KYC to publish your store and make products visible to buyers.
          </p>
        </div>
      </div>
    </div>
  );
}

