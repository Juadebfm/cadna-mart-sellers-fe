interface Props {
  kycPending: boolean;
  showWithdrawForm: boolean;
  onToggleWithdraw: () => void;
}

export default function WalletActions({ kycPending, showWithdrawForm, onToggleWithdraw }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={onToggleWithdraw}
        disabled={kycPending}
        className={`px-5 py-2.5 rounded-lg text-[13px] font-medium transition ${
          kycPending
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : showWithdrawForm
            ? "bg-[#4B4DD6] text-white"
            : "bg-[#5D5FEF] text-white hover:bg-[#4B4DD6]"
        }`}
      >
        Withdraw to bank
      </button>
      <button className="px-5 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition">
        Generate statement
      </button>

      {kycPending && (
        <p className="text-[12px] text-[#5D5FEF] font-medium">
          Withdrawals are enabled after KYC is verified
        </p>
      )}
    </div>
  );
}