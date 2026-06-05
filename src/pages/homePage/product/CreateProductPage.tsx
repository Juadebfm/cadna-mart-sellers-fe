import { useState } from "react";
import CreateProductTopBar from "@/components/products/createProduct/CreateProductTopBar";
import CreateProductBasicInfo from "@/components/products/createProduct/CreateProductBasicInfo";
import CreateProductImages from "@/components/products/createProduct/CreateProductImages";
import CreateProductSpecifications from "@/components/products/createProduct/CreateProductSpecifications";
import CreateProductVariants from "@/components/products/createProduct/CreateProductVariants";
import CreateProductVisibility from "@/components/products/createProduct/CreateProductVisibility";
import CreateProductShipping from "@/components/products/createProduct/CreateProductShipping";
import CreateProductDangerZone from "@/components/products/createProduct/CreateProductDangerZone";

function generateSku() {
  return `CDN-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

export default function CreateProductPage() {
  const [productName, setProductName] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [compareAtPrice, setCompareAtPrice] = useState("");
  const [price, setPrice] = useState("");
  const [sku, setSku] = useState(generateSku());
  const [stockQuantity, setStockQuantity] = useState("");
  const [lowStockAlert, setLowStockAlert] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [specs, setSpecs] = useState([{ attribute: "", value: "" }]);
  const [hasVariants, setHasVariants] = useState(false);
  const [status, setStatus] = useState("Live");
  const [weight, setWeight] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("Cadna Logistics");

  // ── isValid — all required fields filled ──────────────────────────────────
  const isValid =
    productName.trim() !== "" &&
    sellingPrice.trim() !== "" &&
    price.trim() !== "" &&
    stockQuantity.trim() !== "" &&
    category.trim() !== "";

  const handleSubmit = () => {
    if (!isValid) return;
    // Later: call API to create product
    console.log("Create product", {
      productName,
      sellingPrice,
      compareAtPrice,
      price,
      sku,
      stockQuantity,
      lowStockAlert,
      category,
      description,
      images,
      specs,
      hasVariants,
      status,
      weight,
      deliveryMethod,
    });
  };

  const handleAddImage = (file: File) => {
    const url = URL.createObjectURL(file);
    setImages((prev) => [...prev, url]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddSpec = () => {
    setSpecs((prev) => [...prev, { attribute: "", value: "" }]);
  };

  const handleRemoveSpec = (index: number) => {
    setSpecs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSpecChange = (
    index: number,
    field: "attribute" | "value",
    value: string,
  ) => {
    setSpecs((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)),
    );
  };

  return (
    <div className="space-y-4">
      <CreateProductTopBar isValid={isValid} onSubmit={handleSubmit} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left — main form (2/3 width) */}
        <div className="lg:col-span-2 space-y-4">
          <CreateProductBasicInfo
            productName={productName}
            sellingPrice={sellingPrice}
            compareAtPrice={compareAtPrice}
            price={price}
            sku={sku}
            stockQuantity={stockQuantity}
            lowStockAlert={lowStockAlert}
            category={category}
            description={description}
            onProductNameChange={setProductName}
            onSellingPriceChange={setSellingPrice}
            onCompareAtPriceChange={setCompareAtPrice}
            onPriceChange={setPrice}
            onStockQuantityChange={setStockQuantity}
            onLowStockAlertChange={setLowStockAlert}
            onCategoryChange={setCategory}
            onDescriptionChange={setDescription}
            onRegenerateSku={() => { setSku(generateSku()); }}
          />

          <CreateProductImages
            images={images}
            onAddImage={handleAddImage}
            onRemoveImage={handleRemoveImage}
          />

          <CreateProductSpecifications
            specs={specs}
            onAddSpec={handleAddSpec}
            onRemoveSpec={handleRemoveSpec}
            onSpecChange={handleSpecChange}
          />

          <CreateProductVariants
            hasVariants={hasVariants}
            onToggle={setHasVariants}
          />
        </div>

        {/* Right — sidebar (1/3 width) */}
        <div className="space-y-4">
          <CreateProductVisibility status={status} onStatusChange={setStatus} />

          <CreateProductShipping
            weight={weight}
            deliveryMethod={deliveryMethod}
            onWeightChange={setWeight}
            onDeliveryMethodChange={setDeliveryMethod}
          />

          <CreateProductDangerZone
            onCloseProductSales={() => { console.log("Close sales"); }}
            onDeleteProduct={() => { console.log("Delete product"); }}
          />
        </div>
      </div>
    </div>
  );
}