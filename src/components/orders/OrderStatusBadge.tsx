import type { OrderStatus } from "@/core/types/Order";

const STATUS_STYLES: Record<OrderStatus, string> = {
  Dispatched: "bg-emerald-50 text-emerald-700",
  Packed: "bg-purple-50 text-purple-700",
  Confirmed: "bg-amber-50 text-amber-700",
  Delivered: "bg-green-100 text-green-700",
};

export default function OrderStatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}
