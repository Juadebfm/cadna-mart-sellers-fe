// components/layout/TopBar.tsx
import { Bell } from 'lucide-react'
import { useBreakpoint } from '@/core/hooks/useBreakpoint'

interface TopBarProps {
  title?: string
}

export default function TopBar({ title = 'Dashboard' }: TopBarProps) {
  const { isMobile } = useBreakpoint()

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">

      {/* Left — page title (offset on mobile to clear hamburger button) */}
      <h1
        className={[
          'text-lg font-semibold text-gray-800',
          isMobile ? 'ml-10' : '',
        ].join(' ')}
      >
        {title}
      </h1>

      {/* Right — actions */}
      <div className="flex items-center gap-3">

        {/* Bulk Upload */}
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          Bulk Upload
        </button>

        {/* Add Product */}
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#5D5FEF] rounded-lg hover:bg-indigo-700 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          {!isMobile && <span>Add Product</span>}
        </button>

        {/* Notification bell */}
        <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} />
          {/* Red dot */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

      </div>
    </header>
  )
}