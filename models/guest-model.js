import mongoose, { model } from "mongoose";

const guestSchema = new mongoose.Schema(
{

name: {type: String, required: true},
memberId: {type: Number, required: false},
numberOfGuests:{type: Number, required: true},
checkIn:{type: String, required:true},
checkOut:{type: String, required:true}

});

export const guest = new model("guest",guestSchema);





