import React from "react";
import auth from "@react-native-firebase/auth";
import { Linking, Text, View, Dimensions } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import colors from "../../config/colors";
import AppText from "../AppText";
import { DrawerLogout } from "../../icons/icons";
import { elevation } from "../../styles/styles";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { clearState } from "../../utils/localstorage";
import { signOut } from "../../utils/authfunctions";

function DrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        margin: 0,
        backgroundColor: "transparent",
      }}
    >
      <DrawerItemList {...props} />
      <DrawerItem
        onPress={signOut}
        activeBackgroundColor={colors.green}
        // inactiveBackgroundColor={colors.lightgreen}
        activeTintColor={colors.white}
        inactiveTintColor={colors.white}
        labelStyle={elevation}
        label={() => <Text style={{ color: colors.white }}>Logout</Text>}
        style={{
          height: 50,
          width: "100%",
          marginTop: 0,
          marginLeft: 0,
          marginBottom: 0,
          marginRight: 0,

          borderColor: colors.green,
        }}
        icon={({ focused, size }) => {
          return (
            <DrawerLogout
              fill={focused ? colors.white : colors.white}
              size={size}
              style={{ marginLeft: 5 }}
            />
          );
        }}
      />
      <View
        style={{
          backgroundColor: "transparent",
          height: Dimensions.get("screen").height / 1.85,
          flexDirection: "column-reverse",
        }}
      >
        <DrawerItem
          style={{
            width: "100%",
          }}
          labelStyle={{
            color: colors.green,
            fontSize: 14,
          }}
          label={() => (
            <>
              <Text style={{ color: colors.white, fontSize: 10 }}>
                Learn more at giftingyou.co
              </Text>

              <Text style={{ color: colors.white, fontSize: 10 }}>
                © v1.0.0 Gifting You 2021
              </Text>
            </>
          )}
          onPress={() =>
            Linking.openURL("https://giftingyou-web-dev.herokuapp.com/")
          }
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
