'use client';

import { FC, memo, useState } from 'react';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import { subscriptionFeatures } from '@/data/mock-data';
import PlanCard from '../PlanCard/PlanCard';
import FeatureList from '../FeatureList/FeatureList';
import useClickId from '@/hooks/useClickId';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import usePaymentFormUrl from '@/hooks/usePaymentFormUrl';

const Subscription: FC = memo(() => {
  const t = useTranslations('subscription');

  const clickId = useClickId();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);

  const paymentFormUrl = usePaymentFormUrl(applicationId, productId, clickId);

  const handleTryFreeClick = (appId: string | null, prodId: string | null) => {
    if (appId && prodId) {
      setApplicationId(appId);
      setProductId(prodId);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <h2 className="md:text-5xl sm:text-[29px] text-left font-extrabold sm:mb-4 md:mb-8 text-[#040C0C]">
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
            className="w-full lg:mb-20 sm:m-0"
            onClick={() => handleTryFreeClick(applicationId, productId)}
          >
            {t('try-free')}
          </Button>
        </DialogTrigger>
        <DialogContent className="md:w-full sm:w-[90%] customLandscape:sm:w-[70%] customLandscape:sm:scale-50">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          {paymentFormUrl ? (
            <iframe
              src={paymentFormUrl}
              width="100%"
              height="550px"
              title="Payment Form"
              allow="payment *"
            />
          ) : (
            <p>Loading payment form...</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
});

Subscription.displayName = 'Subscription';

export default Subscription;
