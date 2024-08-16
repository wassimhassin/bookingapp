import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema(
  {
    logo:{
      type: String,
    },
    flightNumber: {
      type: String,
    },
    airlineId: {
      type: String,
      
    },
    originAirportId: {
      type: String,
      
    },
    destinationAirportId: {
      type: String,
      
    },
    departureTime: {
      type: String,
    },
    arrivalTime: {
      type: String,
    },
    duration: {
      type: String,
    },
    price: {
      type: String,
    },
    seatsAvailable: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Flight", FlightSchema);
