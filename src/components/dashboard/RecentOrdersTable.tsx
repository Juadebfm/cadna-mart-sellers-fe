// components/dashboard/RecentOrdersTable.tsx
import { ArrowRight } from "lucide-react";
import StatusBadge from "../ui/StatusBadge";

type StatusType = "Dispatched" | "Packed" | "Confirmed" | "Delivered";

interface Order {
  id: string;
  product: string;
  customer: string;
  amount: string;
  status: StatusType;
  delivery: string;
  date: string;
}

const orders: Order[] = [
  { id: "#CM-0041", product: "Baby Crib Set",        customer: "Funmi A.", amount: "₦24,500", status: "Dispatched", delivery: "Own courier", date: "Apr 11" },
  { id: "#CM-0040", product: "Kitchen Utensil Pack",  customer: "Emeka O.", amount: "₦8,200",  status: "Packed",     delivery: "Partner",     date: "Apr 11" },
  { id: "#CM-0039", product: "Baby Monitor (Set)",    customer: "Tolu B.",  amount: "₦52,000", status: "Confirmed",  delivery: "Cadna Mart",  date: "Apr 10" },
  { id: "#CM-0038", product: "Cosmetic Bundle",       customer: "Ngozi C.", amount: "₦14,750", status: "Delivered",  delivery: "Own courier", date: "Apr 9"  },
];

export default function RecentOrdersTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-100">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-800">Recent orders</h2>
        <button className="flex items-center gap-1 text-xs font-semibold text-[#8900FF] hover:opacity-80 transition-opacity">
          View All <ArrowRight size={13} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-[#F3F3F8]">
              <th className="px-5 py-3">Order ID</th>
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3 hidden md:table-cell">Customer</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 hidden lg:table-cell">Delivery</th>
              <th className="px-5 py-3 hidden lg:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={[
                  "hover:bg-[#FAFAFF] transition-colors",
                  index !== orders.length - 1 ? "border-b border-gray-50" : "",
                ].join(" ")}
              >
                <td className="px-5 py-4 font-semibold text-[#8900FF] text-xs">
                  {order.id}
                </td>
                <td className="px-5 py-4 text-gray-700 text-xs">
                  {order.product}
                </td>
                <td className="px-5 py-4 text-gray-500 text-xs hidden md:table-cell">
                  {order.customer}
                </td>
                <td className="px-5 py-4 font-medium text-gray-800 text-xs">
                  {order.amount}
                </td>
                <td className="px-5 py-4">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-5 py-4 text-gray-500 text-xs hidden lg:table-cell">
                  {order.delivery}
                </td>
                <td className="px-5 py-4 text-gray-400 text-xs hidden lg:table-cell">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}