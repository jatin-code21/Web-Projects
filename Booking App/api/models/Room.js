import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }], // its an array beacause more than 1 room may be present of same above charactersitics, so to identify each room uniquely we use room number
}, { timestamps: true }) // timestamps will add createdAt and updatedAt fields

export default mongoose.model("Room", RoomSchema)