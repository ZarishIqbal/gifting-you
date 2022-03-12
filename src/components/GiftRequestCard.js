import React from "react";
import { View } from "react-native";
import colors from "../config/colors";
import { GiftCard, Giftreq } from "../icons/icons";
import AppText from "./AppText";
import { Comment } from "../icons/icons";
function GiftRequestCard({ enQuestion, enGiftdetail }) {
  return (
    <View
      style={{ flex: 1, alignSelf: "center", width: "90%", marginBottom: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 40,
          backgroundColor: colors.primary,
          alignItems: "center",
          width: "100%",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          flexGrow: 1,
        }}
      >
        <Giftreq fill={colors.white} style={{ marginLeft: 10 }} />
        <View style={{ width: "100%" }}>
          <AppText
            en={enQuestion}
            style={{
              marginHorizontal: 15,
              fontWeight: "600",
              fontSize: 14,
              color: colors.white,
              flexShrink: 1,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 40,
          backgroundColor: colors.lightgreen,
          alignItems: "center",
          width: "100%",
          minHeight: 60,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderLeftWidth: 1,
          borderColor: colors.green,
        }}
      >
        <GiftCard fill={colors.green} style={{ marginLeft: 10 }} />
        <View
          style={{ width: "100%", minHeight: 60, justifyContent: "center" }}
        >
          <AppText
            en={enGiftdetail}
            style={{
              marginLeft: 10,
              fontWeight: "600",
              fontSize: 14,
              color: colors.green,
              flexShrink: 1,
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default GiftRequestCard;
