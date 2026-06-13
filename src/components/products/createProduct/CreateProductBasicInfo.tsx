import { RefreshCw } from "lucide-react";

interface Props {
  productName: string;
  sellingPrice: string;
  compareAtPrice: string;
  price: string;
  sku: string;
  stockQuantity: string;
  lowStockAlert: string;
  category: string;
  description: string;
  onProductNameChange: (v: string) => void;
  onSellingPriceChange: (v: string) => void;
  onCompareAtPriceChange: (v: string) => void;
  onPriceChange: (v: string) => void;
  onStockQuantityChange: (v: string) => void;
  onLowStockAlertChange: (v: string) => void;
  onCategoryChange: (v: string) => void;
  onDescriptionChange: (v: string) => void;
  onRegenerateSku: () => void;
}

const CATEGORIES = [
  "Electronics",
  "Furniture",
  "Fashion",
  "Beauty",
  "Food & Drinks",
  "Sports",
  "Baby & Kids",
  "Home & Kitchen",
];

export default function CreateProductBasicInfo({
  productName,
  sellingPrice,
  compareAtPrice,
  price,
  sku,
  stockQuantity,
  lowStockAlert,
  category,
  description,
  onProductNameChange,
  onSellingPriceChange,
  onCompareAtPriceChange,
  onPriceChange,
  onStockQuantityChange,
  onLowStockAlertChange,
  onCategoryChange,
  onDescriptionChange,
  onRegenerateSku,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5D5FEF] mb-5 border-b border-gray-100 pb-3">
        Basic Information
      </h2>

      <div className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="text-[14px] text-[#4C4D60] mb-1 block">
            Product name <span className="text-[#C0392B]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Baby Crib Set"
            value={productName}
            onChange={(e) => {
              onProductNameChange(e.target.value);
            }}
            className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
          />
        </div>

        {/* Selling Price + Compare-at Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[14px] text-[#4C4D60] mb-1 block">
              Selling price (₦) <span className="text-[#C0392B]">*</span>
            </label>
            <input
              type="number"
              placeholder="₦ 0.00"
              min="0"
              value={sellingPrice}
              onChange={(e) => {
                onSellingPriceChange(e.target.value);
              }}
              className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-[#4C4D60] mb-1 block">
              Compare-at price{" "}
              <span className="text-[#9899A3] font-normal">(optional)</span>
            </label>
            <input
              type="number"
              placeholder="0"
              min="0"
              value={compareAtPrice}
              onChange={(e) => {
                onCompareAtPriceChange(e.target.value);
              }}
              className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
            />
            <p className="text-[11px] text-[#9899A3] mt-1">
              Shown as strikethrough to display a discount
            </p>
          </div>
        </div>

        {/* Price + SKU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[14px] font-medium text-[#4C4D60] mb-1 block">
              Price (₦) <span className="text-[#C0392B]">*</span>
            </label>
            <input
              type="number"
              min="0"
              placeholder="₦ 0.00"
              value={price}
              onChange={(e) => {
                onPriceChange(e.target.value);
              }}
              className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-[#4C4D60] mb-1 block">
              SKU <span className="text-[#C0392B]">*</span>
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center justify-between px-3 py-2 border border-[#D0D5DD] rounded-lg bg-[#EFEFFD]">
                <p className="text-[13px] text-[#4C4D60]">{sku}</p>
                <button
                  onClick={onRegenerateSku}
                  className="flex items-center gap-1 text-[11px] text-[#1A3FD8] hover:text-[#4446D0] transition"
                >
                  <RefreshCw className="h-3 w-3" />
                  Regenerate
                </button>
              </div>
            </div>
            <p className="text-[11px] text-[#9899A3] mt-1">
              Auto-generated and assigned to this product. Cannot be edited manually.
            </p>
          </div>
        </div>

        {/* Stock Quantity + Low Stock Alert */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[14px] font-medium text-[#4C4D60] mb-1 block">
              Stock quantity <span className="text-[#C0392B]">*</span>
            </label>
            <input
              type="number"
              placeholder="0"
              min="0"
              value={stockQuantity}
              onChange={(e) => {
                onStockQuantityChange(e.target.value);
              }}
              className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
            />
          </div>
          <div>
            <label className="text-[14px] font-medium text-[#4C4D60] mb-1 block">
              Low stock alert
            </label>
            <input
              type="number"
              placeholder="0"
              min="0"
              value={lowStockAlert}
              onChange={(e) => {
                onLowStockAlertChange(e.target.value);
              }}
              className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
            />
            <p className="text-[11px] text-[#9899A3] mt-1">
              Get an alert when stock falls below this.
            </p>
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="text-[14px] font-medium text-[#4C4D60] mb-1 block">
            Category <span className="text-[#C0392B]">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => {
              onCategoryChange(e.target.value);
            }}
            className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60] bg-white"
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="text-[12px] font-medium text-[#4C4D60] mb-1 block">
            Description
          </label>
          <textarea
            placeholder="Describe your product..."
            value={description}
            onChange={(e) => {
              onDescriptionChange(e.target.value);
            }}
            rows={5}
            className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60] resize-none"
          />
        </div>
      </div>
    </div>
  );
}
