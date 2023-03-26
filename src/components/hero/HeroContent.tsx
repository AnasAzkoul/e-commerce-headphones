/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../UI/Button';

type Props = {};

const HeroContent = (props: Props) => {
  return (
    <Container>
      <HeroMainHeading>
        We've got your
        <span className=''> ears</span>
        <span className='text-primary'> covered</span>
      </HeroMainHeading>
      <HeroPara>Shop our latest headphones</HeroPara>
      <Button className='relative z-50 self-center -mt-4' onClick={() => console.log('clicked')}>Explore CyberFonz.</Button>
    </Container>
  );
};

export default HeroContent;

const Container = styled.div`
  ${tw`relative flex flex-col items-center justify-center gap-10 py-20`}
`;

const HeroMainHeading = styled.h1`
  ${tw`relative text-4xl font-bold text-center md:text-6xl lg:text-8xl text-bg-light`}
`;

const HeroPara = styled.p`
  ${tw`relative text-base font-semibold text-bg-light`}
`;
