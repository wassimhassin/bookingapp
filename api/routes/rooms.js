import express from "express";
import { GetRoomCount, createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js"; 

const router = express.Router(); 

//roomCount
router.get("/count", verifyAdmin , GetRoomCount); 

//post
router.post("/:hotelid", verifyAdmin, createRoom);
//Update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//delete
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GETAll
router.get("/", getRooms)

export default router 