const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/forumComment')

commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

commentRouter.get("/:postId", (req, res, next) => {
    Comment.find({ post: req.params.postId }, (err, comment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

commentRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    req.body.username = req.user.username
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

module.exports = commentRouter