'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

const PaymentSuccess: FC = () => {
  const router = useRouter();

  const handleGoToApp = () => {
    router.push('/app');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Payment successful!</h1>
      <p className="mb-4">
        Check your email to find your new login and password to enter the app.
        See you there!
      </p>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md"
        onClick={handleGoToApp}
      >
        Go to app
      </button>
    </div>
  );
};

export default PaymentSuccess;
