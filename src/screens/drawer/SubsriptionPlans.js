import moment from "moment";
import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "@components/buttons/app-button";
import SubscriptionCard from "@components/cards/subscription-card";
import { updateSubscription } from "@actions/settingActions";
import { firestoreMerge } from "@utils/merges";

function SubsriptionPlans(props) {
  const [monthly, setMonthly] = useState(true);
  const plans = useSelector((state) => state.rootState.plans);

  const settings = useSelector((state) => state.settings);
  const userPlan = useSelector((state) => state.settings.subscription);
  const dispatch = useDispatch();
  const handleSubscription = (plan) => {
    dispatch(updateSubscription(plan));
    firestoreMerge(["users", { ...settings, subscription: plan }], "setting");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 15,
          marginBottom: 10,
        }}
      >
        <View style={{ width: "50%" }}>
          <AppButton
            enTitle="Monthly Plan"
            fontSize={14}
            greyed={!monthly}
            style={{
              width: "80%",
              height: 40,
              borderRadius: 10,
            }}
            onPress={() => setMonthly(true)}
          />
        </View>
        <View style={{ width: "50%" }}>
          <AppButton
            enTitle="Yearly Plan"
            fontSize={14}
            greyed={monthly}
            style={{
              width: "80%",
              height: 40,
              borderRadius: 10,
            }}
            onPress={() => setMonthly(false)}
          />
        </View>
      </View>

      {monthly ? (
        <FlatList
          data={Object.entries(plans).sort(([id], [id2]) => id > id2)}
          keyExtractor={(item) => item[0]}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <SubscriptionCard
                  {...item[1]}
                  expiration={new Date(userPlan.expiration).toUTCString()}
                  monthly
                  active={
                    userPlan?.duration === "monthly" &&
                    userPlan.plan === item[0].toUpperCase()
                  }
                  onPress={() =>
                    handleSubscription({
                      duration: "monthly",
                      plan: item[0].toUpperCase(),
                      expiration: moment().add(1, "month").toDate(),
                    })
                  }
                />
              </View>
            );
          }}
        />
      ) : (
        <FlatList
          data={Object.entries(plans).sort(([id], [id2]) => id > id2)}
          keyExtractor={(item) => item[0]}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <SubscriptionCard
                  {...item[1]}
                  expiration={new Date(userPlan.expiration).toUTCString()}
                  active={
                    userPlan?.duration === "yearly" &&
                    userPlan.plan === item[0].toUpperCase()
                  }
                  {...item}
                  onPress={() =>
                    handleSubscription({
                      duration: "yearly",
                      plan: item[0].toUpperCase(),
                      expiration: moment().add(1, "year").toDate(),
                    })
                  }
                />
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

export default SubsriptionPlans;
