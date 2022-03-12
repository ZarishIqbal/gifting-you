import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import AppText from "./AppText";
import SingleSwitch from "./SingleSwitch";
function NotificationDropdown({ enTitle, ptTitle, notification, setState }) {
  const [open, setOpen] = useState(true);
  const [state, setLocalState] = useState(notification);
  const handleChange = (name, value) => {
    setLocalState({ ...state, [name]: value });
    setState({ ...state, [name]: value });
  };
  return (
    <View
      style={{
        backgroundColor: colors.lightgreen,
        flexDirection: "column",
        justifyContent: "center",
        borderTopWidth: 0.5,
        borderTopColor: colors.lightGrey,
      }}
    >
      <Pressable
        onPress={() => {
          setOpen(!open);
        }}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          paddingVertical: 15,
          paddingHorizontal: 5,
        }}
      >
        <AppText en={enTitle} pt={ptTitle} style={styles.text} />
        {!open ? (
          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={colors.green}
          />
        ) : (
          <MaterialCommunityIcons
            name="chevron-up"
            size={30}
            color={colors.green}
          />
        )}
      </Pressable>
      {open && (
        <ScrollView style={{ width: "100%" }}>
          <SingleSwitch
            enTitle="SMS"
            ptTitle="SMS pt"
            bgColor={colors.white}
            state={state.SMS}
            setState={(value) => handleChange("SMS", value)}
          />
          <SingleSwitch
            enTitle="Email"
            ptTitle="Email pt"
            bgColor={colors.white}
            state={state.Email}
            setState={(value) => handleChange("Email", value)}
          />
          <SingleSwitch
            enTitle="Push"
            ptTitle="Push pt"
            bgColor={colors.white}
            state={state.Push}
            setState={(value) => handleChange("Push", value)}
          />
          <SingleSwitch
            enTitle="Your Requests got selected"
            ptTitle="Your Requests got selected"
            bgColor={colors.white}
            state={state.request_left}
            setState={(value) => handleChange("request_selected", value)}
          />
          <SingleSwitch
            enTitle="Number of requests left"
            ptTitle="Number of requests left pt"
            bgColor={colors.white}
            state={state.request_left}
            setState={(value) => handleChange("request_left", value)}
          />
          <SingleSwitch
            enTitle="Subscription about to expire"
            ptTitle="pt Subscription about to expire"
            bgColor={colors.white}
            state={state.subscription_expiration}
            setState={(value) => handleChange("subscription_expiration", value)}
          />
          <SingleSwitch
            enTitle="Request to reveal contact details"
            ptTitle="pt Request to reveal contact details"
            bgColor={colors.white}
            state={state.reveal_contact}
            setState={(value) => handleChange("reveal_contact", value)}
          />
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.green,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default NotificationDropdown;
