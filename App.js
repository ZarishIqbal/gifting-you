import configureStore from "./store/configure-store";
import React, { Component, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { Provider, useSelector } from "react-redux";
import Geolocation from "react-native-geolocation-service";
import SplashScreen from "react-native-splash-screen";

import LinearGradient from "react-native-linear-gradient";
import colors from "./src/config/colors";
import Toast from "react-native-toast-message";
import { firebase } from "@react-native-firebase/firestore";
import { store } from "./store/store";
import { clearState } from "./src/utils/localstorage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { debounce } from "./src/utils";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: auth().currentUser };
    LogBox.ignoreAllLogs(true);
    AsyncStorage.setItem("lan", "en");
  }

  // Handle user state changes

  componentDidMount() {
    firebase.auth().onUserChanged((user) => {
      if (user) {
        debounce(this.setState({ user: user }), 2000);
      } else {
        this.setState({ user: null });
      }
    });

    SplashScreen.show();
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  render() {
    const myGradientColor = [colors.lightgreen, colors.lightgreen];
    return (
      <Provider store={store}>
        <NavigationContainer>
          {/* <DrawerNavigator /> */}
          {this.state.user ? (
            <LinearGradient colors={myGradientColor} style={{ flex: 1 }}>
              <DrawerNavigator />
            </LinearGradient>
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>

        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
    );
  }
}
