import axios from "axios";

import tokenConfig from "./tokenConfig";
// import { errorMessage, successMessaage } from "./message";

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
        type: "AUTH_ERROR",
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
      // errorMessage(err.response);
      dispatch({
        type: "ERROR",
        payload: err.response,
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
      dispatch({
        type: "SUCCESS",
        payload: {
          status: 200,
          data: { message: "Profile Updated Successfully" },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "ERROR",
        payload: err.response,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
};

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
        payload: err.response,
      });
    });
};

export const registerCourses = () => (dispatch, getState) => {
  axios
    .post(`/course/register`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "REGISTER",
        payload: res.data,
      });

      dispatch({
        type: "SUCCESS",
        payload: {
          status: 200,
          data: { message: "Courses Registered Successfully" },
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOAD_ERROR",
        payload: err.response,
      });
    });
};
