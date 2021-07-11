const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 5,
  },
  code: {
    type: String,
    required: true,
    min: 3,
  },
  creditHours: {
    type: String,
    required: true,
    min: 3,
  },
  lecturer: {
    type: Schema.Types.ObjectId,
    ref: "Lecturer",
    required: true,
  },
  assessed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Course", CourseSchema);
