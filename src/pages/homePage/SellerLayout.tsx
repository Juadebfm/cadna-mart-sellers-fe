import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "@/components/homePage/Sidebar";
import TopBar from "@/components/homePage/TopBar";

const PAGE_TITLES: Record<string, string> = {
  "/seller": "Dashboard",
  "/seller/orders": "Orders",
  "/seller/products": "Products",
  "/seller/bulkupload": "Bulk Upload",
  "/seller/storefront": "Storefront",
  "/seller/wallet": "Wallet",
  "/seller/kyc": "KYC Verification",
};

function getPageTitle(pathname: string): string {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];

  // Orders
  if (pathname.startsWith("/seller/orders/")) return "Orders";

  // Products — specific routes first
  if (pathname === "/seller/products/create") return "Create Product";
  if (pathname.match(/^\/seller\/products\/[^/]+\/edit$/)) return "Edit Product";
  if (pathname.match(/^\/seller\/products\/[^/]+\/view$/)) return "View Product";
  if (pathname.startsWith("/seller/products/")) return "Products";

  return "Dashboard";
}

export default function SellerLayout() {
  const { pathname } = useLocation();
  const title = getPageTitle(pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar title={title} />
        <main className="flex-1 overflow-y-auto bg-[#FAFAFF] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}