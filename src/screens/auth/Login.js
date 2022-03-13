import React, { useEffect, useState } from "react";
import { View, Platform, Pressable } from "react-native";
import AppText from "@components/text/app-text";
import AppForm from "@components/form/app-form";
import AppFormField from "@components/form/app-form-field";
import IconButton from "@components/buttons/icon-button";
import colors from "@config/colors";
import { Signup as styles } from "@styles/styles";
import * as Yup from "yup";
import SubmitButton from "@components/form/submit-button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import { signUp } from "@utils/authfunctions";
import Toast from "react-native-toast-message";
import { AppleLogo, FacebookIcon, GoogleIcon } from "@assets";

function Login(props) {
  const [visible, setVisible] = useState({
    state: false,
    enmodalMessage: "",
    ptmodalMessage: "",
  });

  const [state, setState] = useState({
    forgotPassword: false,
  });

  if (state.forgotPassword) {
    setState({ forgotPassword: false });
    props.navigation.navigate("Forgot Password");
  }
  const handleError = (error) => {
    if (error.code === "auth/email-already-in-use") {
      setVisible({
        ...visible,
        state: true,
        enmodalMessage: "That email address is already in use, please LOGIN",
        ptmodalMessage: "That email address is already in use, please LOGIN",
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
  };

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

  const signInWithEmail = (values) => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCred) => {
        AsyncStorage.multiSet([
          ["id", userCred.user.uid],
          ["user", JSON.stringify(userCred.user)],
        ]).then((call) => console.log(call));
      })
      .catch((error) => handleError(error));
  };
  const [hidePassword, setHidePassword] = useState(true);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string()
      .required("Invalid Password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
      ),
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={{ margin: 10, marginHorizontal: 25 }}>
        <AppText
          style={{
            color: colors.green,
            fontSize: 16,
            paddingVertical: 10,
            fontWeight: "bold",
          }}
          en="Log into your Account"
          pt="pt create account"
        />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => signUp("email", values, true)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            label="Email"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            iconLeft="email"
            placeholder="Email"
            textContentType="emailAddress"
            onIconPress={() => console.log("clear email value")}
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
          <Pressable
            onPress={() => setState({ forgotPassword: true })}
            style={{
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <AppText en="Forgot Password?" style={{ color: colors.green }} />
          </Pressable>
          <SubmitButton
            enTitle="Log in"
            ptTitle="Pt Login"
            style={{ marginVertical: 25 }}
          />
        </AppForm>

        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={styles.bar} />
          <AppText
            style={{
              alignSelf: "center",
              paddingHorizontal: 5,
              fontSize: 16,
              color: colors.green,
              fontWeight: "bold",
            }}
            en="OR Login with"
            pt="pt Login with"
          />

          <View style={styles.bar} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <IconButton
            onPress={() => signUp("fb", undefined, true)}
            src={FacebookIcon}
          />
          <IconButton onPress={() => signUp("google")} src={GoogleIcon} />
          {Platform.OS === "ios" && (
            <IconButton
              onPress={() => {
                console.log("Pressed");
              }}
              src={AppleLogo}
            />
          )}
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
          flexDirection: "row",
        }}
      >
        <AppText en="Need a free account? " style={{ color: colors.green }} />
        <Pressable onPress={props.goToSignUp}>
          <AppText
            en="Click Here"
            style={{ color: colors.green, textDecorationLine: "underline" }}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default Login;
