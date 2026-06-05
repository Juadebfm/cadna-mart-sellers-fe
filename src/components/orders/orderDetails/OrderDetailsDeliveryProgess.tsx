import type { DeliveryStep } from "@/core/types/Order";

interface Props {
  steps: DeliveryStep[];
  isCancelled?: boolean;
}

export default function OrderDetailDeliveryProgress({
  steps,
  isCancelled = false,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5556D9] mb-6 border-b border-gray-100 pb-3">
        Delivery Progress
      </h2>

      <div className="relative">
        <div className="space-y-0">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            const isCancelledFirst = isCancelled && i === 0;
            const isCancelledRest = isCancelled && i > 0;

            return (
              <div key={i} className="flex gap-4">
                {/* Circle + line */}
                <div className="flex flex-col items-center">
                  {/* Circle */}
                  <div
                    className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center z-10 ${
                      isCancelledFirst
                        ? "bg-[#BA1B1B]"
                        : isCancelledRest
                          ? "bg-[#FEE2E2] border-2 border-[#FECACA]"
                          : step.done
                            ? "bg-[#5D5FEF]"
                            : "bg-[#EFEFFD] border-2 border-[#CDCDFA]"
                    }`}
                  >
                    {/* Icon  */}
                    {isCancelledFirst ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 2l8 8M10 2l-8 8"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke={
                            isCancelledRest
                              ? "#FECACA"
                              : step.done
                                ? "white"
                                : "#CDCDFA"
                          }
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Vertical line */}
                  {!isLast && (
                    <div
                      className={`w-0.5 flex-1 min-h-7 my-1 ${
                        isCancelled
                          ? "bg-[#FECACA]"
                          : step.done
                            ? "bg-[#5D5FEF]"
                            : "bg-[#E5E7EB]"
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p
                        className={`text-[14px] font-semibold ${
                          isCancelledFirst
                            ? "text-[#4C4D60]"
                            : isCancelledRest
                              ? "text-[#BABAC1]"
                              : step.done
                                ? "text-[#4C4D60]"
                                : "text-[#BABAC1]"
                        }`}
                      >
                        {step.label}
                      </p>
                      <p
                        className={`text-[12px] mt-0.5 ${
                          isCancelledFirst
                            ? "text-[#9899A3]"
                            : isCancelledRest
                              ? "text-[#BABAC1]"
                              : step.done
                                ? "text-[#696A7A]"
                                : "text-[#CDCDFA]"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Date + time stacked */}
                    {step.date && (
                      <div className="text-right shrink-0">
                        <p className="text-[11px] text-[#9899A3]">
                          {step.date}
                        </p>
                        <p className="text-[11px] text-[#9899A3]">
                          {step.time}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
