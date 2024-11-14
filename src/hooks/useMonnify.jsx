import { useState } from 'react';

const useMonnify = (options) => {
  const [isLoading, setIsLoading] = useState(false);

  const generateReference = () => {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 15);
    return `MON_${timestamp}_${random}`;
  };

  const initializePayment = () => {
    setIsLoading(true);
    
    const paymentOptions = {
      amount: options.amount,
      currency: "NGN",
      reference: options.reference || generateReference(),
      customerName: options.customerName,
      customerEmail: options.customerEmail,
      apiKey: options.apiKey,
      contractCode: options.contractCode,
      paymentDescription: "Payment for services",
      isTestMode: true,
      metadata: {
        name: options.customerName,
        email: options.customerEmail,
      },
      onComplete: (response) => {
        setIsLoading(false);
        if (response.status === "SUCCESS") {
          options.onSuccess?.(response);
        } else {
          options.onError?.(response);
        }
      },
      onClose: () => {
        setIsLoading(false);
      },
    };

    if (window.MonnifySDK) {
      window.MonnifySDK.initialize(paymentOptions);
    } else {
      console.error("Monnify SDK not found. Make sure to include the script in your HTML.");
    }
  };

  return {
    isLoading,
    initializePayment
  };
};

export default useMonnify;
