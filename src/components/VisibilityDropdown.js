import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import AppText from "./AppText";
import { Dropdown } from "./Dropdown";
// import { Picker } from "@react-native-picker/picker";
function VisibilityDropdown({ enTitle, ptTitle, visibility, setState }) {
  const [state, setLocalState] = useState({
    profile: visibility.profile,
    request: visibility.request,
    sponsor: visibility.sponsor,
  });
  const [open, setOpen] = useState(true);
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: colors.lightgreen,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: colors.lightGrey,

        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        borderTopColor: colors.lightGrey,
        borderTopWidth: 0.5,
        borderBottomWidth: open ? 0 : 0.5,
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 15,
          paddingHorizontal: 5,
        }}
        onPress={() => {
          setOpen(!open);
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
        <View>
          <View
            style={[
              styles.picker,
              {
                borderBottomWidth: 0.5,
                borderTopWidth: 0.5,
              },
            ]}
          >
            <AppText en="Profile" pt="Profile pt" style={styles.ddtext} />
            <Dropdown
              selectedValue={state.profile}
              onValueChange={(value) => {
                setState({ ...state, profile: value });
                setLocalState({ ...state, profile: value });
              }}
              options={["public", "private", "anonymous"]}
            />
          </View>
          <View
            style={[
              styles.picker,
              {
                borderBottomWidth: 0.5,
              },
            ]}
          >
            <AppText en="Requests" pt="Requests pt" style={styles.ddtext} />
            <Dropdown
              selectedValue={state.request}
              onValueChange={(value) => {
                setState({ ...state, request: value });
                setLocalState({ ...state, request: value });
              }}
              options={["public", "private", "community"]}
            />
          </View>
          <View
            style={[
              styles.picker,
              {
                borderBottomWidth: 0.5,
              },
            ]}
          >
            <AppText en="Sponsor" pt="Sponsor pt" style={styles.ddtext} />
            <Dropdown
              selectedValue={state.sponsor}
              onValueChange={(value) => {
                setState({ ...state, sponsor: value });
                setLocalState({ ...state, sponsor: value });
              }}
              options={["public", "private", "community"]}
            />
          </View>
        </View>
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
  ddtext: {
    fontSize: 16,
    color: colors.green,
    fontWeight: "bold",
    marginLeft: 5,
  },
  picker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: 5,

    borderColor: colors.lightGrey,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
  },
  dropdown: {
    width: 150,
    color: colors.green,
    backgroundColor: "red",
  },
});

export default VisibilityDropdown;
