import { useState } from "react";

const PaymentSection = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="payment-section bg-white p-8 rounded-md shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <form>
        {/* Credit Card Option */}
        <div className="mb-4">
          <input
            type="radio"
            id="credit-card"
            name="payment-method"
            value="credit-card"
            checked={selectedPaymentMethod === "credit-card"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          <label htmlFor="credit-card" className="text-lg">
            Credit Card
          </label>
        </div>

        {/* PayPal Option */}
        <div className="mb-4">
          <input
            type="radio"
            id="paypal"
            name="payment-method"
            value="paypal"
            checked={selectedPaymentMethod === "paypal"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          <label htmlFor="paypal" className="text-lg">
            PayPal
          </label>
        </div>

        {/* Other Payment Options */}
        <div className="mb-4">
          <input
            type="radio"
            id="other"
            name="payment-method"
            value="other"
            checked={selectedPaymentMethod === "other"}
            onChange={handlePaymentMethodChange}
            className="mr-2"
          />
          <label htmlFor="other" className="text-lg">
            Other Payment Method
          </label>
        </div>

        {/* Payment Details Section */}
        {selectedPaymentMethod === "credit-card" && (
          <div className="credit-card-details mt-4">
            <div className="mb-4">
              <label htmlFor="card-number" className="text-lg">
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                className="border border-gray-300 p-2 rounded-md w-full"
                placeholder="1234 5678 9123 4567"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiry-date" className="text-lg">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry-date"
                className="border border-gray-300 p-2 rounded-md w-full"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvc" className="text-lg">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                className="border border-gray-300 p-2 rounded-md w-full"
                placeholder="123"
              />
            </div>
          </div>
        )}

        {/* Payment Section Submit Button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
          Continue to Review
        </button>
      </form>
    </div>
  );
};

export default PaymentSection;
