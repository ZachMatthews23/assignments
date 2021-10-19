const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    muscle: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model("Workout", workoutSchema)