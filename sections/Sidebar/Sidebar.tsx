import React, { ReactNode } from 'react';
import Image from 'next/image';
import bg_welcome from '@/assets/images/bg_welcome.jpg';
import Logo from '@/components/Logo/Logo';

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex h-full sm:flex-col-reverse md:flex-row">
      <div className="h-[81vh] lg:w-[46%] md:w-[80%] sm:w-full sm:mb-64 md:mb-0">
        <Image src={bg_welcome} alt="bg_weclome" className="h-[100%]" />
      </div>
      <div className="pt-8 md:ml-10 lg:ml-0">
        <Logo />
        {children}
      </div>
    </section>
  );
};

export default Sidebar;
