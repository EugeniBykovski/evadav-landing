'use client';

import { FC, memo } from 'react';
import { ResultProps } from '@/types/quiz-types';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { plantImages } from './ result-images';
import { getResults } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const Result: FC<ResultProps> = memo(({ answers }) => {
  const t = useTranslations('result');
  const resultPlants = getResults(answers);

  return (
    <div className="h-full flex flex-col justify-between lg:h-full sm:h-[71vh]">
      <div>
        <h2 className="text-2xl lg:text-left sm:text-center font-extrabold lg:mb-2 sm:mt-0 text-[#040C0C]">
          {t('thank-you')}
        </h2>
        <p className="text-md lg:text-left sm:text-center sm:mt-4 lg:mt-0 text-[#424844]">
          {t('plan')}
        </p>
        <div className="list-disc my-7 justify-between items-center gap-3 sm:hidden md:flex">
          {resultPlants.map((plant, index) => (
            <Image src={plantImages[plant]} alt={plant} key={index} />
          ))}
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-sm md:hidden"
        >
          <CarouselContent>
            {resultPlants.map((plant, index) => (
              <CarouselItem key={index} className="flex justify-center my-6">
                <Image src={plantImages[plant]} alt={plant} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-4" />
          <CarouselNext className="mr-4" />
        </Carousel>
        <p className="text-md lg:text-left sm:text-center text-[#424844] mb-2">
          {t('description')}
        </p>
      </div>
      <Link href={'/subscription'} className="lg:mt-4 sm:mt-6">
        <Button variant={'action'} className="w-full mb-12" size={'lg'}>
          {t('get-now')}
        </Button>
      </Link>
    </div>
  );
});

Result.displayName = 'Result';

export default Result;
