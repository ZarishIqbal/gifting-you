import React from "react";
import { StyleSheet } from "react-native";

import AppText from "@components/text/app-text";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error} en={error} />;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
