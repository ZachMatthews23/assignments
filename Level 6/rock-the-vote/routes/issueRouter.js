const express = require('express')
const issueRouter = express.Router()
const issue = require('../models/issue.js')
const Issue = require('../models/issue.js')

module.exports = issueRouter