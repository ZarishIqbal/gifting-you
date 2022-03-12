import { TOGGLE_FAVOURITE } from "../actions/favouriteActions";

const DATA = [
  {
    id: 1,
    date: "21 May 2021",
    picture: "https://picsum.photos/seed/picsum/200/300",
    enCountry: "England",
    ptCountry: "pt UK",
    enDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.",
    ptDetail:
      "pt Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.",
    likes: "4",
  },
  {
    id: 2,
    date: "21 May 2021",
    picture: "https://picsum.photos/seed/picsum/200/300",
    enCountry: "England",
    ptCountry: "pt UK",
    enDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit .",
    ptDetail:
      "pt Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.",
    likes: "5",
  },
];
const initailState = {
  data: DATA,
  favourite: [],
};

export const favouriteReducer = (state = initailState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favourite.findIndex(
        (post) => post.id === action.ID
      );
      if (existingIndex >= 0) {
        const updatedFav = [...state.favourite];
        updatedFav.splice(existingIndex, 1);
        return { ...state, favourite: updatedFav };
      } else {
        const post = state.data.find((post) => post.id === action.ID);
        return { ...state, favourite: state.favourite.concat(post) };
      }
    default:
      return state;
  }
};
