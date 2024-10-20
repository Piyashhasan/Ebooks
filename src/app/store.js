import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../services/booksApi";
import bookSlice from "../features/books/bookSlice";

export const store = configureStore({
  reducer: {
    books: bookSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
