import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import colors from "@config/colors";
import { elevation, OnboardingStyle as styles } from "@styles/styles";
import { getLocalizedString } from "@config/functions";
import AppText from "@components/text/app-text";
import {
  GiftingYou,
  OnboardingBG,
  OnboardingScreen1,
  OnboardingScreen3,
  OnboardingScreen4,
} from "@assets";
const lan = "en";

const slides = [
  {
    key: 1,
    title: getLocalizedString("Tell to the world ", "diga ao mundo "),
    text: getLocalizedString("what you are looking for", "o que você quer"),
    image: OnboardingScreen3,
    backgroundColor: colors.primary,
  },
  {
    key: 2,
    title: getLocalizedString(
      "Wait for it, while it is",
      "espere enquanto está a "
    ),
    text: getLocalizedString(
      " being spread to world ",
      "ser partilhado pelo mundo"
    ),
    image: OnboardingScreen4,
    backgroundColor: colors.primary,
  },
  {
    key: 3,
    title: getLocalizedString("On the coming days", "nos próximos dias "),
    text: getLocalizedString(" you will get some news", "vai receber notícias"),
    image: OnboardingScreen1,
    backgroundColor: colors.primary,
  },
];
export default function OnboardingScreen({ navigation }) {
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.icon} source={GiftingYou} />
        <Image style={styles.image} source={item.image} />
        <Image
          style={{
            position: "absolute",
            bottom: -10,
            left: 0,
            width: "100%",
            zIndex: 0,
            maxHeight: "75%",
          }}
          source={OnboardingBG}
        ></Image>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          <Text style={styles.title}>{item.title[lan]}</Text>
          <Text style={styles.text}>{item.text[lan]}</Text>

          <Pressable
            style={{ paddingTop: 20 }}
            onPress={() => navigation.navigate("Auth")}
          >
            <AppText
              style={[styles.title, { marginTop: 0 }]}
              en="Login / Sign Up"
            ></AppText>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <AppIntroSlider
        activeDotStyle={{
          width: 20,
          backgroundColor: colors.green,
          ...elevation,
        }}
        dotStyle={{ backgroundColor: colors.green, ...elevation }}
        renderItem={_renderItem}
        data={slides}
        bottomButton={false}
        showNextButton={false}
        dotClickEnabled
        bounces={true}
        doneLabel="Done"
        onDone={() => navigation.navigate("Auth")}
      />
    </View>
  );
}
