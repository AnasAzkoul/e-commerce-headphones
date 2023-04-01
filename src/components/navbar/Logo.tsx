import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <LogoStyles
      className={className}
      {...props}
    >
      <Link
        href='/'
        className='w-full h-full cursor-pointer'
      >
        CyberFonz.
      </Link>
    </LogoStyles>
  );
};

export default Logo;

const LogoStyles = styled.div`
  ${tw`order-2 mx-auto text-lg font-bold md:mx-0 md:order-1 text-primary`}
`;
