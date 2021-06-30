const { Router } = require("express");

const router = Router();
const Lecturer = require("../models/Lecturer");

// get all lecturers
router.get("/", (req, res) => {
  Lecturer.find()
    .then((lecturers) => res.send(lecturers))
    .catch((err) => res.status(401).send(err));
});

// get a single lecturer
router.get("/one/:id", (req, res) => {
  Lecturer.findById(req.params.id)
    .then((lecturers) => res.send(lecturers))
    .catch((err) => res.status(401).send(err));
});

// add new lecturer
router.post("/new", (req, res) => {
  const { firstname, lastname, othername, phone } = req.body;

  let newLecturer = new Lecturer({
    firstname,
    lastname,
    othername,
    phone,
  });

  newLecturer
    .save()
    .then((lecturer) => res.send(lecturer))
    .catch((err) => res.status(401).send(err));
});

// update a lecturer's information
router.put("/update", (req, res) => {
  const { firstname, lastname, othername, phone } = res.body;
});

module.exports = router;
