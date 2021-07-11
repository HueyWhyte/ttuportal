import axios from "axios";

import tokenConfig from "./tokenConfig";

export const getBook = () => (dispatch, getState) => {
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
