import { Download } from "lucide-react";
import TransactionModalShell from "./TransactionModalShell";
import TimelineStep from "./TimelineStep";
import type { Transaction } from "@/core/types/Wallets";

interface Props {
  transaction: Transaction;
  onClose: () => void;
}

export default function WithdrawalModal({ transaction, onClose }: Props) {
  const isCompleted = transaction.status === "Completed";

  return (
    <TransactionModalShell title="Withdrawal details" onClose={onClose}>
      <div className="px-5 pb-5 space-y-4">
        {/* Amount card */}
        <div className="bg-[#EFEFFD] rounded-xl px-4 py-3 text-center">
          <p className="text-[22px] font-bold text-[#5D5FEF]">
            {transaction.amount}
          </p>
          <p className="text-[11px] text-[#5D5FEF] uppercase tracking-wider mt-0.5">
            Withdrawal
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-[13px]">
          {[
            { label: "Reference ID", value: "TXN-8820887", mono: true },
            { label: "Date & time", value: transaction.date },
            {
              label: "Status",
              value: transaction.status,
              colour: "text-[#00AB72]",
            },
            { label: "Amount", value: transaction.amount },
            { label: "Bank account", value: "Zenith Bank ••5678" },
          ].map((row) => (
            <div key={row.label} className="flex justify-between">
              <span className="text-[#9899A3]">{row.label}</span>
              <span
                className={`font-medium ${row.colour ?? "text-[#4C4D60]"} ${row.mono ? "font-mono text-[12px]" : ""}`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Withdrawal timeline */}
        <div>
          <p className="text-[13px] font-semibold text-[#5D5FEF] mb-2">
            Withdrawal Timeline
          </p>
          <TimelineStep
            label="Request submitted"
            {...(transaction.date && { date: transaction.date })}
            done={true}
            active={false}
            isLast={false}
          />
          <TimelineStep
            label="Processing completed"
            {...(isCompleted && { date: "Completed" })}
            done={isCompleted}
            active={!isCompleted}
            isLast={true}
          />
          <TimelineStep
            label="Credited to bank"
            {...(isCompleted && { date: "May 25, 2026 · 09:00 AM" })}
            done={isCompleted}
            isLast
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <button className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition">
            Copy reference
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition">
            <Download size={13} />
            Download receipt
          </button>
        </div>
      </div>
    </TransactionModalShell>
  );
}
