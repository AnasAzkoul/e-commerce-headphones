import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

export default function useGetAllProducts() {
  const products = useSelector(
    (state: RootState) => state.products.allProducts
  );

  return products;
}
