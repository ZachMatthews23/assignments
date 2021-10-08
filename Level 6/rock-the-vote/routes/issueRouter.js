const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue.js')
const Comment = require('../models/comment.js')

issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.user._id }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    req.body.username = req.user.username
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.user._id },
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
        }
    )
})

issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

issueRouter.put('/upvote/:issueId', (req, res, next) => {
    Issue.findByIdAndUpdate({ _id: req.params.issueId },
        { $inc: {upvote: 1 },
            $push: { votedUsers:
                { $each: [req.user.username] }
        }},
        { new: true },
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        })
})

issueRouter.put('/downvote/:issueId', (req, res, next) => {
    Issue.findByIdAndUpdate({ _id: req.params.issueId },
        { $inc: {downvote: 1 },
            $push: { votedUsers:
                { $each: [req.user.username] }
        }},
        { new: true },
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        })
})

issueRouter.put('/:issueId/comments', (req, res, next) => {
    const newComment = new Comment(req.body)

    Issue.findByIdAndUpdate({ _id: req.params.issueId, user: req.user._id }, (err, updatedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        updatedIssue.comments.push(newComment)
        updatedIssue.populate('comments')
        updatedIssue.save()
        
        return res.status(200).send(updatedIssue)
    })
})

module.exports = issueRouter