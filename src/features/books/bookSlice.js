import { createSlice } from "@reduxjs/toolkit";

// --- initial state ---
const initialState = {
  books: [],
  pagination: {
    count: 0,
    next: null,
    previous: null,
    currentPage: 1,
  },
};

// --- book slice ---
export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    allBooks: (state, action) => {
      state.books = action?.payload?.results;
      state.pagination.count = action?.payload?.count;
      state.pagination.next = action.payload?.next;
      state.pagination.previous = action.payload.previous;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload; // Manually set page if needed
    },
  },
});

// --- action ---
export const { allBooks, setCurrentPage } = bookSlice.actions;

export default bookSlice.reducer;
