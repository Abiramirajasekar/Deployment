const express = require("express")
require("dotenv").config()
const app = express()
app.use(express.json())
const PORT = process.env.port

app.get("/", (req, res) => {
    res.send("Welcome to the home!")
})

app.listen(PORT, async () => {
    console.log("Listening at PORT")
})