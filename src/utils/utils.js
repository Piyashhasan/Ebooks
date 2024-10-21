// --- truncate title ---
export const truncateText = (title, wordLimit) => {
  if (!title) return "";
  const words = title.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : title;
};

// --- category ---
export const filterByTopic = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Fiction",
    value: "fiction",
  },
  {
    name: "Literature",
    value: "literature",
  },
  {
    name: "History",
    value: "history",
  },
  {
    name: "Poetry",
    value: "poetry",
  },
  {
    name: "Drama",
    value: "drama",
  },
  {
    name: "Children",
    value: "children",
  },
  {
    name: "Movie",
    value: "movie",
  },
  {
    name: "Horror",
    value: "horror",
  },
];
