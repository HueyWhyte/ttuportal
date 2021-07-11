const { Router, request } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = Router();
const Student = require("../models/Student");
const auth = require("../utils/auth");

const genToken = (student) => {
  return jwt.sign({ id: student._id }, process.env.SECRET_TOKEN_KEY, {
    expiresIn: 864000,
  });
};

// get student details
router.get("/me", auth, (req, res) => {
  Student.findById(req.student.id)
    .select("-__v -_id -password")
    .populate({
      path: "program",
      populate: {
        path: "courses",
        model: "Course",
        populate: { path: "lecturer", model: "Lecturer" },
      },
    })
    .then((student) => res.send(student))
    .catch((err) => res.status(401).send({ message: "Authorization Denied!" }));
});

// login
router.post("/login", async (req, res) => {
  let { indexNumber, password } = req.body;

  const student = await Student.findOne({ indexNumber })
    .select("-__v")
    .populate({
      path: "program",
      populate: {
        path: "courses",
        model: "Course",
        populate: { path: "lecturer", model: "Lecturer" },
      },
    });

  if (!student)
    return res
      .status(401)
      .send({ message: "Student with index number does not exist!" });

  const validPass = await bcrypt.compare(password, student.password);
  if (!validPass)
    return res.status(401).send({ message: "Password is wrong!" });

  let token = genToken(student);
  res.send({ student, token });
});

// updata a single student
router.put("/update", auth, async (req, res) => {
  let {
    othername,
    email,
    phone,
    religion,
    home_address,
    gender,
    image,
    title,
    marital_status,
    dob,
  } = req.body;

  const student = await Student.findById(req.student.id);

  if (othername != "") student.othername = othername;
  if (email != "") student.email = email;
  if (phone != "") student.phone = phone;

  if (religion != "") student.religion = religion;
  if (home_address != "") student.home_address = home_address;
  if (gender != "") student.gender = gender;
  if (dob != "") student.dob = dob;
  if (title != "") student.title = title;
  if (marital_status != "") student.marital_status = marital_status;
  if (image != "") student.image = image;

  await student.save();

  res.send(student);
});

// get all student by class
router.get("/all_by_class", auth, async (req, res) => {
  let student = await Student.findById(req.student.id).select(
    "-__v -_id -password -results -email -indexNumber -firstname -lastname -home_address -phone -religion -gender -marital_status -othername -title -dob"
  );

  Student.find({ program: student.program })
    .where("_id")
    .ne(req.student.id)
    .select("-__v -_id -password -results")
    .populate("program")
    .sort("indexNumber")
    .then((student) => res.send(student))
    .catch((err) => res.status(401).send({ msg: err }));
});

// add new student
router.post("/new", async (req, res) => {
  let { firstname, lastname, password, indexNumber, program, image } = req.body;

  let isStudent = await Student.findOne({ indexNumber });
  if (isStudent)
    return res.status(401).send("Student with index number already exists");

  password = await bcrypt.hash(password, 10);

  const newStudent = new Student({
    firstname,
    lastname,
    indexNumber,
    password,
    program,
    image,
  });

  newStudent
    .save()
    .then((student) => res.send(student))
    .catch((err) => res.status(401).send({ msg: err }));
});

// add result to student profile
// router.put("/addresult", async (req, res) => {
//   let { id, courseTitle, code, creditHours, score, year, semester } = req.body;

//   const student = await Student.findById(id);

//   if (student) {
//     try {
//       student.results.unshift({
//         courseTitle,
//         code,
//         creditHours,
//         score,
//         year,
//         semester,
//       });

//       await student.save();
//       res.send(student);
//     } catch (err) {
//       res.status(400).send({ Error: err });
//     }
//   } else {
//     res.status(401).send("Student does not exist!");
//   }
// });

module.exports = router;
