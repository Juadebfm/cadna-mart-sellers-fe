interface Props {
  hasVariants: boolean;
  onToggle: (v: boolean) => void;
}

export default function CreateProductVariants({
  hasVariants,
  onToggle,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <div className="flex items-center justify-between mb-5 border-b border-gray-100 pb-3">
        <h2 className="text-[18px] font-semibold text-[#5D5FEF]">Variants</h2>
        <p className="text-[12px] text-[#9899A3]">
          Size, colour, or other options
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Toggle */}
        <button
          onClick={() => {onToggle(!hasVariants)}}
          className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
            hasVariants ? "bg-[#5D5FEF]" : "bg-gray-200"
          }`}
        >
          <span
            className={`absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full shadow transition-transform duration-200 ${
              hasVariants ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <p className="text-[14px] text-[#465776]">
          This product has multiple variants (size, colour, etc.)
        </p>
      </div>
    </div>
  );
}