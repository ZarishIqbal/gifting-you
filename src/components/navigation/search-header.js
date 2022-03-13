import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

import { View, Image, SafeAreaView, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import colors from "@config/colors";
import { PersonLiftIcon } from "@assets/icons/icons";
import { userImage } from "@constants";

import { elevation } from "@styles/styles";
export const SearchHeader = ({ navigation, callback }) => {
  const image = useSelector((state) => state.profile.profile.image);
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.white,
      }}
    >
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{
          padding: 1,
          ...elevation,
          width: 50,
          height: 50,
          borderRadius: 300,
          borderWidth: 0.5,
          borderColor: colors.grey,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 45,
            height: 45,
            borderRadius: 300,
          }}
          source={{
            uri: image ?? userImage,
          }}
        />
      </Pressable>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.lightgreen,
          height: 40,
          borderRadius: 20,
          marginHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TextInput
          theme={{ colors: { primary: "transparent" } }}
          style={{
            backgroundColor: colors.lightgreen,
            height: 35,
            color: colors.green,
            borderRadius: 20,
            width: "80%",
          }}
          underlineColor="rgba(1,1,1,0)"
          left={<TextInput.Icon name="magnify" color={colors.green} />}
          placeholder="Search"
          placeholderTextColor={colors.green}
        />
        <AntDesign
          name="filter"
          size={20}
          color={colors.green}
          onPress={() => callback()}
        />
      </View>
      <Pressable onPress={() => navigation.navigate("Partners")}>
        <PersonLiftIcon fill={colors.green} />
      </Pressable>
    </SafeAreaView>
  );
};
