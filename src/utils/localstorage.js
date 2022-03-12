import AsyncStorage from "@react-native-async-storage/async-storage";
import { AccessType, SubscriptionPlan, userImage } from "../redux/constants";
const initialState = {
  profile: {
    id: "",
    name: "",
    image: userImage,
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
  settings: {
    visibility: {
      profile: AccessType.PRIVATE,
      request: AccessType.PRIVATE,
      sponsor: AccessType.PRIVATE,
    },
    notification: {
      SMS: false,
      Email: false,
      Push: false,
      request_selected: false,
      request_left: false,
      subscription_expiration: false,
      reveal_contact: false,
    },
    subscription: {
      plan: SubscriptionPlan.FREE,
      duraction: "monthly",
    },
  },
  // new_requests: [],

  my_requests: [],
  // gifted_requests: [],
  favourites: [],
  questions: {},
  likes: [],
};
export const loadState = () => {
  AsyncStorage.getItem("state")
    .then((state) => {
      if (state === null) {
        return initialState;
      }
      return JSON.parse(state ?? initialState);
    })
    .catch((ex) => {
      console.log(ex);
      return initialState;
    });
};

export const saveState = (state) => {
  const state_string = JSON.stringify(state);
  AsyncStorage.setItem("state", state_string);
};

export const clearState = () => {
  AsyncStorage.removeItem("state");
};
