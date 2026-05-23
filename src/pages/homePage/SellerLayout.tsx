import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '@/components/homePage/Sidebar'
import TopBar from '@/components/homePage/TopBar'

// Map routes to page titles
const PAGE_TITLES: Record<string, string> = {
  '/seller':              'Dashboard',
  '/seller/orders':       'Orders',
  '/seller/products':     'Products',
  '/seller/bulk-upload':  'Bulk Upload',
  '/seller/storefront':   'Storefront',
  '/seller/wallet':       'Wallet',
  '/seller/kyc':          'KYC Verification',
}

export default function SellerLayout() {
  const { pathname } = useLocation()
  const title = PAGE_TITLES[pathname] ?? 'Dashboard'

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
  )
}