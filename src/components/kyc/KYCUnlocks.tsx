import { Store, Package2, Wallet } from "lucide-react";

const UNLOCKS = [
  {
    icon: <Store className="h-6 w-6 text-white" />,
    iconBg: "bg-[#5D5FEF]",
    label: "Publish your store",
    description: "Go live and become visible to buyers",
  },
  {
    icon: <Package2 className="h-6 w-6 text-white" />,
    iconBg: "bg-[#8900FF]",
    label: "Product visibility",
    description: "Products move from draft to indexed",
  },
  {
    icon: <Wallet className="h-6 w-6 text-white" />,
    iconBg: "bg-[#00BC7D]",
    label: "Payout release",
    description: "Funds in escrow are released to wallet",
  },
];

export default function KYCUnlocks() {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] text-center  font-semibold text-[#5D5FEF] mb-5 border-b border-gray-100 pb-3">
        What Verification Unlocks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {UNLOCKS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center gap-3 px-4 py-5 rounded-xl bg-[#FAFAFF] border border-[#E5E7EB]"
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg}`}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-[18px] font-semibold text-[#4C4D60]">
                {item.label}
              </p>
              <p className="text-[14px] text-[#696A7A] mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}