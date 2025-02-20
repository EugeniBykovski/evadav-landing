import { useMemo } from 'react';

const usePaymentFormUrl = (
  applicationId: string | null,
  productId: string | null,
  cid?: string | null
) => {
  return useMemo(() => {
    if (!applicationId || !productId) return null;

    const baseUrl = `https://pay-test.mrgate.net/subscriptions-form?application_id=${encodeURIComponent(
      applicationId
    )}&product_id=${encodeURIComponent(productId)}`;

    return cid ? `${baseUrl}&cid=${encodeURIComponent(cid)}` : baseUrl;
  }, [applicationId, productId, cid]);
};

export default usePaymentFormUrl;
