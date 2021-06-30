const { Router } = require("express");

const router = Router();
const Result = require("../models/Result");
const auth = require("../utils/auth");

// get all results for a single student
router.get("/me", auth, (req, res) => {
  Result.find({ student: req.student.id })
    .select("-student")
    .populate("course")
    .then((results) => res.send(results))
    .catch((err) => res.status(401).send(err));
});

// add student result
router.put("/addresult/:id", async (req, res) => {
  let { course, score } = req.body;

  let result = new Result({
    student: req.params.id,
    course,
    score,
  });

  await result.save();
  res.send(result);
});
module.exports = router;
