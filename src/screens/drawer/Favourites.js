import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

function Favourites(props) {
  const favourites = useSelector((state) => state.favourite.favourite);
  return <View></View>;
}

export default Favourites;
