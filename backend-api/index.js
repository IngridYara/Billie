require ('./db')
const express = require('express')
const cors = require('cors')

var postMessageRoutes = require('./controllers/postMessageController')

var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors({origin:'http://localhost:3000'}))
app.use('/', postMessageRoutes)

// initial route
app.get("/", (req, res) => {
  res.send("Welcome to the application.");
});

const PORT = 4000;

app.listen(PORT, () => console.log(`Server started at: ${PORT}`))