const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  P_userID: {
    type: String,
    required: true,
  },
  P_fname: {
    type: String,
    required: true,
  },
  P_lname: {
    type: String,
    required: true,
  },
  P_initial: {
    type: String,
    required: true,
  },
  P_status: {
    type: String,
    required: true,
  },
  P_content: {
    type: String,
    required: true,
  },
  P_likes: {
    type: String,
    required: true,
  },
  P_comments: {
    type: String,
    required: true,
  }
});

// = new mongoose.Schema({fname:String,lname:String})

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
