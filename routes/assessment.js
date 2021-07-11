const { Router } = require("express");

const router = Router();
const Assessment = require("../models/Assessment");
const Course = require("../models/Course");
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

  // update course assessment status to true
  //   const dcourse = await Course.findById(course);
  //   dcourse.assessed = true;
  //   await dcourse.save();
  //   res.send(dcourse);
});

module.exports = router;
