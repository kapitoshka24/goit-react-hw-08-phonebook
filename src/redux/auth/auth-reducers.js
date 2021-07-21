import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { authActions } from ".";

const initialUserState = { name: "", email: "" };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: true,
  [authActions.registerError]: false,
  [authActions.loginSuccess]: true,
  [authActions.loginError]: false,
  [authActions.logoutSuccess]: false,
  [authActions.getCurrentUserSuccess]: true,
  [authActions.getCurrentUserError]: false,
});

export default combineReducers({ user, token, error, isAuthenticated });
