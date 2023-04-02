import React from 'react';
import Layout from '@/components/Layout';
import BreadCrumbs from '@/components/UI/BreadCrumbs';
import tw from 'twin.macro';
import styled from 'styled-components';
import Images from '@/components/productPageComponents/Images';
import ProductDetails from '@/components/productPageComponents/ProductDetails';
import type { GetServerSideProps } from 'next';
import type { ProductType } from '@/lib/types/clientTypes';
import { client } from '@/lib/client';


type Props = {
  product: ProductType;
};

const SingleProductPage = ({ product }: Props) => {


  return (
    <Layout>
      <div className='px-4 pt-32 mx-auto max-w-7xl'>
        <BreadCrumbs />
        <section className='py-5'>
          <PageContentContainer>
            <Images images={product.image} />
            <ProductDetails product={product} />
          </PageContentContainer>
        </section>
      </div>
    </Layout>
  );
};

export default SingleProductPage;



const PageContentContainer = styled.div`
  ${tw`flex flex-col gap-10 md:flex-row md:justify-between md:items-start`}
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const query = `*[_type == 'product' && slug.current == '${slug}']{_id, details, discount, image, name, price, slug, category}`;
  const product = await client.fetch<ProductType[]>(query);

  return {
    props: {
      product: product[0],
    },
  };
};
