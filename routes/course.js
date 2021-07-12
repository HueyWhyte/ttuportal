const { Router } = require("express");

const router = Router();
const Course = require("../models/Course");
const Program = require("../models/Program");

// get all programms
router.get("/", (req, res) => {
  Course.find()
    .then((courses) => res.send(courses))
    .catch((err) => res.status(401).send(err));
});

// add new course
router.post("/new", (req, res) => {
  let { title, code, creditHours, lecturer, day, duration } = req.body;

  const newCourse = new Course({
    title,
    code,
    creditHours,
    lecturer,
    day,
    duration,
  });

  newCourse
    .save()
    .then((course) => res.send(course))
    .catch((err) => res.send(err));
});

// add course to program
router.put("/new_to_program", async (req, res) => {
  let { id, course } = req.body;

  const program = await Program.findById(id);

  if (program) {
    try {
      program.courses.unshift(course);

      await program.save();
      res.send(program);
    } catch (err) {
      res.status(400).send({ Error: err });
    }
  } else {
    res.status(401).send("program does not exist!");
  }
});

// update a course
router.put("/update", async (req, res) => {
  let { title, code, id, lecturer, day, duration } = req.body;

  const course = await Course.findById(id);

  if (day != "") course.day = day;
  if (code != "") course.code = code;
  if (title != "") course.title = title;
  if (lecturer != "") course.lecturer = lecturer;
  if (duration != "") course.duration = duration;

  await course.save();
  res.send(course);
});

// register courses
router.post("/register", async (req, res) => {
  let { title, code, id, lecturer } = req.body;

  const course = await Course.findById(id);

  await course.save();
  res.send(course);
});

module.exports = router;
