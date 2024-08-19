import { useEffect, useState } from "react";
import useGetCurrentUser from "./useGetCurrentUser";

export function useGetOrders() {
  const currentUser = useGetCurrentUser();
  const [userOrderData, setUseOrderData] = useState([]);
  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setUseOrderData(
      allOrders?.find(
        (currentUserOrders) =>
          currentUserOrders.user_id === currentUser?.user_id
      )?.orderData || []
    );
  }, [currentUser]);

  return userOrderData;
}
