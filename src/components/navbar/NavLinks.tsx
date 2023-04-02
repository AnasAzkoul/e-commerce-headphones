import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';
import { navLinksData } from '@/lib/constants/constance';
interface NavigationLinksProps {
  isSidebarOpen: boolean;
}

const NavLinks = ({ isSidebarOpen }: NavigationLinksProps) => {
  return (
    <NavContainer isSidebarOpen={isSidebarOpen}>
      <NavLinksContainer id='main-menu'>
        {navLinksData.map((linkItem) => {
          return (
            <li key={linkItem.text}>
              <NavLink href={linkItem.link}>{linkItem.text}</NavLink>
            </li>
          );
        })}
      </NavLinksContainer>
    </NavContainer>
  );
};

export default NavLinks;

const NavContainer = styled.nav<{ isSidebarOpen: boolean }>`
  ${tw`fixed left-0 flex items-center justify-center w-full gap-10 pb-2 transition-all duration-100 ease-in top-14 bg-bg-light -z-10 md:pb-0 md:z-0 md:translate-y-0 md:w-auto md:static`}

  ${(props) =>
    props.isSidebarOpen ? tw`translate-y-0` : tw`-translate-y-[15rem]`}
`;

const NavLinksContainer = styled.ul`
  ${tw`flex flex-col items-center gap-6 text-base font-semibold capitalize md:flex-row md:gap-8`}
`;

const NavLink = styled(Link)`
  ${tw`hover:text-primary`}
`;
