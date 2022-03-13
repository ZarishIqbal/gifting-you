import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import AppText from "@components/text/app-text";
import { Filter } from "@components/modals/filter-modal";
import { SearchHeader } from "@components/navigation/search-header";
import SponserCard from "@components/cards/sponsor-card";
import colors from "@config/colors";

const initialFilter = {
  popularity: { most_popular: false, least_popular: false },
  timeline: { newest: false, oldest: false },
  country: { ascending: false, descending: false },
};
function Partners(props) {
  const [filter, setFilter] = useState(initialFilter);
  const [state, setState] = useState({ open: false });
  const Uri = "https://picsum.photos/seed/picsum/200/300";
  const Sponsers = [
    {
      id: 1,
      name: "Tom Hard",
      img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 2,
      name: "Tom Soft",
      img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 3,
      name: "Tom Stiff",
      img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 4,
      name: "Tom Saad",
      img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 5,
      name: "Tom Zarish",
      img: "https://picsum.photos/seed/picsum/200/300",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <SearchHeader
        navigation={props.navigation}
        callback={() => setState({ ...state, open: true })}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <View style={styles.colorBar} />
          <AppText
            en="Our Business Partners"
            pt="Our Business Partners pt"
            style={styles.text}
          />

          <View style={styles.colorBar} />
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            source={{ uri: Uri }}
            style={styles.picture}
            resizeMode="cover"
          />
          <Image
            source={{ uri: Uri }}
            style={styles.picture}
            resizeMode="cover"
          />
          <Image
            source={{ uri: Uri }}
            style={styles.picture}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <View style={styles.colorBar} />
          <AppText en="Our Sponsers" pt="pt Our Sponsers" style={styles.text} />
          <View style={styles.colorBar} />
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <FlatList
            data={Sponsers}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    marginHorizontal: 19,
                    alignContent: "center",
                  }}
                >
                  <SponserCard {...item} />
                </View>
              );
            }}
          />
        </View>
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
}

const styles = StyleSheet.create({
  colorBar: {
    backgroundColor: colors.green,
    height: 2,
    flex: 1,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    paddingHorizontal: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.green,
  },
  picture: {
    width: "90%",
    height: 140,
    marginBottom: 13,
  },
});
export default Partners;
