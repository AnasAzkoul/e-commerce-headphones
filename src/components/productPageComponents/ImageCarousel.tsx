import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ImageSchemaTypes } from '@/lib/types/clientTypes';
import Image from 'next/image';
import { urlFor } from '@/lib/client';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  images: ImageSchemaTypes[];
};

const ImageCarousel = ({ images }: Props) => {
  const ImageURLLoader = (index: number, width: number) => {
    return urlFor(images[index]).width(width).url();
  };

  return (
    <div className='basis-1/3'>
      <Carousel
        renderThumbs={(images) => images}
        autoFocus={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop
        showArrows={false}
        showThumbs
        stopOnHover
      >
        {images.map((image, index) => {
          return (
            <ActiveImageContainer key={index}>
              <ActiveImage
                alt='something'
                loader={() => ImageURLLoader(index, 500)}
                src={image._key}
                width={300}
                height={100}
              />
            </ActiveImageContainer>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

const ActiveImageContainer = styled.div`
  ${tw` bg-gray-400/50`}
`;

const ActiveImage = styled(Image)`
  ${tw`object-cover mx-auto`}
`;
