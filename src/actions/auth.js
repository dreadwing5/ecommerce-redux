import api from "../utils/api";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await api.get("/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ name, password, email, phonenumber }) => async (
  dispatch
) => {
  try {
    const formData = {
      user_name: name,
      user_phone: `+91${phonenumber}`,
      user_email: email,
      password: password,
    };
    const res = await api.post("/users", formData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("user-info", JSON.stringify(res.data));
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (phonenumber, password) => async (dispatch) => {
  const formData = { user_phone: `+91${phonenumber}`, password: password };

  try {
    const res = await api.post("/auth", formData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
