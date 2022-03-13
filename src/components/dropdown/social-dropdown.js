import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import colors from "@config/colors";
import {
  Facebook,
  Instgram,
  Twitter,
  Website,
  Youtube,
} from "@assets/icons/icons";
import AppText from "@components/text/app-text";
function SocialDropdown({
  socials,
  setSocial,
  enTitle,
  ptTitle,
  placeHolder1 = "Add Facebook",
  placeHolder2 = "Add Instagram",
  placeHolder3 = "Add Twitter",
  placeHolder4 = "Add Personal Website Link",
  placeHolder5 = "Add Youtube Video",
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
              //console.log('up');
            }}
            size={26}
            color={colors.green}
          />
        ) : (
          <MaterialCommunityIcons
            name="chevron-up"
            onPress={() => {
              setOpen(false);
              //console.log("down");
            }}
            size={26}
            color={colors.green}
          />
        )}
      </Pressable>
      {open && (
        <View>
          <TextInput
            onChangeText={(text) => setSocial(text, "fb")}
            mode="flat"
            theme={{ colors: { primary: colors.green } }}
            placeholder={placeHolder1}
            value={socials["fb"]}
            maxLength={100}
            style={styles.textinput}
            multiline={false}
            placeholderTextColor={colors.green}
            onEndEditing={() => {
              setOpen(false);
            }}
            left={
              <TextInput.Icon name={() => <Facebook fill={colors.green} />} />
            }
          />
          <TextInput
            onChangeText={(text) => setSocial(text, "insta")}
            mode="flat"
            theme={{ colors: { primary: colors.green } }}
            placeholder={placeHolder2}
            value={socials["insta"]}
            maxLength={100}
            style={styles.textinput}
            multiline={false}
            placeholderTextColor={colors.green}
            onEndEditing={() => {
              setOpen(false);
            }}
            left={
              <TextInput.Icon name={() => <Instgram fill={colors.green} />} />
            }
          />
          <TextInput
            onChangeText={(text) => setSocial(text, "twitter")}
            mode="flat"
            theme={{ colors: { primary: colors.green } }}
            placeholder={placeHolder3}
            value={socials["twitter"]}
            maxLength={100}
            style={styles.textinput}
            multiline={false}
            placeholderTextColor={colors.green}
            onEndEditing={() => {
              setOpen(false);
            }}
            left={
              <TextInput.Icon name={() => <Twitter fill={colors.green} />} />
            }
          />
          <TextInput
            onChangeText={(text) => setSocial(text, "website")}
            mode="flat"
            theme={{ colors: { primary: colors.green } }}
            placeholder={placeHolder4}
            value={socials["website"]}
            maxLength={100}
            style={styles.textinput}
            multiline={false}
            placeholderTextColor={colors.green}
            onEndEditing={() => {
              setOpen(false);
            }}
            left={
              <TextInput.Icon name={() => <Website fill={colors.green} />} />
            }
          />
          <TextInput
            onChangeText={(text) => setSocial(text, "youtube")}
            mode="flat"
            theme={{ colors: { primary: colors.green } }}
            placeholder={placeHolder5}
            value={socials["youtube"]}
            maxLength={100}
            style={styles.textinput}
            multiline={false}
            placeholderTextColor={colors.green}
            onEndEditing={() => {
              setOpen(false);
            }}
            left={
              <TextInput.Icon
                name={() => (
                  <Feather name="youtube" size={25} color={colors.green} />
                )}
              />
            }
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
export default SocialDropdown;
