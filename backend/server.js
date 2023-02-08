require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const workOutRoutes = require('./routes/workouts');

// EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// ROUTE HANDLER
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to the app!" })
// })

app.use('/api/workouts', workOutRoutes)

// CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // LISTEN FOR REQUESTS
        app.listen(process.env.PORT, () => {
            console.log("connected to the db and listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



