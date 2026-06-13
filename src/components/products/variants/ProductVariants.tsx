import { Plus } from "lucide-react";
import { useVariants } from "./UseVariants";
import VariantToggle from "./VariantToggle";
import SizeGroup from "./SizeGroup";
import ColourGroup from "./ColourGroup";
import VariantStockTable from "./VariantStockTable";
import type { VariantGroup } from "./types";

interface Props {
  hasVariants: boolean;
  onToggle: (v: boolean) => void;
  initialGroups?: VariantGroup[];
  readOnly?: boolean;
}

export default function ProductVariants({
  hasVariants,
  onToggle,
  initialGroups = [],
  readOnly = false,
}: Props) {
  const {
    sizeGroup,
    colourGroup,
    hasSizeGroup,
    hasColourGroup,
    newSizeInput,
    setNewSizeInput,
    tableRows,
    handleAddSize,
    handleTogglePresetSize,
    handleAddCustomSize,
    handleRemoveSizeTag,
    handleAddColour,
    handleToggleColour,
    handleRemoveColourTag,
    handleRemoveGroup,
    handleStockChange,
    handlePriceChange,
  } = useVariants(initialGroups);

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-5 border-b border-gray-100 pb-3">
        <h2 className="text-[18px] font-semibold text-[#5D5FEF]">Variants</h2>
        <p className="text-[12px] text-[#9899A3]">
          Size, colour, or other options
        </p>
      </div>

      <VariantToggle
        hasVariants={hasVariants}
        onToggle={() => {
          onToggle(!hasVariants);
        }}
      />

      {hasVariants && (
        <div className="mt-5 space-y-4">
          {!readOnly && (
            <div className="flex flex-wrap gap-2">
              {!hasSizeGroup && (
                <button
                  onClick={handleAddSize}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#BABAC1] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Size
                </button>
              )}
              {!hasColourGroup && (
                <button
                  onClick={handleAddColour}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#BABAC1] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
                >
                  <div className="w-3.5 h-3.5 rounded-full border border-gray-400" />{" "}
                  Colour
                </button>
              )}
            </div>
          )}

          {sizeGroup && (
            <SizeGroup
              sizeGroup={sizeGroup}
              newSizeInput={newSizeInput}
              onSetNewSizeInput={setNewSizeInput}
              onTogglePreset={handleTogglePresetSize}
              onAddCustom={handleAddCustomSize}
              onRemoveTag={handleRemoveSizeTag}
              onRemoveGroup={() => {
                handleRemoveGroup("Size");
              }}
            />
          )}

          {colourGroup && (
            <ColourGroup
              colourGroup={colourGroup}
              onToggleColour={handleToggleColour}
              onRemoveTag={handleRemoveColourTag}
              onRemoveGroup={() => {
                handleRemoveGroup("Colour");
              }}
            />
          )}

          <VariantStockTable
            tableRows={tableRows}
            hasColourGroup={hasColourGroup}
            onStockChange={handleStockChange}
            onPriceChange={handlePriceChange}
          />
        </div>
      )}
    </div>
  );
}
