import StatCard from "../ui/StatCard";
import { CircleDollarSign, ReceiptText, Package2, Wallet } from "lucide-react";

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      <StatCard
        label="Total Revenue"
        value="₦482,500"
        subtext="↑ 18% vs last month"
        subtextClassName="text-[#00AB72] font-semibold"
        icon={<CircleDollarSign size={18} className="text-[#00AB72]" />}
        iconBg="bg-[#E6F8F2]"
      />

      <StatCard
        label="Orders"
        value="143"
        subtext="5 pending action"
        subtextClassName="text-[#8900FF] font-medium"
        icon={<ReceiptText size={18} className="text-[#5D5FEF]" />}
        iconBg="bg-[#EFEFFD]"
      />

      <StatCard
        label="Products"
        value="38"
        subtext="All saved as drafts"
        subtextClassName="text-[#9899A3]"
        icon={<Package2 size={18} className="text-[#4C4D60]" />}
        iconBg="bg-[#F3F3F6]"
      />

      <StatCard
        label="Wallet Balance"
        value="₦58,400"
        subtext="⚠ Hold — KYC pending"
        subtextClassName="text-[#8900FF] font-medium"
        icon={<Wallet size={18} className="text-[#8900FF]" />}
        iconBg="bg-[#FAF5FF]"
      />

    </div>
  );
}