import { useState } from "react";
import { ChevronDown } from "lucide-react";

const BUSINESS_TYPES = [
  "Sole Proprietor",
  "Partnership",
  "Limited Liability Company (LLC)",
  "Corporation",
];

export default function BusinessInfo() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Sole Proprietor");
  const [cac, setCac] = useState("RC 0000000");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-4 sm:px-5 sm:py-5 space-y-4">
      <p className="text-[18px] sm:text-[18px] font-semibold text-[#5D5FEF] pb-2 border-b border-[#E5E7EB]">
        Business Information
      </p>

      {/* Business name */}
      <div className="space-y-1.5">
        <label className="text-[14px] text-[#4C4D60]">Business name</label>
        <input
          value={businessName}
          onChange={(e) => {setBusinessName(e.target.value)}}
          placeholder="Business name"
          className="w-full px-3 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
        />
      </div>

      {/* Business type */}
      <div className="space-y-1.5">
        <label className="text-[14px] text-[#4C4D60]">Business type</label>
        <div className="relative">
          <button
            onClick={() => {setShowDropdown((v) => !v)}}
            className="w-full flex items-center justify-between px-3 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg bg-white hover:border-[#5D5FEF] transition focus:outline-none"
          >
            {businessType}
            <ChevronDown size={14} className="text-[#9899A3]" />
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-10 overflow-hidden">
              {BUSINESS_TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setBusinessType(t);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 text-[13px] hover:bg-[#FAFAFF] transition ${
                    businessType === t
                      ? "text-[#5D5FEF] font-medium"
                      : "text-[#4C4D60]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CAC number */}
      <div className="space-y-1.5">
        <label className="text-[14px] text-[#4C4D60]">
          CAC number{" "}
          <span className="text-[#9899A3]">(optional)</span>
        </label>
        <input
          value={cac}
          onChange={(e) => {setCac(e.target.value)}}
          placeholder="RC 0000000"
          className="w-full px-3 py-2.5 text-[14px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
        />
      </div>
    </div>
  );
}