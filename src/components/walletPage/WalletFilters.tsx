import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const TYPES = ["All Types", "Credits", "Withdrawals", "Escrows", "Refunds"];
const STATUSES = [
  "All Statuses",
  "Completed",
  "Pending",
  "Processing",
  "Refunded",
];

interface Props {
  search: string;
  onSearch: (v: string) => void;
  typeFilter: string;
  onTypeChange: (v: string) => void;
  statusFilter: string;
  onStatusChange: (v: string) => void;
}

export default function WalletFilters({
  search,
  onSearch,
  typeFilter,
  onTypeChange,
  statusFilter,
  onStatusChange,
}: Props) {
  const [openType, setOpenType] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
      {/* Search */}
      <input
        type="text"
        placeholder="Search transaction"
        value={search}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        className="flex-1 px-4 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
      />

      {/* Type dropdown */}
      <div className="relative">
        <button
          onClick={() => {
            setOpenType((v) => !v);
            setOpenStatus(false);
          }}
          className="flex items-center justify-between gap-2 w-full sm:w-35 px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg bg-white text-[#4C4D60] hover:border-[#5D5FEF] transition"
        >
          {typeFilter}
          <ChevronDown size={14} className="text-[#9899A3]" />
        </button>
        {openType && (
          <div className="absolute top-full left-0 mt-1 w-full sm:w-35 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-10 overflow-hidden">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => {
                  onTypeChange(t);
                  setOpenType(false);
                }}
                className={`w-full text-left px-3 py-2 text-[13px] hover:bg-[#FAFAFF] transition ${
                  typeFilter === t
                    ? "text-[#5D5FEF] font-medium"
                    : "text-[#4C4D60]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Status dropdown */}
      <div className="relative">
        <button
          onClick={() => {
            setOpenStatus((v) => !v);
            setOpenType(false);
          }}
          className="flex items-center justify-between gap-2 w-full sm:w-35 px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg bg-white text-[#4C4D60] hover:border-[#5D5FEF] transition"
        >
          {statusFilter}
          <ChevronDown size={14} className="text-[#9899A3]" />
        </button>
        {openStatus && (
          <div className="absolute top-full left-0 mt-1 w-full sm:w-35 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-10 overflow-hidden">
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => {
                  onStatusChange(s);
                  setOpenStatus(false);
                }}
                className={`w-full text-left px-3 py-2 text-[13px] hover:bg-[#FAFAFF] transition ${
                  statusFilter === s
                    ? "text-[#5D5FEF] font-medium"
                    : "text-[#4C4D60]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter button */}
      <button className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-[#5D5FEF] text-[#5D5FEF] text-[13px] font-medium hover:bg-[#FAFAFF] transition">
        <SlidersHorizontal size={13} />
        Filter
      </button>
    </div>
  );
}
