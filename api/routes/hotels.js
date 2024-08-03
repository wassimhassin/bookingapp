import express from "express";
import { CreatHotel, DeleteHotel, GetAllHotels, GetHotel, GetHotelCount, UpdateHotel, allHotels, countByCity,  countByCityName,  countByType, getAllHotelByCountry, getHotelRooms } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router(); 

//hotelCount
router.get("/count", verifyAdmin, GetHotelCount);

//post
router.post("/", verifyAdmin,CreatHotel);
//Update
router.put("/:id", verifyAdmin,UpdateHotel);
//delete
router.delete("/:id",verifyAdmin, DeleteHotel);
//GET
router.get("/find/:id", GetHotel);
//GETAll
router.get("/", GetAllHotels);

router.get("/countByCityName" , countByCityName);


router.get("/countByCity", countByCity);
router.get("/countByType",countByType);
router.get("/room/:id",getHotelRooms);

router.post("/allhotel", getAllHotelByCountry)

router.get("/getAllhotels" , allHotels)

export default router 