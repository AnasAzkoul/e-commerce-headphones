import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

interface HamburgerBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSideNavOpen: boolean
}

const HamburgerMenuButton = ({
  className,
  onClick,
  isSideNavOpen,
  ...props
}: HamburgerBtnProps) => {

  return (
    <HamburgerButton
      role='button'
      aria-expanded={isSideNavOpen}
      aria-controls='main-menu'
      onClick={onClick}
      className=''
    >
      {isSideNavOpen ? (
        <AiOutlineClose size={18} />
      ) : (
        <AiOutlineMenu size={18} />
      )}
    </HamburgerButton>
  );
};

export default HamburgerMenuButton;


const HamburgerButton = styled.button`
  ${tw`order-1 mx-4 md:hidden md:order-2`}
`;
