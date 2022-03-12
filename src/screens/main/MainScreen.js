import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import AppText from "../../components/AppText";
import MainCard from "../../components/MainCard";

import { Filter } from "../../components/FilterModal";
import { SearchHeader } from "../../components/navigation/SearchHeader";
import colors from "../../config/colors";
import { useSelector } from "react-redux";
import firebase from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const initialFilter = {
  popularity: { most_popular: false, least_popular: false },
  timeline: { newest: false, oldest: false },
  country: { ascending: false, descending: false },
};
function MainScreen(props) {
  const requests = useSelector((state) =>
    Object.entries(state.rootState.requests)
  );
  const [filter, setFilter] = useState(initialFilter);
  const [state, setState] = useState({ open: false });
  const image = useSelector((state) => state.profile.profile.image);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <SearchHeader
        navigation={props.navigation}
        callback={() => setState({ ...state, open: true })}
      />
      <FlatList
        data={requests}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => {
          console.log(item[1]);
          return (
            <Pressable
              onPress={() => {
                props.navigation.navigate("Gift Details", {
                  giftDetails: item,
                });
              }}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              <MainCard {...item[1]} requestID={item[0]} />
            </Pressable>
          );
        }}
      />
      {state.open && (
        <Filter
          setState={setState}
          setFilter={setFilter}
          state={state}
          filter={filter}
        />
      )}
    </SafeAreaView>
  );
}
export default MainScreen;
