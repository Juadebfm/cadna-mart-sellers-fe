export default function HowToStep4() {
  const MOCK_PRODUCTS = [
    { prefix: "A", name: "HTHIUM Portable Power Station", price: "₦420,000", stock: 8, category: "Electronics" },
    { prefix: "B", name: "Redmi A5 Smartphone", price: "₦98,000", stock: 35, category: "Phones & Tablets" },
  ];

  return (
    <div className="space-y-4 sm:space-y-5">
      <div>
        <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#4C4D60]">
          Review and publish your products
        </h3>
        <p className="text-[12px] sm:text-[13px] text-[#696A7A] mt-1 leading-relaxed">
          After processing, you'll see a card for every product the system
          created. Check each one before going live — nothing is published until
          you confirm.
        </p>
      </div>

      {/* Product preview */}
      <div className="border border-[#B4B5F8] bg-[#FAFAFF] rounded-xl p-3 sm:p-4 space-y-3">
        <p className="text-[10px] sm:text-[11px] font-semibold text-[#9899A3] uppercase tracking-wider">
          Example: 3 Products, Multiple Images Each
        </p>

        {/* Mobile: stacked full width */}
        <div className="flex flex-col gap-2 sm:hidden">
          {MOCK_PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="border border-[#E5E7EB] bg-white rounded-xl overflow-hidden flex"
            >
              {/* Left: image placeholder */}
              <div className="w-16 shrink-0 bg-[#FAFAFF] border-r border-[#E5E7EB] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#5D5FEF] flex items-center justify-center text-white text-[12px] font-bold">
                  {product.prefix}
                </div>
              </div>
              {/* Right: info */}
              <div className="flex-1 px-3 py-2.5 space-y-0.5">
                <p className="text-[12px] font-semibold text-[#4C4D60] leading-tight">
                  {product.name}
                </p>
                <p className="text-[12px] font-bold text-[#5D5FEF]">{product.price}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[10px] text-[#9899A3]">{product.category}</p>
                  <span className="text-[#E5E7EB]">·</span>
                  <p className="text-[10px] text-[#9899A3]">Stock: {product.stock}</p>
                </div>
              </div>
            </div>
          ))}

          {/* +98 more mobile */}
          <div className="border border-[#E5E7EB] bg-white rounded-xl px-4 py-3 flex items-center justify-center">
            <p className="text-[13px] font-semibold text-[#4C4D60]">+98 more products</p>
          </div>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden sm:grid grid-cols-3 gap-3">
          {MOCK_PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="border border-[#E5E7EB] bg-white rounded-xl overflow-hidden flex flex-col"
            >
              {/* Image placeholder */}
              <div className="w-full aspect-square bg-[#FAFAFF] border-b border-[#E5E7EB] flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#5D5FEF] flex items-center justify-center text-white text-[14px] font-bold">
                  {product.prefix}
                </div>
              </div>
              {/* Info */}
              <div className="p-3 flex flex-col gap-1 flex-1">
                <p className="text-[12px] font-semibold text-[#4C4D60] leading-tight line-clamp-2">
                  {product.name}
                </p>
                <p className="text-[13px] font-bold text-[#5D5FEF]">{product.price}</p>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-[10px] text-[#9899A3]">{product.category}</p>
                  <p className="text-[10px] text-[#9899A3]">Stock: {product.stock}</p>
                </div>
              </div>
            </div>
          ))}

          {/* +98 more */}
          <div className="border border-[#E5E7EB] bg-[#F6F6FE] rounded-xl flex items-center justify-center">
            <p className="text-[15px] font-semibold text-[#4C4D60] text-center leading-snug">
              +98 more<br />products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}