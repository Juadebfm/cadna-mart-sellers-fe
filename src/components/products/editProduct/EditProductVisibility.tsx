interface Props {
  status: string;
  onStatusChange: (v: string) => void;
}

const STATUS_OPTIONS = [
  { value: "Live", label: "Live — visible to buyers" },
  { value: "Draft", label: "Draft — hidden to buyers" },
  { value: "Deactivated", label: "Deactivated" },
];

export default function EditProductVisibility({
  status,
  onStatusChange,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5D5FEF] mb-5 border-b border-gray-100 pb-3">
        Visibility
      </h2>

      <div>
        <label className="text-[14px] text-[#4C4D60] mb-1 block">Status</label>
        <select
          value={status}
          onChange={(e) => {
            onStatusChange(e.target.value);
          }}
          className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60] bg-white"
        >
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
