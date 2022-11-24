const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todotitle: {
    type: String,
    trim: true.valueOf,
    maxlength: [25, "Todo should be in 25 character length"],
    required: true,
    uniquue: true
  }
});

module.exports = mongoose.model("Todo", TodoSchema);