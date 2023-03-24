/* eslint-disable react/no-unescaped-entities */
import React from 'react';

type Props = {};

const HeroContent = (props: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-4xl md:text-6xl lg:text-8xl font-semibold'>
        We've got your &nbsp;
        <span className=''>ears &nbsp;</span>
        <span className='text-primary'>covered</span>
      </h1>
      <p className='text-base font-semibold'>Shop our latest headphones</p>
      <button className='bg-black text-bg-light text-base px-8 py-2 border hover:bg-bg-light hover:text-black hover:border-black'>
        Explore CyberFonz.
      </button>
    </div>
  );
};

export default HeroContent;
