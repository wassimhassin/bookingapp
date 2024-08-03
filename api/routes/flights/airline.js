import express from "express"
import { createAirLine } from "../../controllers/flight/airline.js";
import { createAirLineSQL } from "../../controllers/scarping_flight/scraping_flight.js";

const router = express.Router(); 


router.post("/newAirline", createAirLine);
router.get("/airline", createAirLineSQL)

export default router;