import { useState } from "react";
import { useParams } from "react-router-dom";
import EditProductTopBar from "@/components/products/editProduct/EditProductTopBar";
import EditProductInfo from "@/components/products/editProduct/EditProductInfo";
import EditProductStatsRow from "@/components/products/editProduct/EditProductStatsRow";
import EditProductBasicInfo from "@/components/products/editProduct/EditProductBasicInfo";
import EditProductImages from "@/components/products/editProduct/EditProductImages";
import EditProductSpecifications from "@/components/products/editProduct/EditProductSpecifications";
import EditProductVariants from "@/components/products/editProduct/EditProductVariants";
import EditProductVisibility from "@/components/products/editProduct/EditProductVisibility";
import EditProductShipping from "@/components/products/editProduct/EditProductShipping";
import EditProductDangerZone from "@/components/products/editProduct/EditProductDangerZone";

// ── Mock product data — replace with API call using productId later ───────────
const MOCK_PRODUCT = {
  id: "1",
  productName: "HTHIUM Portable Power Station",
  status: "Live",
  sku: "HTH-294017",
  listedDate: "Nov 3, 2025",
  lastEdited: "3 days ago",
  totalSold: 47,
  avgRating: 4.3,
  unitsInStock: 12,
  sellingPrice: "420000",
  compareAtPrice: "",
  price: "0.00",
  stockQuantity: "12",
  lowStockAlert: "5",
  category: "Electronics",
  description:
    "The HTHIUM Portable Power Station is a high-capacity home and office backup power solution designed to keep your essential appliances running during power outages. Built for the Nigerian market where grid power is unreliable, it delivers clean, stable power to laptops, fans, TVs, phones, and more — all from a single compact unit. Its sleek tower design fits neatly on a desk or shelf without taking up floor space.",
  images: [],
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
  weight: "3.5",
  deliveryMethod: "Cadna Logistics",
};

export default function EditProductPage() {
  // productId from URL will be used later for API calls
  useParams();

  // Later: fetch by productId from API
  const product = MOCK_PRODUCT;

  const [productName, setProductName] = useState(product.productName);
  const [sellingPrice, setSellingPrice] = useState(product.sellingPrice);
  const [compareAtPrice, setCompareAtPrice] = useState(product.compareAtPrice);
  const [price, setPrice] = useState(product.price);
  const [stockQuantity, setStockQuantity] = useState(product.stockQuantity);
  const [lowStockAlert, setLowStockAlert] = useState(product.lowStockAlert);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);
  const [images, setImages] = useState<string[]>(product.images);
  const [specs, setSpecs] = useState(product.specs);
  const [hasVariants, setHasVariants] = useState(product.hasVariants);
  const [status, setStatus] = useState(product.status);
  const [weight, setWeight] = useState(product.weight);
  const [deliveryMethod, setDeliveryMethod] = useState(product.deliveryMethod);

  const isValid =
    productName.trim() !== "" &&
    sellingPrice.trim() !== "" &&
    price.trim() !== "" &&
    stockQuantity.trim() !== "" &&
    category.trim() !== "";

  const handleSave = () => {
    if (!isValid) return;
    // Later: call API to save changes
    console.log("Save changes", {
      productName,
      sellingPrice,
      price,
      stockQuantity,
      category,
    });
  };

  const handleDiscard = () => {
    setProductName(product.productName);
    setSellingPrice(product.sellingPrice);
    setCompareAtPrice(product.compareAtPrice);
    setPrice(product.price);
    setStockQuantity(product.stockQuantity);
    setLowStockAlert(product.lowStockAlert);
    setCategory(product.category);
    setDescription(product.description);
    setImages(product.images);
    setSpecs(product.specs);
    setHasVariants(product.hasVariants);
    setStatus(product.status);
    setWeight(product.weight);
    setDeliveryMethod(product.deliveryMethod);
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
      <EditProductTopBar onDiscard={handleDiscard} onSave={handleSave} />

      <EditProductInfo
        productName={productName}
        status={status}
        sku={product.sku}
        listedDate={product.listedDate}
        lastEdited={product.lastEdited}
      />

      <EditProductStatsRow
        totalSold={product.totalSold}
        avgRating={product.avgRating}
        unitsInStock={product.unitsInStock}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left — main form */}
        <div className="lg:col-span-2 space-y-4">
          <EditProductBasicInfo
            productName={productName}
            sellingPrice={sellingPrice}
            compareAtPrice={compareAtPrice}
            price={price}
            sku={product.sku}
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
          />

          <EditProductImages
            images={images}
            onAddImage={handleAddImage}
            onRemoveImage={handleRemoveImage}
          />

          <EditProductSpecifications
            specs={specs}
            onAddSpec={handleAddSpec}
            onRemoveSpec={handleRemoveSpec}
            onSpecChange={handleSpecChange}
          />

          <EditProductVariants
            hasVariants={hasVariants}
            onToggle={setHasVariants}
          />
        </div>

        {/* Right — sidebar */}
        <div className="space-y-4">
          <EditProductVisibility status={status} onStatusChange={setStatus} />

          <EditProductShipping
            weight={weight}
            deliveryMethod={deliveryMethod}
            onWeightChange={setWeight}
            onDeliveryMethodChange={setDeliveryMethod}
          />

          <EditProductDangerZone
            onCloseProductSales={() => {
              console.log("Close sales");
            }}
            onDeleteProduct={() => {
              console.log("Delete product");
            }}
          />
        </div>
      </div>
    </div>
  );
}
