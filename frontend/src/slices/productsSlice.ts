import Product from "../types/Product";
import apiSlice from "./apiSlice";

const productsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
      keepUnusedDataFor: 5,
      transformResponse: (response: { data: Product[] }) => response.data,
    }),
  }),
});

export const { useGetProductsQuery } = productsSlice;
