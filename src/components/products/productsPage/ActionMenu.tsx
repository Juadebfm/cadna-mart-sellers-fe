import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ACTIONS = [
  { label: "View Product", icon: "👁", danger: false },
  { label: "Edit Product", icon: "✏️", danger: false },
  { label: "Duplicate Product", icon: "📋", danger: false },
  { label: "View Public Link", icon: "🔗", danger: false },
  { label: "Reviews & Ratings", icon: "⭐", danger: false },
  { label: "Close Product Sales", icon: "🚫", danger: false },
  { label: "Deactivate Product", icon: "⏸", danger: false },
  { label: "Delete Product", icon: "🗑", danger: true },
];

export default function ActionMenu({ productId }: { productId: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  function handleAction(label: string) {
    setOpen(false);
    if (label === "View Product")
      void navigate(`/seller/products/${productId}`);
    if (label === "Edit Product")
      void navigate(`/seller/products/${productId}/edit`);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => {
          setOpen((o) => !o);
        }}
        className="p-1.5 text-gray-300 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1">
          {ACTIONS.map(({ label, icon, danger }) => (
            <button
              key={label}
              onClick={() => {
                handleAction(label);
              }}
              className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs text-left transition-colors ${
                danger
                  ? "text-red-500 hover:bg-red-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
