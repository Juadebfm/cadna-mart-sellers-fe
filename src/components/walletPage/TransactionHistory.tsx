import { FileClock } from "lucide-react";
import type { Transaction } from "@/core/types/Wallets";
import TransactionRow from "./TransactionRow";

interface Props {
  transactions: Transaction[];
  onSelect: (t: Transaction) => void;
}

export default function TransactionHistory({ transactions, onSelect }: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB]">
        <p className="text-[18px] font-semibold text-[#5D5FEF] px-5 pt-4 pb-2 border-b border-[#E5E7EB]">
       Transaction History
      </p>


      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-5 py-12 gap-3">
          <div className="w-12 h-12 rounded-full bg-[#F1F1FD] flex items-center justify-center">
            <FileClock size={22} className="text-[#5D5FEF]" />
          </div>
          <p className="text-[16px] text-[#4C4D60]">No transactions to display!</p>
        </div>
      ) : (
        <div className="divide-y divide-[#F3F4F6]">
          {transactions.map((t) => (
            <TransactionRow key={t.id} transaction={t} onClick={() => {onSelect(t)}} />
          ))}
        </div>
      )}
    </div>
  );
}