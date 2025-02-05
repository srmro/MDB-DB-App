import mongoose from "mongoose";

const AvailabilitySchema = new mongoose.Schema({

    totalRooms: {
        type: Number,
        required: true,
        max: 24
    },

    available: {
        type: Number,
        required: true,
        max: [24,"We're booked for the night!"],
        // min: [18, "Available Rooms to Book!"]
    },

    twoDoubleBeds: {
        type: Number,
        required: true,
        max:[12, "No more double beds!"],
        // min:[11, "Available Double Beds!"]
    },

    oneKingBed: {
        type: Number,
        required: true,
        max:[12, "No more King Beds!"],
        // min:[11, "Available King beds" ]
    },
},

{
    timestamps: true
}

);

const Availability = mongoose.model("Availability", AvailabilitySchema)

export default Availability