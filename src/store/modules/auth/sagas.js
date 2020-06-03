import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "~/services/api";
import history from "~/services/history";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error("Usuário nao é provider!");
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push("/dashboard");
  } catch (err) {
    toast.error("Email ou senha incorretos!");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, "users", {
      name,
      email,
      password,
      provider: true,
    });

    history.push("/");
  } catch (err) {
    toast.error("Falha no cadastro, verefique seus dados!");
    yield put(signFailure());
  }
}

export const setToken = ({ payload }) => {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

export const signOut = () => {
  history.push("/");
};

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("SIGN_IN_REQUEST", signIn),
  takeLatest("SIGN_UP_REQUEST", signUp),
  takeLatest("SIGN_OUT", signOut),
]);
