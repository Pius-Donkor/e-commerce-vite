/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import HomeBack from "../../ui/HomeBack";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, [orders]);
  const handleDeleteOrder = (orderId) => {
    // Filter out the order to be deleted
    const updatedOrders = orders.filter((order) => order.id !== orderId);

    // Update state and localStorage with the new orders array
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };
  return (
    <div className="container mx-auto p-8">
      <HomeBack />
      <h1 className="text-3xl font-semibold mt-4 mb-6">Your Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <OrderCard
            onDelete={handleDeleteOrder}
            order={order}
            key={order.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
