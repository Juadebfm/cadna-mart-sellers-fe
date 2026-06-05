import type { ProductStatus } from "@/core/types/Product";

const STATUS_STYLES: Record<ProductStatus, string> = {
  Draft: "bg-gray-100 text-gray-500",
  Live: "bg-green-50 text-green-600",
  Deactivated: "bg-orange-50 text-orange-500",
};

export default function ProductStatusBadge({
  status,
}: {
  status: ProductStatus;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}
