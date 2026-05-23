type StatusType = "Dispatched" | "Packed" | "Confirmed" | "Delivered";

interface StatusBadgeProps {
  status: StatusType;
}

const statusStyles: Record<StatusType, string> = {
  Dispatched: "bg-[#EEF2FF] text-[#5D5FEF] border border-[#C7D2FE]",
  Packed:     "bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A]",
  Confirmed:  "bg-[#F0FDF4] text-[#16A34A] border border-[#BBF7D0]",
  Delivered:  "bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB]",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}