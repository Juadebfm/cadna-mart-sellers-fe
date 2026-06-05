interface StatCardProps {
  label: string;
  value: string | number;
  valueColor?: string;
}

function StatCard({ label, value, valueColor = "text-[#4C4D60]" }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-4 flex flex-col items-center justify-center text-center">
      <p className={`text-[20px] font-bold ${valueColor}`}>{value}</p>
      <p className="text-[11px] text-[#9899A3] mt-0.5">{label}</p>
    </div>
  );
}

interface Props {
  totalSold: number;
  avgRating: number;
  unitsInStock: number;
}

export default function EditProductStatsRow({
  totalSold,
  avgRating,
  unitsInStock,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <StatCard label="Total sold" value={totalSold} />
      <StatCard
        label="Avg. rating"
        value={avgRating}
        valueColor="text-[#5D5FEF]"
      />
      <StatCard label="Units in stock" value={unitsInStock} />
    </div>
  );
}