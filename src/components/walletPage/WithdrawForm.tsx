import { useState } from "react";

interface Props {
  onSubmit: () => void;
}

export default function WithdrawForm({ onSubmit }: Props) {
  const [amount, setAmount] = useState("");

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5 space-y-4">
      <p className="text-[15px] font-semibold text-[#5D5FEF]">
        Withdraw funds to your account
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Amount */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-medium text-[#4C4D60]">
            Amount (₦) *
          </label>
          <input
            type="number"
            min="0"
            placeholder="₦ 0.00"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="w-full px-4 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
          />
          <p className="text-[11px] text-[#9899A3]">Withdrawal Fee: ₦ 50</p>
        </div>

        {/* Bank info */}
        <div className="flex items-center bg-[#FAFAFF] border border-[#E5E7EB] rounded-lg px-4 py-2.5">
          <p className="text-[12px] text-[#4C4D60]">
            Withdrawal will be paid to:{" "}
            <span className="font-semibold">
              Zenith Bank - 8054715678 - ADA OKAFOR
            </span>
          </p>
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={!amount || Number(amount) <= 0}
        className="px-6 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Withdraw
      </button>
    </div>
  );
}
