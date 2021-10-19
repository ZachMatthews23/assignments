const express = require('express')
const workoutRouter = express.Router()
const Workout= require('../models/workout.js')

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

module.exports = workoutRouter