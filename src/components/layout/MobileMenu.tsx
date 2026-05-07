import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Workflow, Tag, HelpCircle, LifeBuoy } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    let firstFrame: number | undefined;
    let secondFrame: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (isOpen) {
      firstFrame = requestAnimationFrame(() => {
        setVisible(true);
        secondFrame = requestAnimationFrame(() => {
          setAnimating(true);
        });
      });
    } else {
      firstFrame = requestAnimationFrame(() => {
        setAnimating(false);
      });
      timer = setTimeout(() => {
        setVisible(false);
      }, 300);
    }

    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame !== undefined) cancelAnimationFrame(secondFrame);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!visible) return null;

  const navItems = [
    { to: "#hero", label: "How it works", icon: Workflow },
    { to: "#pricing", label: "Pricing", icon: Tag },
    { to: "#faqs", label: "FAQs", icon: HelpCircle },
    { to: "#support", label: "Support", icon: LifeBuoy },
  ];

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          animating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          animating ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4 border-b border-gray-100">
          <span className="font-semibold text-lg text-gray-900">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-4 py-4 gap-1 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon }) => (
            <a
              key={to}
              href={to}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              <Icon size={20} />
              {label}
            </a>
          ))}
        </nav>

        {/* CTAs — sit immediately under the nav list */}
        <div className="shrink-0 px-6 py-5 border-t border-gray-100 flex flex-col gap-3">
          <Link
            to="/signup"
            onClick={onClose}
            className="flex items-center justify-center w-full h-[48px] rounded-[8px] border border-[#D7D7DB] bg-white text-[16px] font-normal text-[#4C4D60] hover:bg-[#D7D7DB]/10 transition"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            onClick={onClose}
            className="flex items-center justify-center w-full h-[48px] rounded-[8px] bg-gradient-to-r from-[#5B5BD6] to-[#7B61FF] text-[16px] font-normal text-white hover:opacity-90 transition"
          >
            Start Selling
          </Link>
        </div>
      </div>
    </div>
  );
}
