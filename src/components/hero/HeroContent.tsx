/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Button from '../UI/Button';

type Props = {};

const HeroContent = (props: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>
        We've got your
        <span className=''> ears</span>
        <span className='text-primary'> covered</span>
      </h1>
      <p className='text-base font-semibold'>Shop our latest headphones</p>
      <Button className='justify-self-start self-start'>Explore CyberFonz.</Button>
    </div>
  );
};

export default HeroContent;
