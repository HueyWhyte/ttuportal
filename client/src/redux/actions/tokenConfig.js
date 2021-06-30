const tokenConfig = (getState) => {
  let token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};

export default tokenConfig;
