import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  X,
  AlertTriangle,
  ShieldOff,
  Trash2,
} from "lucide-react";

type Visibility = "Live" | "Draft" | "Deactivated";
type DeliveryMethod =
  | "Cadna Logistics"
  | "Seller Owned Courier"
  | "Partner Courier";

interface Attribute {
  id: string;
  attribute: string;
  value: string;
}

const MOCK_PRODUCT = {
  name: "HTHIUM Portable Power Station",
  status: "Live" as Visibility,
  sku: "BAB-294017",
  listedDate: "Nov 3, 2025",
  lastEdited: "3 days ago",
  totalSold: 47,
  avgRating: 4.3,
  unitsInStock: 12,
  sellingPrice: "420000",
  compareAtPrice: "",
  price: "0.00",
  stockQuantity: "0",
  lowStockAlert: "0",
  category: "",
  description:
    "The HTHIUM Portable Power Station is a high-capacity home and office backup power solution designed to keep your essential appliances running during power outages. Built for the Nigerian market where grid power is unreliable, it delivers clean, stable power to laptops, fans, TVs, phones, and more — all from a single compact unit. Its sleek tower design fits neatly on a desk or shelf without taking up floor space.",
  weight: "3.5kg",
  deliveryMethod: "Cadna Logistics" as DeliveryMethod,
  images: ["", "", "", ""],
  attributes: [
    { id: "1", attribute: "Brand", value: "HTHIUM" },
    { id: "2", attribute: "Form Factor", value: "Desktop Tower" },
    {
      id: "3",
      attribute: "Supported Devices",
      value: "Lamps, fans, laptops, TVs, phones",
    },
    { id: "4", attribute: "Output Ports", value: "AC + USB (multiple)" },
    { id: "5", attribute: "Colour", value: "White/Grey" },
  ] as Attribute[],
  hasVariants: false,
};

