import { Check } from "lucide-react";

const STEPS = [
  { label: "Upload images" },
  { label: "Upload CSV" },
  { label: "Processing" },
  { label: "Review & publish" },
];

interface Props {
  currentStep: number; // 1-based
}

export default function BulkUploadStepper({ currentStep }: Props) {
  return (
    <div className="flex items-center justify-center gap-0 w-full">
      {STEPS.map((step, i) => {
        const stepNum  = i + 1;
        const isDone   = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={step.label} className="flex items-center">
            {/* Step circle + label */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-semibold border-2 transition-all ${
                  isDone
                    ? "bg-[#5D5FEF] border-[#5D5FEF] text-white"
                    : isActive
                    ? "bg-[#5D5FEF] border-[#5D5FEF] text-white"
                    : "bg-white border-gray-300 text-gray-400"
                }`}
              >
                {isDone ? <Check size={16} strokeWidth={3} /> : stepNum}
              </div>
              <p
                className={`text-[11px] font-medium whitespace-nowrap ${
                  isDone || isActive ? "text-[#5D5FEF]" : "text-gray-400"
                }`}
              >
                {step.label}
              </p>
            </div>

            {/* Connector line */}
            {i < STEPS.length - 1 && (
              <div
                className={`h-[2px] w-16 sm:w-24 mx-2 mb-5 rounded-full transition-all ${
                  isDone ? "bg-[#5D5FEF]" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}