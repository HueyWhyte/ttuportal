const { Router } = require("express");

const router = Router();
const News = require("../models/News");
const auth = require("../utils/auth");

// get all news
router.get("/", (req, res) => {
  News.find()
    .populate("reporter")
    .sort("-timestamp")
    .then((news) => res.send(news))
    .catch((err) => res.status(401).send({ error: err }));
});

// get a single news
router.get("/:id", (req, res) => {
  News.findById(req.params.id)
    .populate("reporter")
    .select("-email")
    .then((news) => res.send(news))
    .catch((err) => res.status(401).send({ message: "News does not exist!" }));
});

router.post("/new", auth, (req, res) => {
  let { title, body, image } = req.body;

  let newNews = new News({
    title,
    reporter: req.student.id,
    body,
    image,
  });

  newNews
    .save()
    .then((news) => res.send(news))
    .catch((err) => res.send(err));
});

// delete a news
router.delete("/:id/delete", auth, async (req, res) => {
  const isExist = await News.findById(req.params.id);
  if (!isExist) return res.status(401).send("News does not exist");

  if (isExist.reporter == req.student.id) {
    News.deleteOne({ _id: req.params.id })
      .then(() => {
        res.send("News Deleted!");
      })
      .catch((err) => res.status(401).send(err));
  } else {
    return res.status(401).send("Access Denied, You cant perform action!");
  }
});

module.exports = router;
