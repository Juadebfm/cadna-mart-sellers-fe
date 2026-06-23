interface Props {
  name: string;
  sku: string;
  price: string;
  image?: string;
}

export default function ReviewProductCard({ name, sku, price, image }: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
      {/* Product image */}
      <div className="w-full aspect-square bg-[#F3F3F8] flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#EFEFFD] flex items-center justify-center">
            <span className="text-[#5D5FEF] text-2xl font-bold">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-4 py-3 space-y-1">
        <p className="text-[13px] font-semibold text-[#4C4D60] leading-snug">{name}</p>
        <p className="text-[11px] text-[#9899A3]">SKU: {sku}</p>
        <p className="text-[14px] font-bold text-[#5D5FEF]">{price}</p>
        <p className="text-[11px] text-[#9899A3]">/ unit</p>
      </div>
    </div>
  );
}