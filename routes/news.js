const { Router } = require("express");

const router = Router();
const News = require("../models/News");

router.get("/", (req, res) => {
  News.find()
    .sort("-timestamp")
    .then((news) => res.send(news))
    .catch((err) => res.status(401).send({ error: err }));
});

module.exports = router;
