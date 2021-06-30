const { Router } = require("express");

const router = Router();
const auth = require("../utils/auth");
const Payment = require("../models/Payment");

router.get("/me", auth, (req, res) => {
  Payment.find({ student: req.student.id })
    .sort("-timestamp")
    .then((payments) => res.send(payments))
    .catch((err) => res.status(401).send(err));
});

router.post("/new", (req, res) => {
  const { year, level, fees, paid, student } = req.body;

  let newPayment = new Payment({
    year,
    level,
    fees,
    paid,
    student,
  });

  newPayment
    .save()
    .then((payment) => res.send(payment))
    .catch((err) => res.status(401).send(err));
});

module.exports = router;
