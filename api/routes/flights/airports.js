import express from "express"
import { createAirport } from "../../controllers/flight/airport.js";

const router = express.Router(); 


router.post("/newAirport", createAirport);

export default router;