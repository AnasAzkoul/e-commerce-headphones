import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import SideNav from './SideNav';
import { navLinksData } from '@/lib/constants/constance';
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

type Props = {};

const Header = (props: Props) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);

  return (
    <header className='bg-bg-light'>
      <div className='max-w-7xl mx-auto py-4 px-4 z-50 flex gap-6'>
        <div className='flex justify-between w-full'>
          <Logo />
          <div className='flex items-center gap-10'>
            <nav className='hidden md:flex gap-10 items-center'>
              <ul className='flex gap-6 text-base font-semibold capitalize'>
                {navLinksData.map((linkItem) => {
                  return (
                    <li key={linkItem.text}>
                      <Link href={linkItem.link}>{linkItem.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className='flex gap-4 text-2xl'>
              <button onClick={() => setIsSideNavOpen(!isSideNavOpen)} className='md:hidden'>
                {isSideNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
              <AiOutlineShoppingCart />
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>
      <SideNav isSideNavOpen={isSideNavOpen} />
    </header>
  );
};

export default Header;
