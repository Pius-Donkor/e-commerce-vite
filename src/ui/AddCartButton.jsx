/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import { addCartItem } from "../context/cartReducer";
import Button from "./Button";

export default function AddCartButton({ cartItem }) {
  const { dispatch } = useCart();
  function handleCartAddItem() {
    dispatch(addCartItem(cartItem));
    toast.success("product has been added to cart successfully");
  }
  return <Button onClick={handleCartAddItem}>Add to cart</Button>;
}
