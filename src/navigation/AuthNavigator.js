import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/auth/Onboarding";
import index from "../screens/auth";
import { TermsOfService } from "../screens/Terms";
import colors from "../config/colors";
import ForgotPassword from "../screens/auth/ForgotPassword";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
      headerBackTitleStyle: { color: colors.green },
    }}
  >
    <Stack.Screen name="OnBoarding" component={Onboarding} />
    <Stack.Screen name="Auth" component={index} />
    <Stack.Screen
      options={{
        headerShown: true,
        headerTitleStyle: { color: colors.white },
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
      }}
      name="Terms"
      component={TermsOfService}
    />
    <Stack.Screen
      options={{
        headerShown: true,
        headerTitleStyle: { color: colors.white },
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
      }}
      name="Forgot Password"
      component={ForgotPassword}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
