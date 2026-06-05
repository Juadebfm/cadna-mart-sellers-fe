interface Props {
  productName: string;
  status: string;
  sku: string;
  listedDate: string;
  lastEdited: string;
}

const STATUS_STYLES: Record<string, string> = {
  Live: "bg-[#E6F8F2] text-[#00AB72]",
  Draft: "bg-gray-100 text-gray-500",
  Deactivated: "bg-orange-50 text-orange-500",
};

export default function EditProductInfo({
  productName,
  status,
  sku,
  listedDate,
  lastEdited,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div>
        <h1 className="text-[22px] font-semibold text-[#4C4D60]">
          {productName}
        </h1>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_STYLES[status] ?? "bg-gray-100 text-gray-500"}`}
          >
            {status}
          </span>
          <span className="text-[12px] text-[#9899A3]">SKU: {sku}</span>
          <span className="text-[12px] text-[#9899A3]">Listed {listedDate}</span>
          <span className="text-[12px] text-[#9899A3]">Last edited {lastEdited}</span>
        </div>
      </div>
    </div>
  );
}