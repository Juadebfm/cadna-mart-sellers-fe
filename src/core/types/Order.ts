export type OrderStatus = "Dispatched" | "Packed" | "Confirmed" | "Delivered";

export interface Order {
  id: string;
  product: string;
  customer: string;
  amount: string;
  status: OrderStatus;
  delivery: string;
  date: string;
}