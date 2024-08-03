import express from "express";
import { sendReservationConfirmation } from "../controllers/reservationController.js"


const router = express.Router();


router.post("/send-confirmation-email", sendReservationConfirmation);

export default router 