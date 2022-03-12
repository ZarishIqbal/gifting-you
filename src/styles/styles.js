import { StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

export const OnboardingStyle = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    //paddingBottom: "15%",
    paddingBottom: 70,
    backgroundColor: colors.white,
    zIndex: 1,
  },
  image: {
    marginTop: "-10%",
    marginBottom: "10%",
    width: 300,
    overflow: "hidden",
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: colors.white,
  },
  text: {
    textAlign: "center",
    color: colors.white,
    paddingHorizontal: 40,
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: colors.green,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 30,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  button: {
    position: "absolute",
    bottom: 5,
    right: 10,
    borderRadius: 30,
    backgroundColor: colors.primary,
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginTop: 60,
    height: 60,
    width: 60,
    backgroundColor: colors.primary,
    borderRadius: 9999,
    ...elevation,
  },
});
export const Signup = StyleSheet.create({
  top: {
    width: "100%",
    height: "18%",
    backgroundColor: colors.primary,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-start",
    backgroundColor: colors.primary,
    paddingBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "black",
    shadowOffset: { height: 10, width: 100 },
    shadowOpacity: 1,
    shadowRadius: 20,
    borderColor: colors.grey,
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
    color: colors.white,
  },
  bar: {
    backgroundColor: colors.green,
    height: 2,
    flex: 1,
    alignSelf: "center",
  },
});
export default {
  colors,
  text: {
    color: colors.black,
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Poppins-Light" : "Avenir",
  },
  inputText: {
    color: colors.black,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Poppins" : "Avenir",
    flex: 1,
    borderRadius: 5,
    borderWidth: 0,
    height: 50,
    backgroundColor: colors.lightgreen,
  },
};

export const elevation = {
  elevation: 10,
  shadowColor: "black",
  shadowOffset: { height: 1, width: 10 },
  shadowOpacity: 1,
  shadowRadius: 20,
};

export const lightElevation = {
  elevation: 5,
  shadowColor: "black",
  shadowOffset: { height: 1, width: 5 },
  shadowOpacity: 0.5,
  shadowRadius: 10,
};
