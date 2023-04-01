import React from 'react';
import type { ProductType } from '@/lib/types/clientTypes';
import tw from 'twin.macro';
import styled from 'styled-components';
import Image from 'next/image';
import { urlFor } from '@/lib/client';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import WishListButton from '../UI/WishListButton';

interface SingleProductCardTypes {
  product: ProductType;
}

const SingleProductCard = ({ product }: SingleProductCardTypes) => {
  const imageURLLoader = () => {
    return urlFor(product.image[0]).width(200).url();
  };

  const discountedPrice = product.discount.discount && ((
    product.price -
    (product.discount.amount / 100) * product.price
  ).toFixed(2));

  return (
    <Container>
      <ProductNameContainer>
        <ProductName>{product.name}</ProductName>
      </ProductNameContainer>
      <div className='flex flex-col justify-between'>
        <ImageContainer>
          <ProductImage
            alt={product.name}
            src={product.image[0]._key}
            loader={imageURLLoader}
            fill
          />
        </ImageContainer>
        <ProductDetailsContainer>
          <WishListButton />
          <PriceContainer>
            {product.discount.discount ? (
              <>
                <DiscountedPrice>${product.price.toFixed(2)}</DiscountedPrice>
                <span>{discountedPrice}</span>
              </>
            ) : (
              <span>${product.price.toFixed(2)}</span>
            )}
          </PriceContainer>
          <AiOutlineShoppingCart />
        </ProductDetailsContainer>
      </div>
    </Container>
  );
};

export default SingleProductCard;

const Container = styled.div`
  ${tw`grid rounded-xl bg-primary-light grid-cols-card`}
`;

const ProductNameContainer = styled.div`
  writing-mode: vertical-lr;
  ${tw`flex items-center justify-center bg-black text-bg-light rounded-l-xl`};
`;

const ProductName = styled.h3`
  ${tw`my-8 text-xl font-semibold tracking-widest capitalize`}
`;

const ImageContainer = styled.div`
  ${tw`mt-4 aspect-w-4 aspect-h-4`}
`;

const ProductImage = styled(Image)`
  ${tw`object-cover mx-auto`}
`;

const ProductDetailsContainer = styled.div`
  ${tw`flex items-end justify-between w-full gap-8 pt-6 pb-2 pl-2 pr-6 text-2xl text-bg-light`}
`;

const PriceContainer = styled.div`
  ${tw`relative flex flex-col items-center text-xl font-semibold text-bg-light`}
`;

const DiscountedPrice = styled.span`
  ${tw`absolute text-red-500 line-through -top-7`}
`;
