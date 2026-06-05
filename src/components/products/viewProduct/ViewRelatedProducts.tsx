import { Plus, X } from "lucide-react";

interface RelatedProduct {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface Props {
  products: RelatedProduct[];
  onAdd: () => void;
  onRemove: (id: string) => void;
}

export default function ViewRelatedProducts({
  products,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-4 sm:px-5 sm:py-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4 border-b border-gray-100 pb-3">
        <div className="min-w-0">
          <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#5D5FEF]">
            Recommended Products
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#696A7A] mt-0.5 leading-snug">
            Shown to buyers as "You might also like" on this product's page. Max 4 products.
          </p>
        </div>
        <button
          onClick={onAdd}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] text-[12px] text-[#4C4D60] hover:bg-gray-50 transition shrink-0"
        >
          <Plus className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Add</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      {/* Product rows */}
      <div className="divide-y divide-[#F3F4F6]">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-3 py-2.5">
            {/* Image */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-semibold">
                  {product.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Name + price */}
            <div className="flex-1 min-w-0">
              <p className="text-[13px] sm:text-[14px] font-medium text-[#4C4D60] truncate">
                {product.name}
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#5D5FEF] font-medium mt-0.5">
                {product.price}
              </p>
            </div>

            {/* Remove */}
            <button
              onClick={() => {onRemove(product.id)}}
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#E5E7EB] hover:border-red-200 hover:bg-red-50 transition shrink-0"
            >
              <X className="h-3.5 w-3.5 text-[#9899A3]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}