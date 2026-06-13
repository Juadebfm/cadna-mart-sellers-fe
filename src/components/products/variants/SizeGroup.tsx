import { X } from "lucide-react";
import { PRESET_SIZES } from "./Constants";
import type { VariantGroup } from "./types";

interface Props {
  sizeGroup: VariantGroup;
  newSizeInput: string;
  onSetNewSizeInput: (v: string) => void;
  onTogglePreset: (size: string) => void;
  onAddCustom: () => void;
  onRemoveTag: (size: string) => void;
  onRemoveGroup: () => void;
}

export default function SizeGroup({
  sizeGroup,
  newSizeInput,
  onSetNewSizeInput,
  onTogglePreset,
  onAddCustom,
  onRemoveTag,
  onRemoveGroup,
}: Props) {
  return (
    <div className="rounded-xl border border-[#B4B5F8] px-4 py-4 space-y-4 bg-[#FAFAFF]">
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-medium text-[#4C4D60]">Size</p>
        <button
          onClick={onRemoveGroup}
          className="text-[12px] text-[#9899A3] hover:text-red-500 transition"
        >
          Remove
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESET_SIZES.map((size) => {
          const isSelected = sizeGroup.options.some((o) => o.label === size);
          return (
            <button
              key={size}
              onClick={() => {
                onTogglePreset(size);
              }}
              className={`w-10 h-10 rounded-lg text-[13px] font-medium border transition ${
                isSelected
                  ? "bg-[#EFEFFD] text-[#5D5FEF] border-[#5D5FEF]"
                  : "bg-white text-[#4C4D60] border-[#D0D5DD] hover:border-[#5D5FEF]"
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {sizeGroup.options.map((o) => (
          <div
            key={o.label}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#D0D5DD] text-[#4C4D60] text-[14px] font-medium"
          >
            {o.label}
            <button
              onClick={() => {
                onRemoveTag(o.label);
              }}
            >
              <X className="h-3 w-3 text-[#9899A3]" />
            </button>
          </div>
        ))}
        <input
          type="text"
          placeholder="Add Size e.g. XXXL"
          value={newSizeInput}
          onChange={(e) => {
            onSetNewSizeInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") onAddCustom();
          }}
          className="flex-1 min-w-[140px] px-3 py-1.5 text-[14px] border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#9899A3]"
        />
      </div>
    </div>
  );
}
