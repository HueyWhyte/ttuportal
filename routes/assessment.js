const { Router } = require("express");

const router = Router();
const Assessment = require("../models/Assessment");
const Course = require("../models/Course");

// get all assessments
router.get("/", (req, res) => {
  Assessment.find()
    .populate({
      path: "course",
      populate: { path: "lecturer", model: "Lecturer" },
    })
    .then((assessments) => res.send(assessments))
    .catch((err) => res.status(401).send(err));
});

// make new assessment
router.post("/new", async (req, res) => {
  let { course } = this.props.auth;
  let { one, two, three, four, five, six } = req.body;

  const newAssessment = new Assessment({
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
