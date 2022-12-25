import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel, countByCity, countByType, getHotelRooms } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin,createHotel)
//UPDATE
router.put("/:id", verifyAdmin,updatedHotel)
//DELETE
router.delete("/:id", verifyAdmin,deleteHotel)
//GET
router.get("/find/:id", getHotel)
//GET ALL
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)

export default router