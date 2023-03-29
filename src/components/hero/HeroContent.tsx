/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';


type Props = {};

const HeroContent = () => {
  return (
    <Container>
      <HeroMainHeading>
        We've got your
        <span className=''> ears</span>
        <span className='text-primary-dark'> covered</span>
      </HeroMainHeading>
      <HeroPara>Shop our latest headphones</HeroPara>
    </Container>
  );
};

export default HeroContent;

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center gap-10 py-20`}
`;

const HeroMainHeading = styled.h1`
  ${tw`relative text-4xl font-bold text-center md:text-6xl lg:text-8xl text-bg-light`}
`;

const HeroPara = styled.p`
  ${tw`relative text-base font-semibold text-bg-light`}
`;
