import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    currentProducts: (state, action) => {
      return action.payload
    },
    removeProduct: (state: any, action) => {
      const updatedProductList = state.products.filter((p: any) => p.product_id != action.payload.id)
      return {...state, products: updatedProductList}
    }
  }
})

export const { currentProducts, removeProduct } = productSlice.actions
export default productSlice.reducer