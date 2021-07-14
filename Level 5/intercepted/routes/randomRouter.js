const express = require('express')
const randomRouter = express.Router()
const uuid = require('uuid').v4

const random = [
    {
        item: "ball",
        type: "football",
        _id: uuid()
    },
    {
        item: "ball",
        type: "soccer ball",
        _id: uuid()
    },
]

randomRouter.route("/")
    .get((req, res, next) => {
        console.log(random)
        next()
    })
    .get((req, res, next) => {
        res.send(random)
    })

module.exports = randomRouter