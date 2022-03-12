import React, { useEffect, useState } from "react";
import { View, Platform, ScrollView, Linking, Pressable } from "react-native";
import * as Yup from "yup";

import AppText from "../../components/AppText";
import AppForm from "../../components/form/AppForm";
import AppFormField from "../../components/form/AppFormField";
import IconButton from "../../components/IconButton";
import colors from "../../config/colors";
import { Signup as styles } from "../../styles/styles";
import {
  signUp,
  signUpWithApple,
  signUpWithFacebook,
  signUpWithGoogle,
} from "../../utils/authfunctions";
import SubmitButton from "../../components/form/SubmitButton";
import { blankProfile } from "../../utils/helpers";
import auth from "@react-native-firebase/auth";
import { createProfile } from "../../utils/firebaseFunction";
import Toast from "react-native-toast-message";

function Signup({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideCPassword, setHideCPassword] = useState(true);

  const [visible, setVisible] = useState({
    state: false,
    enmodalMessage: "",
    ptmodalMessage: "",
  });
  const signUpWithEmail = (values) => {
    console.log("hrll");
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(({ user }) => {
        const profile = {
          ...blankProfile,
          id: user.uid,
          name: values.name,
          contact_details: {
            email: user.email ?? "",
            number: user.phoneNumber ?? "",
          },
          image:
            user.photoURL ??
            "https://ukdj.imgix.net/455a0284eb7a4194d11239e17b11ab2a_/generic-user-profile_354184.png?auto=compress%2Cformat&ixlib=php-3.3.0&s=1eb3025fdb7932cd02c78b3d63348e3c",
        };
        createProfile(profile);
        user.sendEmailVerification();
      })
      .catch((error) => {
        console.log(error.message);
        if (error.code === "auth/email-already-in-use") {
          setVisible({
            ...visible,
            state: true,
            enmodalMessage: "That email address is already in use!",
            ptmodalMessage: "That email address is already in use!",
          });
          setTimeout(() => {
            setVisible(false);
          }, 2000);
        } else if (error.code === "auth/invalid-email") {
          setVisible({
            state: true,
            enmodalMessage: "That email address is invalid!",
            ptmodalMessage: "That email address is invalid!",
          });
          setTimeout(() => {
            setVisible(false);
          }, 2000);
        } else
          setVisible({
            state: true,
            enmodalMessage: error.message.split("] ")[1],
            ptmodalMessage: error.message.split("] ")[1],
          });
        setTimeout(() => {
          setVisible(false);
        }, 2000);
      });
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please provide your name"),
    email: Yup.string()
      .required("Please provide a valid email")
      .email()
      .label("Email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
      ),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  useEffect(() => {
    if (visible.state) {
      Toast.show({
        type: "error",
        text1: "Error Occured",
        text2: visible.enmodalMessage,
      });
      setTimeout(() => {
        Toast.hide();
      }, 5000);
    }
  }, [visible]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 10, marginHorizontal: 25 }}>
          <AppText
            style={{
              color: colors.green,
              fontSize: 16,
              paddingVertical: 10,
              fontWeight: "bold",
            }}
            en="Create an Account"
            pt="pt create account"
          />

          <AppForm
            initialValues={{
              name: "",
              password: "",
              passwordConfirmation: "",
              email: "",
            }}
            onSubmit={(values) => signUp("email", values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              label="Name"
              autoCorrect={false}
              name="name"
              placeholder="Name"
              iconLeft="account"
            />
            <AppFormField
              autoCapitalize="none"
              label="Email"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              iconLeft="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              label="Password"
              iconLeft="lock"
              icon="eye"
              onIconPress={() => setHidePassword((val) => !val)}
              name="password"
              secureTextEntry={hidePassword}
              textContentType="password"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              label="Confirm Password"
              iconLeft="lock"
              icon="eye"
              onIconPress={() => setHideCPassword((val) => !val)}
              name="passwordConfirmation"
              secureTextEntry={hideCPassword}
              textContentType="password"
            />
            <SubmitButton
              enTitle="Sign up"
              ptTitle="Pt Signup"
              fontSize={20}
              style={{ marginVertical: 25 }}
              // onPress={() => navigation.navigate("MainScreen")}
            />
          </AppForm>

          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View style={styles.bar} />
            <AppText
              style={{
                alignSelf: "center",
                paddingHorizontal: 5,
                color: colors.green,
                fontSize: 16,
                fontWeight: "bold",
              }}
              en="OR Sign up with"
              pt="pt signup with"
            />

            <View style={styles.bar} />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <IconButton
              onPress={() => signUp("fb")}
              src={require("../../assests/Fb.png")}
            />
            <IconButton
              onPress={() => signUp("google")}
              src={require("../../assests/google.png")}
            />
            {Platform.OS === "ios" && (
              <IconButton
                onPress={signUpWithApple}
                src={require("../../assests/apple.png")}
              />
            )}
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
            marginBottom: 5,
            flexDirection: "row",
          }}
        >
          <AppText
            en="By using Gifting You, you agree with our "
            style={{ color: colors.green }}
          />

          <Pressable
            onPress={async () => {
              navigation.navigate("Terms");
            }}
          >
            <AppText
              en="TERMS"
              style={{ color: colors.green, textDecorationLine: "underline" }}
            />
          </Pressable>
        </View>

        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            flexDirection: "row",
          }}
          onPress={async () => {
            const url = "https://giftingyou-web-dev.herokuapp.com/";
            const supported = await Linking.canOpenURL(url);

            if (supported) {
              // Opening the link with some app, if the URL scheme is "http" the web link should be opened
              // by some browser in the mobile
              await Linking.openURL(url);
            }
          }}
        >
          <AppText
            en="Learn more at "
            style={{
              color: colors.green,
              fontSize: 12,
            }}
          />
          <AppText
            en="giftingyou.co"
            style={{
              color: colors.green,
              fontSize: 12,
              textDecorationLine: "underline",
            }}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default Signup;
