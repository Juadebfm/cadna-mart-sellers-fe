import { useParams, Link } from "react-router-dom";
import { MOCK_ORDERS } from "@/core/data/MockOrder";
import OrderDetailTopBar from "@/components/orders/orderDetails/OrderDetailsTopBar";
import OrderDetailStatusBar from "@/components/orders/orderDetails/OrderDetailsStatusBar";
import OrderDetailSummaryCards from "@/components/orders/orderDetails/OrderDetailsSummaryCard";
import OrderDetailItems from "@/components/orders/orderDetails/OrderDetailsItems";
import OrderDetailDeliveryProgress from "@/components/orders/orderDetails/OrderDetailsDeliveryProgess";
import OrderDetailShipping from "@/components/orders/orderDetails/OrderDetailsShipping";
import OrderDetailPayment from "@/components/orders/orderDetails/OrderDetailsPayment";

function OrderNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <p className="text-[16px] font-semibold text-gray-500">Order not found</p>
      <Link
        to="/seller/orders"
        className="px-5 py-2 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-semibold hover:bg-[#4446D0] transition"
      >
        Back to Orders
      </Link>
    </div>
  );
}

export default function OrderDetailPage() {
  const { orderId } = useParams();

  // Later: replace with API call — fetch(`/api/orders/${orderId}`)
  const order = orderId ? MOCK_ORDERS[orderId] : undefined;

  if (!order) return <OrderNotFound />;

  return (
    <div className="space-y-4">
      <OrderDetailTopBar orderId={order.id} />

      <OrderDetailStatusBar currentStatus={order.status} />

      <OrderDetailSummaryCards
        amount={order.amount}
        courier={order.courier}
        trackingId={order.trackingId}
        customer={order.customer}
        deliveryDate={order.deliveryDate}
      />

      <OrderDetailItems
        items={order.items}
        subtotal={order.subtotal}
        delivery={order.delivery}
        discount={order.discount}
        totalPaid={order.totalPaid}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <OrderDetailDeliveryProgress
          steps={order.deliveryProgress}
          isCancelled={order.status === "Cancelled"}
        />

        <div className="space-y-4">
          <OrderDetailShipping
            customerName={order.shippingInfo.customerName}
            phone={order.shippingInfo.phone}
            address={order.shippingInfo.address}
            courier={order.shippingInfo.courier}
            trackingNumber={order.shippingInfo.trackingNumber}
          />
          <OrderDetailPayment
            method={order.payment.method}
            status={order.payment.status}
            date={order.payment.date}
            transactionId={order.payment.transactionId}
          />
        </div>
      </div>
    </div>
  );
}