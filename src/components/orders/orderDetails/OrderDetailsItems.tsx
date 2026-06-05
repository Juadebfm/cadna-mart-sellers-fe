import type { OrderDetailItem } from "@/core/types/Order";

interface Props {
  items: OrderDetailItem[];
  subtotal: string;
  delivery: string;
  discount: string;
  totalPaid: string;
}

function ProductImage({ name }: { name: string }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 text-gray-400 text-base font-semibold overflow-hidden">
      {name.charAt(0)}
    </div>
  );
}

export default function OrderDetailItems({
  items,
  subtotal,
  delivery,
  discount,
  totalPaid,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5556D9] mb-4 border-b border-gray-100 pb-3">
        Order Items
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <ProductImage name={item.name} />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-medium text-[#4C4D60] truncate">
                {item.name}
              </p>
              <p className="text-[12px] text-[#4C4D60]">Qty: {item.qty}</p>
            </div>
            <p className="text-[14px] font-semibold text-[#8900FF] whitespace-nowrap">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      {/* Subtotals */}
      <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
        {[
          {
            label: `Subtotal (${String(items.length)} item${items.length > 1 ? "s" : ""})`,
            value: subtotal,
          },
          { label: "Delivery", value: delivery },
          { label: "Discount", value: discount },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <p className="text-[12px] text-gray-400">{label}</p>
            <p className="text-[12px] text-gray-600">{value}</p>
          </div>
        ))}
      </div>

      {/* Total Paid */}
      <div className="flex items-center justify-between mt-3 px-5 py-3 bg-[#F2F2FC] -mx-5 -mb-5">
        <p className="text-[16px] font-semibold text-[#4C4D60]">Total Paid</p>
        <p className="text-[16px] font-bold text-[#8900FF]">{totalPaid}</p>
      </div>
    </div>
  );
}
