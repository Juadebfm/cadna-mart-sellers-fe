import { useState } from "react";
import SupportChannels from "@/components/support/SupportChannels";
import SupportFAQ from "@/components/support/SupportFAQ";
import SupportHours from "@/components/support/SupportHours";
import SupportTickets from "@/components/support/SupportTickets";
import SupportTicketModal from "@/components/support/SupportTicketModal";

interface Ticket {
  id: string;
  title: string;
  date: string;
  status: "In review" | "Resolved" | "Open";
}

const MOCK_TICKETS: Ticket[] = [
  {
    id: "1",
    title: "Order #CM-0034 — refund query",
    date: "Apr 5, 2026",
    status: "In review",
  },
  {
    id: "2",
    title: "Order #CM-0034 — refund query",
    date: "Apr 5, 2026",
    status: "Resolved",
  },
];

export default function SupportPage() {
  const [showModal, setShowModal] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>(MOCK_TICKETS);

  const handleSubmit = (data: {
    category: string;
    orderId: string;
    subject: string;
    message: string;
  }) => {
    const newTicket: Ticket = {
      id: String(Date.now()),
      title: data.subject,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      status: "Open",
    };
    setTickets((prev) => [newTicket, ...prev]);
  };

  return (
    <div className="space-y-5">
      {/* Contact channels */}
      <SupportChannels
        onOpenTicket={() => {
          setShowModal(true);
        }}
      />

      {/* FAQ */}
      <SupportFAQ />

      {/* Bottom two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        <SupportHours />
        <SupportTickets
          tickets={tickets}
          onNewTicket={() => {
            setShowModal(true);
          }}
        />
      </div>

      {/* Submit ticket modal */}
      {showModal && (
        <SupportTicketModal
          onClose={() => {
            setShowModal(false);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
