import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({

    totalRooms: {
        type: Number,
        required: true,
        max: 24
    },

    available: {
        type: Number,
        required: true,
        max: [24,"We're booked for the night!"],
        min: [18, "Available Rooms to Book!"]
    },

    twoDoubleBeds: {
        type: Number,
        required: true,
        max:[12, "No more double beds!"],
        min:[8, "Available Double Beds!"]
    },

    oneKingBed: {
        type: Number,
        required: true,
        max:[12, "No more King Beds!"],
        min:[10, "Available King beds" ]
    },
},

{
    timestamps: true
}

);

const availability = mongoose.model("availability", availabilitySchema)

export default availability