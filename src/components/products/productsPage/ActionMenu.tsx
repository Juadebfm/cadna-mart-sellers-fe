import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import PublicLinkModal from "@/components/products/modals/PublicLinkModal";
import CloseProductSalesModal from "@/components/products/modals/CloseProductSalesModal";
import DeactivateProductModal from "@/components/products/modals/DeactivateProductModal";
import DeleteProductModal from "@/components/products/modals/DeleteProductModal";

type ModalType = "link" | "close-sales" | "deactivate" | "delete" | null;

const ACTIONS = [
  { label: "View Product", danger: false },
  { label: "Edit Product", danger: false },
  { label: "Duplicate Product", danger: false },
  { label: "View Public Link", danger: false },
  { label: "Reviews & Ratings", danger: false },
  { label: "Close Product Sales", danger: false },
  { label: "Deactivate Product", danger: false },
  { label: "Delete Product", danger: true },
];

export default function ActionMenu({
  productId,
  productName = "This Product",
  productStatus = "Live",
}: {
  productId: string;
  productName?: string;
  productStatus?: "Live" | "Draft";
}) {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<ModalType>(null);
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
      void navigate(`/seller/products/${productId}/view`);
    if (label === "Edit Product")
      void navigate(`/seller/products/${productId}/edit`);
    if (label === "Duplicate Product")
      void navigate(`/seller/products/${productId}/duplicate`);
    if (label === "View Public Link") setModal("link");
    if (label === "Close Product Sales") setModal("close-sales");
    if (label === "Deactivate Product") setModal("deactivate");
    if (label === "Delete Product") setModal("delete");
    if (label === "Reviews & Ratings")
      void navigate(`/seller/products/${productId}/reviews`);
  }

  const slug = productName.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <div className="relative" ref={ref}>
        <button
          onClick={() => {
            setOpen((o) => !o);
          }}
          className="p-1.5 text-gray-300 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <MoreVertical size={16} />
        </button>

        {open && (
          <div className="absolute right-0 z-50 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1">
            {ACTIONS.map(({ label, danger }) => (
              <button
                key={label}
                onClick={() => {
                  handleAction(label);
                }}
                className={`w-full flex items-center gap-2.5 px-4 py-2 text-[13px] text-left transition-colors ${
                  danger
                    ? "text-red-500 hover:bg-red-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      {modal === "link" && (
        <PublicLinkModal
          productName={productName}
          productSlug={slug}
          status={productStatus}
          onClose={() => {
            setModal(null);
          }}
        />
      )}
      {modal === "close-sales" && (
        <CloseProductSalesModal
          productName={productName}
          onClose={() => {
            setModal(null);
          }}
          onConfirm={() => {
            setModal(null);
          }}
        />
      )}
      {modal === "deactivate" && (
        <DeactivateProductModal
          productName={productName}
          onClose={() => {
            setModal(null);
          }}
          onConfirm={() => {
            setModal(null);
          }}
        />
      )}
      {modal === "delete" && (
        <DeleteProductModal
          productName={productName}
          onClose={() => {
            setModal(null);
          }}
          onConfirm={() => {
            setModal(null);
          }}
        />
      )}
    </>
  );
}
