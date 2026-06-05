export type OrderStatus =
  | "Dispatched"
  | "Packed"
  | "Confirmed"
  | "Delivered"
  | "Processing"
  | "Cancelled";

export interface Order {
  id: string;
  product: string;
  customer: string;
  amount: string;
  status: OrderStatus;
  delivery: string;
  date: string;
}

// ── Order Detail types 

export interface OrderDetailItem {
  name: string;
  image: string;
  qty: number;
  price: string;
}

export interface DeliveryStep {
  label: string;
  description: string;
  date: string;
  time: string;
  done: boolean;
}

export interface OrderDetail {
  id: string;
  status: OrderStatus;
  amount: string;
  courier: string;
  trackingId: string;
  customer: string;
  deliveryDate: string;
  items: OrderDetailItem[];
  subtotal: string;
  delivery: string;
  discount: string;
  totalPaid: string;
  deliveryProgress: DeliveryStep[];
  shippingInfo: {
    customerName: string;
    phone: string;
    address: string;
    courier: string;
    trackingNumber: string;
  };
  payment: {
    method: string;
    status: string;
    date: string;
    transactionId: string;
  };
}