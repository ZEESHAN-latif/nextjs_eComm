import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productSlices/productSlices'
export const store = configureStore({
  reducer: {
    products : productsSlice,
  },
})

