import { useState } from "react";
import { CheckCircle2, ChevronDown, X } from "lucide-react";

const BANKS = [
  "Zenith Bank",
  "Access Bank",
  "GTBank",
  "First Bank",
  "UBA",
  "Opay",
  "Kuda",
];

interface BankDetails {
  bank: string;
  accountNumber: string;
  accountName: string;
}

export default function BankAccount() {
  const [bankDetails, setBankDetails] = useState<BankDetails | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [showBankDropdown, setShowBankDropdown] = useState(false);

  const handleVerify = () => {
    if (!selectedBank || accountNumber.length < 10) return;
    setBankDetails({
      bank: selectedBank,
      accountNumber: "••• ••• " + accountNumber.slice(-4),
      accountName: "ADA OKAFOR",
    });
    setShowModal(false);
    setSelectedBank("");
    setAccountNumber("");
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-4 sm:px-5 sm:py-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
        <p className="text-[16px] sm:text-[18px] font-semibold text-[#5D5FEF]">
          Bank account
        </p>
        {bankDetails && (
          <span className="flex items-center gap-1 text-[12px] sm:text-[14px] text-[#00AB72] font-medium">
            <CheckCircle2 size={13} /> Verified
          </span>
        )}
      </div>

      {bankDetails ? (
        <div className="rounded-xl border border-[#CDCDFA] bg-[#F5F5FF] px-4 py-3 space-y-2">
          {[
            { label: "Bank", value: bankDetails.bank },
            { label: "Account number", value: bankDetails.accountNumber },
            { label: "Account name", value: bankDetails.accountName },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-2 text-[13px]"
            >
              <span className="text-[#9899A3] shrink-0">{row.label}</span>
              <span className="font-medium text-[#4C4D60] text-right truncate">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-[#CDCDFA] bg-[#F5F5FF] px-4 py-4 text-center">
          <p className="text-[14px] sm:text-[16px] text-[#4C4D60]">
            No accounts added
          </p>
        </div>
      )}

      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="w-full py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] font-medium hover:bg-gray-50 transition"
      >
        {bankDetails ? "Update Bank Details" : "Add Bank Account"}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30 p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden">
            {/* Modal header */}
            <div className="flex items-start justify-between px-5 pt-5 pb-1">
              <div>
                <p className="text-[18px] sm:text-[20px] font-semibold text-[#5D5FEF]">
                  {bankDetails
                    ? "Update Bank Account Details"
                    : "Add Bank Account"}
                </p>
                <p className="text-[13px] text-[#4C4D60] mt-1">
                  This is where your funds will be sent.
                </p>
              </div>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="mt-1 shrink-0"
              >
                <X size={16} className="text-[#9899A3]" />
              </button>
            </div>

            <div className="px-5 pb-5 pt-4 space-y-4">
              {/* Bank dropdown */}
              <div className="space-y-1.5">
                <label className="text-[13px] sm:text-[14px] text-[#4C4D60] font-medium">
                  Bank
                </label>
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowBankDropdown((v) => !v);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-[13px] border border-[#E5E7EB] rounded-lg bg-white hover:border-[#5D5FEF] transition"
                  >
                    <span
                      className={
                        selectedBank ? "text-[#4C4D60]" : "text-[#9899A3]"
                      }
                    >
                      {selectedBank || "Select Bank"}
                    </span>
                    <ChevronDown size={14} className="text-[#9899A3]" />
                  </button>
                  {showBankDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-10 overflow-y-auto max-h-44">
                      {BANKS.map((b) => (
                        <button
                          key={b}
                          onClick={() => {
                            setSelectedBank(b);
                            setShowBankDropdown(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 text-[13px] hover:bg-[#FAFAFF] transition ${
                            selectedBank === b
                              ? "text-[#5D5FEF] font-medium"
                              : "text-[#4C4D60]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Account number */}
              <div className="space-y-1.5">
                <label className="text-[13px] sm:text-[14px] text-[#4C4D60] font-medium">
                  Account Number
                </label>
                <input
                  type="text"
                  maxLength={10}
                  value={accountNumber}
                  onChange={(e) => {
                    setAccountNumber(e.target.value.replace(/\D/g, ""));
                  }}
                  placeholder="Input your account number"
                  className="w-full px-3 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleVerify}
                  disabled={!selectedBank || accountNumber.length < 10}
                  className="flex-1 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Verify Account Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
