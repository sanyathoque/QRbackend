const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
var cors = require('cors');
const cookieParser = require("cookie-parser")
//Import Routes
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
dotenv.config()

//Connect to DB
mongoose.connect("mongodb+srv://Sanyat:miraMurati@cluster0.r6sod.mongodb.net/social?retryWrites=true&w=majority", { useNewUrlParser: true },
() => { console.log('connected to dB') })

//Middeware
app.use(express.json())
app.use(cookieParser());
app.use(cors());
//Route Middlewares
app.use('/api/auth',authRoute)
// app.use('/api/clients',usersRoute)


app.listen(5000, () => console.log('Server Up and Running'))

