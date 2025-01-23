import { useMemo } from 'react';

const usePaymentFormUrl = (
  applicationId: string | null,
  productId: string | null
) => {
  return useMemo(() => {
    if (applicationId && productId) {
      return `https://pay.mrgate.net/subscriptions-form?application_id=${encodeURIComponent(
        applicationId
      )}&product_id=${encodeURIComponent(productId)}`;
    }
    return null;
  }, [applicationId, productId]);
};

export default usePaymentFormUrl;
