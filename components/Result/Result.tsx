'use client';

import { FC, memo } from 'react';
import { ResultProps } from '@/types/quiz-types';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { plantImages } from './ result-images';
import { getResults } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

const Result: FC<ResultProps> = memo(({ answers }) => {
  const t = useTranslations('result');
  const resultPlants = getResults(answers);

  return (
    <div className="h-full flex flex-col justify-between lg:h-full sm:h-[71vh]">
      <div>
        <h2 className="text-2xl sm:text-left md:text-center lg:text-left font-extrabold lg:mb-2 sm:mt-0 text-[#040C0C]">
          {t('thank-you')}
        </h2>
        <p className="text-md sm:text-left md:text-center lg:text-left sm:mt-4 lg:mt-0 text-[#424844]">
          {t('plan')}
        </p>
        <div className="list-disc my-7 lg:justify-between md:justify-center items-center gap-3 sm:hidden md:flex">
          {resultPlants.map((plant, index) => (
            <Image src={plantImages[plant]} alt={plant} key={index} />
          ))}
        </div>
        <div className="md:hidden sm:block h-[65%]">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.7}
            pagination={true}
            loop={true}
            modules={[Pagination]}
            className="pagination h-[100%]"
          >
            {resultPlants.map((plant, index) => (
              <SwiperSlide key={index} className="justify-center flex my-6">
                <Image src={plantImages[plant]} alt={plant} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-md sm:text-left md:text-center lg:text-left text-[#424844] mb-2">
          {t('description')}
        </p>
      </div>
      <Link href={'/subscription'} className="lg:mt-4 sm:mt-8">
        <Button variant={'action'} className="w-full mb-12" size={'lg'}>
          {t('get-now')}
        </Button>
      </Link>
    </div>
  );
});

Result.displayName = 'Result';

export default Result;
