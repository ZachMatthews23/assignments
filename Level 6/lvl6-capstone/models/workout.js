const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Workout", workoutSchema)