import mongoose, { model } from "mongoose";

const serviceSchemas =  new mongoose.Schema({

    name:{
        type: String,
        required: true
    },


    roomNumber:{
        type: Number,
        required: true
    },

    service:{
        type: String,
        required: true,
        enum:[
            "Room Refresh",
            "More Pillows", 
            "Maintenance", 
            "Shuttle to Airport"
        ]
    },

    custom: {
        type: String,
        required: false,
        maxLength: [120, "No more than 120 characters"]
    }

})


export const service = new model("service", serviceSchemas);