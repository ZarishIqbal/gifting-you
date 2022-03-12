import React, { useState, useEffect } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import { UpgradePlan } from "../../icons/icons";
import AboutmeDropdown from "../../components/AboutmeDropdown";
import ContactDropdown from "../../components/ContactDropdown";
import SocialDropdown from "../../components/SocialDropdown";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions/profileActions";
import { firestoreMerge } from "../../utils/merges";

import { userImage } from "../../redux/constants";
function Profile(props) {
  const profile = useSelector((state) => state.profile.profile);
  const [state, setLocalState] = useState(profile);
  const dispatch = useDispatch();

  const setState = (state) => {
    setLocalState(state);
    firestoreMerge(["users", state], "profile");
    dispatch(updateProfile(state));
  };
  useEffect(() => {
    return () => {
      if (profile !== state) {
        dispatch(updateProfile(state));
      }
    };
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <View style={styles.profile}>
        <Pressable onPress={() => setBottomPopup(true)}>
          <Image
            source={{ uri: profile.image ?? userImage }}
            style={styles.picture}
          ></Image>
        </Pressable>
        <AppText
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 10,
            color: colors.green,
          }}
          en={profile.name}
        />
      </View>

      <View style={styles.stats}>
        <View style={styles.statitem}>
          <Text
            style={{ fontSize: 16, fontWeight: "600", color: colors.green }}
          >
            {profile.requests}
          </Text>
          <AppText
            style={{ fontSize: 14, fontWeight: "bold", color: colors.green }}
            en="Requests"
          />
        </View>
        <View style={styles.statitem}>
          <Text
            style={{ fontSize: 16, fontWeight: "600", color: colors.green }}
          >
            {profile.gift}
          </Text>
          <AppText
            style={{ fontSize: 14, fontWeight: "bold", color: colors.green }}
            en="Gifts"
          />
        </View>

        <View style={styles.statitem}>
          <Text
            style={{ fontSize: 16, fontWeight: "600", color: colors.green }}
          >
            {profile.gifters}
          </Text>
          <AppText
            style={{ fontSize: 14, fontWeight: "bold", color: colors.green }}
            en="Gifters"
          />
        </View>
      </View>

      <View style={{ marginBottom: 15 }}>
        <AppButton
          onPress={() => props.navigation.navigate("Subscription Plans")}
          enTitle="    Upgrade my plan"
          ptTitle="    Upgrade my plan pt"
          children={<UpgradePlan />}
          style={{ width: "55%", height: 40, borderRadius: 10 }}
          fontSize={14}
        />
      </View>
      <View style={{ marginBottom: 200 }}>
        <AboutmeDropdown
          enTitle="About me"
          pt="Pt About Me"
          placeholder="About Me"
          setAnswer={(text) => setState({ ...state, about: text })}
          answer={state.about}
          borderTop={true}
        />
        <ContactDropdown
          enTitle="Contact Details"
          pt="Pt Contact"
          iconLeft1="email"
          iconLeft2="cellphone"
          contact={state.contact_details}
          setContact={(values) =>
            setState({ ...state, contact_details: values })
          }
        />
        <AboutmeDropdown
          enTitle="Delivery Address"
          pt="Pt About Me"
          placeholder="Address"
          setAnswer={(text) => setState({ ...state, address: text })}
          answer={state.address}
        />
        <SocialDropdown
          enTitle="Social Media Handles"
          pt="pt social"
          socials={state.social_handles}
          setSocial={(values, key) => {
            setState({
              ...state,
              social_handles: { ...state.social_handles, [key]: values },
            });
          }}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  profile: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  picture: {
    aspectRatio: 1,
    width: "25%",
    borderRadius: 50,
    //resizeMode: 'contain',
  },
  name: {
    alignItems: "center",
    justifyContent: "center",
  },
  stats: {
    margin: 5,
    marginHorizontal: 20,
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statitem: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Profile;
