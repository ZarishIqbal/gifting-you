import {
  getFavs,
  getLikes,
  getPlans,
  getProfile,
  getQuestions,
} from "@utils/firebaseFunction";
import { updateProfile } from "@actions/profileActions";
import { updateSetting } from "@actions/settingActions";
import {
  setFavourites,
  setLikes,
  setMyRequests,
  setPlan,
  setQuestions,
  setRequest,
} from "./actions/rootStateActions";
import firebase from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const loadInitialState = (dispatch) => {
  return firebase()
    .collection("users")
    .onSnapshot(async (complete) => {
      getQuestions().then((questions) => {
        dispatch(setQuestions(questions));
      });
      getPlans().then((plans) => dispatch(setPlan(plans)));
      getProfile().then((user) => {
        dispatch(updateProfile(user.profile));
        dispatch(
          updateSetting({
            ...user.setting,
            subscription: {
              ...user.setting.subscription,
              expiration: user.setting.subscription.expiration.toDate(),
            },
          })
        );
      });
      getLikes().then((likes) => {
        console.log(likes);
        dispatch(setLikes(likes));
      });
      getFavs().then((favs) => {
        console.log(favs);
        dispatch(setFavourites(favs));
      });
    });
};
export const loadRequests = (dispatch) => {
  const user = auth().currentUser;
  const db = firebase().collection("requests");

  return db.onSnapshot((complete) => {
    db.doc(user.uid)
      .get()
      .then((requests) => {
        dispatch(setMyRequests(requests.data()));
      });

    db.where(firebase.FieldPath.documentId(), "!=", user.uid)
      .get()
      .then((requests) => {
        dispatch(
          setRequest(
            Object.values(requests.docs).reduce((agg, item) => {
              return { ...agg, ...item.data() };
            }, {})
          )
        );
      });
  });
};

export default loadInitialState;
