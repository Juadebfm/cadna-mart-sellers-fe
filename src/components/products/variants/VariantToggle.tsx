interface Props {
  hasVariants: boolean;
  onToggle: () => void;
}

export default function VariantToggle({ hasVariants, onToggle }: Props) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onToggle}
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
  );
}