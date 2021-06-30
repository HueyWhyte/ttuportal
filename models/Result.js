const { Schema, model } = require("mongoose");

const ResultSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

module.exports = model("Result", ResultSchema);
