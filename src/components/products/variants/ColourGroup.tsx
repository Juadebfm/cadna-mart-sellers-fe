import { X } from "lucide-react";
import { PRESET_COLOURS } from "./Constants";
import type { ColourOption, VariantGroup } from "./types";

interface Props {
  colourGroup: VariantGroup;
  onToggleColour: (colour: ColourOption) => void;
  onRemoveTag: (label: string) => void;
  onRemoveGroup: () => void;
}

export default function ColourGroup({
  colourGroup,
  onToggleColour,
  onRemoveTag,
  onRemoveGroup,
}: Props) {
  return (
    <div className="rounded-xl border border-[#B4B5F8] px-4 py-4 space-y-4 bg-[#FAFAFF]">
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-medium text-[#4C4D60]">Colour</p>
        <button
          onClick={onRemoveGroup}
          className="text-[12px] text-[#9899A3] hover:text-red-500 transition"
        >
          Remove
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESET_COLOURS.map((colour) => {
          const isSelected = colourGroup.colours?.some(
            (c) => c.label === colour.label,
          );
          return (
            <button
              key={colour.label}
              onClick={() => {
                onToggleColour(colour);
              }}
              title={colour.label}
              className={`w-8 h-8 rounded-full border-2 transition ${
                isSelected
                  ? "border-[#5D5FEF] scale-110 shadow-md"
                  : "border-transparent hover:border-gray-300"
              }`}
              style={{ backgroundColor: colour.hex }}
            />
          );
        })}
      </div>

      {(colourGroup.colours?.length ?? 0) > 0 && (
        <div className="flex flex-wrap gap-2">
          {colourGroup.colours?.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D0D5DD] text-[#4C4D60] text-[13px] font-medium"
            >
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: c.hex }}
              />
              {c.label}
              <button
                onClick={() => {
                  onRemoveTag(c.label);
                }}
              >
                <X className="h-3 w-3 text-[#9899A3]" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
