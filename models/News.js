const { model, Schema } = require("mongoose");

const newsSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 8,
  },
  reporter: {
    type: Schema.Types.ObjectId,
    ref: "Reporter",
    required: true,
  },
  body: {
    type: String,
    required: true,
    min: 10,
  },
  images: [{ url: String }],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("News", newsSchema);
