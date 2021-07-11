const { model, Schema } = require("mongoose");

const NewsSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 8,
  },
  reporter: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  body: {
    type: String,
    required: true,
    min: 200,
  },
  image: {
    type: String,
    required: true,
    min: 8,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("News", NewsSchema);
