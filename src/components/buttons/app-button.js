import React from "react";
import { TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colors from "@config/colors";
import { elevation, lightElevation } from "@styles/styles";
import AppText from "@components/text/app-text";

function AppButton({
  onPress,
  enTitle,
  ptTitle,
  children,
  style,
  fontColor,
  disabled = false,
  fontSize,
  greyed = false,
}) {
  const myGradientColor = [
    "#ebb5b8",
    "rgba(204, 113, 120, 0.7)",
    "rgba(204, 113, 120, 0.9)",
    // "#ffd9dc",
  ];
  return (
    <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
      <LinearGradient
        colors={greyed ? [colors.lightGrey, colors.lightGrey] : myGradientColor}
        style={[
          {
            width: "75%",
            height: 50,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            flexDirection: "row",
            ...lightElevation,
          },
          style,
        ]}
      >
        <TouchableOpacity
          disabled={disabled}
          onPress={onPress}
          style={{ flexDirection: "row" }}
        >
          <View>{children}</View>
          <AppText
            style={{
              fontSize: fontSize ? fontSize : 12,
              color: fontColor
                ? fontColor
                : greyed
                ? colors.green
                : colors.white,
              fontWeight: "bold",
              marginBottom: 4,
            }}
            en={enTitle}
            pt={ptTitle}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

export default AppButton;
