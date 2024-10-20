import { createSlice } from "@reduxjs/toolkit";

// --- initial state ---
const initialState = {
  books: [],
  pagination: {
    count: 0,
    next: null,
    previous: null,
  },
};

// --- book slice ---
export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    allBooks: (state, action) => {
      state.books = action?.payload?.results;
      state.pagination.count = action.payload.count;
      state.pagination.next = action.payload?.next;
      state.pagination.previous = action.payload.previous;
    },
  },
});

// --- action ---
export const { allBooks } = bookSlice.actions;

export default bookSlice.reducer;
