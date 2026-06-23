import { useEffect, useState } from "react";
import { CheckCircle, Circle, Loader } from "lucide-react";

interface Props {
  onDone: () => void;
}

const STEPS = [
  "Uploading images to cloud storage",
  "Reading and validating CSV data",
  "Matching images to products",
  "Generating product thumbnails",
  "Finalising product thumbnails",
];

export default function Step3Processing({ onDone }: Props) {
  const [progress, setProgress] = useState(0); // index of current step

  useEffect(() => {
    if (progress >= STEPS.length) {
      const t = setTimeout(() => {
        onDone();
      }, 800);
      return () => {
        clearTimeout(t);
      };
    }
    const t = setTimeout(() => {
      setProgress((p) => p + 1);
    }, 1500);
    return () => {
      clearTimeout(t);
    };
  }, [progress, onDone]);

  return (
    <div className="flex flex-col items-center py-10 space-y-8">
      <div className="text-center">
        <p className="text-[18px] font-semibold text-[#5D5FEF]">
          Processing your upload
        </p>
        <p className="text-[14px] text-[#4C4D60] mt-1">
          Please keep this window open. This usually takes under a minute.
        </p>
      </div>

      {/* Steps */}
      <div className="w-full max-w-md space-y-4">
        {STEPS.map((step, i) => {
          const isDone = i < progress;
          const isActive = i === progress;

          return (
            <div key={step} className="flex items-center gap-3">
              {isDone ? (
                <CheckCircle size={20} className="text-[#5D5FEF] shrink-0" />
              ) : isActive ? (
                <Loader
                  size={20}
                  className="text-[#5D5FEF] shrink-0 animate-spin"
                />
              ) : (
                <Circle size={20} className="text-gray-300 shrink-0" />
              )}
              <div>
                <p
                  className={`text-[14px] font-medium ${isDone || isActive ? "text-[#4C4D60]" : "text-gray-400"}`}
                >
                  {step}
                </p>
                <p className="text-[12px] text-[#9899A3]">
                  {isDone ? "Done" : isActive ? "In progress…" : "Waiting…"}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Spinner */}
      <Loader size={28} className="text-[#5D5FEF] animate-spin" />
    </div>
  );
}
