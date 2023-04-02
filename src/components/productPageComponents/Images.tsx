import React from 'react';
import type { ImageSchemaTypes } from '@/lib/types/clientTypes';
import Image from 'next/image';
import useImagesURLs from '@/lib/hooks/useImagesURLs';
import tw from 'twin.macro';
import styled from 'styled-components';
import { urlFor } from '@/lib/client';

type Props = {
  images: ImageSchemaTypes[];
};

const Images = ({ images }: Props) => {
  const ImageURLLoader = (index: number) => {
    return urlFor(images[index]).width(300).url();
  };

  return (
    <div className='md:basis-1/3'>
      <ActiveImageContainer>
        <ActiveImage
          alt='some image'
          src={images[0]._key}
          fill
          loader={() => ImageURLLoader(0)}
        />
      </ActiveImageContainer>
      <ImagesGalleryContainer>
        {images.map((image, index) => {
          return (
            <ImageGalleryContainer key={image._key}>
              <Image
                alt='some image'
                src={image._key}
                width={100}
                height={50}
                loader={() => ImageURLLoader(index)}
              />
            </ImageGalleryContainer>
          );
        })}
      </ImagesGalleryContainer>
    </div>
  );
};

export default Images;

const ActiveImageContainer = styled.div`
  ${tw` bg-gray-400/50 aspect-w-4 aspect-h-4`}
`;

const ActiveImage = styled(Image)`
  ${tw`object-cover mx-auto`}
`;

const ImagesGalleryContainer = styled.div`
  ${tw`flex items-center gap-2 mt-2`}
`;

const ImageGalleryContainer = styled.div`
  ${tw`bg-gray-300`}
`;
