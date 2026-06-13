import { useState } from "react";
import { X, Plus } from "lucide-react";

const ALL_CATEGORIES = [
  "Beauty",
  "Home & Living",
  "Groceries",
  "Fashion",
  "Electronics",
  "Gadgets",
];

const CATEGORY_COLOURS: Record<string, string> = {
  Beauty: "bg-pink-100 text-pink-600 border-pink-200",
  "Home & Living": "bg-green-100 text-green-600 border-green-200",
  Groceries: "bg-orange-100 text-orange-600 border-orange-200",
  Fashion: "bg-purple-100 text-purple-600 border-purple-200",
  Electronics: "bg-blue-100 text-blue-600 border-blue-200",
  Gadgets: "bg-yellow-100 text-yellow-600 border-yellow-200",
};

export default function StorefrontCategories() {
  const [selected, setSelected] = useState([
    "Beauty",
    "Groceries",
    "Home & Living",
    "Fashion",
  ]);
  const [showModal, setShowModal] = useState(false);
  const [draft, setDraft] = useState<string[]>([]);

  const openModal = () => {
    setDraft([...selected]);
    setShowModal(true);
  };

  const toggleDraft = (cat: string) => {
    setDraft((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const handleSave = () => {
    setSelected(draft);
    setShowModal(false);
  };

  const handleRemove = (cat: string) => {
    setSelected((prev) => prev.filter((c) => c !== cat));
  };

  return (
    <div>
      <p className="text-[18px] font-semibold text-[#5D5FEF] mb-3 pb-2 border-b border-[#E5E7EB]">
        Categories
      </p>

      {/* Selected pills */}
      <div className="flex flex-wrap gap-2">
        {selected.map((cat) => (
          <div
            key={cat}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium border ${
              CATEGORY_COLOURS[cat] ??
              "bg-gray-100 text-gray-600 border-gray-200"
            }`}
          >
            {cat}
            <button
              onClick={() => {
                handleRemove(cat);
              }}
            >
              <X size={11} />
            </button>
          </div>
        ))}

        {/* Add Category button */}
        <button
          onClick={openModal}
          className="flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-medium bg-[#5D5FEF] text-white hover:bg-[#4B4DD6] transition"
        >
          <Plus size={11} /> Add Category
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] px-6 py-5 w-90 shadow-xl">
            {/* Modal header */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-[15px] font-semibold text-[#4C4D60]">
                Add Category
              </p>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <X size={16} className="text-[#9899A3]" />
              </button>
            </div>

            {/* Category checkboxes */}
            <div className="flex flex-wrap gap-2 mb-5">
              {ALL_CATEGORIES.map((cat) => {
                const isSelected = draft.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      toggleDraft(cat);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition ${
                      isSelected
                        ? (CATEGORY_COLOURS[cat] ??
                          "bg-[#EFEFFD] text-[#5D5FEF] border-[#5D5FEF]")
                        : "bg-white text-[#4C4D60] border-[#E5E7EB] hover:border-[#5D5FEF]"
                    }`}
                  >
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-current" />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleSave}
              className="w-full py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
