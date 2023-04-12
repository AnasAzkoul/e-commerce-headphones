import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {SanityImageSource} from '@sanity/image-url/lib/types/types';


const config: ClientConfig = {
  projectId: 'ckxwsbjr',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-03-29',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
