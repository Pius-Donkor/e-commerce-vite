/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import HomeBack from "../../ui/HomeBack";
import useGetCurrentUser from "../../Hooks/useGetCurrentUser";

const Orders = () => {
  const currentUser = useGetCurrentUser();
  const [storedOrders, setStoredOrders] = useState();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setStoredOrders(allOrders);
    const userOrders = allOrders.find(
      (currentUserOrders) => currentUserOrders.user_id === currentUser.user_id
    );

    setOrders(userOrders?.orderData || []);
  }, [currentUser]);

  const handleDeleteOrder = (orderId) => {
    // Filter out the order to be deleted
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    const newStoredOrders = storedOrders.map((orders) => {
      if (orders.user_id === currentUser.user_id)
        return { ...orders, orderData: updatedOrders };
      return orders;
    });
    // Update state and localStorage with the new orders array

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(newStoredOrders));
  };
  return (
    <div className="container mx-auto p-8">
      <HomeBack />
      <h1 className="text-3xl font-semibold mt-4 mb-6">Your Orders</h1>
      {orders.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <OrderCard
              onDelete={handleDeleteOrder}
              order={order}
              key={order.id}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-[calc(100dvh-10rem)] flex justify-center items-center  ">
          <h2>you have no orders yet</h2>
        </div>
      )}
    </div>
  );
};

export default Orders;
