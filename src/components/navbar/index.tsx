import React, { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import HamburgerMenuButton from './HamburgerMenuButton';

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
        <div className='flex items-center justify-between w-full'>
          <Logo />
          <HamburgerMenuButton
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            isSideNavOpen={isSideNavOpen}
          />
          <div className='flex items-center gap-14 order-3 md:order-3'>
            <NavLinks isSidebarOpen={isSideNavOpen}/>
            <div className='flex gap-8 text-2xl'>
              <AiOutlineShoppingCart />
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
