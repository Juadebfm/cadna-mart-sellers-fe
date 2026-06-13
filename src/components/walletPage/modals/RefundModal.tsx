import TransactionModalShell from "./TransactionModalShell";
import type { Transaction } from "@/core/types/Wallets";

interface Props {
  transaction: Transaction;
  onClose: () => void;
}

export default function RefundModal({ transaction, onClose }: Props) {
  return (
    <TransactionModalShell title="Refund details" onClose={onClose}>
      <div className="px-5 pb-5 space-y-4">
        {/* Amount card */}
        <div className="bg-[#FEE2E2] rounded-xl px-4 py-3 text-center">
          <p className="text-[22px] font-bold text-red-500">
            {transaction.amount}
          </p>
          <p className="text-[11px] text-red-500 uppercase tracking-wider mt-0.5">
            Refund
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-[13px]">
          {[
            { label: "Reference ID", value: "TXN-8820101", mono: true },
            { label: "Date & time", value: transaction.date },
            { label: "Status", value: "Refunded", colour: "text-red-500" },
            { label: "Order", value: transaction.orderRef },
            { label: "Product", value: "Kitchen Utensil Pack" },
            { label: "Customer", value: "Emeka O." },
            { label: "Dispute reason", value: "Item not as described" },
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
            Dispute resolved in favour of buyer. Amount deducted from wallet.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <button className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition">
            Copy reference
          </button>
          <button className="flex-1 py-2.5 rounded-lg bg-red-500 text-white text-[13px] font-medium hover:bg-red-600 transition">
            View dispute
          </button>
        </div>
      </div>
    </TransactionModalShell>
  );
}
