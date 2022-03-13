import React, { useState, useEffect } from "react";
import firebase from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import moment from "moment";
import { View, StyleSheet, Image, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import colors from "@config/colors";
import { Comment } from "@assets/icons/icons";
import { userImage } from "@constants";
import AppText from "@components/text/app-text";

function MainCard({
  image,
  location,
  creationDate,
  answers,
  likes,
  uid,

  requestID,
}) {
  const userFavs = useSelector((state) => state.rootState.favourites);
  const [favourite, setFavourite] = useState(userFavs.find((uid) => requestID));
  useEffect(() => {
    setFavourite(userFavs.find((uid) => requestID));
  }, [userFavs]);
  const userLikes = useSelector((state) => state.rootState.likes);
  const [liked, setLiked] = useState(userLikes.find((uid) => requestID));
  const userId = auth().currentUser.uid;
  const likeRequest = () => {
    firebase()
      .collection("users")
      .doc(userId)
      .update({ likes: [...userLikes, requestID] });
    firebase()
      .collection("requests")
      .doc(uid)
      .set({ [requestID]: { likes: likes + 1 } }, { merge: true });
  };
  const unlikeRequest = () => {
    firebase()
      .collection("users")
      .doc(userId)
      .update({ likes: [...userLikes.filter((id) => id != requestID)] });
    firebase()
      .collection("requests")
      .doc(uid)
      .set({ [requestID]: { likes: likes - 1 } }, { merge: true });
  };

  const favRequest = () => {
    firebase()
      .collection("users")
      .doc(userId)
      .update({ favourites: [...userFavs, requestID] });
  };
  const unFavRequest = () => {
    firebase()
      .collection("users")
      .doc(userId)
      .update({ favourites: [...userFavs.filter((id) => id != requestID)] });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={{ uri: image ?? userImage }} style={styles.pic}></Image>
      </View>
      <View style={styles.details}>
        <AppText
          // en={answers[0]}
          en=""
          style={{ color: colors.green, fontWeight: "bold", fontSize: 16 }}
        />
        <Text
          style={{
            color: colors.green,
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          {moment(creationDate).format("DD MMMM YYYY") ?? ""}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Comment size={24} fill={colors.green} />
          <View
            style={{
              marginHorizontal: 5,
              width: "85%",
              minHeight: 50,
            }}
          >
            <AppText
              style={{ color: colors.green, fontSize: 14 }}
              en={answers?.join(" ") ?? ""}
              // pt={props.ptDetail}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          marginRight: 10,
          justifyContent: "space-between",
        }}
      >
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
                favRequest();
              }}
              size={28}
              color={colors.green}
            />
          )}
          {favourite && (
            <MaterialCommunityIcons
              name="star"
              onPress={() => {
                unFavRequest();
              }}
              size={28}
              color={colors.green}
            />
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.3,
            borderColor: colors.green,
            borderRadius: 20,
            marginBottom: 7,
          }}
        >
          {!liked ? (
            <MaterialCommunityIcons
              name="heart-outline"
              onPress={() => {
                setLiked(true);
                likeRequest();
              }}
              size={24}
              color={colors.primary}
              style={{ marginRight: 5 }}
            />
          ) : (
            <MaterialCommunityIcons
              name="heart"
              onPress={() => {
                setLiked(false);
                unlikeRequest();
              }}
              size={24}
              color={colors.primary}
              style={{ marginRight: 5 }}
            />
          )}
          <Text>{likes}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    minHeight: 140,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: colors.green,
    flexDirection: "row",
  },
  imagecontainer: {
    marginLeft: 10,
    marginTop: 5,
    flexDirection: "column",
    width: "15%",
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
    width: "60%",
  },
});
export default MainCard;
