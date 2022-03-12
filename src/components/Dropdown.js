import React, { useState } from "react";
import { View, StyleSheet, Pressable, Modal } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { toTitleCase } from "../utils/helpers";
import { FlatList } from "react-native-gesture-handler";
import { elevation } from "../styles/styles";

export const Dropdown = ({ options, onValueChange, selectedValue }) => {
  const [state, setState] = useState({ open: false });
  return (
    <View
      style={{
        justifyContent: "center",
        marginHorizontal: 5,
      }}
    >
      <Pressable
        style={[styles.dropdown]}
        onPress={() => {
          setState({ ...state, open: !state.open });
        }}
      >
        <AppText
          en={toTitleCase(selectedValue)}
          style={{ color: colors.green }}
        />
        {!state.open ? (
          <MaterialCommunityIcons
            name="chevron-down"
            size={26}
            color={colors.green}
          />
        ) : (
          <MaterialCommunityIcons
            name="chevron-up"
            size={26}
            color={colors.green}
          />
        )}
      </Pressable>
      {state.open && (
        <Modal transparent animationType="slide">
          <Pressable
            style={{
              width: "100%",
              height: "100%",
              color: colors.green,
              position: "absolute",
              flex: 1,
              alignItems: "flex-end",
            }}
            onPress={() => setState({ ...state, open: false })}
          >
            <FlatList
              data={options}
              style={{
                width: "100%",
                position: "absolute",
                bottom: -10,
                paddingVertical: 60,
                backgroundColor: "white",
                borderWidth: 0.5,
                borderRadius: 40,
                borderColor: colors.grey,
                ...elevation,
              }}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: colors.lightgreen,
                  }}
                ></View>
              )}
              renderItem={({ item }) => {
                return (
                  <Pressable
                    style={{
                      alignItems: "center",
                      paddingVertical: 5,
                      backgroundColor:
                        selectedValue === item.toLowerCase()
                          ? colors.lightgreen
                          : "white",
                    }}
                    onPress={() => {
                      onValueChange(item);

                      setState({ ...state, open: false });
                    }}
                  >
                    <AppText
                      en={toTitleCase(item)}
                      style={{
                        color: colors.green,
                        marginTop: 1,
                      }}
                    />
                  </Pressable>
                );
              }}
            />
          </Pressable>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: 150,
    flexDirection: "row",
    color: colors.green,
    backgroundColor: "rgba(204, 113, 120, 0.2)",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
});
