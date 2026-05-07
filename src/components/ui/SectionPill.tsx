import type { ReactNode } from "react";

export type SectionPillColor = "purple" | "green" | "indigo";

const colorClass: Record<SectionPillColor, string> = {
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  indigo: "bg-indigo-100 text-indigo-600",
};

interface SectionPillProps {
  color?: SectionPillColor;
  className?: string;
  children: ReactNode;
}

export default function SectionPill({
  color = "purple",
  className = "",
  children,
}: SectionPillProps) {
  return (
    <p
      className={`inline-flex h-[26px] min-w-[142px] items-center justify-center px-4 text-[12px] rounded-full font-medium uppercase ${colorClass[color]} ${className}`.trim()}
    >
      {children}
    </p>
  );
}
