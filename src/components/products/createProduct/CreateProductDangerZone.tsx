import { CircleOff, Trash2 } from "lucide-react";

interface Props {
  onCloseProductSales: () => void;
  onDeleteProduct: () => void;
}

export default function CreateProductDangerZone({
  onCloseProductSales,
  onDeleteProduct,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#BA1B1B] mb-5 border-b border-gray-100 pb-3">
        Danger zone
      </h2>

      <div className="space-y-3">
        {/* Close Product Sales */}
        <button
          onClick={onCloseProductSales}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
        >
          <CircleOff className="h-4 w-4 text-[#9899A3] shrink-0" />
          Close Product Sales
        </button>

        {/* Delete Product */}
        <button
          onClick={onDeleteProduct}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-[#FECACA] text-[13px] text-[#BA1B1B] hover:bg-red-50 transition"
        >
          <Trash2 className="h-4 w-4 text-[#BA1B1B] shrink-0" />
          Delete Product
        </button>
      </div>
    </div>
  );
}