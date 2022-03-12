import firebase from '@react-native-firebase/app';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '42133030624-ugd2luv5iiphsu8llhbgsfhcalfh2n9d.apps.googleusercontent.com',
});

const firebaseConfig = {
  apiKey: 'AIzaSyDfXG2NqTGryoMrUOcD6ZRKNgNzGjtpacg',
  authDomain: 'giftingyou-92605.firebaseapp.com',
  databaseURL: 'https://giftingyou-92605-default-rtdb.firebaseio.com',
  projectId: 'giftingyou-92605',
  storageBucket: 'giftingyou-92605.appspot.com',
  messagingSenderId: '42133030624',
  appId: '1:42133030624:web:e2ec6e6bf3f3508e613285',
  measurementId: 'G-W3LNSBCVXJ',
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export {GoogleSignin, statusCodes};
