import { useState } from "react";

export default function StorefrontInfo() {
  const [name, setName] = useState("Ada's Boutique");
  const [description, setDescription] = useState(
    "Quality baby products, kitchenware and cosmetics for every Nigerian home.",
  );
  const storeLink = "cadnamart.com/s/adas-boutique";

  const handleCopy = () => {
    void navigator.clipboard.writeText(storeLink);
  };

  return (
    <div className="space-y-4">
      {/* Store name */}
      <div className="space-y-2">
        <label className="text-[16px] font-medium text-[#4C4D60]">
          Store Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-full mt-2 px-4 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
        />
      </div>

      {/* Store description */}
      <div className="space-y-1.5">
        <label className="text-[16px] font-medium text-[#4C4D60]">
          Store Description
        </label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          rows={5}
          className="w-full mt-2 px-4 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] resize-none"
        />
      </div>

      {/* Save / Cancel */}
      <div className="flex items-center gap-3">
        <button className="flex-1 py-2.5 rounded-lg bg-[#EFEFFD] text-[#9294F4] text-[16px] hover:bg-[#4B4DD6] hover:text-white transition">
          Save Changes
        </button>
        <button className="flex-1 py-2.5 rounded-lg border border-[#BABAC1] text-[16px] text-[#BABAC1] hover:bg-gray-50 transition">
          Cancel
        </button>
      </div>

      {/* Public store link */}
      <div className="space-y-1.5 mt-2">
        <p className="text-[18px] font-semibold text-[#5D5FEF]">
          Public store link
        </p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={storeLink}
            className="flex-1 px-4 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg  focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
