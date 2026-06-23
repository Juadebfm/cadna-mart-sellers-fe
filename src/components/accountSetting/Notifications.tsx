import { useState } from "react";

interface NotifItem {
  key: string;
  label: string;
  sub: string;
  on: boolean;
}

export default function Notifications() {
  const [items, setItems] = useState<NotifItem[]>([
    { key: "orders", label: "New orders", sub: "Email & WhatsApp", on: true },
    { key: "payout", label: "Payout released", sub: "Email only", on: true },
    { key: "reviews", label: "Product reviews", sub: "Email only", on: false },
    {
      key: "platform",
      label: "Platform updates & tips",
      sub: "Email only",
      on: true,
    },
  ]);

  const toggle = (key: string) => {
    setItems((prev) =>
      prev.map((item) => (item.key === key ? { ...item, on: !item.on } : item)),
    );
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5 space-y-4">
      <p className="text-[18px] font-semibold text-[#5D5FEF] mb-4 pb-2 border-b border-[#E5E7EB]">Notifications</p>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between gap-3"
          >
            <div>
              <p className="text-[16px] font-medium text-[#4C4D60]">
                {item.label}
              </p>
              <p className="text-[14px] text-[#9899A3]">{item.sub}</p>
            </div>
            <button
              onClick={() => {
                toggle(item.key);
              }}
              className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                item.on ? "bg-[#5D5FEF]" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-0.75 left-0.75 w-4.5 h-4.5 bg-white rounded-full shadow transition-transform duration-200 ${
                  item.on ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 rounded-lg bg-gray-100 text-[#9899A3] text-[13px] font-medium hover:bg-[#EFEFFD] hover:text-[#5D5FEF] transition">
        Save Changes
      </button>
    </div>
  );
}
