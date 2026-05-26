// pages/seller/DashboardPage.tsx
import KYCBanner from "../../components/dashboard/KYCBanner";
import StatsRow from "../../components/dashboard/StateRow";
import SalesChart from "../../components/dashboard/SalesChart";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentOrdersTable from "../../components/dashboard/RecentOrdersTable";
import FilterBar from "@/components/dashboard/FilterBar";

export default function DashboardPage() {

   // Replace this with your actual KYC status if kyc is completed or not
  const kycCompleted = false;
  return (
    <div className="space-y-6">
    <KYCBanner kycCompleted={kycCompleted} />
    <StatsRow kycCompleted={kycCompleted} />
      <FilterBar />  

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      <RecentOrdersTable />
    </div>
  );
}
