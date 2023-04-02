import {string, z} from 'zod';

const ImageSchema = z.object({
  _key: z.string(),
  _type: z.literal('image'),
  asset: z.object({
    _ref: z.string(),
    _type: z.string()
  })
});

export type ImageSchemaTypes = z.infer<typeof ImageSchema>;

const ProductSchema = z.object({
  _createdAt: z.date(),
  _id: z.string(),
  _rev: z.string(),
  _type: z.literal('product'),
  _updatedAt: z.date(),
  details: z.string(),
  image: ImageSchema.array(),
  name: z.string(),
  price: z.number(),
  slug: z.object({
    _type: z.literal('slug'),
    current: z.string()
  }),
  discount: z.object({
    discount: z.boolean(),
    amount: z.number()
  }),
  category: z.string()
})

export type ProductType = z.infer<typeof ProductSchema>;
