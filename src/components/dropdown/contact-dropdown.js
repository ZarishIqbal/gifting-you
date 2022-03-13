import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "@config/colors";
import AppText from "@components/text/app-text";
function ContactDropdown({
  enTitle,
  ptTitle,
  iconLeft1,
  iconLeft2,
  contact,
  setContact,
}) {
  const [open, setOpen] = useState(true);

  return (
    <View
      style={{
        backgroundColor: colors.lightgreen,
        width: "92%",
        marginHorizontal: 15,
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: colors.lightGrey,
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
        <View>
          <TextInput
            onChangeText={(text) => {
              setContact({ ...contact, email: text });
            }}
            mode="flat"
            theme={{ colors: { primary: "transparent" } }}
            placeholder="Email"
            value={contact.email}
            maxLength={100}
            style={styles.textinput}
            multiline={false}
            placeholderTextColor={colors.green}
            onEndEditing={() => {
              setOpen(false);
            }}
            left={<TextInput.Icon name={iconLeft1} color={colors.green} />}
          />
          <TextInput
            onChangeText={(text) => setContact({ ...contact, number: text })}
            mode="flat"
            theme={{ colors: { primary: "transparent" } }}
            placeholder="Mobile Number"
            value={contact.number}
            maxLength={100}
            style={styles.textinput}
            multiline={false}
            placeholderTextColor={colors.green}
            onEndEditing={() => {
              setOpen(false);
            }}
            left={<TextInput.Icon name={iconLeft2} color={colors.green} />}
          />
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
  textinput: {
    backgroundColor: colors.white,
    fontSize: 12,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});
export default ContactDropdown;
