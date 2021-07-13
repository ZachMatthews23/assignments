const express = require('express')
const userRouter = express.Router() 
const uuid = require('uuid').v4

const users = [
    {name: "joe", age: 20, _id: uuid()},
    {name: "bob", age: 23, _id: uuid()},
    {name: "jim", age: 20, _id: uuid()},
    {name: "bill", age: 34, _id: uuid()},
    {name: "jim", age: 20, _id: uuid()}
]

// userRouter.get("/", (req, res) => {
//     res.send(users)
// })

// userRouter.post("/", (req, res) => {
//     const newUser = req.body
//     newUser._id = uuid()
//     users.push(newUser)
//     res.send(`Successfully added ${newUser.name} to the database!`)
// })

// OR


userRouter.route("/")
    //GET All
    .get((req, res) => {
        res.send(users)
    })
    // POST One
    .post((req, res) => {
        const newUser = req.body
        newUser._id = uuid()
        users.push(newUser)
        res.send(`Successfully added ${newUser.name} to the database!`)
    })
    //GET One
userRouter.get("/:userId", (req, res) => {
        const userId = req.params.userId
        const foundUser = users.find(user => user._id === userId)
        res.send(foundUser)
    })

module.exports = userRouter