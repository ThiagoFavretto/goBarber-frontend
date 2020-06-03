export const updateProfileRequest = data => {
  return {
    type: "UPDATE_PROFILE_REQUEST",
    payload: { data },
  };
};

export const updateProfileSuccess = profile => {
  return {
    type: "UPDATE_PROFILE_SUCCESS",
    payload: { profile },
  };
};

export const updateProfileFailure = () => {
  return {
    type: "UPDATE_PROFILE_FAILURE",
  };
};
