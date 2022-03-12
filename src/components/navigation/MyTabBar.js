import React, { useEffect, useState } from "react";

import { TouchableOpacity, View, Platform } from "react-native";

import LinearGradient from "react-native-linear-gradient";
import colors from "../../config/colors";

import {
  GiftIcon,
  Home1Icon,
  RequestIcon,
  RequestSelectedIcon,
} from "../../icons/icons";

export function MyTabBar({ route, navigation, name }) {
  const [color, setColor] = useState([
    colors.white,
    colors.white,
    colors.white,
  ]);
  useEffect(() => {
    switch (name) {
      case "home":
        setColor([colors.green, colors.white, colors.white]);
        break;
      case "gifts":
        setColor([colors.white, colors.green, colors.white]);

        break;
      case "requests":
        setColor([colors.white, colors.white, colors.green]);
        break;
    }
  }, []);
  const myGradientColor = [
    "#efc4c7",
    "rgba(204, 113, 120, 0.9)",
    "rgba(204, 113, 120, 0.9)",
    // "#ffd9dc",
  ];

  return (
    <View style={{ backgroundColor: colors.background }}>
      <LinearGradient
        colors={myGradientColor}
        style={{ flex: 1 }}
        style={{
          flexDirection: "row",
          width: "100%",
          height: 65,
          justifyContent: "space-around",
          alignSelf: "center",
          paddingTop: 15,
          backgroundColor: colors.primary,
          borderTopWidth: 1,
          borderTopColor: "#eeeeee",
          elevation: 2,
          shadowColor: "#999",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          paddingBottom: Platform.OS === "ios" ? 25 : 15,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            setColor([colors.green, colors.white, colors.white]);
            navigation.navigate("Home");
          }}
        >
          <Home1Icon width={30} height={30} fill={color[0]} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            setColor([colors.white, colors.green, colors.white]);
            navigation.navigate("Gifts");
          }}
        >
          <GiftIcon width={45} height={45} fill={color[1]} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            setColor([colors.white, colors.white, colors.green]);
            navigation.navigate("Requests");
          }}
        >
          {color[2] === colors.green ? (
            <RequestSelectedIcon width={30} height={30} fill={color[2]} />
          ) : (
            <RequestIcon width={30} height={30} fill={color[2]} />
          )}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
