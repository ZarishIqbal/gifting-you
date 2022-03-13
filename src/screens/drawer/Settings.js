import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NotificationDropdown from "@components/dropdown/notification-dropdown";
import VisibilityDropdown from "@components/dropdown/visibility-dropdown";
import colors from "@config/colors";
import { updateSetting } from "@actions/settingActions";
import { firestoreMerge } from "@utils/merges";
import { defaultSetting } from "@utils/helpers";

function Settings(props) {
  const [state, setLocalState] = useState(
    useSelector((state) => state.setting)
  );
  const setting = useSelector((state) => state.setting) ?? defaultSetting;
  const dispatch = useDispatch();
  console.log(setting);
  const setState = (state) => {
    setLocalState(state);
    firestoreMerge(["users", state], "setting");
    dispatch(updateSetting(state));
  };

  useEffect(() => {
    setLocalState(setting);
  }, []);

  return (
    <ScrollView
      style={{ flex: 2, paddingHorizontal: 15, backgroundColor: colors.white }}
    >
      <VisibilityDropdown
        enTitle="Visibility"
        ptTitle="Visibility"
        visibility={setting?.visibility}
        setState={(visibility) => setState({ ...state, visibility })}
      />
      <NotificationDropdown
        enTitle="Notifications"
        ptTitle="Pt Notificaitons"
        notification={setting?.notification}
        setState={(notification) => setState({ ...state, notification })}
      />
      <View style={{ paddingBottom: 200 }}></View>
    </ScrollView>
  );
}

export default Settings;
