import axios from "axios";

import tokenConfig from "./tokenConfig";

export const getPayments = () => (dispatch, getState) => {
  axios
    .get(`/payment/me`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: "LOAD_PAYMENTS",
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
