export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

export const toggleFavoutite = (id) => {
  return { type: TOGGLE_FAVOURITE, ID: id };
};
