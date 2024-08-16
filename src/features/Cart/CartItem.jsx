/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import {
  removeCartItem,
  updateCartItemQuantity,
} from "../../context/cartReducer";
import Button from "../../ui/Button";

export default function CartItem({ item, dispatch }) {
  function handleRemoveItem() {
    console.log("hello");
    dispatch(removeCartItem(item.id));
    toast.success("Item has been removed from cart successfully");
  }
  function handleQuantityIncrease() {
    const newQuantity = item.quantity + 1;
    dispatch(updateCartItemQuantity(item.id, newQuantity));
  }
  function handleQuantityDecrease() {
    const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
    dispatch(updateCartItemQuantity(item.id, newQuantity));
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="ml-4 flex-1">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">&#8373;{item.price}</p>
        <div className="flex items-center mt-2">
          <Button onClick={handleQuantityDecrease} type="cartIncDec">
            -
          </Button>
          <span className="mx-2">{item.quantity}</span>
          <Button onClick={handleQuantityIncrease} type="cartIncDec">
            +
          </Button>
        </div>
      </div>
      <Button onClick={handleRemoveItem} type="orange">
        Remove
      </Button>
    </div>
  );
}
