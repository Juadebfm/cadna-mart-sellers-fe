import { X } from "lucide-react";
import HowToStep1 from "./HowToStep1";
import HowToStep2 from "./HowToStep2";
import HowToStep3 from "./HowToStep3";
import HowToStep4 from "./HowToStep4";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

const STEPS = [
  { label: "Name & upload images" },
  { label: "Prepare CSV" },
  { label: "Upload & process" },
  { label: "Review & publish" },
];

export default function HowToBulkUploadModal({ onClose }: Props) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((s) => Math.min(4, s + 1));
  };
  const handlePrev = () => {
    setCurrentStep((s) => Math.max(1, s - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-3 sm:p-4">
      <div className="bg-white rounded-2xl w-full max-w-[660px] max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-0 shrink-0">
          {/* Title + close */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-[18px] sm:text-[22px] font-bold text-[#5D5FEF]">
                How to bulk upload
              </h2>
              <p className="text-[12px] sm:text-[14px] text-[#4C4D60] mt-0.5">
                Follow these 4 steps to upload up to 500 products at once.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition shrink-0 mt-0.5"
            >
              <X size={16} className="text-[#9899A3]" />
            </button>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between mt-5">
            {STEPS.map((step, i) => {
              const stepNum = i + 1;
              const isDone = stepNum < currentStep;
              const isActive = stepNum === currentStep;

              return (
                <div key={step.label} className="flex items-center flex-1">
                  <button
                    onClick={() => {
                      setCurrentStep(stepNum);
                    }}
                    className="flex items-center gap-2 shrink-0"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold transition shrink-0 ${
                        isDone || isActive
                          ? "bg-[#5D5FEF] text-white"
                          : "bg-[#EFEFFD] text-[#9294F4]"
                      }`}
                    >
                      {stepNum}
                    </div>
                    <span
                      className={`text-[11px] sm:text-[13px] font-medium transition whitespace-nowrap hidden sm:block ${
                        isActive ? "text-[#5D5FEF]" : "text-[#BABAC1]"
                      }`}
                    >
                      {step.label}
                    </span>
                    <span
                      className={`text-[11px] font-medium transition whitespace-nowrap sm:hidden ${
                        isActive ? "text-[#5D5FEF] block" : "hidden"
                      }`}
                    >
                      {step.label}
                    </span>
                  </button>

                  {i < STEPS.length - 1 && (
                    <div
                      className={`h-[2px] flex-1 mx-2 rounded-full ${
                        isDone ? "bg-[#5D5FEF]" : "bg-[#CDCDFA]"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Animated underline track */}
          <div className="relative mt-3 h-[2px] bg-[#F3F4F6]">
            <div
              className="absolute top-0 left-0 h-full bg-[#5D5FEF] rounded-full transition-all duration-300"
              style={{ width: `${String((currentStep / 4) * 100)}%` }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 sm:py-5">
          {currentStep === 1 && <HowToStep1 />}
          {currentStep === 2 && <HowToStep2 />}
          {currentStep === 3 && <HowToStep3 />}
          {currentStep === 4 && <HowToStep4 />}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-4 border-t border-[#F3F4F6] flex items-center justify-between shrink-0">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="px-4 py-2 rounded-lg border border-[#5D5FEF] text-[13px] sm:text-[16px] text-[#5D5FEF] hover:bg-gray-50 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-lg bg-[#5D5FEF] text-white text-[13px] sm:text-[16px] font-medium hover:bg-[#4B4DD6] transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#5D5FEF] text-white text-[13px] sm:text-[16px] font-medium hover:bg-[#4B4DD6] transition"
            >
              Start uploading
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
