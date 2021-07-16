const { Router } = require("express");

const router = Router();
const Assessment = require("../models/Assessment");
const auth = require("../utils/auth");

// get all assessments
router.get("/", (req, res) => {
  Assessment.find()
    .populate({
      path: "course",
      populate: { path: "lecturer", model: "Lecturer" },
    })
    .populate("student")
    .then((assessments) => res.send(assessments))
    .catch((err) => res.status(401).send(err));
});

// get all my assessments
// .select(
//     "-__v -_id -password -results -email -indexNumber -firstname -lastname -home_address -phone -religion -gender -marital_status -othername -title -dob"
//   )
router.get("/me", auth, (req, res) => {
  Assessment.find({ student: req.student.id })
    .populate({
      path: "course",
      populate: { path: "lecturer", model: "Lecturer" },
    })
    .populate("student")
    .sort("-timestamp")
    .then((assessments) => res.send(assessments))
    .catch((err) => res.status(401).send(err));
});

// make new assessment
router.post("/new", auth, async (req, res) => {
  let { course, one, two, three, four, five, six } = req.body;

  const newAssessment = new Assessment({
    student: req.student.id,
    course,
    one,
    two,
    three,
    four,
    five,
    six,
  });

  newAssessment
    .save()
    .then((course) => res.send(course))
    .catch((err) => res.send(err));
});

// delete assessment
router.delete("/:id/delete", auth, async (req, res) => {
  const isExist = await Assessment.findById(req.params.id);
  if (!isExist) return res.status(401).send("Assessment does not exist");

  if (isExist.student == req.student.id) {
    Assessment.deleteOne({ _id: req.params.id })
      .then(() => {
        res.send("Assessment Deleted!");
      })
      .catch((err) => res.status(401).send(err));
  } else {
    return res.status(401).send("Access Denied, You cant perform action!");
  }
});

module.exports = router;
