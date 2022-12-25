import express from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express()
dotenv.config() // loads the .env file content for usage

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Accept, Client-Security-Token, Accept-Encoding');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoose")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected");
})
// mongoose.connection.on("connected", ()=>{
//     console.log("mongoDB connected");
// })

app.get("/", (req, res) =>{
    res.send("Hello Beast")
})

//middlewares

// whenever any request is made by user it will check all the middlewares
// app.use((req,res,next) =>{
//     console.log("hii middleware");
//     next()
// })
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req,res,next) =>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.sendStatus(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack, // this will give more message about error.
    })
}) // error handling middleware

app.listen(8000, () => {
    connect()
    console.log("Server is running on port 8000");
})