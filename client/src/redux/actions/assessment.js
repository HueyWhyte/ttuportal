import axios from "axios";

import tokenConfig from "./tokenConfig";

export const accessLecturer = (body) => (dispatch, getState) => {
  axios
    .post("/assessmentz/new", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "NEW_ASSESSMENT",
        payload: res.data,
      });

      dispatch({
        type: "SUCCESS",
        payload: {
          status: 200,
          data: { message: "Lecturer Assessed" },
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response,
      });
    });
};

export const getMyAssessments = () => (dispatch, getState) => {
  axios
    .get("/assessmentz/me", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "LOAD_ASSESSMENTS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response,
      });
    });
};

export const deleteAssessment = (id) => (dispatch, getState) => {
  axios
    .get(`/assessmentz/${id}/delete`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "DELETE_ASSESSMENT",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response,
      });
    });
};
