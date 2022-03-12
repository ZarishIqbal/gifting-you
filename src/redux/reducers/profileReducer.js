const initialState = {
  profile: {
    id: "",
    name: "",
    image: "",
    requests: 0,
    gift: 0,
    gifters: 0,
    about: "",
    contact_details: {
      email: "",
      number: "",
    },
    address: "",
    social_handles: {
      fb: "",
      insta: "",
      twitter: "",
      website: "",
      youtube: "",
    },
  },
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE": {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case "UPDATE_PROFILE_IMAGE": {
      Object.assign(state, {
        ...state,
        image: action.payload,
      });
      return {
        ...state,
        image: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
