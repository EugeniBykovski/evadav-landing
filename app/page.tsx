'use client';

import { FC, memo } from 'react';
import WelcomeSection from '@/sections/WelcomeSection/WelcomeSection';

const Home: FC = memo(() => {
  return (
    <div className="flex justify-start items-center h-[calc(100vh-19vh-10vh)]">
      <WelcomeSection />
    </div>
  );
});

export default Home;
