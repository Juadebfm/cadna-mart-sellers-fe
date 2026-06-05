import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const MOCK_DATA = [
  { month: "Nov", sales: 4 },
  { month: "Dec", sales: 7 },
  { month: "Jan", sales: 6 },
  { month: "Feb", sales: 9 },
  { month: "Mar", sales: 11 },
  { month: "Apr", sales: 10 },
];

interface Props {
  totalSold: number;
  growthPercent: number;
}

export default function ViewSalesChart({ totalSold, growthPercent }: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-4 sm:px-5 sm:py-5">
      {/* ── Suppress all recharts focus outlines ── */}
      <style>{`
        .recharts-wrapper,
        .recharts-wrapper *,
        .recharts-surface {
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-col gap-3 mb-5 border-b border-[#E5E7EB] pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-[18px] font-semibold text-[#5D5FEF] whitespace-nowrap">
            Sales performance
          </h2>

          <div className="flex flex-col sm:flex-col md:flex-row items-stretch md:items-center gap-2">
            <select className="w-full md:w-auto px-3 py-2 md:py-1.5 text-[12px] border border-gray-200 rounded-lg bg-white text-gray-500 focus:outline-none">
              <option>All Statuses</option>
              <option>Live</option>
              <option>Draft</option>
            </select>
            <select className="w-full md:w-auto px-3 py-2 md:py-1.5 text-[12px] border border-gray-200 rounded-lg bg-white text-gray-500 focus:outline-none">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>
            </select>
            <button className="w-full md:w-auto flex items-center justify-center gap-1.5 px-4 py-2 md:py-1.5 rounded-lg bg-[#8900FF] text-white text-[12px] font-medium">
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
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-40 sm:h-45">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={MOCK_DATA}
            barSize={52}
            barCategoryGap="25%"
            tabIndex={-1}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9899A3" }}
            />
            <YAxis hide />
            <Tooltip
              cursor={false}
              contentStyle={{
                border: "1px solid #E5E7EB",
                borderRadius: 8,
                fontSize: 12,
                outline: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
              wrapperStyle={{ outline: "none", border: "none" }}
            />
            <Bar
              dataKey="sales"
              radius={[6, 6, 0, 0]}
              tabIndex={-1}
              fill="#5D5FEF"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
        <p className="text-[12px] text-[#9899A3]">
          {totalSold} units sold all time ·
        </p>
        <span className="text-[12px] text-[#00AB72] font-semibold">
          ↑ {growthPercent}% vs last month
        </span>
      </div>
    </div>
  );
}
