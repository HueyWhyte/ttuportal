const { Schema, model } = require("mongoose");

const LibrarySchema = new Schema({});

module.exports = model("Library", LibrarySchema);
