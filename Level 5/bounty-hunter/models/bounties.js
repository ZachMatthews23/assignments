const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    affiliation: {
        type: String,
        enum: ['Jedi', 'Sith'],
        required: true
    },
    payout: Number
})

module.exports = mongoose.model("Bounty", bountySchema) 