import React, { useState } from "react";
import { Pressable, Switch, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function SingleSwitch({ enTitle, ptTitle, bgColor, state, setState }) {
  const [isEnabled, setIsEnabled] = useState(state);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    setState(!isEnabled);
  };
  return (
    <Pressable
      onPress={toggleSwitch}
      style={{
        flexDirection: "row",
        backgroundColor: bgColor,
        // height: 50,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,

        paddingHorizontal: 5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: colors.lightGrey,
      }}
    >
      <AppText
        en={enTitle}
        pt={ptTitle}
        style={{
          color: colors.green,
          fontSize: 16,
          paddingVertical: 10,
          fontWeight: "bold",
          marginLeft: 5,
        }}
      />
      <Switch
        trackColor={{ false: "#767577", true: colors.green }}
        thumbColor={isEnabled ? colors.lightgreen : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Pressable>
  );
}

export default SingleSwitch;
