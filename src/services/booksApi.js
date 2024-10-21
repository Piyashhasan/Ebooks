import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gutendex.com" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (url) => (url ? url : "/books"),
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    searchBooks: builder.query({
      query: (searchText) => `/books?search=${encodeURIComponent(searchText)}`,
    }),

    searchByTopic: builder.query({
      query: (topic) => {
        return topic === "all" ? `/books` : `/books?topic=${topic}`;
      },
    }),

    getBooksByIds: builder.query({
      query: (ids) => `/books?ids=${ids.join(",")}`,
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useSearchBooksQuery,
  useSearchByTopicQuery,
  useGetBooksByIdsQuery,
} = booksApi;
