const express = require('express');
const app = express();
const port = process.env.PORT || 3002;


app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log("listening to the port no 3000")
})