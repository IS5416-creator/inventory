export const formatCategory = (cat = "") =>
  cat
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");