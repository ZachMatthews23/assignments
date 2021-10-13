const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    username: {
        type: String
    },
    postDate: {
        type: Date,
        default: Date.now()
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default: 0
    },
    votedUsers: [{
        type: String
    }]
})

module.exports = mongoose.model("Post", postSchema)