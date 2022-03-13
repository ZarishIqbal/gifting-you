import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import AppButton from "@components/buttons/app-button";
import { Filter } from "@components/modals/filter-modal";
import GiftRequestCard from "@components/cards/gifted-request-card";
import MainCard from "@components/cards/main-card";
import { SearchHeader } from "@components/navigation/search-header";
import colors from "@config/colors";

const initialFilter = {
  popularity: { most_popular: false, least_popular: false },
  timeline: { newest: false, oldest: false },
  country: { ascending: false, descending: false },
};
const DATA = [
  {
    id: 1,
    date: "21 May 2021",
    picture: "https://picsum.photos/seed/picsum/200/300",
    enCountry: "England",
    ptCountry: "pt UK",
    enDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.",
    ptDetail:
      "pt Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.",
    likes: "4",
  },
  {
    id: 2,
    date: "21 May 2021",
    picture: "https://picsum.photos/seed/picsum/200/300",
    enCountry: "England",
    ptCountry: "pt UK",
    enDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit .",
    ptDetail:
      "pt Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.",
    likes: "5",
  },
];
export const Requests = (props) => {
  const [request, setRequest] = useState(true);

  const [filter, setFilter] = useState(initialFilter);
  const [state, setState] = useState({ open: false });
  const myRequests = useSelector((state) => state.rootState.my_requests);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <SearchHeader
        navigation={props.navigation}
        callback={() => setState({ ...state, open: true })}
      />
      <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            flex: 2,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <AppButton
              enTitle="My Requests"
              fontColor={!request ? colors.grey : colors.white}
              fontSize={14}
              greyed={!request}
              style={{
                borderColor: colors.grey,
                borderWidth: !request ? 0 : 0.2,
                backgroundColor: !request ? colors.primary : colors.lightgreen,
              }}
              onPress={() => setRequest(true)}
            />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <AppButton
              enTitle="Gifted Requests"
              fontColor={request ? colors.grey : colors.white}
              fontSize={14}
              greyed={request}
              style={{
                borderColor: colors.grey,
                borderWidth: !request ? 0 : 0.2,
                backgroundColor: request ? colors.primary : colors.lightgreen,
              }}
              onPress={() => setRequest(false)}
            />
          </View>
        </View>
        {request ? (
          <View>
            <FlatList
              data={Object.values(myRequests ?? {})}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                console.log(item);
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginVertical: 15,
                    }}
                  >
                    <GiftRequestCard {...item} />
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <View>
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginVertical: 15,
                    }}
                  >
                    <MainCard {...item} />
                  </View>
                );
              }}
            />
          </View>
        )}
        {state.open && (
          <Filter
            setState={setState}
            setFilter={setFilter}
            state={state}
            filter={filter}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
