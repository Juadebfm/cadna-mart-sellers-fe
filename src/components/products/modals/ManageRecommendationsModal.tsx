import { useState } from "react";
import { X, Search } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  status: "Live" | "Draft" | "Deactivated" | "Sale closed" | "Out of stock";
  image?: string;
}

const STATUS_STYLES: Record<Product["status"], string> = {
  Live: "bg-[#E6F8F2] text-[#00AB72]",
  Draft: "bg-gray-100 text-gray-500",
  Deactivated: "bg-orange-50 text-orange-500",
  "Sale closed": "bg-red-50 text-red-500",
  "Out of stock": "bg-yellow-50 text-yellow-600",
};

const CATALOGUE: Product[] = [
  {
    id: "1",
    name: 'Lenovo 27" FHD All-in-One Monitor',
    price: "₦285,000",
    status: "Live",
  },
  {
    id: "2",
    name: 'HP 24" Windows 11 LED Monitor',
    price: "₦145,000",
    status: "Live",
  },
  {
    id: "3",
    name: "EAGEAT Bluetooth RGB Wireless Mouse",
    price: "₦8,500",
    status: "Live",
  },
  {
    id: "4",
    name: "EAGEAT Bluetooth RGB Wireless Mouse",
    price: "₦8,500",
    status: "Deactivated",
  },
  {
    id: "5",
    name: "EAGEAT Bluetooth RGB Wireless Mouse",
    price: "₦8,500",
    status: "Draft",
  },
  {
    id: "6",
    name: "EAGEAT Bluetooth RGB Wireless Mouse",
    price: "₦8,500",
    status: "Live",
  },
  {
    id: "7",
    name: "EAGEAT Bluetooth RGB Wireless Mouse",
    price: "₦8,500",
    status: "Sale closed",
  },
  {
    id: "8",
    name: "EAGEAT Bluetooth RGB Wireless Mouse",
    price: "₦8,500",
    status: "Out of stock",
  },
];

const MAX = 4;

interface Props {
  onClose: () => void;
  onSave: (selected: Product[]) => void;
  initial?: Product[];
}

export default function ManageRecommendationsModal({
  onClose,
  onSave,
  initial = [],
}: Props) {
  const [selected, setSelected] = useState<Product[]>(initial.slice(0, MAX));
  const [search, setSearch] = useState("");

  const toggle = (product: Product) => {
    setSelected((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      if (prev.length >= MAX) return prev;
      return [...prev, product];
    });
  };

  const isSelected = (id: string) => selected.some((p) => p.id === id);
  const atMax = selected.length >= MAX;

  const filtered = CATALOGUE.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#F3F4F6]">
          <p className="text-[15px] font-semibold text-[#4C4D60]">
            Manage Recommendations
          </p>
          <button onClick={onClose}>
            <X size={16} className="text-[#9899A3]" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
          {/* Currently recommended */}
          {selected.length > 0 && (
            <div>
              <p className="text-[11px] text-[#9899A3] uppercase tracking-wider mb-2">
                Currently recommended ({selected.length}/{MAX})
              </p>
              <div className="space-y-2">
                {selected.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-3 py-2 border-b border-[#F3F4F6]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F3F3F8] shrink-0 flex items-center justify-center">
                      <span className="text-[10px] text-[#9899A3]">IMG</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[#4C4D60] truncate">
                        {p.name}
                      </p>
                      <p className="text-[12px] text-[#5D5FEF]">{p.price}</p>
                    </div>
                    <button
                      onClick={() => {
                        toggle(p);
                      }}
                    >
                      <X
                        size={14}
                        className="text-red-400 hover:text-red-600 transition"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Max warning */}
          {atMax && (
            <div className="px-4 py-2.5 rounded-lg border border-[#CDCDFA] bg-[#FAFAFF]">
              <p className="text-[12px] text-[#5D5FEF]">
                Maximum of {MAX} recommendations reached. Remove one to add
                another.
              </p>
            </div>
          )}

          {/* Search catalogue */}
          <div>
            <p className="text-[11px] text-[#9899A3] uppercase tracking-wider mb-2">
              Add from your catalogue
            </p>
            <div className="relative mb-3">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9899A3]"
              />
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search Products by Name or SKU"
                className="w-full pl-9 pr-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
              />
            </div>

            <div className="space-y-1">
              {filtered.map((product) => {
                const checked = isSelected(product.id);
                const disabled = atMax && !checked;
                return (
                  <label
                    key={product.id}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition ${
                      disabled
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-[#FAFAFF]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={disabled}
                      onChange={() => {
                        toggle(product);
                      }}
                      className="accent-[#5D5FEF] w-4 h-4 shrink-0"
                    />
                    <div className="w-10 h-10 rounded-lg bg-[#F3F3F8] shrink-0 flex items-center justify-center">
                      <span className="text-[10px] text-[#9899A3]">IMG</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[#4C4D60] truncate">
                        {product.name}
                      </p>
                      <p className="text-[12px] text-[#5D5FEF]">
                        {product.price}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium ${STATUS_STYLES[product.status]}`}
                    >
                      • {product.status}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-5 py-4 border-t border-[#F3F4F6]">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
          >
            Close
          </button>
          <button
            onClick={() => {
              onSave(selected);
              onClose();
            }}
            className="flex-1 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition"
          >
            Save Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}
