import { Plus, Upload, ClipboardList, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ActionItem {
  label: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  primary?: boolean;
  path: string;
}

const actions: ActionItem[] = [
  {
    label: "Add product",
    icon: Plus,
    iconBg: "bg-[#8900FF]",
    iconColor: "text-white",
    primary: true,
    path: "/seller/products/create",
  },
  {
    label: "Bulk upload",
    icon: Upload,
    iconBg: "bg-[#F3E6FF]",
    iconColor: "text-[#8900FF]",
    path: "/seller/bulkupload",
  },
  {
    label: "View orders",
    icon: ClipboardList,
    iconBg: "bg-[#F3E6FF]",
    iconColor: "text-[#8900FF]",
    path: "/seller/orders",
  },
  {
    label: "Complete KYC",
    icon: ShieldCheck,
    iconBg: "bg-[#F3E6FF]",
    iconColor: "text-[#8900FF]",
    path: "/seller/kyc",
  },
];

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 h-full">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">
        Quick actions
      </h2>

      <div className="border-t border-gray-100 mb-4" />

      <div className="grid grid-cols-2 gap-3">
        {actions.map(({ label, icon: Icon, iconBg, iconColor, path }) => (
          <button
            key={label}
            onClick={() => void navigate(path)}
            className="flex flex-row flex-wrap items-center gap-2 p-3 rounded-xl border border-gray-100 hover:border-[#8900FF] hover:bg-[#FAF5FF] transition-colors text-left w-full"
          >
            <div
              className={[
                "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                iconBg,
              ].join(" ")}
            >
              <Icon size={16} className={iconColor} />
            </div>
            <span className="text-xs font-medium text-gray-700 leading-tight">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
