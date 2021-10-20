const express = require('express')
const postRouter = express.Router()
const Post = require('../models/forumPost.js')

postRouter.get("/", (req, res, next) => {
    Post.find((err, posts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

postRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    req.body.username = req.user.username
    const newPost = new Post(req.body)
    newPost.save((err, savedPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})

postRouter.delete("/:postId", (req, res, next) => {
    Post.findOneAndDelete(
        { _id: req.params.postId },
        (err, deletedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(deletedPost)
        }
    )
})

module.exports = postRouter