import { useState } from "react";
import { useParams } from "react-router-dom";
import ViewTopBar from "@/components/products/viewProduct/ViewTopBar";
import ViewDetails from "@/components/products/viewProduct/ViewDetails";
import ViewDescription from "@/components/products/viewProduct/ViewDescription";
import ViewGallery from "@/components/products/viewProduct/ViewGallery";
import ViewSpecifications from "@/components/products/viewProduct/ViewSpecifications";
import ViewVariants from "@/components/products/viewProduct/ViewVariants";
import ViewSalesChart from "@/components/products/viewProduct/ViewSalesChart";
import ViewActions from "@/components/products/viewProduct/ViewActions";
import ViewRelatedProducts from "@/components/products/viewProduct/ViewRelatedProducts";
import ManageRecommendationsModal from "@/components/products/modals/ManageRecommendationsModal";
import Relatedimage1 from "@/assets/images/product/recommendedproduct.png";
import Relatedimage2 from "@/assets/images/product/recommendedproduct2.png";
import Relatedimage3 from "@/assets/images/product/recommendedproduct3.png";

interface RelatedProduct {
  id: string;
  name: string;
  price: string;
  image: string;
}

export default function ViewProductPage() {
  const { productId = "1" } = useParams();

  const [showRecommendations, setShowRecommendations] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([
    {
      id: "1",
      name: 'Lenovo 27" FHD All-in-One Monitor',
      price: "₦285,000",
      image: Relatedimage1,
    },
    {
      id: "2",
      name: 'HP 24" Windows 11 LED Monitor',
      price: "₦145,000",
      image: Relatedimage2,
    },
    {
      id: "3",
      name: "EAGEAT Bluetooth RGB Wireless Mouse",
      price: "₦8,500",
      image: Relatedimage3,
    },
  ]);

  return (
    <div className="space-y-4">
      <ViewTopBar productId={productId} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left — main content (2/3) */}
        <div className="lg:col-span-2 space-y-4">
          <ViewDescription
            productId={productId}
            description="High-capacity portable power station with fast charging capabilities. Perfect for outdoor adventures and emergencies."
          />
          <ViewGallery />
          <ViewSpecifications
            productId={productId}
            specs={[
              { attribute: "Capacity", value: "500Wh" },
              { attribute: "Power Output", value: "1000W AC" },
              { attribute: "Weight", value: "6.5 kg" },
              { attribute: "Warranty", value: "2 years" },
            ]}
          />
          <ViewVariants hasVariants={false} productId={productId} />
          <ViewSalesChart totalSold={47} growthPercent={22} />
        </div>

        {/* Right — sidebar (1/3) */}
        <div className="space-y-4">
          <ViewDetails
            productName="HTHIUM Portable Power Station"
            price="₦420,000"
            sku="SKU001"
            category="Electronics"
            stock={12}
            totalSold={47}
            listedDate="Nov 3, 2025"
            status="Live"
          />

          <ViewActions
            productId={productId}
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
              setShowRecommendations(true);
            }}
            onRemove={(id) => {
              setRelatedProducts((prev) => prev.filter((p) => p.id !== id));
            }}
          />
        </div>
      </div>

      {/* Manage Recommendations Modal */}
      {showRecommendations && (
        <ManageRecommendationsModal
          initial={relatedProducts.map((p) => ({
            id: p.id,
            name: p.name,
            price: p.price,
            status: "Live" as const,
          }))}
          onClose={() => {
            setShowRecommendations(false);
          }}
          onSave={(selected) => {
            setRelatedProducts(
              selected.map((p, i) => ({
                id: p.id,
                name: p.name,
                price: p.price,
                image: [Relatedimage1, Relatedimage2, Relatedimage3][i] ?? "",
              })),
            );
          }}
        />
      )}
    </div>
  );
}
