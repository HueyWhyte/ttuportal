import axios from "axios";

import tokenConfig from "./tokenConfig";

export const getAllNews = () => (dispatch, getState) => {
  axios
    .get(`/newz`)
    .then((res) => {
      dispatch({
        type: "GET_ALL_NEWS",
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

export const getNews = (id) => (dispatch, getState) => {
  axios
    .get(`/newz/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_NEWS",
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

export const newNews = (body) => (dispatch, getState) => {
  axios
    .post(`/newz/new`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "GET_NEWS",
        payload: res.data,
      });

      dispatch({
        type: "SUCCESS",
        payload: {
          status: 200,
          data: { message: "News posted successfully" },
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOAD_ERROR",
        payload: err,
      });
    });
};

export const deleteNews = (id) => (dispatch, getState) => {
  axios
    .delete(`/newz/${id}/delete`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "GET_NEWS",
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
