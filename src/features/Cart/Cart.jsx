import Products from "../Products/Products";
import Button from "../../ui/Button";
import { productsData } from "../../data";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import HomeBack from "../../ui/HomeBack";

export default function Cart() {
  const { cartItems, dispatch } = useCart();

  const suggestedProducts = productsData.filter((_, index) => index <= 4);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-8">
      <HomeBack buttonColor="orange" textColor="white" />
      <h2 className="text-3xl font-bold mt-4 mb-6">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          {cartItems.map((item) => (
            <CartItem dispatch={dispatch} item={item} key={item.id} />
          ))}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 sticky h-fit top-32">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <p className="text-lg">Subtotal: ${subtotal}</p>
          <p className="text-lg font-bold">Total: ${subtotal}</p>
          <div className="flex justify-center mt-4 w-full ">
            <Button textColor="darkGray" role="link" link="/checkoutPage">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mt-8 mb-4">You may also like</h3>

      <Products products={suggestedProducts} />
    </div>
  );
}
