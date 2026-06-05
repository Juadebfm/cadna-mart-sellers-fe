import { ArrowLeft, Copy, Printer } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  orderId: string;
}

export default function OrderDetailTopBar({ orderId }: Props) {
  const navigate = useNavigate();

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderId).catch((err: unknown) => {
      console.error("Failed to copy:", err);
    });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      
      {/* Left — Back + Order ID */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => { void navigate(-1); }}
          className="flex items-center gap-1.5 text-[14px] text-[#4C4D60] hover:text-gray-800 transition border border-[#E5E7EB] rounded-md py-2 px-4 shrink-0"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <h1 className="text-[18px] sm:text-[20px] font-semibold text-[#5D5FEF] truncate">
          {orderId}
        </h1>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-2 sm:shrink-0">
        <button
          onClick={handleCopyOrderId}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] text-[#4C4D60] hover:bg-gray-100 transition"
        >
          <Copy className="h-3.5 w-3.5 shrink-0" />
          Copy Order ID
        </button>
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#5D5FEF] text-[12px] text-[#5D5FEF] hover:bg-gray-100 transition">
          <Printer className="h-3.5 w-3.5 shrink-0" />
          Print Invoice
        </button>
      </div>
    </div>
  );
}