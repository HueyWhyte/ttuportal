import axios from "axios";

import tokenConfig from "./tokenConfig";

export const getResults = () => (dispatch, getState) => {
  axios
    .get(`/results/me`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "LOAD_RESULTS",
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
