/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

export default function ShippingSection({
  onNextStep,
  setShippingDetails,
  cartItems = [],
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setShippingDetails({
      ...data,
      orderStatus: "Pending",
      orderAccepted: false,
    });
    reset();
    onNextStep(); // Move to the next step
  };
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const selectedPaymentMethod = watch("paymentMethod", "Credit Card");

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
              <input
                {...register("fullName", { required: "Full Name is required" })}
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="Full Name"
                autoComplete="name"
              />
              {errors.fullName && (
                <p className="text-sunsetOrange">{errors.fullName.message}</p>
              )}

              <input
                {...register("address", { required: "Address is required" })}
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="Address"
                autoComplete="address-line1"
              />
              {errors.address && (
                <p className="text-sunsetOrange">{errors.address.message}</p>
              )}

              <input
                {...register("city", { required: "City is required" })}
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="City"
                autoComplete="address-level2"
              />
              {errors.city && (
                <p className="text-sunsetOrange">{errors.city.message}</p>
              )}

              <input
                {...register("zipCode", { required: "Zip Code is required" })}
                type="text"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="Zip Code"
                autoComplete="postal-code"
              />
              {errors.zipCode && (
                <p className="text-sunsetOrange">{errors.zipCode.message}</p>
              )}
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <select
                {...register("paymentMethod", {
                  required: "Payment Method is required",
                })}
                className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                defaultValue="Credit Card"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
              {errors.paymentMethod && (
                <p className="text-sunsetOrange">
                  {errors.paymentMethod.message}
                </p>
              )}

              {selectedPaymentMethod === "Credit Card" && (
                <div>
                  <input
                    {...register("cardNumber", {
                      required: "Card Number is required",
                    })}
                    type="text"
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                    placeholder="Card Number"
                  />
                  {errors.cardNumber && (
                    <p className="text-sunsetOrange">
                      {errors.cardNumber.message}
                    </p>
                  )}

                  <input
                    {...register("expiryDate", {
                      required: "Expiry Date is required",
                    })}
                    type="text"
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                    placeholder="Expiry Date (MM/YY)"
                  />
                  {errors.expiryDate && (
                    <p className="text-sunsetOrange">
                      {errors.expiryDate.message}
                    </p>
                  )}

                  <input
                    {...register("cvv", { required: "CVV is required" })}
                    type="text"
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                    placeholder="CVV"
                  />
                  {errors.cvv && (
                    <p className="text-sunsetOrange">{errors.cvv.message}</p>
                  )}
                </div>
              )}

              {selectedPaymentMethod === "PayPal" && (
                <div>
                  <input
                    {...register("paypalEmail", {
                      required: "PayPal Email is required",
                    })}
                    type="email"
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                    placeholder="PayPal Email"
                  />
                  {errors.paypalEmail && (
                    <p className="text-sunsetOrange">
                      {errors.paypalEmail.message}
                    </p>
                  )}
                </div>
              )}

              {selectedPaymentMethod === "Bank Transfer" && (
                <div>
                  <input
                    {...register("accountNumber", {
                      required: "Account Number is required",
                    })}
                    type="text"
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                    placeholder="Account Number"
                  />
                  {errors.accountNumber && (
                    <p className="text-sunsetOrange">
                      {errors.accountNumber.message}
                    </p>
                  )}

                  <input
                    {...register("bankName", {
                      required: "Bank Name is required",
                    })}
                    type="text"
                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                    placeholder="Bank Name"
                  />
                  {errors.bankName && (
                    <p className="text-sunsetOrange">
                      {errors.bankName.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            <Button type="submit">Continue To Review</Button>
          </form>
        </div>

        <div className="bg-[#fff] h-fit shadow-md rounded-lg p-4 sticky top-20">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <p className="text-lg">Subtotal: &#8373;{subtotal}</p>
          <p className="text-lg">Shipping: &#8373;20</p>
          <p className="text-lg font-bold">Total: &#8373;{subtotal + 20}</p>
        </div>
      </div>
    </div>
  );
}
