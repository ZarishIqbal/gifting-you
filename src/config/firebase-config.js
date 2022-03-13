import firebase from "@react-native-firebase/app";

import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: process.env["WEB_CLIENT_ID"],
});

const firebaseConfig = {
  apiKey: process.env["API_KEY"],
  authDomain: process.env["AUTH_DOMAIN"],
  databaseURL: process.env["DATABASE_URL"],
  projectId: process.env["PROJECT_ID"],
  storageBucket: process.env["STORAGE_BUCKET"],
  messagingSenderId: process.env["MESSAGING_SENDER_ID"],
  appId: process.env["APP_ID"],
  measurementId: process.env["MESUREMENT_ID"],
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { GoogleSignin, statusCodes };
