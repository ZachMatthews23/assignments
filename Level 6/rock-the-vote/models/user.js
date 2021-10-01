const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrpyt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    userImg: {
        type: String
    }
})

userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrpyt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrpyt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        return callback(null, isMatch)
    })
}

userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)