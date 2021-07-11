const { Schema, model } = require("mongoose");

const AssessmentSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  one: String,
  two: String,
  three: String,
  four: String,
  five: String,
  six: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
module.exports = model("Assessment", AssessmentSchema);
