const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid').v4
const Bounty = require('../models/bounties.js')

// const bounties = [
//     {
//         fName: "Old Ben",
//         lName: "Kenobi",
//         isAlive: false,
//         payout: 10000 ,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         fName: "Emporer", 
//         lName: "Palpotine",
//         isAlive: true,
//         payout: 1000000,
//         type: "Sith",
//         _id: uuid()
//     },
//     {
//         fName: "Han",
//         lName: "Solo",
//         isAlive: false,
//         payout: 100000000,
//         type: "Un-affiliated",
//         _id: uuid()
//     },
// ]

// bountyRouter.route("/")
//     .get((req, res) => {
//         res.send(bounties)  
//     })
//     .post((req, res) => {
//         const newBounty = req.body
//         newBounty._id = uuid()
//         bounties.push(newBounty)
//         res.send(newBounty)
//     })

bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, saveBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(saveBounty)
    })
})

// bountyRouter.get("/:bountyId", (req, res, next) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     if(!foundBounty){
//         const error = new Error(`Bounty with the ID of ${bountyId} was not found.`)
//         return next(error)
//     }

//     res.send(foundBounty)
// })

// bountyRouter.delete("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     bounties.splice(bountyIndex, 1)
//     res.send(`Successfully completed bounty.`)
// })

bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully removed bounty on ${deletedBounty.fName} ${deletedBounty.lName}`)
    })
})

// bountyRouter.put("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const updatedInfo = req.body
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(bounties[bountyIndex], updatedInfo)
//     res.send(updatedBounty)
// })

bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId },
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

bountyRouter.get("/search/affiliation", (req, res, next) => {
    Bounty.find({affiliation: req.query.affiliation}, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

module.exports = bountyRouter