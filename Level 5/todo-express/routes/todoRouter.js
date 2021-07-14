const express = require('express')
const todoRouter = express.Router()
const uuid = require('uuid').v4

const todoList = [
    {
        name: "Garbage",
        description: "Take out the garbage.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjscfB6ydC5hRcLkpCn9Tf92Lv-2HADYCUzA&usqp=CAU",
        completed: false,
        _id: uuid()
    },
    {
        name: "Dogs",
        description: "Take the dogs for a walk.",
        imageUrl: "https://www.cesarsway.com/wp-content/uploads/2015/06/6-tips-for-mastering-the-dog-walk.jpg",
        completed: true,
        _id: uuid()
    },
    {
        name: "Groceries",
        description: "Pick up the groceries from the store.",
        imageUrl: "https://images.theconversation.com/files/282104/original/file-20190701-105182-1q7a7ji.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
        completed: false,
        _id: uuid()
    },
]

todoRouter.route("/")
    .get((req, res) => {
        res.send(todoList)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todoList.push(newTodo)
        res.send(`Successfully added ${newTodo.name} to your to-do list.`)
    })
todoRouter.route("/:todoId")
    .get((req, res) => {
        const todoId = req.params.todoId
        const foundTodo = todoList.find(todo => todo._id === todoId)
        res.send(foundTodo)
    })
    .put((req, res) => {
        const todoId = req.params.todoId
        const updatedInfo = req.body
        const todoIndex = todoList.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(todoList[todoIndex], updatedInfo)
        res.send(updatedTodo)
    })
    .delete((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todoList.findIndex(todo => todo._id === todoId)
        todoList.splice(todoIndex, 1)
        res.send("Successfully removed to-do item from your to-do list.")
    })

module.exports = todoRouter