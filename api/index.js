import express from "express";
import dotenv from "dotenv" ; 
import mongoose from "mongoose";
import { Sequelize } from "sequelize";
import {DataTypes} from 'sequelize';
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import mailRoute from "./routes/mail.js"
import airPortRoute from "./routes/flights/airports.js"
import airLineRoute from "./routes/flights/airline.js"
import flightRoute from "./routes/flights/flight.js"
import bookingFlightRoute from "./routes/flights/bookingFlight.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import { syncDatabase } from "./models/scrap/Scraping_Flight.js";




const app = express()
dotenv.config()
//connect to mongo db

const sequelize = new Sequelize('booking_scraping', 'root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
  }); 


const connect = async ()=>{
try{
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb")
    /*await sequelize.authenticate();
    await syncDatabase();
    console.log("connected to mysql")*/
} catch (error) {
   throw error
}
};
mongoose.connection.on("disconnected" , ()=>{
    console.log("mongodb disconnected")
})


// connect to Mysql db



// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute); 
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/mail", mailRoute)
app.use("/api/airport" , airPortRoute)
app.use("/api/airline" , airLineRoute)
app.use("/api/flight" , flightRoute)
app.use("/api/bookinFlight" ,bookingFlightRoute)
app.use((err, req, res ,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || (" something went wrong! ");
    return res.status(errorStatus).json({
        success: false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack,
    });
});

// app.get("/", (req,res)=>{
//     res.send("first request")
// })
app.listen(8000 , ()=>{
    connect()
    console.log("connected .")
})
