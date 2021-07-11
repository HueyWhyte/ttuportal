const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
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
  image: String,
  othername: {
    type: String,
    min: 5,
  },
  program: {
    type: Schema.Types.ObjectId,
    ref: "Program",
    required: true,
  },
  level: {
    type: String,
  },
  email: {
    type: String,
    min: 5,
  },
  phone: {
    type: String,
    min: 5,
  },
  religion: {
    type: String,
    min: 5,
  },
  home_address: {
    type: String,
    min: 5,
  },
  gender: String,
  dob: String,
  image: String,
  title: String,
  marital_status: String,
  indexNumber: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    min: 10,
  },
});

module.exports = model("Student", StudentSchema);
