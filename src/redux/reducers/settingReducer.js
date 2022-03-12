import { AccessType, ACTION, SubscriptionPlan } from "../constants";

const initialState = {
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
    duration: "monthly",
    expiration: new Date(),
  },
};
//   new_requests: [],
//   my_requests: [],
//   gifted_requests: [],
//   favorites: [],
// };

export const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SETTING": {
      Object.assign(state, action.payload);

      return {
        ...state,
        ...action.payload,
      };
    }
    case "UPDATE_SUBSCRIPTION": {
      return {
        ...state,
        subscription: { ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
};
