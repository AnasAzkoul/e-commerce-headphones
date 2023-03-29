import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';
import Layout from '@/components/Layout';
import HeroSection from '@/components/hero';
import Button from '@/components/UI/Button';

function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <HeroButton>
          <Link href='/products'>Explore CyberFonz.</Link>
        </HeroButton>
      </Layout>
    </>
  );
}

export default Home;

const HeroButton = styled(Button)`
  ${tw`relative -translate-x-1/2 -top-32 left-1/2`}
`;
