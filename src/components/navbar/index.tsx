import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from './Logo';
import NavLinks from './NavLinks';
import HamburgerMenuButton from './HamburgerMenuButton';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

type Props = {};

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const { data: session } = useSession();

  const handleSingOut = () =>{
    if(session?.user) {
      signOut()
    } else {
      return;
    }
  }

  return (
    <HeaderContainer>
      <Container>
        <NavContainer>
          <Logo className='mx-auto' />
          <HamburgerMenuButton
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            isSideNavOpen={isSideNavOpen}
          />
          <NavLinksContainer>
            <NavLinks isSidebarOpen={isSideNavOpen} />
            <div className='flex gap-8'>
              <SignInButton onClick={handleSingOut}>
                {session?.user ? 'Sign out' : <Link href='/signup'>Login</Link>}
              </SignInButton>
              <div className='flex gap-8 text-2xl'>
                <AiOutlineShoppingCart className='cursor-pointer hover:text-primary-dark' />
              </div>
            </div>
          </NavLinksContainer>
        </NavContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  ${tw`fixed top-0 left-0 z-50 w-full bg-bg-light`}
`;

const Container = styled.div`
  ${tw`flex gap-6 px-4 py-4 mx-auto max-w-7xl`}
`;

const NavContainer = styled.div`
  ${tw`flex items-center justify-between w-full`}
`;

const NavLinksContainer = styled.div`
  ${tw`flex items-center order-3 gap-14`}
`;

const SignInButton = styled.button`
  ${tw`text-base hover:text-primary-dark`}
`;
