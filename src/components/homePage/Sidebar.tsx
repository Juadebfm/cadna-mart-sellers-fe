import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/images/homepage/cadnamart-logo.png";
import {
  LayoutDashboard,
  ReceiptText,
  Package2,
  Upload,
  Store,
  Wallet,
  ShieldCheck,
  X,
  User,
  Headphones,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useBreakpoint } from "@/core/hooks/useBreakpoint";

const MENU_LINKS = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/seller" },
  { label: "Orders", icon: ReceiptText, to: "/seller/orders" },
  { label: "Products", icon: Package2, to: "/seller/products" },
  { label: "Bulk Upload", icon: Upload, to: "/seller/bulkupload" },
];

const STORE_LINKS = [
  { label: "Storefront", icon: Store, to: "/seller/storefront" },
  { label: "Wallet", icon: Wallet, to: "/seller/wallet" },
  { label: "KYC Verification", icon: ShieldCheck, to: "/seller/kyc" },
];

const BOTTOM_LINKS = [
  { label: "Account Settings", icon: User, to: "/seller/accountsettings" },
  { label: "Help Center", icon: Headphones, to: "/seller/support" },
];

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  collapsed: boolean;
  onNavigate?: (() => void) | undefined;
}

function NavItem({
  to,
  icon: Icon,
  label,
  collapsed,
  onNavigate,
}: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={to === "/seller"}
      title={collapsed ? label : undefined}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          collapsed ? "justify-center" : "",
          isActive
            ? "bg-[#FAF5FF] text-[#5D5FEF]"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-800",
        ].join(" ")
      }
    >
      <Icon size={18} className="shrink-0" />
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}

type SidebarMode = "desktop" | "tablet" | "mobile";

interface SidebarContentProps {
  mode: SidebarMode;
  onClose?: () => void;
}

function SidebarContent({ mode, onClose }: SidebarContentProps) {
  const collapsed = mode === "tablet";
  const [showBottomLinks, setShowBottomLinks] = useState(false);

  function renderLogoArea() {
    if (mode === "tablet") {
      return (
        <div className="flex justify-center py-5 px-2">
          <img
            src={Logo}
            alt="Cadna Mart"
            className="h-8 w-auto object-contain"
          />
        </div>
      );
    }
    if (mode === "mobile") {
      return (
        <div className="flex items-center justify-between py-5 px-4">
          <img src={Logo} alt="Cadna Mart" className="h-8" />
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-between py-5 px-4">
        <img src={Logo} alt="Cadna Mart" className="h-8" />
        <span className="text-xs font-semibold text-[#8900FF] bg-[#F3E6FF] px-2.5 py-0.5 rounded-sm">
          SELLER
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {renderLogoArea()}

      {/* Main nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        <div>
          {!collapsed && (
            <p className="text-[10px] font-semibold text-[#8900FF] uppercase tracking-widest mb-2 px-3">
              Menu
            </p>
          )}
          <ul className="space-y-1">
            {MENU_LINKS.map((link) => (
              <li key={link.to}>
                <NavItem {...link} collapsed={collapsed} onNavigate={onClose} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          {!collapsed && (
            <p className="text-[10px] font-semibold text-[#8900FF] uppercase tracking-widest mb-2 px-3">
              Store
            </p>
          )}
          <ul className="space-y-1">
            {STORE_LINKS.map((link) => (
              <li key={link.to}>
                <NavItem {...link} collapsed={collapsed} onNavigate={onClose} />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-gray-100 px-3 pt-3 pb-3">
        {/* Account Settings + Help Center — only shown when expanded */}
        {showBottomLinks && !collapsed && (
          <div className="space-y-1 mb-2">
            {BOTTOM_LINKS.map((link) => (
              <NavItem
                key={link.to}
                {...link}
                collapsed={collapsed}
                onNavigate={onClose}
              />
            ))}
          </div>
        )}

        {/* Collapsed tablet mode — always show bottom link icons */}
        {collapsed && (
          <div className="space-y-1 mb-2">
            {BOTTOM_LINKS.map((link) => (
              <NavItem
                key={link.to}
                {...link}
                collapsed={collapsed}
                onNavigate={onClose}
              />
            ))}
          </div>
        )}

        {/* User card — clickable to toggle */}
        <button
          onClick={() => {
            setShowBottomLinks((v) => !v);
          }}
          className={[
            "w-full mt-2 flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white hover:bg-gray-50 transition",
            collapsed ? "justify-center p-2" : "px-3 py-3",
          ].join(" ")}
        >
          <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-semibold shrink-0">
            AO
          </div>
          {!collapsed && (
            <>
              <div className="flex-1 overflow-hidden text-left">
                <p className="text-[13px] font-semibold text-[#4C4D60] truncate">
                  Ada Okafor
                </p>
                <p className="text-[11px] text-[#9899A3] truncate">
                  Ada's Boutique
                </p>
              </div>
              {showBottomLinks ? (
                <ChevronDown size={14} className="text-[#9899A3] shrink-0" />
              ) : (
                <ChevronUp size={14} className="text-[#9899A3] shrink-0" />
              )}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
}

function HamburgerButton({ open, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      className="fixed top-4 left-4 z-40 flex flex-col justify-center items-center w-10 h-10 gap-1 bg-white border border-gray-200 rounded-lg group"
    >
      <span
        className={[
          "block h-[2.5px] bg-gray-700 rounded-full transition-all duration-300",
          open ? "w-6 rotate-45 translate-y-1.5" : "w-6 group-hover:w-5",
        ].join(" ")}
      />
      <span
        className={[
          "block h-[2.5px] bg-gray-700 rounded-full transition-all duration-300",
          open ? "opacity-0 w-6" : "w-4 group-hover:w-6",
        ].join(" ")}
      />
      <span
        className={[
          "block h-[2.5px] bg-gray-700 rounded-full transition-all duration-300",
          open ? "w-6 -rotate-45 translate-y-[-7.5px]" : "w-6 group-hover:w-5",
        ].join(" ")}
      />
    </button>
  );
}

export default function Sidebar() {
  const { isTablet, isDesktop } = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (isDesktop) {
    return (
      <aside className="flex flex-col w-50 h-screen border-r border-gray-200 bg-white shrink-0">
        <SidebarContent mode="desktop" />
      </aside>
    );
  }

  if (isTablet) {
    return (
      <aside className="flex flex-col w-16 h-screen border-r border-gray-200 bg-white shrink-0">
        <SidebarContent mode="tablet" />
      </aside>
    );
  }

  return (
    <>
      <HamburgerButton
        open={drawerOpen}
        onClick={() => {
          setDrawerOpen((o) => !o);
        }}
      />

      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => {
            setDrawerOpen(false);
          }}
          role="presentation"
        />
      )}

      <aside
        className={[
          "fixed top-0 left-0 z-50 h-screen w-50 bg-white border-r border-gray-200",
          "transform transition-transform duration-300",
          drawerOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <SidebarContent
          mode="mobile"
          onClose={() => {
            setDrawerOpen(false);
          }}
        />
      </aside>
    </>
  );
}
