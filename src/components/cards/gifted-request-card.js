import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "@config/colors";
import AppText from "@components/text/app-text";
import { Comment } from "@assets/icons/icons";
import moment from "moment";
import { getLocation } from "@utils/firebaseFunction";
import { getGeoLocation } from "@utils/helpers";
function GiftRequestCard({
  location,
  creationDate,
  answers,
  likes,
  uid,
  requestID,
}) {
  const [liked, setLiked] = useState(false);
  const [favourite, setFavourite] = useState(false);
  getGeoLocation(location.Latitude, location.Longitude);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            color: colors.green,
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          {moment(creationDate).format("DD MMM YYYY")}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: colors.green,
              borderRadius: 20,
              marginTop: 5,
              marginHorizontal: 5,
            }}
          ></View>
          {!favourite && (
            <MaterialCommunityIcons
              name="star-outline"
              onPress={() => {
                setFavourite(true);
              }}
              size={28}
              color={colors.green}
            />
          )}
          {favourite && (
            <MaterialCommunityIcons
              name="star"
              onPress={() => {
                setFavourite(false);
              }}
              size={28}
              color={colors.green}
            />
          )}
        </View>
      </View>
      <View
        style={{
          width: "90%",
          borderColor: colors.green,
          flexDirection: "row",
        }}
      >
        <Comment size={24} fill={colors.green} style={styles.imagecontainer} />
        <View style={styles.details}>
          <AppText
            style={{ color: colors.green, fontSize: 14 }}
            en={`${answers[0]}\n${answers[1]}`}
          />
        </View>
      </View>

      <View
        style={{
          borderColor: colors.green,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    minHeight: 140,
    borderRadius: 20,
    borderWidth: 0.5,
    paddingHorizontal: 15,
    paddingTop: 15,
    borderColor: colors.green,
  },
  imagecontainer: {
    marginLeft: 10,
    flexDirection: "column",
    width: "15%",
    alignItems: "center",
  },
  pic: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  details: {
    flexDirection: "column",
    marginVertical: 10,
    marginLeft: 10,
    width: "85%",
  },
});
export default GiftRequestCard;
