import produce from "immer";

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

const auth = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case "SIGN_FAILURE": {
        draft.loading = false;
        break;
      }
      case "SIGN_OUT": {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
};

export default auth;
