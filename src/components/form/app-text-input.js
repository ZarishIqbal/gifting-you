import React, { Children } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "@config/colors";

import defaultStyles from "@styles/styles";

function AppTextInput({
  icon = null,
  ct = false,
  iconLeft = null,
  width,
  onIconPress,
  otherStyle,
  children,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }, otherStyle]}>
      <TextInput
        mode="flat"
        placeholderTextColor={colors.green}
        style={[
          defaultStyles.inputText,
          {
            paddingLeft: children ? 10 : 5,
            borderWidth: 0,
          },
        ]}
        underlineColor="rgba(1,1,1,0)"
        clearTextOnFocus={ct}
        theme={{
          colors: {
            text: colors.green,
            primary: "transparent",
          },
        }}
        right={
          icon !== null ? (
            <TextInput.Icon
              name={icon}
              color={colors.green}
              onPress={() => onIconPress()}
            />
          ) : null
        }
        left={
          iconLeft !== null ? (
            <TextInput.Icon name={iconLeft} color={colors.green} />
          ) : null
        }
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgreen,
    flexDirection: "row",
    marginVertical: 8,
    borderRadius: 20,
    paddingHorizontal: 15,
    borderColor: colors.green,
    overflow: "hidden",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppTextInput;
