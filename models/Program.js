const { Schema, model } = require("mongoose");

const ProgramSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 5,
  },
  years: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    // required: true,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  ],
});

module.exports = model("Program", ProgramSchema);
