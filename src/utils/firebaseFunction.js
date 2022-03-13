import React from "react";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { defaultSetting } from "./helpers";
import storage from "@react-native-firebase/storage";

import GeoLocation from "react-native-geolocation-service";
import uuid from "react-native-uuid";
const db = firestore().collection("giftingyou-dev");
const usersDB = firestore().collection("users");

export const createProfile = async (user) => {
  const date = new Date();
  await usersDB.doc(user.id).set({
    uid: user.id,
    profile: user,
    setting: defaultSetting,
    creationDate: date,
  });
};

export const getProfile = async () => {
  return new Promise(async (resolve, reject) => {
    const user = auth().currentUser;
    await usersDB
      .doc(user.uid)
      .get()
      .then((data) => resolve(data.data()))
      .catch((error) => reject(error));
  });
};

export const getQuestions = async () => {
  return new Promise(async (resolve, reject) => {
    await db
      .doc("questions")
      .get()
      .then((data) => resolve(data.data().questions))
      .catch((error) => reject(error));
  });
};

export const getPlans = async () => {
  return new Promise(async (resolve, reject) => {
    db.doc("plans")
      .get()
      .then((data) => resolve(data.data()))
      .catch((error) => reject(error));
  });
};

export const setAnswers = async (answers) => {
  const user = auth().currentUser;
  await usersDB
    .doc(user.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((element) => {
        if (element.requests !== 0) {
          firestore()
            .collection("users")
            .doc(user.uid)
            .update({
              profile: {
                requests: requests - 1,
              },
            });
        }
      });
    });
};

export const uploadImageToStorage = (path) => {
  const uid = (auth().currentUser || {}).uid;
  let reference = storage().ref(`users/pictures/${uid}`);
  let task = reference.putFile(path);

  task
    .then(() => {
      console.log("Image uploaded to the bucket!");
    })
    .catch((e) => console.log("Uploading image error => ", e));
};

export const updateImage = async (image) => {
  const uid = (auth().currentUser || {}).uid;
  await firestore()
    .collection("users")
    .doc(uid)
    .set(
      {
        profile: {
          image: image,
        },
      },
      { merge: true }
    );
};
export const getRequests = async () => {
  const requests = [];
  requests.push(
    new Promise(async (resolve, reject) => {
      await usersDB
        .get()
        .then((users) => {
          //fix later
          users.docs.forEach((request) => {
            if (request.data().my_requests)
              resolve({
                requests: request.data().my_requests,
                country: "England",
              });
          });
        })
        .catch((error) => reject(error));
    })
  );
  return Promise.all(requests);
};

export const getLikes = async () => {
  const user = auth().currentUser;
  return new Promise(async (resolve, reject) => {
    await usersDB
      .doc(user.uid)
      .get()
      .then((data) => resolve(data.data().likes ?? []))
      .catch((error) => reject(error));
  });
};
export const getFavs = async () => {
  const user = auth().currentUser;
  return new Promise(async (resolve, reject) => {
    await usersDB
      .doc(user.uid)
      .get()
      .then((data) => resolve(data.data().favourites ?? []))
      .catch((error) => reject(error));
  });
};

export const addRequest = async (image, answers) => {
  const user = auth().currentUser.uid;
  getLocation().then((coords) => {
    firestore()
      .collection("requests")
      .doc(user)
      .set(
        {
          [uuid.v4()]: {
            answers: answers,
            uid: user,
            location: {
              Latitude: coords.latitude,
              Longitude: coords.longitude,
            },
            creationDate: new Date(),
            image: image,
            likes: 0,
          },
        },
        { merge: true }
      );
  });
};
export const getLocation = async () => {
  return new Promise((resolve, reject) => {
    try {
      GeoLocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true, // Whether to use high accuracy mode or not
          timeout: 15000, // Request timeout
          maximumAge: 10000, // How long previous location will be cached
        }
      );
    } catch (er) {
      console.warn(er);
    }
  });
};
