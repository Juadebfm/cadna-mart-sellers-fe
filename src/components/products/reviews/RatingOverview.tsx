import { Star } from "lucide-react";

interface Props {
  average: number;
  total: number;
  breakdown: number[]; // [5star, 4star, 3star, 2star, 1star]
  replied: number;
  unreplied: number;
  flagged: number;
  verifiedBuyers: number;
}

export default function RatingOverview({
  average,
  total,
  breakdown,
  replied,
  unreplied,
  flagged,
  verifiedBuyers,
}: Props) {
  const max = Math.max(...breakdown, 1);

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-4 space-y-4">
      {/* Rating overview label */}
      <p className="text-[11px] text-[#9899A3] uppercase tracking-wider font-medium">
        Rating overview
      </p>

      {/* Average + stars */}
      <div className="flex items-center gap-3">
        <p className="text-[36px] font-bold text-[#5D5FEF] leading-none">
          {average}
        </p>
        <div>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={14}
                className={
                  s <= Math.round(average)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-200 fill-gray-200"
                }
              />
            ))}
          </div>
          <p className="text-[11px] text-[#9899A3] mt-0.5">{total} reviews</p>
        </div>
      </div>

      {/* Breakdown bars */}
      <div className="space-y-1.5">
        {[5, 4, 3, 2, 1].map((star, i) => {
          const value = breakdown[i] ?? 0;
          const percentage = String(Math.round((value / max) * 100));
          return (
            <div key={star} className="flex items-center gap-2">
              <p className="text-[11px] text-[#9899A3] w-3 shrink-0">{star}</p>
              <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#5D5FEF]"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="space-y-1.5 border-t border-[#F3F4F6] pt-3">
        {[
          { label: "Replied", value: replied },
          { label: "Unreplied", value: unreplied },
          { label: "Flagged", value: flagged },
          { label: "Verified buyers", value: verifiedBuyers },
        ].map((row) => (
          <div key={row.label} className="flex justify-between text-[12px]">
            <span className="text-[#9899A3]">{row.label}</span>
            <span className="font-semibold text-[#4C4D60]">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
