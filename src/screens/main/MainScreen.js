import React, { useState } from "react";
import { FlatList, Pressable, SafeAreaView } from "react-native";
import MainCard from "@components/cards/main-card";

import { Filter } from "@components/modals/filter-modal";
import { SearchHeader } from "@components/navigation/search-header";
import colors from "@config/colors";
import { useSelector } from "react-redux";

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
