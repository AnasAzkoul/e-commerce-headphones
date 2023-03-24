import React from 'react';
import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { navLinksData } from '@/lib/constants/constance';

// const NavigationStyles = cva('', {
//   variants: {
//     variant: {
//       desktop: 'hidden md:flex gap-10 items-center',
//     },
//   },
// });

interface NavigationLinksProps {
  isSidebarOpen: boolean;
}

const NavLinks = ({ isSidebarOpen }: NavigationLinksProps) => {
  return (
    <nav
      className={`flex gap-10 items-center justify-center fixed top-14 left-0 w-full bg-bg-light -z-10 ${
        isSidebarOpen ? 'translate-y-0' : '-translate-y-full'
      } transition-all duration-100 ease-in pb-2 md:pb-0 md:z-0 md:translate-y-0 md:w-auto md:static`}
    >
      <ul
        className='flex flex-col items-center gap-6 text-base font-semibold capitalize md:flex-row md:gap-8'
        id='main-menu'
      >
        {navLinksData.map((linkItem) => {
          return (
            <li key={linkItem.text}>
              <Link href={linkItem.link}>{linkItem.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
