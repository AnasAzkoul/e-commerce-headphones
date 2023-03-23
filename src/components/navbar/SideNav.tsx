import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { navLinksData } from '@/lib/constants/constance';

type Props = {
  isSideNavOpen: boolean
}

const SideNav = ({isSideNavOpen}: Props) => {
  return (
    <nav
      className={`bg-bg-light -z-10 fixed w-full top-10 ${
        isSideNavOpen ? 'translate-y-5' : '-translate-y-full'
      } origin-top transition-all duration-150 ease-in-out md:hidden`}
    >
      <ul>
        <ul className='flex flex-col items-center w-full gap-6 text-base font-semibold capitalize'>
          {navLinksData.map((linkItem) => {
            return (
              <li key={linkItem.text}>
                <Link href={linkItem.link}>{linkItem.text}</Link>
              </li>
            );
          })}
        </ul>
      </ul>
    </nav>
  );
}

export default SideNav
