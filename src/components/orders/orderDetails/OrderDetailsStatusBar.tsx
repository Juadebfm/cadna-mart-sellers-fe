import type { OrderStatus } from "@/core/types/Order";

const STATUS_STEPS: OrderStatus[] = [
  "Confirmed",
  "Processing",
  "Packed",
  "Dispatched",
  "Delivered",
  "Cancelled",
];

const STATUS_STYLES: Record<OrderStatus, string> = {
  Confirmed: "bg-[#EFEFFD] text-[#5D5FEF] border-[#5D5FEF]",
  Processing: "bg-[#EFEFFD] text-[#5D5FEF] border-[#5D5FEF]",
  Packed: "bg-[#EFEFFD] text-[#5D5FEF] border-[#5D5FEF]",
  Dispatched: "bg-[#EFEFFD] text-[#5D5FEF] border-[#5D5FEF]",
  Delivered: "bg-[#EFEFFD] text-[#5D5FEF] border-[#5D5FEF]",
  Cancelled: "bg-[#F8E8E8] text-[#BA1B1B] border-[#DF9696]",
};

interface Props {
  currentStatus: OrderStatus;
}

export default function OrderDetailStatusBar({ currentStatus }: Props) {
  const currentIndex = STATUS_STEPS.indexOf(currentStatus);

  return (
    <div className="bg-white rounded-xl border border-gray-100 px-5 py-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">

        {/* Left — Title + subtitle */}
        <div className="shrink-0">
          <p className="text-[13px] font-semibold text-gray-700">
            Update Status
          </p>
          <p className="text-[12px] text-gray-400 mt-0.5">
            Move this order through fulfilment or cancel it if needed.
          </p>
        </div>

        {/* Right — Status pills */}
        <div className="flex flex-wrap gap-2">
          {STATUS_STEPS.map((step) => {
            const stepIndex = STATUS_STEPS.indexOf(step);
            const isActive = step === currentStatus;
            const isPast = stepIndex < currentIndex && step !== "Cancelled";
            return (
              <button
                key={step}
                className={`px-4 py-1.5 rounded-full text-[12px] font-medium border transition whitespace-nowrap ${
                  isActive
                    ? STATUS_STYLES[step]
                    : isPast
                    ? "bg-white text-[#BABAC1] border-[#E5E5E5] cursor-default"
                    : step === "Cancelled"
                    ? "bg-white text-[#BA1B1B] border-[#DF9696] hover:bg-red-50"
                    : "bg-white text-[#696A7A] border-[#BABAC1] hover:bg-gray-50"
                }`}
              >
                {step}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}