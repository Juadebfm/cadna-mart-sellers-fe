export type TransactionType = "credit" | "escrow" | "withdrawal" | "refund";
export type TransactionStatus = "Completed" | "Pending" | "Processing" | "Refunded" | "Disputed";

export interface Transaction {
  id: string;
  orderRef: string;
  title: string;
  date: string;
  note: string;
  amount: string;
  amountValue: number;
  type: TransactionType;
  status: TransactionStatus;
}

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    orderRef: "#CM-0038",
    title: "Order #CM-0038 — Cosmetic Bundle",
    date: "Apr 9, 2026",
    note: "Delivered · Payout released",
    amount: "+₦31,500",
    amountValue: 31500,
    type: "credit",
    status: "Completed",
  },
  {
    id: "2",
    orderRef: "#CM-0036",
    title: "Order #CM-0036 — Foam Baby Mattress",
    date: "Apr 7, 2026",
    note: "Delivered · Payout released",
    amount: "+₦18,000",
    amountValue: 18000,
    type: "credit",
    status: "Completed",
  },
  {
    id: "3",
    orderRef: "#CM-0042",
    title: "Order #CM-0042 — Baby Monitor",
    date: "Apr 7, 2026",
    note: "In escrow · Awaiting delivery confirmation",
    amount: "₦52,000",
    amountValue: 52000,
    type: "escrow",
    status: "Pending",
  },
  {
    id: "4",
    orderRef: "",
    title: "Payout to bank account",
    date: "May 30th 2026",
    note: "Bank transfer · 1-2 days",
    amount: "-₦8,750",
    amountValue: 8750,
    type: "withdrawal",
    status: "Completed",
  },
  {
    id: "5",
    orderRef: "",
    title: "Withdrawal fee",
    date: "May 30th 2026",
    note: "Withdrawal fee",
    amount: "-₦50",
    amountValue: 50,
    type: "withdrawal",
    status: "Completed",
  },
  {
    id: "6",
    orderRef: "#CM-0034",
    title: "Order #CM-0034 — Kitchen Utensil Pack",
    date: "June 3, 2026",
    note: "In escrow · Awaiting delivery confirmation",
    amount: "₦14,500",
    amountValue: 14500,
    type: "escrow",
    status: "Pending",
  },
  {
    id: "7",
    orderRef: "#CM-0034",
    title: "Refund — Order #CM-0034",
    date: "June 5, 2026",
    note: "Disputed · Refunded to customer",
    amount: "-₦14,750",
    amountValue: 14750,
    type: "refund",
    status: "Refunded",
  },
];