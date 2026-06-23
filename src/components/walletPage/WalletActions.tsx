interface Props {
  kycPending: boolean;
  showWithdrawForm: boolean;
  onToggleWithdraw: () => void;
}

export default function WalletActions({
  kycPending,
  showWithdrawForm,
  onToggleWithdraw,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">

      {/* Withdraw to bank — always shows */}
      <button
        onClick={onToggleWithdraw}
        disabled={kycPending}
        className={`w-full sm:w-auto px-5 py-2.5 rounded-lg text-[16px] font-medium transition ${
          kycPending
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-[#E5E7EB]"
            : showWithdrawForm
            ? "bg-[#4B4DD6] text-white"
            : "bg-[#5D5FEF] text-white hover:bg-[#4B4DD6]"
        }`}
      >
        Withdraw to bank
      </button>

      {/* KYC pending  */}
      {kycPending ? (
        <p className="text-[16px] text-[#8900FF] font-medium">
          Withdrawals are enabled after KYC is verified
        </p>
      ) : (
        /* KYC done  */
        <button className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#BABAC1] text-[16px] text-[#4C4D60] hover:bg-gray-50 transition">
          Generate statement
        </button>
      )}

    </div>
  );
}