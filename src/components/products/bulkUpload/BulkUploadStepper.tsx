import { Check } from "lucide-react";

const STEPS = [
  { label: "Upload images" },
  { label: "Upload CSV" },
  { label: "Processing" },
  { label: "Review & publish" },
];

interface Props {
  currentStep: number;
}

export default function BulkUploadStepper({ currentStep }: Props) {
  return (
    <div className="w-full px-2">
      <div className="flex items-start justify-center gap-0 flex-nowrap mx-auto">
        {STEPS.map((step, i) => {
          const stepNum = i + 1;
          const isDone = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <div key={step.label} className="flex items-start flex-shrink-0">
              <div className="flex flex-col items-center gap-1 w-16 sm:w-24 md:w-28">
                <div
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[11px] sm:text-[14px] font-semibold border-2 transition-all shrink-0 ${
                    isDone || isActive
                      ? "bg-[#5D5FEF] border-[#5D5FEF] text-white"
                      : "bg-[#EFEFFD] border-[#EFEFFD] text-[#9294F4]"
                  }`}
                >
                  {isDone ? <Check size={12} strokeWidth={3} /> : stepNum}
                </div>
                <p
                  className={`text-[9px] sm:text-[11px] md:text-[12px] font-medium text-center leading-tight ${
                    isActive ? "text-[#4C4D60]" : "text-[#BABAC1]"
                  }`}
                >
                  {step.label}
                </p>
              </div>

              {i < STEPS.length - 1 && (
                <div
                  className={`h-[2px] w-3 sm:w-8 md:w-12 lg:w-16 mx-0.5 sm:mx-1 mt-3 sm:mt-4 rounded-full transition-all shrink-0 ${
                    isDone ? "bg-[#5D5FEF]" : "bg-[#CDCDFA]"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}