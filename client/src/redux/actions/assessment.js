import axios from "axios";

import tokenConfig from "./tokenConfig";

export const accessLecturer = (body) => (dispatch, getState) => {
  axios
    .post("/assessment/new", body, tokenConfig(getState))
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
