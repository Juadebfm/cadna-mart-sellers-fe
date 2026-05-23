// components/homePage/Sidebar.tsx
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
} from "lucide-react";
import { useBreakpoint } from "@/core/hooks/useBreakpoint";

const MENU_LINKS = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/seller" },
  { label: "Orders", icon: ReceiptText, to: "/seller/orders" },
  { label: "Products", icon: Package2, to: "/seller/products" },
  { label: "Bulk Upload", icon: Upload, to: "/seller/bulk-upload" },
];

const STORE_LINKS = [
  { label: "Storefront", icon: Store, to: "/seller/storefront" },
  { label: "Wallet", icon: Wallet, to: "/seller/wallet" },
  { label: "KYC Verification", icon: ShieldCheck, to: "/seller/kyc" },
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

  function renderLogoArea() {
    // Tablet — logo only, centered, no badge, no X
    if (mode === "tablet") {
      return (
        <div className="flex justify-center py-5 px-2 ">
          <img
            src={Logo}
            alt="Cadna Mart"
            className="h-8 w-auto object-contain"
          />
        </div>
      );
    }

    // Mobile drawer — logo + X, no badge
    if (mode === "mobile") {
      return (
        <div className="flex items-center justify-between py-5 px-4 ">
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

    // Desktop — logo + SELLER badge, spaced apart
    return (
      <div className="flex items-center justify-between py-5 px-4 ">
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

      {/* Nav links */}
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

      {/* User profile */}
      <div
        className={[
          "border-t border-gray-100 py-4 flex items-center gap-3",
          collapsed ? "justify-center px-2" : "px-4",
        ].join(" ")}
      >
        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-semibold shrink-0">
          AO
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-gray-800 truncate">
              Ada Okafor
            </p>
            <p className="text-xs text-gray-400 truncate">Ada's Boutique</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── animated hamburger ───────────────────────────────────────
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

// ── main export ──────────────────────────────────────────────
export default function Sidebar() {
  const { isTablet, isDesktop } = useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

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
