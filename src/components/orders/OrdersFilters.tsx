const STATUS_OPTIONS = [
  "All Statuses",
  "Dispatched",
  "Packed",
  "Confirmed",
  "Delivered",
];

interface Props {
  search: string;
  statusFilter: string;
  onSearch: (v: string) => void;
  onStatusChange: (v: string) => void;
}

export default function OrdersFilters({
  search,
  statusFilter,
  onSearch,
  onStatusChange,
}: Props) {
  return (
    <div className="space-y-2">
      {/* Row 1 — Search + Filter button */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Order ID or product..."
            value={search}
            onChange={(e) => {
              onSearch(e.target.value);
            }}
            className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300"
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors whitespace-nowrap">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="11" y1="18" x2="13" y2="18" />
          </svg>
          Filter
        </button>
      </div>

      {/* Row 2 — Dropdowns */}
      <div className="flex flex-wrap items-center gap-2">
        <select className="flex-1 min-w-[120px] px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-100">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Last 90 Days</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => {
            onStatusChange(e.target.value);
          }}
          className="flex-1 min-w-[120px] px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-100"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
