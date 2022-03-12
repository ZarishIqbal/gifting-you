import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { GoogleSignin, statusCodes } from "../config/firebase-config";
import { AccessToken, LoginManager, Profile } from "react-native-fbsdk-next";
import { blankProfile } from "./helpers";
import { createProfile } from "./firebaseFunction";
import Toast from "react-native-toast-message";
import { clearState } from "./localstorage";

export const signUp = async (type, values, login) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createUserProfile = async (user) => {
        const profile = {
          ...blankProfile,
          id: user.uid,
          name: user.displayName ?? values.name,
          contact_details: {
            email: user.email ?? values.email ?? "",
            number: user.phoneNumber ?? "",
          },
          image:
            user.photoURL ??
            "https://ukdj.imgix.net/455a0284eb7a4194d11239e17b11ab2a_/generic-user-profile_354184.png?auto=compress%2Cformat&ixlib=php-3.3.0&s=1eb3025fdb7932cd02c78b3d63348e3c",
        };

        await createProfile(profile);
        resolve("success");
      };
      switch (type) {
        case "google": {
          // Get the users ID token
          const { idToken } = await GoogleSignin.signIn();

          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          // Sign-in the user with the credential
          auth()
            .signInWithCredential(googleCredential)
            .then((loggedUser) => {
              if (loggedUser.additionalUserInfo.isNewUser)
                createUserProfile(loggedUser.user);
            })
            .catch(async (error) => {
              await GoogleSignin.signOut();
              Toast.show({
                type: "error",
                text1: "Sign up failed",
                text2: error.message.split("] ")[1],
              });
            });
          break;
        }
        case "email": {
          if (login) {
            auth()
              .signInWithEmailAndPassword(values.email, values.password)
              .catch((error) => {
                Toast.show({
                  type: "error",
                  text1: "Sign in failed",
                  text2: error.message.split("] ")[1],
                });
              });
          } else
            auth()
              .createUserWithEmailAndPassword(values.email, values.password)
              .then((loggedUser) => {
                if (loggedUser.additionalUserInfo.isNewUser && values.name) {
                  createUserProfile(loggedUser.user);
                }
              })
              .catch((error) => {
                Toast.show({
                  type: "error",
                  text1: "Sign up failed",
                  text2: error.message.split("] ")[1],
                });
              });
          break;
        }
        case "fb": {
          // Get the users ID token
          LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            async (result) => {
              await AccessToken.getCurrentAccessToken().then((token) => {
                const facebookCredential = auth.FacebookAuthProvider.credential(
                  token.accessToken
                );
                if (result.grantedPermissions) {
                  auth()
                    .signInWithCredential(facebookCredential)
                    .then((loggedUser) => {
                      if (loggedUser.additionalUserInfo.isNewUser)
                        createUserProfile(loggedUser.user);
                    })
                    .catch(async (error) => {
                      await GoogleSignin.signOut();
                      Toast.show({
                        type: "error",
                        text1: "Sign up failed",
                        text2: error.message.split("] ")[1],
                      });
                    });
                }
              });
            }
          );

          break;
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const signOut = async () => {
  auth().signOut();
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {}
  try {
    AccessToken.LoginManager.logOut();
  } catch (error) {}
  clearState();
};

export const signUpWithApple = () => {
  console.log("ll");
};
