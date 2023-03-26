/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import HeroContent from './HeroContent';
import Button from '../UI/Button';


const overlay =
  "";

type Props = {};

const HeroSection = (props: Props) => {
  const imageStyles = 'rounded-full w-80 h-80  md:w-96 md:h-96 ';

  return (
    <section className='relative -z-20'>
      <BackgroundImage>
        <HeroContainer>
          <HeroContent />
        </HeroContainer>
      </BackgroundImage>
    </section>
  );
};

export default HeroSection;

const BackgroundImage = styled.div`
  ${tw`bg-[url('/images/hero-large.jpg')] bg-cover bg-no-repeat bg-fixed bg-hero before:content-[''] before:absolute before:inset-0 before:bg-indigo-600/20`}
`;

const HeroContainer = styled.div`
  ${tw`max-w-3xl py-24 mx-auto`}
`;
