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
      state.pagination.currentPage = action.payload;
    },
    resetCurrentPage: (state) => {
      state.pagination.currentPage = 1;
    },
  },
});

// --- action export ---
export const { allBooks, setCurrentPage, resetCurrentPage } = bookSlice.actions;

// --- export reducer ---
export default bookSlice.reducer;
