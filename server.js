const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/news", require("./routes/news"));
app.use("/course", require("./routes/course"));
app.use("/program", require("./routes/program"));
app.use("/students", require("./routes/student"));
app.use("/results", require("./routes/result"));
app.use("/payment", require("./routes/payment"));
app.use("/lecturer", require("./routes/lecturer"));

//  process.env.MONGODB_URL,
// "mongodb://127.0.0.1:27017/portal" ||
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 1437;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
