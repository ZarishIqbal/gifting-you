import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import GiftRequestCard from "@components/cards/gift-request-card";
import AppButton from "@components/buttons/app-button";
import { ContactRequest, Submit } from "@assets/icons/icons";
import colors from "@config/colors";
import { SearchHeader } from "@components/navigation/search-header";
import { Filter } from "@components/modals/filter-modal";
import { useSelector } from "react-redux";

const initialFilter = {
  popularity: { most_popular: false, least_popular: false },
  timeline: { newest: false, oldest: false },
  country: { ascending: false, descending: false },
};
function GiftRequest(props) {
  const [filter, setFilter] = useState(initialFilter);
  const [state, setState] = useState({ open: false });
  const [hide, setHide] = useState(true);
  const [count, setCount] = useState(0);
  const [approved, setApproved] = useState(false);
  const questions = Object.values(
    useSelector((state) => state.rootState?.questions) ?? {}
  );
  const [id, giftDetails] = props.route.params.giftDetails;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <SearchHeader
        navigation={props.navigation}
        callback={() => setState({ ...state, open: true })}
      />
      <FlatList
        data={giftDetails.answers}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <>
            <View style={{ marginTop: 10 }}>
              {hide ? (
                <AppButton
                  enTitle="     Request Contact Details"
                  ptTitle="pt   Request Contact Details"
                  children={<ContactRequest />}
                  style={{ width: "75%" }}
                  onPress={() => {
                    setCount(count + 1);
                    if (count !== 0) setHide(false);
                    console.log("request");
                  }}
                />
              ) : approved ? (
                <SponsershipDropdown
                  enTitle="Submit Proof of Sponsorship"
                  ptTitle="pt Submit Proof of Sponsorship"
                />
              ) : (
                <AppButton
                  enTitle="     Submit"
                  ptTitle="pt   Submit"
                  children={<Submit />}
                  style={{ width: "40%", marginBottom: 20 }}
                  onPress={() => console.log("submit")}
                />
              )}
            </View>
            {state.open && (
              <Filter
                setState={setState}
                setFilter={setFilter}
                state={state}
                filter={filter}
              />
            )}
          </>
        }
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <GiftRequestCard
                enQuestion={questions[index].question}
                enGiftdetail={item}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default GiftRequest;
