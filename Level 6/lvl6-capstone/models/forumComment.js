const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    commenter: {
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
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)