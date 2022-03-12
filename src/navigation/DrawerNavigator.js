import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import colors from "../config/colors";
import AppText from "../components/AppText";

import {
  DrawerFavourite,
  DrawerNotifications,
  DrawerSettings,
  DrawerSubscription,
  RequestIcon,
} from "../icons/icons";

import TabNavigator, {
  FavouritesNavigator,
  GiftsNavigator,
  NotificationNavigator,
  ProfileNavigator,
  RequestsNavigator,
  SettingsNavigator,
  SubscriptionNavigator,
} from "./TabNavigator";
import DrawerContent from "../components/navigation/DrawerContent";
import { useDispatch, useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import firebase from "@react-native-firebase/firestore";
import loadInitialState, { loadRequests } from "../redux/initialState";
import { userImage } from "../redux/constants";

const myGradientColor = ["rgba(204, 113, 120, 0.6)", "rgba(71, 129, 126, 1)"];
function DrawerNavigator(props) {
  const Drawer = createDrawerNavigator();
  const profile = useSelector((state) => state.profile.profile);

  const dispatch = useDispatch();
  useEffect(() => {
    const subscribeUser = loadInitialState(dispatch);
    const subscribeRequests = loadRequests(dispatch);
    return () => {
      subscribeUser();
      subscribeRequests();
    };
  }, [firebase]);

  return (
    <LinearGradient
      colors={myGradientColor}
      style={{ flex: 1 }}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.8, y: 0.2 }}
    >
      <Drawer.Navigator
        drawerContent={DrawerContent}
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "transparent",
            width: "100%",
            height: "100%",
          },

          drawerType: "slide",
          drawerActiveBackgroundColor: colors.green,
          drawerActiveTintColor: colors.white,
          drawerInactiveTintColor: colors.white,
          headerStyle: { backgroundColor: colors.primary },
          headerTitleStyle: { color: colors.white },
          headerTitleAlign: "center",
          headerTintColor: colors.white,
        }}
      >
        <Drawer.Screen
          options={{
            unmountOnBlur: true,
            drawerItemStyle: {
              width: "100%",
              marginLeft: 0,
              backgroundColor: "transparent",
              marginBottom: 0,
            },
            drawerIcon: ({ focused, size }) => {
              return (
                <Image
                  source={{
                    uri: profile?.image ?? userImage,
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 5,
                    borderRadius: 200,
                  }}
                />
              );
            },
            drawerLabel: ({ focused, color }) => {
              return (
                <View style={{ width: "100%" }}>
                  <AppText
                    en={profile?.name}
                    style={{
                      fontSize: 20,
                      color: colors.white,
                    }}
                  />
                </View>
              );
            },
          }}
          name="Profile"
          component={ProfileNavigator}
        />
        <Drawer.Screen
          options={{
            headerShown: false,
            unmountOnBlur: true,
            drawerItemStyle: {
              height: 0,
            },
          }}
          name="Gifts"
          component={GiftsNavigator}
        />
        <Drawer.Screen
          options={{
            headerShown: false,
            unmountOnBlur: true,
            drawerItemStyle: {
              height: 0,
            },
          }}
          name="Home"
          component={TabNavigator}
        />
        <Drawer.Screen
          options={{
            unmountOnBlur: true,
            drawerItemStyle: {
              borderColor: colors.green,
              width: "100%",
              marginTop: 0,
              marginHorizontal: 0,
              borderRadius: 0,
              marginBottom: 0,
            },
            drawerIcon: ({ focused, size }) => {
              return (
                <DrawerFavourite
                  fill={focused ? colors.white : colors.white}
                  size={size}
                  style={{ marginLeft: 5 }}
                />
              );
            },
          }}
          name="Favourites"
          component={FavouritesNavigator}
        />

        <Drawer.Screen
          options={{
            unmountOnBlur: true,
            drawerItemStyle: {
              borderColor: colors.green,
              width: "100%",
              marginTop: 0,
              marginHorizontal: 0,
              borderRadius: 0,
              marginBottom: 0,
            },
            drawerIcon: ({ focused, size }) => {
              return (
                <DrawerSubscription
                  fill={focused ? colors.white : colors.white}
                  size={size}
                  style={{ marginLeft: 5 }}
                />
              );
            },
          }}
          name="Subscription Plans"
          component={SubscriptionNavigator}
        />
        <Drawer.Screen
          options={{
            unmountOnBlur: true,
            drawerItemStyle: {
              marginTop: 0,

              marginHorizontal: 0,
              borderRadius: 0,
              marginBottom: 0,
              borderColor: colors.green,
              width: "100%",
            },
            drawerIcon: ({ focused, size }) => {
              return (
                <DrawerSettings
                  fill={focused ? colors.white : colors.white}
                  size={size}
                  style={{ marginLeft: 5 }}
                />
              );
            },
          }}
          name="Settings"
          component={SettingsNavigator}
        />
        <Drawer.Screen
          options={{
            unmountOnBlur: true,
            drawerItemStyle: {
              marginTop: 0,

              marginHorizontal: 0,
              borderRadius: 0,
              marginBottom: 0,
              borderColor: colors.green,
              width: "100%",
            },
            drawerIcon: ({ focused, size }) => {
              return (
                <DrawerNotifications
                  fill={focused ? colors.white : colors.white}
                  size={size}
                  style={{ marginLeft: 5 }}
                />
              );
            },
          }}
          name="Notifications"
          component={NotificationNavigator}
        />
        <Drawer.Screen
          options={{
            headerShown: false,
            unmountOnBlur: true,
            drawerItemStyle: {
              borderColor: colors.green,
              width: "100%",
              marginBottom: 0,
              marginHorizontal: 0,
              borderRadius: 0,
              marginTop: 0,
              height: 0,
            },

            drawerIcon: ({ focused, size }) => {
              return (
                <RequestIcon
                  fill={focused ? colors.white : colors.white}
                  width={35}
                  style={{ marginLeft: 2 }}
                />
              );
            },
          }}
          name="Requests"
          component={RequestsNavigator}
        />
      </Drawer.Navigator>
    </LinearGradient>
  );
}

export default DrawerNavigator;
