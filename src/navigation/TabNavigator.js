import React from "react";
import MainScreen from "../screens/main/MainScreen";
import Questions from "../screens/main/Questions";
import colors from "../config/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Requests } from "../screens/main/Requests";
import { MyTabBar } from "../components/navigation/MyTabBar";
import Favourites from "../screens/drawer/Favourites";
import Profile from "../screens/drawer/Profile";
import Settings from "../screens/drawer/Settings";
import { NotificationScreen } from "../screens/drawer/NotificationScreen";
import SubsriptionPlans from "../screens/drawer/SubsriptionPlans";
import Partners from "../screens/main/Partners";
import GiftRequest from "../screens/main/GiftRequest";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} name="home" />}
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 12, marginBottom: 2 },
        tabBarStyle: { backgroundColor: colors.primary },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      intialRouteName="home"
    >
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="home"
        component={MainScreen}
      />
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Request"
        component={Questions}
      />
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Partners"
        component={Partners}
      />
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Gift Details"
        component={GiftRequest}
      />
    </Tab.Navigator>
  );
}
export function GiftsNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} name="gifts" />}
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 12, marginBottom: 2 },
        tabBarStyle: { backgroundColor: colors.primary },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Requestspage"
        component={Requests}
      />
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Partners"
        component={Partners}
      />
    </Tab.Navigator>
  );
}
export function RequestsNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} name="requests" />}
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 12, marginBottom: 2 },
        tabBarStyle: { backgroundColor: colors.primary },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="QuestionsPage"
        component={Questions}
      />
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Partners"
        component={Partners}
      />
    </Tab.Navigator>
  );
}

export function FavouritesNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 12, marginBottom: 2 },
        tabBarStyle: { backgroundColor: colors.primary },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Favourites"
        component={Favourites}
      />
    </Tab.Navigator>
  );
}
export function SubscriptionNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 12, marginBottom: 2 },
        tabBarStyle: { backgroundColor: colors.primary },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Subscription"
        component={SubsriptionPlans}
      />
    </Tab.Navigator>
  );
}

export function SettingsNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 12, marginBottom: 2 },
        tabBarStyle: { backgroundColor: colors.primary },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Setting"
        component={Settings}
      />
    </Tab.Navigator>
  );
}

export function NotificationNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 12, marginBottom: 2 },
        tabBarStyle: { backgroundColor: colors.primary },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true }}
        name="Notification"
        component={NotificationScreen}
      />
    </Tab.Navigator>
  );
}

export function ProfileNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 12, marginBottom: 2 },
        tabBarStyle: { backgroundColor: colors.primary },
        headerShown: false,
        headerStyle: { backgroundColor: colors.primary },
        headerTitleStyle: { color: colors.white },
        headerTitleAlign: "center",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{ tabBarHideOnKeyboard: true, headerTitle: "Profile" }}
        name="ProfileTab"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
