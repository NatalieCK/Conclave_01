const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userID: {
        type: String, 
        required: true},
    postLikes: {
        type: String,
        required: true},
    comments: {
        type: String,
        required: true},
    postContent: {
        type: String,
        required: true}
});

// = new mongoose.Schema({fname:String,lname:String})

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
