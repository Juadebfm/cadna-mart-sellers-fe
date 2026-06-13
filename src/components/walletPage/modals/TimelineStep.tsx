import { Check, Clock } from "lucide-react";

interface Props {
  label: string;
  date?: string;
  done: boolean;
  active?: boolean;
  isLast?: boolean;
}

export default function TimelineStep({ label, date, done, active, isLast }: Props) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
            done ? "bg-[#5D5FEF]" : active ? "bg-[#5D5FEF]" : "border-2 border-gray-200 bg-white"
          }`}
        >
          {done ? (
            <Check size={12} className="text-white" />
          ) : active ? (
            <Clock size={11} className="text-white" />
          ) : null}
        </div>
        {!isLast && (
          <div className={`w-px flex-1 my-1 ${done ? "bg-[#5D5FEF]" : "bg-gray-200"}`} style={{ minHeight: 20 }} />
        )}
      </div>
      <div className="pb-3">
        <p className={`text-[13px] font-medium ${done || active ? "text-[#4C4D60]" : "text-gray-400"}`}>
          {label}
        </p>
        {date && <p className="text-[11px] text-[#9899A3] mt-0.5">{date}</p>}
        {!date && <p className="text-[11px] text-[#9899A3] mt-0.5">{done ? "Completed" : active ? "After delivery confirmed" : "Awaiting buyer confirmation"}</p>}
      </div>
    </div>
  );
}