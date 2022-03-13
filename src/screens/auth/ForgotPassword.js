import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AppForm from "@components/form/app-form";
import AppFormField from "@components/form/app-form-field";
import * as Yup from "yup";
import SubmitButton from "@components/form/submit-button";
import auth from "@react-native-firebase/auth";
import Toast from "react-native-toast-message";

function ForgotPassword({ navigation }) {
  const resetPassword = (values) => {
    auth()
      .sendPasswordResetEmail(values.email)
      .then((userCred) => {
        Toast.show({
          type: "success",
          text1: "Reset link sent",
          text2: "Please check your email address",
        });
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Error Occurred",
          text2: error.message.split("] ")[1],
        });
        setTimeout(() => {
          Toast.hide();
          navigation.navigate("Auth");
        }, 5000);
      });
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={{ margin: 10, marginHorizontal: 25 }}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={resetPassword}
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
          <SubmitButton
            enTitle="Send Reset Link"
            ptTitle="Pt Login"
            style={{ marginVertical: 25 }}
          />
        </AppForm>
      </View>
    </View>
  );
}

export default ForgotPassword;
