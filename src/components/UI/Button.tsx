import React, { forwardRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button = ({ className, children, variant = 'primary', onClick,  ...props }: ButtonProps) => {
  return (
    <button
      className={`relative px-8 py-2 text-base bg-black border cursor-pointer text-bg-light hover:bg-bg-light hover:text-black hover:border-black ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};


export default Button;

const ButtonStyles = styled.button`
  ${tw``}
`;
