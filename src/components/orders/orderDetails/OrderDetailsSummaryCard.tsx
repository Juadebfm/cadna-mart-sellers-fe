import { Receipt, Truck, User, CalendarRange } from "lucide-react";

interface Props {
  amount: string;
  courier: string;
  trackingId: string;
  customer: string;
  deliveryDate: string;
}

export default function OrderDetailSummaryCards({
  amount,
  courier,
  trackingId,
  customer,
  deliveryDate,
}: Props) {
  const cards = [
    {
      icon: <Receipt className="h-5 w-5 text-[#5D5FEF]" />,
      iconBg: "bg-[#EFEFFD]",
      label: "Order Total",
      value: amount,
      sub: "Paid with transfer",
      subColor: "text-[#9899A3]",
    },
    {
      icon: <Truck className="h-5 w-5 text-[#0EA5E9]" />,
      iconBg: "bg-[#E0F2FE]",
      label: "Delivery Method",
      value: courier,
      sub: `Tracking: ${trackingId}`,
      subColor: "text-[#8900FF]",
    },
    {
      icon: <User className="h-5 w-5 text-[#8B5CF6]" />,
      iconBg: "bg-[#EDE9FE]",
      label: "Customer",
      value: customer,
      sub: "Verified Buyer",
      subColor: "text-[#9899A3]",
    },
    {
      icon: <CalendarRange className="h-5 w-5 text-[#F59E0B]" />,
      iconBg: "bg-[#FEF3C7]",
      label: "Due In",
      value: deliveryDate,
      sub: "Delivery dispatch",
      subColor: "text-[#9899A3]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-4 flex items-start gap-3 w-full"
        >
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${card.iconBg}`}
          >
            {card.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-gray-400">{card.label}</p>
            <p className="text-[13px] font-semibold text-gray-800 leading-snug truncate">
              {card.value}
            </p>
            <p className={`text-[11px] truncate ${card.subColor}`}>
              {card.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}