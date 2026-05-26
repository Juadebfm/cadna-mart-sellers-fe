import { Link } from "react-router-dom";
import type { Product } from "@/core/types/Product";
import ProductImage from "./ProductImages";
import ProductStatusBadge from "./ProductStatusBadge";
import ActionMenu from "./ActionMenu";
import { Package2 } from "lucide-react";

const ITEMS_PER_PAGE = 8;

interface Props {
  products: Product[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function ProductsTable({
  products,
  currentPage,
  onPageChange,
}: Props) {
  const hasNoProductsAtAll = products.length === 0;
  const totalPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = products.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  );

  const start = products.length === 0 ? 0 : (safePage - 1) * ITEMS_PER_PAGE + 1;
  const end = Math.min(safePage * ITEMS_PER_PAGE, products.length);

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
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">Price ↕</th>
              <th className="px-5 py-4 hidden md:table-cell">Category ↕</th>
              <th className="px-5 py-4 hidden md:table-cell">Stock ↕</th>
              <th className="px-5 py-4 hidden lg:table-cell">Sales</th>
              <th className="px-5 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {/* Empty — no products at all */}
            {hasNoProductsAtAll ? (
              <tr>
                <td colSpan={6} className="px-5 py-16 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                    <Package2 size={28} stroke="#9CA3AF" strokeWidth={1.5} />

                    </div>
                    <p className="text-[14px] font-medium text-gray-500">
                      No products to display!
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
                  colSpan={6}
                  className="px-5 py-12 text-center text-gray-400 text-sm"
                >
                  No products match your filters.
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
      {!hasNoProductsAtAll && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            Showing {start}–{end} of {products.length} products
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
