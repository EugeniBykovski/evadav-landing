'use client';

import { FC, memo } from 'react';
import WelcomeSection from '@/sections/WelcomeSection/WelcomeSection';

const Home: FC = memo(() => {
  return (
    <div className="flex justify-start items-center md:h-[calc(100vh-19vh-10vh)] customLandscape:h-[calc(100vh+55vh)] sm:h-[calc(100vh-32vh)]">
      <WelcomeSection />
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
