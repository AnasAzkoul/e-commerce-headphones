import React, { forwardRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef(({ className, children, ...props }: ButtonProps) => {
  return (
    <ButtonStyles
      className={`${className}`}
      {...props}
    >
      {children}
    </ButtonStyles>
  );
});

Button.displayName = 'Button';

export default Button;

const ButtonStyles = styled.button`
  ${tw`px-8 py-2 text-base bg-black border text-bg-light hover:bg-bg-light hover:text-black hover:border-black`}
`;
