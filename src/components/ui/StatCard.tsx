import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  subtextClassName?: string; 
  icon: ReactNode;
  iconBg: string;
  showDivider?: boolean;
}

export default function StatCard({
  label,
  value,
  subtext,
  subtextClassName = "text-gray-400",
  icon,
  iconBg,
  showDivider = false,
}: StatCardProps) {
  return (
    <div className="flex items-center gap-4 relative bg-white border border-gray-100 rounded-xl px-4 py-4">

      {/* Right divider — only on lg */}
      {showDivider && (
        <div className="hidden lg:block absolute right-0 top-2 h-[calc(100%-16px)] w-px bg-gray-100" />
      )}

      {/* Icon circle */}
      <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${iconBg}`}>
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
          {label}
        </p>
        <p className="text-xl font-bold text-gray-800 leading-tight">
          {value}
        </p>
        {subtext && (
          <p className={`text-[11px] font-medium ${subtextClassName}`}>
            {subtext}
          </p>
        )}
      </div>

    </div>
  );
}