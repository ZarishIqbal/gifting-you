import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../../config/colors";
import AppText from "../AppText";
import AntDesign from "react-native-vector-icons/AntDesign";

export const SingleQuestion = ({
  setAnswer,
  index,
  label,
  placeholder,
  last,
}) => {
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);
  const [answer, setLocalAnswer] = useState("");

  return (
    <View
      style={{
        height: open ? 100 + answer.length / 5 : 60,
        marginHorizontal: 10,
        flexDirection: "row",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            color: colors.green,
            backgroundColor: done ? colors.primary : colors.lightgreen,
            height: 30,
            width: 30,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {done ? (
            <AntDesign name="check" color={colors.white} size={15} />
          ) : (
            <Text
              style={{
                color: colors.green,
              }}
            >
              {index}
            </Text>
          )}
        </View>

        {!(last && !open) && (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                height: open ? "90%" : "50%",
                width: 1,
                backgroundColor: colors.primary,
              }}
            />
          </View>
        )}
      </View>
      <Pressable
        onPress={() => {
          setDone(answer.length > 0);
          setOpen(!open);
          if (answer.length > 0) setAnswer(index - 1, answer);
        }}
        style={{
          flex: 1,
          marginHorizontal: 10,
          height: "80%",
        }}
      >
        <AppText
          en={label}
          style={{
            color: colors.green,
            height: 25,
            marginVertical: 1,
            fontSize: 12,
          }}
        />
        {open && (
          <TextInput
            onChangeText={(text) => {
              setLocalAnswer(text);
              setAnswer(index, text);
              setDone(text.length > 0);
            }}
            mode="flat"
            theme={{
              colors: { primary: answer.length >= 400 ? "red" : "transparent" },
            }}
            placeholder={placeholder}
            value={answer}
            maxLength={400}
            underlineColor="rgba(1,1,1,0)"
            style={{
              backgroundColor: colors.lightgreen,
              fontSize: 12,
              borderWidth: 0,
            }}
            multiline={true}
            placeholderTextColor={colors.green}
            onEndEditing={() => {
              setOpen(false);
            }}
          />
        )}
      </Pressable>
    </View>
  );
};
