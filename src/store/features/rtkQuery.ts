import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testRTkQuery = createApi({
  reducerPath: "testRtkQuery",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({ query: () => "products" }),
  }),
});

export const { useGetAllProductsQuery } = testRTkQuery;
