export const signInRequest = (email, password) => {
  return {
    type: "SIGN_IN_REQUEST",
    payload: { email, password },
  };
};

export const signInSuccess = (token, user) => {
  return {
    type: "SIGN_IN_SUCCESS",
    payload: { token, user },
  };
};

export const signUpRequest = (name, email, password) => {
  return {
    type: "SIGN_UP_REQUEST",
    payload: { name, email, password },
  };
};

export const signFailure = () => {
  return {
    type: "SIGN_FAILURE",
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
