import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '@/store/features/products/productsSlice';
import type { ProductType } from '../types/clientTypes';

export default function useLoadAllProducts (products: ProductType[]) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(products))
  }, [products])
}
