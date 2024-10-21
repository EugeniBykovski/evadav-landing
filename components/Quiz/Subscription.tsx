'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

const Subscription: FC = () => {
  const router = useRouter();

  const handleSubscription = () => {
    router.push('/payment-success');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Become a Member</h1>
      <ul className="list-disc ml-5 mb-6">
        <li>Unlimited Recognitions</li>
        <li>Auto-diagnostics of plant issues</li>
        <li>Access to detailed plant information</li>
        <li>Worldwide plant care tips</li>
      </ul>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 border rounded-md text-center">
          <p>Weekly, 3 days free trial</p>
          <p>$4.99/week</p>
        </div>
        <div className="p-4 border rounded-md text-center">
          <p>Monthly, 3 days free trial</p>
          <p>$9.99/month</p>
        </div>
        <div className="p-4 border rounded-md text-center">
          <p>Yearly, 3 days free trial</p>
          <p>$24.99/year</p>
        </div>
      </div>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md"
        onClick={handleSubscription}
      >
        Try for free
      </button>
    </div>
  );
};

export default Subscription;
