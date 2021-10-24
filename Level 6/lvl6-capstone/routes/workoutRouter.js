const express = require('express')
const workoutRouter = express.Router()
const Workout= require('../models/workout.js')
const User = require('../models/user.js')

//Post workout for backend use only
workoutRouter.post("/", (req, res, next) => {
    const newWorkout = new Workout(req.body)
    newWorkout.save((err, savedWorkout) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(savedWorkout)
    })
})

//Get all workouts
workoutRouter.get("/", (req, res, next) => {
    Workout.find((err, workout) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(workout)
    })
})

workoutRouter.get('/:user', (req, res, next) => {
    User.findById({ _id: req.params.user },(err, workouts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(workouts)
    })
})

workoutRouter.put('/addWorkout', (req, res, next) => {
    console.log(req.body)
    User.findByIdAndUpdate({ _id: req.user._id },
        { $push: { workouts: { $each: [req.body]}}},
        { new: true },
        (err, updatedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUser)
    })
})

module.exports = workoutRouter