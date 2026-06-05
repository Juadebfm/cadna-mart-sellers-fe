import { ExternalLink, Copy, MessageSquare, Ban, Trash2 } from "lucide-react";

interface Props {
  productId: string;
  onDeactivate: () => void;
  onDelete: () => void;
}

export default function ViewActions({
  productId,
  onDeactivate,
  onDelete,
}: Props) {
  const actions = [
    {
      label: "View Product Link",
      icon: <ExternalLink className="h-4.5 w-4.5 text-[#9899A3]" />,
      onClick: () => window.open(`/product/${productId}`, "_blank"),
      danger: false,
    },
    {
      label: "Duplicate Product",
      icon: <Copy className="h-4.5 w-4.5 text-[#9899A3]" />,
      onClick: () => {
        console.log("Duplicate");
      },
      danger: false,
    },
    {
      label: "Reviews & ratings",
      icon: <MessageSquare className="h-4.5 w-4.5 text-[#9899A3]" />,
      onClick: () => {
        console.log("Reviews");
      },
      danger: false,
    },
    {
      label: "Deactivate Product",
      icon: <Ban className="h-4.5 w-4.5 text-[#9899A3]" />,
      onClick: onDeactivate,
      danger: false,
    },
    {
      label: "Delete Product",
      icon: <Trash2 className="h-4.5 w-4.5 text-[#BA1B1B]" />,
      onClick: onDelete,
      danger: true,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-4 space-y-2">
      {actions.map(({ label, icon, onClick, danger }) => (
        <button
          key={label}
          onClick={onClick}
          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-[15px] text-left transition-colors ${
            danger
              ? "border-[#E5E7EB] text-[#BA1B1B] hover:bg-red-50"
              : "border-[#E5E7EB] text-[#4C4D60] hover:bg-gray-50"
          }`}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
}
