import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
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

const ButtonStyles = styled.button<{ variant: 'primary' | 'secondary' }>`
  ${tw`px-8 py-2 text-base cursor-pointer`}

  ${(props) =>
    props.variant === 'primary'
      ? tw`bg-primary text-bg-light hover:bg-primary-dark`
      : tw``}
`;
