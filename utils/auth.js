const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).send({ msg: "No token, authorization denied!" });
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
    req.student = decoded;
    next();
  } catch (error) {
    res.status(400).send({ msg: "Token is not valid!" });
  }
};

module.exports = auth;
