const initialState = {
  questions: {},
  plans: {},
  my_requests: {},
  requests: {},
  likes: [],
  favourites: [],
};

export const rootStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: { ...action.payload } };
    case "SET_PLAN":
      return { ...state, plans: { ...action.payload } };
    case "SET_MYREQUESTS":
      return {
        ...state,
        my_requests: { ...state.my_requests, ...action.payload },
      };
    case "SET_FAVOURITES":
      return { ...state, favourites: action.payload };
    case "REMOVE_FAVOURITES":
      return { ...state, favourites: [] };

    case "SET_REQUEST":
      return { ...state, requests: { ...action.payload } };
    case "UPDATE_REQUEST":
      return { ...state, requests: { ...state.requests, ...action.payload } };
    case "SET_LIKES":
      return { ...state, likes: action.payload };

    default:
      return state;
  }
};
