const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())

app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bounties',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
    () => console.log('connected to database')
)

app.use("/bounties", require("./routes/bountyRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running.")
})