import React from 'react';
import type { ProductType } from '@/lib/types/clientTypes';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from '../UI/Button';

type Props = {
  product: ProductType;
};

const ProductDetails = ({ product }: Props) => {
  return (
    <ProductDetailsContainer>
      <Category>
        <CategoryLabel>Categories:</CategoryLabel>
        <CategoryInfo>{product.category}</CategoryInfo>
      </Category>

      <ProductName>{product.name}</ProductName>

      <Price>
        ${product.price.toFixed(2)}
      </Price>

      <p className='text-base'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        aliquid, mollitia neque et cumque, nobis itaque ea vitae aut rerum in
        voluptatibus pariatur alias corrupti atque illo dignissimos, nemo
        ducimus.
      </p>

      <form className='mt-6'>
        <div className='flex gap-2'>
          <input
            type='number'
            className='w-20 border border-gray-400 bg-bg-light focus:ring-1 focus:ring-primary form-input'
            min={0}
          />
          <Button className=''>add to cart</Button>
        </div>
      </form>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;

const ProductDetailsContainer = styled.div`
  ${tw`mx-auto space-y-6 basis-1/2`}
`;

const Category = styled.div`
  ${tw`flex gap-2`}
`;

const CategoryLabel = styled.span`
  ${tw`font-semibold`}
`
const CategoryInfo = styled.span`
  ${tw`capitalize text-primary`}
`;

const ProductName = styled.h2`
  ${tw`text-3xl font-bold capitalize`}
`;

const Price = styled.p`
  ${tw`text-2xl font-semibold capitalize`}
`;
