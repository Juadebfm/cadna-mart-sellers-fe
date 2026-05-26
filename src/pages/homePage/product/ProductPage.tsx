import { useState } from "react";
import ProductsKYCBanner from "@/components/products/ProductKycBanner";
import ProductFilters from "@/components/products/ProductFilters";
import ProductTable from "@/components/products/ProductTable";
import type { Product } from "@/core/types/Product";

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

export default function ProductsPage() {
  const kycCompleted = false;

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
      p.id.includes(search);
    return matchesStatus && matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-5">
      <ProductsKYCBanner kycCompleted={kycCompleted} />

      <ProductFilters
        search={search}
        statusFilter={statusFilter}
        categoryFilter={categoryFilter}
        onSearch={(v: string) => {
          setSearch(v);
          setCurrentPage(1);
        }}
        onStatusChange={(v: string) => {
          setStatusFilter(v);
          setCurrentPage(1);
        }}
        onCategoryChange={(v: string) => {
          setCategoryFilter(v);
          setCurrentPage(1);
        }}
      />

      <ProductTable
        products={filtered}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
