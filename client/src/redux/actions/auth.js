import axios from "axios";

import tokenConfig from "./tokenConfig";

export const getClassMates = () => (dispatch, getState) => {
  axios
    .get(`/students/all_by_class`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "LOAD_MATES",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOAD_ERROR",
        payload: err,
      });
    });
};

export const loadStudent = () => (dispatch, getState) => {
  dispatch({
    type: "USER_LOADING",
  });

  axios
    .get("/students/me", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOAD_ERROR",
        payload: err,
      });
    });
};

export const login = (body) => (dispatch) => {
  axios
    .post("/students/login", body)
    .then((res) => {
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);

      dispatch({
        type: "LOAD_ERROR",
        payload: err,
      });
    });
};

export const updateStudent = (body) => (dispatch, getState) => {
  axios
    .put("/students/update", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "UPDATE",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "LOAD_ERROR",
        payload: err,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
};
