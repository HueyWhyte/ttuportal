export const successMessaage = (data) => (dispatch) => {
  dispatch({
    type: "SUCCESS",
    payload: data,
  });
};

export const errorMessage = (data) => (dispatch) => {
  dispatch({
    type: "ERROR",
    payload: data,
  });
  console.log(data);
};

export const clearMessage = () => (dispatch) => {
  dispatch({
    type: "CLEAR",
  });
};
