import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DELIVERY_MODELS = ["Own Courier", "Cadna Mart Courier"];

export default function StorefrontFulfillment() {
  const [address, setAddress] = useState("14 Allen Ave, Ikeja, Lagos");
  const [delivery, setDelivery] = useState("Own Courier");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <p className="text-[18px] font-semibold text-[#5D5FEF] mb-3 pb-2 border-b border-[#E5E7EB]">
        Fulfillment & Pickup
      </p>

      <div className="space-y-4">
        {/* Pickup address */}
        <div className="space-y-1.5">
          <label className="text-[16px] font-medium text-[#4C4D60]">
            Pickup address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="w-full mt-2 px-4 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
          />
        </div>

        {/* Delivery model */}
        <div className="space-y-1.5">
          <label className="text-[16px] font-medium text-[#4C4D60]">
            Delivery model
          </label>
          <div className="relative mt-2">
            <button
              onClick={() => {
                setShowDropdown((v) => !v);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg bg-white hover:border-[#5D5FEF] transition focus:outline-none"
            >
              {delivery}
              <ChevronDown size={14} className="text-[#9899A3]" />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-10 overflow-hidden">
                {DELIVERY_MODELS.map((model) => (
                  <button
                    key={model}
                    onClick={() => {
                      setDelivery(model);
                      setShowDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#FAFAFF] transition ${
                      delivery === model
                        ? "text-[#5D5FEF] font-medium"
                        : "text-[#4C4D60]"
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Save / Cancel */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-7">
          <button className="flex-1 py-2.5 rounded-lg bg-[#EFEFFD] text-[#9294F4] hover:text-white text-[16px] hover:bg-[#4B4DD6] transition">
            Save Fulfillment Settings
          </button>
          <button className="flex-1 py-2.5 rounded-lg border border-[#BABAC1] text-[16px] text-[#BABAC1] hover:bg-gray-50 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
