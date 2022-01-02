const express = require("express");
const {dbConnect} = require('./config/dbConnect.js')
const dotenv = require('dotenv');
const { route } = require("./routes/todoRoute.js");
dotenv.config()

const app = express();

// DBCONNECT
dbConnect()

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.use('/api', route)

// SERVER
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Listening port is ${PORT}`))
