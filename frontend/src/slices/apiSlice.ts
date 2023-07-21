import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["products", "orders", "users"],
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: () => ({}),
});

export default apiSlice;
