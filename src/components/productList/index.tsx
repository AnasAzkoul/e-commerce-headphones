import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import SingleProductCard from './SingleProductCard';
import useGetAllProducts from '@/lib/hooks/useGetAllProducts';

type Props = {}

const ProductsList = (props: Props) => {
  const products = useGetAllProducts();

  return (
    <Container>
      {products.map(product => {
        return <SingleProductCard key={product._id} product={product}/>
      })}
    </Container>
  )
}

export default ProductsList;

const Container = styled.div`
  ${tw`grid gap-x-6 grid-cols-responsive gap-y-12`}
`;
