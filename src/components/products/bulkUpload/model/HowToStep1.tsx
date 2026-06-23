import { CircleAlert } from "lucide-react";

export default function HowToStep1() {
  const products = [
    {
      label: "PRODUCT A — Baby Crib Set",
      files: ["A1.jpg", "A2.jpg", "A3.jpg"],
    },
    { label: "PRODUCT B — Kitchen Pack", files: ["B1.jpg", "B2.jpg"] },
    { label: "PRODUCT C — Baby Monitor", files: ["C1.jpg"] },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#4C4D60]">
          Organise and name your image files
        </h3>
        <p className="text-[12px] sm:text-[13px] text-[#696A7A] mt-1 leading-relaxed">
          Each product gets a letter prefix. If a product has multiple images,
          add a number after the letter. The backend uses this to group images
          per product automatically.
        </p>
      </div>

      {/* Naming structure */}
      <div className="border border-[#E5E7EB] bg-[#FAFAFF] rounded-xl p-3 sm:p-4 space-y-4">
        <p className="text-[10px] font-semibold text-[#9899A3] uppercase tracking-wider">
          Naming Structure
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#8900FF] flex items-center justify-center text-white text-[15px] sm:text-[18px] font-bold">
              A
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#6100B5] flex items-center justify-center text-white text-[15px] sm:text-[18px] font-bold">
              1
            </div>
          </div>
          <div>
            <p className="text-[11px] sm:text-[13px] text-[#4C4D60]">
              <span className="font-semibold text-[#5D5FEF]">A</span> = Product
              prefix
              {" · "}
              <span className="font-semibold text-[#5D5FEF]">1</span> = Image
              number
            </p>
            <p className="text-[10px] sm:text-[12px] text-[#9899A3]">
              .jpg, .png, or .webp
            </p>
          </div>
        </div>

        {/* Example products */}
        <div className="space-y-2">
          <p className="text-[10px] font-semibold text-[#9899A3] uppercase tracking-wider">
            Example: 3 Products, Multiple Images Each
          </p>

          {/* mobile: full width stacked */}
          <div className="flex flex-col gap-2 sm:hidden">
            {products.map((product) => (
              <div
                key={product.label}
                className="rounded-xl overflow-hidden border border-[#5D5FEF]"
              >
                <div className="bg-[#5D5FEF] px-3 py-2">
                  <p className="text-[11px] font-semibold text-white leading-tight">
                    {product.label}
                  </p>
                </div>
                <div className="bg-white px-3 py-2.5 flex gap-4">
                  {product.files.map((f) => (
                    <p key={f} className="text-[11px] text-[#5D5FEF]">
                      {f}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* desktop: 3 columns */}
          <div className="hidden sm:grid grid-cols-3 gap-2">
            {products.map((product) => (
              <div
                key={product.label}
                className="rounded-xl overflow-hidden border border-[#E5E7EB] flex flex-col"
              >
                <div className="bg-[#5D5FEF] px-3 py-2.5">
                  <p className="text-[11px] font-semibold text-white leading-tight">
                    {product.label}
                  </p>
                </div>
                <div className="bg-white px-3 py-2.5 space-y-1 flex-1">
                  {product.files.map((f) => (
                    <p key={f} className="text-[11px] text-[#5D5FEF]">
                      {f}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More than 26 products */}
      <div className="flex items-start gap-2 bg-[#F8F0FF] border border-[#B054FF] rounded-xl px-3 sm:px-4 py-3">
        <CircleAlert size={16} className="shrink-0 text-[#8900FF] mt-0.5" />
        <div>
          <p className="text-[12px] sm:text-[14px] font-semibold text-[#8900FF]">
            More than 26 products?
          </p>
          <p className="text-[11px] sm:text-[12px] text-[#8900FF] opacity-80 mt-0.5 leading-relaxed">
            After Z, continue with two letters: AA1.jpg, AB1.jpg, AC1.jpg… and
            so on up to ZZ99.jpg.
          </p>
        </div>
      </div>
    </div>
  );
}
