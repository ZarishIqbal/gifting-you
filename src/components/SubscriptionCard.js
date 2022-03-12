import React from "react";
import { View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import AppButton from "./AppButton";

function SubscriptionCard({
  id,
  name,
  price_monthly,
  price_yearly,
  requests,
  expiration,
  active,
  onPress,
  monthly = false,
}) {
  return (
    <View
      style={{
        flexDirection: "column",
        borderWidth: active ? 2 : 1,
        borderColor: colors.green,
        borderRadius: 25,
        width: "90%",
        height: "25%",
        backgroundColor: colors.lightgreen,
        flex: 1,
      }}
    >
      <View
        style={{
          borderBottomWidth: 0.65,
          borderBottomColor: colors.green,
          alignItems: "center",
          justifyContent: "center",
          height: 30,
        }}
      >
        <AppText
          en={name}
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: colors.green,
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          flexDirection: "column",
        }}
      >
        <AppText
          en={`${requests} Requests/Month`}
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.green,
          }}
        />
        <AppText
          en={`${monthly ? price_monthly : price_yearly}£/Month`}
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: colors.green,
            marginTop: 5,
          }}
        />
        {!active ? (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AppButton
              enTitle="Upgrade"
              ptTitle="pt Upgrade"
              style={{
                height: 40,
                width: "60%",
                marginTop: 15,
              }}
              onPress={onPress}
            />
            <View style={{ height: 25 }}></View>
          </View>
        ) : (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AppButton
              enTitle="Active"
              ptTitle="pt Active"
              greyed
              style={{
                height: 40,
                width: "60%",
                marginTop: 15,
                backgroundColor: colors.green,
              }}
            />
            <View style={{ height: 25 }}>
              <AppText
                en={expiration ?? ""}
                // pt={ptExpiry}
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: colors.green,
                  marginTop: 5,
                }}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default SubscriptionCard;
