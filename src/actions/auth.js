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
      user_phone: phonenumber,
      user_email: email,
      password: password,
    };
    console.log(formData);

    const res = await api.post("/signUp", formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUser());
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
export const login = (user_phone, password) => async (dispatch) => {
  const body = { user_phone, password };

  try {
    const res = await api.post("/login", body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
  } catch (err) {
    console.log(err);
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }
    // dispatch({
    //   type: LOGIN_FAIL,
    // });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
