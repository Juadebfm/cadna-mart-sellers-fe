import { Plus, X } from "lucide-react";

interface Specification {
  attribute: string;
  value: string;
}

interface Props {
  specs: Specification[];
  onAddSpec: () => void;
  onRemoveSpec: (index: number) => void;
  onSpecChange: (
    index: number,
    field: "attribute" | "value",
    value: string,
  ) => void;
}

export default function CreateProductSpecifications({
  specs,
  onAddSpec,
  onRemoveSpec,
  onSpecChange,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-5 border-b border-gray-100 pb-3">
        <h2 className="text-[18px] font-semibold text-[#5D5FEF]">
          Specifications
        </h2>
        <p className="text-[12px] text-[#9899A3]">
          Shows as a table on your product page
        </p>
      </div>

      <div className="space-y-3">
        {/* Header — hidden on mobile, shown on sm+ */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-3">
          <p className="text-[12px] font-semibold text-[#9899A3] uppercase tracking-wider">
            Attribute
          </p>
          <p className="text-[12px] font-semibold text-[#9899A3] uppercase tracking-wider">
            Value
          </p>
        </div>

        {/* Rows */}
        {specs.map((spec, i) => (
          <div
            key={i}
            className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-3"
          >
            {/* Attribute */}
            <div>
              <p className="text-[11px] font-semibold text-[#9899A3] uppercase tracking-wider mb-1 sm:hidden">
                Attribute
              </p>
              <input
                type="text"
                placeholder="e.g. Material"
                value={spec.attribute}
                onChange={(e) => {onSpecChange(i, "attribute", e.target.value)}}
                className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
              />
            </div>

            {/* Value + Remove */}
            <div>
              <p className="text-[11px] font-semibold text-[#9899A3] uppercase tracking-wider mb-1 sm:hidden">
                Value
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="e.g. Solid Wood"
                  value={spec.value}
                  onChange={(e) => {onSpecChange(i, "value", e.target.value)}}
                  className="flex-1 px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
                />
                <button
                  onClick={() => {onRemoveSpec(i)}}
                  className="w-7 h-7 shrink-0 flex items-center justify-center rounded-lg hover:bg-red-50 transition"
                >
                  <X className="h-4 w-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add attribute button */}
        <button
          onClick={onAddSpec}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-dashed border-[#CDCDFA] rounded-lg text-[13px] text-[#5D5FEF] hover:bg-[#EFEFFD] transition"
        >
          <Plus className="h-4 w-4" />
          Add attribute
        </button>
      </div>
    </div>
  );
}