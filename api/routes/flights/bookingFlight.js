import express from "express";
import { cancelBookingFlight, createBookingFlight } from "../../controllers/bookingFlight.js";

const router = express.Router();

router.post("/newBookingFlight", createBookingFlight);

router.post("/cancelBookingFlight", cancelBookingFlight);

export default router