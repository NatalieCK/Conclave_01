const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  U_fname: {
    type: String,
    required: true,
  },
  U_lname: {
    type: String,
    required: true,
  },
  U_initial: {
    type: String,
    required: true,
  },
  U_email: {
    type: String,
    required: true,
  },
  U_password: {
    type: String,
    required: true,
  },
  U_status: {
    type: String,
    required: true,
  },
  U_logIn: {
    type: String,
    required: true,
  }
});

// = new mongoose.Schema({fname:String,lname:String})

const User = mongoose.model("User", UserSchema);
module.exports = User;

