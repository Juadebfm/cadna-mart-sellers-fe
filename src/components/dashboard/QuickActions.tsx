import { Plus, Upload, ClipboardList, ShieldCheck } from "lucide-react";

interface ActionItem {
  label: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  primary?: boolean;
}

const actions: ActionItem[] = [
  {
    label: "Add product",
    icon: Plus,
    iconBg: "bg-[#8900FF]",
    iconColor: "text-white",
    primary: true,
  },
  {
    label: "Bulk upload",
    icon: Upload,
    iconBg: "bg-[#F3E6FF]",
    iconColor: "text-[#8900FF]",
  },
  {
    label: "View orders",
    icon: ClipboardList,
    iconBg: "bg-[#F3E6FF]",
    iconColor: "text-[#8900FF]",
  },
  {
    label: "Complete KYC",
    icon: ShieldCheck,
    iconBg: "bg-[#F3E6FF]",
    iconColor: "text-[#8900FF]",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 h-full">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">
        Quick actions
      </h2>

      <div className="border-t border-gray-100 mb-4" />

      <div className="grid grid-cols-2 gap-3">
        {actions.map(({ label, icon: Icon, iconBg, iconColor, primary }) => (
          <button
            key={label}
            className={[
              "flex flex-row flex-wrap items-center gap-2 p-3 rounded-xl border transition-colors text-left w-full",
              primary
                ? "border-[#8900FF] hover:bg-[#FAF5FF]"
                : "border-gray-100 hover:bg-gray-50",
            ].join(" ")}
          >
            {/* Icon box */}
            <div
              className={[
                "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                iconBg,
              ].join(" ")}
            >
              <Icon size={16} className={iconColor} />
            </div>

            {/* Label */}
            <span className="text-xs font-medium text-gray-700 leading-tight">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}