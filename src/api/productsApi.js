import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://closet-recruiting-api.azurewebsites.net/api/",
    fetchFn: fetch
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "data",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
