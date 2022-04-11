const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  C_postID: {
    type: String,
    required: true,
  },
  C_userID: {
    type: String,
    required: true,
  },
  C_fname: {
    type: String,
    required: true,
  },
  C_lname: {
    type: String,
    required: true,
  },
  C_initial: {
    type: String,
    required: true,
  },
  C_status: {
    type: String,
    required: true,
  },
  C_content: {
    type: String,
    required: true,
  },
  C_likes: {
    type: Number,
    required: true,
  }
});
// = new mongoose.Schema({fname:String,lname:String})
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;