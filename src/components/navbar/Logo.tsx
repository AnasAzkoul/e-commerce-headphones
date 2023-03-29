import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';

type Props = {};

const Logo = (props: Props) => {
  return (
    <LogoStyles>
      <Link href='/' className='w-full h-full cursor-pointer'>CyberFonz.</Link>
    </LogoStyles>
  );
};

export default Logo;

const LogoStyles = styled.div`
  ${tw`order-2 mx-auto text-lg font-bold md:mx-0 md:order-1 text-primary`}
`;
