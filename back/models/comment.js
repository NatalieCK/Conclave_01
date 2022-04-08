const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  commentContent: {
    type: String,
    required: true,
  },
  commentLikes: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  postID: {
    type: String,
    required: true,
  }
});
// = new mongoose.Schema({fname:String,lname:String})
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;