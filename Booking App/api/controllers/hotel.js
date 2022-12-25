import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body) // req is data taken by the user

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel) // res is data sent back to the user
    } catch (err) {
        next(err)
        // res.status(500).json(err)
    }
}

export const updatedHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel) // res is data sent back to the user
    } catch (err) {
        next(err)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted") // res is data sent back to the user
    } catch (err) {
        next(err)
    }
}

export const getHotels = async (req, res, next) => {
    // const failed = true
    // if (failed) return next(createError(401, "You are not authenticated"))

    // console.log("Hi I am a hotel route");
    // return next() // here return is very important else when the request is made the next middleware will not be called and the server will be crashed

    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min | 1, $lt: max || 999 }
        }).limit(req.query.limit)
        res.status(200).json(hotels) // res is data sent back to the user
    } catch (err) {
        // res.status(500).json(err)
        next(err)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel) // res is data sent back to the user
    } catch (err) {
        // res.status(500).json(err)
        next(err)
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city })
        }))
        res.status(200).json(list)
    } catch (err) {

        next(err)
    }
}

export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });

        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
};

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map((room) => {
            return Room.findById(room)
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}