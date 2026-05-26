import { Package2 } from "lucide-react";
import type { Order } from "@/core/types/Order";
import OrderStatusBadge from "./OrderStatusBadge";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

interface Props {
  orders: Order[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function OrdersTable({
  orders,
  currentPage,
  onPageChange,
}: Props) {
  const hasNoOrdersAtAll = orders.length === 0;
  const totalPages = Math.max(1, Math.ceil(orders.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = orders.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  );

  const start = orders.length === 0 ? 0 : (safePage - 1) * ITEMS_PER_PAGE + 1;
  const end = Math.min(safePage * ITEMS_PER_PAGE, orders.length);

  const pageNumbers = (): (number | "...")[] => {
    const nums: (number | "...")[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - safePage) <= 1)
        nums.push(i);
      else if (nums[nums.length - 1] !== "...") nums.push("...");
    }
    return nums;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
              <th className="px-5 py-4">Order ID</th>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4 hidden md:table-cell">Customer</th>
              <th className="px-5 py-4">Amount</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 hidden lg:table-cell">Delivery</th>
              <th className="px-5 py-4 hidden lg:table-cell">Date</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {/* Empty — no orders at all */}
            {hasNoOrdersAtAll ? (
              <tr>
                <td colSpan={8} className="px-5 py-16 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                    <Package2 size={28} stroke="#9CA3AF" strokeWidth={1.5} />

                    </div>
                    <p className="text-[14px] font-medium text-gray-500">
                      No orders to display!
                    </p>
                    <Link
                      to="/seller"
                      className="px-5 py-2 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-semibold hover:bg-[#4446D0] transition"
                    >
                      Go to dashboard
                    </Link>
                  </div>
                </td>
              </tr>
            ) : paginated.length === 0 ? (
              /* Filters returned nothing */
              <tr>
                <td
                  colSpan={8}
                  className="px-5 py-12 text-center text-gray-400 text-sm"
                >
                  No orders match your filters.
                </td>
              </tr>
            ) : (
              paginated.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-5 py-4 font-semibold text-purple-600 whitespace-nowrap">
                    {order.id}
                  </td>
                  <td className="px-5 py-4 text-gray-800">{order.product}</td>
                  <td className="px-5 py-4 text-gray-500 hidden md:table-cell">
                    {order.customer}
                  </td>
                  <td className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {order.amount}
                  </td>
                  <td className="px-5 py-4">
                    <OrderStatusBadge status={order.status} />
                  </td>
                  <td className="px-5 py-4 text-gray-500 hidden lg:table-cell">
                    {order.delivery}
                  </td>
                  <td className="px-5 py-4 text-gray-400 hidden lg:table-cell">
                    {order.date}
                  </td>
                  <td className="px-5 py-4">
                    <button className="text-gray-300 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="12" cy="19" r="1.5" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination — hide when truly empty */}
      {!hasNoOrdersAtAll && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            Showing {start}–{end} of {orders.length} orders
          </p>
          <div className="flex items-center justify-center gap-1 flex-wrap">
            <button
              onClick={() => {
                onPageChange(Math.max(1, safePage - 1));
              }}
              disabled={safePage === 1}
              className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {pageNumbers().map((p, i) =>
              p === "..." ? (
                <span
                  key={`ellipsis-${i.toString()}`}
                  className="px-1 text-xs text-gray-400"
                >
                  …
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => {
                    onPageChange(p);
                  }}
                  className={`w-8 h-8 text-xs rounded-lg font-medium transition-colors ${
                    safePage === p
                      ? "bg-purple-600 text-white"
                      : "border border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {p}
                </button>
              ),
            )}
            <button
              onClick={() => {
                onPageChange(Math.min(totalPages, safePage + 1));
              }}
              disabled={safePage === totalPages}
              className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
