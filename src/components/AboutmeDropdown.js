import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../config/colors";
import AppText from "./AppText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function AboutmeDropdown({
  enTitle,
  ptTitle,
  setAnswer,
  answer,
  placeholder,
  borderTop = false,
}) {
  const [open, setOpen] = useState(true);

  const [state, setState] = useState({ about: answer });
  return (
    <View
      style={{
        backgroundColor: colors.lightgreen,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: colors.lightGrey,
        width: "92%",
        marginHorizontal: 15,
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        borderTopColor: colors.lightGrey,
        borderTopWidth: borderTop ? 0.5 : 0,
        borderBottomWidth: open ? 0 : 0.5,
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
          paddingTop: 5,
          marginBottom: 10,
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
      </Pressable>
      {open && (
        <TextInput
          onChangeText={(text) => setState({ ...state, about: text })}
          mode="flat"
          theme={{
            colors: {
              primary: answer.length === 100 ? colors.red : colors.green,
            },
          }}
          placeholder={placeholder}
          value={state.about}
          maxLength={400}
          textAlign="center"
          style={{
            backgroundColor: colors.white,
            fontSize: 12,
          }}
          multiline
          placeholderTextColor={colors.green}
          onEndEditing={(e) => {
            setAnswer(state.about);
          }}
        />
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
export default AboutmeDropdown;
