export function updateProfile(profile) {
  return {
    type: "UPDATE_PROFILE",
    payload: profile,
  };
}

export function updateProfileImage(profileImage) {
  return {
    type: "UPDATE_PROFILE_IMAGE",
    payload: profileImage,
  };
}
