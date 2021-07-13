const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid').v4

const bounties = [
    {
        fName: "Old Ben",
        lName: "Kenobi",
        isAlive: false,
        payout: 10000 ,
        type: "Jedi",
        _id: uuid()
    },
    {
        fName: "Darth",
        lName: "Palpotine",
        isAlive: true,
        payout: 1000000,
        type: "Sith",
        _id: uuid()
    },
    {
        fName: "Han",
        lName: "Solo",
        isAlive: false,
        payout: 100000000,
        type: "Un-affiliated",
        _id: uuid()
    },
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`A new bounty has been set on ${newBounty.fName} ${newBounty.lName} for ${newBounty.payout} Imperial Credits.`)
    })

    module.exports = bountyRouter