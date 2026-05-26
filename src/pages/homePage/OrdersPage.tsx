import { useState } from "react";
import OrdersKYCBanner from "@/components/orders/OrdersKYCBanner";
import OrdersFilters from "@/components/orders/OrdersFilters";
import OrdersTable from "@/components/orders/OrdersTable";
import type { Order } from "@/core/types/Order";

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

export default function OrdersPage() {
  const kycCompleted = false;

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = ALL_ORDERS.filter((o) => {
    const matchesStatus =
      statusFilter === "All Statuses" || o.status === statusFilter;
    const matchesSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-5">
      <OrdersKYCBanner kycCompleted={kycCompleted} />

      <OrdersFilters
        search={search}
        statusFilter={statusFilter}
        onSearch={(v) => {
          setSearch(v);
          setCurrentPage(1);
        }}
        onStatusChange={(v) => {
          setStatusFilter(v);
          setCurrentPage(1);
        }}
      />

      <OrdersTable
        orders={filtered}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
