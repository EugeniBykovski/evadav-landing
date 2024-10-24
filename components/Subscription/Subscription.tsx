'use client';

import { FC, memo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import { subscriptionFeatures } from '@/data/mock-data';
import PlanCard from '../PlanCard/PlanCard';
import FeatureList from '../FeatureList/FeatureList';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

const Subscription: FC = memo(() => {
  const t = useTranslations('subscription');

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  const handleTryFreeClick = (appId: string | null, prodId: string | null) => {
    console.log('Application ID:', appId);
    console.log('Product ID:', prodId);

    if (appId && prodId) {
      setApplicationId(appId);
      setProductId(prodId);
      setIsModalOpen(true);
    }
  };

  const handleCloseClick = () =>
    paymentSuccess ? router.push('/payment') : setIsModalOpen(false);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="md:text-5xl sm:text-3xl font-extrabold mb-8 text-[#040C0C]">
          {t('title')} <span className="text-[#0E7726]">Premium</span>
        </h2>
        <FeatureList features={subscriptionFeatures} />
        <PlanCard
          setApplicationId={setApplicationId}
          setProductId={setProductId}
        />
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button
            variant={'action'}
            size={'lg'}
            className="w-full mb-32"
            onClick={() => handleTryFreeClick(applicationId, productId)}
          >
            {t('try-free')}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          {applicationId && productId ? (
            <iframe
              src={`https://pay-test.mrgate.net/subscriptions-form?application_id=${applicationId}&product_id=${productId}`}
              width="100%"
              height="400px"
              title="Payment Form"
            />
          ) : (
            <p>Loading payment form...</p>
          )}
          <div className="flex justify-end mt-4">
            <Button onClick={handleCloseClick} variant={'action'}>
              {paymentSuccess ? 'Go to Payment' : 'Close'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default Subscription;
