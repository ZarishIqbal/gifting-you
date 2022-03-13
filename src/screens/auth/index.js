import React, { useState } from "react";
import { Pressable, View, Image } from "react-native";
import AppText from "@components/text/app-text";
import colors from "@config/colors";
import { Signup as styles } from "@styles/styles";
import Login from "./Login";
import Signup from "./Signup";
import LinearGradient from "react-native-linear-gradient";
import { myGradientColor } from "@constants";
import { GiftingYou } from "@assets";

function index(props) {
  const [activity, setActivity] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.top}>
        <Image
          style={{
            aspectRatio: 1,
            height: "100%",
          }}
          source={GiftingYou}
        />
      </View>

      <LinearGradient colors={myGradientColor} style={styles.container}>
        <Pressable
          onPress={() => setActivity(false)}
          style={{
            width: "20%",
            alignItems: "center",
            borderBottomColor: colors.light,
            borderBottomWidth: activity ? 0 : 4,
          }}
        >
          <AppText style={styles.text} en="Sign Up" pt="Registar" />
        </Pressable>
        <Pressable
          onPress={() => setActivity(true)}
          style={{
            width: "20%",
            alignItems: "center",
            borderBottomColor: colors.light,
            borderBottomWidth: !activity ? 0 : 4,
          }}
        >
          <AppText style={styles.text} en="Login" pt="Entrar" />
        </Pressable>
      </LinearGradient>
      {!activity ? (
        <Signup navigation={props.navigation} />
      ) : (
        <Login
          goToSignUp={() => setActivity(false)}
          navigation={props.navigation}
        />
      )}
    </View>
  );
}

export default index;
