import { Plus, Ticket } from "lucide-react";

interface Ticket {
  id: string;
  title: string;
  date: string;
  status: "In review" | "Resolved" | "Open";
}

const STATUS_STYLES: Record<Ticket["status"], string> = {
  "In review": "bg-orange-50 text-orange-500 border border-orange-200",
  Resolved: "bg-[#E6F8F2] text-[#00AB72] border border-green-200",
  Open: "bg-[#EFEFFD] text-[#5D5FEF] border border-purple-200",
};

interface Props {
  tickets: Ticket[];
  onNewTicket: () => void;
}

export default function SupportTickets({ tickets, onNewTicket }: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3 border-[#E5E7EB]">
        <p className="text-[18px] font-semibold text-[#5D5FEF]">My Tickets</p>
        <button
          onClick={onNewTicket}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] text-[12px] text-[#4C4D60] hover:bg-gray-50 transition"
        >
          <Plus size={13} />
          New Ticket
        </button>
      </div>

      {tickets.length === 0 ? (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-8 gap-3">
          <div className="w-12 h-12 rounded-full bg-[#EFEFFD] flex items-center justify-center">
            <Ticket size={24} className="text-[#5D5FEF]" />
          </div>
          <p className="text-[16px] text-[#4C4D60] font-medium ">No tickets to display!</p>
        </div>
      ) : (
        /* Ticket rows */
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-center justify-between gap-3 py-3 bg-[#FAFAFF] border border-[#E5E7EB] px-5 rounded-lg"
            >
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-[#4C4D60] truncate">
                  {ticket.title}
                </p>
                <p className="text-[11px] text-[#9899A3] mt-0.5">
                  Opened {ticket.date}
                </p>
              </div>
              <span
                className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium ${
                  STATUS_STYLES[ticket.status]
                }`}
              >
                • {ticket.status}
              </span>
            </div>
          ))}

          <p className="text-[12px] text-[#9899A3] text-center pt-1">
            {tickets.length} ticket{tickets.length !== 1 ? "s" : ""} in total
          </p>
        </div>
      )}
    </div>
  );
}