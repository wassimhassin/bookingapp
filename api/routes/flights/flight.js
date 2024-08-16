import express from "express";
import {
  createFlight,
  deleteFlightById,
  getAllFlight,
  getFlightById,
  getLowerPriceFlight,
  updateFlightById,
} from "../../controllers/flight/flight.js";
import { deleteAll } from "../../controllers/scarping_flight/scraping_flight.js";



const router = express.Router();

router.post("/newFlight", createFlight);
router.get("/getAllFlight", getAllFlight);
router.get("/getFlightById", getFlightById);
router.get("/getLowerPriceFlight", getLowerPriceFlight);
router.get("/updateFlightById", updateFlightById);
router.delete("/deleteFlight", deleteFlightById);
router.delete("/deleteallFlight", deleteAll);



export default router;
