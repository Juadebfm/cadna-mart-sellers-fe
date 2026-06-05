import ViewTopBar from "@/components/products/viewProduct/ViewTopBar";
import ViewGallery from "@/components/products/viewProduct/ViewGallery";
import ViewDescription from "@/components/products/viewProduct/ViewDescription";
import ViewSpecifications from "@/components/products/viewProduct/ViewSpecifications";
import ViewVariants from "@/components/products/viewProduct/ViewVariants";
import ViewSalesChart from "@/components/products/viewProduct/ViewSalesChart";
import ViewDetails from "@/components/products/viewProduct/ViewDetails";
import ViewActions from "@/components/products/viewProduct/ViewActions";
import ViewRelatedProducts from "@/components/products/viewProduct/ViewRelatedProducts";
import { useState } from "react";

// ── Mock data — replace with API call using productId later ───────────────────
const MOCK_PRODUCT = {
  id: "1",
  productName: "HTHIUM Portable Power Station",
  price: "₦420,000",
  sku: "SKU001",
  category: "Electronics",
  stock: 12,
  totalSold: 47,
  listedDate: "Nov 3, 2025",
  status: "Live",
  description:
    "The HTHIUM Portable Power Station is a high-capacity home and office backup power solution designed to keep your essential appliances running during power outages. Built for the Nigerian market where grid power is unreliable, it delivers clean, stable power to laptops, fans, TVs, phones, and more — all from a single compact unit. Its sleek tower design fits neatly on a desk or shelf without taking up floor space.",
  specs: [
    { attribute: "Brand", value: "HTHIUM" },
    { attribute: "Form Factor", value: "Desktop Tower" },
    {
      attribute: "Supported Devices",
      value: "Lamps, fans, laptops, TVs, phones",
    },
    { attribute: "Output Ports", value: "AC + USB (multiple)" },
    { attribute: "Colour", value: "White/Grey" },
  ],
  hasVariants: false,
  growthPercent: 22,
};

const MOCK_RELATED = [
  {
    id: "r1",
    name: 'Lenovo 27" FHD All-in-One Monitor',
    price: "₦385,000",
    image: "",
  },
  {
    id: "r2",
    name: 'HP 24" Windows 11 LED Monitor',
    price: "₦145,000",
    image: "",
  },
  {
    id: "r3",
    name: "EAGEAT Bluetooth RGB Wireless Mouse",
    price: "₦8,100",
    image: "",
  },
];

export default function ViewProductPage() {
  const product = MOCK_PRODUCT;

  const [relatedProducts, setRelatedProducts] = useState(MOCK_RELATED);

  const handleRemoveRelated = (id: string) => {
    setRelatedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-4">
      <ViewTopBar productId={product.id} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left — 2/3 width */}
        <div className="lg:col-span-2 space-y-4">
          <ViewGallery />
          <ViewDescription
            description={product.description}
            productId={product.id}
          />
          <ViewSpecifications specs={product.specs} productId={product.id} />
          <ViewVariants
            hasVariants={product.hasVariants}
            productId={product.id}
          />
          <ViewSalesChart
            totalSold={product.totalSold}
            growthPercent={product.growthPercent}
          />
        </div>

        {/* Right — 1/3 width */}
        <div className="space-y-4">
          <ViewDetails
            productName={product.productName}
            price={product.price}
            sku={product.sku}
            category={product.category}
            stock={product.stock}
            totalSold={product.totalSold}
            listedDate={product.listedDate}
            status={product.status}
          />
          <ViewActions
            productId={product.id}
            onDeactivate={() => {
              console.log("Deactivate");
            }}
            onDelete={() => {
              console.log("Delete");
            }}
          />
          <ViewRelatedProducts
            products={relatedProducts}
            onAdd={() => {
              console.log("Add related");
            }}
            onRemove={handleRemoveRelated}
          />
        </div>
      </div>
    </div>
  );
}
