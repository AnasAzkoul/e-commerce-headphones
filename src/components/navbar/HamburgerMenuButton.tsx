import React from 'react';
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
    <button
      role='button'
      aria-expanded={isSideNavOpen}
      aria-controls='main-menu'
      onClick={onClick}
      className='md:hidden mx-4 order-1 md:order-2'
    >
      {isSideNavOpen ? (
        <AiOutlineClose size={18} />
      ) : (
        <AiOutlineMenu size={18} />
      )}
    </button>
  );
};

export default HamburgerMenuButton
