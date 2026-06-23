import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const CATEGORIES = [
  "Orders & delivery",
  "Payout & wallet",
  "Product & listings",
  "KYC verification",
  "Other",
];

interface Props {
  onClose: () => void;
  onSubmit: (ticket: {
    category: string;
    orderId: string;
    subject: string;
    message: string;
  }) => void;
}

export default function SupportTicketModal({ onClose, onSubmit }: Props) {
  const [category, setCategory] = useState("Orders & delivery");
  const [showDropdown, setShowDropdown] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!subject || !message) return;
    onSubmit({ category, orderId, subject, message });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#F3F4F6]">
          <p className="text-[22px] font-medium text-[#4C4D60]">
            Submit a support ticket
          </p>
          <button onClick={onClose}>
            <X size={16} className="text-[#9899A3]" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          {/* Category */}
          <div className="space-y-1.5">
            <label className="text-[16px] text-[#4C4D60] font-medium">
              Category
            </label>
            <div className="relative">
              <button
                onClick={() => {
                  setShowDropdown((v) => !v);
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 text-[13px] border border-[#E5E7EB] rounded-lg bg-white hover:border-[#5D5FEF] transition"
              >
                <span className="text-[#4C4D60]">{category}</span>
                <ChevronDown size={14} className="text-[#9899A3]" />
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-10 overflow-hidden">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCategory(c);
                        setShowDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 text-[13px] hover:bg-[#FAFAFF] transition ${
                        category === c
                          ? "text-[#5D5FEF] font-medium"
                          : "text-[#4C4D60]"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Order ID */}
          <div className="space-y-1.5">
            <label className="text-[16px] text-[#4C4D60] font-medium">
              Order ID{" "}
              <span className="text-[#9899A3] font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={orderId}
              onChange={(e) => {
                setOrderId(e.target.value);
              }}
              placeholder="e.g. #CM-0041"
              className="w-full px-3 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
            />
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label className="text-[16px] text-[#4C4D60] font-medium">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              placeholder="Brief description of your issue"
              className="w-full px-3 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-[16px] text-[#4C4D60] font-medium">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Describe your issue in detail..."
              rows={5}
              className="w-full px-3 py-2.5 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#4C4D60] hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!subject || !message}
              className="flex-1 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
