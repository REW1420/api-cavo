const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  full_name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
