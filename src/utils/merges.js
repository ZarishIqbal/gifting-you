import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

import Toast from "react-native-toast-message";
export const firestoreMerge = async (path, prefix) => {
  try {
    const date = new Date();
    const uid = auth().currentUser.uid;
    if (prefix)
      await firestore()
        .collection(path[0])
        .doc(uid)
        .update({ [prefix]: path[1], lastUpdated: date });
    else {
      Toast.show({
        type: "error",
        text1: "Error Occured",
        text2: "Your changes were not updated. Please try again!",
      });
    }
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Error Occured",
      text2: "Your changes were not updated. Please try again!",
    });
  }
};
