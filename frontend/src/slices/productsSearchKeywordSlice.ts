import { createSlice } from "@reduxjs/toolkit";

const productsSearchKeywordSlice = createSlice({
  name: "products-search-keyword",
  initialState: "",
  reducers: {
    updateProductsSearchKeyword(_, action) {
      return action.payload;
    },
  },
});

export const productsSearchKeywordActions = productsSearchKeywordSlice.actions;

export default productsSearchKeywordSlice.reducer;
