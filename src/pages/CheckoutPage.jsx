// CheckoutPage.jsx

const CheckoutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="progress-bar flex justify-between items-center mb-8">
        <div className="step text-green-500">Shipping</div>
        <div className="step text-gray-500">Payment</div>
        <div className="step text-gray-500">Review</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <form>
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
              <input
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="Full Name"
                autoComplete="name"
              />
              <input
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="Address"
                autoComplete="address-line1"
              />
              <input
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="City"
                autoComplete="address-level2"
              />
              <input
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="Zip Code"
                autoComplete="postal-code"
              />
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <select className="w-full mb-4 p-2 border border-gray-300 rounded-md">
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </select>
            </div>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 sticky top-20">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <p className="text-lg">Subtotal: $300</p>
          <p className="text-lg">Shipping: $20</p>
          <p className="text-lg font-bold">Total: $320</p>
          <button className="block w-full mt-4 bg-green-500 text-white text-center py-2 rounded-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
