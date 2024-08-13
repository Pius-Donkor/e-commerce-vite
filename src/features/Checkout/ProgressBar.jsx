/* eslint-disable react/prop-types */

const ProgressBar = ({ currentStep }) => {
  // State to keep track of the current step

  // Function to move to the next step (for demonstration)

  return (
    <div className="progress-bar flex justify-between items-center mb-8">
      {/* Shipping Step */}
      <div
        className={`step ${
          currentStep >= 1 ? "text-emeraldGreen" : "text-darkGray"
        }`}
      >
        Shipping
      </div>

      {/* Divider Line */}
      <div className="flex-1 border-t border-gray-300 mx-2"></div>
      {/* 
      
      <div
        className={`step ${
          currentStep >= 2 ? "text-green-500" : "text-gray-500"
        }`}
      >
        Payment
      </div>

   <div className="flex-1 border-t border-gray-300 mx-2"></div> */}

      {/* Review Step */}
      <div
        className={`step ${
          currentStep >= 2 ? "text-emeraldGreen" : "text-darkGray"
        }`}
      >
        Review
      </div>
    </div>
  );
};

export default ProgressBar;
