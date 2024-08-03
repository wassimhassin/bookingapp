import express from "express";
import {
  createFlight,
  deleteFlightById,
  getAllFlight,
  getFlightById,
  getLowerPriceFlight,
  updateFlightById,
} from "../../controllers/flight/flight.js";



const router = express.Router();

router.post("/newFlight", createFlight);
router.get("/getAllFlight", getAllFlight);
router.get("/getFlightById", getFlightById);
router.get("/getLowerPriceFlight", getLowerPriceFlight);
router.get("/updateFlightById", updateFlightById);
router.delete("/deleteFlight", deleteFlightById);



export default router;
