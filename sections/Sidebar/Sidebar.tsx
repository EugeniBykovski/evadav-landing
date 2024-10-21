import Image from 'next/image';
import bg_welcome from '@/assets/images/bg_welcome.jpg';
import Logo from '@/components/Logo/Logo';

const Sidebar = ({ children }: any) => {
  return (
    <section className="flex h-full">
      <div className="h-[81vh] w-[46%]">
        <Image src={bg_welcome} alt="bg_weclome" className="h-[100%]" />
      </div>
      <div>
        <div className="pt-8">
          <Logo />
          {children}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
