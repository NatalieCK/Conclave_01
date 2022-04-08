const { response } = require("express");
const express = require("express");
const router = express.Router();

// below is where you edit variable names based on your variable/file structure names
const Comment = require("../models/comment");

// GET (all) Comments route
router.get('/', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments)
});

// COMMENT new Comment
router.post('/addcomment', async (req, res) => {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save()
    res.json(savedComment)
});

// GET (single) Comment by ID
router.get('/get/:id', async (req, res) => {
    const IDed_Comment = await Comment.findById({ _id : req.params.id });
    res.json(IDed_Comment)
});

// DELETE a Comment by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_Comment = await Comment.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_Comment)
});

// UPDATE a Comment by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_Comment = await Comment.findByIdAndUpdate(
        { _id : req.params.id }, { $set: req.body }
    );
    res.json(toUpdate_Comment)
});

module.exports = router