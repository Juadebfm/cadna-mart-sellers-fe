import { FileText, Clock, CreditCard, RotateCcw } from "lucide-react";
import type { Transaction } from "@/core/types/Wallets";

const TYPE_ICONS: Record<
  Transaction["type"],
  { icon: React.ReactNode; bg: string }
> = {
  credit: {
    icon: <FileText size={16} className="text-[#00AB72]" />,
    bg: "bg-[#E6F8F2]",
  },
  escrow: {
    icon: <Clock size={16} className="text-[#F59E0B]" />,
    bg: "bg-[#FEF3C7]",
  },
  withdrawal: {
    icon: <CreditCard size={16} className="text-[#5D5FEF]" />,
    bg: "bg-[#EFEFFD]",
  },
  refund: {
    icon: <RotateCcw size={16} className="text-[#EF4444]" />,
    bg: "bg-[#FEE2E2]",
  },
};

interface Props {
  transaction: Transaction;
  onClick: () => void;
}

export default function TransactionRow({ transaction, onClick }: Props) {
  const { icon, bg } = TYPE_ICONS[transaction.type];

  const amountColour = transaction.amount.startsWith("+")
    ? "text-[#00AB72]"
    : transaction.amount.startsWith("-")
      ? "text-red-500"
      : "text-[#F59E0B]";

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-[#FAFAFF] transition text-left"
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${bg}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-[#4C4D60] truncate">
          {transaction.title}
        </p>
        <p className="text-[12px] text-[#9899A3]">
          {transaction.date} · {transaction.note}
        </p>
      </div>
      <p className={`text-[13px] font-semibold shrink-0 ${amountColour}`}>
        {transaction.amount}
      </p>
    </button>
  );
}
