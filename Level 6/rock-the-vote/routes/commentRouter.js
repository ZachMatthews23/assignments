const express = require('express')
const commentRouter = express.Router()
const comment = require('../models/comment.js')
const Comment = require('../models/comment.js')

module.exports = commentRouter