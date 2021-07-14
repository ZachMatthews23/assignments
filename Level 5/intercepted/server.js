const express = require('express')
const app = express()

app.use(express.json())

app.use("/random", require("./routes/randomRouter.js"))

app.listen(9000, () => {
    console.log("The server is running.")
})