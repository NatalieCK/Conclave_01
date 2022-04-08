const { response } = require("express");
const express = require("express");
const router = express.Router();

// below is where you edit variable names based on your variable/file structure names
const Post = require("../models/post");

// GET (all) Posts route
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts)
});

// POST new Post
router.post('/addpost', async (req, res) => {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save()
    res.json(savedPost)
});

// GET (single) Post by ID
router.get('/get/:id', async (req, res) => {
    const IDed_Post = await Post.findById({ _id : req.params.id });
    res.json(IDed_Post)
});

// DELETE a Post by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_Post = await Post.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_Post)
});

// UPDATE a Post by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_Post = await Post.findByIdAndUpdate(
        { _id : req.params.id }, { $set: req.body }
    );
    res.json(toUpdate_Post)
});

module.exports = router