import { DownloadIcon } from "lucide-react";

export default function HowToStep2() {
  const COLUMNS = [
    { name: "product_name", desc: "Full name of the product as it will appear on the store", required: true },
    { name: "image_prefix", desc: "The letter(s) matching your image filenames — e.g. A for A1.jpg, A2.jpg", required: true },
    { name: "price", desc: "Product price in Naira — numbers only, no ₦ symbol or commas", required: true },
    { name: "category", desc: "Product category — e.g. Baby Products, Kitchenware, Cosmetics", required: true },
    { name: "description", desc: "Product description shown on the product detail page", required: false },
    { name: "stock", desc: "Starting inventory quantity — defaults to 0 if not provided", required: false },
  ];

  const SAMPLE = [
    { product_name: "Baby Crib Set", image_prefix: "A", price: "24500", category: "Baby Products", stock: "12" },
    { product_name: "Kitchen Utensil Pack", image_prefix: "B", price: "8200", category: "Kitchenware", stock: "30" },
    { product_name: "Baby Monitor Set", image_prefix: "C", price: "52000", category: "Baby Products", stock: "5" },
  ];

  const handleDownload = () => {
    const headers = ["product_name", "image_prefix", "price", "category", "description", "stock"];
    const rows = SAMPLE.map((r) => [r.product_name, r.image_prefix, r.price, r.category, "", r.stock]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cadnamart_bulk_sample.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#4C4D60]">
          Create your product CSV file
        </h3>
        <p className="text-[12px] sm:text-[13px] text-[#696A7A] mt-1 leading-relaxed">
          Create a spreadsheet — one row per product. The{" "}
          <span className="font-medium text-[#5D5FEF]">image_prefix</span> column
          is the link between your images and your product data. It must exactly
          match the letter(s) you used to name your images.
        </p>
      </div>

      {/* Column reference */}
      <div className="space-y-2">
        <p className="text-[10px] font-semibold text-[#9899A3] uppercase tracking-wider">
          Column Reference
        </p>
        <div className="rounded-xl border border-[#E5E7EB] overflow-x-auto">
          <table className="w-full min-w-[420px]">
            <thead>
              <tr className="bg-[#F3F3F8] border-b border-[#E5E7EB]">
                <th className="px-3 sm:px-4 py-2.5 text-left text-[10px] sm:text-[11px] font-semibold text-[#4C4D60] uppercase tracking-wider w-[120px] sm:w-[150px]">
                  Column Name
                </th>
                <th className="px-3 sm:px-4 py-2.5 text-left text-[10px] sm:text-[11px] font-semibold text-[#4C4D60] uppercase tracking-wider">
                  Description
                </th>
                <th className="px-3 sm:px-4 py-2.5 text-left text-[10px] sm:text-[11px] font-semibold text-[#4C4D60] uppercase tracking-wider w-[80px]">
                  Required?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6]">
              {COLUMNS.map((col) => (
                <tr key={col.name}>
                  <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-[12px] font-medium text-[#5D5FEF] whitespace-nowrap align-top">
                    {col.name}
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-[12px] text-[#4C4D60] align-top">
                    {col.desc}
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-2.5 align-top">
                    <span className={`text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full border whitespace-nowrap ${
                      col.required
                        ? "bg-[#EFEFFD] text-[#5D5FEF] border-[#CDCDFA]"
                        : "bg-gray-50 text-[#9899A3] border-[#E5E7EB]"
                    }`}>
                      {col.required ? "Required" : "Optional"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sample CSV */}
      <div className="space-y-2">
        <p className="text-[10px] font-semibold text-[#9899A3] uppercase tracking-wider">
          What a correct CSV looks like
        </p>
        <div className="rounded-xl border border-[#E5E7EB] overflow-x-auto">
          <table className="w-full min-w-[380px]">
            <thead>
              <tr className="bg-[#F3F3F8] border-b border-[#E5E7EB]">
                {["PRODUCT_NAME", "IMAGE_PREFIX", "PRICE", "CATEGORY", "STOCK"].map((h) => (
                  <th key={h} className="px-3 sm:px-4 py-2.5 text-left text-[10px] sm:text-[11px] font-semibold text-[#4C4D60] uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6]">
              {SAMPLE.map((row) => (
                <tr key={row.product_name}>
                  <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-[12px] text-[#4C4D60] whitespace-nowrap">{row.product_name}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-[12px] text-[#4C4D60]">{row.image_prefix}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-[12px] text-[#4C4D60]">{row.price}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-[12px] text-[#4C4D60] whitespace-nowrap">{row.category}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-[12px] text-[#4C4D60]">{row.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Download */}
      <button
        onClick={handleDownload}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#9899A3] text-[13px] sm:text-[14px] text-[#4C4D60] hover:bg-gray-50 transition"
      >
        <DownloadIcon size={15} className="shrink-0" />
        Download sample CSV
      </button>
    </div>
  );
}