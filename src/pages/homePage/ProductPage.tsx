import { useState, useRef, useEffect } from "react";

type ProductStatus = "Draft" | "Live" | "Deactivated";

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
  stock: number;
  sales: number;
  status: ProductStatus;
}

const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones – Noise Cancelling",
    image: "",
    price: "₦415,000",
    category: "Furniture",
    stock: 0,
    sales: 156,
    status: "Draft",
  },
  {
    id: "2",
    name: "Sonic-Flow Noise Canceling Shells",
    image: "",
    price: "₦415,000",
    category: "Furniture",
    stock: 0,
    sales: 156,
    status: "Live",
  },
  {
    id: "3",
    name: "Chronos Minimalist Series 4",
    image: "",
    price: "₦415,000",
    category: "Furniture",
    stock: 0,
    sales: 156,
    status: "Draft",
  },
  {
    id: "4",
    name: "Aero-Pulse Velocity Trainers",
    image: "",
    price: "₦415,000",
    category: "Furniture",
    stock: 0,
    sales: 156,
    status: "Live",
  },
  {
    id: "5",
    name: "Cosmetic Bundle",
    image: "",
    price: "₦31,500",
    category: "Furniture",
    stock: 0,
    sales: 156,
    status: "Live",
  },
  {
    id: "6",
    name: "Baby Crib Set",
    image: "",
    price: "₦24,500",
    category: "Furniture",
    stock: 0,
    sales: 156,
    status: "Deactivated",
  },
  {
    id: "7",
    name: "Baby Monitor Set",
    image: "",
    price: "₦52,000",
    category: "Furniture",
    stock: 0,
    sales: 156,
    status: "Draft",
  },
  {
    id: "8",
    name: "Kitchen Utensil Pack",
    image: "",
    price: "₦14,750",
    category: "Furniture",
    stock: 0,
    sales: 156,
    status: "Draft",
  },
];

const STATUS_OPTIONS = ["All Statuses", "Draft", "Live", "Deactivated"];
const CATEGORY_OPTIONS = [
  "All Categories",
  "Furniture",
  "Electronics",
  "Fashion",
  "Beauty",
];
const ITEMS_PER_PAGE = 8;

const STATUS_STYLES: Record<ProductStatus, string> = {
  Draft: "bg-gray-100 text-gray-500",
  Live: "bg-green-50 text-green-600",
  Deactivated: "bg-orange-50 text-orange-500",
};

function ProductStatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}

function ActionMenu({ productId }: { productId: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const actions = [
    { label: "View Product", icon: "👁", danger: false },
    { label: "Edit Product", icon: "✏️", danger: false },
    { label: "Duplicate Product", icon: "📋", danger: false },
    { label: "View Public Link", icon: "🔗", danger: false },
    { label: "Reviews & Ratings", icon: "⭐", danger: false },
    { label: "Close Product Sales", icon: "🚫", danger: false },
    { label: "Deactivate Product", icon: "⏸", danger: false },
    { label: "Delete Product", icon: "🗑", danger: true },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => {
          setOpen((o) => !o);
        }}
        className="p-1.5 text-gray-300 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1">
          {actions.map(({ label, icon, danger }) => (
            <button
              key={label}
              onClick={() => {
                console.log(label, productId);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs text-left transition-colors ${
                danger
                  ? "text-red-500 hover:bg-red-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProductImage({ name }: { name: string }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-400 text-sm font-semibold overflow-hidden">
      {name.charAt(0)}
    </div>
  );
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchesStatus =
      statusFilter === "All Statuses" || p.status === statusFilter;
    const matchesCategory =
      categoryFilter === "All Categories" || p.category === categoryFilter;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  );

  const handleFilterChange =
    (setter: (v: string) => void) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setter(e.target.value);
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
          All 38 products are saved as drafts. Complete KYC to publish your
          store and make products visible to buyers.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Search  */}
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
              setSearch(e.target.value);
              setCurrentPage(1);
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

        {/* Category */}
        <select
          value={categoryFilter}
          onChange={handleFilterChange(setCategoryFilter)}
          className="flex-1 sm:flex-none px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-100"
        >
          {CATEGORY_OPTIONS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* Status */}
        <select
          value={statusFilter}
          onChange={handleFilterChange(setStatusFilter)}
          className="flex-1 sm:flex-none px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-100"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        {/* Filter button */}
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
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">Price ↕</th>
                <th className="px-5 py-4 hidden md:table-cell">Category ↕</th>
                <th className="px-5 py-4 hidden md:table-cell">Stock ↕</th>
                <th className="px-5 py-4 hidden lg:table-cell">Sales</th>
                <th className="px-5 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-gray-400 text-sm"
                  >
                    No products found.
                  </td>
                </tr>
              ) : (
                paginated.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <ProductImage name={product.name} />
                        <div className="min-w-0">
                          <p className="text-gray-800 font-medium leading-snug line-clamp-1 text-sm">
                            {product.name}
                          </p>
                          <ProductStatusBadge status={product.status} />
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-gray-700 font-medium whitespace-nowrap">
                      {product.price}
                    </td>
                    <td className="px-5 py-4 text-gray-500 hidden md:table-cell">
                      {product.category}
                    </td>
                    <td className="px-5 py-4 text-gray-500 hidden md:table-cell">
                      {product.stock}
                    </td>
                    <td className="px-5 py-4 text-gray-500 hidden lg:table-cell">
                      {product.sales}
                    </td>
                    <td className="px-5 py-4">
                      <ActionMenu productId={product.id} />
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
            Showing {start}–{end} of {filtered.length} products
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
