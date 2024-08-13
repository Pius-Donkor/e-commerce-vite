/* eslint-disable react/prop-types */

import Button from "../../ui/Button";

export default function OrderCard({ order, onDelete }) {
  return (
    <div className="order-card bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Name:</span> {order.fullName}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Address:</span> {order.address},{" "}
        {order.city}, {order.zipCode}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Payment Method:</span>{" "}
        {order.paymentMethod}
      </p>
      {order.paymentMethod === "PayPal" && (
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">PayPal Email:</span>{" "}
          {order.paypalEmail}
        </p>
      )}
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Order Status:</span> {order.orderStatus}
      </p>
      <div className="order-items mb-4 overflow-y-auto ">
        <h3 className="text-lg font-semibold mb-2">Items Ordered:</h3>
        {order.items.map((item) => (
          <div key={item.id} className="item-card flex items-center mb-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div>
              <p className="text-gray-800">{item.name}</p>
              <p className="text-gray-600">
                {item.quantity} x ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg font-bold text-right">Total: ${order.total}</p>
      <Button type="orange" onClick={() => onDelete(order.id)}>
        Delete
      </Button>
    </div>
  );
}
