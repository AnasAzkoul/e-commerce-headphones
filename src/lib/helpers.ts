import { urlFor } from './client';
import type { ImageSchemaTypes } from '@/lib/types/clientTypes';

export const imageURLLoader = (image: ImageSchemaTypes, width: number) => {
  return urlFor(image).width(width).url();
};
