import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined'
}

const Button = ({ className, children, variant = 'primary', onClick,  ...props }: ButtonProps) => {
  return (
    <ButtonStyles
      className={`${className}`}
      onClick={onClick}
      {...props}
      variant={variant}
    >
      {children}
    </ButtonStyles>
  );
};


export default Button;

const ButtonStyles = styled.button<{ variant: 'primary' | 'secondary' | 'outlined'}>`
  ${tw`px-8 py-2 text-base cursor-pointer`}

  ${(props) => {
    if(props.variant === 'primary') {
      return tw`border bg-primary text-bg-light hover:bg-bg-light hover:text-primary border-primary`;
    }

    if(props.variant === 'outlined') {
      return tw`border bg-bg-light border-primary text-primary hover:bg-primary hover:text-bg-light`
    }
  }}
`;
