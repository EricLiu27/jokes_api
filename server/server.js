// 1. import all dependencies  
// - express, create app with express, .env (THIS IS NEW)
const express = require("express")
const app = express()
require('dotenv').config();
const mongoose = require('mongoose');




const port = process.env.PORT
// 4. import mongoose.config (after config is complete)
require("./config/mongoose.config");

// 2. configure express with app.use

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// 5. import routes (after routes are done -- may need to complete the models & the backbone of the controller first)
const AllMyUserRoutes = require("./routes/joke.routes");
AllMyUserRoutes(app);
// 3. listen to the port at the end

app.listen(port, () => console.log(`Listening on port:${port}`))