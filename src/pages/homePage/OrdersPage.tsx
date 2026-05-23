import { useState } from "react";

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

const ALL_ORDERS: Order[] = [
  {
    id: "#CM-0041",
    product: "Baby Crib Set",
    customer: "Funmi A.",
    amount: "₦24,500",
    status: "Dispatched",
    delivery: "Own courier",
    date: "Apr 11",
  },
  {
    id: "#CM-0040",
    product: "Kitchen Utensil Pack",
    customer: "Emeka O.",
    amount: "₦8,200",
    status: "Packed",
    delivery: "Partner",
    date: "Apr 11",
  },
  {
    id: "#CM-0039",
    product: "Baby Monitor (Set)",
    customer: "Tolu B.",
    amount: "₦52,000",
    status: "Confirmed",
    delivery: "Cadna Mart",
    date: "Apr 10",
  },
  {
    id: "#CM-0038",
    product: "Cosmetic Bundle",
    customer: "Ngozi C.",
    amount: "₦14,750",
    status: "Delivered",
    delivery: "Own courier",
    date: "Apr 9",
  },
  {
    id: "#CM-0037",
    product: "Cosmetic Bundle",
    customer: "Ngozi C.",
    amount: "₦14,750",
    status: "Dispatched",
    delivery: "Own courier",
    date: "Apr 9",
  },
  {
    id: "#CM-0036",
    product: "Office Chair Pro",
    customer: "Bello K.",
    amount: "₦38,000",
    status: "Dispatched",
    delivery: "Partner",
    date: "Apr 9",
  },
  {
    id: "#CM-0035",
    product: "Wireless Earbuds",
    customer: "Amara T.",
    amount: "₦21,500",
    status: "Packed",
    delivery: "Own courier",
    date: "Apr 8",
  },
  {
    id: "#CM-0034",
    product: "Skincare Set",
    customer: "Yemi A.",
    amount: "₦9,800",
    status: "Confirmed",
    delivery: "Cadna Mart",
    date: "Apr 8",
  },
  {
    id: "#CM-0033",
    product: "Yoga Mat Bundle",
    customer: "Kemi F.",
    amount: "₦12,400",
    status: "Delivered",
    delivery: "Own courier",
    date: "Apr 7",
  },
  {
    id: "#CM-0032",
    product: "Blender (Set)",
    customer: "Chidi M.",
    amount: "₦17,600",
    status: "Dispatched",
    delivery: "Partner",
    date: "Apr 7",
  },
];

const ITEMS_PER_PAGE = 5;
const STATUS_OPTIONS = [
  "All Statuses",
  "Dispatched",
  "Packed",
  "Confirmed",
  "Delivered",
];

const STATUS_STYLES: Record<StatusType, string> = {
  Dispatched: "bg-emerald-50 text-emerald-700",
  Packed: "bg-purple-50 text-purple-700",
  Confirmed: "bg-amber-50 text-amber-700",
  Delivered: "bg-green-100 text-green-700",
};

function StatusBadge({ status }: { status: StatusType }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}

export default function OrdersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [search, setSearch] = useState("");

  const filtered = ALL_ORDERS.filter((order) => {
    const matchesStatus =
      statusFilter === "All Statuses" || order.status === statusFilter;
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  );

  const handleSearch = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };
  const handleStatus = (val: string) => {
    setStatusFilter(val);
    setCurrentPage(1);
  };

  const pageNumbers = (): (number | "...")[] => {
    const nums: (number | "...")[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - safePage) <= 1) {
        nums.push(i);
      } else if (nums[nums.length - 1] !== "...") {
        nums.push("...");
      }
    }
    return nums;
  };

  const start = filtered.length === 0 ? 0 : (safePage - 1) * ITEMS_PER_PAGE + 1;
  const end = Math.min(safePage * ITEMS_PER_PAGE, filtered.length);

  return (
    <div className="space-y-5">
      {/* KYC Banner */}
      <div className="flex items-center gap-3 bg-purple-50 border border-purple-100 rounded-xl px-4 py-3">
        <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-[10px] shrink-0">
          !
        </div>
        <p className="text-xs text-purple-600">
          Your products are saved as drafts. Verify your identity to go live and
          start receiving orders.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Search */}
        <div className="relative w-full sm:w-52">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Order ID or product..."
            value={search}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300"
          />
        </div>

        {/* Date */}
        <select className="flex-1 sm:flex-none px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-100">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Last 90 Days</option>
        </select>

        {/* Status */}
        <select
          value={statusFilter}
          onChange={(e) => {
            handleStatus(e.target.value);
          }}
          className="flex-1 sm:flex-none px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-100"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        {/* Filter button — full width on mobile */}
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors sm:ml-auto">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="11" y1="18" x2="13" y2="18" />
          </svg>
          Filter
        </button>
      </div>

      {/* Table */}
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
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-5 py-12 text-center text-gray-400 text-sm"
                  >
                    No orders found.
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
                      <StatusBadge status={order.status} />
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

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            Showing {start}–{end} of {filtered.length} orders
          </p>
          <div className="flex items-center justify-center gap-1 flex-wrap">
            <button
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
              }}
              disabled={safePage === 1}
              className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {pageNumbers().map((p, i) =>
              p === "..." ? (
                <span
                  key={"ellipsis-" + String(i)}
                  className="px-1 text-xs text-gray-400"
                >
                  …
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => {
                    setCurrentPage(p);
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
                setCurrentPage((p) => Math.min(totalPages, p + 1));
              }}
              disabled={safePage === totalPages}
              className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
