const { Schema, model } = require("mongoose");

const LecturerSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    min: 5,
  },
  lastname: {
    type: String,
    required: true,
    min: 5,
  },
  othername: {
    type: String,
    min: 5,
  },
  phone: {
    type: String,
    required: true,
    min: 5,
  },
  img: {
    type: String,
    min: 3,
  },
});

module.exports = model("Lecturer", LecturerSchema);
