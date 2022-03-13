import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import colors from "@config/colors";
import Icons from "react-native-vector-icons/AntDesign";
import { notificationType } from "@config/typings";
import AppText from "@components/text/app-text";

export const NotificationCard = ({ type, detail, date, img }) => {
  const approve = () => {
    console.log("approved");
  };
  const accept = () => {
    console.log("accept");
  };
  const reject = () => {
    console.log("reject");
  };
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={{ uri: img }} style={styles.imgContainer} />

        <View style={styles.details}>
          <AppText en={date} style={styles.text} />
          <AppText en={detail} style={styles.text} />
        </View>
      </View>
      <View style={styles.right}>
        {type == notificationType.approved ? (
          <Pressable onPress={approve} style={styles.approved}>
            <AppText en="Approved" style={styles.approvedText} />
          </Pressable>
        ) : (
          <View style={styles.requested}>
            <Pressable style={styles.requestedButton} onPress={accept}>
              <Icons name="check" size={20} color={colors.green} />
            </Pressable>
            <Pressable style={styles.requestedButton} onPress={reject}>
              <Icons name="close" size={20} color={colors.red} />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flexDirection: "row",
    padding: 10,

    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: colors.green,
  },
  imgContainer: {
    height: 63,
    aspectRatio: 1,
    borderRadius: 200,
    marginRight: 15,
  },
  left: {
    flex: 2,
    flexDirection: "row",
  },
  right: {
    flex: 1,
  },
  details: {
    justifyContent: "space-evenly",
  },
  approved: {
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  requested: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  requestedButton: {
    backgroundColor: colors.lightgreen,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.green,
  },
  approvedText: {
    color: colors.white,
    fontWeight: "bold",
  },
});
export default NotificationCard;
