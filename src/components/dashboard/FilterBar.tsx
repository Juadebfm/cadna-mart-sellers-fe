import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const STATUS_OPTIONS = ["All Statuses", "Dispatched", "Packed", "Confirmed", "Delivered"];
const DATE_OPTIONS = ["Last 30 Days", "Last 7 Days", "Last 14 Days", "Last 90 Days"];

export default function FilterBar() {
  const [status, setStatus] = useState("All Statuses");
  const [date, setDate] = useState("Last 30 Days");

  return (
    <div className="bg-white border border-gray-100 rounded-xl px-4 py-3">

      {/* Mobile  */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">

        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">

          {/* All Statuses */}
          <div className="relative flex-1">
            <select
              value={status}
              onChange={(e) => { setStatus(e.target.value) }}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-100 cursor-pointer"
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Last 30 Days */}
          <div className="relative flex-1">
            <select
              value={date}
              onChange={(e) => { setDate(e.target.value) }}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-100 cursor-pointer"
            >
              {DATE_OPTIONS.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

        </div>

        {/* Filter button */}
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <SlidersHorizontal size={15} className="text-gray-400" />
          Filter
        </button>

      </div>

    </div>
  );
}