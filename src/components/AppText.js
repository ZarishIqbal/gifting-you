import React, { useState } from "react";
import { Text } from "react-native";
import defaultStyles from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AppText({ style, en, pt = en }) {
  const [language, setLanguage] = useState("en");
  AsyncStorage.getItem("lan").then((lan) => setLanguage(lan));
  return (
    <Text style={[defaultStyles.text, style]}>
      {language == "en" ? en : pt}
    </Text>
  );
}

export default AppText;
