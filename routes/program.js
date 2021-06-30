const { Router } = require("express");

const router = Router();
const Program = require("../models/Program");

// get all programms
router.get("/", (req, res) => {
  Program.find()
    .populate({
      path: "courses",
      populate: { path: "lecturer", model: "Lecturer" },
    })
    .then((programs) => res.send(programs))
    .catch((err) => res.status(401).send(err));
});

// add new program
router.post("/new", (req, res) => {
  let { title, years } = req.body;

  const newProgram = new Program({
    title,
    years,
  });

  newProgram
    .save()
    .then((program) => res.send(program))
    .catch((err) => res.send(err));
});

// update a program
router.put("/update", async (req, res) => {
  let { title, years, id } = req.body;

  const program = Program.findById(id);

  if (title != "") program.title = title;
  if (years != "") program.years = years;

  await program.save();

  res.send(program);
});

module.exports = router;
