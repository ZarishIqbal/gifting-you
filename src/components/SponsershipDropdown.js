import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import AppText from "./AppText";

function SponsershipDropdown({ enTitle, ptTitle }) {
  const [open, setOpen] = useState(false);
  return (
    <View
      style={{
        backgroundColor: colors.lightgreen,
        height: open ? "40%" : 50,
        width: "90%",
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppText en={enTitle} pt={ptTitle} style={styles.text} />
        {!open ? (
          <MaterialCommunityIcons
            name="chevron-down"
            onPress={() => {
              setOpen(true);
            }}
            size={26}
            color={colors.green}
          />
        ) : (
          <MaterialCommunityIcons
            name="chevron-up"
            onPress={() => {
              setOpen(false);
            }}
            size={26}
            color={colors.green}
          />
        )}
      </View>
      {open && (
        <View
          style={{
            flexDirection: "column",
            alignContent: "center",
            borderColor: colors.green,
            borderStyle: "dashed",
            borderWidth: 1,
            borderRadius: 1,
            height: 100,
          }}
        ></View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.green,
    fontWeight: "600",
    marginLeft: 5,
  },
});

export default SponsershipDropdown;
