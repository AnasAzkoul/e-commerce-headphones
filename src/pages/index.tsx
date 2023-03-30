import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Link from 'next/link';
import Layout from '@/components/Layout';
import HeroSection from '@/components/hero';
import Button from '@/components/UI/Button';
import {client} from '../lib/client';
import { GetServerSideProps } from 'next';
import type { ProductType } from '@/lib/types/clientTypes';


interface HomePageProps {
  products: ProductType[]
}

function Home({products}:HomePageProps) {

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


export const getServerSideProps: GetServerSideProps = async() => {
  const query = '*[_type == "product"]';
  const products = await client.fetch<ProductType[]>(query);
  console.log(products)
  return {
    props: {
      products
    }
  }
}
