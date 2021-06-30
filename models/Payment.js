const { Schema, model } = require("mongoose");

const paymentSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  fees: {
    type: String,
    required: true,
  },
  paid: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Payment", paymentSchema);
