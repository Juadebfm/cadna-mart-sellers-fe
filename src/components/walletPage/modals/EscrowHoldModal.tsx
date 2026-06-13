import TransactionModalShell from "./TransactionModalShell";
import TimelineStep from "./TimelineStep";
import type { Transaction } from "@/core/types/Wallets";

interface Props {
  transaction: Transaction;
  onClose: () => void;
}

export default function EscrowHoldModal({ transaction, onClose }: Props) {
  return (
    <TransactionModalShell title="Escrow hold details" onClose={onClose}>
      <div className="px-5 pb-5 space-y-4">
        {/* Amount card */}
        <div className="bg-[#FEF3C7] rounded-xl px-4 py-3 text-center">
          <p className="text-[22px] font-bold text-[#92400E]">
            {transaction.amount}
          </p>
          <p className="text-[11px] text-[#92400E] uppercase tracking-wider mt-0.5">
            Escrow Hold
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-[13px]">
          {[
            { label: "Reference ID", value: "TXN-8820720", mono: true },
            { label: "Date & time", value: transaction.date },
            { label: "Status", value: "Pending", colour: "text-[#F59E0B]" },
            { label: "Order", value: transaction.orderRef },
            {
              label: "Product",
              value: transaction.title.split("—")[1]?.trim() ?? "",
            },
            { label: "Customer", value: "Tolu B." },
            { label: "Delivery method", value: "Cadna Mart" },
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

        {/* Info note */}
        <div className="bg-[#FAFAFF] rounded-lg px-3 py-2.5">
          <p className="text-[12px] text-[#9899A3]">
            Funds held in escrow until buyer confirms delivery.
          </p>
        </div>

        {/* Payout timeline */}
        <div>
          <p className="text-[13px] font-semibold text-[#5D5FEF] mb-2">
            Payout Timeline
          </p>
          <TimelineStep label="Payment received" date={transaction.date} done />
          <TimelineStep label="Held in escrow" active done={false} />
          <TimelineStep label="Added to wallet" isLast done={false} />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <button className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition">
            Copy reference
          </button>
          <button className="flex-1 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition">
            View order
          </button>
        </div>
      </div>
    </TransactionModalShell>
  );
}
