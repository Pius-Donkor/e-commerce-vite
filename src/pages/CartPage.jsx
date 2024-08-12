// Example of a Cart Page component
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          {/* Cart Items */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            {/* Example Cart Item */}
            <div className="flex items-center justify-between">
              <img
                src="/path-to-image.jpg"
                alt="Product Name"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-lg">Product Name</h3>
                <p className="text-gray-600">$100</p>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-200 p-2 rounded-md">-</button>
                  <span className="mx-2">1</span>
                  <button className="bg-gray-200 p-2 rounded-md">+</button>
                </div>
              </div>
              <button className="text-red-500 font-semibold">Remove</button>
            </div>
          </div>
          {/* End Cart Items */}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          {/* Cart Summary */}
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <p className="text-lg">Subtotal: $300</p>
          <p className="text-lg">Tax: $20</p>
          <p className="text-lg font-bold">Total: $320</p>
          <Link
            to="/checkout"
            className="block mt-4 bg-green-500 text-white text-center py-2 rounded-md"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
