/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PageSection from '../UI/PageSection';
import HeroContent from './HeroContent';
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <PageSection className='-z-20'>
      <div className='py-24 space-y-4 grid md:grid-cols-2'>
        <HeroContent />
        <div className='flex justify-center relative justify-self-end'>
          <Image
            src='/images/hero.jpg'
            width={400}
            height={400}
            alt='a person listening to music on headphones'
            className='rounded-full w-80 h-80 md:w-96 md:h-96 object-cover object-left-bottom'
          />
        </div>
      </div>
    </PageSection>
  );
};

export default HeroSection;