const CATEGORIES = [
  "Electronics",
  "Furniture",
  "Fashion",
  "Beauty",
  "Kitchen",
  "Baby & Kids",
];
const DELIVERY_METHODS: DeliveryMethod[] = [
  "Cadna Logistics",
  "Seller Owned Courier",
  "Partner Courier",
];

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h2 className="text-[14px] font-semibold text-[#5D5FEF] mb-5">{title}</h2>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] text-[#696A7A] font-medium">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-[#9899A3]">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full px-3 py-2 border border-gray-200 rounded-lg text-[13px] text-[#4C4D60] focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] focus:border-transparent transition";

export default function EditProductPage() {
  const navigate = useNavigate();
  const p = MOCK_PRODUCT;

  const [name, setName] = useState(p.name);
  const [visibility, setVisibility] = useState<Visibility>(p.status);
  const [sellingPrice, setSellingPrice] = useState(p.sellingPrice);
  const [compareAtPrice, setCompareAtPrice] = useState(p.compareAtPrice);
  const [price, setPrice] = useState(p.price);
  const [stockQty, setStockQty] = useState(p.stockQuantity);
  const [lowStock, setLowStock] = useState(p.lowStockAlert);
  const [category, setCategory] = useState(p.category);
  const [description, setDescription] = useState(p.description);
  const [weight, setWeight] = useState(p.weight);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>(
    p.deliveryMethod,
  );
  const [images, setImages] = useState<string[]>(p.images);
  const [attributes, setAttributes] = useState<Attribute[]>(p.attributes);
  const [hasVariants, setHasVariants] = useState(p.hasVariants);
  const [visibilityOpen, setVisibilityOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addAttribute = () => {
    setAttributes((prev) => [
      ...prev,
      { id: Date.now().toString(), attribute: "", value: "" },
    ]);
  };

  const removeAttribute = (id: string) => {
    setAttributes((prev) => prev.filter((a) => a.id !== id));
  };

  const updateAttribute = (
    id: string,
    field: "attribute" | "value",
    val: string,
  ) => {
    setAttributes((prev) =>
      prev.map((a) => (a.id === id ? { ...a, [field]: val } : a)),
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      setImages((prev) => {
        const empty = prev.findIndex((img) => img === "");
        if (empty !== -1) {
          const next = [...prev];
          next[empty] = url;
          return next;
        }
        return [...prev, url];
      });
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.map((img, i) => (i === index ? "" : img)));
  };

  const handleSave = () => {
    console.log("Saving product...", { name, visibility, sellingPrice });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFF]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
        <h1 className="text-[16px] font-semibold text-[#4C4D60]">
          Edit Product
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => void navigate(-1)}
            className="px-4 py-2 text-[13px] text-[#4C4D60] border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            Discard
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-[13px] text-white bg-[#5D5FEF] rounded-lg hover:opacity-90 transition font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Back + title */}
        <div>
          <button
            onClick={() => void navigate(-1)}
            className="flex items-center gap-1.5 text-[13px] text-[#696A7A] hover:text-[#5D5FEF] transition mb-3"
          >
            <ArrowLeft size={14} /> Back
          </button>
          <h2 className="text-[22px] font-bold text-[#4C4D60]">{name}</h2>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              {visibility}
            </span>
            <span className="text-[12px] text-[#9899A3]">
              SKU: {p.sku} • Listed {p.listedDate} • Last edited {p.lastEdited}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-gray-100 bg-white rounded-xl border border-gray-100 shadow-sm">
          {[
            { label: "Total sold", value: p.totalSold },
            { label: "Avg. rating", value: p.avgRating },
            { label: "Units in stock", value: p.unitsInStock },
          ].map(({ label, value }) => (
            <div key={label} className="px-6 py-5 text-center">
              <p className="text-[22px] font-bold text-[#4C4D60]">{value}</p>
              <p className="text-[12px] text-[#9899A3] mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <SectionCard title="Basic Information">
              <div className="space-y-4">
                <Field label="Product name">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className={inputCls}
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Selling price (₦) *">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-[#9899A3]">
                        ₦
                      </span>
                      <input
                        type="number"
                        value={sellingPrice}
                        onChange={(e) => {
                          setSellingPrice(e.target.value);
                        }}
                        className={inputCls + " pl-7"}
                      />
                    </div>
                  </Field>
                  <Field
                    label="Compare-at price (optional)"
                    hint="Shown as strikethrough to display a discount"
                  >
                    <input
                      type="number"
                      value={compareAtPrice}
                      onChange={(e) => {
                        setCompareAtPrice(e.target.value);
                      }}
                      placeholder="0"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Price (₦) *">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-[#9899A3]">
                        ₦
                      </span>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        className={inputCls + " pl-7"}
                      />
                    </div>
                  </Field>
                  <Field
                    label="SKU *"
                    hint="SKUs are system-generated and cannot be changed."
                  >
                    <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
                      <span className="text-[13px] text-[#4C4D60]">
                        {p.sku}
                      </span>
                      <span className="ml-auto text-[11px] text-[#9899A3]">
                        Auto-assigned
                      </span>
                    </div>
                  </Field>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Field label="Stock quantity *">
                    <input
                      type="number"
                      value={stockQty}
                      onChange={(e) => {
                        setStockQty(e.target.value);
                      }}
                      className={inputCls}
                    />
                  </Field>
                  <Field
                    label="Low stock alert"
                    hint="Warn me when stock falls below this"
                  >
                    <input
                      type="number"
                      value={lowStock}
                      onChange={(e) => {
                        setLowStock(e.target.value);
                      }}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Category *">
                    <select
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      className={inputCls}
                    >
                      <option value="">Select a category</option>
                      {CATEGORIES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Description">
                  <textarea
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    rows={6}
                    className={inputCls + " resize-none"}
                  />
                </Field>
              </div>
            </SectionCard>

            {/* Product Images */}
            <SectionCard title="Product Images">
              <div className="flex flex-wrap gap-3">
                {images.map((img, i) =>
                  img ? (
                    <div
                      key={i}
                      className="relative w-24 h-24 rounded-xl overflow-hidden border border-gray-200 group"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => {
                          removeImage(i);
                        }}
                        className="absolute top-1 right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition"
                      >
                        <X size={10} className="text-red-500" />
                      </button>
                      {i === 0 && (
                        <span className="absolute bottom-0 left-0 right-0 text-[9px] text-center bg-black/50 text-white py-0.5">
                          Cover
                        </span>
                      )}
                    </div>
                  ) : null,
                )}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-24 h-24 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 hover:border-[#5D5FEF] hover:text-[#5D5FEF] transition"
                >
                  <Plus size={22} />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              <p className="text-[11px] text-[#9899A3] mt-3">
                First image is used as the cover. Drag to reorder. JPG, PNG ·
                Max 5MB each.
              </p>
            </SectionCard>

            {/* Specifications */}
            <SectionCard title="Specifications">
              <p className="text-[11px] text-[#9899A3] -mt-3 mb-4">
                Shown as a table on your product page
              </p>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-3 mb-1">
                  <span className="text-[11px] font-semibold text-[#9899A3] uppercase tracking-wide">
                    Attribute
                  </span>
                  <span className="text-[11px] font-semibold text-[#9899A3] uppercase tracking-wide">
                    Value
                  </span>
                </div>
                {attributes.map((attr) => (
                  <div
                    key={attr.id}
                    className="grid grid-cols-2 gap-3 items-center"
                  >
                    <input
                      type="text"
                      value={attr.attribute}
                      onChange={(e) => {
                        updateAttribute(attr.id, "attribute", e.target.value);
                      }}
                      className={inputCls}
                    />
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={attr.value}
                        onChange={(e) => {
                          updateAttribute(attr.id, "value", e.target.value);
                        }}
                        className={inputCls}
                      />
                      <button
                        onClick={() => {
                          removeAttribute(attr.id);
                        }}
                        className="text-gray-300 hover:text-red-400 transition shrink-0"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addAttribute}
                  className="w-full mt-2 py-2 border border-dashed border-gray-200 rounded-lg text-[13px] text-[#5D5FEF] hover:bg-[#EFEFFD] transition flex items-center justify-center gap-1.5"
                >
                  <Plus size={13} /> Add attribute
                </button>
              </div>
            </SectionCard>

            {/* Variants */}
            <SectionCard title="Variants">
              <p className="text-[11px] text-[#9899A3] -mt-3 mb-4">
                Size, colour, or other options
              </p>
              <label className="flex items-center gap-3 cursor-pointer">
                <button
                  type="button"
                  onClick={() => {
                    setHasVariants((v) => !v);
                  }}
                  className={`relative w-10 h-5 rounded-full transition-colors ${hasVariants ? "bg-[#5D5FEF]" : "bg-gray-200"}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${hasVariants ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
                <span className="text-[13px] text-[#4C4D60]">
                  This product has multiple variants (size, colour, etc.)
                </span>
              </label>
            </SectionCard>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Visibility */}
            <SectionCard title="Visibility">
              <Field label="Status">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setVisibilityOpen((o) => !o);
                    }}
                    className={`${inputCls} flex items-center justify-between`}
                  >
                    <span>
                      {visibility} —{" "}
                      {visibility === "Live"
                        ? "visible to buyers"
                        : visibility === "Draft"
                          ? "hidden to buyers"
                          : "deactivated"}
                    </span>
                    <span className="text-[#9899A3]">▾</span>
                  </button>
                  {visibilityOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1">
                      {(["Live", "Draft", "Deactivated"] as Visibility[]).map(
                        (v) => (
                          <button
                            key={v}
                            onClick={() => {
                              setVisibility(v);
                              setVisibilityOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
                          >
                            {v} —{" "}
                            {v === "Live"
                              ? "visible to buyers"
                              : v === "Draft"
                                ? "hidden to buyers"
                                : "deactivated"}
                          </button>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </Field>
            </SectionCard>

            {/* Shipping */}
            <SectionCard title="Shipping">
              <div className="space-y-4">
                <Field label="Weight (kg)">
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                    }}
                    placeholder="e.g. 3.5kg"
                    className={inputCls}
                  />
                </Field>
                <Field label="Delivery Method">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setDeliveryOpen((o) => !o);
                      }}
                      className={`${inputCls} flex items-center justify-between`}
                    >
                      <span>{deliveryMethod}</span>
                      <span className="text-[#9899A3]">▾</span>
                    </button>
                    {deliveryOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1">
                        {DELIVERY_METHODS.map((m) => (
                          <button
                            key={m}
                            onClick={() => {
                              setDeliveryMethod(m);
                              setDeliveryOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </Field>
              </div>
            </SectionCard>

            {/* Danger Zone */}
            <div className="bg-white rounded-xl border border-red-100 shadow-sm p-6">
              <h2 className="text-[14px] font-semibold text-red-500 mb-4 flex items-center gap-2">
                <AlertTriangle size={14} /> Danger zone
              </h2>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-2.5 px-3 py-2 text-[13px] text-[#4C4D60] hover:bg-gray-50 rounded-lg transition">
                  <ShieldOff size={14} className="text-[#9899A3]" /> Close
                  Product Sales
                </button>
                <button className="w-full flex items-center gap-2.5 px-3 py-2 text-[13px] text-red-500 hover:bg-red-50 rounded-lg transition">
                  <Trash2 size={14} /> Delete Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
