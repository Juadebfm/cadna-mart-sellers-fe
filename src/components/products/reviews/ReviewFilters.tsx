interface Props {
  active: string;
  onChange: (f: string) => void;
}

const FILTERS = ["All", "★5", "★4", "★3", "★2", "★1", "Unreplied", "Flagged"];

export default function ReviewFilters({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => {
            onChange(f);
          }}
          className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition ${
            active === f
              ? "bg-[#5D5FEF] text-white border-[#5D5FEF]"
              : "bg-white text-[#4C4D60] border-[#E5E7EB] hover:border-[#5D5FEF]"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
