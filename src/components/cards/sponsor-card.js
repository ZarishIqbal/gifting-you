import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "@components/text/app-text";

function SponserCard({ name, img }) {
  return (
    <View style={styles.profile}>
      <Image source={{ uri: img }} style={styles.picture}></Image>
      <AppText
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          color: colors.green,
        }}
        en={name}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  profile: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  picture: {
    aspectRatio: 1,
    width: 85,
    borderRadius: 50,
  },
});

export default SponserCard;
