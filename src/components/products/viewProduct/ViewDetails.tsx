interface Props {
  productName: string;
  price: string;
  sku: string;
  category: string;
  stock: number;
  totalSold: number;
  listedDate: string;
  status: string;
}

const STATUS_STYLES: Record<string, string> = {
  Live: "bg-[#E6F8F2] text-[#00AB72] border border-[#00AB72]/20",
  Draft: "bg-gray-100 text-gray-500 border border-gray-200",
  Deactivated: "bg-orange-50 text-orange-500 border border-orange-200",
};

const STATUS_DOT: Record<string, string> = {
  Live: "bg-[#00AB72]",
  Draft: "bg-gray-400",
  Deactivated: "bg-orange-400",
};

export default function ViewDetails({
  productName,
  price,
  sku,
  category,
  stock,
  totalSold,
  listedDate,
  status,
}: Props) {
  const rows = [
    { label: "SKU", value: sku },
    { label: "Category", value: category },
    { label: "Stock", value: `${stock.toString()} units` },
    { label: "Total sold", value: `${totalSold.toString()} units` },
    { label: "Listed", value: listedDate },
  ];

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-6 py-6">
      {/* Status badge */}
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold mb-4 ${STATUS_STYLES[status] ?? "bg-gray-100 text-gray-500"}`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[status] ?? "bg-gray-400"}`}
        />
        {status}
      </span>

      {/* Product name */}
      <h1 className="text-[22px] font-semibold text-[#4C4D60] leading-snug mb-1">
        {productName}
      </h1>

      {/* Price */}
      <p className="text-[26px] font-bold text-[#5D5FEF] mb-5">{price}</p>

      {/* Details table  */}
      <div className="divide-y divide-[#E5E7EB]">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between py-3.5">
            <p className="text-[15px] text-[#9899A3]">{label}</p>
            <p className="text-[15px] font-semibold text-[#4C4D60]">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
