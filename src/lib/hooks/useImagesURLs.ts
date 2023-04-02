import { useEffect, useState } from 'react';
import { urlFor } from '../client';
import type { ImageSchemaTypes } from '@/lib/types/clientTypes';
import { imageURLLoader } from '../helpers';


function getImagesURLs(images: ImageSchemaTypes[], width: number) {
  return images.map(image => {
    return imageURLLoader(image, width)
  })
}


export default function useImagesURLs(images: ImageSchemaTypes[], width: number) {
  const [imagesURLs, setImagesURLs] = useState<string[]>([]);

  useEffect(() => {
    setImagesURLs(getImagesURLs(images, width));
  }, [width, images]);

  return imagesURLs;
}
