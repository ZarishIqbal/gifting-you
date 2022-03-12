import React from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Entypo";
import colors from "../config/colors";
import { elevation } from "../styles/styles";
import { toTitleCase } from "../utils/helpers";
import AppText from "./AppText";

const initialFilter = {
  popularity: { most_popular: false, least_popular: false },
  timeline: { newest: false, oldest: false },
  country: { ascending: false, descending: false },
};
export const Filter = ({ state, setState, setFilter, filter }) => {
  return (
    <Modal transparent animationType="slide">
      <Pressable
        style={{
          width: "100%",
          height: "100%",
          color: colors.green,
          flex: 1,
          alignItems: "flex-end",
        }}
        onPress={() => setState({ ...state, open: false })}
      >
        <View
          style={{
            flex: 1,
            paddingVertical: 10,
            backgroundColor: "white",
            width: "100%",
            borderColor: "#eeeeee",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              backgroundColor: colors.background,

              borderBottomColor: colors.lightGrey,
              borderBottomWidth: 1,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
              onPress={() => setState({ ...state, open: false })}
            >
              <Icon name="chevron-left" size={20} color={colors.green} />
              <AppText
                en="Search"
                style={{ marginLeft: 10, color: colors.green }}
              ></AppText>
            </Pressable>
            <Pressable
              onPress={() => {
                setFilter(initialFilter);
                setState({ ...state, open: false });
              }}
            >
              <AppText
                en="cancel"
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  color: colors.green,
                }}
              />
            </Pressable>
          </View>

          <View style={{ padding: 20 }}>
            <FlatList
              data={Object.entries(filter ?? {})}
              renderItem={({ item }) => {
                return (
                  <Pressable
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <AppText
                      en={toTitleCase(item[0])}
                      style={{ color: colors.primary }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 15,
                        height: 100,
                      }}
                    >
                      {Object.entries(item[1] ?? {}).map(([key, bool]) => {
                        return (
                          <Pressable
                            style={[
                              styles.textContainer,
                              {
                                backgroundColor: bool
                                  ? colors.lightGrey
                                  : colors.lightgreen,
                              },
                            ]}
                            onPress={() =>
                              setFilter({
                                ...initialFilter,
                                [item[0]]: {
                                  ...initialFilter[item[0]],
                                  [key]: true,
                                },
                              })
                            }
                          >
                            <AppText
                              en={toTitleCase(key, "_")}
                              style={styles.text}
                            ></AppText>
                          </Pressable>
                        );
                      })}
                    </View>
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    borderRadius: 10,
    color: colors.green,
  },
  textContainer: {
    marginRight: 30,
    borderWidth: 0.5,
    borderColor: colors.green,
    width: 120,
    height: 50,
    ...elevation,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.lightgreen,
  },
});
