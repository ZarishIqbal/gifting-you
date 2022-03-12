export function updateSetting(setting) {
  return {
    type: "UPDATE_SETTING",
    payload: setting,
  };
}

export function updateSubscription(setting) {
  return {
    type: "UPDATE_SUBSCRIPTION",
    payload: setting,
  };
}
