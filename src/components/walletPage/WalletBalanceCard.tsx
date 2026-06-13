import { AlertTriangle } from "lucide-react";

interface Props {
  balance: number;
  kycPending: boolean;
}

export default function WalletBalanceCard({ balance, kycPending }: Props) {
  return (
    <div
      className="rounded-xl px-6 py-5 flex items-center justify-between gap-4 flex-wrap"
      style={{
        background: "linear-gradient(135deg, #1A1830 0%, #2A2750 50%, #3D3875 100%)",
      }}
    >
      <div>
        <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">
          Available Balance
        </p>
        <p className="text-[28px] font-bold text-white">
          ₦{balance.toLocaleString()}
        </p>
        <p className="text-[12px] text-gray-400 mt-1">Last updated: Apr 12, 2026</p>
      </div>

      {kycPending ? (
        <div className="flex items-start gap-2 bg-white/10 border border-[#CDCDFA4D] rounded-lg px-4 py-3 max-w-xs">
          <AlertTriangle size={16} className="text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-[12px] font-semibold text-yellow-400">KYC pending</p>
            <p className="text-[11px] text-gray-300 mt-0.5">
              Funds are held in escrow until identity verification is complete.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white/10 rounded-lg px-4 py-3 max-w-xs border border-[#CDCDFA4D]">
          <p className="text-[11px] text-gray-300">
            <span className="font-semibold text-white">NB:</span> Withdrawals might take up to 24-72 hours to reflect in your bank account/mobile money.
          </p>
        </div>
      )}
    </div>
  );
}