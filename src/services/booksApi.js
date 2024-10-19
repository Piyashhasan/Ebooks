import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gutendex.com/" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/books`,
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const { useGetAllBooksQuery, useGetSingleBookQuery } = booksApi;
