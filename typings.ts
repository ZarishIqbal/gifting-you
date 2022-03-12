interface users {
  [id: string]: User;
}
interface User {
  creationDate: Date;
  lastUpdated: Date;
  profile: Profile;
  settings: Setting;
  requests:Request[]
  favorites:[]
  notification:[]
}
interface Profile {
  id: string;
  name: string;
  image: string;
  about: string;
  address: string;
  location: Location;
  contact_details: {
    email: string;
    number: string;
  };
  gift: number;
  gifters: number;
  requests: number;
  social_handles: {
    fb: string;
    insta: string;
    twitter: string;
    website: string;
    youtube: string;
  };
}
interface Setting {
  notification: {
    Email: boolean;
    Push: boolean;
    SMS: boolean;
    request_left: boolean;
    request_selected: boolean;
    reveal_contact: boolean;
    subscription_expiration: boolean;
  };
  subscription: {
    duration: "monthly" | "yearly";
    plan: "FREE" | "GIFTAS" | "FULL";
  };
  visibility: {
    profile: "private" | "public" | "anonymous";
    request: "private" | "public" | "community";
    sponsor: "private" | "public" | "community";
  };
}
interface Request{
    [qid:string]:[answer:string]
}
