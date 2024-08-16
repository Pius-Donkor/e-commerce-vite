import { useState } from "react";
import ShippingSection from "./ShippingSection";
// import PaymentSection from "./PaymentSection";
import ReviewSection from "./ReviewSection";
import ProgressBar from "./ProgressBar";
import { useCart } from "../../context/CartContext";
import HomeBack from "../../ui/HomeBack";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [shippingDetails, setShippingDetails] = useState({});

  const { cartItems } = useCart();

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="checkout-page mt-4 px-16 ">
      <div className="flex justify-start gap-8 items-center">
        <HomeBack />
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      </div>
      <ProgressBar currentStep={currentStep} />

      {currentStep === 1 && (
        <ShippingSection
          onNextStep={goToNextStep}
          setShippingDetails={setShippingDetails}
          cartItems={cartItems}
        />
      )}

      {/* {currentStep === 2 && (
        <PaymentSection
          onNext={goToNextStep}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      )} */}

      {currentStep === 2 && (
        <ReviewSection
          cartItems={cartItems}
          shippingDetails={shippingDetails}
        />
      )}
    </div>
  );
};

export default Checkout;
