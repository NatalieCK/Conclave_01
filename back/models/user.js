const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  initials: {
    type: String,
    required: true,
  },
  logIn: {
    type: String,
    required: true,
  }
});

// = new mongoose.Schema({fname:String,lname:String})

const User = mongoose.model("User", UserSchema);
module.exports = User;

