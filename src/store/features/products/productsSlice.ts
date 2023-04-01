import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProductType } from '@/lib/types/clientTypes';


export interface ProductsStateTypes {
  allProducts: ProductType[]
}

const initialState: ProductsStateTypes = {
  allProducts: []
}


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state, action: PayloadAction<ProductType[]>) => {  
      state.allProducts = action.payload
    }
  }
});

export const {getAllProducts} = productsSlice.actions;

export default productsSlice.reducer;
