import moment from "moment";
import { AccessType, SubscriptionPlan, userImage } from "../redux/constants";
import Geocoder from "react-native-geocoding";
export function toTitleCase(text, splitBy = " ") {
  if (!text) {
    return "";
  }

  return text
    .trim()
    .toLowerCase()
    .split(splitBy)
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}
export const blankProfile = {
  name: "",
  image: userImage,
  requests: 2,
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
};
export const defaultSetting = {
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
    expiration: new Date(moment().add(1, "y")),
  },
};

export const getGeoLocation = (longitude, latitude) => {
  Geocoder.from(latitude, longitude)
  .catch((error) => console.warn(error));
};
