/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { clearCart } from "../../context/cartReducer";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { generateId } from "../../helper";

const ReviewSection = ({ cartItems, shippingDetails }) => {
  const { dispatch } = useCart();
  const navigate = useNavigate();

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle order placement
  function handlePlaceOrder() {
    let storedOrders = localStorage.getItem("orders");

    // Handle cases where `storedOrders` is null or an empty string
    let orders = [];
    if (storedOrders) {
      try {
        orders = JSON.parse(storedOrders);
      } catch (error) {
        console.error("Failed to parse orders from localStorage:", error);
        orders = [];
      }
    }

    // Construct the order data
    const orderData = {
      ...shippingDetails,
      items: cartItems,
      total: totalPrice,
      orderAccepted: true,
      id: generateId(),
      orderStatus: "Pending", // You can add more fields as needed
    };

    // Save the new order to local storage
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Display a success message, clear the cart, and navigate to the orders page
    toast.success("Order has been placed successfully");
    dispatch(clearCart());
    navigate("/orders");
  }

  return (
    <div className="review-section max-w-[60%] p-8 rounded-md shadow-md">
      <h2 className="mb-4">Review Your Order</h2>

      {/* Order Summary */}
      <div className="order-summary mb-6">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <div>{item.name}</div>
            <div>
              {item.quantity} x ${item.price}
            </div>
          </div>
        ))}
        <div className="flex justify-between font-semibold mt-4">
          <div>Total</div>
          <div>${totalPrice.toFixed(2)}</div>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="shipping-details mb-6">
        <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
        <p>{shippingDetails.name}</p>
        <p>{shippingDetails.address}</p>
        <p>
          {shippingDetails.city}, {shippingDetails.state} {shippingDetails.zip}
        </p>
        <p>{shippingDetails.country}</p>
      </div>

      {/* Payment Method */}
      <div className="payment-method mb-6">
        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
        <p>{shippingDetails.paymentMethod}</p>
      </div>

      {/* Place Order Button */}
      <Button onClick={handlePlaceOrder} type="orange">
        Place Order
      </Button>
    </div>
  );
};

export default ReviewSection;
