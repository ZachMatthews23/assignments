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
        fName: "Emporer",
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
        res.send(newBounty)
    })
    bountyRouter.get("/:bountyId", (req, res, next) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        if(!foundBounty){
            const error = new Error(`Bounty with the ID of ${bountyId} was not found.`)
            return next(error)
        }

        res.send(foundBounty)
    })
    bountyRouter.delete("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully completed bounty.`)
    })
    bountyRouter.post("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const updatedInfo = req.body
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], updatedInfo)

        res.send(updatedBounty)
    })

    module.exports = bountyRouter