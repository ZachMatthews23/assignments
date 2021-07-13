const express = require('express')
const thingRouter = express.Router()
const uuid = require('uuid').v4

const things = [
    {
        name: "phone",
        type: "electronics",
        price: 100,
        _id: uuid()
    },
    {
        name: "car",
        type: "vehicle",
        price: 10000,
        _id: uuid()
    },
    {
        name: "tv",
        type: "electronics",
        price: 500,
        _id: uuid()
    },
    {
        name: "truck",
        type: "vehicle",
        price: 15000,
        _id: uuid()
    }
]

thingRouter.route("/search/type")
    .get((req, res) => {
        const type = req.query.type
        const filteredThing = things.filter(thing => thing.type === type)
        res.send(filteredThing)
    })

module.exports = thingRouter