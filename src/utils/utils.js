// --- truncate title ---
export const truncateText = (title, wordLimit) => {
  if (!title) return "";
  const words = title.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : title;
};

// // --- truncate title ---
// export const truncateAuthor = (title, wordLimit = 3) => {
//   if (!title) return "";
//   const words = title.split(" ");
//   return words.length > wordLimit
//     ? words.slice(0, wordLimit).join(" ") + "..."
//     : title;
// };
