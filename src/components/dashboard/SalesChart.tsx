import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", sales: 12000 },
  { day: "Tue", sales: 18000 },
  { day: "Wed", sales: 9000 },
  { day: "Thu", sales: 24000 },
  { day: "Fri", sales: 16000 },
  { day: "Sat", sales: 30000 },
  { day: "Sun", sales: 21000 },
];

//  path helper
function roundedTopPath(
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
): string {
  return [
    `M ${(x + r).toString()} ${y.toString()}`,
    `H ${(x + w - r).toString()}`,
    `Q ${(x + w).toString()} ${y.toString()} ${(x + w).toString()} ${(y + r).toString()}`,
    `V ${(y + h).toString()}`,
    `H ${x.toString()}`,
    `V ${(y + r).toString()}`,
    `Q ${x.toString()} ${y.toString()} ${(x + r).toString()} ${y.toString()}`,
    "Z",
  ].join(" ");
}

// custom bar
interface CustomBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  [key: string]: unknown;
}

function CustomBar(props: CustomBarProps) {
  const x = props.x ?? 0;
  const y = props.y ?? 0;
  const width = props.width ?? 0;
  const height = props.height ?? 0;

  const r = 4;
  const topHeight = Math.min(10, height);

  if (height <= 0) return null;

  return (
    <g style={{ outline: "none" }}>
      {/* Light purple base */}
      <path
        d={roundedTopPath(x, y, width, height, r)}
        fill="#EDE9FE"
        style={{ outline: "none" }}
      />
      {/* Dark purple top cap */}
      <path
        d={roundedTopPath(x, y, width, topHeight, r)}
        fill="#5D5FEF"
        style={{ outline: "none" }}
      />
    </g>
  );
}

// custom tooltip
interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  if (!item) return null;
  return (
    <div className="bg-white border border-gray-100 rounded-lg px-3 py-2 shadow-sm">
      <p className="text-xs text-gray-400 mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-[#5D5FEF]">
        ₦{item.value.toLocaleString()}
      </p>
    </div>
  );
}

// main component
export default function SalesChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <style>{`
        .recharts-surface:focus,
        .recharts-surface *:focus,
        .recharts-wrapper svg:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>

      <h2 className="text-sm font-semibold text-gray-700 mb-4">
        Sales this week
      </h2>

      <div className="select-none">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart
            data={data}
            barSize={32}
            margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
            style={{ outline: "none" }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F3F4F6"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Bar
              dataKey="sales"
              shape={(props) => (
                <CustomBar {...(props as unknown as CustomBarProps)} />
              )}
              isAnimationActive={false}
              style={{ outline: "none" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
