const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('express-jwt')

authRouter.post('/signup', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("That username is already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.toString(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser })
        })
    })
})

authRouter.post('/logn', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error("Incorrect username and or password"))
        }
        if(req.body.password !== user.password){
            res.status(403)
            return next(new Error("Incorrect username and or password"))
        }
        const token = jwt.toString(user.toObject(), process.env.SECRET)
        return res.status(200).send({ token, user})
    })
})

module.exports = authRouter